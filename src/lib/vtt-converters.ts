import { formatTimestamp, parseTimestamp } from './text-to-srt';

export function convertSrtToVtt(srtContent: string): string {
  const normalized = srtContent.replace(/\r\n/g, '\n').trim();
  if (!normalized) return 'WEBVTT\n\n';

  const blocks = normalized.split(/\n\s*\n/);
  const vttBlocks: string[] = ['WEBVTT\n'];

  for (const block of blocks) {
    const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
    if (lines.length === 0) continue;

    let timeLineIdx = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('-->')) {
        timeLineIdx = i;
        break;
      }
    }

    if (timeLineIdx === -1) continue;

    const timeLine = lines[timeLineIdx];
    const timeParts = timeLine.split('-->');
    if (timeParts.length !== 2) continue;

    const startTs = timeParts[0].trim().replace(',', '.');
    const endTs = timeParts[1].trim().replace(',', '.');

    const cueText = lines.slice(timeLineIdx + 1).join('\n');
    vttBlocks.push(`${startTs} --> ${endTs}\n${cueText}\n`);
  }

  return vttBlocks.join('\n');
}

export function convertVttToSrt(vttContent: string): string {
  const normalized = vttContent.replace(/\r\n/g, '\n').trim();
  if (!normalized) return '';

  // Remove WEBVTT header, NOTE comments, and STYLE blocks
  const withoutHeader = normalized.replace(/^WEBVTT[^\n]*\n*/i, '');
  const blocks = withoutHeader.split(/\n\s*\n/);
  const srtCues: string[] = [];
  let cueIndex = 1;

  for (const block of blocks) {
    const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
    if (lines.length === 0) continue;

    // Skip NOTE or STYLE blocks
    if (lines[0].startsWith('NOTE') || lines[0].startsWith('STYLE') || lines[0].startsWith('REGION')) {
      continue;
    }

    let timeLineIdx = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('-->')) {
        timeLineIdx = i;
        break;
      }
    }

    if (timeLineIdx === -1) continue;

    const timeLine = lines[timeLineIdx];
    // Strip cue positioning parameters like line:0 position:50%
    const rawTimeParts = timeLine.split('-->');
    const startStr = rawTimeParts[0].trim();
    const endStr = rawTimeParts[1].trim().split(/\s+/)[0]; // take just the timestamp before any placement settings

    const startMs = parseTimestamp(startStr);
    const endMs = parseTimestamp(endStr);

    const startTimeFormatted = formatTimestamp(startMs, ',');
    const endTimeFormatted = formatTimestamp(endMs, ',');

    const cueText = lines
      .slice(timeLineIdx + 1)
      .map((l) => l.replace(/<[^>]*>/g, '').trim())
      .filter(Boolean)
      .join('\n');

    if (cueText) {
      srtCues.push(`${cueIndex}\n${startTimeFormatted} --> ${endTimeFormatted}\n${cueText}\n`);
      cueIndex++;
    }
  }

  return srtCues.join('\n');
}
