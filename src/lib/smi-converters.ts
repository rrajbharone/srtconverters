export interface SmiToSrtOptions {
  cleanHtmlTags?: boolean;
  normalizeWhitespace?: boolean;
  selectedLanguageClass?: string; // 'all' or specific class like 'KRCC', 'ENCC'
  maxCueDurationMs?: number; // default 7000ms
  defaultCueDurationMs?: number; // default 3000ms
}

export interface SmiCue {
  index: number;
  startMs: number;
  endMs: number;
  startTimeFormatted: string;
  endTimeFormatted: string;
  text: string;
  langClass?: string;
}

export interface SmiConversionResult {
  srt: string;
  cueCount: number;
  detectedClasses: string[];
  warnings: string[];
}

/**
 * Decode common HTML entities found in SAMI subtitle files.
 */
export function decodeHtmlEntities(text: string): string {
  if (!text) return '';
  return text
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
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

  const pad2 = (n: number) => n.toString().padStart(2, '0');
  const pad3 = (n: number) => n.toString().padStart(3, '0');

  return `${pad2(hours)}:${pad2(minutes)}:${pad2(seconds)},${pad3(milliseconds)}`;
}

/**
 * Strip SMI/HTML tags while preserving line breaks and basic text structure.
 */
export function cleanSmiText(rawHtml: string): string {
  if (!rawHtml) return '';

  let cleaned = rawHtml
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/?p[^>]*>/gi, '')
    .replace(/<\/?font[^>]*>/gi, '')
    .replace(/<\/?span[^>]*>/gi, '')
    .replace(/<\/?[a-z0-9]+[^>]*>/gi, '');

  cleaned = decodeHtmlEntities(cleaned);

  const lines = cleaned.split('\n').map((l) => l.trim()).filter((l) => l.length > 0);
  return lines.join('\n');
}

interface RawSmiSyncBlock {
  startMs: number;
  rawContent: string;
  langClass?: string;
  hasText: boolean;
}

/**
 * Core function to parse SAMI (.smi) subtitle markup and convert to SubRip (.srt).
 */
export function convertSmiToSrt(
  smiContent: string,
  options: SmiToSrtOptions = {}
): SmiConversionResult {
  const warnings: string[] = [];
  const detectedClassesSet = new Set<string>();

  if (!smiContent || !smiContent.trim()) {
    return { srt: '', cueCount: 0, detectedClasses: [], warnings: ['Input SMI content is empty.'] };
  }

  let bodyContent = smiContent;
  const bodyMatch = smiContent.match(/<BODY[^>]*>([\s\S]*?)<\/BODY>/i);
  if (bodyMatch && bodyMatch[1]) {
    bodyContent = bodyMatch[1];
  }

  const syncRegex = /<SYNC\s+[^>]*?Start\s*=\s*['"]?(\d+)['"]?[^>]*>/gi;

  const rawBlocks: RawSmiSyncBlock[] = [];
  let match: RegExpExecArray | null;
  const matches: Array<{ startMs: number; tagEndIndex: number; fullMatchIndex: number }> = [];

  while ((match = syncRegex.exec(bodyContent)) !== null) {
    const startMs = parseInt(match[1], 10);
    const fullMatchIndex = match.index;
    const tagEndIndex = syncRegex.lastIndex;
    matches.push({ startMs, tagEndIndex, fullMatchIndex });
  }

  if (matches.length === 0) {
    const relaxedRegex = /<SYNC[^>]+?(\d+)[^>]*>/gi;
    while ((match = relaxedRegex.exec(bodyContent)) !== null) {
      const startMs = parseInt(match[1], 10);
      matches.push({ startMs, tagEndIndex: relaxedRegex.lastIndex, fullMatchIndex: match.index });
    }
  }

  if (matches.length === 0) {
    return {
      srt: '',
      cueCount: 0,
      detectedClasses: [],
      warnings: ['No valid <SYNC Start="..."> tags found in the provided SMI file.']
    };
  }

  for (let i = 0; i < matches.length; i++) {
    const current = matches[i];
    const nextMatch = matches[i + 1];
    const rawChunk = nextMatch
      ? bodyContent.substring(current.tagEndIndex, nextMatch.fullMatchIndex)
      : bodyContent.substring(current.tagEndIndex);

    let langClass = '';
    const classMatch = rawChunk.match(/<P\s+[^>]*?Class\s*=\s*['"]?([a-zA-Z0-9_-]+)['"]?[^>]*>/i);
    if (classMatch && classMatch[1]) {
      langClass = classMatch[1].toUpperCase();
      detectedClassesSet.add(langClass);
    }

    const cleanedText = cleanSmiText(rawChunk);
    const isClearPoint = !cleanedText || cleanedText === '&nbsp;' || cleanedText.trim() === '';

    rawBlocks.push({
      startMs: current.startMs,
      rawContent: rawChunk,
      langClass: langClass || undefined,
      hasText: !isClearPoint,
    });
  }

  const selectedClass = options.selectedLanguageClass || 'all';
  const maxDuration = options.maxCueDurationMs ?? 7000;

  const cues: SmiCue[] = [];
  let cueNumber = 1;

  for (let i = 0; i < rawBlocks.length; i++) {
    const current = rawBlocks[i];

    if (!current.hasText) continue;

    if (selectedClass !== 'all' && current.langClass && current.langClass !== selectedClass) {
      continue;
    }

    const text = cleanSmiText(current.rawContent);
    if (!text) continue;

    let calculatedEndMs = 0;

    for (let j = i + 1; j < rawBlocks.length; j++) {
      const candidate = rawBlocks[j];
      if (selectedClass === 'all' || !candidate.langClass || candidate.langClass === selectedClass || !candidate.hasText) {
        if (candidate.startMs > current.startMs) {
          calculatedEndMs = candidate.startMs;
          break;
        }
      }
    }

    if (!calculatedEndMs || calculatedEndMs <= current.startMs) {
      const estimatedMs = Math.min(Math.max(text.length * 55, 1800), maxDuration);
      calculatedEndMs = current.startMs + estimatedMs;
    } else if (calculatedEndMs - current.startMs > maxDuration) {
      calculatedEndMs = current.startMs + maxDuration;
    }

    cues.push({
      index: cueNumber++,
      startMs: current.startMs,
      endMs: calculatedEndMs,
      startTimeFormatted: formatMsToSrtTime(current.startMs),
      endTimeFormatted: formatMsToSrtTime(calculatedEndMs),
      text,
      langClass: current.langClass,
    });
  }

  cues.sort((a, b) => a.startMs - b.startMs);

  const srtBlocks = cues.map((cue, idx) => {
    return `${idx + 1}\n${cue.startTimeFormatted} --> ${cue.endTimeFormatted}\n${cue.text}`;
  });

  const srtOutput = srtBlocks.join('\n\n');

  return {
    srt: srtOutput,
    cueCount: cues.length,
    detectedClasses: Array.from(detectedClassesSet),
    warnings,
  };
}

export const SAMPLE_SMI = `<SAMI>
<HEAD>
<TITLE>Sample Movie Subtitle</TITLE>
<STYLE TYPE="text/css">
<!--
P { margin-left:8pt; margin-right:8pt; margin-bottom:2pt;
    margin-top:2pt; font-size:14pt; text-align:center;
    font-family:gulim, sans-serif; font-weight:normal; color:white;
}
.KRCC { Name:Korean; lang:ko-KR; SAMIType:CC; }
.ENCC { Name:English; lang:en-US; SAMIType:CC; }
-->
</STYLE>
</HEAD>
<BODY>
<SYNC Start=1200><P Class=KRCC>
안녕하세요! SMI to SRT 자막 변환 도구입니다.
<SYNC Start=4500><P Class=KRCC>&nbsp;
<SYNC Start=5200><P Class=KRCC>
SAMI 자막을 깨끗한 SubRip (.srt) 형식으로 즉시 변환합니다.
<SYNC Start=9100><P Class=KRCC>&nbsp;
<SYNC Start=10500><P Class=KRCC>
한국어 인코딩(EUC-KR / CP949) 및 다국어 자막을 지원합니다.
<SYNC Start=15200><P Class=KRCC>&nbsp;
<SYNC Start=16000><P Class=KRCC>
프리미어 프로, 다빈치 리졸브, VLC 및 모바일에서 바로 사용하세요!
<SYNC Start=21000><P Class=KRCC>&nbsp;
</BODY>
</SAMI>`;

export interface SrtToSmiOptions {
  languageClass?: string; // 'KRCC', 'ENCC', 'FRCC', 'ESCC', 'DECC', 'ITCC' etc. Default: 'KRCC'
  title?: string;
  includeBlankSyncPoints?: boolean; // Default true: adds <SYNC Start=endMs><P Class=...>&nbsp;
  cleanHtmlTags?: boolean; // Default false: keeps <i>, <b>, <font> where supported
}

export interface SrtToSmiResult {
  smi: string;
  cueCount: number;
  warnings: string[];
}

/**
 * Sample SRT subtitle for the "Load Sample" button on the SRT to SMI tool.
 */
export const SAMPLE_SRT_FOR_SMI = `1
00:00:01,000 --> 00:00:04,500
Welcome to the SRT to SMI Subtitle Converter!

2
00:00:04,800 --> 00:00:08,200
Convert SubRip (.srt) captions to Microsoft SAMI (.smi) format
with precise millisecond <SYNC> timestamps.

3
00:00:08,600 --> 00:00:12,500
Fully compatible with Windows Media Player,
GOM Player, PotPlayer, and Korean media workflows.

4
00:00:13,000 --> 00:00:16,800
Multi-line subtitles and HTML formatting
are cleanly translated to <BR> and standard SAMI markup!`;

/**
 * Parse an SRT timestamp string (HH:MM:SS,mmm or HH:MM:SS.mmm) into milliseconds.
 */
export function parseSrtTimestampToMs(timeStr: string): number {
  if (!timeStr) return 0;
  const clean = timeStr.trim().replace(',', '.');
  const dotIndex = clean.lastIndexOf('.');
  let millis = 0;
  let mainTime = clean;

  if (dotIndex !== -1) {
    mainTime = clean.substring(0, dotIndex);
    const msStr = clean.substring(dotIndex + 1).padEnd(3, '0').substring(0, 3);
    millis = parseInt(msStr, 10) || 0;
  }

  const parts = mainTime.split(':').map((p) => parseInt(p, 10) || 0);
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (parts.length === 3) {
    hours = parts[0];
    minutes = parts[1];
    seconds = parts[2];
  } else if (parts.length === 2) {
    minutes = parts[0];
    seconds = parts[1];
  } else if (parts.length === 1) {
    seconds = parts[0];
  }

  return (hours * 3600 + minutes * 60 + seconds) * 1000 + millis;
}

/**
 * Convert standard SubRip (.srt) text content into Microsoft SAMI (.smi) format.
 */
export function convertSrtToSmi(srtContent: string, options: SrtToSmiOptions = {}): SrtToSmiResult {
  const warnings: string[] = [];
  const normalized = (srtContent || '').replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();

  if (!normalized) {
    return {
      smi: '',
      cueCount: 0,
      warnings: ['Input content is empty.'],
    };
  }

  const langClass = options.languageClass || 'KRCC';
  const docTitle = options.title || 'Converted Subtitles';
  const includeBlankSync = options.includeBlankSyncPoints !== false;
  const cleanHtml = options.cleanHtmlTags === true;

  // Split into blocks by double newline
  const rawBlocks = normalized.split(/\n\s*\n+/);
  const parsedCues: { startMs: number; endMs: number; text: string }[] = [];

  for (let i = 0; i < rawBlocks.length; i++) {
    const rawBlock = rawBlocks[i].trim();
    if (!rawBlock) continue;

    const lines = rawBlock.split('\n').map((l) => l.trim()).filter(Boolean);
    if (lines.length === 0) continue;

    // Find timestamp line (containing '-->')
    let timeLineIdx = -1;
    for (let j = 0; j < lines.length; j++) {
      if (lines[j].includes('-->')) {
        timeLineIdx = j;
        break;
      }
    }

    if (timeLineIdx === -1) {
      // Malformed block without timestamp
      warnings.push(`Skipped block #${i + 1}: Missing timestamp separator '-->'.`);
      continue;
    }

    const timeLine = lines[timeLineIdx];
    const timeParts = timeLine.split('-->');
    if (timeParts.length !== 2) {
      warnings.push(`Skipped block #${i + 1}: Invalid timestamp line.`);
      continue;
    }

    const startMs = parseSrtTimestampToMs(timeParts[0]);
    let endMs = parseSrtTimestampToMs(timeParts[1]);

    if (endMs <= startMs) {
      endMs = startMs + 3000;
      warnings.push(`Cue starting at ${timeParts[0].trim()} had end time <= start time. Adjusted to 3.0s duration.`);
    }

    // Dialogue text is lines after timeLineIdx
    const dialogueLines = lines.slice(timeLineIdx + 1);
    if (dialogueLines.length === 0) {
      continue;
    }

    let text = dialogueLines.join('<BR>');
    if (cleanHtml) {
      // Strip HTML tags except <BR>
      text = text.replace(/<(?!\/?BR\b)[^>]*>/gi, '');
    }

    parsedCues.push({
      startMs,
      endMs,
      text,
    });
  }

  if (parsedCues.length === 0) {
    return {
      smi: '',
      cueCount: 0,
      warnings: ['No valid subtitle cues could be parsed from the provided SRT.'],
    };
  }

  // Sort cues by start time
  parsedCues.sort((a, b) => a.startMs - b.startMs);

  // Generate SAMI structure
  const samiLines: string[] = [
    '<SAMI>',
    '<HEAD>',
    `<TITLE>${docTitle}</TITLE>`,
    '<STYLE TYPE="text/css">',
    '<!--',
    'P { margin-left:8pt; margin-right:8pt; margin-bottom:2pt;',
    '    margin-top:2pt; font-size:14pt; text-align:center;',
    '    font-family:gulim, sans-serif; font-weight:normal; color:white;',
    '}',
    '.KRCC { Name:Korean; lang:ko-KR; SAMIType:CC; }',
    '.ENCC { Name:English; lang:en-US; SAMIType:CC; }',
    '.FRCC { Name:French; lang:fr-FR; SAMIType:CC; }',
    '.ESCC { Name:Spanish; lang:es-ES; SAMIType:CC; }',
    '.DECC { Name:German; lang:de-DE; SAMIType:CC; }',
    '.ITCC { Name:Italian; lang:it-IT; SAMIType:CC; }',
    '-->',
    '</STYLE>',
    '</HEAD>',
    '<BODY>',
  ];

  for (let i = 0; i < parsedCues.length; i++) {
    const cue = parsedCues[i];
    samiLines.push(`<SYNC Start=${cue.startMs}><P Class=${langClass}>${cue.text}`);

    if (includeBlankSync) {
      // If the next cue starts after this cue's end time, or this is the last cue, emit a blank sync point
      const nextCue = parsedCues[i + 1];
      if (!nextCue || nextCue.startMs > cue.endMs) {
        samiLines.push(`<SYNC Start=${cue.endMs}><P Class=${langClass}>&nbsp;`);
      }
    }
  }

  samiLines.push('</BODY>');
  samiLines.push('</SAMI>');

  return {
    smi: samiLines.join('\n'),
    cueCount: parsedCues.length,
    warnings,
  };
}
