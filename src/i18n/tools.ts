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
    }
  }
};
