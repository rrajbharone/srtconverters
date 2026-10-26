/**
 * Blu-ray PGS (.sup) Binary Subtitle Parser & Synthetic Test Generator
 *
 * PGS Specification:
 * - Each segment starts with 2 bytes magic 0x50 0x47 ("PG")
 * - 4 bytes PTS (Presentation Time Stamp) in 90kHz clock units: time_ms = Math.round(pts / 90)
 * - 4 bytes DTS (Decode Time Stamp)
 * - 1 byte Segment Type:
 *     0x14: Palette Definition Segment (PDS)
 *     0x15: Object Definition Segment (ODS)
 *     0x16: Presentation Composition Segment (PCS)
 *     0x17: Window Definition Segment (WDS)
 *     0x80: End of Display Set Segment (END)
 * - 2 bytes Segment Length
 * - Payload data of segmentLength bytes
 */

export interface PgsSegmentHeader {
  magic: number; // 0x5047
  pts: number;
  dts: number;
  type: number;
  length: number;
}

export interface PgsPaletteEntry {
  id: number;
  y: number;
  cr: number;
  cb: number;
  alpha: number;
  // Precomputed RGBA
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface PgsCompositionObject {
  objectId: number;
  windowId: number;
  cropped: boolean;
  x: number;
  y: number;
  cropX?: number;
  cropY?: number;
  cropWidth?: number;
  cropHeight?: number;
}

export interface PgsPcs {
  pts: number;
  dts: number;
  width: number;
  height: number;
  frameRate: number;
  compositionNumber: number;
  compositionState: number; // 0x00: Normal, 0x40: Acquisition Point, 0x80: Epoch Start
  paletteUpdateFlag: boolean;
  paletteId: number;
  objects: PgsCompositionObject[];
}

export interface PgsOds {
  objectId: number;
  version: number;
  sequenceFlag: number;
  dataLength: number;
  width: number;
  height: number;
  rleData: Uint8Array;
}

export interface DecodedPgsCue {
  id: number;
  startMs: number;
  endMs: number;
  width: number;
  height: number;
  x: number;
  y: number;
  // Decompressed image pixel data (RGBA, 4 bytes per pixel)
  rgbaData: Uint8ClampedArray;
  text?: string;
  confidence?: number;
}

export interface SupParseResult {
  success: boolean;
  cues: DecodedPgsCue[];
  totalSegments: number;
  videoWidth: number;
  videoHeight: number;
  warnings: string[];
  error?: string;
}

/**
 * Convert YCbCr + Alpha into RGBA
 * Standard ITU-R BT.709 / BT.601 color conversion
 */
export function ycbcrToRgba(y: number, cb: number, cr: number, alpha: number): { r: number; g: number; b: number; a: number } {
  const yVal = y;
  const cbVal = cb - 128;
  const crVal = cr - 128;

  let r = yVal + 1.402 * crVal;
  let g = yVal - 0.344136 * cbVal - 0.714136 * crVal;
  let b = yVal + 1.772 * cbVal;

  r = Math.max(0, Math.min(255, Math.round(r)));
  g = Math.max(0, Math.min(255, Math.round(g)));
  b = Math.max(0, Math.min(255, Math.round(b)));
  const a = Math.max(0, Math.min(255, alpha));

  return { r, g, b, a };
}

/**
 * Format milliseconds to standard SRT timestamp format: HH:MM:SS,mmm
 */
export function formatSrtTimestamp(ms: number): string {
  if (ms < 0 || isNaN(ms)) ms = 0;
  const totalSeconds = Math.floor(ms / 1000);
  const milliseconds = Math.floor(ms % 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const hh = String(hours).padStart(2, '0');
  const mm = String(minutes).padStart(2, '0');
  const ss = String(seconds).padStart(2, '0');
  const mmm = String(milliseconds).padStart(3, '0');

  return `${hh}:${mm}:${ss},${mmm}`;
}

/**
 * Decode PGS RLE compressed bitmap bytes into 8-bit palette indices
 */
export function decodePgsRle(rleData: Uint8Array, width: number, height: number): Uint8Array {
  const totalPixels = width * height;
  const pixels = new Uint8Array(totalPixels);
  let srcPos = 0;
  let dstPos = 0;

  while (srcPos < rleData.length && dstPos < totalPixels) {
    const b1 = rleData[srcPos++];
    if (b1 !== 0) {
      // Non-zero single pixel
      pixels[dstPos++] = b1;
    } else {
      // Escape sequence
      if (srcPos >= rleData.length) break;
      const b2 = rleData[srcPos++];
      if (b2 === 0) {
        // End of line marker in PGS (pad to next line if needed)
        const remainder = dstPos % width;
        if (remainder !== 0) {
          const fillCount = width - remainder;
          for (let f = 0; f < fillCount && dstPos < totalPixels; f++) {
            pixels[dstPos++] = 0;
          }
        }
      } else {
        const flag = b2 & 0xc0;
        let runLength = 0;
        let colorIndex = 0;

        if (flag === 0x00) {
          // Run of zeros, length = b2 & 0x3F
          runLength = b2 & 0x3f;
          colorIndex = 0;
        } else if (flag === 0x40) {
          // Run of zeros, length = ((b2 & 0x3F) << 8) | b3
          if (srcPos < rleData.length) {
            const b3 = rleData[srcPos++];
            runLength = ((b2 & 0x3f) << 8) | b3;
            colorIndex = 0;
          }
        } else if (flag === 0x80) {
          // Run of colorIndex b3, length = b2 & 0x3F
          runLength = b2 & 0x3f;
          if (srcPos < rleData.length) {
            colorIndex = rleData[srcPos++];
          }
        } else if (flag === 0xc0) {
          // Run of colorIndex b4, length = ((b2 & 0x3F) << 8) | b3
          if (srcPos + 1 < rleData.length) {
            const b3 = rleData[srcPos++];
            const b4 = rleData[srcPos++];
            runLength = ((b2 & 0x3f) << 8) | b3;
            colorIndex = b4;
          }
        }

        const maxToFill = Math.min(runLength, totalPixels - dstPos);
        for (let i = 0; i < maxToFill; i++) {
          pixels[dstPos++] = colorIndex;
        }
      }
    }
  }

  return pixels;
}

/**
 * Parse a raw Blu-ray PGS SUP buffer (Uint8Array or ArrayBuffer)
 */
export function parseSup(data: Uint8Array | ArrayBuffer): SupParseResult {
  const bytes = data instanceof Uint8Array ? data : new Uint8Array(data);
  const warnings: string[] = [];

  if (bytes.length < 13) {
    return {
      success: false,
      cues: [],
      totalSegments: 0,
      videoWidth: 1920,
      videoHeight: 1080,
      warnings,
      error: 'File is too small to be a valid Blu-ray PGS (.sup) file (minimum header size is 13 bytes).',
    };
  }

  // Check magic bytes 0x50 0x47 ("PG")
  if (bytes[0] !== 0x50 || bytes[1] !== 0x47) {
    return {
      success: false,
      cues: [],
      totalSegments: 0,
      videoWidth: 1920,
      videoHeight: 1080,
      warnings,
      error: 'Invalid header magic. This file does not start with "PG" (0x50 0x47), which is required for Blu-ray PGS SUP subtitles.',
    };
  }

  let offset = 0;
  let totalSegments = 0;
  let videoWidth = 1920;
  let videoHeight = 1080;

  // Active state during display set parsing
  let currentPcs: PgsPcs | null = null;
  const currentPalettes: Map<number, Map<number, PgsPaletteEntry>> = new Map();
  const currentObjects: Map<number, { width: number; height: number; rleBytes: number[] }> = new Map();

  interface CandidateCue {
    pcs: PgsPcs;
    palette: Map<number, PgsPaletteEntry>;
    objects: Array<{
      objectId: number;
      x: number;
      y: number;
      width: number;
      height: number;
      rleData: Uint8Array;
    }>;
  }

  const rawCues: CandidateCue[] = [];
  const cueEndTimes: Map<number, number> = new Map();

  while (offset + 13 <= bytes.length) {
    // Magic check
    if (bytes[offset] !== 0x50 || bytes[offset + 1] !== 0x47) {
      warnings.push(`Lost segment sync at byte offset ${offset}. Scanning for next "PG" magic...`);
      let syncFound = false;
      for (let s = offset + 1; s + 13 <= bytes.length; s++) {
        if (bytes[s] === 0x50 && bytes[s + 1] === 0x47) {
          offset = s;
          syncFound = true;
          break;
        }
      }
      if (!syncFound) break;
    }

    const view = new DataView(bytes.buffer, bytes.byteOffset + offset, bytes.byteLength - offset);
    const pts = view.getUint32(2, false);
    const dts = view.getUint32(6, false);
    const segType = bytes[offset + 10];
    const segLength = view.getUint16(11, false);

    offset += 13;
    totalSegments++;

    if (offset + segLength > bytes.length) {
      warnings.push(`Truncated segment type 0x${segType.toString(16)} at byte offset ${offset - 13}. File ends prematurely.`);
      break;
    }

    const payload = bytes.subarray(offset, offset + segLength);
    const pView = new DataView(bytes.buffer, bytes.byteOffset + offset, segLength);

    switch (segType) {
      case 0x16: {
        // Presentation Composition Segment (PCS)
        if (segLength >= 11) {
          const width = pView.getUint16(0, false);
          const height = pView.getUint16(2, false);
          const frameRate = payload[4];
          const compositionNumber = pView.getUint16(5, false);
          const compositionState = payload[7];
          const paletteUpdateFlag = (payload[8] & 0x80) !== 0;
          const paletteId = payload[9];
          const objectCount = payload[10];

          if (width > 0) videoWidth = width;
          if (height > 0) videoHeight = height;

          const objects: PgsCompositionObject[] = [];
          let objOffset = 11;
          for (let i = 0; i < objectCount && objOffset + 8 <= segLength; i++) {
            const objectId = pView.getUint16(objOffset, false);
            const windowId = payload[objOffset + 2];
            const cropped = (payload[objOffset + 3] & 0x80) !== 0;
            const x = pView.getUint16(objOffset + 4, false);
            const y = pView.getUint16(objOffset + 6, false);
            objOffset += 8;

            let cropX, cropY, cropWidth, cropHeight;
            if (cropped && objOffset + 8 <= segLength) {
              cropX = pView.getUint16(objOffset, false);
              cropY = pView.getUint16(objOffset + 2, false);
              cropWidth = pView.getUint16(objOffset + 4, false);
              cropHeight = pView.getUint16(objOffset + 6, false);
              objOffset += 8;
            }

            objects.push({
              objectId,
              windowId,
              cropped,
              x,
              y,
              cropX,
              cropY,
              cropWidth,
              cropHeight,
            });
          }

          // If we had a previous open candidate cue and this PCS has objectCount === 0 (or compositionState === 0),
          // it marks the clearance (end time) of that cue!
          const currentPtsMs = Math.round(pts / 90);
          if (rawCues.length > 0) {
            const lastCueIdx = rawCues.length - 1;
            if (!cueEndTimes.has(lastCueIdx)) {
              if (objectCount === 0 || compositionState === 0x00) {
                cueEndTimes.set(lastCueIdx, currentPtsMs);
              }
            }
          }

          currentPcs = {
            pts,
            dts,
            width,
            height,
            frameRate,
            compositionNumber,
            compositionState,
            paletteUpdateFlag,
            paletteId,
            objects,
          };

          // If compositionState is Epoch Start (0x80), reset caches
          if (compositionState === 0x80) {
            currentPalettes.clear();
            currentObjects.clear();
          }
        }
        break;
      }

      case 0x14: {
        // Palette Definition Segment (PDS)
        if (segLength >= 2) {
          const paletteId = payload[0];
          // const paletteVersion = payload[1];
          let paletteMap = currentPalettes.get(paletteId);
          if (!paletteMap) {
            paletteMap = new Map();
            currentPalettes.set(paletteId, paletteMap);
          }

          let pOffset = 2;
          while (pOffset + 5 <= segLength) {
            const entryId = payload[pOffset];
            const y = payload[pOffset + 1];
            const cr = payload[pOffset + 2];
            const cb = payload[pOffset + 3];
            const alpha = payload[pOffset + 4];
            pOffset += 5;

            const rgba = ycbcrToRgba(y, cb, cr, alpha);
            paletteMap.set(entryId, {
              id: entryId,
              y,
              cr,
              cb,
              alpha,
              ...rgba,
            });
          }
        }
        break;
      }

      case 0x15: {
        // Object Definition Segment (ODS)
        if (segLength >= 11) {
          const objectId = pView.getUint16(0, false);
          const version = payload[2];
          const seqFlag = payload[3];
          // const isFirst = (seqFlag & 0x80) !== 0;
          // const isLast = (seqFlag & 0x40) !== 0;

          const dataLength = (payload[4] << 16) | (payload[5] << 8) | payload[6];
          const width = pView.getUint16(7, false);
          const height = pView.getUint16(9, false);

          let obj = currentObjects.get(objectId);
          if (!obj) {
            obj = { width, height, rleBytes: [] };
            currentObjects.set(objectId, obj);
          }
          if (width > 0) obj.width = width;
          if (height > 0) obj.height = height;

          const rleChunk = payload.subarray(11);
          for (let b = 0; b < rleChunk.length; b++) {
            obj.rleBytes.push(rleChunk[b]);
          }
        } else if (segLength >= 4) {
          // Continuation fragment
          const objectId = pView.getUint16(0, false);
          let obj = currentObjects.get(objectId);
          if (obj) {
            const rleChunk = payload.subarray(4);
            for (let b = 0; b < rleChunk.length; b++) {
              obj.rleBytes.push(rleChunk[b]);
            }
          }
        }
        break;
      }

      case 0x80: {
        // End of Display Set Segment (END)
        // If currentPcs has objects, record this cue
        if (currentPcs && currentPcs.objects.length > 0) {
          const paletteMap = currentPalettes.get(currentPcs.paletteId) || new Map();
          const activeObjs: CandidateCue['objects'] = [];

          for (const compObj of currentPcs.objects) {
            const cachedObj = currentObjects.get(compObj.objectId);
            if (cachedObj && cachedObj.width > 0 && cachedObj.height > 0 && cachedObj.rleBytes.length > 0) {
              activeObjs.push({
                objectId: compObj.objectId,
                x: compObj.x,
                y: compObj.y,
                width: cachedObj.width,
                height: cachedObj.height,
                rleData: new Uint8Array(cachedObj.rleBytes),
              });
            }
          }

          if (activeObjs.length > 0) {
            rawCues.push({
              pcs: currentPcs,
              palette: new Map(paletteMap),
              objects: activeObjs,
            });
          }
        }
        break;
      }
    }

    offset += segLength;
  }

  // If no cues found
  if (rawCues.length === 0) {
    return {
      success: false,
      cues: [],
      totalSegments,
      videoWidth,
      videoHeight,
      warnings,
      error: 'No displayable subtitle cues (PCS/ODS) found in the file. The SUP file may contain only presentation metadata or corrupted packets.',
    };
  }

  // Render cues into pixel data and assign end times
  const decodedCues: DecodedPgsCue[] = [];

  for (let i = 0; i < rawCues.length; i++) {
    const raw = rawCues[i];
    const startMs = Math.round(raw.pcs.pts / 90);

    let endMs = cueEndTimes.get(i);
    if (!endMs || endMs <= startMs) {
      // If no explicit end time was encountered, default to start of next cue or 3.5 seconds later
      if (i + 1 < rawCues.length) {
        const nextStart = Math.round(rawCues[i + 1].pcs.pts / 90);
        endMs = Math.min(startMs + 3500, Math.max(startMs + 1000, nextStart - 50));
      } else {
        endMs = startMs + 3500;
      }
    }

    // Combine all objects in this cue into a bounding box canvas
    let minX = Infinity;
    let minY = Infinity;
    let maxX = 0;
    let maxY = 0;

    for (const obj of raw.objects) {
      if (obj.x < minX) minX = obj.x;
      if (obj.y < minY) minY = obj.y;
      if (obj.x + obj.width > maxX) maxX = obj.x + obj.width;
      if (obj.y + obj.height > maxY) maxY = obj.y + obj.height;
    }

    const cueWidth = Math.max(1, maxX - minX);
    const cueHeight = Math.max(1, maxY - minY);
    const rgbaData = new Uint8ClampedArray(cueWidth * cueHeight * 4);

    // Render each object onto the combined canvas
    for (const obj of raw.objects) {
      const paletteIndices = decodePgsRle(obj.rleData, obj.width, obj.height);
      const offsetX = obj.x - minX;
      const offsetY = obj.y - minY;

      for (let y = 0; y < obj.height; y++) {
        for (let x = 0; x < obj.width; x++) {
          const pIdx = paletteIndices[y * obj.width + x];
          if (pIdx === 0) continue; // Transparency

          let entry = raw.palette.get(pIdx);
          // If palette entry not found or transparent, default to white with black outline for high OCR contrast
          let r = 255, g = 255, b = 255, a = 255;
          if (entry && entry.a > 10) {
            r = entry.r;
            g = entry.g;
            b = entry.b;
            a = entry.a;
          }

          const targetX = offsetX + x;
          const targetY = offsetY + y;
          if (targetX >= 0 && targetX < cueWidth && targetY >= 0 && targetY < cueHeight) {
            const dstIdx = (targetY * cueWidth + targetX) * 4;
            rgbaData[dstIdx] = r;
            rgbaData[dstIdx + 1] = g;
            rgbaData[dstIdx + 2] = b;
            rgbaData[dstIdx + 3] = a;
          }
        }
      }
    }

    decodedCues.push({
      id: i + 1,
      startMs,
      endMs,
      width: cueWidth,
      height: cueHeight,
      x: minX,
      y: minY,
      rgbaData,
    });
  }

  return {
    success: true,
    cues: decodedCues,
    totalSegments,
    videoWidth,
    videoHeight,
    warnings,
  };
}

/**
 * Generate a valid synthetic Blu-ray PGS SUP file with real sample subtitle cues.
 * Useful for 1-click in-browser testing without requiring users to download external Blu-ray rips.
 */
export function generateSampleSupFile(): Uint8Array {
  // We will build 2 cues:
  // Cue 1: "Welcome to SRTConverters.com" (00:00:01,000 --> 00:00:04,500)
  // Cue 2: "Blu-ray SUP OCR to SubRip Subtitles" (00:00:05,000 --> 00:00:08,200)

  const chunks: Uint8Array[] = [];

  function writeSegment(pts: number, dts: number, type: number, payload: Uint8Array) {
    const seg = new Uint8Array(13 + payload.length);
    const view = new DataView(seg.buffer);
    seg[0] = 0x50; // 'P'
    seg[1] = 0x47; // 'G'
    view.setUint32(2, pts, false);
    view.setUint32(6, dts, false);
    seg[10] = type;
    view.setUint16(11, payload.length, false);
    seg.set(payload, 13);
    chunks.push(seg);
  }

  // Simple bitmap font renderer for 8-bit RLE to make recognizable letters
  function createBitmapTextRle(text: string): { width: number; height: number; rle: Uint8Array } {
    // 8x12 blocky letter patterns for letters used in sample
    const charWidth = 10;
    const charHeight = 16;
    const width = Math.max(10, text.length * charWidth);
    const height = charHeight;
    const grid = new Uint8Array(width * height);

    // Simple pixel rendering for letters
    for (let c = 0; c < text.length; c++) {
      const char = text[c];
      const startX = c * charWidth + 1;
      if (char !== ' ') {
        // Draw top bar
        for (let x = startX; x < startX + 7; x++) {
          grid[2 * width + x] = 1;
          grid[3 * width + x] = 1;
          grid[8 * width + x] = 1;
          grid[13 * width + x] = 1;
        }
        // Draw side bars
        for (let y = 2; y < 14; y++) {
          grid[y * width + startX] = 1;
          grid[y * width + startX + 1] = 1;
          grid[y * width + startX + 6] = 1;
          grid[y * width + startX + 7] = 1;
        }
      }
    }

    // Encode to PGS RLE
    const rleBytes: number[] = [];
    for (let y = 0; y < height; y++) {
      let x = 0;
      while (x < width) {
        const val = grid[y * width + x];
        let run = 1;
        while (x + run < width && grid[y * width + x + run] === val && run < 16000) {
          run++;
        }
        if (val === 0) {
          // Zero run
          if (run <= 63) {
            rleBytes.push(0x00, run);
          } else {
            rleBytes.push(0x00, 0x40 | ((run >> 8) & 0x3f), run & 0xff);
          }
        } else {
          // Color run (index 1)
          if (run === 1) {
            rleBytes.push(1);
          } else if (run <= 63) {
            rleBytes.push(0x00, 0x80 | (run & 0x3f), 1);
          } else {
            rleBytes.push(0x00, 0xc0 | ((run >> 8) & 0x3f), run & 0xff, 1);
          }
        }
        x += run;
      }
      // End of line marker
      rleBytes.push(0x00, 0x00);
    }

    return { width, height, rle: new Uint8Array(rleBytes) };
  }

  // PDS payload with 2 entries: 0 = transparent, 1 = white
  const pdsPayload = new Uint8Array(2 + 2 * 5);
  pdsPayload[0] = 0; // palette ID
  pdsPayload[1] = 0; // version
  // Entry 0 (transparent)
  pdsPayload[2] = 0; // ID
  pdsPayload[3] = 0; // Y
  pdsPayload[4] = 128; // Cr
  pdsPayload[5] = 128; // Cb
  pdsPayload[6] = 0; // Alpha 0
  // Entry 1 (white)
  pdsPayload[7] = 1; // ID
  pdsPayload[8] = 235; // Y
  pdsPayload[9] = 128; // Cr
  pdsPayload[10] = 128; // Cb
  pdsPayload[11] = 255; // Alpha 255

  // Cue 1: 1000ms (PTS = 90,000)
  const cue1Text = createBitmapTextRle('WELCOME TO SRTCONVERTERS');
  const ods1Payload = new Uint8Array(11 + cue1Text.rle.length);
  const ods1View = new DataView(ods1Payload.buffer);
  ods1View.setUint16(0, 1, false); // objId 1
  ods1Payload[2] = 0; // version
  ods1Payload[3] = 0xc0; // seqFlag first+last
  const len1 = cue1Text.rle.length + 4;
  ods1Payload[4] = (len1 >> 16) & 0xff;
  ods1Payload[5] = (len1 >> 8) & 0xff;
  ods1Payload[6] = len1 & 0xff;
  ods1View.setUint16(7, cue1Text.width, false);
  ods1View.setUint16(9, cue1Text.height, false);
  ods1Payload.set(cue1Text.rle, 11);

  // PCS 1 (Show) at 90,000 (1000ms)
  const pcs1Payload = new Uint8Array(11 + 8);
  const pcs1View = new DataView(pcs1Payload.buffer);
  pcs1View.setUint16(0, 1920, false);
  pcs1View.setUint16(2, 1080, false);
  pcs1Payload[4] = 0x10; // 24fps
  pcs1View.setUint16(5, 1, false); // comp num
  pcs1Payload[7] = 0x80; // Epoch start
  pcs1Payload[8] = 0x00;
  pcs1Payload[9] = 0x00; // palette 0
  pcs1Payload[10] = 1; // 1 object
  pcs1View.setUint16(11, 1, false); // object 1
  pcs1Payload[13] = 0;
  pcs1Payload[14] = 0;
  pcs1View.setUint16(15, 840, false); // x
  pcs1View.setUint16(17, 950, false); // y

  // Clear PCS 1 at 405,000 (4500ms)
  const pcs1Clear = new Uint8Array(11);
  const pcs1ClearView = new DataView(pcs1Clear.buffer);
  pcs1ClearView.setUint16(0, 1920, false);
  pcs1ClearView.setUint16(2, 1080, false);
  pcs1Clear[4] = 0x10;
  pcs1ClearView.setUint16(5, 2, false);
  pcs1Clear[7] = 0x00; // Normal
  pcs1Clear[8] = 0x00;
  pcs1Clear[9] = 0x00;
  pcs1Clear[10] = 0; // 0 objects = clear

  // Cue 2: 5000ms (PTS = 450,000)
  const cue2Text = createBitmapTextRle('BLU-RAY SUP TO SRT CONVERTER');
  const ods2Payload = new Uint8Array(11 + cue2Text.rle.length);
  const ods2View = new DataView(ods2Payload.buffer);
  ods2View.setUint16(0, 2, false);
  ods2Payload[2] = 0;
  ods2Payload[3] = 0xc0;
  const len2 = cue2Text.rle.length + 4;
  ods2Payload[4] = (len2 >> 16) & 0xff;
  ods2Payload[5] = (len2 >> 8) & 0xff;
  ods2Payload[6] = len2 & 0xff;
  ods2View.setUint16(7, cue2Text.width, false);
  ods2View.setUint16(9, cue2Text.height, false);
  ods2Payload.set(cue2Text.rle, 11);

  // PCS 2 at 450,000 (5000ms)
  const pcs2Payload = new Uint8Array(11 + 8);
  const pcs2View = new DataView(pcs2Payload.buffer);
  pcs2View.setUint16(0, 1920, false);
  pcs2View.setUint16(2, 1080, false);
  pcs2Payload[4] = 0x10;
  pcs2View.setUint16(5, 3, false);
  pcs2Payload[7] = 0x80;
  pcs2Payload[8] = 0x00;
  pcs2Payload[9] = 0x00;
  pcs2Payload[10] = 1;
  pcs2View.setUint16(11, 2, false);
  pcs2Payload[13] = 0;
  pcs2Payload[14] = 0;
  pcs2View.setUint16(15, 800, false);
  pcs2View.setUint16(17, 950, false);

  // Clear PCS 2 at 738,000 (8200ms)
  const pcs2Clear = new Uint8Array(11);
  const pcs2ClearView = new DataView(pcs2Clear.buffer);
  pcs2ClearView.setUint16(0, 1920, false);
  pcs2ClearView.setUint16(2, 1080, false);
  pcs2Clear[4] = 0x10;
  pcs2ClearView.setUint16(5, 4, false);
  pcs2Clear[7] = 0x00;
  pcs2Clear[8] = 0x00;
  pcs2Clear[9] = 0x00;
  pcs2Clear[10] = 0;

  const emptyEnd = new Uint8Array(0);

  // Write Cue 1 display set
  writeSegment(90000, 90000, 0x16, pcs1Payload);
  writeSegment(90000, 90000, 0x14, pdsPayload);
  writeSegment(90000, 90000, 0x15, ods1Payload);
  writeSegment(90000, 90000, 0x80, emptyEnd);

  // Write Cue 1 clear
  writeSegment(405000, 405000, 0x16, pcs1Clear);
  writeSegment(405000, 405000, 0x80, emptyEnd);

  // Write Cue 2 display set
  writeSegment(450000, 450000, 0x16, pcs2Payload);
  writeSegment(450000, 450000, 0x14, pdsPayload);
  writeSegment(450000, 450000, 0x15, ods2Payload);
  writeSegment(450000, 450000, 0x80, emptyEnd);

  // Write Cue 2 clear
  writeSegment(738000, 738000, 0x16, pcs2Clear);
  writeSegment(738000, 738000, 0x80, emptyEnd);

  // Combine chunks
  const totalLen = chunks.reduce((acc, c) => acc + c.length, 0);
  const finalBytes = new Uint8Array(totalLen);
  let cur = 0;
  for (const c of chunks) {
    finalBytes.set(c, cur);
    cur += c.length;
  }

  return finalBytes;
}

/**
 * Convert an array of cues with text and timestamps into SubRip (.srt) string
 */
export function cuesToSrt(cues: Array<{ startMs: number; endMs: number; text: string }>): string {
  const blocks: string[] = [];

  cues.forEach((cue, index) => {
    const cueNum = index + 1;
    const startStr = formatSrtTimestamp(cue.startMs);
    const endStr = formatSrtTimestamp(cue.endMs);
    const text = (cue.text || '').trim();

    blocks.push(`${cueNum}\n${startStr} --> ${endStr}\n${text}`);
  });

  return blocks.join('\n\n') + '\n';
}
