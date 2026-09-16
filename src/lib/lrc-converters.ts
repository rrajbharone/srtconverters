export interface LrcToSrtOptions {
  maxDurationSeconds?: number; // default 5.0s (maximum duration for a lyric cue when next cue is far away)
  defaultDurationSeconds?: number; // default 3.5s (fallback for last cue)
  gapMs?: number; // default 50ms gap before next cue starts
  applyOffsetTag?: boolean; // default true (respect [offset: +/-ms])
  manualOffsetMs?: number; // default 0
  stripMetadataTags?: boolean; // default true (do not output [ar:], [ti:], etc. as lyrics)
  stripEnhancedWordTags?: boolean; // default true (strip <00:12.34> word-level tags)
}

export interface LrcCue {
  index: number;
  startMs: number;
  endMs: number;
  startTimeFormatted: string;
  endTimeFormatted: string;
  text: string;
}

export interface LrcMetadata {
  artist?: string; // [ar: ...]
  title?: string; // [ti: ...]
  album?: string; // [al: ...]
  author?: string; // [by: ...]
  offset?: number; // [offset: +/-ms]
  length?: string; // [length: mm:ss]
  other: Record<string, string>;
}

export interface LrcConversionResult {
  srt: string;
  cueCount: number;
  metadata: LrcMetadata;
  warnings: string[];
}

/**
 * Format milliseconds into standard SubRip timestamp format: HH:MM:SS,mmm
 */
export function formatMsToSrtTime(totalMs: number): string {
  if (isNaN(totalMs) || totalMs < 0) totalMs = 0;
  const hours = Math.floor(totalMs / 3600000);
  const remainderAfterHours = totalMs % 3600000;
  const minutes = Math.floor(remainderAfterHours / 60000);
  const remainderAfterMinutes = remainderAfterHours % 60000;
  const seconds = Math.floor(remainderAfterMinutes / 1000);
  const milliseconds = Math.floor(remainderAfterMinutes % 1000);

  const hh = String(hours).padStart(2, '0');
  const mm = String(minutes).padStart(2, '0');
  const ss = String(seconds).padStart(2, '0');
  const mmm = String(milliseconds).padStart(3, '0');

  return `${hh}:${mm}:${ss},${mmm}`;
}

/**
 * Parse an LRC timestamp tag into milliseconds.
 * Supports:
 * - [mm:ss.xx] (centiseconds, e.g. [01:23.45] -> 83450 ms)
 * - [mm:ss.xxx] (milliseconds, e.g. [01:23.456] -> 83456 ms)
 * - [hh:mm:ss.xx] or [m:ss.xx]
 * - [mm:ss:xx] or [mm:ss]
 */
export function parseLrcTimestampToMs(timeStr: string): number | null {
  if (!timeStr) return null;
  // Clean brackets if present
  const clean = timeStr.replace(/[\[\]]/g, '').trim();

  // Pattern: (optional hours:)? minutes : seconds (. fraction)?
  const match = clean.match(/^(?:(\d+):)?(\d+):(\d+)(?:[.:](\d+))?$/);
  if (!match) return null;

  const hours = match[1] ? parseInt(match[1], 10) : 0;
  const minutes = parseInt(match[2], 10) || 0;
  const seconds = parseInt(match[3], 10) || 0;
  const fractionStr = match[4] || '0';

  let millis = 0;
  if (fractionStr.length === 1) {
    millis = parseInt(fractionStr, 10) * 100;
  } else if (fractionStr.length === 2) {
    millis = parseInt(fractionStr, 10) * 10;
  } else if (fractionStr.length === 3) {
    millis = parseInt(fractionStr, 10);
  } else {
    millis = parseInt(fractionStr.substring(0, 3), 10);
  }

  return (hours * 3600 + minutes * 60 + seconds) * 1000 + millis;
}

/**
 * Sample LRC content for the "Load Sample" button.
 */
export const SAMPLE_LRC = `[ti:Amazing Grace]
[ar:Judy Collins]
[al:Whales & Nightingales]
[by:SRTConverters]
[offset:0]

[00:05.20]Amazing grace, how sweet the sound
[00:11.80]That saved a wretch like me
[00:18.50]I once was lost, but now am found
[00:25.20]Was blind, but now I see

[00:33.40]'Twas grace that taught my heart to fear
[00:40.10]And grace my fears relieved
[00:47.00]How precious did that grace appear
[00:54.30]The hour I first believed

[01:03.00][01:17.50]Through many dangers, toils and snares
[01:10.20]I have already come
[01:25.00]His grace has brought me safe thus far
[01:32.40]And grace will lead me home`;

/**
 * Convert LRC content to valid SubRip (.srt) subtitle format.
 */
export function convertLrcToSrt(lrcContent: string, options: LrcToSrtOptions = {}): LrcConversionResult {
  const warnings: string[] = [];
  const normalized = (lrcContent || '').replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();

  const metadata: LrcMetadata = { other: {} };

  if (!normalized) {
    return {
      srt: '',
      cueCount: 0,
      metadata,
      warnings: ['Input LRC content is empty.'],
    };
  }

  const maxDurationMs = (options.maxDurationSeconds ?? 5.0) * 1000;
  const defaultDurationMs = (options.defaultDurationSeconds ?? 3.5) * 1000;
  const gapMs = options.gapMs ?? 50;
  const applyOffsetTag = options.applyOffsetTag !== false;
  const manualOffsetMs = options.manualOffsetMs ?? 0;
  const stripEnhancedWordTags = options.stripEnhancedWordTags !== false;

  const lines = normalized.split('\n');
  const rawCues: { startMs: number; text: string }[] = [];

  // First pass: extract metadata and identify offset
  let lrcOffsetMs = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Check for ID tags: [tag:value]
    const tagMatch = trimmed.match(/^\[([a-zA-Z]+)\s*:\s*([^\]]*)\]$/);
    if (tagMatch) {
      const tag = tagMatch[1].toLowerCase();
      const val = tagMatch[2].trim();

      if (tag === 'ar') metadata.artist = val;
      else if (tag === 'ti') metadata.title = val;
      else if (tag === 'al') metadata.album = val;
      else if (tag === 'by') metadata.author = val;
      else if (tag === 'length') metadata.length = val;
      else if (tag === 'offset') {
        const parsedOffset = parseInt(val, 10);
        if (!isNaN(parsedOffset)) {
          metadata.offset = parsedOffset;
          if (applyOffsetTag) {
            lrcOffsetMs = parsedOffset;
          }
        }
      } else {
        metadata.other[tag] = val;
      }
      continue;
    }

    // Check for timestamped lines: e.g. [00:12.34]text or [00:12.34][00:15.67]repeated text
    const timestampRegex = /\[(\d{1,2}:\d{2}(?:[.:]\d{1,3})?)\]/g;
    const matches = Array.from(trimmed.matchAll(timestampRegex));

    if (matches.length > 0) {
      // Remove all timestamps from the line to get pure lyric text
      let lyricText = trimmed.replace(timestampRegex, '').trim();

      // Optionally strip enhanced word-level timing tags like <00:12.45>
      if (stripEnhancedWordTags) {
        lyricText = lyricText.replace(/<[^>]+>/g, '').trim();
      }

      for (const m of matches) {
        const timeStr = m[1];
        const baseMs = parseLrcTimestampToMs(timeStr);
        if (baseMs !== null) {
          // In standard LRC specification: positive offset means delay lyrics (add ms)
          const adjustedMs = Math.max(0, baseMs + lrcOffsetMs + manualOffsetMs);
          rawCues.push({
            startMs: adjustedMs,
            text: lyricText,
          });
        }
      }
    }
  }

  if (rawCues.length === 0) {
    return {
      srt: '',
      cueCount: 0,
      metadata,
      warnings: ['No valid LRC timestamps [mm:ss.xx] could be parsed.'],
    };
  }

  // Sort raw cues by start time
  rawCues.sort((a, b) => a.startMs - b.startMs);

  // Second pass: Filter out empty lyric lines unless they act as clear points
  // Also calculate end times
  const finalCues: LrcCue[] = [];
  let cueNumber = 1;

  for (let i = 0; i < rawCues.length; i++) {
    const current = rawCues[i];
    const text = current.text.trim();

    // If text is empty, it acts as a marker to close the previous cue early
    if (!text) {
      if (finalCues.length > 0) {
        const prev = finalCues[finalCues.length - 1];
        if (prev.endMs > current.startMs) {
          prev.endMs = Math.max(prev.startMs + 1000, current.startMs - gapMs);
          prev.endTimeFormatted = formatMsToSrtTime(prev.endMs);
        }
      }
      continue;
    }

    // Determine end time from next cue's start time
    let calculatedEndMs = 0;
    const nextCue = rawCues.slice(i + 1).find((c) => c.startMs > current.startMs);

    if (nextCue) {
      const distanceToNext = nextCue.startMs - current.startMs;
      if (distanceToNext > maxDurationMs) {
        // Long instrumental pause: cap at maxDurationMs
        calculatedEndMs = current.startMs + maxDurationMs;
      } else {
        // Normal lyric flow: end just before the next cue
        calculatedEndMs = Math.max(current.startMs + 1000, nextCue.startMs - gapMs);
      }
    } else {
      // Last cue: estimate duration based on text length (natural reading speed)
      const estimatedMs = Math.min(Math.max(text.length * 65, defaultDurationMs), maxDurationMs);
      calculatedEndMs = current.startMs + estimatedMs;
    }

    finalCues.push({
      index: cueNumber++,
      startMs: current.startMs,
      endMs: calculatedEndMs,
      startTimeFormatted: formatMsToSrtTime(current.startMs),
      endTimeFormatted: formatMsToSrtTime(calculatedEndMs),
      text,
    });
  }

  // Build SRT blocks
  const srtBlocks = finalCues.map((cue, idx) => {
    return `${idx + 1}\n${cue.startTimeFormatted} --> ${cue.endTimeFormatted}\n${cue.text}`;
  });

  const srt = srtBlocks.join('\n\n') + (srtBlocks.length > 0 ? '\n' : '');

  return {
    srt,
    cueCount: finalCues.length,
    metadata,
    warnings,
  };
}
