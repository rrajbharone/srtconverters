import type { Locale } from './config';

export interface ToolFaq {
  question: string;
  answer: string;
}

export interface ToolStep {
  step: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ToolFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ToolDetail {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  tagline: string;
  description: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  disclaimer?: string;
  settingsLabels: {
    timingMode?: string;
    fixedDuration?: string;
    cpsDuration?: string;
    cpsLabel?: string;
    cpsHint?: string;
    startTime?: string;
    startTimeHint?: string;
    durationPerSubtitle?: string;
    durationHint?: string;
    gapBetweenSubtitles?: string;
    gapHint?: string;
    maxCharsPerLine?: string;
    maxCharsHint?: string;
    splitMode?: string;
    splitSentence?: string;
    splitParagraph?: string;
    splitLine?: string;
    stripTimestamps?: string;
    stripLineNumbers?: string;
    joinParagraphs?: string;
  };
  stepsTitle: string;
  steps: ToolStep[];
  featuresTitle: string;
  features: ToolFeature[];
  faqsTitle: string;
  faqs: ToolFaq[];
}

export interface ToolsDirectoryContent {
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  convertersCategory: string;
  utilitiesCategory: string;
  openTool: string;
  clientSideBadge: string;
}

export interface ToolsContent {
  directory: ToolsDirectoryContent;
  txtToSrt: ToolDetail;
  srtToText: ToolDetail;
  srtToVtt: ToolDetail;
  vttToSrt: ToolDetail;
  srtToAss: ToolDetail;
  assToSrt: ToolDetail;
  srtToSub: ToolDetail;
  subToSrt: ToolDetail;
  sbvToSrt: ToolDetail;
}

export const TOOLS_TRANSLATIONS: Record<Locale, ToolsContent> = {
  "en": {
    "directory": {
      "title": "All Subtitle & SRT Conversion Tools",
      "subtitle": "Free, instant, browser-based subtitle converter tools. Zero installation, zero server uploads, 100% private.",
      "metaTitle": "Free Subtitle & SRT Tools – Convert, Format & Edit | SRTConverters",
      "metaDescription": "Explore our complete suite of free online subtitle tools. Convert TXT to SRT, SRT to Text, SRT to VTT, and VTT to SRT securely in your browser.",
      "convertersCategory": "Subtitle Converters",
      "utilitiesCategory": "Subtitle Utilities",
      "openTool": "Open Tool",
      "clientSideBadge": "100% Browser-Based"
    },
    "txtToSrt": {
      "id": "txt-to-srt",
      "name": "TXT to SRT Converter",
      "shortName": "TXT to SRT",
      "badge": "Free & Client-Side",
      "tagline": "Convert Plain Text & Transcripts into Synchronized SubRip (.SRT) Subtitle Files",
      "description": "Turn unformatted transcripts, scripts, and lyrics into properly formatted SRT subtitles with custom reading speeds, line lengths, and estimated timestamps.",
      "h1": "TXT to SRT Converter",
      "metaTitle": "TXT to SRT Converter – Free Online Text to Subtitles | SRTConverters",
      "metaDescription": "Convert plain text transcripts, scripts, and lyrics to SubRip (.srt) subtitle files online for free. Custom reading speeds, automatic timing estimation, and 100% browser privacy.",
      "settingsLabels": {
        "timingMode": "Timing Calculation Mode",
        "cpsLabel": "Reading Speed (CPS)",
        "cpsHint": "Characters per second (15-20 is optimal for readability)",
        "maxCharsPerLine": "Max Characters per Line",
        "maxCharsHint": "Recommended 37-42 characters for TV/YouTube/TikTok",
        "splitMode": "Text Segmentation Strategy",
        "splitSentence": "Split by Sentence & Punctuation",
        "splitParagraph": "Split by Paragraphs",
        "splitLine": "Split by Line Breaks",
        "gapBetweenSubtitles": "Gap Between Subtitles (ms)",
        "gapHint": "Pause between consecutive subtitle cues (e.g. 100ms)"
      },
      "stepsTitle": "How to Convert Text to SRT Subtitles in 3 Simple Steps",
      "steps": [
        {
          "step": "1",
          "title": "Paste Text or Upload File",
          "description": "Type or paste your transcription into the input box, or drag and drop a .txt plain text file directly."
        },
        {
          "step": "2",
          "title": "Configure Subtitle Timing",
          "description": "Adjust reading speed (CPS), maximum characters per line, and break strategies to match your video style."
        },
        {
          "step": "3",
          "title": "Preview & Download .SRT",
          "description": "Inspect the generated cues in the live preview, copy to clipboard, or instantly download the .srt file."
        }
      ],
      "featuresTitle": "Why Use Our TXT to SRT Converter?",
      "features": [
        {
          "title": "100% Private & In-Browser",
          "description": "No text or files are uploaded to any external server. All conversion logic runs securely within your browser.",
          "icon": "shield"
        },
        {
          "title": "Smart Punctuation Splitting",
          "description": "Naturally splits lengthy text blocks at periods, commas, question marks, and line breaks for natural readability.",
          "icon": "split"
        },
        {
          "title": "Intelligent CPS Timing",
          "description": "Calculates subtitle screen duration based on character count and natural reading speeds for optimal viewer comfort.",
          "icon": "clock"
        },
        {
          "title": "Standard SRT Format",
          "description": "Generates standard SubRip files compatible with YouTube, Premiere Pro, DaVinci Resolve, Final Cut, and VLC.",
          "icon": "file"
        }
      ],
      "faqsTitle": "Frequently Asked Questions",
      "faqs": [
        {
          "question": "What format should my TXT file have before converting it to SRT?",
          "answer": "Your TXT file should contain clean plain text without proprietary rich text formatting. For the best subtitle formatting, structure your TXT transcript so each sentence or dialogue phrase occupies its own line, or separate distinct thoughts with paragraph breaks. Keeping subtitle-sized segments together helps our converter calculate accurate subtitle timing and create well-balanced SRT subtitles automatically."
        },
        {
          "question": "Can a TXT file contain timestamps for SRT conversion?",
          "answer": "While standard TXT files are usually plain text transcripts without timecodes, some exported transcripts already include rough timestamps. If your TXT file contains timestamps, ordinary text converters might treat those numbers as spoken dialogue. Our TXT to SRT converter is designed to take pure plain text and calculate natural subtitle timing from scratch based on reading speed and punctuation."
        },
        {
          "question": "What timestamp format does an SRT file use?",
          "answer": "A standard SRT file uses sequential cue numbers followed by precise timestamps formatted as 00:00:01,000 --> 00:00:04,000. This syntax represents hours:minutes:seconds,milliseconds. Notice that the SubRip standard requires a comma delimiter before milliseconds, unlike WebVTT which uses a period. When converting a TXT transcript, our tool automatically generates standard SRT timestamps."
        },
        {
          "question": "How many characters should an SRT subtitle contain?",
          "answer": "For comfortable viewing and readability, professional subtitling guidelines recommend keeping SRT subtitles between 37 and 42 characters per line, with a maximum of two lines per subtitle cue (around 70 to 84 characters total). However, this is not an absolute universal rule. Mobile video platforms often use shorter lines, while desktop screens accommodate longer sentences."
        },
        {
          "question": "Can I convert a TXT transcript with multiple paragraphs into SRT subtitles?",
          "answer": "Yes! You can convert a TXT transcript containing multiple paragraphs into synchronized SRT subtitles. Paragraph breaks serve as natural pause indicators in subtitle segmentation. Choosing the paragraph or sentence splitting mode ensures lengthy text blocks are divided into bite-sized, readable subtitle cues with natural pacing between sections rather than overwhelming the viewer."
        },
        {
          "question": "Why does my converted SRT file show strange or incorrect characters?",
          "answer": "Garbled or missing symbols usually occur due to character encoding mismatches. If your source TXT file contains accented letters, emojis, or non-Latin alphabets, ensure it is saved in UTF-8 encoding. Our browser-based converter processes files using UTF-8 standard encoding, preserving special characters, accents, and non-English scripts perfectly in the final SRT file."
        },
        {
          "question": "Can I use punctuation and line breaks to control where SRT subtitles are split?",
          "answer": "Absolutely. Punctuation marks (periods, commas, question marks, and exclamation points) along with intentional line breaks provide powerful cues for subtitle segmentation. When you use the sentence segmentation mode, the converter automatically breaks your TXT transcript at natural grammatical pauses, producing SRT subtitles that follow the natural cadence of speech."
        },
        {
          "question": "Can I use a TXT to SRT converter for YouTube subtitles?",
          "answer": "Yes, SRT is one of the most widely supported subtitle formats on YouTube, Vimeo, Facebook, and Instagram. Once you convert your TXT transcript into an SRT file, you can upload the .srt file directly into YouTube Studio. Because automated converters calculate timestamps based on estimated reading speed, always review your subtitle timing against the actual video before publishing."
        }
      ]
    },
    "srtToText": {
      "id": "srt-to-text",
      "name": "SRT to Text Converter",
      "shortName": "SRT to Text",
      "badge": "Free & Fast",
      "tagline": "Extract Clean Plain Text and Transcripts from SubRip (.SRT) Subtitles",
      "description": "Easily strip timestamps, sequence numbers, and HTML styling from your SubRip (.srt) files to produce clean, readable text transcripts.",
      "h1": "SRT to Text Converter",
      "metaTitle": "SRT to Text Converter – Extract Plain Text from Subtitles | SRTConverters",
      "metaDescription": "Extract clean plain text from SRT subtitle files. Remove timestamps, cue numbers, and formatting with 100% in-browser privacy.",
      "settingsLabels": {
        "stripTimestamps": "Remove Timestamps",
        "stripLineNumbers": "Remove Line Numbers",
        "joinParagraphs": "Join into Paragraphs"
      },
      "stepsTitle": "How to Convert SRT Subtitles to Plain Text",
      "steps": [
        {
          "step": "1",
          "title": "Upload SRT File or Paste Text",
          "description": "Drop your .srt subtitle file into the upload zone or paste the raw subtitle text."
        },
        {
          "step": "2",
          "title": "Select Formatting Options",
          "description": "Choose whether to remove timestamps, cue numbers, and join subtitle lines into full paragraphs."
        },
        {
          "step": "3",
          "title": "Copy or Download Clean Text",
          "description": "Instantly copy the extracted plain transcript to your clipboard or download it as a .txt file."
        }
      ],
      "featuresTitle": "Key Benefits of SRT to Text Conversion",
      "features": [
        {
          "title": "Clean Text Extraction",
          "description": "Removes all timestamp headers, line indices, and HTML tags (<b>, <i>, <font>) automatically.",
          "icon": "clean"
        },
        {
          "title": "Paragraph Merging",
          "description": "Optionally combines subtitle fragments into continuous, coherent paragraphs for articles or summaries.",
          "icon": "text"
        },
        {
          "title": "Instant & Private",
          "description": "Instant client-side processing without file limits or server uploads.",
          "icon": "lock"
        }
      ],
      "faqsTitle": "Frequently Asked Questions",
      "faqs": [
        {
          "question": "How do I convert an SRT file to TXT?",
          "answer": "To convert an SRT file to TXT, paste your subtitle text or upload a .srt file into our free online converter. The tool automatically removes sequential line numbers and timestamp headers, leaving only clean dialogue text. You can toggle options to preserve timecodes or merge lines into continuous paragraphs, then copy the result or download it as a .txt file."
        },
        {
          "question": "Can I convert SRT to TXT online for free?",
          "answer": "Yes, SRTConverters.com is 100% free with no registration, usage limits, watermarks, or subscription fees. All processing executes client-side directly within your web browser using JavaScript, meaning your subtitle files and transcripts are never uploaded to remote servers or stored in any database."
        },
        {
          "question": "What happens to the timestamps when converting SRT to TXT?",
          "answer": "By default, all millisecond timestamp ranges (such as '00:00:01,000 --> 00:00:04,500') are completely stripped away during conversion. This produces clean, distraction-free reading text ideal for articles, study notes, summaries, and AI prompts."
        },
        {
          "question": "Can I convert SRT to TXT with timecodes?",
          "answer": "Yes. In our converter settings, simply uncheck the 'Remove Timestamps' option. The converter will retain the start and end timecode headers above each dialogue cue while still cleaning up numbers and formatting tags, making it perfect for video editing reference sheets and logging."
        },
        {
          "question": "What is the difference between SRT and TXT files?",
          "answer": "An SRT (SubRip) file is a specialized subtitle format containing numbered blocks and millisecond timestamps that tell video players when to display captions on screen. A TXT file is unformatted plain text without timing constraints, designed for human reading, editing, and word processing."
        },
        {
          "question": "How do I remove timestamps from an SRT file?",
          "answer": "The fastest way to remove timestamps from an SRT file is using our online converter. Rather than manually deleting timecode lines in Notepad or writing custom scripts, simply upload your .srt file, and our tool will strip every timestamp and cue index in milliseconds, giving you clean text instantly."
        },
        {
          "question": "Can I convert an SRT subtitle file into a transcript?",
          "answer": "Yes, converting an SRT file to TXT is the standard way to turn video closed captions into a readable transcript. You can enable the 'Join into Paragraphs' option in our tool to merge short subtitle fragments into flowing paragraphs suitable for blog posts, documentation, or lecture notes."
        },
        {
          "question": "Why does my converted TXT file contain repeated lines?",
          "answer": "Repeated lines usually occur if the original SRT file used 'roll-up' broadcast captioning or automated speech recognition that repeated previous phrases for visual continuity. You can easily spot and delete duplicate phrases in your text editor after extracting the clean transcript."
        },
        {
          "question": "Can I open an SRT file as plain text?",
          "answer": "Yes, SRT files are plain text files with a specialized extension. You can open any .srt file in Notepad, TextEdit, or VS Code. However, opening it directly will display all raw timecodes and cue numbers. Converting it with our tool extracts just the readable dialogue without the technical markup."
        },
        {
          "question": "Does converting SRT to TXT work with subtitles in different languages?",
          "answer": "Yes, our converter fully supports international character sets using UTF-8 encoding. It flawlessly processes accented characters (such as Spanish, French, Portuguese, German), non-Latin alphabets (Cyrillic, Greek, Arabic, Hebrew), Asian scripts (Chinese, Japanese, Korean), and special symbols."
        }
      ]
    },
    "srtToVtt": {
      "id": "srt-to-vtt",
      "name": "SRT to VTT Converter",
      "shortName": "SRT to VTT",
      "badge": "WebVTT Ready",
      "tagline": "Convert SubRip (.SRT) Subtitles to Modern HTML5 WebVTT (.VTT) Format",
      "description": "Convert standard SRT subtitles into modern WebVTT format compatible with HTML5 video players, browsers, video tags, and modern web platforms.",
      "h1": "SRT to VTT Converter",
      "metaTitle": "SRT to VTT Converter – Convert Subtitles to WebVTT Online | SRTConverters",
      "metaDescription": "Convert SubRip (.srt) subtitles to WebVTT (.vtt) format online. Perfect for HTML5 video tags, web media, and streaming players with 100% privacy.",
      "settingsLabels": {},
      "stepsTitle": "How to Convert SRT to WebVTT in 3 Steps",
      "steps": [
        {
          "step": "1",
          "title": "Upload SRT File",
          "description": "Paste your SRT subtitle text or upload a .srt file directly."
        },
        {
          "step": "2",
          "title": "Instant WebVTT Formatting",
          "description": "Our converter adds WEBVTT headers and replaces comma timestamps with decimal points."
        },
        {
          "step": "3",
          "title": "Download .VTT File",
          "description": "Download your ready-to-use .vtt subtitle file for web video players."
        }
      ],
      "featuresTitle": "Why Convert SRT to WebVTT?",
      "features": [
        {
          "title": "HTML5 Video Ready",
          "description": "WebVTT is the official W3C standard for subtitles in modern web browsers and <track> elements.",
          "icon": "globe"
        },
        {
          "title": "Valid Timecode Conversion",
          "description": "Accurately converts millisecond comma separators (00:00:01,000) to dot separators (00:00:01.000).",
          "icon": "check"
        }
      ],
      "faqsTitle": "Frequently Asked Questions",
      "faqs": [
        {
          "question": "How do I convert SRT to VTT?",
          "answer": "To convert SRT to VTT, paste your SubRip subtitle text or upload a .srt file into our free online converter. The tool automatically adds the mandatory WEBVTT header and changes all comma timestamp separators (00:00:01,000) into WebVTT-compliant decimal points (00:00:01.000). You can immediately copy the output or download a standardized .vtt file ready for HTML5 video players."
        },
        {
          "question": "Can I convert SRT to VTT online for free?",
          "answer": "Yes, SRTConverters.com is 100% free with no registration, file limits, or watermarks. All conversion happens client-side in your browser via JavaScript, ensuring complete data privacy since your subtitle files and video transcripts are never uploaded to remote servers or stored in any external database."
        },
        {
          "question": "Can I simply rename an SRT file to VTT?",
          "answer": "No. Simply renaming the file extension from .srt to .vtt in Windows or Mac will cause web video players to fail silently. Renaming does not insert the mandatory 'WEBVTT' header on line 1, nor does it convert millisecond commas into decimal periods. You must properly convert the internal syntax using our tool."
        },
        {
          "question": "What is the difference between SRT and VTT?",
          "answer": "SubRip (.srt) is an older format primarily built for desktop media players and NLE video editors. WebVTT (.vtt) is the official W3C web standard built for HTML5 <video> elements. WebVTT starts with a mandatory 'WEBVTT' header, uses period millisecond delimiters instead of commas, and supports CSS styling (::cue) and screen positioning."
        },
        {
          "question": "How do I convert SRT to VTT using FFmpeg?",
          "answer": "To convert an SRT file to WebVTT using FFmpeg from the command line, run: `ffmpeg -i input.srt output.vtt`. FFmpeg reads the input SubRip file and automatically writes a valid WebVTT file. However, for quick browser-based conversions without installing command-line tools, our free online converter provides the same standardized output instantly."
        },
        {
          "question": "Why does my VTT file not work in my browser?",
          "answer": "If your VTT subtitles fail to display, check three common issues: (1) Ensure the file starts with 'WEBVTT' on the first line, (2) Verify timestamps use periods (00:00:01.000) rather than commas, and (3) Ensure your web server serves the file with the correct MIME type header Content-Type: text/vtt; charset=utf-8 and proper CORS permissions."
        },
        {
          "question": "Does converting SRT to VTT change the timestamps?",
          "answer": "No. A proper format conversion preserves the exact start and end timing of every subtitle cue. Only the delimiter syntax changes from a comma to a decimal point (e.g., '00:01:23,456' becomes '00:01:23.456'). The actual on-screen duration and synchronization with your video remain 100% identical."
        },
        {
          "question": "Does an SRT to VTT converter preserve subtitle text?",
          "answer": "Yes. All spoken dialogue lines, speaker indicators, and formatting tags (such as <i> for italics and <b> for bold) are preserved. WebVTT supports these standard formatting tags, allowing your captions to render identically on the web."
        },
        {
          "question": "Why do VTT subtitles need the WEBVTT header?",
          "answer": "The W3C WebVTT specification strictly mandates that any valid WebVTT file must begin with the exact string 'WEBVTT' as its file signature on line 1. Modern web browsers and media players check for this signature to confirm file validity before parsing any subtitle cues."
        },
        {
          "question": "Which subtitle format should I use for HTML5 video: SRT or VTT?",
          "answer": "You should always use WebVTT (.vtt) for HTML5 video. Modern web browsers natively support WebVTT via the standard <track> element without requiring third-party JavaScript libraries. SRT is not natively supported by web browsers and is intended for desktop editors and offline media players."
        }
      ]
    },
    "vttToSrt": {
      "id": "vtt-to-srt",
      "name": "VTT to SRT Converter",
      "shortName": "VTT to SRT",
      "badge": "Universal SubRip",
      "tagline": "Convert WebVTT (.VTT) Captions into Standard SubRip (.SRT) Subtitles",
      "description": "Transform WebVTT subtitle files into universal SubRip (.srt) files for compatibility with video editors, media players, and legacy systems.",
      "h1": "VTT to SRT Converter",
      "metaTitle": "VTT to SRT Converter – Convert WebVTT to SubRip Online | SRTConverters",
      "metaDescription": "Convert WebVTT (.vtt) subtitle files to standard SubRip (.srt) format online for free. Strip VTT tags, add sequence numbers, and enjoy 100% browser privacy.",
      "settingsLabels": {},
      "stepsTitle": "How to Convert WebVTT to SRT in 3 Steps",
      "steps": [
        {
          "step": "1",
          "title": "Upload WebVTT File",
          "description": "Paste your WebVTT subtitles or drag and drop a .vtt file."
        },
        {
          "step": "2",
          "title": "Automatic SRT Conversion",
          "description": "Our tool cleans WEBVTT tags, numbers every cue sequentially, and converts dot timestamps to commas.",
          "icon": "file"
        },
        {
          "step": "3",
          "title": "Download SubRip .SRT",
          "description": "Save your universal .srt subtitle file for Premiere, DaVinci Resolve, or VLC."
        }
      ],
      "featuresTitle": "Why Convert VTT to SRT?",
      "features": [
        {
          "title": "Universal Video Editor Compatibility",
          "description": "SRT is supported across Adobe Premiere, DaVinci Resolve, Final Cut Pro, Sony Vegas, and VLC player.",
          "icon": "video"
        },
        {
          "title": "Sequential Cue Numbering",
          "description": "Automatically inserts 1, 2, 3... sequential numbering required by the SubRip standard.",
          "icon": "list"
        }
      ],
      "faqsTitle": "Frequently Asked Questions",
      "faqs": [
        {
          "question": "How do I convert VTT to SRT?",
          "answer": "To convert VTT to SRT, paste your WebVTT subtitle text or upload a .vtt file into our free online converter. The tool automatically removes the WEBVTT header signature, converts all decimal millisecond points (00:00:01.000) into commas (00:00:01,000), and adds sequential cue numbering (1, 2, 3...). You can instantly copy or download the resulting standard .srt file."
        },
        {
          "question": "Can I convert VTT to SRT online for free?",
          "answer": "Yes, SRTConverters.com is 100% free with no registration, file size limits, or watermarks. All conversion executes locally in your browser via client-side JavaScript, ensuring maximum privacy since your caption files and video scripts are never transmitted to any external server."
        },
        {
          "question": "Can I simply rename a VTT file to SRT?",
          "answer": "No. Simply renaming the file extension from .vtt to .srt will cause video editors and media players to reject the file. Renaming does not insert the mandatory sequential cue numbers, nor does it convert millisecond decimal points into commas or strip the WEBVTT header. You must convert the internal syntax using our tool."
        },
        {
          "question": "What is the difference between VTT and SRT?",
          "answer": "WebVTT (.vtt) is the modern W3C standard designed for HTML5 web video, featuring a 'WEBVTT' header, decimal millisecond timestamps (00:00:01.500), and CSS styling. SubRip (.srt) is a legacy desktop standard requiring sequential cue numbers and comma millisecond timestamps (00:00:01,500), widely used by NLE video editors and media players."
        },
        {
          "question": "How do I convert VTT to SRT using FFmpeg?",
          "answer": "To convert a WebVTT file to SubRip format using FFmpeg, run the terminal command: `ffmpeg -i input.vtt output.srt`. FFmpeg reads the WebVTT file, strips web metadata, and writes a valid .srt file. If you prefer not to install command-line tools, our free online browser converter provides the exact same output immediately."
        },
        {
          "question": "Does converting VTT to SRT change the subtitle timing?",
          "answer": "No. A standard format conversion strictly preserves the exact start and end timestamps of every caption cue. Only the delimiter syntax changes from a period to a comma (e.g., '00:01:23.456' becomes '00:01:23,456'). The on-screen duration and synchronization with your video remain 100% identical."
        },
        {
          "question": "What happens to VTT styling and positioning when converting to SRT?",
          "answer": "Because standard SubRip does not support WebVTT CSS styling or screen positioning coordinates (such as line:X% or align:start), these web-specific attributes are stripped during conversion. Basic inline bold and italic tags (<b>, <i>) are preserved, while subtitles default to bottom-center alignment in your video editor."
        },
        {
          "question": "Why won't my converted SRT file open in my video player?",
          "answer": "If an SRT file fails to load, the most common cause is missing sequential cue numbering (1, 2, 3...) or invalid timestamp syntax containing periods instead of commas. Converting your file with our online tool ensures that every cue has valid sequential integers and proper comma-delimited timecodes."
        },
        {
          "question": "Does VTT to SRT conversion preserve subtitle text and line breaks?",
          "answer": "Yes. All visible spoken dialogue lines, speaker labels, punctuation, and multi-line breaks are preserved during conversion. If a caption cue contains two lines of text, the exact two-line formatting is retained in the output SRT file."
        },
        {
          "question": "Why does an SRT file use commas instead of periods in timestamps?",
          "answer": "The SubRip (.srt) format was originally developed in France in the late 1990s. In European formatting, commas are standard decimal separators. As a result, the SubRip specification established commas for millisecond delimiters (00:00:01,500), whereas WebVTT adopted decimal periods for web standards compliance."
        }
      ]
    },
    "srtToAss": {
      "id": "srt-to-ass",
      "name": "SRT to ASS Converter",
      "shortName": "SRT to ASS",
      "badge": "ASS v4+ Ready",
      "tagline": "Convert SubRip (.SRT) Subtitles to Advanced SubStation Alpha (.ASS) Format",
      "description": "Convert plain SRT subtitles into styled Advanced SubStation Alpha (.ass) format with custom typography, colors, borders, and coordinate positioning for Aegisub and media players.",
      "h1": "SRT to ASS Converter",
      "metaTitle": "SRT to ASS Converter – Convert Subtitles to ASS Online | SRTConverters",
      "metaDescription": "Convert SubRip (.srt) subtitles to Advanced SubStation Alpha (.ass) format online for free. Custom styling, colors, positioning, and 100% browser privacy.",
      "settingsLabels": {},
      "stepsTitle": "How to Convert SRT to ASS in 3 Easy Steps",
      "steps": [
        {
          "step": "1",
          "title": "Upload or Paste SRT Subtitles",
          "description": "Drop your .srt subtitle file into the upload zone or paste the raw subtitle dialogue text directly into the editor."
        },
        {
          "step": "2",
          "title": "Instant ASS v4.00+ Formatting",
          "description": "Our client-side engine parses your cues, converts timestamps to centiseconds, translates styling tags, and generates valid ASS headers."
        },
        {
          "step": "3",
          "title": "Download Converted .ASS File",
          "description": "Copy the ASS code to your clipboard or download your ready-to-use .ass subtitle file for Aegisub, VLC, MPV, or editing software."
        }
      ],
      "featuresTitle": "Why Convert SRT to ASS?",
      "features": [
        {
          "title": "Advanced Styling & Custom Fonts",
          "description": "Unlock custom font families, font sizes, outline strokes, drop shadows, and rich color overrides not supported by plain SRT.",
          "icon": "pen"
        },
        {
          "title": "Precise Screen Positioning",
          "description": "Support alignment presets and exact (X, Y) pixel coordinates to place captions anywhere on screen and avoid covering graphics.",
          "icon": "grid"
        },
        {
          "title": "100% Client-Side Privacy",
          "description": "All subtitle parsing and conversions occur inside your web browser. No server uploads, no data storage, zero privacy risks.",
          "icon": "shield"
        },
        {
          "title": "Aegisub & Video Player Ready",
          "description": "Generates clean ASS v4.00+ syntax fully recognized by Aegisub, VLC, MPV, HandBrake, DaVinci Resolve, and Premiere Pro.",
          "icon": "check"
        }
      ],
      "faqsTitle": "Frequently Asked Questions",
      "faqs": [
        {
          "question": "How do I convert an SRT file to ASS?",
          "answer": "To convert an SRT file to ASS, upload your .srt file or paste your subtitle text into our online converter. The tool immediately transforms your SubRip cues into standard Advanced SubStation Alpha (v4.00+) syntax, including mandatory [Script Info], [V4+ Styles], and [Events] sections. You can then download the resulting .ass file instantly."
        },
        {
          "question": "Can I convert SRT to ASS online for free?",
          "answer": "Yes, our SRT to ASS converter is 100% free with no registration, no daily conversion limits, and no watermarks. Everything runs locally in your web browser via JavaScript, meaning your files and private transcripts are never sent to external servers."
        },
        {
          "question": "What is the difference between SRT and ASS subtitles?",
          "answer": "SRT (SubRip) is a basic plain-text subtitle format containing only sequence numbers, millisecond timestamps, and text with minimal styling. ASS (Advanced SubStation Alpha) is an advanced subtitle specification that enables complex visual styling, custom typography, font colors, outline strokes, drop shadows, screen coordinates, and karaoke effects."
        },
        {
          "question": "Can I edit the converted ASS file in Aegisub?",
          "answer": "Yes. Our converter generates fully compliant ASS v4.00+ syntax specifically designed for Aegisub. Once you download the .ass file, open it in Aegisub to adjust font styles, colors, positioning tags, karaoke effects, or audio synchronization."
        },
        {
          "question": "Can I simply rename an .srt file to .ass?",
          "answer": "No. Renaming an .srt file to .ass will cause subtitle editors and video players to error out or fail to render subtitles. ASS requires specific structured blocks like [Script Info], [V4+ Styles], and Dialogue event lines. You must use a dedicated converter to build the correct internal file structure."
        },
        {
          "question": "Does converting SRT to ASS change subtitle timing?",
          "answer": "No. All start and end timestamps are precisely preserved and converted from SRT millisecond notation (HH:MM:SS,mmm) to standard ASS centisecond notation (H:MM:SS.cs). Your subtitle sync with the video will remain exact."
        },
        {
          "question": "Which media players support ASS subtitles?",
          "answer": "Most modern media players support ASS subtitles with full styling, including VLC Media Player, MPV, MPC-HC, PotPlayer, and Plex (when configured for direct play or transcoding). Video encoders like HandBrake and FFmpeg can also hardburn ASS styles directly into MP4 videos."
        },
        {
          "question": "Are formatting tags like bold and italics preserved?",
          "answer": "Yes. Common SRT formatting tags like <i>, <b>, <u>, and <font color> are automatically converted into standard ASS override tags ({\\i1}, {\\b1}, {\\u1}, and {\\c&HBBGGRR&}), ensuring your text emphasis remains intact."
        }
      ]
    },
    "assToSrt": {
          "id": "ass-to-srt",
          "name": "ASS to SRT Converter",
          "shortName": "ASS to SRT",
          "badge": "Universal SubRip",
          "tagline": "Convert Advanced SubStation Alpha (.ASS) Subtitles to Clean SubRip (.SRT) Format",
          "description": "Convert styled Advanced SubStation Alpha (.ass / .ssa) subtitles into clean, universally compatible SubRip (.srt) files. Clean override tags, convert centisecond timestamps, and prepare subtitles for any media player or streaming service.",
          "h1": "ASS to SRT Converter Online",
          "metaTitle": "ASS to SRT Converter Online – Convert ASS to SRT Free | SRTConverters",
          "metaDescription": "Convert Advanced SubStation Alpha (.ass) subtitles to clean SubRip (.srt) format online for free. Clean tags, convert centiseconds, and download standard SRT files instantly.",
          "settingsLabels": {},
          "stepsTitle": "How to Convert ASS to SRT in 3 Easy Steps",
          "steps": [
                {
                      "step": "1",
                      "title": "Upload or Paste ASS Subtitles",
                      "description": "Drop your .ass or .ssa file into the upload zone or paste the raw Advanced SubStation Alpha subtitle content into the editor."
                },
                {
                      "step": "2",
                      "title": "Automatic Tag Cleaning & Timestamp Conversion",
                      "description": "Our client-side engine extracts dialogue lines, converts ASS centisecond timestamps into SRT milliseconds, translates line breaks, and cleans out complex override codes."
                },
                {
                      "step": "3",
                      "title": "Download Clean .SRT File",
                      "description": "Copy your converted SubRip captions to your clipboard or download the finalized .srt file immediately for playback on any smart TV, Plex, VLC, or mobile device."
                }
          ],
          "featuresTitle": "Why Convert ASS to SRT?",
          "features": [
                {
                      "title": "Universal Media Player Compatibility",
                      "description": "SubRip (.srt) is the most widely supported subtitle format in existence, playing natively on Smart TVs, streaming consoles, mobile devices, and older media hardware without rendering errors.",
                      "icon": "globe"
                },
                {
                      "title": "Intelligent Style & Tag Cleaning",
                      "description": "Automatically strips complex positioning (\\pos), alignment (\\an), font colors (\\c), and drawing shapes (\\p1) while preserving basic formatting (bold, italics, underline).",
                      "icon": "sparkles"
                },
                {
                      "title": "Accurate Centisecond-to-Millisecond Timing",
                      "description": "Converts ASS centisecond timestamps (H:MM:SS.cs) into exact millisecond SubRip intervals (HH:MM:SS,mmm), guaranteeing perfect audio and video synchronization.",
                      "icon": "clock"
                },
                {
                      "title": "100% Client-Side Privacy",
                      "description": "All conversion takes place locally inside your browser's memory. No subtitle files or personal dialogues are ever uploaded to an external server.",
                      "icon": "shield"
                }
          ],
          "faqsTitle": "Frequently Asked Questions",
          "faqs": [
                {
                      "question": "What is the difference between ASS and SRT subtitles?",
                      "answer": "Advanced SubStation Alpha (.ass) is a feature-rich subtitle format supporting custom typography, font sizing, exact screen positioning coordinates, vector drawings, karaoke timers, and alpha channel transparency. SubRip (.srt) is a lightweight, plain-text format designed for universal compatibility across almost every hardware player, TV, and video editing software."
                },
                {
                      "question": "Will formatting like colors and positioning be lost when converting ASS to SRT?",
                      "answer": "Yes, complex styling tags like screen coordinates (\\pos), alignment overrides (\\an), karaoke timers (\\k), and custom font colors are stripped because the standard SRT specification does not support them. However, basic text styling such as bold (<b>), italics (<i>), and underline (<u>) is preserved."
                },
                {
                      "question": "Does this converter preserve bold and italic formatting from ASS?",
                      "answer": "Yes. ASS override tags like {\\b1} and {\\i1} are automatically converted into standard HTML-like formatting tags (<b> and <i>), ensuring your dialogues retain their intended typographical emphasis in compliant video players."
                },
                {
                      "question": "How does the converter handle ASS timestamps and centiseconds?",
                      "answer": "ASS subtitle files record timestamps in centiseconds (hundredths of a second, H:MM:SS.cs), whereas SRT files use milliseconds (HH:MM:SS,mmm). Our converter parses the exact centisecond values and calculates the precise millisecond representation (e.g., 0:01:23.45 becomes 00:01:23,450), ensuring zero timing drift or audio desynchronization."
                },
                {
                      "question": "What happens to simultaneous or overlapping ASS lines?",
                      "answer": "When multiple character dialogue lines overlap in time (often used in anime fansubs for simultaneous speech or background music translations), our converter chronologically sorts and assigns each cue a unique sequential index in the generated SRT file. Most modern players can display concurrent SRT cues cleanly."
                },
                {
                      "question": "Can I convert anime fansub ASS files for playback on Plex or Smart TVs?",
                      "answer": "Yes! This is one of the most common reasons to convert ASS to SRT. Many smart TVs, streaming sticks, and Plex clients struggle to render complex ASS typography and may force heavy CPU transcoding. Converting to clean SRT enables smooth direct-play on Apple TV, Roku, Chromecast, and Smart TVs."
                },
                {
                      "question": "Can I convert ASS to SRT using command-line tools like FFmpeg?",
                      "answer": "Yes, you can run: ffmpeg -i input.ass -c:s srt output.srt. However, our browser-based tool requires no installation, provides instant visual feedback, cleans corrupted formatting, and works directly on mobile devices and Chromebooks."
                },
                {
                      "question": "Are my subtitle files uploaded to a server or kept private?",
                      "answer": "Your files are completely private. All conversion logic runs 100% locally in your web browser via JavaScript. No subtitle text, file data, or timestamps are ever sent across the network or stored on any server."
                }
          ]
    },
    "srtToSub": {
          "id": "srt-to-sub",
          "name": "SRT to SUB Converter",
          "shortName": "SRT to SUB",
          "badge": "Free & Client-Side",
          "tagline": "Convert SubRip (.SRT) Subtitles to MicroDVD and SubViewer (.SUB) Format Online",
          "description": "Convert SubRip (.srt) subtitles to SUB format (MicroDVD & SubViewer 2.0) online for free. Support for custom frame rates (FPS), frame-accurate syncing, and 100% browser privacy.",
          "h1": "SRT to SUB Converter Online",
          "metaTitle": "SRT to SUB Converter – Convert Subtitles to SUB Online | SRTConverters",
          "metaDescription": "Convert SubRip (.srt) subtitles to SUB format (MicroDVD & SubViewer) online for free. Custom frame rates (FPS), frame-accurate syncing, and 100% browser privacy.",
          "settingsLabels": {
                "timingMode": "Subtitle Format",
                "fixedDuration": "MicroDVD (.sub)",
                "cpsDuration": "SubViewer 2.0 (.sub)",
                "cpsLabel": "Video Frame Rate (FPS)",
                "cpsHint": "Select the frame rate of your video to ensure exact subtitle synchronization.",
                "startTime": "Include FPS Header",
                "startTimeHint": "Adds {1}{1}FPS header line to the MicroDVD file for player auto-detection.",
                "maxCharsPerLine": "Clean HTML Tags",
                "maxCharsHint": "Removes <i>, <b>, and font tags for compatibility with legacy hardware players."
          },
          "stepsTitle": "How to Convert SRT to SUB Online in 3 Steps",
          "steps": [
                {
                      "step": "1",
                      "title": "Upload or Paste SRT Subtitles",
                      "description": "Drag and drop your .srt file into the dropzone or paste your SubRip subtitle content directly into the text editor."
                },
                {
                      "step": "2",
                      "title": "Select Format & Video Frame Rate",
                      "description": "Choose MicroDVD or SubViewer format, and select your target video frame rate (e.g., 23.976, 24, 25, or 29.97 FPS) for frame-accurate timing."
                },
                {
                      "step": "3",
                      "title": "Download Converted SUB File",
                      "description": "Click Download .SUB to instantly save your converted subtitle file, or copy the formatted text directly to your clipboard."
                }
          ],
          "featuresTitle": "Why Use Our Online SRT to SUB Converter?",
          "features": [
                {
                      "title": "100% Client-Side Privacy",
                      "description": "Your subtitle files are converted entirely in your web browser. No files or scripts are ever uploaded to an external server.",
                      "icon": "shield"
                },
                {
                      "title": "MicroDVD & SubViewer Support",
                      "description": "Full compatibility with frame-indexed MicroDVD ({start}{end}) and timestamped SubViewer 2.0 subtitle formats.",
                      "icon": "file"
                },
                {
                      "title": "Frame-Accurate Synchronization",
                      "description": "Supports standard industry frame rates including 23.976, 24.0, 25.0 (PAL), 29.97 (NTSC), 30, and 60 FPS to prevent subtitle drift.",
                      "icon": "clock"
                },
                {
                      "title": "Legacy Device Compatibility",
                      "description": "Produces clean .sub files ready for standalone DVD players, DivX/XviD media consoles, car stereos, and vintage media centers.",
                      "icon": "split"
                }
          ],
          "faqsTitle": "Frequently Asked Questions About SRT to SUB Conversion",
          "faqs": [
                {
                      "question": "What is the difference between an SRT file and a SUB file?",
                      "answer": "SRT (SubRip) is a modern, time-based subtitle format that defines subtitle cues using millisecond timestamps (00:01:23,450 --> 00:01:26,800). It is universally supported across modern web browsers, media software, and smart TVs. In contrast, text-based SUB files—predominantly MicroDVD (.sub)—are frame-based subtitle formats originally built for legacy media players. Instead of clock hours and seconds, MicroDVD specifies cue visibility using video frame numbers ({start_frame}{end_frame}). A second text format using the .sub extension is SubViewer 2.0, which uses centisecond timestamps. Converting SRT to SUB allows you to watch videos on legacy hardware DVD players, car infotainment screens, and older standalone media centers that only accept frame-indexed .sub files."
                },
                {
                      "question": "Why do I need to select a frame rate (FPS) when converting SRT to SUB?",
                      "answer": "Because MicroDVD SUB files calculate when to show each subtitle cue based on video frames rather than absolute clock milliseconds, the converter must mathematically multiply the subtitle start and end timestamps by the exact frame rate of your video file (Frame = Time in Seconds × Frames Per Second). If you convert an SRT file using 25.000 FPS (PAL) but your video was shot or encoded at 23.976 FPS (standard cinema / NTSC film), the subtitles will progressively drift earlier or later as the movie plays. Selecting the matching frame rate guarantees frame-perfect synchronization throughout the entire film."
                },
                {
                      "question": "What is the difference between MicroDVD (.sub), SubViewer (.sub), and VobSub (.sub)?",
                      "answer": "The .sub file extension is historically shared by three completely different subtitle technologies: MicroDVD (.sub) is a lightweight, frame-based text format ({1250}{1380}Subtitle dialogue) used heavily by DivX/XviD players; SubViewer 2.0 (.sub) is a timestamp-based text format with a metadata header ([INFORMATION]) and centisecond timing (00:01:20.10,00:01:23.45); and VobSub (.sub + .idx) is NOT a text file, but rather contains raw bitmap image graphic packets extracted directly from DVD video discs. Our converter creates clean, standardized text-based SUB subtitles (MicroDVD and SubViewer 2.0) compatible with modern media players, editing tools, and vintage media hardware."
                },
                {
                      "question": "How do I find the correct frame rate (FPS) of my video file?",
                      "answer": "You can easily find the exact frame rate of your video file using free media players: In VLC Media Player, open the video, navigate to Tools > Codec Information (or press Ctrl+J / Cmd+I), select the Codec tab, and check the Frame rate property (such as 23.976023, 24, 25, or 29.970000). On Windows, right-click the video file, select Properties, click the Details tab, and inspect Frame rate. On macOS, press Cmd+I in QuickTime Player to view the Movie Inspector. You can also inspect the file with the free MediaInfo utility."
                },
                {
                      "question": "Why are my converted SUB subtitles drifting out of sync during video playback?",
                      "answer": "Subtitles that start in sync and slowly drift ahead or behind over the duration of the video are almost always caused by an FPS mismatch between the converted MicroDVD file and the video track. For example, if your movie runs at 23.976 FPS and you convert your SRT file with the default 25.000 FPS setting, the subtitles will display approximately 4.1% too fast (roughly 2.5 seconds out of sync every minute). To resolve this, verify the true video frame rate in VLC or MediaInfo and reconvert your SRT using the exact matching FPS value."
                },
                {
                      "question": "Can I convert a SUB file back to SRT format?",
                      "answer": "Yes. MicroDVD (.sub) and SubViewer (.sub) text subtitles can be converted back to standard SubRip (.srt). When converting MicroDVD to SRT, you simply divide the frame numbers by the video's frame rate to reconstruct millisecond timestamps: Time in Seconds = Frame Number / FPS. You can use subtitle utilities like Subtitle Edit or Aegisub, or our companion converters on SRTConverters."
                },
                {
                      "question": "Are my subtitle files uploaded to a remote server during conversion?",
                      "answer": "No. SRTConverters operates 100% locally in your web browser using client-side JavaScript. Your SRT subtitle files, scripts, text content, and generated SUB files are processed purely in your browser's private memory. No subtitle data is ever transmitted, uploaded, logged, or stored on our servers."
                },
                {
                      "question": "How can I convert SRT to SUB on the command line using FFmpeg?",
                      "answer": "You can convert SRT to MicroDVD SUB using FFmpeg by specifying the subtitle codec and the target video frame rate. The standard syntax is: ffmpeg -i input.srt -c:s microdvd output.sub. If you need to enforce a specific frame rate during batch processing or when muxing with a video stream, specify the rate flag: ffmpeg -i input.srt -r 23.976 -c:s microdvd output.sub. This is ideal for automated video encoding pipelines, batch folder processing, or command-line scripting."
                }
          ]
    },
    "subToSrt": {
          "id": "sub-to-srt",
          "name": "SUB to SRT Converter",
          "shortName": "SUB to SRT",
          "badge": "Free & Client-Side",
          "tagline": "Convert MicroDVD & SubViewer (.SUB) Subtitles to Standard SubRip (.SRT) Online",
          "description": "Convert SUB subtitles (MicroDVD and SubViewer) to clean, standard SubRip (.srt) format online for free. Auto-detect frame rates, convert frame numbers to millisecond timestamps, and preserve full formatting.",
          "h1": "SUB to SRT Converter Online",
          "metaTitle": "SUB to SRT Converter Online – Convert SUB to SRT Free | SRTConverters",
          "metaDescription": "Convert SUB subtitles (MicroDVD & SubViewer) to clean SubRip (.srt) format online for free. Auto-detect frame rate (FPS), convert timestamps accurately, and download standard SRT files instantly.",
          "settingsLabels": {
                "timingMode": "Detected Format",
                "fixedDuration": "Auto-Detect",
                "cpsDuration": "MicroDVD ({frame}{frame})",
                "cpsLabel": "Video Frame Rate (FPS)",
                "cpsHint": "Select the frame rate of your video to ensure exact subtitle synchronization.",
                "startTime": "Auto-sync FPS Header",
                "startTimeHint": "Automatically read {1}{1}FPS header line from MicroDVD files when available.",
                "maxCharsPerLine": "Convert Formatting Tags",
                "maxCharsHint": "Converts {Y:i} tags to <i> and pipe breaks (|) to standard subtitle newlines."
          },
          "stepsTitle": "How to Convert SUB to SRT Online in 3 Steps",
          "steps": [
                {
                      "step": "1",
                      "title": "Upload or Paste SUB Subtitles",
                      "description": "Drag and drop your .sub file into the dropzone or paste your MicroDVD or SubViewer subtitle text directly into the input area."
                },
                {
                      "step": "2",
                      "title": "Verify Video Frame Rate (FPS)",
                      "description": "If your file is a MicroDVD format, verify the target video frame rate (e.g., 23.976, 24, 25, or 29.97 FPS) so frame numbers convert into precise clock timestamps."
                },
                {
                      "step": "3",
                      "title": "Download Converted SRT File",
                      "description": "Click Download .SRT to instantly save your converted SubRip file, or copy the formatted text directly to your clipboard for immediate use."
                }
          ],
          "featuresTitle": "Why Use Our Online SUB to SRT Converter?",
          "features": [
                {
                      "title": "100% Client-Side Privacy",
                      "description": "Your subtitle files are converted entirely in your web browser. No files, scripts, or video data are ever uploaded to a remote server.",
                      "icon": "shield"
                },
                {
                      "title": "MicroDVD & SubViewer Auto-Detection",
                      "description": "Intelligently identifies frame-indexed MicroDVD files, timestamped SubViewer 2.0/1.0 headers, and embedded {1}{1}FPS configuration cues.",
                      "icon": "file"
                },
                {
                      "title": "Frame-Accurate Millisecond Timing",
                      "description": "Calculates precise millisecond timestamps from video frame counts across all cinema, PAL, and NTSC broadcast frame rates without sync drift.",
                      "icon": "clock"
                },
                {
                      "title": "VobSub Detection & Clean Formatting",
                      "description": "Instantly alerts you if a file is a binary DVD VobSub image packet, and automatically translates pipe delimiters (|) and style tags into valid SRT markup.",
                      "icon": "split"
                }
          ],
          "faqsTitle": "Frequently Asked Questions About SUB to SRT Conversion",
          "faqs": [
                {
                      "question": "What is the difference between a SUB file and an SRT file?",
                      "answer": "SRT (SubRip) is the modern universal standard for text subtitles. It identifies subtitle cues using sequential counter numbers and absolute clock timestamps down to the millisecond (00:01:23,450 --> 00:01:26,800). SRT files are natively supported by virtually all modern media players, streaming services (YouTube, Netflix, Vimeo), editing suites (Premiere Pro, DaVinci Resolve, Final Cut), and smart televisions. In contrast, text-based SUB files—primarily MicroDVD (.sub)—rely on video frame numbers ({start_frame}{end_frame}) rather than clock time, making playback dependent on the exact playback frame rate. SubViewer (.sub) uses centisecond timestamps. Converting SUB to SRT unlocks universal playback across modern software, operating systems, and video platforms without relying on obsolete codecs or specialized legacy players."
                },
                {
                      "question": "Why do I need to specify a frame rate (FPS) when converting MicroDVD SUB to SRT?",
                      "answer": "MicroDVD SUB files do not contain absolute hours, minutes, or seconds. Instead, each cue specifies the video frame number at which the subtitle should appear and disappear (for example: {1200}{1350}Dialogue line). To transform these frame numbers into standard SRT millisecond timestamps, the converter must know the exact playback speed of your video file using the formula: Milliseconds = Round((Frame Number / Video FPS) × 1000). If you convert a file at 25 FPS (PAL) when the video actually plays at 23.976 FPS (standard cinema / NTSC film), the subtitle timestamps will drift out of sync by approximately 2.5 seconds every minute. Specifying the exact video frame rate ensures millisecond-accurate timing throughout the entire video."
                },
                {
                      "question": "What is the difference between MicroDVD (.sub), SubViewer (.sub), and VobSub (.sub)?",
                      "answer": "The .sub file extension represents three completely distinct subtitle formats: 1. MicroDVD (.sub) is a lightweight text format using curly-bracket frame numbers ({start_frame}{end_frame}Line1|Line2) popular in early DivX/XviD media; 2. SubViewer (.sub) is a text format containing a metadata header ([INFORMATION]) followed by centisecond timestamps (00:01:20.50,00:01:23.80) and newline tags ([br]); 3. VobSub (.sub + .idx) is a binary container storing raw DVD bitmap graphics (scanned images of subtitles) rather than plain text. Our converter handles both MicroDVD and SubViewer text formats automatically, and provides an immediate warning if you upload a binary VobSub file."
                },
                {
                      "question": "How do I find the correct frame rate (FPS) of my video file?",
                      "answer": "You can find the exact frame rate of your video file using standard free media tools: In VLC Media Player, open the video, navigate to Tools > Codec Information (or press Ctrl+J / Cmd+I), click the Codec tab, and check the 'Frame rate' value (common values are 23.976023, 24, 25, 29.970000, 30, or 60). In Windows File Explorer, right-click the video file, select Properties, click the Details tab, and read the Frame rate field. On macOS, open the file in QuickTime Player and press Cmd+I to view the Movie Inspector window. Alternatively, you can use the open-source MediaInfo utility for an exhaustive technical report."
                },
                {
                      "question": "Why are my converted SRT subtitles drifting out of sync during video playback?",
                      "answer": "Subtitle drift—where subtitles start synchronized but gradually appear earlier or later over time—is almost always caused by an FPS mismatch during conversion. For example, converting a 23.976 FPS video with a 25.000 FPS setting causes subtitles to display 4.1% faster than the video audio, drifting by over 6 seconds after just 2.5 minutes of playback. To fix this, verify the true video frame rate using VLC or MediaInfo, return to our converter, select the matching FPS option, and reconvert your SUB file. If your MicroDVD file contains a `{1}{1}FPS` header line, our converter will read and apply it automatically."
                },
                {
                      "question": "Can this tool convert binary VobSub (.sub) files extracted from DVDs?",
                      "answer": "No. VobSub (.sub) files are not text documents; they are compiled binary archives containing bitmap graphic images of rendered subtitles extracted directly from DVD video discs. Because binary bitmap subtitles contain pixel graphics rather than alphanumeric characters, converting VobSub to SRT requires Optical Character Recognition (OCR) software that visually inspects each subtitle picture and transcribes the characters into text. If you upload a VobSub file, our tool will safely detect the binary header and display a helpful alert guiding you to use desktop OCR utilities such as Subtitle Edit, OCR-SubRip, or BDSup2Sub."
                },
                {
                      "question": "Are my subtitle files uploaded to an external server during conversion?",
                      "answer": "No. SRTConverters runs 100% client-side inside your web browser using modern Web APIs and JavaScript. Your subtitle files, text inputs, scripts, and converted SRT output never leave your computer or device. No data is transmitted over the network, uploaded to cloud storage, or stored on external servers, ensuring complete privacy, enterprise security, and instantaneous conversion speed regardless of your internet connection."
                },
                {
                      "question": "How can I convert SUB to SRT on the command line using FFmpeg?",
                      "answer": "You can convert SUB subtitles to standard SRT using FFmpeg on your terminal. For timestamped SubViewer files, run: ffmpeg -i input.sub output.srt. For frame-indexed MicroDVD files, you must specify the video frame rate using the -r flag so FFmpeg knows how to calculate timestamps: ffmpeg -r 23.976 -i input.sub output.srt. If your SUB file uses legacy ANSI/Windows-1252 or ISO-8859-1 character encoding with accented letters, add the sub_charenc parameter: ffmpeg -sub_charenc CP1252 -r 25 -i input.sub output.srt. This is especially useful for automated batch folder processing and command-line video workflows."
                }
          ]
    },
    sbvToSrt: {
      "id": "sbv-to-srt",
      "name": "SBV to SRT Converter",
      "shortName": "SBV to SRT",
      "badge": "Free & Client-Side",
      "tagline": "Convert YouTube Captions (.SBV) to Standard SubRip (.SRT) Online",
      "description": "Convert YouTube SBV and SubViewer subtitle files to clean, universal SubRip (.srt) format online for free. Auto-format timestamps, decode HTML entities, remove sound cues, and download standard SRT files instantly.",
      "h1": "SBV to SRT Converter Online",
      "metaTitle": "SBV to SRT Converter Online – Convert YouTube Captions to SRT Free | SRTConverters",
      "metaDescription": "Convert YouTube SBV and SubViewer subtitle files to clean SubRip (.srt) format online for free. Auto-format timestamps, decode HTML entities, and download standard SRT files instantly.",
      "settingsLabels": {
            "timingMode": "Subtitle Cleaning Options",
            "fixedDuration": "Decode HTML Entities",
            "cpsDuration": "Converts &amp;, &#39;, &quot;, &lt;, &gt; to clean readable characters",
            "cpsLabel": "Remove Sound Descriptors",
            "cpsHint": "Strip [Music], [Applause], and sound effects from dialogue cues",
            "startTime": "Normalize Whitespace",
            "startTimeHint": "Clean redundant spaces and remove empty subtitle lines"
      },
      "stepsTitle": "How to Convert SBV to SRT Online in 3 Steps",
      "steps": [
            {
                  "step": "1",
                  "title": "Upload or Paste SBV Subtitles",
                  "description": "Drag and drop your YouTube .sbv file into the dropzone or paste your SubViewer caption text directly into the input area."
            },
            {
                  "step": "2",
                  "title": "Configure Cleaning Preferences",
                  "description": "Optionally toggle HTML entity decoding (fixing &amp; and &#39;) and choose whether to strip automated sound descriptors like [Music] or [Applause]."
            },
            {
                  "step": "3",
                  "title": "Download Converted SRT File",
                  "description": "Click Download .SRT to instantly save your converted SubRip subtitle file, or copy the formatted text directly to your clipboard for your video editor or player."
            }
      ],
      "featuresTitle": "Why Use Our Online SBV to SRT Converter?",
      "features": [
            {
                  "title": "Exact Millisecond Preservation",
                  "description": "Every start and end timestamp is accurately preserved down to the millisecond, converting SBV decimal dots into standard SRT comma delimiters with two-digit hour padding.",
                  "icon": "zap"
            },
            {
                  "title": "Automatic HTML Entity Decoding",
                  "description": "YouTube caption exports frequently contain raw HTML entities like &amp;, &#39;, and &quot;. Our tool automatically decodes them into clean, human-readable text.",
                  "icon": "layers"
            },
            {
                  "title": "Sound Effect Filtering",
                  "description": "Easily strip automated speech-to-text sound cues such as [Music], [Applause], and [Laughter] to produce clean, professional dialogue subtitles.",
                  "icon": "shield"
            },
            {
                  "title": "100% Client-Side Privacy",
                  "description": "All conversion runs purely inside your browser. Your subtitle files, scripts, and video transcripts are never uploaded, stored, or sent to external servers.",
                  "icon": "split"
            }
      ],
      "faqsTitle": "Frequently Asked Questions About SBV to SRT Conversion",
      "faqs": [
            {
                  "question": "What is an SBV file and how does it differ from an SRT file?",
                  "answer": "An SBV (.sbv) file, also known as YouTube SubViewer format, is a plain-text subtitle format developed by Google specifically for YouTube captions. In an SBV file, each subtitle block begins directly with a comma-separated timestamp pair (e.g., 0:00:01.000,0:00:04.500) followed by the dialogue text, with no sequential cue index numbers. In contrast, SubRip (.srt) is the worldwide standard for subtitles across video players and editing software. An SRT file requires a numeric cue counter (1, 2, 3...), uses an arrow separator (' --> ') with commas before milliseconds (00:00:01,000 --> 00:00:04,500), and pads hours to two digits. Converting SBV to SRT enables you to use YouTube captions in external software like Premiere Pro, DaVinci Resolve, VLC, and Plex."
            },
            {
                  "question": "Why does YouTube Studio export captions in .sbv format instead of .srt?",
                  "answer": "YouTube historically adopted the SubViewer format variant (.sbv) during the early days of automated speech recognition and captioning. The format was chosen for its minimalistic structure: it omits cue index numbers and uses a concise comma delimiter between start and end timestamps. While YouTube Studio allows creators to download automatic or manual captions as .sbv, most professional video editing suites, television sets, and media players do not support .sbv files natively, necessitating conversion to standard .srt."
            },
            {
                  "question": "How do I download an SBV subtitle file from YouTube Studio?",
                  "answer": "To download your captions from YouTube: (1) Log in to YouTube Studio and select 'Subtitles' from the left menu. (2) Click on the video containing the captions you want. (3) Next to the published subtitle language or automatic captions track, click the three-dots menu (Options) and select 'Download'. (4) Choose '.sbv' (or SubViewer). YouTube will download a file named 'captions.sbv', which you can drop directly into our converter to transform into standard .srt."
            },
            {
                  "question": "How do SBV timestamps differ from standard SubRip SRT timestamps?",
                  "answer": "SBV timestamps use a single comma between the start and end timecodes and periods before milliseconds, frequently using single-digit hours: '0:01:23.450,0:01:27.800'. SubRip SRT timestamps require an arrow with spaces (' --> '), commas before milliseconds, and strictly two digits for hours: '00:01:23,450 --> 00:01:27,800'. Additionally, SRT requires an integer sequence number (1, 2, 3...) immediately above the timestamp line. Our converter handles all of these reformatting adjustments automatically."
            },
            {
                  "question": "Why does my YouTube SBV file contain strange codes like &amp; and &#39;?",
                  "answer": "YouTube caption export tools encode special typographic characters as HTML entities to ensure safe rendering inside web browsers. For example, an ampersand is exported as '&amp;', single quotes or apostrophes as '&#39;' or '&apos;', quotation marks as '&quot;', and angle brackets as '&lt;' and '&gt;'. When played in a desktop video editor or VLC, these raw codes appear literally on screen, making dialogue look broken. Our converter automatically decodes all HTML entities into their actual punctuation characters."
            },
            {
                  "question": "Can I import the converted SRT subtitles into Premiere Pro, DaVinci Resolve, and Final Cut Pro?",
                  "answer": "Yes. Standard SubRip (.srt) is universally recognized by all professional non-linear video editing (NLE) software, including Adobe Premiere Pro, DaVinci Resolve, Apple Final Cut Pro, Avid Media Composer, CapCut, and Vegas Pro. Once converted, simply import the .srt file into your media pool and drag it onto your editing timeline as a dedicated subtitle or caption track."
            },
            {
                  "question": "Are my subtitle files uploaded to a remote server during conversion?",
                  "answer": "No. SRTConverters processes 100% of your subtitle files locally inside your web browser using client-side JavaScript. Your SBV captions, video transcripts, and converted SRT files never leave your computer, ensuring complete confidentiality, zero data leakage, and compliance with corporate privacy policies."
            },
            {
                  "question": "How can I convert SBV to SRT on the command line using Python or FFmpeg?",
                  "answer": "You can convert SBV to SRT using FFmpeg with the command: 'ffmpeg -i input.sbv -c:s srt output.srt'. If using Python, you can read the file in blocks of lines, split timestamps on the comma, replace decimal dots with commas, and write sequential counters. Our online tool performs the exact same mathematical parsing instantly without requiring Python, terminal installations, or FFmpeg binaries."
            }
      ]
}
  },
  "es": {
    "directory": {
      "title": "Todas las Herramientas de Subtítulos y SRT",
      "subtitle": "Herramientas de conversión de subtítulos gratuitas, instantáneas y basadas en el navegador. Sin instalación, sin subir archivos a servidores, 100% privado.",
      "metaTitle": "Herramientas Gratuitas de Subtítulos y SRT | SRTConverters",
      "metaDescription": "Explora nuestra suite de herramientas de subtítulos online gratis. Convierte TXT a SRT, SRT a Texto, SRT a VTT y VTT a SRT de forma segura.",
      "convertersCategory": "Convertidores de Subtítulos",
      "utilitiesCategory": "Utilidades de Subtítulos",
      "openTool": "Abrir Herramienta",
      "clientSideBadge": "100% en el Navegador"
    },
    "txtToSrt": {
      "id": "txt-to-srt",
      "name": "Convertidor de TXT a SRT",
      "shortName": "TXT a SRT",
      "badge": "Gratis y en el Navegador",
      "tagline": "Convierte Texto Plano y Transcripciones en Archivos de Subtítulos SubRip (.SRT) Sincronizados",
      "description": "Convierte transcripciones, guiones y letras de canciones en subtítulos SRT con velocidad de lectura configurable y marcas de tiempo estimadas.",
      "h1": "Convertidor de TXT a SRT",
      "metaTitle": "Convertidor TXT a SRT – Convertir Texto a Subtítulos Gratis | SRTConverters",
      "metaDescription": "Convierte transcripciones de texto (TXT) a formato de subtítulos SRT gratis y online. Tiempos configurables, cálculo de caracteres por segundo y 100% de privacidad.",
      "settingsLabels": {
        "timingMode": "Modo de Cálculo de Tiempos",
        "cpsLabel": "Velocidad de Lectura (CPS)",
        "cpsHint": "Caracteres por segundo (15-20 es óptimo para la legibilidad)",
        "maxCharsPerLine": "Máximo de Caracteres por Línea",
        "maxCharsHint": "Recomendado 37-42 caracteres para video y redes sociales",
        "splitMode": "Estrategia de División de Texto",
        "splitSentence": "Dividir por Frases y Signos de Puntuación",
        "splitParagraph": "Dividir por Párrafos",
        "splitLine": "Dividir por Saltos de Línea",
        "gapBetweenSubtitles": "Intervalo Entre Subtítulos (ms)",
        "gapHint": "Pausa entre subtítulos consecutivos (ej. 100ms)"
      },
      "stepsTitle": "Cómo Convertir Texto a Subtítulos SRT en 3 Pasos",
      "steps": [
        {
          "step": "1",
          "title": "Pega Texto o Sube Archivo",
          "description": "Escribe o pega tu transcripción en el cuadro de entrada, o arrastra y suelta un archivo de texto plano .txt directamente."
        },
        {
          "step": "2",
          "title": "Configura la Sincronización",
          "description": "Ajusta la velocidad de lectura (CPS), los caracteres máximos por línea y las reglas de división."
        },
        {
          "step": "3",
          "title": "Previsualiza y Descarga .SRT",
          "description": "Revisa los subtítulos generados en la vista previa en vivo, copia al portapapeles o descarga el archivo .srt al instante."
        }
      ],
      "featuresTitle": "¿Por qué Usar Nuestro Convertidor de TXT a SRT?",
      "features": [
        {
          "title": "100% Privado y en el Navegador",
          "description": "Ningún archivo se envía a servidores externos. Toda la conversión se procesa de forma segura en tu navegador.",
          "icon": "shield"
        },
        {
          "title": "División Inteligente por Puntuación",
          "description": "Divide bloques de texto extensos en puntos, comas y signos de interrogación para una lectura natural.",
          "icon": "split"
        },
        {
          "title": "Cálculo de Tiempo CPS",
          "description": "Calcula la duración en pantalla según el conteo de caracteres y la velocidad de lectura estándar.",
          "icon": "clock"
        },
        {
          "title": "Formato SRT Estándar",
          "description": "Genera archivos SubRip compatibles con YouTube, Premiere Pro, DaVinci Resolve, Final Cut y VLC.",
          "icon": "file"
        }
      ],
      "faqsTitle": "Preguntas Frecuentes",
      "faqs": [
        {
          "question": "¿Qué formato debe tener mi archivo TXT antes de convertirlo a SRT?",
          "answer": "Tu archivo TXT debe contener texto plano limpio sin formatos enriquecidos. Para un formateo óptimo de subtítulos, estructura tu transcripción TXT de modo que cada frase o diálogo ocupe su propia línea o separa ideas mediante párrafos. Mantener fragmentos de tamaño adecuado ayuda a que el convertidor calcule una sincronización precisa y genere subtítulos SRT equilibrados."
        },
        {
          "question": "¿Puede un archivo TXT contener marcas de tiempo para la conversión a SRT?",
          "answer": "Aunque los archivos TXT estándar suelen ser transcripciones de texto sin códigos de tiempo, algunas transcripciones exportadas ya contienen marcas de tiempo aproximadas. Si tu archivo TXT incluye tiempos, un convertidor común podría interpretarlos como diálogo. Nuestro convertidor calcula marcas de tiempo desde cero según la velocidad de lectura y puntuación."
        },
        {
          "question": "¿Qué formato de marcas de tiempo utiliza un archivo SRT?",
          "answer": "Un archivo SRT estándar utiliza números secuenciales seguidos de marcas de tiempo con el formato 00:00:01,000 --> 00:00:04,000 (horas:minutos:segundos,milisegundos). El estándar SubRip requiere una coma como delimitador de milisegundos, a diferencia de WebVTT que usa un punto. Nuestra herramienta genera automáticamente marcas de tiempo SRT estándar."
        },
        {
          "question": "¿Cuántos caracteres debe contener un subtítulo SRT?",
          "answer": "Para una lectura cómoda, las pautas profesionales recomiendan entre 37 y 42 caracteres por línea, con un máximo de dos líneas por subtítulo (entre 70 y 84 caracteres en total). No es una regla universal estricta: los videos móviles suelen requerir líneas más cortas, mientras que las pantallas grandes admiten oraciones más extensas."
        },
        {
          "question": "¿Puedo convertir una transcripción TXT con varios párrafos en subtítulos SRT?",
          "answer": "¡Sí! Puedes convertir transcripciones TXT con múltiples párrafos en subtítulos SRT sincronizados. Los saltos de párrafo actúan como pausas naturales en la segmentación. Al elegir la división por párrafos o frases, los bloques largos se dividen en fragmentos legibles con un ritmo natural, evitando saturar la pantalla."
        },
        {
          "question": "¿Por qué mi archivo SRT convertido muestra caracteres extraños o incorrectos?",
          "answer": "Los caracteres extraños suelen deberse a diferencias en la codificación del texto. Si tu archivo TXT de origen contiene tildes, signos de puntuación especiales o caracteres no ingleses, asegúrate de guardarlo en codificación UTF-8. Nuestro convertidor procesa todo en UTF-8 estándar, preservando acentos y símbolos en el archivo SRT final."
        },
        {
          "question": "¿Puedo usar signos de puntuación y saltos de línea para controlar la división de subtítulos?",
          "answer": "Totalmente. Los signos de puntuación (puntos, comas, signos de interrogación) y los saltos de línea deliberados son referencias clave para la segmentación. Al utilizar el modo de división por oraciones, el convertidor corta el texto en las pausas gramaticales naturales, logrando subtítulos SRT fluidos y fáciles de leer."
        },
        {
          "question": "¿Puedo usar un convertidor de TXT a SRT para subtítulos de YouTube?",
          "answer": "Sí, el formato SRT es totalmente compatible con YouTube, Vimeo, Facebook e Instagram. Tras convertir tu transcripción TXT en archivo SRT, puedes subir el .srt directamente en YouTube Studio. Como los convertidores automáticos estiman los tiempos según la velocidad de lectura, te recomendamos verificar la sincronización con el video antes de publicar."
        }
      ]
    },
    "srtToText": {
      "id": "srt-to-text",
      "name": "Convertidor de SRT a Texto",
      "shortName": "SRT a Texto",
      "badge": "Gratis y Rápido",
      "tagline": "Extrae Texto Plano Limpio y Transcripciones de Archivos de Subtítulos SubRip (.SRT)",
      "description": "Elimina marcas de tiempo, numeración secuencial y etiquetas de formato de tus archivos SubRip (.srt) para obtener transcripciones de texto limpias.",
      "h1": "Convertidor de SRT a Texto",
      "metaTitle": "Convertidor SRT a Texto – Extraer Texto de Subtítulos Gratis | SRTConverters",
      "metaDescription": "Extrae texto limpio de archivos de subtítulos SRT. Elimina marcas de tiempo y números con total privacidad en el navegador.",
      "settingsLabels": {
        "stripTimestamps": "Eliminar Marcas de Tiempo",
        "stripLineNumbers": "Eliminar Números de Línea",
        "joinParagraphs": "Unir en Párrafos Continuos"
      },
      "stepsTitle": "Cómo Convertir Subtítulos SRT a Texto Plano",
      "steps": [
        {
          "step": "1",
          "title": "Sube Archivo SRT o Pega Contenido",
          "description": "Arrastra tu archivo de subtítulos .srt o pega el texto en el panel."
        },
        {
          "step": "2",
          "title": "Selecciona Opciones de Limpieza",
          "description": "Elige si deseas eliminar marcas de tiempo, numeración y unir líneas en párrafos."
        },
        {
          "step": "3",
          "title": "Copia o Descarga el Texto Limpio",
          "description": "Copia la transcripción limpia al portapapeles o descárgala como archivo .txt al instante."
        }
      ],
      "featuresTitle": "Beneficios Clave de Convertir SRT a Texto",
      "features": [
        {
          "title": "Extracción de Texto Limpio",
          "description": "Elimina todas las marcas de tiempo, números y etiquetas HTML (<b>, <i>) automáticamente.",
          "icon": "clean"
        },
        {
          "title": "Fusión en Párrafos",
          "description": "Combina fragmentos de subtítulos en párrafos coherentes para artículos o resúmenes.",
          "icon": "text"
        },
        {
          "title": "Instantáneo y Privado",
          "description": "Procesamiento instantáneo en el navegador sin límites de archivo ni cargas a servidores.",
          "icon": "lock"
        }
      ],
      "faqsTitle": "Preguntas Frecuentes",
      "faqs": [
        {
          "question": "¿Cómo convierto un archivo SRT a TXT?",
          "answer": "Para convertir un archivo SRT a TXT, pega el texto de tus subtítulos o sube tu archivo .srt en nuestro convertidor online gratuito. La herramienta elimina automáticamente la numeración secuencial y las marcas de tiempo, dejando solo el texto del diálogo limpio. Puedes elegir si conservar los tiempos o unir el texto en párrafos continuos, y luego copiar el resultado o descargarlo en formato .txt."
        },
        {
          "question": "¿Puedo convertir SRT a TXT online gratis?",
          "answer": "¡Sí! SRTConverters.com es 100% gratuito sin registros, suscripciones ni marcas de agua. Además, todo el procesamiento se ejecuta en tu navegador mediante JavaScript, garantizando que tus archivos y transcripciones nunca se suban a servidores externos ni se almacenen."
        },
        {
          "question": "¿Qué sucede con las marcas de tiempo al convertir SRT a TXT?",
          "answer": "Por defecto, todas las marcas de tiempo en milisegundos (ej. '00:00:01,000 --> 00:00:04,500') se eliminan por completo. Esto genera un texto limpio y sin interrupciones, ideal para artículos de blog, resúmenes, notas de estudio y prompts de inteligencia artificial."
        },
        {
          "question": "¿Puedo convertir SRT a TXT conservando los códigos de tiempo?",
          "answer": "Sí. En el panel de configuración de nuestro convertidor, simplemente desmarca la casilla 'Eliminar Marcas de Tiempo'. La herramienta mantendrá las marcas de inicio y fin sobre cada frase del diálogo, ideal para guías de edición de video y transcripciones de referencia."
        },
        {
          "question": "¿Cuál es la diferencia entre un archivo SRT y un archivo TXT?",
          "answer": "Un archivo SRT (SubRip) es un formato de subtítulos con bloques numerados y marcas de tiempo precisas en milisegundos que indican a los reproductores de video cuándo mostrar cada subtítulo. Un archivo TXT es texto plano sin restricciones temporales, diseñado para lectura y edición tradicional."
        },
        {
          "question": "¿Cómo elimino las marcas de tiempo de un archivo SRT?",
          "answer": "La forma más rápida de quitar las marcas de tiempo es utilizar nuestro convertidor online. En lugar de borrar manualmente cada código de tiempo en un editor de texto, subes tu archivo .srt y la herramienta elimina todos los tiempos y números en milisegundos al instante."
        },
        {
          "question": "¿Puedo convertir un archivo de subtítulos SRT en una transcripción?",
          "answer": "Sí, convertir SRT a TXT es la forma estándar de transformar subtítulos de video en transcripciones legibles. Puedes activar la opción 'Unir en Párrafos Continuos' para combinar las frases en párrafos fluidos para artículos, apuntes o documentación."
        },
        {
          "question": "¿Por qué mi archivo TXT convertido contiene líneas repetidas?",
          "answer": "Las líneas repetidas suelen ocurrir si el archivo SRT original proviene de subtítulos automáticos o emisiones en directo que repiten la frase anterior para simular desplazamiento. Puedes identificar y borrar fácilmente las frases duplicadas en cualquier editor de texto."
        },
        {
          "question": "¿Puedo abrir un archivo SRT como texto plano?",
          "answer": "Sí, los archivos SRT son documentos de texto plano con una extensión especial. Puedes abrirlos en el Bloc de Notas o TextEdit, aunque verás todos los códigos de tiempo y números. Al convertirlos con nuestra herramienta, extraes únicamente el texto limpio."
        },
        {
          "question": "¿La conversión de SRT a TXT funciona con subtítulos en diferentes idiomas?",
          "answer": "Sí, nuestro convertidor es totalmente compatible con codificación UTF-8. Procesa a la perfección caracteres con acentos (español, francés, portugués, alemán), alfabetos no latinos (cirílico, griego, árabe, hebreo), caracteres asiáticos (chino, japonés, coreano) y símbolos especiales."
        }
      ]
    },
    "srtToVtt": {
      "id": "srt-to-vtt",
      "name": "Convertidor de SRT a VTT",
      "shortName": "SRT a VTT",
      "badge": "Compatible WebVTT",
      "tagline": "Convierte Subtítulos SubRip (.SRT) al Formato Moderno HTML5 WebVTT (.VTT)",
      "description": "Convierte subtítulos SRT estándar al formato moderno WebVTT para reproductores de video HTML5, navegadores y plataformas web.",
      "h1": "Convertidor de SRT a VTT",
      "metaTitle": "Convertidor SRT a VTT – Convertir Subtítulos a WebVTT Gratis | SRTConverters",
      "metaDescription": "Convierte subtítulos SubRip (.srt) a formato WebVTT (.vtt) online y gratis. Ideal para etiquetas de video HTML5 y reproductores web.",
      "settingsLabels": {},
      "stepsTitle": "Cómo Convertir SRT a WebVTT en 3 Pasos",
      "steps": [
        {
          "step": "1",
          "title": "Sube Archivo SRT",
          "description": "Pega el texto de tus subtítulos SRT o sube un archivo .srt."
        },
        {
          "step": "2",
          "title": "Formateo WebVTT Instantáneo",
          "description": "Añade el encabezado WEBVTT y convierte comas de tiempo en puntos decimales."
        },
        {
          "step": "3",
          "title": "Descarga el Archivo .VTT",
          "description": "Descarga tu archivo .vtt listo para usar en reproductores de video web."
        }
      ],
      "featuresTitle": "¿Por qué Convertir SRT a WebVTT?",
      "features": [
        {
          "title": "Compatible con Video HTML5",
          "description": "WebVTT es el estándar oficial del W3C para subtítulos en navegadores web modernos.",
          "icon": "globe"
        },
        {
          "title": "Conversión Precisa de Tiempos",
          "description": "Convierte con precisión comas de milisegundos a puntos decimales requeridos por WebVTT.",
          "icon": "check"
        }
      ],
      "faqsTitle": "Preguntas Frecuentes",
      "faqs": [
        {
          "question": "¿Cómo convierto un archivo SRT a VTT?",
          "answer": "Para convertir SRT a VTT, pega el texto de tus subtítulos SubRip o sube un archivo .srt a nuestro convertidor en línea gratuito. La herramienta añade de forma automática el encabezado obligatorio WEBVTT y transforma todas las comas de tiempo (00:00:01,000) en puntos decimales conformes a WebVTT (00:00:01.000). Puedes copiar el resultado de inmediato o descargar tu archivo .vtt listo para video HTML5."
        },
        {
          "question": "¿Puedo convertir SRT a VTT online gratis?",
          "answer": "¡Sí! SRTConverters.com es 100% gratuito sin registros, límites de archivo ni marcas de agua. Toda la conversión se procesa localmente en tu navegador mediante JavaScript, garantizando total privacidad al no enviar tus archivos ni subtítulos a servidores externos."
        },
        {
          "question": "¿Puedo simplemente cambiar la extensión de .srt a .vtt?",
          "answer": "No. Renombrar la extensión de .srt a .vtt en el explorador de archivos provocará que los reproductores web no muestren los subtítulos. El simple cambio de nombre no añade el encabezado 'WEBVTT' requerido en la primera línea ni convierte las comas de milisegundos en puntos decimales. Debes procesar el archivo con nuestra herramienta."
        },
        {
          "question": "¿Cuál es la diferencia entre SRT y VTT?",
          "answer": "SubRip (.srt) es un formato clásico pensado para reproductores de escritorio y editores de video. WebVTT (.vtt) es el estándar oficial del W3C para video HTML5 en la web. WebVTT inicia con el encabezado obligatorio 'WEBVTT', utiliza puntos decimales para milisegundos y admite estilos CSS (::cue) y posicionamiento en pantalla."
        },
        {
          "question": "¿Cómo convierto SRT a VTT usando FFmpeg?",
          "answer": "Para convertir un archivo SRT a WebVTT con FFmpeg desde la terminal, ejecuta: `ffmpeg -i entrada.srt salida.vtt`. FFmpeg lee el archivo SubRip y escribe automáticamente un archivo WebVTT válido. Si prefieres no instalar software de línea de comandos, nuestro convertidor web ofrece el mismo resultado al instante."
        },
        {
          "question": "¿Por qué mi archivo VTT no funciona en el navegador?",
          "answer": "Si los subtítulos no aparecen, revisa tres puntos clave: (1) Comprueba que la primera línea comience con 'WEBVTT', (2) Verifica que los tiempos usen puntos (00:00:01.000) en lugar de comas, y (3) Asegúrate de que el servidor web envíe la cabecera MIME Content-Type: text/vtt; charset=utf-8 y tenga configurados los permisos CORS."
        },
        {
          "question": "¿La conversión de SRT a VTT altera la sincronización de tiempo?",
          "answer": "No. La conversión conserva con total precisión los tiempos exactos de inicio y fin de cada bloque de subtítulo. Solo cambia la sintaxis del delimitador de milisegundos de coma a punto decimal (por ejemplo, '00:01:23,456' pasa a '00:01:23.456'). La sincronización con el video se mantiene idéntica."
        },
        {
          "question": "¿El convertidor de SRT a VTT preserva el texto de los subtítulos?",
          "answer": "Sí. Todo el diálogo, nombres de hablantes y etiquetas de formato básicas (como <i> para cursiva o <b> para negrita) se mantienen intactos. WebVTT admite estas etiquetas estándar, garantizando una visualización idéntica en la web."
        },
        {
          "question": "¿Por qué los subtítulos VTT necesitan el encabezado WEBVTT?",
          "answer": "La especificación oficial del W3C exige estrictamente que cualquier archivo WebVTT válido inicie con la palabra 'WEBVTT' en la primera línea como firma de formato. Los navegadores web verifican esta firma para validar el archivo antes de procesar los subtítulos."
        },
        {
          "question": "¿Qué formato debo usar para video HTML5: SRT o VTT?",
          "answer": "Siempre debes utilizar WebVTT (.vtt) para videos HTML5. Los navegadores web modernos admiten WebVTT de forma nativa a través del elemento estándar <track> sin necesidad de librerías JavaScript adicionales. SRT no cuenta con soporte nativo directo en navegadores web."
        }
      ]
    },
    "vttToSrt": {
      "id": "vtt-to-srt",
      "name": "Convertidor de VTT a SRT",
      "shortName": "VTT a SRT",
      "badge": "SubRip Universal",
      "tagline": "Convierte Subtítulos WebVTT (.VTT) en Archivos Estándar SubRip (.SRT)",
      "description": "Transforma archivos de subtítulos WebVTT en archivos universales SubRip (.srt) compatibles con editores de video y reproductores multimedia.",
      "h1": "Convertidor de VTT a SRT",
      "metaTitle": "Convertidor VTT a SRT – Convertir WebVTT a SubRip Gratis | SRTConverters",
      "metaDescription": "Convierte subtítulos WebVTT (.vtt) a formato SubRip (.srt) gratis y online. Elimina etiquetas VTT y añade numeración con total privacidad.",
      "settingsLabels": {},
      "stepsTitle": "Cómo Convertir WebVTT a SRT en 3 Pasos",
      "steps": [
        {
          "step": "1",
          "title": "Sube Archivo WebVTT",
          "description": "Pega tus subtítulos WebVTT o arrastra un archivo .vtt."
        },
        {
          "step": "2",
          "title": "Conversión Automática a SRT",
          "description": "Limpia encabezados WEBVTT, numera cada subtítulo secuencialmente y convierte puntos en comas.",
          "icon": "file"
        },
        {
          "step": "3",
          "title": "Descarga el Archivo .SRT",
          "description": "Guarda tu archivo .srt universal para Premiere, DaVinci Resolve o VLC."
        }
      ],
      "featuresTitle": "¿Por qué Convertir VTT a SRT?",
      "features": [
        {
          "title": "Compatibilidad Universal con Editores",
          "description": "SRT es compatible con Adobe Premiere, DaVinci Resolve, Final Cut Pro, Sony Vegas y VLC.",
          "icon": "video"
        },
        {
          "title": "Numeración Secuencial Automática",
          "description": "Inserta automáticamente los números secuenciales 1, 2, 3... requeridos por el estándar SubRip.",
          "icon": "list"
        }
      ],
      "faqsTitle": "Preguntas Frecuentes",
      "faqs": [
        {
          "question": "¿Cómo convierto un archivo VTT a SRT?",
          "answer": "Para convertir VTT a SRT, pega el texto de tus subtítulos WebVTT o sube un archivo .vtt a nuestro convertidor en línea gratuito. La herramienta elimina de inmediato el encabezado WEBVTT, convierte los puntos decimales de los milisegundos (00:00:01.000) en comas (00:00:01,000) y añade la numeración secuencial obligatoria (1, 2, 3...). Puedes copiar el resultado o descargar directamente el archivo .srt listo para usar."
        },
        {
          "question": "¿Puedo convertir VTT a SRT online gratis?",
          "answer": "¡Sí! SRTConverters.com es 100% gratuito sin necesidad de registro, límites de tamaño ni marcas de agua. Todo el procesamiento se realiza localmente en tu navegador mediante JavaScript, garantizando total privacidad al no enviar tus subtítulos ni transcripciones a servidores externos."
        },
        {
          "question": "¿Puedo simplemente cambiar la extensión de .vtt a .srt?",
          "answer": "No. Renombrar la extensión de .vtt a .srt en tu explorador de archivos hará que los editores de video y reproductores rechacen el archivo. Cambiar el nombre no añade los números de bloque obligatorios ni convierte los puntos de tiempo en comas ni elimina el encabezado WEBVTT. Es imprescindible procesar el archivo con nuestra herramienta."
        },
        {
          "question": "¿Cuál es la diferencia entre los formatos VTT y SRT?",
          "answer": "WebVTT (.vtt) es el estándar web del W3C para videos HTML5, con encabezado 'WEBVTT', marcas de tiempo con punto decimal (00:00:01.500) y soporte para CSS. SubRip (.srt) es el estándar clásico para software de escritorio y edición, que requiere números de bloque y comas para los milisegundos (00:00:01,500)."
        },
        {
          "question": "¿Cómo convierto VTT a SRT usando FFmpeg?",
          "answer": "Para convertir un archivo WebVTT a formato SubRip mediante la terminal con FFmpeg, ejecuta: `ffmpeg -i entrada.vtt salida.srt`. FFmpeg analiza el archivo WebVTT y genera un archivo .srt válido. Si prefieres no utilizar la consola, nuestro convertidor web ofrece el mismo resultado al instante."
        },
        {
          "question": "¿La conversión de VTT a SRT altera la sincronización de los subtítulos?",
          "answer": "No. La conversión de formato mantiene exactamente iguales los tiempos de inicio y fin de cada subtítulo. Solo se modifica el delimitador de milisegundos de punto a coma (por ejemplo, '00:01:23.456' pasa a '00:01:23,456'). La sincronización con el video permanece 100% intacta."
        },
        {
          "question": "¿Qué sucede con los estilos y posiciones de WebVTT al convertir a SRT?",
          "answer": "Dado que el formato estándar SubRip no admite propiedades CSS ni coordenadas de posición (como line:X% o align:start), estos atributos web se descartan en la conversión. Las etiquetas básicas de negrita y cursiva (<b>, <i>) se conservan, y los subtítulos se muestran centrados en la parte inferior."
        },
        {
          "question": "¿Por qué mi archivo SRT convertido no abre en mi reproductor?",
          "answer": "Si un archivo SRT no se reproduce, la causa más común es la falta de numeración secuencial (1, 2, 3...) o el uso de puntos en lugar de comas en los tiempos. Al usar nuestro convertidor en línea, te aseguras de que cada bloque cuente con índices enteros válidos y marcas de tiempo reglamentarias."
        },
        {
          "question": "¿La conversión de VTT a SRT preserva el texto y los saltos de línea?",
          "answer": "Sí. Todo el diálogo visible, nombres de oradores, signos de puntuación y saltos de línea en subtítulos de dos líneas se transfieren intactos al archivo SRT resultante."
        },
        {
          "question": "¿Por qué los archivos SRT usan comas en lugar de puntos en los tiempos?",
          "answer": "El formato SubRip (.srt) se creó en Francia a finales de la década de 1990. En gran parte de Europa, la coma es el separador decimal estándar. Por ello, la especificación SubRip estableció comas para los milisegundos (00:00:01,500), mientras que WebVTT adoptó el punto decimal según los estándares web."
        }
      ]
    },
    "srtToAss": {
      "id": "srt-to-ass",
      "name": "Convertidor de SRT a ASS",
      "shortName": "SRT a ASS",
      "badge": "Compatible con ASS v4+",
      "tagline": "Convierte Subtítulos SubRip (.SRT) al Formato Advanced SubStation Alpha (.ASS)",
      "description": "Transforma subtítulos SRT estándar al formato Advanced SubStation Alpha (.ass) con tipografía personalizada, colores, bordes y posicionamiento exacto para Aegisub y reproductores.",
      "h1": "Convertidor de SRT a ASS",
      "metaTitle": "Convertidor SRT a ASS – Convertir Subtítulos a ASS Online | SRTConverters",
      "metaDescription": "Convierte subtítulos SubRip (.srt) a formato Advanced SubStation Alpha (.ass) online y gratis. Estilos personalizados, colores, posición y 100% privacidad.",
      "settingsLabels": {},
      "stepsTitle": "Cómo Convertir SRT a ASS en 3 Sencillos Pasos",
      "steps": [
        {
          "step": "1",
          "title": "Sube o Pega Subtítulos SRT",
          "description": "Arrastra tu archivo .srt a la zona de subida o pega el texto de subtítulos directamente en el editor."
        },
        {
          "step": "2",
          "title": "Formato ASS v4.00+ Instantáneo",
          "description": "El conversor procesa los tiempos, traduce etiquetas de estilo y genera los bloques estándar [Script Info], [V4+ Styles] y [Events]."
        },
        {
          "step": "3",
          "title": "Descarga el Archivo .ASS",
          "description": "Copia el contenido al portapapeles o descarga el archivo .ass listo para Aegisub, VLC, MPV o edición de video."
        }
      ],
      "featuresTitle": "¿Por qué Convertir SRT a ASS?",
      "features": [
        {
          "title": "Estilos Avanzados y Fuentes Personalizadas",
          "description": "Permite elegir familias tipográficas, tamaños de letra, bordes contorneados, sombras y colores no admitidos en SRT plano.",
          "icon": "pen"
        },
        {
          "title": "Posicionamiento Exacto en Pantalla",
          "description": "Admite coordenadas (X, Y) y ajustes de alineación para colocar textos en cualquier parte de la pantalla sin tapar gráficos.",
          "icon": "grid"
        },
        {
          "title": "100% Privacidad en el Navegador",
          "description": "Todo el procesamiento se realiza localmente en tu navegador. Tus archivos nunca se suben a ningún servidor externo.",
          "icon": "shield"
        },
        {
          "title": "Listo para Aegisub y Reproductores",
          "description": "Genera código ASS v4.00+ completamente válido para Aegisub, VLC, MPV, HandBrake, DaVinci Resolve y Premiere Pro.",
          "icon": "check"
        }
      ],
      "faqsTitle": "Preguntas Frecuentes",
      "faqs": [
        {
          "question": "¿Cómo convertir un archivo SRT a ASS?",
          "answer": "Para convertir un archivo SRT a ASS, sube tu archivo .srt o pega el texto en nuestro convertidor online gratuito. La herramienta transforma los bloques en la sintaxis estándar de Advanced SubStation Alpha (v4.00+), generando las secciones obligatorias [Script Info], [V4+ Styles] y [Events]. Podrás descargar el archivo .ass resultante de inmediato."
        },
        {
          "question": "¿Puedo convertir SRT a ASS gratis online?",
          "answer": "Sí, SRTConverters.com es 100% gratuito, sin registro, sin marcas de agua y sin límites de archivos. Todo el procesamiento se ejecuta localmente en tu navegador web mediante JavaScript, por lo que tus archivos y transcripciones privadas nunca se envían a servidores externos."
        },
        {
          "question": "¿Cuál es la diferencia entre subtítulos SRT y ASS?",
          "answer": "El formato SRT (SubRip) es un formato básico de texto plano que solo contiene números de secuencia, marcas de tiempo en milisegundos y texto con formato mínimo. ASS (Advanced SubStation Alpha) es un estándar avanzado que permite elegir familias tipográficas, tamaños de texto, colores en BGR, contornos gruesos, sombras paralelas, coordenadas de pantalla y animaciones de karaoke."
        },
        {
          "question": "¿Puedo editar el archivo ASS en Aegisub?",
          "answer": "Sí. Nuestro convertidor produce sintaxis ASS v4.00+ estrictamente compatible con Aegisub. Una vez descargado el archivo .ass, puedes abrirlo en Aegisub para ajustar fuentes, colores, etiquetas de posición, efectos de karaoke o sincronización con el espectrograma de audio."
        },
        {
          "question": "¿Basta con cambiar la extensión de .srt a .ass?",
          "answer": "No. Si únicamente renombras un archivo .srt a .ass, los reproductores y editores de video mostrarán un error o no renderizarán los subtítulos. El formato ASS requiere una estructura interna con bloques como [Script Info], [V4+ Styles] y líneas Dialogue. Es indispensable utilizar un convertidor dedicado."
        },
        {
          "question": "¿La conversión modifica la sincronización?",
          "answer": "No. Todos los tiempos de inicio y fin se conservan con precisión exacta, pasando de la notación de milisegundos de SRT (HH:MM:SS,mmm) a la notación estándar de centésimas de segundo de ASS (H:MM:SS.cs). La sincronía con el video se mantiene inalterada."
        },
        {
          "question": "¿Qué reproductores multimedia admiten subtítulos ASS?",
          "answer": "La gran mayoría de reproductores modernos admiten subtítulos ASS con estilos visuales completos, incluidos VLC Media Player, MPV, MPC-HC, PotPlayer y Plex (cuando se reproduce directamente o se transcodifica). Además, herramientas como HandBrake y FFmpeg permiten incrustar (quemar) los estilos ASS directamente en videos MP4."
        },
        {
          "question": "¿Se conservan las etiquetas de formato como negrita y cursiva?",
          "answer": "Sí. Las etiquetas HTML estándar presentes en SRT como <i>, <b>, <u> y <font color> se transforman automáticamente en etiquetas nativas de sobreescritura ASS ({\\i1}, {\\b1}, {\\u1} y {\\c&HBBGGRR&}), asegurando que el énfasis del texto original se mantenga intacto."
        }
      ]
    },
    "assToSrt": {
          "id": "ass-to-srt",
          "name": "Convertidor ASS a SRT",
          "shortName": "ASS a SRT",
          "badge": "SubRip Universal",
          "tagline": "Convierte Subtítulos Advanced SubStation Alpha (.ASS) a Formato SubRip (.SRT) Limpio",
          "description": "Convierte subtítulos estilizados Advanced SubStation Alpha (.ass / .ssa) en archivos SubRip (.srt) limpios y universalmente compatibles. Limpia etiquetas de estilo, convierte marcas de tiempo en centisegundos y prepara subtítulos para cualquier televisor o reproductor.",
          "h1": "Convertidor ASS a SRT Online",
          "metaTitle": "Convertidor ASS a SRT Online – Convertir ASS a SRT Gratis | SRTConverters",
          "metaDescription": "Convierte subtítulos Advanced SubStation Alpha (.ass) a formato SubRip (.srt) limpio online y gratis. Limpia etiquetas, convierte marcas de tiempo y descarga archivos SRT al instante.",
          "settingsLabels": {},
          "stepsTitle": "Cómo Convertir ASS a SRT en 3 Fáciles Pasos",
          "steps": [
                {
                      "step": "1",
                      "title": "Sube o Pega Subtítulos ASS",
                      "description": "Arrastra tu archivo .ass o .ssa a la zona de carga o pega el texto plano del script directamente en el editor."
                },
                {
                      "step": "2",
                      "title": "Limpieza de Etiquetas y Conversión de Tiempo",
                      "description": "Nuestro motor en el navegador extrae los diálogos, convierte centisegundos a milisegundos, normaliza saltos de línea y elimina códigos de estilo complejos."
                },
                {
                      "step": "3",
                      "title": "Descarga el Archivo .SRT Limpio",
                      "description": "Copia los subtítulos SubRip al portapapeles o descarga el archivo .srt terminado para reproducir en Plex, Smart TV, VLC o dispositivos móviles."
                }
          ],
          "featuresTitle": "¿Por Qué Convertir ASS a SRT?",
          "features": [
                {
                      "title": "Compatibilidad Universal con Reproductores",
                      "description": "SubRip (.srt) es el formato de subtítulos más compatible del mundo, funcionando de forma nativa en Smart TVs, consolas y reproductores multimedia sin fallos de renderizado.",
                      "icon": "globe"
                },
                {
                      "title": "Limpieza Inteligente de Etiquetas de Estilo",
                      "description": "Elimina automáticamente coordenadas de posición (\\pos), alineaciones (\\an), colores (\\c) y dibujos vectoriales (\\p1) preservando negrita, cursiva y subrayado.",
                      "icon": "sparkles"
                },
                {
                      "title": "Sincronización Precisa de Centisegundos a Milisegundos",
                      "description": "Convierte los centisegundos de ASS (H:MM:SS.cs) en intervalos de milisegundos exactos de SRT (HH:MM:SS,mmm), garantizando una sincronía perfecta con el audio.",
                      "icon": "clock"
                },
                {
                      "title": "100% Privacidad en el Navegador",
                      "description": "Toda la conversión se procesa localmente en la memoria de tu navegador. Ningún archivo ni texto de diálogo se sube a servidores externos.",
                      "icon": "shield"
                }
          ],
          "faqsTitle": "Preguntas Frecuentes",
          "faqs": [
                {
                      "question": "¿Cuál es la diferencia entre los subtítulos ASS y SRT?",
                      "answer": "Advanced SubStation Alpha (.ass) es un formato de subtítulos avanzado con soporte para tipografías personalizadas, tamaños, coordenadas de posición exactas, dibujos vectoriales y efectos de karaoke. SubRip (.srt) es un formato de texto plano diseñado para máxima compatibilidad universal en prácticamente cualquier reproductor o televisor."
                },
                {
                      "question": "¿Se pierde el formato de colores y posicionamiento al convertir de ASS a SRT?",
                      "answer": "Sí, las etiquetas de estilo complejas como coordenadas en pantalla (\\pos), alineación (\\an), temporizadores de karaoke (\\k) y colores personalizados se eliminan porque la especificación estándar de SRT no las admite. Sin embargo, se conservan estilos básicos como negrita (<b>), cursiva (<i>) y subrayado (<u>)."
                },
                {
                      "question": "¿Este convertidor conserva las etiquetas de negrita y cursiva de ASS?",
                      "answer": "Sí. Las etiquetas de anulación de ASS como {\\b1} y {\\i1} se convierten automáticamente en etiquetas de formato estándar (<b> e <i>), garantizando que los diálogos mantengan el énfasis tipográfico deseado en reproductores compatibles."
                },
                {
                      "question": "¿Cómo gestiona el convertidor las marcas de tiempo y los centisegundos de ASS?",
                      "answer": "Los archivos ASS registran marcas de tiempo en centisegundos (centésimas de segundo, H:MM:SS.cs), mientras que los archivos SRT utilizan milisegundos (HH:MM:SS,mmm). Nuestro convertidor calcula los milisegundos exactos (por ejemplo, 0:01:23.45 se convierte en 00:01:23,450), asegurando cero desincronización con el audio."
                },
                {
                      "question": "¿Qué ocurre con los diálogos simultáneos o superpuestos en ASS?",
                      "answer": "Cuando varias líneas de diálogo se superponen en el tiempo (muy común en anime para diálogos cruzados o canciones), el convertidor ordena cronológicamente los eventos y asigna números secuenciales únicos en el archivo SRT generado, permitiendo una reproducción limpia."
                },
                {
                      "question": "¿Puedo convertir subtítulos de anime fansub (.ass) a SRT para Plex o Smart TVs?",
                      "answer": "¡Sí! Esta es una de las razones principales para convertir ASS a SRT. Muchos Smart TVs y clientes de Plex tienen dificultades para procesar estilos ASS complejos y obligan al servidor a transcodificar video. Al convertirlos a SRT limpio, se habilita la reproducción directa fluida."
                },
                {
                      "question": "¿Puedo convertir archivos ASS a SRT usando la línea de comandos con FFmpeg?",
                      "answer": "Sí, ejecutando: ffmpeg -i entrada.ass -c:s srt salida.srt. No obstante, nuestro convertidor en el navegador no requiere instalación, ofrece previsualización instantánea, repara archivos dañados y funciona en teléfonos y computadoras."
                },
                {
                      "question": "¿Mis archivos de subtítulos se suben a algún servidor o se mantienen privados?",
                      "answer": "Tus archivos son 100% privados. Todo el procesamiento se realiza localmente en tu navegador web mediante JavaScript. Ningún subtítulo o información personal sale de tu dispositivo."
                }
          ]
    },
    "srtToSub": {
          "id": "srt-to-sub",
          "name": "Convertidor SRT a SUB",
          "shortName": "SRT a SUB",
          "badge": "Gratis y Seguro",
          "tagline": "Convierte Subtítulos SubRip (.SRT) a Formato MicroDVD y SubViewer (.SUB) Online",
          "description": "Convierte subtítulos SubRip (.srt) a formato SUB (MicroDVD y SubViewer 2.0) online y gratis. Compatible con tasas de fotogramas (FPS) personalizadas y 100% de privacidad.",
          "h1": "Convertidor SRT a SUB Online",
          "metaTitle": "Convertidor SRT a SUB – Convertir Subtítulos a SUB Online | SRTConverters",
          "metaDescription": "Convierte subtítulos SubRip (.srt) a formato SUB (MicroDVD y SubViewer) online y gratis. Fotogramas por segundo (FPS) ajustables y 100% de privacidad en el navegador.",
          "settingsLabels": {
                "timingMode": "Formato de Subtítulo",
                "fixedDuration": "MicroDVD (.sub)",
                "cpsDuration": "SubViewer 2.0 (.sub)",
                "cpsLabel": "Tasa de Fotogramas del Video (FPS)",
                "cpsHint": "Selecciona la tasa de fotogramas del video para garantizar una sincronización exacta.",
                "startTime": "Incluir Encabezado FPS",
                "startTimeHint": "Añade la línea {1}{1}FPS al archivo MicroDVD para detección automática en reproductores.",
                "maxCharsPerLine": "Limpiar Etiquetas HTML",
                "maxCharsHint": "Elimina etiquetas <i>, <b> y fuentes para compatibilidad con reproductores antiguos."
          },
          "stepsTitle": "Cómo Convertir SRT a SUB Online en 3 Pasos",
          "steps": [
                {
                      "step": "1",
                      "title": "Sube o Pega tus Subtítulos SRT",
                      "description": "Arrastra y suelta tu archivo .srt en la zona indicada o pega el contenido de subtítulos SubRip en el editor."
                },
                {
                      "step": "2",
                      "title": "Selecciona el Formato y los FPS del Video",
                      "description": "Elige formato MicroDVD o SubViewer y selecciona la tasa de fotogramas correspondiente (ej. 23.976, 24, 25 o 29.97 FPS)."
                },
                {
                      "step": "3",
                      "title": "Descarga el Archivo SUB Convertido",
                      "description": "Haz clic en Descargar .SUB para guardar tu archivo inmediatamente o copia el texto al portapapeles."
                }
          ],
          "featuresTitle": "¿Por Qué Usar Nuestro Convertidor SRT a SUB Online?",
          "features": [
                {
                      "title": "Privacidad 100% en el Navegador",
                      "description": "La conversión se realiza exclusivamente en tu navegador. Ningún archivo ni texto se sube a servidores externos.",
                      "icon": "shield"
                },
                {
                      "title": "Compatibilidad MicroDVD y SubViewer",
                      "description": "Soporte completo para MicroDVD basado en fotogramas ({inicio}{fin}) y SubViewer 2.0 con marcas de tiempo.",
                      "icon": "file"
                },
                {
                      "title": "Sincronización Exacta por Fotograma",
                      "description": "Admite tasas estándar de la industria: 23.976, 24.0, 25.0 (PAL), 29.97 (NTSC), 30 y 60 FPS para evitar desincronizaciones.",
                      "icon": "clock"
                },
                {
                      "title": "Ideal para Reproductores Clásicos",
                      "description": "Genera archivos .sub limpios listos para reproductores de DVD, equipos de coche, DivX/XviD y centros multimedia clásicos.",
                      "icon": "split"
                }
          ],
          "faqsTitle": "Preguntas Frecuentes sobre la Conversión de SRT a SUB",
          "faqs": [
                {
                      "question": "¿Cuál es la diferencia entre un archivo SRT y un archivo SUB?",
                      "answer": "SRT (SubRip) es un formato de subtítulos moderno basado en tiempo real que define las líneas mediante marcas de milisegundos (00:01:23,450 --> 00:01:26,800). Es universalmente compatible con navegadores, reproductores de software y Smart TVs. En cambio, los archivos SUB basados en texto —principalmente MicroDVD (.sub)— funcionan por recuento de fotogramas ({fotograma_inicio}{fotograma_fin}). Otro formato de texto con extensión .sub es SubViewer 2.0, que utiliza centésimas de segundo. Convertir SRT a SUB es esencial para reproducir videos en reproductores de DVD independientes, pantallas de coche y sistemas que solo leen archivos .sub indexados por fotogramas."
                },
                {
                      "question": "¿Por qué debo seleccionar una tasa de fotogramas (FPS) al convertir SRT a SUB?",
                      "answer": "Debido a que los archivos MicroDVD calculan la aparición de cada línea en función de los fotogramas del video en lugar de milisegundos de reloj, el convertidor debe multiplicar los tiempos del subtítulo por los FPS exactos del video (Fotograma = Tiempo en Segundos × FPS). Si conviertes un archivo SRT a 25.000 FPS (PAL) pero tu video fue codificado a 23.976 FPS (cine / NTSC), los subtítulos se desincronizarán progresivamente a medida que avanza la película. Escoger la tasa correcta garantiza sincronía perfecta durante todo el metraje."
                },
                {
                      "question": "¿Qué diferencia hay entre MicroDVD (.sub), SubViewer (.sub) y VobSub (.sub)?",
                      "answer": "La extensión .sub es compartida históricamente por tres tecnologías muy distintas: MicroDVD (.sub) es un formato de texto ligero basado en fotogramas ({1250}{1380}Diálogo) muy popular en reproductores DivX/XviD; SubViewer 2.0 (.sub) es un formato de texto con encabezado [INFORMATION] y marcas en centésimas de segundo (00:01:20.10,00:01:23.45); y VobSub (.sub + .idx) NO es texto, sino paquetes de imágenes gráficas rasterizadas extraídas de DVDs. Nuestro convertidor genera subtítulos de texto estandarizados (MicroDVD y SubViewer 2.0) compatibles con reproductores modernos y equipos antiguos."
                },
                {
                      "question": "¿Cómo puedo averiguar la tasa de fotogramas (FPS) exacta de mi video?",
                      "answer": "Puedes consultar los FPS exactos de tu video de forma sencilla: en VLC Media Player, abre el video, pulsa Herramientas > Información del códec (o Ctrl+J / Cmd+I), ve a la pestaña Códec y consulta la propiedad Tasa de fotogramas (por ejemplo 23.976023, 24, 25 o 29.970000). En Windows, haz clic derecho sobre el video, elige Propiedades, pestaña Detalles y revisa Velocidad de fotograma. En macOS, abre el archivo en QuickTime y pulsa Cmd+I (Inspector). También puedes usar la herramienta gratuita MediaInfo."
                },
                {
                      "question": "¿Por qué mis subtítulos SUB convertidos se desincronizan con el video?",
                      "answer": "Si los subtítulos comienzan bien pero se adelantan o atrasan paulatinamente, la causa casi siempre es una discrepancia de FPS entre el archivo MicroDVD generado y la pista de video. Por ejemplo, si tu película está a 23.976 FPS y conviertes con el valor predeterminado de 25.000 FPS, los subtítulos irán un 4.1% más rápido (unos 2.5 segundos de desvío por cada minuto). Para corregirlo, verifica los FPS reales con VLC o MediaInfo y vuelve a convertir el archivo SRT seleccionando el valor exacto."
                },
                {
                      "question": "¿Es posible convertir un archivo SUB de nuevo a formato SRT?",
                      "answer": "Sí. Los subtítulos en texto MicroDVD (.sub) y SubViewer (.sub) se pueden reconvertir a SubRip (.srt). En el caso de MicroDVD, basta con dividir el número de fotograma entre los FPS del video para obtener los milisegundos: Tiempo = Fotograma / FPS. Puedes usar herramientas como Subtitle Edit, Aegisub o los conversores de nuestra plataforma SRTConverters."
                },
                {
                      "question": "¿Se suben mis archivos de subtítulos a algún servidor durante la conversión?",
                      "answer": "No. SRTConverters funciona al 100% de manera local en tu navegador mediante JavaScript en el cliente. Tus archivos SRT, textos y los archivos SUB generados se procesan únicamente en la memoria privada de tu navegador. Ningún dato se transmite, almacena ni registra en servidores externos."
                },
                {
                      "question": "¿Cómo puedo convertir SRT a SUB desde la línea de comandos con FFmpeg?",
                      "answer": "Puedes convertir SRT a MicroDVD SUB con FFmpeg indicando el códec de subtítulo correspondiente: ffmpeg -i input.srt -c:s microdvd output.sub. Si necesitas forzar una tasa de fotogramas específica al procesar en lotes o multiplexar, añade el parámetro de frecuencia: ffmpeg -i input.srt -r 23.976 -c:s microdvd output.sub. Esto resulta ideal para scripts automatizados y flujos de codificación."
                }
          ]
    },
    "subToSrt": {
          "id": "sub-to-srt",
          "name": "Convertidor SUB a SRT",
          "shortName": "SUB a SRT",
          "badge": "Gratis y en el Navegador",
          "tagline": "Convierte Subtítulos MicroDVD y SubViewer (.SUB) a SubRip (.SRT) Estándar Online",
          "description": "Convierte subtítulos SUB (MicroDVD y SubViewer) al formato estándar SubRip (.srt) limpio online y gratis. Detección automática de FPS, conversión precisa de fotogramas a tiempo y 100% de privacidad.",
          "h1": "Convertidor SUB a SRT Online",
          "metaTitle": "Convertidor SUB a SRT Online – Convertir SUB a SRT Gratis | SRTConverters",
          "metaDescription": "Convierte subtítulos SUB (MicroDVD y SubViewer) a formato SubRip (.srt) limpio online y gratis. Detección automática de FPS, conversión precisa de fotogramas a tiempo y 100% de privacidad.",
          "settingsLabels": {
                "timingMode": "Formato Detectado",
                "fixedDuration": "Detección Automática",
                "cpsDuration": "MicroDVD ({fotograma}{fotograma})",
                "cpsLabel": "Velocidad de Fotogramas (FPS)",
                "cpsHint": "Selecciona los FPS del vídeo para garantizar una sincronización exacta de los subtítulos.",
                "startTime": "Sincronizar Encabezado FPS",
                "startTimeHint": "Lee automáticamente la línea de encabezado {1}{1}FPS del archivo MicroDVD.",
                "maxCharsPerLine": "Convertir Etiquetas de Formato",
                "maxCharsHint": "Convierte etiquetas {Y:i} en <i> y saltos de tubería (|) en saltos de línea estándar."
          },
          "stepsTitle": "Cómo Convertir SUB a SRT Online en 3 Sencillos Pasos",
          "steps": [
                {
                      "step": "1",
                      "title": "Sube o Pega tus Subtítulos SUB",
                      "description": "Arrastra y suelta tu archivo .sub en la zona interactiva o pega directamente el texto de MicroDVD o SubViewer en el editor."
                },
                {
                      "step": "2",
                      "title": "Verifica los Fotogramas por Segundo (FPS)",
                      "description": "Si el archivo es MicroDVD, comprueba los FPS del vídeo (p. ej. 23.976, 24, 25 o 29.97) para que los fotogramas se conviertan con precisión horaria."
                },
                {
                      "step": "3",
                      "title": "Descarga el Archivo SRT Convertido",
                      "description": "Haz clic en Descargar .SRT para guardar al instante tu archivo SubRip o copia el texto convertido al portapapeles para usarlo al momento."
                }
          ],
          "featuresTitle": "¿Por Qué Elegir Nuestro Convertidor SUB a SRT?",
          "features": [
                {
                      "title": "Privacidad 100% en el Navegador",
                      "description": "Tus subtítulos se procesan íntegramente en tu navegador web. Ningún archivo ni dato se transmite ni almacena en servidores externos.",
                      "icon": "shield"
                },
                {
                      "title": "Detección de MicroDVD y SubViewer",
                      "description": "Reconoce automáticamente archivos MicroDVD basados en fotogramas, encabezados SubViewer 2.0/1.0 y etiquetas de velocidad {1}{1}FPS.",
                      "icon": "file"
                },
                {
                      "title": "Sincronización Precisa en Milisegundos",
                      "description": "Calcula marcas de tiempo exactas en milisegundos para cualquier estándar cinematográfico o televisivo (PAL, NTSC) evitando desfases.",
                      "icon": "clock"
                },
                {
                      "title": "Aviso de VobSub y Limpieza de Formato",
                      "description": "Detecta paquetes binarios de DVD VobSub e informa de su naturaleza, traduciendo barras verticales (|) y estilos a etiquetas SRT válidas.",
                      "icon": "split"
                }
          ],
          "faqsTitle": "Preguntas Frecuentes Sobre la Conversión de SUB a SRT",
          "faqs": [
                {
                      "question": "¿Cuál es la diferencia entre un archivo SUB y un archivo SRT?",
                      "answer": "El formato SRT (SubRip) es el estándar universal moderno para subtítulos de texto. Identifica cada diálogo mediante un número secuencial y marcas de tiempo horarias absolutas con precisión de milisegundos (00:01:23,450 --> 00:01:26,800). Es compatible de forma nativa con reproductores modernos (VLC, MPC-HC), televisores inteligentes, suites de edición (Premiere, DaVinci Resolve) y plataformas web (YouTube, Netflix). Por el contrario, los archivos SUB basados en texto—principalmente MicroDVD (.sub)—usan números de fotogramas del vídeo ({fotograma_inicio}{fotograma_fin}), lo que requiere conocer la velocidad exacta de reproducción. SubViewer (.sub) utiliza marcas de tiempo en centésimas de segundo. Convertir SUB a SRT garantiza compatibilidad universal en cualquier dispositivo actual sin desfases ni programas especiales."
                },
                {
                      "question": "¿Por qué es necesario elegir la velocidad de fotogramas (FPS) al convertir MicroDVD a SRT?",
                      "answer": "Los archivos MicroDVD no contienen horas, minutos ni segundos; únicamente especifican en qué número de fotograma del vídeo debe aparecer y desaparecer el texto (por ejemplo, {1200}{1350}Texto del diálogo). Para transformar esos números de fotograma en marcas de tiempo SRT, el convertidor debe calcular: Milisegundos = Redondear((Fotograma / FPS) × 1000). Si conviertes un subtítulo a 25 FPS cuando la película fue grabada a 23.976 FPS (cine estándar / NTSC), los subtítulos se desfasarán progresivamente a razón de unos 2.5 segundos por cada minuto de reproducción. Seleccionar los FPS correctos garantiza una sincronización perfecta de principio a fin."
                },
                {
                      "question": "¿Qué diferencias existen entre MicroDVD (.sub), SubViewer (.sub) y VobSub (.sub)?",
                      "answer": "La extensión .sub ha sido compartida históricamente por tres formatos muy distintos: 1. MicroDVD (.sub) es un formato de texto estructurado por fotogramas entre llaves ({inicio}{fin}Línea1|Línea2), habitual en copias DivX y XviD; 2. SubViewer (.sub) es un formato de texto con encabezado de metadatos ([INFORMATION]) y tiempos en centésimas de segundo (00:01:20.50,00:01:23.80) con saltos [br]; 3. VobSub (.sub + .idx) es un contenedor binario que almacena imágenes de mapa de bits procedentes de discos DVD originales, no texto editable. Nuestra herramienta procesa automáticamente subtítulos de texto MicroDVD y SubViewer, y emite una alerta si detecta un archivo binario VobSub."
                },
                {
                      "question": "¿Cómo puedo averiguar la velocidad de fotogramas (FPS) exacta de mi vídeo?",
                      "answer": "Puedes consultar los FPS exactos de tu vídeo con herramientas gratuitas habituales: En VLC Media Player, abre el vídeo, ve a Herramientas > Información del códec (o pulsa Ctrl+J / Cmd+I), abre la pestaña Códec y localiza la 'Tasa de fotogramas' (por ejemplo 23.976023, 24, 25 o 29.970000). En Windows, haz clic derecho sobre el archivo de vídeo, selecciona Propiedades, ve a la pestaña Detalles y revisa el campo 'Velocidad de fotograma'. En macOS, abre el archivo en QuickTime Player y pulsa Cmd+I para abrir el inspector. También puedes utilizar la herramienta especializada MediaInfo para obtener un informe técnico completo."
                },
                {
                      "question": "¿Por qué mis subtítulos SRT convertidos se desincronizan durante la reproducción?",
                      "answer": "La desincronización progresiva—cuando los subtítulos arrancan a tiempo pero se adelantan o atrasan paulatinamente a lo largo de la película—se debe casi siempre a una discordancia en los FPS seleccionados durante la conversión. Por ejemplo, convertir un vídeo de 23.976 FPS con el ajuste de 25.000 FPS hace que los subtítulos avancen un 4.1% más rápido que el audio, acumulando varios segundos de error rápidamente. Para solucionarlo, comprueba los FPS reales en VLC o MediaInfo, selecciona el valor idéntico en nuestro convertidor y vuelve a generar el archivo SRT. Si el archivo MicroDVD contenía la cabecera `{1}{1}FPS`, nuestra herramienta la aplicará de forma automática."
                },
                {
                      "question": "¿Puede este convertidor procesar archivos VobSub (.sub) de DVDs comerciales?",
                      "answer": "No. Los archivos VobSub (.sub) no son documentos de texto plano, sino archivos binarios que contienen imágenes gráficas escaneadas de los subtítulos de un DVD. Como están formados por píxeles y no por caracteres alfanuméricos, convertirlos a SRT requiere un software de Reconocimiento Óptico de Caracteres (OCR) capaz de reconocer visualmente las letras. Si intentas cargar un archivo VobSub binario, nuestro convertidor detectará el encabezado de inmediato y te mostrará un aviso recomendándote programas de escritorio especializados como Subtitle Edit, BDSup2Sub o OCR-SubRip."
                },
                {
                      "question": "¿Se suben mis archivos de subtítulos a servidores externos durante la conversión?",
                      "answer": "No. SRTConverters funciona al 100% de manera local en tu navegador mediante código JavaScript del lado del cliente. Tus archivos de subtítulos, textos, guiones y resultados convertidos se procesan en la memoria volátil de tu propio equipo. No se envían datos a través de internet ni se almacenan en servidores remotos, asegurando total privacidad, máxima seguridad y una conversión instantánea sin demoras de subida ni bajada."
                },
                {
                      "question": "¿Cómo puedo convertir SUB a SRT desde la terminal mediante FFmpeg?",
                      "answer": "Puedes convertir subtítulos SUB a SRT desde la línea de comandos con FFmpeg. Para archivos SubViewer basados en tiempo, ejecuta: ffmpeg -i entrada.sub salida.srt. Para archivos MicroDVD basados en fotogramas, debes indicar los FPS del vídeo mediante el parámetro -r para que FFmpeg calcule los tiempos: ffmpeg -r 23.976 -i entrada.sub salida.srt. Si el archivo original incluye caracteres acentuados o especiales en codificación ANSI o Windows-1252, añade el parámetro de codificación: ffmpeg -sub_charenc CP1252 -r 25 -i entrada.sub salida.srt. Esto resulta ideal para automatizaciones por lotes en terminal."
                }
          ]
    },
    sbvToSrt: {
      "id": "sbv-to-srt",
      "name": "Convertidor de SBV a SRT",
      "shortName": "SBV a SRT",
      "badge": "Gratis y en el Navegador",
      "tagline": "Convierte Subtítulos de YouTube (.SBV) a SubRip (.SRT) Estándar Online",
      "description": "Convierte subtítulos SBV y SubViewer de YouTube a formato SubRip (.srt) limpio y universal online gratis. Formatea marcas de tiempo, decodifica entidades HTML y descarga archivos SRT al instante.",
      "h1": "Convertidor de SBV a SRT Online",
      "metaTitle": "Convertidor de SBV a SRT Online – Subtítulos de YouTube a SRT Gratis | SRTConverters",
      "metaDescription": "Convierte archivos de subtítulos SBV y SubViewer de YouTube a formato SubRip (.srt) limpio gratis en línea. Formatea marcas de tiempo, decodifica entidades HTML y descarga al instante.",
      "settingsLabels": {
            "timingMode": "Opciones de Limpieza de Subtítulos",
            "fixedDuration": "Decodificar Entidades HTML",
            "cpsDuration": "Convierte &amp;, &#39;, &quot;, &lt;, &gt; en caracteres legibles",
            "cpsLabel": "Eliminar Descriptores de Sonido",
            "cpsHint": "Elimina [Música], [Aplausos] y efectos sonoros de los diálogos",
            "startTime": "Normalizar Espacios en Blanco",
            "startTimeHint": "Limpia espacios redundantes y elimina líneas vacías"
      },
      "stepsTitle": "Cómo Convertir SBV a SRT Online en 3 Pasos",
      "steps": [
            {
                  "step": "1",
                  "title": "Sube o Pega tus Subtítulos SBV",
                  "description": "Arrastra y suelta tu archivo .sbv de YouTube en la zona de carga o pega el texto directamente en el área de entrada."
            },
            {
                  "step": "2",
                  "title": "Configura tus Preferencias de Limpieza",
                  "description": "Activa la decodificación de entidades HTML (como &amp; o &#39;) y elige si deseas remover descriptores automáticos como [Música]."
            },
            {
                  "step": "3",
                  "title": "Descarga tu Archivo SRT Convertido",
                  "description": "Haz clic en Descargar .SRT para guardar tu archivo SubRip o copia el texto con formato para usarlo en tu editor de video o reproductor."
            }
      ],
      "featuresTitle": "¿Por Qué Usar Nuestro Convertidor de SBV a SRT?",
      "features": [
            {
                  "title": "Preservación Exacta de Milisegundos",
                  "description": "Cada marca de tiempo se mantiene con precisión de milisegundos, convirtiendo los puntos decimales de SBV en comas de SRT con horas en dos dígitos.",
                  "icon": "zap"
            },
            {
                  "title": "Decodificación Automática de HTML",
                  "description": "Las exportaciones de YouTube suelen contener entidades como &amp; y &#39;. Nuestra herramienta las convierte en texto limpio y legible.",
                  "icon": "layers"
            },
            {
                  "title": "Filtrado de Efectos de Sonido",
                  "description": "Elimina fácilmente indicadores automáticos como [Música] y [Aplausos] para obtener subtítulos de diálogo profesionales.",
                  "icon": "shield"
            },
            {
                  "title": "Privacidad 100% en el Navegador",
                  "description": "Toda la conversión se ejecuta localmente en tu navegador. Tus archivos de subtítulos nunca se suben ni se almacenan en servidores externos.",
                  "icon": "split"
            }
      ],
      "faqsTitle": "Preguntas Frecuentes Sobre la Conversión de SBV a SRT",
      "faqs": [
            {
                  "question": "¿Qué es un archivo SBV y en qué se diferencia de un archivo SRT?",
                  "answer": "Un archivo SBV (.sbv), conocido como formato YouTube SubViewer, es un formato de subtítulos de texto plano desarrollado por Google específicamente para los subtítulos de YouTube. En un archivo SBV, cada bloque inicia directamente con un par de marcas de tiempo separadas por coma (ej. 0:00:01.000,0:00:04.500) seguido del diálogo, sin números de índice secuencial. En cambio, SubRip (.srt) es el estándar mundial compatible con reproductores y editores de video. Un archivo SRT requiere un contador numérico (1, 2, 3...), una flecha separadora (' --> ') con comas antes de los milisegundos (00:00:01,000 --> 00:00:04,500) y horas con dos dígitos. Convertir SBV a SRT te permite usar subtítulos de YouTube en Premiere Pro, DaVinci Resolve, VLC y Plex."
            },
            {
                  "question": "¿Por qué YouTube Studio exporta subtítulos en formato .sbv en lugar de .srt?",
                  "answer": "Históricamente, YouTube adoptó la variante SubViewer (.sbv) durante las primeras etapas de su sistema de reconocimiento de voz y subtitulado automático. Se eligió por su estructura minimalista: omite números de índice y utiliza una coma compacta entre tiempos de inicio y fin. Aunque YouTube Studio permite descargar subtítulos como .sbv, la mayoría de suites de edición y televisores inteligentes no admiten .sbv de forma nativa, lo que hace indispensable convertir a .srt."
            },
            {
                  "question": "¿Cómo descargo un archivo de subtítulos SBV desde YouTube Studio?",
                  "answer": "Para descargar tus subtítulos desde YouTube: (1) Inicia sesión en YouTube Studio y selecciona 'Subtítulos' en el menú izquierdo. (2) Haz clic en el video deseado. (3) Junto a la pista de subtítulos publicada o automática, haz clic en el menú de tres puntos (Opciones) y selecciona 'Descargar'. (4) Elige '.sbv' (o SubViewer). YouTube descargará un archivo llamado 'captions.sbv', el cual puedes arrastrar a nuestro convertidor para transformarlo en .srt estándar."
            },
            {
                  "question": "¿Cómo se diferencian las marcas de tiempo de SBV respecto a las de SRT?",
                  "answer": "Las marcas de tiempo de SBV usan una sola coma entre inicio y fin y puntos decimales antes de los milisegundos, a menudo con horas en un solo dígito: '0:01:23.450,0:01:27.800'. Los subtítulos SubRip SRT requieren una flecha con espacios (' --> '), comas antes de los milisegundos y estrictamente dos dígitos en las horas: '00:01:23,450 --> 00:01:27,800'. Además, SRT exige un número entero secuencial sobre cada bloque. Nuestro convertidor realiza todas estas transformaciones de manera automática."
            },
            {
                  "question": "¿Por qué mi archivo SBV de YouTube contiene códigos extraños como &amp; y &#39;?",
                  "answer": "YouTube codifica ciertos signos de puntuación como entidades HTML para garantizar que se muestren correctamente en navegadores web. Por ejemplo, el signo ampersand se exporta como '&amp;', las comillas simples o apóstrofes como '&#39;' o '&apos;', y las comillas dobles como '&quot;'. En reproductores locales o editores como Premiere, estos códigos se muestran literalmente en pantalla arruinando la lectura. Nuestro convertidor decodifica automáticamente todas las entidades HTML en sus caracteres reales."
            },
            {
                  "question": "¿Puedo importar los subtítulos SRT convertidos en Premiere Pro, DaVinci Resolve y Final Cut Pro?",
                  "answer": "Sí. El formato SubRip (.srt) es universalmente reconocido por todos los editores de video profesionales, incluidos Adobe Premiere Pro, DaVinci Resolve, Apple Final Cut Pro, Avid Media Composer y CapCut. Una vez convertido tu archivo, simplemente impórtalo a tu biblioteca de medios y arrástralo a la línea de tiempo como pista de subtítulos."
            },
            {
                  "question": "¿Mis archivos de subtítulos se suben a un servidor externo durante la conversión?",
                  "answer": "No. SRTConverters procesa el 100% de tus archivos localmente en tu navegador web mediante JavaScript en el lado del cliente. Tus subtítulos SBV, transcripciones y archivos SRT generados nunca salen de tu dispositivo, garantizando total privacidad y confidencialidad."
            },
            {
                  "question": "¿Cómo puedo convertir SBV a SRT desde la terminal usando Python o FFmpeg?",
                  "answer": "Puedes convertir SBV a SRT con FFmpeg mediante el comando: 'ffmpeg -i input.sbv -c:s srt output.srt'. Si utilizas Python, puedes leer el archivo por bloques, separar las marcas de tiempo por la coma y escribir los contadores numéricos. Nuestra herramienta online ejecuta exactamente la misma transformación matemática de forma instantánea sin requerir instalaciones ni comandos en la terminal."
            }
      ]
}
  },
  "pt": {
    "directory": {
      "title": "Todas as Ferramentas de Legendas e SRT",
      "subtitle": "Ferramentas gratuitas de conversão de legendas no navegador. Sem instalação, sem envio de arquivos para servidores, 100% privado.",
      "metaTitle": "Ferramentas Gratuitas de Legendas e SRT | SRTConverters",
      "metaDescription": "Explore nossa suíte completa de ferramentas gratuitas de legendas online. Converta TXT para SRT, SRT para Texto, SRT para VTT e VTT para SRT.",
      "convertersCategory": "Conversores de Legendas",
      "utilitiesCategory": "Utilitários de Legendas",
      "openTool": "Abrir Ferramenta",
      "clientSideBadge": "100% no Navegador"
    },
    "txtToSrt": {
      "id": "txt-to-srt",
      "name": "Conversor de TXT para SRT",
      "shortName": "TXT para SRT",
      "badge": "Grátis e no Navegador",
      "tagline": "Converta Texto Puro e Transcrições em Arquivos de Legendas SubRip (.SRT) Sincronizados",
      "description": "Transforme transcrições e letras em legendas SRT formatadas com velocidades de leitura personalizadas e quebras de linha automáticas.",
      "h1": "Conversor de TXT para SRT",
      "metaTitle": "Conversor TXT para SRT – Converter Texto em Legendas Grátis | SRTConverters",
      "metaDescription": "Converta transcrições de texto (TXT) para formato de legendas SRT grátis e online. Velocidades personalizadas e privacidade total no navegador.",
      "settingsLabels": {
        "timingMode": "Modo de Cálculo de Tempo",
        "cpsLabel": "Velocidade de Leitura (CPS)",
        "cpsHint": "Caracteres por segundo (15-20 é o ideal para leitura)",
        "maxCharsPerLine": "Máximo de Caracteres por Linha",
        "maxCharsHint": "Recomendado 37-42 caracteres para vídeos e redes sociais",
        "splitMode": "Estratégia de Divisão de Texto",
        "splitSentence": "Dividir por Frases e Pontuação",
        "splitParagraph": "Dividir por Parágrafos",
        "splitLine": "Dividir por Quebras de Linha",
        "gapBetweenSubtitles": "Intervalo Entre Legendas (ms)",
        "gapHint": "Pausa entre legendas consecutivas (ex: 100ms)"
      },
      "stepsTitle": "Como Converter Texto para Legendas SRT em 3 Passos",
      "steps": [
        {
          "step": "1",
          "title": "Cole o Texto ou Envie o Arquivo",
          "description": "Digite ou cole sua transcrição na caixa de entrada ou arraste e solte um arquivo .txt diretamente."
        },
        {
          "step": "2",
          "title": "Configure a Sincronização",
          "description": "Ajuste a velocidade de leitura (CPS), o limite de caracteres por linha e a estratégia de divisão."
        },
        {
          "step": "3",
          "title": "Visualize e Baixe o .SRT",
          "description": "Confira as legendas geradas na pré-visualização, copie para a área de transferência ou baixe o arquivo .srt."
        }
      ],
      "featuresTitle": "Por que Usar Nosso Conversor de TXT para SRT?",
      "features": [
        {
          "title": "100% Privado e no Navegador",
          "description": "Nenhum arquivo é enviado a servidores externos. Todo o processamento ocorre no seu navegador.",
          "icon": "shield"
        },
        {
          "title": "Divisão Inteligente por Pontuação",
          "description": "Divide textos longos em pontos, vírgulas e pontos de interrogação para uma leitura confortável.",
          "icon": "split"
        },
        {
          "title": "Cálculo de Tempo por CPS",
          "description": "Calcula o tempo de exibição com base na contagem de caracteres e na velocidade de leitura padrão.",
          "icon": "clock"
        },
        {
          "title": "Formato SRT Padrão",
          "description": "Gera arquivos SubRip compatíveis com YouTube, Premiere Pro, DaVinci Resolve, Final Cut e VLC.",
          "icon": "file"
        }
      ],
      "faqsTitle": "Perguntas Frequentes",
      "faqs": [
        {
          "question": "Qual formato meu arquivo TXT deve ter antes de convertê-lo para SRT?",
          "answer": "Seu arquivo TXT deve conter texto sem formatações ricas. Para uma melhor formatação de legendas, estruture sua transcrição TXT de forma que cada frase ou diálogo fique em sua própria linha ou separe ideias com quebras de parágrafo. Manter segmentos concisos ajuda o conversor a calcular a sincronização correta e criar legendas SRT equilibradas."
        },
        {
          "question": "Um arquivo TXT pode conter marcações de tempo para conversão em SRT?",
          "answer": "Embora arquivos TXT comuns sejam transcrições sem códigos de tempo, algumas transcrições exportadas já trazem horários aproximados. Se o seu arquivo TXT contiver horários, conversores comuns podem tratá-los como fala. Nosso conversor calcula a sincronização do zero com base na velocidade de leitura e na pontuação."
        },
        {
          "question": "Qual formato de marcação de tempo um arquivo SRT utiliza?",
          "answer": "Um arquivo SRT padrão usa números sequenciais seguidos de marcações de tempo no formato 00:00:01,000 --> 00:00:04,000 (horas:minutos:segundos,milissegundos). O formato SubRip exige uma vírgula antes dos milissegundos, ao contrário do WebVTT que usa ponto. Nossa ferramenta gera marcações SRT padrão automaticamente."
        },
        {
          "question": "Quantos caracteres uma legenda SRT deve conter?",
          "answer": "Para uma leitura confortável, as diretrizes profissionais sugerem entre 37 e 42 caracteres por linha, com no máximo duas linhas por legenda (cerca de 70 a 84 caracteres no total). Isso não é uma regra universal fixa: vídeos para redes sociais geralmente usam frases mais curtas, enquanto telas maiores comportam textos mais longos."
        },
        {
          "question": "Posso converter uma transcrição TXT com vários parágrafos em legendas SRT?",
          "answer": "Sim! Você pode converter transcrições em TXT com múltiplos parágrafos em legendas SRT sincronizadas. As quebras de parágrafo funcionam como pausas naturais na segmentação. Ao escolher a divisão por parágrafos ou frases, textos longos são divididos em blocos legíveis com ritmo natural de leitura."
        },
        {
          "question": "Por que meu arquivo SRT convertido exibe caracteres estranhos ou incorretos?",
          "answer": "Caracteres incorretos costumam ser causados por incompatibilidade de codificação. Se o seu arquivo TXT tiver acentos, pontuações especiais ou caracteres não latinos, certifique-se de salvá-lo em UTF-8. Nosso conversor baseado no navegador utiliza codificação UTF-8 padrão, mantendo todos os acentos intactos no arquivo SRT final."
        },
        {
          "question": "Posso usar pontuação e quebras de linha para controlar a divisão das legendas SRT?",
          "answer": "Com certeza. Sinais de pontuação (pontos, vírgulas, pontos de interrogação) e quebras de linha intencionais orientam a segmentação das legendas. Ao usar o modo de divisão por frases, o conversor divide a transcrição TXT nas pausas gramaticais, gerando legendas SRT que acompanham a cadência natural da fala."
        },
        {
          "question": "Posso usar um conversor de TXT para SRT em legendas do YouTube?",
          "answer": "Sim, o formato SRT é amplamente aceito no YouTube, Vimeo, Facebook e Instagram. Após converter sua transcrição TXT em arquivo SRT, você pode enviar o arquivo .srt diretamente no YouTube Studio. Como os tempos são calculados por estimativa de leitura, sempre confira a sincronização com o vídeo antes de publicar."
        }
      ]
    },
    "srtToText": {
      "id": "srt-to-text",
      "name": "Conversor de SRT para Texto",
      "shortName": "SRT para Texto",
      "badge": "Grátis e Rápido",
      "tagline": "Extraia Texto Limpo e Transcrições de Arquivos de Legendas SubRip (.SRT)",
      "description": "Remova carimbos de data/hora, numeração sequencial e formatação HTML de seus arquivos SubRip (.srt).",
      "h1": "Conversor de SRT para Texto",
      "metaTitle": "Conversor SRT para Texto – Extrair Texto de Legendas Grátis | SRTConverters",
      "metaDescription": "Extraia texto limpo de arquivos de legendas SRT. Remova carimbos de tempo e numerações com total privacidade.",
      "settingsLabels": {
        "stripTimestamps": "Remover Marcações de Tempo",
        "stripLineNumbers": "Remover Numeração de Linha",
        "joinParagraphs": "Juntar em Parágrafos"
      },
      "stepsTitle": "Como Converter Legendas SRT para Texto Puro",
      "steps": [
        {
          "step": "1",
          "title": "Envie o Arquivo SRT ou Cole o Texto",
          "description": "Arraste seu arquivo .srt ou cole o conteúdo no painel."
        },
        {
          "step": "2",
          "title": "Selecione as Opções de Limpeza",
          "description": "Escolha se deseja remover tempos, números e unir linhas em parágrafos."
        },
        {
          "step": "3",
          "title": "Copie ou Baixe o Texto Limpo",
          "description": "Copie a transcrição limpa para a área de transferência ou baixe como .txt."
        }
      ],
      "featuresTitle": "Benefícios de Converter SRT para Texto",
      "features": [
        {
          "title": "Extração de Texto Limpo",
          "description": "Remove carimbos de tempo, números e tags HTML (<b>, <i>) automaticamente.",
          "icon": "clean"
        },
        {
          "title": "União em Parágrafos",
          "description": "Combina fragmentos de legendas em parágrafos contínuos para resumos ou artigos.",
          "icon": "text"
        },
        {
          "title": "Instantâneo e Privado",
          "description": "Processamento local no navegador sem limites de arquivo nem envio a servidores.",
          "icon": "lock"
        }
      ],
      "faqsTitle": "Perguntas Frequentes",
      "faqs": [
        {
          "question": "Como converter um arquivo SRT para TXT?",
          "answer": "Para converter um arquivo SRT para TXT, cole o texto de suas legendas ou envie um arquivo .srt em nosso conversor online gratuito. A ferramenta remove automaticamente os números sequenciais e cabeçalhos de tempo, deixando apenas o diálogo limpo. Você pode optar por manter os códigos de tempo ou unir o texto em parágrafos contínuos, e depois copiar ou baixar o arquivo .txt."
        },
        {
          "question": "Posso converter SRT para TXT online grátis?",
          "answer": "Sim! O SRTConverters.com é 100% gratuito, sem necessidade de cadastro, assinaturas ou marcas d'água. Além disso, todo o processamento roda diretamente no seu navegador via JavaScript, garantindo que suas transcrições nunca sejam enviadas para servidores remotos."
        },
        {
          "question": "O que acontece com as marcas de tempo ao converter SRT para TXT?",
          "answer": "Por padrão, todos os intervalos de tempo em milissegundos (ex.: '00:00:01,000 --> 00:00:04,500') são totalmente removidos. Isso gera um texto limpo e contínuo, ideal para artigos de blog, resumos, notas de estudo e inteligência artificial."
        },
        {
          "question": "Posso converter SRT para TXT mantendo os códigos de tempo?",
          "answer": "Sim. No painel de configurações do conversor, basta desmarcar a opção 'Remover Marcas de Tempo'. A ferramenta manterá os tempos de início e término acima de cada fala, o que é perfeito para guias de edição de vídeo e transcrições de referência."
        },
        {
          "question": "Qual é a diferença entre arquivos SRT e TXT?",
          "answer": "Um arquivo SRT (SubRip) é um formato de legendas com blocos numerados e tempos precisos em milissegundos que indicam aos players de vídeo quando exibir cada fala. Um arquivo TXT é texto simples sem códigos de tempo, feito para leitura e edição comum."
        },
        {
          "question": "Como remover marcas de tempo de um arquivo SRT?",
          "answer": "A forma mais rápida de remover marcas de tempo é usar nosso conversor online. Em vez de apagar manualmente cada linha de tempo no Bloco de Notas, envie seu arquivo .srt e a ferramenta limpará todos os tempos e números em milissegundos instantaneamente."
        },
        {
          "question": "Posso converter um arquivo de legenda SRT em uma transcrição?",
          "answer": "Sim, converter SRT para TXT é a maneira padrão de transformar legendas em transcrições legíveis. Você pode ativar a opção 'Unir em Parágrafos' para mesclar as frases em parágrafos fluidos para posts, documentação ou estudos."
        },
        {
          "question": "Por que meu arquivo TXT convertido tem linhas repetidas?",
          "answer": "Linhas repetidas costumam ocorrer se o arquivo SRT original usou legendagem automática ou formato 'roll-up' de TV, que repete falas anteriores para continuidade visual. Você pode localizar e apagar duplicatas facilmente em qualquer editor de texto."
        },
        {
          "question": "Posso abrir um arquivo SRT como texto simples?",
          "answer": "Sim, arquivos SRT são documentos de texto simples com uma extensão própria. Você pode abri-los no Bloco de Notas ou TextEdit, mas verá todos os códigos de tempo e números. Ao convertê-los com nossa ferramenta, você extrai apenas o texto legível."
        },
        {
          "question": "A conversão de SRT para TXT funciona com legendas em diferentes idiomas?",
          "answer": "Sim, nosso conversor é totalmente compatível com o padrão UTF-8. Ele processa perfeitamente acentos (português, espanhol, francês, alemão), alfabetos não latinos (cirílico, grego, árabe, hebraico), caracteres asiáticos (chinês, japonês, coreano) e símbolos especiais."
        }
      ]
    },
    "srtToVtt": {
      "id": "srt-to-vtt",
      "name": "Conversor de SRT para VTT",
      "shortName": "SRT para VTT",
      "badge": "Pronto para WebVTT",
      "tagline": "Converta Legendas SubRip (.SRT) para o Formato Moderno HTML5 WebVTT (.VTT)",
      "description": "Converta legendas SRT no formato moderno WebVTT para reprodutores de vídeo HTML5 e navegadores.",
      "h1": "Conversor de SRT para VTT",
      "metaTitle": "Conversor SRT para VTT – Converter Legendas para WebVTT Grátis | SRTConverters",
      "metaDescription": "Converta legendas SubRip (.srt) para WebVTT (.vtt) online. Perfeito para reprodutores de vídeo HTML5 com total privacidade.",
      "settingsLabels": {},
      "stepsTitle": "Como Converter SRT para WebVTT em 3 Passos",
      "steps": [
        {
          "step": "1",
          "title": "Envie o Arquivo SRT",
          "description": "Cole o texto da legenda SRT ou envie um arquivo .srt."
        },
        {
          "step": "2",
          "title": "Formatação WebVTT Instantânea",
          "description": "Adiciona o cabeçalho WEBVTT e converte vírgulas em pontos decimais."
        },
        {
          "step": "3",
          "title": "Baixe o Arquivo .VTT",
          "description": "Baixe seu arquivo .vtt pronto para uso em reprodutores web."
        }
      ],
      "featuresTitle": "Por que Converter SRT para WebVTT?",
      "features": [
        {
          "title": "Pronto para Vídeo HTML5",
          "description": "O WebVTT é o padrão oficial do W3C para legendas em navegadores modernos.",
          "icon": "globe"
        },
        {
          "title": "Conversão Precisa de Tempos",
          "description": "Converte com precisão vírgulas de milissegundos para pontos decimais do WebVTT.",
          "icon": "check"
        }
      ],
      "faqsTitle": "Perguntas Frequentes",
      "faqs": [
        {
          "question": "Como converter um arquivo SRT para VTT?",
          "answer": "Para converter SRT para VTT, cole o texto de legendas SubRip ou envie um arquivo .srt no nosso conversor online gratuito. A ferramenta adiciona automaticamente o cabeçalho obrigatório WEBVTT e converte as vírgulas de milissegundos (00:00:01,000) em pontos decimais padrão WebVTT (00:00:01.000). Você pode copiar o resultado imediatamente ou baixar o arquivo .vtt pronto para vídeo HTML5."
        },
        {
          "question": "Posso converter SRT para VTT online gratuitamente?",
          "answer": "Sim! O SRTConverters.com é 100% gratuito, sem necessidade de cadastro, limites de uso ou marcas d'água. Toda a conversão ocorre localmente no seu navegador via JavaScript, garantindo privacidade total ao evitar o envio de arquivos para servidores remotos."
        },
        {
          "question": "Basta apenas renomear o arquivo de .srt para .vtt?",
          "answer": "Não. Apenas alterar a extensão do arquivo no computador fará com que os players web não exibam as legendas. A renomeação não insere o cabeçalho 'WEBVTT' obrigatório na linha 1 nem converte as vírgulas de tempo em pontos decimais. É fundamental processar o arquivo no nosso conversor."
        },
        {
          "question": "Qual é a diferença entre os formatos SRT e VTT?",
          "answer": "O SubRip (.srt) é um formato tradicional criado para reprodutores de desktop e programas de edição. O WebVTT (.vtt) é o padrão oficial do W3C para vídeos HTML5 na web. O WebVTT começa com o cabeçalho obrigatório 'WEBVTT', usa pontos decimais para milissegundos e suporta estilização CSS (::cue) e posicionamento na tela."
        },
        {
          "question": "Como converter SRT para VTT usando o FFmpeg?",
          "answer": "Para converter SRT para WebVTT via terminal com FFmpeg, execute: `ffmpeg -i entrada.srt saida.vtt`. O FFmpeg lê o arquivo SubRip e gera automaticamente um arquivo WebVTT válido. Caso prefira não instalar ferramentas de terminal, nosso conversor web entrega o mesmo resultado de forma imediata."
        },
        {
          "question": "Por que meu arquivo VTT não funciona no navegador?",
          "answer": "Se as legendas não aparecerem, verifique três causas comuns: (1) O arquivo deve iniciar com 'WEBVTT' na primeira linha, (2) Os tempos precisam usar pontos (00:00:01.000) e não vírgulas, e (3) O servidor web precisa enviar o cabeçalho MIME Content-Type: text/vtt; charset=utf-8 com permissões CORS adequadas."
        },
        {
          "question": "A conversão de SRT para VTT altera o sincronismo das legendas?",
          "answer": "Não. A conversão preserva com exatidão os tempos de início e término de cada legenda. Apenas o delimitador de milissegundos é alterado de vírgula para ponto decimal (por exemplo, '00:01:23,456' vira '00:01:23.456'). A sincronia com o vídeo permanece 100% inalterada."
        },
        {
          "question": "O conversor de SRT para VTT preserva o texto das legendas?",
          "answer": "Sim. Todos os diálogos falados, identificadores de locutores e tags básicas de formatação (como <i> para itálico e <b> para negrito) são mantidos intactos. O WebVTT oferece suporte nativo a essas marcações."
        },
        {
          "question": "Por que as legendas VTT precisam do cabeçalho WEBVTT?",
          "answer": "A especificação oficial do W3C exige que todo arquivo WebVTT inicie com a palavra 'WEBVTT' na primeira linha como assinatura de formato. Os navegadores web verificam essa identificação antes de carregar e renderizar as legendas na tela."
        },
        {
          "question": "Qual formato devo usar para vídeo HTML5: SRT ou VTT?",
          "answer": "Você deve sempre utilizar WebVTT (.vtt) para vídeos HTML5. Os navegadores modernos suportam WebVTT nativamente através da tag <track> sem a necessidade de bibliotecas JavaScript adicionais. O SRT não possui suporte nativo direto nos navegadores."
        }
      ]
    },
    "vttToSrt": {
      "id": "vtt-to-srt",
      "name": "Conversor de VTT para SRT",
      "shortName": "VTT para SRT",
      "badge": "SubRip Universal",
      "tagline": "Converta Legendas WebVTT (.VTT) em Arquivos Padrão SubRip (.SRT)",
      "description": "Transforme arquivos WebVTT em arquivos universais SubRip (.srt) compatíveis com editores de vídeo.",
      "h1": "Conversor de VTT para SRT",
      "metaTitle": "Conversor VTT para SRT – Converter WebVTT para SubRip Grátis | SRTConverters",
      "metaDescription": "Converta arquivos WebVTT (.vtt) para formato SubRip (.srt) grátis e online com total privacidade no navegador.",
      "settingsLabels": {},
      "stepsTitle": "Como Converter WebVTT para SRT em 3 Passos",
      "steps": [
        {
          "step": "1",
          "title": "Envie o Arquivo WebVTT",
          "description": "Cole suas legendas WebVTT ou arraste um arquivo .vtt."
        },
        {
          "step": "2",
          "title": "Conversão Automática para SRT",
          "description": "Limpa cabeçalhos WEBVTT, numera cada legenda e converte pontos em vírgulas.",
          "icon": "file"
        },
        {
          "step": "3",
          "title": "Baixe o Arquivo .SRT",
          "description": "Salve seu arquivo .srt universal para Premiere, DaVinci Resolve o VLC."
        }
      ],
      "featuresTitle": "Por que Converter VTT para SRT?",
      "features": [
        {
          "title": "Compatibilidade Universal com Editores",
          "description": "O formato SRT é aceito no Adobe Premiere, DaVinci Resolve, Final Cut Pro e VLC.",
          "icon": "video"
        },
        {
          "title": "Numeração Sequencial Automática",
          "description": "Insere automaticamente a numeração sequencial 1, 2, 3... exigida pelo padrão SubRip.",
          "icon": "list"
        }
      ],
      "faqsTitle": "Perguntas Frequentes",
      "faqs": [
        {
          "question": "Como converter um arquivo VTT para SRT?",
          "answer": "Para converter VTT para SRT, cole o texto de legendas WebVTT ou envie um arquivo .vtt no nosso conversor online gratuito. A ferramenta remove o cabeçalho WEBVTT, converte os pontos dos milissegundos (00:00:01.000) em vírgulas (00:00:01,000) e insere a numeração sequencial obrigatória (1, 2, 3...). Você pode copiar o resultado ou baixar o arquivo .srt pronto para uso."
        },
        {
          "question": "Posso converter VTT para SRT online gratuitamente?",
          "answer": "Sim! O SRTConverters.com é 100% gratuito, sem necessidade de cadastro, limites de tamanho de arquivo ou marcas d'água. Toda a conversão ocorre localmente no seu navegador via JavaScript, garantindo privacidade total para suas legendas e roteiros."
        },
        {
          "question": "Basta apenas renomear o arquivo de .vtt para .srt?",
          "answer": "Não. Renomear a extensão no computador fará com que reprodutores e editores de vídeo rejeitem o arquivo. A renomeação não insere a numeração sequencial dos blocos, não converte os pontos de tempo em vírgulas e não retira o cabeçalho WEBVTT. É necessário processar o arquivo no nosso conversor."
        },
        {
          "question": "Qual é a diferença entre os formatos VTT e SRT?",
          "answer": "O WebVTT (.vtt) é o padrão oficial do W3C para vídeos na web em HTML5, com cabeçalho 'WEBVTT', marcas de tempo com ponto decimal (00:00:01.500) e suporte para estilos CSS. O SubRip (.srt) é o padrão clássico para softwares de edição e desktop, exigindo números de índice e vírgulas para milissegundos (00:00:01,500)."
        },
        {
          "question": "Como converter VTT para SRT usando o FFmpeg?",
          "answer": "Para converter um arquivo WebVTT para SubRip via terminal com o FFmpeg, execute: `ffmpeg -i entrada.vtt saida.srt`. O FFmpeg lê o arquivo WebVTT e gera um arquivo .srt válido. Caso prefira não usar o terminal, nosso conversor online entrega o mesmo resultado de forma imediata no navegador."
        },
        {
          "question": "A conversão de VTT para SRT altera o sincronismo das legendas?",
          "answer": "Não. A conversão de formato preserva com exatidão os tempos de início e término de cada legenda. Apenas o delimitador de milissegundos é alterado de ponto para vírgula (por exemplo, '00:01:23.456' vira '00:01:23,456'). A sincronia com o vídeo permanece 100% idêntica."
        },
        {
          "question": "O que acontece com os estilos e posicionamentos do WebVTT na conversão para SRT?",
          "answer": "Como o formato SubRip padrão não suporta estilos CSS nem coordenadas de posicionamento na tela (como line:X% ou align:start), esses atributos web são removidos na conversão. Marcações básicas de itálico e negrito (<b>, <i>) são preservadas, e o texto é exibido centralizado na parte inferior."
        },
        {
          "question": "Por que meu arquivo SRT convertido não abre no meu player?",
          "answer": "Se um arquivo SRT não abrir, a causa mais frequente é a ausência de numeração sequencial (1, 2, 3...) ou o uso de pontos em vez de vírgulas nos tempos. Ao usar nossa ferramenta online, você garante blocos devidamente numerados e com timecodes válidos."
        },
        {
          "question": "A conversão de VTT para SRT preserva o texto e as quebras de linha?",
          "answer": "Sim. Todos os diálogos, nomes de personagens, pontuações e quebras de linha em legendas duplas são transferidos intactos para o arquivo SRT resultante."
        },
        {
          "question": "Por que os arquivos SRT usam vírgulas em vez de pontos no tempo?",
          "answer": "O formato SubRip (.srt) foi desenvolvido na França no final dos anos 1990. Na maior parte da Europa, a vírgula é o separador decimal padrão. Por isso, a especificação SubRip adotou vírgulas para os milissegundos (00:00:01,500), enquanto o WebVTT utilizou pontos decimais para conformidade com os padrões web."
        }
      ]
    },
    "srtToAss": {
      "id": "srt-to-ass",
      "name": "Conversor de SRT para ASS",
      "shortName": "SRT para ASS",
      "badge": "Compatível com ASS v4+",
      "tagline": "Converta Legendas SubRip (.SRT) para o Formato Advanced SubStation Alpha (.ASS)",
      "description": "Converta legendas SRT comuns para o formato Advanced SubStation Alpha (.ass) com tipografia personalizada, cores, bordas e posicionamento para Aegisub e players.",
      "h1": "Conversor de SRT para ASS",
      "metaTitle": "Conversor SRT para ASS – Converter Legendas em ASS Online | SRTConverters",
      "metaDescription": "Converta legendas SubRip (.srt) para formato Advanced SubStation Alpha (.ass) online e grátis. Estilos personalizados, cores, posições e 100% privacidade no navegador.",
      "settingsLabels": {},
      "stepsTitle": "Como Converter SRT para ASS em 3 Passos Simples",
      "steps": [
        {
          "step": "1",
          "title": "Envie ou Cole as Legendas SRT",
          "description": "Arraste seu arquivo .srt para a área de envio ou cole o texto das legendas diretamente no editor."
        },
        {
          "step": "2",
          "title": "Formatação ASS v4.00+ Instantânea",
          "description": "O conversor analisa os blocos, converte tempos para centésimos de segundo e gera as seções [Script Info], [V4+ Styles] e [Events]."
        },
        {
          "step": "3",
          "title": "Baixe o Arquivo .ASS",
          "description": "Copie o código gerado ou baixe o arquivo .ass pronto para uso no Aegisub, VLC, MPV ou editores de vídeo."
        }
      ],
      "featuresTitle": "Por que Converter SRT para ASS?",
      "features": [
        {
          "title": "Estilos Avançados e Fontes Personalizadas",
          "description": "Defina fontes, tamanhos, contornos, sombras e cores especiais que o formato SRT padrão não suporta.",
          "icon": "pen"
        },
        {
          "title": "Posicionamento Exato na Tela",
          "description": "Suporta coordenadas em pixels e alinhamentos para posicionar legendas sem cobrir elementos visuais do vídeo.",
          "icon": "grid"
        },
        {
          "title": "100% de Privacidade no Navegador",
          "description": "Todo o processo ocorre no seu navegador via JavaScript. Nenhum arquivo é transferido para servidores externos.",
          "icon": "shield"
        },
        {
          "title": "Compatível com Aegisub e Players",
          "description": "Gera sintaxe ASS v4.00+ oficial, aceita no Aegisub, VLC, MPV, HandBrake, DaVinci Resolve e Premiere Pro.",
          "icon": "check"
        }
      ],
      "faqsTitle": "Perguntas Frequentes",
      "faqs": [
        {
          "question": "Como converter um arquivo SRT para ASS?",
          "answer": "Para converter um arquivo SRT para ASS, basta fazer upload do arquivo .srt ou colar o texto no conversor online. A ferramenta reestrutura imediatamente os blocos no padrão oficial Advanced SubStation Alpha (v4.00+), incluindo as seções obrigatórias [Script Info], [V4+ Styles] e [Events], disponibilizando o arquivo .ass resultante para download instantâneo."
        },
        {
          "question": "Posso converter SRT para ASS online gratuitamente?",
          "answer": "Sim, o SRTConverters.com é 100% gratuito, sem cadastro, sem marcas d'água e sem limites diários de conversão. Todo o processamento ocorre localmente no seu navegador via JavaScript, o que significa que seus arquivos e transcrições privadas nunca são transferidos para servidores externos."
        },
        {
          "question": "Qual a diferença entre legendas SRT e ASS?",
          "answer": "O formato SRT (SubRip) é um padrão básico de texto puro contendo apenas números sequenciais, códigos de tempo em milissegundos e texto com formatação mínima. O ASS (Advanced SubStation Alpha) é uma especificação sofisticada que permite controle visual completo: fontes personalizadas, cores em notação BGR, contornos espessos, sombras projetadas, coordenadas de tela e animações de karaokê."
        },
        {
          "question": "Posso editar o arquivo ASS no Aegisub?",
          "answer": "Sim. Nosso conversor gera sintaxe ASS v4.00+ em total conformidade com o Aegisub. Assim que baixar o arquivo .ass, abra-o no Aegisub para editar estilos de fonte, cores, posicionamento, efeitos de karaokê ou realizar sincronização fina com o espectrograma de áudio."
        },
        {
          "question": "Basta renomear o arquivo .srt para .ass?",
          "answer": "Não. Apenas renomear a extensão de .srt para .ass fará com que reprodutores de vídeo e softwares de edição exibam erros ou não mostrem as legendas. O formato ASS exige blocos estruturados como [Script Info], [V4+ Styles] e linhas de evento Dialogue. É indispensável usar um conversor dedicado."
        },
        {
          "question": "A conversão afeta a sincronia do áudio?",
          "answer": "Não. Todos os tempos de início e término são preservados com precisão matemática, convertidos da notação de milissegundos com vírgula do SRT (HH:MM:SS,mmm) para a notação de centésimos de segundo com ponto do ASS (H:MM:SS.cs). O sincronismo com o vídeo permanece perfeito."
        },
        {
          "question": "Quais reprodutores de mídia suportam legendas ASS?",
          "answer": "A maioria dos reprodutores modernos oferece suporte nativo e completo a legendas ASS com renderização de estilos, incluindo VLC Media Player, MPV, MPC-HC, PotPlayer e Plex (quando configurado para reprodução direta ou transcodificação). Softwares como HandBrake e FFmpeg também podem queimar estilos ASS diretamente em vídeos MP4."
        },
        {
          "question": "As tags de formatação como negrito e itálico são preservadas?",
          "answer": "Sim. As marcações HTML comuns presentes no SRT como <i>, <b>, <u> e <font color> são convertidas automaticamente em tags de sobreposição nativas do ASS ({\\i1}, {\\b1}, {\\u1} e {\\c&HBBGGRR&}), garantindo que a ênfase visual original seja mantida."
        }
      ]
    },
    "assToSrt": {
          "id": "ass-to-srt",
          "name": "Conversor ASS para SRT",
          "shortName": "ASS para SRT",
          "badge": "SubRip Universal",
          "tagline": "Converta Legendas Advanced SubStation Alpha (.ASS) em Formato SubRip (.SRT) Limpo",
          "description": "Converta legendas estilizadas Advanced SubStation Alpha (.ass / .ssa) em arquivos SubRip (.srt) limpos e universalmente compatíveis. Remova tags de controle, converta centissegundos e prepare legendas para qualquer TV ou player.",
          "h1": "Conversor ASS para SRT Online",
          "metaTitle": "Conversor ASS para SRT Online – Converter ASS em SRT Grátis | SRTConverters",
          "metaDescription": "Converta legendas Advanced SubStation Alpha (.ass) em formato SubRip (.srt) limpo online e grátis. Remova tags de estilo, converta tempos e baixe legendas SRT instantaneamente.",
          "settingsLabels": {},
          "stepsTitle": "Como Converter ASS para SRT em 3 Passos Fáceis",
          "steps": [
                {
                      "step": "1",
                      "title": "Envie ou Cole Legendas ASS",
                      "description": "Arraste seu arquivo .ass ou .ssa para a área de upload ou cole o conteúdo do script diretamente no editor."
                },
                {
                      "step": "2",
                      "title": "Limpeza de Tags e Conversão de Tempo",
                      "description": "Nosso motor no navegador extrai os diálogos, converte centissegundos em milissegundos, normaliza quebras de linha e remove tags de estilo complexas."
                },
                {
                      "step": "3",
                      "title": "Baixe o Arquivo .SRT Limpo",
                      "description": "Copie as legendas SubRip para a área de transferência ou baixe o arquivo .srt finalizado para reproduzir na Smart TV, Plex, VLC ou celular."
                }
          ],
          "featuresTitle": "Por Que Converter ASS para SRT?",
          "features": [
                {
                      "title": "Compatibilidade Universal com Players",
                      "description": "O formato SubRip (.srt) é o mais aceito no mundo, reproduzindo nativamente em Smart TVs, consoles e aparelhos multimídia sem erros de renderização.",
                      "icon": "globe"
                },
                {
                      "title": "Limpeza Inteligente de Estilos e Tags",
                      "description": "Remove automaticamente posições (\\pos), alinhamentos (\\an), cores (\\c) e vetores (\\p1), preservando negrito, itálico e sublinhado.",
                      "icon": "sparkles"
                },
                {
                      "title": "Conversão Exata de Centissegundos para Milissegundos",
                      "description": "Converte a marcação de centissegundos do ASS (H:MM:SS.cs) em intervalos milimétricos de milissegundos no SRT (HH:MM:SS,mmm), mantendo sincronia perfeita com o áudio.",
                      "icon": "clock"
                },
                {
                      "title": "100% de Privacidade no Navegador",
                      "description": "Toda a conversão ocorre localmente na memória do seu navegador. Nenhum arquivo ou texto de legenda é enviado para servidores externos.",
                      "icon": "shield"
                }
          ],
          "faqsTitle": "Perguntas Frequentes",
          "faqs": [
                {
                      "question": "Qual é a diferença entre legendas ASS e SRT?",
                      "answer": "O Advanced SubStation Alpha (.ass) é um formato avançado que suporta fontes personalizadas, posicionamento exato por coordenadas (X, Y), desenhos vetoriais, temporizadores de karaokê e transparências. O SubRip (.srt) é um formato de texto simples projetado para máxima compatibilidade universal em praticamente qualquer reprodutor ou televisor."
                },
                {
                      "question": "A formatação de cores e posições é perdida ao converter de ASS para SRT?",
                      "answer": "Sim, estilos complexos como coordenadas de tela (\\pos), alinhamentos (\\an), efeitos de karaokê (\\k) e cores personalizadas são removidos porque a especificação padrão do SRT não os suporta. No entanto, formatações básicas como negrito (<b>), itálico (<i>) e sublinhado (<u>) são preservadas."
                },
                {
                      "question": "Este conversor mantém as tags de negrito e itálico do ASS?",
                      "answer": "Sim. As tags de controle do ASS como {\\b1} e {\\i1} são convertidas automaticamente em tags HTML padrão (<b> e <i>), garantindo que suas falas mantenham a ênfase visual desejada em reprodutores compatíveis."
                },
                {
                      "question": "Como o conversor lida com os centissegundos e tempos do ASS?",
                      "answer": "Arquivos ASS registram o tempo em centissegundos (centésimos de segundo, H:MM:SS.cs), enquanto arquivos SRT usam milissegundos (HH:MM:SS,mmm). Nosso conversor calcula os milissegundos precisos (por exemplo, 0:01:23.45 vira 00:01:23,450), garantindo sincronia impecável com a faixa de áudio."
                },
                {
                      "question": "O que acontece com falas simultâneas ou sobrepostas no ASS?",
                      "answer": "Quando múltiplas falas ocorrem no mesmo instante (comum em animes com diálogos simultâneos ou músicas traduzidas), o conversor organiza os eventos em ordem cronológica e gera índices sequenciais únicos no arquivo SRT resultante."
                },
                {
                      "question": "Posso converter legendas de anime (.ass) para usar no Plex ou Smart TVs?",
                      "answer": "Sim! Este é um dos motivos mais comuns para conversão. Muitas Smart TVs e aparelhos com Plex não conseguem renderizar fontes complexas de ASS e forçam a transcodificação pesada do vídeo. A conversão para SRT permite reprodução direta leve e rápida."
                },
                {
                      "question": "É possível converter ASS para SRT via linha de comando com o FFmpeg?",
                      "answer": "Sim, através do comando: ffmpeg -i entrada.ass -c:s srt saida.srt. Porém, nosso conversor online não exige instalação de programas, oferece visualização instantânea e funciona com total segurança em qualquer celular ou computador."
                },
                {
                      "question": "Meus arquivos de legendas são enviados para algum servidor?",
                      "answer": "Não. A ferramenta é 100% privada e funciona localmente no seu navegador via JavaScript. Nenhum arquivo ou texto é enviado para a internet ou salvo em servidores."
                }
          ]
    },
    "srtToSub": {
          "id": "srt-to-sub",
          "name": "Conversor SRT para SUB",
          "shortName": "SRT para SUB",
          "badge": "Grátis e Seguro",
          "tagline": "Converta Legendas SubRip (.SRT) para Formato MicroDVD e SubViewer (.SUB) Online",
          "description": "Converta legendas SubRip (.srt) para formato SUB (MicroDVD e SubViewer 2.0) online e grátis. Suporte a taxas de quadros (FPS) personalizadas e 100% de privacidade.",
          "h1": "Conversor SRT para SUB Online",
          "metaTitle": "Conversor SRT para SUB – Converter Legendas em SUB Online | SRTConverters",
          "metaDescription": "Converta legendas SubRip (.srt) para formato SUB (MicroDVD e SubViewer) online e grátis. Taxas de quadros (FPS) personalizadas e 100% de privacidade no navegador.",
          "settingsLabels": {
                "timingMode": "Formato da Legenda",
                "fixedDuration": "MicroDVD (.sub)",
                "cpsDuration": "SubViewer 2.0 (.sub)",
                "cpsLabel": "Taxa de Quadros do Vídeo (FPS)",
                "cpsHint": "Selecione a taxa de quadros do vídeo para garantir sincronização perfeita.",
                "startTime": "Incluir Cabeçalho FPS",
                "startTimeHint": "Adiciona a linha {1}{1}FPS ao arquivo MicroDVD para detecção automática nos players.",
                "maxCharsPerLine": "Limpar Tags HTML",
                "maxCharsHint": "Remove tags <i>, <b> e fontes para compatibilidade com players antigos."
          },
          "stepsTitle": "Como Converter SRT para SUB Online em 3 Passos",
          "steps": [
                {
                      "step": "1",
                      "title": "Envie ou Cole suas Legendas SRT",
                      "description": "Arraste e solte o arquivo .srt na área demarcada ou cole o texto das legendas SubRip no editor."
                },
                {
                      "step": "2",
                      "title": "Escolha o Formato e os FPS do Vídeo",
                      "description": "Selecione MicroDVD ou SubViewer e indique a taxa de quadros correspondente (ex.: 23.976, 24, 25 ou 29.97 FPS)."
                },
                {
                      "step": "3",
                      "title": "Baixe o Arquivo SUB Convertido",
                      "description": "Clique em Baixar .SUB para salvar o arquivo instantaneamente ou copie o texto diretamente para a área de transferência."
                }
          ],
          "featuresTitle": "Por Que Usar Nosso Conversor SRT para SUB Online?",
          "features": [
                {
                      "title": "Privacidade 100% no Navegador",
                      "description": "A conversão ocorre inteiramente no seu navegador. Nenhum arquivo ou texto é enviado para servidores externos.",
                      "icon": "shield"
                },
                {
                      "title": "Suporte MicroDVD e SubViewer",
                      "description": "Compatibilidade total com MicroDVD baseado em quadros ({início}{fim}) e SubViewer 2.0 baseado em tempo.",
                      "icon": "file"
                },
                {
                      "title": "Sincronização Exata por Quadro",
                      "description": "Suporte a taxas padrão do mercado: 23.976, 24.0, 25.0 (PAL), 29.97 (NTSC), 30 e 60 FPS contra dessincronia.",
                      "icon": "clock"
                },
                {
                      "title": "Compatível com Aparelhos Clássicos",
                      "description": "Gera arquivos .sub limpos prontos para DVD players de mesa, centrais multimídia automotivas e aparelhos DivX/XviD.",
                      "icon": "split"
                }
          ],
          "faqsTitle": "Perguntas Frequentes sobre a Conversão de SRT para SUB",
          "faqs": [
                {
                      "question": "Qual é a diferença entre um arquivo SRT e um arquivo SUB?",
                      "answer": "SRT (SubRip) é um formato de legenda moderno baseado em tempo real que define as falas por milissegundos (00:01:23,450 --> 00:01:26,800), amplamente suportado na web, players de computador e smart TVs. Já os arquivos SUB em texto — principalmente o MicroDVD (.sub) — são baseados no número de quadros do vídeo ({quadro_inicial}{quadro_final}). Outro formato de texto com a extensão .sub é o SubViewer 2.0, que emprega centésimos de segundo. Converter SRT em SUB é essencial para assistir vídeos em players de DVD antigos, telas automotivas e centrais multimídia que exigem arquivos .sub indexados por quadros."
                },
                {
                      "question": "Por que preciso selecionar a taxa de quadros (FPS) ao converter SRT para SUB?",
                      "answer": "Como as legendas MicroDVD calculam a exibição das linhas com base nos quadros do vídeo e não em milissegundos absolutos, o conversor precisa multiplicar os tempos da legenda pela taxa de quadros exata do vídeo (Quadro = Tempo em Segundos × FPS). Se você converter um SRT usando 25.000 FPS (PAL), mas o vídeo estiver em 23.976 FPS (cinema / NTSC), as legendas irão se dessincronizar progressivamente. Definir o valor exato de FPS garante sincronismo perfeito do início ao fim."
                },
                {
                      "question": "Qual a diferença entre MicroDVD (.sub), SubViewer (.sub) e VobSub (.sub)?",
                      "answer": "A extensão .sub é historicamente usada por três formatos distintos: MicroDVD (.sub) é um formato de texto leve baseado em quadros ({1250}{1380}Diálogo) muito comum em vídeos DivX/XviD; SubViewer 2.0 (.sub) é um formato de texto com cabeçalho [INFORMATION] e marcação em centésimos de segundo (00:01:20.10,00:01:23.45); e VobSub (.sub + .idx) NÃO é texto, mas sim imagens gráficas rasterizadas extraídas de DVDs comerciais. Nosso conversor produz legendas textuais padronizadas (MicroDVD e SubViewer 2.0) prontas para uso."
                },
                {
                      "question": "Como descubro a taxa de quadros (FPS) exata do meu arquivo de vídeo?",
                      "answer": "Você pode conferir os FPS do seu vídeo facilmente: no VLC Media Player, abra o vídeo, clique em Ferramentas > Informações sobre o Codec (ou Ctrl+J / Cmd+I), acesse a aba Codec e verifique a Taxa de quadros (como 23.976023, 24, 25 ou 29.970000). No Windows, clique com o botão direito no vídeo, vá em Propriedades, aba Detalhes e veja Taxa de quadros. No macOS, abra no QuickTime Player e pressione Cmd+I (Inspetor de Filme). O programa gratuito MediaInfo também exibe essa informação com máxima precisão."
                },
                {
                      "question": "Por que minhas legendas SUB convertidas estão ficando fora de sincronia?",
                      "answer": "Quando as legendas começam no tempo certo e vão se adiantando ou atrasando ao longo do vídeo, quase sempre o motivo é a divergência de FPS entre o arquivo MicroDVD gerado e a taxa real do vídeo. Por exemplo, se o filme está a 23.976 FPS e você converteu a 25.000 FPS, a legenda avançará cerca de 4,1% mais rápido (cerca de 2,5 segundos de erro por minuto). Para consertar, confirme a taxa correta com o VLC ou MediaInfo e reconverta o SRT indicando o valor exato."
                },
                {
                      "question": "Posso converter um arquivo SUB de volta para o formato SRT?",
                      "answer": "Sim. Arquivos de texto MicroDVD (.sub) e SubViewer (.sub) podem ser facilmente revertidos para SubRip (.srt). No caso do MicroDVD, basta dividir o número do quadro pelos FPS do vídeo para calcular os milissegundos: Tempo = Número do Quadro / FPS. Você pode fazer isso com ferramentas como Subtitle Edit, Aegisub ou através dos conversores da nossa plataforma SRTConverters."
                },
                {
                      "question": "Meus arquivos de legendas são enviados para algum servidor durante a conversão?",
                      "answer": "Não. O SRTConverters executa todo o processamento localmente no seu navegador via JavaScript client-side. Seus arquivos SRT, textos e arquivos SUB gerados existem unicamente na memória do seu dispositivo. Nenhum dado é transmitido, armazenado ou monitorado em servidores remotos."
                },
                {
                      "question": "Como converter SRT para SUB na linha de comando usando o FFmpeg?",
                      "answer": "Você pode converter SRT para MicroDVD SUB pelo FFmpeg especificando o codec de legendas: ffmpeg -i input.srt -c:s microdvd output.sub. Caso precise definir uma taxa de quadros específica durante conversões em lote ou mixagens, utilize a opção de taxa: ffmpeg -i input.srt -r 23.976 -c:s microdvd output.sub. Esse método é perfeito para rotinas automatizadas e scripts de codificação."
                }
          ]
    },
    "subToSrt": {
          "id": "sub-to-srt",
          "name": "Conversor SUB para SRT",
          "shortName": "SUB para SRT",
          "badge": "Grátis e no Navegador",
          "tagline": "Converta Legendas MicroDVD e SubViewer (.SUB) em SubRip (.SRT) Padrão Online",
          "description": "Converta legendas SUB (MicroDVD e SubViewer) para o formato SubRip (.srt) limpo online e grátis. Detecção automática de FPS, sincronização precisa de frames para milissegundos e privacidade total.",
          "h1": "Conversor SUB para SRT Online",
          "metaTitle": "Conversor SUB para SRT Online – Converter SUB em SRT Grátis | SRTConverters",
          "metaDescription": "Converta legendas SUB (MicroDVD e SubViewer) para o formato SubRip (.srt) limpo online e grátis. Detecção automática de FPS, sincronização precisa de frames para milissegundos e privacidade total.",
          "settingsLabels": {
                "timingMode": "Formato Detectado",
                "fixedDuration": "Detecção Automática",
                "cpsDuration": "MicroDVD ({frame}{frame})",
                "cpsLabel": "Taxa de Quadros (FPS)",
                "cpsHint": "Selecione a taxa de quadros do vídeo para garantir a sincronização exata das legendas.",
                "startTime": "Sincronizar Cabeçalho FPS",
                "startTimeHint": "Lê automaticamente a linha de cabeçalho {1}{1}FPS do arquivo MicroDVD quando disponível.",
                "maxCharsPerLine": "Converter Tags de Formatação",
                "maxCharsHint": "Converte tags {Y:i} em <i> e quebras de barra (|) em quebras de linha padrão."
          },
          "stepsTitle": "Como Converter SUB para SRT Online em 3 Passos Simples",
          "steps": [
                {
                      "step": "1",
                      "title": "Envie ou Cole suas Legendas SUB",
                      "description": "Arraste e solte seu arquivo .sub na área designada ou cole o texto de MicroDVD ou SubViewer diretamente no editor."
                },
                {
                      "step": "2",
                      "title": "Verifique a Taxa de Quadros (FPS)",
                      "description": "Se o arquivo for MicroDVD, verifique a taxa de quadros do vídeo (ex.: 23.976, 24, 25 ou 29.97 FPS) para converter os frames em tempo real exato."
                },
                {
                      "step": "3",
                      "title": "Baixe o Arquivo SRT Convertido",
                      "description": "Clique em Baixar .SRT para salvar seu arquivo SubRip convertido instantaneamente ou copie o texto para a área de transferência."
                }
          ],
          "featuresTitle": "Por Que Usar Nosso Conversor SUB para SRT?",
          "features": [
                {
                      "title": "Privacidade 100% no Navegador",
                      "description": "Suas legendas são processadas integralmente no seu navegador. Nenhum dado ou arquivo é enviado para servidores externos.",
                      "icon": "shield"
                },
                {
                      "title": "Detecção de MicroDVD e SubViewer",
                      "description": "Identifica com precisão legendas MicroDVD baseadas em frames, cabeçalhos SubViewer 2.0/1.0 e linhas {1}{1}FPS.",
                      "icon": "file"
                },
                {
                      "title": "Sincronização Precisa em Milissegundos",
                      "description": "Calcula com rigor as marcas de tempo em milissegundos para taxas cinematográficas, PAL e NTSC, eliminando descompassos.",
                      "icon": "clock"
                },
                {
                      "title": "Alerta de VobSub e Limpeza de Tags",
                      "description": "Detecta imediatamente arquivos binários VobSub de DVD e traduz barras verticais (|) e tags de estilo em marcação SRT limpa.",
                      "icon": "split"
                }
          ],
          "faqsTitle": "Perguntas Frequentes Sobre a Conversão de SUB para SRT",
          "faqs": [
                {
                      "question": "Qual é a diferença entre um arquivo SUB e um arquivo SRT?",
                      "answer": "O formato SRT (SubRip) é o padrão universal moderno para legendas de texto. Cada fala é definida por um índice numérico sequencial e marcações de tempo absolutas com precisão de milissegundos (00:01:23,450 --> 00:01:26,800). O SRT é compatível nativamente com praticamente todos os reprodutores de mídia, Smart TVs, plataformas de streaming (YouTube, Netflix) e editores de vídeo (Premiere, DaVinci Resolve). Já os arquivos SUB em texto—principalmente o MicroDVD (.sub)—usam o número do frame do vídeo ({frame_inicial}{frame_final}), tornando o tempo relativo à taxa de quadros (FPS) do arquivo de vídeo. O SubViewer (.sub) adota centésimos de segundo. Converter SUB em SRT proporciona compatibilidade universal em qualquer dispositivo moderno sem necessidade de softwares legados."
                },
                {
                      "question": "Por que preciso definir a taxa de quadros (FPS) ao converter MicroDVD para SRT?",
                      "answer": "Arquivos MicroDVD não contêm horas ou minutos; eles indicam apenas o número exato do frame em que o diálogo deve aparecer e desaparecer (exemplo: {1200}{1350}Texto da legenda). Para converter esses números em milissegundos de relógio do padrão SRT, o conversor aplica a fórmula matemática: Milissegundos = Arredondar((Número do Frame / FPS do Vídeo) × 1000). Se você converter um arquivo usando 25 FPS (PAL) para um vídeo codificado a 23.976 FPS (cinema / NTSC), a legenda se descompassará cerca de 2,5 segundos a cada minuto. Informar o FPS correto garante sincronização impecável durante todo o filme."
                },
                {
                      "question": "Qual é a diferença entre MicroDVD (.sub), SubViewer (.sub) e VobSub (.sub)?",
                      "answer": "A extensão .sub refere-se historicamente a três tecnologias distintas: 1. MicroDVD (.sub) é um formato de texto leve indexado por frames entre chaves ({início}{fim}Texto|Linha2), muito usado na era DivX/XviD; 2. SubViewer (.sub) é um formato de texto com cabeçalho de metadados ([INFORMATION]) e tempos em centésimos de segundo (00:01:20.50,00:01:23.80) com tags [br]; 3. VobSub (.sub + .idx) é um contêiner binário com imagens de mapa de bits (gráficos) extraídas de DVDs de vídeo. Nossa ferramenta converte com sucesso os formatos de texto MicroDVD e SubViewer, e emite um alerta caso detecte um arquivo binário VobSub."
                },
                {
                      "question": "Como descubro a taxa de quadros (FPS) correta do meu arquivo de vídeo?",
                      "answer": "Você pode verificar a taxa de quadros exata do vídeo com reprodutores gratuitos comuns: No VLC Media Player, reproduza o vídeo, vá em Ferramentas > Informações do Codec (ou tecle Ctrl+J / Cmd+I), clique na guia Codec e confira a 'Taxa de quadros' (como 23.976023, 24, 25 ou 29.970000). No Windows Explorer, clique com o botão direito no vídeo, selecione Propriedades, acesse a aba Detalhes e confira a linha 'Taxa de quadros'. No macOS, abra o arquivo no QuickTime Player e pressione Cmd+I para exibir o inspetor. Você também pode usar a ferramenta gratuita MediaInfo para obter um relatório técnico detalhado."
                },
                {
                      "question": "Por que minhas legendas SRT convertidas perdem a sincronia durante a reprodução?",
                      "answer": "A perda progressiva de sincronia—quando as legendas começam no tempo certo, mas gradualmente se adiantam ou atrasam com o passar do vídeo—é quase sempre consequência de uma divergência de FPS na conversão. Por exemplo, converter um vídeo de 23.976 FPS com a opção de 25.000 FPS faz com que o texto passe cerca de 4,1% mais rápido que a fala, acumulando vários segundos de erro em poucos minutos. Para corrigir, identifique o FPS exato no VLC ou MediaInfo, selecione a mesma taxa no nosso conversor e gere o arquivo SRT novamente. Se o arquivo MicroDVD tiver a linha `{1}{1}FPS`, nosso conversor a aplicará automaticamente."
                },
                {
                      "question": "Este conversor consegue processar arquivos VobSub (.sub) de DVDs?",
                      "answer": "Não. Os arquivos VobSub (.sub) não são textos simples, mas pacotes binários compostos por imagens gráficas renderizadas de legendas de DVDs de vídeo. Como se trata de imagens rasterizadas e não de texto alfanumérico, convertê-los em SRT exige um software com Reconhecimento Óptico de Caracteres (OCR) capaz de interpretar graficamente cada caractere. Caso você envie um arquivo VobSub binário, nosso sistema detectará sua estrutura e exibirá um aviso orientando o uso de utilitários como Subtitle Edit, OCR-SubRip ou BDSup2Sub."
                },
                {
                      "question": "Meus arquivos de legendas são enviados para servidores externos durante o processo?",
                      "answer": "Não. O SRTConverters funciona 100% de forma local no seu navegador web utilizando JavaScript moderno. Seus arquivos de legendas, textos inseridos e arquivos SRT resultantes nunca saem do seu computador ou smartphone. Nenhum dado é transmitido pela rede, armazenado em nuvem ou registrado em servidores, assegurando total confidencialidade e conversão instantânea."
                },
                {
                      "question": "Como converter SUB para SRT na linha de comando utilizando o FFmpeg?",
                      "answer": "Você pode converter legendas SUB para SRT via terminal com o FFmpeg. Para legendas SubViewer baseadas em tempo, use: ffmpeg -i entrada.sub saida.srt. Para legendas MicroDVD baseadas em frames, informe a taxa de quadros com a flag -r para que os tempos sejam calculados corretamente: ffmpeg -r 23.976 -i entrada.sub saida.srt. Se o arquivo tiver acentos em codificação ANSI ou Windows-1252, adicione o parâmetro de codificação: ffmpeg -sub_charenc CP1252 -r 25 -i entrada.sub saida.srt. Essa abordagem é excelente para rotinas de processamento em lote."
                }
          ]
    },
    sbvToSrt: {
      "id": "sbv-to-srt",
      "name": "Conversor de SBV para SRT",
      "shortName": "SBV para SRT",
      "badge": "Grátis e no Navegador",
      "tagline": "Converta Legendas do YouTube (.SBV) para SubRip (.SRT) Padrão Online",
      "description": "Converta arquivos de legendas SBV e SubViewer do YouTube para o formato universal SubRip (.srt) online e grátis. Ajuste marcações de tempo, decodifique entidades HTML e baixe arquivos SRT instantaneamente.",
      "h1": "Conversor de SBV para SRT Online",
      "metaTitle": "Conversor de SBV para SRT Online – Legendas do YouTube para SRT Grátis | SRTConverters",
      "metaDescription": "Converta arquivos de legendas SBV e SubViewer do YouTube em formato SubRip (.srt) limpo online e grátis. Formate marcações de tempo, decodifique entidades HTML e baixe instantaneamente.",
      "settingsLabels": {
            "timingMode": "Opções de Limpeza de Legendas",
            "fixedDuration": "Decodificar Entidades HTML",
            "cpsDuration": "Converte &amp;, &#39;, &quot;, &lt;, &gt; em texto legível e limpo",
            "cpsLabel": "Remover Descrições de Som",
            "cpsHint": "Exclui [Música], [Aplausos] e efeitos sonoros dos diálogos",
            "startTime": "Normalizar Espaços em Branco",
            "startTimeHint": "Remove espaços redundantes e linhas de diálogo vazias"
      },
      "stepsTitle": "Como Converter SBV para SRT Online em 3 Passos",
      "steps": [
            {
                  "step": "1",
                  "title": "Carregue ou Cole suas Legendas SBV",
                  "description": "Arraste e solte seu arquivo .sbv do YouTube na área de upload ou cole o texto das legendas diretamente no campo de entrada."
            },
            {
                  "step": "2",
                  "title": "Configure as Preferências de Limpeza",
                  "description": "Ative a decodificação de entidades HTML (&amp;, &#39;) e escolha se deseja remover marcadores sonoros automáticos como [Música]."
            },
            {
                  "step": "3",
                  "title": "Baixe o Arquivo SRT Convertido",
                  "description": "Clique em Baixar .SRT para salvar seu arquivo SubRip instantaneamente ou copie o texto formatado para seu editor de vídeo ou player."
            }
      ],
      "featuresTitle": "Por Que Usar Nosso Conversor de SBV para SRT?",
      "features": [
            {
                  "title": "Preservação Exata de Milissegundos",
                  "description": "Cada marcação de tempo é preservada com precisão milimétrica, convertendo os pontos decimais do SBV em vírgulas com horas em dois dígitos.",
                  "icon": "zap"
            },
            {
                  "title": "Decodificação Automática de HTML",
                  "description": "As legendas do YouTube frequentemente contêm entidades como &amp; e &#39;. Nossa ferramenta as converte em texto limpo e legível.",
                  "icon": "layers"
            },
            {
                  "title": "Filtragem de Efeitos Sonoros",
                  "description": "Remova com facilidade marcadores automáticos como [Música] e [Aplausos] para obter legendas de diálogo com acabamento profissional.",
                  "icon": "shield"
            },
            {
                  "title": "Privacidade 100% no Navegador",
                  "description": "Toda a conversão ocorre localmente no seu navegador. Seus arquivos de legendas nunca são enviados nem armazenados em servidores externos.",
                  "icon": "split"
            }
      ],
      "faqsTitle": "Perguntas Frequentes Sobre a Conversão de SBV para SRT",
      "faqs": [
            {
                  "question": "O que é um arquivo SBV e como ele se diferencia do formato SRT?",
                  "answer": "Um arquivo SBV (.sbv), conhecido como formato YouTube SubViewer, é um padrão de legendas em texto simples desenvolvido pelo Google especialmente para legendas no YouTube. No arquivo SBV, cada bloco começa diretamente com um par de marcações de tempo separadas por vírgula (ex.: 0:00:01.000,0:00:04.500) seguido pelas falas, sem numeração de índice sequencial. Em contrapartida, o SubRip (.srt) é o padrão universal para players e editores de vídeo, exigindo números de índice (1, 2, 3...), seta separadora (' --> ') com vírgulas antes dos milissegundos (00:00:01,000 --> 00:00:04,500) e horas com dois dígitos. Converter SBV para SRT permite usar legendas do YouTube no Premiere Pro, DaVinci Resolve, VLC e Plex."
            },
            {
                  "question": "Por que o YouTube Studio exporta legendas em formato .sbv em vez de .srt?",
                  "answer": "Historicamente, o YouTube adotou a variante SubViewer (.sbv) nos primórdios do seu sistema de transcrição automática. A escolha se deu pela simplicidade da estrutura: sem números de índice e com uma vírgula direta entre os tempos de início e fim. Embora o YouTube Studio permita baixar legendas em .sbv, a grande maioria dos editores de vídeo e smart TVs não aceita .sbv nativamente, tornando a conversão para .srt essencial."
            },
            {
                  "question": "Como baixar um arquivo de legendas SBV do YouTube Studio?",
                  "answer": "Para baixar suas legendas do YouTube: (1) Faça login no YouTube Studio e selecione 'Legendas' no menu lateral. (2) Clique no vídeo desejado. (3) Ao lado da faixa de legendas publicada ou automática, clique no menu de três pontos (Opções) e selecione 'Fazer download'. (4) Escolha '.sbv' (ou SubViewer). O YouTube baixará o arquivo 'captions.sbv', que você pode arrastar para o nosso conversor para obter o formato .srt."
            },
            {
                  "question": "Como as marcações de tempo do SBV diferem das do SubRip SRT?",
                  "answer": "As marcações de tempo do SBV utilizam uma única vírgula entre início e fim e pontos decimais antes dos milissegundos, frequentemente com horas em um dígito: '0:01:23.450,0:01:27.800'. Já o formato SubRip SRT exige uma seta com espaços (' --> '), vírgulas antes dos milissegundos e estritamente dois dígitos para as horas: '00:01:23,450 --> 00:01:27,800'. Além disso, o SRT exige um índice sequencial sobre cada bloco. Nosso conversor realiza todas essas correções automaticamente."
            },
            {
                  "question": "Por que meu arquivo SBV do YouTube exibe códigos como &amp; e &#39;?",
                  "answer": "O YouTube codifica certos caracteres tipográficos como entidades HTML para assegurar a renderização segura em navegadores web. Por exemplo, o 'e' comercial vira '&amp;', aspas simples ou apóstrofos viram '&#39;' ou '&apos;', e aspas duplas viram '&quot;'. Em players locais ou no Premiere, esses códigos aparecem literalmente na tela, quebrando o texto. Nosso conversor decodifica automaticamente todas essas entidades nos seus caracteres reais."
            },
            {
                  "question": "Posso importar as legendas SRT convertidas no Premiere Pro, DaVinci Resolve e Final Cut Pro?",
                  "answer": "Sim. O formato SubRip (.srt) é universalmente compatível com todos os softwares profissionais de edição de vídeo, como Adobe Premiere Pro, DaVinci Resolve, Apple Final Cut Pro, Avid Media Composer e CapCut. Basta importar o arquivo .srt convertido para a sua biblioteca e arrastá-lo para a linha do tempo."
            },
            {
                  "question": "Meus arquivos de legendas são enviados para algum servidor durante a conversão?",
                  "answer": "Não. O SRTConverters processa 100% dos seus arquivos localmente no navegador por meio de JavaScript no cliente. Suas legendas SBV, transcrições e arquivos SRT gerados nunca saem do seu computador, garantindo total segurança e conformidade com políticas de privacidade."
            },
            {
                  "question": "Como posso converter SBV para SRT na linha de comando usando Python ou FFmpeg?",
                  "answer": "Você pode converter SBV para SRT com o FFmpeg usando: 'ffmpeg -i input.sbv -c:s srt output.srt'. No Python, você pode ler o arquivo em blocos, dividir as marcações pela vírgula e adicionar os contadores numéricos. Nossa ferramenta online executa a mesma lógica instantaneamente no navegador sem necessidade de instalar dependências ou comandos no terminal."
            }
      ]
}
  },
  "fr": {
    "directory": {
      "title": "Tous les Outils de Sous-Titres et SRT",
      "subtitle": "Outils de conversion de sous-titres gratuits et dans le navigateur. Sans installation, sans transfert vers des serveurs, 100% privé.",
      "metaTitle": "Outils Gratuits de Sous-Titres et SRT | SRTConverters",
      "metaDescription": "Découvrez notre suite d'outils de sous-titres gratuits en ligne. Convertissez TXT en SRT, SRT en Texte, SRT en VTT et VTT en SRT.",
      "convertersCategory": "Convertisseurs de Sous-Titres",
      "utilitiesCategory": "Utilitaires de Sous-Titres",
      "openTool": "Ouvrir l'outil",
      "clientSideBadge": "100% dans le Navigateur"
    },
    "txtToSrt": {
      "id": "txt-to-srt",
      "name": "Convertisseur TXT en SRT",
      "shortName": "TXT en SRT",
      "badge": "Gratuit & dans le navigateur",
      "tagline": "Convertissez du texte brut et des transcriptions en sous-titres SubRip (.SRT) synchronisés",
      "description": "Transformez des transcriptions et scripts en sous-titres SRT formatés avec vitesse de lecture ajustable et minutage estimé.",
      "h1": "Convertisseur de TXT en SRT",
      "metaTitle": "Convertisseur TXT en SRT – Convertir Texte en Sous-Titres Gratuit | SRTConverters",
      "metaDescription": "Convertissez des transcriptions texte (TXT) en sous-titres SRT en ligne et gratuitement. Calcul de timing par CPS et confidentialité totale.",
      "settingsLabels": {
        "timingMode": "Mode de Calcul du Timing",
        "cpsLabel": "Vitesse de Lecture (CPS)",
        "cpsHint": "Caractères par seconde (15-20 recommandé)",
        "maxCharsPerLine": "Caractères Max par Ligne",
        "maxCharsHint": "Recommandé 37-42 caractères pour vidéo et réseaux sociaux",
        "splitMode": "Stratégie de Découpage du Texte",
        "splitSentence": "Découper par phrases et ponctuation",
        "splitParagraph": "Découper par paragraphes",
        "splitLine": "Découper par retours à la ligne",
        "gapBetweenSubtitles": "Intervalle entre sous-titres (ms)",
        "gapHint": "Pause entre deux sous-titres consécutifs (ex: 100ms)"
      },
      "stepsTitle": "Comment convertir du texte en sous-titres SRT en 3 étapes",
      "steps": [
        {
          "step": "1",
          "title": "Collez le texte ou importez un fichier",
          "description": "Saisissez ou collez votre transcription, ou glissez-déposez directement un fichier texte .txt."
        },
        {
          "step": "2",
          "title": "Configurez la synchronisation",
          "description": "Ajustez la vitesse de lecture (CPS), le nombre maximal de caractères par ligne et les coupures."
        },
        {
          "step": "3",
          "title": "Prévisualisez et téléchargez le .SRT",
          "description": "Vérifiez les sous-titres générés en direct, copiez dans le presse-papiers ou téléchargez le fichier .srt."
        }
      ],
      "featuresTitle": "Pourquoi utiliser notre convertisseur TXT en SRT ?",
      "features": [
        {
          "title": "100% Privé & dans le navigateur",
          "description": "Aucun fichier n'est envoyé sur un serveur externe. Tout le traitement se fait dans votre navigateur.",
          "icon": "shield"
        },
        {
          "title": "Découpage Intelligent par Ponctuation",
          "description": "Scinde les textes longs aux points, virgules et points d'interrogation pour une lecture naturelle.",
          "icon": "split"
        },
        {
          "title": "Minutage Intelligent par CPS",
          "description": "Calcule la durée d'affichage selon le nombre de caractères et la vitesse de lecture humaine.",
          "icon": "clock"
        },
        {
          "title": "Format SRT Standard",
          "description": "Génère des fichiers SubRip compatibles avec YouTube, Premiere Pro, DaVinci Resolve et VLC.",
          "icon": "file"
        }
      ],
      "faqsTitle": "Foire Aux Questions",
      "faqs": [
        {
          "question": "Quel format mon fichier TXT doit-il avoir avant d'être converti en SRT ?",
          "answer": "Votre fichier TXT doit contenir du texte brut propre sans mise en forme enrichie. Pour un sous-titrage optimal, structurez votre transcription TXT de sorte que chaque phrase ou réplique occupe sa propre ligne, ou séparez les idées par des paragraphes. Cela permet au convertisseur de calculer un timing précis et de générer des sous-titres SRT équilibrés."
        },
        {
          "question": "Un fichier TXT peut-il contenir des horodatages pour la conversion SRT ?",
          "answer": "Alors que les fichiers TXT standards sont de simples transcriptions sans timecodes, certaines transcriptions exportées intègrent déjà des indications temporelles. Si votre fichier TXT contient des horodatages, un convertisseur ordinaire pourrait les traiter comme du dialogue. Notre outil calcule un minutage naturel à partir du texte brut."
        },
        {
          "question": "Quel format d'horodatage un fichier SRT utilise-t-il ?",
          "answer": "Un fichier SRT standard utilise une numérotation séquentielle suivie d'horodatages au format 00:00:01,000 --> 00:00:04,000 (heures:minutes:secondes,millisecondes). La norme SubRip exige une virgule pour délimiter les millisecondes, contrairement au format WebVTT qui utilise un point. Notre outil génère automatiquement des horodatages SRT conformes."
        },
        {
          "question": "Combien de caractères un sous-titre SRT doit-il contenir ?",
          "answer": "Pour une lisibilité confortable, les normes professionnelles recommandent entre 37 et 42 caractères par ligne, avec un maximum de deux lignes par sous-titre (soit 70 à 84 caractères au total). Il ne s'agit pas d'une règle absolue : les vidéos mobiles privilégient des lignes courtes, tandis que les écrans d'ordinateur acceptent des phrases plus longues."
        },
        {
          "question": "Puis-je convertir une transcription TXT avec plusieurs paragraphes en sous-titres SRT ?",
          "answer": "Oui ! Vous pouvez convertir une transcription TXT comportant plusieurs paragraphes en sous-titres SRT synchronisés. Les sauts de paragraphe servent d'indicateurs de pause naturelle. Le mode de découpage par paragraphe ou par phrase permet de diviser les textes longs en sous-titres aérés avec un rythme de lecture fluide."
        },
        {
          "question": "Pourquoi mon fichier SRT converti affiche-t-il des caractères étranges ou incorrects ?",
          "answer": "Les caractères altérés résultent généralement d'un problème d'encodage du texte. Si votre fichier TXT source comporte des accents, des cédilles ou des caractères spéciaux, veillez à l'enregistrer au format UTF-8. Notre convertisseur fonctionne en UTF-8 standard, garantissant une restitution parfaite des caractères dans le fichier SRT."
        },
        {
          "question": "Puis-je utiliser la ponctuation et les sauts de ligne pour contrôler le découpage des sous-titres ?",
          "answer": "Absolument. Les signes de ponctuation (points, virgules, points d'interrogation) et les sauts de ligne guident la segmentation. En sélectionnant le mode de découpage par phrase, le convertisseur scinde la transcription TXT aux pauses grammaticales naturelles, produisant des sous-titres SRT faciles à suivre."
        },
        {
          "question": "Puis-je utiliser un convertisseur TXT vers SRT pour les sous-titres YouTube ?",
          "answer": "Oui, le format SRT est universellement pris en charge par YouTube, Vimeo, Facebook et Instagram. Après avoir converti votre transcription TXT en fichier SRT, importez le fichier .srt directement dans YouTube Studio. Les minutages étant estimés selon la vitesse de lecture, vérifiez toujours la synchronisation avec la vidéo avant publication."
        }
      ]
    },
    "srtToText": {
      "id": "srt-to-text",
      "name": "Convertisseur SRT en Texte",
      "shortName": "SRT en Texte",
      "badge": "Gratuit & Rapide",
      "tagline": "Extrayez du texte brut et des transcriptions à partir de sous-titres SubRip (.SRT)",
      "description": "Supprimez facilement les codes temporels, la numérotation et le balisage HTML de vos fichiers .srt.",
      "h1": "Convertisseur de SRT en Texte",
      "metaTitle": "Convertisseur SRT en Texte – Extraire Texte des Sous-Titres | SRTConverters",
      "metaDescription": "Extrayez du texte brut à partir de fichiers de sous-titres SRT. Supprimez les timecodes en toute confidentialité.",
      "settingsLabels": {
        "stripTimestamps": "Supprimer les horodatages",
        "stripLineNumbers": "Supprimer les numéros de ligne",
        "joinParagraphs": "Fusionner en paragraphes"
      },
      "stepsTitle": "Comment convertir des sous-titres SRT en texte brut",
      "steps": [
        {
          "step": "1",
          "title": "Importez le fichier SRT ou collez le texte",
          "description": "Glissez votre fichier .srt ou collez le texte brut."
        },
        {
          "step": "2",
          "title": "Sélectionnez les options de nettoyage",
          "description": "Choisissez de retirer les timecodes, les numéros et de fusionner en paragraphes."
        },
        {
          "step": "3",
          "title": "Copiez ou téléchargez le texte propre",
          "description": "Copiez la transcription propre ou téléchargez-la au format .txt."
        }
      ],
      "featuresTitle": "Avantages de la conversion SRT en texte",
      "features": [
        {
          "title": "Extraction de texte propre",
          "description": "Supprime automatiquement tous les timecodes, numéros et balises HTML.",
          "icon": "clean"
        },
        {
          "title": "Fusion en paragraphes",
          "description": "Combine les fragments de sous-titres en paragraphes continus pour des résumés.",
          "icon": "text"
        },
        {
          "title": "Instantané & Privé",
          "description": "Traitement instantané côté client sans limite de taille ni transfert.",
          "icon": "lock"
        }
      ],
      "faqsTitle": "Foire Aux Questions",
      "faqs": [
        {
          "question": "Comment convertir un fichier SRT en TXT ?",
          "answer": "Pour convertir un fichier SRT en TXT, collez votre texte de sous-titres ou déposez votre fichier .srt dans notre convertisseur en ligne gratuit. L'outil supprime automatiquement les numéros séquentiels et les codes temporels pour ne laisser que le dialogue épuré. Vous pouvez choisir de conserver les horodatages ou de fusionner le texte en paragraphes continus, puis copier ou télécharger le fichier .txt."
        },
        {
          "question": "Puis-je convertir SRT en TXT en ligne gratuitement ?",
          "answer": "Oui ! SRTConverters.com est 100 % gratuit, sans inscription, sans abonnement et sans filigrane. De plus, tout le traitement s'exécute directement dans votre navigateur via JavaScript, garantissant qu'aucun fichier ni texte n'est envoyé à des serveurs distants."
        },
        {
          "question": "Que deviennent les horodatages lors de la conversion de SRT en TXT ?",
          "answer": "Par défaut, tous les codes temporels en millisecondes (ex. : '00:00:01,000 --> 00:00:04,500') sont entièrement supprimés. Cela produit un texte propre et continu, idéal pour les articles de blog, les résumés, les notes d'étude et les requêtes pour l'IA."
        },
        {
          "question": "Puis-je convertir SRT en TXT en conservant les codes temporels ?",
          "answer": "Oui. Dans le panneau de configuration de notre convertisseur, décochez simplement l'option 'Supprimer les Horodatages'. L'outil conservera les codes de début et de fin au-dessus de chaque réplique, ce qui est parfait pour les feuilles de référence en montage vidéo et les transcriptions juridiques."
        },
        {
          "question": "Quelle est la différence entre un fichier SRT et un fichier TXT ?",
          "answer": "Un fichier SRT (SubRip) est un format de sous-titres structuré avec des blocs numérotés et des horodatages à la milliseconde indiquant aux lecteurs vidéo quand afficher chaque phrase. Un fichier TXT est du texte brut sans repères temporels, conçu pour la lecture et le traitement de texte."
        },
        {
          "question": "Comment supprimer les horodatages d'un fichier SRT ?",
          "answer": "Le moyen le plus rapide est d'utiliser notre convertisseur en ligne. Au lieu d'effacer manuellement chaque horodatage dans le Bloc-notes, déposez votre fichier .srt et notre outil supprimera tous les codes temporels et numéros séquentiels en une fraction de seconde."
        },
        {
          "question": "Puis-je transformer un fichier de sous-titres SRT en transcription ?",
          "answer": "Oui, convertir SRT en TXT est la méthode standard pour transformer des sous-titres vidéo en transcriptions lisibles. Vous pouvez activer l'option 'Fusionner en Paragraphes' pour combiner les phrases en paragraphes fluides pour des articles, des cours ou de la documentation."
        },
        {
          "question": "Pourquoi mon fichier TXT converti contient-il des lignes répétées ?",
          "answer": "Les répétitions surviennent souvent si le fichier SRT d'origine provient de sous-titres automatiques ou d'émissions télévisées en direct qui répètent les lignes précédentes pour assurer la continuité visuelle. Vous pouvez facilement repérer et supprimer les doublons dans votre éditeur de texte."
        },
        {
          "question": "Puis-je ouvrir un fichier SRT comme du texte brut ?",
          "answer": "Oui, les fichiers SRT sont des fichiers texte brut dotés d'une extension spécifique. Vous pouvez les ouvrir dans le Bloc-notes ou TextEdit, mais vous verrez tous les codes temporels. Notre outil permet d'extraire uniquement le texte lisible sans les balises techniques."
        },
        {
          "question": "La conversion SRT en TXT fonctionne-t-elle avec des sous-titres en langues étrangères ?",
          "answer": "Oui, notre convertisseur gère parfaitement les caractères internationaux grâce à l'encodage UTF-8. Il prend en charge sans encombre les accents (français, espagnol, portugais, allemand), les alphabets non latins (cyrillique, grec, arabe, hébreu), les caractères asiatiques (chinois, japonais, coréen) et les symboles spéciaux."
        }
      ]
    },
    "srtToVtt": {
      "id": "srt-to-vtt",
      "name": "Convertisseur SRT en VTT",
      "shortName": "SRT en VTT",
      "badge": "Compatible WebVTT",
      "tagline": "Convertissez des sous-titres SubRip (.SRT) au format moderne HTML5 WebVTT (.VTT)",
      "description": "Convertissez des sous-titres SRT au format moderne WebVTT pour les lecteurs vidéo HTML5 et navigateurs.",
      "h1": "Convertisseur de SRT en VTT",
      "metaTitle": "Convertisseur SRT en VTT – Convertir Sous-Titres en WebVTT | SRTConverters",
      "metaDescription": "Convertissez des sous-titres SRT au format WebVTT (.vtt) en ligne. Idéal pour les balises vidéo HTML5.",
      "settingsLabels": {},
      "stepsTitle": "Comment convertir SRT en WebVTT en 3 étapes",
      "steps": [
        {
          "step": "1",
          "title": "Importez le fichier SRT",
          "description": "Collez le texte SRT ou déposez un fichier .srt."
        },
        {
          "step": "2",
          "title": "Formatage WebVTT instantané",
          "description": "Ajoute l'en-tête WEBVTT et remplace les virgules par des points."
        },
        {
          "step": "3",
          "title": "Téléchargez le fichier .VTT",
          "description": "Téléchargez votre fichier .vtt prêt pour les lecteurs web."
        }
      ],
      "featuresTitle": "Pourquoi convertir SRT en WebVTT ?",
      "features": [
        {
          "title": "Prêt pour la vidéo HTML5",
          "description": "WebVTT est le standard officiel du W3C pour les balises <track> des navigateurs.",
          "icon": "globe"
        },
        {
          "title": "Conversion exacte des timecodes",
          "description": "Convertit avec précision les virgules de millisecondes en points décimaux WebVTT.",
          "icon": "check"
        }
      ],
      "faqsTitle": "Foire Aux Questions",
      "faqs": [
        {
          "question": "Comment convertir un fichier SRT en VTT ?",
          "answer": "Pour convertir un fichier SRT en VTT, collez le texte de vos sous-titres SubRip ou déposez un fichier .srt dans notre convertisseur en ligne gratuit. L'outil insère automatiquement l'en-tête obligatoire WEBVTT et remplace toutes les virgules des horodatages (00:00:01,000) par des points décimaux conformes à WebVTT (00:00:01.000). Vous pouvez immédiatement copier le résultat ou télécharger votre fichier .vtt prêt pour les balises vidéo HTML5."
        },
        {
          "question": "Puis-je convertir SRT en VTT en ligne gratuitement ?",
          "answer": "Oui ! SRTConverters.com est 100 % gratuit, sans inscription, sans limite de taille et sans filigrane. Tout le traitement s'exécute directement dans votre navigateur en JavaScript, garantissant une confidentialité totale puisqu'aucun fichier n'est téléversé sur des serveurs distants."
        },
        {
          "question": "Peut-on simplement renommer un fichier .srt en .vtt ?",
          "answer": "Non. Le simple fait de changer l'extension du fichier dans Windows ou macOS empêchera les lecteurs vidéo web d'afficher vos sous-titres. Renommer le fichier n'ajoute pas l'en-tête 'WEBVTT' requis à la première ligne et ne convertit pas les virgules des millisecondes en points décimaux. Vous devez convertir la syntaxe interne avec notre outil."
        },
        {
          "question": "Quelle est la différence entre les formats SRT et VTT ?",
          "answer": "SubRip (.srt) est un format historique conçu pour les lecteurs multimédias de bureau et logiciels de montage. WebVTT (.vtt) est le standard web officiel du W3C pour la balise <video> HTML5. WebVTT débute par l'en-tête obligatoire 'WEBVTT', utilise des points décimaux pour les millisecondes et prend en charge le style CSS (::cue) et le positionnement."
        },
        {
          "question": "Comment convertir SRT en VTT avec FFmpeg ?",
          "answer": "Pour convertir un fichier SRT en WebVTT via la ligne de commande avec FFmpeg, lancez : `ffmpeg -i entree.srt sortie.vtt`. FFmpeg analyse le fichier SubRip et génère automatiquement un fichier WebVTT valide. Si vous préférez éviter d'installer des outils en terminal, notre convertisseur en ligne offre le même résultat instantanément."
        },
        {
          "question": "Pourquoi mon fichier VTT ne fonctionne-t-il pas dans mon navigateur ?",
          "answer": "Si vos sous-titres ne s'affichent pas, vérifiez trois causes fréquentes : (1) Le fichier doit obligatoirement commencer par 'WEBVTT' sur la première ligne, (2) Les horodatages doivent utiliser des points (00:00:01.000) et non des virgules, et (3) Le serveur web doit délivrer le fichier avec le bon en-tête MIME Content-Type: text/vtt; charset=utf-8 et les autorisations CORS appropriées."
        },
        {
          "question": "La conversion SRT en VTT modifie-t-elle la synchronisation temporelle ?",
          "answer": "Non. Une conversion correcte conserve fidèlement les repères temporels de début et de fin de chaque sous-titre. Seul le séparateur des millisecondes passe d'une virgule à un point décimal (ex. : '00:01:23,456' devient '00:01:23.456'). La synchronisation avec la vidéo reste 100 % inchangée."
        },
        {
          "question": "Le convertisseur SRT en VTT préserve-t-il le texte des sous-titres ?",
          "answer": "Oui. L'intégralité des dialogues, répliques, noms d'intervenants et balises de formatage de base (comme <i> pour l'italique et <b> pour le gras) est intégralement conservée. WebVTT prend en charge nativement ces styles."
        },
        {
          "question": "Pourquoi les sous-titres VTT ont-ils besoin de l'en-tête WEBVTT ?",
          "answer": "La spécification officielle du W3C exige formellement que tout fichier WebVTT valide débute par la signature 'WEBVTT' sur la toute première ligne. Les navigateurs web vérifient cette signature pour valider le fichier avant d'en analyser les sous-titres."
        },
        {
          "question": "Quel format choisir pour la vidéo HTML5 : SRT ou VTT ?",
          "answer": "Vous devez systématiquement utiliser WebVTT (.vtt) pour la vidéo HTML5. Les navigateurs web modernes prennent en charge nativement WebVTT grâce à la balise standard <track> sans nécessiter de bibliothèques JavaScript externes. SRT n'est pas supporté nativement par les navigateurs web."
        }
      ]
    },
    "vttToSrt": {
      "id": "vtt-to-srt",
      "name": "Convertisseur VTT en SRT",
      "shortName": "VTT en SRT",
      "badge": "SubRip Universel",
      "tagline": "Convertissez des sous-titres WebVTT (.VTT) en fichiers SubRip (.SRT) standards",
      "description": "Transformez des fichiers WebVTT en fichiers universels SubRip (.srt) compatibles avec tous les éditeurs.",
      "h1": "Convertisseur de VTT en SRT",
      "metaTitle": "Convertisseur VTT en SRT – Convertir WebVTT en SubRip | SRTConverters",
      "metaDescription": "Convertissez des fichiers WebVTT (.vtt) au format SubRip (.srt) gratuitement et en toute confidentialité.",
      "settingsLabels": {},
      "stepsTitle": "Comment convertir WebVTT en SRT en 3 étapes",
      "steps": [
        {
          "step": "1",
          "title": "Importez le fichier WebVTT",
          "description": "Collez vos sous-titres WebVTT ou glissez un fichier .vtt."
        },
        {
          "step": "2",
          "title": "Conversion automatique en SRT",
          "description": "Nettoie les en-têtes WebVTT, numérote chaque sous-titre et remplace les points par des virgules.",
          "icon": "file"
        },
        {
          "step": "3",
          "title": "Téléchargez le fichier .SRT",
          "description": "Enregistrez votre fichier .srt universel pour Premiere, DaVinci ou VLC."
        }
      ],
      "featuresTitle": "Pourquoi convertir VTT en SRT ?",
      "features": [
        {
          "title": "Compatibilité universelle",
          "description": "Le format SRT est reconnu par Adobe Premiere, DaVinci Resolve, Final Cut et VLC.",
          "icon": "video"
        },
        {
          "title": "Numérotation séquentielle automatique",
          "description": "Insère automatiquement la numérotation séquentielle 1, 2, 3... requise par SubRip.",
          "icon": "list"
        }
      ],
      "faqsTitle": "Foire Aux Questions",
      "faqs": [
        {
          "question": "Comment convertir un fichier VTT en SRT ?",
          "answer": "Pour convertir VTT en SRT, collez le texte de vos sous-titres WebVTT ou déposez un fichier .vtt dans notre convertisseur en ligne gratuit. L'outil supprime automatiquement l'en-tête WEBVTT, convertit les points millisecondes (00:00:01.000) en virgules (00:00:01,000) et insère la numérotation séquentielle obligatoire (1, 2, 3...). Vous pouvez copier le résultat immédiatement ou télécharger le fichier .srt final."
        },
        {
          "question": "Puis-je convertir VTT en SRT en ligne gratuitement ?",
          "answer": "Oui ! SRTConverters.com est 100 % gratuit, sans inscription, sans limite de taille et sans filigrane. Tout le processus s'exécute directement dans votre navigateur via JavaScript, garantissant une confidentialité totale pour vos sous-titres et scripts vidéo."
        },
        {
          "question": "Peut-on simplement renommer un fichier .vtt en .srt ?",
          "answer": "Non. Renommer l'extension de .vtt en .srt empêchera les logiciels de montage et lecteurs vidéo de reconnaître le fichier. Le simple renommage n'ajoute pas les numéros de répliques obligatoires, ne convertit pas les points temporels en virgules et ne retire pas l'en-tête WEBVTT. Vous devez convertir la syntaxe interne avec notre outil."
        },
        {
          "question": "Quelle est la différence entre les formats VTT et SRT ?",
          "answer": "WebVTT (.vtt) est le standard web du W3C pour la vidéo HTML5, doté d'un en-tête 'WEBVTT', d'horodatages avec points décimaux (00:00:01.500) et du support des styles CSS. SubRip (.srt) est le format historique pour ordinateurs et logiciels de montage, imposant des numéros séquentiels et des virgules pour les millisecondes (00:00:01,500)."
        },
        {
          "question": "Comment convertir VTT en SRT avec FFmpeg ?",
          "answer": "Pour convertir un fichier WebVTT en SubRip depuis la ligne de commande avec FFmpeg, lancez : `ffmpeg -i entree.vtt sortie.srt`. FFmpeg analyse le fichier WebVTT et génère un fichier .srt standard. Si vous préférez éviter d'utiliser la console, notre convertisseur web gratuit offre le même résultat immédiatement."
        },
        {
          "question": "La conversion VTT en SRT modifie-t-elle la synchronisation temporelle ?",
          "answer": "Non. La conversion conserve rigoureusement les temps exacts de début et de fin de chaque sous-titre. Seul le délimiteur des millisecondes est remplacé d'un point par une virgule (ex. : '00:01:23.456' devient '00:01:23,456'). La synchronisation avec la vidéo demeure 100 % parfaite."
        },
        {
          "question": "Qu'advient-il des styles et du positionnement WebVTT lors de la conversion en SRT ?",
          "answer": "Comme le format SubRip ne prend pas en charge les styles CSS avancés ni les coordonnées de positionnement à l'écran (ex. : line:X% ou align:start), ces paramètres web sont épurés pendant la conversion. Les balises de base en gras et italique (<b>, <i>) sont conservées et le texte s'affiche centré en bas."
        },
        {
          "question": "Pourquoi mon fichier SRT converti ne s'ouvre-t-il pas dans mon lecteur ?",
          "answer": "Si un fichier SRT ne s'ouvre pas, cela est généralement dû à l'absence de numérotation séquentielle (1, 2, 3...) ou à la présence de points au lieu de virgules dans les horodatages. Notre outil garantit un fichier SubRip parfaitement conforme et structuré."
        },
        {
          "question": "La conversion VTT en SRT préserve-t-elle le texte et les retours à la ligne ?",
          "answer": "Oui. L'intégralité des dialogues parlés, noms d'intervenants, ponctuations et sauts de ligne est fidèlement transférée dans le fichier SRT final."
        },
        {
          "question": "Pourquoi le format SRT utilise-t-il des virgules au lieu de points dans les horodatages ?",
          "answer": "Le format SubRip (.srt) a été créé en France à la fin des années 1990. Dans la plupart des pays européens, la virgule est le séparateur décimal officiel. La spécification SubRip a donc retenu la virgule pour les millisecondes (00:00:01,500), tandis que WebVTT a choisi le point décimal pour les standards web."
        }
      ]
    },
    "srtToAss": {
      "id": "srt-to-ass",
      "name": "Convertisseur SRT en ASS",
      "shortName": "SRT en ASS",
      "badge": "Compatible ASS v4+",
      "tagline": "Convertissez vos sous-titres SubRip (.SRT) au format Advanced SubStation Alpha (.ASS)",
      "description": "Transformez des sous-titres SRT en format Advanced SubStation Alpha (.ass) avec polices personnalisées, couleurs, bordures et positionnement précis pour Aegisub et lecteurs vidéo.",
      "h1": "Convertisseur SRT en ASS",
      "metaTitle": "Convertisseur SRT en ASS – Convertir Sous-Titres en ASS Gratuit | SRTConverters",
      "metaDescription": "Convertissez des sous-titres SubRip (.srt) au format Advanced SubStation Alpha (.ass) en ligne et gratuitement. Styles personnalisés, couleurs et confidentialité 100%.",
      "settingsLabels": {},
      "stepsTitle": "Comment convertir SRT en ASS en 3 étapes simples",
      "steps": [
        {
          "step": "1",
          "title": "Téléversez ou collez vos sous-titres SRT",
          "description": "Glissez-déposez votre fichier .srt ou collez le texte brut des dialogues directement dans l'éditeur."
        },
        {
          "step": "2",
          "title": "Formatage ASS v4.00+ instantané",
          "description": "Le convertisseur génère automatiquement les en-têtes requis ([Script Info], [V4+ Styles], [Events]) et adapte les balises."
        },
        {
          "step": "3",
          "title": "Téléchargez le fichier .ASS",
          "description": "Copiez le résultat ou téléchargez votre fichier .ass prêt à être utilisé dans Aegisub, VLC, MPV ou votre logiciel de montage."
        }
      ],
      "featuresTitle": "Pourquoi convertir SRT en ASS ?",
      "features": [
        {
          "title": "Typographie et styles avancés",
          "description": "Personnalisez la police, la taille du texte, les contours épais, les ombres portées et les couleurs sans restriction.",
          "icon": "pen"
        },
        {
          "title": "Positionnement millimétré à l'écran",
          "description": "Positionnez chaque ligne à des coordonnées précises (X, Y) pour ne jamais masquer les éléments visuels importants.",
          "icon": "grid"
        },
        {
          "title": "Confidentialité 100% dans le navigateur",
          "description": "Le traitement s'effectue intégralement en local sur votre appareil. Vos fichiers ne transitent par aucun serveur.",
          "icon": "shield"
        },
        {
          "title": "Prêt pour Aegisub et lecteurs",
          "description": "Sortie ASS v4.00+ standard parfaitement reconnue par Aegisub, VLC, MPV, HandBrake, DaVinci Resolve et Premiere Pro.",
          "icon": "check"
        }
      ],
      "faqsTitle": "Foire Aux Questions",
      "faqs": [
        {
          "question": "Comment convertir un fichier SRT en ASS ?",
          "answer": "Pour convertir un fichier SRT en ASS, téléversez votre fichier .srt ou collez le texte de vos sous-titres dans notre convertisseur gratuit en ligne. L'outil structure immédiatement vos répliques selon la syntaxe officielle Advanced SubStation Alpha (v4.00+), en générant les sections indispensables [Script Info], [V4+ Styles] et [Events]. Vous pouvez ensuite télécharger le fichier .ass obtenu instantanément."
        },
        {
          "question": "La conversion SRT en ASS est-elle gratuite ?",
          "answer": "Oui, notre convertisseur SRT en ASS est 100% gratuit, sans inscription préalable, sans filigrane et sans limite de volume. L'ensemble de l'algorithme s'exécute localement dans votre navigateur web via JavaScript, ce qui garantit que vos fichiers et retranscriptions confidentielles ne quittent jamais votre machine."
        },
        {
          "question": "Quelle est la différence entre les formats SRT et ASS ?",
          "answer": "Le format SRT (SubRip) est un standard rudimentaire en texte brut composé de numéros d'ordre, d'horodatages en millisecondes et de texte sans options graphiques avancées. Le format ASS (Advanced SubStation Alpha) est une spécification typographique complète permettant de définir des familles de polices, des tailles personnalisées, des couleurs BGR, des contours épais, des ombres portées, des coordonnées d'affichage au pixel près et des animations dynamiques de karaoké."
        },
        {
          "question": "Puis-je modifier le fichier ASS dans Aegisub ?",
          "answer": "Absolument. Notre convertisseur produit du code ASS v4.00+ rigoureusement conforme, spécialement calibré pour le logiciel Aegisub. Dès le téléchargement de votre fichier .ass, vous pouvez l'ouvrir dans Aegisub pour peaufiner les polices, les teintes, les coordonnées de placement, les effets de karaoké ou caler les répliques sur le spectre audio."
        },
        {
          "question": "Suffit-il de renommer l'extension .srt en .ass ?",
          "answer": "Non. Renommer l'extension d'un fichier .srt en .ass provoquera des erreurs dans vos lecteurs multimédias et logiciels de montage, car le fichier ne contiendra pas les en-têtes obligatoires [Script Info] et [V4+ Styles] ni la syntaxe des événements Dialogue. Il est indispensable d'utiliser un convertisseur dédié."
        },
        {
          "question": "La conversion modifie-t-elle la synchronisation temporelle ?",
          "answer": "Non. Tous les temps d'apparition et de disparition sont conservés avec une rigueur absolue, transposés des millisecondes avec virgule propres au SRT (HH:MM:SS,mmm) vers les centièmes de seconde à point du format ASS (H:MM:SS.cs). Le calage avec le flux vidéo reste rigoureusement inchangé."
        },
        {
          "question": "Quels lecteurs vidéo prennent en charge les sous-titres ASS ?",
          "answer": "La grande majorité des lecteurs modernes gèrent nativement les sous-titres ASS avec l'ensemble de leurs enrichissements stylistiques, notamment VLC Media Player, MPV, MPC-HC, PotPlayer et Plex (en lecture directe ou transcodage). Des outils comme HandBrake et FFmpeg permettent également d'incruster (graver) définitivement les styles ASS dans vos vidéos MP4."
        },
        {
          "question": "Les balises de style comme le gras et l'italique sont-elles conservées ?",
          "answer": "Oui. Les balises HTML usuelles présentes dans vos fichiers SRT telles que <i>, <b>, <u> et <font color> sont automatiquement traduites en balises de substitution natives ASS ({\\i1}, {\\b1}, {\\u1} et {\\c&HBBGGRR&}), garantissant l'intégrité intégrale de vos mises en relief textuelles."
        }
      ]
    },
    "assToSrt": {
          "id": "ass-to-srt",
          "name": "Convertisseur ASS en SRT",
          "shortName": "ASS en SRT",
          "badge": "SubRip Universel",
          "tagline": "Convertissez des Sous-Titres Advanced SubStation Alpha (.ASS) au Format SubRip (.SRT) Épuré",
          "description": "Convertissez des sous-titres stylisés Advanced SubStation Alpha (.ass / .ssa) en fichiers SubRip (.srt) propres et universellement compatibles. Nettoyez les balises de style, convertissez les centièmes de seconde et préparez vos sous-titres pour tous les téléviseurs et lecteurs.",
          "h1": "Convertisseur ASS en SRT en Ligne",
          "metaTitle": "Convertisseur ASS en SRT en Ligne – Convertir ASS en SRT Gratuit | SRTConverters",
          "metaDescription": "Convertissez des sous-titres Advanced SubStation Alpha (.ass) au format SubRip (.srt) propre en ligne et gratuitement. Nettoyage des balises et conversion précise du minutage.",
          "settingsLabels": {},
          "stepsTitle": "Comment Convertir un Fichier ASS en SRT en 3 Étapes",
          "steps": [
                {
                      "step": "1",
                      "title": "Importez ou Collez vos Sous-Titres ASS",
                      "description": "Glissez-déposez votre fichier .ass ou .ssa dans la zone de téléversement ou collez le script directement dans l'éditeur."
                },
                {
                      "step": "2",
                      "title": "Nettoyage des Balises et Minutage Automatique",
                      "description": "Notre moteur intégré au navigateur extrait les dialogues, convertit les centièmes de seconde en millisecondes et supprime les balises de style superflues."
                },
                {
                      "step": "3",
                      "title": "Téléchargez le Fichier .SRT Propre",
                      "description": "Copiez le texte SubRip dans le presse-papiers ou téléchargez immédiatement votre fichier .srt pour une lecture fluide sur Smart TV, Plex, VLC ou mobile."
                }
          ],
          "featuresTitle": "Pourquoi Convertir ASS en SRT ?",
          "features": [
                {
                      "title": "Compatibilité Universelle des Lecteurs",
                      "description": "SubRip (.srt) est le format de sous-titres le plus reconnu au monde, lisible nativement sur Smart TV, consoles et box multimédias sans aucun artefact visuel.",
                      "icon": "globe"
                },
                {
                      "title": "Nettoyage Intelligent des Balises ASS",
                      "description": "Supprime automatiquement le positionnement (\\pos), l'alignement (\\an), les couleurs (\\c) et les dessins vectoriels (\\p1) tout en conservant le gras et l'italique.",
                      "icon": "sparkles"
                },
                {
                      "title": "Précision Temporelle des Centièmes aux Millisecondes",
                      "description": "Convertit les centièmes de seconde du format ASS (H:MM:SS.cs) en millisecondes exactes pour SRT (HH:MM:SS,mmm), garantissant une synchronisation audio parfaite.",
                      "icon": "clock"
                },
                {
                      "title": "Confidentialité Totale dans le Navigateur",
                      "description": "Toutes les opérations se déroulent localement dans la mémoire de votre navigateur. Aucun fichier ni dialogue n'est envoyé sur un serveur distant.",
                      "icon": "shield"
                }
          ],
          "faqsTitle": "Foire Aux Questions",
          "faqs": [
                {
                      "question": "Quelle est la différence entre les sous-titres ASS et SRT ?",
                      "answer": "Advanced SubStation Alpha (.ass) est un format sophistiqué prenant en charge les polices personnalisées, le positionnement précis à l'écran par coordonnées, les effets de karaoké et les dessins vectoriels. SubRip (.srt) est un format de texte brut conçu pour une compatibilité universelle avec tous les lecteurs vidéo et téléviseurs."
                },
                {
                      "question": "La mise en forme (couleurs, positions) est-elle perdue lors de la conversion ?",
                      "answer": "Oui, les balises de mise en forme complexes comme les coordonnées (\\pos), l'alignement (\\an) ou les couleurs personnalisées sont retirées car la norme SRT ne les prend pas en charge. Cependant, les balises de texte courantes comme le gras (<b>), l'italique (<i>) et le souligné (<u>) sont conservées."
                },
                {
                      "question": "Ce convertisseur conserve-t-il le gras et l'italique du format ASS ?",
                      "answer": "Oui. Les balises ASS telles que {\\b1} et {\\i1} sont automatiquement converties en balises standard (<b> et <i>), préservant ainsi les intonations et l'accentuation voulues dans vos sous-titres."
                },
                {
                      "question": "Comment le convertisseur traite-t-il les centièmes de seconde du format ASS ?",
                      "answer": "Les fichiers ASS enregistrent les durées en centièmes de seconde (H:MM:SS.cs), tandis que les fichiers SRT utilisent des millisecondes (HH:MM:SS,mmm). Notre convertisseur calcule la valeur milliseconde exacte (par exemple, 0:01:23.45 devient 00:01:23,450), évitant tout décalage audio."
                },
                {
                      "question": "Que deviennent les dialogues simultanés ou qui se chevauchent en ASS ?",
                      "answer": "Lorsque plusieurs lignes de dialogue se chevauchent dans le temps (fréquent dans les sous-titres d'anime pour les chansons ou voix superposées), le convertisseur trie les répliques par ordre chronologique et leur attribue un numéro séquentiel unique dans le fichier SRT."
                },
                {
                      "question": "Puis-je convertir des sous-titres d'anime ASS pour les lire sur Plex ou ma Smart TV ?",
                      "answer": "Tout à fait ! C'est l'un des usages les plus fréquents. Beaucoup de téléviseurs et d'applications Plex ne gèrent pas bien les styles ASS complexes et sollicitent le processeur pour réencoder la vidéo. Le passage en SRT permet une lecture directe instantanée."
                },
                {
                      "question": "Peut-on convertir un fichier ASS en SRT avec l'outil en ligne de commande FFmpeg ?",
                      "answer": "Oui, en tapant la commande : ffmpeg -i entree.ass -c:s srt sortie.srt. Néanmoins, notre convertisseur web ne nécessite aucune installation, offre un aperçu immédiat et s'exécute directement sur ordinateur ou smartphone."
                },
                {
                      "question": "Mes fichiers de sous-titres sont-ils conservés ou téléversés sur un serveur ?",
                      "answer": "Aucun fichier n'est envoyé sur un serveur. Le traitement complet s'effectue en local dans votre navigateur grâce à JavaScript, garantissant une confidentialité absolue de vos données."
                }
          ]
    },
    "srtToSub": {
          "id": "srt-to-sub",
          "name": "Convertisseur SRT en SUB",
          "shortName": "SRT en SUB",
          "badge": "Gratuit et Sécurisé",
          "tagline": "Convertissez vos Sous-Titres SubRip (.SRT) au Format MicroDVD et SubViewer (.SUB) en Ligne",
          "description": "Convertissez des sous-titres SubRip (.srt) au format SUB (MicroDVD et SubViewer 2.0) gratuitement en ligne. Prise en charge des fréquences d'images (FPS) et confidentialité totale.",
          "h1": "Convertisseur SRT en SUB en Ligne",
          "metaTitle": "Convertisseur SRT en SUB – Convertir Sous-Titres en SUB Gratuit | SRTConverters",
          "metaDescription": "Convertissez des sous-titres SubRip (.srt) au format SUB (MicroDVD et SubViewer) gratuitement en ligne. Choix des images par seconde (FPS) et confidentialité totale.",
          "settingsLabels": {
                "timingMode": "Format de Sous-Titre",
                "fixedDuration": "MicroDVD (.sub)",
                "cpsDuration": "SubViewer 2.0 (.sub)",
                "cpsLabel": "Fréquence d'Images Vidéo (FPS)",
                "cpsHint": "Sélectionnez la cadence de votre vidéo pour garantir une synchronisation parfaite.",
                "startTime": "Inclure En-Tête FPS",
                "startTimeHint": "Ajoute la ligne {1}{1}FPS au fichier MicroDVD pour détection automatique dans les lecteurs.",
                "maxCharsPerLine": "Nettoyer les Balises HTML",
                "maxCharsHint": "Supprime les balises <i>, <b> et polices pour assurer la compatibilité avec les anciens lecteurs."
          },
          "stepsTitle": "Comment Convertir un Fichier SRT en SUB en Ligne en 3 Étapes",
          "steps": [
                {
                      "step": "1",
                      "title": "Importez ou Collez vos Sous-Titres SRT",
                      "description": "Glissez-déposez votre fichier .srt dans l'espace dédié ou collez votre texte de sous-titres SubRip dans l'éditeur."
                },
                {
                      "step": "2",
                      "title": "Choisissez le Format et la Fréquence (FPS)",
                      "description": "Sélectionnez MicroDVD ou SubViewer et indiquez la fréquence d'images adaptée (ex. 23.976, 24, 25 ou 29.97 FPS)."
                },
                {
                      "step": "3",
                      "title": "Téléchargez le Fichier SUB Converti",
                      "description": "Cliquez sur Télécharger .SUB pour enregistrer votre fichier sans attendre ou copiez le texte dans le presse-papiers."
                }
          ],
          "featuresTitle": "Pourquoi Utiliser Notre Convertisseur SRT en SUB en Ligne ?",
          "features": [
                {
                      "title": "Confidentialité 100% dans le Navigateur",
                      "description": "La conversion s'effectue intégralement dans votre navigateur. Aucun fichier n'est envoyé vers des serveurs distants.",
                      "icon": "shield"
                },
                {
                      "title": "Formats MicroDVD et SubViewer",
                      "description": "Prise en charge complète du format MicroDVD par images ({début}{fin}) et SubViewer 2.0 par horodatage.",
                      "icon": "file"
                },
                {
                      "title": "Synchronisation Exacte à l'Image Près",
                      "description": "Supporte les cadences standards : 23.976, 24.0, 25.0 (PAL), 29.97 (NTSC), 30 et 60 FPS pour éliminer tout décalage.",
                      "icon": "clock"
                },
                {
                      "title": "Idéal pour Appareils Rétro & Salons",
                      "description": "Génère des fichiers .sub compatibles avec les lecteurs DVD de salon, autoradios vidéo et appareils DivX/XviD.",
                      "icon": "split"
                }
          ],
          "faqsTitle": "Foire Aux Questions sur la Conversion SRT en SUB",
          "faqs": [
                {
                      "question": "Quelle est la différence entre un fichier SRT et un fichier SUB ?",
                      "answer": "Le format SRT (SubRip) est un standard moderne basé sur le temps horloge (milissecondes : 00:01:23,450 --> 00:01:26,800), lisible nativement par les navigateurs, logiciels multimédias et téléviseurs connectés. À l'inverse, les fichiers textuels SUB — principalement MicroDVD (.sub) — fonctionnent par numéros d'images ({image_début}{image_fin}). Un autre format texte portant l'extension .sub est SubViewer 2.0, qui utilise les centièmes de seconde. Convertir un fichier SRT en SUB est indispensable pour regarder des vidéos sur d'anciens lecteurs DVD de salon, écrans multimédias de voiture et platines n'acceptant que des fichiers .sub indexés par images."
                },
                {
                      "question": "Pourquoi faut-il sélectionner une fréquence d'images (FPS) pour convertir en SUB ?",
                      "answer": "Comme le format MicroDVD détermine l'affichage des répliques selon les numéros d'images et non selon une horloge absolue, le convertisseur doit multiplier les horodatages par le nombre d'images par seconde exact de votre vidéo (Image = Temps en secondes × FPS). Si vous convertissez à 25.000 FPS (PAL) alors que votre vidéo tourne à 23.976 FPS (standard cinéma / NTSC), les sous-titres vont progressivement se décaler au fil du film. Choisir la bonne cadence garantit une synchronisation rigoureuse."
                },
                {
                      "question": "Quelle est la différence entre MicroDVD (.sub), SubViewer (.sub) et VobSub (.sub) ?",
                      "answer": "L'extension .sub regroupe historiquement trois formats bien distincts : MicroDVD (.sub) est un format texte léger basé sur les images ({1250}{1380}Dialogue) très utilisé par les lecteurs DivX/XviD ; SubViewer 2.0 (.sub) est un format texte avec en-tête [INFORMATION] et temps en centièmes de seconde (00:01:20.10,00:01:23.45) ; et VobSub (.sub + .idx) n'est PAS un fichier texte, mais des images bitmap matricielles extraites directement des disques DVD. Notre convertisseur génère des fichiers texte normés (MicroDVD et SubViewer 2.0) pour vos besoins multimédias."
                },
                {
                      "question": "Comment trouver la fréquence d'images (FPS) exacte de ma vidéo ?",
                      "answer": "Vous pouvez identifier les FPS exacts très facilement : dans VLC Media Player, lancez la vidéo, allez dans Outils > Informations sur les codecs (ou Ctrl+J / Cmd+I), ouvrez l'onglet Codec et relevez la ligne Fréquence d'images (ex. 23.976023, 24, 25 ou 29.970000). Sous Windows, faites un clic droit sur le fichier vidéo, sélectionnez Propriétés, onglet Détails et regardez Fréquence d'images. Sous macOS, ouvrez avec QuickTime Player et tapez Cmd+I (Inspecteur). L'utilitaire gratuit MediaInfo fournit également cette mesure exacte."
                },
                {
                      "question": "Pourquoi mes sous-titres SUB convertis se décalent-ils pendant la lecture ?",
                      "answer": "Un sous-titre qui démarre synchronisé et prend progressivement de l'avance ou du retard provient presque toujours d'une inadéquation de FPS entre le fichier MicroDVD et le flux vidéo. Par exemple, si la vidéo est à 23.976 FPS mais que vous convertissez à 25.000 FPS, le texte défilera environ 4.1% trop vite (soit 2.5 secondes d'écart par minute de film). Pour y remédier, vérifiez la cadence réelle avec VLC ou MediaInfo et reconvertissez votre SRT avec les FPS adéquats."
                },
                {
                      "question": "Puis-je reconvertir un fichier SUB en fichier SRT ?",
                      "answer": "Oui. Les sous-titres textuels MicroDVD (.sub) et SubViewer (.sub) peuvent être convertis en SubRip (.srt). Pour MicroDVD, il suffit de diviser le numéro d'image par la fréquence du film pour retrouver les millisecondes : Temps = Numéro d'image / FPS. Vous pouvez utiliser des logiciels comme Subtitle Edit, Aegisub ou les outils dédiés de notre plateforme SRTConverters."
                },
                {
                      "question": "Mes fichiers de sous-titres sont-ils téléversés sur un serveur pendant l'opération ?",
                      "answer": "Non. SRTConverters fonctionne à 100% en local dans votre navigateur grâce au JavaScript côté client. Vos fichiers SRT, répliques et fichiers SUB convertis sont traités exclusivement dans la mémoire privée de votre terminal. Aucune donnée n'est envoyée ni stockée sur nos serveurs."
                },
                {
                      "question": "Comment convertir SRT en SUB en ligne de commande avec FFmpeg ?",
                      "answer": "Vous pouvez convertir du SRT en MicroDVD SUB avec FFmpeg en indiquant le codec approprié : ffmpeg -i input.srt -c:s microdvd output.sub. Pour forcer une fréquence d'images précise lors de traitements par lots ou de multiplexages vidéo, ajoutez le paramètre de cadence : ffmpeg -i input.srt -r 23.976 -c:s microdvd output.sub. Cette méthode est idéale pour les scripts d'encodage automatisés."
                }
          ]
    },
    "subToSrt": {
          "id": "sub-to-srt",
          "name": "Convertisseur SUB en SRT",
          "shortName": "SUB en SRT",
          "badge": "Gratuit et Côté Client",
          "tagline": "Convertir des Sous-titres MicroDVD et SubViewer (.SUB) en SubRip (.SRT) Standard en Ligne",
          "description": "Convertissez des sous-titres SUB (MicroDVD et SubViewer) au format SubRip (.srt) propre en ligne et gratuitement. Détection automatique des FPS, synchronisation précise des images en millisecondes et confidentialité 100%.",
          "h1": "Convertisseur SUB en SRT en Ligne",
          "metaTitle": "Convertisseur SUB en SRT en Ligne – Convertir SUB en SRT Gratuit | SRTConverters",
          "metaDescription": "Convertissez des sous-titres SUB (MicroDVD et SubViewer) au format SubRip (.srt) propre en ligne et gratuitement. Détection automatique des FPS, synchronisation précise des images en millisecondes et confidentialité 100%.",
          "settingsLabels": {
                "timingMode": "Format Détecté",
                "fixedDuration": "Détection Automatique",
                "cpsDuration": "MicroDVD ({image}{image})",
                "cpsLabel": "Fréquence d'Images (FPS)",
                "cpsHint": "Sélectionnez la cadence de votre vidéo pour garantir une synchronisation parfaite des sous-titres.",
                "startTime": "Synchroniser l'En-tête FPS",
                "startTimeHint": "Lit automatiquement la ligne d'en-tête {1}{1}FPS des fichiers MicroDVD lorsque disponible.",
                "maxCharsPerLine": "Convertir les Balises de Style",
                "maxCharsHint": "Convertit les balises {Y:i} en <i> et les barres verticales (|) en retours à la ligne standard."
          },
          "stepsTitle": "Comment Convertir un Fichier SUB en SRT en 3 Étapes Simples",
          "steps": [
                {
                      "step": "1",
                      "title": "Importez ou Collez vos Sous-titres SUB",
                      "description": "Glissez-déposez votre fichier .sub dans la zone prévue ou collez directement votre texte MicroDVD ou SubViewer dans l'éditeur."
                },
                {
                      "step": "2",
                      "title": "Vérifiez la Fréquence d'Images (FPS)",
                      "description": "S'il s'agit d'un fichier MicroDVD, sélectionnez la fréquence de votre vidéo (ex. 23.976, 24, 25 ou 29.97 FPS) pour convertir les images en temps exact."
                },
                {
                      "step": "3",
                      "title": "Téléchargez le Fichier SRT Converti",
                      "description": "Cliquez sur Télécharger .SRT pour enregistrer immédiatement votre fichier SubRip ou copiez le texte formaté dans votre presse-papiers."
                }
          ],
          "featuresTitle": "Pourquoi Utiliser Notre Convertisseur SUB en SRT ?",
          "features": [
                {
                      "title": "Confidentialité 100% dans le Navigateur",
                      "description": "Vos sous-titres sont traités intégralement dans votre navigateur web. Aucun fichier ni contenu n'est envoyé vers des serveurs distants.",
                      "icon": "shield"
                },
                {
                      "title": "Détection de MicroDVD et SubViewer",
                      "description": "Identifie instantanément les fichiers MicroDVD basés sur les images, les en-têtes SubViewer 2.0/1.0 et les lignes de cadence {1}{1}FPS.",
                      "icon": "file"
                },
                {
                      "title": "Synchronisation Précise en Millisecondes",
                      "description": "Calcule des repères temporels stricts à la milliseconde pour tous les standards cinéma, PAL et NTSC sans dérive temporelle.",
                      "icon": "clock"
                },
                {
                      "title": "Alerte VobSub et Nettoyage de Balises",
                      "description": "Repère les archives binaires VobSub de DVD pour vous alerter et convertit les barres (|) et styles en balises SRT conformes.",
                      "icon": "split"
                }
          ],
          "faqsTitle": "Foire Aux Questions sur la Conversion de SUB en SRT",
          "faqs": [
                {
                      "question": "Quelle est la différence entre un fichier SUB et un fichier SRT ?",
                      "answer": "Le format SRT (SubRip) est la référence universelle moderne pour les sous-titres textuels. Chaque réplique est définie par un numéro séquentiel et des repères temporels stricts exprimés en heures, minutes, secondes et millisecondes (00:01:23,450 --> 00:01:26,800). Il fonctionne nativement sur tous les lecteurs vidéo récents, les téléviseurs connectés, les outils de montage (Premiere Pro, DaVinci Resolve) et les plateformes de streaming. À l'inverse, les fichiers SUB textuels—en particulier MicroDVD (.sub)—dépendent du numéro d'image du flux vidéo ({image_début}{image_fin}) plutôt que du temps absolu, ce qui rend leur affichage tributaire de la cadence d'images (FPS) de la vidéo. SubViewer (.sub) emploie des centièmes de seconde. Convertir SUB en SRT assure une compatibilité universelle sur tous les équipements modernes sans lecteurs obsolètes."
                },
                {
                      "question": "Pourquoi faut-il préciser la cadence d'images (FPS) pour convertir MicroDVD en SRT ?",
                      "answer": "Les fichiers MicroDVD ne possèdent aucune information temporelle en secondes ; ils indiquent uniquement le numéro de l'image vidéo à laquelle le sous-titre doit apparaître et disparaître (exemple : {1200}{1350}Ligne de dialogue). Pour convertir ces numéros d'images en horodatages SRT conformes, le convertisseur utilise la formule : Millisecondes = Arrondi((Numéro d'image / Cadence FPS) × 1000). Si vous convertissez un sous-titre à 25 FPS (PAL) alors que votre film est cadencé à 23.976 FPS (standard cinéma / NTSC), le sous-titre se décalera progressivement d'environ 2,5 secondes par minute de visionnage. Choisir la bonne cadence assure une synchronisation parfaite du début à la fin."
                },
                {
                      "question": "Quelle est la différence entre MicroDVD (.sub), SubViewer (.sub) et VobSub (.sub) ?",
                      "answer": "L'extension .sub a historiquement désigné trois formats distincts : 1. MicroDVD (.sub) est un format textuel basé sur les numéros d'images entre accolades ({début}{fin}Ligne1|Ligne2) très répandu à l'époque du DivX/XviD ; 2. SubViewer (.sub) est un format texte comprenant un en-tête de métadonnées ([INFORMATION]) et des temps en centièmes de seconde (00:01:20.50,00:01:23.80) avec balises [br] ; 3. VobSub (.sub + .idx) est un conteneur binaire qui stocke des images bitmap de sous-titres extraites de DVD vidéo. Notre outil convertit sans difficulté les formats texte MicroDVD et SubViewer, et vous avertit immédiatement si vous déposez un fichier binaire VobSub."
                },
                {
                      "question": "Comment trouver la cadence d'images (FPS) exacte de ma vidéo ?",
                      "answer": "Vous pouvez identifier la cadence exacte de votre vidéo à l'aide de lecteurs multimédias gratuits : Dans VLC Media Player, lancez la vidéo, allez dans Outils > Informations sur les codecs (ou Ctrl+J / Cmd+I), onglet Codec, et vérifiez la 'Fréquence d'images' (ex. 23.976023, 24, 25 ou 29.970000). Sous Windows, effectuez un clic droit sur le fichier vidéo, choisissez Propriétés, onglet Détails, puis lisez 'Fréquence d'images'. Sous macOS, ouvrez la vidéo dans QuickTime Player et appuyez sur Cmd+I pour ouvrir l'inspecteur. Vous pouvez également employer l'utilitaire gratuit MediaInfo pour obtenir un rapport technique détaillé."
                },
                {
                      "question": "Pourquoi mes sous-titres SRT convertis se désynchronisent-ils pendant la lecture ?",
                      "answer": "Une désynchronisation progressive—lorsque les répliques sont justes au début mais prennent de l'avance ou du retard au fil des minutes—résulte quasi systématiquement d'un décalage de fréquence d'images lors de la conversion. Par exemple, convertir un fichier de 23.976 FPS en indiquant 25.000 FPS accélère les sous-titres d'environ 4,1% par rapport aux voix, créant plusieurs secondes d'écart après quelques minutes. Pour régler ce souci, vérifiez les FPS réels de votre fichier dans VLC ou MediaInfo, sélectionnez cette valeur dans notre outil et relancez la conversion. Si votre fichier MicroDVD comporte une ligne d'en-tête `{1}{1}FPS`, notre convertisseur l'appliquera automatiquement."
                },
                {
                      "question": "Ce convertisseur peut-il traiter des fichiers binaires VobSub (.sub) de DVD ?",
                      "answer": "Non. Les fichiers VobSub (.sub) ne sont pas des fichiers texte mais des conteneurs binaires contenant des images graphiques des sous-titres extraits d'un DVD commercial. Comme il s'agit d'images de pixels et non de caractères textuels, leur conversion en SRT nécessite un logiciel de reconnaissance optique de caractères (OCR) capable de déchiffrer visuellement les lettres. Si vous importez un fichier VobSub binaire, notre outil détectera sa signature et affichera un message d'aide vous invitant à employer des utilitaires dédiés comme Subtitle Edit, BDSup2Sub ou OCR-SubRip."
                },
                {
                      "question": "Mes fichiers de sous-titres sont-ils transférés sur un serveur externe pendant la conversion ?",
                      "answer": "Non. SRTConverters s'exécute à 100% localement dans votre navigateur web grâce aux API JavaScript modernes. Vos fichiers, textes saisis, scripts et sous-titres SRT convertis ne quittent jamais votre ordinateur ou smartphone. Aucune donnée n'est transmise sur le réseau, stockée dans le cloud ou enregistrée sur des serveurs, garantissant une confidentialité totale et une rapidité de traitement instantanée."
                },
                {
                      "question": "Comment convertir SUB en SRT en ligne de commande avec FFmpeg ?",
                      "answer": "Vous pouvez convertir des sous-titres SUB en SRT via le terminal avec FFmpeg. Pour un fichier SubViewer basé sur le temps, tapez : ffmpeg -i entree.sub sortie.srt. Pour un fichier MicroDVD basé sur les images, précisez impérativement la cadence de la vidéo avec l'option -r pour que les temps soient calculés avec justesse : ffmpeg -r 23.976 -i entree.sub sortie.srt. Si le fichier comprend des caractères accentués sous encodage ANSI ou Windows-1252, ajoutez le paramètre d'encodage : ffmpeg -sub_charenc CP1252 -r 25 -i entree.sub sortie.srt. C'est parfait pour automatiser le traitement de dossiers entiers."
                }
          ]
    },
    sbvToSrt: {
      "id": "sbv-to-srt",
      "name": "Convertisseur SBV en SRT",
      "shortName": "SBV en SRT",
      "badge": "Gratuit & Côté Client",
      "tagline": "Convertissez les Sous-titres YouTube (.SBV) en SubRip (.SRT) Standard en Ligne",
      "description": "Convertissez les fichiers de sous-titres SBV et SubViewer de YouTube au format universel SubRip (.srt) en ligne et gratuitement. Horodatages précis, décodage HTML et téléchargement immédiat.",
      "h1": "Convertisseur SBV en SRT en Ligne",
      "metaTitle": "Convertisseur SBV en SRT en Ligne – Sous-titres YouTube en SRT Gratuit | SRTConverters",
      "metaDescription": "Convertissez vos sous-titres SBV et SubViewer YouTube en format SubRip (.srt) propre et gratuit en ligne. Formatage précis des horodatages, décodage HTML et téléchargement immédiat.",
      "settingsLabels": {
            "timingMode": "Options de Nettoyage des Sous-titres",
            "fixedDuration": "Décoder les Entités HTML",
            "cpsDuration": "Convertit &amp;, &#39;, &quot;, &lt;, &gt; en texte propre et lisible",
            "cpsLabel": "Supprimer les Bruits et Effets",
            "cpsHint": "Supprime les mentions [Musique], [Applaudissements] et effets sonores",
            "startTime": "Normaliser les Espaces",
            "startTimeHint": "Nettoie les espaces superflus et supprime les lignes vides"
      },
      "stepsTitle": "Comment Convertir un Fichier SBV en SRT en 3 Étapes",
      "steps": [
            {
                  "step": "1",
                  "title": "Importez ou Collez vos Sous-titres SBV",
                  "description": "Glissez-déposez votre fichier .sbv de YouTube dans la zone de dépôt ou collez directement le texte dans la zone de saisie."
            },
            {
                  "step": "2",
                  "title": "Configurez vos Préférences de Nettoyage",
                  "description": "Activez le décodage des entités HTML (&amp;, &#39;) et choisissez de supprimer ou non les marqueurs sonores automatiques comme [Musique]."
            },
            {
                  "step": "3",
                  "title": "Téléchargez votre Fichier SRT Converti",
                  "description": "Cliquez sur Télécharger .SRT pour enregistrer votre fichier SubRip ou copiez le texte formaté pour votre logiciel de montage ou lecteur vidéo."
            }
      ],
      "featuresTitle": "Pourquoi Utiliser Notre Convertisseur SBV en SRT ?",
      "features": [
            {
                  "title": "Précision Temporelle à la Milliseconde",
                  "description": "Chaque code temporel est fidèlement converti à la milliseconde près, remplaçant les points décimaux par des virgules et ajoutant deux chiffres aux heures.",
                  "icon": "zap"
            },
            {
                  "title": "Décodage Automatique du HTML",
                  "description": "Les exports YouTube comportent souvent des entités comme &amp; ou &#39;. Notre outil les transforme en caractères alphabétiques et ponctuations corrects.",
                  "icon": "layers"
            },
            {
                  "title": "Filtrage des Effets Sonores",
                  "description": "Supprimez facilement les descriptions automatiques comme [Musique] et [Applaudissements] pour un sous-titrage clair et professionnel.",
                  "icon": "shield"
            },
            {
                  "title": "Confidentialité 100% dans le Navigateur",
                  "description": "La conversion s'effectue intégralement dans votre navigateur. Vos sous-titres ne sont jamais transmis ni stockés sur des serveurs distants.",
                  "icon": "split"
            }
      ],
      "faqsTitle": "Foire Aux Questions Sur la Conversion SBV en SRT",
      "faqs": [
            {
                  "question": "Qu'est-ce qu'un fichier SBV et en quoi diffère-t-il du format SRT ?",
                  "answer": "Un fichier SBV (.sbv), également appelé format YouTube SubViewer, est un format de sous-titres en texte brut conçu par Google pour les sous-titres de YouTube. Chaque réplique commence directement par deux horodatages séparés par une virgule (ex. : 0:00:01.000,0:00:04.500) suivis du dialogue, sans numéros d'index séquentiels. À l'inverse, le format SubRip (.srt) est le standard universel pour les lecteurs et logiciels de montage. Un fichier SRT requiert un compteur numérique (1, 2, 3...), une flèche de séparation (' --> ') avec des virgules pour les millisecondes (00:00:01,000 --> 00:00:04,500) et deux chiffres pour les heures. Convertir SBV en SRT permet d'utiliser les sous-titres YouTube dans Premiere Pro, DaVinci Resolve, VLC et Plex."
            },
            {
                  "question": "Pourquoi YouTube Studio exporte-t-il les sous-titres au format .sbv plutôt qu'en .srt ?",
                  "answer": "Historiquement, YouTube a sélectionné la variante SubViewer (.sbv) au lancement de ses fonctionnalités de transcription automatique pour sa syntaxe allégée : elle se dispense d'index numériques et lie les temps par une simple virgule. Cependant, la grande majorité des logiciels de montage vidéo et téléviseurs connectés ne prennent pas en charge le format .sbv, rendant la conversion vers .srt incontournable."
            },
            {
                  "question": "Comment télécharger un fichier de sous-titres SBV depuis YouTube Studio ?",
                  "answer": "Pour télécharger vos sous-titres YouTube : (1) Connectez-vous à YouTube Studio et ouvrez l'onglet 'Sous-titres'. (2) Sélectionnez la vidéo concernée. (3) En face de la piste de sous-titres publiée ou automatique, cliquez sur le menu à trois points (Options) et choisissez 'Télécharger'. (4) Sélectionnez '.sbv' (ou SubViewer). YouTube enregistre alors un fichier 'captions.sbv' que vous pouvez glisser directement dans notre convertisseur."
            },
            {
                  "question": "Quelles sont les différences d'horodatage entre SBV et SubRip SRT ?",
                  "answer": "Les horodatages SBV séparent le début et la fin par une seule virgule et placent un point avant les millisecondes, avec souvent une seule heure : '0:01:23.450,0:01:27.800'. Le format SubRip SRT exige une flèche entourée d'espaces (' --> '), des virgules pour les millisecondes et impérativement deux chiffres pour les heures : '00:01:23,450 --> 00:01:27,800'. De plus, SRT ajoute un numéro de réplique au-dessus de chaque bloc. Notre convertisseur applique automatiquement toutes ces adaptations."
            },
            {
                  "question": "Pourquoi mon fichier SBV YouTube contient-il des codes bizarres comme &amp; et &#39; ?",
                  "answer": "YouTube encode certains signes typographiques sous forme d'entités HTML afin de garantir leur affichage dans les navigateurs. Ainsi, le symbole et commercial devient '&amp;', l'apostrophe devient '&#39;' ou '&apos;', et les guillemets deviennent '&quot;'. Dans un logiciel de montage ou sur VLC, ces codes s'affichent textuellement, nuisant à la lisibilité. Notre outil décode automatiquement toutes ces entités en véritables signes de ponctuation."
            },
            {
                  "question": "Puis-je importer les sous-titres SRT convertis dans Premiere Pro, DaVinci Resolve ou Final Cut Pro ?",
                  "answer": "Oui. Le format SubRip (.srt) est universellement accepté par l'ensemble des logiciels de montage vidéo professionnels (Adobe Premiere Pro, DaVinci Resolve, Apple Final Cut Pro, Avid Media Composer, CapCut). Une fois le fichier converti, importez-le simplement dans votre chutier et déposez-le sur votre timeline."
            },
            {
                  "question": "Mes fichiers de sous-titres sont-ils transférés sur un serveur externe lors de la conversion ?",
                  "answer": "Non. SRTConverters fonctionne à 100 % en local dans votre navigateur grâce à JavaScript côté client. Vos fichiers SBV, transcriptions et fichiers SRT ne quittent jamais votre machine, garantissant une stricte confidentialité."
            },
            {
                  "question": "Comment convertir un fichier SBV en SRT en ligne de commande avec Python ou FFmpeg ?",
                  "answer": "Avec FFmpeg, utilisez la commande : 'ffmpeg -i input.sbv -c:s srt output.srt'. En Python, vous pouvez lire le fichier par blocs, scinder les horodatages à la virgule et générer les index numériques. Notre convertisseur en ligne applique exactement ce traitement de manière instantanée, sans aucune installation requise."
            }
      ]
}
  },
  "de": {
    "directory": {
      "title": "Alle Untertitel- und SRT-Tools",
      "subtitle": "Kostenlose Untertitel-Konverter im Browser. Ohne Installation, ohne Server-Uploads, 100% privat.",
      "metaTitle": "Kostenlose Untertitel- & SRT-Tools | SRTConverters",
      "metaDescription": "Entdecken Sie unsere Suite kostenloser Online-Untertitel-Tools. Konvertieren Sie TXT in SRT, SRT in Text, SRT in VTT und VTT in SRT.",
      "convertersCategory": "Untertitel-Konverter",
      "utilitiesCategory": "Untertitel-Dienstprogramme",
      "openTool": "Tool öffnen",
      "clientSideBadge": "100% Browserbasiert"
    },
    "txtToSrt": {
      "id": "txt-to-srt",
      "name": "TXT-in-SRT-Konverter",
      "shortName": "TXT in SRT",
      "badge": "Kostenlos & Browserbasiert",
      "tagline": "Verwandeln Sie einfachen Text & Transkripte in synchronisierte SubRip (.SRT) Untertitel",
      "description": "Wandeln Sie unformatierte Transkripte und Texte in formatierte SRT-Untertitel mit anpassbarer Lesegeschwindigkeit um.",
      "h1": "TXT in SRT Konverter",
      "metaTitle": "TXT in SRT Konverter – Text kostenlos in Untertitel umwandeln | SRTConverters",
      "metaDescription": "Konvertieren Sie Text-Transkripte (TXT) kostenlos online in SRT-Untertitel. Anpassbare Lesegeschwindigkeit und 100% Browser-Datenschutz.",
      "settingsLabels": {
        "timingMode": "Timing-Berechnungsmodus",
        "cpsLabel": "Lesegeschwindigkeit (CPS)",
        "cpsHint": "Zeichen pro Sekunde (15-20 ideal für Lesbarkeit)",
        "maxCharsPerLine": "Max. Zeichen pro Zeile",
        "maxCharsHint": "Empfohlen 37-42 Zeichen für Videos & Social Media",
        "splitMode": "Text-Segmentierungsstrategie",
        "splitSentence": "Nach Sätzen & Satzzeichen trennen",
        "splitParagraph": "Nach Absätzen trennen",
        "splitLine": "Nach Zeilenumbrüchen trennen",
        "gapBetweenSubtitles": "Pause zwischen Untertiteln (ms)",
        "gapHint": "Pause zwischen aufeinanderfolgenden Untertiteln (z.B. 100ms)"
      },
      "stepsTitle": "So konvertieren Sie Text in 3 Schritten in SRT-Untertitel",
      "steps": [
        {
          "step": "1",
          "title": "Text einfügen oder Datei hochladen",
          "description": "Fügen Sie Ihr Transkript in das Textfeld ein oder ziehen Sie eine .txt-Datei direkt hinein."
        },
        {
          "step": "2",
          "title": "Untertitel-Timing anpassen",
          "description": "Passen Sie Lesegeschwindigkeit (CPS), maximale Zeichenanzahl und Segmentierungsregeln an."
        },
        {
          "step": "3",
          "title": "Vorschau ansehen & .SRT herunterladen",
          "description": "Überprüfen Sie die generierten Untertitel in der Live-Vorschau und laden Sie die .srt-Datei herunter."
        }
      ],
      "featuresTitle": "Warum unseren TXT-zu-SRT-Konverter nutzen?",
      "features": [
        {
          "title": "100% Privat & im Browser",
          "description": "Keine Datenübertragung an Server. Die gesamte Konvertierung erfolgt lokal in Ihrem Browser.",
          "icon": "shield"
        },
        {
          "title": "Intelligente Satzzeichentrennung",
          "description": "Teilt längere Textpassagen an Punkten, Kommas und Fragezeichen für optimalen Lesekomfort auf.",
          "icon": "split"
        },
        {
          "title": "Intelligentes CPS-Timing",
          "description": "Berechnet die Anzeigedauer anhand der Zeichenanzahl und natürlicher Lesegeschwindigkeit.",
          "icon": "clock"
        },
        {
          "title": "Standardisiertes SRT-Format",
          "description": "Erzeugt SubRip-Dateien, kompatibel mit YouTube, Premiere Pro, DaVinci Resolve und VLC.",
          "icon": "file"
        }
      ],
      "faqsTitle": "Häufig gestellte Fragen",
      "faqs": [
        {
          "question": "Welches Format sollte meine TXT-Datei vor der Umwandlung in SRT haben?",
          "answer": "Ihre TXT-Datei sollte reinen Text ohne Rich-Text-Formatierung enthalten. Für eine optimale Untertitel-Formatierung strukturieren Sie Ihr TXT-Transkript so, dass jeder Satz oder Dialogabschnitt auf einer eigenen Zeile steht oder Absätze verwendet werden. Dies hilft dem Konverter, präzise Untertitel-Timings zu berechnen und ausgewogene SRT-Untertitel zu erstellen."
        },
        {
          "question": "Kann eine TXT-Datei Zeitstempel für die SRT-Konvertierung enthalten?",
          "answer": "Während Standard-TXT-Dateien einfache Texttranskripte ohne Timecodes sind, enthalten manche exportierten Dateien bereits grobe Zeitstempel. Wenn Ihre TXT-Datei Zeitangaben enthält, könnten einfache Konverter diese als gesprochenen Text interpretieren. Unser Konverter berechnet die Zeitstempel anhand von Lesegeschwindigkeit und Satzzeichen neu."
        },
        {
          "question": "Welches Zeitstempelformat verwendet eine SRT-Datei?",
          "answer": "Eine standardmäßige SRT-Datei verwendet fortlaufende Ziffern und Zeitstempel im Format 00:00:01,000 --> 00:00:04,000 (Stunden:Minuten:Sekunden,Millisekunden). Der SubRip-Standard erfordert ein Komma als Trennzeichen vor den Millisekunden, anders als WebVTT mit einem Punkt. Unser Tool erstellt automatisch standardkonforme SRT-Zeitstempel."
        },
        {
          "question": "Wie viele Zeichen sollte ein SRT-Untertitel enthalten?",
          "answer": "Für eine optimale Lesbarkeit empfehlen Untertitel-Richtlinien 37 bis 42 Zeichen pro Zeile bei maximal zwei Zeilen pro Untertitel (ca. 70 bis 84 Zeichen insgesamt). Dies ist keine starre Regel: Für Social-Media-Videos auf Smartphones eignen sich kürzere Zeilen, während Desktop-Displays längere Sätze problemlos darstellen."
        },
        {
          "question": "Kann ich ein TXT-Transkript mit mehreren Absätzen in SRT-Untertitel umwandeln?",
          "answer": "Ja! Sie können ein TXT-Transkript mit mehreren Absätzen problemlos in synchronisierte SRT-Untertitel umwandeln. Absatzumbrüche dienen als natürliche Pausenanzeiger bei der Segmentierung. Die Aufteilung nach Absätzen oder Sätzen sorgt für leicht lesbare Untertitel-Abschnitte mit natürlichem Lesefluss."
        },
        {
          "question": "Warum zeigt meine konvertierte SRT-Datei fehlerhafte Sonderzeichen an?",
          "answer": "Falsch dargestellte Zeichen entstehen meist durch eine abweichende Zeichenkodierung. Wenn Ihre TXT-Quelldatei Umlaute (ä, ö, ü, ß) oder Sonderzeichen enthält, speichern Sie diese in UTF-8-Kodierung. Unser browserbasierter Konverter arbeitet mit UTF-8 und übernimmt alle Sonderzeichen fehlerfrei in die fertige SRT-Datei."
        },
        {
          "question": "Kann ich Satzzeichen und Zeilenumbrüche nutzen, um die Untertitel-Teilung zu steuern?",
          "answer": "Auf jeden Fall. Satzzeichen (Punkte, Kommas, Fragezeichen) und gezielte Zeilenumbrüche steuern die Segmentierung maßgeblich. Bei der Aufteilung nach Sätzen teilt der Konverter Ihr TXT-Transkript an natürlichen Sprachpausen auf, sodass die SRT-Untertitel dem gesprochenen Rhythmus harmonisch folgen."
        },
        {
          "question": "Kann ich den TXT-zu-SRT-Konverter für YouTube-Untertitel verwenden?",
          "answer": "Ja, SRT ist eines der am weitesten verbreiteten Untertitel-Formate auf YouTube, Vimeo, Facebook und Instagram. Nach der Konvertierung können Sie die .srt-Datei direkt in YouTube Studio hochladen. Da automatisierte Konverter Zeitstempel anhand der Lesegeschwindigkeit schätzen, sollten Sie die Synchronisation vor der Veröffentlichung kurz prüfen."
        }
      ]
    },
    "srtToText": {
      "id": "srt-to-text",
      "name": "SRT-in-Text-Konverter",
      "shortName": "SRT in Text",
      "badge": "Kostenlos & Schnell",
      "tagline": "Extrahieren Sie reinen Text und Transkripte aus SubRip (.SRT) Untertiteln",
      "description": "Entfernen Sie Zeitstempel, Nummerierungen und HTML-Tags aus SRT-Dateien für saubere Texte.",
      "h1": "SRT in Text Konverter",
      "metaTitle": "SRT in Text Konverter – Text aus Untertiteln extrahieren | SRTConverters",
      "metaDescription": "Extrahieren Sie reinen Text aus SRT-Dateien. Entfernen Sie Zeitstempel und Nummerierungen datenschutzsicher im Browser.",
      "settingsLabels": {
        "stripTimestamps": "Zeitstempel entfernen",
        "stripLineNumbers": "Zeilennummern entfernen",
        "joinParagraphs": "In Absätze zusammenfügen"
      },
      "stepsTitle": "So wandeln Sie SRT-Untertitel in Text um",
      "steps": [
        {
          "step": "1",
          "title": "SRT-Datei hochladen oder einfügen",
          "description": "Ziehen Sie Ihre .srt-Datei hinein oder fügen Sie den Text ein."
        },
        {
          "step": "2",
          "title": "Bereinigungsoptionen wählen",
          "description": "Wählen Sie, ob Zeitstempel und Zeilennummern entfernt werden sollen."
        },
        {
          "step": "3",
          "title": "Sauberen Text kopieren oder herunterladen",
          "description": "Kopieren Sie den Text in die Zwischenablage oder laden Sie ihn als .txt herunter."
        }
      ],
      "featuresTitle": "Vorteile der SRT-zu-Text-Konvertierung",
      "features": [
        {
          "title": "Saubere Textextraktion",
          "description": "Entfernt alle Zeitstempel, Nummern und HTML-Tags automatisch.",
          "icon": "clean"
        },
        {
          "title": "Absatzzusammenführung",
          "description": "Kombiniert Untertitel-Fragmente zu zusammenhängenden Absätzen für Artikel.",
          "icon": "text"
        },
        {
          "title": "Sofort & Privat",
          "description": "Lokale Verarbeitung im Browser ohne Dateibegrenzungen oder Server-Uploads.",
          "icon": "lock"
        }
      ],
      "faqsTitle": "Häufig gestellte Fragen",
      "faqs": [
        {
          "question": "Wie wandle ich eine SRT-Datei in TXT um?",
          "answer": "Um eine SRT-Datei in TXT umzuwandeln, fügen Sie Ihren Untertiteltext in unseren kostenlosen Online-Konverter ein oder laden Sie eine .srt-Datei hoch. Das Tool entfernt automatisch Blocknummern und Zeitstempel, sodass nur sauberer Dialogtext übrig bleibt. Sie können Zeitcodes beibehalten oder Absätze zusammenfügen und das Ergebnis anschließend kopieren oder als .txt-Datei herunterladen."
        },
        {
          "question": "Kann ich SRT kostenlos online in TXT umwandeln?",
          "answer": "Ja! SRTConverters.com ist 100 % kostenlos – ohne Registrierung, Nutzungsbeschränkungen oder Wasserzeichen. Alle Berechnungen laufen lokal in Ihrem Browser via JavaScript ab, sodass Ihre Transkripte und Dateien niemals auf externe Server übertragen werden."
        },
        {
          "question": "Was passiert bei der Konvertierung mit den Zeitstempeln?",
          "answer": "Standardmäßig werden alle Millisekunden-Zeitstempel (z. B. '00:00:01,000 --> 00:00:04,500') vollständig entfernt. Dadurch entsteht ein sauberer Fließtext, der sich ideal für Blogartikel, Zusammenfassungen, Studienunterlagen und KI-Eingaben eignet."
        },
        {
          "question": "Kann ich SRT mit Zeitstempeln in TXT umwandeln?",
          "answer": "Ja. Deaktivieren Sie in den Einstellungen unseres Konverters einfach die Option 'Zeitstempel entfernen'. Das Tool behält die Start- und Endzeitcodes über jeder Dialogzeile bei, was ideal für Videoschnitt-Referenzen und Protokolle ist."
        },
        {
          "question": "Was ist der Unterschied zwischen SRT- und TXT-Dateien?",
          "answer": "Eine SRT-Datei (SubRip) ist ein Untertitelformat mit nummerierten Blöcken und Zeitstempeln, die Videoplayern vorgeben, wann Untertitel eingeblendet werden. Eine TXT-Datei ist reiner Fließtext ohne Zeitangaben, gedacht zum Lesen und Bearbeiten."
        },
        {
          "question": "Wie entferne ich Zeitstempel aus einer SRT-Datei?",
          "answer": "Der schnellste Weg ist die Nutzung unseres Online-Konverters. Statt Zeitstempelzeilen im Windows Editor mühsam von Hand zu löschen, laden Sie Ihre .srt-Datei hoch – unser Tool bereinigt alle Zeitcodes und Nummern in Millisekunden."
        },
        {
          "question": "Kann ich eine SRT-Untertiteldatei in ein Transkript umwandeln?",
          "answer": "Ja, die Konvertierung von SRT in TXT ist der Standardweg, um Video-Untertitel in lesbare Transkripte zu verwandeln. Mit der Option 'In Absätze zusammenfügen' verbinden Sie kurze Untertitelzeilen zu flüssigen Textabsätzen für Dokumente und Notizen."
        },
        {
          "question": "Warum enthält meine konvertierte TXT-Datei doppelte Zeilen?",
          "answer": "Doppelte Zeilen entstehen meist, wenn die ursprüngliche SRT-Datei automatische Spracherkennung oder Roll-up-Untertitel nutzte, die vorherige Zeilen zur Lesbarkeit wiederholen. Sie können Duplikate in jedem Texteditor schnell finden und löschen."
        },
        {
          "question": "Kann ich eine SRT-Datei als Textdatei öffnen?",
          "answer": "Ja, SRT-Dateien sind reine Textdateien mit spezieller Dateiendung. Sie können sie im Windows Editor oder Notepad++ öffnen, sehen dann aber alle Zeitstempel. Unser Konverter filtert genau diesen technischen Overhead heraus."
        },
        {
          "question": "Funktioniert die SRT-zu-TXT-Konvertierung mit verschiedenen Sprachen?",
          "answer": "Ja, unser Konverter unterstützt den UTF-8-Zeichensatz vollständig. Umlaute (ä, ö, ü, ß), Akzente, nicht-lateinische Alphabete (Kyrillisch, Griechisch, Arabisch, Hebräisch), asiatische Schriftzeichen (Chinesisch, Japanisch, Koreanisch) und Sonderzeichen werden fehlerfrei verarbeitet."
        }
      ]
    },
    "srtToVtt": {
      "id": "srt-to-vtt",
      "name": "SRT-in-VTT-Konverter",
      "shortName": "SRT in VTT",
      "badge": "WebVTT-Bereit",
      "tagline": "Konvertieren Sie SubRip (.SRT) Untertitel in das moderne HTML5 WebVTT (.VTT) Format",
      "description": "Wandeln Sie SRT-Dateien in WebVTT für HTML5-Videoplayer und moderne Browser um.",
      "h1": "SRT in VTT Konverter",
      "metaTitle": "SRT in VTT Konverter – Untertitel in WebVTT umwandeln | SRTConverters",
      "metaDescription": "Konvertieren Sie SubRip (.srt) in WebVTT (.vtt) online. Perfekt für HTML5-Videos und Web-Streaming.",
      "settingsLabels": {},
      "stepsTitle": "So konvertieren Sie SRT in WebVTT in 3 Schritten",
      "steps": [
        {
          "step": "1",
          "title": "SRT-Datei hochladen",
          "description": "Fügen Sie den SRT-Text ein oder laden Sie eine .srt-Datei hoch."
        },
        {
          "step": "2",
          "title": "Automatische WebVTT-Formatierung",
          "description": "Fügt den WEBVTT-Header ein und passt das Zeitstempelformat an."
        },
        {
          "step": "3",
          "title": ".VTT-Datei herunterladen",
          "description": "Laden Sie die fertige .vtt-Datei für Web-Videoplayer herunter."
        }
      ],
      "featuresTitle": "Warum SRT in WebVTT umwandeln?",
      "features": [
        {
          "title": "HTML5-Video bereit",
          "description": "WebVTT ist der offizielle W3C-Standard für Untertitel in modernen Web-Browsern.",
          "icon": "globe"
        },
        {
          "title": "Präzise Timecode-Umwandlung",
          "description": "Konvertiert Millisekunden-Kommas präzise in die von WebVTT geforderten Punkte.",
          "icon": "check"
        }
      ],
      "faqsTitle": "Häufig gestellte Fragen",
      "faqs": [
        {
          "question": "Wie wandle ich eine SRT-Datei in VTT um?",
          "answer": "Um eine SRT-Datei in VTT umzuwandeln, fügen Sie Ihren SubRip-Text in unseren kostenlosen Online-Konverter ein oder laden Sie eine .srt-Datei hoch. Das Tool fügt automatisch den erforderlichen 'WEBVTT'-Header ein und wandelt alle Kommas in den Zeitstempeln (00:00:01,000) in Dezimalpunkte (00:00:01.000) um. Sie können das Ergebnis sofort kopieren oder als .vtt-Datei für HTML5-Videoplayer herunterladen."
        },
        {
          "question": "Kann ich SRT kostenlos online in VTT umwandeln?",
          "answer": "Ja! SRTConverters.com ist 100 % kostenlos – ohne Registrierung, Dateibeschränkungen oder Wasserzeichen. Die gesamte Umwandlung läuft lokal im Browser über JavaScript ab, sodass Ihre Untertiteldateien niemals auf externe Server übertragen werden."
        },
        {
          "question": "Kann ich eine .srt-Datei einfach in .vtt umbenennen?",
          "answer": "Nein. Das bloße Ändern der Dateiendung führt dazu, dass Browser die Untertitel nicht anzeigen können. Durch das Umbenennen fehlt weiterhin der obligatorische 'WEBVTT'-Header auf der ersten Zeile und die Zeitstempel enthalten unzulässige Kommas anstelle von Punkten. Eine echte Syntaxkonvertierung ist zwingend erforderlich."
        },
        {
          "question": "Was ist der Unterschied zwischen SRT und VTT?",
          "answer": "SRT (SubRip) ist ein älteres Format für Desktop-Videoplayer und Videoschnittprogramme. WebVTT (.vtt) ist der offizielle W3C-Webstandard für HTML5 <video>-Elemente. WebVTT beginnt zwingend mit 'WEBVTT', nutzt Punkte für Millisekunden und unterstützt modernes CSS-Styling (::cue) sowie Bildschirmausrichtung."
        },
        {
          "question": "Wie wandle ich SRT mit FFmpeg in VTT um?",
          "answer": "Um eine SRT-Datei per Befehlszeile mit FFmpeg in WebVTT umzuwandeln, führen Sie aus: `ffmpeg -i eingabe.srt ausgabe.vtt`. FFmpeg verarbeitet die SubRip-Datei und generiert automatisch gültiges WebVTT. Für schnelle Konvertierungen ohne Programminstallation liefert unser Online-Konverter das gleiche Ergebnis direkt im Browser."
        },
        {
          "question": "Warum funktioniert meine VTT-Datei im Browser nicht?",
          "answer": "Wenn Untertitel nicht angezeigt werden, prüfen Sie drei typische Ursachen: (1) Die Datei muss in Zeile 1 exakt mit 'WEBVTT' beginnen, (2) Zeitstempel müssen Punkte (00:00:01.000) statt Kommas nutzen, und (3) Der Webserver muss den MIME-Type-Header Content-Type: text/vtt; charset=utf-8 sowie korrekte CORS-Freigaben senden."
        },
        {
          "question": "Verändert die Umwandlung von SRT in VTT das Timing?",
          "answer": "Nein. Eine korrekte Formatkonvertierung behält alle Start- und Endzeitpunkte exakt bei. Lediglich das Trennzeichen vor den Millisekunden wechselt vom Komma zum Dezimalpunkt (z. B. '00:01:23,456' zu '00:01:23.456'). Die Synchronisation mit Ihrem Video bleibt zu 100 % identisch."
        },
        {
          "question": "Bleibt der Untertiteltext bei der Konvertierung vollständig erhalten?",
          "answer": "Ja. Alle gesprochenen Dialogzeilen, Sprecherkennzeichnungen und grundlegenden Formatierungen (wie <i> für kursiv und <b> für fett) werden unverändert übernommen. WebVTT unterstützt diese Tags standardmäßig."
        },
        {
          "question": "Warum benötigen VTT-Untertitel den WEBVTT-Header?",
          "answer": "Die offizielle W3C-Spezifikation schreibt vor, dass jede gültige WebVTT-Datei mit der Signatur 'WEBVTT' in Zeile 1 beginnen muss. Webbrowser und HTML5-Mediaplayer prüfen diese Signatur, um die Datei zu validieren, bevor Untertitelzeilen gerendert werden."
        },
        {
          "question": "Welches Untertitelformat sollte ich für HTML5-Videos nutzen: SRT oder VTT?",
          "answer": "Für HTML5-Videos sollten Sie immer WebVTT (.vtt) verwenden. Moderne Browser unterstützen WebVTT über das standardmäßige <track>-Element nativ und ohne zusätzliche JavaScript-Bibliotheken. SRT wird von Webbrowsern nicht nativ verarbeitet."
        }
      ]
    },
    "vttToSrt": {
      "id": "vtt-to-srt",
      "name": "VTT-in-SRT-Konverter",
      "shortName": "VTT in SRT",
      "badge": "Universelles SubRip",
      "tagline": "Konvertieren Sie WebVTT (.VTT) in standardmäßige SubRip (.SRT) Untertitel",
      "description": "Wandeln Sie WebVTT-Dateien in universelle SubRip (.srt) Dateien für Schnittprogramme und Player um.",
      "h1": "VTT in SRT Konverter",
      "metaTitle": "VTT in SRT Konverter – WebVTT in SubRip umwandeln | SRTConverters",
      "metaDescription": "Konvertieren Sie WebVTT (.vtt) kostenlos online in SubRip (.srt). 100% Browser-Datenschutz.",
      "settingsLabels": {},
      "stepsTitle": "So konvertieren Sie WebVTT in 3 Schritten in SRT",
      "steps": [
        {
          "step": "1",
          "title": "WebVTT-Datei hochladen",
          "description": "Fügen Sie Ihre WebVTT-Untertitel ein oder ziehen Sie eine .vtt-Datei hinein."
        },
        {
          "step": "2",
          "title": "Automatische SRT-Umwandlung",
          "description": "Bereinigt WebVTT-Tags, nummeriert Zeilen fortlaufend und passt Zeitstempel an.",
          "icon": "file"
        },
        {
          "step": "3",
          "title": "SubRip .SRT herunterladen",
          "description": "Speichern Sie die universelle .srt-Datei für Premiere, DaVinci oder VLC."
        }
      ],
      "featuresTitle": "Warum VTT in SRT umwandeln?",
      "features": [
        {
          "title": "Universelle Kompatibilität",
          "description": "SRT wird von Adobe Premiere, DaVinci Resolve, Final Cut Pro und VLC unterstützt.",
          "icon": "video"
        },
        {
          "title": "Fortlaufende Nummerierung",
          "description": "Fügt automatisch die fortlaufende Nummerierung (1, 2, 3...) ein.",
          "icon": "list"
        }
      ],
      "faqsTitle": "Häufig gestellte Fragen",
      "faqs": [
        {
          "question": "Wie wandle ich eine VTT-Datei in SRT um?",
          "answer": "Um eine VTT-Datei in SRT umzuwandeln, fügen Sie Ihren WebVTT-Text in unseren kostenlosen Online-Konverter ein oder laden Sie eine .vtt-Datei hoch. Das Tool entfernt automatisch den 'WEBVTT'-Header, wandelt alle Millisekunden-Dezimalpunkte (00:00:01.000) in Kommas (00:00:01,000) um und ergänzt die fortlaufende Blocknummerierung (1, 2, 3...). Sie können das Ergebnis sofort kopieren oder als .srt-Datei herunterladen."
        },
        {
          "question": "Kann ich VTT kostenlos online in SRT umwandeln?",
          "answer": "Ja! SRTConverters.com ist 100 % kostenlos – ohne Registrierung, Dateibeschränkungen oder Wasserzeichen. Die gesamte Umwandlung läuft lokal im Browser über JavaScript ab, sodass Ihre Untertiteldateien niemals auf externe Server übertragen werden."
        },
        {
          "question": "Kann ich eine .vtt-Datei einfach in .srt umbenennen?",
          "answer": "Nein. Das bloße Ändern der Dateiendung führt dazu, dass Schnittprogramme und Videoplayer die Datei ablehnen. Durch das Umbenennen fehlen weiterhin die obligatorischen Zeilennummern, die Zeitstempel enthalten unzulässige Punkte statt Kommas und der WEBVTT-Header bleibt im Text. Eine echte Syntaxkonvertierung ist zwingend erforderlich."
        },
        {
          "question": "Was ist der Unterschied zwischen VTT und SRT?",
          "answer": "WebVTT (.vtt) ist der W3C-Standard für HTML5-Webvideos mit 'WEBVTT'-Header, Dezimalpunkten für Millisekunden (00:00:01.500) und CSS-Styling. SubRip (.srt) ist der klassische Standard für Schnittsoftware und Desktop-Player, der zwingend fortlaufende Blocknummern und Kommas für Millisekunden (00:00:01,500) vorschreibt."
        },
        {
          "question": "Wie wandle ich VTT mit FFmpeg in SRT um?",
          "answer": "Um eine WebVTT-Datei per Befehlszeile mit FFmpeg in SubRip umzuwandeln, führen Sie aus: `ffmpeg -i eingabe.vtt ausgabe.srt`. FFmpeg verarbeitet die WebVTT-Datei und generiert standardkonformes SRT. Für schnelle Konvertierungen ohne Programminstallation liefert unser Online-Konverter das gleiche Ergebnis direkt im Browser."
        },
        {
          "question": "Verändert die Umwandlung von VTT in SRT das Timing?",
          "answer": "Nein. Eine korrekte Formatkonvertierung behält alle Start- und Endzeitpunkte exakt bei. Lediglich das Trennzeichen vor den Millisekunden wechselt vom Punkt zum Komma (z. B. '00:01:23.456' zu '00:01:23,456'). Die Synchronisation mit Ihrem Video bleibt zu 100 % identisch."
        },
        {
          "question": "Was passiert bei der Umwandlung mit WebVTT-Styling und Positionierung?",
          "answer": "Da das standardmäßige SubRip-Format keine CSS-Styles oder Bildschirmkoordinaten (wie line:X% oder align:start) unterstützt, werden diese Webspezifika bei der Konvertierung bereinigt. Grundlegende Formatierungen wie Fett- und Kursivschrift (<b>, <i>) bleiben erhalten, und Untertitel werden standardmäßig unten zentriert dargestellt."
        },
        {
          "question": "Warum öffnet sich meine konvertierte SRT-Datei nicht im Videoplayer?",
          "answer": "Wenn eine SRT-Datei nicht geladen werden kann, liegt dies meist an fehlenden Zeilennummern (1, 2, 3...) oder ungültigen Zeitstempeln mit Punkten statt Kommas. Unser Konverter stellt sicher, dass jeder Block die erforderliche Nummerierung und standardkonforme Komma-Zeitstempel erhält."
        },
        {
          "question": "Bleiben Text und Zeilenumbrüche bei der Konvertierung vollständig erhalten?",
          "answer": "Ja. Alle gesprochenen Dialogzeilen, Sprecherkennzeichnungen, Satzzeichen und mehrzeilige Untertitelumbrüche werden vollständig und unverändert in die SRT-Datei übernommen."
        },
        {
          "question": "Warum verwenden SRT-Dateien Kommas statt Punkte in den Zeitstempeln?",
          "answer": "Das SubRip-Format (.srt) wurde Ende der 1990er-Jahre in Frankreich entwickelt. Im kontinentaleuropäischen Raum ist das Komma das Standard-Dezimaltrennzeichen. Daher legte die SubRip-Spezifikation Kommas für Millisekunden (00:00:01,500) fest, während WebVTT für Webstandards Dezimalpunkte übernahm."
        }
      ]
    },
    "srtToAss": {
      "id": "srt-to-ass",
      "name": "SRT in ASS Konverter",
      "shortName": "SRT in ASS",
      "badge": "ASS v4+ Kompatibel",
      "tagline": "Konvertieren Sie SubRip (.SRT) Untertitel in das Advanced SubStation Alpha (.ASS) Format",
      "description": "Wandeln Sie einfache SRT-Dateien in stylische ASS-Untertitel mit individuellen Schriftarten, Konturen, Schatten und präziser Bildpositionierung für Aegisub und Videoplayer um.",
      "h1": "SRT in ASS Konverter",
      "metaTitle": "SRT in ASS Konverter – Untertitel online in ASS umwandeln | SRTConverters",
      "metaDescription": "Konvertieren Sie SubRip (.srt) Untertitel kostenlos online in das Advanced SubStation Alpha (.ass) Format. Benutzerdefinierte Stile, Farben und 100% Privatsphäre.",
      "settingsLabels": {},
      "stepsTitle": "So konvertieren Sie SRT in ASS in 3 Schritten",
      "steps": [
        {
          "step": "1",
          "title": "SRT-Datei hochladen oder einfügen",
          "description": "Ziehen Sie Ihre .srt-Datei per Drag-and-Drop in den Upload-Bereich oder fügen Sie den Text direkt ein."
        },
        {
          "step": "2",
          "title": "Sofortige ASS v4.00+ Formatierung",
          "description": "Unser Konverter berechnet Hundertstelsekunden, passt Tags an und erzeugt gültige [Script Info]-, [V4+ Styles]- und [Events]-Blöcke."
        },
        {
          "step": "3",
          "title": ".ASS-Datei herunterladen",
          "description": "Kopieren Sie den Text in die Zwischenablage oder laden Sie die fertige .ass-Datei für Aegisub, VLC, MPV oder Schnittprogramme herunter."
        }
      ],
      "featuresTitle": "Warum SRT in ASS konvertieren?",
      "features": [
        {
          "title": "Erweiterte Typografie & Farbverläufe",
          "description": "Nutzen Sie individuelle Schriftarten, Schriftgrößen, Umrandungen und Schatten, die im einfachen SRT-Format nicht existieren.",
          "icon": "pen"
        },
        {
          "title": "Pixelgenaue Positionierung",
          "description": "Platzieren Sie Untertitel über Bildschirmkoordinaten (X, Y) exakt an der gewünschten Stelle, ohne Bauchbinden zu überdecken.",
          "icon": "grid"
        },
        {
          "title": "100% Datenschutz im Browser",
          "description": "Die gesamte Konvertierung erfolgt clientseitig in Ihrem Browser. Keine Datei wird auf externe Server übertragen.",
          "icon": "shield"
        },
        {
          "title": "Bereit für Aegisub & Schnittsoftware",
          "description": "Erzeugt standardkonformes ASS v4.00+, das sofort von Aegisub, VLC, MPV, HandBrake, DaVinci Resolve und Premiere Pro unterstützt wird.",
          "icon": "check"
        }
      ],
      "faqsTitle": "Häufig gestellte Fragen (FAQ)",
      "faqs": [
        {
          "question": "Wie konvertiere ich eine SRT-Datei in ASS?",
          "answer": "Laden Sie Ihre .srt-Datei in unseren kostenlosen Online-Konverter hoch oder fügen Sie den Untertiteltext direkt ein. Das Tool wandelt Ihre SubRip-Einträge unmittelbar in standardkonforme Advanced SubStation Alpha (v4.00+) Syntax um, einschließlich der Pflichtbereiche [Script Info], [V4+ Styles] und [Events]. Sie können die fertige .ass-Datei sofort herunterladen."
        },
        {
          "question": "Ist die Konvertierung von SRT in ASS kostenlos?",
          "answer": "Ja, unser SRT-zu-ASS-Konverter ist zu 100% kostenlos, erfordert keine Registrierung, fügt keine Wasserzeichen ein und unterliegt keinen Dateibeschränkungen. Alle Prozesse laufen vollständig clientseitig in Ihrem Webbrowser über JavaScript ab, sodass Ihre privaten Untertiteltexte niemals auf fremde Server übertragen werden."
        },
        {
          "question": "Was ist der Unterschied zwischen SRT und ASS?",
          "answer": "SRT (SubRip) ist ein minimalistisches Textformat, das lediglich Zählernummern, Zeitstempel im Millisekundenbereich und einfachen Text ohne nennenswerte Gestaltungsoptionen enthält. ASS (Advanced SubStation Alpha) ist eine anspruchsvolle Spezifikation, die frei wählbare Schriftarten, Schriftgrößen, BGR-Farbwerte, dicke Randkonturen, Schlagschatten, exakte Pixel-Bildschirmkoordinaten und animiertes Silben-Karaoke unterstützt."
        },
        {
          "question": "Kann ich die ASS-Datei in Aegisub weiterbearbeiten?",
          "answer": "Ja. Unser Konverter erzeugt standardkonforme ASS v4.00+ Syntax, die speziell auf die Anforderungen von Aegisub abgestimmt ist. Öffnen Sie die heruntergeladene .ass-Datei in Aegisub, um Schriftstile, Farben, Positionierungstags, Karaoke-Effekte oder das Audio-Timing anhand des Wellenform-Spektrums flexibel anzupassen."
        },
        {
          "question": "Reicht es, die Dateiendung von .srt in .ass umzubenennen?",
          "answer": "Nein. Ein einfaches Umbenennen einer .srt-Datei in .ass führt bei Mediaplayern und Videoschnittprogrammen zu Fehlern, da die Datei nicht die erforderlichen strukturierten Blöcke wie [Script Info], [V4+ Styles] und formatierte Dialogue-Zeilen enthält. Für eine funktionsfähige ASS-Datei ist ein dedizierter Konverter unerlässlich."
        },
        {
          "question": "Bleibt die zeitliche Synchronisation der Untertitel erhalten?",
          "answer": "Ja. Sämtliche Start- und Endzeitpunkte bleiben bildgenau erhalten. Sie werden von der SRT-Millisekunden-Schreibweise (HH:MM:SS,mmm) präzise in die für ASS standardisierte Hundertstelsekunden-Notation (H:MM:SS.cs) umgerechnet, ohne zeitliche Abweichungen im Video."
        },
        {
          "question": "Welche Mediaplayer unterstützen ASS-Untertitel?",
          "answer": "Nahezu alle modernen Videoplayer unterstützen ASS-Untertitel inklusive aller visuellen Stilelemente, darunter VLC Media Player, MPV, MPC-HC, PotPlayer und Plex (bei Direktwiedergabe oder Transcodierung). Videotools wie HandBrake und FFmpeg können gestaltete ASS-Untertitel zudem direkt fest in MP4-Videodateien einbrennen."
        },
        {
          "question": "Werden Formatierungs-Tags wie fett und kursiv übernommen?",
          "answer": "Ja. Typische HTML-Formatierungs-Tags aus SRT-Dateien wie <i>, <b>, <u> und <font color> werden automatisch in native ASS-Steuerzeichen übersetzt ({\\i1}, {\\b1}, {\\u1} und {\\c&HBBGGRR&}), sodass alle Hervorhebungen des Originaltextes vollständig erhalten bleiben."
        }
      ]
    },
    "assToSrt": {
          "id": "ass-to-srt",
          "name": "ASS in SRT Konverter",
          "shortName": "ASS in SRT",
          "badge": "Universelles SubRip",
          "tagline": "Advanced SubStation Alpha (.ASS) Untertitel in sauberes SubRip (.SRT) Format umwandeln",
          "description": "Konvertieren Sie stilisierte Advanced SubStation Alpha (.ass / .ssa) Untertitel in saubere, universell kompatible SubRip (.srt) Dateien. Stil-Tags bereinigen, Hundertstelsekunden anpassen und Untertitel für Smart-TVs und Media Player optimieren.",
          "h1": "ASS in SRT Konverter Online",
          "metaTitle": "ASS in SRT Konverter Online – ASS kostenlos in SRT umwandeln | SRTConverters",
          "metaDescription": "Konvertieren Sie Advanced SubStation Alpha (.ass) Untertitel kostenlos online in sauberes SubRip (.srt) Format. Tags bereinigen, Zeitstempel anpassen und sofort SRT herunterladen.",
          "settingsLabels": {},
          "stepsTitle": "ASS in 3 einfachen Schritten in SRT konvertieren",
          "steps": [
                {
                      "step": "1",
                      "title": "ASS-Untertitel hochladen oder einfügen",
                      "description": "Ziehen Sie Ihre .ass- oder .ssa-Datei per Drag & Drop in den Upload-Bereich oder fügen Sie den Text direkt in den Editor ein."
                },
                {
                      "step": "2",
                      "title": "Automatische Tag-Bereinigung & Zeitkonvertierung",
                      "description": "Unsere browserbasierte Engine extrahiert Dialoge, wandelt Hundertstelsekunden in Millisekunden um und entfernt überflüssige Stil-Tags."
                },
                {
                      "step": "3",
                      "title": "Saubere .SRT-Datei herunterladen",
                      "description": "Kopieren Sie die fertigen SubRip-Untertitel in die Zwischenablage oder laden Sie die .srt-Datei für Smart-TVs, Plex, VLC oder Mobilgeräte herunter."
                }
          ],
          "featuresTitle": "Warum ASS in SRT konvertieren?",
          "features": [
                {
                      "title": "Universelle Media-Player-Kompatibilität",
                      "description": "SubRip (.srt) ist das am weitesten verbreitete Untertitelformat der Welt und wird von Smart-TVs, Streaming-Boxen und Mobilgeräten fehlerfrei wiedergegeben.",
                      "icon": "globe"
                },
                {
                      "title": "Intelligente Tag-Bereinigung",
                      "description": "Entfernt Positionskoordinaten (\\pos), Ausrichtungen (\\an), Schriftfarben (\\c) und Vektorzeichnungen (\\p1) sauber, während Fett- und Kursivschrift erhalten bleiben.",
                      "icon": "sparkles"
                },
                {
                      "title": "Präzises Timing von Hundertstelsekunden zu Millisekunden",
                      "description": "Konvertiert ASS-Hundertstelsekunden (H:MM:SS.cs) präzise in SRT-Millisekunden (HH:MM:SS,mmm) für eine absolut lippensynchrone Wiedergabe.",
                      "icon": "clock"
                },
                {
                      "title": "100% Datenschutz im Browser",
                      "description": "Die gesamte Konvertierung erfolgt lokal im Speicher Ihres Browsers. Es werden keinerlei Untertiteltexte oder Dateien an externe Server übertragen.",
                      "icon": "shield"
                }
          ],
          "faqsTitle": "Häufig gestellte Fragen (FAQ)",
          "faqs": [
                {
                      "question": "Was ist der Unterschied zwischen ASS- und SRT-Untertiteln?",
                      "answer": "Advanced SubStation Alpha (.ass) bietet umfangreiche Styling-Möglichkeiten wie individuelle Schriftarten, genaue Koordinaten-Positionierung, Karaoke-Effekte und Vektorzeichnungen. SubRip (.srt) ist ein schlankes Nur-Text-Format für maximale universelle Kompatibilität auf nahezu jedem Endgerät."
                },
                {
                      "question": "Gehen Stile wie Farben und Bildschirmpositionen bei der Umwandlung verloren?",
                      "answer": "Ja, komplexe Styling-Tags wie Koordinaten (\\pos), Ausrichtungen (\\an), Karaoke-Timer (\\k) und Farben werden entfernt, da die offizielle SRT-Spezifikation diese nicht unterstützt. Grundlegende Textformatierungen wie Fett (<b>), Kursiv (<i>) und Unterstrichen (<u>) bleiben erhalten."
                },
                {
                      "question": "Bleiben fett und kursiv formatierte Texte bei der Konvertierung erhalten?",
                      "answer": "Ja. ASS-Tags wie {\\b1} und {\\i1} werden automatisch in standardisierte HTML-Tags (<b> und <i>) übersetzt, sodass wichtige Textbetonungen in kompatiblen Videoplayern sichtbar bleiben."
                },
                {
                      "question": "Wie geht der Konverter mit Zeitstempeln und Hundertstelsekunden um?",
                      "answer": "ASS-Dateien erfassen Zeiten in Hundertstelsekunden (H:MM:SS.cs), während SRT Millisekunden verwendet (HH:MM:SS,mmm). Unser Tool berechnet den exakten Millisekundenwert (z. B. wird 0:01:23.45 zu 00:01:23,450), wodurch kein Asynchronitäts-Versatz entsteht."
                },
                {
                      "question": "Was passiert mit überlappenden oder gleichzeitigen ASS-Zeilen?",
                      "answer": "Wenn mehrere Dialogzeilen zeitgleich eingeblendet werden (häufig bei Anime für gleichzeitige Stimmen oder Liedtexte), sortiert der Konverter diese chronologisch und nummeriert die Blöcke in der SRT-Datei sauber durch."
                },
                {
                      "question": "Kann ich Anime-Fansub-Untertitel (.ass) für Plex oder Smart-TVs in SRT umwandeln?",
                      "answer": "Ja! Das ist einer der häufigsten Einsatzzwecke. Viele Smart-TVs und Plex-Clients können aufwendige ASS-Schriften nicht direkt darstellen und erzwingen zeitintensives Server-Transcodieren. Die Umwandlung in SRT ermöglicht eine flüssige direkte Wiedergabe."
                },
                {
                      "question": "Kann ich ASS mit Befehlszeilen-Tools wie FFmpeg in SRT umwandeln?",
                      "answer": "Ja, mit dem Befehl: ffmpeg -i eingabe.ass -c:s srt ausgabe.srt. Unser Online-Tool benötigt jedoch keine Software-Installation, bietet eine direkte Textvorschau und funktioniert auch auf Mobiltelefonen."
                },
                {
                      "question": "Werden meine Untertitel-Dateien auf einen Server hochgeladen?",
                      "answer": "Nein, Ihre Daten bleiben vollständig privat. Die Konvertierung läuft zu 100% lokal in Ihrem Browser über JavaScript ab. Keine Datei verlässt Ihr Gerät."
                }
          ]
    },
    "srtToSub": {
          "id": "srt-to-sub",
          "name": "SRT in SUB Konverter",
          "shortName": "SRT in SUB",
          "badge": "Kostenlos & Sicher",
          "tagline": "SubRip (.SRT) Untertitel kostenlos online in MicroDVD und SubViewer (.SUB) umwandeln",
          "description": "Konvertieren Sie SubRip (.srt) Untertitel kostenlos online in das SUB-Format (MicroDVD & SubViewer 2.0). Bildfrequenz (FPS) wählbar und 100% Datenschutz im Browser.",
          "h1": "SRT in SUB Konverter Online",
          "metaTitle": "SRT in SUB Konverter – Untertitel kostenlos online in SUB umwandeln | SRTConverters",
          "metaDescription": "Konvertieren Sie SubRip (.srt) Untertitel kostenlos online in das SUB-Format (MicroDVD & SubViewer). Bildfrequenz (FPS) wählbar und 100% Datenschutz im Browser.",
          "settingsLabels": {
                "timingMode": "Untertitelformat",
                "fixedDuration": "MicroDVD (.sub)",
                "cpsDuration": "SubViewer 2.0 (.sub)",
                "cpsLabel": "Video-Bildfrequenz (FPS)",
                "cpsHint": "Wählen Sie die Bildfrequenz Ihres Videos für eine präzise Bildsynchronisation.",
                "startTime": "FPS-Header einfügen",
                "startTimeHint": "Fügt die Kopfzeile {1}{1}FPS für automatische Erkennung in Media-Playern ein.",
                "maxCharsPerLine": "HTML-Tags entfernen",
                "maxCharsHint": "Entfernt <i>, <b> und Formatierungen für Kompatibilität mit älteren DVD-Playern."
          },
          "stepsTitle": "In 3 einfachen Schritten SRT in SUB online umwandeln",
          "steps": [
                {
                      "step": "1",
                      "title": "SRT-Datei hochladen oder einfügen",
                      "description": "Ziehen Sie Ihre .srt-Datei per Drag & Drop in den Bereich oder fügen Sie Ihren Untertiteltext direkt in den Editor ein."
                },
                {
                      "step": "2",
                      "title": "Format und Video-FPS festlegen",
                      "description": "Wählen Sie MicroDVD oder SubViewer und stellen Sie die Bildfrequenz Ihres Videos ein (z. B. 23.976, 24, 25 oder 29.97 FPS)."
                },
                {
                      "step": "3",
                      "title": "Konvertierte SUB-Datei herunterladen",
                      "description": "Klicken Sie auf .SUB herunterladen, um die Datei direkt zu speichern, oder kopieren Sie den Text in die Zwischenablage."
                }
          ],
          "featuresTitle": "Vorteile unseres Online SRT in SUB Konverters",
          "features": [
                {
                      "title": "100% Datenschutz im Browser",
                      "description": "Die Konvertierung läuft vollständig lokal auf Ihrem Gerät. Es werden niemals Dateien oder Texte auf externe Server übertragen.",
                      "icon": "shield"
                },
                {
                      "title": "MicroDVD & SubViewer Unterstützung",
                      "description": "Volle Unterstützung für bildbasiertes MicroDVD ({Start}{Ende}) sowie zeitbasiertes SubViewer 2.0.",
                      "icon": "file"
                },
                {
                      "title": "Bildgenaue Synchronisation",
                      "description": "Unterstützt Standard-Bildraten wie 23.976, 24.0, 25.0 (PAL), 29.97 (NTSC), 30 und 60 FPS gegen Zeitversatz.",
                      "icon": "clock"
                },
                {
                      "title": "Kompatibel mit älteren Abspielgeräten",
                      "description": "Erstellt saubere .sub-Dateien für Standalone-DVD-Player, Auto-Entertainment-Systeme und DivX/XviD-Geräte.",
                      "icon": "split"
                }
          ],
          "faqsTitle": "Häufig gestellte Fragen zur SRT in SUB Konvertierung",
          "faqs": [
                {
                      "question": "Worin besteht der Unterschied zwischen einer SRT- und einer SUB-Datei?",
                      "answer": "SRT (SubRip) ist ein modernes, zeitbasiertes Untertitelformat, bei dem Einblendungen mit Millisekunden-Zeitstempeln gesteuert werden (00:01:23,450 --> 00:01:26,800). Es wird von modernen Webbrowsern, Smart-TVs und Videoplayern universell unterstützt. Textbasierte SUB-Dateien hingegen — vor allem MicroDVD (.sub) — basieren auf Video-Einzelbildern (Frames): {Start-Frame}{End-Frame}. Ein weiteres textbasiertes Format mit der Dateiendung .sub ist SubViewer 2.0 mit Hundertstelsekunden. Die Umwandlung von SRT in SUB ist notwendig für ältere DVD-Player, Auto-Monitore und Hardware-Mediaplayer, die ausschließlich Frame-basierte .sub-Dateien verarbeiten können."
                },
                {
                      "question": "Warum muss ich beim Konvertieren von SRT in SUB eine Bildfrequenz (FPS) wählen?",
                      "answer": "Da MicroDVD-SUB-Dateien Zeitpunkte nicht in Millisekunden, sondern in Frame-Nummern speichern, muss der Konverter die Zeitstempel exakt mit der Bildrate des Videos multiplizieren (Frame = Sekunden × FPS). Wenn Sie ein SRT-File mit 25.000 FPS (PAL) umwandeln, Ihr Video jedoch mit 23.976 FPS (Kino/NTSC) kodiert ist, laufen Bild und Untertitel mit fortschreitender Filmdauer auseinander. Die Auswahl der passenden FPS gewährleistet perfekte Synchronität über die gesamte Filmlänge."
                },
                {
                      "question": "Was ist der Unterschied zwischen MicroDVD (.sub), SubViewer (.sub) und VobSub (.sub)?",
                      "answer": "Die Dateiendung .sub steht historisch für drei völlig unterschiedliche Technologien: MicroDVD (.sub) ist ein schlankes, Frame-basiertes Textformat ({1250}{1380}Dialog), das vor allem bei DivX/XviD-Videos genutzt wurde; SubViewer 2.0 (.sub) ist ein textbasiertes Format mit Kopfzeile [INFORMATION] und Zeitstempeln in Hundertstelsekunden (00:01:20.10,00:01:23.45); und VobSub (.sub + .idx) ist KEINE Textdatei, sondern enthält Bitmap-Grafiken direkt aus DVD-Videospuren. Unser Konverter erstellt saubere, standardisierte Text-SUB-Dateien (MicroDVD und SubViewer 2.0)."
                },
                {
                      "question": "Wie finde ich die exakte Bildfrequenz (FPS) meiner Videodatei heraus?",
                      "answer": "Die genaue Bildrate lässt sich unkompliziert ermitteln: Im VLC Media Player öffnen Sie das Video, wählen Werkzeuge > Codec-Informationen (oder Strg+J / Cmd+I), wechseln auf den Reiter Codec und lesen den Wert bei Bildwiederholrate ab (z. B. 23.976023, 24, 25 oder 29.970000). Unter Windows klicken Sie mit der rechten Maustaste auf die Datei, wählen Eigenschaften, Reiter Details und prüfen die Einzelbildrate. Auf dem Mac drücken Sie in QuickTime Cmd+I (Filminspektor). Auch das kostenlose Tool MediaInfo liefert verlässliche Werte."
                },
                {
                      "question": "Warum laufen meine konvertierten SUB-Untertitel während des Abspielens asynchron?",
                      "answer": "Wenn Untertitel synchron beginnen und im Verlauf des Videos immer weiter vor- oder nacheilen, liegt fast immer eine FPS-Diskrepanz zwischen der MicroDVD-Datei und der Videospur vor. Bei einem Film mit 23.976 FPS, der versehentlich mit 25.000 FPS konvertiert wurde, laufen die Untertitel rund 4,1 % zu schnell (ca. 2,5 Sekunden Versatz pro Minute). Prüfen Sie die tatsächliche Framerate mit VLC oder MediaInfo und konvertieren Sie die SRT-Datei erneut mit dem exakten FPS-Wert."
                },
                {
                      "question": "Kann ich eine SUB-Datei wieder in das SRT-Format umwandeln?",
                      "answer": "Ja. Textbasierte MicroDVD- (.sub) und SubViewer-Dateien (.sub) können problemlos wieder in SubRip (.srt) zurückgewandelt werden. Bei MicroDVD teilt man die Frame-Zahlen durch die Bildrate des Videos, um die Millisekunden-Zeitstempel wiederherzustellen: Zeit = Frame / FPS. Dies ist mit Programmen wie Subtitle Edit, Aegisub oder den Werkzeugen auf SRTConverters möglich."
                },
                {
                      "question": "Werden meine Untertiteldateien bei der Konvertierung auf einen Server hochgeladen?",
                      "answer": "Nein. SRTConverters arbeitet zu 100 % lokal in Ihrem Webbrowser mittels clientseitigem JavaScript. Ihre SRT-Dateien, Texte und erstellten SUB-Dateien verbleiben ausschließlich im flüchtigen Speicher Ihres Endgeräts. Es werden keine Daten an Server übertragen oder gespeichert."
                },
                {
                      "question": "Wie kann ich SRT per Kommandozeile mit FFmpeg in SUB umwandeln?",
                      "answer": "Mit FFmpeg wandeln Sie SRT in MicroDVD-SUB um, indem Sie den Subtitle-Codec angeben: ffmpeg -i input.srt -c:s microdvd output.sub. Um eine bestimmte Bildrate für Batch-Verarbeitungen oder Muxing zu erzwingen, ergänzen Sie den Raten-Parameter: ffmpeg -i input.srt -r 23.976 -c:s microdvd output.sub. Das eignet sich optimal für automatisierte Video-Pipelines und Shell-Skripte."
                }
          ]
    },
    "subToSrt": {
          "id": "sub-to-srt",
          "name": "SUB in SRT Konverter",
          "shortName": "SUB in SRT",
          "badge": "Kostenlos & Clientseitig",
          "tagline": "MicroDVD & SubViewer (.SUB) Untertitel online in Standard-SubRip (.SRT) umwandeln",
          "description": "Konvertieren Sie SUB-Untertitel (MicroDVD & SubViewer) kostenlos online in sauberes SubRip (.srt)-Format. Automatische FPS-Erkennung, präzise Frame-in-Zeit-Umrechnung und 100% Browser-Datenschutz.",
          "h1": "SUB in SRT Konverter Online",
          "metaTitle": "SUB in SRT Konverter Online – SUB kostenlos in SRT umwandeln | SRTConverters",
          "metaDescription": "Konvertieren Sie SUB-Untertitel (MicroDVD & SubViewer) kostenlos online in sauberes SubRip (.srt)-Format. Automatische FPS-Erkennung, präzise Frame-in-Zeit-Umrechnung und 100% Browser-Datenschutz.",
          "settingsLabels": {
                "timingMode": "Erkanntes Format",
                "fixedDuration": "Automatische Erkennung",
                "cpsDuration": "MicroDVD ({Frame}{Frame})",
                "cpsLabel": "Video-Bildwiederholrate (FPS)",
                "cpsHint": "Wählen Sie die Bildrate Ihres Videos für eine framegenaue Untertitel-Synchronisation aus.",
                "startTime": "FPS-Header synchronisieren",
                "startTimeHint": "Liest die {1}{1}FPS-Kopfzeile aus MicroDVD-Dateien automatisch aus.",
                "maxCharsPerLine": "Formatierungs-Tags umwandeln",
                "maxCharsHint": "Wandelt {Y:i}-Tags in <i> und Pipe-Trennungen (|) in standardmäßige Zeilenumbrüche um."
          },
          "stepsTitle": "In 3 einfachen Schritten SUB online in SRT konvertieren",
          "steps": [
                {
                      "step": "1",
                      "title": "SUB-Untertitel hochladen oder einfügen",
                      "description": "Ziehen Sie Ihre .sub-Datei per Drag & Drop in das Upload-Feld oder fügen Sie Ihren MicroDVD- bzw. SubViewer-Text direkt ein."
                },
                {
                      "step": "2",
                      "title": "Video-Bildrate (FPS) überprüfen",
                      "description": "Überprüfen Sie bei MicroDVD-Dateien die Bildrate des Videos (z. B. 23.976, 24, 25 oder 29.97 FPS), damit Frames präzise in Uhrzeitwerte umgerechnet werden."
                },
                {
                      "step": "3",
                      "title": "Konvertierte SRT-Datei herunterladen",
                      "description": "Klicken Sie auf .SRT herunterladen, um Ihre Datei sofort zu speichern, oder kopieren Sie den Inhalt direkt in die Zwischenablage."
                }
          ],
          "featuresTitle": "Warum sollten Sie unseren Online SUB in SRT Konverter wählen?",
          "features": [
                {
                      "title": "100% Clientseitiger Datenschutz",
                      "description": "Ihre Untertiteldateien werden vollständig in Ihrem Webbrowser verarbeitet. Es werden keine Daten an fremde Server übertragen oder gespeichert.",
                      "icon": "shield"
                },
                {
                      "title": "Automatische MicroDVD- & SubViewer-Erkennung",
                      "description": "Erkennt framebasierte MicroDVD-Dateien, zeitbasierte SubViewer 2.0/1.0-Strukturen und integrierte {1}{1}FPS-Header automatisch.",
                      "icon": "file"
                },
                {
                      "title": "Millisekundengenaue Zeitumrechnung",
                      "description": "Berechnet exakte Zeitstempel für Kino-, PAL- und NTSC-Bildraten ohne störende Asynchronität oder Zeitdrift.",
                      "icon": "clock"
                },
                {
                      "title": "VobSub-Erkennung & Tag-Bereinigung",
                      "description": "Warnt zuverlässig vor binären DVD-VobSub-Grafiken und wandelt Pipe-Symbole (|) sowie Stil-Tags sauber in valides SRT-Markup um.",
                      "icon": "split"
                }
          ],
          "faqsTitle": "Häufig gestellte Fragen zur SUB in SRT Konvertierung",
          "faqs": [
                {
                      "question": "Was ist der Unterschied zwischen einer SUB- und einer SRT-Datei?",
                      "answer": "Das SRT-Format (SubRip) ist der moderne weltweite Standard für Textuntertitel. Jeder Untertitelblock besitzt eine fortlaufende Nummer sowie absolute Zeitstempel mit Millisekunden-Genauigkeit (00:01:23,450 --> 00:01:26,800). SRT wird nativ von modernen Mediaplayern, Streaming-Diensten (YouTube, Netflix), Smart-TVs und Schnittprogrammen (Premiere, DaVinci Resolve) unterstützt. Textbasierte SUB-Dateien—vor allem MicroDVD (.sub)—spezifizieren Untertitel hingegen über Video-Frame-Nummern ({start_frame}{end_frame}) statt über reale Uhrzeiten, sodass die korrekte Anzeige von der Bildwiederholrate (FPS) der Videodatei abhängt. SubViewer (.sub) nutzt Hundertstelsekunden. Durch die Umwandlung von SUB in SRT machen Sie Ihre Untertitel universell und zukunftssicher auf allen modernen Geräten abspielbar."
                },
                {
                      "question": "Warum muss ich beim Konvertieren von MicroDVD in SRT eine Bildrate (FPS) angeben?",
                      "answer": "MicroDVD-Dateien enthalten keine Angaben zu Stunden, Minuten oder Sekunden, sondern lediglich die konkreten Bildnummern, bei denen ein Untertitel ein- und ausgeblendet werden soll (z. B. {1200}{1350}Textzeile). Um diese Framenummern in reale SRT-Millisekunden umzurechnen, benötigt der Konverter die genaue Abspielgeschwindigkeit Ihres Videos nach der Formel: Millisekunden = Runden((Framenummer / Video-FPS) × 1000). Wenn Sie eine Datei mit 25 FPS (PAL) umwandeln, der Film aber mit 23.976 FPS (Kino/NTSC) läuft, laufen Bild und Text um ca. 2,5 Sekunden pro Minute auseinander. Die passende FPS-Einstellung stellt sicher, dass der Ton und die Untertitel bis zur letzten Sekunde synchron bleiben."
                },
                {
                      "question": "Worin unterscheiden sich MicroDVD (.sub), SubViewer (.sub) und VobSub (.sub)?",
                      "answer": "Unter der Dateiendung .sub existieren historisch drei grundverschiedene Untertitelformate: 1. MicroDVD (.sub) ist ein einfaches Textformat mit geschweiften Klammern und Framenummern ({start}{ende}Zeile1|Zeile2), das in der Ära von DivX und XviD sehr populär war; 2. SubViewer (.sub) ist ein Textformat mit Header ([INFORMATION]) und Zeitstempeln in Hundertstelsekunden (00:01:20.50,00:01:23.80) sowie [br]-Zeilenumbrüchen; 3. VobSub (.sub + .idx) ist ein binäres Containerformat, das gerenderte Bitmap-Grafiken aus DVD-Videospuren enthält. Unser Tool konvertiert die textbasierten Formate MicroDVD und SubViewer und weist Sie sofort darauf hin, falls Sie eine binäre VobSub-Grafikdatei hochladen."
                },
                {
                      "question": "Wie finde ich die richtige Bildwiederholrate (FPS) meiner Videodatei heraus?",
                      "answer": "Sie können die exakte Bildrate Ihres Videos ganz einfach mit gängigen Mediaplayern ermitteln: Öffnen Sie das Video im VLC Media Player, wählen Sie Werkzeuge > Codec-Informationen (oder drücken Sie Strg+J / Cmd+I), klicken Sie auf die Registerkarte Codec und prüfen Sie den Wert bei 'Bildwiederholrate' (z. B. 23.976023, 24, 25 oder 29.970000). Unter Windows können Sie die Datei mit der rechten Maustaste anklicken, Eigenschaften wählen und im Reiter Details den Eintrag 'Einzelbildrate' einsehen. Auf dem Mac drücken Sie im QuickTime Player Cmd+I, um die Filminformationen zu öffnen. Alternativ liefert das kostenlose Tool MediaInfo detaillierte technische Angaben."
                },
                {
                      "question": "Warum geraten meine konvertierten SRT-Untertitel beim Abspielen aus dem Takt?",
                      "answer": "Eine allmähliche Asynchronität—bei der die Untertitel am Anfang synchron sind, sich dann aber kontinuierlich nach vorne oder hinten verschieben—wird fast immer durch eine falsche FPS-Auswahl bei der Konvertierung hervorgerufen. Wird ein Film mit 23.976 FPS mit einer 25.000 FPS-Einstellung umgerechnet, laufen die Untertitel etwa 4,1% schneller als die Tonspur, was schon nach wenigen Minuten zu deutlichen Abweichungen führt. Ermitteln Sie die exakte Bildrate in VLC oder MediaInfo, wählen Sie denselben Wert in unserem Konverter und wandeln Sie die Datei erneut um. Enthält die MicroDVD-Datei eine Kopfzeile wie `{1}{1}FPS`, übernimmt unser Tool diesen Wert automatisch."
                },
                {
                      "question": "Kann dieser Konverter binäre VobSub-Dateien (.sub) von DVDs verarbeiten?",
                      "answer": "Nein. VobSub-Dateien (.sub) sind keine reinen Textdateien, sondern gepackte Binärdateien mit gerenderten Bitmap-Bildern der DVD-Untertitel. Da es sich um pixelbasierte Bilder und nicht um Textzeichen handelt, erfordert die Konvertierung in SRT eine OCR-Texterkennungssoftware (Optical Character Recognition), die jedes Bild analysiert und in Buchstaben umwandelt. Wenn Sie eine VobSub-Binärdatei hochladen, erkennt unser Tool dies sofort und empfiehlt Ihnen spezialisierte Desktop-Programme wie Subtitle Edit, BDSup2Sub oder OCR-SubRip."
                },
                {
                      "question": "Werden meine Untertitel während der Umwandlung auf einen Server hochgeladen?",
                      "answer": "Nein. SRTConverters läuft zu 100% lokal in Ihrem Webbrowser mithilfe moderner JavaScript-Technologien. Ihre Untertiteldateien, Texteingaben und generierten SRT-Dateien verlassen zu keinem Zeitpunkt Ihr Gerät. Es findet keine Datenübertragung über das Internet statt, sodass vollständige Privatsphäre, höchste Datensicherheit und sofortige Konvertierungszeiten gewährleistet sind."
                },
                {
                      "question": "Wie kann ich SUB auf der Kommandozeile mit FFmpeg in SRT umwandeln?",
                      "answer": "Mit FFmpeg lässt sich die Konvertierung von SUB in SRT bequem im Terminal durchführen. Bei zeitbasierten SubViewer-Dateien genügt der Befehl: ffmpeg -i eingabe.sub ausgabe.srt. Bei framebasierten MicroDVD-Dateien müssen Sie die Bildrate mit dem Flag -r angeben, damit FFmpeg die Zeitwerte berechnen kann: ffmpeg -r 23.976 -i eingabe.sub ausgabe.srt. Falls Umlaute oder Sonderzeichen in ANSI/Windows-1252-Kodierung vorliegen, ergänzen Sie den Parameter für den Zeichensatz: ffmpeg -sub_charenc CP1252 -r 25 -i eingabe.sub ausgabe.srt. Dies ist ideal für automatisierte Batch-Skripte."
                }
          ]
    },
    sbvToSrt: {
      "id": "sbv-to-srt",
      "name": "SBV in SRT Konverter",
      "shortName": "SBV in SRT",
      "badge": "Kostenlos & Clientseitig",
      "tagline": "YouTube Untertitel (.SBV) kostenlos online in Standard SubRip (.SRT) umwandeln",
      "description": "Konvertieren Sie YouTube SBV- und SubViewer-Untertiteldateien kostenlos online in das universelle SubRip (.srt) Format. Automatische Zeitstempel-Korrektur, HTML-Bereinigung und direkter SRT-Download.",
      "h1": "SBV in SRT Konverter Online",
      "metaTitle": "SBV in SRT Konverter Online – YouTube Untertitel in SRT Kostenlos | SRTConverters",
      "metaDescription": "Konvertieren Sie YouTube SBV- und SubViewer-Untertiteldateien kostenlos online in sauberes SubRip (.srt) Format. Automatische Zeitstempel, HTML-Bereinigung und sofortiger Download.",
      "settingsLabels": {
            "timingMode": "Bereinigungsoptionen für Untertitel",
            "fixedDuration": "HTML-Entitäten Dekodieren",
            "cpsDuration": "Wandelt &amp;, &#39;, &quot;, &lt;, &gt; in saubere Textzeichen um",
            "cpsLabel": "Geräusch-Deskriptoren Entfernen",
            "cpsHint": "Entfernt [Musik], [Applaus] und Soundeffekte aus Dialogzeilen",
            "startTime": "Leerzeichen Normalisieren",
            "startTimeHint": "Entfernt doppelte Leerzeichen und leere Untertitelzeilen"
      },
      "stepsTitle": "In 3 Schritten SBV in SRT Online Konvertieren",
      "steps": [
            {
                  "step": "1",
                  "title": "SBV-Untertitel Hochladen oder Einfügen",
                  "description": "Ziehen Sie Ihre YouTube .sbv-Datei per Drag & Drop in den Upload-Bereich oder fügen Sie den Untertiteltext direkt in das Textfeld ein."
            },
            {
                  "step": "2",
                  "title": "Bereinigungseinstellungen Konfigurieren",
                  "description": "Wählen Sie optional die HTML-Dekodierung (&amp;, &#39;) und entscheiden Sie, ob automatische Audio-Deskriptoren wie [Musik] entfernt werden sollen."
            },
            {
                  "step": "3",
                  "title": "Konvertierte SRT-Datei Herunterladen",
                  "description": "Klicken Sie auf .SRT Herunterladen, um Ihre SubRip-Datei sofort zu speichern, oder kopieren Sie den Text direkt in Ihre Zwischenablage."
            }
      ],
      "featuresTitle": "Warum Unseren Online SBV in SRT Konverter Nutzen?",
      "features": [
            {
                  "title": "Präzision auf die Millisekunde",
                  "description": "Jeder Zeitstempel wird millimetergenau beibehalten. Dezimalpunkte werden in SRT-Kommas umgewandelt und Stunden zweistellig aufgefüllt.",
                  "icon": "zap"
            },
            {
                  "title": "Automatische HTML-Dekodierung",
                  "description": "YouTube-Exporte enthalten oft HTML-Codes wie &amp; oder &#39;. Unser Tool stellt die korrekten Sonderzeichen wieder her.",
                  "icon": "layers"
            },
            {
                  "title": "Filterung von Soundeffekten",
                  "description": "Entfernen Sie automatische Textmarker wie [Musik] und [Applaus] mühelos für saubere, professionelle Dialoguntertitel.",
                  "icon": "shield"
            },
            {
                  "title": "100% Datenschutz im Browser",
                  "description": "Die gesamte Konvertierung findet lokal in Ihrem Browser statt. Ihre Dateien werden niemals auf externe Server übertragen oder gespeichert.",
                  "icon": "split"
            }
      ],
      "faqsTitle": "Häufig Gestellte Fragen zur SBV in SRT Konvertierung",
      "faqs": [
            {
                  "question": "Was ist eine SBV-Datei und wie unterscheidet sie sich von einer SRT-Datei?",
                  "answer": "Eine SBV-Datei (.sbv), auch als YouTube SubViewer-Format bekannt, ist ein einfaches Textuntertitelformat, das Google speziell für YouTube entwickelt hat. In einer SBV-Datei beginnt jeder Untertitelblock direkt mit einem durch Komma getrennten Zeitstempelpaar (z. B. 0:00:01.000,0:00:04.500) gefolgt vom Dialogtext – ohne fortlaufende Indexnummern. SubRip (.srt) hingegen ist der weltweite Standard für Mediaplayer und Schnittprogramme. Eine SRT-Datei erfordert Nummerierungen (1, 2, 3...), einen Pfeil (' --> ') mit Kommas vor den Millisekunden (00:00:01,000 --> 00:00:04,500) und zweistellige Stundenangaben. Die Konvertierung von SBV in SRT ermöglicht die Nutzung von YouTube-Untertiteln in Premiere Pro, DaVinci Resolve, VLC und Plex."
            },
            {
                  "question": "Warum exportiert YouTube Studio Untertitel im .sbv-Format anstelle von .srt?",
                  "answer": "YouTube entschied sich bei der Einführung seiner automatischen Spracherkennung für die schlanke SubViewer-Variante (.sbv), da diese ohne Indexzeilen auskommt und Start- und Endzeit mit einem einfachen Komma trennt. Da jedoch professionelle Schnittprogramme und Smart-TVs das .sbv-Format meist nicht unterstützen, ist eine Umwandlung in das universelle .srt-Format erforderlich."
            },
            {
                  "question": "Wie lade ich eine SBV-Untertiteldatei aus YouTube Studio herunter?",
                  "answer": "So laden Sie Ihre Untertitel herunter: (1) Melden Sie sich in YouTube Studio an und wählen Sie links 'Untertitel'. (2) Klicken Sie auf das gewünschte Video. (3) Klicken Sie neben der gewünschten Untertitelspur auf das Drei-Punkte-Menü (Optionen) und wählen Sie 'Herunterladen'. (4) Wählen Sie '.sbv' (oder SubViewer). YouTube lädt eine Datei namens 'captions.sbv' herunter, die Sie direkt in unseren Konverter einfügen können."
            },
            {
                  "question": "Wie unterscheiden sich SBV-Zeitstempel von SubRip SRT-Zeitstempeln?",
                  "answer": "SBV-Zeitstempel verwenden ein einzelnes Komma zwischen Start- und Endzeit sowie Punkte vor den Millisekunden, oft mit einstelligen Stunden: '0:01:23.450,0:01:27.800'. SubRip SRT verlangt einen Pfeil mit Leerzeichen (' --> '), Kommas vor Millisekunden und strikt zweistellige Stunden: '00:01:23,450 --> 00:01:27,800'. Zudem benötigt SRT eine Zeilennummer über jedem Block. Unser Konverter führt diese Anpassungen automatisch durch."
            },
            {
                  "question": "Warum enthält meine YouTube SBV-Datei Codes wie &amp; und &#39;?",
                  "answer": "YouTube kodiert Sonderzeichen als HTML-Entitäten, um eine fehlerfreie Webanzeige zu gewährleisten. So wird das Und-Zeichen als '&amp;' und Apostrophe als '&#39;' exportiert. In Videoschnittprogrammen oder im VLC-Player werden diese Codes buchstabengetreu angezeigt, was unschön aussieht. Unser Tool dekodiert alle HTML-Entitäten automatisch in die korrekten Satzzeichen."
            },
            {
                  "question": "Kann ich die konvertierten SRT-Untertitel in Premiere Pro, DaVinci Resolve und Final Cut Pro importieren?",
                  "answer": "Ja. Das SubRip (.srt)-Format wird von sämtlichen professionellen Videoschnittprogrammen wie Adobe Premiere Pro, DaVinci Resolve, Apple Final Cut Pro, Avid und CapCut nativ unterstützt. Ziehen Sie die fertige .srt-Datei nach der Konvertierung einfach in Ihre Timeline."
            },
            {
                  "question": "Werden meine Untertiteldateien während der Konvertierung auf einen Server hochgeladen?",
                  "answer": "Nein. SRTConverters arbeitet vollständig lokal in Ihrem Webbrowser mittels JavaScript. Ihre Untertiteldaten verlassen Ihren Computer zu keinem Zeitpunkt, was absolute Datensicherheit garantiert."
            },
            {
                  "question": "Wie kann ich SBV in SRT über die Kommandozeile mit Python oder FFmpeg konvertieren?",
                  "answer": "Mit FFmpeg gelingt dies über den Befehl: 'ffmpeg -i input.sbv -c:s srt output.srt'. In Python können Sie die Datei zeilenweise parsen, die Zeitstempel am Komma trennen und die SRT-Nummerierung hinzufügen. Unser Webtool erledigt dies ohne Software-Installationen sofort im Browser."
            }
      ]
}
  },
  "id": {
    "directory": {
      "title": "Semua Alat Konversi Subtitle & SRT",
      "subtitle": "Alat konverter subtitle gratis berbasis browser. Tanpa instalasi, tanpa unggah ke server, 100% privat.",
      "metaTitle": "Alat Subtitle & SRT Gratis | SRTConverters",
      "metaDescription": "Jelajahi rangkaian alat subtitle online gratis kami. Konversi TXT ke SRT, SRT ke Teks, SRT ke VTT, dan VTT ke SRT dengan aman.",
      "convertersCategory": "Konverter Subtitle",
      "utilitiesCategory": "Utilitas Subtitle",
      "openTool": "Buka Alat",
      "clientSideBadge": "100% Berbasis Browser"
    },
    "txtToSrt": {
      "id": "txt-to-srt",
      "name": "Konverter TXT ke SRT",
      "shortName": "TXT ke SRT",
      "badge": "Gratis & Berbasis Browser",
      "tagline": "Ubah Teks Polos & Transkrip Menjadi File Subtitle SubRip (.SRT) yang Tersinkronisasi",
      "description": "Ubah transkrip dan teks lagu menjadi subtitle SRT berformat rapi dengan kecepatan baca dan pemisahan baris otomatis.",
      "h1": "Konverter TXT ke SRT",
      "metaTitle": "Konverter TXT ke SRT – Ubah Teks ke Subtitle Gratis Online | SRTConverters",
      "metaDescription": "Konversi transkrip teks (TXT) ke file subtitle SRT gratis online. Kecepatan baca kustom dan privasi 100% di browser.",
      "settingsLabels": {
        "timingMode": "Mode Perhitungan Waktu",
        "cpsLabel": "Kecepatan Membaca (CPS)",
        "cpsHint": "Karakter per detik (15-20 optimal untuk kenyamanan)",
        "maxCharsPerLine": "Karakter Maksimal per Baris",
        "maxCharsHint": "Disarankan 37-42 karakter untuk video dan media sosial",
        "splitMode": "Strategi Pemisahan Teks",
        "splitSentence": "Pisahkan berdasarkan Kalimat & Tanda Baca",
        "splitParagraph": "Pisahkan berdasarkan Paragraf",
        "splitLine": "Pisahkan berdasarkan Baris Baru",
        "gapBetweenSubtitles": "Jeda Antar Subtitle (ms)",
        "gapHint": "Jeda antar subtitle berturutan (cth. 100ms)"
      },
      "stepsTitle": "Cara Mengonversi Teks ke Subtitle SRT dalam 3 Langkah Mudah",
      "steps": [
        {
          "step": "1",
          "title": "Tempel Teks atau Unggah File",
          "description": "Ketik atau tempel transkrip ke kotak input, atau seret dan lepas file .txt secara langsung."
        },
        {
          "step": "2",
          "title": "Konfigurasi Waktu Subtitle",
          "description": "Sesuaikan kecepatan membaca (CPS), karakter maksimum per baris, dan opsi pemisahan."
        },
        {
          "step": "3",
          "title": "Pratinjau & Unduh .SRT",
          "description": "Periksa hasil subtitle di pratinjau langsung, salin ke papan klip, atau unduh file .srt secara instan."
        }
      ],
      "featuresTitle": "Mengapa Menggunakan Konverter TXT ke SRT Kami?",
      "features": [
        {
          "title": "100% Privat & di Browser",
          "description": "Tidak ada teks atau file yang diunggah ke server. Semua konversi berjalan aman di browser Anda.",
          "icon": "shield"
        },
        {
          "title": "Pemisahan Tanda Baca Cerdas",
          "description": "Memecah blok teks panjang pada titik, koma, dan tanda tanya untuk kenyamanan membaca.",
          "icon": "split"
        },
        {
          "title": "Perhitungan Waktu CPS Cerdas",
          "description": "Menghitung durasi tayang subtitle berdasarkan jumlah karakter dan kecepatan baca alami.",
          "icon": "clock"
        },
        {
          "title": "Format SRT Standar",
          "description": "Menghasilkan file SubRip yang kompatibel dengan YouTube, Premiere Pro, DaVinci Resolve, dan VLC.",
          "icon": "file"
        }
      ],
      "faqsTitle": "Pertanyaan yang Sering Diajukan",
      "faqs": [
        {
          "question": "Format apa yang harus dimiliki file TXT saya sebelum dikonversi ke SRT?",
          "answer": "File TXT Anda harus berisi teks polos tanpa format teks kaya. Untuk pemformatan subtitle terbaik, susun transkrip TXT Anda agar setiap kalimat atau dialog berada di barisnya sendiri, atau pisahkan pemikiran dengan jeda paragraf. Menjaga segmen berukuran pas membantu konverter menghitung timing subtitle yang akurat."
        },
        {
          "question": "Bisakah file TXT berisi stempel waktu untuk konversi SRT?",
          "answer": "Meskipun file TXT standar biasanya berupa transkrip teks polos tanpa kode waktu, beberapa transkrip ekspor sudah menyertakan stempel waktu kasar. Jika file TXT Anda berisi waktu, konverter biasa mungkin menganggapnya sebagai dialog. Konverter kami menghitung timing subtitle secara otomatis dari teks polos."
        },
        {
          "question": "Format stempel waktu apa yang digunakan file SRT?",
          "answer": "File SRT standar menggunakan nomor urut yang diikuti oleh stempel waktu berformat 00:00:01,000 --> 00:00:04,000 (jam:menit:detik,milidetik). Standar SubRip mewajibkan tanda koma sebelum milidetik, berbeda dengan WebVTT yang menggunakan titik. Alat kami secara otomatis menghasilkan format stempel waktu SRT standar."
        },
        {
          "question": "Berapa banyak karakter yang harus dimuat dalam subtitle SRT?",
          "answer": "Untuk kenyamanan membaca, panduan subtitling profesional menyarankan antara 37 hingga 42 karakter per baris, dengan maksimal dua baris per subtitle (sekitar 70 hingga 84 karakter total). Ini bukan aturan mutlak: video ponsel umumnya membutuhkan baris lebih pendek, sedangkan layar komputer dapat menampung kalimat lebih panjang."
        },
        {
          "question": "Bisakah saya mengonversi transkrip TXT dengan banyak paragraf menjadi subtitle SRT?",
          "answer": "Ya! Anda dapat mengonversi transkrip TXT yang berisi banyak paragraf menjadi subtitle SRT yang tersinkronisasi. Jeda paragraf berfungsi sebagai indikator jeda alami dalam segmentasi. Memilih mode pemisahan paragraf atau kalimat memastikan teks panjang dipecah menjadi subtitle yang nyaman dibaca."
        },
        {
          "question": "Mengapa file SRT hasil konversi saya menampilkan karakter aneh atau rusak?",
          "answer": "Karakter rusak biasanya terjadi karena ketidakcocokan pengkodean karakter. Jika file TXT sumber Anda berisi huruf beraksen, simbol, atau karakter non-Latin, pastikan file disimpan dalam pengkodean UTF-8. Konverter berbasis browser kami memproses file dalam UTF-8 standar agar seluruh karakter tersimpan sempurna."
        },
        {
          "question": "Bisakah saya menggunakan tanda baca dan baris baru untuk mengatur pemotongan subtitle SRT?",
          "answer": "Tentu saja. Tanda baca (titik, koma, tanda tanya) dan jeda baris yang disengaja memberikan petunjuk penting untuk pemisahan subtitle. Saat menggunakan mode pemisahan kalimat, konverter memotong transkrip TXT pada jeda tata bahasa alami, menghasilkan subtitle SRT yang mudah dipahami penonton."
        },
        {
          "question": "Bisakah saya menggunakan konverter TXT ke SRT untuk subtitle YouTube?",
          "answer": "Ya, SRT adalah format subtitle yang didukung luas di YouTube, Vimeo, Facebook, dan Instagram. Setelah mengonversi transkrip TXT menjadi file SRT, Anda dapat mengunggah file .srt langsung ke YouTube Studio. Karena estimasi waktu dihitung dari kecepatan baca, selalu periksa sinkronisasi dengan video asli sebelum dipublikasikan."
        }
      ]
    },
    "srtToText": {
      "id": "srt-to-text",
      "name": "Konverter SRT ke Teks",
      "shortName": "SRT ke Teks",
      "badge": "Gratis & Cepat",
      "tagline": "Ekstrak Teks Polos Bersih dan Transkrip dari Subtitle SubRip (.SRT)",
      "description": "Hapus stempel waktu, nomor urut, dan tag HTML dari file .srt untuk menghasilkan teks yang bersih.",
      "h1": "Konverter SRT ke Teks",
      "metaTitle": "Konverter SRT ke Teks – Ekstrak Teks dari Subtitle Gratis | SRTConverters",
      "metaDescription": "Ekstrak teks bersih dari file subtitle SRT. Hapus stempel waktu dan nomor urut dengan privasi 100% di browser.",
      "settingsLabels": {
        "stripTimestamps": "Hapus Stempel Waktu",
        "stripLineNumbers": "Hapus Nomor Baris",
        "joinParagraphs": "Gabungkan menjadi Paragraf"
      },
      "stepsTitle": "Cara Mengonversi Subtitle SRT ke Teks Polos",
      "steps": [
        {
          "step": "1",
          "title": "Unggah File SRT atau Tempel Teks",
          "description": "Letakkan file .srt Anda atau tempel teks subtitle."
        },
        {
          "step": "2",
          "title": "Pilih Opsi Pembersihan",
          "description": "Pilih apakah ingin menghapus stempel waktu, nomor, dan menggabungkan paragraf."
        },
        {
          "step": "3",
          "title": "Salin atau Unduh Teks Bersih",
          "description": "Salin transkrip bersih ke papan klip atau unduh sebagai file .txt."
        }
      ],
      "featuresTitle": "Manfaat Konversi SRT ke Teks",
      "features": [
        {
          "title": "Ekstraksi Teks Bersih",
          "description": "Menghapus semua stempel waktu, nomor urut, dan tag HTML secara otomatis.",
          "icon": "clean"
        },
        {
          "title": "Penggabungan Paragraf",
          "description": "Menggabungkan fragmen subtitle menjadi paragraf utuh untuk ringkasan atau artikel.",
          "icon": "text"
        },
        {
          "title": "Instan & Privat",
          "description": "Pemrosesan lokal di browser tanpa batas ukuran file atau unggah ke server.",
          "icon": "lock"
        }
      ],
      "faqsTitle": "Pertanyaan yang Sering Diajukan",
      "faqs": [
        {
          "question": "Bagaimana cara mengubah file SRT ke TXT?",
          "answer": "Untuk mengubah file SRT ke TXT, tempel teks subtitle atau unggah file .srt ke konverter online gratis kami. Alat ini secara otomatis menghapus nomor urut dan header stempel waktu, menyisakan teks dialog yang bersih. Anda dapat mengatur opsi untuk mempertahankan stempel waktu atau menggabungkan kalimat menjadi paragraf utuh, lalu menyalin atau mengunduh hasilnya sebagai file .txt."
        },
        {
          "question": "Bisakah saya mengubah SRT ke TXT online secara gratis?",
          "answer": "Ya! SRTConverters.com 100% gratis tanpa pendaftaran, batasan penggunaan, watermark, atau biaya langganan. Semua pemrosesan berlangsung di browser Anda melalui JavaScript, sehingga naskah dan transkrip Anda tidak pernah dikirim ke server luar."
        },
        {
          "question": "Apa yang terjadi pada stempel waktu saat konversi SRT ke TXT?",
          "answer": "Secara default, seluruh rentang stempel waktu milidetik (seperti '00:00:01,000 --> 00:00:04,500') dihapus sepenuhnya saat konversi. Ini menghasilkan teks bacaan yang rapi dan nyaman dibaca untuk artikel blog, rangkuman, catatan kuliah, atau input AI."
        },
        {
          "question": "Bisakah saya mengubah SRT ke TXT dengan mempertahankan stempel waktu?",
          "answer": "Bisa. Pada panel pengaturan konverter kami, cukup hilangkan tanda centang pada opsi 'Hapus Stempel Waktu'. Alat akan mempertahankan waktu awal dan akhir di atas setiap baris dialog, sangat cocok untuk panduan referensi edit video atau arsip hukum."
        },
        {
          "question": "Apa perbedaan antara file SRT dan file TXT?",
          "answer": "File SRT (SubRip) adalah format subtitle khusus berisi blok bernomor dan stempel waktu presisi yang memberi tahu pemutar video kapan menampilkan teks. File TXT adalah teks biasa tanpa kode waktu, dirancang untuk membaca dan mengetik dokumen biasa."
        },
        {
          "question": "Bagaimana cara menghapus stempel waktu dari file SRT?",
          "answer": "Cara tercepat adalah menggunakan konverter online kami. Daripada menghapus baris stempel waktu satu per satu secara manual di Notepad, cukup unggah file .srt Anda, dan alat kami akan menghapus semua waktu dan nomor blok seketika."
        },
        {
          "question": "Bisakah saya mengubah file subtitle SRT menjadi transkrip?",
          "answer": "Ya, mengubah SRT ke TXT adalah cara standar untuk menyulap subtitle video menjadi transkrip yang nyaman dibaca. Anda dapat mengaktifkan opsi 'Gabung Menjadi Paragraf' untuk menyatukan potongan subtitle menjadi paragraf mengalir untuk blog atau catatan belajar."
        },
        {
          "question": "Mengapa file TXT hasil konversi memuat kalimat berulang?",
          "answer": "Kalimat berulang biasanya terjadi jika file SRT asli berasal dari subtitle siaran langsung atau pengenalan suara otomatis yang mengulang frasa sebelumnya untuk kenyamanan visual. Anda dapat dengan mudah mencari dan menghapus teks duplikat di aplikasi pengolah kata."
        },
        {
          "question": "Bisakah saya membuka file SRT sebagai teks biasa?",
          "answer": "Bisa, file SRT pada dasarnya adalah file teks biasa dengan format khusus. Anda dapat membukanya di Notepad atau TextEdit, namun semua kode waktu akan tetap terlihat. Mengonversinya dengan alat kami mengekstrak teks dialognya saja tanpa kode teknis."
        },
        {
          "question": "Apakah konversi SRT ke TXT mendukung subtitle berbagai bahasa?",
          "answer": "Ya, konverter kami mendukung standar pengkodean UTF-8 secara penuh. Konverter memproses huruf beraksen (Spanyol, Prancis, Jerman, Portugis), abjad non-Latin (Sirilik, Yunani, Arab, Ibrani), karakter Asia (Mandarin, Jepang, Korea), serta simbol khusus tanpa kendala."
        }
      ]
    },
    "srtToVtt": {
      "id": "srt-to-vtt",
      "name": "Konverter SRT ke VTT",
      "shortName": "SRT ke VTT",
      "badge": "Siap WebVTT",
      "tagline": "Konversi Subtitle SubRip (.SRT) ke Format Modern HTML5 WebVTT (.VTT)",
      "description": "Konversi subtitle SRT standar ke format WebVTT modern untuk pemutar video HTML5 dan browser web.",
      "h1": "Konverter SRT ke VTT",
      "metaTitle": "Konverter SRT ke VTT – Ubah Subtitle ke WebVTT Gratis | SRTConverters",
      "metaDescription": "Konversi subtitle SubRip (.srt) ke format WebVTT (.vtt) online. Cocok untuk tag video HTML5 dan streaming web.",
      "settingsLabels": {},
      "stepsTitle": "Cara Mengonversi SRT ke WebVTT dalam 3 Langkah",
      "steps": [
        {
          "step": "1",
          "title": "Unggah File SRT",
          "description": "Tempel teks subtitle SRT atau unggah file .srt."
        },
        {
          "step": "2",
          "title": "Pemformatan WebVTT Instan",
          "description": "Menambahkan header WEBVTT dan mengubah koma waktu menjadi titik desimal."
        },
        {
          "step": "3",
          "title": "Unduh File .VTT",
          "description": "Unduh file subtitle .vtt yang siap digunakan untuk web."
        }
      ],
      "featuresTitle": "Mengapa Mengonversi SRT ke WebVTT?",
      "features": [
        {
          "title": "Siap untuk Video HTML5",
          "description": "WebVTT adalah standar resmi W3C untuk subtitle pada browser dan tag <track>.",
          "icon": "globe"
        },
        {
          "title": "Konversi Kode Waktu Akurat",
          "description": "Mengonversi pemisah koma milidetik menjadi pemisah titik yang diwajibkan WebVTT.",
          "icon": "check"
        }
      ],
      "faqsTitle": "Pertanyaan yang Sering Diajukan",
      "faqs": [
        {
          "question": "Bagaimana cara mengubah file SRT ke VTT?",
          "answer": "Untuk mengubah file SRT ke VTT, tempel teks subtitle SubRip atau unggah file .srt ke konverter online gratis kami. Alat ini otomatis menyisipkan header wajib WEBVTT dan mengubah seluruh koma pada stempel waktu (00:00:01,000) menjadi titik desimal standar WebVTT (00:00:01.000). Anda dapat langsung menyalin hasilnya atau mengunduh file .vtt yang siap digunakan pada pemutar video HTML5."
        },
        {
          "question": "Bisakah saya mengubah SRT ke VTT secara online dan gratis?",
          "answer": "Ya! SRTConverters.com 100% gratis tanpa pendaftaran, batasan file, atau watermark. Semua konversi berjalan langsung di browser Anda melalui JavaScript, menjamin privasi penuh karena file dan naskah subtitle Anda tidak pernah diunggah ke server eksternal."
        },
        {
          "question": "Bisakah saya hanya mengganti ekstensi file .srt menjadi .vtt?",
          "answer": "Tidak. Sekadar mengganti nama ekstensi file di komputer akan membuat pemutar video web gagal menampilkan subtitle. Mengganti nama tidak menambahkan header 'WEBVTT' pada baris pertama dan tidak mengubah koma waktu menjadi titik desimal. Anda wajib mengonversi sintaksnya dengan alat kami."
        },
        {
          "question": "Apa perbedaan antara format SRT dan VTT?",
          "answer": "SubRip (.srt) adalah format lawas untuk aplikasi desktop dan pengeditan video. WebVTT (.vtt) adalah standar web resmi W3C untuk elemen <video> HTML5. WebVTT diawali dengan header wajib 'WEBVTT', menggunakan titik desimal untuk milidetik, serta mendukung penataan gaya CSS (::cue) dan posisi teks di layar."
        },
        {
          "question": "Bagaimana cara mengubah SRT ke VTT menggunakan FFmpeg?",
          "answer": "Untuk mengubah file SRT ke WebVTT melalui baris perintah FFmpeg, jalankan: `ffmpeg -i input.srt output.vtt`. FFmpeg membaca file SubRip dan otomatis menghasilkan file WebVTT yang valid. Jika ingin konversi cepat tanpa menginstal aplikasi, konverter online kami memberikan hasil yang sama secara instan."
        },
        {
          "question": "Mengapa file VTT saya tidak muncul di browser web?",
          "answer": "Jika subtitle tidak tampil, periksa tiga hal penting: (1) Pastikan file diawali kata 'WEBVTT' pada baris pertama, (2) Stempel waktu wajib memakai titik (00:00:01.000) bukan koma, dan (3) Server web harus mengirim header MIME Content-Type: text/vtt; charset=utf-8 dengan izin CORS yang benar."
        },
        {
          "question": "Apakah konversi SRT ke VTT mengubah sinkronisasi waktu?",
          "answer": "Tidak. Konversi format mempertahankan waktu mulai dan selesai setiap baris subtitle secara presisi. Hanya karakter pemisah milidetik yang disesuaikan dari koma menjadi titik desimal (misalnya '00:01:23,456' menjadi '00:01:23.456'). Sinkronisasi dengan video Anda tetap 100% akurat."
        },
        {
          "question": "Apakah konverter SRT ke VTT mempertahankan teks dialog?",
          "answer": "Ya. Seluruh kalimat dialog, penanda nama pembicara, dan tag format dasar (seperti <i> untuk huruf miring dan <b> untuk huruf tebal) dipertahankan sepenuhnya. WebVTT mendukung format ini secara standar."
        },
        {
          "question": "Mengapa subtitle VTT memerlukan header WEBVTT?",
          "answer": "Spesifikasi resmi W3C mewajibkan setiap file WebVTT valid diawali teks 'WEBVTT' pada baris pertama sebagai identitas format. Browser web memeriksa identitas ini terlebih dahulu sebelum memproses dan menampilkan baris subtitle ke layar."
        },
        {
          "question": "Format mana yang harus saya gunakan untuk video HTML5: SRT atau VTT?",
          "answer": "Anda harus selalu menggunakan WebVTT (.vtt) untuk video HTML5. Browser web modern mendukung WebVTT secara bawaan melalui elemen <track> tanpa butuh pustaka JavaScript tambahan. Format SRT tidak didukung langsung oleh browser web."
        }
      ]
    },
    "vttToSrt": {
      "id": "vtt-to-srt",
      "name": "Konverter VTT ke SRT",
      "shortName": "VTT ke SRT",
      "badge": "SubRip Universal",
      "tagline": "Konversi Subtitle WebVTT (.VTT) Menjadi File Standar SubRip (.SRT)",
      "description": "Ubah file WebVTT menjadi file universal SubRip (.srt) yang kompatibel dengan semua editor video.",
      "h1": "Konverter VTT ke SRT",
      "metaTitle": "Konverter VTT ke SRT – Ubah WebVTT ke SubRip Gratis | SRTConverters",
      "metaDescription": "Konversi file subtitle WebVTT (.vtt) ke format SubRip (.srt) gratis online dengan privasi 100% di browser.",
      "settingsLabels": {},
      "stepsTitle": "Cara Mengonversi WebVTT ke SRT dalam 3 Langkah",
      "steps": [
        {
          "step": "1",
          "title": "Unggah File WebVTT",
          "description": "Tempel subtitle WebVTT Anda atau seret file .vtt."
        },
        {
          "step": "2",
          "title": "Konversi Otomatis ke SRT",
          "description": "Membersihkan tag WEBVTT, memberi nomor urut pada setiap cue, dan mengubah titik menjadi koma.",
          "icon": "file"
        },
        {
          "step": "3",
          "title": "Unduh File SubRip .SRT",
          "description": "Simpan file subtitle .srt universal Anda untuk Premiere, DaVinci, atau VLC."
        }
      ],
      "featuresTitle": "Mengapa Mengonversi VTT ke SRT?",
      "features": [
        {
          "title": "Kompatibilitas Editor Video Universal",
          "description": "SRT didukung di Adobe Premiere, DaVinci Resolve, Final Cut Pro, dan pemutar VLC.",
          "icon": "video"
        },
        {
          "title": "Penomoran Urut Otomatis",
          "description": "Memasukkan penomoran berurutan 1, 2, 3... secara otomatis sesuai standar SubRip.",
          "icon": "list"
        }
      ],
      "faqsTitle": "Pertanyaan yang Sering Diajukan",
      "faqs": [
        {
          "question": "Bagaimana cara mengubah file VTT ke SRT?",
          "answer": "Untuk mengubah VTT ke SRT, tempel teks subtitle WebVTT atau unggah file .vtt ke konverter online gratis kami. Alat ini otomatis menghapus header WEBVTT, mengubah seluruh titik desimal milidetik (00:00:01.000) menjadi koma (00:00:01,000), dan menyisipkan penomoran urut wajib (1, 2, 3...). Anda dapat langsung menyalin hasilnya atau mengunduh file .srt siap pakai."
        },
        {
          "question": "Bisakah saya mengubah VTT ke SRT secara online dan gratis?",
          "answer": "Ya! SRTConverters.com 100% gratis tanpa pendaftaran, batasan ukuran file, atau watermark. Seluruh pemrosesan berjalan lokal di browser Anda via JavaScript, memastikan privasi penuh untuk file subtitle dan naskah video Anda."
        },
        {
          "question": "Bisakah saya hanya mengganti ekstensi file .vtt menjadi .srt?",
          "answer": "Tidak. Sekadar mengganti nama ekstensi file di komputer akan membuat software editor video dan pemutar media menolak file tersebut. Mengganti nama tidak menambahkan nomor urut wajib pada setiap blok, tidak mengubah titik waktu menjadi koma, dan tidak menghapus header WEBVTT. Anda wajib mengonversi sintaksnya dengan alat kami."
        },
        {
          "question": "Apa perbedaan antara format VTT dan SRT?",
          "answer": "WebVTT (.vtt) adalah standar web resmi W3C untuk video HTML5 dengan header 'WEBVTT', stempel waktu berbasis titik (00:00:01.500), serta dukungan CSS. SubRip (.srt) adalah format standar untuk software editing desktop dan pemutar media yang mewajibkan nomor urut dan pemisah waktu berupa koma (00:00:01,500)."
        },
        {
          "question": "Bagaimana cara mengubah VTT ke SRT menggunakan FFmpeg?",
          "answer": "Untuk mengubah file WebVTT ke format SubRip via terminal FFmpeg, jalankan: `ffmpeg -i input.vtt output.srt`. FFmpeg membaca file WebVTT dan otomatis menghasilkan file .srt yang valid. Jika ingin konversi cepat tanpa aplikasi terminal, konverter online kami memberikan hasil yang sama secara instan."
        },
        {
          "question": "Apakah konversi VTT ke SRT mengubah waktu subtitle?",
          "answer": "Tidak. Konversi format mempertahankan waktu mulai dan selesai setiap baris subtitle secara presisi. Hanya karakter pemisah milidetik yang diubah dari titik menjadi koma (misalnya '00:01:23.456' menjadi '00:01:23,456'). Sinkronisasi dengan video Anda tetap 100% akurat."
        },
        {
          "question": "Apa yang terjadi pada gaya dan posisi WebVTT saat diubah ke SRT?",
          "answer": "Karena format SubRip standar tidak mendukung gaya CSS atau koordinat posisi layar (seperti line:X% atau align:start), atribut khusus web tersebut akan dibersihkan selama konversi. Tag dasar huruf tebal dan miring (<b>, <i>) tetap dipertahankan, dan teks ditampilkan di posisi tengah bawah standar."
        },
        {
          "question": "Mengapa file SRT hasil konversi tidak bisa dibuka di pemutar video?",
          "answer": "Jika file SRT gagal dibuka, penyebab paling umum adalah tidak adanya nomor urut (1, 2, 3...) atau stempel waktu masih memakai titik alih-alih koma. Menggunakan konverter online kami memastikan setiap blok memiliki nomor urut dan stempel waktu yang valid sesuai standar SubRip."
        },
        {
          "question": "Apakah konversi VTT ke SRT mempertahankan teks dan baris baru?",
          "answer": "Ya. Seluruh isi percakapan, nama pembicara, tanda baca, dan pemisahan dua baris pada subtitle dipertahankan sepenuhnya dalam file SRT hasil konversi."
        },
        {
          "question": "Mengapa file SRT memakai koma bukan titik pada stempel waktu?",
          "answer": "Format SubRip (.srt) pertama kali dikembangkan di Prancis pada akhir era 1990-an. Di Eropa daratan, koma adalah pemisah desimal resmi. Oleh sebab itu, spesifikasi SubRip menetapkan koma untuk milidetik (00:00:01,500), sedangkan WebVTT menggunakan titik desimal untuk standar web global."
        }
      ]
    },
    "srtToAss": {
      "id": "srt-to-ass",
      "name": "Konverter SRT ke ASS",
      "shortName": "SRT ke ASS",
      "badge": "Mendukung ASS v4+",
      "tagline": "Konversi Subtitle SubRip (.SRT) ke Format Advanced SubStation Alpha (.ASS)",
      "description": "Ubah subtitle SRT biasa menjadi format Advanced SubStation Alpha (.ass) dengan tipografi kustom, warna, border, dan koordinat posisi untuk Aegisub dan pemutar media.",
      "h1": "Konverter SRT ke ASS",
      "metaTitle": "Konverter SRT ke ASS – Ubah Subtitle ke ASS Online Gratis | SRTConverters",
      "metaDescription": "Konversi subtitle SubRip (.srt) ke format Advanced SubStation Alpha (.ass) secara online dan gratis. Gaya font kustom, warna, posisi, dan 100% privasi browser.",
      "settingsLabels": {},
      "stepsTitle": "Cara Konversi SRT ke ASS dalam 3 Langkah Mudah",
      "steps": [
        {
          "step": "1",
          "title": "Unggah atau Tempel Subtitle SRT",
          "description": "Tarik dan lepas file .srt Anda ke area unggah atau tempel teks dialog subtitle langsung ke editor."
        },
        {
          "step": "2",
          "title": "Pemformatan ASS v4.00+ Instan",
          "description": "Mesin konverter menghitung waktu dalam seperseratus detik, menyesuaikan tag, dan menghasilkan header ASS standar."
        },
        {
          "step": "3",
          "title": "Unduh File .ASS",
          "description": "Salin kode subtitle atau unduh file .ass yang siap digunakan di Aegisub, VLC, MPV, atau software editing."
        }
      ],
      "featuresTitle": "Mengapa Mengonversi SRT ke ASS?",
      "features": [
        {
          "title": "Tipografi Lanjutan & Warna Khusus",
          "description": "Gunakan jenis font kustom, ukuran teks, garis tepi tebal, bayangan, dan pilihan warna yang tidak didukung SRT biasa.",
          "icon": "pen"
        },
        {
          "title": "Penempatan Posisi Presisi",
          "description": "Mendukung koordinat piksel (X, Y) untuk menempatkan takarir di bagian mana pun pada layar tanpa menutupi grafik video.",
          "icon": "grid"
        },
        {
          "title": "100% Privasi di Peramban",
          "description": "Semua proses berjalan di browser perangkat Anda. File Anda tidak pernah diunggah ke server mana pun.",
          "icon": "shield"
        },
        {
          "title": "Siap untuk Aegisub & Pemutar Video",
          "description": "Menghasilkan format ASS v4.00+ resmi yang langsung didukung oleh Aegisub, VLC, MPV, HandBrake, dan Premiere Pro.",
          "icon": "check"
        }
      ],
      "faqsTitle": "Pertanyaan yang Sering Diajukan (FAQ)",
      "faqs": [
        {
          "question": "Bagaimana cara mengubah file SRT menjadi ASS?",
          "answer": "Untuk mengonversi file SRT ke ASS, unggah file .srt Anda atau tempel teks dialog subtitle ke konverter online gratis kami. Alat ini secara instan menyusun ulang entri SubRip menjadi sintaks resmi Advanced SubStation Alpha (v4.00+), lengkap dengan bagian wajib [Script Info], [V4+ Styles], dan [Events]. Anda dapat langsung mengunduh file .ass yang telah siap."
        },
        {
          "question": "Apakah konversi SRT ke ASS ini gratis?",
          "answer": "Ya, konverter SRT ke ASS kami 100% gratis tanpa pendaftaran akun, tanpa watermark, dan tanpa batasan jumlah file harian. Seluruh pemrosesan berjalan secara lokal di dalam peramban web Anda melalui JavaScript, sehingga naskah dan dokumen pribadi Anda tidak pernah dikirimkan ke server luar."
        },
        {
          "question": "Apa perbedaan antara subtitle SRT dan ASS?",
          "answer": "SRT (SubRip) adalah format teks polos dasar yang hanya memuat nomor urut, stempel waktu milidetik, dan baris teks dengan gaya visual sangat minim. ASS (Advanced SubStation Alpha) adalah spesifikasi subtitle visual tingkat lanjut yang memungkinkan pengaturan jenis font khusus, warna BGR, garis tepi (outline) tebal, bayangan jatuh, posisi koordinat piksel di layar, serta animasi teks bertempo suku kata untuk karaoke."
        },
        {
          "question": "Bisakah saya mengedit file ASS hasil konversi di Aegisub?",
          "answer": "Tentu saja. Konverter kami menghasilkan sintaks ASS v4.00+ yang sepenuhnya mematuhi standar resmi Aegisub. Setelah mengunduh file .ass, buka file tersebut di Aegisub untuk mengubah gaya font, warna, tag koordinat posisi, efek karaoke, atau melakukan penyesuaian waktu presisi menggunakan spektrum gelombang audio."
        },
        {
          "question": "Apakah cukup dengan mengubah nama ekstensi dari .srt ke .ass?",
          "answer": "Tidak. Sekadar mengganti nama ekstensi file dari .srt menjadi .ass akan menyebabkan pemutar video dan software editing gagal membaca atau memunculkan pesan error. Format ASS memerlukan blok struktur wajib seperti [Script Info], [V4+ Styles], dan baris kejadian Dialogue. Anda wajib menggunakan alat konverter khusus untuk membangun susunan file yang benar."
        },
        {
          "question": "Apakah konversi SRT ke ASS memengaruhi sinkronisasi waktu?",
          "answer": "Tidak sama sekali. Semua stempel waktu awal dan akhir dipertahankan dengan presisi tinggi, dikonversi dari notasi milidetik berkoma pada SRT (HH:MM:SS,mmm) menjadi notasi centisecond bertitik pada ASS (H:MM:SS.cs). Sinkronisasi subtitle dengan adegan video tetap berjalan sempurna."
        },
        {
          "question": "Pemutar media apa saja yang mendukung subtitle ASS?",
          "answer": "Sebagian besar pemutar video modern telah mendukung subtitle ASS beserta seluruh gaya visualnya, termasuk VLC Media Player, MPV, MPC-HC, PotPlayer, dan Plex (baik saat direct play maupun transcoding). Perangkat lunak seperti HandBrake dan FFmpeg juga dapat membakar (hardcode) gaya visual ASS secara permanen ke dalam file video MP4."
        },
        {
          "question": "Apakah tag format seperti huruf tebal dan miring tetap dipertahankan?",
          "answer": "Ya. Tag HTML umum yang terdapat di dalam file SRT seperti <i>, <b>, <u>, dan <font color> secara otomatis diubah menjadi tag override resmi bawaan ASS ({\\i1}, {\\b1}, {\\u1}, dan {\\c&HBBGGRR&}), sehingga penekanan visual teks asli Anda tidak akan hilang."
        }
      ]
    },
    "assToSrt": {
          "id": "ass-to-srt",
          "name": "Konverter ASS ke SRT",
          "shortName": "ASS ke SRT",
          "badge": "SubRip Universal",
          "tagline": "Konversi Subtitle Advanced SubStation Alpha (.ASS) ke Format SubRip (.SRT) Bersih",
          "description": "Konversi subtitle berformat Advanced SubStation Alpha (.ass / .ssa) menjadi file SubRip (.srt) yang bersih dan kompatibel secara universal. Bersihkan tag gaya, konversi centisecond, dan siapkan subtitle untuk Smart TV atau pemutar media apa pun.",
          "h1": "Konverter ASS ke SRT Online",
          "metaTitle": "Konverter ASS ke SRT Online – Ubah ASS ke SRT Gratis | SRTConverters",
          "metaDescription": "Konversi subtitle Advanced SubStation Alpha (.ass) ke format SubRip (.srt) bersih secara online dan gratis. Bersihkan tag gaya, konversi waktu, dan unduh file SRT secara instan.",
          "settingsLabels": {},
          "stepsTitle": "Cara Konversi ASS ke SRT dalam 3 Langkah Mudah",
          "steps": [
                {
                      "step": "1",
                      "title": "Unggah atau Tempel Subtitle ASS",
                      "description": "Tarik dan lepas file .ass atau .ssa Anda ke area unggah atau tempel teks script subtitle langsung ke editor."
                },
                {
                      "step": "2",
                      "title": "Pembersihan Tag & Konversi Waktu Otomatis",
                      "description": "Mesin peramban kami mengekstrak dialog, mengubah centisecond menjadi milidetik, dan menghapus tag gaya ASS yang rumit."
                },
                {
                      "step": "3",
                      "title": "Unduh File .SRT Bersih",
                      "description": "Salin subtitle SubRip ke clipboard atau unduh file .srt yang siap digunakan untuk Smart TV, Plex, VLC, atau perangkat seluler."
                }
          ],
          "featuresTitle": "Mengapa Mengonversi ASS ke SRT?",
          "features": [
                {
                      "title": "Kompatibilitas Pemutar Universal",
                      "description": "SubRip (.srt) adalah format subtitle yang paling banyak didukung di dunia, dapat diputar secara native di Smart TV, konsol, dan perangkat mobile tanpa error.",
                      "icon": "globe"
                },
                {
                      "title": "Pembersihan Tag Gaya Pintar",
                      "description": "Membersihkan koordinat posisi (\\pos), perataan (\\an), warna font (\\c), dan gambar vektor (\\p1) secara otomatis sambil mempertahankan cetak tebal dan miring.",
                      "icon": "sparkles"
                },
                {
                      "title": "Akurasi Waktu dari Centisecond ke Milidetik",
                      "description": "Mengonversi stempel waktu centisecond ASS (H:MM:SS.cs) menjadi milidetik SRT (HH:MM:SS,mmm) yang tepat untuk menjaga sinkronisasi audio tetap sempurna.",
                      "icon": "clock"
                },
                {
                      "title": "100% Privasi di Peramban",
                      "description": "Semua proses konversi dilakukan secara lokal di memori browser Anda. Tidak ada file subtitle atau teks dialog yang diunggah ke server eksternal.",
                      "icon": "shield"
                }
          ],
          "faqsTitle": "Pertanyaan yang Sering Diajukan",
          "faqs": [
                {
                      "question": "Apa perbedaan antara subtitle ASS dan SRT?",
                      "answer": "Advanced SubStation Alpha (.ass) adalah format subtitle kaya fitur dengan dukungan font kustom, koordinat posisi layar yang presisi, efek karaoke, dan grafis vektor. Sedangkan SubRip (.srt) adalah format teks polos ringan yang dirancang untuk kompatibilitas universal di hampir semua pemutar video dan televisi."
                },
                {
                      "question": "Apakah format warna dan posisi akan hilang saat konversi dari ASS ke SRT?",
                      "answer": "Ya, tag gaya rumit seperti koordinat posisi (\\pos), penataan (\\an), timer karaoke (\\k), dan warna font akan dihapus karena format standar SRT tidak mendukungnya. Namun, penekanan teks dasar seperti tebal (<b>), miring (<i>), dan garis bawah (<u>) tetap dipertahankan."
                },
                {
                      "question": "Apakah konverter ini mempertahankan format teks tebal dan miring dari ASS?",
                      "answer": "Ya. Tag kontrol ASS seperti {\\b1} dan {\\i1} otomatis dikonversi menjadi tag format standar (<b> dan <i>), sehingga intonasi penting dalam dialog tetap terlihat di pemutar yang kompatibel."
                },
                {
                      "question": "Bagaimana konverter menangani centisecond dan stempel waktu ASS?",
                      "answer": "File ASS mencatat waktu dalam satuan centisecond (seperseratus detik, H:MM:SS.cs), sedangkan SRT menggunakan milidetik (HH:MM:SS,mmm). Konverter kami mengkalkulasi milidetik secara presisi (misalnya 0:01:23.45 menjadi 00:01:23,450), menjamin tidak ada desinkronisasi audio."
                },
                {
                      "question": "Apa yang terjadi pada dialog ASS yang bersamaan atau tumpang tindih?",
                      "answer": "Ketika beberapa baris dialog muncul bersamaan (sering terjadi pada subtitle anime saat ada suara latar atau lirik lagu), konverter akan mengurutkan baris secara kronologis dan memberi nomor urut sequential yang rapi pada file SRT."
                },
                {
                      "question": "Bisakah saya mengonversi subtitle anime fansub (.ass) untuk diputar di Plex atau Smart TV?",
                      "answer": "Sangat bisa! Ini adalah salah satu alasan paling umum untuk konversi. Banyak Smart TV dan pemutar Plex kesulitan memproses font ASS yang rumit dan memaksa transcoding berat pada server. Mengubahnya ke SRT membuat video dapat diputar langsung (direct play) dengan lancar."
                },
                {
                      "question": "Bisakah saya mengonversi ASS ke SRT menggunakan FFmpeg di command line?",
                      "answer": "Bisa, dengan menjalankan perintah: ffmpeg -i input.ass -c:s srt output.srt. Namun, alat online kami tidak membutuhkan instalasi perangkat lunak apa pun, memberi pratinjau instan, dan bekerja cepat di ponsel maupun laptop."
                },
                {
                      "question": "Apakah file subtitle saya diunggah ke server atau tetap aman?",
                      "answer": "File Anda sepenuhnya aman dan privat. Seluruh pemrosesan berjalan 100% secara lokal di dalam browser Anda menggunakan JavaScript. Tidak ada file yang dikirim ke internet."
                }
          ]
    },
    "srtToSub": {
          "id": "srt-to-sub",
          "name": "Konverter SRT ke SUB",
          "shortName": "SRT ke SUB",
          "badge": "Gratis & Aman",
          "tagline": "Konversi Subtitle SubRip (.SRT) ke Format MicroDVD dan SubViewer (.SUB) Online",
          "description": "Konversi subtitle SubRip (.srt) ke format SUB (MicroDVD & SubViewer 2.0) secara online dan gratis. Mendukung frame rate (FPS) fleksibel dan 100% privasi browser.",
          "h1": "Konverter SRT ke SUB Online",
          "metaTitle": "Konverter SRT ke SUB Online – Ubah Subtitle ke SUB Gratis | SRTConverters",
          "metaDescription": "Konversi subtitle SubRip (.srt) ke format SUB (MicroDVD & SubViewer) online secara gratis. Pengaturan frame rate (FPS) fleksibel dan 100% privasi browser.",
          "settingsLabels": {
                "timingMode": "Format Subtitle",
                "fixedDuration": "MicroDVD (.sub)",
                "cpsDuration": "SubViewer 2.0 (.sub)",
                "cpsLabel": "Frame Rate Video (FPS)",
                "cpsHint": "Pilih frame rate video Anda untuk memastikan sinkronisasi yang presisi.",
                "startTime": "Sertakan Header FPS",
                "startTimeHint": "Menambahkan baris {1}{1}FPS ke file MicroDVD untuk deteksi otomatis pemutar media.",
                "maxCharsPerLine": "Hapus Tag HTML",
                "maxCharsHint": "Menghapus tag <i>, <b>, dan font agar kompatibel dengan pemutar DVD lama."
          },
          "stepsTitle": "Cara Mengonversi SRT ke SUB Online dalam 3 Langkah",
          "steps": [
                {
                      "step": "1",
                      "title": "Unggah atau Tempel Subtitle SRT",
                      "description": "Tarik dan lepas file .srt Anda ke area unggah atau tempel teks subtitle SubRip langsung ke editor."
                },
                {
                      "step": "2",
                      "title": "Pilih Format & Frame Rate (FPS) Video",
                      "description": "Pilih format MicroDVD atau SubViewer serta tentukan frame rate video Anda (misalnya 23.976, 24, 25, atau 29.97 FPS)."
                },
                {
                      "step": "3",
                      "title": "Unduh File SUB Hasil Konversi",
                      "description": "Klik Unduh .SUB untuk menyimpan file subtitle secara instan atau salin teks ke papan klip Anda."
                }
          ],
          "featuresTitle": "Mengapa Menggunakan Konverter SRT ke SUB Kami?",
          "features": [
                {
                      "title": "100% Privasi di Browser",
                      "description": "Konversi berlangsung sepenuhnya di browser Anda. Tidak ada file atau skrip yang dikirimkan ke server eksternal.",
                      "icon": "shield"
                },
                {
                      "title": "Dukungan MicroDVD & SubViewer",
                      "description": "Kompatibilitas penuh untuk MicroDVD berbasis frame ({awal}{akhir}) dan SubViewer 2.0 berbasis waktu.",
                      "icon": "file"
                },
                {
                      "title": "Sinkronisasi Presisi Berbasis Frame",
                      "description": "Mendukung frame rate standar industri: 23.976, 24.0, 25.0 (PAL), 29.97 (NTSC), 30, dan 60 FPS agar subtitle tidak geser.",
                      "icon": "clock"
                },
                {
                      "title": "Cocok untuk Perangkat Lawas",
                      "description": "Menghasilkan file .sub bersih yang siap diputar di DVD player jadul, head unit mobil, dan perangkat DivX/XviD.",
                      "icon": "split"
                }
          ],
          "faqsTitle": "Pertanyaan yang Sering Diajukan Seputar Konversi SRT ke SUB",
          "faqs": [
                {
                      "question": "Apa perbedaan antara file SRT dan file SUB?",
                      "answer": "SRT (SubRip) adalah format subtitle modern berbasis waktu jam yang menentukan kemunculan teks menggunakan milidetik (00:01:23,450 --> 00:01:26,800) dan didukung secara universal oleh browser, Smart TV, dan pemutar video modern. Sebaliknya, file SUB berbasis teks — terutama MicroDVD (.sub) — adalah format berbasis nomor frame video ({frame_mulai}{frame_selesai}). Format teks lain dengan ekstensi .sub adalah SubViewer 2.0 yang menggunakan seperseratus detik. Mengonversi SRT ke SUB sangat dibutuhkan untuk memutar video pada pemutar DVD fisik lama, layar audio mobil, dan perangkat media jadul yang hanya membaca file .sub berbasis frame."
                },
                {
                      "question": "Mengapa saya harus memilih frame rate (FPS) saat mengonversi SRT ke SUB?",
                      "answer": "Karena file MicroDVD menentukan kemunculan subtitle berdasarkan nomor frame video dan bukan milidetik jam, konverter wajib mengalikan waktu subtitle dengan frame rate video yang sebenarnya (Frame = Waktu dalam Detik × FPS). Jika Anda mengonversi file SRT pada 25.000 FPS (PAL) sementara video Anda berkecepatan 23.976 FPS (film bioskop / NTSC), subtitle akan bergeser semakin cepat atau lambat seiring berjalannya film. Memilih FPS yang tepat memastikan sinkronisasi presisi dari awal hingga akhir."
                },
                {
                      "question": "Apa perbedaan antara MicroDVD (.sub), SubViewer (.sub), dan VobSub (.sub)?",
                      "answer": "Ekstensi file .sub secara historis digunakan oleh tiga teknologi subtitle yang sangat berbeda: MicroDVD (.sub) adalah format teks berbasis frame ({1250}{1380}Dialog) yang populer pada era DivX/XviD; SubViewer 2.0 (.sub) adalah format teks dengan header [INFORMATION] dan penanda waktu centisecond (00:01:20.10,00:01:23.45); sedangkan VobSub (.sub + .idx) BUKAN file teks, melainkan kumpulan gambar grafik bitmap dari piringan DVD video. Konverter kami menghasilkan subtitle teks standar (MicroDVD dan SubViewer 2.0)."
                },
                {
                      "question": "Bagaimana cara mengetahui frame rate (FPS) video saya dengan akurat?",
                      "answer": "Anda dapat mengecek FPS video dengan sangat mudah: pada VLC Media Player, putar video, klik Alat > Informasi Codec (atau Ctrl+J / Cmd+I), buka tab Codec dan lihat angka pada Frame rate (misal 23.976023, 24, 25, atau 29.970000). Di Windows, klik kanan file video, pilih Properties, tab Details, lalu periksa Frame rate. Di macOS, buka file dengan QuickTime Player lalu tekan Cmd+I (Movie Inspector). Program gratis MediaInfo juga menampilkan data ini dengan sangat detail."
                },
                {
                      "question": "Mengapa subtitle SUB hasil konversi saya menjadi tidak sinkron saat diputar?",
                      "answer": "Subtitle yang awalnya pas tetapi lambat laun mendahului atau tertinggal dari audio hampir selalu disebabkan oleh perbedaan FPS antara file MicroDVD hasil konversi dengan track video asli. Contohnya, jika video berjalan pada 23.976 FPS namun Anda memilih 25.000 FPS saat konversi, subtitle akan berjalan sekitar 4,1% lebih cepat (selisih sekitar 2,5 detik per menit). Solusinya, cek FPS asli video dengan VLC atau MediaInfo lalu konversi ulang file SRT dengan angka FPS yang persis sama."
                },
                {
                      "question": "Apakah saya bisa mengonversi kembali file SUB ke format SRT?",
                      "answer": "Bisa. Subtitle teks MicroDVD (.sub) dan SubViewer (.sub) dapat dengan mudah dikonversi kembali ke SubRip (.srt). Pada MicroDVD, Anda cukup membagi nomor frame dengan nilai FPS video untuk memperoleh milidetik: Waktu = Nomor Frame / FPS. Anda dapat memakai aplikasi seperti Subtitle Edit, Aegisub, atau alat konversi di platform SRTConverters kami."
                },
                {
                      "question": "Apakah file subtitle saya diunggah ke server selama proses konversi?",
                      "answer": "Tidak. SRTConverters bekerja 100% secara lokal di browser Anda menggunakan JavaScript di sisi klien. File SRT, teks subtitle, dan file SUB hasil konversi Anda hanya diproses di memori perangkat Anda. Tidak ada data yang dikirim, disimpan, atau dicatat di server mana pun."
                },
                {
                      "question": "Bagaimana cara mengonversi SRT ke SUB lewat command line dengan FFmpeg?",
                      "answer": "Anda dapat mengonversi SRT ke MicroDVD SUB via FFmpeg dengan menentukan codec subtitle: ffmpeg -i input.srt -c:s microdvd output.sub. Jika Anda ingin menentukan frame rate tertentu dalam pemrosesan batch atau muxing video, tambahkan opsi rate: ffmpeg -i input.srt -r 23.976 -c:s microdvd output.sub. Perintah ini sangat praktis untuk pipeline otomatis dan skrip terminal."
                }
          ]
    },
    "subToSrt": {
          "id": "sub-to-srt",
          "name": "Konverter SUB ke SRT",
          "shortName": "SUB ke SRT",
          "badge": "Gratis & Sisi Klien",
          "tagline": "Konversi Subtitle MicroDVD & SubViewer (.SUB) ke SubRip (.SRT) Standar Online",
          "description": "Konversi subtitle SUB (MicroDVD & SubViewer) ke format SubRip (.srt) bersih secara online dan gratis. Deteksi FPS otomatis, konversi frame ke waktu yang presisi, dan privasi peramban 100%.",
          "h1": "Konverter SUB ke SRT Online",
          "metaTitle": "Konverter SUB ke SRT Online – Ubah SUB ke SRT Gratis | SRTConverters",
          "metaDescription": "Konversi subtitle SUB (MicroDVD & SubViewer) ke format SubRip (.srt) bersih secara online dan gratis. Deteksi FPS otomatis, konversi frame ke waktu yang presisi, dan privasi peramban 100%.",
          "settingsLabels": {
                "timingMode": "Format Terdeteksi",
                "fixedDuration": "Deteksi Otomatis",
                "cpsDuration": "MicroDVD ({frame}{frame})",
                "cpsLabel": "Frame Rate Video (FPS)",
                "cpsHint": "Pilih frame rate video Anda untuk memastikan sinkronisasi subtitle yang presisi.",
                "startTime": "Sinkronkan Header FPS",
                "startTimeHint": "Membaca baris header {1}{1}FPS dari file MicroDVD secara otomatis saat tersedia.",
                "maxCharsPerLine": "Konversi Tag Format",
                "maxCharsHint": "Mengubah tag {Y:i} menjadi <i> dan pemisah garis pipa (|) menjadi baris baru standar."
          },
          "stepsTitle": "Cara Mengonversi SUB ke SRT Online dalam 3 Langkah Mudah",
          "steps": [
                {
                      "step": "1",
                      "title": "Unggah atau Tempel Subtitle SUB",
                      "description": "Tarik dan lepas file .sub Anda ke area unggah atau tempel teks MicroDVD maupun SubViewer langsung ke editor teks."
                },
                {
                      "step": "2",
                      "title": "Periksa Frame Rate Video (FPS)",
                      "description": "Jika file bertipe MicroDVD, pastikan frame rate video sesuai (misalnya 23.976, 24, 25, atau 29.97 FPS) agar nomor frame terhitung menjadi jam dan menit yang tepat."
                },
                {
                      "step": "3",
                      "title": "Unduh File SRT yang Dikonversi",
                      "description": "Klik Unduh .SRT untuk menyimpan file SubRip Anda secara instan atau salin teks hasil konversi langsung ke papan klip."
                }
          ],
          "featuresTitle": "Mengapa Memilih Konverter SUB ke SRT Kami?",
          "features": [
                {
                      "title": "Privasi 100% Sisi Klien",
                      "description": "Subtitle Anda diproses sepenuhnya di browser web Anda. Tidak ada file atau teks yang dikirimkan atau disimpan di server eksternal.",
                      "icon": "shield"
                },
                {
                      "title": "Deteksi Otomatis MicroDVD & SubViewer",
                      "description": "Mendeteksi file MicroDVD berbasis frame, format SubViewer 2.0/1.0, serta konfigurasi baris {1}{1}FPS secara cerdas.",
                      "icon": "file"
                },
                {
                      "title": "Sinkronisasi Milidetik yang Akurat",
                      "description": "Menghitung penanda waktu milidetik secara presisi untuk semua standar bioskop, PAL, dan NTSC tanpa pergeseran sinkronisasi.",
                      "icon": "clock"
                },
                {
                      "title": "Peringatan VobSub & Pembersihan Tag",
                      "description": "Mendeteksi paket biner DVD VobSub dan mengonversi garis pipa (|) serta tag gaya menjadi format SRT standar yang rapi.",
                      "icon": "split"
                }
          ],
          "faqsTitle": "Pertanyaan yang Sering Diajukan Seputar Konversi SUB ke SRT",
          "faqs": [
                {
                      "question": "Apa perbedaan antara file SUB dan file SRT?",
                      "answer": "SRT (SubRip) adalah standar subtitle teks universal modern. SRT mendefinisikan setiap dialog dengan nomor urut berurutan dan penanda waktu jam absolut hingga milidetik (00:01:23,450 --> 00:01:26,800). Format ini didukung secara luas oleh pemutar media modern, smart TV, perangkat lunak editing (Premiere, DaVinci Resolve), dan platform streaming seperti YouTube atau Netflix. Sebaliknya, file SUB berbasis teks—terutama MicroDVD (.sub)—menggunakan nomor frame video ({frame_awal}{frame_akhir}), sehingga waktu pemutarannya bergantung pada kecepatan frame rate (FPS) file video. SubViewer (.sub) menggunakan satuan seperseratus detik. Mengonversi SUB ke SRT memberikan kompatibilitas menyeluruh pada semua perangkat modern tanpa membutuhkan pemutar media lawas."
                },
                {
                      "question": "Mengapa saya harus memilih frame rate (FPS) saat mengonversi MicroDVD ke SRT?",
                      "answer": "File MicroDVD tidak mencatat jam, menit, atau detik. Format ini hanya menentukan pada frame ke berapa subtitle harus muncul dan menghilang (misalnya: {1200}{1350}Teks dialog). Untuk mengubah nomor frame menjadi penanda waktu SRT, konverter menghitung: Milidetik = Pembulatan((Nomor Frame / FPS Video) × 1000). Jika Anda mengonversi file dengan pengaturan 25 FPS (PAL) padahal video berjalan pada 23.976 FPS (film bioskop / NTSC), subtitle akan bergeser sekitar 2,5 detik setiap satu menit pemutaran. Memilih FPS yang tepat menjamin subtitle tetap sinkron dari awal hingga akhir film."
                },
                {
                      "question": "Apa perbedaan antara MicroDVD (.sub), SubViewer (.sub), dan VobSub (.sub)?",
                      "answer": "Ekstensi .sub secara historis digunakan oleh tiga teknologi subtitle yang berbeda: 1. MicroDVD (.sub) adalah format teks berbasis nomor frame dalam kurung kurawal ({awal}{akhir}Baris1|Baris2) yang populer di era DivX/XviD; 2. SubViewer (.sub) adalah format teks dengan header metadata ([INFORMATION]) dan waktu dalam satuan seperseratus detik (00:01:20.50,00:01:23.80) dengan tag [br]; 3. VobSub (.sub + .idx) adalah paket biner yang berisi gambar bitmap grafis subtitle dari piringan DVD. Alat kami mengonversi format teks MicroDVD dan SubViewer secara otomatis serta memberi peringatan jika Anda mengunggah file biner VobSub."
                },
                {
                      "question": "Bagaimana cara mengetahui frame rate (FPS) yang tepat dari file video saya?",
                      "answer": "Anda dapat mengetahui frame rate video menggunakan aplikasi pemutar media gratis: Di VLC Media Player, putar video, buka Alat > Informasi Codec (atau tekan Ctrl+J / Cmd+I), pilih tab Codec, dan lihat nilai 'Frame rate' (misalnya 23.976023, 24, 25, atau 29.970000). Di Windows File Explorer, klik kanan file video, pilih Properti, buka tab Rincian, dan periksa baris 'Kecepatan frame'. Di macOS, buka file dengan QuickTime Player lalu tekan Cmd+I untuk membuka jendela pemeriksa. Anda juga bisa memakai aplikasi MediaInfo untuk membaca informasi teknis video secara mendalam."
                },
                {
                      "question": "Mengapa subtitle SRT hasil konversi saya tidak sinkron saat diputar?",
                      "answer": "Ketidaksinkronan bertahap—di mana subtitle awalnya pas tetapi makin lama makin mendahului atau tertinggal dari suara dialog—hampir selalu disebabkan oleh ketidaksesuaian FPS saat konversi. Mengonversi video 23.976 FPS dengan pengaturan 25.000 FPS akan membuat subtitle muncul 4,1% lebih cepat daripada audio, sehingga selisih waktu bertambah setiap menit. Untuk mengatasinya, pastikan nilai FPS video Anda di VLC atau MediaInfo, pilih nilai yang sama di konverter kami, lalu lakukan konversi ulang. Jika file MicroDVD Anda memiliki baris header `{1}{1}FPS`, alat kami akan menggunakannya secara otomatis."
                },
                {
                      "question": "Bisakah alat ini mengonversi file biner VobSub (.sub) dari piringan DVD?",
                      "answer": "Tidak. File VobSub (.sub) bukanlah dokumen teks, melainkan arsip biner yang memuat gambar grafis bitmap dari subtitle DVD asli. Karena berupa gambar raster dan bukan teks karakter alfanumerik, konversi VobSub ke SRT membutuhkan perangkat lunak OCR (Optical Character Recognition) yang mengenali bentuk huruf secara visual. Jika Anda mengunggah file biner VobSub, konverter kami akan mendeteksinya dan menampilkan petunjuk agar Anda menggunakan program desktop khusus seperti Subtitle Edit, BDSup2Sub, atau OCR-SubRip."
                },
                {
                      "question": "Apakah file subtitle saya diunggah ke server eksternal saat proses konversi?",
                      "answer": "Tidak. SRTConverters bekerja 100% di sisi klien di dalam peramban web Anda menggunakan JavaScript modern. File subtitle, teks yang Anda masukkan, dan hasil SRT tidak pernah keluar dari komputer atau ponsel Anda. Tidak ada data yang dikirimkan melalui internet atau disimpan di server mana pun, menjamin privasi total, keamanan data, dan kecepatan konversi instan."
                },
                {
                      "question": "Bagaimana cara mengonversi SUB ke SRT melalui baris perintah menggunakan FFmpeg?",
                      "answer": "Anda dapat mengonversi file SUB ke SRT menggunakan FFmpeg di terminal. Untuk file SubViewer berbasis waktu, jalankan: ffmpeg -i input.sub output.srt. Untuk file MicroDVD berbasis frame, Anda wajib mencantumkan frame rate video dengan opsi -r agar FFmpeg dapat mengalkulasi waktu dengan tepat: ffmpeg -r 23.976 -i input.sub output.srt. Jika file Anda memakai pengkodean karakter Windows-1252/ANSI, sertakan parameter pengkodean: ffmpeg -sub_charenc CP1252 -r 25 -i input.sub output.srt. Perintah ini sangat berguna untuk pemrosesan banyak file sekaligus."
                }
          ]
    },
    sbvToSrt: {
      "id": "sbv-to-srt",
      "name": "Konverter SBV ke SRT",
      "shortName": "SBV ke SRT",
      "badge": "Gratis & Sisi Klien",
      "tagline": "Ubah Subtitle YouTube (.SBV) ke SubRip (.SRT) Standar Online",
      "description": "Konversi file subtitle SBV dan SubViewer YouTube ke format SubRip (.srt) bersih dan universal online gratis. Pemformatan timestamp otomatis, decode entitas HTML, dan unduh file SRT instan.",
      "h1": "Konverter SBV ke SRT Online",
      "metaTitle": "Konverter SBV ke SRT Online – Ubah Subtitle YouTube ke SRT Gratis | SRTConverters",
      "metaDescription": "Konversi file subtitle SBV dan SubViewer YouTube ke format SubRip (.srt) bersih online gratis. Format timestamp otomatis, decode entitas HTML, dan unduh file SRT instan.",
      "settingsLabels": {
            "timingMode": "Opsi Pembersihan Subtitle",
            "fixedDuration": "Decode Entitas HTML",
            "cpsDuration": "Mengubah &amp;, &#39;, &quot;, &lt;, &gt; menjadi teks bersih dan terbaca",
            "cpsLabel": "Hapus Deskripsi Suara",
            "cpsHint": "Hapus tanda [Musik], [Tepuk Tangan], dan efek suara dari dialog",
            "startTime": "Normalisasi Spasi",
            "startTimeHint": "Bersihkan spasi berlebih dan hapus baris dialog kosong"
      },
      "stepsTitle": "Cara Konversi SBV ke SRT Online dalam 3 Langkah",
      "steps": [
            {
                  "step": "1",
                  "title": "Unggah atau Tempel Subtitle SBV",
                  "description": "Tarik dan lepas file .sbv YouTube Anda ke area upload atau tempel teks subtitle langsung ke kotak input."
            },
            {
                  "step": "2",
                  "title": "Atur Preferensi Pembersihan",
                  "description": "Pilih opsi decode entitas HTML (&amp;, &#39;) dan tentukan apakah ingin menghapus efek suara otomatis seperti [Musik]."
            },
            {
                  "step": "3",
                  "title": "Unduh File SRT Hasil Konversi",
                  "description": "Klik Unduh .SRT untuk menyimpan file SubRip Anda secara instan atau salin teks berformat langsung ke clipboard Anda."
            }
      ],
      "featuresTitle": "Mengapa Menggunakan Konverter SBV ke SRT Kami?",
      "features": [
            {
                  "title": "Presisi Milidetik Akurat",
                  "description": "Setiap timestamp waktu dipertahankan secara akurat hingga milidetik, mengubah titik desimal SBV menjadi koma standar SRT dengan dua digit jam.",
                  "icon": "zap"
            },
            {
                  "title": "Decode HTML Otomatis",
                  "description": "Ekspor subtitle YouTube sering memuat entitas HTML seperti &amp; dan &#39;. Alat kami mengubahnya menjadi karakter bacaan yang benar.",
                  "icon": "layers"
            },
            {
                  "title": "Penyaringan Efek Suara",
                  "description": "Hapus teks otomatis seperti [Musik] dan [Tepuk Tangan] dengan mudah agar dialog subtitle terlihat rapi dan profesional.",
                  "icon": "shield"
            },
            {
                  "title": "Privasi 100% di Browser",
                  "description": "Semua proses konversi berjalan lokal di browser Anda. File subtitle Anda tidak pernah diunggah atau disimpan di server eksternal.",
                  "icon": "split"
            }
      ],
      "faqsTitle": "Pertanyaan yang Sering Diajukan Seputar Konversi SBV ke SRT",
      "faqs": [
            {
                  "question": "Apa itu file SBV dan apa perbedaannya dengan file SRT?",
                  "answer": "File SBV (.sbv), yang dikenal sebagai format YouTube SubViewer, adalah format subtitle teks biasa yang dikembangkan oleh Google khusus untuk subtitle YouTube. Pada file SBV, setiap blok subtitle diawali langsung dengan pasangan timestamp yang dipisahkan koma (misalnya 0:00:01.000,0:00:04.500) diikuti teks dialog, tanpa nomor urut indeks. Sebaliknya, SubRip (.srt) adalah standar global untuk pemutar video dan software editing. File SRT membutuhkan nomor urut (1, 2, 3...), tanda panah (' --> ') dengan koma sebelum milidetik (00:00:01,000 --> 00:00:04,500), dan format jam dua digit. Mengonversi SBV ke SRT memungkinkan Anda menggunakan subtitle YouTube di Premiere Pro, DaVinci Resolve, VLC, dan Plex."
            },
            {
                  "question": "Mengapa YouTube Studio mengekspor subtitle dalam format .sbv bukan .srt?",
                  "answer": "Secara historis, YouTube memilih varian SubViewer (.sbv) saat meluncurkan fitur captioning otomatis karena strukturnya yang ringkas tanpa nomor indeks dan hanya memakai koma sebagai pemisah waktu. Namun, karena mayoritas software editing video dan smart TV tidak mendukung .sbv secara native, konversi ke format .srt menjadi kebutuhan wajib."
            },
            {
                  "question": "Bagaimana cara mengunduh file subtitle SBV dari YouTube Studio?",
                  "answer": "Untuk mengunduh subtitle YouTube Anda: (1) Masuk ke YouTube Studio dan pilih 'Subtitle' di menu sebelah kiri. (2) Pilih video yang diinginkan. (3) Di samping trek subtitle yang dipublikasikan atau otomatis, klik menu titik tiga (Opsi) lalu pilih 'Download'. (4) Pilih opsi '.sbv' (atau SubViewer). File 'captions.sbv' akan terunduh dan siap dikonversi di situs kami."
            },
            {
                  "question": "Bagaimana perbedaan format waktu antara SBV dan SubRip SRT?",
                  "answer": "Timestamp SBV memakai satu koma di antara waktu mulai dan akhir serta titik sebelum milidetik, kerap menggunakan satu digit jam: '0:01:23.450,0:01:27.800'. SubRip SRT memerlukan tanda panah berjarak (' --> '), koma sebelum milidetik, serta dua digit jam: '00:01:23,450 --> 00:01:27,800'. Selain itu, SRT menuntut nomor urut baris di atasnya. Konverter kami melakukan seluruh perubahan format ini secara otomatis."
            },
            {
                  "question": "Mengapa file SBV YouTube saya memuat kode aneh seperti &amp; dan &#39;?",
                  "answer": "YouTube mengekspor tanda baca tertentu sebagai entitas HTML agar aman saat dirender di browser web. Karakter dan (&) diekspor sebagai '&amp;', tanda kutip tunggal/apostrof sebagai '&#39;', dan tanda kutip ganda sebagai '&quot;'. Pada pemutar video lokal atau software editing, kode tersebut muncul mentah di layar. Konverter kami otomatis mendekode entitas tersebut menjadi tanda baca yang sebenarnya."
            },
            {
                  "question": "Bisakah saya mengimpor subtitle SRT hasil konversi ke Premiere Pro, DaVinci Resolve, dan Final Cut Pro?",
                  "answer": "Ya. Format SubRip (.srt) didukung secara universal oleh semua software editing video profesional seperti Adobe Premiere Pro, DaVinci Resolve, Apple Final Cut Pro, Avid Media Composer, dan CapCut. Cukup impor file .srt ke media pool Anda dan letakkan di timeline video."
            },
            {
                  "question": "Apakah file subtitle saya diunggah ke server selama proses konversi?",
                  "answer": "Tidak. SRTConverters memproses 100% file Anda secara lokal di dalam browser menggunakan JavaScript sisi klien. Subtitle SBV, transkrip, dan file SRT Anda tidak pernah meninggalkan perangkat Anda, menjaga privasi sepenuhnya."
            },
            {
                  "question": "Bagaimana cara mengonversi SBV ke SRT di command line menggunakan Python atau FFmpeg?",
                  "answer": "Dengan FFmpeg, jalankan perintah: 'ffmpeg -i input.sbv -c:s srt output.srt'. Jika menggunakan Python, Anda dapat membaca file per blok, memisahkan timestamp berdasarkan koma, dan menambahkan nomor urut. Alat online kami mengeksekusi konversi ini secara instan di browser tanpa instalasi apa pun."
            }
      ]
}
  },
  "tr": {
    "directory": {
      "title": "Tüm Altyazı ve SRT Dönüştürme Araçları",
      "subtitle": "Ücretsiz ve tarayıcı tabanlı altyazı dönüştürme araçları. Kurulum yok, sunucu yüklemesi yok, %100 gizli.",
      "metaTitle": "Ücretsiz Altyazı ve SRT Araçları | SRTConverters",
      "metaDescription": "Ücretsiz çevrimiçi altyazı araçları paketimizi keşfedin. TXT'den SRT'ye, SRT'den Metne, SRT'den VTT'ye ve VTT'den SRT'ye dönüştürün.",
      "convertersCategory": "Altyazı Dönüştürücüler",
      "utilitiesCategory": "Altyazı Yardımcı Araçları",
      "openTool": "Aracı Aç",
      "clientSideBadge": "%100 Tarayıcı Tabanlı"
    },
    "txtToSrt": {
      "id": "txt-to-srt",
      "name": "TXT - SRT Dönüştürücü",
      "shortName": "TXT - SRT",
      "badge": "Ücretsiz & Tarayıcı Tabanlı",
      "tagline": "Düz Metin ve Dökümleri Senkronize SubRip (.SRT) Altyazı Dosyalarına Dönüştürün",
      "description": "Biçimlendirilmemiş dökümleri ve şarkı sözlerini ayarlanabilir okuma hızlarıyla düzgün biçimlendirilmiş SRT altyazılarına dönüştürün.",
      "h1": "TXT - SRT Dönüştürücü",
      "metaTitle": "TXT - SRT Dönüştürücü – Metni Ücretsiz Altyazıya Dönüştür | SRTConverters",
      "metaDescription": "Düz metin dökümlerini ücretsiz çevrimiçi SubRip (.srt) altyazı dosyalarına dönüştürün. Özel okuma hızları ve %100 tarayıcı gizliliği.",
      "settingsLabels": {
        "timingMode": "Zamanlama Hesaplama Modu",
        "cpsLabel": "Okuma Hızı (CPS)",
        "cpsHint": "Saniye başına karakter (15-20 okunabilirlik için idealdir)",
        "maxCharsPerLine": "Satır Başına Maksimum Karakter",
        "maxCharsHint": "YouTube/TikTok için önerilen 37-42 karakter",
        "splitMode": "Metin Bölme Stratejisi",
        "splitSentence": "Cümle ve Noktalamaya Göre Böl",
        "splitParagraph": "Paragraflara Göre Böl",
        "splitLine": "Satır Sonlarına Göre Böl",
        "gapBetweenSubtitles": "Altyazılar Arası Boşluk (ms)",
        "gapHint": "Ardışık altyazılar arası duraklama (ör. 100ms)"
      },
      "stepsTitle": "3 Basit Adımda Metni SRT Altyazısına Dönüştürme",
      "steps": [
        {
          "step": "1",
          "title": "Metni Yapıştırın veya Dosya Yükleyin",
          "description": "Metin kutusuna dökümünüzü yapıştırın veya doğrudan bir .txt dosyasını sürükleyip bırakın."
        },
        {
          "step": "2",
          "title": "Altyazı Zamanlamasını Ayarlayın",
          "description": "Video tarzınıza uyacak şekilde okuma hızını (CPS), satır başına karakter sınırını ve bölme kurallarını ayarlayın."
        },
        {
          "step": "3",
          "title": "Önizleyin ve .SRT İndirin",
          "description": "Oluşturulan altyazıları canlı önizlemede inceleyin, panoya kopyalayın veya anında .srt dosyasını indirin."
        }
      ],
      "featuresTitle": "Neden TXT - SRT Dönüştürücümüzü Kullanmalısınız?",
      "features": [
        {
          "title": "%100 Gizli ve Tarayıcıda",
          "description": "Hiçbir dosya harici sunucuya yüklenmez. Tüm dönüştürme işlemi tarayıcınızda güvenle gerçekleşir.",
          "icon": "shield"
        },
        {
          "title": "Akıllı Noktalama Bölmesi",
          "description": "Doğal bir okuma akışı için uzun metinleri nokta, virgül ve soru işaretlerinden böler.",
          "icon": "split"
        },
        {
          "title": "Akıllı CPS Zamanlaması",
          "description": "İzleyici konforu için karakter sayısına ve doğal okuma hızına göre altyazı süresini hesaplar.",
          "icon": "clock"
        },
        {
          "title": "Standart SRT Formatı",
          "description": "YouTube, Premiere Pro, DaVinci Resolve ve VLC ile tam uyumlu SubRip dosyaları üretir.",
          "icon": "file"
        }
      ],
      "faqsTitle": "Sıkça Sorulan Sorular",
      "faqs": [
        {
          "question": "TXT dosyamı SRT'ye dönüştürmeden önce hangi formatta olmalıdır?",
          "answer": "TXT dosyanız zengin metin biçimlendirmesi içermeyen düz metin olmalıdır. En iyi altyazı biçimlendirmesi için TXT dökümünüzü her cümle veya konuşma kendi satırında olacak şekilde düzenleyin ya da paragraflarla ayırın. Metinleri altyazı boyutunda tutmak, dönüştürücünün doğru altyazı zamanlaması hesaplamasına yardımcı olur."
        },
        {
          "question": "Bir TXT dosyası SRT dönüştürme için zaman damgası içerebilir mi?",
          "answer": "Standart TXT dosyaları zaman kodu içermeyen düz metin dökümleri olsa da bazı dışa aktarılan metinler yaklaşık zaman damgaları içerebilir. TXT dosyanızda zamanlar varsa sıradan dönüştürücüler bunları konuşma metni sanabilir. Aracımız düz metinden okuma hızına göre altyazı zamanlamalarını sıfırdan hesaplar."
        },
        {
          "question": "Bir SRT dosyası hangi zaman damgası formatını kullanır?",
          "answer": "Standart bir SRT dosyası sıra numaraları ve 00:00:01,000 --> 00:00:04,000 formatında zaman damgaları kullanır (saat:dakika:saniye,milisaniye). SubRip standardı, nokta kullanan WebVTT'nin aksine milisaniyelerden önce virgül gerektirir. Aracımız standart SRT zaman damgalarını otomatik olarak oluşturur."
        },
        {
          "question": "Bir SRT altyazısı kaç karakter içermelidir?",
          "answer": "Rahat bir okuma deneyimi için profesyonel altyazı kuralları, satır başına 37 ila 42 karakter ve her altyazıda en fazla iki satır (toplamda yaklaşık 70 ila 84 karakter) önerir. Bu kesin bir kural değildir: Mobil videolar daha kısa satırlar gerektirirken, geniş ekranlar daha uzun cümleleri rahatça gösterir."
        },
        {
          "question": "Birden fazla paragraf içeren bir TXT dökümünü SRT altyazılarına dönüştürebilir miyim?",
          "answer": "Evet! Birden fazla paragraf içeren bir TXT dökümünü senkronize SRT altyazılarına dönüştürebilirsiniz. Paragraf sonları doğal duraklama noktası işlevi görür. Paragraf veya cümle bölme modunu seçmek, uzun metin bloklarını izleyiciyi yormayan okunabilir altyazı parçalarına böler."
        },
        {
          "question": "Dönüştürülen SRT dosyam neden bozuk veya garip karakterler gösteriyor?",
          "answer": "Bozuk karakterler genellikle metin kodlama uyuşmazlığından kaynaklanır. TXT dosyanız Türkçe karakterler (ç, ğ, ı, ö, ş, ü) veya özel simgeler içeriyorsa dosyanın UTF-8 olarak kaydedildiğinden emin olun. Tarayıcı tabanlı dönüştürücümüz standart UTF-8 kullanarak tüm karakterleri korur."
        },
        {
          "question": "SRT altyazılarının nerede bölüneceğini kontrol etmek için noktalama işaretlerini kullanabilir miyim?",
          "answer": "Kesinlikle. Noktalama işaretleri (nokta, virgül, soru işareti) ve satır sonları altyazı bölümlemesi için güçlü ipuçlarıdır. Cümleye göre bölme modunu kullandığınızda dönüştürücü TXT dökümünüzü doğal dilbilgisi duraklarında keserek akıcı SRT altyazıları oluşturur."
        },
        {
          "question": "YouTube altyazıları için bir TXT - SRT dönüştürücü kullanabilir miyim?",
          "answer": "Evet, SRT formatı YouTube, Vimeo, Facebook ve Instagram'da desteklenir. TXT dökümünüzü SRT dosyasına dönüştürdükten sonra .srt dosyasını doğrudan YouTube Studio'ya yükleyebilirsiniz. Otomatik dönüştürücüler zamanlamayı okuma hızına göre tahmin ettiğinden yayınlamadan önce videoyla eşleşmesini kontrol edin."
        }
      ]
    },
    "srtToText": {
      "id": "srt-to-text",
      "name": "SRT - Metin Dönüştürücü",
      "shortName": "SRT - Metin",
      "badge": "Ücretsiz ve Hızlı",
      "tagline": "SubRip (.SRT) Altyazılarından Temiz Düz Metin ve Dökümleri Çıkarın",
      "description": "SubRip (.srt) dosyalarınızdaki zaman damgalarını, sıra numaralarını ve HTML etiketlerini temizleyin.",
      "h1": "SRT - Metin Dönüştürücü",
      "metaTitle": "SRT - Metin Dönüştürücü – Altyazılardan Metin Çıkarın | SRTConverters",
      "metaDescription": "SRT altyazı dosyalarından temiz düz metin çıkarın. %100 tarayıcı gizliliğiyle zaman damgalarını kaldırın.",
      "settingsLabels": {
        "stripTimestamps": "Zaman Damgalarını Kaldır",
        "stripLineNumbers": "Satır Numaralarını Kaldır",
        "joinParagraphs": "Paragrafları Birleştir"
      },
      "stepsTitle": "SRT Altyazılarını Düz Metne Dönüştürme",
      "steps": [
        {
          "step": "1",
          "title": "SRT Dosyası Yükleyin veya Yapıştırın",
          "description": ".srt altyazı dosyanızı sürükleyip bırakın veya metni yapıştırın."
        },
        {
          "step": "2",
          "title": "Temizleme Seçeneklerini Belirleyin",
          "description": "Zaman damgalarını, numaraları kaldırmayı ve paragrafları birleştirmeyi seçin."
        },
        {
          "step": "3",
          "title": "Temiz Metni Kopyalayın veya İndirin",
          "description": "Temiz dökümü panoya kopyalayın veya anında .txt dosyası olarak indirin."
        }
      ],
      "featuresTitle": "SRT'den Metne Dönüştürmenin Avantajları",
      "features": [
        {
          "title": "Temiz Metin Çıkarma",
          "description": "Tüm zaman damgalarını, sıra numaralarını ve HTML etiketlerini otomatik kaldırır.",
          "icon": "clean"
        },
        {
          "title": "Paragraf Birleştirme",
          "description": "Altyazı parçalarını makale veya özetler için akıcı paragraflar halinde birleştirir.",
          "icon": "text"
        },
        {
          "title": "Anında ve Gizli",
          "description": "Dosya boyutu sınırı veya sunucu yüklemesi olmadan anında tarayıcıda işleme.",
          "icon": "lock"
        }
      ],
      "faqsTitle": "Sıkça Sorulan Sorular",
      "faqs": [
        {
          "question": "Bir SRT dosyasını TXT'ye nasıl dönüştürürüm?",
          "answer": "Bir SRT dosyasını TXT'ye dönüştürmek için altyazı metninizi ücretsiz çevrimiçi dönüştürücümüze yapıştırın veya .srt dosyanızı yükleyin. Araç, sıra numaralarını ve zaman damgalarını otomatik olarak kaldırarak yalnızca temiz konuşma metnini bırakır. Zaman kodlarını koruma veya paragrafları birleştirme seçeneklerini belirledikten sonra sonucu kopyalayabilir veya .txt olarak indirebilirsiniz."
        },
        {
          "question": "SRT'yi TXT'ye ücretsiz ve çevrimiçi dönüştürebilir miyim?",
          "answer": "Evet! SRTConverters.com; kayıt, kullanım sınırı, filigran veya abonelik ücreti olmadan %100 ücretsizdir. Tüm işlemler JavaScript ile doğrudan tarayıcınızda gerçekleşir; dosyalarınız ve transkriptleriniz hiçbir sunucuya yüklenmez."
        },
        {
          "question": "SRT'yi TXT'ye dönüştürürken zaman damgalarına ne olur?",
          "answer": "Varsayılan olarak, milisaniye cinsinden tüm zaman aralıkları (örn: '00:00:01,000 --> 00:00:04,500') dönüştürme sırasında tamamen kaldırılır. Bu sayede blog yazıları, özetler, ders notları ve yapay zeka istemleri için kesintisiz ve temiz bir metin elde edilir."
        },
        {
          "question": "SRT dosyasını zaman kodlarıyla birlikte TXT'ye dönüştürebilir miyim?",
          "answer": "Evet. Ayarlar panelindeki 'Zaman Damgalarını Kaldır' seçeneğinin işaretini kaldırmanız yeterlidir. Araç, her diyaloğun üstündeki zaman kodlarını koruyarak video kurgu referansları ve yasal kayıtlar için ideal bir çıktı üretir."
        },
        {
          "question": "SRT ile TXT dosyaları arasındaki fark nedir?",
          "answer": "Bir SRT (SubRip) dosyası, video oynatıcıların altyazıları ne zaman göstereceğini belirten zaman kodlu ve numaralandırılmış bloklar içerir. Bir TXT dosyası ise herhangi bir zaman kısıtlaması olmayan, okuma ve düzenleme amaçlı düz metindir."
        },
        {
          "question": "Bir SRT dosyasından zaman damgalarını nasıl kaldırırım?",
          "answer": "En hızlı yöntem çevrimiçi dönüştürücümüzü kullanmaktır. Not Defteri'nde zaman kodlarını tek tek silmek yerine .srt dosyanızı yükleyin; aracımız milisaniyeler içinde tüm zaman kodlarını ve numaraları temizleyecektir."
        },
        {
          "question": "Bir SRT altyazı dosyasını transkripte dönüştürebilir miyim?",
          "answer": "Evet, SRT'yi TXT'ye dönüştürmek video altyazılarını okunabilir bir transkripte çevirmenin standart yoludur. Kısa altyazı satırlarını akıcı paragraflara dönüştürmek için 'Paragrafları Birleştir' seçeneğini etkinleştirebilirsiniz."
        },
        {
          "question": "Dönüştürülen TXT dosyam neden yinelenen satırlar içeriyor?",
          "answer": "Yinelenen satırlar genellikle orijinal SRT dosyasının canlı yayınlarda kayan altyazı kullanmasından veya otomatik ses tanıma sisteminin önceki kelimeleri tekrar etmesinden kaynaklanır. Metin düzenleyicinizde bu kısımları kolayca tespit edip silebilirsiniz."
        },
        {
          "question": "Bir SRT dosyasını düz metin olarak açabilir miyim?",
          "answer": "Evet, SRT dosyaları özel uzantılı düz metin dosyalarıdır. Bunları Not Defteri veya TextEdit ile açabilirsiniz ancak tüm zaman kodlarını görürsünüz. Aracımızla dönüştürdüğünüzde yalnızca okunabilir konuşma metnine ulaşırsınız."
        },
        {
          "question": "SRT - TXT dönüşümü farklı dillerdeki altyazılarla çalışır mı?",
          "answer": "Evet, dönüştürücümüz UTF-8 karakter kodlama standardını destekler. Türkçe karakterler (ç, ğ, ı, ö, ş, ü), aksanlı harfler, Latin dışı alfabeler (Kiril, Arapça, İbranice), Asya alfabeleri (Çince, Japonca, Korece) ve özel semboller sorunsuz işlenir."
        }
      ]
    },
    "srtToVtt": {
      "id": "srt-to-vtt",
      "name": "SRT - VTT Dönüştürücü",
      "shortName": "SRT - VTT",
      "badge": "WebVTT Uyumlu",
      "tagline": "SubRip (.SRT) Altyazılarını Modern HTML5 WebVTT (.VTT) Formatına Dönüştürün",
      "description": "Standart SRT altyazılarını HTML5 video oynatıcıları ve web platformları için modern WebVTT formatına dönüştürün.",
      "h1": "SRT - VTT Dönüştürücü",
      "metaTitle": "SRT - VTT Dönüştürücü – Altyazıları WebVTT'ye Dönüştür | SRTConverters",
      "metaDescription": "SubRip (.srt) altyazılarını çevrimiçi WebVTT (.vtt) formatına dönüştürün. HTML5 video oynatıcıları için idealdir.",
      "settingsLabels": {},
      "stepsTitle": "3 Adımda SRT'yi WebVTT'ye Dönüştürme",
      "steps": [
        {
          "step": "1",
          "title": "SRT Dosyası Yükleyin",
          "description": "SRT altyazı metninizi yapıştırın veya .srt dosyasını yükleyin."
        },
        {
          "step": "2",
          "title": "Anında WebVTT Biçimlendirmesi",
          "description": "WEBVTT başlığını ekler ve virgüllü zaman damgalarını noktaya çevirir."
        },
        {
          "step": "3",
          "title": ".VTT Dosyasını İndirin",
          "description": "Web video oynatıcıları için hazır .vtt altyazı dosyasını indirin."
        }
      ],
      "featuresTitle": "Neden SRT'yi WebVTT'ye Dönüştürmeliyim?",
      "features": [
        {
          "title": "HTML5 Video ile Uyumlu",
          "description": "WebVTT, modern web tarayıcıları ve <track> etiketleri için resmi W3C standardıdır.",
          "icon": "globe"
        },
        {
          "title": "Doğru Zaman Kodu Dönüşümü",
          "description": "Milisaniye virgül ayırıcılarını WebVTT standardındaki noktalara dönüştürür.",
          "icon": "check"
        }
      ],
      "faqsTitle": "Sıkça Sorulan Sorular",
      "faqs": [
        {
          "question": "Bir SRT dosyasını VTT'ye nasıl dönüştürürüm?",
          "answer": "Bir SRT dosyasını VTT'ye dönüştürmek için SubRip altyazı metninizi ücretsiz çevrimiçi dönüştürücümüze yapıştırın veya .srt dosyanızı yükleyin. Araç, zorunlu WEBVTT başlığını otomatik olarak ekler ve tüm zaman damgası virgüllerini (00:00:01,000) WebVTT standardına uygun noktalara (00:00:01.000) dönüştürür. Sonucu anında kopyalayabilir veya HTML5 video oynatıcıları için hazır .vtt dosyasını indirebilirsiniz."
        },
        {
          "question": "SRT'yi VTT'ye ücretsiz ve çevrimiçi dönüştürebilir miyim?",
          "answer": "Evet! SRTConverters.com; kayıt, dosya sınırı veya filigran olmadan %100 ücretsizdir. Tüm dönüştürme işlemleri JavaScript ile doğrudan tarayıcınızda gerçekleşir; altyazı dosyalarınız hiçbir zaman sunuculara yüklenmez veya harici veritabanlarında saklanmaz."
        },
        {
          "question": "Sadece dosya uzantısını .srt'den .vtt'ye değiştirmek yeterli mi?",
          "answer": "Hayır. Dosya uzantısını yalnızca yeniden adlandırmak web video oynatıcılarının altyazıları oynatamamasına neden olur. Yeniden adlandırma işlemi, ilk satıra zorunlu 'WEBVTT' başlığını eklemez ve milisaniye virgüllerini noktalara çevirmez. Dosyayı dönüştürücümüzle dönüştürmeniz gerekir."
        },
        {
          "question": "SRT ile VTT arasındaki fark nedir?",
          "answer": "SubRip (.srt), masaüstü oynatıcılar ve video kurgu yazılımları için geliştirilmiş geleneksel bir formattır. WebVTT (.vtt) ise HTML5 <video> öğeleri için tasarlanmış resmi W3C web standardıdır. WebVTT zorunlu 'WEBVTT' başlığı ile başlar, milisaniyeler için nokta kullanır ve CSS biçimlendirmesini (::cue) destekler."
        },
        {
          "question": "FFmpeg kullanarak SRT'yi VTT'ye nasıl dönüştürürüm?",
          "answer": "FFmpeg ile komut satırından SRT dosyasını WebVTT'ye dönüştürmek için: `ffmpeg -i girdi.srt cikti.vtt` komutunu çalıştırın. FFmpeg dosyayı okuyarak geçerli bir WebVTT dosyası oluşturur. Program yüklemeden hızlı dönüştürme yapmak için çevrimiçi dönüştürücümüzü tarayıcınızdan kullanabilirsiniz."
        },
        {
          "question": "VTT dosyam tarayıcımda neden çalışmıyor?",
          "answer": "Altyazılar görünmüyorsa üç noktayı kontrol edin: (1) Dosyanın ilk satırında 'WEBVTT' başlığının olduğundan emin olun, (2) Zaman damgalarının virgül yerine nokta (00:00:01.000) kullandığını doğrulayın ve (3) Web sunucunuzun Content-Type: text/vtt; charset=utf-8 MIME türünü ve CORS izinlerini doğru ilettiğinden emin olun."
        },
        {
          "question": "SRT'yi VTT'ye dönüştürmek altyazı zamanlamasını değiştirir mi?",
          "answer": "Hayır. Doğru bir format dönüşümü her altyazı satırının başlangıç ve bitiş zamanlarını birebir korur. Yalnızca milisaniye ayracı virgülden noktaya çevrilir (örneğin '00:01:23,456', '00:01:23.456' olur). Videonuzla senkronizasyon %100 aynı kalır."
        },
        {
          "question": "SRT'den VTT'ye dönüştürücü altyazı metnini korur mu?",
          "answer": "Evet. Konuşma metinleri, konuşmacı adları ve temel biçimlendirme etiketleri (italikler için <i>, kalın yazılar için <b> gibi) eksiksiz olarak korunur. WebVTT bu standart etiketleri web üzerinde sorunsuz destekler."
        },
        {
          "question": "VTT altyazıları neden WEBVTT başlığına ihtiyaç duyar?",
          "answer": "Resmi W3C WebVTT standardı, geçerli her WebVTT dosyasının ilk satırında 'WEBVTT' dosya imzasının bulunmasını şart koşar. Web tarayıcıları ve medya oynatıcılar altyazıları işlemeden önce dosya geçerliliğini doğrulamak için bu imzayı arar."
        },
        {
          "question": "HTML5 video için hangi altyazı formatını kullanmalıyım: SRT mi VTT mi?",
          "answer": "HTML5 videolar için kesinlikle WebVTT (.vtt) kullanmalısınız. Modern web tarayıcıları WebVTT'yi standart <track> öğesi üzerinden yerel olarak destekler. SRT formatı web tarayıcıları tarafından doğrudan desteklenmez."
        }
      ]
    },
    "vttToSrt": {
      "id": "vtt-to-srt",
      "name": "VTT - SRT Dönüştürücü",
      "shortName": "VTT - SRT",
      "badge": "Evrensel SubRip",
      "tagline": "WebVTT (.VTT) Altyazılarını Standart SubRip (.SRT) Dosyalarına Dönüştürün",
      "description": "WebVTT dosyalarını video düzenleyiciler ve medya oynatıcılarla uyumlu evrensel SubRip (.srt) dosyalarına dönüştürün.",
      "h1": "VTT - SRT Dönüştürücü",
      "metaTitle": "VTT - SRT Dönüştürücü – WebVTT'yi SubRip'e Dönüştür | SRTConverters",
      "metaDescription": "WebVTT (.vtt) dosyalarını ücretsiz çevrimiçi SubRip (.srt) formatına dönüştürün. %100 tarayıcı gizliliği.",
      "settingsLabels": {},
      "stepsTitle": "3 Adımda WebVTT'yi SRT'ye Dönüştürme",
      "steps": [
        {
          "step": "1",
          "title": "WebVTT Dosyası Yükleyin",
          "description": "WebVTT altyazılarınızı yapıştırın veya bir .vtt dosyasını bırakın."
        },
        {
          "step": "2",
          "title": "Otomatik SRT Dönüşümü",
          "description": "WebVTT etiketlerini temizler, her satırı sırayla numaralandırır ve noktaları virgüle dönüştürür.",
          "icon": "file"
        },
        {
          "step": "3",
          "title": "SubRip .SRT İndirin",
          "description": "Premiere, DaVinci Resolve veya VLC için evrensel .srt altyazı dosyanızı kaydedin."
        }
      ],
      "featuresTitle": "Neden VTT'yi SRT'ye Dönüştürmeliyim?",
      "features": [
        {
          "title": "Evrensel Video Düzenleyici Uyumluluğu",
          "description": "SRT; Adobe Premiere, DaVinci Resolve, Final Cut Pro ve VLC oynatıcı tarafından desteklenir.",
          "icon": "video"
        },
        {
          "title": "Sıralı Altyazı Numaralandırma",
          "description": "SubRip standardının gerektirdiği 1, 2, 3... sıra numaralarını otomatik olarak ekler.",
          "icon": "list"
        }
      ],
      "faqsTitle": "Sıkça Sorulan Sorular",
      "faqs": [
        {
          "question": "VTT dosyasını SRT formatına nasıl dönüştürebilirim?",
          "answer": "VTT'yi SRT'ye dönüştürmek için WebVTT altyazı metninizi yapıştırın veya ücretsiz çevrimiçi dönüştürücümüze bir .vtt dosyası yükleyin. Araç, WEBVTT başlığını otomatik olarak kaldırır, milisaniyelerdeki noktaları (00:00:01.000) virgüle (00:00:01,000) çevirir ve 1, 2, 3... sıralı blok numaralandırmasını ekler. Çıktıyı hemen kopyalayabilir veya .srt dosyası olarak indirebilirsiniz."
        },
        {
          "question": "VTT'yi SRT'ye çevrimiçi ve ücretsiz olarak dönüştürebilir miyim?",
          "answer": "Evet! SRTConverters.com; kayıt gerektirmeyen, dosya boyutu sınırı ve filigran içermeyen %100 ücretsiz bir araçtır. Tüm işlemler tarayıcınızda yerel JavaScript ile yürütülür ve dosyalarınız hiçbir sunucuya yüklenmez."
        },
        {
          "question": "Sadece dosya uzantısını .vtt'den .srt'ye değiştirmem yeterli olur mu?",
          "answer": "Hayır. Dosya uzantısını yeniden adlandırmak video düzenleyicilerin ve medya oynatıcıların dosyayı reddetmesine yol açar. Yeniden adlandırma işlemi eksik sıra numaralarını eklemez, noktalı zaman damgalarını virgüle çevirmez ve WEBVTT başlığını temizlemez. Dosyanın dönüştürücümüz ile işlenmesi şarttır."
        },
        {
          "question": "VTT ile SRT formatları arasındaki farklar nelerdir?",
          "answer": "WebVTT (.vtt), HTML5 web videoları için tasarlanmış, 'WEBVTT' başlığına, noktalı zaman damgalarına (00:00:01.500) ve CSS desteğine sahip modern bir web standardıdır. SubRip (.srt) ise video kurgu programları ve masaüstü oynatıcılar için sıra numaraları ve virgüllü zaman damgaları (00:00:01,500) kullanan evrensel bir formattır."
        },
        {
          "question": "FFmpeg ile VTT dosyası SRT formatına nasıl dönüştürülür?",
          "answer": "Bir WebVTT dosyasını FFmpeg komut satırı aracıyla dönüştürmek için: `ffmpeg -i girdi.vtt cikti.srt` komutunu çalıştırabilirsiniz. FFmpeg dosyayı işler ve geçerli bir .srt dosyası oluşturur. Komut satırı kurmak istemiyorsanız, web dönüştürücümüz aynı sonucu tarayıcınızda anında üretir."
        },
        {
          "question": "VTT'yi SRT'ye dönüştürmek altyazı senkronizasyonunu bozar mı?",
          "answer": "Hayır. Standart bir format dönüşümü, her altyazı bloğunun başlangıç ve bitiş zamanlarını birebir korur. Yalnızca milisaniye ayracı noktadan virgüle dönüştürülür (örneğin '00:01:23.456' değeri '00:01:23,456' olur). Video ile senkronizasyon %100 aynı kalır."
        },
        {
          "question": "Dönüştürme sırasında WebVTT stilleri ve ekran konumlarına ne olur?",
          "answer": "Standart SubRip formatı gelişmiş CSS stillerini veya ekran koordinatlarını (line:X% veya align:start gibi) desteklemediği için bu web kodları temizlenir. Kalın ve italik gibi temel etiketler (<b>, <i>) korunur ve altyazı standart olarak ekranın alt ortasında gösterilir."
        },
        {
          "question": "Dönüştürülen SRT dosyam neden video oynatıcıda açılmıyor?",
          "answer": "SRT dosyası açılmıyorsa, en yaygın neden sıralı numaralandırmanın (1, 2, 3...) eksik olması ya da zaman damgalarında virgül yerine nokta bulunmasıdır. Çevrimiçi aracımızla dönüştürme yapmak standartlara tam uyumlu bir SubRip dosyası oluşturur."
        },
        {
          "question": "Dönüştürme işlemi diyalog metinlerini ve satır sonlarını korur mu?",
          "answer": "Evet. Ekranda görünen tüm konuşma metinleri, konuşmacı adları, noktalama işaretleri ve iki satırlı altyazı kırılımları SRT dosyasına eksiksiz aktarılır."
        },
        {
          "question": "SRT dosyaları zaman damgalarında neden nokta yerine virgül kullanır?",
          "answer": "SubRip (.srt) formatı 1990'ların sonunda Fransa'da geliştirilmiştir. Avrupa genelinde ondalık ayırıcı olarak virgül kullanıldığı için SubRip standardı milisaniye ayracı olarak virgülü (00:00:01,500) benimsemiştir. WebVTT ise genel web standartlarına uyum için noktayı tercih etmiştir."
        }
      ]
    },
    "srtToAss": {
      "id": "srt-to-ass",
      "name": "SRT - ASS Dönüştürücü",
      "shortName": "SRT - ASS",
      "badge": "ASS v4+ Uyumlu",
      "tagline": "SubRip (.SRT) Altyazılarını Advanced SubStation Alpha (.ASS) Formatına Dönüştürün",
      "description": "Standart SRT altyazılarını özel yazı tipleri, renkler, kenarlıklar ve hassas ekran konumlandırması içeren ASS formatına dönüştürün.",
      "h1": "SRT - ASS Dönüştürücü",
      "metaTitle": "SRT ASS Dönüştürücü – Altyazıları ASS Formatına Dönüştürün | SRTConverters",
      "metaDescription": "SubRip (.srt) altyazılarını ücretsiz olarak Advanced SubStation Alpha (.ass) formatına dönüştürün. Özel stiller, renkler, konumlandırma ve %100 gizlilik.",
      "settingsLabels": {},
      "stepsTitle": "3 Kolay Adımda SRT Dosyasını ASS Formatına Dönüştürün",
      "steps": [
        {
          "step": "1",
          "title": "SRT Dosyasını Yükleyin veya Yapıştırın",
          "description": ".srt dosyanızı yükleme alanına bırakın veya altyazı metnini doğrudan düzenleyiciye yapıştırın."
        },
        {
          "step": "2",
          "title": "Anında ASS v4.00+ Biçimlendirmesi",
          "description": "Dönüştürücü zaman kodlarını saliselere çevirir, etiketleri uyarlar ve standart ASS başlıklarını oluşturur."
        },
        {
          "step": "3",
          "title": ".ASS Dosyasını İndirin",
          "description": "Oluşturulan kodu kopyalayın veya Aegisub, VLC, MPV ve video düzenleyicilerde kullanıma hazır .ass dosyasını indirin."
        }
      ],
      "featuresTitle": "Neden SRT'den ASS'ye Dönüştürmelisiniz?",
      "features": [
        {
          "title": "Gelişmiş Tipografi ve Renkler",
          "description": "Düz SRT'de desteklenmeyen özel yazı tipleri, metin boyutları, kalın kenarlıklar, gölgeler ve renk stilleri kullanın.",
          "icon": "pen"
        },
        {
          "title": "Hassas Ekran Konumlandırması",
          "description": "Altyazıları ekran koordinatlarıyla (X, Y) istenen noktaya yerleştirerek alttaki grafikleri kapatmasını önleyin.",
          "icon": "grid"
        },
        {
          "title": "%100 Tarayıcı İçi Gizlilik",
          "description": "Tüm işlemler yerel olarak tarayıcınızda gerçekleşir. Dosyalarınız hiçbir harici sunucuya iletilmez.",
          "icon": "shield"
        },
        {
          "title": "Aegisub ve Video Oynatıcı Uyumlu",
          "description": "Aegisub, VLC, MPV, HandBrake, DaVinci Resolve ve Premiere Pro tarafından tanınan geçerli ASS v4.00+ çıktısı.",
          "icon": "check"
        }
      ],
      "faqsTitle": "Sıkça Sorulan Sorular",
      "faqs": [
        {
          "question": "SRT dosyasını ASS formatına nasıl dönüştürürüm?",
          "answer": "Bir SRT dosyasını ASS'ye dönüştürmek için .srt dosyanızı yükleme alanına sürükleyin veya altyazı metninizi ücretsiz çevrimiçi dönüştürücümüze yapıştırın. Aracımız SubRip bloklarınızı anında [Script Info], [V4+ Styles] ve [Events] gibi zorunlu bölümleri içeren resmi Advanced SubStation Alpha (v4.00+) sözdizimine dönüştürür ve .ass dosyanızı indirmeniz için hazır hale getirir."
        },
        {
          "question": "SRT'den ASS'ye dönüştürme işlemi ücretsiz mi?",
          "answer": "Evet, SRT - ASS dönüştürücümüz hiçbir kayıt, günlük dosya sınırı veya filigran olmaksızın %100 ücretsizdir. Tüm işlemler tarayıcınızda JavaScript yardımıyla yerel olarak yürütülür; bu da altyazı dosyalarınızın ve özel transkriptlerinizin asla harici sunuculara aktarılmadığı anlamına gelir."
        },
        {
          "question": "SRT ile ASS altyazıları arasındaki temel fark nedir?",
          "answer": "SRT (SubRip) yalnızca satır numaraları, milisaniye zaman kodları ve sınırlı metin içeren çok temel bir düz metin altyazı biçimidir. ASS (Advanced SubStation Alpha) ise özel yazı tipi aileleri, BGR renk paleti, kalın dış çizgiler, gölgeler, hassas piksel koordinatları ve hece düzeyinde dinamik karaoke animasyonları sunan gelişmiş bir altyazı standardıdır."
        },
        {
          "question": "Dönüştürülen ASS dosyasını Aegisub'da düzenleyebilir miyim?",
          "answer": "Evet. Dönüştürücümüz özellikle Aegisub yazılımıyla tam uyumlu resmi ASS v4.00+ sözdizimi üretir. İndirdiğiniz .ass dosyasını Aegisub'da açarak yazı tipi stillerini, renkleri, ekran konumlandırmasını, karaoke efektlerini veya ses dalga boyu üzerinden hassas zamanlamayı dilediğiniz gibi düzenleyebilirsiniz."
        },
        {
          "question": "Bir .srt dosyasının uzantısını .ass olarak yeniden adlandırmak yeterli midir?",
          "answer": "Hayır. Yalnızca dosya uzantısını .srt'den .ass'ye dönüştürmek, altyazı düzenleyicilerin ve video oynatıcıların hata vermesine veya altyazıyı göstermemesine yol açar. ASS formatı [Script Info], [V4+ Styles] ve Dialogue etkinlik satırları gibi zorunlu dahili bloklar gerektirir. Doğru dosya mimarisi için özel bir dönüştürücü kullanılması şarttır."
        },
        {
          "question": "SRT'den ASS'ye dönüştürme altyazı senkronizasyonunu etkiler mi?",
          "answer": "Hayır. Başlangıç ve bitiş zaman kodlarının tümü eksiksiz biçimde korunur; SRT'nin virgüllü milisaniye gösteriminden (SS:DD:SN,mmm) standart ASS noktalı salise gösterimine (S:DD:SN.ss) tam doğrulukla dönüştürülür. Altyazınızın video ile olan zamanlaması kusursuz kalır."
        },
        {
          "question": "Hangi medya oynatıcıları ASS altyazılarını destekler?",
          "answer": "Modern medya oynatıcıların neredeyse tamamı görsel stilleriyle birlikte ASS altyazılarını destekler; bunlar arasında VLC Media Player, MPV, MPC-HC, PotPlayer ve Plex yer alır. Ayrıca HandBrake ve FFmpeg gibi video araçlarıyla ASS stilleri doğrudan MP4 videolarına kalıcı olarak (hardburn) kazınabilir."
        },
        {
          "question": "Kalın ve italik gibi metin vurgulama etiketleri korunur mu?",
          "answer": "Evet. SRT dosyalarında yer alan yaygın HTML etiketleri (<i>, <b>, <u> ve <font color>), otomatik olarak standart ASS geçersiz kılma etiketlerine ({\\i1}, {\\b1}, {\\u1} ve {\\c&HBBGGRR&}) dönüştürülür; böylece orijinal metin vurgularınız tamamen korunur."
        }
      ]
    },
    "assToSrt": {
          "id": "ass-to-srt",
          "name": "ASS - SRT Dönüştürücü",
          "shortName": "ASS - SRT",
          "badge": "Evrensel SubRip",
          "tagline": "Advanced SubStation Alpha (.ASS) Altyazılarını Temiz SubRip (.SRT) Formatına Dönüştürün",
          "description": "Gelişmiş stillere sahip Advanced SubStation Alpha (.ass / .ssa) altyazılarını evrensel olarak uyumlu temiz SubRip (.srt) dosyalarına dönüştürün. Kod etiketlerini temizleyin, saliseleri milisaniyeye dönüştürün ve altyazılarınızı tüm oynatıcılar için hazır hale getirin.",
          "h1": "ASS - SRT Dönüştürücü Online",
          "metaTitle": "ASS - SRT Dönüştürücü Online – ASS Dosyasını SRT Yapma | SRTConverters",
          "metaDescription": "Advanced SubStation Alpha (.ass) altyazılarını ücretsiz çevrimiçi temiz SubRip (.srt) formatına dönüştürün. Etiketleri temizleyin, zamanlamayı koruyun ve SRT dosyasını anında indirin.",
          "settingsLabels": {},
          "stepsTitle": "ASS Dosyasını 3 Kolay Adımda SRT Formatına Dönüştürün",
          "steps": [
                {
                      "step": "1",
                      "title": "ASS Altyazısını Yükleyin veya Yapıştırın",
                      "description": ".ass veya .ssa dosyanızı yükleme alanına sürükleyip bırakın ya da altyazı metnini doğrudan düzenleyiciye yapıştırın."
                },
                {
                      "step": "2",
                      "title": "Otomatik Etiket Temizliği ve Zamanlama Dönüşümü",
                      "description": "Tarayıcı tabanlı dönüştürücümüz diyalogları ayıklar, saliseleri milisaniyeye çevirir ve karmaşık ASS stil etiketlerini temizler."
                },
                {
                      "step": "3",
                      "title": "Temiz .SRT Dosyasını İndirin",
                      "description": "Dönüştürülen SubRip metnini panoya kopyalayın veya Smart TV, Plex, VLC ve telefonlarda hemen oynatmak üzere .srt dosyasını indirin."
                }
          ],
          "featuresTitle": "Neden ASS Dosyasını SRT Formatına Dönüştürmelisiniz?",
          "features": [
                {
                      "title": "Evrensel Medya Oynatıcı Uyumluluğu",
                      "description": "SubRip (.srt) dünyadaki en yaygın altyazı formatıdır; Smart TV'lerde, oyun konsollarında ve mobil cihazlarda sorunsuz bir şekilde doğrudan oynatılır.",
                      "icon": "globe"
                },
                {
                      "title": "Akıllı Stil ve Etiket Temizliği",
                      "description": "Konumlandırma (\\pos), hizalama (\\an), renk (\\c) ve vektör çizim (\\p1) kodlarını temizlerken kalın, italik ve altı çizili metin vurgularını korur.",
                      "icon": "sparkles"
                },
                {
                      "title": "Saliseden Milisaniyeye Kusursuz Zaman Eşitleme",
                      "description": "ASS formatındaki saliseleri (H:MM:SS.cs) tam milisaniye (HH:MM:SS,mmm) değerlerine dönüştürerek ses ve görüntü senkronizasyonunu korur.",
                      "icon": "clock"
                },
                {
                      "title": "%100 Tarayıcı İçi Gizlilik",
                      "description": "Tüm dönüştürme işlemi tarayıcınızın belleğinde yerel olarak gerçekleştirilir. Hiçbir altyazı verisi harici sunuculara iletilmez.",
                      "icon": "shield"
                }
          ],
          "faqsTitle": "Sıkça Sorulan Sorular",
          "faqs": [
                {
                      "question": "ASS ve SRT altyazıları arasındaki fark nedir?",
                      "answer": "Advanced SubStation Alpha (.ass), özel yazı tipleri, ekran koordinatları, çizimler ve karaoke efektleri sunan zengin bir formattır. SubRip (.srt) ise hemen her video oynatıcı, televizyon ve mobil cihazda evrensel olarak çalışan sade bir düz metin formatıdır."
                },
                {
                      "question": "ASS'den SRT'ye dönüştürürken renkler ve konumlar kaybolur mu?",
                      "answer": "Evet; ekran koordinatları (\\pos), hizalama kodları (\\an), karaoke efektleri (\\k) ve özel renkler kaldırılır çünkü standart SRT özellikleri bunları desteklemez. Ancak kalın (<b>), italik (<i>) ve altı çizili (<u>) gibi temel vurgular korunur."
                },
                {
                      "question": "Bu dönüştürücü ASS dosyasındaki kalın ve italik yazıları korur mu?",
                      "answer": "Evet. {\\b1} ve {\\i1} gibi ASS kontrol kodları standart biçimlendirme etiketlerine (<b> ve <i>) dönüştürülür, böylece diyaloglardaki önemli vurgular uyumlu oynatıcılarda görüntülenmeye devam eder."
                },
                {
                      "question": "Dönüştürücü ASS saliselerini ve zaman damgalarını nasıl işler?",
                      "answer": "ASS dosyaları zaman damgalarını salise (saniyenin yüzde biri, H:MM:SS.cs) cinsinden tutarken, SRT dosyaları milisaniye (HH:MM:SS,mmm) kullanır. Aracımız tam milisaniye karşılığını hesaplar (örneğin 0:01:23.45 zamanı 00:01:23,450 olur) ve ses senkronizasyonunda kayma yaşanmaz."
                },
                {
                      "question": "Aynı anda konuşulan veya çakışan ASS diyalogları nasıl aktarılır?",
                      "answer": "Anime altyazılarında şarkı sözleri veya aynı andaki replikler çakıştığında dönüştürücümüz bunları kronolojik sıraya dizer ve SRT dosyasında bağımsız numaralandırılmış bloklar olarak düzenler."
                },
                {
                      "question": "Plex veya Smart TV'de izlemek için anime (.ass) altyazılarını SRT'ye dönüştürebilir miyim?",
                      "answer": "Kesinlikle! Bu, en yaygın kullanım amaçlarından biridir. Çoğu Smart TV ve Plex istemcisi karmaşık ASS stillerini oynatırken sunucuyu gereksiz dönüştürmeye (transcoding) zorlar. Temiz SRT'ye geçmek doğrudan ve akıcı oynatma sağlar."
                },
                {
                      "question": "FFmpeg komut satırı aracıyla ASS dosyasını SRT yapabilir miyim?",
                      "answer": "Evet, komut satırında: ffmpeg -i girdi.ass -c:s srt cikti.srt komutunu kullanabilirsiniz. Ancak web sitemizdeki araç program kurulumu gerektirmez, anlık önizleme sunar ve telefonlarda da çalışır."
                },
                {
                      "question": "Altyazı dosyalarım sunucuya yükleniyor mu, gizliliğim güvende mi?",
                      "answer": "Dosyalarınız tamamen güvendedir. Tüm işlemler JavaScript ile doğrudan cihazınızın tarayıcısında gerçekleşir. Hiçbir veri internete aktarılmaz veya kaydedilmez."
                }
          ]
    },
    "srtToSub": {
          "id": "srt-to-sub",
          "name": "SRT - SUB Dönüştürücü",
          "shortName": "SRT - SUB",
          "badge": "Ücretsiz ve Güvenli",
          "tagline": "SubRip (.SRT) Altyazılarını Çevrimiçi MicroDVD ve SubViewer (.SUB) Formatına Dönüştürün",
          "description": "SubRip (.srt) altyazılarını ücretsiz çevrimiçi SUB formatına (MicroDVD ve SubViewer 2.0) dönüştürün. Özel kare hızı (FPS) ayarları ve %100 tarayıcı gizliliği.",
          "h1": "SRT - SUB Dönüştürücü Online",
          "metaTitle": "SRT - SUB Dönüştürücü – Altyazıyı SUB Formatına Çevirme | SRTConverters",
          "metaDescription": "SubRip (.srt) altyazılarını ücretsiz çevrimiçi SUB formatına (MicroDVD ve SubViewer) dönüştürün. Özel kare hızı (FPS) ayarları ve %100 tarayıcı gizliliği.",
          "settingsLabels": {
                "timingMode": "Altyazı Formatı",
                "fixedDuration": "MicroDVD (.sub)",
                "cpsDuration": "SubViewer 2.0 (.sub)",
                "cpsLabel": "Video Kare Hızı (FPS)",
                "cpsHint": "Altyazı senkronizasyonunun kusursuz olması için videonuzun kare hızını seçin.",
                "startTime": "FPS Başlığını Ekle",
                "startTimeHint": "Oynatıcıların otomatik tanıması için MicroDVD dosyasına {1}{1}FPS başlık satırını ekler.",
                "maxCharsPerLine": "HTML Etiketlerini Temizle",
                "maxCharsHint": "Eski DVD oynatıcılarla tam uyumluluk için <i>, <b> ve yazı tipi etiketlerini siler."
          },
          "stepsTitle": "3 Adımda SRT Dosyasını SUB Formatına Çevirme",
          "steps": [
                {
                      "step": "1",
                      "title": "SRT Dosyasını Yükleyin veya Yapıştırın",
                      "description": ".srt dosyanızı yükleme alanına sürükleyip bırakın veya SubRip altyazı metnini editöre yapıştırın."
                },
                {
                      "step": "2",
                      "title": "Formatı ve Video Kare Hızını (FPS) Seçin",
                      "description": "MicroDVD veya SubViewer formatını seçin ve videonuzun kare hızını (ör. 23.976, 24, 25 veya 29.97 FPS) belirleyin."
                },
                {
                      "step": "3",
                      "title": "Dönüştürülen SUB Dosyasını İndirin",
                      "description": "Altyazı dosyasını hemen kaydetmek için .SUB İndir butonuna tıklayın veya metni panoya kopyalayın."
                }
          ],
          "featuresTitle": "Neden Çevrimiçi SRT - SUB Dönüştürücümüzü Seçmelisiniz?",
          "features": [
                {
                      "title": "%100 Tarayıcı İçi Gizlilik",
                      "description": "Dönüştürme işlemi tamamen tarayıcınızda gerçekleşir. Dosyalarınız hiçbir zaman harici bir sunucuya yüklenmez.",
                      "icon": "shield"
                },
                {
                      "title": "MicroDVD ve SubViewer Desteği",
                      "description": "Kare tabanlı MicroDVD ({başlangıç}{bitiş}) ve zaman damgalı SubViewer 2.0 formatlarıyla tam uyumluluk.",
                      "icon": "file"
                },
                {
                      "title": "Kare Hassasiyetinde Senkronizasyon",
                      "description": "Kaymaları önlemek için 23.976, 24.0, 25.0 (PAL), 29.97 (NTSC), 30 ve 60 FPS endüstri standartlarını destekler.",
                      "icon": "clock"
                },
                {
                      "title": "Eski Donanımlarla Tam Uyum",
                      "description": "Masaüstü DVD oynatıcılar, araç multimedya ekranları ve DivX/XviD cihazları için temiz .sub dosyaları üretir.",
                      "icon": "split"
                }
          ],
          "faqsTitle": "SRT - SUB Dönüştürme Hakkında Sıkça Sorulan Sorular",
          "faqs": [
                {
                      "question": "SRT dosyası ile SUB dosyası arasındaki fark nedir?",
                      "answer": "SRT (SubRip), altyazı satırlarını milisaniye cinsinden gerçek zaman damgalarıyla (00:01:23,450 --> 00:01:26,800) tanımlayan ve modern tarayıcılarda, yazılımlarda ve akıllı televizyonlarda evrensel olarak desteklenen modern bir formattır. Metin tabanlı SUB dosyaları ise — özellikle MicroDVD (.sub) — video kare numaralarını ({başlangıç_karesi}{bitiş_karesi}) temel alan kare tabanlı bir altyazı formatıdır. .sub uzantısını kullanan diğer bir metin formatı ise salise kullanan SubViewer 2.0'dır. SRT'yi SUB'a dönüştürmek, yalnızca kare indeksli .sub dosyalarını kabul eden eski DVD oynatıcılar, otomobil ekranları ve retro medya kutularında video izlemek için gereklidir."
                },
                {
                      "question": "SRT'yi SUB'a dönüştürürken neden bir kare hızı (FPS) seçmem gerekiyor?",
                      "answer": "MicroDVD altyazı dosyaları satırların ekranda görünme anını milisaniyeler yerine video kareleriyle hesapladığı için, dönüştürücünün zaman damgalarını videonuzun tam kare hızıyla çarpması gerekir (Kare = Saniye Cinsinden Zaman × FPS). Eğer videonuz 23.976 FPS (sinema / NTSC) ile kaydedilmişken siz 25.000 FPS (PAL) seçerek dönüştürme yaparsanız, film ilerledikçe altyazılar kademeli olarak kayacaktır. Doğru FPS değerini seçmek film boyunca kusursuz bir senkronizasyon sağlar."
                },
                {
                      "question": "MicroDVD (.sub), SubViewer (.sub) ve VobSub (.sub) arasındaki fark nedir?",
                      "answer": ".sub dosya uzantısı tarihsel olarak birbirinden tamamen farklı üç format tarafından paylaşılır: MicroDVD (.sub), DivX/XviD çağında yaygınlaşan kare tabanlı hafif bir metin formatıdır ({1250}{1380}Diyalog); SubViewer 2.0 (.sub), [INFORMATION] başlığı ve salise zaman damgaları içeren bir metin formatıdır (00:01:20.10,00:01:23.45); VobSub (.sub + .idx) ise bir metin dosyası DEĞİLDİR, DVD disklerinden çıkarılmış piksel tabanlı grafik görüntüleridir. Aracımız modern ve eski donanımlarla çalışan standart metin SUB dosyaları üretir."
                },
                {
                      "question": "Videomun gerçek kare hızını (FPS) nasıl öğrenebilirim?",
                      "answer": "Videonuzun kesin kare hızını çok kolay bir şekilde bulabilirsiniz: VLC Media Player'da videoyu açın, Araçlar > Kodlayıcı Bilgileri yolunu izleyin (veya Ctrl+J / Cmd+I tuşlarına basın), Kodlayıcı sekmesinde Kare hızı değerine bakın (örneğin 23.976023, 24, 25 veya 29.970000). Windows'ta video dosyasına sağ tıklayıp Özellikler > Ayrıntılar sekmesinden Kare hızını görebilirsiniz. macOS'ta videoyu QuickTime Player ile açıp Cmd+I tuşlayarak Film Denetçisi'nden inceleyebilirsiniz. Ücretsiz MediaInfo programı da bu değeri net olarak sunar."
                },
                {
                      "question": "Dönüştürdüğüm SUB altyazıları video oynatılırken neden senkronizasyonunu kaybediyor?",
                      "answer": "Başlangıçta senkronize olup film ilerledikçe öne geçen veya geride kalan altyazıların sebebi neredeyse her zaman oluşturulan MicroDVD dosyası ile video arasındaki FPS uyumsuzluğudur. Örneğin videonuz 23.976 FPS iken 25.000 FPS ile dönüştürme yaptıysanız, altyazı yaklaşık %4,1 daha hızlı akar (dakikada yaklaşık 2,5 saniye fark). Çözüm için VLC veya MediaInfo ile videonun gerçek FPS değerini doğrulayın ve SRT dosyanızı aynı değerle yeniden dönüştürün."
                },
                {
                      "question": "Bir SUB dosyasını tekrar SRT formatına dönüştürebilir miyim?",
                      "answer": "Evet. Metin tabanlı MicroDVD (.sub) ve SubViewer (.sub) altyazıları kolayca SubRip (.srt) formatına geri dönüştürülebilir. MicroDVD formatında, kare numaralarını videonun kare hızına bölerek milisaniye zaman damgalarını elde edersiniz: Zaman = Kare Numarası / FPS. Bu işlemi Subtitle Edit, Aegisub veya SRTConverters sitemizdeki dönüştürücülerle yapabilirsiniz."
                },
                {
                      "question": "Dönüştürme sırasında altyazı dosyalarım sunucuya yükleniyor mu?",
                      "answer": "Hayır. SRTConverters, istemci tarafı JavaScript kullanarak tamamen web tarayıcınızda yerel olarak çalışır. SRT altyazı dosyalarınız, metinleriniz ve oluşturulan SUB dosyaları yalnızca cihazınızın geçici belleğinde işlenir. Sunucularımıza hiçbir veri gönderilmez veya kaydedilmez."
                },
                {
                      "question": "FFmpeg ile komut satırından SRT dosyasını SUB formatına nasıl dönüştürürüm?",
                      "answer": "FFmpeg kullanarak SRT dosyasını MicroDVD SUB formatına altyazı codec bileşenini belirterek dönüştürebilirsiniz: ffmpeg -i input.srt -c:s microdvd output.sub. Toplu işlemlerde veya video birleştirmede belirli bir kare hızını zorlamak isterseniz kare hızı parametresini ekleyebilirsiniz: ffmpeg -i input.srt -r 23.976 -c:s microdvd output.sub. Bu yöntem otomatik iş akışları ve kabuk betikleri için idealdir."
                }
          ]
    },
    "subToSrt": {
          "id": "sub-to-srt",
          "name": "SUB - SRT Dönüştürücü",
          "shortName": "SUB - SRT",
          "badge": "Ücretsiz ve Tarayıcı Tabanlı",
          "tagline": "MicroDVD ve SubViewer (.SUB) Altyazılarını Çevrimiçi Olarak Standart SubRip (.SRT) Formatına Dönüştürün",
          "description": "SUB altyazılarını (MicroDVD ve SubViewer) çevrimiçi ve ücretsiz olarak temiz SubRip (.srt) formatına dönüştürün. Otomatik FPS algılama, karelerden milisaniyeye hassas zamanlama ve %100 tarayıcı gizliliği.",
          "h1": "SUB - SRT Dönüştürücü Online",
          "metaTitle": "SUB - SRT Dönüştürücü Online – SUB Dosyasını SRT'ye Ücretsiz Dönüştürün | SRTConverters",
          "metaDescription": "SUB altyazılarını (MicroDVD ve SubViewer) çevrimiçi ve ücretsiz olarak temiz SubRip (.srt) formatına dönüştürün. Otomatik FPS algılama, karelerden milisaniyeye hassas zamanlama ve %100 tarayıcı gizliliği.",
          "settingsLabels": {
                "timingMode": "Algılanan Format",
                "fixedDuration": "Otomatik Algılama",
                "cpsDuration": "MicroDVD ({kare}{kare})",
                "cpsLabel": "Video Kare Hızı (FPS)",
                "cpsHint": "Altyazı senkronizasyonunun kusursuz olması için videonuzun kare hızını (FPS) seçin.",
                "startTime": "FPS Başlığını Senkronize Et",
                "startTimeHint": "Varsa MicroDVD dosyasındaki {1}{1}FPS başlık satırını otomatik olarak okur.",
                "maxCharsPerLine": "Biçimlendirme Etiketlerini Dönüştür",
                "maxCharsHint": "{Y:i} etiketlerini <i> etiketine ve boru (|) karakterlerini standart satır sonlarına çevirir."
          },
          "stepsTitle": "SUB Dosyasını 3 Kolay Adımda Çevrimiçi Olarak SRT'ye Dönüştürme",
          "steps": [
                {
                      "step": "1",
                      "title": "SUB Altyazınızı Yükleyin veya Yapıştırın",
                      "description": ".sub dosyanızı yükleme alanına sürükleyip bırakın veya MicroDVD ya da SubViewer metninizi doğrudan düzenleyiciye yapıştırın."
                },
                {
                      "step": "2",
                      "title": "Video Kare Hızını (FPS) Doğrulayın",
                      "description": "Dosyanız MicroDVD formatındaysa, kare sayılarının tam saat ve dakikaya dönüşmesi için videonun kare hızını (örn. 23.976, 24, 25 veya 29.97 FPS) kontrol edin."
                },
                {
                      "step": "3",
                      "title": "Dönüştürülen SRT Dosyasını İndirin",
                      "description": "Dönüştürülmüş SubRip dosyanızı anında kaydetmek için .SRT İndir butonuna tıklayın veya metni doğrudan panoya kopyalayın."
                }
          ],
          "featuresTitle": "Neden Çevrimiçi SUB - SRT Dönüştürücümüzü Tercih Etmelisiniz?",
          "features": [
                {
                      "title": "%100 Tarayıcı İçi Gizlilik",
                      "description": "Altyazı dosyalarınız tamamen web tarayıcınızda işlenir. Hiçbir veri veya dosya harici bir sunucuya yüklenmez veya saklanmaz.",
                      "icon": "shield"
                },
                {
                      "title": "MicroDVD ve SubViewer Otomatik Algılama",
                      "description": "Kare tabanlı MicroDVD dosyalarını, SubViewer 2.0/1.0 yapılarını ve yerleşik {1}{1}FPS başlık parametrelerini otomatik olarak tanır.",
                      "icon": "file"
                },
                {
                      "title": "Milisaniye Hassasiyetinde Zamanlama",
                      "description": "Sinema, PAL ve NTSC yayın standartlarındaki tüm kare hızları için milisaniye düzeyinde hatasız zaman kodları hesaplar.",
                      "icon": "clock"
                },
                {
                      "title": "VobSub Tespiti ve Etiket Temizliği",
                      "description": "DVD VobSub ikili grafik dosyalarını algılayarak uyarır; boru (|) ayraçlarını ve stil kodlarını standart SRT biçimine dönüştürür.",
                      "icon": "split"
                }
          ],
          "faqsTitle": "SUB - SRT Dönüştürme Hakkında Sıkça Sorulan Sorular",
          "faqs": [
                {
                      "question": "SUB dosyası ile SRT dosyası arasındaki fark nedir?",
                      "answer": "SRT (SubRip), modern metin altyazıları için küresel standarttır. Her altyazı bloğunu sıralı sayaç numaraları ve milisaniye hassasiyetinde mutlak saat zaman damgaları ile tanımlar (00:01:23,450 --> 00:01:26,800). SRT; modern medya oynatıcıları, akıllı televizyonlar, video düzenleme yazılımları (Premiere, DaVinci Resolve) ve yayın platformları (YouTube, Netflix) tarafından doğrudan desteklenir. Buna karşılık metin tabanlı SUB dosyaları—özellikle MicroDVD (.sub)—zaman yerine video kare numaralarını ({başlangıç_karesi}{bitiş_karesi}) kullanır; bu nedenle doğru gösterim videonun kare hızına (FPS) bağlıdır. SubViewer (.sub) ise saniyenin yüzde birini kullanır. SUB'u SRT'ye dönüştürmek, altyazılarınızı eski oynatıcılara gerek kalmadan tüm modern cihazlarda sorunsuz çalışır hale getirir."
                },
                {
                      "question": "MicroDVD'yi SRT'ye dönüştürürken neden video kare hızı (FPS) seçmeliyim?",
                      "answer": "MicroDVD dosyalarında saat, dakika veya saniye yer almaz; yalnızca altyazının hangi video karesinde ekranda belireceği ve kaybolacağı yazılıdır (örneğin: {1200}{1350}Diyalog satırı). Bu kare numaralarını standart SRT milisaniye zaman damgalarına dönüştürmek için dönüştürücünün şu formülü uygulaması gerekir: Milisaniye = Yuvarla((Kare Numarası / Video FPS) × 1000). Eğer 23.976 FPS (sinema/NTSC) ile çekilmiş bir videonun altyazısını 25 FPS (PAL) ile dönüştürürseniz, altyazılar her dakikada yaklaşık 2,5 saniye kayacaktır. Doğru FPS değerini seçmek, filmin başından sonuna kadar tam senkronizasyon sağlar."
                },
                {
                      "question": "MicroDVD (.sub), SubViewer (.sub) ve VobSub (.sub) arasındaki farklar nelerdir?",
                      "answer": ".sub dosya uzantısı tarihsel olarak birbirinden tamamen farklı üç altyazı teknolojisini ifade eder: 1. MicroDVD (.sub), DivX/XviD döneminde yaygınlaşan süslü parantezli kare numaralarına dayalı ({başlangıç}{bitiş}Satır1|Satır2) hafif bir metin formatıdır; 2. SubViewer (.sub), [INFORMATION] başlığı ve saniyenin yüzde biri cinsinden zaman damgaları (00:01:20.50,00:01:23.80) içeren metin formatıdır; 3. VobSub (.sub + .idx), DVD video disklerinden çıkarılan raster piksel grafiklerini (bitmap) içeren ikili bir formattır. Aracımız MicroDVD ve SubViewer metin formatlarını hatasız dönüştürür, ikili bir VobSub dosyası yüklediğinizde ise sizi anında bilgilendirir."
                },
                {
                      "question": "Video dosyamın doğru kare hızını (FPS) nasıl bulabilirim?",
                      "answer": "Videonuzun kesin kare hızını ücretsiz medya araçlarıyla kolayca öğrenebilirsiniz: VLC Media Player'da videoyu oynatın, Araçlar > Kodlayıcı Bilgileri yolunu izleyin (veya Ctrl+J / Cmd+I tuşlarına basın), Kodlayıcı sekmesinde 'Kare hızı' değerine bakın (örneğin 23.976023, 24, 25 veya 29.970000). Windows Gezgini'nde video dosyasına sağ tıklayıp Özellikler'i seçin, Ayrıntılar sekmesindeki 'Kare hızı' değerini inceleyin. macOS'ta videoyu QuickTime Player ile açıp Cmd+I tuşlarına basarak Denetçi penceresini görüntüleyin. Ayrıntılı teknik bilgi için ücretsiz MediaInfo programını da kullanabilirsiniz."
                },
                {
                      "question": "Dönüştürdüğüm SRT altyazıları video oynatılırken neden zamanla kayıyor?",
                      "answer": "Kademeli senkronizasyon kaybı—yani altyazıların başta tam oturup video ilerledikçe öne geçmesi veya geride kalması—neredeyse her zaman dönüştürme sırasında yanlış FPS seçilmesinden kaynaklanır. Örneğin, 23.976 FPS bir videoyu 25.000 FPS seçeneğiyle dönüştürmek, altyazıların ses parçasına göre %4,1 daha hızlı ilerlemesine yol açar ve birkaç dakika içinde bariz senkron kayması yaratır. Çözmek için VLC veya MediaInfo üzerinden videonun gerçek FPS değerini tespit edin, dönüştürücümüzde aynı değeri seçip işlemi tekrarlayın. MicroDVD dosyanız `{1}{1}FPS` başlığını içeriyorsa sistemimiz bunu otomatik olarak okuyacaktır."
                },
                {
                      "question": "Bu dönüştürücü DVD'lerden çıkarılan VobSub (.sub) ikili dosyalarını dönüştürebilir mi?",
                      "answer": "Hayır. VobSub (.sub) dosyaları düz metin belgeleri değildir; doğrudan DVD video disklerinden kopyalanan piksel tabanlı bitmap grafik görüntüleridir. Bunlar karakter metni yerine resim piksellerinden oluştuğu için SRT formatına dönüştürülmeleri harfleri optik olarak okuyabilen bir OCR (Optik Karakter Tanıma) yazılımı gerektirir. Bir VobSub dosyası yüklerseniz, dönüştürücümüz ikili dosya yapısını anında algılar ve Subtitle Edit, BDSup2Sub veya OCR-SubRip gibi masaüstü OCR araçlarını kullanmanızı öneren bir bilgilendirme mesajı gösterir."
                },
                {
                      "question": "Altyazı dosyalarım dönüştürme sırasında harici bir sunucuya yükleniyor mu?",
                      "answer": "Hayır. SRTConverters, modern Web API'leri ve istemci tarafı JavaScript kullanarak tamamen tarayıcınızın belleğinde çalışır. Altyazı dosyalarınız, yapıştırdığınız metinler ve oluşturulan SRT çıktıları hiçbir zaman cihazınızdan dışarı çıkmaz. İnternet üzerinden veri aktarılmaz veya sunucularımızda saklanmaz; bu sayede tam gizlilik, kurumsal güvenlik ve anında dönüştürme hızı sağlanır."
                },
                {
                      "question": "Komut satırında FFmpeg kullanarak SUB dosyasını SRT'ye nasıl dönüştürebilirim?",
                      "answer": "Terminal üzerinden FFmpeg ile SUB dosyalarını SRT'ye dönüştürebilirsiniz. Zaman damgalı SubViewer dosyaları için: ffmpeg -i girdi.sub cikti.srt komutu yeterlidir. Kare tabanlı MicroDVD dosyalarında ise zamanların doğru hesaplanabilmesi için -r parametresiyle video kare hızını belirtmelisiniz: ffmpeg -r 23.976 -i girdi.sub cikti.srt. Dosyanız Türkçe karakterler içeren ANSI veya Windows-1254 kodlamasına sahipse karakter kodlama parametresini ekleyebilirsiniz: ffmpeg -sub_charenc CP1254 -r 25 -i girdi.sub cikti.srt. Bu yöntem toplu dönüştürme işlemleri için oldukça pratiktir."
                }
          ]
    },
    sbvToSrt: {
      "id": "sbv-to-srt",
      "name": "SBV - SRT Dönüştürücü",
      "shortName": "SBV - SRT",
      "badge": "Ücretsiz & Tarayıcıda",
      "tagline": "YouTube Altyazılarını (.SBV) Standart SubRip (.SRT) Formatına Online Dönüştürün",
      "description": "YouTube SBV ve SubViewer altyazı dosyalarını ücretsiz olarak standart SubRip (.srt) formatına dönüştürün. Otomatik zaman damgası düzeltme, HTML varlıklarını temizleme ve anında SRT indirme.",
      "h1": "SBV - SRT Dönüştürücü Online",
      "metaTitle": "SBV - SRT Dönüştürücü Online – YouTube Altyazılarını SRT'ye Dönüştürün | SRTConverters",
      "metaDescription": "YouTube SBV ve SubViewer altyazı dosyalarını ücretsiz olarak temiz SubRip (.srt) formatına dönüştürün. Zaman damgalarını otomatik biçimlendirin ve anında indirin.",
      "settingsLabels": {
            "timingMode": "Altyazı Temizleme Seçenekleri",
            "fixedDuration": "HTML Varlıklarını Çözümle",
            "cpsDuration": "&amp;, &#39;, &quot;, &lt;, &gt; kodlarını temiz metne dönüştürür",
            "cpsLabel": "Ses Açıklamalarını Kaldır",
            "cpsHint": "Diyaloglardan [Müzik], [Alkış] ve efekt ibarelerini siler",
            "startTime": "Boşlukları Normalleştir",
            "startTimeHint": "Gereksiz boşlukları ve boş altyazı satırlarını temizler"
      },
      "stepsTitle": "3 Adımda Online SBV'yi SRT'ye Dönüştürme",
      "steps": [
            {
                  "step": "1",
                  "title": "SBV Altyazısını Yükleyin veya Yapıştırın",
                  "description": "YouTube .sbv dosyanızı yükleme alanına sürükleyip bırakın veya metni doğrudan giriş alanına yapıştırın."
            },
            {
                  "step": "2",
                  "title": "Temizleme Tercihlerini Belirleyin",
                  "description": "HTML kod çözme (&amp;, &#39;) seçeneğini etkinleştirin ve [Müzik] gibi otomatik ses ibarelerini kaldırmayı seçin."
            },
            {
                  "step": "3",
                  "title": "Dönüştürülen SRT Dosyasını İndirin",
                  "description": "SubRip dosyanızı anında kaydetmek için .SRT İndir butonuna tıklayın veya biçimlendirilmiş metni panonuza kopyalayın."
            }
      ],
      "featuresTitle": "Neden Online SBV - SRT Dönüştürücümüzü Seçmelisiniz?",
      "features": [
            {
                  "title": "Kusursuz Milisaniye Doğruluğu",
                  "description": "Her zaman damgası milisaniyesine kadar korunur, SBV ondalık noktaları standart SRT virgüllerine ve iki basamaklı saatlere dönüştürülür.",
                  "icon": "zap"
            },
            {
                  "title": "Otomatik HTML Kod Çözme",
                  "description": "YouTube altyazıları çoğunlukla &amp; ve &#39; gibi kodlar içerir. Aracımız bunları temiz ve okunabilir karakterlere çevirir.",
                  "icon": "layers"
            },
            {
                  "title": "Ses Efekti Filtreleme",
                  "description": "[Müzik] ve [Alkış] gibi otomatik ses etiketlerini kolayca kaldırarak profesyonel diyalog altyazıları elde edin.",
                  "icon": "shield"
            },
            {
                  "title": "%100 Tarayıcı İçi Gizlilik",
                  "description": "Tüm dönüştürme işlemi tarayıcınızda yerel olarak çalışır. Dosyalarınız hiçbir zaman sunuculara yüklenmez veya kaydedilmez.",
                  "icon": "split"
            }
      ],
      "faqsTitle": "SBV - SRT Dönüştürme Hakkında Sıkça Sorulan Sorular",
      "faqs": [
            {
                  "question": "SBV dosyası nedir ve SRT dosyasından nasıl ayrılır?",
                  "answer": "YouTube SubViewer formatı olarak da bilinen SBV (.sbv) dosyası, Google tarafından YouTube altyazıları için geliştirilmiş düz metin altyazı formatıdır. SBV dosyasında her altyazı bloğu, sıra numarası olmadan doğrudan virgülle ayrılmış bir zaman damgası çiftiyle (örneğin 0:00:01.000,0:00:04.500) ve ardından gelen diyalogla başlar. SubRip (.srt) ise video oynatıcılar ve kurgu yazılımları için evrensel standarttır; sıra numarası (1, 2, 3...), milisaniyeden önce virgüllü ok ayracı (' --> ') ve iki basamaklı saat formatı (00:00:01,000 --> 00:00:04,500) gerektirir. SBV'yi SRT'ye dönüştürmek, YouTube altyazılarınızı Premiere Pro, DaVinci Resolve, VLC ve Plex'te sorunsuz kullanmanızı sağlar."
            },
            {
                  "question": "YouTube Studio altyazıları neden .srt yerine .sbv formatında dışa aktarır?",
                  "answer": "YouTube, otomatik altyazı sisteminin ilk dönemlerinde sıra numarası gerektirmeyen ve başlangıç/bitiş zamanını tek bir virgülle bağlayan sade SubViewer (.sbv) formatını tercih etmiştir. Ancak video kurgu programları ve akıllı televizyonlar .sbv formatını doğrudan desteklemediği için .srt formatına dönüştürme yapılması gerekir."
            },
            {
                  "question": "YouTube Studio'dan SBV altyazı dosyası nasıl indirilir?",
                  "answer": "Altyazılarınızı indirmek için: (1) YouTube Studio'da oturum açın ve soldaki menüden 'Altyazılar'ı seçin. (2) İlgili videoya tıklayın. (3) Yayınlanan veya otomatik altyazı satırının yanındaki üç nokta simgesine (Seçenekler) tıklayın ve 'İndir'i seçin. (4) '.sbv' (veya SubViewer) seçeneğini tıklayın. İndirilen 'captions.sbv' dosyasını sitemizdeki dönüştürücüye kolayca yükleyebilirsiniz."
            },
            {
                  "question": "SBV zaman damgaları standart SubRip SRT zaman damgalarından nasıl farklıdır?",
                  "answer": "SBV zaman damgaları başlangıç ve bitiş arasında tek bir virgül ve milisaniyelerden önce nokta kullanır; saatler genellikle tek basamaklıdır: '0:01:23.450,0:01:27.800'. SubRip SRT ise boşluklu ok ayracı (' --> '), milisaniyeden önce virgül ve iki basamaklı saat gerektirir: '00:01:23,450 --> 00:01:27,800'. Ayrıca her bloğun üstünde sıra numarası bulunur. Dönüştürücümüz tüm bu biçimlendirmeleri otomatik olarak gerçekleştirir."
            },
            {
                  "question": "YouTube SBV dosyamda neden &amp; ve &#39; gibi kodlar görünüyor?",
                  "answer": "YouTube, özel karakterlerin web tarayıcılarında hatasız görünmesi için bunları HTML varlıkları olarak dışa aktarır. Örneğin '&' işareti '&amp;', kesme işareti/tek tırnak '&#39;' ve çift tırnak '&quot;' olarak kodlanır. Masaüstü oynatıcılarda veya video kurgu programlarında bu kodlar metin gibi görünerek okumayı bozar. Aracımız bu HTML varlıklarını otomatik olarak gerçek noktalama işaretlerine dönüştürür."
            },
            {
                  "question": "Dönüştürülen SRT altyazılarını Premiere Pro, DaVinci Resolve ve Final Cut Pro'ya aktarabilir miyim?",
                  "answer": "Evet. Standart SubRip (.srt) formatı, Adobe Premiere Pro, DaVinci Resolve, Apple Final Cut Pro, Avid Media Composer ve CapCut dahil tüm profesyonel kurgu programları tarafından eksiksiz desteklenir. Dönüştürdüğünüz .srt dosyasını doğrudan medya havuzunuza ve zaman çizelgenize sürükleyebilirsiniz."
            },
            {
                  "question": "Dönüştürme sırasında altyazı dosyalarım harici bir sunucuya yükleniyor mu?",
                  "answer": "Hayır. SRTConverters, istemci taraflı JavaScript ile tamamen web tarayıcınızın içinde çalışır. SBV dosyalarınız, metinleriniz ve üretilen SRT dosyaları bilgisayarınızdan asla ayrılmaz; tam gizlilik sağlanır."
            },
            {
                  "question": "Komut satırında Python veya FFmpeg ile SBV'yi SRT'ye nasıl dönüştürebilirim?",
                  "answer": "FFmpeg ile şu komutu kullanabilirsiniz: 'ffmpeg -i input.sbv -c:s srt output.srt'. Python'da ise dosyayı bloklar halinde okuyup zaman damgalarını virgülden ayırarak sıra numaraları ekleyebilirsiniz. Çevrim içi aracımız hiçbir kuruluma gerek olmadan aynı işlemi tarayıcınızda anında yapar."
            }
      ]
}
  },
  "it": {
    "directory": {
      "title": "Tutti gli Strumenti di Sottotitoli e SRT",
      "subtitle": "Strumenti di conversione sottotitoli gratuiti e nel browser. Nessuna installazione, nessun upload sui server, 100% privato.",
      "metaTitle": "Strumenti Gratuiti di Sottotitoli e SRT | SRTConverters",
      "metaDescription": "Esplora la nostra suite completa di strumenti gratuiti per sottotitoli online. Converti TXT in SRT, SRT in Testo, SRT in VTT e VTT in SRT.",
      "convertersCategory": "Convertitori di Sottotitoli",
      "utilitiesCategory": "Utilità Sottotitoli",
      "openTool": "Apri Strumento",
      "clientSideBadge": "100% nel Browser"
    },
    "txtToSrt": {
      "id": "txt-to-srt",
      "name": "Convertitore da TXT a SRT",
      "shortName": "TXT in SRT",
      "badge": "Gratuito e nel Browser",
      "tagline": "Converti Testo Normale e Trascrizioni in File di Sottotitoli SubRip (.SRT) Sincronizzati",
      "description": "Trasforma trascrizioni e testi in sottotitoli SRT formattati con velocità di lettura personalizzabile e minutaggio stimato.",
      "h1": "Convertitore da TXT a SRT",
      "metaTitle": "Convertitore TXT in SRT – Converti Testo in Sottotitoli Gratis | SRTConverters",
      "metaDescription": "Converti trascrizioni di testo (TXT) in file di sottotitoli SRT online gratuitamente. Velocità di lettura personalizzabile e massima privacy.",
      "settingsLabels": {
        "timingMode": "Modalità Calcolo Tempi",
        "cpsLabel": "Velocità di Lettura (CPS)",
        "cpsHint": "Caratteri al secondo (15-20 ottimale per la lettura)",
        "maxCharsPerLine": "Max Caratteri per Riga",
        "maxCharsHint": "Consigliati 37-42 caratteri per video e social",
        "splitMode": "Strategia di Divisione Testo",
        "splitSentence": "Dividi per Frasi e Punteggiatura",
        "splitParagraph": "Dividi per Paragrafi",
        "splitLine": "Dividi per Interruzioni di Riga",
        "gapBetweenSubtitles": "Intervallo tra Sottotitoli (ms)",
        "gapHint": "Pausa tra sottotitoli consecutivi (es. 100ms)"
      },
      "stepsTitle": "Come Convertire Testo in Sottotitoli SRT in 3 Semplici Passaggi",
      "steps": [
        {
          "step": "1",
          "title": "Incolla il Testo o Carica il File",
          "description": "Digita o incolla la trascrizione nella casella o trascina direttamente un file di testo .txt."
        },
        {
          "step": "2",
          "title": "Configura i Tempi dei Sottotitoli",
          "description": "Regola la velocità di lettura (CPS), i caratteri massimi per riga e i criteri di suddivisione."
        },
        {
          "step": "3",
          "title": "Anteprima e Scarica .SRT",
          "description": "Controlla i sottotitoli nell'anteprima dal vivo, copia negli appunti o scarica all'istante il file .srt."
        }
      ],
      "featuresTitle": "Perché Usare il Nostro Convertitore da TXT a SRT?",
      "features": [
        {
          "title": "100% Privato e nel Browser",
          "description": "Nessun file viene inviato a server esterni. Tutta l'elaborazione avviene nel tuo browser.",
          "icon": "shield"
        },
        {
          "title": "Divisione Intelligente della Punteggiatura",
          "description": "Divide i blocchi di testo lunghi in corrispondenza di punti, virgole e punti interrogativi.",
          "icon": "split"
        },
        {
          "title": "Timing CPS Intelligente",
          "description": "Calcola la durata di visualizzazione in base al conteggio dei caratteri e alla velocità di lettura.",
          "icon": "clock"
        },
        {
          "title": "Formato SRT Standard",
          "description": "Genera file SubRip compatibili con YouTube, Premiere Pro, DaVinci Resolve e VLC.",
          "icon": "file"
        }
      ],
      "faqsTitle": "Domande Frequenti",
      "faqs": [
        {
          "question": "Quale formato deve avere il mio file TXT prima di convertirlo in SRT?",
          "answer": "Il tuo file TXT deve contenere testo normale senza formattazione RTF. Per una formattazione ottimale dei sottotitoli, struttura la trascrizione TXT in modo che ogni frase o battuta occupi una riga a sé, oppure separa i pensieri con interruzioni di paragrafo. Ciò consente di calcolare un timing accurato e generare sottotitoli SRT bilanciati."
        },
        {
          "question": "Un file TXT può contenere timestamp per la conversione in SRT?",
          "answer": "Mentre i file TXT standard sono trascrizioni di testo senza codici temporali, alcune trascrizioni esportate includono già timestamp approssimativi. Se il tuo file TXT contiene orari, i normali convertitori potrebbero scambiarli per dialogo. Il nostro strumento calcola il timing naturale da zero basandosi sulla velocità di lettura."
        },
        {
          "question": "Quale formato di timestamp utilizza un file SRT?",
          "answer": "Un file SRT standard utilizza numeri sequenziali seguiti da timestamp nel formato 00:00:01,000 --> 00:00:04,000 (ore:minuti:secondi,millisecondi). Lo standard SubRip richiede una virgola prima dei millisecondi, a differenza di WebVTT che usa il punto. Il nostro convertitore genera automaticamente timestamp SRT conformi."
        },
        {
          "question": "Quanti caratteri dovrebbe contenere un sottotitolo SRT?",
          "answer": "Per una lettura confortevole, le linee guida professionali raccomandano tra 37 e 42 caratteri per riga, con un massimo di due righe per sottotitolo (circa 70-84 caratteri totali). Non è una regola universale assoluta: i video per smartphone richiedono righe più brevi, mentre i monitor desktop ospitano frasi più lunghe."
        },
        {
          "question": "Posso convertire una trascrizione TXT con più paragrafi in sottotitoli SRT?",
          "answer": "Sì! Puoi convertire trascrizioni TXT con più paragrafi in sottotitoli SRT sincronizzati. Le interruzioni di paragrafo fungono da pause naturali nella segmentazione. La modalità di suddivisione per paragrafi o frasi divide i testi lunghi in blocchi leggibili con un ritmo scorrevole."
        },
        {
          "question": "Perché il mio file SRT convertito mostra caratteri strani o errati?",
          "answer": "I caratteri illeggibili derivano generalmente da una codifica di testo non corretta. Se il tuo file TXT di origine contiene lettere accentate (à, è, é, ì, ò, ù) o caratteri speciali, assicurati che sia salvato con codifica UTF-8. Il nostro convertitore elabora i file in UTF-8 standard, preservando perfettamente ogni carattere nel file SRT."
        },
        {
          "question": "Posso usare la punteggiatura e le interruzioni di riga per controllare la divisione dei sottotitoli SRT?",
          "answer": "Certamente. I segni di punteggiatura (punti, virgole, punti interrogativi) e le interruzioni di riga guidano la segmentazione dei sottotitoli. Utilizzando la modalità di divisione per frasi, il convertitore suddivide la trascrizione TXT alle pause grammaticali naturali, producendo sottotitoli SRT fluidi."
        },
        {
          "question": "Posso utilizzare un convertitore da TXT a SRT per i sottotitoli di YouTube?",
          "answer": "Sì, il formato SRT è universalmente supportato su YouTube, Vimeo, Facebook e Instagram. Dopo aver convertito la tua trascrizione TXT in file SRT, puoi caricare il file .srt direttamente in YouTube Studio. Poiché i tempi sono stimati sulla velocità di lettura, controlla sempre la sincronizzazione con il video prima della pubblicazione."
        }
      ]
    },
    "srtToText": {
      "id": "srt-to-text",
      "name": "Convertitore da SRT a Testo",
      "shortName": "SRT in Testo",
      "badge": "Gratuito e Veloce",
      "tagline": "Estrai Testo Normale Pulito e Trascrizioni da Sottotitoli SubRip (.SRT)",
      "description": "Rimuovi timestamp, numeri sequenziali e tag HTML dai tuoi file SubRip (.srt) per ottenere trascrizioni pulite.",
      "h1": "Convertitore da SRT a Testo",
      "metaTitle": "Convertitore SRT in Testo – Estrai Testo da Sottotitoli | SRTConverters",
      "metaDescription": "Estrai testo pulito da file di sottotitoli SRT. Rimuovi timestamp e numeri con totale privacy nel browser.",
      "settingsLabels": {
        "stripTimestamps": "Rimuovi Timestamp",
        "stripLineNumbers": "Rimuovi Numeri di Riga",
        "joinParagraphs": "Unisci in Paragrafi"
      },
      "stepsTitle": "Come Convertire Sottotitoli SRT in Testo Normale",
      "steps": [
        {
          "step": "1",
          "title": "Carica File SRT o Incolla il Testo",
          "description": "Trascina il tuo file .srt o incolla il testo del sottotitolo."
        },
        {
          "step": "2",
          "title": "Seleziona Opzioni di Pulizia",
          "description": "Scegli se rimuovere timestamp, numeri e unire le righe in paragrafi."
        },
        {
          "step": "3",
          "title": "Copia o Scarica il Testo Pulito",
          "description": "Copia la trascrizione pulita negli appunti o scaricala come file .txt."
        }
      ],
      "featuresTitle": "Vantaggi della Conversione da SRT a Testo",
      "features": [
        {
          "title": "Estrazione Testo Pulito",
          "description": "Rimuove automaticamente tutti i timestamp, i numeri e i tag HTML.",
          "icon": "clean"
        },
        {
          "title": "Unione Paragrafi",
          "description": "Combina frammenti di sottotitoli in paragrafi coerenti per articoli o riassunti.",
          "icon": "text"
        },
        {
          "title": "Istantaneo e Privato",
          "description": "Elaborazione immediata nel browser senza limiti o upload sui server.",
          "icon": "lock"
        }
      ],
      "faqsTitle": "Domande Frequenti",
      "faqs": [
        {
          "question": "Come si converte un file SRT in TXT?",
          "answer": "Per convertire un file SRT in TXT, incolla il testo dei sottotitoli o carica un file .srt nel nostro convertitore online gratuito. Lo strumento elimina automaticamente la numerazione sequenziale e i timestamp, lasciando solo il testo del dialogo pulito. Puoi scegliere se mantenere i codici orari o unire le righe in paragrafi continui, quindi copiare o scaricare il file in formato .txt."
        },
        {
          "question": "È possibile convertire SRT in TXT online gratuitamente?",
          "answer": "Sì! SRTConverters.com è 100% gratuito senza registrazione, limiti di utilizzo o watermark. Tutti i calcoli vengono eseguiti direttamente nel browser tramite JavaScript, garantendo che i tuoi file e trascrizioni non vengano mai inviati a server esterni."
        },
        {
          "question": "Cosa succede ai timestamp durante la conversione da SRT a TXT?",
          "answer": "Per impostazione predefinita, tutti gli intervalli temporali in millisecondi (es.: '00:00:01,000 --> 00:00:04,500') vengono rimossi completamente. Questo produce un testo pulito e scorrevole, ideale per articoli di blog, riassunti, appunti di studio e prompt per IA."
        },
        {
          "question": "Posso convertire SRT in TXT mantenendo i timestamp?",
          "answer": "Sì. Nel pannello delle impostazioni del convertitore, basta deselezionare l'opzione 'Rimuovi Timestamp'. Lo strumento manterrà i codici orari di inizio e fine sopra ciascuna battuta, ideale per schede di riferimento per il montaggio video e trascrizioni legali."
        },
        {
          "question": "Qual è la differenza tra file SRT e file TXT?",
          "answer": "Un file SRT (SubRip) è un formato di sottotitoli strutturato con blocchi numerati e timestamp precisi al millisecondo che indicano ai player video quando mostrare i sottotitoli. Un file TXT è testo semplice senza vincoli temporali, pensato per la lettura e la videoscrittura."
        },
        {
          "question": "Come rimuovere i timestamp da un file SRT?",
          "answer": "Il modo più veloce è utilizzare il nostro convertitore online. Anziché cancellare manualmente ogni timestamp nel Blocco note, carica il tuo file .srt e il nostro strumento eliminerà tutti i codici orari e numeri in una frazione di secondo."
        },
        {
          "question": "Posso trasformare un file di sottotitoli SRT in una trascrizione?",
          "answer": "Sì, convertire SRT in TXT è il metodo standard per trasformare i sottotitoli video in trascrizioni leggibili. Puoi attivare l'opzione 'Unisci in Paragrafi' per combinare le singole frasi in paragrafi fluidi per articoli, documentazione o appunti."
        },
        {
          "question": "Perché il mio file TXT convertito contiene righe ripetute?",
          "answer": "Le righe ripetute si verificano spesso se il file SRT originale deriva da sottotitoli automatici o trasmissioni in diretta che ripetono la frase precedente per continuità visiva. Puoi individuare ed eliminare facilmente i duplicati con qualsiasi editor di testo."
        },
        {
          "question": "Posso aprire un file SRT come testo semplice?",
          "answer": "Sì, i file SRT sono documenti di testo semplice con un'estensione specifica. Puoi aprirli nel Blocco note o TextEdit, ma vedrai tutti i timestamp e i numeri. Convertendoli con il nostro strumento, estrai solo il testo leggibile senza codice tecnico."
        },
        {
          "question": "La conversione da SRT a TXT funziona con sottotitoli in diverse lingue?",
          "answer": "Sì, il nostro convertitore supporta pienamente la codifica UTF-8. Elabora alla perfezione lettere accentate (italiano, francese, spagnolo, portoghese, tedesco), alfabeti non latini (cirillico, greco, arabo, ebraico), caratteri asiatici (cinese, giapponese, coreano) e simboli speciali."
        }
      ]
    },
    "srtToVtt": {
      "id": "srt-to-vtt",
      "name": "Convertitore da SRT a VTT",
      "shortName": "SRT in VTT",
      "badge": "Pronto WebVTT",
      "tagline": "Converti Sottotitoli SubRip (.SRT) nel Formato Moderno HTML5 WebVTT (.VTT)",
      "description": "Converti sottotitoli SRT standard nel formato moderno WebVTT per player video HTML5 e browser web.",
      "h1": "Convertitore da SRT a VTT",
      "metaTitle": "Convertitore SRT in VTT – Converti Sottotitoli in WebVTT | SRTConverters",
      "metaDescription": "Converti sottotitoli SubRip (.srt) in formato WebVTT (.vtt) online. Perfetto per video HTML5 e streaming web.",
      "settingsLabels": {},
      "stepsTitle": "Come Convertire SRT in WebVTT in 3 Passaggi",
      "steps": [
        {
          "step": "1",
          "title": "Carica File SRT",
          "description": "Incolla il testo SRT o carica direttamente un file .srt."
        },
        {
          "step": "2",
          "title": "Formattazione WebVTT Istantanea",
          "description": "Aggiunge l'intestazione WEBVTT e sostituisce le virgole con punti decimali."
        },
        {
          "step": "3",
          "title": "Scarica File .VTT",
          "description": "Scarica il file .vtt pronto per l'uso nei player video web."
        }
      ],
      "featuresTitle": "Perché Convertire SRT in WebVTT?",
      "features": [
        {
          "title": "Pronto per Video HTML5",
          "description": "WebVTT è lo standard ufficiale W3C per i sottotitoli nei browser web moderni.",
          "icon": "globe"
        },
        {
          "title": "Conversione Accurata dei Timecode",
          "description": "Converte con precisione le virgole dei millisecondi nei punti richiesti da WebVTT.",
          "icon": "check"
        }
      ],
      "faqsTitle": "Domande Frequenti",
      "faqs": [
        {
          "question": "Come si converte un file SRT in VTT?",
          "answer": "Per convertire SRT in VTT, incolla il testo dei tuoi sottotitoli SubRip o carica un file .srt nel nostro convertitore online gratuito. Lo strumento aggiunge automaticamente l'intestazione obbligatoria WEBVTT e converte tutte le virgole dei timestamp (00:00:01,000) in punti decimali conformi a WebVTT (00:00:01.000). Puoi copiare subito il risultato o scaricare il file .vtt pronto per i player video HTML5."
        },
        {
          "question": "È possibile convertire SRT in VTT online gratuitamente?",
          "answer": "Sì! SRTConverters.com è 100% gratuito senza registrazione, limiti di file o watermark. Tutta la conversione viene elaborata localmente nel tuo browser tramite JavaScript, garantendo privacy totale poiché i tuoi file e trascrizioni non vengono mai caricati su server remoti."
        },
        {
          "question": "Basta rinominare semplicemente l'estensione da .srt a .vtt?",
          "answer": "No. Rinominare semplicemente l'estensione del file in Windows o Mac impedirà ai player web di mostrare i sottotitoli. Il cambio di nome non inserisce l'intestazione 'WEBVTT' richiesta nella prima riga né converte le virgole dei millisecondi in punti decimali. È necessario convertire la sintassi con il nostro strumento."
        },
        {
          "question": "Qual è la differenza tra i formati SRT e VTT?",
          "answer": "SubRip (.srt) è un formato classico per player desktop e software di montaggio video. WebVTT (.vtt) è lo standard ufficiale W3C per gli elementi <video> HTML5 sul web. WebVTT inizia con l'intestazione obbligatoria 'WEBVTT', utilizza punti decimali per i millisecondi e supporta stili CSS (::cue) e posizionamento a schermo."
        },
        {
          "question": "Come convertire SRT in VTT usando FFmpeg?",
          "answer": "Per convertire un file SRT in WebVTT da riga di comando con FFmpeg, esegui: `ffmpeg -i input.srt output.vtt`. FFmpeg legge il file SubRip e genera automaticamente un file WebVTT valido. Per conversioni immediate senza installare programmi da terminale, il nostro convertitore web offre lo stesso risultato all'istante."
        },
        {
          "question": "Perché il mio file VTT non funziona nel browser?",
          "answer": "Se i sottotitoli non vengono visualizzati, verifica tre cause comuni: (1) Il file deve iniziare con 'WEBVTT' nella prima riga, (2) I timestamp devono usare punti (00:00:01.000) anziché virgole, e (3) Il server web deve inviare l'intestazione MIME Content-Type: text/vtt; charset=utf-8 con le corrette autorizzazioni CORS."
        },
        {
          "question": "La conversione da SRT a VTT modifica la sincronizzazione temporale?",
          "answer": "No. Una corretta conversione preserva fedelmente i timestamp esatti di inizio e fine di ciascun sottotitolo. Cambia solo la sintassi del delimitatore dei millisecondi da virgola a punto decimale (ad esempio '00:01:23,456' diventa '00:01:23.456'). La sincronizzazione con il video rimane identica al 100%."
        },
        {
          "question": "Il convertitore da SRT a VTT preserva il testo dei sottotitoli?",
          "answer": "Sì. Tutti i dialoghi parlati, le indicazioni dei personaggi e i tag di formattazione di base (come <i> per il corsivo e <b> per il grassetto) vengono mantenuti intatti. WebVTT supporta nativamente questi tag standard sul web."
        },
        {
          "question": "Perché i sottotitoli VTT necessitano dell'intestazione WEBVTT?",
          "answer": "La specifica ufficiale W3C richiede obbligatoriamente che ogni file WebVTT valido inizi con la parola 'WEBVTT' sulla primissima riga come firma del formato. I browser web e i player video controllano questa firma per verificare la validità del file prima di elaborare i sottotitoli."
        },
        {
          "question": "Quale formato devo usare per i video HTML5: SRT o VTT?",
          "answer": "Devi sempre utilizzare WebVTT (.vtt) per i video HTML5. I browser web moderni supportano WebVTT in modo nativo tramite l'elemento standard <track> senza bisogno di librerie JavaScript aggiuntive. Il formato SRT non è supportato nativamente dai browser web."
        }
      ]
    },
    "vttToSrt": {
      "id": "vtt-to-srt",
      "name": "Convertitore da VTT a SRT",
      "shortName": "VTT in SRT",
      "badge": "SubRip Universale",
      "tagline": "Converti Sottotitoli WebVTT (.VTT) in File Standard SubRip (.SRT)",
      "description": "Trasforma file WebVTT in file universali SubRip (.srt) compatibili con editor video e lettori multimediali.",
      "h1": "Convertitore da VTT a SRT",
      "metaTitle": "Convertitore VTT in SRT – Converti WebVTT in SubRip | SRTConverters",
      "metaDescription": "Converti file di sottotitoli WebVTT (.vtt) in formato standard SubRip (.srt) online gratuitamente con privacy totale.",
      "settingsLabels": {},
      "stepsTitle": "Come Convertire WebVTT in SRT in 3 Passaggi",
      "steps": [
        {
          "step": "1",
          "title": "Carica File WebVTT",
          "description": "Incolla i tuoi sottotitoli WebVTT o trascina un file .vtt."
        },
        {
          "step": "2",
          "title": "Conversione Automatica in SRT",
          "description": "Pulisce i tag WEBVTT, numera ogni sottotitolo e converte i punti in virgole.",
          "icon": "file"
        },
        {
          "step": "3",
          "title": "Scarica SubRip .SRT",
          "description": "Salva il tuo file .srt universale per Premiere, DaVinci Resolve o VLC."
        }
      ],
      "featuresTitle": "Perché Convertire VTT in SRT?",
      "features": [
        {
          "title": "Compatibilità Universale con Editor Video",
          "description": "SRT è supportato da Adobe Premiere, DaVinci Resolve, Final Cut Pro e VLC player.",
          "icon": "video"
        },
        {
          "title": "Numerazione Sequenziale Automatica",
          "description": "Inserisce automaticamente la numerazione sequenziale 1, 2, 3... richiesta dallo standard SubRip.",
          "icon": "list"
        }
      ],
      "faqsTitle": "Domande Frequenti",
      "faqs": [
        {
          "question": "Come converto un file VTT in SRT?",
          "answer": "Per convertire VTT in SRT, incolla il testo dei tuoi sottotitoli WebVTT o carica un file .vtt nel nostro convertitore online gratuito. Lo strumento rimuove automaticamente l'intestazione WEBVTT, trasforma tutti i punti dei millisecondi (00:00:01.000) in virgole (00:00:01,000) e inserisce la numerazione sequenziale obbligatoria (1, 2, 3...). Puoi copiare subito il testo o scaricare il file .srt pronto all'uso."
        },
        {
          "question": "Posso convertire VTT in SRT online gratuitamente?",
          "answer": "Sì! SRTConverters.com è gratuito al 100%, senza registrazione, limiti di dimensione del file o watermark. L'intero processo viene eseguito localmente nel tuo browser tramite JavaScript, garantendo la massima privacy per i tuoi sottotitoli e testi video."
        },
        {
          "question": "Posso semplicemente rinominare l'estensione del file da .vtt a .srt?",
          "answer": "No. Rinominare semplicemente l'estensione del file farà sì che i software di montaggio video e i media player rifiutino il file. La ridenominazione non aggiunge i numeri di sequenza obbligatori, non trasforma i punti dei millisecondi in virgole e non rimuove l'intestazione WEBVTT. È necessario elaborare il file con il nostro strumento."
        },
        {
          "question": "Qual è la differenza tra i formati VTT e SRT?",
          "answer": "WebVTT (.vtt) è lo standard web del W3C per video HTML5, con intestazione 'WEBVTT', timestamp con punto decimale (00:00:01.500) e supporto per stili CSS. SubRip (.srt) è lo standard universale per software desktop ed editor video, che richiede numeri di riga e virgole per i millisecondi (00:00:01,500)."
        },
        {
          "question": "Come posso convertire VTT in SRT usando FFmpeg?",
          "answer": "Per convertire un file WebVTT in formato SubRip da riga di comando con FFmpeg, esegui: `ffmpeg -i input.vtt output.srt`. FFmpeg analizza il file WebVTT e genera un file .srt valido. Se preferisci evitare il terminale, il nostro convertitore web offre lo stesso risultato all'istante."
        },
        {
          "question": "La conversione da VTT a SRT modifica la sincronizzazione dei tempi?",
          "answer": "No. La conversione di formato preserva esattamente i tempi di inizio e fine di ciascun sottotitolo. Cambia unicamente il delimitatore dei millisecondi da punto a virgola (ad esempio '00:01:23.456' diventa '00:01:23,456'). La sincronizzazione con il video rimane precisa al 100%."
        },
        {
          "question": "Cosa succede allo stile e al posizionamento WebVTT quando si converte in SRT?",
          "answer": "Poiché il formato SubRip standard non supporta stili CSS o coordinate di posizionamento a schermo (come line:X% o align:start), questi parametri web vengono rimossi durante la conversione. I tag di base in grassetto e corsivo (<b>, <i>) vengono mantenuti e il testo viene allineato in basso al centro."
        },
        {
          "question": "Perché il mio file SRT convertito non si apre nel lettore video?",
          "answer": "Se un file SRT non si apre, la causa più comune è l'assenza della numerazione sequenziale (1, 2, 3...) o la presenza di punti anziché virgole nei timestamp. Convertendo il file con il nostro strumento online otterrai una struttura SubRip valida e pienamente compatibile."
        },
        {
          "question": "La conversione da VTT a SRT mantiene inalterati i testi e le interruzioni di riga?",
          "answer": "Sì. Tutti i dialoghi parlati, i nomi dei personaggi, la punteggiatura e le interruzioni di riga nei sottotitoli a due righe vengono preservati fedelmente nel file SRT risultante."
        },
        {
          "question": "Perché i file SRT usano le virgole invece dei punti nei timestamp?",
          "answer": "Il formato SubRip (.srt) è stato creato in Francia alla fine degli anni '90. Nella maggior parte dei paesi europei, la virgola è il separador decimal ufficiale. La specifica SubRip ha quindi adottato la virgola per i millisecondi (00:00:01,500), mentre WebVTT ha scelto il punto per allinearsi agli standard del web."
        }
      ]
    },
    "srtToAss": {
      "id": "srt-to-ass",
      "name": "Convertitore da SRT a ASS",
      "shortName": "SRT in ASS",
      "badge": "Compatibile ASS v4+",
      "tagline": "Converti Sottotitoli SubRip (.SRT) nel Formato Advanced SubStation Alpha (.ASS)",
      "description": "Converti sottotitoli SRT di base nel formato Advanced SubStation Alpha (.ass) con font personalizzati, colori, bordi e posizionamento preciso per Aegisub e lettori multimediali.",
      "h1": "Convertitore da SRT a ASS",
      "metaTitle": "Convertitore da SRT a ASS – Converti Sottotitoli in ASS Online | SRTConverters",
      "metaDescription": "Converti sottotitoli SubRip (.srt) nel formato Advanced SubStation Alpha (.ass) online e gratis. Stili personalizzati, colori, posizionamento e 100% privacy.",
      "settingsLabels": {},
      "stepsTitle": "Come Convertire SRT in ASS in 3 Semplici Passaggi",
      "steps": [
        {
          "step": "1",
          "title": "Carica o Incolla Sottotitoli SRT",
          "description": "Trascina il tuo file .srt nella casella di caricamento o incolla il testo dei dialoghi direttamente nell'editor."
        },
        {
          "step": "2",
          "title": "Formattazione ASS v4.00+ Immediata",
          "description": "Il motore converte i timestamp in centesimi di secondo, adatta i tag di stile e compila le intestazioni ASS standard."
        },
        {
          "step": "3",
          "title": "Scarica il File .ASS",
          "description": "Copia il codice o scarica il file .ass pronto per essere aperto in Aegisub, VLC, MPV o nei programmi di montaggio video."
        }
      ],
      "featuresTitle": "Perché Convertire SRT in ASS?",
      "features": [
        {
          "title": "Tipografia Avanzata e Colori",
          "description": "Scegli font su misura, dimensioni, bordi spessi, ombreggiature e colori non supportati dal classico formato SRT.",
          "icon": "pen"
        },
        {
          "title": "Posizionamento Perfetto sullo Schermo",
          "description": "Supporta coordinate in pixel (X, Y) e punti di allineamento per posizionare le didascalie senza coprire la grafica del video.",
          "icon": "grid"
        },
        {
          "title": "Privacy al 100% nel Browser",
          "description": "La conversione avviene per intero in locale nel tuo browser. Nessun dato o file viene caricato su server remoti.",
          "icon": "shield"
        },
        {
          "title": "Pronto per Aegisub e Player",
          "description": "Genera sintassi ASS v4.00+ ufficiale pienamente riconosciuta da Aegisub, VLC, MPV, HandBrake e DaVinci Resolve.",
          "icon": "check"
        }
      ],
      "faqsTitle": "Domande Frequenti",
      "faqs": [
        {
          "question": "Come si converte un file SRT in ASS?",
          "answer": "Per convertire un file SRT in ASS, carica il tuo file .srt nell'area di rilascio oppure incolla il testo dei sottotitoli nel nostro convertitore online gratuito. Lo strumento trasforma immediatamente le battute SubRip nella sintassi conforme ad Advanced SubStation Alpha (v4.00+), generando le sezioni obbligatorie [Script Info], [V4+ Styles] ed [Events]. Potrai scaricare il file .ass finale all'istante."
        },
        {
          "question": "La conversione da SRT a ASS è gratuita?",
          "answer": "Sì, il nostro convertitore da SRT a ASS è gratuito al 100%, senza bisogno di registrazione, senza filigrane e senza limiti sul numero di conversioni. L'intero processo viene gestito in locale nel tuo browser tramite JavaScript, garantendo che i tuoi file e le tue trascrizioni riservate non vengano mai inviati a server esterni."
        },
        {
          "question": "Qual è la differenza tra sottotitoli SRT e ASS?",
          "answer": "I sottotitoli SRT (SubRip) costituiscono un formato minimale di testo puro contenente solo numerazione progressiva, minutaggio in millisecondi e formattazione visiva basilare. ASS (Advanced SubStation Alpha) è invece una specifica avanzata che consente di applicare font personalizzati, colori in formato BGR, bordi spessi, ombreggiature marcate, coordinate precise di posizionamento sullo schermo e animazioni di karaoke sillaba per sillaba."
        },
        {
          "question": "Posso modificare il file ASS risultante con Aegisub?",
          "answer": "Certamente. Il nostro convertitore genera sintassi ASS v4.00+ appositamente concepita per il software Aegisub. Una volta scaricato il file .ass, puoi aprirlo in Aegisub per regolare caratteri, tonalità cromatiche, tag di allineamento, effetti di animazione per il testo o perfezionare il sincronismo sulla forma d'onda audio."
        },
        {
          "question": "Basta rinominare l'estensione da .srt a .ass?",
          "answer": "No. Rinominare semplicemente l'estensione del file da .srt a .ass provocherà errori nei lettori video e negli editor, poiché il file risulterà privo delle intestazioni obbligatorie [Script Info], [V4+ Styles] e della sintassi corretta per le righe Dialogue. È necessario utilizzare un convertitore specializzato per generare la struttura idonea."
        },
        {
          "question": "La sincronizzazione audio-video rimane intatta?",
          "answer": "Sì. Tutti i timestamp di inizio e fine vengono preservati con assoluta accuratezza millimetrica, convertiti dalla notazione SRT in millisecondi con virgola (HH:MM:SS,mmm) alla notazione ASS standard in centesimi di secondo con punto (H:MM:SS.cs). La sincronia con le scene video resta impeccabile."
        },
        {
          "question": "Quali lettori multimediali supportano i sottotitoli ASS?",
          "answer": "La stragrande maggioranza dei media player moderni supporta pienamente i sottotitoli ASS comprensivi di stili grafici, inclusi VLC Media Player, MPV, MPC-HC, PotPlayer e Plex (sia in direct play che in transcodifica). Inoltre, programmi come HandBrake e FFmpeg consentono di imprimere (bruciare) i sottotitoli ASS direttamente nel flusso video MP4."
        },
        {
          "question": "I tag di formattazione come grassetto e corsivo vengono conservati?",
          "answer": "Sì. I comuni tag HTML presenti nei file SRT come <i>, <b>, <u> e <font color> vengono convertiti automaticamente nei tag nativi di sovrascrittura di ASS ({\\i1}, {\\b1}, {\\u1} e {\\c&HBBGGRR&}), preservando intatte tutte le enfasi grafiche del testo d'origine."
        }
      ]
    },
    "assToSrt": {
          "id": "ass-to-srt",
          "name": "Convertitore da ASS a SRT",
          "shortName": "ASS a SRT",
          "badge": "SubRip Universale",
          "tagline": "Converti Sottotitoli Advanced SubStation Alpha (.ASS) nel Formato Pulito SubRip (.SRT)",
          "description": "Converti sottotitoli stilizzati Advanced SubStation Alpha (.ass / .ssa) in file SubRip (.srt) puliti e universalmente compatibili. Rimuovi i tag di controllo, converti i centesimi di secondo e prepara i sottotitoli per qualsiasi Smart TV o media player.",
          "h1": "Convertitore da ASS a SRT Online",
          "metaTitle": "Convertitore da ASS a SRT Online – Converti ASS in SRT Gratis | SRTConverters",
          "metaDescription": "Converti sottotitoli Advanced SubStation Alpha (.ass) nel formato pulito SubRip (.srt) online e gratis. Pulisci tag, converti timestamp e scarica file SRT all'istante.",
          "settingsLabels": {},
          "stepsTitle": "Come Convertire un File ASS in SRT in 3 Semplici Passaggi",
          "steps": [
                {
                      "step": "1",
                      "title": "Carica o Incolla Sottotitoli ASS",
                      "description": "Trascina il tuo file .ass o .ssa nell'area di rilascio oppure incolla il testo dello script direttamente nell'editor."
                },
                {
                      "step": "2",
                      "title": "Pulizia Tag e Conversione dei Tempi",
                      "description": "Il nostro motore estrae i dialoghi, converte i centesimi di secondo in millisecondi e rimuove i complessi tag di stile dell'ASS."
                },
                {
                      "step": "3",
                      "title": "Scarica il File .SRT Pulito",
                      "description": "Copia i sottotitoli SubRip negli appunti o scarica il file .srt finalizzato per riprodurlo su Smart TV, Plex, VLC o smartphone."
                }
          ],
          "featuresTitle": "Perché Convertire da ASS a SRT?",
          "features": [
                {
                      "title": "Compatibilità Universale con i Player",
                      "description": "SubRip (.srt) è lo standard di sottotitoli più diffuso al mondo, supportato nativamente da Smart TV, console e lettori multimediali senza errori di rendering.",
                      "icon": "globe"
                },
                {
                      "title": "Pulizia Intelligente di Stili e Tag",
                      "description": "Rimuove coordinate di posizionamento (\\pos), allineamento (\\an), colori (\\c) e grafiche vettoriali (\\p1), conservando grassetto, corsivo e sottolineato.",
                      "icon": "sparkles"
                },
                {
                      "title": "Precisione Temporale da Centesimi a Millisecondi",
                      "description": "Converte i centesimi di secondo di ASS (H:MM:SS.cs) in esatti millisecondi SRT (HH:MM:SS,mmm), garantendo una perfetta sincronizzazione con l'audio.",
                      "icon": "clock"
                },
                {
                      "title": "100% Privacy nel Browser",
                      "description": "L'intera elaborazione avviene localmente nella memoria del tuo browser. Nessun file o testo di dialogo viene inviato a server esterni.",
                      "icon": "shield"
                }
          ],
          "faqsTitle": "Domande Frequenti",
          "faqs": [
                {
                      "question": "Qual è la differenza tra i sottotitoli ASS e SRT?",
                      "answer": "Advanced SubStation Alpha (.ass) è un formato avanzato che supporta font personalizzati, coordinate esatte sullo schermo, effetti di karaoke e grafiche vettoriali. SubRip (.srt) è un formato di testo semplice progettato per la massima compatibilità su qualunque Smart TV o media player."
                },
                {
                      "question": "La formattazione dei colori e del posizionamento viene persa con la conversione?",
                      "answer": "Sì, i tag di stile complessi come le coordinate (\\pos), l'allineamento (\\an), i timer di karaoke (\\k) e i colori vengono rimossi perché lo standard SRT non li supporta. Vengono invece mantenuti gli stili di enfasi di base come grassetto (<b>), corsivo (<i>) e sottolineato (<u>)."
                },
                {
                      "question": "Questo convertitore preserva il grassetto e il corsivo presenti nell'ASS?",
                      "answer": "Sì. I tag di controllo ASS come {\\b1} e {\\i1} vengono tradotti automaticamente in tag di formattazione standard (<b> e <i>), garantendo che le battute mantengano l'enfasi voluta nei player compatibili."
                },
                {
                      "question": "Come vengono gestiti i centesimi di secondo e i tempi dell'ASS?",
                      "answer": "I file ASS registrano il tempo in centesimi di secondo (H:MM:SS.cs), mentre i file SRT utilizzano i millisecondi (HH:MM:SS,mmm). Il convertitore calcola i millisecondi esatti (ad esempio 0:01:23.45 diventa 00:01:23,450), prevenendo qualsiasi sfasamento audio."
                },
                {
                      "question": "Cosa accade alle battute simultanee o sovrapposte nell'ASS?",
                      "answer": "Quando più linee di dialogo compaiono contemporaneamente (frequente negli anime con voci sovrapposte o canzoni tradotte), il convertitore le ordina cronologicamente e assegna loro indici sequenziali puliti nel file SRT."
                },
                {
                      "question": "Posso convertire i sottotitoli di anime fansub (.ass) per guardarli su Plex o Smart TV?",
                      "answer": "Certamente! È uno degli utilizzi più comuni. Molte Smart TV e client Plex non supportano i font complessi dell'ASS e costringono il server a una pesante transcodifica video. Convertire in SRT consente la riproduzione diretta e fluida."
                },
                {
                      "question": "È possibile convertire ASS in SRT da riga di comando con FFmpeg?",
                      "answer": "Sì, digitando: ffmpeg -i input.ass -c:s srt output.srt. Tuttavia, il nostro strumento web non richiede alcuna installazione, offre un'anteprima istantanea e funziona comodamente anche su smartphone."
                },
                {
                      "question": "I miei file di sottotitoli vengono caricati su un server?",
                      "answer": "No, la tua privacy è protetta al 100%. Tutta la conversione viene eseguita in locale nel tuo browser tramite JavaScript. Nessun file o dato lascia il tuo dispositivo."
                }
          ]
    },
    "srtToSub": {
          "id": "srt-to-sub",
          "name": "Convertitore da SRT a SUB",
          "shortName": "SRT a SUB",
          "badge": "Gratuito e Sicuro",
          "tagline": "Converti Sottotitoli SubRip (.SRT) nel Formato MicroDVD e SubViewer (.SUB) Online",
          "description": "Converti sottotitoli SubRip (.srt) nel formato SUB (MicroDVD e SubViewer 2.0) online gratis. Supporto per frame rate (FPS) personalizzati e massima privacy nel browser.",
          "h1": "Convertitore da SRT a SUB Online",
          "metaTitle": "Convertitore da SRT a SUB Online – Converti Sottotitoli in SUB Gratis | SRTConverters",
          "metaDescription": "Converti sottotitoli SubRip (.srt) nel formato SUB (MicroDVD e SubViewer) online gratis. Frequenza fotogrammi (FPS) personalizzata e massima privacy nel browser.",
          "settingsLabels": {
                "timingMode": "Formato Sottotitolo",
                "fixedDuration": "MicroDVD (.sub)",
                "cpsDuration": "SubViewer 2.0 (.sub)",
                "cpsLabel": "Frequenza Fotogrammi Video (FPS)",
                "cpsHint": "Seleziona la frequenza del tuo video per garantire una sincronizzazione precisa.",
                "startTime": "Includi Intestazione FPS",
                "startTimeHint": "Aggiunge la riga {1}{1}FPS al file MicroDVD per il rilevamento automatico nei lettori.",
                "maxCharsPerLine": "Rimuovi Tag HTML",
                "maxCharsHint": "Rimuove tag <i>, <b> e stili per compatibilità con i lettori DVD meno recenti."
          },
          "stepsTitle": "Come Convertire SRT in SUB Online in 3 Passaggi",
          "steps": [
                {
                      "step": "1",
                      "title": "Carica o Incolla i Sottotitoli SRT",
                      "description": "Trascina e rilascia il tuo file .srt nell'apposita area oppure incolla il testo dei sottotitoli SubRip nell'editor."
                },
                {
                      "step": "2",
                      "title": "Seleziona Formato e FPS del Video",
                      "description": "Scegli il formato MicroDVD o SubViewer e imposta la frequenza dei fotogrammi (es. 23.976, 24, 25 o 29.97 FPS)."
                },
                {
                      "step": "3",
                      "title": "Scarica il File SUB Convertito",
                      "description": "Fai clic su Scarica .SUB per salvare immediatamente il file oppure copia il testo formattato negli appunti."
                }
          ],
          "featuresTitle": "Perché Scegliere il Nostro Convertitore da SRT a SUB?",
          "features": [
                {
                      "title": "Privacy 100% nel Browser",
                      "description": "La conversione avviene interamente sul tuo dispositivo. Nessun file o testo viene inviato a server esterni.",
                      "icon": "shield"
                },
                {
                      "title": "Supporto MicroDVD e SubViewer",
                      "description": "Compatibilità completa con il formato a fotogrammi MicroDVD ({inizio}{fine}) e con SubViewer 2.0 temporizzato.",
                      "icon": "file"
                },
                {
                      "title": "Sincronizzazione Esatta al Fotogramma",
                      "description": "Supporta i frame rate standard: 23.976, 24.0, 25.0 (PAL), 29.97 (NTSC), 30 e 60 FPS per azzerare i ritardi.",
                      "icon": "clock"
                },
                {
                      "title": "Perfetto per Dispositivi Vintage",
                      "description": "Crea file .sub puliti adatti a lettori DVD da tavolo, autoradio multimediali e dispositivi DivX/XviD.",
                      "icon": "split"
                }
          ],
          "faqsTitle": "Domande Frequenti sulla Conversione da SRT a SUB",
          "faqs": [
                {
                      "question": "Qual è la differenza tra un file SRT e un file SUB?",
                      "answer": "SRT (SubRip) è un formato moderno basato sul tempo reale che definisce le battute tramite timestamp in millisecondi (00:01:23,450 --> 00:01:26,800), supportato nativamente su browser, computer e Smart TV. Al contrario, i file SUB testuali — principalmente MicroDVD (.sub) — sono basati sul conteggio dei fotogrammi video ({fotogramma_inizio}{fotogramma_fine}). Un altro formato di testo con estensione .sub è SubViewer 2.0, che impiega i centesimi di secondo. Convertire SRT in SUB è fondamentale per riprodurre video su lettori DVD da salotto di vecchia generazione, monitor per auto e dispositivi che leggono solo file .sub indicizzati per fotogrammi."
                },
                {
                      "question": "Perché devo selezionare un frame rate (FPS) per convertire SRT in SUB?",
                      "answer": "Poiché i file MicroDVD calcolano l'apparizione delle battute in base ai singoli fotogrammi del video e non su base oraria assoluta, il convertitore deve moltiplicare i tempi del sottotitolo per la frequenza fotogrammi esatta del video (Fotogramma = Tempo in Secondi × FPS). Se converti un file SRT a 25.000 FPS (PAL) ma il tuo video è a 23.976 FPS (standard cinematografico / NTSC), i sottotitoli si disallineeranno progressivamente. Scegliere il valore corretto assicura una sincronia impeccabile per tutta la durata del video."
                },
                {
                      "question": "Qual è la differenza tra MicroDVD (.sub), SubViewer (.sub) e VobSub (.sub)?",
                      "answer": "L'estensione .sub è storicamente condivisa da tre tecnologie molto diverse: MicroDVD (.sub) è un formato di testo leggero basato sui fotogrammi ({1250}{1380}Dialogo) reso celebre dai video DivX/XviD; SubViewer 2.0 (.sub) è un formato di testo con intestazione [INFORMATION] e tempi in centesimi di secondo (00:01:20.10,00:01:23.45); e VobSub (.sub + .idx) NON è un file di testo, bensì una serie di immagini grafiche bitmap estratte direttamente dai DVD commerciali. Il nostro strumento crea sottotitoli di testo standardizzati (MicroDVD e SubViewer 2.0)."
                },
                {
                      "question": "Come posso scoprire il frame rate (FPS) esatto del mio file video?",
                      "answer": "Puoi individuare i fotogrammi al secondo esatti molto rapidamente: in VLC Media Player, apri il video, clicca su Strumenti > Informazioni media / codec (oppure premi Ctrl+J / Cmd+I), apri la scheda Dettagli codec e controlla il valore Fotogrammi al secondo (ad esempio 23.976023, 24, 25 o 29.970000). Su Windows, fai clic destro sul file video, scegli Proprietà, scheda Dettagli e verifica Frequenza fotogrammi. Su macOS, apri il file con QuickTime Player e premi Cmd+I (Mostra inspector filmato). Anche l'utility gratuita MediaInfo mostra questo valore in modo dettagliato."
                },
                {
                      "question": "Perché i miei sottotitoli SUB convertiti perdono la sincronia durante la riproduzione?",
                      "answer": "Un sottotitolo che parte sincronizzato ma progressivamente anticipa o ritarda rispetto all'audio è quasi sempre causato da una mancata corrispondenza di FPS tra il file MicroDVD generato e la traccia video reale. Ad esempio, se il film viaggia a 23.976 FPS e converti con l'opzione a 25.000 FPS, i sottotitoli scorreranno circa il 4,1% più velocemente (con uno scarto di circa 2,5 secondi per ogni minuto di riproduzione). Per risolvere, verifica i veri FPS con VLC o MediaInfo e converti nuovamente il file SRT indicando il valore esatto."
                },
                {
                      "question": "Posso convertire un file SUB di nuovo in formato SRT?",
                      "answer": "Sì. I sottotitoli di testo MicroDVD (.sub) e SubViewer (.sub) possono essere agevolmente riconvertiti in SubRip (.srt). Nel caso di MicroDVD, basta dividere il numero del fotogramma per la frequenza del video per ricostruire i millisecondi: Tempo = Numero Fotogramma / FPS. Puoi effettuare questa operazione con software come Subtitle Edit, Aegisub o con i convertitori disponibili sul nostro portale SRTConverters."
                },
                {
                      "question": "I miei file di sottotitoli vengono caricati su un server durante la conversione?",
                      "answer": "No. SRTConverters lavora interamente all'interno del tuo browser web tramite JavaScript client-side. I tuoi file SRT, i testi e i file SUB generati risiedono solo nella memoria privata del tuo dispositivo. Nessun dato viene trasmesso, registrato o memorizzato sui nostri server."
                },
                {
                      "question": "Come posso convertire SRT in SUB dalla riga di comando con FFmpeg?",
                      "answer": "Puoi convertire SRT in MicroDVD SUB con FFmpeg specificando il codec per i sottotitoli: ffmpeg -i input.srt -c:s microdvd output.sub. Se hai bisogno di forzare una frequenza specifica per conversioni batch o muxing, aggiungi il parametro di frame rate: ffmpeg -i input.srt -r 23.976 -c:s microdvd output.sub. Questo metodo è ideale per script automatizzati e pipeline di codifica video."
                }
          ]
    },
    "subToSrt": {
          "id": "sub-to-srt",
          "name": "Convertitore da SUB a SRT",
          "shortName": "SUB a SRT",
          "badge": "Gratuito e nel Browser",
          "tagline": "Converti Sottotitoli MicroDVD e SubViewer (.SUB) in SubRip (.SRT) Standard Online",
          "description": "Converti sottotitoli SUB (MicroDVD e SubViewer) nel formato SubRip (.srt) pulito online gratuitamente. Rilevamento automatico FPS, sincronizzazione accurata da frame a tempo e massima privacy nel browser.",
          "h1": "Convertitore da SUB a SRT Online",
          "metaTitle": "Convertitore da SUB a SRT Online – Converti SUB in SRT Gratis | SRTConverters",
          "metaDescription": "Converti sottotitoli SUB (MicroDVD e SubViewer) nel formato SubRip (.srt) pulito online gratuitamente. Rilevamento automatico FPS, sincronizzazione accurata da frame a tempo e massima privacy nel browser.",
          "settingsLabels": {
                "timingMode": "Formato Rilevato",
                "fixedDuration": "Rilevamento Automatico",
                "cpsDuration": "MicroDVD ({frame}{frame})",
                "cpsLabel": "Frequenza dei Fotogrammi (FPS)",
                "cpsHint": "Seleziona la frequenza fotogrammi del tuo video per garantire una sincronizzazione impeccabile.",
                "startTime": "Sincronizza Intestazione FPS",
                "startTimeHint": "Legge automaticamente la riga di intestazione {1}{1}FPS dai file MicroDVD se presente.",
                "maxCharsPerLine": "Converti Tag di Formattazione",
                "maxCharsHint": "Converte i tag {Y:i} in <i> e le barre verticali (|) in normali interruzioni di riga."
          },
          "stepsTitle": "Come Convertire SUB in SRT Online in 3 Semplici Passaggi",
          "steps": [
                {
                      "step": "1",
                      "title": "Carica o Incolla i Sottotitoli SUB",
                      "description": "Trascina e rilascia il tuo file .sub nell'apposito riquadro oppure incolla il testo MicroDVD o SubViewer direttamente nell'editor."
                },
                {
                      "step": "2",
                      "title": "Verifica la Frequenza dei Fotogrammi (FPS)",
                      "description": "Se il file è in formato MicroDVD, controlla il framerate del video (es. 23.976, 24, 25 o 29.97 FPS) affinché i fotogrammi si convertano in orari esatti."
                },
                {
                      "step": "3",
                      "title": "Scarica il File SRT Convertito",
                      "description": "Fai clic su Scarica .SRT per salvare subito il tuo file SubRip o copia il testo convertito negli appunti per utilizzarlo all'istante."
                }
          ],
          "featuresTitle": "Perché Scegliere il Nostro Convertitore da SUB a SRT?",
          "features": [
                {
                      "title": "Privacy 100% nel Tuo Browser",
                      "description": "I tuoi sottotitoli vengono elaborati interamente all'interno del browser web. Nessun file o dato viene mai caricato su server esterni.",
                      "icon": "shield"
                },
                {
                      "title": "Rilevamento di MicroDVD e SubViewer",
                      "description": "Identifica in automatico i file MicroDVD basati su frame, le intestazioni SubViewer 2.0/1.0 e i tag di configurazione {1}{1}FPS.",
                      "icon": "file"
                },
                {
                      "title": "Sincronizzazione Esatta al Millisecondo",
                      "description": "Calcola timestamp con accuratezza al millisecondo per standard cinematografici, PAL e NTSC, scongiurando qualsiasi slittamento.",
                      "icon": "clock"
                },
                {
                      "title": "Riconoscimento VobSub e Pulizia Tag",
                      "description": "Segnala la presenza di grafiche binarie VobSub ed esegue la trasposizione automatica di pipe (|) e stili in tag SRT validi.",
                      "icon": "split"
                }
          ],
          "faqsTitle": "Domande Frequenti sulla Conversione da SUB a SRT",
          "faqs": [
                {
                      "question": "Qual è la differenza tra un file SUB e un file SRT?",
                      "answer": "Il formato SRT (SubRip) è lo standard universale moderno per i sottotitoli di testo. Definisce ciascuna battuta tramite un indice numerico sequenziale e timestamp orari assoluti con precisione al millisecondo (00:01:23,450 --> 00:01:26,800). SRT è supportato nativamente da qualunque player moderno, smart TV, software di montaggio (Premiere Pro, DaVinci Resolve) e piattaforma di streaming (YouTube, Netflix). Al contrario, i file SUB basati su testo—in particolare MicroDVD (.sub)—impiegano numeri di fotogramma video ({frame_inizio}{frame_fine}), rendendo l'orario dipendente dalla frequenza dei fotogrammi (FPS) del filmato. SubViewer (.sub) utilizza invece i centesimi di secondo. Convertire SUB in SRT assicura la piena compatibilità su tutti i moderni dispositivi senza dover ricorrere a lettori obsoleti."
                },
                {
                      "question": "Perché è necessario specificare la frequenza dei fotogrammi (FPS) per MicroDVD?",
                      "answer": "I file MicroDVD non contengono ore, minuti o secondi; specificano unicamente a quale numero di fotogramma video il sottotitolo deve comparire e scomparire (ad esempio: {1200}{1350}Battuta di dialogo). Per trasformare questi valori nei timestamp in millisecondi dello standard SRT, il convertitore applica la formula: Millisecondi = Arrotonda((Numero Frame / FPS Video) × 1000). Se converti un file a 25 FPS (PAL) mentre il video è riprodotto a 23.976 FPS (standard cinema / NTSC), i sottotitoli subiranno uno sfasamento progressivo di circa 2,5 secondi per ogni minuto di riproduzione. Selezionare il framerate corretto garantisce una sincronia perfetta."
                },
                {
                      "question": "Quali differenze ci sono tra MicroDVD (.sub), SubViewer (.sub) e VobSub (.sub)?",
                      "answer": "L'estensione .sub è stata storicamente utilizzata per tre formati profondamente diversi: 1. MicroDVD (.sub) è un formato di testo leggero con indici di fotogramma tra parentesi graffe ({inizio}{fine}Riga1|Riga2), diffusissimo all'epoca di DivX e XviD; 2. SubViewer (.sub) è un formato di testo con intestazione di metadati ([INFORMATION]) e timestamp in centesimi di secondo (00:01:20.50,00:01:23.80) con tag [br]; 3. VobSub (.sub + .idx) è un pacchetto binario contenente immagini bitmap dei sottotitoli estratte da DVD video. Il nostro convertitore gestisce senza problemi i formati di testo MicroDVD e SubViewer e segnala prontamente l'eventuale caricamento di un file binario VobSub."
                },
                {
                      "question": "Come posso scoprire il framerate (FPS) esatto del mio file video?",
                      "answer": "Puoi individuare i fotogrammi al secondo esatti del tuo video tramite i comuni lettori multimediali gratuiti: In VLC Media Player, avvia il video, seleziona Strumenti > Informazioni codificatore (o premi Ctrl+J / Cmd+I), apri la scheda Codificatore e controlla il valore 'Frequenza fotogrammi' (es. 23.976023, 24, 25 o 29.970000). In Esplora file di Windows, fai clic destro sul video, seleziona Proprietà, vai alla scheda Dettagli e consulta la voce 'Frequenza fotogrammi'. Su macOS, apri il file con QuickTime Player e premi Cmd+I per aprire il riquadro dell'ispettoe. Puoi inoltre affidarti al programma gratuito MediaInfo per un report tecnico dettagliato."
                },
                {
                      "question": "Perché i miei sottotitoli SRT convertiti perdono gradualmente la sincronizzazione?",
                      "answer": "Uno sfasamento progressivo—in cui le battute sono corrette all'inizio ma anticipano o ritardano man mano che il video scorre—è quasi sempre causato da una mancata corrispondenza dei valori FPS durante la conversione. Convertire un video a 23.976 FPS impostando 25.000 FPS porta i sottotitoli a scorrere circa il 4,1% più veloci dell'audio, creando diversi secondi di ritardo nel giro di pochi minuti. Per risolvere, controlla gli FPS reali in VLC o MediaInfo, seleziona lo stesso valore nel nostro convertitore e ripeti la procedura. Se il file MicroDVD contiene la riga `{1}{1}FPS`, lo strumento la leggerà in automatico."
                },
                {
                      "question": "Questo strumento è in grado di convertire file binari VobSub (.sub) estratti da DVD?",
                      "answer": "No. I file VobSub (.sub) non sono documenti di testo, bensì archivi binari contenenti immagini bitmap rasterizzate dei sottotitoli ricavate dai dischi DVD originali. Poiché sono costituiti da pixel grafici e non da testo alfanumerico, convertirli in SRT richiede un software di Riconoscimento Ottico dei Caratteri (OCR) in grado di interpretare visivamente le lettere. Se provi a caricare un file VobSub binario, il nostro convertitore rileverà la struttura del file e ti mostrerà un avviso consigliandoti programmi desktop come Subtitle Edit, BDSup2Sub o OCR-SubRip."
                },
                {
                      "question": "I miei file di sottotitoli vengono inviati a server esterni durante la conversione?",
                      "answer": "No. SRTConverters opera al 100% sul lato client all'interno del tuo browser mediante JavaScript moderno. I tuoi file di sottotitoli, il testo inserito e il file SRT risultante non lasciano mai il tuo dispositivo. Nessun dato viene trasmesso sulla rete, salvato nel cloud o conservato su server, garantendo riservatezza totale, sicurezza e una conversione immediata."
                },
                {
                      "question": "Come posso convertire un file SUB in SRT da riga di comando con FFmpeg?",
                      "answer": "Puoi convertire i sottotitoli da SUB a SRT tramite terminale con FFmpeg. Per i file SubViewer basati sul tempo, digita: ffmpeg -i input.sub output.srt. Per i file MicroDVD basati su frame, devi indicare la frequenza dei fotogrammi tramite il parametro -r in modo che i tempi vengano calcolati con precisione: ffmpeg -r 23.976 -i input.sub output.srt. Se il file contiene caratteri speciali o lettere accentate con codifica ANSI/Windows-1252, specifica il set di caratteri: ffmpeg -sub_charenc CP1252 -r 25 -i input.sub output.srt. Questo metodo è perfetto per script di automazione o conversioni multiple."
                }
          ]
    },
    sbvToSrt: {
      "id": "sbv-to-srt",
      "name": "Convertitore da SBV a SRT",
      "shortName": "SBV a SRT",
      "badge": "Gratuito e nel Browser",
      "tagline": "Converti Sottotitoli YouTube (.SBV) in SubRip (.SRT) Standard Online",
      "description": "Converti file di sottotitoli SBV e SubViewer di YouTube nel formato standard SubRip (.srt) online gratuitamente. Correzione automatica timestamp, decodifica HTML e download immediato dei file SRT.",
      "h1": "Convertitore da SBV a SRT Online",
      "metaTitle": "Convertitore da SBV a SRT Online – Sottotitoli YouTube in SRT Gratis | SRTConverters",
      "metaDescription": "Converti i sottotitoli SBV e SubViewer di YouTube nel formato standard SubRip (.srt) online gratis. Correggi timestamp, decodifica entità HTML e scarica file SRT all'istante.",
      "settingsLabels": {
            "timingMode": "Opzioni di Pulizia dei Sottotitoli",
            "fixedDuration": "Decodifica Entità HTML",
            "cpsDuration": "Converte &amp;, &#39;, &quot;, &lt;, &gt; in testo pulito e leggibile",
            "cpsLabel": "Rimuovi Descrittori Audio",
            "cpsHint": "Elimina [Musica], [Applausi] ed effetti sonori dai dialoghi",
            "startTime": "Normalizza Spazi Bianchi",
            "startTimeHint": "Rimuove spazi ridondanti e linee di sottotitoli vuote"
      },
      "stepsTitle": "Come Convertire SBV in SRT Online in 3 Passaggi",
      "steps": [
            {
                  "step": "1",
                  "title": "Carica o Incolla i Sottotitoli SBV",
                  "description": "Trascina e rilascia il tuo file .sbv di YouTube nell'area di rilascio oppure incolla il testo direttamente nell'area di input."
            },
            {
                  "step": "2",
                  "title": "Configura le Preferenze di Pulizia",
                  "description": "Attiva la decodifica delle entità HTML (&amp;, &#39;) e scegli se rimuovere i marcatori sonori automatici come [Musica]."
            },
            {
                  "step": "3",
                  "title": "Scarica il File SRT Convertito",
                  "description": "Fai clic su Scarica .SRT per salvare immediatamente il tuo file SubRip oppure copia il testo formattato per il tuo editor video o player."
            }
      ],
      "featuresTitle": "Perché Usare il Nostro Convertitore da SBV a SRT?",
      "features": [
            {
                  "title": "Accuratezza al Millisecondo",
                  "description": "Ogni timestamp viene mantenuto con precisione millimetrica, convertendo i punti decimali in virgole e aggiungendo le due cifre all'ora.",
                  "icon": "zap"
            },
            {
                  "title": "Decodifica HTML Automatica",
                  "description": "I sottotitoli esportati da YouTube contengono spesso codici come &amp; e &#39;. Il nostro strumento li trasforma in testo corretto.",
                  "icon": "layers"
            },
            {
                  "title": "Filtraggio Effetti Sonori",
                  "description": "Rimuovi facilmente descrizioni automatiche come [Musica] e [Applausi] per ottenere sottotitoli di dialogo puliti e professionali.",
                  "icon": "shield"
            },
            {
                  "title": "Privacy 100% nel Browser",
                  "description": "Tutta la conversione avviene localmente nel tuo browser. I tuoi file di sottotitoli non vengono mai inviati o salvati su server esterni.",
                  "icon": "split"
            }
      ],
      "faqsTitle": "Domande Frequenti Sulla Conversione da SBV a SRT",
      "faqs": [
            {
                  "question": "Cos'è un file SBV e in cosa si differenzia da un file SRT?",
                  "answer": "Un file SBV (.sbv), noto anche come formato YouTube SubViewer, è un formato di sottotitoli in testo semplice creato da Google specificamente per i video di YouTube. In un file SBV, ciascun blocco inizia direttamente con una coppia di timestamp separati da virgola (es. 0:00:01.000,0:00:04.500) seguita dal dialogo, senza numeri di sequenza. Al contrario, SubRip (.srt) è lo standard mondiale per lettori ed editor video: richiede un contatore numerico (1, 2, 3...), una freccia (' --> ') con virgole per i millisecondi (00:00:01,000 --> 00:00:04,500) e ore a due cifre. Convertire SBV in SRT consente di utilizzare i sottotitoli di YouTube in Premiere Pro, DaVinci Resolve, VLC e Plex."
            },
            {
                  "question": "Perché YouTube Studio esporta i sottotitoli in formato .sbv anziché in .srt?",
                  "answer": "Storicamente, YouTube ha adottato la variante SubViewer (.sbv) all'introduzione della trascrizione automatica per via della sua sintassi essenziale, priva di contatori numerici e con una semplice virgola a separare inizio e fine. Tuttavia, poiché la maggioranza dei software di montaggio e delle smart TV non supporta i file .sbv nativamente, la conversione in .srt risulta indispensabile."
            },
            {
                  "question": "Come posso scaricare un file di sottotitoli SBV da YouTube Studio?",
                  "answer": "Per scaricare i sottotitoli da YouTube: (1) Accedi a YouTube Studio e clicca su 'Sottotitoli' nel menu a sinistra. (2) Seleziona il video desiderato. (3) Accanto alla traccia pubblicata o automatica, clicca sul menu con i tre puntini (Opzioni) e seleziona 'Scarica'. (4) Scegli '.sbv' (o SubViewer). Verrà scaricato un file 'captions.sbv' pronto da convertire sul nostro sito."
            },
            {
                  "question": "In che modo i timestamp SBV differiscono dai timestamp SubRip SRT?",
                  "answer": "I timestamp SBV utilizzano una singola virgola tra inizio e fine e punti decimali prima dei millisecondi, con ore spesso a una sola cifra: '0:01:23.450,0:01:27.800'. I sottotitoli SubRip SRT richiedono una freccia con spazi (' --> '), virgole prima dei millisecondi e rigorosamente due cifre per le ore: '00:01:23,450 --> 00:01:27,800'. Inoltre, ogni blocco SRT richiede un numero sequenziale. Il nostro convertitore esegue tutte queste modifiche in automatico."
            },
            {
                  "question": "Perché il mio file SBV di YouTube contiene codici strani come &amp; e &#39;?",
                  "answer": "YouTube esporta alcuni segni di punteggiatura come entità HTML per garantirne il rendering nei browser. Ad esempio, la 'e' commerciale diventa '&amp;', l'apostrofo diventa '&#39;' e le virgolette doppie diventano '&quot;'. Negli editor video o in VLC, questi codici appaiono come testo grezzo sullo schermo. Il nostro convertitore decodifica automaticamente tutte le entità HTML nei rispettivi caratteri corretti."
            },
            {
                  "question": "Posso importare i sottotitoli SRT convertiti in Premiere Pro, DaVinci Resolve e Final Cut Pro?",
                  "answer": "Sì. Il formato SubRip (.srt) è universalmente supportato da tutti i principali software di montaggio video professionale (Adobe Premiere Pro, DaVinci Resolve, Apple Final Cut Pro, Avid Media Composer, CapCut). Dopo la conversione, basta importare il file .srt nella libreria e trascinarlo sulla timeline."
            },
            {
                  "question": "I miei file di sottotitoli vengono caricati su un server remoto durante la conversione?",
                  "answer": "No. SRTConverters elabora il 100% dei tuoi file localmente nel browser web tramite JavaScript lato client. I tuoi sottotitoli SBV, trascrizioni e file SRT non lasciano mai il tuo dispositivo, garantendo la massima riservatezza."
            },
            {
                  "question": "Come posso convertire SBV in SRT da riga di comando usando Python o FFmpeg?",
                  "answer": "Con FFmpeg puoi utilizzare il comando: 'ffmpeg -i input.sbv -c:s srt output.srt'. In Python puoi leggere il file a blocchi, separare i timestamp alla virgola e generare gli indici numerici. Il nostro convertitore online esegue la stessa elaborazione all'istante senza bisogno di alcuna installazione o riga di comando."
            }
      ]
}
  }
};
