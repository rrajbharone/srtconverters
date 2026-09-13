export interface SbvToSrtOptions {
  decodeHtmlEntities?: boolean;
  removeSoundDescriptions?: boolean;
  cleanWhitespace?: boolean;
}

export interface SbvCue {
  index: number;
  startMs: number;
  endMs: number;
  startTimeFormatted: string;
  endTimeFormatted: string;
  text: string;
}

export interface SbvConversionResult {
  srt: string;
  cueCount: number;
  warnings: string[];
}

/**
 * Decode common HTML entities and numeric character references frequently found in YouTube captions.
 */
export function decodeHtmlEntities(text: string): string {
  if (!text) return '';
  return text
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, dec) => {
      try {
        return String.fromCharCode(parseInt(dec, 10));
      } catch {
        return _;
      }
    })
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => {
      try {
        return String.fromCharCode(parseInt(hex, 16));
      } catch {
        return _;
      }
    });
}

/**
 * Parse an SBV time string into milliseconds.
 * Supports:
 * - H:MM:SS.mmm or HH:MM:SS.mmm (e.g., 0:01:23.456)
 * - MM:SS.mmm (e.g., 01:23.456)
 * - Dot or comma decimal separators
 */
export function parseSbvTimecodeToMs(timeStr: string): number {
  if (!timeStr) return 0;
  const clean = timeStr.trim().replace(',', '.');
  const dotIndex = clean.lastIndexOf('.');
  let mainTime = clean;
  let msStr = '000';

  if (dotIndex !== -1) {
    mainTime = clean.substring(0, dotIndex);
    msStr = clean.substring(dotIndex + 1);
  }

  // Normalize milliseconds to 3 digits
  if (msStr.length === 1) msStr += '00';
  else if (msStr.length === 2) msStr += '0';
  else if (msStr.length > 3) msStr = msStr.substring(0, 3);
  const ms = parseInt(msStr, 10) || 0;

  const parts = mainTime.split(':').map((p) => parseInt(p, 10) || 0);
  let totalSeconds = 0;

  if (parts.length === 3) {
    // Hours:Minutes:Seconds
    totalSeconds = parts[0] * 3600 + parts[1] * 60 + parts[2];
  } else if (parts.length === 2) {
    // Minutes:Seconds
    totalSeconds = parts[0] * 60 + parts[1];
  } else if (parts.length === 1) {
    // Seconds only
    totalSeconds = parts[0];
  }

  return totalSeconds * 1000 + ms;
}

/**
 * Format milliseconds into standard SubRip timestamp: HH:MM:SS,mmm
 */
export function formatSrtTimestamp(ms: number): string {
  if (ms < 0 || isNaN(ms)) ms = 0;
  const totalSeconds = Math.floor(ms / 1000);
  const milliseconds = ms % 1000;
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
 * Main conversion function: converts YouTube SBV text to standard SubRip SRT format.
 */
export function convertSbvToSrt(sbvContent: string, options: SbvToSrtOptions = {}): SbvConversionResult {
  const {
    decodeHtmlEntities: shouldDecode = true,
    removeSoundDescriptions = false,
    cleanWhitespace = true,
  } = options;

  if (!sbvContent || !sbvContent.trim()) {
    return { srt: '', cueCount: 0, warnings: [] };
  }

  const warnings: string[] = [];
  // Normalize Windows/Mac line endings to \n
  const normalized = sbvContent.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const rawLines = normalized.split('\n');

  // SBV timestamp regex:
  // e.g., 0:00:01.000,0:00:04.500 or 00:01:23.45,00:01:28.90
  const sbvTimestampRegex = /^(\d{1,2}:\d{2}:\d{2}(?:[.,]\d{1,3})?|\d{1,2}:\d{2}(?:[.,]\d{1,3})?)\s*,\s*(\d{1,2}:\d{2}:\d{2}(?:[.,]\d{1,3})?|\d{1,2}:\d{2}(?:[.,]\d{1,3})?)$/;

  const cues: Array<{ startMs: number; endMs: number; lines: string[] }> = [];
  let currentCue: { startMs: number; endMs: number; lines: string[] } | null = null;

  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i];
    const trimmed = line.trim();

    // Check if this line is an SBV timestamp pair
    const match = trimmed.match(sbvTimestampRegex);
    if (match) {
      // Save preceding cue if open
      if (currentCue && currentCue.lines.length > 0) {
        cues.push(currentCue);
      }

      const startMs = parseSbvTimecodeToMs(match[1]);
      const endMs = parseSbvTimecodeToMs(match[2]);

      currentCue = {
        startMs,
        endMs,
        lines: [],
      };
      continue;
    }

    if (currentCue) {
      if (trimmed === '') {
        // Blank line ends the current cue if we already have text
        if (currentCue.lines.length > 0) {
          cues.push(currentCue);
          currentCue = null;
        }
      } else {
        currentCue.lines.push(line);
      }
    }
  }

  // Push final cue if pending
  if (currentCue && currentCue.lines.length > 0) {
    cues.push(currentCue);
  }

  if (cues.length === 0) {
    return {
      srt: '',
      cueCount: 0,
      warnings: ['No valid SBV timestamps found in input.'],
    };
  }

  const srtBlocks: string[] = [];
  let validCueIndex = 1;

  for (let i = 0; i < cues.length; i++) {
    const cue = cues[i];
    let cueText = cue.lines.join('\n');

    if (shouldDecode) {
      cueText = decodeHtmlEntities(cueText);
    }

    if (removeSoundDescriptions) {
      // Remove [Music], [Applause], [Laughter], [Cheering], (Music), etc.
      cueText = cueText
        .replace(/\[\s*(?:music|applause|laughter|cheering|chuckle|gasp|sigh|snicker|groan|screaming|crying|silence|audio|sound effect|applause|cheers)[^\]]*\]/gi, '')
        .replace(/\(\s*(?:music|applause|laughter|cheering|chuckle|gasp|sigh|snicker|groan|screaming|crying|silence|audio|sound effect|applause|cheers)[^)]*\)/gi, '')
        .replace(/^\s*\[[^\]]+\]\s*$/gm, ''); // standalone brackets
    }

    if (cleanWhitespace) {
      // Clean up multiple spaces, trim blank lines
      const processedLines = cueText
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l.length > 0);
      cueText = processedLines.join('\n');
    }

    if (!cueText.trim()) {
      // Cue text became empty (e.g. was just [Music])
      continue;
    }

    // Validate end time > start time
    let endMs = cue.endMs;
    if (endMs <= cue.startMs) {
      endMs = cue.startMs + 2000; // Default 2 second duration fallback
      warnings.push(`Cue #${validCueIndex} had end time <= start time. Adjusted duration to 2.0s.`);
    }

    const startFormatted = formatSrtTimestamp(cue.startMs);
    const endFormatted = formatSrtTimestamp(endMs);

    srtBlocks.push(`${validCueIndex}\n${startFormatted} --> ${endFormatted}\n${cueText}`);
    validCueIndex++;
  }

  const srt = srtBlocks.join('\n\n') + (srtBlocks.length > 0 ? '\n' : '');

  return {
    srt,
    cueCount: srtBlocks.length,
    warnings,
  };
}

/**
 * Sample SBV content for the "Load Sample" button.
 */
export const SAMPLE_SBV = `0:00:01.000,0:00:04.200
Welcome to the SBV to SRT Subtitle Converter!

0:00:04.500,0:00:08.100
YouTube Studio exports captions in .sbv format,
but most video editors require standard SubRip .srt files.

0:00:08.400,0:00:12.300
This tool instantly converts timestamps, adds cue numbers,
and decodes HTML entities like &amp; and &#39;quotes&#39;.

0:00:12.600,0:00:16.800
[Music]
Ready to use in Premiere Pro, DaVinci Resolve,
Final Cut Pro, VLC, and Plex!`;
