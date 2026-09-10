import type { Locale } from './config';

export interface AssToSrtGuideContent {
  introTitle: string;
  introSubtitle: string;
  introText: string[];

  whatIsTitle: string;
  whatIsText: string[];

  whyConvertTitle: string;
  whyConvertSubtitle: string;
  whyConvertReasons: {
    title: string;
    description: string;
  }[];

  howToTitle: string;
  howToSubtitle: string;
  howToSteps: {
    step: string;
    title: string;
    description: string;
  }[];

  differenceTitle: string;
  differenceSubtitle: string;
  differenceTable: {
    feature: string;
    ass: string;
    srt: string;
  }[];

  structureTitle: string;
  structureSubtitle: string;
  structureBlocks: {
    name: string;
    description: string;
    snippet: string;
  }[];

  exampleTitle: string;
  exampleIntro: string;
  exampleAssInput: string;
  exampleSrtOutput: string;
  exampleExplanation: string;

  formattingLimitationsTitle: string;
  formattingLimitationsSubtitle: string;
  cleanedTagsList: {
    name: string;
    tag: string;
    explanation: string;
  }[];

  ffmpegTitle: string;
  ffmpegSubtitle: string;
  ffmpegCommand: string;
  ffmpegExplanation: string[];

  useCasesTitle: string;
  useCasesSubtitle: string;
  useCasesList: {
    title: string;
    description: string;
  }[];

  troubleshootTitle: string;
  troubleshootSubtitle: string;
  troubleshootTips: {
    issue: string;
    cause: string;
    solution: string;
  }[];

  timingTitle: string;
  timingText: string[];

  workflowTitle: string;
  workflowSubtitle: string;
  workflowSteps: string[];

  conclusionTitle: string;
  conclusionText: string[];
}

export const ASS_TO_SRT_GUIDES: Record<Locale, AssToSrtGuideContent> = {
  en: {
    "introTitle": "The Complete Guide to Converting ASS Subtitles to Clean SRT",
    "introSubtitle": "Discover why Advanced SubStation Alpha (.ass) subtitles are converted to universal SubRip (.srt), how formatting tag cleanup works, and how to maintain flawless timing across all media players and streaming platforms.",
    "introText": [
        "Advanced SubStation Alpha (.ass / .ssa) is celebrated throughout the multimedia and anime fansubbing communities for its virtually limitless styling capabilities. It enables typography enthusiasts to choose custom font families, specify exact pixel coordinates, apply dynamic color gradients, and orchestrate complex karaoke animations. However, this power comes at a steep cost in universal hardware compatibility.",
        "When you attempt to play video files with ASS subtitles on smart TVs, game consoles, mobile streaming apps, or web-based video players (like HTML5 video), you are frequently met with missing text, awkward font substitutions, or severe CPU-throttling video transcoding in home media servers like Plex and Jellyfin. SubRip (.srt), in sharp contrast, is the universal gold standard of video subtitles—understood natively by virtually every screen, operating system, and editing timeline on the planet.",
        "Converting ASS to SRT allows you to strip away proprietary formatting complexities while preserving clean dialogue text, accurate speaker timing, and essential typographical emphasis like bold and italics. This in-depth guide covers the technical architecture behind ASS to SRT conversion, timing mathematical adjustments from centiseconds to milliseconds, FFmpeg command-line workflows, and proven solutions for common playback issues."
    ],
    "whatIsTitle": "Understanding ASS and SRT: The Specialized Stylist vs. The Universal Standard",
    "whatIsText": [
        "Advanced SubStation Alpha (.ass, v4.00+) was developed by Kotus as an evolution of the earlier SubStation Alpha (.ssa) format. It was designed specifically to support sophisticated caption styling directly within text-based script files. ASS files contain extensive metadata, including script resolution ([Script Info]), pre-defined style libraries ([V4+ Styles]), and chronological event streams ([Events]) populated with inline override codes such as {\\pos(x,y)}, {\\c&HBBGGRR&}, and {\\an8}.",
        "SubRip (.srt), originating in the late 1990s alongside the popular DVD ripping utility developed by Brain, took the exact opposite engineering approach. Instead of defining visual rendering rules, SRT focuses strictly on simplicity: a sequential counter, a millisecond-precision timestamp interval, and plain text dialogue separated by blank lines. SRT delegates font choice, positioning, and rendering entirely to the host video player or operating system display engine.",
        "Because standard SRT files contain virtually zero layout overhead, they load instantaneously, consume minimal memory, and never cause hardware rendering crashes. When compatibility and frictionless playback are your top priorities, converting your ASS subtitle library to standardized SRT is the definitive solution."
    ],
    "whyConvertTitle": "6 Crucial Advantages of Converting ASS Subtitles to SRT",
    "whyConvertSubtitle": "Why content creators, streaming enthusiasts, and media collectors convert their stylized ASS scripts into clean SubRip captions.",
    "whyConvertReasons": [
        {
            "title": "1. 100% Universal Device & Smart TV Compatibility",
            "description": "SubRip is supported natively by LG webOS, Samsung Tizen, Roku, Apple TV, Chromecast, Android TV, and legacy USB media players without requiring external font files or libass rendering libraries."
        },
        {
            "title": "2. Eliminates Heavy Video Transcoding in Plex & Jellyfin",
            "description": "Many smart TV Plex clients cannot render ASS styling directly, forcing your media server CPU/GPU to burn captions into the video stream via real-time transcoding. SRT enables effortless 'Direct Play' with zero server strain."
        },
        {
            "title": "3. Seamless Web Player & YouTube Readiness",
            "description": "HTML5 <track> elements, YouTube Studio, Vimeo, and social video platforms do not support ASS files. Converting to SRT allows immediate upload or trivial conversion into WebVTT for web deployment."
        },
        {
            "title": "4. Featherlight Plain-Text File Footprint",
            "description": "By eliminating lengthy vector drawing paths, embedded font binaries, and dense karaoke timing strings, converted SRT files are up to 90% smaller and instantly readable in any basic text editor."
        },
        {
            "title": "5. Frictionless NLE Editing (Premiere, DaVinci, Final Cut)",
            "description": "Professional video editors like Adobe Premiere Pro and DaVinci Resolve import SRT subtitles cleanly into native caption tracks, whereas raw ASS files often fail to import or lose all positioning."
        },
        {
            "title": "6. Clean Text Extraction for Translation & AI Dubbing",
            "description": "Language localizers, translators, and AI speech engines require unencumbered dialogue transcripts. Stripping ASS override codes yields clean, spotless text ready for translation dictionaries and LLMs."
        }
    ],
    "howToTitle": "How to Convert ASS to SRT Online: Step-by-Step Instructions",
    "howToSubtitle": "Convert any Advanced SubStation Alpha file into clean SubRip subtitles in seconds using our secure in-browser tool.",
    "howToSteps": [
        {
            "step": "1",
            "title": "Upload or Paste Your ASS / SSA File",
            "description": "Drag and drop your .ass or .ssa subtitle file onto the converter workspace, or paste raw script content directly into the left input pane."
        },
        {
            "step": "2",
            "title": "Automatic Parsing, Tag Cleaning & Centisecond Conversion",
            "description": "Our client-side JavaScript engine reads the [Events] block, converts ASS centisecond timestamps into SRT millisecond intervals, translates line breaks (\\N), and cleans out complex styling codes."
        },
        {
            "step": "3",
            "title": "Download Clean, Formatted .SRT Subtitles",
            "description": "Review the instant preview in the right pane, copy the clean text to your clipboard, or click 'Download Subtitles (.SRT)' for immediate use on your media players."
        }
    ],
    "differenceTitle": "Technical Comparison: ASS vs. SRT at a Glance",
    "differenceSubtitle": "A detailed breakdown of capabilities, player support, and architectural differences between both formats.",
    "differenceTable": [
        {
            "feature": "Primary Design Goal",
            "ass": "High-end visual typography & fansub styling",
            "srt": "Universal compatibility & plain-text dialogue"
        },
        {
            "feature": "File Syntax",
            "ass": "Multi-section INI-like structure ([Script Info], [Styles], [Events])",
            "srt": "Sequential blocks (Counter, Timestamp, Text, Blank Line)"
        },
        {
            "feature": "Timing Precision",
            "ass": "Centiseconds (H:MM:SS.cs — hundredths of a second)",
            "srt": "Milliseconds (HH:MM:SS,mmm — thousandths of a second)"
        },
        {
            "feature": "Coordinate Positioning",
            "ass": "Pixel-exact coordinates (\\pos(X,Y)) & 9-point alignment (\\an1-9)",
            "srt": "None (fixed player default, usually bottom-center)"
        },
        {
            "feature": "Custom Fonts & Colors",
            "ass": "Complete typography control, outlines, shadows, hex BGR colors",
            "srt": "Player-dependent; basic bold, italic, and underline only"
        },
        {
            "feature": "Animation & Effects",
            "ass": "Fades (\\fad), movement (\\move), zoom, karaoke (\\k), vector drawings",
            "srt": "Unsupported; plain text only"
        },
        {
            "feature": "Smart TV Compatibility",
            "ass": "Very poor (often triggers server transcoding or render errors)",
            "srt": "Universal (LG, Samsung, Sony, Roku, Apple TV, FireTV)"
        },
        {
            "feature": "Streaming Servers (Plex)",
            "ass": "Requires CPU-intensive transcoding on most smart TV clients",
            "srt": "Direct Play enabled by default (zero CPU overhead)"
        },
        {
            "feature": "Web & Browser Support",
            "ass": "Requires heavy JavaScript emulators (libass / JavascriptSubtitlesOctopus)",
            "srt": "Native via WebVTT conversion or simple HTML5 parsers"
        },
        {
            "feature": "Ideal Use Cases",
            "ass": "Anime fansubbing, karaoke videos, stylized open captions",
            "srt": "Broadcast television, movies, streaming, YouTube, NLE editing"
        }
    ],
    "structureTitle": "Inside the Formats: How an ASS File Becomes Clean SRT",
    "structureSubtitle": "Understanding the data transformation that occurs when parsing complex ASS structures into streamlined SubRip cues.",
    "structureBlocks": [
        {
            "name": "1. The Raw ASS Dialogue Line",
            "description": "In ASS, dialogue lines reside under [Events] and contain layer, timing, style names, margins, and inline override blocks.",
            "snippet": "[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:01:20.15,0:01:24.80,Default,,0,0,0,,{\\pos(960,1020)\\c&H00FFFF&\\b1}Warning!{\\b0}\\NSystem malfunction detected."
        },
        {
            "name": "2. The Extraction & Cleaning Process",
            "description": "The converter extracts Start and End times, strips positioning {\\pos(...)} and color {\\c...} tags, translates {\\b1}...{\\b0} into <b>...</b>, converts \\N into a real newline, and multiplies centiseconds by 10.",
            "snippet": "Start: 0:01:20.15  ->  00:01:20,150\nEnd:   0:01:24.80  ->  00:01:24,800\nText:  {\\pos(960,1020)\\c&H00FFFF&\\b1}Warning!{\\b0}\\NSystem malfunction detected.\n       => <b>Warning!</b>\\nSystem malfunction detected."
        },
        {
            "name": "3. The Standard SubRip (.SRT) Output",
            "description": "The resulting cue is assigned a sequential number and formatted with clean timestamps and readable subtitle text.",
            "snippet": "1\n00:01:20,150 --> 00:01:24,800\n<b>Warning!</b>\nSystem malfunction detected.\n"
        }
    ],
    "exampleTitle": "Real-World ASS to SRT Conversion Example: Before & After",
    "exampleIntro": "Witness how complex anime fansub lines with positioning, color codes, and line breaks are converted into valid, universal SubRip format.",
    "exampleAssInput": "[Script Info]\nTitle: Sample Anime Episode 01\nScriptType: v4.00+\nPlayResX: 1920\nPlayResY: 1080\n\n[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,52,&H00FFFFFF,&H000000FF,&H00000000,&H80000000,-1,0,0,0,100,100,0,0,1,3,2,2,30,30,40,1\nStyle: TopSign,Trebuchet MS,42,&H0000FFFF,&H000000FF,&H00000000,&H80000000,0,0,0,0,100,100,0,0,1,2,1,8,20,20,20,1\n\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:04.25,0:00:07.90,Default,,0,0,0,,{\\i1}Previously on Space Odyssey...{\\i0}\nDialogue: 0,0:00:08.50,0:00:12.10,TopSign,,0,0,0,,{\\an8\\pos(960,60)\\c&H00FFFF&}SECTOR 7 - HEADQUARTERS\nDialogue: 0,0:00:12.65,0:00:16.40,Default,,0,0,0,,{\\b1}Commander:{\\b0}\\NWe must initiate warp speed immediately!",
    "exampleSrtOutput": "1\n00:00:04,250 --> 00:00:07,900\n<i>Previously on Space Odyssey...</i>\n\n2\n00:00:08,500 --> 00:00:12,100\nSECTOR 7 - HEADQUARTERS\n\n3\n00:00:12,650 --> 00:00:16,400\n<b>Commander:</b>\nWe must initiate warp speed immediately!",
    "exampleExplanation": "In this real-world example: (1) Centisecond timestamps (e.g. 0:00:04.25 and 0:00:07.90) are converted into exact SubRip millisecond values (00:00:04,250 and 00:00:07,900). (2) The complex top-screen sign tag {\\an8\\pos(960,60)\\c&H00FFFF&} is cleanly removed, leaving the plain text readable. (3) Styling tags {\\i1} and {\\b1} are translated into compliant HTML tags (<i> and <b>) while \\N is turned into a proper subtitle line break.",
    "formattingLimitationsTitle": "Formatting Limitations: What Gets Preserved vs. What Gets Cleaned",
    "formattingLimitationsSubtitle": "Because SubRip is a lightweight format, complex ASS styling is stripped to prevent rendering corruption.",
    "cleanedTagsList": [
        {
            "name": "Screen Coordinates & Positioning",
            "tag": "{\\pos(X,Y)} & {\\move(X1,Y1,X2,Y2)}",
            "explanation": "Standard SRT players do not understand 2D pixel coordinates. These tags are completely removed so text does not clutter the screen with raw code."
        },
        {
            "name": "9-Point Screen Alignment",
            "tag": "{\\an1} through {\\an9}",
            "explanation": "ASS aligns text across a 3x3 grid (top-left, center, bottom-right). SRT places subtitles at the player's default bottom-center position."
        },
        {
            "name": "Color Overrides & Transparency",
            "tag": "{\\c&HBBGGRR&} & {\\1a&HAA&}",
            "explanation": "Hexadecimal BGR color codes and alpha channel transparency values are stripped. Subtitles will display using the media player's configured font color (usually white or yellow)."
        },
        {
            "name": "Fade In & Fade Out Effects",
            "tag": "{\\fad(d1,d2)} & {\\fade(...)}",
            "explanation": "Smooth alpha fading is an ASS-exclusive rendering feature. The timing remains intact in SRT, but the text appears and vanishes cleanly at the cue boundaries."
        },
        {
            "name": "Karaoke Timing Tags",
            "tag": "{\\k<duration>}, {\\K}, {\\kf}",
            "explanation": "Centisecond word-by-word highlight timers are removed. The entire lyric line is presented as complete, readable subtitle text."
        },
        {
            "name": "Vector Drawings & Shapes",
            "tag": "{\\p1}...{\\p0}",
            "explanation": "Drawing commands (vector coordinates used to block out background signs or draw logos) are safely discarded so that raw coordinate numbers are never displayed to viewers."
        }
    ],
    "ffmpegTitle": "How to Convert ASS to SRT via Command Line (FFmpeg)",
    "ffmpegSubtitle": "Fast batch conversion commands for advanced video power users and system administrators.",
    "ffmpegCommand": "ffmpeg -i input_subtitles.ass -c:s srt output_subtitles.srt",
    "ffmpegExplanation": [
        "FFmpeg provides native subtitle stream demuxing and conversion capabilities. The command above reads the input .ass file, decodes the Advanced SubStation Alpha streams, strips unsupported override tags, and writes a standard SubRip .srt file.",
        "If your ASS subtitles are embedded inside an MKV (Matroska) video file, you can extract and convert them directly without re-encoding the video or audio streams:",
        "ffmpeg -i movie.mkv -map 0:s:0 -c:s srt movie_subtitles.srt\n\nHere, '-map 0:s:0' selects the first subtitle stream from the container and converts it directly into a standalone .srt file.",
        "While FFmpeg is remarkably powerful, our browser-based tool provides instantaneous visual inspection, cleans malformed character encodings, requires zero command-line terminal knowledge, and functions smoothly on mobile phones, tablets, and restricted workstations."
    ],
    "useCasesTitle": "5 Practical Real-World Use Cases for ASS to SRT Conversion",
    "useCasesSubtitle": "Common scenarios where converting stylized subtitles to SubRip is essential for video workflows.",
    "useCasesList": [
        {
            "title": "1. Plex, Emby & Jellyfin Direct-Play Streaming",
            "description": "When streaming anime or foreign films from a home server to an Apple TV, Roku, or smart TV app, ASS subtitles frequently force the server into heavy CPU transcoding. Converting to SRT enables instant Direct Play with negligible CPU usage and no buffering."
        },
        {
            "title": "2. Uploading Captions to YouTube, Vimeo & Social Video",
            "description": "Major video platforms reject ASS files entirely during upload. Converting to clean SRT allows creators to upload captions that YouTube indexes for international search and automated subtitle translation."
        },
        {
            "title": "3. Playback on Smart TVs via USB Hard Drives",
            "description": "Built-in media players on Samsung, LG, Sony, and Hisense TVs readily recognize .srt files placed in the same folder as video files, whereas .ass files are either ignored or display broken characters."
        },
        {
            "title": "4. Professional NLE Timelines (Premiere Pro & DaVinci Resolve)",
            "description": "Video editors importing user-generated captions into editing software frequently encounter crashes or missing tracks with ASS scripts. SRT imports seamlessly into dedicated caption tracks ready for broadcast."
        },
        {
            "title": "5. Subtitle Localization, Translation & AI Transcription Workflows",
            "description": "Translators and AI language models can easily misinterpret ASS inline override tags as actual words. Stripping ASS codes into clean SRT yields pristine dialogue text for rapid localization."
        }
    ],
    "troubleshootTitle": "Troubleshooting Common ASS to SRT Conversion Issues",
    "troubleshootSubtitle": "Proven technical solutions for encoding corruptions, overlapping cues, and player formatting quirks.",
    "troubleshootTips": [
        {
            "issue": "Garbled Accents, Strange Symbols, or Mojibake Text",
            "cause": "The original ASS file was saved in legacy ANSI, Windows-1252, or UTF-16 encoding rather than standard UTF-8 without BOM.",
            "solution": "Open the file in a modern text editor like VS Code or Notepad++, convert the encoding to UTF-8 without BOM, and paste the text into our online converter for spotless rendering."
        },
        {
            "issue": "Missing Dialogue or Lines Disappearing After Conversion",
            "cause": "Lines in the ASS script were marked as 'Comment:' instead of 'Dialogue:', or were vector drawing commands (\\p1) discarded by design.",
            "solution": "Check the ASS file in a text editor. If intended dialogue is prefixed with 'Comment:', change the prefix to 'Dialogue:' so our parser recognizes it as legitimate spoken dialogue."
        },
        {
            "issue": "Simultaneous Multi-Speaker Dialogues Clashing",
            "cause": "In ASS, multiple speakers are often displayed simultaneously on different screen layers or positions. SRT displays all text at the bottom.",
            "solution": "Our converter sorts cues chronologically so both lines appear. In your video player, ensure subtitle line-wrapping is enabled, or add speaker names (e.g. 'Alice: Hello') to distinguish multiple voices."
        },
        {
            "issue": "Raw Code Tags Like {\\pos...} Displayed on Screen",
            "cause": "The original file contained malformed or unclosed curly braces, preventing standard subtitle cleaners from recognizing the tags.",
            "solution": "Our converter features robust regex-based tag sanitization that strips unclosed or nested override blocks, ensuring your output SRT is 100% free of ugly code tags."
        }
    ],
    "timingTitle": "Subtitle Timing Precision: Centiseconds to Milliseconds Explained",
    "timingText": [
        "One of the subtle yet critical technical challenges in ASS to SRT conversion is timestamp conversion. Advanced SubStation Alpha uses a centisecond timing system formatted as H:MM:SS.cs (e.g., 0:01:23.45). Centiseconds represent hundredths of a second (units of 10 milliseconds).",
        "SubRip, on the other hand, utilizes a millisecond timing scheme formatted as HH:MM:SS,mmm (e.g., 00:01:23,450). Converting between these two standards requires precise arithmetic: multiplying centiseconds by 10 to obtain the exact millisecond representation, while padding hours, minutes, and seconds to the strict two-digit SubRip specification.",
        "Our converter handles this arithmetic with 100% mathematical fidelity. There is zero rounding accumulation, meaning your dialogue will never drift out of sync with the underlying video or audio track, regardless of how long the movie or documentary is."
    ],
    "workflowTitle": "Recommended Subtitle Workflow for Home Theater Enthusiasts",
    "workflowSubtitle": "How to extract, convert, and prepare smooth-playing subtitles for any media library.",
    "workflowSteps": [
        "Step 1: If your subtitles are locked inside an MKV container, use MKVToolNix (gMKVExtractGUI) or FFmpeg to extract the .ass subtitle track to your computer.",
        "Step 2: Upload the .ass file to our online ASS to SRT Converter. The tool automatically cleans styling tags and adjusts timestamps.",
        "Step 3: Download the converted .srt file and name it identically to your video file (e.g., MovieName.2024.1080p.mkv and MovieName.2024.1080p.srt).",
        "Step 4: Test playback in VLC Media Player to confirm dialogue clarity and timing alignment with speech.",
        "Step 5: Place the .srt file in your media server directory (Plex, Emby, Jellyfin) or on your USB thumb drive to enjoy smooth, low-CPU Direct Play on your smart TV."
    ],
    "conclusionTitle": "Conclusion & Helpful Subtitle Conversion Tools",
    "conclusionText": [
        "Advanced SubStation Alpha remains the premier format for artistic, stylized on-screen subtitles. However, when you need guaranteed playback on smart TVs, mobile phones, streaming platforms, and home theater media servers, SubRip (.srt) is undefeated in reliability and simplicity.",
        "Our free ASS to SRT Converter Online delivers instantaneous, 100% private, browser-based conversions with zero software installation required. Explore our companion tools for additional video captioning workflows:"
    ]
},
  es: {
    "introTitle": "Guía Completa para Convertir Subtítulos ASS a SRT Limpio",
    "introSubtitle": "Descubre por qué se convierten los subtítulos Advanced SubStation Alpha (.ass) al formato universal SubRip (.srt), cómo funciona la depuración de etiquetas de estilo y cómo mantener una sincronización milimétrica en cualquier televisor o reproductor.",
    "introText": [
        "Advanced SubStation Alpha (.ass / .ssa) es un formato legendario en el mundo del fansub y la edición de anime debido a sus posibilidades visuales casi infinitas. Permite a los editores elegir tipografías exclusivas, definir coordenadas exactas de píxeles en pantalla, aplicar degradados de color y sincronizar complejas animaciones de karaoke. Sin embargo, toda esta potencia visual supone un grave inconveniente en términos de compatibilidad universal con el hardware.",
        "Al intentar reproducir videos con subtítulos ASS en Smart TVs, consolas de videojuegos, aplicaciones móviles o reproductores web (como HTML5 video), es común encontrarse con textos ausentes, fuentes predeterminadas deformadas o una intensa transcodificación que satura la CPU de servidores como Plex o Jellyfin. En cambio, SubRip (.srt) es el estándar universal de subtitulado por excelencia: comprendido de forma nativa por prácticamente cualquier pantalla, sistema operativo y software de edición del mundo.",
        "Convertir de ASS a SRT permite deshacerse de etiquetas de formato complejas y propietarias, preservando intactos los textos de los diálogos, la sincronización de las voces y los estilos tipográficos fundamentales como negritas y cursivas. En esta guía técnica detallada analizamos la arquitectura de la conversión de ASS a SRT, el cálculo matemático de centisegundos a milisegundos, comandos de terminal con FFmpeg y soluciones definitivas a problemas comunes de reproducción."
    ],
    "whatIsTitle": "Comprendiendo ASS y SRT: El Diseñador Estilizado frente al Estándar Universal",
    "whatIsText": [
        "Advanced SubStation Alpha (.ass, v4.00+) fue desarrollado por Kotus como una evolución del formato clásico SubStation Alpha (.ssa). Su propósito original era ofrecer un control tipográfico total directamente en archivos de texto editables. Un archivo ASS cuenta con múltiples secciones de metadatos: la resolución base ([Script Info]), la biblioteca de estilos predefinidos ([V4+ Styles]) y la pista cronológica de eventos ([Events]), con etiquetas de anulación directa en el texto como {\\pos(x,y)}, {\\c&HBBGGRR&} o {\\an8}.",
        "SubRip (.srt), surgido a finales de los años 90 junto con la célebre herramienta de extracción de subtítulos de DVD creada por Brain, adoptó una filosofía completamente opuesta. En lugar de establecer directrices de renderizado visual, SRT prioriza la sencillez absoluta: un contador numérico correlativo, un intervalo temporal con precisión de milisegundos y el texto plano del diálogo, delimitado por saltos de línea en blanco. En SRT, la tipografía y la posición dependen exclusivamente del reproductor final.",
        "Al carecer de sobrecarga gráfica y procesamientos de vectores, los archivos SRT se cargan de forma instantánea, no consumen memoria y garantizan que el video se reproduzca sin fallos de renderizado. Si tu prioridad es la fluidez y la compatibilidad absoluta, transformar tus subtítulos ASS en SRT estándar es la mejor elección."
    ],
    "whyConvertTitle": "6 Ventajas Cruciales de Convertir Subtítulos ASS a SRT",
    "whyConvertSubtitle": "Por qué creadores de contenido, aficionados al cine y administradores de servidores multimedia eligen convertir sus scripts ASS a SubRip.",
    "whyConvertReasons": [
        {
            "title": "1. Compatibilidad 100% Universal con Dispositivos y Smart TVs",
            "description": "SubRip funciona de forma nativa en Smart TVs de LG (webOS), Samsung (Tizen), Sony, Roku, Apple TV, Chromecast, Android TV y reproductores multimedia USB sin requerir librerías externas como libass."
        },
        {
            "title": "2. Elimina la Pesada Transcodificación en Servidores Plex y Jellyfin",
            "description": "Muchas Smart TVs no pueden procesar estilos ASS de manera directa, obligando al servidor doméstico a quemar los subtítulos mediante transcodificación continua de video. Con SRT disfrutas de 'Direct Play' inmediato con cero uso de CPU."
        },
        {
            "title": "3. Compatibilidad Directa con YouTube y Reproductores Web",
            "description": "Los elementos <track> de HTML5, YouTube Studio, Vimeo y las redes sociales no admiten archivos ASS. Al convertirlos a SRT, puedes subirlos directamente o transformarlos a WebVTT con total facilidad."
        },
        {
            "title": "4. Archivos de Texto Extremadamente Ligeros",
            "description": "Al depurar trazados vectoriales, fuentes incrustadas y cadenas de temporización de karaoke, los archivos SRT resultantes son hasta un 90% más compactos y legibles en cualquier bloc de notas."
        },
        {
            "title": "5. Integración sin Errores en Editores (Premiere, DaVinci, Final Cut)",
            "description": "Programas profesionales como Adobe Premiere Pro y DaVinci Resolve importan subtítulos SRT directamente en sus pistas de subtítulos nativas, evitando los bloqueos causados por scripts ASS."
        },
        {
            "title": "6. Extracción Limpia para Traducción y Doblaje por Inteligencia Artificial",
            "description": "Traductores automáticos y modelos de lenguaje necesitan textos limpios sin códigos intermedios. Eliminar las etiquetas de ASS deja el diálogo impecable para memorias de traducción y sintetizadores de voz."
        }
    ],
    "howToTitle": "Cómo Convertir ASS a SRT Online: Instrucciones Paso a Paso",
    "howToSubtitle": "Transforma cualquier archivo Advanced SubStation Alpha en subtítulos SubRip limpios en cuestión de segundos.",
    "howToSteps": [
        {
            "step": "1",
            "title": "Sube o Pega tu Archivo ASS / SSA",
            "description": "Arrastra y suelta tu archivo de subtítulos .ass o .ssa en el área de carga o pega el texto directamente en el panel izquierdo del convertidor."
        },
        {
            "step": "2",
            "title": "Procesamiento Automático y Limpieza de Etiquetas",
            "description": "Nuestro motor analiza el bloque [Events], convierte los centisegundos de ASS en milisegundos de SRT, adapta los saltos de línea (\\N) y elimina códigos de estilo complejos."
        },
        {
            "step": "3",
            "title": "Descarga tus Subtítulos .SRT Listos para Usar",
            "description": "Comprueba el resultado en el panel derecho, copia el texto al portapapeles o haz clic en 'Descargar Subtítulos (.SRT)' para utilizarlos en cualquier pantalla."
        }
    ],
    "differenceTitle": "Comparativa Técnica: ASS frente a SRT",
    "differenceSubtitle": "Análisis exhaustivo de capacidades, soporte de reproductores y diferencias estructurales entre ambos formatos.",
    "differenceTable": [
        {
            "feature": "Objetivo Principal de Diseño",
            "ass": "Tipografía artística avanzada y edición visual para fansubs",
            "srt": "Compatibilidad universal y subtitulado en texto plano"
        },
        {
            "feature": "Estructura del Archivo",
            "ass": "Estructura por bloques estilo INI ([Script Info], [Styles], [Events])",
            "srt": "Bloques secuenciales (Número, Marca temporal, Diálogo, Línea vacía)"
        },
        {
            "feature": "Precisión de Tiempo",
            "ass": "Centisegundos (H:MM:SS.cs — centésimas de segundo)",
            "srt": "Milisegundos (HH:MM:SS,mmm — milésimas de segundo)"
        },
        {
            "feature": "Posicionamiento en Pantalla",
            "ass": "Coordenadas por píxel (\\pos(X,Y)) y matriz de 9 puntos (\\an1-9)",
            "srt": "Ninguno (posición fija inferior por defecto del reproductor)"
        },
        {
            "feature": "Fuentes y Colores Personalizados",
            "ass": "Control tipográfico total, bordes, sombras y colores BGR en hexadecimal",
            "srt": "Gestionado por el reproductor; solo negrita, cursiva y subrayado"
        },
        {
            "feature": "Animaciones y Efectos",
            "ass": "Transiciones (\\fad), movimientos (\\move), zoom, karaoke (\\k) y vectores",
            "srt": "No soportado; solo lectura de texto plano"
        },
        {
            "feature": "Compatibilidad con Smart TVs",
            "ass": "Muy reducida (suele provocar transcodificación o fallos gráficos)",
            "srt": "Universal (LG, Samsung, Sony, Roku, Apple TV, FireTV)"
        },
        {
            "feature": "Servidores de Streaming (Plex)",
            "ass": "Exige transcodificación pesada de CPU/GPU en la mayoría de Smart TVs",
            "srt": "Reproducción Directa ('Direct Play') sin uso de recursos"
        },
        {
            "feature": "Soporte en Navegadores Web",
            "ass": "Requiere pesados emuladores JavaScript (libass / JavascriptSubtitlesOctopus)",
            "srt": "Nativo mediante WebVTT o reproductores HTML5 sencillos"
        },
        {
            "feature": "Casos de Uso Recomendados",
            "ass": "Subtitulado de anime, canciones con karaoke y carteles traducidos",
            "srt": "Cine, series de televisión, YouTube, streaming y traducción"
        }
    ],
    "structureTitle": "Estructura Interna: Cómo se Transforma un Archivo ASS en SRT",
    "structureSubtitle": "Entiende el proceso de depuración de datos que convierte líneas complejas de ASS en bloques SubRip limpios.",
    "structureBlocks": [
        {
            "name": "1. La Línea Original de Diálogo en ASS",
            "description": "En ASS, los diálogos se ubican bajo la sección [Events] e incorporan capa, tiempos, estilos, márgenes y códigos de anulación entre llaves.",
            "snippet": "[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:01:20.15,0:01:24.80,Default,,0,0,0,,{\\pos(960,1020)\\c&H00FFFF&\\b1}¡Peligro!{\\b0}\\NFallo en el sistema detectado."
        },
        {
            "name": "2. El Proceso de Extracción y Limpieza",
            "description": "El convertidor extrae los tiempos inicial y final, elimina las etiquetas de posición {\\pos(...)} y color {\\c...}, traduce {\\b1}...{\\b0} a <b>...</b>, convierte \\N en un salto de línea y multiplica centisegundos por 10.",
            "snippet": "Inicio: 0:01:20.15  ->  00:01:20,150\nFin:    0:01:24.80  ->  00:01:24,800\nTexto:  {\\pos(960,1020)\\c&H00FFFF&\\b1}¡Peligro!{\\b0}\\NFallo en el sistema detectado.\n        => <b>¡Peligro!</b>\\nFallo en el sistema detectado."
        },
        {
            "name": "3. El Bloque Final en Formato SubRip (.SRT)",
            "description": "La réplica resultante recibe un número correlativo secuencial y se presenta con marcas temporales válidas y texto formateado.",
            "snippet": "1\n00:01:20,150 --> 00:01:24,800\n<b>¡Peligro!</b>\nFallo en el sistema detectado.\n"
        }
    ],
    "exampleTitle": "Ejemplo Real de Conversión ASS a SRT: Antes y Después",
    "exampleIntro": "Comprueba cómo un diálogo con efectos visuales complejos y cambios de posición se transforma en un bloque SRT limpio y universal.",
    "exampleAssInput": "[Script Info]\nTitle: Episodio Anime de Prueba 01\nScriptType: v4.00+\nPlayResX: 1920\nPlayResY: 1080\n\n[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,52,&H00FFFFFF,&H000000FF,&H00000000,&H80000000,-1,0,0,0,100,100,0,0,1,3,2,2,30,30,40,1\nStyle: CartelSuperior,Trebuchet MS,42,&H0000FFFF,&H000000FF,&H00000000,&H80000000,0,0,0,0,100,100,0,0,1,2,1,8,20,20,20,1\n\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:04.25,0:00:07.90,Default,,0,0,0,,{\\i1}En el episodio anterior de Odisea Espacial...{\\i0}\nDialogue: 0,0:00:08.50,0:00:12.10,CartelSuperior,,0,0,0,,{\\an8\\pos(960,60)\\c&H00FFFF&}SECTOR 7 - BASE CENTRAL\nDialogue: 0,0:00:12.65,0:00:16.40,Default,,0,0,0,,{\\b1}Comandante:{\\b0}\\N¡Debemos activar la velocidad luz de inmediato!",
    "exampleSrtOutput": "1\n00:00:04,250 --> 00:00:07,900\n<i>En el episodio anterior de Odisea Espacial...</i>\n\n2\n00:00:08,500 --> 00:00:12,100\nSECTOR 7 - BASE CENTRAL\n\n3\n00:00:12,650 --> 00:00:16,400\n<b>Comandante:</b>\n¡Debemos activar la velocidad luz de inmediato!",
    "exampleExplanation": "En este caso práctico: (1) Las marcas de tiempo en centisegundos (0:00:04.25 y 0:00:07.90) se convierten de manera exacta a milisegundos de SRT (00:00:04,250 y 00:00:07,900). (2) La etiqueta del cartel superior {\\an8\\pos(960,60)\\c&H00FFFF&} se elimina limpiamente, mostrando el texto legible. (3) Los estilos {\\i1} y {\\b1} se trasladan a etiquetas HTML admitidas (<i> y <b>) y el comando \\N se transforma en un salto de línea natural.",
    "formattingLimitationsTitle": "Limitaciones de Formato: Qué se Conserva y Qué se Depura",
    "formattingLimitationsSubtitle": "Como SRT es un formato de texto ligero, las etiquetas exclusivas de ASS se suprimen para evitar textos corruptos en pantalla.",
    "cleanedTagsList": [
        {
            "name": "Coordenadas de Posición en Pantalla",
            "tag": "{\\pos(X,Y)} y {\\move(X1,Y1,X2,Y2)}",
            "explanation": "Los reproductores estándar de SRT no interpretan coordenadas 2D. Estas etiquetas se eliminan íntegramente para evitar que se muestren códigos de programación en la imagen."
        },
        {
            "name": "Alineación en Matriz de 9 Puntos",
            "tag": "{\\an1} hasta {\\an9}",
            "explanation": "ASS posiciona textos en 9 zonas de la pantalla. En SRT, todas las líneas se reubican en la posición predeterminada del reproductor (generalmente inferior centrada)."
        },
        {
            "name": "Colores Personalizados y Transparencias",
            "tag": "{\\c&HBBGGRR&} y {\\1a&HAA&}",
            "explanation": "Los valores de color hexadecimales y canales alfa se descartan. Los subtítulos adoptarán el color configurado en el televisor o reproductor (blanco o amarillo habitualmente)."
        },
        {
            "name": "Efectos de Desvanecimiento (Fade In / Out)",
            "tag": "{\\fad(d1,d2)} y {\\fade(...)}",
            "explanation": "El fundido de entrada y salida es exclusivo de ASS. La sincronía se mantiene de forma exacta, pero el texto aparece y desaparece limpiamente al inicio y fin del intervalo."
        },
        {
            "name": "Marcadores Temporales de Karaoke",
            "tag": "{\\k<duración>}, {\\K}, {\\kf}",
            "explanation": "Los temporizadores que resaltan sílabas por centisegundos se eliminan. El texto de la canción se muestra como un diálogo completo y cómodo de leer."
        },
        {
            "name": "Trazados Vectoriales y Dibujos",
            "tag": "{\\p1}...{\\p0}",
            "explanation": "Las órdenes gráficas que tapan carteles o dibujan logotipos se suprimen para evitar que números y coordenadas sin sentido aparezcan como subtítulo."
        }
    ],
    "ffmpegTitle": "Cómo Convertir ASS a SRT desde la Línea de Comandos (FFmpeg)",
    "ffmpegSubtitle": "Comandos de conversión por lotes para administradores de sistemas y usuarios avanzados.",
    "ffmpegCommand": "ffmpeg -i subtitulos_entrada.ass -c:s srt subtitulos_salida.srt",
    "ffmpegExplanation": [
        "FFmpeg incluye herramientas nativas para la extracción y transcodificación de pistas de subtítulos. La orden anterior lee el archivo .ass de origen, decodifica los eventos, suprime las etiquetas no compatibles y genera un archivo .srt SubRip estandarizado.",
        "Si tus subtítulos ASS se encuentran integrados dentro de un contenedor de video MKV (Matroska), puedes extraerlos y convertirlos directamente sin volver a codificar las pistas de video ni de audio:",
        "ffmpeg -i pelicula.mkv -map 0:s:0 -c:s srt subtitulos_extraidos.srt\n\nEn esta instrucción, el parámetro '-map 0:s:0' selecciona la primera pista de subtítulos del archivo y la transforma de forma inmediata en un archivo .srt externo.",
        "Aunque FFmpeg es muy potente, nuestro convertidor en el navegador proporciona inspección visual instantánea, soluciona codificaciones de caracteres defectuosas y funciona en smartphones, tablets y ordenadores sin necesidad de instalar programas adicionales."
    ],
    "useCasesTitle": "5 Casos Prácticos de Conversión de ASS a SRT",
    "useCasesSubtitle": "Situaciones habituales donde transformar subtítulos estilizados a SubRip es indispensable para el flujo de trabajo.",
    "useCasesList": [
        {
            "title": "1. Streaming Directo en Plex, Emby y Jellyfin sin Transcodificar",
            "description": "Al ver anime o series extranjeras desde un servidor casero en Smart TVs o Apple TV, los subtítulos ASS fuerzan al servidor a realizar una pesada transcodificación de video. Convertir a SRT permite la reproducción directa fluida sin sobrecalentar el procesador."
        },
        {
            "title": "2. Publicación de Subtítulos en YouTube, Vimeo y Redes Sociales",
            "description": "Las plataformas de video online rechazan de plano los archivos ASS. La conversión a SRT limpio permite a los creadores cargar subtítulos cerrados que los algoritmos de YouTube indexan para búsquedas y traducciones automáticas."
        },
        {
            "title": "3. Reproducción en Smart TVs a través de Memorias USB",
            "description": "Los reproductores integrados en televisores de Samsung, LG, Sony y Philips leen al instante archivos .srt guardados en la misma carpeta que el video, mientras que los archivos .ass suelen ser ignorados o mostrar caracteres rotos."
        },
        {
            "title": "4. Edición de Video en Premiere Pro, DaVinci Resolve y Final Cut",
            "description": "Los editores profesionales que reciben subtítulos creados en Aegisub suelen experimentar errores al importarlos a sus líneas de tiempo. SRT se integra de manera limpia en pistas de texto cerradas."
        },
        {
            "title": "5. Procesos de Traducción, Localización y Doblaje por IA",
            "description": "Las herramientas de traducción automática pueden interpretar erróneamente las etiquetas internas de ASS como palabras del guion. Al limpiar el texto y dejar un archivo SRT puro, la traducción resulta mucho más rápida y precisa."
        }
    ],
    "troubleshootTitle": "Solución de Problemas Frecuentes al Convertir de ASS a SRT",
    "troubleshootSubtitle": "Consejos técnicos para resolver fallos de codificación, textos superpuestos y problemas de visualización.",
    "troubleshootTips": [
        {
            "issue": "Acentos Deformados, Caracteres Raros o Fallos de 'Mojibake'",
            "cause": "El archivo ASS original se guardó en codificaciones obsoletas como ANSI, Windows-1252 o UTF-16 en vez de UTF-8 estándar sin BOM.",
            "solution": "Abre el archivo en un editor como Notepad++ o VS Code, convierte la codificación a UTF-8 sin BOM y pega el texto en nuestro convertidor para garantizar caracteres perfectos."
        },
        {
            "issue": "Diálogos que Desaparecen o no se Muestran tras la Conversión",
            "cause": "Las líneas del script ASS estaban etiquetadas como 'Comment:' en lugar de 'Dialogue:', o correspondían a comandos de dibujo (\\p1) eliminados por diseño.",
            "solution": "Revisa el archivo ASS. Si las frases del diálogo están precedidas de 'Comment:', cámbialo a 'Dialogue:' para que nuestro sistema las reconozca como intervenciones de los personajes."
        },
        {
            "issue": "Líneas de Varios Personajes que Chocan entre Sí",
            "cause": "En ASS, cuando varios personajes hablan a la vez se utilizan capas o posiciones diferentes. En SRT, todo se muestra en la zona inferior.",
            "solution": "El convertidor organiza las líneas cronológicamente. Asegúrate de que tu reproductor de video tenga activo el ajuste de varias líneas o añade los nombres de los personajes para diferenciarlos fácilmente."
        },
        {
            "issue": "Etiquetas Visibles en Pantalla Como {\\pos...} o {\\c...}",
            "cause": "El archivo presentaba llaves de apertura o cierre rotas o anidadas de forma incorrecta, impidiendo que los limpiadores estándar identifiquen el código.",
            "solution": "Nuestro motor incluye expresiones regulares optimizadas que detectan y limpian incluso bloques incompletos, garantizando que no queden restos de código en el archivo SRT final."
        }
    ],
    "timingTitle": "Precisión Temporal: De Centisegundos a Milisegundos Explicado",
    "timingText": [
        "Uno de los detalles técnicos más relevantes al transformar subtítulos ASS a SRT es la adaptación del sistema de tiempo. Advanced SubStation Alpha emplea centisegundos con formato H:MM:SS.cs (por ejemplo, 0:01:23.45). Cada centisegundo equivale a una centésima de segundo (fracciones de 10 milisegundos).",
        "SubRip, en cambio, utiliza un esquema estricto de milisegundos expresado como HH:MM:SS,mmm (por ejemplo, 00:01:23,450). Pasar de un estándar a otro exige un cálculo exacto: multiplicar los centisegundos por 10 para hallar los milisegundos precisos y completar las horas y minutos a dos dígitos numéricos.",
        "Nuestra herramienta realiza esta conversión con absoluta exactitud matemática. No se produce ningún desfase acumulativo, lo que asegura que las voces y los subtítulos permanezcan perfectamente sincronizados a lo largo de toda la película o serie."
    ],
    "workflowTitle": "Flujo de Trabajo Recomendado para Coleccionistas de Video",
    "workflowSubtitle": "Cómo extraer, convertir y preparar subtítulos ligeros para tu biblioteca multimedia doméstica.",
    "workflowSteps": [
        "Paso 1: Si tus subtítulos están dentro de un archivo MKV, utiliza MKVToolNix o FFmpeg para extraer la pista de subtítulos .ass a tu ordenador.",
        "Paso 2: Carga el archivo .ass en nuestro Convertidor ASS a SRT Online. El sistema limpiará las etiquetas y ajustará las marcas de tiempo al instante.",
        "Paso 3: Descarga el archivo .srt generado y renómbralo exactamente igual que tu archivo de video (ejemplo: Pelicula.2024.1080p.mkv y Pelicula.2024.1080p.srt).",
        "Paso 4: Prueba la reproducción en VLC Media Player para verificar que los diálogos se lean de forma clara y sincronizada con el sonido.",
        "Paso 5: Guarda el archivo .srt junto a la película en tu servidor (Plex, Jellyfin) o en tu disco USB para disfrutar de reproducción directa en tu Smart TV."
    ],
    "conclusionTitle": "Conclusión y Herramientas de Subtitulado Relacionadas",
    "conclusionText": [
        "Advanced SubStation Alpha sigue siendo el formato preferido para subtítulos altamente estilizados y creativos. No obstante, cuando buscas compatibilidad asegurada en Smart TVs, consolas, teléfonos móviles y servidores domésticos, SubRip (.srt) no tiene rival en sencillez y fiabilidad.",
        "Nuestro Convertidor ASS a SRT Online te ofrece una solución instantánea, 100% privada y en tu propio navegador, sin descargas de software. Conoce también nuestras otras herramientas gratuitas para optimizar tus proyectos de video:"
    ]
},
  pt: {
    "introTitle": "Guia Completo para Converter Legendas ASS em SRT Limpo",
    "introSubtitle": "Descubra por que as legendas Advanced SubStation Alpha (.ass) são convertidas para o formato universal SubRip (.srt), como funciona a limpeza de tags de estilo e como garantir sincronia perfeita em Smart TVs e players de mídia.",
    "introText": [
        "O formato Advanced SubStation Alpha (.ass / .ssa) é amplamente aclamado nas comunidades de fansub e edição de animes por sua capacidade gráfica e tipográfica incomparável. Ele permite escolher famílias de fontes personalizadas, estipular coordenadas exatas de pixels na tela, aplicar gradientes de cores e orquestrar efeitos dinâmicos de karaokê. No entanto, essa riqueza visual tem um custo elevado: a falta de compatibilidade universal com dispositivos de hardware.",
        "Ao tentar reproduzir vídeos com legendas ASS em Smart TVs, consoles de videogame, aplicativos móveis ou players da web (como HTML5 video), é frequente presenciar falhas como textos ausentes, fontes deformadas ou uma sobrecarga extrema de transcodificação de CPU em servidores domésticos como Plex e Jellyfin. Em contrapartida, o SubRip (.srt) é o padrão absoluto de legendas de vídeo — aceito nativamente por praticamente todas as telas, sistemas operacionais e softwares de edição do planeta.",
        "Converter de ASS para SRT possibilita eliminar códigos e formatações proprietárias, mantendo intactos os diálogos, o tempo exato das falas e estilos básicos indispensáveis, como negrito e itálico. Neste guia completo e detalhado, você aprenderá a arquitetura da conversão de ASS para SRT, o cálculo matemático de centissegundos para milissegundos, fluxos de trabalho com o FFmpeg e soluções para problemas frequentes de reprodução."
    ],
    "whatIsTitle": "Compreendendo ASS e SRT: O Estilista Visual versus o Padrão Universal",
    "whatIsText": [
        "O formato Advanced SubStation Alpha (.ass, v4.00+) foi criado por Kotus como um aprimoramento do antigo formato SubStation Alpha (.ssa). Seu objetivo central era permitir total personalização estética diretamente em arquivos de script de texto. Um arquivo ASS possui divisões de metadados bem estruturadas: a resolução base do projeto ([Script Info]), a biblioteca de estilos salvos ([V4+ Styles]) e a sequência temporal de eventos ([Events]), preenchida com comandos internos de anulação como {\\pos(x,y)}, {\\c&HBBGGRR&} e {\\an8}.",
        "Já o SubRip (.srt), surgido no final dos anos 1990 junto ao popular aplicativo de extração de legendas de DVD desenvolvido por Brain, adotou um princípio totalmente oposto. Em vez de definir normas rígidas de renderização visual, o SRT foca na simplicidade pura: um índice numérico sequencial, um intervalo de tempo com precisão de milissegundos e o texto do diálogo separado por linhas em branco. O SRT deixa a escolha da fonte e o posicionamento a cargo do reprodutor de vídeo.",
        "Por não carregar processamento vetorial ou camadas gráficas pesadas, os arquivos SRT carregam instantaneamente, consomem pouquíssima memória e eliminam qualquer risco de travamento de reprodução. Se a sua meta é compatibilidade máxima e reprodução fluida, converter suas legendas ASS para SRT é o caminho ideal."
    ],
    "whyConvertTitle": "6 Vantagens Cruciais de Converter Legendas ASS em SRT",
    "whyConvertSubtitle": "Por que criadores de conteúdo, colecionadores e entusiastas de cinema convertem scripts ASS em legendas SubRip limpas.",
    "whyConvertReasons": [
        {
            "title": "1. Compatibilidade 100% Universal com Smart TVs e Aparelhos",
            "description": "O formato SubRip é compatível nativamente com Smart TVs LG (webOS), Samsung (Tizen), Sony, Roku, Apple TV, Chromecast, Android TV e aparelhos de mídia USB sem depender de bibliotecas externas como a libass."
        },
        {
            "title": "2. Elimina a Transcodificação Pesada no Plex e Jellyfin",
            "description": "Muitas Smart TVs não processam legendas ASS diretamente, forçando o processador do servidor a queimar as legendas no vídeo em tempo real. Com SRT, o recurso 'Direct Play' funciona imediatamente com zero uso de CPU."
        },
        {
            "title": "3. Prontidão para YouTube, Vimeo e Reprodutores Web",
            "description": "Tags <track> de HTML5, YouTube Studio, Vimeo e redes sociais não aceitam arquivos ASS. Converter para SRT permite o envio direto ou a conversão rápida para WebVTT."
        },
        {
            "title": "4. Tamanho de Arquivo Extremamente Reduzido",
            "description": "Ao remover comandos de vetores gráficos, fontes incorporadas e marcações densas de karaokê, os arquivos SRT convertidos são até 90% menores e facilmente editáveis em qualquer bloco de notas."
        },
        {
            "title": "5. Edição sem Travamentos no Premiere, DaVinci e Final Cut",
            "description": "Softwares profissionais como Adobe Premiere Pro e DaVinci Resolve importam arquivos SRT nativamente em suas faixas de legenda, enquanto arquivos ASS costumam gerar falhas ou perda de posicionamento."
        },
        {
            "title": "6. Extração Limpa para Tradução e Dublagem por Inteligência Artificial",
            "description": "Tradutores automáticos e ferramentas de IA necessitam de textos limpos sem códigos de estilo misturados. Limpar as tags do ASS deixa os diálogos prontos para dicionários e modelos de linguagem."
        }
    ],
    "howToTitle": "Como Converter ASS para SRT Online: Passo a Passo",
    "howToSubtitle": "Transforme qualquer arquivo Advanced SubStation Alpha em legendas SubRip limpas em segundos usando nossa ferramenta no navegador.",
    "howToSteps": [
        {
            "step": "1",
            "title": "Envie ou Cole seu Arquivo ASS / SSA",
            "description": "Arraste e solte seu arquivo de legendas .ass ou .ssa na área designada ou cole o texto do script diretamente no painel esquerdo."
        },
        {
            "step": "2",
            "title": "Processamento Automático e Limpeza de Tags",
            "description": "Nosso motor analisa o bloco [Events], converte os centissegundos do ASS em milissegundos do SRT, ajusta as quebras de linha (\\N) e remove códigos de estilo complexos."
        },
        {
            "step": "3",
            "title": "Baixe a Legenda .SRT Pronta para Uso",
            "description": "Confira a pré-visualização instantânea no painel direito, copie o texto limpo para a área de transferência ou clique em 'Baixar Legendas (.SRT)' para usar no seu player favorito."
        }
    ],
    "differenceTitle": "Comparação Técnica: ASS versus SRT em Detalhes",
    "differenceSubtitle": "Tabela comparativa completa sobre recursos, suporte em reprodutores e diferenças fundamentais entre os formatos.",
    "differenceTable": [
        {
            "feature": "Objetivo Central de Projeto",
            "ass": "Tipografia avançada e estilo visual rico para fansubs",
            "srt": "Compatibilidade universal e simplicidade em texto simples"
        },
        {
            "feature": "Sintaxe do Arquivo",
            "ass": "Estrutura modular estilo INI ([Script Info], [Styles], [Events])",
            "srt": "Blocos sequenciais (Índice, Marcação de tempo, Texto, Linha vazia)"
        },
        {
            "feature": "Precisão de Marcação de Tempo",
            "ass": "Centissegundos (H:MM:SS.cs — centésimos de segundo)",
            "srt": "Milissegundos (HH:MM:SS,mmm — milésimos de segundo)"
        },
        {
            "feature": "Posicionamento em Coordenadas",
            "ass": "Coordenadas exatas por pixel (\\pos(X,Y)) e matriz de 9 pontos (\\an1-9)",
            "srt": "Nenhum (posição fixa padrão na parte inferior da tela)"
        },
        {
            "feature": "Fontes e Cores Personalizadas",
            "ass": "Controle tipográfico total, contornos, sombras e cores hexadecimais BGR",
            "srt": "Definido pelo player; suporta apenas negrito, itálico e sublinhado"
        },
        {
            "feature": "Animações e Transições",
            "ass": "Esmaecimento (\\fad), movimento (\\move), zoom, karaokê (\\k) e desenhos",
            "srt": "Não suportado; apenas leitura de texto"
        },
        {
            "feature": "Compatibilidade com Smart TVs",
            "ass": "Muito baixa (frequentemente gera transcodificação forçada)",
            "srt": "Universal (LG, Samsung, Sony, Roku, Apple TV, FireTV)"
        },
        {
            "feature": "Servidores de Mídia (Plex)",
            "ass": "Exige transcodificação pesada da CPU/GPU na maioria das TVs",
            "srt": "Reprodução direta ('Direct Play') sem consumo de hardware"
        },
        {
            "feature": "Suporte em Navegadores Web",
            "ass": "Requer emuladores JavaScript pesados (libass / JavascriptSubtitlesOctopus)",
            "srt": "Nativo através de conversão para WebVTT ou players HTML5"
        },
        {
            "feature": "Melhores Casos de Uso",
            "ass": "Legendas de anime, karaokê estilizado e placas de tradução",
            "srt": "Filmes, séries de TV, YouTube, streaming comercial e edição de vídeo"
        }
    ],
    "structureTitle": "Estrutura Interna: Como um Arquivo ASS se Transforma em SRT",
    "structureSubtitle": "Entenda a lógica de conversão que transforma comandos avançados de ASS em blocos limpos de SubRip.",
    "structureBlocks": [
        {
            "name": "1. A Linha Original de Diálogo em ASS",
            "description": "No ASS, as falas ficam sob a seção [Events] e carregam camada, tempos, estilos, margens e códigos de anulação entre chaves.",
            "snippet": "[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:01:20.15,0:01:24.80,Default,,0,0,0,,{\\pos(960,1020)\\c&H00FFFF&\\b1}Atenção!{\\b0}\\NFalha no sistema detectada."
        },
        {
            "name": "2. O Processo de Extração e Limpeza",
            "description": "O conversor lê os tempos inicial e final, elimina as tags de posição {\\pos(...)} e cor {\\c...}, converte {\\b1}...{\\b0} em <b>...</b>, transforma \\N em quebra de linha real e multiplica os centissegundos por 10.",
            "snippet": "Início: 0:01:20.15  ->  00:01:20,150\nFim:    0:01:24.80  ->  00:01:24,800\nTexto:  {\\pos(960,1020)\\c&H00FFFF&\\b1}Atenção!{\\b0}\\NFalha no sistema detectada.\n        => <b>Atenção!</b>\\nFalha no sistema detectada."
        },
        {
            "name": "3. O Bloco Gerado no Formato SubRip (.SRT)",
            "description": "A fala recebe um número sequencial e é disposta com marcações de tempo precisas e texto legível.",
            "snippet": "1\n00:01:20,150 --> 00:01:24,800\n<b>Atenção!</b>\nFalha no sistema detectada.\n"
        }
    ],
    "exampleTitle": "Exemplo Prático de Conversão ASS para SRT: Antes e Depois",
    "exampleIntro": "Veja como uma fala repleta de tags de cor, alinhamento e quebras de linha é convertida para o padrão SubRip.",
    "exampleAssInput": "[Script Info]\nTitle: Episodio Anime de Amostra 01\nScriptType: v4.00+\nPlayResX: 1920\nPlayResY: 1080\n\n[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,52,&H00FFFFFF,&H000000FF,&H00000000,&H80000000,-1,0,0,0,100,100,0,0,1,3,2,2,30,30,40,1\nStyle: PlacaSuperior,Trebuchet MS,42,&H0000FFFF,&H000000FF,&H00000000,&H80000000,0,0,0,0,100,100,0,0,1,2,1,8,20,20,20,1\n\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:04.25,0:00:07.90,Default,,0,0,0,,{\\i1}Anteriormente em Odisseia Espacial...{\\i0}\nDialogue: 0,0:00:08.50,0:00:12.10,PlacaSuperior,,0,0,0,,{\\an8\\pos(960,60)\\c&H00FFFF&}SETOR 7 - BASE PRINCIPAL\nDialogue: 0,0:00:12.65,0:00:16.40,Default,,0,0,0,,{\\b1}Comandante:{\\b0}\\NPrecisamos ativar a velocidade da luz agora!",
    "exampleSrtOutput": "1\n00:00:04,250 --> 00:00:07,900\n<i>Anteriormente em Odisseia Espacial...</i>\n\n2\n00:00:08,500 --> 00:00:12,100\nSETOR 7 - BASE PRINCIPAL\n\n3\n00:00:12,650 --> 00:00:16,400\n<b>Comandante:</b>\nPrecisamos ativar a velocidade da luz agora!",
    "exampleExplanation": "Neste exemplo real: (1) As marcações em centissegundos (0:00:04.25 e 0:00:07.90) foram traduzidas em milissegundos do SubRip (00:00:04,250 e 00:00:07,900). (2) A tag do letreiro superior {\\an8\\pos(960,60)\\c&H00FFFF&} foi removida sem deixar rastros de código. (3) As marcações {\\i1} e {\\b1} foram transformadas em tags HTML válidas (<i> e <b>), enquanto \\N foi convertido em quebra de linha natural.",
    "formattingLimitationsTitle": "Limitações de Formatação: O que é Preservado e o que é Limpo",
    "formattingLimitationsSubtitle": "Como o SubRip é um formato leve de texto simples, tags proprietárias do ASS são eliminadas para garantir compatibilidade.",
    "cleanedTagsList": [
        {
            "name": "Coordenadas de Posicionamento na Tela",
            "tag": "{\\pos(X,Y)} e {\\move(X1,Y1,X2,Y2)}",
            "explanation": "Reprodutores comuns de SRT não suportam coordenadas 2D. Essas tags são removidas por completo para evitar que códigos apareçam sobre o vídeo."
        },
        {
            "name": "Alinhamento em Matriz de 9 Pontos",
            "tag": "{\\an1} até {\\an9}",
            "explanation": "O ASS posiciona textos em até 9 regiões da tela. No SRT, todas as legendas são exibidas na posição padrão do reprodutor (geralmente inferior centralizada)."
        },
        {
            "name": "Cores Personalizadas e Transparência",
            "tag": "{\\c&HBBGGRR&} e {\\1a&HAA&}",
            "explanation": "Códigos hexadecimais BGR e canais alfa são retirados. O texto será exibido na cor configurada no seu reprodutor ou TV (geralmente branco ou amarelo)."
        },
        {
            "name": "Efeitos de Esmaecimento (Fade In / Out)",
            "tag": "{\\fad(d1,d2)} e {\\fade(...)}",
            "explanation": "O esmaecimento suave é um recurso exclusivo de renderização do ASS. A temporização continua precisa, mas o texto surge e some de forma limpa nos limites do tempo."
        },
        {
            "name": "Temporizadores de Karaokê",
            "tag": "{\\k<duração>}, {\\K}, {\\kf}",
            "explanation": "Os temporizadores de sílabas por centissegundo são eliminados. A linha completa da letra da música é apresentada como uma fala pronta para leitura."
        },
        {
            "name": "Desenhos e Formas Vetoriais",
            "tag": "{\\p1}...{\\p0}",
            "explanation": "Comandos gráficos utilizados para criar tarjas ou desenhar logotipos são descartados com segurança para evitar números desconexos na tela."
        }
    ],
    "ffmpegTitle": "Como Converter ASS em SRT via Linha de Comando (FFmpeg)",
    "ffmpegSubtitle": "Comandos rápidos de conversão em lote para usuários avançados e administradores de servidores.",
    "ffmpegCommand": "ffmpeg -i legendas_origem.ass -c:s srt legendas_destino.srt",
    "ffmpegExplanation": [
        "O FFmpeg possui suporte nativo para extração e transcodificação de faixas de legenda. O comando acima lê o arquivo .ass original, decodifica o fluxo de texto, remove tags de estilo não compatíveis e gera um arquivo .srt SubRip padronizado.",
        "Se as suas legendas ASS estiverem embutidas dentro de um arquivo de vídeo MKV (Matroska), você pode extraí-las e convertê-las diretamente sem precisar recodificar as faixas de vídeo ou áudio:",
        "ffmpeg -i filme.mkv -map 0:s:0 -c:s srt legendas_extraidas.srt\n\nNeste comando, o parâmetro '-map 0:s:0' seleciona a primeira faixa de legendas do arquivo e a converte de forma imediata em um arquivo .srt separado.",
        "Embora o FFmpeg seja muito poderoso, nossa ferramenta no navegador oferece inspeção visual instantânea, corrige problemas de codificação de caracteres e roda perfeitamente em celulares, tablets e computadores sem precisar instalar programas."
    ],
    "useCasesTitle": "5 Casos Práticos de Conversão de ASS para SRT",
    "useCasesSubtitle": "Cenários comuns do dia a dia onde transformar legendas de ASS para SRT é indispensável.",
    "useCasesList": [
        {
            "title": "1. Streaming sem Travamento no Plex, Emby e Jellyfin",
            "description": "Ao assistir a animes ou produções internacionais a partir do seu servidor em Smart TVs ou no Apple TV, legendas ASS forçam transcodificação pesada no computador. O SRT permite a reprodução direta instantânea com uso mínimo de processador."
        },
        {
            "title": "2. Publicação de Vídeos no YouTube, Vimeo e Redes Sociais",
            "description": "As grandes plataformas de vídeo rejeitam arquivos ASS no momento do upload. A conversão para SRT permite carregar legendas que o YouTube indexa para buscas e tradução automática."
        },
        {
            "title": "3. Reprodução em Smart TVs através de Pen Drives USB",
            "description": "Reprodutores integrados em TVs Samsung, LG, Sony e Philips reconhecem facilmente arquivos .srt na mesma pasta do vídeo, enquanto arquivos .ass são ignorados ou exibem caracteres quebrados."
        },
        {
            "title": "4. Linha de Tempo em Editores (Premiere Pro e DaVinci Resolve)",
            "description": "Editores de vídeo que recebem legendas no formato ASS enfrentam falhas ao importá-las para softwares de edição. O formato SRT importa perfeitamente em faixas de texto padronizadas."
        },
        {
            "title": "5. Tradução, Localização de Idiomas e Dublagem por IA",
            "description": "Tradutores automáticos e modelos de inteligência artificial podem confundir comandos internos do ASS com palavras do diálogo. Limpar o script para SRT gera um texto puro para tradução ágil."
        }
    ],
    "troubleshootTitle": "Solução de Problemas Comuns ao Converter ASS para SRT",
    "troubleshootSubtitle": "Resoluções técnicas para corrigir falhas de acentuação, sobreposição de falas e erros no reprodutor.",
    "troubleshootTips": [
        {
            "issue": "Acentos Desconfigurados, Símbolos Estranhos ou Texto 'Mojibake'",
            "cause": "O arquivo ASS original foi salvo em codificações antigas como ANSI, Windows-1252 ou UTF-16 em vez de UTF-8 sem BOM.",
            "solution": "Abra o arquivo no Bloco de Notas, VS Code ou Notepad++, altere a codificação para UTF-8 sem BOM e cole o texto no nosso conversor online para obter caracteres impecáveis."
        },
        {
            "issue": "Falas que Desaparecem ou Não Aparecem após a Conversão",
            "cause": "As linhas no script ASS estavam identificadas como 'Comment:' em vez de 'Dialogue:', ou eram comandos de desenho vetorial (\\p1) descartados propositalmente.",
            "solution": "Abra o arquivo ASS em um editor de texto. Se falas importantes estiverem com o prefixo 'Comment:', altere para 'Dialogue:' para que sejam reconhecidas como diálogos legítimos."
        },
        {
            "issue": "Falas Simultâneas de Múltiplos Personagens Conflitando",
            "cause": "No ASS, vozes simultâneas costumam ser posicionadas em camadas ou locais diferentes da tela. No SRT, tudo vai para o rodapé.",
            "solution": "Nosso conversor organiza os blocos em ordem cronológica. Verifique se o seu reprodutor permite quebra de linha de legendas ou adicione os nomes dos personagens para facilitar a leitura."
        },
        {
            "issue": "Tags de Código como {\\pos...} Visíveis na Tela",
            "cause": "O arquivo continha chaves abertas ou fechadas de maneira incorreta, impedindo que ferramentas comuns identifiquem onde a tag terminava.",
            "solution": "Nosso motor possui expressões regulares robustas que limpam até tags incompletas, garantindo que o seu arquivo SRT final não contenha nenhum vestígio de código bruto."
        }
    ],
    "timingTitle": "Precisão Temporal: De Centissegundos a Milissegundos Explicado",
    "timingText": [
        "Um dos aspectos técnicos mais importantes na conversão de ASS para SRT é a adaptação das marcações de tempo. O formato Advanced SubStation Alpha usa um sistema em centissegundos no formato H:MM:SS.cs (por exemplo, 0:01:23.45). Cada centissegundo representa a centésima parte de um segundo (frações de 10 milissegundos).",
        "Já o SubRip utiliza uma contagem precisa em milissegundos no formato HH:MM:SS,mmm (por exemplo, 00:01:23,450). A conversão entre esses dois formatos exige um cálculo matemático exato: multiplicar os centissegundos por 10 para encontrar os milissegundos correspondentes e preencher horas e minutos com dois dígitos.",
        "Nosso conversor executa essa conta com fidelidade matemática absoluta. Não ocorre nenhum acúmulo de arredondamento, garantindo que as falas permaneçam perfeitamente sincronizadas com a faixa de áudio em filmes curtos ou longas-metragens de várias horas."
    ],
    "workflowTitle": "Fluxo de Trabalho Recomendado para Colecionadores de Mídia",
    "workflowSubtitle": "Como extrair, converter e preparar legendas perfeitas para a sua biblioteca de filmes.",
    "workflowSteps": [
        "Passo 1: Se as suas legendas estiverem dentro de um arquivo MKV, utilize o MKVToolNix ou FFmpeg para extrair a faixa de legendas .ass para o seu computador.",
        "Passo 2: Envie o arquivo .ass para o nosso Conversor ASS para SRT Online. A ferramenta limpará as tags e ajustará os tempos automaticamente.",
        "Passo 3: Baixe a legenda .srt gerada e salve-a com o mesmo nome do seu arquivo de vídeo (exemplo: Filme.2024.1080p.mkv e Filme.2024.1080p.srt).",
        "Passo 4: Teste a reprodução no VLC Media Player para conferir se os textos estão claros e perfeitamente sincronizados com as falas.",
        "Passo 5: Guarde o arquivo .srt junto ao vídeo no seu servidor de mídia (Plex, Jellyfin) ou em um pen drive para aproveitar a reprodução direta na sua Smart TV."
    ],
    "conclusionTitle": "Conclusão e Ferramentas Complementares de Legenda",
    "conclusionText": [
        "O Advanced SubStation Alpha continua sendo a escolha ideal para legendas estilizadas e artísticas. No entanto, quando você precisa de compatibilidade garantida em Smart TVs, celulares e servidores de mídia, o SubRip (.srt) é insuperável em simplicidade e confiabilidade.",
        "Nosso Conversor ASS para SRT Online oferece uma solução instantânea, 100% privada e que roda diretamente no seu navegador, sem instalação de programas. Conheça também nossas outras ferramentas gratuitas para otimizar suas legendas:"
    ]
},
  fr: {
    "introTitle": "Guide Complet pour Convertir des Sous-Titres ASS en SRT Épuré",
    "introSubtitle": "Découvrez pourquoi les sous-titres Advanced SubStation Alpha (.ass) sont convertis au format universel SubRip (.srt), comment fonctionne le nettoyage des balises de style et comment maintenir une synchronisation parfaite sur tous les écrans.",
    "introText": [
        "Le format Advanced SubStation Alpha (.ass / .ssa) est plébiscité par la communauté du fansubbing et de l'animation pour sa liberté esthétique sans équivalent. Il permet aux éditeurs de choisir des polices sur mesure, de définir des coordonnées précises au pixel près, d'appliquer des dégradés de couleurs et de concevoir des animations dynamiques de karaoké. Toutefois, cette grande richesse graphique pose un problème majeur : le manque de compatibilité universelle avec le matériel de lecture.",
        "Lorsque vous tentez de lire des vidéos associées à des sous-titres ASS sur une Smart TV, une console de jeu, un smartphone ou un lecteur web (HTML5 video), il est fréquent de constater des répliques invisibles, des polices déformées ou un transcodage forcé et intensif du processeur sur les serveurs comme Plex ou Jellyfin. À l'inverse, SubRip (.srt) s'impose comme la référence mondiale absolue en matière de sous-titrage vidéo, prise en charge nativement par la quasi-totalité des appareils, systèmes d'exploitation et logiciels de montage du marché.",
        "Convertir un fichier ASS en SRT permet d'éliminer les balises complexes propriétaires tout en préservant le texte des dialogues, le calage temporel des répliques et les enrichissements typographiques essentiels tels que le gras et l'italique. Ce guide technique détaillé vous explique l'architecture de la conversion, le calcul temporel des centièmes de seconde vers les millisecondes, l'utilisation de FFmpeg et les solutions aux pannes de lecture courantes."
    ],
    "whatIsTitle": "Comprendre ASS et SRT : Le Styliste Graphique face à la Référence Universelle",
    "whatIsText": [
        "Advanced SubStation Alpha (.ass, v4.00+) a été mis au point par Kotus afin de faire évoluer l'ancien format SubStation Alpha (.ssa). Son rôle fondamental était d'offrir un contrôle visuel absolu directement au sein d'un fichier script éditable. Un fichier ASS comporte plusieurs sections structurées : la résolution de travail ([Script Info]), la bibliothèque des styles graphiques ([V4+ Styles]) et le flux chronologique des répliques ([Events]), enrichi de balises de substitution intégrées comme {\\pos(x,y)}, {\\c&HBBGGRR&} et {\\an8}.",
        "SubRip (.srt), créé à la fin des années 1990 avec le célèbre utilitaire d'extraction de sous-titres de DVD développé par Brain, repose sur une philosophie diamétralement opposée. Au lieu d'imposer des règles de dessin et de mise en page, le SRT privilégie une épure totale : un numéro d'ordre séquentiel, un intervalle temporel exprimé en millisecondes et le texte brut des dialogues, séparé par des lignes vides. La typographie et l'emplacement à l'écran sont délégués au lecteur vidéo de l'utilisateur.",
        "Dépourvus de commandes de dessin vectoriel et de styles lourds, les fichiers SRT se chargent instantanément, n'occupent presque aucune mémoire vive et préviennent tout plantage matériel. Lorsque vous visez la fluidité maximale et une compatibilité sans faille, convertir votre collection de sous-titres ASS en SRT standard est la solution incontournable."
    ],
    "whyConvertTitle": "6 Avantages Majeurs de la Conversion de Sous-Titres ASS en SRT",
    "whyConvertSubtitle": "Pourquoi les créateurs de contenu, cinéphiles et administrateurs de serveurs convertissent leurs scripts ASS en sous-titres SubRip.",
    "whyConvertReasons": [
        {
            "title": "1. Compatibilité 100% Universelle sur Téléviseurs et Appareils",
            "description": "Le format SubRip fonctionne nativement sur les Smart TV LG (webOS), Samsung (Tizen), Sony, les boîtiers Roku, l'Apple TV, Chromecast, Android TV et les lecteurs multimédias USB sans nécessiter de bibliothèque externe telle que libass."
        },
        {
            "title": "2. Élimine le Transcodage CPU Intensif sur Plex et Jellyfin",
            "description": "La majorité des applications Smart TV ne savent pas afficher les styles ASS de façon autonome, obligeant le serveur multimédia à réencoder la vidéo à la volée. Avec le SRT, la lecture directe ('Direct Play') s'active instantanément sans solliciter le processeur."
        },
        {
            "title": "3. Prêt pour YouTube, Vimeo et les Lecteurs Vidéo Web",
            "description": "Les balises <track> en HTML5, YouTube Studio, Vimeo et les réseaux sociaux refusent les fichiers ASS. La conversion en SRT permet une mise en ligne immédiate ou une transformation aisée en WebVTT."
        },
        {
            "title": "4. Poids de Fichier Extrêmement Léger",
            "description": "En supprimant les tracés vectoriels complexes, les polices de caractères incorporées et les minuteries de karaoké, les fichiers SRT résultants sont jusqu'à 90% plus légers et lisibles dans n'importe quel éditeur de texte."
        },
        {
            "title": "5. Montage Fluide dans Premiere Pro, DaVinci Resolve et Final Cut",
            "description": "Les logiciels de montage professionnels intègrent le SRT directement sur leurs pistes de sous-titres dédiées, évitant les anomalies de rendu et les plantages provoqués par les scripts ASS."
        },
        {
            "title": "6. Extraction Épurée pour la Traduction et le Doublage par IA",
            "description": "Les outils de traduction automatique et les modèles linguistiques nécessitent un texte exempt de balises parasites. Nettoyer les codes ASS permet de fournir des dialogues nets et directement exploitables."
        }
    ],
    "howToTitle": "Comment Convertir un Fichier ASS en SRT en Ligne : Étape par Étape",
    "howToSubtitle": "Transformez vos fichiers Advanced SubStation Alpha en sous-titres SubRip propres en quelques secondes dans votre navigateur.",
    "howToSteps": [
        {
            "step": "1",
            "title": "Téléversez ou Collez vos Sous-Titres ASS / SSA",
            "description": "Glissez et déposez votre fichier .ass ou .ssa dans la zone de téléversement ou collez le script directement dans l'éditeur sur le panneau de gauche."
        },
        {
            "step": "2",
            "title": "Analyse Automatique et Nettoyage des Balises",
            "description": "Notre moteur intégré analyse la section [Events], convertit les centièmes de seconde en millisecondes, ajuste les sauts de ligne (\\N) et supprime les codes de style superflus."
        },
        {
            "step": "3",
            "title": "Téléchargez vos Sous-Titres .SRT Prêts à l'Emploi",
            "description": "Vérifiez l'aperçu instantané sur le panneau de droite, copiez le texte propre dans le presse-papiers ou cliquez sur 'Télécharger les Sous-Titres (.SRT)' pour votre lecteur vidéo."
        }
    ],
    "differenceTitle": "Tableau Comparatif : ASS face à SRT",
    "differenceSubtitle": "Comparaison approfondie des fonctionnalités, de la compatibilité matérielle et des spécificités techniques des deux formats.",
    "differenceTable": [
        {
            "feature": "Objectif Initial de Conception",
            "ass": "Typographie de haute précision et habillage visuel des fansubs",
            "srt": "Compatibilité universelle et diffusion de texte simple"
        },
        {
            "feature": "Structure du Fichier",
            "ass": "Structure modulaire type INI ([Script Info], [Styles], [Events])",
            "srt": "Blocs séquentiels (Compteur, Horodatage, Texte, Ligne vide)"
        },
        {
            "feature": "Précision Temporelle",
            "ass": "Centièmes de seconde (H:MM:SS.cs — 100e de seconde)",
            "srt": "Millisecondes (HH:MM:SS,mmm — 1000e de seconde)"
        },
        {
            "feature": "Positionnement à l'Écran",
            "ass": "Coordonnées au pixel (\\pos(X,Y)) et matrice à 9 points (\\an1-9)",
            "srt": "Aucun (position par défaut du lecteur, généralement en bas au centre)"
        },
        {
            "feature": "Polices et Couleurs Personnalisées",
            "ass": "Contrôle typographique intégral, contours, ombres et couleurs BGR",
            "srt": "Délégué au lecteur ; autorise seulement gras, italique et souligné"
        },
        {
            "feature": "Animations et Effets",
            "ass": "Fondus (\\fad), déplacements (\\move), zoom, karaoké (\\k) et vecteurs",
            "srt": "Non pris en charge ; affichage de texte brut uniquement"
        },
        {
            "feature": "Compatibilité Smart TV",
            "ass": "Très faible (provoque souvent un transcodage forcé ou des anomalies)",
            "srt": "Universelle (LG, Samsung, Sony, Roku, Apple TV, FireTV)"
        },
        {
            "feature": "Serveurs Multimédias (Plex)",
            "ass": "Nécessite un transcodage vidéo gourmand en calcul CPU",
            "srt": "Lecture directe ('Direct Play') native sans impact sur le processeur"
        },
        {
            "feature": "Prise en Charge Navigateurs Web",
            "ass": "Requiert des bibliothèques JavaScript lourdes (libass / SubtitlesOctopus)",
            "srt": "Native par conversion WebVTT ou lecteurs HTML5 simples"
        },
        {
            "feature": "Domaines d'Application Idéaux",
            "ass": "Sous-titrage d'anime, chansons en karaoké et titrage artistique",
            "srt": "Cinéma, séries TV, YouTube, diffusion télévisée et montage NLE"
        }
    ],
    "structureTitle": "Structure Interne : De l'Instruction ASS au Bloc SRT Épuré",
    "structureSubtitle": "Comprenez la méthode de conversion qui extrait les données utiles d'une ligne ASS pour former un sous-titre SubRip.",
    "structureBlocks": [
        {
            "name": "1. La Réplique d'Origine dans le Fichier ASS",
            "description": "Dans un fichier ASS, les répliques sont regroupées sous [Events] et précisent la couche, les temps, le style et les commandes d'anulation entre accolades.",
            "snippet": "[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:01:20.15,0:01:24.80,Default,,0,0,0,,{\\pos(960,1020)\\c&H00FFFF&\\b1}Alerte !{\\b0}\\NAnomalie détectée sur le système."
        },
        {
            "name": "2. La Phase d'Extraction et de Nettoyage",
            "description": "Le convertisseur relève les temps de début et de fin, supprime les balises de position {\\pos(...)} et de couleur {\\c...}, traduit {\\b1}...{\\b0} en <b>...</b>, convertit \\N en retour à la ligne et multiplie les centièmes par 10.",
            "snippet": "Début : 0:01:20.15  ->  00:01:20,150\nFin :   0:01:24.80  ->  00:01:24,800\nTexte : {\\pos(960,1020)\\c&H00FFFF&\\b1}Alerte !{\\b0}\\NAnomalie détectée sur le système.\n        => <b>Alerte !</b>\\nAnomalie détectée sur le système."
        },
        {
            "name": "3. Le Bloc Finalisé au Format SubRip (.SRT)",
            "description": "La réplique reçoit un numéro d'ordre et s'affiche avec un minutage clair et un texte immédiatement lisible.",
            "snippet": "1\n00:01:20,150 --> 00:01:24,800\n<b>Alerte !</b>\nAnomalie détectée sur le système.\n"
        }
    ],
    "exampleTitle": "Exemple Concret de Conversion ASS vers SRT : Avant et Après",
    "exampleIntro": "Observez comment une ligne de dialogue de fansub chargée d'effets visuels est traduite en un sous-titre SRT propre.",
    "exampleAssInput": "[Script Info]\nTitle: Episode Anime 01\nScriptType: v4.00+\nPlayResX: 1920\nPlayResY: 1080\n\n[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,52,&H00FFFFFF,&H000000FF,&H00000000,&H80000000,-1,0,0,0,100,100,0,0,1,3,2,2,30,30,40,1\nStyle: EncartHaut,Trebuchet MS,42,&H0000FFFF,&H000000FF,&H00000000,&H80000000,0,0,0,0,100,100,0,0,1,2,1,8,20,20,20,1\n\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:04.25,0:00:07.90,Default,,0,0,0,,{\\i1}Précédemment dans L'Odyssée de l'Espace...{\\i0}\nDialogue: 0,0:00:08.50,0:00:12.10,EncartHaut,,0,0,0,,{\\an8\\pos(960,60)\\c&H00FFFF&}SECTEUR 7 - BASE PRINCIPALE\nDialogue: 0,0:00:12.65,0:00:16.40,Default,,0,0,0,,{\\b1}Commandant :{\\b0}\\NPassez en vitesse lumière immédiatement !",
    "exampleSrtOutput": "1\n00:00:04,250 --> 00:00:07,900\n<i>Précédemment dans L'Odyssée de l'Espace...</i>\n\n2\n00:00:08,500 --> 00:00:12,100\nSECTEUR 7 - BASE PRINCIPALE\n\n3\n00:00:12,650 --> 00:00:16,400\n<b>Commandant :</b>\nPassez en vitesse lumière immédiatement !",
    "exampleExplanation": "Dans cet exemple pratique : (1) Les centièmes de seconde (0:00:04.25 et 0:00:07.90) sont calculés en millisecondes pour SRT (00:00:04,250 et 00:00:07,900). (2) La balise du panneau supérieur {\\an8\\pos(960,60)\\c&H00FFFF&} est gommée proprement sans laisser de résidu de code. (3) Les balises {\\i1} et {\\b1} sont converties en balises HTML conventionnelles (<i> et <b>) et la commande \\N devient un retour à la ligne classique.",
    "formattingLimitationsTitle": "Limites de Formatage : Ce qui est Préservé face à ce qui est Retiré",
    "formattingLimitationsSubtitle": "Le format SubRip étant volontairement minimaliste, les balises de dessin et de positionnement du format ASS sont purgées pour éviter tout affichage corrompu.",
    "cleanedTagsList": [
        {
            "name": "Coordonnées de Positionnement à l'Écran",
            "tag": "{\\pos(X,Y)} et {\\move(X1,Y1,X2,Y2)}",
            "explanation": "Les lecteurs SRT ne gèrent pas le positionnement 2D. Ces balises sont totalement supprimées afin d'empêcher l'affichage de lignes de programmation sur la vidéo."
        },
        {
            "name": "Alignement sur Matrice à 9 Points",
            "tag": "{\\an1} à {\\an9}",
            "explanation": "Le format ASS dispose le texte selon une grille à 9 zones. En SRT, les lignes rejoignent automatiquement l'alignement standard du lecteur (en bas au centre)."
        },
        {
            "name": "Couleurs Hexadécimales et Transparence",
            "tag": "{\\c&HBBGGRR&} et {\\1a&HAA&}",
            "explanation": "Les codes de couleur BGR et les niveaux de transparence sont retirés. Le texte adoptera la teinte définie dans les préférences de votre lecteur vidéo (blanc ou jaune d'ordinaire)."
        },
        {
            "name": "Effets de Fondu (Fade In / Out)",
            "tag": "{\\fad(d1,d2)} et {\\fade(...)}",
            "explanation": "Les transitions de fondu en entrée et sortie sont exclusives au moteur de rendu ASS. Les bornes temporelles restent exactes, le texte s'affichant de manière nette."
        },
        {
            "name": "Balises de Synchronisation de Karaoké",
            "tag": "{\\k<durée>}, {\\K}, {\\kf}",
            "explanation": "Les minuteries découpant les mots en centièmes de seconde sont ôtées. La strophe musicale est affichée sous la forme d'une phrase complète prête à la lecture."
        },
        {
            "name": "Tracés Vectoriels et Graphismes",
            "tag": "{\\p1}...{\\p0}",
            "explanation": "Les commandes géométriques destinées à masquer des logos ou à dessiner des éléments sont écartées pour éviter l'apparition de suites de chiffres à l'écran."
        }
    ],
    "ffmpegTitle": "Comment Convertir un Fichier ASS en SRT avec FFmpeg en Ligne de Commande",
    "ffmpegSubtitle": "Commandes efficaces pour la conversion par lots à destination des monteurs et administrateurs système.",
    "ffmpegCommand": "ffmpeg -i sous_titres_source.ass -c:s srt sous_titres_sortie.srt",
    "ffmpegExplanation": [
        "FFmpeg intègre des modules natifs de démultiplexage et d'encodage de sous-titres. La commande ci-dessus analyse le fichier .ass, décode les flux textuels, efface les balises incompatibles et produit un fichier SubRip .srt standardisé.",
        "Si vos sous-titres ASS se trouvent déjà encapsulés dans un conteneur vidéo MKV (Matroska), vous pouvez les extraire et les convertir directement sans réencoder la vidéo ou la piste sonore :",
        "ffmpeg -i film.mkv -map 0:s:0 -c:s srt sous_titres_extraits.srt\n\nDans cette syntaxe, l'option '-map 0:s:0' sélectionne la première piste de sous-titres présente dans le fichier conteneur et l'exporte instantanément sous forme de fichier .srt externe.",
        "Bien que FFmpeg soit extrêmement puissant, notre outil en ligne permet une vérification visuelle immédiate, corrige les encodages de caractères corrompus et s'exécute directement sur smartphone ou ordinateur sans aucune installation logicielle préalable."
    ],
    "useCasesTitle": "5 Scénarios Pratiques de Conversion de Sous-Titres ASS en SRT",
    "useCasesSubtitle": "Exemples concrets du quotidien où la conversion de sous-titres ASS en SubRip est indispensable.",
    "useCasesList": [
        {
            "title": "1. Lecture Directe Fluide sur Serveurs Plex, Emby et Jellyfin",
            "description": "Lorsque vous diffusez un anime ou une série étrangère depuis un serveur local vers une Smart TV ou une Apple TV, les sous-titres ASS déclenchent souvent un transcodage vidéo inutile. Convertir en SRT assure une lecture directe ('Direct Play') instantanée et sans saccades."
        },
        {
            "title": "2. Intégration sur YouTube, Vimeo et Plateformes Vidéo",
            "description": "Les hébergeurs de vidéos rejettent systématiquement les fichiers ASS lors de la mise en ligne. Un fichier SRT propre permet d'ajouter des sous-titres qui seront analysés par YouTube pour le référencement et la traduction automatique."
        },
        {
            "title": "3. Lecture sur Smart TV depuis une Clé USB",
            "description": "Les téléviseurs de marques Samsung, LG, Sony ou Philips reconnaissent parfaitement les fichiers .srt placés dans le même dossier que le film, alors que les fichiers .ass sont soit ignorés, soit affichés avec des caractères illisibles."
        },
        {
            "title": "4. Projets de Montage dans Premiere Pro, DaVinci Resolve et Final Cut",
            "description": "Les monteurs vidéo recevant des sous-titres conçus dans Aegisub rencontrent souvent des bugs lors de l'importation. Le format SRT s'intègre de façon stable sur les pistes de texte fermées du logiciel."
        },
        {
            "title": "5. Traduction, Localisation et Synchronisation Vocale par IA",
            "description": "Les outils de traduction assistée et les synthétiseurs vocaux par IA peuvent interpréter les codes du format ASS comme des mots du dialogue. L'extraction en SRT livre un texte parfaitement pur pour la localisation."
        }
    ],
    "troubleshootTitle": "Dépannage des Problèmes Courants de Conversion ASS vers SRT",
    "troubleshootSubtitle": "Solutions techniques pour résoudre les erreurs d'encodage, les dialogues manquants et les soucis d'affichage.",
    "troubleshootTips": [
        {
            "issue": "Accents Déformés, Symboles Bizarres ou Problèmes de 'Mojibake'",
            "cause": "Le fichier ASS source a été sauvegardé avec un encodage obsolète (ANSI, Windows-1252 ou UTF-16) au lieu du standard UTF-8 sans BOM.",
            "solution": "Ouvrez le fichier dans Notepad++ ou VS Code, modifiez l'encodage en UTF-8 sans BOM et collez le contenu dans notre convertisseur pour restaurer des accents parfaits."
        },
        {
            "issue": "Répliques Manquantes ou Lignes Invisibles après Conversion",
            "cause": "Certaines phrases du script ASS comportaient la mention 'Comment:' à la place de 'Dialogue:', ou correspondaient à des tracés graphiques (\\p1) écartés sciemment.",
            "solution": "Examinez le fichier ASS dans un éditeur de texte. Si des dialogues utiles sont préfixés par 'Comment:', remplacez cette mention par 'Dialogue:' pour qu'ils soient reconnus comme des répliques."
        },
        {
            "issue": "Chevauchement de Voix entre Plusieurs Personnages",
            "cause": "En ASS, les dialogues simultanés occupent des couches ou des positions différentes à l'écran. En SRT, toutes les phrases sont regroupées en bas.",
            "solution": "Notre moteur trie les blocs chronologiquement. Pensez à activer le retour à la ligne automatique dans votre lecteur vidéo ou à indiquer le nom des personnages devant leurs répliques."
        },
        {
            "issue": "Balises Informatiques Visibles à l'Écran (comme {\\pos...})",
            "cause": "Le fichier présentait des accolades mal fermées ou des imbrications erronées, empêchant les nettoyeurs ordinaires d'isoler le code.",
            "solution": "Notre convertisseur applique des filtres regex robustes capables d'intercepter les blocs tronqués, vous assurant un fichier SRT totalement exempt de code visible."
        }
    ],
    "timingTitle": "Précision du Minutage : Des Centièmes de Seconde aux Millisecondes",
    "timingText": [
        "L'une des subtilités techniques capitales de la conversion de sous-titres réside dans la transposition du système chronométrique. Advanced SubStation Alpha utilise une division en centièmes de seconde au format H:MM:SS.cs (par exemple, 0:01:23.45). Chaque centième correspond à une fraction de 10 millisecondes.",
        "SubRip applique quant à lui une mesure stricte en millisecondes présentée sous la forme HH:MM:SS,mmm (par exemple, 00:01:23,450). La passerelle entre ces deux normes requiert une arithmétique rigoureuse : multiplier les centièmes par 10 pour identifier la milliseconde exacte et formater les heures et minutes sur deux chiffres réglementaires.",
        "Notre convertisseur effectue cette conversion avec une fidélité mathématique intégrale. Il ne se produit aucune dérive cumulative, ce qui garantit que les voix et le texte restent rigoureusement synchronisés du début à la fin de vos films et documentaires."
    ],
    "workflowTitle": "Protocole Recommandé pour les Amateurs de Home Cinema",
    "workflowSubtitle": "Comment extraire, convertir et organiser vos sous-titres pour une bibliothèque multimédia parfaite.",
    "workflowSteps": [
        "Étape 1 : Si vos sous-titres se trouvent à l'intérieur d'un fichier MKV, utilisez MKVToolNix ou FFmpeg pour extraire la piste .ass sur votre disque dur.",
        "Étape 2 : Déposez le fichier .ass sur notre Convertisseur ASS en SRT en Ligne. Le service effectue le nettoyage des balises et le calcul temporel instantanément.",
        "Étape 3 : Téléchargez le fichier .srt produit et donnez-lui le même nom que votre vidéo (exemple : Film.2024.1080p.mkv et Film.2024.1080p.srt).",
        "Étape 4 : Lancez la lecture dans VLC Media Player pour vous assurer que les répliques sont parfaitement lisibles et calées sur les voix.",
        "Étape 5 : Déplacez le fichier .srt sur votre serveur local (Plex, Jellyfin) ou sur votre clé USB pour profiter d'une lecture directe fluide sur votre téléviseur."
    ],
    "conclusionTitle": "Conclusion et Outils Utiles de Conversion de Sous-Titres",
    "conclusionText": [
        "Advanced SubStation Alpha demeure le format de prédilection pour le sous-titrage stylisé et créatif. Cependant, dès lors que vous recherchez une compatibilité infaillible sur les téléviseurs, smartphones et serveurs multimédias, SubRip (.srt) est inégalé par sa simplicité et son universalité.",
        "Notre Convertisseur ASS en SRT en Ligne met à votre disposition une solution immédiate, confidentielle et opérant directement dans votre navigateur. N'hésitez pas à explorer nos autres outils pratiques dédiés aux formats de sous-titrage :"
    ]
},
  de: {
    "introTitle": "Der ultimative Leitfaden zur Konvertierung von ASS-Untertiteln in sauberes SRT",
    "introSubtitle": "Erfahren Sie, warum Advanced SubStation Alpha (.ass) Untertitel in das universelle SubRip (.srt) Format umgewandelt werden, wie die Tag-Bereinigung funktioniert und wie Sie perfektes Timing auf allen Smart-TVs und Streaming-Plattformen sicherstellen.",
    "introText": [
        "Advanced SubStation Alpha (.ass / .ssa) genießt in der Anime- und Fansubbing-Szene hohes Ansehen für seine nahezu unbegrenzten typografischen Gestaltungsmöglichkeiten. Es erlaubt Editoren, individuelle Schriftarten auszuwählen, millimetergenaue Pixelkoordinaten festzulegen, ansprechende Farbverläufe zu definieren und dynamische Karaoke-Animationen einzubinden. Allerdings bringt diese visuelle Komplexität einen gravierenden Nachteil mit sich: die mangelnde universelle Hardware-Kompatibilität.",
        "Sobald Sie versuchen, Videos mit ASS-Untertiteln auf Smart-TVs, Spielekonsolen, Mobilgeräten oder Web-Videoplayern (wie HTML5-Video) abzuspielen, kommt es häufig zu fehlendem Text, unschönen Ersatzschriftarten oder einer extremen CPU-Belastung durch Video-Transcodierung in Medienservern wie Plex oder Jellyfin. SubRip (.srt) hingegen gilt als weltweiter Goldstandard für Untertitel – nativ unterstützt von praktisch jedem Bildschirm, Betriebssystem und Videoschnittprogramm der Welt.",
        "Die Umwandlung von ASS in SRT befreit Ihre Untertitel von proprietären Code-Tags, während der eigentliche Dialogtext, das akkurate Sprechertiming und elementare Betonungen wie Fett- und Kursivschrift vollständig erhalten bleiben. Dieser praxisnahe Leitfaden erläutert die technische Konvertierungsarchitektur, die mathematische Umrechnung von Hundertstelsekunden in Millisekunden, nützliche FFmpeg-Befehle und bewährte Lösungen für typische Wiedergabeprobleme."
    ],
    "whatIsTitle": "ASS und SRT im Detail: Der typografische Spezialist im Vergleich zum Weltstandard",
    "whatIsText": [
        "Advanced SubStation Alpha (.ass, v4.00+) wurde von Kotus als Weiterentwicklung des älteren Formats SubStation Alpha (.ssa) konzipiert. Sein zentraler Zweck war es, hochentwickelte visuelle Untertitelstile direkt in lesbaren Skriptdateien zu steuern. Ein ASS-Dokument umfasst mehrere strukturierte Abschnitte: die Skriptauflösung ([Script Info]), vorkonfigurierte Stilbibliotheken ([V4+ Styles]) und den chronologischen Dialogablauf ([Events]), versehen mit Inline-Steuerbefehlen wie {\\pos(x,y)}, {\\c&HBBGGRR&} und {\\an8}.",
        "SubRip (.srt), das Ende der 1990er-Jahre zusammen mit dem bekannten DVD-Ripping-Tool von Brain entwickelt wurde, verfolgte einen gänzlich gegenteiligen Ansatz. Statt Zeichen- und Layoutregeln festzulegen, setzt SRT auf kompromisslose Einfachheit: eine fortlaufende Nummerierung, ein Zeitintervall mit Millisekunden-Präzision und reinen Text, der durch Leerzeilen gegliedert ist. Das Rendern von Schriftart, Größe und Positionierung überlässt SRT vollständig dem Abspielgerät.",
        "Weil Standard-SRT-Dateien auf grafische Ballast-Codes verzichten, laden sie blitzschnell, verbrauchen kaum Arbeitsspeicher und verursachen niemals Rendering-Abstürze. Wenn Ihnen maximale Zuverlässigkeit und flüssiges Streaming am Herzen liegen, ist die Konvertierung Ihrer ASS-Dateien in normgerechtes SRT die beste Entscheidung."
    ],
    "whyConvertTitle": "6 wesentliche Vorteile der Konvertierung von ASS in SRT",
    "whyConvertSubtitle": "Warum Videoschaffende, Heimkino-Fans und Server-Admins ihre ASS-Skripte in sauberes SubRip umwandeln.",
    "whyConvertReasons": [
        {
            "title": "1. 100% universelle Geräte- und Smart-TV-Kompatibilität",
            "description": "SubRip wird von LG webOS, Samsung Tizen, Sony, Roku, Apple TV, Chromecast, Android TV und USB-Mediaplayern ohne Zusatzsoftware oder externe libass-Bibliotheken nativ wiedergegeben."
        },
        {
            "title": "2. Verhindert rechenintensive Video-Transcodierung in Plex & Jellyfin",
            "description": "Viele Smart-TV-Apps können ASS-Stile nicht direkt verarbeiten und zwingen den Medienserver dazu, Untertitel per CPU-Dauerlast ins Videobild einzubrennen. Mit SRT funktioniert 'Direct Play' sofort und ressourcenschonend."
        },
        {
            "title": "3. Sofort einsatzbereit für YouTube, Vimeo und Web-Player",
            "description": "HTML5-<track>-Elemente, YouTube Studio, Vimeo und Social-Media-Portale unterstützen keine ASS-Dateien. Nach der Umwandlung in SRT können Sie Untertitel direkt hochladen oder unkompliziert in WebVTT überführen."
        },
        {
            "title": "4. Federleichte Textdateien mit minimaler Größe",
            "description": "Durch die Bereinigung von Vektorpfaden, eingebetteten Schriftarten und komplexen Karaoke-Timings sind konvertierte SRT-Dateien bis zu 90% kleiner und in jedem Texteditor mühelos lesbar."
        },
        {
            "title": "5. Reibungslose Bearbeitung in Premiere Pro, DaVinci Resolve und Final Cut",
            "description": "Professionelle Schnittprogramme importieren SRT-Dateien sauber in native Untertitelspuren, während unbereinigte ASS-Dateien häufig Importfehler oder Darstellungsstörungen verursachen."
        },
        {
            "title": "6. Saubere Textbasis für Übersetzungen und KI-Sprachmodelle",
            "description": "Übersetzungsprogramme und KI-Modelle stolpern oft über ASS-Code-Tags. Durch die Umwandlung in sauberen SRT-Text erhalten Sie einwandfreie Dialoge für Sprachübersetzungen und KI-Dubbing."
        }
    ],
    "howToTitle": "So konvertieren Sie ASS online in SRT: Schritt-für-Schritt-Anleitung",
    "howToSubtitle": "Wandeln Sie jede Advanced SubStation Alpha Datei in Sekundenschnelle in normgerechte SubRip-Untertitel um.",
    "howToSteps": [
        {
            "step": "1",
            "title": "ASS- / SSA-Datei hochladen oder einfügen",
            "description": "Ziehen Sie Ihre .ass- oder .ssa-Untertiteldatei per Drag & Drop in den Upload-Bereich oder fügen Sie den Textinhalt direkt in das linke Editor-Feld ein."
        },
        {
            "step": "2",
            "title": "Automatische Tag-Bereinigung und Zeitumrechnung",
            "description": "Unsere browserbasierte JavaScript-Engine analysiert die [Events]-Zeilen, rechnet ASS-Hundertstelsekunden in SRT-Millisekunden um, passt Zeilenumbrüche (\\N) an und entfernt komplexe Stile."
        },
        {
            "step": "3",
            "title": "Fertige .SRT-Untertitel herunterladen",
            "description": "Prüfen Sie das Ergebnis in der Sofortvorschau auf der rechten Seite, kopieren Sie den Text in die Zwischenablage oder klicken Sie auf 'Untertitel herunterladen (.SRT)'."
        }
    ],
    "differenceTitle": "Technischer Vergleich: ASS und SRT im Überblick",
    "differenceSubtitle": "Eine detaillierte Übersicht über Funktionsumfang, Geräteunterstützung und Strukturunterschiede beider Untertitelformate.",
    "differenceTable": [
        {
            "feature": "Hauptsächliches Entwicklungsziel",
            "ass": "Anspruchsvolle typografische Effekte und Fansub-Visuals",
            "srt": "Maximale universelle Kompatibilität und einfacher Text"
        },
        {
            "feature": "Dateiaufbau",
            "ass": "Mehrteilige INI-ähnliche Abschnitte ([Script Info], [Styles], [Events])",
            "srt": "Fortlaufende Blöcke (Zähler, Zeitintervall, Text, Leerzeile)"
        },
        {
            "feature": "Zeitstempel-Genauigkeit",
            "ass": "Hundertstelsekunden (H:MM:SS.cs — 1/100 Sekunde)",
            "srt": "Millisekunden (HH:MM:SS,mmm — 1/1000 Sekunde)"
        },
        {
            "feature": "Bildschirmpositionierung",
            "ass": "Exakte Pixelkoordinaten (\\pos(X,Y)) und 9-Punkte-Raster (\\an1-9)",
            "srt": "Keine (feste Standardposition des Abspielgeräts am unteren Bildrand)"
        },
        {
            "feature": "Eigene Schriftarten und Farben",
            "ass": "Umfassende Kontrolle über Schriftart, Konturen, Schatten und BGR-Hexfarben",
            "srt": "Vom Player bestimmt; unterstützt lediglich fett, kursiv und unterstrichen"
        },
        {
            "feature": "Animationen und Spezialeffekte",
            "ass": "Überblendungen (\\fad), Bewegung (\\move), Zoom, Karaoke (\\k) und Vektoren",
            "srt": "Nicht unterstützt; reine Textanzeige"
        },
        {
            "feature": "Smart-TV-Kompatibilität",
            "ass": "Sehr gering (führt oft zu Zwangstranscodierung oder Fehlern)",
            "srt": "Universell (LG, Samsung, Sony, Roku, Apple TV, FireTV)"
        },
        {
            "feature": "Streaming-Server (Plex)",
            "ass": "Erfordert auf vielen Endgeräten rechenintensive Transcodierung",
            "srt": "Natives 'Direct Play' ohne spürbare CPU-Auslastung"
        },
        {
            "feature": "Webbrowser-Unterstützung",
            "ass": "Benötigt umfangreiche JavaScript-Emulatoren (libass / JavascriptSubtitlesOctopus)",
            "srt": "Nativ via WebVTT-Konvertierung oder einfache HTML5-Player"
        },
        {
            "feature": "Typische Einsatzbereiche",
            "ass": "Anime-Fansubbing, Karaoke-Clips und künstlerische Bildeinblendungen",
            "srt": "Filme, Fernsehserien, YouTube-Untertitel, NLE-Schnitt und Archivierung"
        }
    ],
    "structureTitle": "Hinter den Kulissen: Wie aus einer ASS-Zeile sauberer SRT-Code wird",
    "structureSubtitle": "Verstehen Sie den Konvertierungsprozess, der verschachtelte ASS-Befehle in schlanke SubRip-Blöcke überführt.",
    "structureBlocks": [
        {
            "name": "1. Die originale ASS-Dialogzeile",
            "description": "In ASS sind Dialoge unter [Events] abgelegt und enthalten Ebene, Timing, Stilnamen und geschweifte Klammern mit Befehlen.",
            "snippet": "[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:01:20.15,0:01:24.80,Default,,0,0,0,,{\\pos(960,1020)\\c&H00FFFF&\\b1}Achtung!{\\b0}\\NSystemstörung festgestellt."
        },
        {
            "name": "2. Extraktion und Bereinigung",
            "description": "Der Konverter extrahiert Start- und Endzeit, streicht die Tags {\\pos(...)} und {\\c...}, wandelt {\\b1}...{\\b0} in <b>...</b> um, setzt \\N in echte Zeilenumbrüche um und multipliziert Hundertstelsekunden mit 10.",
            "snippet": "Start: 0:01:20.15  ->  00:01:20,150\nEnde:  0:01:24.80  ->  00:01:24,800\nText:  {\\pos(960,1020)\\c&H00FFFF&\\b1}Achtung!{\\b0}\\NSystemstörung festgestellt.\n       => <b>Achtung!</b>\\nSystemstörung festgestellt."
        },
        {
            "name": "3. Der normierte SubRip (.SRT) Block",
            "description": "Die fertige Zeile erhält eine fortlaufende Ziffer und wird mit korrekt formatierten Zeitstempeln und gut lesbarem Text ausgegeben.",
            "snippet": "1\n00:01:20,150 --> 00:01:24,800\n<b>Achtung!</b>\nSystemstörung festgestellt.\n"
        }
    ],
    "exampleTitle": "Praxisbeispiel einer ASS-zu-SRT-Konvertierung: Vorher und Nachher",
    "exampleIntro": "Sehen Sie selbst, wie ein komplexes Anime-Untertitel-Segment mit Positionsangaben, Farbcodes und Formatierungen in gültiges SRT überführt wird.",
    "exampleAssInput": "[Script Info]\nTitle: Anime Beispiel Episode 01\nScriptType: v4.00+\nPlayResX: 1920\nPlayResY: 1080\n\n[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,52,&H00FFFFFF,&H000000FF,&H00000000,&H80000000,-1,0,0,0,100,100,0,0,1,3,2,2,30,30,40,1\nStyle: ObenHinweis,Trebuchet MS,42,&H0000FFFF,&H000000FF,&H00000000,&H80000000,0,0,0,0,100,100,0,0,1,2,1,8,20,20,20,1\n\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:04.25,0:00:07.90,Default,,0,0,0,,{\\i1}Was bisher in Space Odyssey geschah...{\\i0}\nDialogue: 0,0:00:08.50,0:00:12.10,ObenHinweis,,0,0,0,,{\\an8\\pos(960,60)\\c&H00FFFF&}SEKTOR 7 - HAUPTQUARTIER\nDialogue: 0,0:00:12.65,0:00:16.40,Default,,0,0,0,,{\\b1}Kommandant:{\\b0}\\NWarp-Antrieb sofort aktivieren!",
    "exampleSrtOutput": "1\n00:00:04,250 --> 00:00:07,900\n<i>Was bisher in Space Odyssey geschah...</i>\n\n2\n00:00:08,500 --> 00:00:12,100\nSEKTOR 7 - HAUPTQUARTIER\n\n3\n00:00:12,650 --> 00:00:16,400\n<b>Kommandant:</b>\nWarp-Antrieb sofort aktivieren!",
    "exampleExplanation": "In diesem konkreten Beispiel: (1) Die Hundertstelsekunden (0:00:04.25 und 0:00:07.90) wurden präzise in SRT-Millisekunden umgerechnet (00:00:04,250 und 00:00:07,900). (2) Der Tag des oberen Hinweises {\\an8\\pos(960,60)\\c&H00FFFF&} wurde rückstandslos entfernt. (3) Die Stile {\\i1} und {\\b1} wurden in konforme HTML-Tags (<i> und <b>) übersetzt und \\N wurde durch einen standardisierten Zeilenumbruch ersetzt.",
    "formattingLimitationsTitle": "Formatierungs-Einschränkungen: Was erhalten bleibt und was bereinigt wird",
    "formattingLimitationsSubtitle": "Da SubRip ein schlankes Format ist, werden spezielle ASS-Tags entfernt, um Anzeigefehler auf Videogeräten zu vermeiden.",
    "cleanedTagsList": [
        {
            "name": "Bildschirmkoordinaten & Positionierung",
            "tag": "{\\pos(X,Y)} & {\\move(X1,Y1,X2,Y2)}",
            "explanation": "Standardmäßige SRT-Player unterstützen keine 2D-Pixelkoordinaten. Diese Tags werden vollständig entfernt, damit kein störender Code im Bild erscheint."
        },
        {
            "name": "9-Punkte-Bildschirm-Ausrichtung",
            "tag": "{\\an1} bis {\\an9}",
            "explanation": "ASS richtet Texte in bis zu 9 Zonen aus. In SRT werden alle Untertitel an der Standardposition des Players (meist unten zentriert) angezeigt."
        },
        {
            "name": "Farbanpassungen & Transparenz",
            "tag": "{\\c&HBBGGRR&} & {\\1a&HAA&}",
            "explanation": "Hexadezimale BGR-Farbcodes und Alpha-Transparenzen werden gelöscht. Der Text erscheint in der im Player voreingestellten Schriftfarbe (meist weiß oder gelb)."
        },
        {
            "name": "Ein- und Ausblendeffekte (Fade In / Out)",
            "tag": "{\\fad(d1,d2)} & {\\fade(...)}",
            "explanation": "Weiche Alpha-Blenden sind eine Besonderheit von ASS. Das Timing bleibt erhalten, aber der Text blendet sauber zum Start- und Endzeitpunkt ein und aus."
        },
        {
            "name": "Karaoke-Timing-Tags",
            "tag": "{\\k<Dauer>}, {\\K}, {\\kf}",
            "explanation": "Silbengenaue Hundertstelsekunden-Timer werden entfernt. Die Liedzeile wird als vollständiger, flüssig lesbarer Satz ausgegeben."
        },
        {
            "name": "Vektorzeichnungen & Formen",
            "tag": "{\\p1}...{\\p0}",
            "explanation": "Zeichenbefehle zum Abdecken von Logos oder Schildern werden verworfen, damit keine unleserlichen Zahlenketten im Bild auftauchen."
        }
    ],
    "ffmpegTitle": "ASS in SRT über die Befehlszeile konvertieren (FFmpeg)",
    "ffmpegSubtitle": "Effiziente Batch-Befehle für Administratoren und anspruchsvolle Video-Profis.",
    "ffmpegCommand": "ffmpeg -i quelldatei.ass -c:s srt zieldatei.srt",
    "ffmpegExplanation": [
        "FFmpeg bietet integrierte Funktionen zur Demultiplexierung und Umwandlung von Untertitelspuren. Der obige Befehl liest die .ass-Datei ein, decodiert die Textströme, entfernt nicht unterstützte Stil-Tags und speichert eine standardkonforme SubRip .srt-Datei.",
        "Befinden sich Ihre ASS-Untertitel bereits in einer MKV-Videodatei (Matroska), können Sie diese ohne Neucodierung der Video- oder Tonspuren direkt extrahieren und konvertieren:",
        "ffmpeg -i film.mkv -map 0:s:0 -c:s srt film_untertitel.srt\n\nDer Parameter '-map 0:s:0' wählt gezielt die erste Untertitelspur des Containers aus und wandelt sie unmittelbar in eine separate .srt-Datei um.",
        "Auch wenn FFmpeg überaus leistungsfähig ist, bietet unser browserbasiertes Online-Tool eine sofortige visuelle Textvorschau, repariert fehlerhafte Zeichensätze und funktioniert ohne jede Installation auf PCs, Tablets und Smartphones."
    ],
    "useCasesTitle": "5 praktische Anwendungsfälle für die ASS-zu-SRT-Konvertierung",
    "useCasesSubtitle": "Alltägliche Situationen, in denen die Umwandlung von ASS-Untertiteln in SubRip unerlässlich ist.",
    "useCasesList": [
        {
            "title": "1. Flüssiges Streaming in Plex, Emby und Jellyfin ohne Transcodierung",
            "description": "Beim Abspielen von Anime- oder Fremdsprachenserien vom Heimserver auf Smart-TVs führt ASS oft zu unnötiger Transcodierung. Die Umwandlung in SRT ermöglicht sofortiges 'Direct Play' bei minimaler CPU-Auslastung."
        },
        {
            "title": "2. Untertitel-Upload für YouTube, Vimeo und soziale Medien",
            "description": "Große Videoplattformen verweigern den Upload von ASS-Dateien. Konvertiertes SRT lässt sich problemlos hochladen und wird von YouTube für die Suchindizierung und automatische Übersetzung genutzt."
        },
        {
            "title": "3. Direkte Wiedergabe auf Smart-TVs über USB-Festplatten",
            "description": "Eingebaute Mediaplayer von Fernsehern (Samsung, LG, Sony, Philips) erkennen .srt-Dateien im selben Filmordner sofort, während .ass-Dateien ignoriert werden oder Zeichensalat verursachen."
        },
        {
            "title": "4. Videoschnitt in Premiere Pro, DaVinci Resolve und Final Cut",
            "description": "Editoren, die Untertitel aus externen Quellen erhalten, scheitern oft am Import von ASS-Dateien. SRT lässt sich reibungslos auf standardisierten Untertitelspuren einfügen."
        },
        {
            "title": "5. Sprachübersetzung, Lokalisierung und KI-Sprachsynthese",
            "description": "Automatische Übersetzungsprogramme und KI-Tools können ASS-Steuerbefehle fälschlicherweise als Dialoginhalt deuten. Bereinigtes SRT liefert eine makellose Textbasis für Übersetzungen."
        }
    ],
    "troubleshootTitle": "Häufige Probleme bei der ASS-zu-SRT-Konvertierung lösen",
    "troubleshootSubtitle": "Praktische Tipps zur Beseitigung von Zeichensatzfehlern, Textüberlagerungen und Formatierungsstörungen.",
    "troubleshootTips": [
        {
            "issue": "Fehlerhafte Umlaute, seltsame Sonderzeichen oder 'Mojibake'",
            "cause": "Die ursprüngliche ASS-Datei wurde in veralteten Zeichensätzen wie ANSI, Windows-1252 oder UTF-16 statt standardisiertem UTF-8 ohne BOM gespeichert.",
            "solution": "Öffnen Sie die Datei in Notepad++ oder VS Code, stellen Sie die Codierung auf UTF-8 ohne BOM um und fügen Sie den Inhalt in unseren Konverter ein, um saubere Umlaute zu erhalten."
        },
        {
            "issue": "Fehlende Dialogzeilen nach der Konvertierung",
            "cause": "Die entsprechenden Zeilen waren im ASS-Skript fälschlicherweise als 'Comment:' statt als 'Dialogue:' markiert oder waren Vektorzeichnungen (\\p1).",
            "solution": "Überprüfen Sie die ASS-Datei im Texteditor. Ersetzen Sie bei gewünschten Dialogzeilen das führende 'Comment:' durch 'Dialogue:', damit sie korrekt erfasst werden."
        },
        {
            "issue": "Gleichzeitige Sprecherzeilen kollidieren am unteren Bildschirmrand",
            "cause": "In ASS werden gleichzeitige Stimmen auf verschiedenen Bildschirmebenen platziert. In SRT landen alle Zeilen standardmäßig am unteren Rand.",
            "solution": "Unser Konverter ordnet Zeilen chronologisch. Aktivieren Sie den automatischen Zeilenumbruch im Player oder kennzeichnen Sie Sprecher mit Namen (z. B. 'Max: Hallo')."
        },
        {
            "issue": "Code-Tags wie {\\pos...} sind im Bild sichtbar",
            "cause": "Die Ausgangsdatei enthielt unvollständige oder fehlerhaft geschlossene geschweifte Klammern, wodurch einfache Filter den Code nicht als Tag erkennen konnten.",
            "solution": "Unser Konverter verfügt über fehlertolerante Filtermechanismen, die auch unvollständige Tag-Reste bereinigen und eine fehlerfreie SRT-Ausgabe garantieren."
        }
    ],
    "timingTitle": "Präzises Timing: Hundertstelsekunden zu Millisekunden verständlich erklärt",
    "timingText": [
        "Eine der zentralen technischen Herausforderungen bei der Untertitelkonvertierung ist die Anpassung des Zeitsystems. Advanced SubStation Alpha verwendet Hundertstelsekunden im Format H:MM:SS.cs (z. B. 0:01:23.45). Jede Hundertstelsekunde entspricht 10 Millisekunden.",
        "SubRip hingegen verlangt eine exakte Millisekunden-Angabe im Format HH:MM:SS,mmm (z. B. 00:01:23,450). Die Umrechnung erfordert präzise Arithmetik: Die Hundertstelsekunden werden mit 10 multipliziert und Stunden sowie Minuten werden auf zwei Stellen normiert.",
        "Unser Konverter führt diese Berechnung mathematisch exakt durch. Es entsteht kein Rundungsversatz, sodass Bild und Ton über die gesamte Laufzeit hinweg perfekt lippensynchron bleiben."
    ],
    "workflowTitle": "Empfohlener Untertitel-Workflow für Heimkino-Liebhaber",
    "workflowSubtitle": "So extrahieren, konvertieren und bereiten Sie Untertitel für ein ruckelfreies Heimkino-Erlebnis vor.",
    "workflowSteps": [
        "Schritt 1: Befinden sich Ihre Untertitel in einer MKV-Datei, extrahieren Sie die .ass-Spur mit MKVToolNix oder FFmpeg auf Ihren PC.",
        "Schritt 2: Laden Sie die .ass-Datei in unseren Online ASS in SRT Konverter hoch. Tags werden bereinigt und Zeiten automatisch angepasst.",
        "Schritt 3: Laden Sie die generierte .srt-Datei herunter und benennen Sie sie exakt wie die Filmdatei (z. B. Film.2024.1080p.mkv und Film.2024.1080p.srt).",
        "Schritt 4: Prüfen Sie die Wiedergabe kurz im VLC Media Player, um Lesbarkeit und Timing zu kontrollieren.",
        "Schritt 5: Legen Sie die .srt-Datei in Ihren Filmordner (Plex, Jellyfin) oder auf einen USB-Stick, um Direct Play auf Ihrem Smart-TV zu genießen."
    ],
    "conclusionTitle": "Fazit & nützliche Untertitel-Tools",
    "conclusionText": [
        "Advanced SubStation Alpha bleibt das ideale Werkzeug für kunstvolle und stilisierte Untertitel. Geht es jedoch um garantierte Kompatibilität auf Fernsehern, Handys und Medienservern, ist SubRip (.srt) in Sachen Verlässlichkeit und Einfachheit unschlagbar.",
        "Unser kostenloser ASS in SRT Konverter Online bietet Ihnen eine schnelle, private und browserbasierte Lösung ohne Programminstallation. Entdecken Sie auch unsere weiteren Tools für Untertitel-Workflows:"
    ]
},
  id: {
    "introTitle": "Panduan Lengkap Konversi Subtitle ASS ke SRT Bersih",
    "introSubtitle": "Pelajari alasan subtitle Advanced SubStation Alpha (.ass) diubah ke SubRip (.srt), bagaimana pembersihan tag gaya bekerja, dan cara menjaga sinkronisasi waktu tetap presisi di semua Smart TV dan pemutar media.",
    "introText": [
        "Format Advanced SubStation Alpha (.ass / .ssa) sangat populer di kalangan komunitas penggemar anime dan fansub berkat kebebasan visualnya yang nyaris tanpa batas. Format ini memungkinkan pemilihan jenis font khusus, penentuan koordinat posisi piksel yang presisi, efek gradasi warna, hingga animasi lirik karaoke yang dinamis. Namun, keunggulan visual ini mengorbankan aspek penting: kompatibilitas universal perangkat keras.",
        "Saat Anda mencoba memutar video dengan subtitle ASS di Smart TV, konsol game, aplikasi smartphone, atau pemutar video berbasis web (seperti HTML5 video), teks sering kali tidak muncul, bentuk font menjadi rusak, atau memicu beban kerja berat (transcoding) pada server lokal seperti Plex dan Jellyfin. Sebaliknya, SubRip (.srt) adalah standar emas global untuk subtitle video—dikenali secara native oleh hampir setiap layar, sistem operasi, dan aplikasi pengeditan di dunia.",
        "Mengonversi ASS ke SRT memungkinkan Anda menyingkirkan kode gaya yang rumit tanpa kehilangan naskah dialog asli, ketepatan waktu pengucapan, dan penekanan teks penting seperti cetak tebal (bold) atau miring (italic). Panduan teknis mendalam ini mengupas arsitektur konversi ASS ke SRT, perhitungan matematis dari centisecond ke milidetik, instruksi baris perintah FFmpeg, dan solusi praktis untuk kendala pemutaran umum."
    ],
    "whatIsTitle": "Memahami ASS dan SRT: Perancang Bergaya vs. Standar Universal",
    "whatIsText": [
        "Advanced SubStation Alpha (.ass, v4.00+) dikembangkan oleh Kotus sebagai penyempurnaan dari format SubStation Alpha (.ssa) terdahulu. Tujuan utamanya adalah menyematkan kontrol tipografi dan tata letak secara langsung di dalam file skrip teks yang dapat diedit. File ASS memiliki beberapa bagian terstruktur: informasi resolusi kanvas ([Script Info]), kumpulan gaya yang telah ditetapkan ([V4+ Styles]), serta deretan dialog kronologis ([Events]) yang dilengkapi kode pengubah seperti {\\pos(x,y)}, {\\c&HBBGGRR&}, dan {\\an8}.",
        "SubRip (.srt), yang dirilis pada akhir tahun 1990-an bersamaan dengan aplikasi ripping DVD buatan Brain, memilih pendekatan yang berlawanan. Alih-alih memuat instruksi desain yang rumit, SRT fokus pada kesederhanaan mutlak: nomor urut angka berurutan, interval waktu berpresisi milidetik, serta teks dialog polos yang dipisahkan oleh baris kosong. Pemilihan jenis huruf dan posisi teks sepenuhnya diserahkan kepada pemutar video pengguna.",
        "Karena format SRT tidak memuat beban grafis ataupun instruksi kurva vektor, file ini terbuka secara instan, sangat hemat memori, dan tidak pernah menyebabkan error pemutaran pada perangkat keras. Jika prioritas utama Anda adalah pemutaran yang lancar tanpa kendala teknis, mengubah koleksi ASS Anda menjadi SRT standar adalah solusi terbaik."
    ],
    "whyConvertTitle": "6 Keuntungan Utama Mengonversi Subtitle ASS ke SRT",
    "whyConvertSubtitle": "Alasan para kreator konten, penikmat film, dan pengelola server media mengubah subtitle ASS menjadi SubRip bersih.",
    "whyConvertReasons": [
        {
            "title": "1. Kompatibilitas 100% Universal di Smart TV dan Perangkat",
            "description": "Format SubRip didukung secara native oleh Smart TV LG (webOS), Samsung (Tizen), Sony, perangkat Roku, Apple TV, Chromecast, Android TV, dan pemutar USB tanpa memerlukan pustaka eksternal seperti libass."
        },
        {
            "title": "2. Menghilangkan Transcoding Berat di Plex dan Jellyfin",
            "description": "Banyak Smart TV tidak mampu memproses gaya ASS secara mandiri, sehingga memaksa server membakar subtitle ke dalam video secara real-time. Dengan SRT, fitur 'Direct Play' berjalan langsung tanpa membebani prosesor server."
        },
        {
            "title": "3. Siap Digunakan di YouTube, Vimeo, dan Web Video",
            "description": "Elemen <track> HTML5, YouTube Studio, Vimeo, dan media sosial tidak mendukung format ASS. Mengubahnya ke SRT memungkinkan pengunggahan instan atau konversi praktis ke WebVTT."
        },
        {
            "title": "4. Ukuran File Sangat Ringan",
            "description": "Dengan membersihkan kode gambar vektor, font tersemat, dan data timing karaoke yang padat, file SRT hasil konversi menjadi hingga 90% lebih kecil dan mudah dibaca di aplikasi teks apa pun."
        },
        {
            "title": "5. Pengeditan Lancar di Premiere Pro, DaVinci Resolve, dan Final Cut",
            "description": "Aplikasi pengedit video profesional mengimpor subtitle SRT secara mulus ke trek teks bawaan, sedangkan file ASS mentah kerap memicu crash atau kehilangan posisi."
        },
        {
            "title": "6. Ekstraksi Naskah Bersih untuk Penerjemahan dan Dubbing AI",
            "description": "Penerjemah otomatis dan model kecerdasan buatan memerlukan naskah yang bersih dari kode. Menghapus tag ASS menghasilkan teks dialog murni yang siap diterjemahkan."
        }
    ],
    "howToTitle": "Cara Konversi ASS ke SRT Online: Panduan Langkah demi Langkah",
    "howToSubtitle": "Ubah file Advanced SubStation Alpha menjadi subtitle SubRip yang bersih hanya dalam hitungan detik di browser Anda.",
    "howToSteps": [
        {
            "step": "1",
            "title": "Unggah atau Tempel File ASS / SSA Anda",
            "description": "Tarik dan lepas file .ass atau .ssa ke area kerja konverter atau tempel naskah subtitle langsung ke panel editor di sebelah kiri."
        },
        {
            "step": "2",
            "title": "Pembersihan Tag dan Konversi Waktu Otomatis",
            "description": "Mesin JavaScript di browser akan membaca blok [Events], mengonversi centisecond ASS menjadi milidetik SRT, menyesuaikan baris baru (\\N), dan menghapus tag gaya yang tidak perlu."
        },
        {
            "step": "3",
            "title": "Unduh Subtitle .SRT yang Sudah Bersih",
            "description": "Lihat pratinjau instan di panel sebelah kanan, salin teks ke clipboard, atau klik 'Unduh Subtitle (.SRT)' untuk langsung diputar di perangkat Anda."
        }
    ],
    "differenceTitle": "Perbandingan Teknis: ASS vs. SRT Secara Singkat",
    "differenceSubtitle": "Perbandingan menyeluruh seputar kapabilitas fitur, dukungan perangkat, dan perbedaan struktur antara kedua format.",
    "differenceTable": [
        {
            "feature": "Tujuan Desain Utama",
            "ass": "Tipografi visual tingkat lanjut dan efek kustom fansub",
            "srt": "Kompatibilitas universal dan kesederhanaan teks biasa"
        },
        {
            "feature": "Struktur Dokumen",
            "ass": "Struktur modular bergaya INI ([Script Info], [Styles], [Events])",
            "srt": "Blok berurutan (Nomor urut, Stempel waktu, Teks, Baris kosong)"
        },
        {
            "feature": "Presisi Waktu",
            "ass": "Centisecond (H:MM:SS.cs — seperseratus detik)",
            "srt": "Milidetik (HH:MM:SS,mmm — seperseribu detik)"
        },
        {
            "feature": "Pengaturan Posisi Layar",
            "ass": "Koordinat piksel presisi (\\pos(X,Y)) dan perataan 9 titik (\\an1-9)",
            "srt": "Tidak ada (posisi standar pemutar di bagian bawah tengah layar)"
        },
        {
            "feature": "Kustomisasi Font & Warna",
            "ass": "Kontrol font penuh, garis tepi (outline), bayangan, dan warna heksadesimal BGR",
            "srt": "Dikelola oleh pemutar video; hanya mendukung cetak tebal, miring, garis bawah"
        },
        {
            "feature": "Efek Animasi",
            "ass": "Fade in/out (\\fad), pergerakan (\\move), zoom, karaoke (\\k), dan gambar vektor",
            "srt": "Tidak didukung; murni teks terbaca"
        },
        {
            "feature": "Kompatibilitas Smart TV",
            "ass": "Sangat rendah (sering memicu transcoding atau kegagalan tampilan)",
            "srt": "Universal (LG, Samsung, Sony, Roku, Apple TV, FireTV)"
        },
        {
            "feature": "Server Media (Plex)",
            "ass": "Membutuhkan proses transcoding berat pada sebagian besar TV",
            "srt": "Mendukung 'Direct Play' langsung tanpa beban CPU"
        },
        {
            "feature": "Dukungan Browser Web",
            "ass": "Memerlukan pustaka JavaScript berat (libass / JavascriptSubtitlesOctopus)",
            "srt": "Native melalui konversi WebVTT atau pemutar video HTML5 sederhana"
        },
        {
            "feature": "Penggunaan Ideal",
            "ass": "Subtitle anime, video lirik karaoke, dan teks berorientasi grafis",
            "srt": "Film, serial televisi, YouTube, siaran digital, dan pengeditan NLE"
        }
    ],
    "structureTitle": "Membedah Struktur: Bagaimana Baris ASS Menjadi Format SRT",
    "structureSubtitle": "Pelajari proses penyaringan data yang mengubah baris kode ASS menjadi blok SubRip yang rapi.",
    "structureBlocks": [
        {
            "name": "1. Baris Dialog Mentah pada File ASS",
            "description": "Di file ASS, kalimat percakapan berada di bawah bagian [Events] dan memuat informasi layer, waktu, gaya, serta kode override di dalam kurung kurawal.",
            "snippet": "[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:01:20.15,0:01:24.80,Default,,0,0,0,,{\\pos(960,1020)\\c&H00FFFF&\\b1}Peringatan!{\\b0}\\NGangguan sistem terdeteksi."
        },
        {
            "name": "2. Proses Ekstraksi dan Pembersihan",
            "description": "Konverter membaca waktu awal dan akhir, menghapus tag posisi {\\pos(...)} dan warna {\\c...}, mengubah {\\b1}...{\\b0} menjadi <b>...</b>, mengubah \\N menjadi baris baru, serta mengalikan nilai centisecond dengan 10.",
            "snippet": "Mulai: 0:01:20.15  ->  00:01:20,150\nAkhir: 0:01:24.80  ->  00:01:24,800\nTeks:  {\\pos(960,1020)\\c&H00FFFF&\\b1}Peringatan!{\\b0}\\NGangguan sistem terdeteksi.\n       => <b>Peringatan!</b>\\nGangguan sistem terdeteksi."
        },
        {
            "name": "3. Output Standar SubRip (.SRT)",
            "description": "Hasil akhir diberi nomor urut kronologis serta format waktu yang bersih dan teks dialog yang nyaman dibaca.",
            "snippet": "1\n00:01:20,150 --> 00:01:24,800\n<b>Peringatan!</b>\nGangguan sistem terdeteksi.\n"
        }
    ],
    "exampleTitle": "Contoh Nyata Konversi ASS ke SRT: Sebelum & Sesudah",
    "exampleIntro": "Lihat bagaimana teks subtitle anime yang sarat dengan tag tata letak dan warna diubah menjadi file SRT yang valid.",
    "exampleAssInput": "[Script Info]\nTitle: Contoh Anime Episode 01\nScriptType: v4.00+\nPlayResX: 1920\nPlayResY: 1080\n\n[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,52,&H00FFFFFF,&H000000FF,&H00000000,&H80000000,-1,0,0,0,100,100,0,0,1,3,2,2,30,30,40,1\nStyle: PapanAtas,Trebuchet MS,42,&H0000FFFF,&H000000FF,&H00000000,&H80000000,0,0,0,0,100,100,0,0,1,2,1,8,20,20,20,1\n\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:04.25,0:00:07.90,Default,,0,0,0,,{\\i1}Sebelumnya di Space Odyssey...{\\i0}\nDialogue: 0,0:00:08.50,0:00:12.10,PapanAtas,,0,0,0,,{\\an8\\pos(960,60)\\c&H00FFFF&}SEKTOR 7 - PUSAT KOMANDO\nDialogue: 0,0:00:12.65,0:00:16.40,Default,,0,0,0,,{\\b1}Komandan:{\\b0}\\NKita harus mengaktifkan kecepatan cahaya sekarang!",
    "exampleSrtOutput": "1\n00:00:04,250 --> 00:00:07,900\n<i>Sebelumnya di Space Odyssey...</i>\n\n2\n00:00:08,500 --> 00:00:12,100\nSEKTOR 7 - PUSAT KOMANDO\n\n3\n00:00:12,650 --> 00:00:16,400\n<b>Komandan:</b>\nKita harus mengaktifkan kecepatan cahaya sekarang!",
    "exampleExplanation": "Pada contoh praktis ini: (1) Angka centisecond (0:00:04.25 dan 0:00:07.90) dihitung secara presisi menjadi nilai milidetik SRT (00:00:04,250 dan 00:00:07,900). (2) Tag papan atas {\\an8\\pos(960,60)\\c&H00FFFF&} disingkirkan tanpa meninggalkan sisa kode. (3) Tag gaya {\\i1} dan {\\b1} diterjemahkan ke dalam tag HTML standar (<i> dan <b>), sedangkan simbol \\N diubah menjadi pemisah baris wajar.",
    "formattingLimitationsTitle": "Batasan Format: Mana yang Dipertahankan dan Mana yang Dihapus",
    "formattingLimitationsSubtitle": "Karena SRT adalah format teks sederhana, fitur styling khusus ASS dibersihkan agar teks tidak berantakan di layar.",
    "cleanedTagsList": [
        {
            "name": "Koordinat Posisi Layar",
            "tag": "{\\pos(X,Y)} & {\\move(X1,Y1,X2,Y2)}",
            "explanation": "Pemutar SRT standar tidak memahami koordinat 2D. Tag ini dihapus seluruhnya agar layar tidak dipenuhi baris kode yang mengganggu video."
        },
        {
            "name": "Perataan Kisi 9 Titik",
            "tag": "{\\an1} sampai {\\an9}",
            "explanation": "Format ASS menata teks di sembilan area layar. Pada SRT, semua teks dikembalikan ke posisi bawaan pemutar (biasanya di bagian bawah tengah)."
        },
        {
            "name": "Pengaturan Warna & Transparansi",
            "tag": "{\\c&HBBGGRR&} & {\\1a&HAA&}",
            "explanation": "Nilai warna heksadesimal BGR dan saluran transparansi alfa dihapus. Teks akan tampil mengikuti warna bawaan pemutar video Anda (umumnya putih atau kuning)."
        },
        {
            "name": "Efek Transisi Memudar (Fade In / Out)",
            "tag": "{\\fad(d1,d2)} & {\\fade(...)}",
            "explanation": "Efek transisi memudar merupakan fitur eksklusif ASS. Ketepatan waktu tetap terjaga, tetapi teks akan muncul dan menghilang secara tegas di batas waktu."
        },
        {
            "name": "Penanda Waktu Karaoke",
            "tag": "{\\k<durasi>}, {\\K}, {\\kf}",
            "explanation": "Penghitung waktu tiap suku kata dihilangkan. Seluruh kalimat lirik lagu disajikan utuh agar nyaman dibaca seperti percakapan biasa."
        },
        {
            "name": "Gambar Vektor dan Poligon",
            "tag": "{\\p1}...{\\p0}",
            "explanation": "Perintah gambar yang digunakan untuk menutup logo atau membuat bentuk grafis dihilangkan agar deretan angka koordinat tidak terpampang di layar."
        }
    ],
    "ffmpegTitle": "Cara Konversi ASS ke SRT Menggunakan Command Line (FFmpeg)",
    "ffmpegSubtitle": "Instruksi cepat untuk konversi massal bagi pengguna tingkat lanjut dan pengelola server.",
    "ffmpegCommand": "ffmpeg -i subtitle_sumber.ass -c:s srt subtitle_tujuan.srt",
    "ffmpegExplanation": [
        "FFmpeg memiliki kemampuan bawaan untuk mengekstrak dan mengubah trek subtitle. Perintah di atas membaca file .ass, menerjemahkan aliran teks, membersihkan tag gaya yang tidak kompatibel, dan menghasilkan file .srt SubRip standar.",
        "Bila subtitle ASS Anda sudah tertanam di dalam file video MKV (Matroska), Anda dapat mengekstrak dan mengonversinya langsung tanpa perlu merender ulang video atau audionya:",
        "ffmpeg -i film.mkv -map 0:s:0 -c:s srt subtitle_ekstrak.srt\n\nPada perintah ini, opsi '-map 0:s:0' memilih trek subtitle pertama di dalam file kontainer dan langsung menyimpannya sebagai file .srt terpisah.",
        "Meskipun FFmpeg sangat fleksibel, alat online kami menyajikan pratinjau visual secara instan, mampu memperbaiki format karakter yang rusak, serta dapat diakses mudah melalui smartphone maupun laptop tanpa instalasi software."
    ],
    "useCasesTitle": "5 Skenario Nyata Penggunaan Konverter ASS ke SRT",
    "useCasesSubtitle": "Kebutuhan praktis sehari-hari saat mengubah subtitle ASS ke format SubRip sangat dibutuhkan.",
    "useCasesList": [
        {
            "title": "1. Pemutaran Lancar di Server Plex, Emby, dan Jellyfin",
            "description": "Saat menonton anime atau film luar negeri dari server rumah ke Smart TV atau Apple TV, subtitle ASS kerap memaksa server melakukan transcoding video yang membebani CPU. Mengubahnya ke SRT membuat video dapat diputar langsung (Direct Play) dengan lancar."
        },
        {
            "title": "2. Menyiapkan Teks Subtitle untuk YouTube dan Vimeo",
            "description": "Situs video besar menolak file ASS saat diunggah. Konversi ke SRT memungkinkan kreator mengunggah closed captions yang dapat diindeks oleh YouTube untuk keperluan SEO dan terjemahan otomatis."
        },
        {
            "title": "3. Menonton Film di Smart TV Melalui Flashdisk USB",
            "description": "Pemutar video bawaan di TV Samsung, LG, Sony, dan Philips mengenali file .srt di folder yang sama dengan video secara otomatis, sedangkan file .ass kerap diabaikan atau memunculkan simbol aneh."
        },
        {
            "title": "4. Alur Kerja Video Editing (Premiere Pro dan DaVinci Resolve)",
            "description": "Editor video yang menerima subtitle ASS sering menghadapi bug saat memasukkannya ke timeline proyek. Format SRT dapat langsung diimpor ke trek caption bawaan software editing."
        },
        {
            "title": "5. Alur Kerja Penerjemahan Naskah dan Sulih Suara Berbasis AI",
            "description": "Aplikasi penerjemah bahasa dan model kecerdasan buatan dapat keliru mengartikan kode dalam kurung kurawal ASS sebagai kosakata. Mengekstraknya ke SRT menghasilkan teks dialog yang bersih untuk diterjemahkan."
        }
    ],
    "troubleshootTitle": "Solusi Praktis Kendala Konversi ASS ke SRT",
    "troubleshootSubtitle": "Petunjuk teknis untuk mengatasi masalah pengodean karakter, baris tumpang tindih, dan kesalahan pembacaan.",
    "troubleshootTips": [
        {
            "issue": "Karakter Berantakan, Huruf Rusak, atau Masalah 'Mojibake'",
            "cause": "File ASS asli tersimpan dalam format lawas seperti ANSI, Windows-1252, atau UTF-16, bukan UTF-8 standar tanpa BOM.",
            "solution": "Buka file di Notepad++ atau VS Code, ubah jenis encoding ke UTF-8 tanpa BOM, lalu tempelkan teksnya ke konverter kami untuk memperoleh karakter yang sempurna."
        },
        {
            "issue": "Ada Kalimat Dialog yang Hilang Setelah Dikonversi",
            "cause": "Baris pada file ASS diawali dengan 'Comment:' alih-alih 'Dialogue:', atau merupakan perintah grafis (\\p1) yang sengaja dihapus oleh sistem.",
            "solution": "Buka file ASS menggunakan editor teks. Jika kalimat percakapan bertuliskan 'Comment:', ganti menjadi 'Dialogue:' agar sistem mendeteksinya sebagai percakapan resmi."
        },
        {
            "issue": "Dua Karakter Berbicara Bersamaan dan Teks Bertumpuk",
            "cause": "Di format ASS, percakapan bersamaan diletakkan di layer atau posisi berbeda. Pada SRT, semua dialog dipusatkan di bagian bawah.",
            "solution": "Konverter kami menyusun waktu secara kronologis. Pastikan pemutar video Anda mengaktifkan fitur pemecah baris subtitle, atau berikan nama karakter untuk membedakan ucapan mereka."
        },
        {
            "issue": "Tag Kode Seperti {\\pos...} Masih Muncul di Layar",
            "cause": "File asal memiliki kurung kurawal yang rusak atau tidak tertutup dengan benar, sehingga pembersih biasa gagal mengenalinya sebagai tag.",
            "solution": "Sistem kami dilengkapi ekspresi reguler tangguh yang mampu membersihkan tag yang tidak lengkap sekalipun, memastikan file SRT Anda bersih seutuhnya dari kode asing."
        }
    ],
    "timingTitle": "Presisi Waktu Subtitle: Penjelasan Centisecond ke Milidetik",
    "timingText": [
        "Salah satu aspek teknis paling mendasar dalam proses konversi ini adalah penyesuaian sistem waktu. Advanced SubStation Alpha memakai hitungan centisecond berformat H:MM:SS.cs (contohnya 0:01:23.45). Satu centisecond setara dengan seperseratus detik (kelipatan 10 milidetik).",
        "Sementara itu, SubRip memakai standar milidetik berformat ketat HH:MM:SS,mmm (contohnya 00:01:23,450). Menjembatani kedua format ini membutuhkan kalkulasi aritmetika yang presisi: mengalikan centisecond dengan 10 untuk memperoleh nilai milidetik yang akurat serta melengkapi digit jam dan menit.",
        "Alat konversi kami menjalankan perhitungan ini dengan presisi matematis 100%. Tidak ada pembulatan yang menumpuk, sehingga ucapan bibir dan kemunculan teks akan selalu selaras dan sinkron, bahkan untuk film berdurasi panjang sekalipun."
    ],
    "workflowTitle": "Alur Kerja Subtitle Terbaik untuk Penikmat Home Theater",
    "workflowSubtitle": "Langkah praktis mengekstrak, mengonversi, dan menata subtitle agar siap tonton di koleksi media Anda.",
    "workflowSteps": [
        "Langkah 1: Jika subtitle Anda berada di dalam file video MKV, gunakan MKVToolNix atau FFmpeg untuk mengekstrak trek .ass ke komputer Anda.",
        "Langkah 2: Unggah file .ass tersebut ke Konverter ASS ke SRT Online kami. Tag gaya akan dihapus dan waktu disesuaikan secara otomatis.",
        "Langkah 3: Unduh file .srt hasil konversi dan beri nama yang sama persis dengan file video Anda (contoh: Film.2024.1080p.mkv dan Film.2024.1080p.srt).",
        "Langkah 4: Putar sebentar di VLC Media Player untuk memeriksa keterbacaan teks dan ketepatan suara dialog.",
        "Langkah 5: Simpan file .srt di folder film pada server media (Plex, Jellyfin) atau flashdisk USB untuk menikmati tayangan Direct Play di Smart TV Anda."
    ],
    "conclusionTitle": "Kesimpulan & Alat Bantu Konversi Subtitle Lainnya",
    "conclusionText": [
        "Advanced SubStation Alpha tetap menjadi opsi utama untuk subtitle yang sarat kreasi visual. Namun, jika prioritas Anda adalah kompatibilitas tanpa batas di Smart TV, smartphone, dan server streaming, SubRip (.srt) adalah pemenang mutlak dalam keandalan dan kepraktisan.",
        "Konverter ASS ke SRT Online gratis kami menghadirkan kemudahan instan, 100% aman bagi privasi, dan bekerja langsung di browser Anda tanpa perlu memasang aplikasi tambahan. Simak juga berbagai alat subtitle kami lainnya:"
    ]
},
  tr: {
    "introTitle": "ASS Altyazılarını Temiz SRT Formatına Dönüştürme Kapsamlı Rehberi",
    "introSubtitle": "Advanced SubStation Alpha (.ass) altyazılarının neden evrensel SubRip (.srt) formatına dönüştürüldüğünü, stil etiketlerinin nasıl temizlendiğini ve tüm akıllı televizyonlarda ses senkronizasyonunun nasıl korunduğunu keşfedin.",
    "introText": [
        "Advanced SubStation Alpha (.ass / .ssa), anime hayranları ve altyazı çevirmenleri arasında sunduğu neredeyse sınırsız görsel biçimlendirme seçenekleriyle büyük takdir toplamaktadır. Çevirmenlerin özel yazı tipleri seçmesine, pikseller düzeyinde ekran koordinatları belirlemesine, renk geçişleri uygulamasına ve dinamik karaoke animasyonları oluşturmasına olanak tanır. Ancak bu üstün görsel güç, donanım uyumluluğunda ciddi bir bedel ödetir.",
        "ASS altyazılı video dosyalarını Akıllı TV'lerde, oyun konsollarında, mobil cihazlarda veya web video oynatıcılarında (HTML5 video gibi) izlemeye çalıştığınızda; eksik metinler, hatalı yazı tipi değiştirmeleri veya Plex ve Jellyfin gibi ev sunucularında işlemciyi kilitleyen gerçek zamanlı video dönüştürme (transcoding) sorunlarıyla karşılaşırsınız. Buna karşılık SubRip (.srt), dünyadaki neredeyse her ekran, işletim sistemi ve video kurgu programı tarafından yerel olarak desteklenen küresel altın standarttır.",
        "ASS dosyasını SRT formatına dönüştürmek; özel ve karmaşık kodları ayıklayarak diyalog metinlerini, konuşmacı zamanlamasını ve kalın (bold) veya italik gibi temel vurguları kusursuzca korumanızı sağlar. Bu ayrıntılı teknik rehberde; ASS'den SRT'ye dönüşüm mimarisini, saliseden milisaniyeye zamanlama matematiğini, FFmpeg komut satırı yöntemlerini ve yaygın oynatma sorunlarına yönelik çözümleri ele alıyoruz."
    ],
    "whatIsTitle": "ASS ve SRT'yi Anlamak: Görsel Tasarımcı ile Evrensel Standart",
    "whatIsText": [
        "Advanced SubStation Alpha (.ass, v4.00+), Kotus tarafından eski SubStation Alpha (.ssa) formatının geliştirilmiş hali olarak tasarlanmıştır. Temel amacı, görsel biçimlendirme kurallarını doğrudan okunabilir metin dosyaları içerisinde tanımlamaktır. Bir ASS dosyası; çözünürlük bilgisi ([Script Info]), tanımlı stil kütüphaneleri ([V4+ Styles]) ve satır içi {\\pos(x,y)}, {\\c&HBBGGRR&}, {\\an8} gibi kodları barındıran kronolojik olay akışı ([Events]) bölümlerinden oluşur.",
        "1990'ların sonunda Brain tarafından geliştirilen popüler DVD altyazı çıkarma aracıyla ortaya çıkan SubRip (.srt) ise tamamen zıt bir mühendislik felsefesine dayanır. Görsel tasarım kuralları dayatmak yerine sadeliğe odaklanır: ardışık bir sayaç numarası, milisaniye hassasiyetinde bir zaman aralığı ve boş satırlarla ayrılmış düz metin diyalogları. Yazı tipi, renk ve ekrandaki konumlandırma tamamen altyazıyı oynatan cihaza bırakılır.",
        "Standart SRT dosyaları grafiksel yük veya vektörel çizim kodları içermediğinden anında açılır, neredeyse hiç bellek tüketmez ve donanım kilitlenmelerine yol açmaz. Önceliğiniz sorunsuz oynatma ve tam uyumluluk olduğunda, ASS altyazı arşivinizi SRT'ye dönüştürmek en kesin çözümdür."
    ],
    "whyConvertTitle": "ASS Altyazılarını SRT'ye Dönüştürmenin 6 Kritik Avantajı",
    "whyConvertSubtitle": "İçerik üreticilerinin, film koleksiyoncularının ve ev sunucusu yöneticilerinin ASS altyazılarını neden SubRip formatına dönüştürdüğünü öğrenin.",
    "whyConvertReasons": [
        {
            "title": "1. %100 Evrensel Cihaz ve Akıllı TV Uyumluluğu",
            "description": "SubRip formatı LG webOS, Samsung Tizen, Sony, Roku, Apple TV, Chromecast, Android TV ve USB medya oynatıcılarında harici libass kütüphanelerine ihtiyaç duymadan doğrudan çalışır."
        },
        {
            "title": "2. Plex ve Jellyfin Sunucularında Ağır Transcoding'i Önler",
            "description": "Birçok Akıllı TV istemcisi ASS stillerini doğrudan işleyemez ve sunucuyu altyazıları video üzerine yakmaya (transcode) zorlar. SRT kullanımı sayesinde 'Direct Play' anında devreye girer ve işlemci yükü sıfıra iner."
        },
        {
            "title": "3. YouTube, Vimeo ve Web Oynatıcıları İçin Tam Uyum",
            "description": "HTML5 <track> etiketleri, YouTube Studio, Vimeo ve sosyal medya platformları ASS dosyalarını kabul etmez. SRT'ye dönüştürerek altyazılarınızı anında yükleyebilir veya kolayca WebVTT yapabilirsiniz."
        },
        {
            "title": "4. Tüy Kadar Hafif Dosya Boyutu",
            "description": "Vektörel çizim koordinatları, gömülü yazı tipleri ve yoğun karaoke zamanlamaları temizlendiğinde, oluşturulan SRT dosyaları %90'a kadar daha küçük olur ve her metin düzenleyicide hızla açılır."
        },
        {
            "title": "5. Premiere Pro, DaVinci Resolve ve Final Cut'ta Hatasız Kurgu",
            "description": "Profesyonel video kurgu yazılımları SRT dosyalarını yerel altyazı kanallarına doğrudan aktarırken, karmaşık ASS dosyaları programların çökmesine veya zaman çizelgesinin bozulmasına yol açabilir."
        },
        {
            "title": "6. Çeviri ve Yapay Zeka Dublajı İçin Temiz Metin Tabanı",
            "description": "Otomatik çeviri araçları ve yapay zeka dil modelleri ASS kodlarını kelime sanarak hata yapabilir. Etiketlerin temizlenmesi, çeviri ve seslendirme için pürüzsüz bir diyalog metni sağlar."
        }
    ],
    "howToTitle": "ASS Dosyasını Çevrimiçi SRT Yapma: Adım Adım Rehber",
    "howToSubtitle": "Herhangi bir Advanced SubStation Alpha dosyasını saniyeler içinde temiz SubRip altyazılarına dönüştürün.",
    "howToSteps": [
        {
            "step": "1",
            "title": "ASS / SSA Dosyanızı Yükleyin veya Yapıştırın",
            "description": ".ass veya .ssa altyazı dosyanızı sürükleyip çalışma alanına bırakın ya da altyazı metnini sol taraftaki metin düzenleyicisine yapıştırın."
        },
        {
            "step": "2",
            "title": "Otomatik Ayrıştırma, Etiket Temizliği ve Zaman Dönüşümü",
            "description": "Tarayıcı motorumuz [Events] bölümünü okur, ASS saliselerini SRT milisaniyesine çevirir, satır sonlarını (\\N) ayarlar ve tüm karmaşık kodları siler."
        },
        {
            "step": "3",
            "title": "Kullanıma Hazır .SRT Dosyanızı İndirin",
            "description": "Sağ paneldeki anlık sonucu kontrol edin, temiz metni panoya kopyalayın veya cihazlarınızda izlemek için 'Altyazıyı İndir (.SRT)' butonuna tıklayın."
        }
    ],
    "differenceTitle": "Teknik Karşılaştırma: ASS ve SRT Tablosu",
    "differenceSubtitle": "Her iki altyazı formatının özelliklerini, cihaz desteklerini ve temel mimari farklarını inceleyin.",
    "differenceTable": [
        {
            "feature": "Temel Tasarım Hedefi",
            "ass": "Yüksek kaliteli tipografi ve sanatsal fansub tasarımı",
            "srt": "Evrensel cihaz uyumluluğu ve sade metin diyalogları"
        },
        {
            "feature": "Dosya Sözdizimi",
            "ass": "Bölümlü INI benzeri yapı ([Script Info], [Styles], [Events])",
            "srt": "Ardışık bloklar (Sıra numarası, Zaman damgası, Metin, Boş satır)"
        },
        {
            "feature": "Zamanlama Hassasiyeti",
            "ass": "Salise (H:MM:SS.cs — saniyenin yüzde biri)",
            "srt": "Milisaniye (HH:MM:SS,mmm — saniyenin binde biri)"
        },
        {
            "feature": "Ekran Konumlandırması",
            "ass": "Piksel koordinatları (\\pos(X,Y)) ve 9 noktalı hizalama (\\an1-9)",
            "srt": "Yok (oynatıcının alt orta varsayılan konumu)"
        },
        {
            "feature": "Özel Yazı Tipleri ve Renkler",
            "ass": "Tam font denetimi, dış çizgiler, gölgeler ve hex BGR renkleri",
            "srt": "Oynatıcıya bağlıdır; yalnızca kalın, italik ve altı çizili destekler"
        },
        {
            "feature": "Animasyonlar ve Efektler",
            "ass": "Kararma/açılma (\\fad), hareket (\\move), zoom, karaoke (\\k) ve vektörler",
            "srt": "Desteklenmez; yalnızca düz metin gösterilir"
        },
        {
            "feature": "Akıllı TV Uyumluluğu",
            "ass": "Çok zayıf (genellikle donmaya veya sunucu transcoding'ine yol açar)",
            "srt": "Evrensel (LG, Samsung, Sony, Roku, Apple TV, FireTV)"
        },
        {
            "feature": "Medya Sunucuları (Plex)",
            "ass": "Birçok TV uygulamasında yüksek işlemci tüketen dönüştürme gerektirir",
            "srt": "Sıfır işlemci yüküyle doğrudan oynatma ('Direct Play')"
        },
        {
            "feature": "Web Tarayıcısı Desteği",
            "ass": "Ağır JavaScript kütüphaneleri gerektirir (libass / JavascriptSubtitlesOctopus)",
            "srt": "WebVTT dönüşümü veya basit HTML5 oynatıcılarla yerel destek"
        },
        {
            "feature": "En Uygun Kullanım Alanları",
            "ass": "Anime altyazıları, karaoke şarkı klipleri ve görsel çeviri tabelaları",
            "srt": "Filmler, diziler, YouTube, TV yayıncılığı ve video kurgu"
        }
    ],
    "structureTitle": "Formatların Yapısı: Bir ASS Satırı Nasıl Temiz SRT Olur?",
    "structureSubtitle": "Karmaşık ASS kodlarının tertemiz SubRip bloklarına dönüştürülme sürecini anlayın.",
    "structureBlocks": [
        {
            "name": "1. Orijinal ASS Diyalog Satırı",
            "description": "ASS dosyasında konuşmalar [Events] altında yer alır ve katman, zaman, stil ile süslü parantezler içinde kodlar barındırır.",
            "snippet": "[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:01:20.15,0:01:24.80,Default,,0,0,0,,{\\pos(960,1020)\\c&H00FFFF&\\b1}Dikkat!{\\b0}\\NSistem arızası tespit edildi."
        },
        {
            "name": "2. Ayıklama ve Temizleme Süreci",
            "description": "Dönüştürücü başlangıç ve bitiş sürelerini alır, {\\pos(...)} ve {\\c...} etiketlerini siler, {\\b1}...{\\b0} etiketini <b>...</b> yapar, \\N ifadesini satır sonuna çevirir ve saliseyi 10 ile çarpar.",
            "snippet": "Başlangıç: 0:01:20.15  ->  00:01:20,150\nBitiş:     0:01:24.80  ->  00:01:24,800\nMetin:     {\\pos(960,1020)\\c&H00FFFF&\\b1}Dikkat!{\\b0}\\NSistem arızası tespit edildi.\n           => <b>Dikkat!</b>\\nSistem arızası tespit edildi."
        },
        {
            "name": "3. Standart SubRip (.SRT) Çıktısı",
            "description": "Ortaya çıkan diyalog bloğu ardışık bir numara alır ve net zaman aralıklarıyla okunabilir şekilde sıralanır.",
            "snippet": "1\n00:01:20,150 --> 00:01:24,800\n<b>Dikkat!</b>\nSistem arızası tespit edildi.\n"
        }
    ],
    "exampleTitle": "Gerçek Bir ASS - SRT Dönüşüm Örneği: Öncesi ve Sonrası",
    "exampleIntro": "Ekran tabelaları, renk kodları ve özel efektler içeren bir anime altyazı satırının nasıl temiz SRT'ye dönüştüğünü görün.",
    "exampleAssInput": "[Script Info]\nTitle: Ornek Anime Bolum 01\nScriptType: v4.00+\nPlayResX: 1920\nPlayResY: 1080\n\n[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,52,&H00FFFFFF,&H000000FF,&H00000000,&H80000000,-1,0,0,0,100,100,0,0,1,3,2,2,30,30,40,1\nStyle: UstTabela,Trebuchet MS,42,&H0000FFFF,&H000000FF,&H00000000,&H80000000,0,0,0,0,100,100,0,0,1,2,1,8,20,20,20,1\n\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:04.25,0:00:07.90,Default,,0,0,0,,{\\i1}Uzay Macerası'nın önceki bölümünde...{\\i0}\nDialogue: 0,0:00:08.50,0:00:12.10,UstTabela,,0,0,0,,{\\an8\\pos(960,60)\\c&H00FFFF&}7. SEKTOR - ANA KARARGAH\nDialogue: 0,0:00:12.65,0:00:16.40,Default,,0,0,0,,{\\b1}Komutan:{\\b0}\\NDerhal isik hizina gecmeliyiz!",
    "exampleSrtOutput": "1\n00:00:04,250 --> 00:00:07,900\n<i>Uzay Macerası'nın önceki bölümünde...</i>\n\n2\n00:00:08,500 --> 00:00:12,100\n7. SEKTOR - ANA KARARGAH\n\n3\n00:00:12,650 --> 00:00:16,400\n<b>Komutan:</b>\nDerhal isik hizina gecmeliyiz!",
    "exampleExplanation": "Bu uygulamalı örnekte: (1) Salise cinsindeki zaman damgaları (0:00:04.25 ve 0:00:07.90) milisaniyeye dönüştürülmüştür (00:00:04,250 ve 00:00:07,900). (2) Üst tabela etiketi {\\an8\\pos(960,60)\\c&H00FFFF&} hiçbir kod kalıntısı bırakılmadan silinmiştir. (3) {\\i1} ve {\\b1} etiketleri standart HTML etiketlerine (<i> ve <b>) çevrilmiş, \\N kodu ise doğal bir satır sonu olmuştur.",
    "formattingLimitationsTitle": "Biçimlendirme Sınırları: Neler Korunur, Neler Temizlenir?",
    "formattingLimitationsSubtitle": "SubRip hafif ve yalın bir format olduğundan, görüntü bozulmalarını engellemek için ASS'ye özel kodlar ayıklanır.",
    "cleanedTagsList": [
        {
            "name": "Ekran Koordinatları ve Konumlandırma",
            "tag": "{\\pos(X,Y)} & {\\move(X1,Y1,X2,Y2)}",
            "explanation": "Standart SRT oynatıcıları 2D piksel koordinatlarını tanımaz. Bu etiketler ekranda çirkin kodların görünmesini önlemek için tamamen kaldırılır."
        },
        {
            "name": "9 Noktalı Ekran Hizalaması",
            "tag": "{\\an1} - {\\an9}",
            "explanation": "ASS metni ekranda 9 farklı bölgeye yerleştirebilir. SRT formatında tüm metinler cihazın varsayılan alt orta konumuna hizalanır."
        },
        {
            "name": "Özel Renkler ve Şeffaflık",
            "tag": "{\\c&HBBGGRR&} & {\\1a&HAA&}",
            "explanation": "Onaltılık BGR renk kodları ve alfa şeffaflık değerleri silinir. Altyazı, televizyonunuzda veya oynatıcınızda ayarlı renkte (genelde beyaz veya sarı) görüntülenir."
        },
        {
            "name": "Açılma ve Kararma Efektleri (Fade In / Out)",
            "tag": "{\\fad(d1,d2)} & {\\fade(...)}",
            "explanation": "Yumuşak geçişler ASS motoruna özeldir. Zamanlama tam korunur, ancak metin zaman sınırlarında doğrudan açılır ve kapanır."
        },
        {
            "name": "Karaoke Zamanlama Etiketleri",
            "tag": "{\\k<süre>}, {\\K}, {\\kf}",
            "explanation": "Hece bazlı salise sayaçları kaldırılır. Şarkı sözü satırı eksiksiz ve rahat okunabilen bir diyalog cümlesi olarak sunulur."
        },
        {
            "name": "Vektörel Çizimler ve Şekiller",
            "tag": "{\\p1}...{\\p0}",
            "explanation": "Logo kapatmak veya kutu çizmek için kullanılan koordinat komutları silinir, böylece anlamsız sayı dizileri ekranda görünmez."
        }
    ],
    "ffmpegTitle": "FFmpeg Komut Satırı ile ASS Dosyasını SRT'ye Dönüştürme",
    "ffmpegSubtitle": "İleri düzey kullanıcılar ve sistem yöneticileri için hızlı toplu dönüştürme komutları.",
    "ffmpegCommand": "ffmpeg -i girdi_altyazi.ass -c:s srt cikti_altyazi.srt",
    "ffmpegExplanation": [
        "FFmpeg, altyazı akışlarını ayıklama ve dönüştürme konusunda güçlü yeteneklere sahiptir. Yukarıdaki komut kaynak .ass dosyasını okur, metinleri çözer, uyumsuz etiketleri temizler ve standart bir SubRip .srt dosyası yazar.",
        "ASS altyazılarınız zaten bir MKV (Matroska) video dosyasının içine gömülüyse, videoyu yeniden kodlamadan altyazıyı doğrudan çıkarıp dönüştürebilirsiniz:",
        "ffmpeg -i film.mkv -map 0:s:0 -c:s srt film_altyazisi.srt\n\nBuradaki '-map 0:s:0' parametresi, video kabındaki ilk altyazı akışını seçer ve anında harici bir .srt dosyası olarak kaydeder.",
        "FFmpeg son derece yetenekli olsa da, çevrimiçi tarayıcı aracımız anlık görsel önizleme sunar, bozuk karakter kodlamalarını otomatik düzeltir ve telefonda ya da bilgisayarda program kurmadan çalışır."
    ],
    "useCasesTitle": "ASS'den SRT'ye Dönüştürmenin 5 Pratik Kullanım Senaryosu",
    "useCasesSubtitle": "Karmaşık altyazıları SubRip'e dönüştürmenin vazgeçilmez olduğu günlük senaryolar.",
    "useCasesList": [
        {
            "title": "1. Plex, Emby ve Jellyfin'de Kesintisiz 'Direct Play'",
            "description": "Ev sunucunuzdaki anime veya yabancı yapımları Akıllı TV'de izlerken, ASS altyazıları sunucuyu ağır video transcoding işlemine zorlayabilir. SRT'ye geçmek anında Direct Play sağlar ve işlemciyi yormaz."
        },
        {
            "title": "2. YouTube, Vimeo ve Sosyal Medyaya Altyazı Yükleme",
            "description": "Popüler video platformları ASS dosyalarını kabul etmez. Temiz bir SRT dosyası yükleyerek videolarınızın YouTube tarafından aramalarda indekslenmesini ve otomatik çevrilmesini sağlarsınız."
        },
        {
            "title": "3. Akıllı TV'lerde USB Bellek Üzerinden Film İzleme",
            "description": "Samsung, LG, Sony ve Philips televizyonların dahili oynatıcıları .srt dosyalarını filmle aynı klasörde olduğunda otomatik tanır; oysa .ass dosyaları çoğunlukla açılmaz veya bozuk görünür."
        },
        {
            "title": "4. Premiere Pro, DaVinci Resolve ve Final Cut Kurgu Süreçleri",
            "description": "Dışarıdan ASS altyazı alan kurgucular bu dosyaları projelerine aktarırken çökmeler yaşayabilir. SRT formatı profesyonel montaj programlarının altyazı kanallarına doğrudan ve sorunsuzca eklenir."
        },
        {
            "title": "5. Altyazı Çevirisi, Yerelleştirme ve Yapay Zeka Seslendirme",
            "description": "Çeviri yazılımları ve yapay zeka seslendirme araçları süslü parantez içindeki kodları replik zannedebilir. Metnin SRT'ye çevrilmesiyle çeviri için pürüzsüz bir kaynak elde edilir."
        }
    ],
    "troubleshootTitle": "ASS'den SRT'ye Dönüştürmede Sık Karşılaşılan Sorunlar ve Çözümleri",
    "troubleshootSubtitle": "Karakter bozulmaları, çakışan satırlar ve oynatıcı hataları için teknik çözüm yolları.",
    "troubleshootTips": [
        {
            "issue": "Bozuk Türkçe Karakterler (ş, ğ, ı) veya 'Mojibake' Sorunu",
            "cause": "Orijinal ASS dosyası BOM içermeyen standart UTF-8 yerine ANSI, Windows-1254 veya UTF-16 olarak kaydedilmiştir.",
            "solution": "Dosyayı Notepad++ veya VS Code ile açıp kodlamasını 'BOM Olmadan UTF-8'e dönüştürün ve dönüştürücümüze yapıştırarak tertemiz karakterler elde edin."
        },
        {
            "issue": "Dönüşümden Sonra Bazı Diyalog Satırlarının Kaybolması",
            "cause": "ASS dosyasındaki replikler 'Dialogue:' yerine 'Comment:' olarak işaretlenmiş olabilir veya bilerek silinen çizim komutlarıdır (\\p1).",
            "solution": "ASS dosyasını bir metin editöründe açın. Kaybolan konuşmalar 'Comment:' ile başlıyorsa bunu 'Dialogue:' olarak değiştirerek tekrar dönüştürün."
        },
        {
            "issue": "Aynı Anda Konuşan Karakterlerin Yazılarının Üst Üste Binmesi",
            "cause": "ASS dosyasında eşzamanlı sesler farklı katmanlarda veya ekran bölgelerinde tutulur. SRT formatında ise hepsi alt ortaya yerleştirilir.",
            "solution": "Dönüştürücümüz satırları kronolojik olarak dizer. Oynatıcınızda altyazı satır kaydırma özelliğini açabilir veya konuşmacı isimleri ekleyebilirsiniz."
        },
        {
            "issue": "Ekranda {\\pos...} Gibi Kod Kalıntılarının Görünmesi",
            "cause": "Orijinal dosyada süslü parantezler hatalı kapatılmış veya bozulmuş olduğundan basit temizleyiciler kod bloğunu tanıyamamıştır.",
            "solution": "Gelişmiş regex algoritmamız eksik veya bozuk etiketleri bile saptayıp temizler, böylece SRT dosyanızda hiçbir kod artığı kalmaz."
        }
    ],
    "timingTitle": "Zamanlama Hassasiyeti: Saliseden Milisaniyeye Matematiksel Uyum",
    "timingText": [
        "Altyazı dönüşümündeki en kritik teknik detaylardan biri zaman damgalarının uyarlanmasıdır. Advanced SubStation Alpha formatı H:MM:SS.cs biçiminde salise sistemi kullanır (örneğin 0:01:23.45). Bir salise, saniyenin yüzde birine (10 milisaniyeye) karşılık gelir.",
        "SubRip ise HH:MM:SS,mmm biçiminde katı bir milisaniye yapısına sahiptir (örneğin 00:01:23,450). Bu iki yapı arasındaki geçiş hassas bir hesaplama gerektirir: Salisenin 10 ile çarpılarak doğru milisaniyeye ulaşılması ve saat/dakika basamaklarının iki haneli hale getirilmesi gerekir.",
        "Dönüştürücümüz bu matematiksel hesabı sıfır hata payıyla tamamlar. Hiçbir yuvarlama kayması oluşmaz; bu sayede saatler süren uzun filmlerde bile dudak hareketleri ile altyazı senkronizasyonu mükemmel kalır."
    ],
    "workflowTitle": "Ev Sineması Meraklıları İçin Tavsiye Edilen Altyazı İş Akışı",
    "workflowSubtitle": "Altyazılarınızı arşivinizdeki videolarla pürüzsüz izlemek için adım adım yapılması gerekenler.",
    "workflowSteps": [
        "1. Adım: Altyazınız MKV dosyasının içindeyse, MKVToolNix veya FFmpeg kullanarak .ass parçasını bilgisayarınıza çıkarın.",
        "2. Adım: Çıkardığınız .ass dosyasını sitemizdeki Çevrimiçi ASS - SRT Dönüştürücüye yükleyin. Etiketler temizlenir ve süreler anında ayarlanır.",
        "3. Adım: Oluşturulan .srt dosyasını indirin ve video dosyanızla birebir aynı ada sahip olacak şekilde kaydedin (örnek: Film.2024.1080p.mkv ve Film.2024.1080p.srt).",
        "4. Adım: VLC Media Player'da videoyu açarak ses ve metin uyumunu hızlıca test edin.",
        "5. Adım: .srt dosyasını sunucunuza (Plex, Jellyfin) veya USB belleğinize aktararak Akıllı TV'nizde sorunsuz 'Direct Play' keyfini yaşayın."
    ],
    "conclusionTitle": "Sonuç ve İlgili Altyazı Dönüştürme Araçları",
    "conclusionText": [
        "Advanced SubStation Alpha sanatsal ve efektli altyazılar için mükemmel bir seçenek olmayı sürdürüyor. Ancak Akıllı TV'lerde, telefonlarda ve sunucularda sorunsuz uyumluluk aradığınızda, SubRip (.srt) basitliği ve güvenilirliğiyle her zaman liderdir.",
        "Ücretsiz Çevrimiçi ASS - SRT Dönüştürücümüz program kurulumu gerektirmeden, %100 gizlilikle ve tarayıcınızda doğrudan çalışır. Video projeleriniz için diğer pratik altyazı araçlarımızı da keşfedebilirsiniz:"
    ]
},
  it: {
    "introTitle": "Guida Completa alla Conversione di Sottotitoli ASS in SRT Pulito",
    "introSubtitle": "Scopri perché i sottotitoli Advanced SubStation Alpha (.ass) vengono convertiti nel formato universale SubRip (.srt), come funziona l'eliminazione dei tag di stile e come preservare una sincronizzazione audio perfetta su tutti i media player e Smart TV.",
    "introText": [
        "Advanced SubStation Alpha (.ass / .ssa) è celebrato nel mondo del fansubbing e dell'animazione per le sue straordinarie potenzialità grafiche e tipografiche. Permette ai creatori di impostare caratteri personalizzati, specificare coordinate millimetriche su schermo, applicare gradienti di colore complessi e realizzare animazioni dinamiche per il karaoke. Tuttavia, questo grande controllo visivo si scontra con un limite gravoso: la scarsa compatibilità universale a livello hardware.",
        "Quando provi a riprodurre video con sottotitoli ASS su Smart TV, console per videogiochi, smartphone o lettori video basati sul web (come il tag video HTML5), è comune riscontrare testi mancanti, caratteri deformati o un pesante carico di transcodifica sul processore del server domestico in ambienti come Plex o Jellyfin. Al contrario, SubRip (.srt) è lo standard mondiale per eccellenza nel sottotitolaggio video, supportato nativamente da qualunque schermo, sistema operativo e programma di montaggio esistente.",
        "Convertire da ASS a SRT ti consente di rimuovere formattazioni complesse proprietarie mantenendo inalterati i testi dei dialoghi, la precisa sincronizzazione temporale e gli stili di enfasi essenziali come il grassetto e il corsivo. In questa guida tecnica approfondita analizzeremo l'architettura della conversione, il calcolo matematico da centesimi di secondo a millisecondi, i comandi FFmpeg e le soluzioni ai problemi di riproduzione più frequenti."
    ],
    "whatIsTitle": "Comprendere ASS e SRT: Il Tipografo Sofisticato rispetto allo Standard Universale",
    "whatIsText": [
        "Advanced SubStation Alpha (.ass, v4.00+) è stato ideato da Kotus come evoluzione del precedente formato SubStation Alpha (.ssa). L'obiettivo primario era consentire una regia visiva totale direttamente all'interno di file script di testo modificabili. Un documento ASS comprende sezioni strutturate: la risoluzione video di riferimento ([Script Info]), la libreria di stili grafici predefiniti ([V4+ Styles]) e la sequenza cronologica delle battute ([Events]), arricchita da codici di sovrascrittura come {\\pos(x,y)}, {\\c&HBBGGRR&} e {\\an8}.",
        "SubRip (.srt), nato sul finire degli anni '90 assieme al celebre programma di estrazione di sottotitoli da DVD sviluppato da Brain, ha seguito una logica opposta. Anziché imporre regole grafiche e di disegno, il formato SRT punta sulla pura essenzialità: un indice numerico sequenziale, un intervallo temporale espresso con precisione al millisecondo e il testo del dialogo separato da righe vuote. La scelta del carattere e la posizione su schermo sono delegate al lettore video.",
        "Non presentando elaborazioni grafiche vettoriali o stili pesanti, i file SRT si aprono istantaneamente, occupano una quantità trascurabile di memoria e non causano mai blocchi del lettore. Se la tua priorità è una riproduzione fluida e universale, convertire i tuoi file ASS in SRT standard è la scelta più saggia."
    ],
    "whyConvertTitle": "6 Vantaggi Fondamentali della Conversione da ASS a SRT",
    "whyConvertSubtitle": "Perché videomaker, appassionati di cinema e gestori di server multimediali scelgono di convertire i file ASS in SubRip.",
    "whyConvertReasons": [
        {
            "title": "1. Compatibilità Universale al 100% su Smart TV e Dispositivi",
            "description": "Il formato SubRip è gestito in modo nativo da Smart TV LG (webOS), Samsung (Tizen), Sony, box Roku, Apple TV, Chromecast, Android TV e chiavette USB senza necessitare di librerie esterne come libass."
        },
        {
            "title": "2. Elimina la Transcodifica Pesante su Server Plex e Jellyfin",
            "description": "Molti client per Smart TV non possono interpretare lo stile dei file ASS, costringendo il server a masterizzare i sottotitoli sul video in tempo reale con enorme sforzo della CPU. Con SRT, il 'Direct Play' si attiva all'istante."
        },
        {
            "title": "3. Perfetto per YouTube, Vimeo e Player Video HTML5",
            "description": "I tag <track> del web, YouTube Studio, Vimeo e i social media non riconoscono il formato ASS. Convertire in SRT consente il caricamento immediato o una facile trasformazione in WebVTT."
        },
        {
            "title": "4. Dimensioni dei File Estremamente Contenute",
            "description": "Rimuovendo tracciati vettoriali, caratteri incorporati e codici densi di karaoke, i file SRT ottenuti risultano fino al 90% più leggeri e facilmente gestibili con qualsiasi editor di testo."
        },
        {
            "title": "5. Montaggio Immediato in Premiere Pro, DaVinci Resolve e Final Cut",
            "description": "I programmi di montaggio video professionali importano i file SRT direttamente nelle tracce dedicate ai sottotitoli, evitando i crash e i disallineamenti provocati dagli script ASS."
        },
        {
            "title": "6. Estrazione di Testo Pulito per Traduzione e Doppiaggio con IA",
            "description": "I software di traduzione e i modelli linguistici di intelligenza artificiale possono confondere i tag ASS con parti del discorso. La conversione in SRT consegna un testo puro e pronto per la localizzazione."
        }
    ],
    "howToTitle": "Come Convertire ASS in SRT Online: Guida Passo Passo",
    "howToSubtitle": "Trasforma qualunque file Advanced SubStation Alpha in sottotitoli SubRip puliti in pochi secondi direttamente nel browser.",
    "howToSteps": [
        {
            "step": "1",
            "title": "Carica o Incolla il tuo File ASS / SSA",
            "description": "Trascina il tuo file .ass o .ssa nell'area di rilascio oppure incolla il testo dello script direttamente nel pannello di sinistra."
        },
        {
            "step": "2",
            "title": "Analisi Automatica e Rimozione dei Tag",
            "description": "Il nostro motore esamina la sezione [Events], trasforma i centesimi di secondo in millisecondi, adatta le interruzioni di riga (\\N) ed elimina le istruzioni di stile non necessarie."
        },
        {
            "step": "3",
            "title": "Scarica i tuoi Sottotitoli .SRT Pronti",
            "description": "Verifica l'anteprima istantanea nel pannello di destra, copia il testo negli appunti o clicca su 'Scarica Sottotitoli (.SRT)' per utilizzarli subito sul tuo player preferito."
        }
    ],
    "differenceTitle": "Confronto Tecnico: Tabella ASS contro SRT",
    "differenceSubtitle": "Un'analisi comparativa completa delle funzionalità, del supporto hardware e della struttura dei due formati.",
    "differenceTable": [
        {
            "feature": "Scopo Progettuale Primario",
            "ass": "Tipografia avanzata e cura stilistica per fansub",
            "srt": "Compatibilità universale e massima semplicità di lettura"
        },
        {
            "feature": "Sintassi del File",
            "ass": "Struttura a blocchi tipo INI ([Script Info], [Styles], [Events])",
            "srt": "Blocchi sequenziali (Indice, Intervallo temporale, Testo, Riga vuota)"
        },
        {
            "feature": "Precisione del Minutaggio",
            "ass": "Centesimi di secondo (H:MM:SS.cs — 1/100 di secondo)",
            "srt": "Millisecondi (HH:MM:SS,mmm — 1/1000 di secondo)"
        },
        {
            "feature": "Posizionamento su Schermo",
            "ass": "Coordinate per pixel (\\pos(X,Y)) e matrice a 9 punti (\\an1-9)",
            "srt": "Nessuno (posizione standard del player in basso al centro)"
        },
        {
            "feature": "Caratteri e Colori Personalizzati",
            "ass": "Controllo tipografico completo, contorni, ombre e colori BGR",
            "srt": "Gestito dal player; ammette solo grassetto, corsivo e sottolineato"
        },
        {
            "feature": "Animazioni ed Effetti",
            "ass": "Dissolvenze (\\fad), movimenti (\\move), zoom, karaoke (\\k) e vettori",
            "srt": "Non supportato; visualizzazione del solo testo"
        },
        {
            "feature": "Supporto Smart TV",
            "ass": "Molto scarso (spesso induce transcodifica o anomalie di rendering)",
            "srt": "Universale (LG, Samsung, Sony, Roku, Apple TV, FireTV)"
        },
        {
            "feature": "Server Multimediali (Plex)",
            "ass": "Richiede una transcodifica onerosa per la CPU su molti client TV",
            "srt": "Riproduzione diretta ('Direct Play') senza consumo di risorse"
        },
        {
            "feature": "Supporto nei Browser Web",
            "ass": "Richiede librerie JavaScript complesse (libass / SubtitlesOctopus)",
            "srt": "Nativo tramite conversione in WebVTT o player HTML5 basilari"
        },
        {
            "feature": "Casi d'Uso Ideali",
            "ass": "Sottotitolaggio di anime, video con testi karaoke e scritte grafiche",
            "srt": "Film, serie TV, YouTube, trasmissioni televisive e montaggio video"
        }
    ],
    "structureTitle": "Architettura dei Formati: Come una Riga ASS Diventa un Blocco SRT",
    "structureSubtitle": "Comprendi la procedura di elaborazione che isola il testo utile di una riga ASS trasformandolo in formato SubRip.",
    "structureBlocks": [
        {
            "name": "1. La Battuta Originale nel File ASS",
            "description": "Nel file ASS, le battute compaiono sotto [Events] e integrano livello, tempi, stile e parametri tra parentesi graffe.",
            "snippet": "[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:01:20.15,0:01:24.80,Default,,0,0,0,,{\\pos(960,1020)\\c&H00FFFF&\\b1}Attenzione!{\\b0}\\NGuasto al sistema rilevato."
        },
        {
            "name": "2. Il Processo di Estrazione e Pulizia",
            "description": "Il convertitore legge tempo iniziale e finale, rimuove le istruzioni {\\pos(...)} e {\\c...}, traduce {\\b1}...{\\b0} in <b>...</b>, trasforma \\N in un a capo reale e moltiplica i centesimi per 10.",
            "snippet": "Inizio: 0:01:20.15  ->  00:01:20,150\nFine:   0:01:24.80  ->  00:01:24,800\nTesto:  {\\pos(960,1020)\\c&H00FFFF&\\b1}Attenzione!{\\b0}\\NGuasto al sistema rilevato.\n        => <b>Attenzione!</b>\\nGuasto al sistema rilevato."
        },
        {
            "name": "3. Il Blocco Risultante in Formato SubRip (.SRT)",
            "description": "La battuta riceve un numero progressivo e viene formattata con timestamp precisi e testo chiaro.",
            "snippet": "1\n00:01:20,150 --> 00:01:24,800\n<b>Attenzione!</b>\nGuasto al sistema rilevato.\n"
        }
    ],
    "exampleTitle": "Esempio Pratico di Conversione ASS in SRT: Prima e Dopo",
    "exampleIntro": "Guarda come una riga di dialogo di anime ricca di comandi di posizionamento ed effetti cromatici viene tradotta in un blocco SRT pulito.",
    "exampleAssInput": "[Script Info]\nTitle: Esempio Anime Episodio 01\nScriptType: v4.00+\nPlayResX: 1920\nPlayResY: 1080\n\n[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,52,&H00FFFFFF,&H000000FF,&H00000000,&H80000000,-1,0,0,0,100,100,0,0,1,3,2,2,30,30,40,1\nStyle: CartelloInAlto,Trebuchet MS,42,&H0000FFFF,&H000000FF,&H00000000,&H80000000,0,0,0,0,100,100,0,0,1,2,1,8,20,20,20,1\n\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:04.25,0:00:07.90,Default,,0,0,0,,{\\i1}Nelle puntate precedenti di Odissea nello Spazio...{\\i0}\nDialogue: 0,0:00:08.50,0:00:12.10,CartelloInAlto,,0,0,0,,{\\an8\\pos(960,60)\\c&H00FFFF&}SETTORE 7 - QUARTIER GENERALE\nDialogue: 0,0:00:12.65,0:00:16.40,Default,,0,0,0,,{\\b1}Comandante:{\\b0}\\NDobbiamo attivare la velocita curvatura adesso!",
    "exampleSrtOutput": "1\n00:00:04,250 --> 00:00:07,900\n<i>Nelle puntate precedenti di Odissea nello Spazio...</i>\n\n2\n00:00:08,500 --> 00:00:12,100\nSETTORE 7 - QUARTIER GENERALE\n\n3\n00:00:12,650 --> 00:00:16,400\n<b>Comandante:</b>\nDobbiamo attivare la velocita curvatura adesso!",
    "exampleExplanation": "In questo caso reale: (1) I centesimi di secondo (0:00:04.25 e 0:00:07.90) sono stati convertiti esattamente nei millisecondi di SRT (00:00:04,250 e 00:00:07,900). (2) Il tag del cartello superiore {\\an8\\pos(960,60)\\c&H00FFFF&} è stato eliminato senza residui. (3) I comandi {\\i1} e {\\b1} sono diventati tag HTML standard (<i> e <b>), mentre \\N è stato tradotto in un'interruzione di riga naturale.",
    "formattingLimitationsTitle": "Limiti di Formattazione: Cosa Viene Mantenuto e Cosa Viene Rimosso",
    "formattingLimitationsSubtitle": "Poiché SubRip è un formato leggero orientato al testo, i comandi visivi specifici di ASS vengono eliminati per scongiurare errori di visualizzazione.",
    "cleanedTagsList": [
        {
            "name": "Coordinate e Posizionamento su Schermo",
            "tag": "{\\pos(X,Y)} e {\\move(X1,Y1,X2,Y2)}",
            "explanation": "I player SRT ordinari non interpretano coordinate bidimensionali. Questi tag vengono rimossi integralmente per evitare che sequenze di codice compaiano sopra l'immagine."
        },
        {
            "name": "Allineamento a 9 Punti",
            "tag": "{\\an1} fino a {\\an9}",
            "explanation": "Il formato ASS posiziona le scritte in 9 aree dello schermo. In SRT, ogni riga viene mostrata nella posizione predefinita del lettore (di solito in basso al centro)."
        },
        {
            "name": "Colori Personalizzati e Trasparenze",
            "tag": "{\\c&HBBGGRR&} e {\\1a&HAA&}",
            "explanation": "I codici colore esadecimali BGR e i valori di trasparenza vengono scartati. Il testo adotterà il colore impostato nelle preferenze del televisore o lettore (generalmente bianco o giallo)."
        },
        {
            "name": "Effetti di Dissolvenza (Fade In / Out)",
            "tag": "{\\fad(d1,d2)} e {\\fade(...)}",
            "explanation": "La transizione graduale in ingresso e uscita è esclusiva del motore di rendering ASS. Il timing resta perfetto, ma il testo comparirà e scomparirà in modo netto ai margini temporali."
        },
        {
            "name": "Tag per Minutaggio Karaoke",
            "tag": "{\\k<durata>}, {\\K}, {\\kf}",
            "explanation": "I timer che scandiscono le singole sillabe a livello di centesimo vengono eliminati. La strofa musicale viene mostrata come un testo completo e agevole da leggere."
        },
        {
            "name": "Tracciati Vettoriali e Forme",
            "tag": "{\\p1}...{\\p0}",
            "explanation": "I comandi grafici usati per coprire insegne o disegnare sagome vengono esclusi, impedendo la comparsa di stringhe numeriche senza senso a schermo."
        }
    ],
    "ffmpegTitle": "Come Convertire un File ASS in SRT da Riga di Comando (FFmpeg)",
    "ffmpegSubtitle": "Istruzioni veloci di conversione massiva per sistemisti e utenti avanzati.",
    "ffmpegCommand": "ffmpeg -i sottotitoli_origine.ass -c:s srt sottotitoli_destinazione.srt",
    "ffmpegExplanation": [
        "FFmpeg integra moduli nativi per l'estrazione e la transcodifica delle tracce di sottotitoli. Il comando sopra legge il file .ass di partenza, decodifica il testo, cancella i tag di stile incompatibili e crea un file .srt conforme allo standard SubRip.",
        "Se i tuoi sottotitoli ASS sono già incapsulati in un contenitore video MKV (Matroska), puoi estrarli e convertirli direttamente senza ricodificare le tracce video o audio:",
        "ffmpeg -i film.mkv -map 0:s:0 -c:s srt sottotitoli_estratti.srt\n\nIn questa istruzione, l'opzione '-map 0:s:0' isola la prima traccia di sottotitoli presente nel file e la salva all'istante come file .srt esterno.",
        "Nonostante la potenza di FFmpeg, il nostro strumento web offre un riscontro visivo immediato, sistema le codifiche di caratteri difettose e funziona agilmente su smartphone, tablet e PC senza installare software aggiuntivi."
    ],
    "useCasesTitle": "5 Scenari Concreti per la Conversione da ASS a SRT",
    "useCasesSubtitle": "Contesti quotidiani in cui la trasformazione dei sottotitoli in SubRip è fondamentale.",
    "useCasesList": [
        {
            "title": "1. Streaming Fluido su Server Plex, Emby e Jellyfin",
            "description": "Quando trasmetti serie estere o anime dal server domestico a una Smart TV o Apple TV, i sottotitoli ASS innescano spesso una transcodifica video che sovraccarica il processore. Il passaggio a SRT garantisce la riproduzione diretta istantanea."
        },
        {
            "title": "2. Pubblicazione su YouTube, Vimeo e Piattaforme Web",
            "description": "I principali servizi di video hosting respingono i file ASS. Un file SRT pulito permette il caricamento di sottotitoli che YouTube analizzerà per le ricerche e per la traduzione automatica."
        },
        {
            "title": "3. Visione su Smart TV da Chiavetta USB",
            "description": "I lettori integrati nei televisori Samsung, LG, Sony e Philips riconoscono senza problemi i file .srt memorizzati assieme al film, mentre i file .ass vengono ignorati o generano caratteri illeggibili."
        },
        {
            "title": "4. Montaggio in Premiere Pro, DaVinci Resolve e Final Cut",
            "description": "I montatori video che ricevono sottotitoli originati in Aegisub riscontrano spesso blocchi nell'importazione. Il formato SRT si posiziona in maniera corretta sulle tracce di testo native del software."
        },
        {
            "title": "5. Traduzione, Adattamento Linguistico e Doppiaggio con IA",
            "description": "I sistemi di traduzione automatica e i sintetizzatori vocali basati su intelligenza artificiale possono scambiare i codici dell'ASS per parole del copione. L'estrazione in SRT fornisce un testo immacolato per il lavoro linguistico."
        }
    ],
    "troubleshootTitle": "Risoluzione dei Problemi Frequenti nella Conversione da ASS a SRT",
    "troubleshootSubtitle": "Suggerimenti tecnici per risolvere problemi di codifica, battute sovrapposte e difetti di lettura.",
    "troubleshootTips": [
        {
            "issue": "Lettere Accentate Deformate, Caratteri Strani o Problemi di 'Mojibake'",
            "cause": "Il file ASS originario è stato salvato con codifiche obsolete come ANSI, Windows-1252 o UTF-16 anziché nel formato standard UTF-8 senza BOM.",
            "solution": "Apri il file con Notepad++ o VS Code, converti la codifica in UTF-8 senza BOM e incolla il testo nel nostro strumento online per visualizzare lettere perfettamente corrette."
        },
        {
            "issue": "Battute che Scompaiono o Non Figurano dopo la Conversione",
            "cause": "Le righe nel file ASS erano contrassegnate dalla dicitura 'Comment:' invece di 'Dialogue:', oppure erano comandi di disegno (\\p1) scartati intenzionalmente.",
            "solution": "Apri il file ASS con un editor di testo. Se i dialoghi mancanti iniziano con 'Comment:', sostituisci il termine con 'Dialogue:' in modo che il convertitore li elabori."
        },
        {
            "issue": "Battute Simultanee di Più Personaggi che si Sovrappongono",
            "cause": "Nel formato ASS, le voci concomitanti vengono collocate su livelli o aree differenti. In SRT, tutto viene raggruppato in basso al centro.",
            "solution": "Il nostro convertitore dispone le righe in ordine cronologico. Assicurati che il tuo player abiliti il testo multilinea o aggiungi i nomi dei personaggi per distinguerli chiaramente."
        },
        {
            "issue": "Tag di Codice come {\\pos...} Visibili Durante il Film",
            "cause": "Il file di partenza presentava parentesi graffe chiuse in modo non corretto o danneggiate, impedendo ai pulitori generici di identificare il blocco di codice.",
            "solution": "Il nostro motore adotta espressioni regolari avanzate capaci di eliminare anche tag troncati o malformati, lasciando il file SRT completamente privo di codice spurio."
        }
    ],
    "timingTitle": "Precisione del Minutaggio: Da Centesimi di Secondo a Millisecondi Spiegato",
    "timingText": [
        "Uno degli aspetti tecnici più determinanti nella conversione di sottotitoli riguarda la trasposizione del sistema cronometrico. Il formato Advanced SubStation Alpha adotta i centesimi di secondo con schema H:MM:SS.cs (ad esempio 0:01:23.45). Ciascun centesimo corrisponde a un intervallo di 10 millisecondi.",
        "Il formato SubRip impone invece una misurazione rigorosa in millisecondi espressa come HH:MM:SS,mmm (ad esempio 00:01:23,450). Il passaggio richiede un'operazione aritmetica esatta: moltiplicare i centesimi per 10 per ricavare i millisecondi corretti e formattare ore e minuti su due cifre.",
        "Il nostro convertitore esegue questo calcolo con fedeltà matematica assoluta. Non si verifica alcun disallineamento progressivo, garantendo che audio e sottotitoli restino perfettamente sincronizzati dall'inizio alla fine del film."
    ],
    "workflowTitle": "Sequenza di Lavoro Suggerita per gli Amanti dell'Home Cinema",
    "workflowSubtitle": "I passaggi per estrarre, convertire e organizzare i tuoi sottotitoli per una libreria video perfetta.",
    "workflowSteps": [
        "Passaggio 1: Se i sottotitoli sono all'interno di un file MKV, impiega MKVToolNix o FFmpeg per estrarre la traccia .ass sul tuo computer.",
        "Passaggio 2: Carica il file .ass nel nostro Convertitore da ASS a SRT Online. I tag verranno rimossi e i timestamp riadattati in tempo reale.",
        "Passaggio 3: Scarica il file .srt ottenuto e rinominalo con il medesimo titolo del tuo video (es. Film.2024.1080p.mkv e Film.2024.1080p.srt).",
        "Passaggio 4: Esegui una breve verifica con VLC Media Player per confermare la piena leggibilità dei dialoghi e la sincronia con il sonoro.",
        "Passaggio 5: Salva il file .srt sul tuo server (Plex, Jellyfin) o su chiavetta USB per goderti la riproduzione diretta fluida sulla tua Smart TV."
    ],
    "conclusionTitle": "Conclusioni e Strumenti Correlati per i Sottotitoli",
    "conclusionText": [
        "Advanced SubStation Alpha rimane la soluzione prediletta per sottotitoli dal forte impatto artistico. Tuttavia, quando cerchi compatibilità garantita su Smart TV, smartphone e server di streaming, SubRip (.srt) non teme rivali per semplicità e affidabilità.",
        "Il nostro Convertitore da ASS a SRT Online gratuito ti offre una soluzione immediata, privata e operativa direttamente nel tuo browser, senza installare alcun software. Scopri anche gli altri nostri utili strumenti dedicati ai sottotitoli:"
    ]
},
};

export function getAssToSrtGuideContent(locale: Locale): AssToSrtGuideContent {
  return ASS_TO_SRT_GUIDES[locale] || ASS_TO_SRT_GUIDES.en;
}
