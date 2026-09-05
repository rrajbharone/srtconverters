export interface SrtToTextOptions {
  stripTimestamps?: boolean;
  stripLineNumbers?: boolean;
  joinParagraphs?: boolean;
}

export function convertSrtToText(srtContent: string, options: SrtToTextOptions = {}): string {
  const { stripTimestamps = true, stripLineNumbers = true, joinParagraphs = false } = options;

  const normalized = srtContent.replace(/\r\n/g, '\n').trim();
  if (!normalized) return '';

  const blocks = normalized.split(/\n\s*\n/);
  const textLines: string[] = [];

  for (const block of blocks) {
    const rawLines = block.split('\n').map((l) => l.trim()).filter(Boolean);
    if (rawLines.length === 0) continue;

    let contentLines = [...rawLines];

    // Check if line 0 is numeric cue index
    if (stripLineNumbers && /^\d+$/.test(contentLines[0])) {
      contentLines.shift();
    }

    // Check if next line contains timestamp arrow
    if (stripTimestamps && contentLines.length > 0 && /-->/.test(contentLines[0])) {
      contentLines.shift();
    }

    // Clean remaining lines from HTML styling tags
    const cleanedCue = contentLines
      .map((line) => line.replace(/<[^>]*>/g, '').trim())
      .filter((line) => line.length > 0)
      .join(' ');

    if (cleanedCue) {
      textLines.push(cleanedCue);
    }
  }

  if (joinParagraphs) {
    return textLines.join(' ');
  }

  return textLines.join('\n');
}
