import type { Locale } from './config';

export interface SmiToSrtGuideContent {
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
    smi: string;
    srt: string;
  }[];

  koreanEncodingTitle: string;
  koreanEncodingSubtitle: string;
  koreanEncodingText: string[];

  endTimeCalculationTitle: string;
  endTimeCalculationSubtitle: string;
  endTimeCalculationText: string[];

  exampleTitle: string;
  exampleIntro: string;
  exampleSmiInput: string;
  exampleSrtOutput: string;
  exampleExplanation: string;

  bilingualTitle: string;
  bilingualSubtitle: string;
  bilingualText: string[];

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

  conclusionTitle: string;
  conclusionText: string[];
}

export const SMI_TO_SRT_GUIDES: Record<Locale, SmiToSrtGuideContent> = {
  "en": {
    "introTitle": "The Complete Guide to Converting SMI (SAMI) to SRT Subtitles",
    "introSubtitle": "Master the conversion from Microsoft SAMI (.smi) caption files to universally compatible SubRip (.srt) subtitles. Learn how HTML-based SAMI architecture works, how to calculate precise end times from sync clear points, how to handle Korean EUC-KR / CP949 encodings without mojibake, and how to seamlessly import subtitles into Premiere Pro, DaVinci Resolve, Final Cut Pro, and VLC.",
    "introText": [
      "In the history of digital multimedia, subtitle formats have evolved alongside media playback architectures. In the late 1990s, Microsoft introduced the Synchronized Accessible Media Interchange (SAMI) specification, designated by the .smi or .sami file extension, to deliver rich, styled closed captioning for Windows Media Player. SAMI was revolutionary for its era: built on an HTML and CSS document model, it enabled web-like text styling, custom fonts, precise font sizing, color highlights, and multiple simultaneous language tracks.",
      "Nowhere did the SAMI format achieve greater cultural and technical significance than in South Korea. During the broadband boom of the early 2000s, Korean fansubbing communities and media distributors adopted .smi as the undisputed national standard for television broadcasts, cinema releases, anime subtitling, and foreign language education. To this day, millions of Korean drama (K-drama) episodes, classic films, and video archives remain encoded exclusively in legacy SAMI (.smi) files.",
      "However, modern video workflows have shifted entirely toward open, lightweight, cross-platform standards. Today, SubRip (.srt) is the undisputed worldwide standard for subtitle interchange across media players like VLC and Plex, streaming giants like YouTube and Netflix, and professional non-linear video editing (NLE) platforms like Adobe Premiere Pro, DaVinci Resolve, and Apple Final Cut Pro. Almost none of these modern tools support the legacy Microsoft SAMI format.",
      "Converting SMI to SRT bridges this crucial technical gap. Because SAMI relies on complex HTML markup, millisecond timestamps without end-times, and legacy character encodings like EUC-KR and CP949, manual conversion is fraught with timing errors and corrupted text. This comprehensive technical guide details the inner architecture of SAMI and SRT files, the mathematics of converting millisecond sync tags into clock timecodes, character encoding solutions, command-line automation, and best practices for modern playback and video editing."
    ],
    "whatIsTitle": "What is an SMI (SAMI) File? Architecture of Microsoft's Subtitle Standard",
    "whatIsText": [
      "An SMI (.smi) file, also known by its full acronym SAMI (Synchronized Accessible Media Interchange), is a structured, plain-text document based on HTML and XML syntax. Microsoft published the SAMI 1.0 specification in 1998 as part of its Windows Media technologies to provide synchronized accessibility text, audio descriptions, and multilingual captioning for digital video and audio streams.",
      "Structurally, an SMI file mirrors a traditional HTML web page. It begins with an opening <SAMI> tag, contains a <HEAD> section featuring embedded CSS style sheets (<STYLE TYPE=\"text/css\">), and encloses all subtitle cues within a <BODY> section. Within the CSS header, authors define visual typography such as font family (commonly Gulim, Batang, Arial, or sans-serif), text color, font size, margin spacing, and custom CSS classes. Crucially, each language track is declared as a unique CSS class—such as .KRCC for Korean Closed Captions, .ENCC for English, or .JPCC for Japanese.",
      "Within the document's <BODY>, subtitle cues are sequenced using <SYNC Start=#####> tags, where the Start attribute represents the appearance time in absolute milliseconds from the beginning of the video timeline (e.g. <SYNC Start=15200> for 15.2 seconds). Immediately following the sync tag, a paragraph tag (<P Class=KRCC>) specifies which language track is speaking, followed by the subtitle text. Line breaks are rendered using HTML <BR> tags.",
      "SubRip (.srt), by comparison, was engineered as a streamlined, standalone subtitle format completely decoupled from HTML document trees. An SRT file uses simple numbered counter blocks (1, 2, 3...), clock-based timestamps declaring both start and end times joined by an arrow delimiter (00:00:15,200 --> 00:00:18,500), dialogue text, and blank line separators. Because SRT is universally implemented in every media playback library (FFmpeg, Libass, GStreamer), converting SMI to SRT unlocks effortless playback on any device."
    ],
    "whyConvertTitle": "Why Convert SMI Subtitles to SRT?",
    "whyConvertSubtitle": "Discover the critical advantages of converting legacy SAMI (.smi) captions into universally compatible SubRip (.srt) subtitles.",
    "whyConvertReasons": [
      {
        "title": "Universal Playback Across Modern Devices",
        "description": "Modern smart televisions (Samsung Tizen, LG webOS, Sony Android TV), streaming set-top boxes (Apple TV, Roku, Chromecast, Fire TV), and mobile media players do not support .smi files. Standard SubRip (.srt) plays seamlessly across every modern device."
      },
      {
        "title": "Full Compatibility with Professional Video Editors",
        "description": "Non-linear editing suites (NLEs) such as Adobe Premiere Pro, DaVinci Resolve, Apple Final Cut Pro, Avid Media Composer, and CapCut reject .smi files. Converting to .srt allows you to import subtitle tracks directly onto your timeline for native editing."
      },
      {
        "title": "Pristine Unicode & Cross-Platform Encoding",
        "description": "Legacy Korean SMI files frequently use Windows-949 (CP949) or EUC-KR encoding, causing garbled character mojibake on macOS, Linux, iOS, and Android. Converting to standard UTF-8 SRT ensures crisp, legible Korean Hangul characters on all screens."
      },
      {
        "title": "Bilingual Track Isolation & Cleanup",
        "description": "Many Korean media releases feature dual-language SAMI files containing both Korean and English in the same document. Converting to SRT allows you to isolate a single language track, eliminating screen clutter and overlapping text."
      },
      {
        "title": "Seamless Plex, Emby, and Jellyfin Streaming",
        "description": "Home media servers like Plex, Emby, and Jellyfin provide zero-transcode, instant direct-play for external .srt subtitle tracks, preventing unnecessary CPU-heavy video transcoding and buffering caused by unsupported subtitle containers."
      },
      {
        "title": "Social Media & Video Platform Readiness",
        "description": "Platforms such as YouTube, Vimeo, Facebook, Twitter/X, and LinkedIn strictly require standard .srt files for caption uploads. Converting your SMI archives guarantees immediate compliance with web video standards."
      }
    ],
    "howToTitle": "How to Convert SMI to SRT Online in 3 Simple Steps",
    "howToSubtitle": "Follow these step-by-step instructions to convert your SAMI subtitle files into valid SubRip SRT subtitles in seconds.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Upload or Paste Your SMI / SAMI File",
        "description": "Drag and drop your .smi or .sami file directly into the converter dropzone, click Browse Files to select from your computer or phone, or paste raw SAMI text directly into the input textarea."
      },
      {
        "step": "2",
        "title": "Select Language Track and Encoding Options",
        "description": "If your file contains multiple languages (e.g. KRCC for Korean and ENCC for English), choose your preferred track. Select the correct character encoding (UTF-8, EUC-KR, or CP949) to ensure perfect character rendering."
      },
      {
        "step": "3",
        "title": "Download Your Converted SubRip SRT File",
        "description": "Inspect the live preview of your converted SubRip captions. Click Download .SRT to save the file immediately to your device, or click Copy to paste the subtitles directly into your video editing timeline."
      }
    ],
    "differenceTitle": "Technical Comparison: SMI (SAMI) vs. SubRip (SRT)",
    "differenceSubtitle": "Examine the architectural and structural differences between Microsoft's SAMI format and universal SubRip subtitles.",
    "differenceTable": [
      {
        "feature": "Primary Developer & Origin",
        "smi": "Microsoft Corporation (1998, for Windows Media Player)",
        "srt": "Brain / SubRip Community (Late 1990s, for DVD ripping)"
      },
      {
        "feature": "Underlying Architecture",
        "smi": "HTML / XML document structure with CSS <STYLE> block",
        "srt": "Plain text with sequential numbered blocks"
      },
      {
        "feature": "Timestamp Representation",
        "smi": "Millisecond integers from video start (<SYNC Start=12500>)",
        "srt": "Clock timecodes (HH:MM:SS,mmm --> HH:MM:SS,mmm)"
      },
      {
        "feature": "Cue End-Time Declaration",
        "smi": "Implicit: determined by next <SYNC> or &nbsp; clear tag",
        "srt": "Explicit: start and end time specified on every cue"
      },
      {
        "feature": "Line Break Formatting",
        "smi": "HTML tags (<BR>, <br>, or <br/>)",
        "srt": "Standard newline characters (\\n)"
      },
      {
        "feature": "Typographic Styling",
        "smi": "Embedded CSS font family, font size, colors, ruby annotations",
        "srt": "Basic HTML styling tags (<i>, <b>, <u>) or plain text"
      },
      {
        "feature": "Multilingual Track Support",
        "smi": "Native: multiple CSS classes (<P Class=KRCC>, <P Class=ENCC>)",
        "srt": "Separate files per language (e.g. movie.ko.srt, movie.en.srt)"
      },
      {
        "feature": "Dominant Character Encoding",
        "smi": "Legacy ANSI: EUC-KR, CP949 (Korean), Windows-1252",
        "srt": "Standard Unicode UTF-8 without BOM"
      },
      {
        "feature": "Modern NLE & Player Compatibility",
        "smi": "Extremely limited (legacy Windows players, KMPlayer, PotPlayer)",
        "srt": "Universal (VLC, Plex, Premiere Pro, DaVinci Resolve, Web)"
      }
    ],
    "koreanEncodingTitle": "Korean SMI Files: Solving EUC-KR and CP949 Mojibake Problems",
    "koreanEncodingSubtitle": "Understand why Korean subtitles often display as corrupted symbols and how our converter guarantees flawless Hangul text.",
    "koreanEncodingText": [
      "One of the most persistent and frustrating challenges when handling Korean SMI subtitles is the phenomenon known as 'mojibake'—where beautifully written Korean Hangul characters appear as random accented European letters (such as '¿©±â', '¾È³çÇÏ¼¿ä'), geometric shapes, or question marks.",
      "This corruption occurs because of historical character encoding standards. During the late 1990s and 2000s in South Korea, Windows computers predominantly saved text files using Microsoft's Code Page 949 (CP949, also known as Unified Hangul Code / UHC), an extension of the EUC-KR 8-bit character encoding. Unlike modern UTF-8 Unicode, which uses variable-length multi-byte sequences to represent all world languages universally, CP949 assigns Korean characters to specific two-byte hex combinations.",
      "When a modern operating system (macOS, iOS, Android, Linux) or international software (VLC, Plex, Adobe Premiere Pro) attempts to read a CP949 file, it assumes the file is encoded in modern UTF-8 or Western Windows-1252. Because the binary bytes do not match UTF-8 sequences, the text decoder misinterprets the bytes, rendering corrupted gibberish.",
      "Our online converter solves this problem at the browser level. Using modern HTML5 FileReader APIs and TextDecoder specifications, our tool natively supports EUC-KR, CP949, and UTF-8 decoding. You can select your file's original encoding with a single click, and our converter accurately translates the raw bytes into crystal-clear Korean Hangul, exporting pristine UTF-8 SubRip (.srt) files that display perfectly on every modern screen."
    ],
    "endTimeCalculationTitle": "How SMI Timestamps Work: The Mechanics of End-Time Calculation",
    "endTimeCalculationSubtitle": "Learn how our parser transforms single millisecond sync tags into compliant SRT start and end intervals.",
    "endTimeCalculationText": [
      "A fundamental difference between SAMI and SRT subtitle formats lies in how cue durations are declared. In an SRT file, every subtitle cue explicitly specifies its exact beginning and end: '00:01:14,250 --> 00:01:17,800'. In contrast, a SAMI file only records the start time in milliseconds: '<SYNC Start=74250>'.",
      "To display subtitles accurately, media players must know when the text should disappear. In professional SAMI authoring, cue clearance is accomplished using a subsequent <SYNC> tag containing an empty paragraph or non-breaking space: '<SYNC Start=77800><P Class=KRCC>&nbsp;'. When the media player reaches 77,800 milliseconds, the empty text clears the screen.",
      "However, real-world SAMI files frequently contain formatting inconsistencies. Some files omit clear tags entirely, relying on the next speaker's dialogue to replace the previous cue. In scenes with prolonged silence, music, or dramatic pauses, simply using the next dialogue cue's start time would cause the previous dialogue line to linger on screen for dozens of seconds or even minutes.",
      "Our conversion engine implements intelligent end-time deduction: (1) If a subsequent clear point (<SYNC ...>&nbsp;) exists, its Start millisecond becomes the exact end timestamp. (2) If another dialogue cue follows shortly after, its start time becomes the end time. (3) If the gap between cues exceeds a natural threshold (or if the cue is the final subtitle in the file), our algorithm calculates a natural reading duration based on character length (approximately 15–20 characters per second, bounded between 1.8 and 7.0 seconds). This guarantees that every subtitle cue appears and disappears with natural, professional cadence."
    ],
    "exampleTitle": "Side-by-Side Example: SAMI Input vs. SubRip Output",
    "exampleIntro": "Compare the verbose HTML structure of a Korean SAMI subtitle file with the clean, streamlined SubRip SRT output produced by our converter:",
    "exampleSmiInput": "<SAMI>\n<HEAD>\n<TITLE>Korean Drama Episode 01</TITLE>\n<STYLE TYPE=\"text/css\">\n<!--\nP { font-family:gulim, sans-serif; font-size:14pt; color:white; }\n.KRCC { Name:Korean; lang:ko-KR; SAMIType:CC; }\n.ENCC { Name:English; lang:en-US; SAMIType:CC; }\n-->\n</STYLE>\n</HEAD>\n<BODY>\n<SYNC Start=1500><P Class=KRCC>\n안녕하세요! 오늘 날씨가 참 좋네요.\n<SYNC Start=4800><P Class=KRCC>&nbsp;\n<SYNC Start=6200><P Class=KRCC>\n네, 정말 산책하기 좋은 날씨예요.<BR>우리 공원에 갈까요?\n<SYNC Start=10500><P Class=KRCC>&nbsp;\n</BODY>\n</SAMI>",
    "exampleSrtOutput": "1\n00:00:01,500 --> 00:00:04,800\n안녕하세요! 오늘 날씨가 참 좋네요.\n\n2\n00:00:06,200 --> 00:00:10,500\n네, 정말 산책하기 좋은 날씨예요.\n우리 공원에 갈까요?",
    "exampleExplanation": "In this example, the raw SAMI file contains HTML markup, millisecond timestamps (<SYNC Start=1500>), and non-breaking space clear tags (&nbsp;). Our converter strips the <SAMI>, <HEAD>, and <P> tags, converts <BR> into a standard newline, formats the timestamps into standard hours:minutes:seconds,milliseconds (00:00:01,500 --> 00:00:04,800), and assigns sequential 1-based cue index numbers.",
    "bilingualTitle": "Bilingual SMI Files: Managing Dual-Language Tracks (KRCC & ENCC)",
    "bilingualSubtitle": "How our converter gracefully handles multi-language SAMI files without mixing or losing dialogue text.",
    "bilingualText": [
      "A unique feature of SAMI files popularized by Korean translation groups is embedded bilingual captioning. In educational releases, foreign movie imports, and language-learning broadcasts, each dialogue exchange often includes two simultaneous paragraph tags: '<SYNC Start=5000><P Class=KRCC>안녕하세요!<P Class=ENCC>Hello!'.",
      "If you attempt to convert such a file using naive search-and-replace scripts, both language lines may end up jumbled together into the same subtitle cue, resulting in cluttered three- or four-line subtitles that overwhelm the viewer. Worse, some basic converters simply discard the second language class entirely, causing silent data loss.",
      "Our converter inspects the CSS class declarations inside the file and gives you full control over multilingual extraction: (1) All Tracks: Combines both lines cleanly with standardized spacing. (2) Specific Language Extraction: Allows you to isolate only the Korean track (.KRCC) or only the English track (.ENCC) into its own dedicated .srt file. This flexibility lets you generate separate subtitle files (e.g. video.ko.srt and video.en.srt) perfect for multi-track streaming on Plex or YouTube."
    ],
    "ffmpegTitle": "Command-Line Automation: Converting SMI to SRT Using FFmpeg",
    "ffmpegSubtitle": "Execute fast batch subtitle conversions directly from your terminal or command prompt using FFmpeg.",
    "ffmpegCommand": "ffmpeg -sub_charenc CP949 -i input.smi -c:s srt output.srt",
    "ffmpegExplanation": [
      "For video engineers, server administrators, and power users with large collections of subtitle archives, the open-source multimedia framework FFmpeg provides built-in command-line subtitle conversion capabilities.",
      "To convert a standard UTF-8 encoded SMI file, use: 'ffmpeg -i input.smi -c:s srt output.srt'. FFmpeg will parse the sync points and export a standard SubRip subtitle track.",
      "If your input file is a legacy Korean SAMI file encoded in CP949 / EUC-KR, you MUST explicitly tell FFmpeg which character encoding to read using the '-sub_charenc' flag: 'ffmpeg -sub_charenc CP949 -i input.smi -c:s srt output.srt'. Failing to supply the sub_charenc parameter will result in corrupted mojibake characters in the output file.",
      "While FFmpeg is extraordinarily powerful for automated batch scripts across hundreds of files, our browser-based online tool offers the exact same mathematical parsing precision without requiring command-line installations, terminal configuration, or binary downloads."
    ],
    "useCasesTitle": "Common Real-World Use Cases for SMI to SRT Conversion",
    "useCasesSubtitle": "Discover how creators, translators, and media archivists rely on SMI to SRT conversion every day.",
    "useCasesList": [
      {
        "title": "Streaming K-Dramas & Classic Cinema on Smart TVs",
        "description": "Smart TVs (Samsung Tizen, LG webOS) and streaming apps like Plex cannot render legacy .smi files. Converting to .srt enables flawless subtitle playback on big screens."
      },
      {
        "title": "Importing Captions into Premiere Pro & DaVinci Resolve",
        "description": "Professional video editors do not accept SAMI files. Converting to standard SubRip allows video editors to drag captions directly onto their video timelines."
      },
      {
        "title": "Modernizing Media Libraries (Plex, Emby, Jellyfin)",
        "description": "Convert legacy subtitle collections to universal SRT format to enable instant direct-play without triggering CPU-intensive server transcoding."
      },
      {
        "title": "Multilingual Archiving & Translation Localization",
        "description": "Computer-Assisted Translation (CAT) tools and translation agencies require standard SRT or VTT formats for subtitle localization and dubbing workflows."
      },
      {
        "title": "Extracting Subtitles for AI Transcription & LLM Training",
        "description": "Clean SRT text strips away archaic HTML styling tags, providing pure dialogue transcripts ideal for text search, indexing, and NLP language models."
      },
      {
        "title": "Mobile Playback on iPhone, iPad, and Android",
        "description": "Mobile video players like Infuse, VLC for Mobile, and MX Player natively synchronize with .srt files, providing effortless movie watching on the go."
      }
    ],
    "troubleshootTitle": "Troubleshooting Common SMI to SRT Conversion Issues",
    "troubleshootSubtitle": "Diagnose and resolve common problems encountered when converting legacy SAMI files.",
    "troubleshootTips": [
      {
        "issue": "Korean Text Displays as Broken Symbols or Question Marks (Mojibake)",
        "cause": "The original .smi file was saved in legacy Korean ANSI encoding (EUC-KR or CP949) rather than modern UTF-8 Unicode.",
        "solution": "In our converter, select 'EUC-KR / CP949 (Korean)' in the encoding dropdown before uploading or converting. The tool will decode the raw bytes into authentic Korean Hangul."
      },
      {
        "issue": "Subtitles Linger Too Long on Screen (Overlapping Cues)",
        "cause": "The SAMI file is missing explicit clear tags (<SYNC ...>&nbsp;), causing the previous cue to display until the next dialogue point.",
        "solution": "Our converter automatically caps cue durations at a sensible reading limit (maximum 7 seconds). Ensure 'Normalize Whitespace' is enabled."
      },
      {
        "issue": "Both Korean and English Dialogue Mixed in Every Subtitle",
        "cause": "The file is a bilingual SAMI file with both <P Class=KRCC> and <P Class=ENCC> tags in the same sync block.",
        "solution": "Use the Language Track dropdown in our settings panel to select either 'Korean (KRCC)' or 'English (ENCC)' to generate a clean, single-language SRT file."
      },
      {
        "issue": "Raw HTML Code like <font color=\"red\"> Appears in the SRT",
        "cause": "The SMI file contains inline HTML formatting tags that have no direct counterpart in basic SubRip subtitles.",
        "solution": "Enable 'Clean HTML / SAMI Tags' in our settings. The converter will automatically strip font, paragraph, and span tags while keeping dialogue intact."
      }
    ],
    "conclusionTitle": "Convert Your SMI Subtitles to Clean SRT Today",
    "conclusionText": [
      "The SAMI (.smi) format holds an honorable place in multimedia history, having powered captioning and digital entertainment for millions of viewers across South Korea and around the world for over two decades. However, the demands of modern digital video require universal interoperability, clean typography, and seamless cross-platform performance.",
      "With our online SMI to SRT Converter, modernizing your subtitle archives has never been easier. Whether you are preserving classic Korean cinema, preparing captions for Adobe Premiere Pro, or streaming foreign series on your Smart TV via Plex, our tool delivers instant, millisecond-accurate conversion with 100% in-browser privacy.",
      "Paste your SAMI code or drop your .smi file into the converter above to generate flawless, ready-to-use SubRip (.srt) subtitles in seconds."
    ]
  },
  "es": {
    "introTitle": "Guía Completa para Convertir Subtítulos SMI (SAMI) a SRT",
    "introSubtitle": "Domina la conversión de subtítulos Microsoft SAMI (.smi) al formato estándar y universal SubRip (.srt). Aprende cómo funciona la estructura basada en HTML de SAMI, cómo calcular tiempos de fin precisos, cómo solucionar problemas de codificación coreana EUC-KR / CP949 sin caracteres extraños (mojibake) y cómo importar subtítulos en Premiere Pro, DaVinci Resolve, Final Cut Pro y VLC.",
    "introText": [
      "En la historia de la informática multimedia, los formatos de subtítulos han evolucionado junto con los reproductores de video. A finales de los años 90, Microsoft presentó la especificación SAMI (Synchronized Accessible Media Interchange), identificada por la extensión .smi o .sami, para ofrecer subtítulos enriquecidos y accesibles en Windows Media Player. SAMI fue revolucionario: basado en HTML y CSS, permitía estilos tipográficos avanzados, colores, tamaños personalizados y múltiples pistas de idiomas simultáneas.",
      "Donde el formato SAMI alcanzó su mayor impacto técnico y cultural fue en Corea del Sur. Durante el auge del internet de banda ancha a principios de los 2000, las comunidades coreanas de fansubbing y las cadenas de medios adoptaron .smi como el estándar absoluto para series de televisión (K-dramas), cine y anime. Hasta el día de hoy, millones de episodios y archivos históricos existen exclusivamente en formato SAMI (.smi).",
      "Sin embargo, los flujos de trabajo actuales han migrado completamente hacia estándares abiertos y universales. Hoy en día, SubRip (.srt) es el estándar mundial indiscutible para reproductores como VLC y Plex, plataformas como YouTube y Netflix, y suites de edición profesional como Adobe Premiere Pro, DaVinci Resolve y Final Cut Pro. Prácticamente ninguna de estas herramientas modernas admite archivos SAMI nativamente.",
      "Convertir SMI a SRT resuelve esta barrera tecnológica. Debido a que SAMI utiliza código HTML, marcas de tiempo en milisegundos sin tiempo de fin y codificaciones antiguas como EUC-KR o CP949, la conversión manual genera desfases y textos ilegibles. Esta guía técnica detalla la arquitectura de ambos formatos, el cálculo matemático de tiempos, la solución a problemas de codificación y las mejores prácticas de edición y reproducción."
    ],
    "whatIsTitle": "¿Qué es un Archivo SMI (SAMI)? Estructura del Estándar de Microsoft",
    "whatIsText": [
      "Un archivo SMI (.smi), conocido también por sus siglas SAMI (Synchronized Accessible Media Interchange), es un documento de texto estructurado basado en la sintaxis de HTML y XML. Microsoft lanzó la versión 1.0 de SAMI en 1998 como parte de sus tecnologías Windows Media para proporcionar subtítulos sincronizados y accesibilidad.",
      "Estructuralmente, un archivo SMI se asemeja a una página web. Comienza con una etiqueta <SAMI>, contiene una sección <HEAD> con hojas de estilo CSS (<STYLE TYPE=\"text/css\">) y agrupa todos los subtítulos dentro de una sección <BODY>. En la cabecera CSS se definen la fuente tipográfica (Gulim, Arial, sans-serif), colores, tamaños y márgenes. Cada idioma se define como una clase CSS independiente, por ejemplo .KRCC para subtítulos en coreano o .ENCC para inglés.",
      "Dentro del <BODY>, los subtítulos se organizan mediante etiquetas <SYNC Start=#####>, donde el atributo Start indica el tiempo de aparición en milisegundos absolutos (por ejemplo, <SYNC Start=15200> para 15,2 segundos). A continuación, una etiqueta de párrafo (<P Class=KRCC>) especifica el idioma, seguida del texto del diálogo. Los saltos de línea se indican mediante etiquetas <BR>.",
      "SubRip (.srt), en comparación, fue diseñado como un formato limpio e independiente de árboles HTML. Un archivo SRT consta de bloques numerados (1, 2, 3...), marcas de tiempo de reloj con inicio y fin unidos por una flecha (00:00:15,200 --> 00:00:18,500), el texto del diálogo y líneas en blanco separadoras. Al ser universalmente compatible, convertir SMI a SRT garantiza que tus subtítulos funcionen en cualquier dispositivo."
    ],
    "whyConvertTitle": "¿Por Qué Convertir Subtítulos SMI a SRT?",
    "whyConvertSubtitle": "Descubre las ventajas clave de transformar subtítulos SAMI (.smi) en archivos universales SubRip (.srt).",
    "whyConvertReasons": [
      {
        "title": "Compatibilidad Universal en Dispositivos Modernos",
        "description": "Smart TVs (Samsung Tizen, LG webOS, Android TV), cajas de streaming (Apple TV, Roku, Fire TV) y móviles no leen archivos .smi. SubRip (.srt) funciona de forma nativa en todos ellos."
      },
      {
        "title": "Integración Completa con Editores de Video",
        "description": "Programas profesionales como Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro y CapCut no admiten .smi. Convertir a .srt te permite arrastrar los subtítulos directamente a la línea de tiempo."
      },
      {
        "title": "Texto Limpio en Unicode UTF-8 sin Errores",
        "description": "Los archivos SMI coreanos antiguos usan codificaciones ANSI (EUC-KR / CP949) que provocan caracteres dañados (mojibake) en sistemas modernos. La conversión genera archivos SRT en UTF-8 perfecto."
      },
      {
        "title": "Separación de Pistas Bilingües",
        "description": "Muchos archivos SAMI contienen coreano e inglés juntos. Al convertir a SRT puedes separar cada idioma en un archivo individual, evitando sobrecargar la pantalla."
      },
      {
        "title": "Transmisión Eficiente en Plex, Emby y Jellyfin",
        "description": "Los servidores multimedia reproducen archivos .srt de forma directa sin transcodificar video, ahorrando recursos de procesador y evitando pausas por almacenamiento en búfer."
      },
      {
        "title": "Preparado para Redes Sociales y Plataformas Web",
        "description": "YouTube, Vimeo, Facebook, Twitter/X y LinkedIn exigen formato .srt para subir subtítulos. Convertir tus archivos SMI garantiza compatibilidad inmediata en la web."
      }
    ],
    "howToTitle": "Cómo Convertir SMI a SRT Online en 3 Sencillos Pasos",
    "howToSubtitle": "Sigue estas instrucciones paso a paso para transformar tus archivos SAMI en subtítulos SRT válidos en cuestión de segundos.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Sube o Pega tu Archivo SMI / SAMI",
        "description": "Arrastra y suelta tu archivo .smi en la zona de carga, haz clic en Explorar Archivos o pega el código SAMI directamente en el cuadro de texto."
      },
      {
        "step": "2",
        "title": "Selecciona Idioma y Opciones de Codificación",
        "description": "Si el archivo contiene varios idiomas (p. ej. KRCC y ENCC), elige la pista deseada. Selecciona la codificación (UTF-8, EUC-KR o CP949) para asegurar caracteres legibles."
      },
      {
        "step": "3",
        "title": "Descarga tu Archivo SRT Convertido",
        "description": "Revisa la vista previa y haz clic en Descargar .SRT para guardar el archivo inmediatamente, o copia el texto al portapapeles para tu editor de video."
      }
    ],
    "differenceTitle": "Comparación Técnica: SMI (SAMI) frente a SubRip (SRT)",
    "differenceSubtitle": "Analiza las diferencias arquitectónicas y estructurales entre el formato SAMI de Microsoft y el estándar SubRip.",
    "differenceTable": [
      {
        "feature": "Desarrollador y Origen",
        "smi": "Microsoft Corporation (1998, para Windows Media Player)",
        "srt": "Comunidad SubRip (Finales de los 90, para ripeo de DVD)"
      },
      {
        "feature": "Estructura Base",
        "smi": "Documento HTML / XML con bloque de estilos CSS <STYLE>",
        "srt": "Texto plano estructurado en bloques secuenciales"
      },
      {
        "feature": "Marcas de Tiempo",
        "smi": "Enteros en milisegundos desde el inicio (<SYNC Start=12500>)",
        "srt": "Tiempos de reloj (HH:MM:SS,mmm --> HH:MM:SS,mmm)"
      },
      {
        "feature": "Tiempo de Fin del Subtítulo",
        "smi": "Implícito: determinado por el siguiente <SYNC> o etiqueta &nbsp;",
        "srt": "Explícito: inicio y fin declarados en cada línea de tiempo"
      },
      {
        "feature": "Saltos de Línea",
        "smi": "Etiquetas HTML (<BR>, <br>, <br/>)",
        "srt": "Saltos de línea estándar (\\n)"
      },
      {
        "feature": "Estilos Visuales",
        "smi": "CSS integrado para fuentes, colores, tamaños y márgenes",
        "srt": "Etiquetas básicas (<i>, <b>, <u>) o texto plano"
      },
      {
        "feature": "Pistas Multilingües",
        "smi": "Nativo en un solo archivo (<P Class=KRCC>, <P Class=ENCC>)",
        "srt": "Archivos independientes por idioma (pelicula.es.srt)"
      },
      {
        "feature": "Codificación Habitual",
        "smi": "ANSI heredado: EUC-KR, CP949 (coreano), Windows-1252",
        "srt": "Unicode UTF-8 estándar sin BOM"
      },
      {
        "feature": "Compatibilidad Actual",
        "smi": "Muy limitada (reproductores heredados de Windows)",
        "srt": "Universal (VLC, Plex, Smart TVs, Premiere Pro, Web)"
      }
    ],
    "koreanEncodingTitle": "Subtítulos Coreanos SMI: Solución a Problemas de Codificación EUC-KR y CP949",
    "koreanEncodingSubtitle": "Descubre por qué los subtítulos coreanos a menudo muestran símbolos extraños y cómo nuestro convertidor asegura caracteres hangul limpios.",
    "koreanEncodingText": [
      "Uno de los problemas más frecuentes al abrir subtítulos SMI coreanos es el 'mojibake': las palabras en coreano se transforman en símbolos extraños, letras europeas con acentos raros ('¿©±â', '¾È³çÇÏ¼¿ä') o signos de interrogación.",
      "Esto ocurre debido a los estándares de codificación históricos. Durante los años 2000 en Corea del Sur, los archivos de texto se guardaban con la página de códigos Windows-949 (CP949) o EUC-KR en lugar de UTF-8 Unicode. A diferencia de UTF-8, que utiliza secuencias de longitud variable para todos los idiomas del mundo, CP949 asigna caracteres coreanos a combinaciones específicas de dos bytes.",
      "Cuando un sistema operativo moderno (macOS, iOS, Android, Linux) o un programa como VLC intenta leer un archivo CP949 asumiendo que es UTF-8, los bytes no coinciden y el texto se vuelve ilegible.",
      "Nuestro convertidor soluciona este problema directamente en el navegador. Utilizando las API modernas de decodificación de texto, nuestro sistema admite decodificación nativa de EUC-KR, CP949 y UTF-8. Solo tienes que seleccionar la codificación adecuada y el convertidor reconstruirá los caracteres hangul originales para guardarlos en un archivo SRT limpio en UTF-8."
    ],
    "endTimeCalculationTitle": "Cálculo de Tiempos en SMI: Cómo se Determina el Fin de Cada Subtítulo",
    "endTimeCalculationSubtitle": "Aprende cómo nuestro motor de conversión deduce los intervalos exactos de inicio y fin para el formato SRT.",
    "endTimeCalculationText": [
      "Una diferencia fundamental entre SAMI y SRT radica en cómo se indican los tiempos. En un archivo SRT, cada subtítulo declara exactamente cuándo aparece y cuándo desaparece: '00:01:14,250 --> 00:01:17,800'. En SAMI, en cambio, solo se indica el tiempo de inicio en milisegundos: '<SYNC Start=74250>'.",
      "Para saber cuándo debe desaparecer el subtítulo de la pantalla, los autores de SAMI colocan un punto de sincronización posterior con un espacio en blanco: '<SYNC Start=77800><P Class=KRCC>&nbsp;'. Al llegar a los 77.800 milisegundos, el reproductor borra el texto de la pantalla.",
      "No obstante, muchos archivos SMI carecen de etiquetas explícitas de borrado y confían en que el siguiente diálogo reemplace al anterior. Si hay una escena con música o silencio prolongado, mantener el subtítulo hasta el siguiente diálogo haría que una frase permanezca en pantalla durante minutos de forma errónea.",
      "Nuestro motor aplica deducción inteligente: (1) Si existe un punto de borrado con &nbsp;, se utiliza como tiempo final exacto. (2) Si sigue otro diálogo cercano, su tiempo de inicio se convierte en el fin del actual. (3) Si el intervalo supera el tiempo normal de lectura, el convertidor calcula una duración natural basada en el número de caracteres (entre 1,8 y 7,0 segundos), garantizando un ritmo de visualización profesional."
    ],
    "exampleTitle": "Ejemplo Comparativo: Código SAMI frente a Resultado SubRip SRT",
    "exampleIntro": "Compara el código HTML de un archivo SAMI coreano con la salida limpia en formato SubRip SRT generada por nuestro convertidor:",
    "exampleSmiInput": "<SAMI>\n<HEAD>\n<TITLE>Episodio 01 K-Drama</TITLE>\n<STYLE TYPE=\"text/css\">\n<!--\nP { font-family:gulim, sans-serif; font-size:14pt; color:white; }\n.KRCC { Name:Korean; lang:ko-KR; SAMIType:CC; }\n.ENCC { Name:English; lang:en-US; SAMIType:CC; }\n-->\n</STYLE>\n</HEAD>\n<BODY>\n<SYNC Start=1500><P Class=KRCC>\n안녕하세요! 오늘 날씨가 참 좋네요.\n<SYNC Start=4800><P Class=KRCC>&nbsp;\n<SYNC Start=6200><P Class=KRCC>\n네, 정말 산책하기 좋은 날씨예요.<BR>우리 공원에 갈까요?\n<SYNC Start=10500><P Class=KRCC>&nbsp;\n</BODY>\n</SAMI>",
    "exampleSrtOutput": "1\n00:00:01,500 --> 00:00:04,800\n안녕하세요! 오늘 날씨가 참 좋네요.\n\n2\n00:00:06,200 --> 00:00:10,500\n네, 정말 산책하기 좋은 날씨예요.\n우리 공원에 갈까요?",
    "exampleExplanation": "En este ejemplo, el archivo SAMI original contiene marcas HTML, marcas de tiempo en milisegundos (<SYNC Start=1500>) y etiquetas de borrado (&nbsp;). Nuestro convertidor elimina las etiquetas innecesarias, convierte <BR> en un salto de línea natural, formatea los tiempos al estándar HH:MM:SS,mmm y asigna números correlativos a cada subtítulo.",
    "bilingualTitle": "Archivos SMI Bilingües: Gestión de Pistas Dobles (KRCC y ENCC)",
    "bilingualSubtitle": "Cómo nuestro convertidor separa pistas multilingües sin mezclar diálogos ni perder información.",
    "bilingualText": [
      "Una característica muy utilizada en los archivos SAMI es la inclusión de subtítulos bilingües. En series o películas extranjeras, cada punto de sincronización suele contener dos etiquetas: '<SYNC Start=5000><P Class=KRCC>안녕하세요!<P Class=ENCC>Hello!'.",
      "Si se convierte un archivo de este tipo con herramientas básicas, ambos idiomas terminan fusionados en el mismo subtítulo, generando bloques de tres o cuatro líneas que saturan la pantalla. En otros casos, el segundo idioma se pierde por completo.",
      "Nuestro convertidor detecta las clases CSS del archivo y te da control total: puedes exportar todas las líneas combinadas o aislar únicamente la pista en coreano (.KRCC) o en inglés (.ENCC). De este modo, puedes generar archivos independientes (pelicula.ko.srt y pelicula.en.srt) perfectos para plataformas como Plex o YouTube."
    ],
    "ffmpegTitle": "Automatización por Línea de Comandos: Convertir SMI a SRT con FFmpeg",
    "ffmpegSubtitle": "Realiza conversiones por lotes directamente desde la terminal o consola de comandos usando FFmpeg.",
    "ffmpegCommand": "ffmpeg -sub_charenc CP949 -i entrada.smi -c:s srt salida.srt",
    "ffmpegExplanation": [
      "Para usuarios avanzados y administradores con grandes colecciones de subtítulos, la herramienta de código abierto FFmpeg permite convertir subtítulos mediante la línea de comandos.",
      "Para convertir un archivo SMI con codificación estándar UTF-8, ejecuta: 'ffmpeg -i entrada.smi -c:s srt salida.srt'.",
      "Si el archivo proviene de Corea y está codificado en CP949 o EUC-KR, es fundamental indicar la codificación con el parámetro '-sub_charenc': 'ffmpeg -sub_charenc CP949 -i entrada.smi -c:s srt salida.srt'. Sin este parámetro, el texto coreano resultará dañado.",
      "Aunque FFmpeg es excelente para procesar cientos de archivos por lotes, nuestro convertidor web ofrece la misma precisión matemática de forma instantánea sin necesidad de instalar programas ni usar comandos de consola."
    ],
    "useCasesTitle": "Casos de Uso Habituales para la Conversión de SMI a SRT",
    "useCasesSubtitle": "Descubre cómo traductores, editores y cinéfilos aprovechan la conversión de SMI a SRT a diario.",
    "useCasesList": [
      {
        "title": "Ver K-Dramas y Cine Clásico en Smart TVs",
        "description": "Las televisiones inteligentes y aplicaciones como Plex no leen subtítulos .smi. Convertir a .srt permite disfrutar de subtítulos impecables en pantalla grande."
      },
      {
        "title": "Edición de Video en Premiere Pro y DaVinci Resolve",
        "description": "Los editores de video profesionales no aceptan archivos SAMI. La conversión a SubRip permite arrastrar los subtítulos directamente sobre la línea de tiempo."
      },
      {
        "title": "Modernización de Servidores Multimedia (Plex, Jellyfin)",
        "description": "Convierte tus subtítulos antiguos a SRT para habilitar reproducción directa sin sobrecargar el procesador del servidor con transcodificación."
      },
      {
        "title": "Archivado y Localización Profesional",
        "description": "Las herramientas de traducción asistida (CAT) y agencias de subtitulaje requieren formatos estándar como SRT o VTT para procesos de traducción y doblaje."
      },
      {
        "title": "Extracción de Texto para Modelos de IA y Transcripción",
        "description": "El formato SRT elimina el código HTML antiguo, dejando únicamente diálogos limpios ideales para indexación, búsqueda y procesamiento de lenguaje natural."
      },
      {
        "title": "Reproducción en Dispositivos Móviles (iPhone, iPad, Android)",
        "description": "Reproductores móviles como Infuse, VLC y MX Player se sincronizan perfectamente con archivos .srt para ver películas en cualquier lugar."
      }
    ],
    "troubleshootTitle": "Solución de Problemas Frecuentes en la Conversión de SMI a SRT",
    "troubleshootSubtitle": "Identifica y resuelve los errores más habituales al procesar archivos SAMI antiguos.",
    "troubleshootTips": [
      {
        "issue": "El texto en coreano aparece como caracteres extraños o signos de interrogación (mojibake)",
        "cause": "El archivo .smi original fue guardado con codificación ANSI coreana (EUC-KR o CP949) en lugar de UTF-8 Unicode.",
        "solution": "En nuestro convertidor, selecciona 'EUC-KR / CP949 (Coreano)' en el menú desplegable de codificación antes de convertir para recuperar el texto original."
      },
      {
        "issue": "Los subtítulos duran demasiado tiempo en pantalla",
        "cause": "El archivo carece de etiquetas de borrado (<SYNC ...>&nbsp;), lo que hace que el texto se mantenga visible hasta la siguiente frase.",
        "solution": "Nuestro convertidor limita automáticamente la duración máxima a un tiempo de lectura natural (máximo 7 segundos). Asegúrate de activar 'Normalizar Espacios'."
      },
      {
        "issue": "Los diálogos en coreano e inglés aparecen mezclados en el mismo subtítulo",
        "cause": "El archivo es bilingüe y contiene etiquetas <P Class=KRCC> y <P Class=ENCC> en el mismo bloque.",
        "solution": "Usa el selector de pista de idioma para elegir solo 'Coreano (KRCC)' o solo 'Inglés (ENCC)' y generar un archivo SRT limpio de un solo idioma."
      },
      {
        "issue": "Aparecen etiquetas como <font color=\"red\"> en el archivo SRT final",
        "cause": "El archivo SAMI contiene etiquetas de estilo HTML que no son parte de los subtítulos estándar SubRip.",
        "solution": "Activa la opción 'Limpiar Etiquetas HTML / SAMI' en el panel de configuración para eliminar el código HTML y conservar solo el texto del diálogo."
      }
    ],
    "conclusionTitle": "Convierte tus Subtítulos SMI a SRT Hoy Mismo",
    "conclusionText": [
      "El formato SAMI (.smi) ocupa un lugar destacado en la historia multimedia, habiendo permitido que millones de espectadores en Corea del Sur y en todo el mundo disfrutaran de cine y series durante más de dos décadas. Sin embargo, las plataformas actuales exigen compatibilidad universal y archivos ligeros.",
      "Con nuestro convertidor online de SMI a SRT, actualizar tus subtítulos es más sencillo que nunca. Ya sea para preservar clásicos del cine coreano, editar video en Premiere Pro o ver series en tu Smart TV con Plex, nuestra herramienta te ofrece una conversión instantánea y con total privacidad en tu navegador.",
      "Pega tu código SAMI o arrastra tu archivo .smi en el convertidor superior para obtener subtítulos SubRip (.srt) impecables en segundos."
    ]
  },
  "pt": {
    "introTitle": "Guia Completo para Converter Legendas SMI (SAMI) em SRT",
    "introSubtitle": "Domine a conversão de legendas Microsoft SAMI (.smi) para o formato universal SubRip (.srt). Saiba como funciona a arquitetura baseada em HTML do SAMI, como calcular tempos finais exatos, como tratar codificações coreanas EUC-KR / CP949 sem caracteres corrompidos (mojibake) e como importar legendas no Premiere Pro, DaVinci Resolve, Final Cut Pro e VLC.",
    "introText": [
      "Na história do multimídia digital, os formatos de legendas acompanharam o desenvolvimento dos reprodutores de vídeo. No final dos anos 1990, a Microsoft introduziu a especificação SAMI (Synchronized Accessible Media Interchange), com extensão .smi ou .sami, para fornecer acessibilidade e legendas estilizadas no Windows Media Player. O SAMI foi pioneiro: baseado no modelo de documentos HTML e CSS, possibilitou personalização tipográfica, cores, tamanhos de fonte e suporte a vários idiomas simultâneos.",
      "Foi na Coreia do Sul que o formato SAMI alcançou sua maior expressão cultural e técnica. Durante a expansão da internet banda larga no início dos anos 2000, as comunidades de fansubbing e os distribuidores coreanos adotaram o .smi como o padrão absoluto para transmissões de TV, produções cinematográficas e séries (K-dramas). Até hoje, milhões de episódios e acervos históricos permanecem arquivados exclusivamente no formato SAMI (.smi).",
      "No entanto, os ecossistemas atuais exigem formatos leves, abertos e multiplataforma. Hoje, o SubRip (.srt) é a referência global incontestável para reprodutores como VLC e Plex, plataformas como YouTube e Netflix e programas de edição como Adobe Premiere Pro, DaVinci Resolve e Final Cut Pro. Praticamente nenhum desses softwares suporta o formato herdado SAMI da Microsoft.",
      "Converter SMI para SRT elimina essa barreira. Como o formato SAMI utiliza tags HTML, marcas de tempo em milissegundos sem hora de encerramento e codificações legadas como EUC-KR e CP949, a conversão manual é sujeita a falhas de sincronia e texto corrompido. Este guia técnico detalha a arquitetura dos formatos, a matemática de cálculo de tempo, a resolução de problemas de codificação e as práticas recomendadas de edição."
    ],
    "whatIsTitle": "O Que é um Arquivo SMI (SAMI)? Estrutura do Padrão Microsoft",
    "whatIsText": [
      "Um arquivo SMI (.smi), também conhecido pelo acrônimo SAMI (Synchronized Accessible Media Interchange), é um documento de texto estruturado fundamentado na sintaxe HTML e XML. A Microsoft publicou a especificação SAMI 1.0 em 1998 como parte das tecnologias Windows Media para fornecer acessibilidade sincronizada a transmissões de mídia digital.",
      "Estruturalmente, um arquivo SMI se comporta como uma página da web. Inicia-se com a tag <SAMI>, contém uma seção <HEAD> com folhas de estilo CSS (<STYLE TYPE=\"text/css\">) e abriga as legendas dentro de uma seção <BODY>. Na folha CSS, definem-se tipografia (Gulim, Arial, sans-serif), cores, tamanhos e classes. Cada idioma é declarado como uma classe CSS separada, como .KRCC para coreano ou .ENCC para inglês.",
      "Dentro do <BODY>, as legendas são organizadas por tags <SYNC Start=#####>, onde o Start indica o tempo de exibição em milissegundos absolutos (por exemplo, <SYNC Start=15200> para 15,2 segundos). Em seguida, a tag de parágrafo (<P Class=KRCC>) identifica o idioma falado, seguida do texto da fala. Quebras de linha são feitas com tags HTML <BR>.",
      "Em comparação, o SubRip (.srt) foi projetado como um formato limpo e independente de árvores HTML. Um arquivo SRT adota blocos numéricos sequenciais (1, 2, 3...), tempos de relógio com início e fim unidos por uma seta (00:00:15,200 --> 00:00:18,500), o texto do diálogo e linhas em branco separadoras. Sendo universalmente aceito, converter SMI em SRT garante compatibilidade com qualquer reprodutor ou dispositivo."
    ],
    "whyConvertTitle": "Por Que Converter Legendas SMI para SRT?",
    "whyConvertSubtitle": "Descubra os principais motivos para transformar arquivos SAMI (.smi) em legendas padrão SubRip (.srt).",
    "whyConvertReasons": [
      {
        "title": "Compatibilidade Universal com Dispositivos Modernos",
        "description": "Smart TVs (Samsung Tizen, LG webOS, Android TV), aparelhos de streaming (Apple TV, Roku, Fire TV) e celulares não leem arquivos .smi. O SubRip (.srt) roda de forma nativa em qualquer tela."
      },
      {
        "title": "Suporte Total nos Principais Editores de Vídeo",
        "description": "Softwares profissionais como Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro e CapCut recusam arquivos .smi. Ao converter para .srt, você pode arrastar as legendas diretamente para a timeline."
      },
      {
        "title": "Texto Perfeito em Unicode UTF-8 sem Falhas",
        "description": "Arquivos SMI coreanos antigos usam codificações ANSI (EUC-KR / CP949) que geram caracteres ilegíveis (mojibake) em sistemas modernos. A conversão gera arquivos SRT em UTF-8 limpo."
      },
      {
        "title": "Separação de Faixas de Idioma em Arquivos Bilíngues",
        "description": "Muitos arquivos SAMI trazem coreano e inglês no mesmo documento. Ao converter para SRT, é possível isolar cada idioma em um arquivo separado, evitando sobreposição de texto na tela."
      },
      {
        "title": "Transmissão Sem Transcodificação no Plex e Jellyfin",
        "description": "Servidores de mídia como Plex, Emby e Jellyfin reproduzem arquivos .srt diretamente sem exigir transcodificação de vídeo pesada pela CPU."
      },
      {
        "title": "Pronto para Publicação em Redes Sociais",
        "description": "YouTube, Vimeo, Facebook, Twitter/X e LinkedIn exigem legendas no formato .srt. Converter suas legendas SMI assegura compatibilidade imediata com a web."
      }
    ],
    "howToTitle": "Como Converter SMI para SRT Online em 3 Passos Simples",
    "howToSubtitle": "Siga estas instruções passo a passo para transformar seus arquivos SAMI em legendas SRT válidas em poucos segundos.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Envie ou Cole Seu Arquivo SMI / SAMI",
        "description": "Arraste e solte seu arquivo .smi na área de upload, clique em Procurar Arquivos ou cole o código SAMI diretamente na caixa de entrada de texto."
      },
      {
        "step": "2",
        "title": "Selecione as Opções de Idioma e Codificação",
        "description": "Caso o arquivo possua múltiplos idiomas (como KRCC e ENCC), escolha a faixa desejada. Selecione a codificação correta (UTF-8, EUC-KR ou CP949) para garantir caracteres legíveis."
      },
      {
        "step": "3",
        "title": "Baixe o Arquivo SRT Convertido",
        "description": "Confira a pré-visualização e clique em Baixar .SRT para salvar seu arquivo imediatamente, ou copie o texto para a área de transferência."
      }
    ],
    "differenceTitle": "Comparação Técnica: SMI (SAMI) versus SubRip (SRT)",
    "differenceSubtitle": "Examine as distinções estruturais entre o formato SAMI da Microsoft e o padrão universal SubRip.",
    "differenceTable": [
      {
        "feature": "Desenvolvedor e Origem",
        "smi": "Microsoft Corporation (1998, para Windows Media Player)",
        "srt": "Comunidade SubRip (Final dos anos 90, para cópia de DVDs)"
      },
      {
        "feature": "Estrutura Fundamental",
        "smi": "Documento HTML / XML com bloco de estilo CSS <STYLE>",
        "srt": "Texto simples estruturado em blocos sequenciais"
      },
      {
        "feature": "Representação de Tempo",
        "smi": "Inteiros em milissegundos a partir do início (<SYNC Start=12500>)",
        "srt": "Tempos de relógio (HH:MM:SS,mmm --> HH:MM:SS,mmm)"
      },
      {
        "feature": "Tempo de Encerramento",
        "smi": "Implícito: determinado pelo próximo <SYNC> ou ponto &nbsp;",
        "srt": "Explícito: início e término declarados em cada legenda"
      },
      {
        "feature": "Quebras de Linha",
        "smi": "Tags HTML (<BR>, <br>, <br/>)",
        "srt": "Quebras de linha convencionais (\\n)"
      },
      {
        "feature": "Estilização Tipográfica",
        "smi": "CSS embutido para fontes, cores, tamanhos e margens",
        "srt": "Tags básicas de formatação (<i>, <b>, <u>) ou texto simples"
      },
      {
        "feature": "Faixas Multilíngues",
        "smi": "Nativo no mesmo arquivo (<P Class=KRCC>, <P Class=ENCC>)",
        "srt": "Arquivos separados por idioma (filme.pt.srt)"
      },
      {
        "feature": "Codificação Comum",
        "smi": "ANSI herdado: EUC-KR, CP949 (coreano), Windows-1252",
        "srt": "Unicode UTF-8 universal sem BOM"
      },
      {
        "feature": "Compatibilidade Atual",
        "smi": "Muito restrita (players herdados no Windows)",
        "srt": "Universal (VLC, Plex, Smart TVs, Premiere Pro, Web)"
      }
    ],
    "koreanEncodingTitle": "Legendas Coreanas SMI: Resolução de Erros de Codificação EUC-KR e CP949",
    "koreanEncodingSubtitle": "Entenda por que legendas em coreano frequentemente exibem caracteres estranhos e como garantir hangul impecável.",
    "koreanEncodingText": [
      "Um dos problemas mais comuns ao lidar com legendas SMI coreanas antigas é o 'mojibake': as palavras em coreano se transformam em símbolos estranhos ('¿©±â', '¾È³çÇÏ¼¿ä') ou pontos de interrogação.",
      "Isso ocorre devido aos padrões históricos de codificação. Nos anos 2000 na Coreia do Sul, os arquivos eram salvos com a página de códigos Windows-949 (CP949) ou EUC-KR em vez de UTF-8 Unicode. Ao contrário do UTF-8, o CP949 associava cada caractere coreano a combinações específicas de dois bytes.",
      "Quando um player moderno (no macOS, iOS, Android ou Linux) tenta ler esses arquivos como UTF-8, os bytes não correspondem e o texto se torna ilegível.",
      "Nosso conversor resolve isso diretamente no navegador. Utilizando decodificação nativa de texto, a ferramenta suporta EUC-KR, CP949 e UTF-8. Basta selecionar a codificação correspondente para restaurar as palavras em coreano e exportar um arquivo SRT limpo em UTF-8."
    ],
    "endTimeCalculationTitle": "Cálculo de Tempos em SMI: Como o Encerramento de Cada Legenda é Determinado",
    "endTimeCalculationSubtitle": "Saiba como nosso motor deduz com precisão os intervalos de início e término para o formato SRT.",
    "endTimeCalculationText": [
      "Uma diferença crucial entre SAMI e SRT está na especificação dos tempos. No formato SRT, cada legenda declara início e término: '00:01:14,250 --> 00:01:17,800'. Já no SAMI, existe apenas o tempo de início: '<SYNC Start=74250>'.",
      "Para que a legenda desapareça na hora certa, os criadores do arquivo inserem um ponto de sincronização seguinte com espaço em branco: '<SYNC Start=77800><P Class=KRCC>&nbsp;'. Ao atingir os 77.800 milissegundos, o reprodutor remove o texto da tela.",
      "Porém, muitos arquivos SMI não contêm tags de limpeza explícitas e dependem da fala seguinte para substituir a anterior. Em momentos de silêncio ou trilha sonora, manter a legenda ativa faria com que o diálogo permanecesse na tela por minutos incorretamente.",
      "Nosso conversor adota dedução inteligente: (1) Se houver ponto de limpeza com &nbsp;, ele é utilizado como tempo final exato. (2) Se houver outra fala logo em seguida, o início dela define o fim da atual. (3) Se o intervalo ultrapassar o tempo natural de leitura, o algoritmo calcula a duração proporcional à quantidade de caracteres (entre 1,8 e 7,0 segundos), garantindo leitura natural."
    ],
    "exampleTitle": "Exemplo Comparativo: Código SAMI versus Resultado SubRip SRT",
    "exampleIntro": "Compare o código HTML de um arquivo SAMI coreano com o formato SubRip SRT limpo gerado pelo nosso conversor:",
    "exampleSmiInput": "<SAMI>\n<HEAD>\n<TITLE>Episódio 01 K-Drama</TITLE>\n<STYLE TYPE=\"text/css\">\n<!--\nP { font-family:gulim, sans-serif; font-size:14pt; color:white; }\n.KRCC { Name:Korean; lang:ko-KR; SAMIType:CC; }\n.ENCC { Name:English; lang:en-US; SAMIType:CC; }\n-->\n</STYLE>\n</HEAD>\n<BODY>\n<SYNC Start=1500><P Class=KRCC>\n안녕하세요! 오늘 날씨가 참 좋네요.\n<SYNC Start=4800><P Class=KRCC>&nbsp;\n<SYNC Start=6200><P Class=KRCC>\n네, 정말 산책하기 좋은 날씨예요.<BR>우리 공원에 갈까요?\n<SYNC Start=10500><P Class=KRCC>&nbsp;\n</BODY>\n</SAMI>",
    "exampleSrtOutput": "1\n00:00:01,500 --> 00:00:04,800\n안녕하세요! 오늘 날씨가 참 좋네요.\n\n2\n00:00:06,200 --> 00:00:10,500\n네, 정말 산책하기 좋은 날씨예요.\n우리 공원에 갈까요?",
    "exampleExplanation": "Neste exemplo, o arquivo SAMI original inclui tags HTML, tempos em milissegundos (<SYNC Start=1500>) e pontos de limpeza (&nbsp;). Nosso conversor remove as tags HTML, converte <BR> em quebra de linha natural, formata os tempos no padrão HH:MM:SS,mmm e enumera as legendas sequencialmente.",
    "bilingualTitle": "Arquivos SMI Bilíngues: Como Gerenciar Faixas Duplas (KRCC e ENCC)",
    "bilingualSubtitle": "Como nosso conversor separa faixas de múltiplos idiomas sem misturar falas nem perder dados.",
    "bilingualText": [
      "Um recurso frequente em arquivos SAMI é o subtitulado bilíngue. Em séries e filmes estrangeiros, cada fala costuma conter duas tags: '<SYNC Start=5000><P Class=KRCC>안녕하세요!<P Class=ENCC>Hello!'.",
      "Se esse arquivo for convertido por métodos simplistas, ambos os idiomas se misturam na mesma legenda, gerando blocos de texto enormes e confusos na tela. Em outros casos, o segundo idioma é descartado silenciosamente.",
      "Nosso conversor identifica as classes CSS do arquivo e oferece controle total: você pode exportar todas as falas ou isolar apenas a faixa em coreano (.KRCC) ou em inglês (.ENCC), gerando arquivos separados (filme.ko.srt e filme.en.srt) ideais para o Plex ou YouTube."
    ],
    "ffmpegTitle": "Automação via Linha de Comando: Converter SMI em SRT com FFmpeg",
    "ffmpegSubtitle": "Execute conversões em lote diretamente do terminal usando o FFmpeg.",
    "ffmpegCommand": "ffmpeg -sub_charenc CP949 -i entrada.smi -c:s srt saida.srt",
    "ffmpegExplanation": [
      "Para usuários avançados com grandes coleções de legendas, o utilitário de código aberto FFmpeg permite realizar conversões diretamente pela linha de comando.",
      "Para converter um arquivo SMI com codificação padrão UTF-8, use: 'ffmpeg -i entrada.smi -c:s srt saida.srt'.",
      "Se o arquivo for coreano e usar CP949 ou EUC-KR, é obrigatório indicar a codificação com o parâmetro '-sub_charenc': 'ffmpeg -sub_charenc CP949 -i entrada.smi -c:s srt saida.srt'. Sem isso, o texto em coreano ficará corrompido.",
      "Embora o FFmpeg seja ótimo para automação em lote, nosso conversor online oferece a mesma precisão sem necessidade de instalar programas ou configurar o terminal."
    ],
    "useCasesTitle": "Casos de Uso Comuns para a Conversão de SMI em SRT",
    "useCasesSubtitle": "Descubra como tradutores, editores e cinéfilos utilizam a conversão de SMI para SRT no dia a dia.",
    "useCasesList": [
      {
        "title": "Assistir a K-Dramas e Clássicos em Smart TVs",
        "description": "Televisores inteligentes e aplicativos como o Plex não reproduzem legendas .smi. A conversão para .srt viabiliza legendas perfeitas na tela da sala."
      },
      {
        "title": "Edição de Vídeo no Premiere Pro e DaVinci Resolve",
        "description": "Editores profissionais não aceitam arquivos SAMI. O formato SubRip permite arrastar as legendas diretamente para a linha do tempo do projeto."
      },
      {
        "title": "Modernização de Acervos no Plex e Jellyfin",
        "description": "Atualize coleções antigas para SRT para garantir reprodução direta sem sobrecarregar o processador do servidor com transcodificações."
      },
      {
        "title": "Trabalhos de Localização e Tradução Profissional",
        "description": "Ferramentas de tradução assistida (CAT) e estúdios de dublagem exigem formatos padrão como SRT ou VTT para tradução e legendagem."
      },
      {
        "title": "Extração de Texto para Modelos de IA e Transcrição",
        "description": "O formato SRT remove códigos HTML antigos, disponibilizando diálogos puros ideais para busca, indexação e processamento de linguagem natural."
      },
      {
        "title": "Reprodução em Dispositivos Móveis (iPhone, iPad, Android)",
        "description": "Reprodutores como Infuse, VLC e MX Player sincronizam nativamente com arquivos .srt, permitindo assistir a filmes em qualquer lugar."
      }
    ],
    "troubleshootTitle": "Solução de Problemas Comuns na Conversão de SMI para SRT",
    "troubleshootSubtitle": "Identifique e resolva os erros mais frequentes ao processar arquivos SAMI antigos.",
    "troubleshootTips": [
      {
        "issue": "O texto em coreano aparece como símbolos estranhos ou interrogações (mojibake)",
        "cause": "O arquivo .smi original foi salvo com codificação ANSI coreana (EUC-KR ou CP949) em vez de UTF-8 Unicode.",
        "solution": "No conversor, selecione 'EUC-KR / CP949 (Coreano)' no menu de codificação antes de converter para restaurar os caracteres corretos."
      },
      {
        "issue": "As legendas permanecem tempo demais na tela",
        "cause": "O arquivo não contém tags de encerramento (<SYNC ...>&nbsp;), fazendo com que a fala fique visível até o próximo diálogo.",
        "solution": "Nosso conversor limita a duração máxima ao tempo de leitura natural (máximo de 7 segundos). Certifique-se de que a opção 'Normalizar Espaços' esteja ativa."
      },
      {
        "issue": "Diálogos em coreano e inglês aparecem misturados na mesma legenda",
        "cause": "O arquivo é bilíngue e traz tags <P Class=KRCC> e <P Class=ENCC> no mesmo bloco.",
        "solution": "Utilize o seletor de faixa de idioma para isolar apenas 'Coreano (KRCC)' ou 'Inglês (ENCC)' e gerar um arquivo SRT limpo de um só idioma."
      },
      {
        "issue": "Aparecem códigos como <font color=\"red\"> no arquivo SRT final",
        "cause": "O arquivo SAMI traz tags HTML que não fazem parte do padrão SubRip SRT.",
        "solution": "Ative a opção 'Limpar Tags HTML / SAMI' nas configurações para eliminar o código HTML e preservar apenas o diálogo."
      }
    ],
    "conclusionTitle": "Converta Suas Legendas SMI para SRT Agora Mesmo",
    "conclusionText": [
      "O formato SAMI (.smi) tem um papel marcante na história do entretenimento digital, tendo levado séries e filmes a milhões de pessoas na Coreia do Sul e no mundo por mais de vinte anos. No entanto, os padrões atuais exigem compatibilidade universal e arquivos leves.",
      "Com nosso conversor online de SMI para SRT, modernizar suas legendas é rápido e fácil. Seja para preservar produções clássicas, editar no Premiere Pro ou assistir na Smart TV com o Plex, nossa ferramenta entrega conversão precisa e com total privacidade no seu navegador.",
      "Cole seu código SAMI ou arraste seu arquivo .smi no conversor acima para obter legendas SubRip (.srt) prontas para uso em poucos segundos."
    ]
  },
  "fr": {
    "introTitle": "Le Guide Complet pour Convertir les Sous-titres SMI (SAMI) en SRT",
    "introSubtitle": "Maîtrisez la conversion des fichiers de sous-titres Microsoft SAMI (.smi) vers le format universel SubRip (.srt). Découvrez le fonctionnement de la structure HTML de SAMI, le calcul précis des temps de fin, la prise en charge des encodages coréens EUC-KR / CP949 sans caractères corrompus (mojibake) et l'intégration dans Premiere Pro, DaVinci Resolve, Final Cut Pro et VLC.",
    "introText": [
      "Dans l'histoire du multimédia numérique, les formats de sous-titres ont évolué en parallèle avec les architectures de lecture vidéo. À la fin des années 1990, Microsoft a introduit la spécification SAMI (Synchronized Accessible Media Interchange), désignée par l'extension .smi ou .sami, pour fournir des sous-titres enrichis et accessibles dans Windows Media Player. SAMI était novateur : reposant sur le modèle HTML et CSS, il permettait une mise en forme typographique avancée, des polices personnalisées, des couleurs et plusieurs pistes de langues simultanées.",
      "C'est en Corée du Sud que le format SAMI a connu son apogée technique et culturelle. Lors de l'essor d'Internet haut débit au début des années 2000, les communautés de fansubbing et les distributeurs coréens ont fait du format .smi le standard incontournable pour les séries télévisées (K-dramas), le cinéma et l'animation. Aujourd'hui encore, des millions d'épisodes et d'archives audiovisuelles existent exclusivement en format SAMI (.smi).",
      "Cependant, les flux de travail modernes exigent des formats légers, universels et ouverts. De nos jours, SubRip (.srt) est la norme internationale incontournable pour les lecteurs comme VLC et Plex, les plateformes comme YouTube et Netflix et les logiciels de montage vidéo tels qu'Adobe Premiere Pro, DaVinci Resolve et Apple Final Cut Pro. Aucun de ces outils modernes ne prend en charge le format propriétaire Microsoft SAMI.",
      "Convertir SMI en SRT comble ce fossé technologique. Étant donné que SAMI repose sur un balisage HTML complexe, des horodatages en millisecondes sans durée de fin explicite et des encodages anciens comme EUC-KR ou CP949, la conversion manuelle entraîne de fréquents décalages et du texte corrompu. Ce guide détaille l'architecture des deux formats, les méthodes de calcul temporel, la gestion des encodages et les bonnes pratiques de montage."
    ],
    "whatIsTitle": "Qu'est-ce qu'un Fichier SMI (SAMI) ? Architecture du Standard Microsoft",
    "whatIsText": [
      "Un fichier SMI (.smi), également appelé SAMI (Synchronized Accessible Media Interchange), est un document texte structuré basé sur la syntaxe HTML et XML. Microsoft a publié la spécification SAMI 1.0 en 1998 pour fournir des sous-titres synchronisés et de l'audiodescription pour les flux multimédias numériques.",
      "Sur le plan structurel, un fichier SMI ressemble à une page web. Il s'ouvre sur une balise <SAMI>, contient une section <HEAD> dotée d'une feuille de style CSS (<STYLE TYPE=\"text/css\">) et regroupe tous les sous-titres dans une section <BODY>. La feuille CSS définit la typographie (Gulim, Arial, sans-serif), les couleurs et les styles. Chaque langue est déclarée comme une classe CSS distincte, par exemple .KRCC pour le coréen ou .ENCC pour l'anglais.",
      "Dans le <BODY>, les répliques sont balisées par des balises <SYNC Start=#####>, où Start représente le moment d'apparition en millisecondes absolues (par exemple, <SYNC Start=15200> pour 15,2 secondes). Une balise de paragraphe (<P Class=KRCC>) indique ensuite la langue du dialogue. Les sauts de ligne sont créés avec des balises <BR>.",
      "SubRip (.srt), quant à lui, a été conçu comme un format indépendant et épuré. Un fichier SRT se compose de blocs numérotés (1, 2, 3...), d'horodatages temporels indiquant début et fin séparés par une flèche (00:00:15,200 --> 00:00:18,500), du texte du dialogue et de lignes vides de séparation. Universellement pris en charge, convertir SMI en SRT garantit la compatibilité avec tous vos appareils."
    ],
    "whyConvertTitle": "Pourquoi Convertir les Sous-titres SMI en SRT ?",
    "whyConvertSubtitle": "Découvrez les bénéfices majeurs de la conversion des fichiers SAMI (.smi) vers le format standard SubRip (.srt).",
    "whyConvertReasons": [
      {
        "title": "Compatibilité Universelle sur Tous les Écrans",
        "description": "Les téléviseurs connectés (Samsung Tizen, LG webOS, Android TV), les passerelles multimédias (Apple TV, Roku, Fire TV) et les smartphones ne lisent pas les fichiers .smi. Le format SubRip (.srt) est lu nativement partout."
      },
      {
        "title": "Intégration Parfaite dans les Logiciels de Montage",
        "description": "Les logiciels de montage professionnels comme Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro et CapCut n'acceptent pas les fichiers .smi. Convertir en .srt vous permet de glisser directement les sous-titres sur votre timeline."
      },
      {
        "title": "Affichage Impeccable en Unicode UTF-8 sans Caractères Corrompus",
        "description": "Les fichiers SMI coréens anciens utilisent souvent les encodages ANSI (EUC-KR / CP949) qui provoquent des caractères illisibles (mojibake). La conversion génère un fichier SRT en UTF-8 universel."
      },
      {
        "title": "Séparation des Pistes Bilingues",
        "description": "De nombreux fichiers SAMI intègrent à la fois le coréen et l'anglais. La conversion vers SRT permet d'isoler chaque langue dans un fichier distinct pour éviter de surcharger l'écran."
      },
      {
        "title": "Lecture Directe Fluide sur Plex, Emby et Jellyfin",
        "description": "Les serveurs multimédias lisent les fichiers .srt en lecture directe sans solliciter le processeur pour un transcodage vidéo gourmand en ressources."
      },
      {
        "title": "Compatibilité avec YouTube et les Réseaux Sociaux",
        "description": "YouTube, Vimeo, Facebook, Twitter/X et LinkedIn exigent des sous-titres au format .srt. Convertir vos fichiers SMI garantit leur compatibilité immédiate avec le web."
      }
    ],
    "howToTitle": "Comment Convertir SMI en SRT en Ligne en 3 Étapes Simples",
    "howToSubtitle": "Suivez ces étapes simples pour transformer vos fichiers SAMI en sous-titres SRT conformes en quelques secondes.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Téléversez ou Collez Votre Fichier SMI / SAMI",
        "description": "Glissez-déposez votre fichier .smi dans la zone de dépôt, cliquez sur Parcourir les fichiers ou collez directement le texte SAMI dans la zone de saisie."
      },
      {
        "step": "2",
        "title": "Sélectionnez la Langue et les Options d'Encodage",
        "description": "Si le fichier contient plusieurs langues (comme KRCC et ENCC), sélectionnez la piste voulue. Choisissez le bon encodage (UTF-8, EUC-KR ou CP949) pour éviter les caractères corrompus."
      },
      {
        "step": "3",
        "title": "Téléchargez le Fichier SRT Converti",
        "description": "Consultez l'aperçu dynamique et cliquez sur Télécharger .SRT pour enregistrer immédiatement votre fichier SubRip, ou copiez le texte vers votre presse-papiers."
      }
    ],
    "differenceTitle": "Comparaison Technique : SMI (SAMI) contre SubRip (SRT)",
    "differenceSubtitle": "Examinez les différences de conception entre le format Microsoft SAMI et le standard universel SubRip.",
    "differenceTable": [
      {
        "feature": "Créateur et Origine",
        "smi": "Microsoft Corporation (1998, pour Windows Media Player)",
        "srt": "Communauté SubRip (Fin des années 90, pour l'extraction de DVD)"
      },
      {
        "feature": "Structure Sous-Jacente",
        "smi": "Document HTML / XML avec bloc de style CSS <STYLE>",
        "srt": "Texte brut structuré en blocs séquentiels"
      },
      {
        "feature": "Horodatage",
        "smi": "Entiers en millisecondes depuis le début (<SYNC Start=12500>)",
        "srt": "Horodatages horaires (HH:MM:SS,mmm --> HH:MM:SS,mmm)"
      },
      {
        "feature": "Fin de la Réplique",
        "smi": "Implicite : déterminée par le prochain <SYNC> ou balise &nbsp;",
        "srt": "Explicite : début et fin spécifiés pour chaque réplique"
      },
      {
        "feature": "Sauts de Ligne",
        "smi": "Balises HTML (<BR>, <br>, <br/>)",
        "srt": "Sauts de ligne standard (\\n)"
      },
      {
        "feature": "Mise en Forme Typographique",
        "smi": "CSS intégré pour les polices, couleurs, tailles et marges",
        "srt": "Balises basiques (<i>, <b>, <u>) ou texte brut"
      },
      {
        "feature": "Prise en Charge Multilingue",
        "smi": "Native dans un seul fichier (<P Class=KRCC>, <P Class=ENCC>)",
        "srt": "Fichiers distincts par langue (film.fr.srt)"
      },
      {
        "feature": "Encodage Courant",
        "smi": "ANSI hérité : EUC-KR, CP949 (coréen), Windows-1252",
        "srt": "Unicode UTF-8 universel sans BOM"
      },
      {
        "feature": "Compatibilité Actuelle",
        "smi": "Très limitée (anciens lecteurs sous Windows)",
        "srt": "Universelle (VLC, Plex, Smart TVs, Premiere Pro, Web)"
      }
    ],
    "koreanEncodingTitle": "Sous-titres Coréens SMI : Résolution des Problèmes d'Encodage EUC-KR et CP949",
    "koreanEncodingSubtitle": "Comprenez pourquoi les sous-titres coréens s'affichent souvent sous forme de symboles incompréhensibles et comment obtenir un texte parfait.",
    "koreanEncodingText": [
      "L'un des soucis récurrents avec les sous-titres SMI coréens est l'apparition de 'mojibake' : les caractères coréens (hangul) se transforment en symboles incohérents ('¿©±â', '¾È³çÇÏ¼¿ä') ou en points d'interrogation.",
      "Ce phénomène découle de l'histoire des encodages informatiques. Dans les années 2000 en Corée du Sud, les fichiers texte étaient sauvegardés sous Windows-949 (CP949) ou EUC-KR plutôt qu'en UTF-8 Unicode. Le format CP949 associait chaque caractère coréen à des paires d'octets spécifiques.",
      "Lorsqu'un lecteur multimédia moderne (sur macOS, iOS, Android ou Linux) tente de lire ces fichiers comme de l'UTF-8, les séquences d'octets ne concordent pas et le texte devient illisible.",
      "Notre convertisseur résout ce problème dans le navigateur. Grâce aux API de décodage de texte, l'outil gère nativement EUC-KR, CP949 et UTF-8. Il suffit de sélectionner l'encodage correspondant pour récupérer le texte coréen d'origine et générer un fichier SRT en UTF-8 impeccable."
    ],
    "endTimeCalculationTitle": "Calcul des Durées en SMI : Comment la Fin de Chaque Sous-titre est Évaluée",
    "endTimeCalculationSubtitle": "Découvrez comment notre algorithme déduit les intervalles de début et de fin pour le format SRT.",
    "endTimeCalculationText": [
      "Une distinction fondamentale entre SAMI et SRT concerne la durée des répliques. Dans un fichier SRT, chaque sous-titre précise son début et sa fin : '00:01:14,250 --> 00:01:17,800'. Dans un fichier SAMI, seul le début est indiqué : '<SYNC Start=74250>'.",
      "Pour effacer le sous-titre à l'écran, les créateurs de fichiers SAMI insèrent un point de synchronisation suivant avec un espace insécable : '<SYNC Start=77800><P Class=KRCC>&nbsp;'. À 77 800 millisecondes, le lecteur masque le texte.",
      "Cependant, de nombreux fichiers SMI omettent ces balises d'effacement et comptent sur le dialogue suivant pour remplacer le précédent. En cas de silence prolongé, maintenir le sous-titre affiché laisserait une phrase à l'écran pendant plusieurs minutes.",
      "Notre outil utilise une déduction intelligente : (1) Si une balise avec &nbsp; est présente, elle définit la fin exacte. (2) Si un autre dialogue suit rapidement, son début marque la fin de la réplique précédente. (3) Si l'intervalle est trop long, le convertisseur calcule une durée de lecture naturelle proportionnelle au nombre de caractères (entre 1,8 et 7,0 secondes), garantissant un rythme fluide."
    ],
    "exampleTitle": "Exemple Comparatif : Code Source SAMI contre Résultat SubRip SRT",
    "exampleIntro": "Comparez la syntaxe HTML d'un fichier SAMI coréen avec le rendu épuré en format SubRip SRT produit par notre convertisseur :",
    "exampleSmiInput": "<SAMI>\n<HEAD>\n<TITLE>Épisode 01 K-Drama</TITLE>\n<STYLE TYPE=\"text/css\">\n<!--\nP { font-family:gulim, sans-serif; font-size:14pt; color:white; }\n.KRCC { Name:Korean; lang:ko-KR; SAMIType:CC; }\n.ENCC { Name:English; lang:en-US; SAMIType:CC; }\n-->\n</STYLE>\n</HEAD>\n<BODY>\n<SYNC Start=1500><P Class=KRCC>\n안녕하세요! 오늘 날씨가 참 좋네요.\n<SYNC Start=4800><P Class=KRCC>&nbsp;\n<SYNC Start=6200><P Class=KRCC>\n네, 정말 산책하기 좋은 날씨예요.<BR>우리 공원에 갈까요?\n<SYNC Start=10500><P Class=KRCC>&nbsp;\n</BODY>\n</SAMI>",
    "exampleSrtOutput": "1\n00:00:01,500 --> 00:00:04,800\n안녕하세요! 오늘 날씨가 참 좋네요.\n\n2\n00:00:06,200 --> 00:00:10,500\n네, 정말 산책하기 좋은 날씨예요.\n우리 공원에 갈까요?",
    "exampleExplanation": "Dans cet exemple, le fichier SAMI d'origine comporte des balises HTML, des temps en millisecondes (<SYNC Start=1500>) et des points de suppression (&nbsp;). Notre convertisseur nettoie les balises HTML, transforme <BR> en saut de ligne standard, convertit les horodatages en HH:MM:SS,mmm et attribue des numéros de séquence consécutifs.",
    "bilingualTitle": "Fichiers SMI Bilingues : Gestion des Pistes Doubles (KRCC et ENCC)",
    "bilingualSubtitle": "Comment notre convertisseur sépare les pistes multilingues sans mélanger les répliques ni perdre d'informations.",
    "bilingualText": [
      "Une spécificité fréquente des fichiers SAMI est l'intégration de sous-titres bilingues. Dans les séries étrangères, chaque point de synchronisation contient souvent deux balises : '<SYNC Start=5000><P Class=KRCC>안녕하세요!<P Class=ENCC>Hello!'.",
      "Si l'on convertit ce fichier avec un script basique, les deux langues se retrouvent empilées dans le même sous-titre, surchargeant l'écran. Dans d'autres cas, la seconde langue est tout simplement effacée.",
      "Notre convertisseur analyse les classes CSS du document et vous laisse le choix : vous pouvez conserver les deux langues ou extraire uniquement la piste en coréen (.KRCC) ou en anglais (.ENCC). Vous obtenez ainsi des fichiers SRT séparés (film.ko.srt et film.en.srt) prêts pour Plex ou YouTube."
    ],
    "ffmpegTitle": "Automatisation en Ligne de Commande : Convertir SMI en SRT avec FFmpeg",
    "ffmpegSubtitle": "Réalisez des conversions par lots directement depuis votre terminal grâce à FFmpeg.",
    "ffmpegCommand": "ffmpeg -sub_charenc CP949 -i entree.smi -c:s srt sortie.srt",
    "ffmpegExplanation": [
      "Pour les techniciens vidéo et les utilisateurs gérant de vastes collections, l'outil open source FFmpeg permet de convertir des sous-titres directement en ligne de commande.",
      "Pour convertir un fichier SMI encodé en UTF-8 standard, exécutez : 'ffmpeg -i entree.smi -c:s srt sortie.srt'.",
      "Si le fichier est d'origine coréenne et encodé en CP949 ou EUC-KR, indiquez impérativement le paramètre d'encodage : 'ffmpeg -sub_charenc CP949 -i entree.smi -c:s srt sortie.srt'. Sans ce paramètre, les caractères coréens seront corrompus.",
      "Bien que FFmpeg soit idéal pour traiter des centaines de fichiers par script, notre outil en ligne offre la même exactitude mathématique instantanément dans votre navigateur sans aucune installation."
    ],
    "useCasesTitle": "Cas d'Usage Courants pour la Conversion de SMI en SRT",
    "useCasesSubtitle": "Découvrez comment traducteurs, monteurs et cinéphiles exploitent quotidiennement la conversion de SMI en SRT.",
    "useCasesList": [
      {
        "title": "Visionner des K-Dramas et Films Rétro sur Smart TV",
        "description": "Les téléviseurs modernes et applications comme Plex ne lisent pas les fichiers .smi. La conversion en .srt garantit un affichage parfait sur grand écran."
      },
      {
        "title": "Montage Vidéo dans Premiere Pro et DaVinci Resolve",
        "description": "Les logiciels de montage professionnels ne prennent pas en charge les fichiers SAMI. La conversion en SubRip permet d'importer directement les sous-titres sur la timeline."
      },
      {
        "title": "Modernisation des Bibliothèques Multimédias (Plex, Jellyfin)",
        "description": "Convertissez vos collections au format SRT universel pour permettre une lecture directe sans saturer le processeur avec un transcodage vidéo."
      },
      {
        "title": "Traduction et Localisation Professionnelle",
        "description": "Les logiciels de TAO et les agences de doublage exigent des formats normalisés comme SRT ou VTT pour la synchronisation et le sous-titrage."
      },
      {
        "title": "Extraction de Texte pour l'IA et la Transcription",
        "description": "Le format SRT supprime le code HTML inutile et ne conserve que les dialogues purs, parfaits pour la recherche documentaire et les modèles de langage."
      },
      {
        "title": "Lecture Mobile sur iPhone, iPad et Android",
        "description": "Des lecteurs comme Infuse, VLC et MX Player lisent nativement les fichiers .srt, assurant un visionnage fluide en mobilité."
      }
    ],
    "troubleshootTitle": "Dépannage des Problèmes Fréquents de Conversion SMI en SRT",
    "troubleshootSubtitle": "Identifiez et résolvez facilement les difficultés courantes rencontrées avec les anciens fichiers SAMI.",
    "troubleshootTips": [
      {
        "issue": "Le texte coréen s'affiche sous forme de symboles incompréhensibles (mojibake)",
        "cause": "Le fichier .smi original a été enregistré en encodage ANSI coréen (EUC-KR ou CP949) au lieu de l'Unicode UTF-8.",
        "solution": "Dans notre convertisseur, sélectionnez 'EUC-KR / CP949 (Coréen)' dans le menu déroulant avant de convertir pour récupérer le texte original."
      },
      {
        "issue": "Les sous-titres restent affichés trop longtemps à l'écran",
        "cause": "Le fichier ne comporte pas de balises d'effacement (<SYNC ...>&nbsp;), ce qui maintient la réplique affichée jusqu'au dialogue suivant.",
        "solution": "Notre convertisseur limite automatiquement la durée maximale à un temps de lecture naturel (7 secondes maximum). Vérifiez que 'Normaliser les Espaces' est activé."
      },
      {
        "issue": "Les dialogues en coréen et en anglais sont mélangés dans le même sous-titre",
        "cause": "Le fichier est bilingue et regroupe des balises <P Class=KRCC> et <P Class=ENCC> dans le même bloc de synchronisation.",
        "solution": "Utilisez le sélecteur de piste de langue pour n'extraire que le 'Coréen (KRCC)' ou que l'Anglais (ENCC)' afin d'obtenir un fichier SRT propre."
      },
      {
        "issue": "Des balises comme <font color=\"red\"> apparaissent dans le fichier SRT final",
        "cause": "Le fichier SAMI contient du code HTML de style qui n'appartient pas au standard SubRip SRT.",
        "solution": "Activez l'option 'Nettoyer les Balises HTML / SAMI' dans les réglages pour éliminer le code HTML tout en préservant le texte des dialogues."
      }
    ],
    "conclusionTitle": "Convertissez Vos Sous-titres SMI en SRT Dès Aujourd'hui",
    "conclusionText": [
      "Le format SAMI (.smi) a joué un rôle historique dans la diffusion du multimédia et des séries télévisées en Corée du Sud et dans le monde entier pendant plus de deux décennies. Cependant, les standards contemporains exigent une compatibilité universelle et des fichiers épurés.",
      "Grâce à notre convertisseur en ligne SMI en SRT, mettre à niveau vos fichiers de sous-titres est un jeu d'enfant. Que vous souhaitiez restaurer des classiques du cinéma, monter une vidéo dans Premiere Pro ou regarder des séries sur votre Smart TV via Plex, notre outil offre une conversion instantanée et respectueuse de votre vie privée.",
      "Collez votre code SAMI ou déposez votre fichier .smi dans le convertisseur ci-dessus pour obtenir des sous-titres SubRip (.srt) impeccables en quelques secondes."
    ]
  },
  "de": {
    "introTitle": "Die Vollständige Anleitung zur Konvertierung von SMI (SAMI) in SRT",
    "introSubtitle": "Meistern Sie die Konvertierung von Microsoft SAMI (.smi) Untertiteln in universell kompatible SubRip (.srt) Untertitel. Erfahren Sie, wie die HTML-basierte SAMI-Architektur aufgebaut ist, wie Endzeiten aus Löschpunkten berechnet werden, wie koreanische EUC-KR / CP949 Kodierungen ohne Zeichensalat (Mojibake) wiederhergestellt werden und wie Untertitel nahtlos in Premiere Pro, DaVinci Resolve, Final Cut Pro und VLC importiert werden.",
    "introText": [
      "In der Geschichte digitaler Medienformate haben sich Untertitelformate Hand in Hand mit Video-Wiedergabesystemen entwickelt. Ende der 1990er Jahre führte Microsoft die SAMI-Spezifikation (Synchronized Accessible Media Interchange) mit den Dateiendungen .smi oder .sami ein, um barrierefreie und optisch gestaltete Untertitel im Windows Media Player zu ermöglichen. SAMI war für seine Zeit revolutionär: Auf Basis von HTML und CSS erlaubte es Schriftarten, Farben, Größen und mehrere Sprachspuren gleichzeitig.",
      "Nirgendwo erlangte das SAMI-Format eine größere kulturelle und technische Bedeutung als in Südkorea. Während des Breitband-Booms der frühen 2000er Jahre etablierten koreanische Fansubbing-Communitys und Fernsehsender das .smi-Format als Standard für TV-Dramen (K-Dramas), Kinofilme und Anime. Bis heute sind Millionen von koreanischen Fernsehepisoden und Filmklassikern ausschließlich in diesem SAMI-Format archiviert.",
      "Moderne Produktions- und Streaming-Workflows setzen jedoch auf offene, universelle und schlanke Formate. Heute ist SubRip (.srt) der weltweite De-facto-Standard für Mediaplayer wie VLC und Plex, Streaming-Dienste wie YouTube und Netflix sowie Videoschnittsysteme wie Adobe Premiere Pro, DaVinci Resolve und Apple Final Cut Pro. Kaum eine moderne Software unterstützt das historische SAMI-Format von Microsoft noch nativ.",
      "Die Konvertierung von SMI in SRT schließt diese technische Lücke. Da SAMI auf komplexem HTML-Code, Millisekunden-Zeitstempeln ohne Endzeit und alten Kodierungen wie EUC-KR oder CP949 beruht, führt eine manuelle Umwandlung häufig zu Fehlern und unlesbarem Text. Dieser Leitfaden erläutert die Funktionsweise beider Formate, die Berechnung exakter Zeitstempel, Kodierungslösungen und Best Practices für Videoschnitt und Wiedergabe."
    ],
    "whatIsTitle": "Was ist eine SMI (SAMI) Datei? Aufbau des Microsoft-Standards",
    "whatIsText": [
      "Eine SMI-Datei (.smi), auch unter der Abkürzung SAMI (Synchronized Accessible Media Interchange) bekannt, ist ein strukturiertes Textdokument, das auf HTML- und XML-Syntax basiert. Microsoft veröffentlichte die Spezifikation 1998 im Rahmen seiner Windows-Media-Technologien.",
      "Strukturell ähnelt eine SMI-Datei einer Website. Sie beginnt mit einem <SAMI>-Tag, enthält einen <HEAD>-Bereich mit CSS-Stilen (<STYLE TYPE=\"text/css\">) und bündelt sämtliche Untertitel in einem <BODY>-Abschnitt. Im CSS werden Schriftarten (z. B. Gulim, Batang, Arial), Farben, Größen und Klassen definiert. Jede Sprachspur wird als separate CSS-Klasse deklariert, etwa .KRCC für Koreanisch oder .ENCC für Englisch.",
      "Im <BODY> werden Untertitelzeilen durch <SYNC Start=#####>-Tags gesteuert, wobei Start die Anzeigezeit in Millisekunden ab Videoanfang angibt (z. B. <SYNC Start=15200> für 15,2 Sekunden). Darauf folgt ein Absatz-Tag (<P Class=KRCC>), der die Sprache festlegt, gefolgt vom Dialogtext. Zeilenumbrüche werden mit HTML-Tags wie <BR> erzeugt.",
      "SubRip (.srt) hingegen wurde als schlankes Format ohne HTML-Struktur entwickelt. Eine SRT-Datei besteht aus fortlaufenden Nummernblöcken (1, 2, 3...), Zeitstempeln mit Beginn und Ende getrennt durch einen Pfeil (00:00:15,200 --> 00:00:18,500), dem Dialogtext und Leerzeilen. Die weltweite Unterstützung macht SRT zum idealen Zielformat für jedes Gerät."
    ],
    "whyConvertTitle": "Warum SMI-Untertitel in SRT Konvertieren?",
    "whyConvertSubtitle": "Erfahren Sie, welche Vorteile die Umwandlung von SAMI (.smi) Untertiteln in universelle SubRip (.srt) Dateien bietet.",
    "whyConvertReasons": [
      {
        "title": "Universelle Wiedergabe auf Allen Modernen Geräten",
        "description": "Smart-TVs (Samsung Tizen, LG webOS, Android TV), Streaming-Boxen (Apple TV, Fire TV, Roku) und Smartphones unterstützen keine .smi-Dateien. SubRip (.srt) wird überall nativ wiedergegeben."
      },
      {
        "title": "Vollständige Kompatibilität mit Schnittprogrammen",
        "description": "Professionelle Schnittsoftware wie Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro und CapCut verweigert .smi-Dateien. Nach der Konvertierung in .srt ziehen Sie Untertitel direkt auf die Timeline."
      },
      {
        "title": "Einwandfreie Unicode UTF-8 Darstellung Ohne Zeichensalat",
        "description": "Alte koreanische SMI-Dateien nutzen ANSI-Kodierungen (EUC-KR / CP949), die auf modernen Geräten als Zeichensalat (Mojibake) enden. Die Konvertierung liefert fehlerfreies UTF-8 SRT."
      },
      {
        "title": "Trennung Zweisprachiger Tonspuren",
        "description": "Viele SAMI-Dateien enthalten Koreanisch und Englisch gleichzeitig. Bei der Konvertierung in SRT können Sie die gewünschte Sprache isolieren und überfüllte Bildschirmanzeigen vermeiden."
      },
      {
        "title": "Direktes Streaming in Plex, Emby und Jellyfin",
        "description": "Medienserver spielen .srt-Dateien direkt ab, ohne dass der Prozessor das Video mit aufwendigem Transcoding neu berechnen muss."
      },
      {
        "title": "Kompatibel mit YouTube und Social Media",
        "description": "YouTube, Vimeo, Facebook, Twitter/X und LinkedIn verlangen standardisierte .srt-Dateien für Untertitel. Die Konvertierung macht Ihre Untertitel sofort webfähig."
      }
    ],
    "howToTitle": "SMI in SRT Online Konvertieren in 3 Einfachen Schritten",
    "howToSubtitle": "Befolgen Sie diese Schritt-für-Schritt-Anleitung, um Ihre SAMI-Dateien in Sekundenschnelle in standardkonforme SRT-Dateien umzuwandeln.",
    "howToSteps": [
      {
        "step": "1",
        "title": "SMI / SAMI Datei Hochladen oder Einfügen",
        "description": "Ziehen Sie Ihre .smi-Datei in das Upload-Feld, klicken Sie auf Durchsuchen oder fügen Sie den SAMI-Code direkt in den Texteingabebereich ein."
      },
      {
        "step": "2",
        "title": "Sprach- und Kodierungsoptionen Wählen",
        "description": "Wählen Sie bei mehrsprachigen Dateien die gewünschte Sprachspur (z. B. KRCC für Koreanisch oder ENCC für Englisch) und prüfen Sie die Zeichenkodierung (UTF-8 oder CP949)."
      },
      {
        "step": "3",
        "title": "Konvertierte SRT-Datei Herunterladen",
        "description": "Überprüfen Sie die Live-Vorschau und klicken Sie auf .SRT Herunterladen, um Ihre SubRip-Datei sofort zu speichern oder in Ihre Zwischenablage zu kopieren."
      }
    ],
    "differenceTitle": "Technischer Vergleich: SMI (SAMI) im Vergleich zu SubRip (SRT)",
    "differenceSubtitle": "Erfahren Sie mehr über die strukturellen Unterschiede zwischen Microsofts SAMI-Format und dem weltweiten SubRip-Standard.",
    "differenceTable": [
      {
        "feature": "Entwickler und Ursprung",
        "smi": "Microsoft Corporation (1998, für Windows Media Player)",
        "srt": "SubRip-Community (Ende der 90er, für DVD-Ripping)"
      },
      {
        "feature": "Grundlegende Struktur",
        "smi": "HTML / XML-Dokument mit CSS-Block <STYLE>",
        "srt": "Reiner Text in fortlaufenden Nummernblöcken"
      },
      {
        "feature": "Zeitstempel-Format",
        "smi": "Ganzzahlen in Millisekunden ab Beginn (<SYNC Start=12500>)",
        "srt": "Uhrzeit-Formate (HH:MM:SS,mmm --> HH:MM:SS,mmm)"
      },
      {
        "feature": "Endzeit des Untertitels",
        "smi": "Implizit: bestimmt durch nächsten <SYNC>-Tag oder &nbsp;",
        "srt": "Explizit: Beginn und Ende für jeden Untertitel deklariert"
      },
      {
        "feature": "Zeilenumbrüche",
        "smi": "HTML-Tags (<BR>, <br>, <br/>)",
        "srt": "Standardmäßige Zeilenumbrüche (\\n)"
      },
      {
        "feature": "Typografische Gestaltung",
        "smi": "Integriertes CSS für Schriftart, Farben, Größen und Ränder",
        "srt": "Einfache Tags (<i>, <b>, <u>) oder unformatierter Text"
      },
      {
        "feature": "Mehrsprachige Spuren",
        "smi": "Nativ in einer einzigen Datei (<P Class=KRCC>, <P Class=ENCC>)",
        "srt": "Separate Dateien pro Sprache (film.de.srt)"
      },
      {
        "feature": "Typische Kodierung",
        "smi": "Historisches ANSI: EUC-KR, CP949 (Koreanisch), Windows-1252",
        "srt": "Unicode UTF-8 ohne BOM"
      },
      {
        "feature": "Heutige Kompatibilität",
        "smi": "Extrem eingeschränkt (alte Windows-Player)",
        "srt": "Universell (VLC, Plex, Smart-TVs, Premiere Pro, Web)"
      }
    ],
    "koreanEncodingTitle": "Koreanische SMI-Dateien: Behebung von EUC-KR und CP949 Zeichensalat (Mojibake)",
    "koreanEncodingSubtitle": "Warum koreanische Untertitel oft als seltsame Symbole erscheinen und wie Sie fehlerfreie Hangul-Zeichen erhalten.",
    "koreanEncodingText": [
      "Eine der häufigsten Hürden bei älteren koreanischen SMI-Untertiteln ist das sogenannte 'Mojibake': Koreanische Schriftzeichen werden als wirre Sonderzeichen ('¿©±â', '¾È³çÇÏ¼¿ä') oder Fragezeichen dargestellt.",
      "Der Grund dafür liegt in historischen Kodierungsstandards. In den 2000er Jahren wurden Textdateien in Südkorea meist unter Windows-949 (CP949) oder EUC-KR gespeichert. Anders als bei UTF-8 wurden koreanische Zeichen speziellen 2-Byte-Kombinationen zugewiesen.",
      "Versucht ein modernes Betriebssystem (macOS, iOS, Android, Linux) oder VLC, eine solche Datei als UTF-8 zu öffnen, passen die Bytes nicht und es entsteht Zeichensalat.",
      "Unser Konverter behebt dies direkt im Webbrowser. Über native Browser-APIs decodiert das Tool EUC-KR, CP949 und UTF-8 fehlerfrei. Wählen Sie einfach die passende Kodierung aus, um den Originaltext wiederherzustellen und als saubere UTF-8 SRT-Datei zu exportieren."
    ],
    "endTimeCalculationTitle": "Zeitberechnung in SMI: Wie das Ende Jeder Untertitelzeile Ermittelt Wird",
    "endTimeCalculationSubtitle": "Erfahren Sie, wie unsere Parsing-Engine die exakten Zeitspannen für das SRT-Format ableitet.",
    "endTimeCalculationText": [
      "Ein grundlegender Unterschied zwischen SAMI und SRT betrifft die Anzeigezeiten. In SRT deklariert jeder Eintrag Beginn und Ende: '00:01:14,250 --> 00:01:17,800'. In SAMI ist lediglich der Beginn vermerkt: '<SYNC Start=74250>'.",
      "Damit der Text wieder vom Bildschirm verschwindet, nutzen SAMI-Autoren einen Folge-Sync-Punkt mit geschütztem Leerzeichen: '<SYNC Start=77800><P Class=KRCC>&nbsp;'. Nach 77.800 Millisekunden löscht der Player den Untertitel.",
      "Viele Dateien enthalten jedoch keine expliziten Löschpunkte, sondern verlassen sich darauf, dass der nächste Dialog den vorherigen überschreibt. Bei längerer Stille würde der Untertitel fälschlicherweise minutenlang eingeblendet bleiben.",
      "Unser Konverter nutzt eine intelligente Zeitlogik: (1) Gibt es einen Löschpunkt mit &nbsp;, bestimmt dieser das exakte Ende. (2) Folgt zeitnah ein neuer Dialog, markiert dessen Beginn das Ende des aktuellen Untertitels. (3) Ist der Abstand zu groß, berechnet das System eine natürliche Lesedauer basierend auf der Zeichenanzahl (1,8 bis 7,0 Sekunden), was für ein harmonisches Seh-Erlebnis sorgt."
    ],
    "exampleTitle": "Beispielvergleich: SAMI-Quellcode im Vergleich zum SubRip SRT Ergebnis",
    "exampleIntro": "Vergleichen Sie den HTML-Code einer koreanischen SAMI-Datei mit der sauberen SubRip-SRT-Ausgabe unseres Konverters:",
    "exampleSmiInput": "<SAMI>\n<HEAD>\n<TITLE>K-Drama Folge 01</TITLE>\n<STYLE TYPE=\"text/css\">\n<!--\nP { font-family:gulim, sans-serif; font-size:14pt; color:white; }\n.KRCC { Name:Korean; lang:ko-KR; SAMIType:CC; }\n.ENCC { Name:English; lang:en-US; SAMIType:CC; }\n-->\n</STYLE>\n</HEAD>\n<BODY>\n<SYNC Start=1500><P Class=KRCC>\n안녕하세요! 오늘 날씨가 참 좋네요.\n<SYNC Start=4800><P Class=KRCC>&nbsp;\n<SYNC Start=6200><P Class=KRCC>\n네, 정말 산책하기 좋은 날씨예요.<BR>우리 공원에 갈까요?\n<SYNC Start=10500><P Class=KRCC>&nbsp;\n</BODY>\n</SAMI>",
    "exampleSrtOutput": "1\n00:00:01,500 --> 00:00:04,800\n안녕하세요! 오늘 날씨가 참 좋네요.\n\n2\n00:00:06,200 --> 00:00:10,500\n네, 정말 산책하기 좋은 날씨예요.\n우리 공원에 갈까요?",
    "exampleExplanation": "In diesem Beispiel enthält die SAMI-Datei HTML-Tags, Millisekunden-Werte (<SYNC Start=1500>) und Lösch-Tags (&nbsp;). Unser Konverter entfernt den HTML-Code, wandelt <BR> in Zeilenumbrüche um, formatiert die Zeitstempel im Standard HH:MM:SS,mmm und nummeriert alle Blöcke fortlaufend durch.",
    "bilingualTitle": "Zweisprachige SMI-Dateien: Getrennte Sprachspuren (KRCC & ENCC)",
    "bilingualSubtitle": "Wie unser Konverter mehrsprachige Dateien verarbeitet, ohne Texte zu vermischen oder Dialoge zu verlieren.",
    "bilingualText": [
      "Eine Besonderheit von SAMI-Dateien ist die Einbettung zweisprachiger Untertitel. In ausländischen Filmen finden sich oft zwei Tags pro Szene: '<SYNC Start=5000><P Class=KRCC>안녕하세요!<P Class=ENCC>Hello!'.",
      "Konvertiert man eine solche Datei mit einfachen Skripten, werden beide Sprachen in dieselbe Untertitelzeile gepackt, was das Bild überfrachtet. In anderen Fällen geht die zweite Sprache unbemerkt verloren.",
      "Unser Tool erkennt die CSS-Klassen und gibt Ihnen die Wahl: Behalten Sie beide Sprachen oder extrahieren Sie gezielt nur die koreanische (.KRCC) oder englische (.ENCC) Spur, um separate Dateien (film.ko.srt und film.en.srt) für Plex oder YouTube zu erzeugen."
    ],
    "ffmpegTitle": "Befehlszeilen-Automatisierung: SMI in SRT Konvertieren mit FFmpeg",
    "ffmpegSubtitle": "Führen Sie Untertitel-Konvertierungen stapelweise über die Befehlszeile mit FFmpeg durch.",
    "ffmpegCommand": "ffmpeg -sub_charenc CP949 -i eingabe.smi -c:s srt ausgabe.srt",
    "ffmpegExplanation": [
      "Für Medienprofis und Systemadministratoren mit umfangreichen Archiven bietet FFmpeg eine schnelle Befehlszeilenlösung zur Untertitelkonvertierung.",
      "Für Standard-UTF-8-Dateien genügt: 'ffmpeg -i eingabe.smi -c:s srt ausgabe.srt'.",
      "Handelt es sich um eine ältere koreanische Datei in CP949 / EUC-KR, muss der Zeichensatz über '-sub_charenc' angegeben werden: 'ffmpeg -sub_charenc CP949 -i eingabe.smi -c:s srt ausgabe.srt'. Andernfalls werden die koreanischen Schriftzeichen zerstört.",
      "Während FFmpeg hervorragend für automatisierte Skripte ist, bietet unser Browser-Tool dieselbe Präzision sofort und ohne jegliche Programminstallation."
    ],
    "useCasesTitle": "Typische Praxisszenarien für die Konvertierung von SMI in SRT",
    "useCasesSubtitle": "Erfahren Sie, wie Übersetzer, Filmliebhaber und Editoren von der SMI-zu-SRT-Konvertierung profitieren.",
    "useCasesList": [
      {
        "title": "K-Dramas und Filmklassiker auf Smart-TVs Genießen",
        "description": "Smart-TVs und Apps wie Plex verarbeiten keine .smi-Dateien. Die Umwandlung in .srt ermöglicht Untertitelwiedergabe in bester Qualität auf dem Fernseher."
      },
      {
        "title": "Videoschnitt in Premiere Pro und DaVinci Resolve",
        "description": "Professionelle Videoschnittsysteme akzeptieren kein SAMI. Mit SRT importieren Sie Untertitel direkt auf die Schnitt-Timeline."
      },
      {
        "title": "Aktualisierung von Medienservern (Plex, Jellyfin)",
        "description": "Bringen Sie Ihre Archive auf den SRT-Standard, um direkte Wiedergabe ohne prozessorlastiges Transcoding zu ermöglichen."
      },
      {
        "title": "Übersetzung und Lokalisierungs-Workflows",
        "description": "Moderne Übersetzungsprogramme (CAT-Tools) und Synchronstudios setzen standardisierte SRT- oder VTT-Dateien für die Untertitelung voraus."
      },
      {
        "title": "Textextraktion für KI-Modelle und Transkripte",
        "description": "SRT filtert alte HTML-Tags heraus und liefert reine Dialogtexte, die sich ideal für Volltextsuchen, Indizierungen und Sprachmodelle eignen."
      },
      {
        "title": "Mobile Wiedergabe auf iPhone, iPad und Android",
        "description": "Mobile Player wie Infuse, VLC und MX Player unterstützen .srt-Dateien nativ für bequemen Filmgenuss unterwegs."
      }
    ],
    "troubleshootTitle": "Fehlerbehebung bei der SMI-zu-SRT-Konvertierung",
    "troubleshootSubtitle": "So lösen Sie typische Probleme bei der Verarbeitung alter SAMI-Dateien.",
    "troubleshootTips": [
      {
        "issue": "Koreanischer Text erscheint als unlesbare Zeichen oder Fragezeichen (Mojibake)",
        "cause": "Die ursprüngliche .smi-Datei wurde in koreanischer ANSI-Kodierung (EUC-KR oder CP949) anstelle von UTF-8 gespeichert.",
        "solution": "Wählen Sie in unserem Konverter vor dem Hochladen im Dropdown-Menü 'EUC-KR / CP949 (Koreanisch)' aus, um den Originaltext wiederherzustellen."
      },
      {
        "issue": "Untertitel bleiben zu lange auf dem Bildschirm sichtbar",
        "cause": "Der Datei fehlen Lösch-Tags (<SYNC ...>&nbsp;), sodass der Text bis zum nächsten Dialog stehen bleibt.",
        "solution": "Unser Tool begrenzt Untertitel automatisch auf eine natürliche Lesedauer (maximal 7 Sekunden). Aktivieren Sie 'Leerzeichen Normalisieren'."
      },
      {
        "issue": "Koreanischer und englischer Text sind in derselben Untertitelzeile vermischt",
        "cause": "Die Datei ist zweisprachig und enthält <P Class=KRCC> und <P Class=ENCC> im selben Sync-Block.",
        "solution": "Wählen Sie im Menü für Sprachspuren 'Koreanisch (KRCC)' oder 'Englisch (ENCC)', um eine saubere, einsprachige SRT-Datei zu generieren."
      },
      {
        "issue": "HTML-Tags wie <font color=\"red\"> tauchen in der SRT-Datei auf",
        "cause": "Die SAMI-Datei enthält HTML-Formatierungs-Tags, die im SubRip-Standard nicht vorgesehen sind.",
        "solution": "Aktivieren Sie in den Einstellungen 'HTML / SAMI Tags Bereinigen', um allen HTML-Code zu entfernen und nur die Dialoge zu behalten."
      }
    ],
    "conclusionTitle": "Konvertieren Sie Ihre SMI-Untertitel Noch Heute in SRT",
    "conclusionText": [
      "Das SAMI-Format (.smi) hat über zwei Jahrzehnte hinweg die digitale Unterhaltung in Südkorea und weltweit geprägt. Die heutigen Video-Ökosysteme verlangen jedoch plattformübergreifende Kompatibilität und schlanke Dateiformate.",
      "Mit unserem Online-Konverter modernisieren Sie Ihre Untertiteldateien schnell und zuverlässig. Ob zur Archivierung von K-Drama-Klassikern, für den Videoschnitt in Premiere Pro oder das Streaming über Plex – unser Tool liefert sofortige Ergebnisse bei vollem Schutz Ihrer Privatsphäre.",
      "Fügen Sie Ihren SAMI-Code ein oder laden Sie Ihre .smi-Datei oben hoch, um in wenigen Augenblicken einwandfreie SubRip (.srt) Untertitel zu erhalten."
    ]
  },
  "id": {
    "introTitle": "Panduan Lengkap Konversi Subtitle SMI (SAMI) ke SRT",
    "introSubtitle": "Kuasai cara mengubah file subtitle Microsoft SAMI (.smi) menjadi subtitle SubRip (.srt) yang kompatibel secara universal. Pelajari arsitektur berbasis HTML dari SAMI, cara menghitung waktu akhir subtitle secara presisi, menangani encoding Korea EUC-KR / CP949 tanpa karakter rusak (mojibake), dan mengimpor subtitle ke Premiere Pro, DaVinci Resolve, Final Cut Pro, serta VLC.",
    "introText": [
      "Dalam sejarah multimedia digital, format subtitle berkembang seiring dengan evolusi pemutar video. Pada akhir tahun 1990-an, Microsoft memperkenalkan spesifikasi SAMI (Synchronized Accessible Media Interchange), dengan ekstensi .smi atau .sami, untuk menghadirkan teks terjemahan dan aksesibilitas kaya gaya pada Windows Media Player. SAMI sangat inovatif pada masanya: dibangun dengan model dokumen HTML dan CSS, format ini memungkinkan pengaturan jenis huruf, warna teks, ukuran font, serta trek multibahasa secara bersamaan.",
      "Format SAMI meraih pengaruh budaya dan teknis terbesar di Korea Selatan. Selama ledakan internet pita lebar pada awal tahun 2000-an, komunitas penerjemah (fansub) dan distributor media di Korea menjadikan .smi sebagai standar mutlak untuk drama televisi (K-Drama), film layar lebar, dan anime. Hingga hari ini, jutaan episode drama Korea dan arsip video klasik masih tersimpan dalam format SAMI (.smi).",
      "Namun, alur kerja digital masa kini telah beralih ke format yang ringan, terbuka, dan universal. Saat ini, SubRip (.srt) adalah standar global untuk pemutar media seperti VLC dan Plex, platform streaming seperti YouTube dan Netflix, serta aplikasi penyunting video profesional seperti Adobe Premiere Pro, DaVinci Resolve, dan Apple Final Cut Pro. Hampir tidak ada perangkat modern yang mendukung format SAMI lama milik Microsoft secara bawaan.",
      "Mengonversi SMI ke SRT menjembatani kendala kompatibilitas ini. Karena SAMI menggunakan kode HTML, penanda waktu milidetik tanpa waktu selesai eksplisit, dan encoding lawas seperti EUC-KR atau CP949, konversi manual sering kali memicu teks rusak dan desinkronisasi. Panduan teknis ini mengupas tuntas struktur kedua format, metode perhitungan waktu, perbaikan encoding, dan praktik terbaik untuk pemutaran serta pengeditan video."
    ],
    "whatIsTitle": "Apa itu File SMI (SAMI)? Arsitektur Standar Subtitle Microsoft",
    "whatIsText": [
      "File SMI (.smi), yang juga dikenal dengan singkatan SAMI (Synchronized Accessible Media Interchange), adalah dokumen teks terstruktur berbasis sintaks HTML dan XML. Microsoft merilis spesifikasi SAMI 1.0 pada tahun 1998 sebagai bagian dari teknologi Windows Media untuk menyediakan teks aksesibilitas digital.",
      "Secara struktur, file SMI menyerupai halaman web. Dimulai dengan tag <SAMI>, memiliki bagian <HEAD> dengan lembar gaya CSS (<STYLE TYPE=\"text/css\">), dan menampung seluruh dialog dalam bagian <BODY>. Lembar gaya CSS menentukan tipografi (Gulim, Arial, sans-serif), warna, dan ukuran font. Masing-masing bahasa dideklarasikan sebagai kelas CSS tersendiri, misalnya .KRCC untuk bahasa Korea atau .ENCC untuk bahasa Inggris.",
      "Di dalam <BODY>, dialog diatur melalui tag <SYNC Start=#####>, di mana Start menyatakan waktu kemunculan dalam satuan milidetik absolut sejak video dimulai (misalnya <SYNC Start=15200> untuk detik ke-15,2). Tag paragraf (<P Class=KRCC>) kemudian menentukan bahasa yang digunakan. Baris baru dibuat menggunakan tag HTML <BR>.",
      "Sebaliknya, SubRip (.srt) dirancang sebagai format sederhana tanpa kerumitan HTML. File SRT terdiri dari blok bernomor urut (1, 2, 3...), penanda waktu jam dengan awal dan akhir yang dihubungkan panah (00:00:15,200 --> 00:00:18,500), teks dialog, dan baris kosong pemisah. Kompatibilitas universal menjadikan SRT format terbaik untuk semua perangkat modern."
    ],
    "whyConvertTitle": "Mengapa Perlu Mengonversi Subtitle SMI ke SRT?",
    "whyConvertSubtitle": "Ketahui keuntungan utama mengubah file SAMI (.smi) menjadi file subtitle standar SubRip (.srt).",
    "whyConvertReasons": [
      {
        "title": "Dukungan Universal di Seluruh Perangkat Modern",
        "description": "Smart TV (Samsung Tizen, LG webOS, Android TV), perangkat streaming (Apple TV, Roku, Fire TV), dan smartphone tidak mendukung file .smi. Format SubRip (.srt) berjalan mulus di semua layar."
      },
      {
        "title": "Kompatibilitas Penuh dengan Software Edit Video",
        "description": "Aplikasi profesional seperti Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro, dan CapCut menolak file .smi. Mengonversi ke .srt memungkinkan Anda langsung menyeret subtitle ke timeline proyek."
      },
      {
        "title": "Teks Bersih dalam Unicode UTF-8 Tanpa Karakter Rusak",
        "description": "File SMI Korea lawas sering menggunakan encoding ANSI (EUC-KR / CP949) yang memunculkan karakter aneh (mojibake). Konversi menghasilkan file SRT UTF-8 yang tampil sempurna."
      },
      {
        "title": "Pemisahan Trek Bahasa pada File Bilingual",
        "description": "Banyak file SAMI memuat bahasa Korea dan Inggris sekaligus. Konversi ke SRT memungkinkan Anda memisahkan masing-masing bahasa ke file terpisah agar layar tidak penuh."
      },
      {
        "title": "Streaming Langsung Tanpa Beban CPU di Plex dan Jellyfin",
        "description": "Server media memutar file .srt secara langsung (direct play) tanpa memaksa server melakukan transcoding video yang menguras performa prosesor."
      },
      {
        "title": "Siap Diunggah ke Media Sosial dan Platform Web",
        "description": "YouTube, Vimeo, Facebook, Twitter/X, dan LinkedIn mengharuskan subtitle dalam format .srt. Mengonversi file SMI memastikan kompatibilitas instan di internet."
      }
    ],
    "howToTitle": "Cara Konversi SMI ke SRT Online dalam 3 Langkah Mudah",
    "howToSubtitle": "Ikuti langkah-langkah praktis ini untuk mengubah file SAMI Anda menjadi subtitle SRT yang valid dalam hitungan detik.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Unggah atau Tempel File SMI / SAMI Anda",
        "description": "Tarik dan lepas file .smi ke area converter, klik Telusuri File, atau tempel kode SAMI langsung ke kotak teks input."
      },
      {
        "step": "2",
        "title": "Pilih Opsi Bahasa dan Encoding Karakter",
        "description": "Jika file memiliki beberapa bahasa (misalnya KRCC dan ENCC), pilih trek yang diinginkan. Tentukan encoding yang sesuai (UTF-8, EUC-KR, atau CP949) agar teks terbaca jelas."
      },
      {
        "step": "3",
        "title": "Unduh File SRT Hasil Konversi",
        "description": "Periksa pratinjau langsung dan klik Unduh .SRT untuk menyimpan file SubRip Anda seketika, atau salin teks ke clipboard untuk software pengedit video."
      }
    ],
    "differenceTitle": "Perbandingan Teknis: SMI (SAMI) vs SubRip (SRT)",
    "differenceSubtitle": "Pahami perbedaan struktural antara format Microsoft SAMI dan standar universal SubRip.",
    "differenceTable": [
      {
        "feature": "Pengembang dan Asal-Usul",
        "smi": "Microsoft Corporation (1998, untuk Windows Media Player)",
        "srt": "Komunitas SubRip (Akhir 1990-an, untuk ekstraksi DVD)"
      },
      {
        "feature": "Struktur Dasar",
        "smi": "Dokumen HTML / XML dengan blok gaya CSS <STYLE>",
        "srt": "Teks polos terstruktur dalam blok penomoran sekuensial"
      },
      {
        "feature": "Format Penanda Waktu",
        "smi": "Bilangan bulat milidetik dari awal (<SYNC Start=12500>)",
        "srt": "Format jam:menit:detik,milidetik (HH:MM:SS,mmm --> HH:MM:SS,mmm)"
      },
      {
        "feature": "Waktu Selesai Subtitle",
        "smi": "Implisit: ditentukan oleh tag <SYNC> berikutnya atau &nbsp;",
        "srt": "Eksplisit: awal dan akhir tertera pada setiap baris"
      },
      {
        "feature": "Pemisah Baris Baru",
        "smi": "Tag HTML (<BR>, <br>, <br/>)",
        "srt": "Karakter baris baru standar (\\n)"
      },
      {
        "feature": "Pemformatan Gaya Teks",
        "smi": "CSS terintegrasi untuk font, warna, ukuran, dan perataan",
        "srt": "Tag dasar (<i>, <b>, <u>) atau teks polos"
      },
      {
        "feature": "Dukungan Trek Multibahasa",
        "smi": "Bawaan dalam satu file (<P Class=KRCC>, <P Class=ENCC>)",
        "srt": "File terpisah untuk tiap bahasa (film.id.srt)"
      },
      {
        "feature": "Encoding yang Biasa Digunakan",
        "smi": "ANSI lawas: EUC-KR, CP949 (Korea), Windows-1252",
        "srt": "Unicode UTF-8 standar tanpa BOM"
      },
      {
        "feature": "Dukungan Perangkat Saat Ini",
        "smi": "Sangat terbatas (pemutar Windows versi lama)",
        "srt": "Universal (VLC, Plex, Smart TV, Premiere Pro, Web)"
      }
    ],
    "koreanEncodingTitle": "Subtitle Korea SMI: Mengatasi Karakter Rusak EUC-KR dan CP949 (Mojibake)",
    "koreanEncodingSubtitle": "Ketahui penyebab teks Korea kerap tampil sebagai simbol aneh dan cara memulihkan huruf hangul yang sempurna.",
    "koreanEncodingText": [
      "Salah satu kendala paling umum pada file subtitle SMI Korea lama adalah fenomena 'mojibake': huruf Korea (hangul) berubah menjadi simbol acak yang tidak bermakna ('¿©±â', '¾È³çÇÏ¼¿ä') atau tanda tanya.",
      "Penyebab utamanya adalah standar encoding masa lampau. Pada dekade 2000-an di Korea Selatan, file teks umumnya disimpan dengan kode Windows-949 (CP949) atau EUC-KR dan bukan UTF-8 Unicode. Sistem CP949 memetakan karakter Korea pada kombinasi 2-byte tertentu.",
      "Ketika sistem operasi modern (macOS, iOS, Android, Linux) atau pemutar video mencoba membuka file tersebut sebagai UTF-8, susunan byte tidak cocok sehingga teks berubah menjadi karakter rusak.",
      "Alat konverter kami mengatasi masalah ini langsung di browser. Menggunakan API decoder teks modern, sistem kami mendukung pembacaan EUC-KR, CP949, dan UTF-8. Anda cukup memilih encoding yang tepat untuk mengembalikan teks asli Korea sebelum menyimpannya ke file SRT UTF-8 yang bersih."
    ],
    "endTimeCalculationTitle": "Perhitungan Waktu di SMI: Cara Menentukan Durasi Akhir Subtitle",
    "endTimeCalculationSubtitle": "Pelajari bagaimana algoritma kami menyimpulkan rentang awal dan akhir untuk format SRT.",
    "endTimeCalculationText": [
      "Perbedaan mendasar antara SAMI dan SRT terletak pada pencatatan waktu. Pada file SRT, setiap dialog menyatakan waktu muncul dan hilang: '00:01:14,250 --> 00:01:17,800'. Sedangkan pada SAMI, yang tercatat hanyalah waktu kemunculan: '<SYNC Start=74250>'.",
      "Agar teks menghilang dari layar, pembuat file SAMI menambahkan titik sinkronisasi berikutnya dengan spasi kosong: '<SYNC Start=77800><P Class=KRCC>&nbsp;'. Saat mencapai 77.800 milidetik, layar akan dikosongkan.",
      "Namun, banyak file SMI tidak menyertakan tag penghapus dan hanya mengandalkan dialog berikutnya. Jika ada adegan hening atau musik yang panjang, teks akan terus tampil di layar selama beberapa menit secara keliru.",
      "Konverter kami menerapkan logika cerdas: (1) Jika ada tag pembersih &nbsp;, titik tersebut dijadikan waktu selesai yang tepat. (2) Jika ada dialog baru berikutnya dalam waktu wajar, awal dialog tersebut menjadi akhir dialog sebelumnya. (3) Jika jedanya terlalu panjang, konverter menghitung durasi baca alami berdasarkan panjang karakter (antara 1,8 hingga 7,0 detik) agar tampilan terasa nyaman."
    ],
    "exampleTitle": "Perbandingan Contoh: Kode SAMI vs Hasil SubRip SRT",
    "exampleIntro": "Bandingkan sintaks HTML file SAMI Korea dengan hasil SubRip SRT bersih yang dibuat oleh konverter kami:",
    "exampleSmiInput": "<SAMI>\n<HEAD>\n<TITLE>K-Drama Episode 01</TITLE>\n<STYLE TYPE=\"text/css\">\n<!--\nP { font-family:gulim, sans-serif; font-size:14pt; color:white; }\n.KRCC { Name:Korean; lang:ko-KR; SAMIType:CC; }\n.ENCC { Name:English; lang:en-US; SAMIType:CC; }\n-->\n</STYLE>\n</HEAD>\n<BODY>\n<SYNC Start=1500><P Class=KRCC>\n안녕하세요! 오늘 날씨가 참 좋네요.\n<SYNC Start=4800><P Class=KRCC>&nbsp;\n<SYNC Start=6200><P Class=KRCC>\n네, 정말 산책하기 좋은 날씨예요.<BR>우리 공원에 갈까요?\n<SYNC Start=10500><P Class=KRCC>&nbsp;\n</BODY>\n</SAMI>",
    "exampleSrtOutput": "1\n00:00:01,500 --> 00:00:04,800\n안녕하세요! 오늘 날씨가 참 좋네요.\n\n2\n00:00:06,200 --> 00:00:10,500\n네, 정말 산책하기 좋은 날씨예요.\n우리 공원에 갈까요?",
    "exampleExplanation": "Pada contoh ini, file SAMI memuat tag HTML, penanda waktu milidetik (<SYNC Start=1500>), dan tag penghapus (&nbsp;). Konverter kami membersihkan tag HTML, mengganti <BR> menjadi baris baru standar, mengubah waktu ke format HH:MM:SS,mmm, dan memberikan nomor urut pada tiap teks dialog.",
    "bilingualTitle": "File SMI Bilingual: Mengelola Dua Bahasa Sekaligus (KRCC & ENCC)",
    "bilingualSubtitle": "Bagaimana konverter kami memisahkan trek multibahasa tanpa mencampur dialog atau menghilangkan kata.",
    "bilingualText": [
      "Salah satu keunikan file SAMI adalah dukungannya terhadap subtitle dua bahasa sekaligus. Dalam film asing, tiap dialog kerap memuat dua tag: '<SYNC Start=5000><P Class=KRCC>안녕하세요!<P Class=ENCC>Hello!'.",
      "Jika dikonversi dengan alat sederhana, kedua bahasa tersebut akan digabungkan menjadi satu baris bertumpuk yang memenuhi layar. Pada kasus lain, bahasa kedua bahkan bisa terhapus tanpa disadari.",
      "Alat kami mendeteksi kelas CSS dalam file dan memberi Anda kontrol penuh: Anda dapat mengekspor semua baris atau hanya mengekstrak trek Korea (.KRCC) saja atau Inggris (.ENCC) saja ke file SRT tersendiri (misalnya film.ko.srt dan film.en.srt) untuk diputar di Plex atau YouTube."
    ],
    "ffmpegTitle": "Otomasi Command Line: Konversi SMI ke SRT dengan FFmpeg",
    "ffmpegSubtitle": "Lakukan konversi subtitle dalam jumlah banyak langsung dari terminal dengan FFmpeg.",
    "ffmpegCommand": "ffmpeg -sub_charenc CP949 -i input.smi -c:s srt output.srt",
    "ffmpegExplanation": [
      "Bagi pengguna tingkat lanjut dan pengelola arsip media, framework open-source FFmpeg menyediakan fungsionalitas konversi subtitle melalui baris perintah.",
      "Untuk file SMI standar ber-encoding UTF-8, gunakan perintah: 'ffmpeg -i input.smi -c:s srt output.srt'.",
      "Jika file Anda berbahasa Korea dengan encoding CP949 / EUC-KR, Anda wajib menyertakan parameter '-sub_charenc': 'ffmpeg -sub_charenc CP949 -i input.smi -c:s srt output.srt'. Tanpa parameter ini, karakter Korea akan rusak.",
      "Meskipun FFmpeg sangat andal untuk pemrosesan ratusan file sekaligus, konverter online kami menghadirkan akurasi yang sama secara instan di browser tanpa perlu menginstal program apa pun."
    ],
    "useCasesTitle": "Skenario Penggunaan Nyata untuk Konversi SMI ke SRT",
    "useCasesSubtitle": "Ketahui bagaimana penerjemah, editor, dan penikmat film memanfaatkan konversi SMI ke SRT sehari-hari.",
    "useCasesList": [
      {
        "title": "Menonton K-Drama dan Film Klasik di Smart TV",
        "description": "Smart TV dan aplikasi pemutar seperti Plex tidak mengenali format .smi. Mengonversi ke .srt memungkinkan tayangan subtitle tampil jernih di layar kaca."
      },
      {
        "title": "Penyuntingan Video di Premiere Pro dan DaVinci Resolve",
        "description": "Software editor profesional tidak menerima file SAMI. Dengan mengubahnya ke format SRT, Anda dapat langsung meletakkan subtitle di timeline pengeditan."
      },
      {
        "title": "Pembaruan Koleksi Server Media (Plex, Jellyfin)",
        "description": "Ubah koleksi subtitle lama Anda ke format SRT agar pemutaran berlangsung lancar tanpa membebani prosesor server dengan proses transcoding."
      },
      {
        "title": "Proses Lokalisasi dan Penerjemahan Profesional",
        "description": "Aplikasi CAT tool dan studio sulih suara memerlukan format terstandarisasi seperti SRT atau VTT untuk proses penyesuaian teks dan alih bahasa."
      },
      {
        "title": "Ekstraksi Teks Bersih untuk Model AI dan Transkripsi",
        "description": "Format SRT menyaring kode HTML kuno, menyisakan teks dialog murni yang sangat cocok untuk pencarian dokumen, indeks, dan pemrosesan bahasa alami."
      },
      {
        "title": "Pemutaran di Perangkat Mobile (iPhone, iPad, Android)",
        "description": "Aplikasi seperti Infuse, VLC, dan MX Player mendukung file .srt secara penuh, memudahkan Anda menikmati film saat bepergian."
      }
    ],
    "troubleshootTitle": "Panduan Pemecahan Masalah Konversi SMI ke SRT",
    "troubleshootSubtitle": "Kenali dan atasi berbagai kendala yang sering terjadi saat mengonversi file SAMI lama.",
    "troubleshootTips": [
      {
        "issue": "Huruf Korea tampil sebagai simbol aneh atau tanda tanya (mojibake)",
        "cause": "File .smi asli disimpan menggunakan encoding ANSI Korea (EUC-KR atau CP949) dan bukan UTF-8 Unicode.",
        "solution": "Pada menu konverter kami, pilih opsi 'EUC-KR / CP949 (Korea)' pada pilihan encoding sebelum mengonversi untuk memulihkan karakter asli."
      },
      {
        "issue": "Subtitle tampil terlalu lama di layar",
        "cause": "File tidak memiliki tag pembersih (<SYNC ...>&nbsp;), sehingga teks tetap muncul sampai giliran dialog berikutnya.",
        "solution": "Konverter kami secara otomatis membatasi durasi kemunculan subtitle (maksimal 7 detik). Pastikan fitur 'Normalisasi Spasi' dalam keadaan aktif."
      },
      {
        "issue": "Dialog bahasa Korea dan Inggris bercampur dalam satu baris subtitle",
        "cause": "File tersebut berformat bilingual dan memuat tag <P Class=KRCC> serta <P Class=ENCC> dalam blok yang sama.",
        "solution": "Gunakan menu pilihan trek bahasa untuk memilih 'Korea (KRCC)' saja atau 'Inggris (ENCC)' saja agar menghasilkan file SRT satu bahasa yang rapi."
      },
      {
        "issue": "Muncul tag seperti <font color=\"red\"> pada hasil file SRT",
        "cause": "File SAMI memuat tag gaya HTML yang bukan merupakan bagian dari format standar SubRip SRT.",
        "solution": "Aktifkan opsi 'Bersihkan Tag HTML / SAMI' di pengaturan agar kode HTML dibersihkan tanpa merusak isi teks percakapan."
      }
    ],
    "conclusionTitle": "Konversikan Subtitle SMI Anda ke SRT Sekarang Juga",
    "conclusionText": [
      "Format SAMI (.smi) memiliki tempat istimewa dalam sejarah perkembangan video digital, menghadirkan hiburan bagi jutaan pemirsa di Korea Selatan dan seluruh dunia selama lebih dari dua dekade. Namun, ekosistem perangkat masa kini menuntut kompatibilitas universal dan format yang bersih.",
      "Melalui konverter online SMI ke SRT kami, memperbarui koleksi subtitle Anda menjadi sangat mudah. Baik untuk merawat film klasik Korea, menyiapkan teks di Premiere Pro, maupun streaming serial di Smart TV melalui Plex, alat kami menyajikan hasil yang akurat dan menjaga privasi Anda secara penuh di browser.",
      "Tempelkan kode SAMI atau tarik file .smi Anda ke konverter di atas untuk menghasilkan subtitle SubRip (.srt) berkualitas tinggi dalam hitungan detik."
    ]
  },
  "tr": {
    "introTitle": "SMI (SAMI) Altyazılarını SRT Formatına Dönüştürme Rehberi",
    "introSubtitle": "Microsoft SAMI (.smi) altyazı dosyalarını evrensel SubRip (.srt) formatına dönüştürmeyi öğrenin. HTML tabanlı SAMI mimarisini, temizleme noktalarından bitiş sürelerini doğru hesaplamayı, Korece EUC-KR / CP949 kodlamalarını bozuk karakterler (mojibake) olmadan çözmeyi ve altyazıları Premiere Pro, DaVinci Resolve, Final Cut Pro ile VLC'ye sorunsuz aktarmayı keşfedin.",
    "introText": [
      "Dijital multimedya tarihinde altyazı formatları, video oynatıcıların gelişimiyle birlikte şekillenmiştir. 1990'ların sonunda Microsoft, Windows Media Player üzerinde zengin ve erişilebilir altyazılar sunmak amacıyla .smi veya .sami uzantılı SAMI (Synchronized Accessible Media Interchange) formatını geliştirdi. SAMI, HTML ve CSS belge modeline dayanarak özel yazı tipleri, metin renkleri, boyutlandırmalar ve aynı anda birden fazla dil izi desteği sağlayan döneminin çok ilerisinde bir formattı.",
      "SAMI formatının en büyük kültürel ve teknik etkiye ulaştığı ülke Güney Kore oldu. 2000'lerin başında geniş bant internetin hızla yaygınlaşmasıyla Koreli çeviri grupları (fansub) ve medya yayıncıları; televizyon dizileri (K-Drama), sinema filmleri ve animeler için .smi formatını ulusal standart haline getirdi. Günümüzde milyonlarca Kore dizisi ve film arşivi halen yalnızca SAMI (.smi) formatında saklanmaktadır.",
      "Buna karşın günümüz dijital ekosistemi açık, hafif ve evrensel formatları tercih etmektedir. Artık SubRip (.srt); VLC ve Plex gibi oynatıcılar, YouTube ve Netflix gibi akış servisleri ile Adobe Premiere Pro, DaVinci Resolve ve Apple Final Cut Pro gibi profesyonel kurgu programları için küresel standarttır. Modern cihazların neredeyse hiçbiri eski Microsoft SAMI formatını desteklememektedir.",
      "SMI formatını SRT'ye dönüştürmek bu teknik uyumsuzluğu ortadan kaldırır. SAMI dosyaları karmaşık HTML etiketleri, bitiş zamanı olmayan milisaniye zaman damgaları ve EUC-KR veya CP949 gibi eski kodlamalar içerdiğinden, dönüştürme işlemi dikkatli bir ayrıştırma gerektirir. Bu teknik rehber; iki formatın iç mimarisini, zaman hesaplama yöntemlerini, karakter kodlama çözümlerini ve profesyonel video kurgu süreçlerini tüm detaylarıyla açıklamaktadır."
    ],
    "whatIsTitle": "SMI (SAMI) Dosyası Nedir? Microsoft Altyazı Standardının Mimarisi",
    "whatIsText": [
      "SMI (.smi) dosyası, tam adıyla SAMI (Synchronized Accessible Media Interchange), HTML ve XML sözdizimine dayanan yapılandırılmış bir metin belgesidir. Microsoft, bu standardı 1998 yılında Windows Media teknolojilerinin bir parçası olarak dijital ses ve video akışlarına erişilebilir altyazı sağlamak amacıyla yayımlamıştır.",
      "Yapısal olarak bir SMI dosyası geleneksel bir web sayfasına benzer. <SAMI> etiketiyle başlar, içinde CSS stilleri barındıran bir <HEAD> bölümü (<STYLE TYPE=\"text/css\">) içerir ve altyazı repliklerini <BODY> bölümünde toplar. CSS içinde yazı tipleri (Gulim, Batang, Arial), renkler ve sınıflar tanımlanır. Her dil ayrı bir CSS sınıfı olarak belirtilir; örneğin Korece için .KRCC veya İngilizce için .ENCC gibi.",
      "Belgenin <BODY> kısmında altyazılar <SYNC Start=#####> etiketleriyle sıralanır; buradaki Start değeri videonun başlangıcından itibaren milisaniye cinsinden zamanı gösterir (örneğin 15,2. saniye için <SYNC Start=15200>). Ardından gelen paragraf etiketi (<P Class=KRCC>) dil sınıfını belirtir ve sonrasında diyalog metni yer alır. Satır sonları <BR> etiketleriyle oluşturulur.",
      "Buna karşın SubRip (.srt), HTML ağacından tamamen bağımsız, sade bir format olarak tasarlanmıştır. Bir SRT dosyası; sıralı sayaç blokları (1, 2, 3...), bir okla birleştirilen başlangıç ve bitiş saat zaman damgaları (00:00:15,200 --> 00:00:18,500), diyalog metni ve boş ayırıcı satırlardan oluşur. Dünyadaki tüm oynatıcılar tarafından tanınması, SRT'yi en pratik altyazı formatı yapmaktadır."
    ],
    "whyConvertTitle": "Neden SMI Altyazılarını SRT Formatına Dönüştürmelisiniz?",
    "whyConvertSubtitle": "Eski SAMI (.smi) altyazılarını evrensel SubRip (.srt) dosyalarına dönüştürmenin sağladığı önemli avantajları keşfedin.",
    "whyConvertReasons": [
      {
        "title": "Tüm Modern Cihazlarda Sorunsuz Oynatma",
        "description": "Akıllı televizyonlar (Samsung Tizen, LG webOS, Android TV), yayın cihazları (Apple TV, Fire TV, Roku) ve akıllı telefonlar .smi formatını desteklemez. SubRip (.srt) tüm ekranlarda yerel olarak çalışır."
      },
      {
        "title": "Profesyonel Kurgu Programlarıyla Tam Uyumluluk",
        "description": "Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro ve CapCut gibi yazılımlar .smi dosyalarını tanımaz. SRT'ye çevirerek altyazıları doğrudan zaman çizelgenize aktarabilirsiniz."
      },
      {
        "title": "Bozuk Karakterler Olmadan Kusursuz Unicode UTF-8 Metin",
        "description": "Eski Korece SMI dosyaları ANSI (EUC-KR / CP949) kodlaması kullanır ve modern cihazlarda bozuk karakterler (mojibake) oluşturur. Dönüştürme işlemi kusursuz UTF-8 SRT üretir."
      },
      {
        "title": "İki Dilli Altyazılarda Dil İzi Ayrımı",
        "description": "Birçok SAMI dosyasında Korece ve İngilizce aynı anda yer alır. SRT'ye dönüştürürken dilediğiniz dili tek bir dosyaya ayırarak ekran kirliliğini engelleyebilirsiniz."
      },
      {
        "title": "Plex, Emby ve Jellyfin'de İşlemciyi Yormayan Akış",
        "description": "Medya sunucuları .srt dosyalarını doğrudan oynatır; bu sayede işlemciyi tüketen ve takılmalara yol açan video kodlama (transcoding) süreçlerine gerek kalmaz."
      },
      {
        "title": "YouTube ve Sosyal Medyaya Yüklemeye Hazır",
        "description": "YouTube, Vimeo, Facebook, Twitter/X ve LinkedIn altyazı yüklemelerinde kesinlikle .srt formatı talep eder. SMI dosyalarını dönüştürmek altyazılarınızı anında internete hazır hale getirir."
      }
    ],
    "howToTitle": "SMI Dosyasını 3 Basit Adımda Online SRT'ye Dönüştürme",
    "howToSubtitle": "SAMI altyazılarınızı saniyeler içinde geçerli SubRip SRT dosyalarına dönüştürmek için bu adımları izleyin.",
    "howToSteps": [
      {
        "step": "1",
        "title": "SMI / SAMI Dosyanızı Yükleyin veya Yapıştırın",
        "description": ".smi dosyanızı dönüştürücü alanına sürükleyip bırakın, Dosya Seç düğmesine tıklayın ya da SAMI kodunu doğrudan metin kutusuna yapıştırın."
      },
      {
        "step": "2",
        "title": "Dil İzi ve Kodlama Ayarlarını Belirleyin",
        "description": "Dosyanız birden çok dil içeriyorsa (örneğin KRCC ve ENCC), istediğiniz dili seçin. Karakterlerin doğru görünmesi için uygun kodlamayı (UTF-8, EUC-KR veya CP949) belirleyin."
      },
      {
        "step": "3",
        "title": "Dönüştürülen SRT Dosyasını İndirin",
        "description": "Canlı önizlemeyi inceleyin ve .SRT İndir düğmesine tıklayarak dosyanızı hemen cihazınıza kaydedin veya metni doğrudan panonuza kopyalayın."
      }
    ],
    "differenceTitle": "Teknik Karşılaştırma: SMI (SAMI) ile SubRip (SRT)",
    "differenceSubtitle": "Microsoft SAMI formatı ile evrensel SubRip altyazı standardı arasındaki yapısal farkları inceleyin.",
    "differenceTable": [
      {
        "feature": "Geliştirici ve Köken",
        "smi": "Microsoft Corporation (1998, Windows Media Player için)",
        "srt": "SubRip Topluluğu (1990'ların sonu, DVD kopyalama için)"
      },
      {
        "feature": "Temel Yapı",
        "smi": "CSS <STYLE> bloğu içeren HTML / XML belge yapısı",
        "srt": "Sıralı numaralandırılmış bloklardan oluşan düz metin"
      },
      {
        "feature": "Zaman Damgası Biçimi",
        "smi": "Başlangıçtan itibaren milisaniye tamsayısı (<SYNC Start=12500>)",
        "srt": "Saat zaman kodları (HH:MM:SS,mmm --> HH:MM:SS,mmm)"
      },
      {
        "feature": "Altyazı Bitiş Süresi",
        "smi": "Örtük: bir sonraki <SYNC> veya &nbsp; temizleme noktasıyla belirlenir",
        "srt": "Açık: her altyazı için başlangıç ve bitiş zamanı ayrı ayrı yazılır"
      },
      {
        "feature": "Satır Sonu Ayrımı",
        "smi": "HTML etiketleri (<BR>, <br>, <br/>)",
        "srt": "Standart satır sonu karakterleri (\\n)"
      },
      {
        "feature": "Görsel Biçimlendirme",
        "smi": "Yazı tipi, renk ve boyut için gömülü CSS",
        "srt": "Temel etiketler (<i>, <b>, <u>) veya düz metin"
      },
      {
        "feature": "Çok Dilli Altyazı Desteği",
        "smi": "Tek dosya içinde yerel destek (<P Class=KRCC>, <P Class=ENCC>)",
        "srt": "Her dil için ayrı dosyalar (film.tr.srt)"
      },
      {
        "feature": "Yaygın Karakter Kodlaması",
        "smi": "Eski ANSI: EUC-KR, CP949 (Korece), Windows-1252",
        "srt": "BOM içermeyen evrensel Unicode UTF-8"
      },
      {
        "feature": "Güncel Cihaz Uyumluluğu",
        "smi": "Oldukça kısıtlı (eski Windows yazılımları)",
        "srt": "Evrensel (VLC, Plex, Smart TV, Premiere Pro, Web)"
      }
    ],
    "koreanEncodingTitle": "Korece SMI Altyazıları: EUC-KR ve CP949 Bozuk Karakter (Mojibake) Sorunu",
    "koreanEncodingSubtitle": "Korece altyazıların neden sıklıkla anlamsız semboller olarak göründüğünü ve doğru Hangul metninin nasıl elde edileceğini öğrenin.",
    "koreanEncodingText": [
      "Eski Korece SMI altyazılarıyla çalışırken en sık karşılaşılan problem 'mojibake'dir: Korece Hangul harfleri anlamsız sembollere ('¿©±â', '¾È³çÇÏ¼¿ä') veya soru işaretlerine dönüşür.",
      "Bunun sebebi eski kodlama standartlarıdır. 2000'li yıllarda Güney Kore'deki bilgisayarlarda metinler UTF-8 yerine Windows-949 (CP949) veya EUC-KR kodlamasıyla kaydedilirdi. CP949, Korece harfleri belirli 2 baytlık dizilere atamıştır.",
      "Modern bir işletim sistemi (macOS, iOS, Android, Linux) veya VLC bu dosyaları UTF-8 olarak okumaya çalıştığında baytlar eşleşmez ve metin bozulur.",
      "Dönüştürücümüz bu sorunu doğrudan tarayıcınızda çözer. Web tarayıcısı API'lerini kullanan sistemimiz EUC-KR, CP949 ve UTF-8 kodlamalarını hatasız ayrıştırır. Dosyanızın orijinal kodlamasını seçerek Korece metni orijinal haliyle kurtarabilir ve temiz bir UTF-8 SRT dosyası elde edebilirsiniz."
    ],
    "endTimeCalculationTitle": "SMI Zaman Hesaplaması: Her Altyazının Bitiş Süresi Nasıl Belirlenir?",
    "endTimeCalculationSubtitle": "Ayrıştırma motorumuzun tek bir milisaniye etiketinden SRT için başlangıç ve bitiş sürelerini nasıl çıkardığını öğrenin.",
    "endTimeCalculationText": [
      "SAMI ile SRT arasındaki temel farklardan biri sürelerin nasıl belirtildiğidir. SRT dosyasında her satır görünme ve kaybolma anını net olarak belirtir: '00:01:14,250 --> 00:01:17,800'. SAMI dosyasında ise yalnızca başlangıç anı bulunur: '<SYNC Start=74250>'.",
      "Altyazının ekrandan kaybolması için SAMI hazırlayanlar boşluk içeren bir sonraki senkronizasyon noktasını kullanır: '<SYNC Start=77800><P Class=KRCC>&nbsp;'. Oynatıcı 77.800 milisaniyeye ulaştığında ekranı temizler.",
      "Ancak birçok SAMI dosyasında bu temizleme etiketleri eksiktir ve altyazı bir sonraki konuşmaya kadar ekranda kalır. Uzun bir sessizlik veya müzik sahnesinde bu durum altyazının dakikalarca ekranda asılı kalmasına yol açar.",
      "Dönüştürücümüz akıllı bir zaman mantığı kullanır: (1) Eğer &nbsp; içeren bir temizleme noktası varsa, bu an kesin bitiş süresi olur. (2) Hemen ardından yeni bir diyalog geliyorsa, onun başlangıcı bir önceki altyazının bitişi kabul edilir. (3) Eğer iki altyazı arasındaki boşluk çok uzunsa, sistem karakter sayısına göre doğal bir okuma süresi (1,8 ile 7,0 saniye arasında) belirleyerek profesyonel bir akış sağlar."
    ],
    "exampleTitle": "Örnek Karşılaştırma: SAMI Kodu ile SubRip SRT Çıktısı",
    "exampleIntro": "Korece bir SAMI dosyasının HTML yapısı ile dönüştürücümüzün ürettiği temiz SubRip SRT çıktısını karşılaştırın:",
    "exampleSmiInput": "<SAMI>\n<HEAD>\n<TITLE>K-Drama 01. Bölüm</TITLE>\n<STYLE TYPE=\"text/css\">\n<!--\nP { font-family:gulim, sans-serif; font-size:14pt; color:white; }\n.KRCC { Name:Korean; lang:ko-KR; SAMIType:CC; }\n.ENCC { Name:English; lang:en-US; SAMIType:CC; }\n-->\n</STYLE>\n</HEAD>\n<BODY>\n<SYNC Start=1500><P Class=KRCC>\n안녕하세요! 오늘 날씨가 참 좋네요.\n<SYNC Start=4800><P Class=KRCC>&nbsp;\n<SYNC Start=6200><P Class=KRCC>\n네, 정말 산책하기 좋은 날씨예요.<BR>우리 공원에 갈까요?\n<SYNC Start=10500><P Class=KRCC>&nbsp;\n</BODY>\n</SAMI>",
    "exampleSrtOutput": "1\n00:00:01,500 --> 00:00:04,800\n안녕하세요! 오늘 날씨가 참 좋네요.\n\n2\n00:00:06,200 --> 00:00:10,500\n네, 정말 산책하기 좋은 날씨예요.\n우리 공원에 갈까요?",
    "exampleExplanation": "Bu örnekte orijinal SAMI dosyası HTML etiketleri, milisaniye değerleri (<SYNC Start=1500>) ve silme etiketleri (&nbsp;) içermektedir. Dönüştürücümüz HTML kodlarını temizler, <BR> etiketlerini standart satır sonuna çevirir, zamanları HH:MM:SS,mmm biçimine getirir ve tüm replikleri sıralı numaralandırır.",
    "bilingualTitle": "İki Dilli SMI Dosyaları: Çift Dil İzlerinin Yönetimi (KRCC ve ENCC)",
    "bilingualSubtitle": "Dönüştürücümüzün çok dilli SAMI dosyalarını diyalogları karıştırmadan veya kaybetmeden nasıl işlediğini görün.",
    "bilingualText": [
      "SAMI dosyalarının yaygın özelliklerinden biri iki dilli altyazı içerebilmesidir. Yabancı yapımlarda her sahnede iki etiket yer alabilir: '<SYNC Start=5000><P Class=KRCC>안녕하세요!<P Class=ENCC>Hello!'.",
      "Bu tür bir dosya sıradan yöntemlerle çevrildiğinde iki dil aynı altyazıda üst üste biner ve ekranı kaplar. Bazı durumlarda ise ikinci dil tamamen silinir.",
      "Aracımız CSS sınıflarını algılar ve kontrolü size verir: Dilerseniz tüm replikleri koruyabilir ya da yalnızca Korece (.KRCC) veya yalnızca İngilizce (.ENCC) izini seçerek Plex veya YouTube için bağımsız SRT dosyaları (film.ko.srt ve film.en.srt) oluşturabilirsiniz."
    ],
    "ffmpegTitle": "Komut Satırı Otomasyonu: FFmpeg ile SMI Dosyasını SRT'ye Dönüştürme",
    "ffmpegSubtitle": "Terminal veya komut istemi üzerinden FFmpeg kullanarak toplu altyazı dönüştürme işlemi yapın.",
    "ffmpegCommand": "ffmpeg -sub_charenc CP949 -i girdi.smi -c:s srt cikti.srt",
    "ffmpegExplanation": [
      "Büyük altyazı arşivlerine sahip kullanıcılar için açık kaynaklı FFmpeg yazılımı güçlü bir komut satırı dönüştürme imkanı sunar.",
      "Standart UTF-8 kodlu bir SMI dosyasını dönüştürmek için: 'ffmpeg -i girdi.smi -c:s srt cikti.srt' komutu yeterlidir.",
      "Eğer dosyanız Korece CP949 veya EUC-KR kodlamasındaysa, karakter parametresini belirtmeniz zorunludur: 'ffmpeg -sub_charenc CP949 -i girdi.smi -c:s srt cikti.srt'. Bu parametre girilmezse Korece metin bozulacaktır.",
      "FFmpeg yüzlerce dosyayı topluca işlemek için harika olsa da çevrimiçi aracımız hiçbir kurulum gerektirmeden tarayıcınızda aynı doğruluğu anında sağlar."
    ],
    "useCasesTitle": "SMI'den SRT'ye Dönüştürme İçin Gerçek Hayat Senaryoları",
    "useCasesSubtitle": "Çevirmenlerin, video editörlerinin ve sinemaseverlerin bu dönüştürmeyi günlük hayatta nasıl kullandığını öğrenin.",
    "useCasesList": [
      {
        "title": "Smart TV'lerde K-Drama ve Klasik Filmleri İzleme",
        "description": "Akıllı televizyonlar ve Plex gibi uygulamalar .smi formatını oynatamaz. SRT'ye dönüştürmek televizyonda kusursuz altyazı keyfi sunar."
      },
      {
        "title": "Premiere Pro ve DaVinci Resolve'da Video Kurgusu",
        "description": "Profesyonel video kurgu yazılımları SAMI dosyalarını desteklemez. SubRip formatına çevirerek altyazıları doğrudan projenizin zaman çizgisine sürükleyebilirsiniz."
      },
      {
        "title": "Medya Sunucusu Kütüphanelerini Güncelleme (Plex, Jellyfin)",
        "description": "Altyazılarınızı evrensel SRT standardına geçirerek sunucunuzun işlemcisini yoran video kodlama süreçlerinin önüne geçin."
      },
      {
        "title": "Profesyonel Çeviri ve Yerelleştirme Süreçleri",
        "description": "Bilgisayar destekli çeviri araçları (CAT) ve dublaj stüdyoları yerelleştirme süreçlerinde standart SRT veya VTT formatlarını şart koşar."
      },
      {
        "title": "Yapay Zeka ve Transkripsiyon Modelleri İçin Metin Çıkarma",
        "description": "SRT formatı eski HTML etiketlerini ayıklar; geriye arama motorları ve dil modelleri için ideal olan saf diyalog metinleri kalır."
      },
      {
        "title": "Mobil Cihazlarda (iPhone, iPad, Android) Seyir Keyfi",
        "description": "Infuse, VLC ve MX Player gibi mobil oynatıcılar .srt altyazılarını tam uyumla oynatarak seyahatlerde film izlemeyi kolaylaştırır."
      }
    ],
    "troubleshootTitle": "SMI'den SRT'ye Dönüştürmede Sık Karşılaşılan Sorunların Çözümü",
    "troubleshootSubtitle": "Eski SAMI dosyalarını işlerken karşılaşılabilecek yaygın hataları kolayca teşhis edin ve giderin.",
    "troubleshootTips": [
      {
        "issue": "Korece metin anlamsız semboller veya soru işaretleri olarak görünüyor (mojibake)",
        "cause": "Orijinal .smi dosyası UTF-8 Unicode yerine eski Korece ANSI (EUC-KR veya CP949) kodlamasıyla kaydedilmiştir.",
        "solution": "Dönüştürmeden önce kodlama açılır menüsünden 'EUC-KR / CP949 (Korece)' seçeneğini belirleyerek orijinal karakterleri kurtarın."
      },
      {
        "issue": "Altyazılar ekranda gereğinden uzun süre asılı kalıyor",
        "cause": "Dosyada temizleme etiketleri (<SYNC ...>&nbsp;) bulunmadığından metin bir sonraki diyaloğa kadar ekranda açık kalmaktadır.",
        "solution": "Dönüştürücümüz altyazı süresini doğal okuma limitleriyle (en fazla 7 saniye) sınırlandırır. 'Boşlukları Normalleştir' seçeneğini etkinleştirin."
      },
      {
        "issue": "Korece ve İngilizce diyaloglar aynı altyazı satırında birbirine karışmış",
        "cause": "Dosya iki dillidir ve aynı senkronizasyon bloğu içinde hem <P Class=KRCC> hem de <P Class=ENCC> etiketleri barındırmaktadır.",
        "solution": "Ayarlar panelindeki dil izi seçicisini kullanarak yalnızca 'Korece (KRCC)' veya 'İngilizce (ENCC)'yi seçin ve temiz bir dosya oluşturun."
      },
      {
        "issue": "Nihai SRT dosyasında <font color=\"red\"> gibi HTML etiketleri kalıyor",
        "cause": "SAMI dosyası, SubRip standardında yer almayan stil etiketleri barındırmaktadır.",
        "solution": "Ayarlar bölümünden 'HTML / SAMI Etiketlerini Temizle' seçeneğini aktif hale getirerek diyalog dışındaki tüm HTML kodlarını silin."
      }
    ],
    "conclusionTitle": "SMI Altyazılarınızı Bugün SRT Formatına Dönüştürün",
    "conclusionText": [
      "SAMI (.smi) formatı, yirmi yılı aşkın süre boyunca Güney Kore'de ve tüm dünyada dijital eğlenceye güç vererek multimedya tarihinde saygın bir yer edinmiştir. Ancak günümüzün teknolojik gereksinimleri evrensel uyumluluk ve sade dosya yapıları talep etmektedir.",
      "Çevrimiçi SMI SRT dönüştürücümüz ile altyazı koleksiyonunuzu yenilemek son derece kolaydır. İster klasik Kore sinemasını koruyun, ister Premiere Pro'da video kurgulayın ya da akıllı televizyonunuzda dizi izleyin; aracımız anında ve gizliliğinizi koruyarak sonuç üretir.",
      "SAMI kodunuzu yapıştırın veya .smi dosyanızı yukarıdaki alana bırakarak saniyeler içinde kullanıma hazır SubRip (.srt) altyazıları oluşturun."
    ]
  },
  "it": {
    "introTitle": "La Guida Completa per Convertire Sottotitoli SMI (SAMI) in SRT",
    "introSubtitle": "Impara a convertire i file di sottotitoli Microsoft SAMI (.smi) nel formato universale SubRip (.srt). Scopri come funziona la struttura HTML di SAMI, come calcolare tempi di fine precisi dai punti di cancellazione, come risolvere i problemi di codifica coreana EUC-KR / CP949 senza caratteri corrotti (mojibake) e come importare i sottotitoli in Premiere Pro, DaVinci Resolve, Final Cut Pro e VLC.",
    "introText": [
      "Nella storia dei formati multimediali digitali, i sottotitoli si sono evoluti di pari passo con i software di riproduzione video. Alla fine degli anni '90, Microsoft presentò la specifica SAMI (Synchronized Accessible Media Interchange), contrassegnata dall'estensione .smi o .sami, per consentire sottotitoli ricchi e formattati su Windows Media Player. SAMI era un formato all'avanguardia per l'epoca: basato su HTML e CSS, permetteva la scelta dei caratteri, colori personalizzati, dimensioni del testo e la gestione di più lingue in contemporanea.",
      "È in Corea del Sud che il formato SAMI ha ottenuto il suo maggiore riscontro culturale e tecnico. Con l'esplosione della banda larga all'inizio degli anni 2000, le comunità di traduttori e le emittenti televisive coreane elessero il formato .smi a standard indiscutibile per serie TV (K-Drama), film cinematografici e animazione. Ancora oggi, milioni di episodi e archivi storici rimangono conservati esclusivamente in formato SAMI (.smi).",
      "Tuttavia, i flussi di lavoro moderni si sono orientati verso formati snelli, aperti e multipiattaforma. Oggi, SubRip (.srt) è lo standard mondiale per lettori come VLC e Plex, piattaforme come YouTube e Netflix e programmi di montaggio come Adobe Premiere Pro, DaVinci Resolve e Apple Final Cut Pro. Praticamente nessun dispositivo moderno supporta il formato proprietario Microsoft SAMI.",
      "La conversione da SMI a SRT elimina questo ostacolo. Poiché i file SAMI contengono codice HTML, timestamp in millisecondi privi di orario di fine e codifiche storiche come EUC-KR o CP949, la conversione manuale provoca errori di sincronizzazione e testo illeggibile. Questa guida analizza l'architettura dei formati, il calcolo dei tempi, le soluzioni per le codifiche e le migliori procedure per il montaggio e la visione."
    ],
    "whatIsTitle": "Cos'è un File SMI (SAMI)? Struttura dello Standard Microsoft",
    "whatIsText": [
      "Un file SMI (.smi), noto anche con l'acronimo SAMI (Synchronized Accessible Media Interchange), è un documento di testo strutturato basato sulla sintassi HTML e XML. Microsoft pubblicò la specifica SAMI 1.0 nel 1998 nell'ambito delle tecnologie Windows Media per fornire sottotitoli sincronizzati ed elementi di accessibilità per flussi audio e video digitali.",
      "A livello strutturale, un file SMI si presenta come una pagina web. Inizia con il tag <SAMI>, presenta una sezione <HEAD> con fogli di stile CSS (<STYLE TYPE=\"text/css\">) e raggruppa tutti i sottotitoli all'interno della sezione <BODY>. Nel CSS vengono definiti caratteri tipografici (Gulim, Batang, Arial), colori, dimensioni e classi. Ciascuna lingua viene dichiarata come una classe CSS autonoma, ad esempio .KRCC per il coreano o .ENCC per l'inglese.",
      "Nel <BODY>, le battute vengono cadenzate da tag <SYNC Start=#####>, dove Start indica il momento di apparizione in millisecondi assoluti dall'inizio del video (ad esempio <SYNC Start=15200> per 15,2 secondi). Segue un tag di paragrafo (<P Class=KRCC>) che definisce la lingua parlata e il testo della battuta. Le interruzioni di riga vengono generate con tag HTML <BR>.",
      "Al contrario, SubRip (.srt) è nato come formato essenziale e indipendente da strutture HTML. Un file SRT è costituito da blocchi numerati sequenzialmente (1, 2, 3...), orari di orologio indicanti inizio e fine separati da una freccia (00:00:15,200 --> 00:00:18,500), il testo del dialogo e righe vuote di separazione. La compatibilità universale rende SRT il formato ideale per qualsiasi dispositivo moderno."
    ],
    "whyConvertTitle": "Perché Convertire i Sottotitoli SMI in SRT?",
    "whyConvertSubtitle": "Scopri i principali vantaggi nel trasformare i sottotitoli SAMI (.smi) in file universali SubRip (.srt).",
    "whyConvertReasons": [
      {
        "title": "Compatibilità Totale su Tutti i Dispositivi",
        "description": "Le Smart TV (Samsung Tizen, LG webOS, Android TV), i dispositivi di streaming (Apple TV, Roku, Fire TV) e gli smartphone non leggono i file .smi. SubRip (.srt) funziona in modo nativo ovunque."
      },
      {
        "title": "Integrazione Perfetta con i Software di Montaggio",
        "description": "Applicazioni professionali come Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro e CapCut non supportano i file .smi. Convertire in .srt consente di trascinare i sottotitoli direttamente sulla timeline."
      },
      {
        "title": "Testo Perfetto in Unicode UTF-8 senza Errori",
        "description": "I file SMI coreani storici usano codifiche ANSI (EUC-KR / CP949) che generano caratteri illeggibili (mojibake). La conversione produce file SRT puliti in UTF-8 impeccabile."
      },
      {
        "title": "Separazione delle Tracce Bilingue",
        "description": "Molti file SAMI contengono sia il coreano che l'inglese nello stesso file. Convertendo in SRT puoi estrarre ciascuna lingua in un file separato per non affollare lo schermo."
      },
      {
        "title": "Riproduzione Diretta su Plex, Emby e Jellyfin",
        "description": "I media server riproducono i file .srt direttamente senza richiedere una pesante transcodifica video che sovraccarica il processore."
      },
      {
        "title": "Pronto per Social Network e Piattaforme Web",
        "description": "YouTube, Vimeo, Facebook, Twitter/X e LinkedIn richiedono obbligatoriamente il formato .srt per i sottotitoli. Convertire i file SMI assicura la piena conformità per il web."
      }
    ],
    "howToTitle": "Come Convertire SMI in SRT Online in 3 Semplici Passaggi",
    "howToSubtitle": "Segui queste istruzioni passo passo per trasformare i tuoi file SAMI in sottotitoli SRT conformi in pochi istanti.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Carica o Incolla il File SMI / SAMI",
        "description": "Trascina e rilascia il file .smi nell'area del convertitore, fai clic su Sfoglia File o incolla direttamente il testo SAMI nella casella di testo."
      },
      {
        "step": "2",
        "title": "Seleziona Lingua e Opzioni di Codifica",
        "description": "Se il file contiene più lingue (come KRCC ed ENCC), scegli la traccia desiderata. Seleziona la codifica corretta (UTF-8, EUC-KR o CP949) per evitare caratteri corrotti."
      },
      {
        "step": "3",
        "title": "Scarica il File SRT Convertito",
        "description": "Esamina l'anteprima e fai clic su Scarica .SRT per salvare subito il tuo file SubRip, oppure copia il testo per il tuo editor video."
      }
    ],
    "differenceTitle": "Confronto Tecnico: SMI (SAMI) rispetto a SubRip (SRT)",
    "differenceSubtitle": "Approfondisci le differenze architetturali tra il formato SAMI di Microsoft e lo standard universale SubRip.",
    "differenceTable": [
      {
        "feature": "Sviluppatore e Origine",
        "smi": "Microsoft Corporation (1998, per Windows Media Player)",
        "srt": "Comunità SubRip (Fine anni '90, per il ripping dei DVD)"
      },
      {
        "feature": "Struttura di Base",
        "smi": "Documento HTML / XML con blocco stili CSS <STYLE>",
        "srt": "Testo semplice strutturato in blocchi sequenziali"
      },
      {
        "feature": "Formato dei Timestamp",
        "smi": "Interi in millisecondi dall'inizio (<SYNC Start=12500>)",
        "srt": "Orari di orologio (HH:MM:SS,mmm --> HH:MM:SS,mmm)"
      },
      {
        "feature": "Fine della Battuta",
        "smi": "Implicita: determinata dal successivo <SYNC> o tag &nbsp;",
        "srt": "Esplicita: inizio e fine indicati per ciascun sottotitolo"
      },
      {
        "feature": "Interruzioni di Riga",
        "smi": "Tag HTML (<BR>, <br>, <br/>)",
        "srt": "A capo standard (\\n)"
      },
      {
        "feature": "Stile Tipografico",
        "smi": "CSS incorporato per font, colori, dimensioni e allineamento",
        "srt": "Tag basilari (<i>, <b>, <u>) o testo semplice"
      },
      {
        "feature": "Tracce Multilingue",
        "smi": "Nativo in un unico file (<P Class=KRCC>, <P Class=ENCC>)",
        "srt": "File distinti per ciascuna lingua (film.it.srt)"
      },
      {
        "feature": "Codifica Abituale",
        "smi": "ANSI ereditato: EUC-KR, CP949 (coreano), Windows-1252",
        "srt": "Unicode UTF-8 universale senza BOM"
      },
      {
        "feature": "Compatibilità Odierna",
        "smi": "Estremamente limitata (vecchi riproduttori Windows)",
        "srt": "Universale (VLC, Plex, Smart TV, Premiere Pro, Web)"
      }
    ],
    "koreanEncodingTitle": "Sottotitoli Coreani SMI: Risolvere i Caratteri Corrotti EUC-KR e CP949 (Mojibake)",
    "koreanEncodingSubtitle": "Scopri perché i sottotitoli in coreano appaiono spesso come simboli illeggibili e come ripristinare il testo originale.",
    "koreanEncodingText": [
      "Uno dei problemi più ricorrenti con i sottotitoli SMI coreani è il cosiddetto 'mojibake': i caratteri coreani (hangul) si trasformano in simboli incomprensibili ('¿©±â', '¾È³çÇÏ¼¿ä') o punti interrogativi.",
      "Questo fenomeno deriva dagli standard di codifica adottati in passato. Negli anni 2000 in Corea del Sud, i file venivano registrati con la codifica Windows-949 (CP949) o EUC-KR invece di UTF-8 Unicode. Il sistema CP949 associava i caratteri coreani a specifiche coppie di byte.",
      "Quando un sistema operativo moderno (macOS, iOS, Android, Linux) o VLC prova ad aprire questi file come UTF-8, i byte non combaciano e il testo diventa illeggibile.",
      "Il nostro convertitore risolve questo problema direttamente nel browser web. Tramite API native, lo strumento supporta EUC-KR, CP949 e UTF-8. Basta selezionare la codifica originaria per recuperare il testo coreano integro ed esportare un file SRT in UTF-8 perfetto."
    ],
    "endTimeCalculationTitle": "Calcolo dei Tempi in SMI: Come Viene Stabilita la Fine di Ogni Sottotitolo",
    "endTimeCalculationSubtitle": "Scopri come il nostro motore di conversione deduce con precisione gli intervalli di tempo per il formato SRT.",
    "endTimeCalculationText": [
      "Una differenza cruciale tra SAMI e SRT risiede nella definizione dei tempi. In un file SRT, ogni riga dichiara inizio e fine: '00:01:14,250 --> 00:01:17,800'. Nel formato SAMI, invece, viene specificato solo il tempo di comparsa: '<SYNC Start=74250>'.",
      "Per fare sparire il testo dallo schermo, chi crea i file SAMI inserisce un punto di sincronizzazione successivo con uno spazio vuoto: '<SYNC Start=77800><P Class=KRCC>&nbsp;'. Raggiunti i 77.800 millisecondi, il player cancella la battuta dallo schermo.",
      "Molti file SMI, tuttavia, omettono questi tag di cancellazione e attendono che il dialogo successivo sostituisca il precedente. In caso di pause prolungate o musica, la battuta rimarrebbe visibile per interi minuti in modo errato.",
      "Il nostro convertitore adotta una logica intelligente: (1) Se è presente un tag con &nbsp;, il tempo relativo diventa la fine esatta. (2) Se segue un nuovo dialogo entro breve tempo, il suo inizio segna la fine del precedente. (3) Se l'intervallo è troppo esteso, il sistema stima una durata di lettura naturale in base ai caratteri (tra 1,8 e 7,0 secondi), garantendo una visione confortevole."
    ],
    "exampleTitle": "Esempio Comparativo: Codice SAMI rispetto a Risultato SubRip SRT",
    "exampleIntro": "Metti a confronto il codice sorgente HTML di un file SAMI coreano con l'output pulito in formato SubRip SRT generato dal nostro convertitore:",
    "exampleSmiInput": "<SAMI>\n<HEAD>\n<TITLE>K-Drama Episodio 01</TITLE>\n<STYLE TYPE=\"text/css\">\n<!--\nP { font-family:gulim, sans-serif; font-size:14pt; color:white; }\n.KRCC { Name:Korean; lang:ko-KR; SAMIType:CC; }\n.ENCC { Name:English; lang:en-US; SAMIType:CC; }\n-->\n</STYLE>\n</HEAD>\n<BODY>\n<SYNC Start=1500><P Class=KRCC>\n안녕하세요! 오늘 날씨가 참 좋네요.\n<SYNC Start=4800><P Class=KRCC>&nbsp;\n<SYNC Start=6200><P Class=KRCC>\n네, 정말 산책하기 좋은 날씨예요.<BR>우리 공원에 갈까요?\n<SYNC Start=10500><P Class=KRCC>&nbsp;\n</BODY>\n</SAMI>",
    "exampleSrtOutput": "1\n00:00:01,500 --> 00:00:04,800\n안녕하세요! 오늘 날씨가 참 좋네요.\n\n2\n00:00:06,200 --> 00:00:10,500\n네, 정말 산책하기 좋은 날씨예요.\n우리 공원에 갈까요?",
    "exampleExplanation": "In questo esempio, il file SAMI originale contiene tag HTML, timestamp in millisecondi (<SYNC Start=1500>) e punti di cancellazione (&nbsp;). Il convertitore rimuove i tag HTML superflui, trasforma <BR> in a capo standard, converte i tempi nel formato HH:MM:SS,mmm e assegna numeri progressivi a ciascun blocco.",
    "bilingualTitle": "File SMI Bilingue: Gestione delle Tracce Doppie (KRCC ed ENCC)",
    "bilingualSubtitle": "Come il nostro convertitore separa le tracce multilingue senza sovrapporre dialoghi né perdere informazioni.",
    "bilingualText": [
      "Una caratteristica comune nei file SAMI è la presenza di sottotitoli in due lingue contemporaneamente. Nelle produzioni straniere, ogni scena include spesso due tag: '<SYNC Start=5000><P Class=KRCC>안녕하세요!<P Class=ENCC>Hello!'.",
      "Se si converte questo file con metodi semplicistici, entrambe le lingue finiscono nello stesso sottotitolo, ingombrando lo schermo. In altri casi, la seconda lingua viene cancellata per errore.",
      "Il nostro convertitore individua le classi CSS e ti consente di scegliere: puoi mantenere entrambi i testi oppure estrarre solo la traccia coreana (.KRCC) o solo quella inglese (.ENCC), creando file separati (film.ko.srt e film.en.srt) pronti per Plex o YouTube."
    ],
    "ffmpegTitle": "Automazione da Riga di Comando: Convertire SMI in SRT con FFmpeg",
    "ffmpegSubtitle": "Esegui conversioni di sottotitoli in blocco direttamente dal tuo terminale con FFmpeg.",
    "ffmpegCommand": "ffmpeg -sub_charenc CP949 -i input.smi -c:s srt output.srt",
    "ffmpegExplanation": [
      "Per gli utenti esperti e gli amministratori con grandi librerie video, il software open source FFmpeg consente di convertire i sottotitoli da riga di comando.",
      "Per un file SMI standard con codifica UTF-8, il comando da usare è: 'ffmpeg -i input.smi -c:s srt output.srt'.",
      "Se il file è coreano e codificato in CP949 o EUC-KR, è fondamentale specificare la codifica con il parametro '-sub_charenc': 'ffmpeg -sub_charenc CP949 -i input.smi -c:s srt output.srt'. In caso contrario, il testo coreano risulterà illeggibile.",
      "Benché FFmpeg sia straordinario per elaborazioni in blocco, il nostro convertitore web offre la medesima accuratezza all'istante nel tuo browser senza bisogno di installare software o configurare la shell."
    ],
    "useCasesTitle": "Scenari di Utilizzo Reali per la Conversione da SMI a SRT",
    "useCasesSubtitle": "Scopri come traduttori, video editor e appassionati di cinema utilizzano la conversione da SMI a SRT nella vita di tutti i giorni.",
    "useCasesList": [
      {
        "title": "Guardare K-Drama e Film Storici su Smart TV",
        "description": "I televisori moderni e le app come Plex non aprono i file .smi. Convertire in .srt consente di godersi i sottotitoli con la massima nitidezza sul grande schermo."
      },
      {
        "title": "Montaggio Video con Premiere Pro e DaVinci Resolve",
        "description": "I programmi professionali non accettano i file SAMI. La conversione in SubRip permette di trascinare i sottotitoli direttamente sulla timeline di montaggio."
      },
      {
        "title": "Aggiornamento dei Media Server (Plex, Jellyfin)",
        "description": "Converti i vecchi archivi in formato SRT per garantire la riproduzione diretta senza affaticare il processore con la transcodifica video."
      },
      {
        "title": "Processi di Traduzione e Localizzazione Professionale",
        "description": "Gli strumenti CAT e gli studi di doppiaggio richiedono formati standard come SRT o VTT per il sincronismo e la traduzione dei testi."
      },
      {
        "title": "Estrazione di Testo per Modelli di IA e Trascrizioni",
        "description": "Il formato SRT elimina il codice HTML antiquato, lasciando solo i dialoghi puri, perfetti per motori di ricerca, indicizzazione e modelli linguistici."
      },
      {
        "title": "Visione su Dispositivi Mobili (iPhone, iPad, Android)",
        "description": "Lettori come Infuse, VLC e MX Player leggono nativamente i file .srt, garantendo un'esperienza di visione fluida anche in viaggio."
      }
    ],
    "troubleshootTitle": "Risoluzione dei Problemi Comuni nella Conversione da SMI a SRT",
    "troubleshootSubtitle": "Individua e risolvi le problematiche più frequenti nella gestione dei vecchi file SAMI.",
    "troubleshootTips": [
      {
        "issue": "Il testo coreano appare come simboli strani o punti interrogativi (mojibake)",
        "cause": "Il file .smi originario è stato salvato con codifica ANSI coreana (EUC-KR o CP949) anziché in UTF-8 Unicode.",
        "solution": "Nel nostro convertitore, seleziona 'EUC-KR / CP949 (Coreano)' nel menu a discesa prima di procedere per ripristinare i caratteri originali."
      },
      {
        "issue": "I sottotitoli restano visibili sullo schermo troppo a lungo",
        "cause": "Nel file mancano i tag di cancellazione (<SYNC ...>&nbsp;), per cui il testo rimane visualizzato fino alla battuta successiva.",
        "solution": "Il convertitore limita automaticamente la durata al tempo naturale di lettura (massimo 7 secondi). Assicurati che 'Normalizza Spazi' sia attivo."
      },
      {
        "issue": "I dialoghi in coreano e in inglese appaiono uniti nello stesso sottotitolo",
        "cause": "Il file è bilingue e contiene sia <P Class=KRCC> che <P Class=ENCC> nello stesso blocco di sincronizzazione.",
        "solution": "Usa il menu delle tracce di lingua per estrarre solo 'Coreano (KRCC)' o solo 'Inglese (ENCC)' e ottenere un file SRT pulito a lingua singola."
      },
      {
        "issue": "Nel file SRT finale compaiono tag come <font color=\"red\">",
        "cause": "Il file SAMI contiene tag di stile HTML che non appartengono allo standard SubRip SRT.",
        "solution": "Attiva l'opzione 'Pulisci Tag HTML / SAMI' nelle impostazioni per rimuovere il codice HTML mantenendo intatti i dialoghi."
      }
    ],
    "conclusionTitle": "Converti i Tuoi Sottotitoli SMI in SRT Oggi Stesso",
    "conclusionText": [
      "Il formato SAMI (.smi) occupa un posto d'onore nella storia multimediale, avendo offerto intrattenimento a milioni di spettatori in Corea del Sud e nel mondo per oltre due decenni. Tuttavia, le attuali piattaforme video richiedono compatibilità universale e file snelli.",
      "Con il nostro convertitore online da SMI a SRT, modernizzare i tuoi file di sottotitoli è questione di attimi. Che si tratti di preservare film d'autore, montare video in Premiere Pro o guardare serie TV sulla Smart TV con Plex, il nostro strumento garantisce precisione e riservatezza nel tuo browser.",
      "Incolla il codice SAMI o trascina il tuo file .smi nel riquadro superiore per ottenere sottotitoli SubRip (.srt) impeccabili in pochi secondi."
    ]
  }
};

export function getSmiToSrtGuideContent(locale: Locale): SmiToSrtGuideContent {
  return SMI_TO_SRT_GUIDES[locale] || SMI_TO_SRT_GUIDES['en'];
}
