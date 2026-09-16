import type { Locale } from './config';

export interface SrtToSmiGuideContent {
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

export const SRT_TO_SMI_GUIDES: Record<Locale, SrtToSmiGuideContent> = {
  "en": {
    "introTitle": "The Complete Guide to Converting SRT to SMI (SAMI) Subtitles",
    "introSubtitle": "Master the conversion of SubRip (.srt) subtitle files into Microsoft SAMI (.smi) closed captions. Discover how HTML-based SAMI architecture functions, how clock-based SRT timestamps translate into millisecond <SYNC> tags, how to generate clean end-time clearance markers, and how to optimize subtitle playback in Windows Media Player, GOM Player, and PotPlayer.",
    "introText": [
      "SubRip (.srt) is celebrated throughout the modern media landscape as the global standard for video subtitling. Its minimalist design—combining sequential cue numbers, clock timestamps formatted as hours, minutes, seconds, and milliseconds, and plain dialogue text—makes it effortlessly compatible with web players, mobile operating systems, streaming servers, and professional non-linear video editors like Adobe Premiere Pro and DaVinci Resolve.",
      "However, specific media ecosystems, educational language software, legacy Windows environments, and major East Asian media players continue to rely fundamentally on Microsoft SAMI (.smi) files. Developed by Microsoft in 1998 for Windows Media Player, Synchronized Accessible Media Interchange (SAMI) uses an HTML-like document model with CSS styling, custom language classes, and millisecond-based <SYNC Start=\"...\"> tags. In South Korea, SAMI (.smi) has remained a cornerstone format for two decades across popular players like GOM Player, PotPlayer, and KMPlayer.",
      "When content creators, video translators, or media archivists need to deliver subtitles for platforms or users that demand the SAMI format, converting SRT to SMI becomes an indispensable workflow step. The conversion requires far more than changing the file extension: clock timecodes must be accurately computed into absolute millisecond integers, multi-line subtitles must be formatted with HTML line breaks (<BR>), document headers and CSS classes (.KRCC, .ENCC) must be configured, and crucial end-time clearance points (&nbsp;) must be inserted so subtitles do not linger indefinitely on screen.",
      "This in-depth technical guide examines the structural distinctions between SRT and SMI, the mathematical conversion of timestamps, best practices for managing bilingual closed caption classes, command-line conversion techniques using FFmpeg, and troubleshooting solutions for common subtitle synchronization hurdles."
    ],
    "whatIsTitle": "What is an SRT File and What is an SMI (SAMI) File?",
    "whatIsText": [
      "A SubRip (.srt) file is a lightweight, line-oriented plain-text document designed exclusively for subtitle display. Each cue in an SRT file comprises three or four lines: a sequential counter (1, 2, 3...), a timeline range declaring explicit start and end clock times separated by an ASCII arrow (00:01:23,456 --> 00:01:27,890), one or more dialogue lines, and a blank line marking the conclusion of the cue. SRT files do not require document headers, XML wrappers, or styling declarations.",
      "In stark contrast, a Microsoft SAMI (.smi or .sami) file is structured as a full HTML/XML document. It opens with an outer <SAMI> tag, contains a <HEAD> section with an embedded CSS style sheet (<STYLE TYPE=\"text/css\">), and places all subtitle dialogue inside a <BODY> element. Crucially, each spoken line in a SAMI file is introduced by a <SYNC Start=#####> tag, where the timecode represents total elapsed milliseconds from the start of the video (for example, 83456 ms instead of 00:01:23,456).",
      "Furthermore, SAMI associates every dialogue block with a specific CSS class tag (<P Class=KRCC>), which identifies the language track (such as Korean or English) and applies typographic rules including font face (Gulim, Batang, Arial), text color, font size, and text alignment. While SRT is lightweight and universally supported by modern web standards, SAMI offers structured CSS styling and built-in multi-track language tagging within a single file."
    ],
    "whyConvertTitle": "Why Convert SRT Subtitles to SMI / SAMI?",
    "whyConvertSubtitle": "Explore the most common technical scenarios where converting SubRip (.srt) to Microsoft SAMI (.smi) is essential.",
    "whyConvertReasons": [
      {
        "title": "Full Compatibility with Korean Media Players",
        "description": "Leading South Korean media players such as GOM Player, PotPlayer, and KMPlayer provide specialized features—such as dual subtitle display, custom Korean font rendering, and synchronized language learning—that work natively with SAMI (.smi) files containing KRCC and ENCC classes."
      },
      {
        "title": "Legacy Windows Media Player Support",
        "description": "Older enterprise workstations, embedded Windows systems, and interactive kiosks running Windows Media Player 9, 10, or 11 support closed captioning natively through SAMI files without requiring third-party DirectShow filter installations like DirectVobSub (VSFilter)."
      },
      {
        "title": "Interactive Educational & Language Learning Software",
        "description": "Specialized language learning applications in South Korea and Japan parse SAMI <P Class=...> tags to highlight vocabulary, synchronize dictionary lookups, and toggle between foreign and native dialogue tracks simultaneously."
      },
      {
        "title": "Broadcast Captioning & Archival Requirements",
        "description": "Certain legacy broadcasting workflows, regional cable networks, and historical television archives retain strict technical delivery specifications requiring SAMI (.smi) container structures with embedded CSS style sheets."
      },
      {
        "title": "Embedded Typography & Styling Support",
        "description": "Unlike plain SRT, which relies heavily on player defaults, SAMI allows subtitle creators to specify fallback font families (such as Gulim or Arial), point sizes, and center alignment directly inside the file's <STYLE> block."
      }
    ],
    "howToTitle": "How to Convert SRT to SMI Online (Step-by-Step)",
    "howToSubtitle": "Follow these simple steps to transform your SubRip subtitle files into clean, player-ready Microsoft SAMI captions.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Upload or Paste Your SRT Subtitles",
        "description": "Drag and drop your .srt file directly onto the upload zone, select Browse Files to choose a document from your computer or smartphone, or copy and paste your SubRip subtitle text directly into the left input pane."
      },
      {
        "step": "2",
        "title": "Configure SAMI Language Track & Clearance Settings",
        "description": "Select your target SAMI language class (.KRCC for Korean, .ENCC for English, .ESCC for Spanish, etc.) and ensure 'Add Blank Sync Points' is checked so your subtitles disappear cleanly at the exact end time."
      },
      {
        "step": "3",
        "title": "Preview and Download Your .SMI File",
        "description": "Review the instant conversion preview in the right output pane, then click Download .SMI to save the formatted file to your device, or click Copy to paste the markup directly into your subtitle editor."
      }
    ],
    "differenceTitle": "SRT vs. SMI: Comprehensive Format Comparison",
    "differenceSubtitle": "Compare the architectural, temporal, and compatibility differences between SubRip and Microsoft SAMI.",
    "differenceTable": [
      {
        "feature": "File Extension",
        "smi": ".smi, .sami",
        "srt": ".srt"
      },
      {
        "feature": "Document Architecture",
        "smi": "HTML / XML structure (<SAMI>, <HEAD>, <BODY>)",
        "srt": "Sequential plain-text blocks (index, time, text)"
      },
      {
        "feature": "Timestamp Format",
        "smi": "Elapsed milliseconds (<SYNC Start=12345>)",
        "srt": "Clock format (HH:MM:SS,mmm --> HH:MM:SS,mmm)"
      },
      {
        "feature": "End-Time Representation",
        "smi": "Implicit; cleared via blank sync marker (&nbsp;)",
        "srt": "Explicit end timecode on every cue line"
      },
      {
        "feature": "Styling & Typography",
        "smi": "Embedded CSS (<STYLE TYPE=\"text/css\">)",
        "srt": "Basic HTML tags only (<i>, <b>, <u>, <font>)"
      },
      {
        "feature": "Multi-Language Support",
        "smi": "Native via CSS classes (.KRCC, .ENCC, .FRCC)",
        "srt": "Single language per file only"
      },
      {
        "feature": "Line Break Formatting",
        "smi": "HTML <BR> tags",
        "srt": "Standard newline characters (\\n or \\r\\n)"
      },
      {
        "feature": "Primary Player Ecosystem",
        "smi": "GOM Player, PotPlayer, Windows Media Player",
        "srt": "VLC, Plex, YouTube, Premiere Pro, DaVinci Resolve"
      }
    ],
    "koreanEncodingTitle": "Understanding SAMI Timestamps: From Clock Codes to Milliseconds",
    "koreanEncodingSubtitle": "The mathematical principles behind converting SRT clock times into SAMI <SYNC> tags.",
    "koreanEncodingText": [
      "The defining technical challenge of converting SRT to SMI lies in how the two formats conceptualize timeline synchronization. SubRip specifies a closed time interval for every subtitle cue using the format HH:MM:SS,mmm --> HH:MM:SS,mmm. For example, a cue starting at 1 minute, 24 seconds, and 500 milliseconds and ending at 1 minute, 28 seconds, and 200 milliseconds is rendered as `00:01:24,500 --> 00:01:28,200`.",
      "Microsoft SAMI, on the other hand, operates on an open-ended timeline governed by discrete event triggers. Instead of stating an end time directly, SAMI uses the `<SYNC Start=#####>` tag, where the value represents total milliseconds from the beginning of the stream. To calculate this value from an SRT start time, our converter uses the exact formula: StartMs = (Hours * 3,600,000) + (Minutes * 60,000) + (Seconds * 1,000) + Milliseconds. For 00:01:24,500, this yields (1 * 60,000) + (24 * 1,000) + 500 = 84,500 ms.",
      "Because SAMI has no cue duration parameter, a subtitle displayed at <SYNC Start=84500> would remain permanently visible on screen until the next spoken subtitle triggers—unless an explicit clearance event is introduced. To ensure the subtitle vanishes exactly when intended (at 88,200 ms), the converter calculates the end time in milliseconds and inserts an empty sync event: `<SYNC Start=88200><P Class=KRCC>&nbsp;`. This elegant mechanism guarantees frame-accurate subtitle clearance in all SAMI-compliant players."
    ],
    "endTimeCalculationTitle": "Managing Language Classes (.KRCC, .ENCC) in SAMI Files",
    "endTimeCalculationSubtitle": "How SAMI's CSS class architecture enables multilingual caption tracks.",
    "endTimeCalculationText": [
      "One of the most powerful features of the Microsoft SAMI specification is its built-in capacity for multilingual closed captioning within a single unified file. In a SAMI document's `<STYLE>` block, creators declare specific CSS classes assigned to language codes. For instance, `.KRCC { Name: Korean; lang: ko-KR; SAMIType: CC; }` defines the primary Korean track, while `.ENCC { Name: English; lang: en-US; SAMIType: CC; }` defines the accompanying English track.",
      "When our converter translates an SRT file to SMI, you can choose the precise language class applied to your subtitle cues. If you are preparing subtitles for a Korean audience using PotPlayer or GOM Player, selecting `KRCC` ensures that player caption renderers immediately recognize the dialogue as the primary Korean track and apply customized Korean typography (such as Gulim font smoothing).",
      "Similarly, if you have two separate SRT files (one in English and one in Korean), you can convert both using corresponding language classes (`ENCC` and `KRCC`) and merge the sync blocks into a single bilingual SAMI file. Compatible media players then allow viewers to toggle between English subtitles, Korean subtitles, or display both simultaneously as split-screen learning captions."
    ],
    "exampleTitle": "Concrete Example: Converting SRT to SMI",
    "exampleIntro": "Compare the original SubRip subtitle text against the converted Microsoft SAMI markup below:",
    "exampleSmiInput": "1\n00:00:01,200 --> 00:00:04,500\nHello and welcome to our video!\nWe hope you enjoy the presentation.\n\n2\n00:00:05,100 --> 00:00:08,800\nSubtitles are synchronized in milliseconds.",
    "exampleSrtOutput": "<SAMI>\n<HEAD>\n<TITLE>Converted Subtitles</TITLE>\n<STYLE TYPE=\"text/css\">\n<!--\nP { font-family:gulim, sans-serif; font-size:14pt; text-align:center; color:white; }\n.KRCC { Name:Korean; lang:ko-KR; SAMIType:CC; }\n.ENCC { Name:English; lang:en-US; SAMIType:CC; }\n-->\n</STYLE>\n</HEAD>\n<BODY>\n<SYNC Start=1200><P Class=KRCC>\nHello and welcome to our video!<BR>We hope you enjoy the presentation.\n<SYNC Start=4500><P Class=KRCC>&nbsp;\n<SYNC Start=5100><P Class=KRCC>\nSubtitles are synchronized in milliseconds.\n<SYNC Start=8800><P Class=KRCC>&nbsp;\n</BODY>\n</SAMI>",
    "exampleExplanation": "Notice how the multi-line text in cue #1 is cleanly formatted with an HTML <BR> break, the clock timecodes (00:00:01,200 and 00:00:04,500) are mapped to <SYNC Start=1200> and <SYNC Start=4500>, and a non-breaking space (&nbsp;) clearance marker is placed at 4,500 ms to clear the text before cue #2 starts at 5,100 ms.",
    "bilingualTitle": "Line Breaks and HTML Formatting in SAMI",
    "bilingualSubtitle": "How multi-line subtitles and typography are preserved during conversion.",
    "bilingualText": [
      "In standard SubRip (.srt) files, subtitle line breaks are indicated simply by physical newline characters (\\n). However, because SAMI documents follow an HTML document object model, standard web parsers collapse consecutive whitespace and ignore carriage returns. If an SRT converter were to simply copy newlines into a SAMI file, media players would render multi-line dialogue as a single run-on sentence.",
      "Our converter handles this gracefully by translating all newline characters within a subtitle cue into standard `<BR>` line break tags. Whether your subtitles contain two speakers marked by dashes (- Speaker 1 / - Speaker 2) or a long caption split across two visual tiers for readability, the exact two-tier visual layout is preserved.",
      "Additionally, if your SRT file contains basic styling tags such as italics (`<i>...</i>`), bold (`<b>...</b>`), or underline (`<u>...</u>`), our converter can retain these tags directly inside the `<P Class=...>` body. Because SAMI natively supports HTML formatting tags, compliant players will render your emphasis styling accurately on screen."
    ],
    "ffmpegTitle": "Converting SRT to SMI via Command Line (FFmpeg)",
    "ffmpegSubtitle": "Automate bulk subtitle conversion workflows using the open-source FFmpeg CLI.",
    "ffmpegCommand": "ffmpeg -i input.srt -c:s sami output.smi",
    "ffmpegExplanation": [
      "For developers, system administrators, and video engineers managing large video libraries, FFmpeg provides automated subtitle format conversion via terminal commands. The command `ffmpeg -i input.srt -c:s sami output.smi` reads your SubRip subtitle file and encodes it into a Microsoft SAMI (.smi) container.",
      "To batch convert an entire folder of .srt files on Windows PowerShell, run: `Get-ChildItem *.srt | ForEach-Object { ffmpeg -i $_.FullName -c:s sami ($_.BaseName + '.smi') }`. On Linux or macOS terminal, use: `for f in *.srt; do ffmpeg -i \"$f\" -c:s sami \"${f%.srt}.smi\"; done`.",
      "While FFmpeg is powerful for automated command-line scripts, its built-in SAMI muxer uses generic styling templates and does not allow interactive customization of language class names (.KRCC vs .ENCC) or clearance sync points. Our browser-based converter provides instant visual feedback, custom class assignment, and one-click copying without installing command-line tools."
    ],
    "useCasesTitle": "Practical Use Cases for SRT to SMI Conversion",
    "useCasesSubtitle": "Discover the industries and environments that depend on accurate SRT to SAMI caption generation.",
    "useCasesList": [
      {
        "title": "South Korean Video Streaming & Media Players",
        "description": "Ensure flawless subtitle compatibility with GOM Player, PotPlayer, and KMPlayer, allowing viewers to take full advantage of Korean font rendering, dual subtitle display, and language study tools."
      },
      {
        "title": "Interactive Language Education Platforms",
        "description": "Provide structured SAMI files for educational software in South Korea, Japan, and Taiwan, where student learning interfaces rely on <P Class=...> tags to pair foreign audio with bilingual transcripts."
      },
      {
        "title": "Enterprise Windows Kiosks & Digital Signage",
        "description": "Deploy accessible captioning on standalone kiosks, automotive touchscreens, and corporate media systems operating on legacy Windows Media Player platforms without installing additional video codecs."
      },
      {
        "title": "Broadcasting Archives & Film Heritage",
        "description": "Convert modernized SubRip transcripts back into legacy SAMI archives to satisfy historical television delivery standards and governmental accessibility mandates."
      }
    ],
    "troubleshootTitle": "Troubleshooting Common SRT to SMI Conversion Issues",
    "troubleshootSubtitle": "Resolve timing errors, overlapping subtitles, and player display glitches quickly.",
    "troubleshootTips": [
      {
        "issue": "Subtitles stay on screen and do not disappear",
        "cause": "SAMI lacks an end-time parameter on the sync tag; if no clearance marker is emitted, the subtitle persists until the next cue.",
        "solution": "Ensure the 'Add Blank Sync Points' option is enabled in our converter. This generates a `<SYNC Start=endMs><P Class=...>&nbsp;` tag at the conclusion of every cue."
      },
      {
        "issue": "Subtitles appear on a single long line instead of two lines",
        "cause": "Raw newlines were not converted into HTML `<BR>` break tags, causing the HTML-based SAMI parser to collapse whitespace.",
        "solution": "Our converter automatically converts all multi-line text into `<BR>` tags. Always use our converter output rather than manually copying SRT dialogue into a SAMI template."
      },
      {
        "issue": "Korean text appears as strange symbols or question marks in Windows Media Player",
        "cause": "Legacy Windows Media Player on Korean Windows requires ANSI (CP949 / EUC-KR) encoding rather than standard UTF-8.",
        "solution": "Open the downloaded .smi file in Windows Notepad, select File > Save As, and choose 'ANSI' or 'EUC-KR' in the Encoding dropdown before loading in older players."
      },
      {
        "issue": "Media player displays both language tracks simultaneously",
        "cause": "The SAMI file contains multiple classes but the player's subtitle settings are set to show all tracks instead of a specific language.",
        "solution": "In your media player (e.g. GOM Player or PotPlayer), open the Subtitle Menu and select the specific language class (e.g., 'Korean (KRCC)' or 'English (ENCC)')."
      }
    ],
    "conclusionTitle": "Streamline Your Subtitle Workflow with SRT to SMI",
    "conclusionText": [
      "While the digital video landscape continues to standardize around SubRip (.srt) and WebVTT (.vtt), Microsoft SAMI (.smi) remains an irreplaceable format across dedicated media players, language learning institutions, and Korean broadcasting ecosystems. Understanding the structural differences between clock-based SRT files and millisecond-based SAMI documents allows creators to bridge this divide with complete technical confidence.",
      "Our browser-based SRT to SMI Converter eliminates the friction of manual conversion by automating millisecond timestamp calculations, generating clean blank sync clearance points, preserving line breaks, and formatting valid SAMI document headers. With zero server uploads, 100% client-side privacy, and universal device support, converting your subtitles has never been faster or more reliable."
    ]
  },
  "es": {
    "introTitle": "Guía Completa para Convertir Subtítulos SRT a SMI (SAMI)",
    "introSubtitle": "Domina la conversión de subtítulos SubRip (.srt) a subtítulos Microsoft SAMI (.smi). Descubre la arquitectura basada en HTML de SAMI, cómo transformar códigos de tiempo de reloj en etiquetas <SYNC> en milisegundos, cómo insertar marcas de borrado limpias y cómo optimizar la reproducción en Windows Media Player, GOM Player y PotPlayer.",
    "introText": [
      "SubRip (.srt) es reconocido universalmente en la industria audiovisual como el formato de subtítulos más popular del mundo. Su diseño limpio—compuesto por numeración correlativa, tiempos de reloj en formato de horas, minutos, segundos y milisegundos, y líneas de texto sencillas—lo hace compatible de inmediato con reproductores web, teléfonos inteligentes, servidores como Plex y programas profesionales de edición como Adobe Premiere Pro y DaVinci Resolve.",
      "Sin embargo, numerosos entornos educativos, sistemas antiguos basados en Windows y reproductores multimedia asiáticos de gran renombre dependen fundamentalmente del formato Microsoft SAMI (.smi). Desarrollado por Microsoft en 1998 para Windows Media Player, Synchronized Accessible Media Interchange (SAMI) utiliza un modelo de documento HTML con estilos CSS, clases de idioma y marcas de tiempo <SYNC Start=\"...\"> expresadas en milisegundos. En Corea del Sur, SAMI (.smi) ha sido el formato de subtítulos por excelencia durante más de dos décadas en programas como GOM Player, PotPlayer y KMPlayer.",
      "Cuando editores de vídeo, traductores o archivistas audiovisuales necesitan proporcionar subtítulos para plataformas o espectadores que exigen el formato SAMI, convertir SRT a SMI resulta imprescindible. Esta conversión implica mucho más que cambiar la extensión del archivo: se deben transformar los tiempos de reloj en milisegundos enteros absolutos, convertir los saltos de línea en etiquetas HTML (<BR>), configurar encabezados y clases CSS (.KRCC, .ENCC), e insertar puntos de borrado de pantalla (&nbsp;) para que los subtítulos no se queden congelados indefinidamente.",
      "Esta guía técnica analiza en profundidad las diferencias estructurales entre SRT y SMI, el cálculo matemático de las marcas de tiempo, las mejores prácticas para gestionar subtítulos bilingües, la conversión mediante la línea de comandos con FFmpeg y la resolución de los problemas de sincronización más comunes."
    ],
    "whatIsTitle": "¿Qué es un Archivo SRT y Qué es un Archivo SMI (SAMI)?",
    "whatIsText": [
      "Un archivo SubRip (.srt) es un documento de texto plano estructurado en bloques secuenciales diseñados exclusivamente para mostrar subtítulos en pantalla. Cada bloque consta de tres o cuatro líneas: un número identificador (1, 2, 3...), un rango de tiempo con inicio y fin separados por una flecha ASCII (00:01:23,456 --> 00:01:27,890), las líneas de diálogo correspondientes y una línea en blanco que señala el fin del bloque. SRT no necesita cabeceras HTML ni etiquetas de estilo complejas.",
      "Por el contrario, un archivo Microsoft SAMI (.smi o .sami) se estructura como un documento HTML/XML completo. Comienza con una etiqueta contenedora <SAMI>, incluye una cabecera <HEAD> con hojas de estilo CSS (<STYLE TYPE=\"text/css\">) y aloja todos los diálogos dentro del elemento <BODY>. Cada frase se introduce mediante una etiqueta <SYNC Start=#####>, donde el valor numérico representa los milisegundos totales transcurridos desde el inicio del vídeo (por ejemplo, 83456 ms en lugar de 00:01:23,456).",
      "Asimismo, SAMI asocia cada bloque de diálogo a una clase CSS (<P Class=KRCC>), lo que permite definir el idioma (como coreano o inglés) y aplicar estilos visuales que incluyen tipografía (Gulim, Batang, Arial), tamaño de letra, alineación y colores. Mientras que SRT es ligero y estándar en la web moderna, SAMI ofrece estilos CSS integrados y pistas multilingües dentro de un mismo archivo."
    ],
    "whyConvertTitle": "¿Por Qué Convertir Subtítulos SRT a SMI / SAMI?",
    "whyConvertSubtitle": "Descubre las razones y ventajas técnicas más habituales para convertir archivos SubRip (.srt) a Microsoft SAMI (.smi).",
    "whyConvertReasons": [
      {
        "title": "Compatibilidad Total con Reproductores Coreanos",
        "description": "Reproductores líderes como GOM Player, PotPlayer y KMPlayer ofrecen funciones avanzadas de subtítulos bilingües, renderizado tipográfico coreano y aprendizaje de idiomas que funcionan de manera óptima con archivos SAMI (.smi) con clases KRCC y ENCC."
      },
      {
        "title": "Compatibilidad con Versiones Clásicas de Windows Media Player",
        "description": "Equipos empresariales, terminales interactivas y quioscos con Windows Media Player 9, 10 u 11 reproducen subtítulos directamente a través de archivos SAMI sin requerir filtros DirectShow adicionales como DirectVobSub (VSFilter)."
      },
      {
        "title": "Software Educativo y de Aprendizaje de Idiomas",
        "description": "Diversas aplicaciones interactivas de enseñanza de idiomas en Asia leen las etiquetas <P Class=...> de SAMI para sincronizar vocabulario con diccionarios y permitir al estudiante alternar entre subtítulos nativos y traducidos."
      },
      {
        "title": "Requisitos de Emisión y Archivo Televisivo",
        "description": "Ciertas cadenas de televisión por cable y archivos audiovisuales históricos conservan especificaciones técnicas de entrega que exigen documentos SAMI (.smi) con estilos CSS integrados."
      },
      {
        "title": "Soporte Tipográfico y Estilos Directos",
        "description": "A diferencia de SRT, que depende enteramente de la configuración del reproductor, SAMI permite especificar familias tipográficas (como Gulim o Arial), tamaños de fuente y alineación centrada directamente en el bloque <STYLE>."
      }
    ],
    "howToTitle": "Cómo Convertir SRT a SMI Online (Paso a Paso)",
    "howToSubtitle": "Sigue estos sencillos pasos para transformar tus archivos SubRip en subtítulos Microsoft SAMI listos para reproducir.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Sube o Pega tus Subtítulos SRT",
        "description": "Arrastra y suelta tu archivo .srt en el área de carga, haz clic en Explorar Archivos para seleccionarlo desde tu dispositivo, o copia y pega el texto de tus subtítulos SubRip directamente en el editor izquierdo."
      },
      {
        "step": "2",
        "title": "Configura la Clase de Idioma y los Puntos de Borrado",
        "description": "Selecciona la clase de idioma deseada (.KRCC para coreano, .ENCC para inglés, .ESCC para español) y asegúrate de activar la opción de añadir marcas de borrado (&nbsp;) para ocultar el texto a tiempo."
      },
      {
        "step": "3",
        "title": "Previsualiza y Descarga tu Archivo .SMI",
        "description": "Comprueba el resultado generado en el panel derecho y haz clic en Descargar .SMI para guardar el archivo, o pulsa Copiar para pegar el código en tu editor de subtítulos favorito."
      }
    ],
    "differenceTitle": "SRT vs. SMI: Comparativa Técnica de Formatos",
    "differenceSubtitle": "Compara las diferencias de arquitectura, marcas de tiempo y compatibilidad entre SubRip y Microsoft SAMI.",
    "differenceTable": [
      {
        "feature": "Extensión de Archivo",
        "smi": ".smi, .sami",
        "srt": ".srt"
      },
      {
        "feature": "Arquitectura del Documento",
        "smi": "Estructura HTML / XML (<SAMI>, <HEAD>, <BODY>)",
        "srt": "Bloques de texto plano secuenciales (índice, tiempo, texto)"
      },
      {
        "feature": "Formato de Tiempos",
        "smi": "Milisegundos absolutos (<SYNC Start=12345>)",
        "srt": "Formato de reloj (HH:MM:SS,mmm --> HH:MM:SS,mmm)"
      },
      {
        "feature": "Marcación del Fin de Subtítulo",
        "smi": "Implícito; se borra mediante etiqueta con espacio (&nbsp;)",
        "srt": "Tiempo de finalización explícito en cada bloque"
      },
      {
        "feature": "Estilos y Tipografía",
        "smi": "CSS integrado en cabecera (<STYLE TYPE=\"text/css\">)",
        "srt": "Etiquetas HTML básicas únicamente (<i>, <b>, <u>, <font>)"
      },
      {
        "feature": "Soporte Multilingüe",
        "smi": "Nativo mediante clases CSS (.KRCC, .ENCC, .ESCC)",
        "srt": "Un solo idioma por archivo"
      },
      {
        "feature": "Saltos de Línea",
        "smi": "Etiquetas HTML <BR>",
        "srt": "Saltos de línea estándar de texto (\\n o \\r\\n)"
      },
      {
        "feature": "Ecosistema de Reproducción",
        "smi": "GOM Player, PotPlayer, Windows Media Player",
        "srt": "VLC, Plex, YouTube, Premiere Pro, DaVinci Resolve"
      }
    ],
    "koreanEncodingTitle": "Marcas de Tiempo SAMI: De Códigos de Reloj a Milisegundos",
    "koreanEncodingSubtitle": "El cálculo matemático necesario para transformar los tiempos de SRT en etiquetas SAMI <SYNC>.",
    "koreanEncodingText": [
      "El principal desafío técnico al convertir de SRT a SMI radica en cómo interpreta cada formato la línea temporal. SubRip define un intervalo cerrado para cada subtítulo con la sintaxis HH:MM:SS,mmm --> HH:MM:SS,mmm. Por ejemplo, un diálogo que comienza en el minuto 1, segundo 24 y 500 milisegundos y finaliza en el minuto 1, segundo 28 y 200 milisegundos se expresa como `00:01:24,500 --> 00:01:28,200`.",
      "En cambio, Microsoft SAMI opera mediante eventos secuenciales en una línea temporal abierta. En lugar de incluir un tiempo de finalización en el mismo bloque, SAMI utiliza la etiqueta `<SYNC Start=#####>`, donde el valor numérico representa los milisegundos transcurridos desde el inicio del vídeo. Para calcular este valor desde el inicio de un bloque SRT, se aplica la fórmula: InicioMs = (Horas * 3.600.000) + (Minutos * 60.000) + (Segundos * 1.000) + Milisegundos. Para 00:01:24,500, el resultado es (1 * 60.000) + (24 * 1.000) + 500 = 84.500 ms.",
      "Dado que SAMI no cuenta con un parámetro de duración para el subtítulo, un texto mostrado en <SYNC Start=84500> permanecería congelado en pantalla hasta que se emita el siguiente subtítulo. Para que desaparezca exactamente cuando debe (a los 88.200 ms), nuestro convertidor calcula el tiempo de fin en milisegundos y genera un evento de borrado: `<SYNC Start=88200><P Class=KRCC>&nbsp;`. Este sistema garantiza una sincronización limpia y precisa en cualquier reproductor compatible."
    ],
    "endTimeCalculationTitle": "Gestión de Clases de Idioma (.KRCC, .ENCC) en SAMI",
    "endTimeCalculationSubtitle": "Cómo las clases CSS de SAMI permiten gestionar subtítulos multilingües.",
    "endTimeCalculationText": [
      "Una de las grandes ventajas del formato Microsoft SAMI es su capacidad nativa para albergar múltiples pistas de subtítulos en un único archivo. En el bloque `<STYLE>` del encabezado se declaran las clases CSS asociadas a cada idioma. Por ejemplo, `.KRCC { Name: Korean; lang: ko-KR; SAMIType: CC; }` define la pista en coreano, mientras que `.ENCC { Name: English; lang: en-US; SAMIType: CC; }` define la pista en inglés.",
      "Al convertir un archivo SRT a SMI con nuestra herramienta, puedes elegir la clase de idioma que se aplicará a los subtítulos generados. Si preparas subtítulos para el público coreano en PotPlayer o GOM Player, seleccionar `KRCC` garantiza que el motor del reproductor identifique de inmediato la pista y aplique las fuentes tipográficas coreanas idóneas (como Gulim o Batang).",
      "De igual manera, si dispones de dos archivos SRT (uno en español y otro en inglés o coreano), puedes convertirlos con sus respectivas clases (`ESCC` y `KRCC`) y combinar sus bloques de sincronización en un único archivo SAMI bilingüe, lo que permite a los usuarios alternar entre idiomas o mostrarlos simultáneamente para estudiar."
    ],
    "exampleTitle": "Ejemplo Práctico: Conversión de SRT a SMI",
    "exampleIntro": "Observa la equivalencia entre el texto SubRip original y el código generado en Microsoft SAMI:",
    "exampleSmiInput": "1\n00:00:01,200 --> 00:00:04,500\n¡Hola y bienvenidos a nuestro vídeo!\nEsperamos que disfruten de la presentación.\n\n2\n00:00:05,100 --> 00:00:08,800\nLos subtítulos se sincronizan en milisegundos.",
    "exampleSrtOutput": "<SAMI>\n<HEAD>\n<TITLE>Subtítulos Convertidos</TITLE>\n<STYLE TYPE=\"text/css\">\n<!--\nP { font-family:gulim, sans-serif; font-size:14pt; text-align:center; color:white; }\n.KRCC { Name:Korean; lang:ko-KR; SAMIType:CC; }\n.ENCC { Name:English; lang:en-US; SAMIType:CC; }\n-->\n</STYLE>\n</HEAD>\n<BODY>\n<SYNC Start=1200><P Class=KRCC>\n¡Hola y bienvenidos a nuestro vídeo!<BR>Esperamos que disfruten de la presentación.\n<SYNC Start=4500><P Class=KRCC>&nbsp;\n<SYNC Start=5100><P Class=KRCC>\nLos subtítulos se sincronizan en milisegundos.\n<SYNC Start=8800><P Class=KRCC>&nbsp;\n</BODY>\n</SAMI>",
    "exampleExplanation": "Comprueba cómo el subtítulo multilínea del bloque #1 se une mediante la etiqueta HTML <BR>, los tiempos de reloj (00:00:01,200 y 00:00:04,500) se convierten en <SYNC Start=1200> y <SYNC Start=4500>, y se incluye la marca de borrado (&nbsp;) a los 4.500 ms antes de que empiece el siguiente subtítulo a los 5.100 ms.",
    "bilingualTitle": "Saltos de Línea y Formato HTML en SAMI",
    "bilingualSubtitle": "Cómo se preservan los diálogos de dos líneas y el formato visual.",
    "bilingualText": [
      "En los archivos SubRip (.srt), los saltos de línea se representan simplemente mediante caracteres de nueva línea (\\n). Sin embargo, como los archivos SAMI siguen las reglas de HTML, los navegadores y motores de renderizado agrupan los espacios y no reconocen los retornos de carro como saltos visibles. Si se copiaran las líneas tal cual, el reproductor mostraría los diálogos en una sola frase continua.",
      "Nuestro convertidor soluciona esto de manera automática transformando cada salto de línea en la etiqueta estándar `<BR>`. De este modo, las conversaciones entre dos personajes indicadas con guiones (- Personaje 1 / - Personaje 2) o las frases largas divididas en dos líneas conservan su estructura visual perfecta.",
      "Además, si tu archivo SRT contiene etiquetas de formato como cursiva (`<i>...</i>`), negrita (`<b>...</b>`) o subrayado (`<u>...</u>`), nuestra herramienta las conserva dentro de `<P Class=...>`. Como SAMI admite formato HTML de forma nativa, los reproductores mostrarán los estilos con total fidelidad."
    ],
    "ffmpegTitle": "Conversión de SRT a SMI con FFmpeg en la Línea de Comandos",
    "ffmpegSubtitle": "Automatiza la conversión masiva de subtítulos mediante comandos de terminal con FFmpeg.",
    "ffmpegCommand": "ffmpeg -i entrada.srt -c:s sami salida.smi",
    "ffmpegExplanation": [
      "Para administradores de sistemas y desarrolladores que gestionan grandes catálogos de vídeo, FFmpeg permite convertir subtítulos mediante la consola. El comando `ffmpeg -i entrada.srt -c:s sami salida.smi` lee el archivo SubRip y lo empaqueta en un contenedor Microsoft SAMI (.smi).",
      "Para procesar por lotes una carpeta completa en Windows PowerShell, ejecuta: `Get-ChildItem *.srt | ForEach-Object { ffmpeg -i $_.FullName -c:s sami ($_.BaseName + '.smi') }`. En terminales Linux o macOS, puedes usar: `for f in *.srt; do ffmpeg -i \"$f\" -c:s sami \"${f%.srt}.smi\"; done`.",
      "Aunque FFmpeg es excelente para scripts automáticos, su multiplexor genera plantillas básicas sin opciones visuales para personalizar clases de idioma (.KRCC/.ENCC) o controlar con precisión los puntos de borrado. Nuestro convertidor web ofrece previsualización inmediata y ajustes personalizables sin necesidad de instalar programas adicionales."
    ],
    "useCasesTitle": "Casos de Uso Prácticos para la Conversión de SRT a SMI",
    "useCasesSubtitle": "Descubre los sectores y entornos que dependen de la generación precisa de subtítulos SAMI.",
    "useCasesList": [
      {
        "title": "Reproductores Multimedia de Corea del Sur",
        "description": "Garantiza una reproducción perfecta en GOM Player, PotPlayer y KMPlayer para aprovechar la tipografía coreana suavizada, los subtítulos dobles y las funciones de estudio."
      },
      {
        "title": "Plataformas Interactivas de Enseñanza de Idiomas",
        "description": "Genera archivos estructurados para software educativo en Asia donde la interfaz sincroniza el vocabulario con diccionarios mediante las etiquetas <P Class=...>."
      },
      {
        "title": "Quioscos Multimedia y Sistemas Windows Heredados",
        "description": "Implementa subtítulos accesibles en quioscos interactivos, pantallas de transporte y sistemas que operan sobre Windows Media Player clásico sin códecs externos."
      },
      {
        "title": "Archivos Históricos y Emisión Televisiva",
        "description": "Convierte transcripciones modernas en formato SRT de vuelta a archivos SAMI para cumplir con pliegos de prescripciones técnicas y normativas de accesibilidad históricas."
      }
    ],
    "troubleshootTitle": "Solución de Problemas Frecuentes al Convertir SRT a SMI",
    "troubleshootSubtitle": "Resuelve rápidamente fallos de sincronización, textos superpuestos o errores de visualización.",
    "troubleshootTips": [
      {
        "issue": "Los subtítulos permanecen en pantalla y no desaparecen",
        "cause": "SAMI no incluye parámetro de fin en la etiqueta; si no se emite una marca de borrado, el texto permanece visible hasta el próximo subtítulo.",
        "solution": "Asegúrate de marcar la opción 'Añadir Puntos de Borrado Sincronizados' en nuestro convertidor. Esto genera un tag `<SYNC Start=finMs><P Class=...>&nbsp;` al finalizar cada subtítulo."
      },
      {
        "issue": "El texto se muestra en una sola línea continua en lugar de dos",
        "cause": "Los saltos de línea de texto no se convirtieron en etiquetas HTML `<BR>`, lo que hace que el motor SAMI junte las palabras.",
        "solution": "Nuestro convertidor transforma automáticamente los saltos en etiquetas `<BR>`. Utiliza siempre el archivo generado por la herramienta en lugar de copiar el texto manualmente."
      },
      {
        "issue": "El texto coreano muestra caracteres extraños o signos de interrogación en Windows Media Player",
        "cause": "Las versiones antiguas de Windows Media Player en Windows en coreano exigen codificación ANSI (CP949 / EUC-KR) en lugar de UTF-8.",
        "solution": "Abre el archivo .smi descargado en el Bloc de Notas de Windows, selecciona Archivo > Guardar como y elige 'ANSI' en el desplegable de codificación antes de reproducir."
      },
      {
        "issue": "El reproductor muestra todas las pistas de idioma a la vez",
        "cause": "El archivo SAMI contiene varias clases pero el reproductor está configurado para mostrar todas las pistas sin filtrar por idioma.",
        "solution": "Accede al menú de subtítulos de tu reproductor (como GOM Player o PotPlayer) y selecciona la pista correspondiente (ej. 'Coreano (KRCC)' o 'Español (ESCC)')."
      }
    ],
    "conclusionTitle": "Optimiza tu Flujo de Trabajo de Subtitulado con SRT a SMI",
    "conclusionText": [
      "Aunque el ecosistema digital moderno se apoya mayoritariamente en SubRip (.srt) y WebVTT (.vtt), Microsoft SAMI (.smi) sigue siendo una herramienta irremplazable en reproductores especializados, centros educativos y la industria audiovisual surcoreana. Comprender las diferencias técnicas entre los tiempos de reloj de SRT y los milisegundos de SAMI permite tender un puente seguro y profesional entre ambos formatos.",
      "Nuestro convertidor online de SRT a SMI elimina las dificultades de la conversión manual calculando milisegundos exactos, creando puntos de borrado limpios, conservando los saltos de línea y formateando encabezados SAMI válidos. Con total privacidad en tu navegador, sin registros ni subidas a servidores, convertir subtítulos nunca ha sido tan rápido y seguro."
    ]
  },
  "pt": {
    "introTitle": "Guia Completo para Converter Legendas SRT em SMI (SAMI)",
    "introSubtitle": "Domine a conversão de arquivos de legenda SubRip (.srt) em legendas Microsoft SAMI (.smi). Descubra como funciona a arquitetura baseada em HTML do SAMI, como converter códigos de tempo de relógio em tags <SYNC> em milissegundos, como inserir pontos de limpeza eficientes e como otimizar a reprodução no Windows Media Player, GOM Player e PotPlayer.",
    "introText": [
      "O SubRip (.srt) é reconhecido globalmente no mercado audiovisual como o formato de legendas mais popular e versátil do mundo. Sua estrutura minimalista—composta por índices sequenciais, marcações de tempo com relógio (horas, minutos, segundos e milissegundos) e linhas de texto simples—garante compatibilidade imediata com players web, smartphones, servidores de mídia como Plex e editores profissionais de vídeo como Adobe Premiere Pro e DaVinci Resolve.",
      "Contudo, ecossistemas específicos de aprendizado de idiomas, ambientes corporativos Windows herdados e reprodutores multimídia de grande porte no leste asiático ainda dependem primordialmente do formato Microsoft SAMI (.smi). Desenvolvido pela Microsoft em 1998 para o Windows Media Player, o Synchronized Accessible Media Interchange (SAMI) utiliza uma estrutura de documento HTML enriquecida com estilos CSS, classes de idiomas dedicadas e marcações de tempo <SYNC Start=\"...\"> em milissegundos. Na Coreia do Sul, o SAMI (.smi) é o padrão de legendagem predominante há mais de duas décadas em players populares como GOM Player, PotPlayer e KMPlayer.",
      "Quando criadores de conteúdo, tradutores ou arquivistas precisam disponibilizar legendas para dispositivos ou públicos que demandam o formato SAMI, a conversão de SRT para SMI torna-se essencial. Essa conversão envolve muito mais do que renomear a extensão do arquivo: é preciso calcular milissegundos absolutos, converter quebras de linha em tags HTML (<BR>), estruturar cabeçalhos e classes CSS (.KRCC, .ENCC) e inserir pontos de limpeza sincronizados (&nbsp;) para que as legendas não fiquem presas na tela.",
      "Este guia técnico aprofundado detalha as diferenças estruturais entre SRT e SMI, o método de cálculo temporal, as melhores práticas para legendas bilíngues, rotinas automatizadas com FFmpeg e soluções para as dúvidas mais comuns de sincronização."
    ],
    "whatIsTitle": "O que é um Arquivo SRT e o que é um Arquivo SMI (SAMI)?",
    "whatIsText": [
      "Um arquivo SubRip (.srt) é um documento de texto simples estruturado em blocos sequenciais focados na exibição de diálogos. Cada bloco possui um número de índice (1, 2, 3...), um intervalo de tempo com início e fim separados por uma seta (00:01:23,456 --> 00:01:27,890), as falas correspondentes e uma linha em branco finalizando o bloco. O SRT não utiliza cabeçalhos complexos nem declarações de estilo obrigatórias.",
      "Já um arquivo Microsoft SAMI (.smi ou .sami) é formatado como um documento HTML/XML completo. Ele inicia com a tag principal <SAMI>, contém uma seção <HEAD> com folhas de estilo CSS incorporadas (<STYLE TYPE=\"text/css\">) e posiciona os diálogos no elemento <BODY>. Cada fala é disparada pela tag <SYNC Start=#####>, onde o número representa os milissegundos decorridos desde o primeiro segundo do vídeo (por exemplo, 83456 ms em vez de 00:01:23,456).",
      "Além disso, o SAMI vincula cada diálogo a uma classe CSS (<P Class=KRCC>), identificando a faixa de idioma e aplicando regras de formatação como fonte (Gulim, Batang, Arial), tamanho e alinhamento central. Enquanto o SRT é leve e universal para a web, o SAMI possibilita estilização CSS nativa e múltiplas faixas de idioma num só arquivo."
    ],
    "whyConvertTitle": "Por que Converter Legendas SRT para SMI / SAMI?",
    "whyConvertSubtitle": "Conheça as principais razões e vantagens técnicas para converter arquivos SubRip (.srt) para Microsoft SAMI (.smi).",
    "whyConvertReasons": [
      {
        "title": "Compatibilidade Plena com Reprodutores Coreanos",
        "description": "Players líderes como GOM Player, PotPlayer e KMPlayer trazem recursos especializados de exibição simultânea bilíngue, suavização de fontes coreanas e estudo de idiomas que funcionam nativamente com arquivos SAMI (.smi) contendo classes KRCC e ENCC."
      },
      {
        "title": "Suporte ao Windows Media Player Legado",
        "description": "Máquinas industriais, quiosques interativos e estações com versões clássicas do Windows Media Player reproduzem legendas diretamente em SAMI sem necessidade de instalar filtros DirectShow como DirectVobSub (VSFilter)."
      },
      {
        "title": "Softwares Educacionais e de Ensino de Línguas",
        "description": "Diversas ferramentas interativas de aprendizado de línguas na Ásia utilizam as tags <P Class=...> do SAMI para sincronizar dicionários e alternar instantaneamente entre a língua nativa e a estrangeira."
      },
      {
        "title": "Exigências de Transmissão e Acervos Audiovisuais",
        "description": "Determinado fluxo de trabalho de emissoras de televisão e acervos históricos exige a entrega técnica de legendas estruturadas no padrão SAMI com CSS embutido."
      },
      {
        "title": "Estilização Tipográfica Embutida",
        "description": "Ao contrário do SRT puro, que depende exclusivamente do reprodutor, o SAMI permite definir famílias de fontes (como Gulim ou Arial), tamanhos e cores diretamente no bloco <STYLE>."
      }
    ],
    "howToTitle": "Como Converter SRT para SMI Online (Passo a Passo)",
    "howToSubtitle": "Siga este procedimento rápido para converter suas legendas SubRip em arquivos Microsoft SAMI prontos para uso.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Envie ou Cole suas Legendas SRT",
        "description": "Arraste e solte o arquivo .srt no painel de upload, clique em Procurar Arquivos ou cole o texto dos seus subtítulos SubRip diretamente na caixa de entrada à esquerda."
      },
      {
        "step": "2",
        "title": "Ajuste a Classe de Idioma e Opções de Limpeza",
        "description": "Selecione a classe de idioma correspondente (.KRCC para coreano, .ENCC para inglês, .PTCC para português) e mantenha a opção de pontos de limpeza ativada para garantir o sumiço do texto no momento certo."
      },
      {
        "step": "3",
        "title": "Pré-visualize e Baixe o Arquivo .SMI",
        "description": "Confira o resultado gerado no painel direito e clique em Baixar .SMI para salvar o arquivo no seu computador ou celular, ou clique em Copiar para colar onde desejar."
      }
    ],
    "differenceTitle": "SRT vs. SMI: Comparativo Técnico de Formatos",
    "differenceSubtitle": "Veja as diferenças fundamentais de estrutura, tempo e compatibilidade entre SubRip e Microsoft SAMI.",
    "differenceTable": [
      {
        "feature": "Extensão do Arquivo",
        "smi": ".smi, .sami",
        "srt": ".srt"
      },
      {
        "feature": "Arquitetura do Documento",
        "smi": "Estrutura HTML / XML (<SAMI>, <HEAD>, <BODY>)",
        "srt": "Blocos sequenciais em texto plano (índice, tempo, texto)"
      },
      {
        "feature": "Formato de Tempo",
        "smi": "Milissegundos decorridos (<SYNC Start=12345>)",
        "srt": "Formato de relógio (HH:MM:SS,mmm --> HH:MM:SS,mmm)"
      },
      {
        "feature": "Fim da Exibição",
        "smi": "Implícito; apagado via marca de espaço (&nbsp;)",
        "srt": "Marcação de término explícita em cada legenda"
      },
      {
        "feature": "Estilos e Tipografia",
        "smi": "Folha de estilo CSS embutida (<STYLE TYPE=\"text/css\">)",
        "srt": "Apenas tags HTML básicas (<i>, <b>, <u>, <font>)"
      },
      {
        "feature": "Suporte Multilíngue",
        "smi": "Nativo por classes CSS (.KRCC, .ENCC, .PTCC)",
        "srt": "Um único idioma por arquivo"
      },
      {
        "feature": "Quebras de Linha",
        "smi": "Tags HTML <BR>",
        "srt": "Quebras de linha padrão do texto (\\n ou \\r\\n)"
      },
      {
        "feature": "Reprodutores Principais",
        "smi": "GOM Player, PotPlayer, Windows Media Player",
        "srt": "VLC, Plex, YouTube, Premiere Pro, DaVinci Resolve"
      }
    ],
    "koreanEncodingTitle": "Sincronização SAMI: De Códigos de Relógio a Milissegundos",
    "koreanEncodingSubtitle": "Os fundamentos matemáticos para transformar o tempo do SRT em tags <SYNC> do SAMI.",
    "koreanEncodingText": [
      "A principal particularidade técnica na conversão de SRT para SMI está em como cada formato compreende a linha do tempo. No SubRip, cada legenda possui início e término bem delineados com a sintaxe HH:MM:SS,mmm --> HH:MM:SS,mmm. Por exemplo, uma fala entre 1 minuto, 24 segundos e 500 milissegundos e 1 minuto, 28 segundos e 200 milissegundos é descrita como `00:01:24,500 --> 00:01:28,200`.",
      "Em contrapartida, o Microsoft SAMI funciona por eventos disparados ao longo de uma linha de tempo contínua. Em vez de declarar um término na mesma linha, o SAMI utiliza a tag `<SYNC Start=#####>`, onde o valor numérico registra os milissegundos corridos. A conversão é feita pela fórmula: InicioMs = (Horas * 3.600.000) + (Minutos * 60.000) + (Segundos * 1.000) + Milissegundos. Para 00:01:24,500, temos (1 * 60.000) + (24 * 1.000) + 500 = 84.500 ms.",
      "Como o SAMI não tem parâmetro de duração de exibição, a legenda em <SYNC Start=84500> continuaria visível na tela até a próxima fala. Para fazê-la desaparecer com precisão (aos 88.200 ms), nosso conversor insere uma tag de limpeza: `<SYNC Start=88200><P Class=KRCC>&nbsp;`. Isso garante limpeza visual de tela e reprodução sem sobras de texto."
    ],
    "endTimeCalculationTitle": "Gerenciamento de Classes de Idioma (.KRCC, .ENCC) no SAMI",
    "endTimeCalculationSubtitle": "Como o modelo de classes CSS do SAMI viabiliza legendas bilíngues.",
    "endTimeCalculationText": [
      "Uma das características mais marcantes do formato SAMI é sua habilidade nata de reunir múltiplos idiomas em um único arquivo. No bloco `<STYLE>` do cabeçalho, os autores declaram classes CSS específicas para cada língua. Por exemplo, `.KRCC { Name: Korean; lang: ko-KR; SAMIType: CC; }` demarca a faixa coreana e `.ENCC { Name: English; lang: en-US; SAMIType: CC; }` demarca a faixa inglesa.",
      "Ao usar nosso conversor, você pode escolher exatamente qual classe será aplicada aos diálogos. Ao trabalhar com vídeos destinados a reprodutores como PotPlayer ou GOM Player, aplicar a classe `KRCC` faz com que o reprodutor aplique automaticamente suavizações de fontes coreanas (como Gulim ou Batang).",
      "Além disso, se você possuir dois arquivos SRT de idiomas diferentes, poderá convertê-los com as respectivas classes e juntar as marcações em um único arquivo SAMI bilíngue para permitir a alternância de faixas ou estudo de idiomas simultâneo."
    ],
    "exampleTitle": "Exemplo Prático: Conversão de SRT para SMI",
    "exampleIntro": "Veja a comparação direta entre o texto SubRip original e o código Microsoft SAMI gerado:",
    "exampleSmiInput": "1\n00:00:01,200 --> 00:00:04,500\nOlá e bem-vindo ao nosso vídeo!\nEsperamos que você aproveite o conteúdo.\n\n2\n00:00:05,100 --> 00:00:08,800\nAs legendas são sincronizadas em milissegundos.",
    "exampleSrtOutput": "<SAMI>\n<HEAD>\n<TITLE>Legendas Convertidas</TITLE>\n<STYLE TYPE=\"text/css\">\n<!--\nP { font-family:gulim, sans-serif; font-size:14pt; text-align:center; color:white; }\n.KRCC { Name:Korean; lang:ko-KR; SAMIType:CC; }\n.ENCC { Name:English; lang:en-US; SAMIType:CC; }\n-->\n</STYLE>\n</HEAD>\n<BODY>\n<SYNC Start=1200><P Class=KRCC>\nOlá e bem-vindo ao nosso vídeo!<BR>Esperamos que você aproveite o conteúdo.\n<SYNC Start=4500><P Class=KRCC>&nbsp;\n<SYNC Start=5100><P Class=KRCC>\nAs legendas são sincronizadas em milissegundos.\n<SYNC Start=8800><P Class=KRCC>&nbsp;\n</BODY>\n</SAMI>",
    "exampleExplanation": "Observe como as duas linhas da legenda #1 foram unidas pela tag HTML <BR>, os tempos de relógio tornaram-se <SYNC Start=1200> e <SYNC Start=4500>, e o ponto de limpeza com espaço não separável (&nbsp;) foi incluído aos 4.500 ms antes da entrada da legenda #2 aos 5.100 ms.",
    "bilingualTitle": "Quebras de Linha e Formatação HTML no SAMI",
    "bilingualSubtitle": "Como diálogos de duas linhas e estilizações visuais são mantidos.",
    "bilingualText": [
      "Em arquivos SubRip (.srt), as quebras de linha são feitas apenas por quebras de texto (\\n). No entanto, como o SAMI é interpretado como HTML, os navegadores e players agrupam espaços em branco e ignoram quebras de parágrafo normais. Copiar o texto do SRT diretamente faria as falas aparecerem em uma linha contínua desorganizada.",
      "Nosso conversor resolve isso de forma inteligente transformando cada nova linha de diálogo na tag `<BR>`. Com isso, diálogos de duas pessoas ou frases divididas em dois níveis permanecem com a estética visual pretendida.",
      "Do mesmo modo, se sua legenda contiver tags como itálico (`<i>...</i>`), negrito (`<b>...</b>`) ou sublinhado (`<u>...</u>`), nossa ferramenta as mantém dentro da tag `<P Class=...>`. Como o formato SAMI reconhece elementos HTML, os reprodutores exibirão as ênfases corretamente."
    ],
    "ffmpegTitle": "Convertendo SRT para SMI na Linha de Comando (FFmpeg)",
    "ffmpegSubtitle": "Automatize a conversão de lotes de arquivos de legenda utilizando o terminal.",
    "ffmpegCommand": "ffmpeg -i entrada.srt -c:s sami saida.smi",
    "ffmpegExplanation": [
      "Para desenvolvedores e administradores de sistemas que gerenciam grandes catálogos de vídeo, o FFmpeg possibilita a conversão em lote por comandos de terminal. A instrução `ffmpeg -i entrada.srt -c:s sami saida.smi` lê o arquivo SubRip e o salva como Microsoft SAMI (.smi).",
      "No Windows PowerShell, para converter uma pasta inteira, use: `Get-ChildItem *.srt | ForEach-Object { ffmpeg -i $_.FullName -c:s sami ($_.BaseName + '.smi') }`. No Linux ou macOS, execute: `for f in *.srt; do ffmpeg -i \"$f\" -c:s sami \"${f%.srt}.smi\"; done`.",
      "Embora o FFmpeg seja prático para scripts, sua saída gera cabeçalhos genéricos e não oferece ajuste fino de classes (.KRCC) ou inserção customizada de pontos de limpeza. Nossa ferramenta online executa essas tarefas de forma rápida, visual e sem instalações."
    ],
    "useCasesTitle": "Aplicações Práticas da Conversão de SRT para SMI",
    "useCasesSubtitle": "Descubra onde o formato Microsoft SAMI continua sendo altamente requisitado.",
    "useCasesList": [
      {
        "title": "Reprodutores Multimídia Sul-Coreanos",
        "description": "Garanta compatibilidade irretocável com GOM Player, PotPlayer e KMPlayer, desfrutando de tipografia coreana nítida e recursos de estudo simultâneo."
      },
      {
        "title": "Softwares Didáticos de Ensino de Idiomas",
        "description": "Forneça arquivos prontos para plataformas educacionais na Ásia onde a interface associa vocabulário com dicionários através das tags <P Class=...>."
      },
      {
        "title": "Quiosques e Computadores com Windows Legado",
        "description": "Exiba legendas acessíveis em estações corporativas e displays interativos que rodam versões clássicas do Windows Media Player."
      },
      {
        "title": "Acervos Históricos de Transmissão de TV",
        "description": "Converta transcrições modernas de volta para a estrutura SAMI para atender a exigências técnicas de arquivamento institucional e órgãos reguladores."
      }
    ],
    "troubleshootTitle": "Solução de Problemas Comuns na Conversão de SRT para SMI",
    "troubleshootSubtitle": "Resolva rapidamente falhas de exibição, legendas sobrepostas ou sumiço de texto.",
    "troubleshootTips": [
      {
        "issue": "As legendas continuam na tela e não somem no tempo certo",
        "cause": "O formato SAMI não tem atributo de duração na mesma tag; sem ponto de limpeza, o texto fica visível até o próximo diálogo.",
        "solution": "Verifique se a opção 'Adicionar Pontos de Limpeza Sincronizados' está marcada no nosso conversor. Ela insere a tag `<SYNC Start=fimMs><P Class=...>&nbsp;`."
      },
      {
        "issue": "O texto aparece em uma linha única e longa",
        "cause": "As quebras de linha normais não foram convertidas na tag `<BR>`, fazendo o mecanismo do SAMI juntar as frases.",
        "solution": "O nosso conversor insere tags `<BR>` automaticamente em todas as linhas. Sempre utilize o arquivo exportado pela ferramenta."
      },
      {
        "issue": "Caracteres coreanos ou acentuados aparecem corrompidos no Windows Media Player",
        "cause": "Versões legadas do Windows Media Player em sistemas coreanos demandam codificação ANSI (CP949/EUC-KR) em vez de UTF-8.",
        "solution": "Abra o arquivo .smi baixado no Bloco de Notas do Windows, vá em Arquivo > Salvar como e selecione 'ANSI' no campo de codificação antes de reproduzir."
      },
      {
        "issue": "O reprodutor exibe todas as faixas de idioma juntas",
        "cause": "O arquivo contém várias classes mas o reprodutor está configurado para exibir todos os subtítulos sem filtro de língua.",
        "solution": "Acesse as configurações de legenda do player (como GOM Player) e selecione a faixa desejada (ex.: 'Coreano (KRCC)' ou 'Português (PTCC)')."
      }
    ],
    "conclusionTitle": "Agilize seu Fluxo de Trabalho com SRT para SMI",
    "conclusionText": [
      "Embora as produções modernas priorizem o SubRip (.srt) e o WebVTT (.vtt), o Microsoft SAMI (.smi) segue insubstituível em players especializados, softwares educacionais e na transmissão sul-coreana. Dominar o cálculo dos tempos em milissegundos e as particularidades do formato assegura entregas técnicas perfeitas.",
      "Nosso conversor online de SRT para SMI soluciona esses desafios calculando milissegundos com exatidão, criando pontos de limpeza impecáveis e formatando cabeçalhos válidos. Com privacidade 100% no seu navegador e velocidade instantânea, converter suas legendas nunca foi tão simples."
    ]
  },
  "fr": {
    "introTitle": "Le Guide Complet pour Convertir des Sous-titres SRT en SMI (SAMI)",
    "introSubtitle": "Maîtrisez la conversion des fichiers de sous-titres SubRip (.srt) au format Microsoft SAMI (.smi). Découvrez l'architecture HTML de SAMI, la conversion des repères d'horloge en balises <SYNC> en millisecondes, l'insertion de points d'effacement précis et l'optimisation pour Windows Media Player, GOM Player et PotPlayer.",
    "introText": [
      "Le format SubRip (.srt) s'est imposé dans le monde entier comme la référence absolue du sous-titrage vidéo. Sa structure minimaliste—constituée d'un index numérique, d'intervalles temporels d'horloge (heures, minutes, secondes et millisecondes) et de lignes de dialogue brutes—garantit une interopérabilité universelle avec les lecteurs web, les plateformes mobiles, les serveurs de streaming comme Plex et les logiciels de montage vidéo professionnels comme Adobe Premiere Pro et DaVinci Resolve.",
      "Cependant, certains environnements éducatifs spécialisés, des systèmes d'affichage Windows historiques et des lecteurs multimédias asiatiques majeurs continuent d'exiger le format Microsoft SAMI (.smi). Conçu par Microsoft en 1998 pour Windows Media Player, le format Synchronized Accessible Media Interchange (SAMI) repose sur une structure HTML et des feuilles de style CSS, des classes linguistiques et des balises temporelles <SYNC Start=\"...\"> exprimées en millisecondes. En Corée du Sud, SAMI (.smi) demeure une référence technique majeure depuis deux décennies sur des lecteurs tels que GOM Player, PotPlayer et KMPlayer.",
      "Lorsque des traducteurs, vidéastes ou archivistes doivent fournir des sous-titres pour des plateformes requérant exclusivement le format SAMI, la conversion de SRT en SMI devient incontournable. Cette opération nécessite bien plus qu'un simple renommage : il faut convertir les codes d'horloge en millisecondes entières, traduire les sauts de ligne en balises HTML (<BR>), définir des styles CSS (.KRCC, .ENCC) et insérer des balises d'effacement (&nbsp;) pour éviter que les répliques ne restent bloquées à l'écran.",
      "Ce guide technique détaille les particularités de chaque format, les formules mathématiques de conversion temporelle, la gestion des pistes bilingues, l'automatisation en ligne de commande avec FFmpeg et la résolution des erreurs de synchronisation les plus fréquentes."
    ],
    "whatIsTitle": "Qu'est-ce qu'un Fichier SRT et qu'est-ce qu'un Fichier SMI (SAMI) ?",
    "whatIsText": [
      "Un fichier SubRip (.srt) est un document texte linéaire composé de blocs séquentiels simples dédiés à l'affichage des répliques. Chaque bloc comporte un numéro d'ordre (1, 2, 3...), une plage temporelle avec heure de début et heure de fin séparées par une flèche (00:01:23,456 --> 00:01:27,890), le texte parlé et une ligne vide de séparation. Le format SRT ne requiert aucun en-tête de document ni balisage complexe.",
      "À l'inverse, un fichier Microsoft SAMI (.smi ou .sami) est conçu comme une véritable page HTML/XML. Il débute par la balise <SAMI>, inclut un en-tête <HEAD> avec du code CSS (<STYLE TYPE=\"text/css\">) et regroupe tous les sous-titres dans la balise <BODY>. Chaque réplique est déclenchée par une balise <SYNC Start=#####>, où le nombre représente les millisecondes écoulées depuis le début de la vidéo (par exemple 83456 ms au lieu de 00:01:23,456).",
      "De plus, SAMI attribue à chaque réplique une classe CSS (<P Class=KRCC>), identifiant la langue (comme le coréen ou l'anglais) et appliquant des règles typographiques (police Gulim, Batang ou Arial, taille, couleur et centrage). Si le SRT brille par sa légèreté, SAMI permet d'intégrer des styles graphiques et plusieurs langues dans un seul et même fichier."
    ],
    "whyConvertTitle": "Pourquoi Convertir des Sous-titres SRT en SMI / SAMI ?",
    "whyConvertSubtitle": "Découvrez les situations techniques dans lesquelles la conversion de SubRip (.srt) en Microsoft SAMI (.smi) est indispensable.",
    "whyConvertReasons": [
      {
        "title": "Compatibilité Parfaite avec les Lecteurs Coréens",
        "description": "Les lecteurs multimédias sud-coréens comme GOM Player, PotPlayer et KMPlayer offrent des fonctionnalités d'affichage bilingue simultané, d'apprentissage linguistique et de lissage typographique qui exploitent directement les classes KRCC et ENCC des fichiers SAMI."
      },
      {
        "title": "Prise en Charge sur Windows Media Player Classique",
        "description": "Les postes d'entreprise historiques et bornes interactives sous Windows Media Player 9, 10 ou 11 lisent directement les sous-titres SAMI sans nécessiter de filtres DirectShow externes comme DirectVobSub (VSFilter)."
      },
      {
        "title": "Applications Éducatives et d'Apprentissage des Langues",
        "description": "De nombreux logiciels d'apprentissage des langues en Asie s'appuient sur les balises <P Class=...> pour lier le texte à des dictionnaires intégrés et permettre à l'étudiant d'alterner entre langue maternelle et langue cible."
      },
      {
        "title": "Normes de Télédiffusion et Archivage Patrimonial",
        "description": "Certains cahiers des charges de diffusion télévisuelle et archives audiovisuelles historiques exigent la livraison de sous-titres structurés au format SAMI (.smi) avec styles CSS intégrés."
      },
      {
        "title": "Typographie et Styles Intégrés",
        "description": "Contrairement au SRT qui dépend des préférences du lecteur, SAMI permet de fixer directement la police d'écriture (ex. Gulim ou Arial), la taille et l'alignement dans le bloc <STYLE> du fichier."
      }
    ],
    "howToTitle": "Comment Convertir un Fichier SRT en SMI en Ligne (Étape par Étape)",
    "howToSubtitle": "Suivez ces instructions pour transformer rapidement vos fichiers SubRip en sous-titres Microsoft SAMI prêts à l'emploi.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Téléversez ou Collez vos Sous-titres SRT",
        "description": "Déposez votre fichier .srt dans la zone dédiée, cliquez sur Parcourir ou collez directement le texte de vos sous-titres SubRip dans le volet de saisie à gauche."
      },
      {
        "step": "2",
        "title": "Paramétrez la Classe de Langue et l'Effacement",
        "description": "Sélectionnez la classe SAMI ciblée (.KRCC pour le coréen, .ENCC pour l'anglais, .FRCC pour le français) et conservez l'option d'insertion des points d'effacement (&nbsp;) cochée pour faire disparaître les répliques au bon moment."
      },
      {
        "step": "3",
        "title": "Prévisualisez et Téléchargez le Fichier .SMI",
        "description": "Vérifiez le code SAMI généré dans le volet de droite, puis cliquez sur Télécharger .SMI pour enregistrer le fichier, ou cliquez sur Copier pour l'utiliser immédiatement."
      }
    ],
    "differenceTitle": "SRT vs. SMI : Tableau Comparatif Détaillé",
    "differenceSubtitle": "Comparez les aspects structurels, temporels et techniques entre SubRip et Microsoft SAMI.",
    "differenceTable": [
      {
        "feature": "Extension de Fichier",
        "smi": ".smi, .sami",
        "srt": ".srt"
      },
      {
        "feature": "Structure du Document",
        "smi": "Balisage HTML / XML complet (<SAMI>, <HEAD>, <BODY>)",
        "srt": "Blocs séquentiels en texte brut (numéro, temps, réplique)"
      },
      {
        "feature": "Format Temporel",
        "smi": "Millisecondes totales écoulées (<SYNC Start=12345>)",
        "srt": "Format horaire (HH:MM:SS,mmm --> HH:MM:SS,mmm)"
      },
      {
        "feature": "Disparition de la Réplique",
        "smi": "Implicite ; déclenchée par un espace insécable (&nbsp;)",
        "srt": "Horodatage de fin explicitement indiqué pour chaque réplique"
      },
      {
        "feature": "Styles et Typographie",
        "smi": "Feuille de style CSS intégrée (<STYLE TYPE=\"text/css\">)",
        "srt": "Balises HTML élémentaires uniquement (<i>, <b>, <u>, <font>)"
      },
      {
        "feature": "Gestion Multilingue",
        "smi": "Native via les classes CSS (.KRCC, .ENCC, .FRCC)",
        "srt": "Une seule langue par fichier"
      },
      {
        "feature": "Sauts de Ligne",
        "smi": "Balises HTML <BR>",
        "srt": "Caractères de retour à la ligne ordinaires (\\n ou \\r\\n)"
      },
      {
        "feature": "Lecteurs de Référence",
        "smi": "GOM Player, PotPlayer, Windows Media Player",
        "srt": "VLC, Plex, YouTube, Premiere Pro, DaVinci Resolve"
      }
    ],
    "koreanEncodingTitle": "Horodatages SAMI : Des Heures d'Horloge aux Millisecondes",
    "koreanEncodingSubtitle": "Les calculs indispensables pour transposer le minutage SRT en balises SAMI <SYNC>.",
    "koreanEncodingText": [
      "La principale différence technique entre SRT et SMI réside dans leur conception du temps. SubRip définit un intervalle temporel fermé pour chaque réplique : HH:MM:SS,mmm --> HH:MM:SS,mmm. Par exemple, un dialogue prononcé entre 1 minute 24 secondes 500 millisecondes et 1 minute 28 secondes 200 millisecondes s'écrit `00:01:24,500 --> 00:01:28,200`.",
      "À l'inverse, Microsoft SAMI fonctionne par déclenchements ponctuels sur une ligne de temps continue. Plutôt que de renseigner une durée ou une fin, SAMI utilise la balise `<SYNC Start=#####>`, où le nombre indique les millisecondes écoulées. Pour calculer cette valeur à partir du début d'une réplique SRT, la formule appliquée est : DebutMs = (Heures * 3 600 000) + (Minutes * 60 000) + (Secondes * 1 000) + Millisecondes. Pour 00:01:24,500, le résultat donne (1 * 60 000) + (24 * 1 000) + 500 = 84 500 ms.",
      "Puisque SAMI ne possède pas de paramètre de durée de sous-titre, une réplique déclenchée à <SYNC Start=84500> resterait affichée indéfiniment jusqu'au prochain dialogue. Pour la masquer à l'instant voulu (à 88 200 ms), notre convertisseur insère une balise de masquage : `<SYNC Start=88200><P Class=KRCC>&nbsp;`. Ce procédé garantit un minutage parfait sur tous les lecteurs compatibles."
    ],
    "endTimeCalculationTitle": "Gestion des Classes Linguistiques (.KRCC, .ENCC) en SAMI",
    "endTimeCalculationSubtitle": "Comment l'architecture CSS de SAMI prend en charge les sous-titres multilingues.",
    "endTimeCalculationText": [
      "L'un des grands atouts du format SAMI est sa capacité à intégrer plusieurs langues au sein d'un document unique. Dans la section `<STYLE>` du fichier, les créateurs définissent des classes CSS pour chaque langue. Par exemple, `.KRCC { Name: Korean; lang: ko-KR; SAMIType: CC; }` correspond au coréen, tandis que `.ENCC { Name: English; lang: en-US; SAMIType: CC; }` correspond à l'anglais.",
      "Grâce à notre convertisseur, vous pouvez désigner précisément la classe de langue à associer à vos sous-titres. Pour les vidéos destinées à des lecteurs comme PotPlayer ou GOM Player, l'attribution de la classe `KRCC` permet au lecteur d'appliquer automatiquement une typographie adaptée aux caractères coréens (comme la police Gulim).",
      "De plus, si vous disposez de deux fichiers SRT distincts, vous pouvez les convertir avec leurs classes respectives et combiner leurs balises de synchronisation dans un seul fichier SAMI bilingue pour permettre aux spectateurs d'alterner les pistes ou d'afficher deux langues à la fois pour s'entraîner."
    ],
    "exampleTitle": "Exemple Pratique : Conversion de SRT en SMI",
    "exampleIntro": "Observez la correspondance exacte entre le texte SubRip initial et le code Microsoft SAMI résultant :",
    "exampleSmiInput": "1\n00:00:01,200 --> 00:00:04,500\nBonjour et bienvenue dans notre vidéo !\nNous espérons que vous apprécierez la présentation.\n\n2\n00:00:05,100 --> 00:00:08,800\nLes sous-titres sont synchronisés en millisecondes.",
    "exampleSrtOutput": "<SAMI>\n<HEAD>\n<TITLE>Sous-titres Convertis</TITLE>\n<STYLE TYPE=\"text/css\">\n<!--\nP { font-family:gulim, sans-serif; font-size:14pt; text-align:center; color:white; }\n.KRCC { Name:Korean; lang:ko-KR; SAMIType:CC; }\n.ENCC { Name:English; lang:en-US; SAMIType:CC; }\n-->\n</STYLE>\n</HEAD>\n<BODY>\n<SYNC Start=1200><P Class=KRCC>\nBonjour et bienvenue dans notre vidéo !<BR>Nous espérons que vous apprécierez la présentation.\n<SYNC Start=4500><P Class=KRCC>&nbsp;\n<SYNC Start=5100><P Class=KRCC>\nLes sous-titres sont synchronisés en millisecondes.\n<SYNC Start=8800><P Class=KRCC>&nbsp;\n</BODY>\n</SAMI>",
    "exampleExplanation": "Remarquez comme les deux lignes du sous-titre #1 sont réunies par la balise HTML <BR>, les horodatages convertis en <SYNC Start=1200> et <SYNC Start=4500>, et le point d'effacement (&nbsp;) positionné à 4 500 ms avant le début du sous-titre suivant à 5 100 ms.",
    "bilingualTitle": "Sauts de Ligne et Balisage HTML en SAMI",
    "bilingualSubtitle": "Comment les répliques sur deux lignes et le style visuel sont préservés.",
    "bilingualText": [
      "Dans un fichier SubRip (.srt), un saut de ligne est matérialisé par un simple retour chariot (\\n). Or, le format SAMI étant régi par les règles du HTML, les navigateurs et moteurs de rendu fusionnent les espaces consécutifs et ne tiennent pas compte des retours à la ligne du fichier texte. Un sous-titre SRT copié tel quel s'afficherait sous forme d'une seule ligne interminable.",
      "Notre convertisseur résout ce problème en remplaçant chaque retour à la ligne de vos répliques par la balise HTML `<BR>`. Qu'il s'agisse d'un dialogue entre deux interlocuteurs ou d'une phrase scindée pour des raisons de lisibilité, l'agencement visuel sur deux niveaux est conservé.",
      "Par ailleurs, si votre fichier SRT comprend des balises de style de base (italique `<i>`, gras `<b>` ou souligné `<u>`), notre outil les conserve à l'intérieur de `<P Class=...>`. Ces mises en valeur apparaîtront fidèlement sur les lecteurs compatibles."
    ],
    "ffmpegTitle": "Convertir du SRT en SMI en Ligne de Commande avec FFmpeg",
    "ffmpegSubtitle": "Automatisez la conversion par lots de vos sous-titres grâce à la console FFmpeg.",
    "ffmpegCommand": "ffmpeg -i entree.srt -c:s sami sortie.smi",
    "ffmpegExplanation": [
      "Pour les administrateurs système et monteurs vidéo gérant de grandes collections, FFmpeg permet de convertir des fichiers en ligne de commande. L'instruction `ffmpeg -i entree.srt -c:s sami sortie.smi` extrait les répliques SubRip et les encapsule au format Microsoft SAMI (.smi).",
      "Sur Windows PowerShell, pour traiter tout un dossier, saisissez : `Get-ChildItem *.srt | ForEach-Object { ffmpeg -i $_.FullName -c:s sami ($_.BaseName + '.smi') }`. Sur un terminal Linux ou macOS, utilisez : `for f in *.srt; do ffmpeg -i \"$f\" -c:s sami \"${f%.srt}.smi\"; done`.",
      "Si FFmpeg est idéal pour les traitements automatisés, son multiplexeur génère un modèle standardisé sans personnalisation des classes (.KRCC) ni ajustement fin des balises d'effacement. Notre convertisseur en ligne propose une interface immédiate et sur mesure sans aucune installation logicielle."
    ],
    "useCasesTitle": "Applications Concrètes de la Conversion de SRT en SMI",
    "useCasesSubtitle": "Découvrez les domaines d'activité où les sous-titres Microsoft SAMI demeurent indispensables.",
    "useCasesList": [
      {
        "title": "Lecteurs Multimédias Sud-Coréens",
        "description": "Assurez un fonctionnement irréprochable avec GOM Player, PotPlayer et KMPlayer afin de bénéficier du lissage des caractères coréens, du double affichage et des fonctions d'apprentissage."
      },
      {
        "title": "Plateformes Éducatives Interactives",
        "description": "Fournissez des fichiers structurés pour les logiciels d'apprentissage des langues en Asie reliant le vocabulaire à des dictionnaires intégrés grâce aux classes <P Class=...>."
      },
      {
        "title": "Systèmes d'Affichage et Bornes sous Windows Historique",
        "description": "Diffusez des sous-titres accessibles sur des bornes interactives d'entreprise ou d'information fonctionnant sous Windows Media Player sans codecs tiers."
      },
      {
        "title": "Archives Audiovisuelles et Conservation",
        "description": "Reconvertissez des transcriptions SRT modernisées en conteneurs SAMI pour vous conformer à d'anciens protocoles de dépôt légal et de diffusion télévisuelle."
      }
    ],
    "troubleshootTitle": "Résolution des Problèmes Courants de Conversion SRT en SMI",
    "troubleshootSubtitle": "Corrigez facilement les décalages de synchronisation, textes persistants ou erreurs d'affichage.",
    "troubleshootTips": [
      {
        "issue": "Les sous-titres ne s'effacent pas et restent affichés à l'écran",
        "cause": "SAMI n'a pas d'attribut de durée par défaut ; sans point d'effacement, la réplique reste visible jusqu'au dialogue suivant.",
        "solution": "Vérifiez que l'option 'Insérer des Balises d'Effacement' est activée dans notre outil. Elle génère une balise `<SYNC Start=finMs><P Class=...>&nbsp;` à la fin de chaque sous-titre."
      },
      {
        "issue": "Le texte apparaît sur une seule ligne au lieu de deux",
        "cause": "Les retours à la ligne n'ont pas été remplacés par des balises HTML `<BR>`, ce qui conduit le lecteur SAMI à regrouper les mots.",
        "solution": "Notre convertisseur traduit automatiquement les sauts de ligne en balises `<BR>`. Utilisez toujours le fichier généré par notre outil."
      },
      {
        "issue": "Les caractères coréens ou accentués s'affichent sous forme de symboles bizarres dans Windows Media Player",
        "cause": "Les anciennes versions de Windows Media Player sur Windows en coréen requièrent un encodage ANSI (CP949/EUC-KR) plutôt que l'UTF-8.",
        "solution": "Ouvrez le fichier .smi dans le Bloc-notes de Windows, cliquez sur Fichier > Enregistrer sous et choisissez 'ANSI' dans la liste des encodages avant lecture."
      },
      {
        "issue": "Le lecteur affiche toutes les pistes de langue en même temps",
        "cause": "Le fichier comporte plusieurs classes CSS mais le lecteur multimédia est configuré pour afficher tous les sous-titres sans filtre de langue.",
        "solution": "Rendez-vous dans le menu des sous-titres de votre lecteur (ex. GOM Player) et sélectionnez la piste correspondante (ex. 'Coréen (KRCC)' ou 'Français (FRCC)')."
      }
    ],
    "conclusionTitle": "Optimisez vos Projets de Sous-titrage grâce à SRT vers SMI",
    "conclusionText": [
      "Bien que l'industrie vidéo moderne s'articule aujourd'hui autour de SubRip (.srt) et WebVTT (.vtt), le format Microsoft SAMI (.smi) demeure une solution incontournable pour des logiciels spécialisés, les cursus linguistiques et le secteur audiovisuel sud-coréen. Maîtriser le passage des codes d'horloge aux millisecondes permet de satisfaire toutes les exigences techniques de vos diffuseurs.",
      "Notre convertisseur en ligne SRT en SMI supprime la complexité de cette opération en automatisant le calcul des millisecondes, en insérant des balises d'effacement propres et en générant un balisage SAMI irréprochable. En toute confidentialité dans votre navigateur, transformez vos fichiers en un clin d'œil."
    ]
  },
  "de": {
    "introTitle": "Der Umfassende Leitfaden zur Konvertierung von SRT in SMI (SAMI)",
    "introSubtitle": "Meistern Sie die Umwandlung von SubRip (.srt) Untertiteldateien in Microsoft SAMI (.smi). Erfahren Sie, wie die HTML-basierte SAMI-Architektur aufgebaut ist, wie Uhrzeit-Zeitstempel in exakte Millisekunden-<SYNC>-Tags umgerechnet werden, wie Sie verlässliche Löschmarken erzeugen und die Wiedergabe im Windows Media Player, GOM Player und PotPlayer optimieren.",
    "introText": [
      "SubRip (.srt) gilt in der weltweiten Videoproduktion als der unangefochtene Standard für Untertitel. Der schlanke Aufbau—bestehend aus einer fortlaufenden Nummerierung, Zeitstempeln im Uhrzeitformat (Stunden, Minuten, Sekunden, Millisekunden) und Dialogtexten—ermöglicht den unkomplizierten Einsatz in Webplayern, auf Smartphones, in Home-Servern wie Plex und professionellen Schnittsystemen wie Adobe Premiere Pro und DaVinci Resolve.",
      "Dennoch setzen bestimmte Bildungsplattformen, bestehende Windows-Systeme und führende ostasiatische Medienplayer nach wie vor auf das Microsoft SAMI (.smi) Format. Entwickelt von Microsoft im Jahr 1998 für den Windows Media Player, nutzt Synchronized Accessible Media Interchange (SAMI) ein HTML-Dokumentenmodell mit CSS-Formatierung, Sprachklassen und Millisekunden-basierten <SYNC Start=\"...\">-Tags. In Südkorea ist SAMI (.smi) seit über zwei Jahrzehnten das vorherrschende Untertitelformat in renommierten Playern wie GOM Player, PotPlayer und KMPlayer.",
      "Müssen Untertitler, Übersetzer oder Medienarchive Inhalte für Plattformen bereitstellen, die das SAMI-Format voraussetzen, ist die Umwandlung von SRT in SMI unverzichtbar. Dabei reicht ein einfaches Umbenennen der Dateiendung nicht aus: Zeitstempel müssen in absolute Millisekunden-Ganzzahlen umgerechnet, Zeilenumbrüche in HTML-<BR>-Tags übersetzt, Header und CSS-Klassen (.KRCC, .ENCC) korrekt angelegt und Ausblend-Tags (&nbsp;) platziert werden, damit Untertitel nicht dauerhaft auf dem Bildschirm stehen bleiben.",
      "Dieser technische Leitfaden beleuchtet die strukturellen Unterschiede zwischen SRT und SMI, die mathematische Zeitumrechnung, bewährte Verfahren für zweisprachige Untertitelspuren, die Stapelverarbeitung via FFmpeg und Lösungen für typische Synchronisationsfehler."
    ],
    "whatIsTitle": "Was ist eine SRT-Datei und was ist eine SMI- (SAMI-) Datei?",
    "whatIsText": [
      "Eine SubRip (.srt) Datei ist ein leichtgewichtiges, zeilenbasiertes Textdokument, das rein auf die Anzeige von Untertiteln ausgelegt ist. Jeder Block besteht aus drei bis vier Zeilen: einer fortlaufenden Nummer (1, 2, 3...), einem Zeitbereich mit Start- und Endzeit getrennt durch einen Pfeil (00:01:23,456 --> 00:01:27,890), den Dialogzeilen und einer Leerzeile zum Abschluss des Blocks. SRT verzichtet vollständig auf HTML-Dokumenthüllen oder zwingende CSS-Stile.",
      "Im Gegensatz dazu ist eine Microsoft SAMI (.smi oder .sami) Datei wie ein vollständiges HTML/XML-Dokument aufgebaut. Sie beginnt mit einem <SAMI>-Tag, besitzt einen <HEAD>-Bereich mit eingebetteten CSS-Stylesheets (<STYLE TYPE=\"text/css\">) und bündelt sämtliche Untertitel im <BODY>-Tag. Jeder Dialog wird durch ein <SYNC Start=#####>-Tag eingeleitet, wobei der Wert den abgelaufenen Millisekunden ab Filmbeginn entspricht (z. B. 83456 ms statt 00:01:23,456).",
      "Zudem verknüpft SAMI jeden Text mit einer CSS-Klasse (<P Class=KRCC>), die die Sprachspur (wie Koreanisch oder Englisch) festlegt und typografische Parameter wie Schriftart (Gulim, Batang, Arial), Schriftgröße, Farbe und Ausrichtung regelt. Während SRT durch Einfachheit besticht, erlaubt SAMI echtes CSS-Styling und mehrere Sprachspuren in einer Datei."
    ],
    "whyConvertTitle": "Warum SRT-Untertitel in SMI / SAMI Umwandeln?",
    "whyConvertSubtitle": "Erfahren Sie, in welchen Situationen die Umwandlung von SubRip (.srt) in Microsoft SAMI (.smi) technisch geboten ist.",
    "whyConvertReasons": [
      {
        "title": "Volle Unterstützung in Koreanischen Medienplayern",
        "description": "Beliebte Mediaplayer wie GOM Player, PotPlayer und KMPlayer bieten spezielle Funktionen für simultane Zweisprachigkeit, Schrifenglättung und Sprachlern-Modi, die optimal auf SAMI (.smi) Dateien mit KRCC- und ENCC-Klassen abgestimmt sind."
      },
      {
        "title": "Wiedergabe im Klassischen Windows Media Player",
        "description": "Ältere Firmenrechner, Schulungsgeräte und interaktive Informationsstelen mit Windows Media Player 9, 10 oder 11 unterstützen Untertitel nativ über SAMI-Dateien, ohne dass externe Filter wie DirectVobSub (VSFilter) nötig sind."
      },
      {
        "title": "Interaktive Sprachlern-Software",
        "description": "Zahlreiche Lernprogramme in Ostasien nutzen die <P Class=...>-Tags von SAMI, um Dialoge direkt mit integrierten Wörterbüchern zu synchronisieren und dem Nutzer das Umschalten zwischen Muttersprache und Zielsprache zu ermöglichen."
      },
      {
        "title": "Rundfunk- und Archiv-Vorgaben",
        "description": "Bestimmte technische Übergabestandards regionaler Fernsehsender und historischer Rundfunkarchive verlangen Untertiteldateien im SAMI-Format mit definierter CSS-Struktur."
      },
      {
        "title": "Eingebettete Schrift- und Stilkontrolle",
        "description": "Anders als SRT, das ganz vom jeweiligen Player abhängt, erlaubt SAMI die Vorgabe von Schriftfamilien (z. B. Gulim oder Arial), Schriftgrößen und Zentrierung direkt im <STYLE>-Block."
      }
    ],
    "howToTitle": "Schritt-für-Schritt: SRT in SMI Online Umwandeln",
    "howToSubtitle": "Befolgen Sie diese kurze Anleitung, um Ihre SubRip-Dateien in abspielbereite Microsoft SAMI Untertitel umzuwandeln.",
    "howToSteps": [
      {
        "step": "1",
        "title": "SRT-Untertitel Hochladen oder Einfügen",
        "description": "Ziehen Sie Ihre .srt-Datei per Drag & Drop in das Upload-Feld, klicken Sie auf Durchsuchen oder fügen Sie den Text Ihrer SubRip-Untertitel direkt in den linken Eingabebereich ein."
      },
      {
        "step": "2",
        "title": "SAMI Sprachklasse und Löschmarken Konfigurieren",
        "description": "Wählen Sie die gewünschte Sprachklasse (.KRCC für Koreanisch, .ENCC für Englisch, .DECC für Deutsch) und lassen Sie die Option zum Einfügen von Löschmarken aktiviert, damit Untertitel pünktlich ausgeblendet werden."
      },
      {
        "step": "3",
        "title": "Vorschau Prüfen und .SMI Herunterladen",
        "description": "Überprüfen Sie das Ergebnis im rechten Ausgabefeld und klicken Sie auf .SMI Herunterladen, um die Datei zu speichern, oder kopieren Sie den Text direkt in Ihre Zwischenablage."
      }
    ],
    "differenceTitle": "SRT vs. SMI: Technischer Formatvergleich",
    "differenceSubtitle": "Vergleichen Sie die wesentlichen Unterschiede zwischen SubRip und Microsoft SAMI.",
    "differenceTable": [
      {
        "feature": "Dateiendung",
        "smi": ".smi, .sami",
        "srt": ".srt"
      },
      {
        "feature": "Dokumentenstruktur",
        "smi": "Vollständiges HTML/XML (<SAMI>, <HEAD>, <BODY>)",
        "srt": "Sequenzielle Textblöcke (Index, Zeit, Dialog)"
      },
      {
        "feature": "Zeitformat",
        "smi": "Abgelaufene Millisekunden (<SYNC Start=12345>)",
        "srt": "Uhrzeitformat (HH:MM:SS,mmm --> HH:MM:SS,mmm)"
      },
      {
        "feature": "Ausblendung des Untertitels",
        "smi": "Implizit; gelöscht durch Leerzeichen-Tag (&nbsp;)",
        "srt": "Expliziter Endzeitstempel in jeder Untertitelzeile"
      },
      {
        "feature": "Formatierung & CSS",
        "smi": "Eingebettetes CSS (<STYLE TYPE=\"text/css\">)",
        "srt": "Ausschließlich einfache HTML-Tags (<i>, <b>, <u>, <font>)"
      },
      {
        "feature": "Mehrsprachigkeit",
        "smi": "Nativ über CSS-Klassen (.KRCC, .ENCC, .DECC)",
        "srt": "Nur eine Sprache pro Datei"
      },
      {
        "feature": "Zeilenumbrüche",
        "smi": "HTML-Tags <BR>",
        "srt": "Standardmäßige Zeilenumbrüche (\\n oder \\r\\n)"
      },
      {
        "feature": "Hauptsächliche Player",
        "smi": "GOM Player, PotPlayer, Windows Media Player",
        "srt": "VLC, Plex, YouTube, Premiere Pro, DaVinci Resolve"
      }
    ],
    "koreanEncodingTitle": "SAMI-Zeitstempel: Von Uhrzeiten zu Millisekunden",
    "koreanEncodingSubtitle": "Die mathematischen Grundlagen zur Umrechnung von SRT-Zeiten in SAMI <SYNC>-Marken.",
    "koreanEncodingText": [
      "Die zentrale technische Herausforderung bei der Konvertierung von SRT nach SMI liegt im unterschiedlichen Zeitverständnis beider Formate. SubRip definiert für jeden Untertitel ein geschlossenes Intervall nach dem Schema HH:MM:SS,mmm --> HH:MM:SS,mmm. Ein Dialog von Minute 1, Sekunde 24 und 500 Millisekunden bis Minute 1, Sekunde 28 und 200 Millisekunden lautet demnach `00:01:24,500 --> 00:01:28,200`.",
      "Microsoft SAMI dagegen arbeitet mit Ereignisauslösern auf einer offenen Zeitachse. Statt einer festen Dauer verwendet SAMI das Tag `<SYNC Start=#####>`, dessen Zahlenwert die abgelaufenen Gesamt-Millisekunden darstellt. Unser Konverter berechnet dies über die Formel: StartMs = (Stunden * 3.600.000) + (Minuten * 60.000) + (Sekunden * 1.000) + Millisekunden. Für 00:01:24,500 ergibt das (1 * 60.000) + (24 * 1.000) + 500 = 84.500 ms.",
      "Da SAMI keine eigene Anzeigedauer speichert, würde ein bei <SYNC Start=84500> eingeblendeter Untertitel so lange auf dem Bildschirm stehen bleiben, bis der nächste Dialog erscheint. Um ihn exakt zum gewünschten Zeitpunkt (bei 88.200 ms) auszublenden, erzeugt unser Tool eine leere Ausblendmarke: `<SYNC Start=88200><P Class=KRCC>&nbsp;`. Dadurch wird sichergestellt, dass kein Text im Video nachhängt."
    ],
    "endTimeCalculationTitle": "Verwaltung von Sprachklassen (.KRCC, .ENCC) in SAMI",
    "endTimeCalculationSubtitle": "Wie die CSS-Klassenarchitektur von SAMI mehrsprachige Untertitel ermöglicht.",
    "endTimeCalculationText": [
      "Eine der herausragenden Eigenschaften des SAMI-Formats ist die Fähigkeit, mehrere Sprachen in einer einzigen Datei zu bündeln. Im `<STYLE>`-Header werden dafür eigene CSS-Klassen pro Sprache deklariert. So steht `.KRCC { Name: Korean; lang: ko-KR; SAMIType: CC; }` für die koreanische Spur und `.ENCC { Name: English; lang: en-US; SAMIType: CC; }` für die englische Spur.",
      "Mit unserem Konverter können Sie festlegen, welche Sprachklasse auf die generierten Untertitel angewendet wird. Für Videos, die in koreanischen Playern wie PotPlayer oder GOM Player abgespielt werden sollen, sorgt die Klasse `KRCC` dafür, dass die Wiedergabeanwendung sofort die optimierte Schriftglättung für koreanische Schriftzeichen (Hangul) anwendet.",
      "Liegen Ihnen zwei getrennte SRT-Dateien vor, können Sie beide mit den passenden Klassen konvertieren und die Synchronisationspunkte in einer einzigen zweisprachigen SAMI-Datei zusammenführen, um simultanes Sprachenlernen zu ermöglichen."
    ],
    "exampleTitle": "Praxisbeispiel: Konvertierung von SRT in SMI",
    "exampleIntro": "Vergleichen Sie den originalen SubRip-Quelltext mit dem daraus erzeugten Microsoft SAMI Code:",
    "exampleSmiInput": "1\n00:00:01,200 --> 00:00:04,500\nHallo und herzlich willkommen zu unserem Video!\nWir wünschen Ihnen gute Unterhaltung.\n\n2\n00:00:05,100 --> 00:00:08,800\nUntertitel werden in Millisekunden synchronisiert.",
    "exampleSrtOutput": "<SAMI>\n<HEAD>\n<TITLE>Umgewandelte Untertitel</TITLE>\n<STYLE TYPE=\"text/css\">\n<!--\nP { font-family:gulim, sans-serif; font-size:14pt; text-align:center; color:white; }\n.KRCC { Name:Korean; lang:ko-KR; SAMIType:CC; }\n.ENCC { Name:English; lang:en-US; SAMIType:CC; }\n-->\n</STYLE>\n</HEAD>\n<BODY>\n<SYNC Start=1200><P Class=KRCC>\nHallo und herzlich willkommen zu unserem Video!<BR>Wir wünschen Ihnen gute Unterhaltung.\n<SYNC Start=4500><P Class=KRCC>&nbsp;\n<SYNC Start=5100><P Class=KRCC>\nUntertitel werden in Millisekunden synchronisiert.\n<SYNC Start=8800><P Class=KRCC>&nbsp;\n</BODY>\n</SAMI>",
    "exampleExplanation": "Sehen Sie, wie der zweizeilige Dialog in Block #1 durch das HTML-Tag <BR> verbunden wird, die Uhrzeit-Zeitstempel in <SYNC Start=1200> und <SYNC Start=4500> umgerechnet werden und die Ausblendmarke (&nbsp;) bei 4.500 ms platziert wird, bevor der nächste Untertitel bei 5.100 ms startet.",
    "bilingualTitle": "Zeilenumbrüche und HTML-Formatierung in SAMI",
    "bilingualSubtitle": "Wie mehrzeilige Dialoge und visuelle Stile erhalten bleiben.",
    "bilingualText": [
      "In SubRip (.srt) Dateien werden Zeilenumbrüche schlicht durch herkömmliche Zeilenvorschübe (\\n) markiert. Da SAMI jedoch nach HTML-Regeln geparst wird, fassen Browser und Mediaplayer aufeinanderfolgende Leerzeichen zusammen und ignorieren Textumbrüche. Würde man SRT-Zeilen einfach unverändert kopieren, erschiene der Text als unformatierter Fließsatz.",
      "Unser Konverter behebt dies automatisch, indem jeder Zeilenumbruch innerhalb eines Dialogs in ein HTML-Tag `<BR>` umgewandelt wird. Ob Sprecherwechsel mit Spiegelstrichen (- Sprecher 1 / - Sprecher 2) oder zweizeilig gegliederte Sätze: Das beabsichtigte Layout bleibt vollständig erhalten.",
      "Darüber hinaus übernimmt unser Konverter einfache Textauszeichnungen wie Kursivschrift (`<i>...</i>`), Fettschrift (`<b>...</b>`) oder Unterstreichungen (`<u>...</u>`) innerhalb von `<P Class=...>`. Kompatible Player stellen diese Hervorhebungen originalgetreu dar."
    ],
    "ffmpegTitle": "SRT in SMI Konvertieren per Kommandozeile (FFmpeg)",
    "ffmpegSubtitle": "Automatisieren Sie die Untertitel-Konvertierung großer Sammlungen via Terminal.",
    "ffmpegCommand": "ffmpeg -i eingabe.srt -c:s sami ausgabe.smi",
    "ffmpegExplanation": [
      "Für Systemadministratoren und Entwickler, die umfangreiche Videoarchive verwalten, bietet FFmpeg die Umwandlung über die Kommandozeile an. Der Befehl `ffmpeg -i eingabe.srt -c:s sami ausgabe.smi` liest die SubRip-Datei ein und speichert sie als Microsoft SAMI (.smi).",
      "In Windows PowerShell können Sie einen ganzen Ordner verarbeiten mit: `Get-ChildItem *.srt | ForEach-Object { ffmpeg -i $_.FullName -c:s sami ($_.BaseName + '.smi') }`. Auf Linux oder macOS nutzen Sie: `for f in *.srt; do ffmpeg -i \"$f\" -c:s sami \"${f%.srt}.smi\"; done`.",
      "FFmpeg erzeugt jedoch standardisierte Vorlagen ohne interaktive Konfiguration der Sprachklassen (.KRCC/.ENCC) oder fehlerbereinigte Ausblendmarken. Unser Online-Tool bietet sofortige visuelle Kontrolle und maßgeschneiderte Ergebnisse ganz ohne Konsoleninstallation."
    ],
    "useCasesTitle": "Typische Einsatzbereiche für die SRT-in-SMI-Konvertierung",
    "useCasesSubtitle": "Erfahren Sie, wo Microsoft SAMI Untertitel unverändert unverzichtbar sind.",
    "useCasesList": [
      {
        "title": "Südkoreanische Mediaplayer",
        "description": "Gewährleisten Sie einwandfreie Wiedergabe in GOM Player, PotPlayer und KMPlayer, um von nativer Hangul-Schriftglättung und dualer Untertitelanzeige zu profitieren."
      },
      {
        "title": "Interaktive Sprachlernplattformen",
        "description": "Stellen Sie strukturierte Dateien für Lernprogramme in Asien bereit, deren Benutzeroberflächen über die <P Class=...>-Klassen Vokabeln mit Wörterbüchern synchronisieren."
      },
      {
        "title": "Terminals und Informationssysteme mit Windows-Basis",
        "description": "Integrieren Sie barrierefreie Untertitel auf Digital-Signage-Systemen und Kiosk-PCs, die auf Windows Media Player ohne externe Codecs setzen."
      },
      {
        "title": "Medienarchive und Historische Rundfunkvorgaben",
        "description": "Wandeln Sie modernisierte SRT-Transkripte zurück in archivkonforme SAMI-Dateien um, um gesetzliche Archivierungspflichten zu erfüllen."
      }
    ],
    "troubleshootTitle": "Häufige Fehler bei der SRT-in-SMI-Konvertierung Beheben",
    "troubleshootSubtitle": "Lösen Sie Probleme mit dauerhaft sichtbaren Untertiteln oder Darstellungsfehlern rasch.",
    "troubleshootTips": [
      {
        "issue": "Untertitel bleiben dauerhaft auf dem Bildschirm stehen",
        "cause": "SAMI besitzt kein Endzeit-Attribut; ohne leere Ausblendmarke bleibt der Text bis zur nächsten Dialogzeile sichtbar.",
        "solution": "Aktivieren Sie in unserem Konverter die Option 'Synchronisations-Löschpunkte Hinzufügen'. Dadurch wird am Ende jedes Blocks `<SYNC Start=EndeMs><P Class=...>&nbsp;` erzeugt."
      },
      {
        "issue": "Zweizeiliger Text wird als eine einzige lange Zeile angezeigt",
        "cause": "Zeilenumbrüche wurden nicht in `<BR>`-Tags umgewandelt, weshalb die HTML-Engine von SAMI den Text zusammenzieht.",
        "solution": "Unser Tool wandelt Textumbrüche automatisch in `<BR>`-Tags um. Verwenden Sie stets die generierte Datei des Konverters."
      },
      {
        "issue": "Sonderzeichen oder koreanischer Text werden im Windows Media Player falsch dargestellt",
        "cause": "Ältere Windows Media Player Versionen auf koreanischen Windows-Systemen setzen ANSI- (CP949/EUC-KR) statt UTF-8-Codierung voraus.",
        "solution": "Öffnen Sie die .smi-Datei im Windows Editor (Notepad), wählen Sie Datei > Speichern unter und stellen Sie 'ANSI' als Codierung ein."
      },
      {
        "issue": "Der Mediaplayer zeigt alle Sprachspuren gleichzeitig an",
        "cause": "Die Datei enthält mehrere Sprachklassen, aber im Player ist kein Filter für eine bestimmte Sprache ausgewählt.",
        "solution": "Öffnen Sie das Untertitelmenü Ihres Players (z. B. GOM Player) und wählen Sie die gewünschte Sprache (z. B. 'Koreanisch (KRCC)' oder 'Deutsch (DECC)')."
      }
    ],
    "conclusionTitle": "Optimieren Sie Ihre Untertitel-Workflows mit SRT zu SMI",
    "conclusionText": [
      "Während zeitgemäße Videoworkflows meist auf SubRip (.srt) und WebVTT (.vtt) aufbauen, bleibt Microsoft SAMI (.smi) in speziellen Softwareumgebungen, im Sprachunterricht und auf dem südkoreanischen Markt ein fester Pfeiler. Die exakte Umrechnung von Uhrzeiten in Millisekunden schlägt eine verlässliche Brücke zwischen beiden Systemen.",
      "Unser browserbasierter SRT-in-SMI-Konverter nimmt Ihnen die mühsame Handarbeit ab: Er berechnet Millisekunden auf den Punkt, generiert saubere Ausblendpunkte und liefert valide Dokumente. Zu 100 % privat in Ihrem Browser und ohne Dateiuploads."
    ]
  },
  "id": {
    "introTitle": "Panduan Lengkap Mengonversi Subtitle SRT ke SMI (SAMI)",
    "introSubtitle": "Kuasai cara mengubah file subtitle SubRip (.srt) ke format Microsoft SAMI (.smi). Pelajari arsitektur HTML SAMI, cara mengubah kode waktu jam menjadi tag <SYNC> berbasis milidetik, membuat titik pembersihan teks yang rapi, dan mengoptimalkan penayangan di Windows Media Player, GOM Player, dan PotPlayer.",
    "introText": [
      "SubRip (.srt) telah diakui secara global di industri multimedia sebagai format subtitle paling populer dan praktis. Desainnya yang sederhana—terdiri dari nomor urut dialog, stempel waktu jam (jam, menit, detik, dan milidetik), serta baris teks biasa—menjadikannya kompatibel secara instan dengan pemutar web, ponsel pintar, server media seperti Plex, serta aplikasi edit video profesional seperti Adobe Premiere Pro dan DaVinci Resolve.",
      "Namun demikian, beberapa ekosistem pembelajaran bahasa, sistem lama berbasis Windows, dan pemutar media terkemuka di Asia Timur masih sangat bergantung pada format Microsoft SAMI (.smi). Dikembangkan oleh Microsoft pada tahun 1998 untuk Windows Media Player, Synchronized Accessible Media Interchange (SAMI) menggunakan model dokumen HTML yang dipadukan dengan gaya CSS, kelas bahasa khusus, serta tag waktu <SYNC Start=\"...\"> berbasis milidetik. Di Korea Selatan, SAMI (.smi) telah menjadi standar utama selama lebih dari dua dekade pada pemutar media populer seperti GOM Player, PotPlayer, dan KMPlayer.",
      "Ketika kreator konten, penerjemah, atau pengelola arsip media perlu menyediakan subtitle untuk sistem yang mewajibkan format SAMI, konversi dari SRT ke SMI menjadi langkah yang sangat krusial. Proses ini membutuhkan lebih dari sekadar mengganti ekstensi file: stempel waktu jam harus dihitung menjadi angka bulat milidetik mutlak, jeda baris harus diubah menjadi tag HTML (<BR>), header dan kelas CSS (.KRCC, .ENCC) harus dikonfigurasi, serta titik pembersihan layar (&nbsp;) harus disisipkan agar teks tidak tertinggal di layar video.",
      "Panduan teknis ini mengupas tuntas perbedaan struktur antara SRT dan SMI, perhitungan stempel waktu, penanganan kelas bahasa ganda, otomatisasi baris perintah dengan FFmpeg, serta pemecahan masalah sinkronisasi yang paling sering terjadi."
    ],
    "whatIsTitle": "Apa itu File SRT dan Apa itu File SMI (SAMI)?",
    "whatIsText": [
      "File SubRip (.srt) adalah dokumen teks polos berorientasi baris yang dirancang khusus untuk menampilkan subtitle pada video. Setiap entri terdiri dari tiga atau empat baris: nomor urut (1, 2, 3...), rentang waktu awal dan akhir yang dipisahkan oleh tanda panah (00:01:23,456 --> 00:01:27,890), baris dialog pembicara, serta baris kosong penutup. File SRT tidak memerlukan header dokumen maupun deklarasi gaya CSS.",
      "Sebaliknya, file Microsoft SAMI (.smi atau .sami) disusun selayaknya halaman HTML/XML lengkap. Dokumen diawali dengan tag <SAMI>, memuat bagian <HEAD> dengan lembar gaya CSS tersemat (<STYLE TYPE=\"text/css\">), dan menempatkan seluruh teks dialog di dalam tag <BODY>. Setiap kalimat diawali dengan tag <SYNC Start=#####>, di mana nilainya adalah total milidetik sejak awal pemutaran video (misalnya 83456 ms, bukan 00:01:23,456).",
      "Selain itu, SAMI mengaitkan setiap dialog dengan kelas CSS (<P Class=KRCC>) yang menandai trek bahasa (seperti Korea atau Inggris) serta mengatur jenis huruf (Gulim, Batang, Arial), ukuran, warna, dan perataan teks. Jika SRT unggul dalam kesederhanaan, SAMI menawarkan keunggulan gaya CSS bawaan dan dukungan banyak bahasa dalam satu file."
    ],
    "whyConvertTitle": "Mengapa Mengonversi Subtitle SRT ke SMI / SAMI?",
    "whyConvertSubtitle": "Ketahui berbagai skenario teknis penting mengapa pengubahan SubRip (.srt) ke Microsoft SAMI (.smi) sangat diperlukan.",
    "whyConvertReasons": [
      {
        "title": "Kompatibilitas Penuh dengan Pemutar Video Korea",
        "description": "Pemutar media ternama seperti GOM Player, PotPlayer, dan KMPlayer memiliki fitur penayangan dwibahasa, penghalusan font Korea, dan alat bantu belajar bahasa yang bekerja maksimal dengan file SAMI (.smi) berkelas KRCC dan ENCC."
      },
      {
        "title": "Dukungan Windows Media Player Klasik",
        "description": "Komputer perusahaan terdahulu, perangkat laboratorium, dan kios digital dengan Windows Media Player 9, 10, atau 11 memutar subtitle secara bawaan melalui file SAMI tanpa memerlukan filter DirectShow tambahan seperti DirectVobSub (VSFilter)."
      },
      {
        "title": "Aplikasi Edukasi dan Pembelajaran Bahasa",
        "description": "Berbagai program belajar bahasa interaktif di Asia membaca tag <P Class=...> pada SAMI untuk menghubungkan kalimat langsung dengan kamus kata dan mempermudah siswa berganti bahasa."
      },
      {
        "title": "Standar Penyiaran dan Arsip Televisi",
        "description": "Beberapa saluran televisi kabel dan lembaga arsip rekaman video memiliki spesifikasi serah terima berkas yang mewajibkan struktur dokumen SAMI (.smi) dengan stylesheet CSS."
      },
      {
        "title": "Kendali Tipografi Bawaan",
        "description": "Berbeda dengan SRT yang sepenuhnya mengikuti setelan aplikasi pemutar, SAMI memungkinkan pembuat subtitle menentukan keluarga font (seperti Gulim atau Arial), ukuran, dan perataan teks langsung di blok <STYLE>."
      }
    ],
    "howToTitle": "Cara Mengonversi SRT ke SMI Online (Langkah demi Langkah)",
    "howToSubtitle": "Ikuti panduan mudah ini untuk mengubah file SubRip Anda menjadi subtitle Microsoft SAMI yang siap diputar.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Unggah atau Tempel Subtitle SRT Anda",
        "description": "Tarik dan lepas file .srt ke area unggah, klik Telusuri File dari perangkat Anda, atau salin dan tempel teks subtitle SubRip langsung ke panel kiri."
      },
      {
        "step": "2",
        "title": "Pilih Kelas Bahasa & Opsi Pembersihan Layar",
        "description": "Tentukan kelas bahasa SAMI yang sesuai (.KRCC untuk Korea, .ENCC untuk Inggris, dll.) dan pastikan opsi penambahan titik pembersihan (&nbsp;) aktif agar teks menghilang tepat waktu."
      },
      {
        "step": "3",
        "title": "Pratinjau dan Unduh Berkas .SMI",
        "description": "Periksa hasil konversi di panel kanan, lalu klik Unduh .SMI untuk menyimpan file ke perangkat Anda, atau klik Salin untuk langsung menempelkannya ke editor."
      }
    ],
    "differenceTitle": "SRT vs. SMI: Perbandingan Format Mendalam",
    "differenceSubtitle": "Bandingkan perbedaan struktur, waktu, dan kompatibilitas antara SubRip dan Microsoft SAMI.",
    "differenceTable": [
      {
        "feature": "Ekstensi Berkas",
        "smi": ".smi, .sami",
        "srt": ".srt"
      },
      {
        "feature": "Struktur Dokumen",
        "smi": "Kerangka HTML / XML lengkap (<SAMI>, <HEAD>, <BODY>)",
        "srt": "Blok teks polos berurutan (nomor, waktu, teks)"
      },
      {
        "feature": "Format Waktu",
        "smi": "Total milidetik berlalu (<SYNC Start=12345>)",
        "srt": "Format jam (HH:MM:SS,mmm --> HH:MM:SS,mmm)"
      },
      {
        "feature": "Penanda Berakhirnya Teks",
        "smi": "Implisit; dibersihkan dengan tag spasi (&nbsp;)",
        "srt": "Waktu akhir tercantum eksplisit di setiap baris"
      },
      {
        "feature": "Gaya dan Tipografi",
        "smi": "CSS terintegrasi (<STYLE TYPE=\"text/css\">)",
        "srt": "Hanya tag HTML dasar (<i>, <b>, <u>, <font>)"
      },
      {
        "feature": "Dukungan Multibahasa",
        "smi": "Bawaan via kelas CSS (.KRCC, .ENCC)",
        "srt": "Hanya satu bahasa per file"
      },
      {
        "feature": "Pemisah Baris",
        "smi": "Tag HTML <BR>",
        "srt": "Karakter baris baru biasa (\\n atau \\r\\n)"
      },
      {
        "feature": "Pemutar Utama",
        "smi": "GOM Player, PotPlayer, Windows Media Player",
        "srt": "VLC, Plex, YouTube, Premiere Pro, DaVinci Resolve"
      }
    ],
    "koreanEncodingTitle": "Stempel Waktu SAMI: Dari Format Jam ke Milidetik",
    "koreanEncodingSubtitle": "Prinsip matematis dalam mengubah penanda waktu SRT menjadi tag <SYNC> SAMI.",
    "koreanEncodingText": [
      "Tantangan utama saat mengubah SRT ke SMI terletak pada cara kedua format memetakan waktu. SubRip mendefinisikan interval tertutup untuk setiap subtitle dengan format HH:MM:SS,mmm --> HH:MM:SS,mmm. Contohnya, dialog yang berlangsung dari menit 1 detik 24 dan 500 milidetik hingga menit 1 detik 28 dan 200 milidetik ditulis `00:01:24,500 --> 00:01:28,200`.",
      "Di sisi lain, Microsoft SAMI bekerja berdasarkan pemicu waktu berurutan pada garis waktu terbuka. Alih-alih mencantumkan durasi akhir pada baris yang sama, SAMI memanfaatkan tag `<SYNC Start=#####>`, dengan angka yang menyatakan total milidetik sejak video dimulai. Rumusnya adalah: AwalMs = (Jam * 3.600.000) + (Menit * 60.000) + (Detik * 1.000) + Milidetik. Untuk 00:01:24,500 hasilnya adalah (1 * 60.000) + (24 * 1.000) + 500 = 84.500 ms.",
      "Karena SAMI tidak memiliki durasi bawaan, teks yang muncul pada <SYNC Start=84500> akan terus menempel di layar hingga dialog berikutnya tampil. Agar teks hilang tepat pada 88.200 ms, konverter kami menambahkan tag pembersih: `<SYNC Start=88200><P Class=KRCC>&nbsp;`. Cara ini memastikan subtitle lenyap secara bersih dan akurat."
    ],
    "endTimeCalculationTitle": "Pengaturan Kelas Bahasa (.KRCC, .ENCC) pada SAMI",
    "endTimeCalculationSubtitle": "Bagaimana sistem kelas CSS pada SAMI memfasilitasi subtitle multibahasa.",
    "endTimeCalculationText": [
      "Salah satu keunggulan terbesar format SAMI adalah kemampuannya menampung beberapa bahasa sekaligus dalam satu file. Pada bagian `<STYLE>`, pembuat subtitle mendeklarasikan kelas CSS untuk tiap bahasa. Sebagai contoh, `.KRCC { Name: Korean; lang: ko-KR; SAMIType: CC; }` adalah trek bahasa Korea, dan `.ENCC { Name: English; lang: en-US; SAMIType: CC; }` adalah trek bahasa Inggris.",
      "Melalui alat konversi kami, Anda dapat menentukan kelas bahasa yang akan disematkan ke hasil subtitle. Jika berkas ditujukan untuk penonton di PotPlayer atau GOM Player, memilih `KRCC` membuat pemutar langsung menerapkan rendering huruf Korea yang halus (seperti jenis huruf Gulim).",
      "Bahkan, jika Anda memiliki dua berkas SRT terpisah, Anda dapat mengonversinya sesuai kelas bahasa masing-masing lalu menggabungkan kedua blok sinkronisasi ke dalam satu berkas SAMI dwibahasa untuk keperluan belajar bahasa."
    ],
    "exampleTitle": "Contoh Nyata: Konversi SRT ke SMI",
    "exampleIntro": "Perhatikan padanan langsung antara teks asli SubRip dan kode keluaran Microsoft SAMI:",
    "exampleSmiInput": "1\n00:00:01,200 --> 00:00:04,500\nHalo dan selamat datang di video kami!\nSemoga Anda menikmati tayangan ini.\n\n2\n00:00:05,100 --> 00:00:08,800\nSubtitle disinkronkan dalam milidetik.",
    "exampleSrtOutput": "<SAMI>\n<HEAD>\n<TITLE>Subtitle Hasil Konversi</TITLE>\n<STYLE TYPE=\"text/css\">\n<!--\nP { font-family:gulim, sans-serif; font-size:14pt; text-align:center; color:white; }\n.KRCC { Name:Korean; lang:ko-KR; SAMIType:CC; }\n.ENCC { Name:English; lang:en-US; SAMIType:CC; }\n-->\n</STYLE>\n</HEAD>\n<BODY>\n<SYNC Start=1200><P Class=KRCC>\nHalo dan selamat datang di video kami!<BR>Semoga Anda menikmati tayangan ini.\n<SYNC Start=4500><P Class=KRCC>&nbsp;\n<SYNC Start=5100><P Class=KRCC>\nSubtitle disinkronkan dalam milidetik.\n<SYNC Start=8800><P Class=KRCC>&nbsp;\n</BODY>\n</SAMI>",
    "exampleExplanation": "Perhatikan bahwa baris ganda pada dialog #1 disatukan dengan tag HTML <BR>, waktu jam diubah menjadi <SYNC Start=1200> dan <SYNC Start=4500>, dan tanda pembersih (&nbsp;) disisipkan pada 4.500 ms sebelum dialog berikutnya tampil pada 5.100 ms.",
    "bilingualTitle": "Pemisah Baris dan Format HTML pada SAMI",
    "bilingualSubtitle": "Bagaimana dialog multi-baris dan estetika visual tetap dipertahankan.",
    "bilingualText": [
      "Pada file SubRip (.srt), perpindahan baris dituliskan cukup dengan baris baru biasa (\\n). Namun, karena dokumen SAMI dibaca menurut standar HTML, browser dan pemutar media akan menggabungkan spasi dan mengabaikan baris baru biasa. Menyalin teks SRT secara langsung akan menghasilkan satu baris teks panjang yang berantakan.",
      "Alat kami menanganinya secara cerdas dengan mengubah setiap baris baru menjadi tag `<BR>`. Dengan demikian, percakapan antartokoh maupun kalimat panjang yang dibagi dua baris tetap tersusun rapi di layar.",
      "Di samping itu, bila file SRT Anda memiliki format sederhana seperti cetak miring (`<i>...</i>`), tebal (`<b>...</b>`), atau garis bawah (`<u>...</u>`), konverter kami tetap menyimpannya di dalam `<P Class=...>`. Pemutar yang kompatibel akan menampilkannya dengan sempurna."
    ],
    "ffmpegTitle": "Konversi SRT ke SMI Melalui Baris Perintah (FFmpeg)",
    "ffmpegSubtitle": "Otomatisasi pengubahan berkas subtitle massal dengan perintah terminal FFmpeg.",
    "ffmpegCommand": "ffmpeg -i input.srt -c:s sami output.smi",
    "ffmpegExplanation": [
      "Bagi pengembang dan pengelola server yang menangani ribuan koleksi video, FFmpeg menawarkan kemudahan konversi berkas subtitle lewat terminal. Perintah `ffmpeg -i input.srt -c:s sami output.smi` membaca file SubRip dan menyimpannya sebagai Microsoft SAMI (.smi).",
      "Di Windows PowerShell, untuk memproses satu folder penuh, ketik: `Get-ChildItem *.srt | ForEach-Object { ffmpeg -i $_.FullName -c:s sami ($_.BaseName + '.smi') }`. Di terminal Linux atau macOS, gunakan: `for f in *.srt; do ffmpeg -i \"$f\" -c:s sami \"${f%.srt}.smi\"; done`.",
      "Meski FFmpeg sangat praktis untuk skrip, keluarannya berupa template bawaan standar tanpa opsi visual pengaturan kelas (.KRCC) atau titik pembersihan kustom. Alat online kami menghadirkan hasil yang langsung dapat dipratinjau tanpa perlu menginstal aplikasi tambahan."
    ],
    "useCasesTitle": "Penggunaan Praktis untuk Konversi SRT ke SMI",
    "useCasesSubtitle": "Temukan berbagai bidang yang terus mengandalkan format subtitle Microsoft SAMI.",
    "useCasesList": [
      {
        "title": "Pemutar Video Korea Selatan",
        "description": "Pastikan kecocokan sempurna dengan GOM Player, PotPlayer, dan KMPlayer untuk memaksimalkan fitur tampilan dwibahasa dan penghalusan huruf Hangul."
      },
      {
        "title": "Perangkat Lunak Kursus Bahasa Interaktif",
        "description": "Sediakan file terstruktur untuk aplikasi pembelajaran di Asia yang membaca tag <P Class=...> guna menyelaraskan teks dialog dengan kamus kata."
      },
      {
        "title": "Kios Informasi dan Komputer Berbasis Windows Lama",
        "description": "Tampilkan teks subtitle pada monitor publik dan sistem multimedia yang berjalan di atas Windows Media Player klasik tanpa perlu codec luar."
      },
      {
        "title": "Arsip Bersejarah dan Stasiun Televisi",
        "description": "Kembalikan transkrip modern ke format kontainer SAMI guna memenuhi standar pengarsipan dan regulasi kepatuhan siaran lama."
      }
    ],
    "troubleshootTitle": "Mengatasi Kendala Umum Konversi SRT ke SMI",
    "troubleshootSubtitle": "Selesaikan masalah teks tertinggal di layar atau huruf yang tidak terbaca dengan cepat.",
    "troubleshootTips": [
      {
        "issue": "Subtitle tetap menempel di layar dan tidak mau hilang",
        "cause": "Format SAMI tidak memiliki parameter durasi; tanpa titik pembersihan, teks akan terus tayang sampai kalimat berikutnya muncul.",
        "solution": "Pastikan opsi 'Tambahkan Titik Sinkronisasi Kosong' dicentang di konverter kami. Ini akan membuat tag `<SYNC Start=akhirMs><P Class=...>&nbsp;` di akhir tiap dialog."
      },
      {
        "issue": "Teks tampil memanjang dalam satu baris, bukan dua baris",
        "cause": "Karakter baris baru belum diubah menjadi tag HTML `<BR>`, sehingga pemutar menggabungkan seluruh teks menjadi satu.",
        "solution": "Alat kami otomatis mengganti baris baru menjadi `<BR>`. Selalu gunakan file hasil ekspor dari konverter ini."
      },
      {
        "issue": "Karakter Korea tampil berantakan di Windows Media Player",
        "cause": "Windows Media Player versi terdahulu pada Windows Korea memerlukan encoding ANSI (CP949/EUC-KR) dan bukan UTF-8.",
        "solution": "Buka file .smi di Notepad Windows, pilih File > Save As, lalu tentukan 'ANSI' pada kotak Encoding sebelum memutarnya."
      },
      {
        "issue": "Pemutar video menampilkan semua trek bahasa secara bertumpukan",
        "cause": "File memuat banyak kelas tetapi pemutar diatur untuk menampilkan semua subtitle tanpa memfilter bahasa tertentu.",
        "solution": "Buka menu Subtitle pada pemutar Anda (seperti GOM Player) dan pilih bahasa yang diinginkan (misalnya 'Korean (KRCC)' atau 'English (ENCC)')."
      }
    ],
    "conclusionTitle": "Tingkatkan Alur Kerja Subtitle Anda dengan SRT ke SMI",
    "conclusionText": [
      "Kendati industri video modern berpusat pada SubRip (.srt) dan WebVTT (.vtt), Microsoft SAMI (.smi) tetap menjadi format tak tergantikan pada aplikasi belajar bahasa dan siaran di Korea Selatan. Memahami konversi dari format jam ke milidetik menjembatani kedua format ini secara profesional.",
      "Konverter SRT ke SMI online kami memudahkan seluruh proses dengan menghitung milidetik secara presisi, menyisipkan tanda pembersih rapi, dan menyusun header dokumen yang benar. Sepenuhnya aman di browser Anda tanpa perlu mengunggah file ke server."
    ]
  },
  "tr": {
    "introTitle": "SRT Dosyalarını SMI (SAMI) Formatına Dönüştürme Rehberi",
    "introSubtitle": "SubRip (.srt) altyazı dosyalarını Microsoft SAMI (.smi) formatına dönüştürme konusunda uzmanlaşın. HTML tabanlı SAMI mimarisinin nasıl çalıştığını, saat kodlarının milisaniye cinsinden <SYNC> etiketlerine nasıl çevrildiğini, ekran temizleme işaretçilerinin eklenmesini ve Windows Media Player, GOM Player ile PotPlayer için en iyi ayarları keşfedin.",
    "introText": [
      "SubRip (.srt) formatı, tüm dünyada video altyazıları için evrensel bir standart haline gelmiştir. Sıralı sayaç numaraları, saat, dakika, saniye ve milisaniye biçimindeki zaman kodları ile sade diyalog satırlarından oluşan hafif yapısı sayesinde internet tarayıcılarında, akıllı telefonlarda, Plex gibi medya sunucularında ve Adobe Premiere Pro ile DaVinci Resolve gibi profesyonel kurgu programlarında sorunsuz çalışır.",
      "Bununla birlikte, belirli eğitim platformları, eski Windows sistemleri ve önde gelen Doğu Asya medya oynatıcıları Microsoft SAMI (.smi) formatını temel standart olarak kullanmayı sürdürmektedir. 1998 yılında Microsoft tarafından Windows Media Player için geliştirilen Synchronized Accessible Media Interchange (SAMI), CSS stilleri, özel dil sınıfları ve milisaniye tabanlı <SYNC Start=\"...\"> etiketlerini içeren HTML benzeri bir belge modeline dayanır. Güney Kore'de SAMI (.smi), GOM Player, PotPlayer ve KMPlayer gibi yaygın oynatıcılarda yirmi yılı aşkın süredir en çok tercih edilen formattır.",
      "İçerik üreticileri, altyazı çevirmenleri veya arşiv uzmanları SAMI formatı gerektiren platformlara içerik sağlarken SRT'den SMI'ye dönüştürme işlemi kaçınılmaz hale gelir. Bu işlem basitçe dosya uzantısını değiştirmekten ibaret değildir: saat kodlarının milisaniye tam sayılarına çevrilmesi, satır sonlarının HTML (<BR>) etiketleriyle birleştirilmesi, başlık ve CSS sınıflarının (.KRCC, .ENCC) tanımlanması ve altyazının ekranda asılı kalmaması için temizleme noktalarının (&nbsp;) yerleştirilmesi gerekir.",
      "Bu kapsamlı teknik rehber; SRT ile SMI arasındaki yapısal farkları, matematiksel zaman dönüşümünü, çok dilli altyazı sınıflarının yönetimini, FFmpeg ile komut satırı dönüştürme adımlarını ve en sık karşılaşılan senkronizasyon sorunlarının çözümlerini açıklamaktadır."
    ],
    "whatIsTitle": "SRT Dosyası Nedir ve SMI (SAMI) Dosyası Nedir?",
    "whatIsText": [
      "Bir SubRip (.srt) dosyası, yalnızca altyazı diyaloglarını oynatmak üzere tasarlanmış hafif ve metin tabanlı bir belgedir. Her altyazı bloğu üç veya dört satırdan oluşur: sıralı bir numara (1, 2, 3...), başlangıç ve bitiş zamanını ok işaretiyle ayıran zaman aralığı (00:01:23,456 --> 00:01:27,890), diyalog metinleri ve bloğun bittiğini belirten boş bir satır. SRT dosyalarında belge başlığı veya karmaşık etiketler bulunmaz.",
      "Buna karşılık Microsoft SAMI (.smi veya .sami) dosyası tam teşekküllü bir HTML/XML belgesi yapısındadır. En dışta <SAMI> etiketiyle açılır, içinde CSS stil tanımlarını (<STYLE TYPE=\"text/css\">) barındıran bir <HEAD> bölümü yer alır ve tüm diyaloglar <BODY> etiketi arasına yazılır. Her konuşma satırı <SYNC Start=#####> etiketiyle başlar ve bu değer videonun başlangıcından itibaren geçen toplam milisaniyeyi (örneğin 00:01:23,456 yerine 83456 ms) temsil eder.",
      "Ayrıca SAMI, her diyalog bloğunu dil parçasını (Korece veya İngilizce gibi) belirleyen bir CSS sınıfı (<P Class=KRCC>) ile ilişkilendirir; yazı tipi (Gulim, Batang, Arial), metin boyutu, rengi ve hizalaması bu sınıfla belirlenir. SRT sadeliğiyle öne çıkarken, SAMI zengin CSS stilleri ve tek dosyada çoklu dil desteği sunar."
    ],
    "whyConvertTitle": "SRT Altyazılarını Neden SMI / SAMI Formatına Dönüştürmelisiniz?",
    "whyConvertSubtitle": "SubRip (.srt) dosyalarını Microsoft SAMI (.smi) formatına çevirmenin sağladığı teknik avantajları keşfedin.",
    "whyConvertReasons": [
      {
        "title": "Kore Medya Oynatıcıları ile Tam Uyum",
        "description": "GOM Player, PotPlayer ve KMPlayer gibi popüler oynatıcılar; KRCC ve ENCC sınıflarını içeren SAMI (.smi) dosyalarıyla çalışan çift altyazı gösterimi, Korece yazı tipi yumuşatma ve dil öğrenme özelliklerini yerel olarak destekler."
      },
      {
        "title": "Eski Windows Media Player Desteği",
        "description": "Windows Media Player 9, 10 veya 11 çalıştıran kurumsal bilgisayarlar, etkileşimli kiosklar ve terminaller; DirectVobSub gibi üçüncü taraf filtrelere ihtiyaç duymadan SAMI altyazılarını doğrudan oynatır."
      },
      {
        "title": "İnteraktif Dil Eğitimi Yazılımları",
        "description": "Asya'daki birçok dil öğrenme platformu, cümleleri sözlüklerle eşleştirmek ve öğrencinin ana dil ile hedef dil arasında geçiş yapabilmesini sağlamak için SAMI <P Class=...> etiketlerini kullanır."
      },
      {
        "title": "Televizyon Yayıncılığı ve Arşiv Standartları",
        "description": "Bazı kablolu televizyon kanalları ve tarihî görsel-işitsel arşivler, CSS stilleri içeren SAMI (.smi) belgelerini zorunlu teslim şartı olarak aramaktadır."
      },
      {
        "title": "Dahili Tipografi ve Stil Denetimi",
        "description": "Tamamen oynatıcı tercihlerine bağlı olan SRT'nin aksine SAMI, yazı tipi ailesini (Gulim veya Arial), boyutunu ve ortalamasını doğrudan <STYLE> bloğu içinde sabitlemenize olanak tanır."
      }
    ],
    "howToTitle": "SRT'yi SMI'ye Online Dönüştürme (Adım Adım)",
    "howToSubtitle": "SubRip dosyalarınızı oynatmaya hazır Microsoft SAMI altyazılarına dönüştürmek için bu adımları izleyin.",
    "howToSteps": [
      {
        "step": "1",
        "title": "SRT Altyazı Dosyanızı Yükleyin veya Yapıştırın",
        "description": ".srt dosyanızı yükleme alanına sürükleyip bırakın, Dosyalara Göz At ile seçin ya da SubRip metninizi doğrudan soldaki giriş kutusuna yapıştırın."
      },
      {
        "step": "2",
        "title": "SAMI Dil Sınıfını ve Temizleme Ayarlarını Belirleyin",
        "description": "Hedef dil sınıfını (.KRCC Korece, .ENCC İngilizce vb.) seçin ve altyazının süresi bittiğinde ekrandan kaybolması için temizleme noktası ekleme seçeneğini açık tutun."
      },
      {
        "step": "3",
        "title": "Önizleyin ve .SMI Dosyasını İndirin",
        "description": "Sağ panelde oluşturulan kodu inceleyin, ardından dosyayı kaydetmek için .SMI İndir butonuna tıklayın veya metni doğrudan panonuza kopyalayın."
      }
    ],
    "differenceTitle": "SRT ve SMI: Ayrıntılı Format Karşılaştırması",
    "differenceSubtitle": "SubRip ile Microsoft SAMI arasındaki mimari, zamanlama ve uyumluluk farklarını inceleyin.",
    "differenceTable": [
      {
        "feature": "Dosya Uzantısı",
        "smi": ".smi, .sami",
        "srt": ".srt"
      },
      {
        "feature": "Belge Mimarisi",
        "smi": "Tam HTML / XML yapısı (<SAMI>, <HEAD>, <BODY>)",
        "srt": "Sıralı düz metin blokları (sayaç, zaman, metin)"
      },
      {
        "feature": "Zaman Formatı",
        "smi": "Toplam milisaniye (<SYNC Start=12345>)",
        "srt": "Saat formatı (HH:MM:SS,mmm --> HH:MM:SS,mmm)"
      },
      {
        "feature": "Bitiş Zamanı Gösterimi",
        "smi": "Örtük; boşluk karakteri (&nbsp;) etiketiyle silinir",
        "srt": "Her altyazı satırında açık bitiş zamanı"
      },
      {
        "feature": "Stil ve Tipografi",
        "smi": "Dahili CSS stil sayfası (<STYLE TYPE=\"text/css\">)",
        "srt": "Yalnızca temel HTML etiketleri (<i>, <b>, <u>, <font>)"
      },
      {
        "feature": "Çoklu Dil Desteği",
        "smi": "CSS sınıflarıyla yerel (.KRCC, .ENCC)",
        "srt": "Dosya başına yalnızca tek dil"
      },
      {
        "feature": "Satır Sonu Ayrımı",
        "smi": "HTML <BR> etiketleri",
        "srt": "Standart yeni satır karakterleri (\\n veya \\r\\n)"
      },
      {
        "feature": "Başlıca Oynatıcılar",
        "smi": "GOM Player, PotPlayer, Windows Media Player",
        "srt": "VLC, Plex, YouTube, Premiere Pro, DaVinci Resolve"
      }
    ],
    "koreanEncodingTitle": "SAMI Zaman Kodları: Saat Biçiminden Milisaniyeye",
    "koreanEncodingSubtitle": "SRT zaman aralıklarını SAMI <SYNC> etiketlerine çevirmenin matematiksel mantığı.",
    "koreanEncodingText": [
      "SRT'den SMI'ye dönüştürme işlemindeki en önemli teknik ayrıntı, iki formatın zaman çizelgesine yaklaşım farkıdır. SubRip her altyazı için HH:MM:SS,mmm --> HH:MM:SS,mmm biçiminde kapalı bir zaman aralığı belirler. Örneğin, 1. dakika 24. saniye 500. milisaniyede başlayıp 1. dakika 28. saniye 200. milisaniyede biten bir konuşma `00:01:24,500 --> 00:01:28,200` şeklinde yazılır.",
      "Buna karşılık Microsoft SAMI açık uçlu bir zaman çizelgesinde anlık tetikleyicilerle çalışır. Altyazı satırında bitiş süresi belirtmek yerine, toplam milisaniyeyi ifade eden `<SYNC Start=#####>` etiketini kullanır. Başlangıç zamanını milisaniyeye çevirme formülü şöyledir: BaslaMs = (Saat * 3.600.000) + (Dakika * 60.000) + (Saniye * 1.000) + Milisaniye. 00:01:24,500 için sonuç (1 * 60.000) + (24 * 1.000) + 500 = 84.500 ms olur.",
      "SAMI'de altyazı süresi parametresi bulunmadığından, <SYNC Start=84500> etiketinde gösterilen metin bir sonraki altyazı gelene kadar ekranda kalır. Metnin tam vaktinde (88.200 ms anında) ekrandan silinmesi için dönüştürücümüz boş bir temizleme etiketi üretir: `<SYNC Start=88200><P Class=KRCC>&nbsp;`. Bu yöntem her oynatıcıda kusursuz bir ekran temizliği sağlar."
    ],
    "endTimeCalculationTitle": "SAMI Dil Sınıflarını (.KRCC, .ENCC) Yönetme",
    "endTimeCalculationSubtitle": "SAMI'nin CSS sınıf yapısı çok dilli altyazı yönetimini nasıl mümkün kılar?",
    "endTimeCalculationText": [
      "Microsoft SAMI formatının en güçlü özelliklerinden biri, tek bir dosya içinde birden çok dilde altyazı barındırabilmesidir. Başlıktaki `<STYLE>` bloğunda her dil için özel bir CSS sınıfı tanımlanır. Örneğin, `.KRCC { Name: Korean; lang: ko-KR; SAMIType: CC; }` Korece parçasını, `.ENCC { Name: English; lang: en-US; SAMIType: CC; }` ise İngilizce parçasını temsil eder.",
      "Dönüştürücümüz ile altyazılarınıza hangi sınıfın atanacağını özgürce seçebilirsiniz. PotPlayer veya GOM Player kullanan izleyiciler için altyazı hazırlarken `KRCC` sınıfını seçmek, oynatıcının Korece yazı tipi düzeltmelerini (Gulim gibi) otomatik olarak devreye almasını sağlar.",
      "Ayrıca iki farklı dilde SRT dosyanız varsa, bunları ilgili dil sınıflarıyla dönüştürüp tek bir SAMI dosyasında birleştirerek dil öğrenimi için çift altyazı özelliğinden yararlanabilirsiniz."
    ],
    "exampleTitle": "Uygulamalı Örnek: SRT'den SMI'ye Dönüşüm",
    "exampleIntro": "Orijinal SubRip metni ile oluşturulan Microsoft SAMI kodunun birebir karşılaştırmasını inceleyin:",
    "exampleSmiInput": "1\n00:00:01,200 --> 00:00:04,500\nMerhaba, videomuza hoş geldiniz!\nİyi seyirler dileriz.\n\n2\n00:00:05,100 --> 00:00:08,800\nAltyazılar milisaniye hassasiyetinde senkronize edilir.",
    "exampleSrtOutput": "<SAMI>\n<HEAD>\n<TITLE>Dönüştürülen Altyazı</TITLE>\n<STYLE TYPE=\"text/css\">\n<!--\nP { font-family:gulim, sans-serif; font-size:14pt; text-align:center; color:white; }\n.KRCC { Name:Korean; lang:ko-KR; SAMIType:CC; }\n.ENCC { Name:English; lang:en-US; SAMIType:CC; }\n-->\n</STYLE>\n</HEAD>\n<BODY>\n<SYNC Start=1200><P Class=KRCC>\nMerhaba, videomuza hoş geldiniz!<BR>İyi seyirler dileriz.\n<SYNC Start=4500><P Class=KRCC>&nbsp;\n<SYNC Start=5100><P Class=KRCC>\nAltyazılar milisaniye hassasiyetinde senkronize edilir.\n<SYNC Start=8800><P Class=KRCC>&nbsp;\n</BODY>\n</SAMI>",
    "exampleExplanation": "1. bloktaki iki satırlık diyalogun HTML <BR> etiketiyle birleştirildiğini, saat kodlarının <SYNC Start=1200> ve <SYNC Start=4500> olarak yazıldığını ve 2. blok 5.100 ms'de başlamadan önce 4.500 ms'de boşluk (&nbsp;) etiketiyle ekranın temizlendiğini görebilirsiniz.",
    "bilingualTitle": "SAMI Formatında Satır Sonları ve HTML Düzeni",
    "bilingualSubtitle": "İki satırlı diyalogların ve görsel biçimlendirmenin korunması.",
    "bilingualText": [
      "SubRip (.srt) dosyalarında satır sonları yalnızca metin içi satır atlama karakterleriyle (\\n) oluşturulur. Ancak SAMI belgeleri HTML kurallarına göre işlendiğinden tarayıcılar ve oynatıcılar boşlukları birleştirir ve normal satır sonlarını yok sayar. SRT metnini doğrudan kopyalamak, metinlerin tek bir satırda bitişik görünmesine neden olur.",
      "Dönüştürücümüz satır sonlarını otomatik olarak `<BR>` HTML etiketine çevirerek bu sorunu çözer. Böylece iki kişinin karşılıklı konuşmaları veya okunabilirlik için ikiye bölünmüş uzun cümleler düzenini eksiksiz korur.",
      "Buna ek olarak, SRT dosyanız italik (`<i>`), kalın (`<b>`) veya altı çizili (`<u>`) etiketleri içeriyorsa, aracımız bunları `<P Class=...>` içinde muhafaza eder. SAMI uyumlu oynatıcılar bu stilleri kusursuz biçimde ekrana yansıtır."
    ],
    "ffmpegTitle": "Komut Satırında FFmpeg ile SRT'yi SMI'ye Çevirme",
    "ffmpegSubtitle": "Terminal komutlarıyla toplu altyazı dönüştürme işlemlerini otomatikleştirin.",
    "ffmpegCommand": "ffmpeg -i girdi.srt -c:s sami cikti.smi",
    "ffmpegExplanation": [
      "Büyük altyazı arşivlerini yöneten geliştiriciler ve sistem yöneticileri için FFmpeg pratik bir komut satırı aracıdır. `ffmpeg -i girdi.srt -c:s sami cikti.smi` komutu SubRip dosyasını okur ve Microsoft SAMI (.smi) olarak kaydeder.",
      "Windows PowerShell üzerinde bir klasördeki tüm dosyaları çevirmek için: `Get-ChildItem *.srt | ForEach-Object { ffmpeg -i $_.FullName -c:s sami ($_.BaseName + '.smi') }` komutunu çalıştırabilirsiniz. Linux veya macOS terminalinde: `for f in *.srt; do ffmpeg -i \"$f\" -c:s sami \"${f%.srt}.smi\"; done` kullanabilirsiniz.",
      "Ancak FFmpeg temel şablonlar üretir; dil sınıfı isimlerini (.KRCC) veya ekran temizleme noktalarını özelleştirmenize olanak tanımaz. Çevrim içi aracımız hiçbir kurulum gerektirmeden tam kontrol ve anında görsel önizleme sunar."
    ],
    "useCasesTitle": "SRT - SMI Dönüşümünün Pratik Kullanım Alanları",
    "useCasesSubtitle": "Microsoft SAMI altyazılarına ihtiyaç duyulan başlıca ortamları inceleyin.",
    "useCasesList": [
      {
        "title": "Güney Kore Medya Oynatıcıları",
        "description": "GOM Player, PotPlayer ve KMPlayer ile kusursuz uyum sağlayarak gelişmiş Korece yazı tipi desteğinden ve çift altyazı gösteriminden yararlanın."
      },
      {
        "title": "İnteraktif Dil Eğitimi Programları",
        "description": "Asya'daki dil okullarının yazılımları için kelimeleri sözlüklerle senkronize eden yapılandırılmış SAMI dosyaları hazırlayın."
      },
      {
        "title": "Eski Windows Tabanlı Kiosklar ve Terminaller",
        "description": "Ekstra codec kurmadan Windows Media Player üzerinde çalışan bilgilendirme ekranlarında ve terminallerde erişilebilir altyazılar oynatın."
      },
      {
        "title": "Televizyon ve Tarihî Arşiv Çalışmaları",
        "description": "Modern SRT transkriptlerini resmî yayın arşivleme şartnamelerine uygun eski SAMI formatına geri dönüştürün."
      }
    ],
    "troubleshootTitle": "SRT - SMI Dönüştürme Sorunlarını Giderme",
    "troubleshootSubtitle": "Ekranda asılı kalan metinleri ve görüntüleme hatalarını hızla çözün.",
    "troubleshootTips": [
      {
        "issue": "Altyazılar ekrandan kaybolmuyor ve sürekli görünür kalıyor",
        "cause": "SAMI etiketinde bitiş süresi bulunmaz; temizleme noktası eklenmezse yazı bir sonraki konuşmaya kadar ekranda kalır.",
        "solution": "Dönüştürücümüzde 'Boş Senkronizasyon Noktası Ekle' seçeneğinin işaretli olduğundan emin olun. Bu ayar her diyalog sonuna `<SYNC Start=bitisMs><P Class=...>&nbsp;` etiketi ekler."
      },
      {
        "issue": "İki satırlı altyazı tek satır halinde uzayıp gidiyor",
        "cause": "Metin içi satır sonları `<BR>` etiketine dönüştürülmediği için SAMI motoru kelimeleri art arda dizer.",
        "solution": "Aracımız satır sonlarını otomatik olarak `<BR>` yapar. Metni el ile kopyalamak yerine her zaman dönüştürücümüzün ürettiği çıktıyı kullanın."
      },
      {
        "issue": "Windows Media Player'da Korece veya Türkçe karakterler bozuk görünüyor",
        "cause": "Korece Windows sistemlerindeki eski Windows Media Player sürümleri UTF-8 yerine ANSI (CP949/EUC-KR) kodlaması bekler.",
        "solution": "İndirilen .smi dosyasını Not Defteri'nde açın, Dosya > Farklı Kaydet'i seçin ve Kodlama alanında 'ANSI' seçeneğini belirleyip kaydedin."
      },
      {
        "issue": "Oynatıcı tüm dil parçalarını üst üste gösteriyor",
        "cause": "Dosyada birden çok dil sınıfı var ancak medya oynatıcıda belirli bir dil filtresi seçilmemiş.",
        "solution": "Oynatıcınızın (örn. GOM Player) Altyazı menüsünü açın ve yalnızca izlemek istediğiniz dili (örn. 'Korean (KRCC)' veya 'English (ENCC)') işaretleyin."
      }
    ],
    "conclusionTitle": "SRT - SMI Dönüştürücü ile İş Akışınızı Hızlandırın",
    "conclusionText": [
      "Modern video dünyası SubRip (.srt) ve WebVTT (.vtt) üzerine kurulu olsa da Microsoft SAMI (.smi), özel medya yazılımlarında ve Güney Kore yayıncılık sektöründe yerini korumaktadır. Saat formatından milisaniyeye geçiş mantığını anlamak, teknik gereksinimleri kusursuz karşılamanızı sağlar.",
      "Web tabanlı SRT - SMI dönüştürücümüz milisaniyeleri hatasız hesaplayarak, temizleme noktalarını ekleyerek ve geçerli SAMI kodları üreterek tüm zorlukları ortadan kaldırır. %100 tarayıcı gizliliğiyle altyazılarınızı anında dönüştürün."
    ]
  },
  "it": {
    "introTitle": "La Guida Completa per Convertire Sottotitoli da SRT a SMI (SAMI)",
    "introSubtitle": "Padroneggia la conversione dei file di sottotitoli SubRip (.srt) nel formato Microsoft SAMI (.smi). Scopri come funziona l'architettura HTML di SAMI, come trasformare i timestamp orari in tag <SYNC> espressi in millisecondi, come inserire punti di cancellazione puliti e come ottimizzare la riproduzione in Windows Media Player, GOM Player e PotPlayer.",
    "introText": [
      "SubRip (.srt) è universalmente considerato il punto di riferimento globale per i sottotitoli video. La sua struttura essenziale—composta da numeri sequenziali, timestamp con ore, minuti, secondi e millisecondi, e righe di dialogo in testo semplice—garantisce un supporto immediato su player web, smartphone, server domestici come Plex e software di montaggio professionale come Adobe Premiere Pro e DaVinci Resolve.",
      "Ciononostante, diversi ecosistemi didattici per l'apprendimento delle lingue, sistemi Windows d'epoca e i principali riproduttori multimediali dell'Asia orientale continuano a utilizzare primariamente il formato Microsoft SAMI (.smi). Sviluppato da Microsoft nel 1998 per Windows Media Player, Synchronized Accessible Media Interchange (SAMI) adotta un modello di documento HTML arricchito da fogli di stile CSS, classi di lingua dedicate e tag temporali <SYNC Start=\"...\"> calcolati in millisecondi. In Corea del Sud, SAMI (.smi) rappresenta da oltre vent'anni il formato standard per player rinomati come GOM Player, PotPlayer e KMPlayer.",
      "Quando video editor, traduttori o cineteche devono fornire sottotitoli per piattaforme che richiedono rigorosamente il formato SAMI, convertire da SRT a SMI diventa un passaggio indispensabile. Non si tratta di una semplice ridenominazione dell'estensione: occorre trasformare i codici orari in millisecondi interi assoluti, convertire le interruzioni di riga in tag HTML (<BR>), impostare intestazioni e classi CSS (.KRCC, .ENCC) e inserire punti di cancellazione (&nbsp;) affinché le battute non restino bloccate a schermo.",
      "Questa guida tecnica approfondita esamina le discrepanze strutturali tra SRT e SMI, le formule di conversione temporale, le buone pratiche per la gestione dei sottotitoli bilingue, l'automazione tramite FFmpeg e la risoluzione dei problemi di sincronizzazione più diffusi."
    ],
    "whatIsTitle": "Che cos'è un File SRT e che cos'è un File SMI (SAMI)?",
    "whatIsText": [
      "Un file SubRip (.srt) è un documento di testo lineare ideato per mostrare battute di dialogo in corrispondenza delle immagini. Ciascun blocco comprende un indice numerico (1, 2, 3...), un intervallo temporale con inizio e fine separati da una freccia (00:01:23,456 --> 00:01:27,890), il testo del dialogo e una riga vuota di separazione. SRT non include intestazioni complesse né stili grafici vincolanti.",
      "Al contrario, un file Microsoft SAMI (.smi o .sami) è strutturato come un documento HTML/XML a tutti gli effetti. Si apre con il tag <SAMI>, contiene una sezione <HEAD> con fogli di stile CSS integrati (<STYLE TYPE=\"text/css\">) e colloca tutti i sottotitoli all'interno del corpo <BODY>. Ciascuna frase è introdotta dal tag <SYNC Start=#####>, dove il valore corrisponde ai millisecondi complessivi trascorsi dall'inizio del filmato (ad esempio 83456 ms anziché 00:01:23,456).",
      "Inoltre, SAMI collega ogni battuta a una classe CSS (<P Class=KRCC>), che dichiara la lingua (coreano o inglese) e gestisce caratteristiche tipografiche come font (Gulim, Batang, Arial), dimensione, colore e allineamento. Se SRT si fa apprezzare per la sua praticità, SAMI offre la potenza degli stili CSS e la gestione multilingue in un singolo file."
    ],
    "whyConvertTitle": "Perché Convertire Sottotitoli da SRT a SMI / SAMI?",
    "whyConvertSubtitle": "Scopri gli scenari tecnici principali in cui la conversione da SubRip (.srt) a Microsoft SAMI (.smi) risulta fondamentale.",
    "whyConvertReasons": [
      {
        "title": "Piena Compatibilità con i Player Coreani",
        "description": "I riproduttori sudcoreani più diffusi come GOM Player, PotPlayer e KMPlayer includono funzioni avanzate per la visualizzazione simultanea bilingue, il rendering ottimizzato dei caratteri Hangul e lo studio delle lingue con file SAMI (.smi) dotati di classi KRCC ed ENCC."
      },
      {
        "title": "Supporto su Versioni Classiche di Windows Media Player",
        "description": "PC aziendali, totem informativi e installazioni che impiegano Windows Media Player 9, 10 o 11 gestiscono nativamente i sottotitoli in formato SAMI senza richiedere l'installazione di filtri DirectShow come DirectVobSub (VSFilter)."
      },
      {
        "title": "Software Didattici per l'Apprendimento delle Lingue",
        "description": "Numerose applicazioni interattive di studio linguistico in Asia sfruttano i tag <P Class=...> di SAMI per associare le parole a dizionari integrati e consentire allo studente di passare dalla lingua madre a quella straniera."
      },
      {
        "title": "Requisiti di Trasmissione e Conservazione Archivistica",
        "description": "Determinate specifiche di consegna per emittenti televisive e cineteche storiche prescrivono la fornitura di sottotitoli strutturati secondo le specifiche SAMI con stili CSS incorporati."
      },
      {
        "title": "Controllo Diretto della Tipografia e dello Stile",
        "description": "A differenza di SRT, che dipende dalle impostazioni del lettore, SAMI permette di definire font (come Gulim o Arial), corpo del testo e allineamento al centro direttamente all'interno del blocco <STYLE>."
      }
    ],
    "howToTitle": "Come Convertire SRT in SMI Online (Passo dopo Passo)",
    "howToSubtitle": "Segui questa semplice procedura per trasformare i tuoi file SubRip in sottotitoli Microsoft SAMI perfettamente compatibili.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Carica o Incolla i Sottotitoli SRT",
        "description": "Trascina il file .srt nell'area di rilascio, clicca su Sfoglia File per selezionarlo dal tuo dispositivo oppure incolla direttamente il testo SubRip nel riquadro di sinistra."
      },
      {
        "step": "2",
        "title": "Imposta la Classe di Lingua e le Opzioni di Rimozione",
        "description": "Seleziona la classe SAMI desiderata (.KRCC per il coreano, .ENCC per l'inglese, .ITCC per l'italiano) e mantieni attiva l'opzione dei punti di cancellazione (&nbsp;) per fare sparire il testo al momento giusto."
      },
      {
        "step": "3",
        "title": "Visualizza l'Anteprima e Scarica il File .SMI",
        "description": "Esamina il markup generato nel pannello destro e clicca su Scarica .SMI per salvare il file, oppure premi Copia per incollarlo dove preferisci."
      }
    ],
    "differenceTitle": "SRT vs. SMI: Confronto Tecnico Approfondito",
    "differenceSubtitle": "Valuta le differenze di struttura, gestione temporale e compatibilità tra SubRip e Microsoft SAMI.",
    "differenceTable": [
      {
        "feature": "Estensione del File",
        "smi": ".smi, .sami",
        "srt": ".srt"
      },
      {
        "feature": "Architettura del Documento",
        "smi": "Struttura HTML / XML completa (<SAMI>, <HEAD>, <BODY>)",
        "srt": "Blocchi sequenziali in testo semplice (indice, orari, testo)"
      },
      {
        "feature": "Formato Temporale",
        "smi": "Millisecondi trascorsi (<SYNC Start=12345>)",
        "srt": "Formato orologio (HH:MM:SS,mmm --> HH:MM:SS,mmm)"
      },
      {
        "feature": "Chiusura del Sottotitolo",
        "smi": "Implicita; cancellata tramite tag con spazio unificatore (&nbsp;)",
        "srt": "Orario di fine esplicito su ciascuna riga"
      },
      {
        "feature": "Stili e Tipografia",
        "smi": "Foglio di stile CSS integrato (<STYLE TYPE=\"text/css\">)",
        "srt": "Solo tag HTML essenziali (<i>, <b>, <u>, <font>)"
      },
      {
        "feature": "Supporto Multilingue",
        "smi": "Nativo attraverso classi CSS (.KRCC, .ENCC, .ITCC)",
        "srt": "Unica lingua per ciascun file"
      },
      {
        "feature": "A Capo del Testo",
        "smi": "Tag HTML <BR>",
        "srt": "Caratteri di nuova riga standard (\\n o \\r\\n)"
      },
      {
        "feature": "Riproduttori di Riferimento",
        "smi": "GOM Player, PotPlayer, Windows Media Player",
        "srt": "VLC, Plex, YouTube, Premiere Pro, DaVinci Resolve"
      }
    ],
    "koreanEncodingTitle": "I Timestamp SAMI: Dall'Orologio ai Millisecondi",
    "koreanEncodingSubtitle": "La logica matematica alla base del passaggio dagli orari SRT ai tag SAMI <SYNC>.",
    "koreanEncodingText": [
      "La principale peculiarità tecnica nella conversione da SRT a SMI consiste nel modo in cui i due standard intendono la linea temporale. SubRip associa a ogni battuta un intervallo chiuso nel formato HH:MM:SS,mmm --> HH:MM:SS,mmm. Per esempio, un dialogo pronunciato tra 1 minuto, 24 secondi e 500 millisecondi e 1 minuto, 28 secondi e 200 millisecondi viene codificato come `00:01:24,500 --> 00:01:28,200`.",
      "Al contrario, Microsoft SAMI opera tramite trigger istantanei lungo una linea temporale continua. Invece di indicare un orario finale, SAMI impiega il tag `<SYNC Start=#####>`, in cui il valore numerico esprime i millisecondi trascorsi dall'avvio del video. La formula di conversione è: InizioMs = (Ore * 3.600.000) + (Minuti * 60.000) + (Secondi * 1.000) + Millisecondi. Per 00:01:24,500 il calcolo produce (1 * 60.000) + (24 * 1.000) + 500 = 84.500 ms.",
      "Dato che SAMI non possiede un parametro di durata nativo, una frase comparsa a <SYNC Start=84500> resterebbe visibile sullo schermo fino alla battuta successiva. Per farla scomparire con assoluta puntualità (a 88.200 ms), il nostro convertitore crea un tag di cancellazione: `<SYNC Start=88200><P Class=KRCC>&nbsp;`. Questa soluzione previene residui visivi e testi sovrapposti."
    ],
    "endTimeCalculationTitle": "Gestione delle Classi di Lingua (.KRCC, .ENCC) in SAMI",
    "endTimeCalculationSubtitle": "Come l'architettura a classi CSS di SAMI abilita i sottotitoli multilingue.",
    "endTimeCalculationText": [
      "Uno dei punti di forza del formato SAMI risiede nella capacità di raggruppare più lingue in un solo documento. Nel blocco `<STYLE>` dell'intestazione vengono definite classi CSS per ciascun idioma. Ad esempio, `.KRCC { Name: Korean; lang: ko-KR; SAMIType: CC; }` contrassegna la traccia coreana e `.ENCC { Name: English; lang: en-US; SAMIType: CC; }` contrassegna quella inglese.",
      "Attraverso il nostro convertitore puoi stabilire la classe linguistica da assegnare al testo. Nei filmati destinati a player come PotPlayer o GOM Player, l'impiego della classe `KRCC` fa sì che il motore di rendering attivi automaticamente le impostazioni tipografiche ideali per i caratteri Hangul coreani (come il font Gulim).",
      "Qualora disponessi di due file SRT separati in lingue differenti, potrai convertirli con le rispettive classi e unire i blocchi temporali in un unico file SAMI bilingue per consentire agli spettatori di alternare i sottotitoli o visualizzarli insieme per esercitarsi."
    ],
    "exampleTitle": "Esempio Concreto: Conversione da SRT a SMI",
    "exampleIntro": "Confronta il testo originale SubRip con il codice generato in Microsoft SAMI:",
    "exampleSmiInput": "1\n00:00:01,200 --> 00:00:04,500\nCiao e benvenuto nel nostro video!\nCi auguriamo che la presentazione sia di tuo gradimento.\n\n2\n00:00:05,100 --> 00:00:08,800\nI sottotitoli sono sincronizzati al millisecondo.",
    "exampleSrtOutput": "<SAMI>\n<HEAD>\n<TITLE>Sottotitoli Convertiti</TITLE>\n<STYLE TYPE=\"text/css\">\n<!--\nP { font-family:gulim, sans-serif; font-size:14pt; text-align:center; color:white; }\n.KRCC { Name:Korean; lang:ko-KR; SAMIType:CC; }\n.ENCC { Name:English; lang:en-US; SAMIType:CC; }\n-->\n</STYLE>\n</HEAD>\n<BODY>\n<SYNC Start=1200><P Class=KRCC>\nCiao e benvenuto nel nostro video!<BR>Ci auguriamo che la presentazione sia di tuo gradimento.\n<SYNC Start=4500><P Class=KRCC>&nbsp;\n<SYNC Start=5100><P Class=KRCC>\nI sottotitoli sono sincronizzati al millisecondo.\n<SYNC Start=8800><P Class=KRCC>&nbsp;\n</BODY>\n</SAMI>",
    "exampleExplanation": "Nota come le due righe del sottotitolo #1 vengano unite dal tag HTML <BR>, i timestamp trasformati in <SYNC Start=1200> e <SYNC Start=4500>, e il punto di rimozione (&nbsp;) collocato a 4.500 ms prima dell'inizio del dialogo successivo a 5.100 ms.",
    "bilingualTitle": "A Capo e Formattazione HTML in SAMI",
    "bilingualSubtitle": "Come vengono mantenuti i dialoghi su due righe e la formattazione grafica.",
    "bilingualText": [
      "Nei file SubRip (.srt) il ritorno a capo viene gestito con normali caratteri di nuova riga (\\n). Tuttavia, poiché i file SAMI vengono interpretati come documenti HTML, i player e i browser raggruppano gli spazi consecutivi ignorando i ritorni a capo standard. Riportare il testo grezzo produrrebbe una sola frase continua sgradevole da leggere.",
      "Il nostro convertitore rimedia automaticamente convertendo ogni interruzione di riga nel tag `<BR>`. In tal modo i dialoghi tra due personaggi contraddistinti da trattini o le frasi lunghe ripartite su due livelli mantengono l'impaginazione corretta.",
      "In aggiunta, se il tuo file SRT contiene tag di formattazione come corsivo (`<i>`), grassetto (`<b>`) o sottolineato (`<u>`), il nostro strumento li preserva all'interno di `<P Class=...>`. I player compatibili renderanno gli stili grafici con la massima fedeltà."
    ],
    "ffmpegTitle": "Convertire da SRT a SMI da Riga di Comando con FFmpeg",
    "ffmpegSubtitle": "Automatizza la conversione massiva dei tuoi sottotitoli tramite comandi di terminale.",
    "ffmpegCommand": "ffmpeg -i sorgente.srt -c:s sami destinazione.smi",
    "ffmpegExplanation": [
      "Per amministratori di sistema e videomaker che gestiscono migliaia di file, FFmpeg mette a disposizione la conversione rapida da riga di comando. Il comando `ffmpeg -i sorgente.srt -c:s sami destinazione.smi` legge il documento SubRip e lo salva nel formato Microsoft SAMI (.smi).",
      "In Windows PowerShell, per processare un'intera cartella, digita: `Get-ChildItem *.srt | ForEach-Object { ffmpeg -i $_.FullName -c:s sami ($_.BaseName + '.smi') }`. Su terminali Linux o macOS, esegui: `for f in *.srt; do ffmpeg -i \"$f\" -c:s sami \"${f%.srt}.smi\"; done`.",
      "Tuttavia, FFmpeg genera strutture standardizzate che non permettono di personalizzare interattivamente le classi di lingua (.KRCC) né di gestire con precisione i punti di cancellazione. Il nostro strumento web garantisce anteprima immediata e controllo totale senza alcuna riga di comando."
    ],
    "useCasesTitle": "Ambiti di Applicazione per la Conversione da SRT a SMI",
    "useCasesSubtitle": "Scopri dove i sottotitoli in formato Microsoft SAMI rimangono fondamentali.",
    "useCasesList": [
      {
        "title": "Player Multimediali Sudcoreani",
        "description": "Assicura un funzionamento ineccepibile con GOM Player, PotPlayer e KMPlayer, beneficiando del rendering avanzato per font coreani e della visualizzazione simultanea bilingue."
      },
      {
        "title": "Piattaforme Didattiche di Studio Linguistico",
        "description": "Prepara file strutturati per applicazioni educative in Asia che collegano i sottotitoli a vocabolari interattivi mediante le classi <P Class=...>."
      },
      {
        "title": "Totem Informativi e Sistemi Windows Classici",
        "description": "Visualizza sottotitoli accessibili su postazioni multimediali aziendali e schermi digitali basati su Windows Media Player senza codec esterni."
      },
      {
        "title": "Archivi Televisivi e Cinetecari",
        "description": "Riconverti trascrizioni SRT contemporanee nel formato SAMI per conformarti a specifici capitolati tecnici e norme di conservazione storica."
      }
    ],
    "troubleshootTitle": "Risoluzione dei Problemi di Conversione da SRT a SMI",
    "troubleshootSubtitle": "Risolvi all'istante testi persistenti a schermo ed errori di visualizzazione.",
    "troubleshootTips": [
      {
        "issue": "I sottotitoli non scompaiono e restano impressi a schermo",
        "cause": "SAMI non dispone di un parametro di durata; senza punto di cancellazione il testo rimane visibile fino al dialogo successivo.",
        "solution": "Verifica che l'opzione 'Aggiungi Punti di Cancellazione' sia selezionata nel nostro convertitore. Verrà creato un tag `<SYNC Start=fineMs><P Class=...>&nbsp;` al termine di ogni battuta."
      },
      {
        "issue": "Il testo viene mostrato su una sola riga lunghissima anziché due",
        "cause": "I ritorni a capo non sono stati trasformati in tag HTML `<BR>`, spingendo il motore SAMI ad accorpare le parole.",
        "solution": "La nostra applicazione traduce sempre i ritorni a capo in tag `<BR>`. Utilizza sempre il file scaricato dal convertitore."
      },
      {
        "issue": "I caratteri coreani o accentati risultano illeggibili in Windows Media Player",
        "cause": "Le versioni classiche di Windows Media Player su sistemi Windows coreani richiedono la codifica ANSI (CP949/EUC-KR) invece di UTF-8.",
        "solution": "Apri il file .smi con il Blocco note di Windows, clicca su File > Salva con nome e seleziona 'ANSI' nel menu Codifica prima di riprodurre il video."
      },
      {
        "issue": "Il lettore multimediale mostra tutte le lingue contemporaneamente",
        "cause": "Nel file sono presenti diverse classi CSS ma nel player è attiva la visualizzazione globale di tutte le tracce.",
        "solution": "Accedi al menu dei sottotitoli del player (es. GOM Player) e seleziona la lingua desiderata (es. 'Coreano (KRCC)' o 'Italiano (ITCC)')."
      }
    ],
    "conclusionTitle": "Perfeziona il Tuo Flusso di Sottotitolaggio con SRT a SMI",
    "conclusionText": [
      "Benché la produzione audiovisiva moderna prediliga SubRip (.srt) e WebVTT (.vtt), il formato Microsoft SAMI (.smi) rimane insostituibile per software specialistici, nell'insegnamento delle lingue e nella distribuzione televisiva sudcoreana. Comprendere la transizione dagli orari di orologio ai millisecondi permette di soddisfare con precisione qualsiasi requisito di consegna.",
      "Il nostro convertitore online da SRT a SMI semplifica l'intero processo calcolando i millisecondi con precisione al millimetro, generando punti di cancellazione puliti e strutturando intestazioni SAMI impeccabili. Con privacy al 100% nel tuo browser e senza caricare file su server, converti i tuoi sottotitoli in totale sicurezza."
    ]
  }
};

export function getSrtToSmiGuideContent(locale: Locale): SrtToSmiGuideContent {
  return SRT_TO_SMI_GUIDES[locale] || SRT_TO_SMI_GUIDES.en;
}
