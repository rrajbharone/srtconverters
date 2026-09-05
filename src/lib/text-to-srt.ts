export interface TextToSrtOptions {
  timingMode: 'cps' | 'fixed';
  cps: number; // Characters per second (default ~17)
  fixedDurationSeconds: number; // For fixed mode
  gapMs: number; // Gap between subtitles in milliseconds
  startTimeMs: number; // Start timestamp in milliseconds
  maxCharsPerLine: number; // Recommended 37-42
  splitMode: 'sentence' | 'paragraph' | 'line';
}

export interface SubtitleCue {
  index: number;
  startMs: number;
  endMs: number;
  startTimeFormatted: string;
  endTimeFormatted: string;
  text: string;
}

export function formatTimestamp(ms: number, delimiter: ',' | '.' = ','): string {
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

  return `${hh}:${mm}:${ss}${delimiter}${mmm}`;
}

export function parseTimestamp(ts: string): number {
  const normalized = ts.trim().replace('.', ',');
  const parts = normalized.split(':');
  if (parts.length < 2) return 0;

  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let millis = 0;

  if (parts.length === 3) {
    hours = parseInt(parts[0], 10) || 0;
    minutes = parseInt(parts[1], 10) || 0;
    const secParts = parts[2].split(',');
    seconds = parseInt(secParts[0], 10) || 0;
    millis = parseInt(secParts[1], 10) || 0;
  } else if (parts.length === 2) {
    minutes = parseInt(parts[0], 10) || 0;
    const secParts = parts[1].split(',');
    seconds = parseInt(secParts[0], 10) || 0;
    millis = parseInt(secParts[1], 10) || 0;
  }

  return (hours * 3600 + minutes * 60 + seconds) * 1000 + millis;
}

// Wrap text intelligently up to maxCharsPerLine (max 2 lines per cue)
export function wrapTextLines(text: string, maxCharsPerLine = 42): string {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return '';

  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    if (!currentLine) {
      currentLine = word;
    } else if ((currentLine + ' ' + word).length <= maxCharsPerLine) {
      currentLine += ' ' + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
      if (lines.length >= 2) break; // Keep cues concise (max 2 lines)
    }
  }
  if (currentLine && lines.length < 2) {
    lines.push(currentLine);
  }

  return lines.join('\n');
}

// Split raw text into subtitle text chunks based on chosen strategy
export function segmentText(rawText: string, mode: 'sentence' | 'paragraph' | 'line', maxChars = 84): string[] {
  const cleaned = rawText.replace(/\r\n/g, '\n').trim();
  if (!cleaned) return [];

  if (mode === 'line') {
    return cleaned
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l.length > 0);
  }

  if (mode === 'paragraph') {
    return cleaned
      .split(/\n\s*\n/)
      .map((p) => p.replace(/\n+/g, ' ').trim())
      .filter((p) => p.length > 0);
  }

  // Sentence & punctuation-based splitting
  const rawSentences = cleaned.split(/(?<=[.?!…;])\s+|(?<=\n+)/);
  const segments: string[] = [];

  for (const s of rawSentences) {
    const trimmed = s.trim();
    if (!trimmed) continue;

    if (trimmed.length <= maxChars) {
      segments.push(trimmed);
    } else {
      // Split long sentences at commas or clauses
      const subParts = trimmed.split(/(?<=[,])\s+/);
      let buffer = '';
      for (const part of subParts) {
        if (!buffer) {
          buffer = part;
        } else if ((buffer + ' ' + part).length <= maxChars) {
          buffer += ' ' + part;
        } else {
          segments.push(buffer);
          buffer = part;
        }
      }
      if (buffer) {
        // If still too long, split by words
        if (buffer.length > maxChars) {
          const words = buffer.split(/\s+/);
          let wordChunk = '';
          for (const w of words) {
            if (!wordChunk) wordChunk = w;
            else if ((wordChunk + ' ' + w).length <= maxChars) wordChunk += ' ' + w;
            else {
              segments.push(wordChunk);
              wordChunk = w;
            }
          }
          if (wordChunk) segments.push(wordChunk);
        } else {
          segments.push(buffer);
        }
      }
    }
  }

  return segments.filter((s) => s.length > 0);
}

export function convertTextToSrt(rawText: string, options: Partial<TextToSrtOptions> = {}): { srt: string; cues: SubtitleCue[] } {
  const opts: TextToSrtOptions = {
    timingMode: options.timingMode || 'cps',
    cps: options.cps && options.cps > 0 ? options.cps : 17,
    fixedDurationSeconds: options.fixedDurationSeconds && options.fixedDurationSeconds > 0 ? options.fixedDurationSeconds : 3.5,
    gapMs: typeof options.gapMs === 'number' ? options.gapMs : 100,
    startTimeMs: typeof options.startTimeMs === 'number' ? options.startTimeMs : 1000,
    maxCharsPerLine: options.maxCharsPerLine || 42,
    splitMode: options.splitMode || 'sentence',
  };

  const segments = segmentText(rawText, opts.splitMode, opts.maxCharsPerLine * 2);
  const cues: SubtitleCue[] = [];
  let currentStartMs = opts.startTimeMs;

  for (let i = 0; i < segments.length; i++) {
    const rawSeg = segments[i];
    const wrappedText = wrapTextLines(rawSeg, opts.maxCharsPerLine);
    if (!wrappedText) continue;

    let durationMs: number;
    if (opts.timingMode === 'fixed') {
      durationMs = opts.fixedDurationSeconds * 1000;
    } else {
      // CPS based calculation: text length / CPS with min 1.5s and max 7s
      const charCount = wrappedText.replace(/\s/g, '').length;
      const calculatedSeconds = Math.max(1.5, Math.min(7.0, charCount / opts.cps));
      durationMs = Math.round(calculatedSeconds * 1000);
    }

    const endMs = currentStartMs + durationMs;
    cues.push({
      index: cues.length + 1,
      startMs: currentStartMs,
      endMs,
      startTimeFormatted: formatTimestamp(currentStartMs, ','),
      endTimeFormatted: formatTimestamp(endMs, ','),
      text: wrappedText,
    });

    currentStartMs = endMs + opts.gapMs;
  }

  const srt = cues
    .map((c) => `${c.index}\n${c.startTimeFormatted} --> ${c.endTimeFormatted}\n${c.text}\n`)
    .join('\n');

  return { srt, cues };
}
