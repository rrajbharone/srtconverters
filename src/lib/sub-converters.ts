import { parseTimestamp } from './text-to-srt';

export interface SrtToSubOptions {
  format?: 'microdvd' | 'subviewer';
  fps?: number; // e.g. 23.976, 24, 25, 29.97, 30, etc. Default: 25
  includeFpsHeader?: boolean; // MicroDVD {1}{1}25.000 header
  cleanTags?: boolean; // Strip HTML formatting tags like <i>, <b>
}

export interface SubToSrtOptions {
  fps?: number; // Fallback frame rate if no {1}{1}FPS header is present. Default: 25
  preserveFormatting?: boolean; // Preserve basic italics/bold tags. Default: true
}

export interface SubConversionResult {
  srt: string;
  detectedFormat: 'microdvd' | 'subviewer' | 'vobsub' | 'unknown';
  detectedFps?: number;
  cueCount: number;
  error?: string;
}

export interface ParsedSrtCue {
  index: number;
  startMs: number;
  endMs: number;
  lines: string[];
}

export interface SubtitleCue {
  startMs: number;
  endMs: number;
  text: string;
}

/**
 * Format a millisecond duration into SubViewer 2.0 centisecond timestamp: HH:MM:SS.cs
 */
export function formatSubViewerTimestamp(ms: number): string {
  if (ms < 0) ms = 0;
  const totalSeconds = Math.floor(ms / 1000);
  const centiseconds = Math.floor((ms % 1000) / 10);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const hh = String(hours).padStart(2, '0');
  const mm = String(minutes).padStart(2, '0');
  const ss = String(seconds).padStart(2, '0');
  const cs = String(centiseconds).padStart(2, '0');

  return `${hh}:${mm}:${ss}.${cs}`;
}

/**
 * Format millisecond timestamp to SubRip standard: HH:MM:SS,mmm
 */
export function formatSrtTimestamp(ms: number): string {
  if (ms < 0) ms = 0;
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
 * Parse SubViewer timestamp (HH:MM:SS.cs or HH:MM:SS,cs) to milliseconds
 */
export function parseSubViewerTimestamp(ts: string): number {
  const parts = ts.trim().split(':');
  if (parts.length < 3) return 0;

  const hours = parseInt(parts[0], 10) || 0;
  const minutes = parseInt(parts[1], 10) || 0;

  const secAndFrac = parts[2].split(/[.,]/);
  const seconds = parseInt(secAndFrac[0], 10) || 0;

  let ms = 0;
  if (secAndFrac[1]) {
    // Pad to 3 digits (e.g. '5' -> 500ms, '50' -> 500ms, '12' -> 120ms)
    const rawFrac = secAndFrac[1].padEnd(3, '0').slice(0, 3);
    ms = parseInt(rawFrac, 10) || 0;
  }

  return (hours * 3600 + minutes * 60 + seconds) * 1000 + ms;
}

/**
 * Parse an SRT subtitle string into structured cues
 */
export function parseSrtCues(srtContent: string): ParsedSrtCue[] {
  const normalized = srtContent.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();
  if (!normalized) return [];

  const rawBlocks = normalized.split(/\n\s*\n/);
  const cues: ParsedSrtCue[] = [];
  let autoIndex = 1;

  for (const block of rawBlocks) {
    const rawLines = block.split('\n').map((l) => l.trim()).filter((l) => l.length > 0);
    if (rawLines.length === 0) continue;

    let timeLineIdx = -1;
    for (let i = 0; i < rawLines.length; i++) {
      if (rawLines[i].includes('-->')) {
        timeLineIdx = i;
        break;
      }
    }

    if (timeLineIdx === -1) continue;

    const timeLine = rawLines[timeLineIdx];
    const timeParts = timeLine.split('-->');
    if (timeParts.length !== 2) continue;

    const startStr = timeParts[0].trim();
    const endStr = timeParts[1].trim().split(/\s+/)[0];

    const startMs = parseTimestamp(startStr);
    const endMs = parseTimestamp(endStr);

    if (endMs <= startMs) continue;

    let cueIndex = autoIndex;
    if (timeLineIdx > 0) {
      const parsedNum = parseInt(rawLines[0], 10);
      if (!isNaN(parsedNum)) {
        cueIndex = parsedNum;
      }
    }

    const textLines = rawLines.slice(timeLineIdx + 1);
    if (textLines.length === 0) continue;

    cues.push({
      index: cueIndex,
      startMs,
      endMs,
      lines: textLines,
    });

    autoIndex++;
  }

  cues.sort((a, b) => a.startMs - b.startMs);
  return cues;
}

/**
 * Clean HTML styling tags from subtitle text or normalize formatting
 */
function cleanSubtitleText(text: string, cleanTags = true): string {
  if (cleanTags) {
    return text.replace(/<\/?[^>]+(>|$)/g, '').trim();
  }
  return text.trim();
}

/**
 * Convert SRT to MicroDVD SUB format:
 * {start_frame}{end_frame}Line 1|Line 2
 */
export function convertSrtToMicroDvd(
  srtContent: string,
  fps = 25,
  includeFpsHeader = true,
  cleanTags = true
): string {
  const cues = parseSrtCues(srtContent);
  if (cues.length === 0) return '';

  const safeFps = fps > 0 ? fps : 25;
  const outputLines: string[] = [];

  if (includeFpsHeader) {
    const fpsStr = Number.isInteger(safeFps) ? safeFps.toFixed(3) : safeFps.toString();
    outputLines.push(`{1}{1}${fpsStr}`);
  }

  for (const cue of cues) {
    const startFrame = Math.max(1, Math.round((cue.startMs / 1000) * safeFps));
    let endFrame = Math.max(1, Math.round((cue.endMs / 1000) * safeFps));

    if (endFrame <= startFrame) {
      endFrame = startFrame + 1;
    }

    const processedLines = cue.lines
      .map((line) => cleanSubtitleText(line, cleanTags))
      .filter((line) => line.length > 0);

    if (processedLines.length === 0) continue;

    const cueContent = processedLines.join('|');
    outputLines.push(`{${startFrame}}{${endFrame}}${cueContent}`);
  }

  return outputLines.join('\n');
}

/**
 * Convert SRT to SubViewer 2.0 SUB format
 */
export function convertSrtToSubViewer(srtContent: string, cleanTags = true): string {
  const cues = parseSrtCues(srtContent);
  if (cues.length === 0) return '';

  const header = [
    '[INFORMATION]',
    '[TITLE]Converted with SRTConverters',
    '[AUTHOR]SRTConverters',
    '[SOURCE]',
    '[PRG]SRT to SUB Converter',
    '[FILEPATH]',
    '[DELAY]0',
    '[CD TRACK]0',
    '[COMMENT]Free Online Subtitle Converter',
    '[END INFORMATION]',
    '[SUBTITLE]',
    '[COLF]&H00FFFFFF,[STYLE]no,[SIZE]18,[FONT]Arial',
  ].join('\n');

  const cueBlocks: string[] = [];

  for (const cue of cues) {
    const startTs = formatSubViewerTimestamp(cue.startMs);
    const endTs = formatSubViewerTimestamp(cue.endMs);

    const processedLines = cue.lines
      .map((line) => cleanSubtitleText(line, cleanTags))
      .filter((line) => line.length > 0);

    if (processedLines.length === 0) continue;

    const textJoined = processedLines.join('[br]');
    cueBlocks.push(`${startTs},${endTs}\n${textJoined}`);
  }

  return `${header}\n${cueBlocks.join('\n\n')}`;
}

/**
 * Main convertSrtToSub function supporting options
 */
export function convertSrtToSub(srtContent: string, options?: SrtToSubOptions): string {
  const format = options?.format || 'microdvd';
  const cleanTags = options?.cleanTags ?? true;

  if (format === 'subviewer') {
    return convertSrtToSubViewer(srtContent, cleanTags);
  }

  const fps = options?.fps ?? 25;
  const includeFpsHeader = options?.includeFpsHeader ?? true;

  return convertSrtToMicroDvd(srtContent, fps, includeFpsHeader, cleanTags);
}

/**
 * Check if content is a binary VobSub file
 */
export function isBinaryVobSub(content: string): boolean {
  // Check for common MPEG/VobSub binary signatures or high ratio of null bytes
  if (content.includes('\x00\x00\x01\xba') || content.includes('\x00\x00\x01\xbd')) {
    return true;
  }
  // Check for null bytes in initial chunk
  const sample = content.slice(0, 500);
  let nullCount = 0;
  for (let i = 0; i < sample.length; i++) {
    if (sample.charCodeAt(i) === 0) nullCount++;
  }
  return nullCount > 5;
}

/**
 * Detect SUB format and any embedded frame rate header
 */
export function detectSubFormat(content: string): {
  format: 'microdvd' | 'subviewer' | 'vobsub' | 'unknown';
  detectedFps?: number;
} {
  if (isBinaryVobSub(content)) {
    return { format: 'vobsub' };
  }

  const trimmed = content.trim();
  if (!trimmed) {
    return { format: 'unknown' };
  }

  // Check for SubViewer signature
  if (
    trimmed.toUpperCase().includes('[INFORMATION]') ||
    trimmed.toUpperCase().includes('[SUBTITLE]') ||
    /\d{1,2}:\d{2}:\d{2}[.,]\d{1,3},\d{1,2}:\d{2}:\d{2}[.,]\d{1,3}/.test(trimmed)
  ) {
    return { format: 'subviewer' };
  }

  // Check for MicroDVD format ({123}{456}text)
  const lines = trimmed.split(/\r?\n/).map((l) => l.trim()).filter((l) => l.length > 0);
  let detectedFps: number | undefined;

  for (const line of lines) {
    // Check for FPS header: {1}{1}25.000 or {1}{1}23.976
    const fpsMatch = line.match(/^\{1\}\{1\}([0-9]+(?:\.[0-9]+)?)/);
    if (fpsMatch) {
      const parsed = parseFloat(fpsMatch[1]);
      if (parsed > 0 && parsed <= 120) {
        detectedFps = parsed;
      }
    }
  }

  const hasMicroDvdCues = lines.some((l) => /^\{\d+\}\{\d+\}/.test(l));
  if (hasMicroDvdCues || detectedFps !== undefined) {
    return { format: 'microdvd', detectedFps };
  }

  return { format: 'unknown' };
}

/**
 * Format subtitle text by handling MicroDVD tags ({Y:i}, {Y:b}) and vertical pipes
 */
function cleanMicroDvdText(rawText: string, preserveFormatting = true): string {
  let text = rawText;

  if (preserveFormatting) {
    // Translate MicroDVD italic and bold tags
    text = text.replace(/\{Y:i\}/gi, '<i>');
    text = text.replace(/\{y:i\}/gi, '<i>');
    text = text.replace(/\{Y:b\}/gi, '<b>');
    text = text.replace(/\{y:b\}/gi, '<b>');
    text = text.replace(/\{Y:u\}/gi, '<u>');
    text = text.replace(/\{y:u\}/gi, '<u>');
  }

  // Remove any remaining MicroDVD proprietary tags like {c:$0000FF}, {P:...}, etc.
  text = text.replace(/\{[^\}]*\}/g, '');

  // Split by pipe character (|) and rejoin as newlines
  return text
    .split('|')
    .map((l) => l.trim())
    .filter((l) => l.length > 0)
    .join('\n');
}

/**
 * Clean SubViewer text by converting [br] tags and cleaning metadata
 */
function cleanSubViewerText(rawText: string): string {
  let text = rawText.replace(/\[br\]/gi, '\n');
  return text
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.length > 0)
    .join('\n');
}

/**
 * Convert MicroDVD SUB to SRT
 */
export function convertMicroDvdToSrt(
  content: string,
  fps = 25,
  preserveFormatting = true
): { cues: SubtitleCue[]; detectedFps?: number } {
  const lines = content.split(/\r?\n/).map((l) => l.trim()).filter((l) => l.length > 0);
  const cues: SubtitleCue[] = [];
  let effectiveFps = fps > 0 ? fps : 25;
  let headerDetectedFps: number | undefined;

  for (const line of lines) {
    // Check for FPS header
    const fpsMatch = line.match(/^\{1\}\{1\}([0-9]+(?:\.[0-9]+)?)/);
    if (fpsMatch) {
      const parsed = parseFloat(fpsMatch[1]);
      if (parsed > 0 && parsed <= 120) {
        headerDetectedFps = parsed;
        effectiveFps = parsed;
      }
      continue;
    }

    // Match dialogue line: {start}{end}text
    const cueMatch = line.match(/^\{(\d+)\}\{(\d+)\}(.*)$/);
    if (!cueMatch) continue;

    const startFrame = parseInt(cueMatch[1], 10);
    const endFrame = parseInt(cueMatch[2], 10);
    const rawText = cueMatch[3] || '';

    if (isNaN(startFrame) || isNaN(endFrame) || endFrame <= startFrame) continue;

    const startMs = Math.round((startFrame / effectiveFps) * 1000);
    const endMs = Math.round((endFrame / effectiveFps) * 1000);

    const cleanedText = cleanMicroDvdText(rawText, preserveFormatting);
    if (!cleanedText) continue;

    cues.push({ startMs, endMs, text: cleanedText });
  }

  cues.sort((a, b) => a.startMs - b.startMs);
  return { cues, detectedFps: headerDetectedFps };
}

/**
 * Convert SubViewer 2.0 / 1.0 SUB to SRT
 */
export function convertSubViewerToSrt(
  content: string
): { cues: SubtitleCue[] } {
  const lines = content.split(/\r?\n/).map((l) => l.trim());
  const cues: SubtitleCue[] = [];
  let inSubtitleSection = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line) continue;

    if (line.toUpperCase().startsWith('[SUBTITLE]')) {
      inSubtitleSection = true;
      continue;
    }

    // Skip other metadata sections or styles
    if (line.startsWith('[') && line.endsWith(']')) {
      continue;
    }

    // Check for SubViewer timestamp line: 00:01:20.10,00:01:23.45
    const timeMatch = line.match(/^(\d{1,2}:\d{2}:\d{2}[.,]\d{1,3})\s*,\s*(\d{1,2}:\d{2}:\d{2}[.,]\d{1,3})/);
    if (timeMatch) {
      const startMs = parseSubViewerTimestamp(timeMatch[1]);
      const endMs = parseSubViewerTimestamp(timeMatch[2]);

      if (endMs <= startMs) continue;

      // Lookahead for subtitle dialogue text until next timestamp or block
      const textLines: string[] = [];
      let j = i + 1;
      while (j < lines.length && lines[j] && !lines[j].match(/^\d{1,2}:\d{2}:\d{2}[.,]\d{1,3}\s*,/)) {
        if (!lines[j].startsWith('[')) {
          textLines.push(lines[j]);
        }
        j++;
      }
      i = j - 1;

      const rawText = textLines.join('\n');
      const cleanedText = cleanSubViewerText(rawText);
      if (!cleanedText) continue;

      cues.push({ startMs, endMs, text: cleanedText });
    }
  }

  cues.sort((a, b) => a.startMs - b.startMs);
  return { cues };
}

/**
 * Main convertSubToSrt function supporting auto-detection, fallback FPS, and error feedback
 */
export function convertSubToSrt(
  subContent: string,
  options?: SubToSrtOptions
): SubConversionResult {
  const detection = detectSubFormat(subContent);

  if (detection.format === 'vobsub') {
    return {
      srt: '',
      detectedFormat: 'vobsub',
      cueCount: 0,
      error: 'This file appears to be a binary VobSub (.sub) file from a DVD. VobSub contains bitmap image graphics rather than text subtitles and requires OCR software (such as Subtitle Edit) to convert to SRT.',
    };
  }

  const effectiveFps = options?.fps ?? detection.detectedFps ?? 25;
  const preserveFormatting = options?.preserveFormatting ?? true;

  let cues: SubtitleCue[] = [];
  let detectedFps = detection.detectedFps;

  if (detection.format === 'subviewer') {
    const res = convertSubViewerToSrt(subContent);
    cues = res.cues;
  } else {
    // Default to MicroDVD parsing
    const res = convertMicroDvdToSrt(subContent, effectiveFps, preserveFormatting);
    cues = res.cues;
    if (res.detectedFps) detectedFps = res.detectedFps;
  }

  if (cues.length === 0) {
    // If no cues found, try the other parser as a fallback
    if (detection.format === 'subviewer') {
      const res = convertMicroDvdToSrt(subContent, effectiveFps, preserveFormatting);
      cues = res.cues;
    } else {
      const res = convertSubViewerToSrt(subContent);
      cues = res.cues;
    }
  }

  const srtOutput = cues
    .map((cue, idx) => {
      const num = idx + 1;
      const startStr = formatSrtTimestamp(cue.startMs);
      const endStr = formatSrtTimestamp(cue.endMs);
      return `${num}\n${startStr} --> ${endStr}\n${cue.text}`;
    })
    .join('\n\n');

  return {
    srt: srtOutput,
    detectedFormat: detection.format,
    detectedFps,
    cueCount: cues.length,
  };
}
