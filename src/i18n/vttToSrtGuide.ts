import type { Locale } from './config';

export interface VttToSrtGuideContent {
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
    vtt: string;
    srt: string;
  }[];
  syntaxBreakdownTitle: string;
  syntaxBreakdownText: string[];

  exampleTitle: string;
  exampleIntro: string;
  exampleVttInput: string;
  exampleSrtOutput: string;
  exampleExplanation: string;

  renameTitle: string;
  renameSubtitle: string;
  renameReasons: {
    problem: string;
    explanation: string;
  }[];

  ffmpegTitle: string;
  ffmpegSubtitle: string;
  ffmpegCommand: string;
  ffmpegExplanation: string[];

  timingTitle: string;
  timingText: string[];

  stylingTitle: string;
  stylingSubtitle: string;
  stylingText: string[];
  stylingList: {
    feature: string;
    behavior: string;
  }[];

  headerTitle: string;
  headerText: string[];

  softwareTitle: string;
  softwareSubtitle: string;
  softwareWorkflows: {
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

  textPreservationTitle: string;
  textPreservationText: string[];

  formatChoiceTitle: string;
  formatChoiceSubtitle: string;
  useVttWhen: string[];
  useSrtWhen: string[];

  conclusionTitle: string;
  conclusionText: string[];
}

export const VTT_TO_SRT_GUIDE: Record<Locale, VttToSrtGuideContent> = {
  en: {
    introTitle: "Complete Guide to Converting WebVTT (VTT) Subtitles to SubRip (SRT)",
    introSubtitle: "Learn how to convert WebVTT caption files into universal SubRip (.srt) format for video editing software, desktop media players, and offline workflows.",
    introText: [
      "WebVTT (.vtt) is the modern web standard for HTML5 video text tracks, but SubRip (.srt) remains the universal champion of desktop media players, professional non-linear video editing software (NLEs), and broadcast post-production workflows.",
      "When you download subtitle tracks from modern video platforms (such as YouTube, Vimeo, Zoom, Coursera, or web video streams), they are frequently delivered in WebVTT format. However, if you need to import those subtitles into Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro, or play them on older smart TVs and media players like VLC, you must convert the .vtt file into a standardized .srt file.",
      "Our free online VTT to SRT converter transforms WebVTT captions into clean, perfectly numbered SubRip files directly in your web browser—ensuring 100% privacy with zero server uploads and instant processing."
    ],
    whatIsTitle: "What Is a VTT to SRT Converter?",
    whatIsText: [
      "A VTT to SRT converter is a specialized caption transformation utility designed to reformat WebVTT (Web Video Text Tracks) subtitle files into the SubRip (.srt) format.",
      "While both formats are plain-text documents containing synchronized dialogue and timestamps, they use distinct syntax structures. WebVTT begins with a mandatory 'WEBVTT' file signature, uses decimal points for milliseconds (00:00:01.000), and supports optional cue numbers and CSS styling.",
      "In contrast, SubRip requires strict sequential integer numbering (1, 2, 3...), uses commas for millisecond delimiters (00:00:01,000), and omits file-level header signatures. A converter parses the WebVTT blocks, removes web-specific metadata (like NOTE and STYLE blocks), generates sequential cue numbers, replaces timecode dots with commas, and outputs compliant SubRip code."
    ],
    whyConvertTitle: "Why Convert VTT to SRT? Practical Compatibility Benefits",
    whyConvertSubtitle: "Converting WebVTT subtitles into SubRip format is required across many professional and media-viewing scenarios:",
    whyConvertReasons: [
      {
        title: "Video Editing Software Compatibility",
        description: "Professional video editors—including Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro, Sony Vegas, and Avid Media Composer—have native, battle-tested support for .srt tracks, whereas some versions struggle with complex WebVTT files."
      },
      {
        title: "Desktop Media Players & Offline Playback",
        description: "Desktop media players (VLC, MPC-HC, MPV, PotPlayer) and hardware media devices (smart TVs, Roku, home theater receivers) reliably auto-detect and render .srt sidecar subtitle files."
      },
      {
        title: "Platform-Specific Upload Requirements",
        description: "Certain social media channels, video distributors, podcast hosts, and subtitle archiving repositories strictly demand .srt files for caption track submissions."
      },
      {
        title: "Handoff to Translators & Subtitle Editors",
        description: "Translators and captioning specialists often work within dedicated subtitle editing suites (such as Aegisub or Subtitle Edit) that are heavily optimized for standard SubRip workflows."
      },
      {
        title: "Eliminating Web-Specific Parsing Overhead",
        description: "WebVTT files often include web styling, positioning coordinates, and regional metadata that can cause visual clutter or parsing errors when imported into desktop software."
      }
    ],
    howToTitle: "How to Convert VTT to SRT Online in 5 Simple Steps",
    howToSubtitle: "Follow this easy step-by-step workflow to turn any WebVTT file into a valid SubRip subtitle file in seconds:",
    howToSteps: [
      {
        step: "1",
        title: "Upload Your WebVTT File or Paste Text",
        description: "Drag and drop your .vtt document into the upload zone above, select a file from your computer, or paste raw WebVTT text directly into the input editor."
      },
      {
        step: "2",
        title: "Instant In-Browser Conversion",
        description: "Our converter strips the WEBVTT header, adds sequential cue numbers (1, 2, 3...), and converts all decimal millisecond points into commas automatically."
      },
      {
        step: "3",
        title: "Review SubRip (.SRT) Output",
        description: "Inspect the generated SubRip cues in the live preview window to verify that dialogue lines, timestamps, and sequential numbering are structured properly."
      },
      {
        step: "4",
        title: "Copy or Download .SRT File",
        description: "Click 'Download' to save the standardized subtitles.srt file to your device, or click 'Copy' to paste the output directly into your project."
      },
      {
        step: "5",
        title: "Import into Your Video Editor or Player",
        description: "Load the resulting .srt file into Premiere Pro, DaVinci Resolve, VLC Media Player, or upload it to your chosen video publishing platform."
      }
    ],
    differenceTitle: "What Is the Difference Between VTT and SRT?",
    differenceSubtitle: "Comprehensive technical comparison between WebVTT and SubRip formats:",
    differenceTable: [
      {
        feature: "Primary Use Case",
        vtt: "Web browsers, HTML5 video <track> elements, web media players",
        srt: "Desktop media players, video editors (Premiere, DaVinci), broadcast"
      },
      {
        feature: "File Signature Header",
        vtt: "Mandatory 'WEBVTT' on line 1",
        srt: "None (starts directly with cue index 1)"
      },
      {
        feature: "Timestamp Delimiter",
        vtt: "Period / dot before milliseconds (00:01:23.456)",
        srt: "Comma before milliseconds (00:01:23,456)"
      },
      {
        feature: "Sequential Cue Numbers",
        vtt: "Optional (cue identifiers supported but not required)",
        srt: "Strictly mandatory (1, 2, 3... sequential integers)"
      },
      {
        feature: "Styling & Customization",
        vtt: "Full CSS styling (::cue), font colors, backgrounds, opacity",
        srt: "Limited to basic inline HTML tags (<b>, <i>, <u>, <font>)"
      },
      {
        feature: "Screen Positioning & Alignment",
        vtt: "Supported (line:X%, position:Y%, align:start/middle/end)",
        srt: "Not supported in standard SRT (always bottom-centered)"
      },
      {
        feature: "Comments & Metadata Blocks",
        vtt: "Supported via NOTE, STYLE, and REGION blocks",
        srt: "Not supported (causes parsing syntax errors if present)"
      }
    ],
    syntaxBreakdownTitle: "Timestamp Syntax: Period vs. Comma Breakdown",
    syntaxBreakdownText: [
      "The most significant syntactic difference between the two formats is the millisecond separator:",
      "• WebVTT (.vtt) Format: 00:00:01.500 --> 00:00:04.800 (Uses a decimal period '.')",
      "• SubRip (.srt) Format: 00:00:01,500 --> 00:00:04,800 (Uses a comma ',')",
      "Desktop software and video players configured for SubRip expect a comma separator. If a player encounters a period, it may fail to recognize the timecode, resulting in missing subtitles or sync errors."
    ],
    exampleTitle: "VTT to SRT Conversion Example: Before and After",
    exampleIntro: "Examine this practical example showing how structured WebVTT text is converted into clean SubRip subtitles:",
    exampleVttInput: `WEBVTT

00:00:01.000 --> 00:00:04.200
Welcome to our video production tutorial.

00:00:04.300 --> 00:00:08.100
Today we are converting WebVTT subtitles
into universal SubRip SRT format.`,
    exampleSrtOutput: `1
00:00:01,000 --> 00:00:04,200
Welcome to our video production tutorial.

2
00:00:04,300 --> 00:00:08,100
Today we are converting WebVTT subtitles
into universal SubRip SRT format.`,
    exampleExplanation: "During conversion, four key modifications occur: (1) The 'WEBVTT' header is removed, (2) Sequential cue numbers (1, 2...) are automatically inserted above each block, (3) Millisecond decimal dots (.000) are converted into commas (,000), and (4) The subtitle dialogue text and timing synchronization remain completely intact.",
    renameTitle: "Can You Just Rename a .VTT File to .SRT?",
    renameSubtitle: "Why simply changing the file extension in Windows Explorer or macOS Finder will fail:",
    renameReasons: [
      {
        problem: "Missing Sequential Cue Numbers",
        explanation: "Most WebVTT files do not include sequential cue numbers. SubRip parsers in video editors like Premiere and media players like VLC require strictly ordered integers above every timestamp."
      },
      {
        problem: "Invalid Millisecond Delimiters (Periods vs. Commas)",
        explanation: "Renaming a file does not alter its internal text. The timestamps will still contain periods (00:00:01.000), which standard SRT parsers reject as invalid syntax."
      },
      {
        problem: "Leftover WEBVTT Header Signature",
        explanation: "The 'WEBVTT' header at the top of the file will confuse SRT parsers, often causing them to discard the entire first subtitle cue or reject the file completely."
      }
    ],
    ffmpegTitle: "How to Convert VTT to SRT With FFmpeg (Command-Line Guide)",
    ffmpegSubtitle: "For developers and automated media workflows using command-line tools:",
    ffmpegCommand: "ffmpeg -i input.vtt output.srt",
    ffmpegExplanation: [
      "FFmpeg is an open-source multimedia utility capable of converting subtitle streams directly from your terminal or command prompt. Running the basic command above converts a WebVTT file to SubRip format.",
      "• '-i input.vtt': Specifies the path to your source WebVTT file.",
      "• 'output.srt': Specifies the output filename. FFmpeg detects the .srt extension and converts the timestamp syntax and numbering accordingly.",
      "Note: FFmpeg requires command-line installation and environment setup. For quick, one-off subtitle conversions without terminal commands or software installation, our free online converter delivers identical standards-compliant SubRip output instantly in your browser."
    ],
    timingTitle: "Does Converting VTT to SRT Preserve Subtitle Timing?",
    timingText: [
      "Yes. A standard format conversion preserves the exact start and end timestamps of every subtitle cue.",
      "The numeric values for hours, minutes, seconds, and milliseconds remain identical. The only modification is the syntax separator changing from a period to a comma (e.g., '00:01:23.456' becomes '00:01:23,456'). Your subtitle cues will synchronize perfectly with your video playback."
    ],
    stylingTitle: "What Happens to VTT Styling, Positioning & Metadata?",
    stylingSubtitle: "Understanding the technical transition from rich WebVTT features to simple SubRip text:",
    stylingText: [
      "WebVTT is a rich, modern specification supporting advanced presentation capabilities that do not have standardized equivalents in the simpler SubRip specification.",
      "When converting from VTT to SRT, the primary objective is extracting the spoken dialogue and timing cues. Because SRT cannot reliably render complex web styling across different media players, certain WebVTT-specific features are handled as follows:"
    ],
    stylingList: [
      {
        feature: "Cue Positioning & Alignment (line:X%, position:Y%, align:end)",
        behavior: "Positioning coordinates are stripped because standard SRT always renders subtitles centered at the bottom of the video frame."
      },
      {
        feature: "CSS Style Blocks (STYLE { ::cue { color: yellow; } })",
        behavior: "Global CSS style blocks are removed to prevent code from rendering as raw text on screen in video editors."
      },
      {
        feature: "NOTE & Metadata Comments (NOTE This is a comment)",
        behavior: "Internal comment blocks are safely discarded during conversion."
      },
      {
        feature: "Basic Inline Styling (<b>, <i>, <u>)",
        behavior: "Standard inline bold, italic, and underline tags are widely supported in both formats and are preserved."
      }
    ],
    headerTitle: "What Happens to the WEBVTT Header?",
    headerText: [
      "The 'WEBVTT' signature on the first line is an exclusive requirement of the WebVTT standard.",
      "During conversion to SRT, this header is deliberately removed. SubRip files must begin immediately with the first cue index number ('1') followed by the first timestamp line. Leaving the header in place would violate SRT syntax and cause playback errors."
    ],
    softwareTitle: "VTT to SRT for Video Editors, VLC & Media Software",
    softwareSubtitle: "Seamlessly integrate your converted subtitles across major media tools:",
    softwareWorkflows: [
      {
        title: "Adobe Premiere Pro & After Effects",
        description: "Import your .srt file directly into the Captions workspace. Premiere will create a dedicated caption track with full font, size, and styling controls."
      },
      {
        title: "DaVinci Resolve & Final Cut Pro",
        description: "Drag the .srt file onto your timeline. Resolve automatically creates a Subtitle track with synchronized markers ready for color grading and export."
      },
      {
        title: "VLC Media Player & Desktop Players",
        description: "Name your .srt file with the same filename as your video (e.g., video.mp4 and video.srt) in the same folder. VLC will automatically detect and play the subtitle track."
      },
      {
        title: "HandBrake & Video Transcoders",
        description: "Burn hardcoded subtitles into your MP4/MKV video or embed soft subtitle tracks effortlessly using standard .srt files."
      }
    ],
    troubleshootTitle: "Common VTT to SRT Conversion Problems & Solutions",
    troubleshootSubtitle: "Resolve frequent conversion and playback issues quickly:",
    troubleshootTips: [
      {
        issue: "SRT File Fails to Load in Video Editor",
        cause: "The source file was simply renamed from .vtt to .srt without converting timestamp periods to commas or inserting cue numbers.",
        solution: "Use our online converter to properly convert the internal syntax into valid SubRip structure."
      },
      {
        issue: "First Subtitle Cue Missing or Skipped",
        cause: "The 'WEBVTT' header was not removed, causing the parser to ignore the first subtitle block.",
        solution: "Ensure the file starts directly with the number '1' on line 1, which our converter handles automatically."
      },
      {
        issue: "Accented Characters or Non-Latin Letters Corrupted (Mojibake)",
        cause: "The source subtitle file was encoded with an incompatible legacy character set.",
        solution: "Our tool exports all converted files in standard UTF-8 encoding, preserving accents, Cyrillic, Greek, Arabic, and Asian scripts."
      },
      {
        issue: "Raw Code Appearing in Subtitle Dialogue",
        cause: "The WebVTT file contained complex voice tags (<v Speaker>) or STYLE blocks that were not cleaned up.",
        solution: "Our converter strips non-dialogue metadata blocks to ensure only clean spoken captions remain."
      }
    ],
    textPreservationTitle: "Does Converting VTT to SRT Preserve Subtitle Text & Line Breaks?",
    textPreservationText: [
      "Yes. All visible dialogue lines, multi-line subtitle breaks, and punctuation are preserved intact.",
      "If a subtitle cue contains two lines of dialogue (such as conversation between two speakers), the exact line break structure is maintained in the resulting SRT file."
    ],
    formatChoiceTitle: "VTT vs. SRT: Which Subtitle Format Should You Use?",
    formatChoiceSubtitle: "Choose the optimal subtitle format for your project workflow:",
    useVttWhen: [
      "Publishing video on websites using native HTML5 <video> and <track> elements",
      "Using custom web video players (Video.js, Plyr, JW Player, HLS.js)",
      "Uploading course lecture videos to online learning platforms (Canvas, Moodle, Teachable)",
      "Projects requiring custom CSS styling (::cue) or precise screen positioning"
    ],
    useSrtWhen: [
      "Editing video in desktop NLE software (Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro)",
      "Playing video files locally on desktop media players (VLC, MPC-HC, MPV)",
      "Delivering subtitles to television broadcasters or traditional post-production houses",
      "Sharing captions with translators working in dedicated subtitle editing applications"
    ],
    conclusionTitle: "Convert WebVTT Subtitles to SRT in Seconds",
    conclusionText: [
      "Converting WebVTT (.vtt) files to SubRip (.srt) is the most reliable way to bring web-based captions into desktop video editing software, media players, and production workflows. Our free online converter handles all header stripping, timecode reformatting, and sequential numbering in a fraction of a second with total privacy.",
      "Explore our complete suite of subtitle conversion tools:",
      "• TXT to SRT Converter: Turn plain text transcripts into synchronized SubRip subtitles.",
      "• SRT to Text Converter: Extract clean plain text transcripts from SRT files without timestamps.",
      "• SRT to VTT Converter: Convert SubRip (.srt) subtitles to modern HTML5 WebVTT format."
    ]
  },
  es: {
    introTitle: "Guía Completa para Convertir Subtítulos WebVTT (VTT) a SubRip (SRT)",
    introSubtitle: "Aprende a transformar archivos WebVTT (.vtt) en formato universal SubRip (.srt) para programas de edición de video, reproductores de escritorio y flujos de trabajo profesionales.",
    introText: [
      "WebVTT (.vtt) es el estándar web moderno para subtítulos en HTML5, pero SubRip (.srt) sigue siendo el formato universal por excelencia para reproductores de escritorio (VLC) y editores profesionales de video (Premiere Pro, DaVinci Resolve, Final Cut).",
      "Si descargas subtítulos de plataformas como YouTube, Zoom o Coursera en formato .vtt y necesitas editarlos o reproducirlos localmente, convertirlos a .srt es fundamental.",
      "Nuestro convertidor gratuito en línea de VTT a SRT transforma tus subtítulos de forma instantánea en tu navegador con total privacidad."
    ],
    whatIsTitle: "¿Qué es un Convertidor de VTT a SRT?",
    whatIsText: [
      "Es una herramienta diseñada para reestructurar archivos WebVTT al formato SubRip (.srt).",
      "El convertidor elimina el encabezado 'WEBVTT', genera la numeración secuencial obligatoria (1, 2, 3...) y cambia los puntos de los milisegundos (00:00:01.000) por comas (00:00:01,000)."
    ],
    whyConvertTitle: "¿Por Qué Convertir VTT a SRT?",
    whyConvertSubtitle: "Ventajas clave de compatibilidad:",
    whyConvertReasons: [
      { title: "Compatibilidad con Editores de Video", description: "Adobe Premiere, DaVinci Resolve y Final Cut tienen soporte nativo optimizado para archivos .srt." },
      { title: "Reproductores de Escritorio y Smart TVs", description: "VLC, reproductores multimedia y televisores reconocen automáticamente subtítulos .srt." },
      { title: "Herramientas de Traducción", description: "Software especializado de subtitulado (Aegisub, Subtitle Edit) trabaja de forma óptima con SRT." }
    ],
    howToTitle: "Cómo Convertir VTT a SRT Online en 5 Pasos",
    howToSubtitle: "Proceso rápido y sencillo:",
    howToSteps: [
      { step: "1", title: "Sube tu Archivo VTT", description: "Arrastra el archivo .vtt o pega el texto en el editor." },
      { step: "2", title: "Conversión Automática", description: "El convertidor elimina el encabezado, numera los bloques y ajusta las comas." },
      { step: "3", title: "Revisa la Vista Previa", description: "Comprueba el formato SRT generado en tiempo real." },
      { step: "4", title: "Descarga el Archivo .SRT", description: "Guarda tu archivo .srt listo para usar." },
      { step: "5", title: "Importa a tu Editor o Reproductor", description: "Carga los subtítulos en Premiere, DaVinci o VLC." }
    ],
    differenceTitle: "¿Cuál es la Diferencia Entre VTT y SRT?",
    differenceSubtitle: "Comparativa técnica entre ambos formatos:",
    differenceTable: [
      { feature: "Uso Principal", vtt: "Navegadores web, video HTML5", srt: "Editores de video (Premiere, DaVinci) y VLC" },
      { feature: "Encabezado", vtt: "Obligatorio: 'WEBVTT' en línea 1", srt: "Ninguno (inicia con el número 1)" },
      { feature: "Separador de Tiempo", vtt: "Punto decimal (00:01:23.456)", srt: "Coma (00:01:23,456)" },
      { feature: "Numeración de Bloques", vtt: "Opcional", srt: "Estrictamente obligatoria (1, 2, 3...)" }
    ],
    syntaxBreakdownTitle: "Sintaxis de Tiempos: Punto vs. Comma",
    syntaxBreakdownText: [
      "WebVTT usa puntos para los milisegundos (00:00:01.500) mientras que SRT exige comas (00:00:01,500). Los programas de edición rechazan los subtítulos si no encuentran la coma reglamentaria."
    ],
    exampleTitle: "Ejemplo de Conversión VTT a SRT",
    exampleIntro: "Comparación antes y después:",
    exampleVttInput: `WEBVTT

00:00:01.000 --> 00:00:04.200
Bienvenido a nuestro tutorial de video.

00:00:04.300 --> 00:00:08.100
Hoy convertimos subtítulos WebVTT al formato SubRip SRT.`,
    exampleSrtOutput: `1
00:00:01,000 --> 00:00:04,200
Bienvenido a nuestro tutorial de video.

2
00:00:04,300 --> 00:00:08,100
Hoy convertimos subtítulos WebVTT al formato SubRip SRT.`,
    exampleExplanation: "Se elimina el encabezado WEBVTT, se numera cada bloque y los puntos temporales se transforman en comas.",
    renameTitle: "¿Se Puede Solo Cambiar la Extensión de .VTT a .SRT?",
    renameSubtitle: "Por qué no funciona simplemente cambiar el nombre:",
    renameReasons: [
      { problem: "Falta la Numeración Secuencial", explanation: "SRT requiere números enteros obligatorios arriba de cada tiempo." },
      { problem: "Los Puntos no se Convierten", explanation: "Cambiar el nombre mantiene los puntos, causando errores de sintaxis en los editores." }
    ],
    ffmpegTitle: "Convertir VTT a SRT con FFmpeg (Línea de Comandos)",
    ffmpegSubtitle: "Comando para terminal:",
    ffmpegCommand: "ffmpeg -i entrada.vtt salida.srt",
    ffmpegExplanation: [
      "FFmpeg convierte archivos de subtítulos desde la terminal.",
      "Para conversiones rápidas sin instalar programas, nuestro convertidor web ofrece el mismo resultado al instante."
    ],
    timingTitle: "¿La Conversión Modifica la Sincronización?",
    timingText: ["No. Los tiempos de inicio y fin se mantienen exactamente iguales."],
    stylingTitle: "¿Qué Ocurre con los Estilos y Posiciones de WebVTT?",
    stylingSubtitle: "Adaptación de funciones avanzadas a la estructura simple de SRT:",
    stylingText: [
      "WebVTT incluye funciones web avanzadas que no existen en el formato SRT estándar. Durante la conversión, el diálogo y el tiempo se preservan, mientras que la información específica de la web se simplifica:"
    ],
    stylingList: [
      { feature: "Posicionamiento en Pantalla", behavior: "Se elimina ya que SRT siempre muestra los subtítulos centrados abajo." },
      { feature: "Bloques STYLE y NOTE", behavior: "Se descartan para evitar que aparezca código no deseado en pantalla." },
      { feature: "Negrita y Cursiva (<b>, <i>)", behavior: "Se mantienen intactos en ambos formatos." }
    ],
    headerTitle: "¿Qué Pasa con el Encabezado WEBVTT?",
    headerText: ["El encabezado 'WEBVTT' se elimina obligatoriamente, ya que los archivos SRT deben comenzar directamente con el número 1."],
    softwareTitle: "Uso de SRT en Editores de Video y Reproductores",
    softwareSubtitle: "Integración perfecta en tus programas favoritos:",
    softwareWorkflows: [
      { title: "Adobe Premiere Pro y DaVinci Resolve", description: "Importa tu archivo .srt directamente en la pista de subtítulos con control total." },
      { title: "VLC Media Player", description: "Coloca el archivo .srt junto a tu video con el mismo nombre para reproducción automática." }
    ],
    troubleshootTitle: "Problemas Comunes y Soluciones",
    troubleshootSubtitle: "Resolución de errores frecuentes:",
    troubleshootTips: [
      { issue: "El editor no reconoce el archivo", cause: "Se cambió la extensión manualmente sin convertir la sintaxis interna.", solution: "Utiliza nuestro convertidor web para generar una estructura SRT válida." }
    ],
    textPreservationTitle: "¿Se Conserva el Texto del Diálogo?",
    textPreservationText: ["Sí. Todas las líneas de diálogo y saltos de línea se transfieren intactos."],
    formatChoiceTitle: "¿Cuándo Usar VTT y Cuándo SRT?",
    formatChoiceSubtitle: "Guía de decisión:",
    useVttWhen: ["Videos en sitios web y reproductores HTML5", "Plataformas de cursos online (LMS)", "Proyectos con estilos CSS personalizados"],
    useSrtWhen: ["Edición de video en Premiere, DaVinci o Final Cut", "Reproducción local en VLC o Smart TVs", "Trabajos de traducción y subtitulado tradicional"],
    conclusionTitle: "Convierte tus Subtítulos WebVTT a SRT al Instante",
    conclusionText: [
      "Transforma archivos WebVTT en SubRip en segundos con total privacidad.",
      "Descubre nuestras otras herramientas:",
      "• Convertidor de TXT a SRT: Crea subtítulos desde texto plano.",
      "• Convertidor de SRT a Texto: Extrae transcripciones limpias.",
      "• Convertidor de SRT a VTT: Adapta subtítulos para la web."
    ]
  },
  pt: {
    introTitle: "Guia Completo para Converter Legendas WebVTT (VTT) em SubRip (SRT)",
    introSubtitle: "Aprenda a transformar arquivos WebVTT (.vtt) no formato universal SubRip (.srt) para edição de vídeo, reprodutores de desktop e fluxos profissionais.",
    introText: [
      "O WebVTT (.vtt) é o formato padrão para vídeos na web, enquanto o SubRip (.srt) é o formato universal aceito por editores de vídeo como Premiere Pro, DaVinci Resolve e players como VLC.",
      "Nosso conversor online gratuito de VTT para SRT realiza a conversão em segundos no seu navegador com total privacidade."
    ],
    whatIsTitle: "O Que é um Conversor de VTT para SRT?",
    whatIsText: [
      "É uma ferramenta que adapta a estrutura WebVTT para o padrão SubRip, removendo o cabeçalho 'WEBVTT', gerando números sequenciais (1, 2, 3...) e substituindo os pontos decimais por vírgulas."
    ],
    whyConvertTitle: "Por Que Converter VTT para SRT?",
    whyConvertSubtitle: "Principais motivos de compatibilidade:",
    whyConvertReasons: [
      { title: "Editores de Vídeo Profissionais", description: "Premiere Pro, DaVinci Resolve e Final Cut Pro têm suporte nativo aprimorado para .srt." },
      { title: "Reprodutores Locais e Smart TVs", description: "VLC e reprodutores de TV reconhecem arquivos .srt automaticamente." }
    ],
    howToTitle: "Como Converter VTT para SRT em 5 Passos",
    howToSubtitle: "Passo a passo rápido:",
    howToSteps: [
      { step: "1", title: "Envie o Arquivo VTT", description: "Arraste o arquivo .vtt ou cole o texto no conversor." },
      { step: "2", title: "Conversão Instantânea", description: "A ferramenta processa o arquivo e formata a pontuação." },
      { step: "3", title: "Verifique a Prévia", description: "Visualize o resultado SRT em tempo real." },
      { step: "4", title: "Baixe o Arquivo .SRT", description: "Salve o arquivo pronto no seu computador." },
      { step: "5", title: "Importe no seu Editor", description: "Adicione as legendas no Premiere, DaVinci ou VLC." }
    ],
    differenceTitle: "Qual a Diferença Entre VTT e SRT?",
    differenceSubtitle: "Comparativo técnico:",
    differenceTable: [
      { feature: "Ambiente Principal", vtt: "Web e reprodutores HTML5", srt: "Editores de vídeo e VLC" },
      { feature: "Cabeçalho", vtt: "Obrigatório: 'WEBVTT'", srt: "Nenhum" },
      { feature: "Separador de Tempo", vtt: "Ponto decimal (00:01:23.456)", srt: "Vírgula (00:01:23,456)" },
      { feature: "Numeração de Linhas", vtt: "Opcional", srt: "Obrigatória (1, 2, 3...)" }
    ],
    syntaxBreakdownTitle: "Sintaxe de Tempo: Ponto vs. Vírgula",
    syntaxBreakdownText: ["O WebVTT usa ponto nos milissegundos e o SRT usa vírgula."],
    exampleTitle: "Exemplo de Conversão VTT para SRT",
    exampleIntro: "Veja a transformação na prática:",
    exampleVttInput: `WEBVTT

00:00:01.000 --> 00:00:04.200
Bem-vindo ao nosso tutorial em vídeo.

00:00:04.300 --> 00:00:08.100
Hoje convertemos legendas WebVTT para SubRip SRT.`,
    exampleSrtOutput: `1
00:00:01,000 --> 00:00:04,200
Bem-vindo ao nosso tutorial em vídeo.

2
00:00:04,300 --> 00:00:08,100
Hoje convertemos legendas WebVTT para SubRip SRT.`,
    exampleExplanation: "O cabeçalho WEBVTT é removido, a numeração é gerada e os pontos tornam-se vírgulas.",
    renameTitle: "Basta Apenas Renomear .VTT para .SRT?",
    renameSubtitle: "Por que renomear não funciona:",
    renameReasons: [
      { problem: "Falta de Numeração Sequencial", explanation: "O SRT exige números no topo de cada bloco." },
      { problem: "Pontos Não Convertidos", explanation: "Renomear mantém os pontos, gerando erros nos editores." }
    ],
    ffmpegTitle: "Converter VTT para SRT com FFmpeg",
    ffmpegSubtitle: "Comando de terminal:",
    ffmpegCommand: "ffmpeg -i entrada.vtt saida.srt",
    ffmpegExplanation: [
      "O FFmpeg converte arquivos pela linha de comando.",
      "Para converter rapidamente sem instalar nada, use nosso conversor online."
    ],
    timingTitle: "A Sincronização é Mantida?",
    timingText: ["Sim, os tempos de início e fim permanecem exatamente iguais."],
    stylingTitle: "O Que Acontece com os Estilos do WebVTT?",
    stylingSubtitle: "Simplificação de estilos avançados:",
    stylingText: ["O texto e a sincronia são mantidos, enquanto estilos específicos da web são limpos para compatibilidade."],
    stylingList: [
      { feature: "Posicionamento na Tela", behavior: "Removido para exibição centralizada padrão do SRT." },
      { feature: "Tags de Itálico e Negrito", behavior: "Preservadas normalmente." }
    ],
    headerTitle: "Remoção do Cabeçalho WEBVTT",
    headerText: ["O cabeçalho 'WEBVTT' é removido para que o arquivo comece diretamente com o número 1."],
    softwareTitle: "Uso em Editores de Vídeo",
    softwareSubtitle: "Integração simples:",
    softwareWorkflows: [
      { title: "Premiere Pro e DaVinci Resolve", description: "Importe o arquivo .srt na trilha de legendas sem complicações." }
    ],
    troubleshootTitle: "Resolução de Problemas",
    troubleshootSubtitle: "Dicas úteis:",
    troubleshootTips: [
      { issue: "Arquivo não abre no editor", cause: "Extensão renomeada manualmente sem conversão da sintaxe.", solution: "Converta o arquivo usando nossa ferramenta online." }
    ],
    textPreservationTitle: "O Texto é Preservado?",
    textPreservationText: ["Sim, todo o diálogo e quebras de linha são mantidos."],
    formatChoiceTitle: "Quando Usar Cada Formato?",
    formatChoiceSubtitle: "Guia de escolha:",
    useVttWhen: ["Vídeos em sites e players HTML5", "Plataformas de cursos online"],
    useSrtWhen: ["Edição no Premiere, DaVinci ou Final Cut", "Reprodução no VLC ou Smart TVs"],
    conclusionTitle: "Converta Seus Arquivos WebVTT em SRT Agora",
    conclusionText: [
      "Converta legendas WebVTT em SRT em segundos com total privacidade.",
      "Conheça nossas outras ferramentas:",
      "• Conversor de TXT para SRT: Crie legendas a partir de textos.",
      "• Conversor de SRT para Texto: Extraia transcrições limpas.",
      "• Conversor de SRT para VTT: Adapte legendas para a web."
    ]
  },
  fr: {
    introTitle: "Guide Complet pour Convertir des Sous-Titres WebVTT (VTT) en SubRip (SRT)",
    introSubtitle: "Apprenez à transformer des fichiers WebVTT (.vtt) au format universel SubRip (.srt) pour les logiciels de montage, lecteurs multimédias et flux professionnels.",
    introText: [
      "WebVTT (.vtt) est le format officiel pour la vidéo sur le web, mais SubRip (.srt) reste la norme universelle pour les logiciels de montage (Premiere Pro, DaVinci Resolve) et les lecteurs comme VLC.",
      "Notre convertisseur en ligne gratuit transforme vos fichiers WebVTT en SubRip instantanément dans votre navigateur avec une totale confidentialité."
    ],
    whatIsTitle: "Qu'est-ce qu'un Convertisseur VTT en SRT ?",
    whatIsText: [
      "C'est un outil qui reformate les fichiers WebVTT au standard SubRip en supprimant l'en-tête 'WEBVTT', en ajoutant la numérotation séquentielle et en remplaçant les points par des virgules."
    ],
    whyConvertTitle: "Pourquoi Convertir VTT en SRT ?",
    whyConvertSubtitle: "Avantages de compatibilité :",
    whyConvertReasons: [
      { title: "Logiciels de Montage Vidéo", description: "Adobe Premiere Pro, DaVinci Resolve et Final Cut Pro gèrent parfaitement les fichiers .srt." },
      { title: "Lecteurs Multimédias et Téléviseurs", description: "VLC et les téléviseurs connectés reconnaissent automatiquement les sous-titres .srt." }
    ],
    howToTitle: "Comment Convertir VTT en SRT en 5 Étapes",
    howToSubtitle: "Guide simple et rapide :",
    howToSteps: [
      { step: "1", title: "Importez le Fichier VTT", description: "Déposez votre fichier .vtt ou collez le texte." },
      { step: "2", title: "Conversion Automatique", description: "L'outil supprime l'en-tête et renumérote les sous-titres." },
      { step: "3", title: "Vérifiez l'Aperçu", description: "Contrôlez le rendu SubRip en temps réel." },
      { step: "4", title: "Téléchargez le Fichier .SRT", description: "Enregistrez votre fichier prêt pour le montage." },
      { step: "5", title: "Importez dans Votre Logiciel", description: "Ajoutez le fichier .srt dans Premiere, DaVinci ou VLC." }
    ],
    differenceTitle: "Différences Entre VTT et SRT",
    differenceSubtitle: "Comparatif technique :",
    differenceTable: [
      { feature: "Usage Principal", vtt: "Web et lecteurs HTML5", srt: "Montage vidéo et VLC" },
      { feature: "En-tête", vtt: "Obligatoire : 'WEBVTT'", srt: "Aucun" },
      { feature: "Séparateur de Temps", vtt: "Point (00:01:23.456)", srt: "Virgule (00:01:23,456)" },
      { feature: "Numérotation", vtt: "Optionnelle", srt: "Obligatoire (1, 2, 3...)" }
    ],
    syntaxBreakdownTitle: "Syntaxe Temporelle : Point vs. Virgule",
    syntaxBreakdownText: ["WebVTT utilise un point pour les millisecondes et SRT impose une virgule."],
    exampleTitle: "Exemple de Conversion VTT en SRT",
    exampleIntro: "Aperçu concret :",
    exampleVttInput: `WEBVTT

00:00:01.000 --> 00:00:04.200
Bienvenue dans notre tutoriel vidéo.

00:00:04.300 --> 00:00:08.100
Aujourd'hui nous convertissons des sous-titres WebVTT en SubRip SRT.`,
    exampleSrtOutput: `1
00:00:01,000 --> 00:00:04,200
Bienvenue dans notre tutoriel vidéo.

2
00:00:04,300 --> 00:00:08,100
Aujourd'hui nous convertissons des sous-titres WebVTT en SubRip SRT.`,
    exampleExplanation: "L'en-tête WEBVTT est retiré, les numéros de répliques sont insérés et les points deviennent des virgules.",
    renameTitle: "Peut-on Juste Renommer .VTT en .SRT ?",
    renameSubtitle: "Pourquoi le renommage simple échoue :",
    renameReasons: [
      { problem: "Absence de Numérotation", explanation: "Le format SRT exige un numéro au-dessus de chaque bloc." },
      { problem: "Points Non Convertis", explanation: "Les points temporels subsistent et bloquent la lecture dans les logiciels." }
    ],
    ffmpegTitle: "Convertir VTT en SRT avec FFmpeg",
    ffmpegSubtitle: "Commande terminal :",
    ffmpegCommand: "ffmpeg -i entree.vtt sortie.srt",
    ffmpegExplanation: [
      "FFmpeg permet la conversion de sous-titres en ligne de commande.",
      "Pour une conversion instantanée sans installation, utilisez notre outil web gratuit."
    ],
    timingTitle: "La Synchronisation Est-elle Préservée ?",
    timingText: ["Oui, les repères temporels de début et de fin restent strictement identiques."],
    stylingTitle: "Qu'Advient-il du Formatage WebVTT ?",
    stylingSubtitle: "Gestion des styles :",
    stylingText: ["Le texte et les minutages sont préservés, tandis que les styles web avancés sont épurés pour garantir la compatibilité."],
    stylingList: [
      { feature: "Positionnement", behavior: "Supprimé pour un affichage centré en bas conforme au SRT." },
      { feature: "Gras et Italique", behavior: "Conservés dans les deux formats." }
    ],
    headerTitle: "Suppression de l'En-tête WEBVTT",
    headerText: ["L'en-tête 'WEBVTT' est obligatoirement retiré pour que le fichier commence par le chiffre 1."],
    softwareTitle: "Utilisation dans les Logiciels de Montage",
    softwareSubtitle: "Intégration fluide :",
    softwareWorkflows: [
      { title: "Premiere Pro et DaVinci Resolve", description: "Glissez votre fichier .srt directement sur votre timeline." }
    ],
    troubleshootTitle: "Résolution des Problèmes",
    troubleshootSubtitle: "Conseils pratiques :",
    troubleshootTips: [
      { issue: "Fichier non reconnu par le logiciel", cause: "Simple renommage sans conversion syntaxique.", solution: "Convertissez le fichier via notre outil en ligne." }
    ],
    textPreservationTitle: "Le Texte Est-il Préservé ?",
    textPreservationText: ["Oui, l'intégralité du dialogue et des sauts de ligne est conservée."],
    formatChoiceTitle: "Quand Utiliser Chaque Format ?",
    formatChoiceSubtitle: "Guide de choix :",
    useVttWhen: ["Intégration vidéo web HTML5", "Plateformes de formation en ligne"],
    useSrtWhen: ["Montage dans Premiere, DaVinci ou Final Cut", "Lecture avec VLC ou sur Smart TV"],
    conclusionTitle: "Convertissez Vos Fichiers WebVTT en SRT Dès Maintenant",
    conclusionText: [
      "Passez de WebVTT à SubRip en quelques secondes en toute confidentialité.",
      "Découvrez nos autres outils :",
      "• Convertisseur TXT en SRT : Créez des sous-titres depuis du texte.",
      "• Convertisseur SRT en Texte : Extrayez des transcriptions propres.",
      "• Convertisseur SRT en VTT : Adaptez vos sous-titres pour le web."
    ]
  },
  de: {
    introTitle: "Vollständiger Leitfaden: WebVTT (VTT) in SubRip (SRT) umwandeln",
    introSubtitle: "Erfahren Sie, wie Sie WebVTT-Dateien (.vtt) in das universelle SubRip-Format (.srt) für Videoschnittprogramme, Desktop-Player und Offline-Workflows konvertieren.",
    introText: [
      "WebVTT ist der moderne Standard für Web-Videos, während SubRip (.srt) das universelle Format für Schnittprogramme wie Premiere Pro und Player wie VLC ist.",
      "Unser kostenloser Online-Konverter wandelt WebVTT-Dateien direkt im Browser in standardkonformes SRT um – schnell, präzise und 100% datenschutzsicher."
    ],
    whatIsTitle: "Was ist ein VTT-in-SRT-Konverter?",
    whatIsText: [
      "Ein Tool, das WebVTT-Untertitel für SubRip anpasst: Es entfernt den 'WEBVTT'-Header, nummeriert jeden Block fortlaufend und ersetzt Zeitstempel-Punkte durch Kommas."
    ],
    whyConvertTitle: "Warum VTT in SRT umwandeln?",
    whyConvertSubtitle: "Die wichtigsten Kompatibilitätsvorteile:",
    whyConvertReasons: [
      { title: "Kompatibilität mit Schnittsoftware", description: "Premiere Pro, DaVinci Resolve und Final Cut Pro unterstützen .srt nativ und zuverlässig." },
      { title: "Desktop-Player und Smart TVs", description: "VLC und TV-Geräte erkennen .srt-Dateien automatisch." }
    ],
    howToTitle: "In 5 Schritten VTT in SRT online konvertieren",
    howToSubtitle: "So einfach funktioniert die Umwandlung:",
    howToSteps: [
      { step: "1", title: "VTT-Datei hochladen", description: "Laden Sie Ihre .vtt-Datei hoch oder fügen Sie den Text ein." },
      { step: "2", title: "Automatische Umwandlung", description: "Header wird entfernt, Nummern und Kommas werden eingefügt." },
      { step: "3", title: "Vorschau prüfen", description: "Kontrollieren Sie das fertige SRT-Ergebnis." },
      { step: "4", title: "SRT-Datei herunterladen", description: "Speichern Sie die fertige Untertiteldatei." },
      { step: "5", title: "In Schnittprogramm importieren", description: "Fügen Sie die .srt-Datei in Premiere oder VLC ein." }
    ],
    differenceTitle: "VTT vs. SRT: Die Unterschiede",
    differenceSubtitle: "Technischer Vergleich:",
    differenceTable: [
      { feature: "Haupteinsatz", vtt: "Web und HTML5-Player", srt: "Schnittprogramme und VLC" },
      { feature: "Header", vtt: "Zwingend: 'WEBVTT'", srt: "Keiner" },
      { feature: "Zeitstempel-Trennzeichen", vtt: "Punkt (00:01:23.456)", srt: "Komma (00:01:23,456)" },
      { feature: "Blocknummerierung", vtt: "Optional", srt: "Zwingend erforderlich (1, 2, 3...)" }
    ],
    syntaxBreakdownTitle: "Zeitstempel-Syntax: Punkt vs. Komma",
    syntaxBreakdownText: ["WebVTT nutzt Punkte für Millisekunden, während SRT Kommas verlangt."],
    exampleTitle: "Beispiel: VTT zu SRT",
    exampleIntro: "Vorher-Nachher-Vergleich:",
    exampleVttInput: `WEBVTT

00:00:01.000 --> 00:00:04.200
Willkommen zu unserem Video-Tutorial.

00:00:04.300 --> 00:00:08.100
Heute konvertieren wir WebVTT-Untertitel in das SubRip SRT-Format.`,
    exampleSrtOutput: `1
00:00:01,000 --> 00:00:04,200
Willkommen zu unserem Video-Tutorial.

2
00:00:04,300 --> 00:00:08,100
Heute konvertieren wir WebVTT-Untertitel in das SubRip SRT-Format.`,
    exampleExplanation: "Header wird entfernt, Blocknummern werden ergänzt und Punkte werden zu Kommas.",
    renameTitle: "Kann man .VTT einfach in .SRT umbenennen?",
    renameSubtitle: "Warum das reine Umbenennen fehlschlägt:",
    renameReasons: [
      { problem: "Fehlende Zeilennummern", explanation: "SRT verlangt zwingend fortlaufende Nummern über jedem Zeitstempel." },
      { problem: "Punkte bleiben erhalten", explanation: "Umbenennen ändert keine Punkte im Text, was zu Lesefehlern führt." }
    ],
    ffmpegTitle: "VTT in SRT mit FFmpeg umwandeln",
    ffmpegSubtitle: "Terminal-Befehl:",
    ffmpegCommand: "ffmpeg -i eingabe.vtt ausgabe.srt",
    ffmpegExplanation: [
      "FFmpeg konvertiert Untertiteldateien per Befehlszeile.",
      "Für schnelle Konvertierungen ohne Installation nutzen Sie unser Online-Tool."
    ],
    timingTitle: "Bleibt das Timing erhalten?",
    timingText: ["Ja, alle Start- und Endzeitpunkte bleiben exakt unverändert."],
    stylingTitle: "Was passiert mit WebVTT-Styling?",
    stylingSubtitle: "Umgang mit Formatierungen:",
    stylingText: ["Text und Timing bleiben erhalten, während webeigene CSS-Styles bereinigt werden."],
    stylingList: [
      { feature: "Positionierung", behavior: "Wird für standardmäßige zentrierte SRT-Darstellung bereinigt." },
      { feature: "Fett und Kursiv", behavior: "Bleiben in beiden Formaten erhalten." }
    ],
    headerTitle: "Entfernung des WEBVTT-Headers",
    headerText: ["Der Header wird gelöscht, da SRT-Dateien direkt mit Zeile 1 beginnen müssen."],
    softwareTitle: "Verwendung in Videoschnittprogrammen",
    softwareSubtitle: "Einfache Integration:",
    softwareWorkflows: [
      { title: "Premiere Pro & DaVinci Resolve", description: "Ziehen Sie die .srt-Datei einfach auf Ihre Timeline." }
    ],
    troubleshootTitle: "Fehlerbehebung",
    troubleshootSubtitle: "Nützliche Tipps:",
    troubleshootTips: [
      { issue: "Datei wird im Schnittprogramm nicht erkannt", cause: "Manuelles Umbenennen ohne Syntaxanpassung.", solution: "Nutzen Sie unseren Konverter für eine saubere SRT-Struktur." }
    ],
    textPreservationTitle: "Bleibt der Text erhalten?",
    textPreservationText: ["Ja, der gesamte Dialogtext wird vollständig übernommen."],
    formatChoiceTitle: "Wann welches Format nutzen?",
    formatChoiceSubtitle: "Entscheidungshilfe:",
    useVttWhen: ["Websites und HTML5-Videoplayer", "Online-Kurse und LMS"],
    useSrtWhen: ["Schnitt in Premiere, DaVinci oder Final Cut", "Wiedergabe im VLC Player"],
    conclusionTitle: "Jetzt WebVTT in SRT umwandeln",
    conclusionText: [
      "Erstellen Sie kompatible SRT-Dateien in Sekunden mit maximalem Datenschutz.",
      "Weitere nützliche Tools:",
      "• TXT-in-SRT-Konverter: Erstellen Sie Untertitel aus Fließtext.",
      "• SRT-in-Text-Konverter: Extrahieren Sie saubere Transkripte.",
      "• SRT-in-VTT-Konverter: Passen Sie Untertitel für das Web an."
    ]
  },
  id: {
    introTitle: "Panduan Lengkap Mengubah Subtitle WebVTT (VTT) ke SubRip (SRT)",
    introSubtitle: "Pelajari cara mengubah file WebVTT (.vtt) menjadi format universal SubRip (.srt) untuk software video editor, pemutar media desktop, dan kebutuhan offline.",
    introText: [
      "WebVTT (.vtt) adalah standar untuk pemutar video web, sedangkan SubRip (.srt) adalah format universal untuk software editing video seperti Premiere Pro, DaVinci Resolve, dan pemutar VLC.",
      "Konverter online gratis kami mengubah file WebVTT menjadi SRT secara instan langsung di browser Anda dengan privasi 100%."
    ],
    whatIsTitle: "Apa Itu Konverter VTT ke SRT?",
    whatIsText: [
      "Alat yang menyesuaikan struktur WebVTT ke SubRip dengan menghapus header 'WEBVTT', menambahkan nomor urut (1, 2, 3...), dan mengubah titik pada stempel waktu menjadi koma."
    ],
    whyConvertTitle: "Mengapa Mengubah VTT ke SRT?",
    whyConvertSubtitle: "Keuntungan kompatibilitas utama:",
    whyConvertReasons: [
      { title: "Kompatibel dengan Editor Video", description: "Premiere Pro, DaVinci Resolve, dan Final Cut Pro mendukung format .srt dengan sempurna." },
      { title: "Pemutar Desktop & Smart TV", description: "VLC dan perangkat TV membaca subtitle .srt secara otomatis." }
    ],
    howToTitle: "Cara Mengubah VTT ke SRT dalam 5 Langkah",
    howToSubtitle: "Panduan konversi cepat:",
    howToSteps: [
      { step: "1", title: "Unggah File VTT", description: "Tarik file .vtt Anda atau tempel teksnya." },
      { step: "2", title: "Konversi Otomatis", description: "Alat menghapus header dan memberi nomor urut otomatis." },
      { step: "3", title: "Periksa Pratinjau", description: "Lihat hasil SRT langsung di layar." },
      { step: "4", title: "Unduh File .SRT", description: "Simpan file subtitle yang siap dipakai." },
      { step: "5", title: "Gunakan pada Video Editor", description: "Impor file .srt ke Premiere, DaVinci, atau VLC." }
    ],
    differenceTitle: "Perbedaan Antara VTT dan SRT",
    differenceSubtitle: "Perbandingan teknis format:",
    differenceTable: [
      { feature: "Penggunaan Utama", vtt: "Web dan video HTML5", srt: "Software edit video dan VLC" },
      { feature: "Header File", vtt: "Wajib: 'WEBVTT'", srt: "Tidak ada" },
      { feature: "Pemisah Milidetik", vtt: "Titik desimal (00:01:23.456)", srt: "Koma (00:01:23,456)" },
      { feature: "Nomor Urut", vtt: "Opsional", srt: "Wajib (1, 2, 3...)" }
    ],
    syntaxBreakdownTitle: "Sintaks Waktu: Titik vs. Koma",
    syntaxBreakdownText: ["WebVTT memakai titik desimal, sedangkan SRT mewajibkan koma."],
    exampleTitle: "Contoh Konversi VTT ke SRT",
    exampleIntro: "Perbandingan sebelum dan sesudah:",
    exampleVttInput: `WEBVTT

00:00:01.000 --> 00:00:04.200
Selamat datang di video tutorial kami.

00:00:04.300 --> 00:00:08.100
Hari ini kita mengubah subtitle WebVTT ke format SubRip SRT.`,
    exampleSrtOutput: `1
00:00:01,000 --> 00:00:04,200
Selamat datang di video tutorial kami.

2
00:00:04,300 --> 00:00:08,100
Hari ini kita mengubah subtitle WebVTT ke format SubRip SRT.`,
    exampleExplanation: "Header WEBVTT dihapus, nomor urut ditambahkan, dan titik diubah menjadi koma.",
    renameTitle: "Bisakah Hanya Mengganti Ekstensi .VTT Menjadi .SRT?",
    renameSubtitle: "Mengapa sekadar mengganti nama file tidak akan berhasil:",
    renameReasons: [
      { problem: "Nomor Urut Hilang", explanation: "Format SRT mewajibkan nomor indeks di setiap blok." },
      { problem: "Titik Waktu Tidak Berubah", explanation: "Mengganti nama file mempertahankan titik yang ditolak oleh software SRT." }
    ],
    ffmpegTitle: "Mengubah VTT ke SRT Menggunakan FFmpeg",
    ffmpegSubtitle: "Perintah baris terminal:",
    ffmpegCommand: "ffmpeg -i input.vtt output.srt",
    ffmpegExplanation: [
      "FFmpeg memproses konversi subtitle melalui baris perintah.",
      "Untuk kemudahan tanpa instalasi, gunakan konverter online gratis kami."
    ],
    timingTitle: "Apakah Waktu Subtitle Berubah?",
    timingText: ["Tidak. Waktu mulai dan selesai subtitle tetap sama persis."],
    stylingTitle: "Bagaimana dengan Format Gaya WebVTT?",
    stylingSubtitle: "Penyederhanaan format:",
    stylingText: ["Teks dan waktu dipertahankan, sedangkan kode CSS web dibersihkan untuk kompatibilitas."],
    stylingList: [
      { feature: "Posisi Layar", behavior: "Dihapus agar tampil di posisi bawah standar SRT." },
      { feature: "Tebal dan Miring", behavior: "Dipertahankan di kedua format." }
    ],
    headerTitle: "Penghapusan Header WEBVTT",
    headerText: ["Header 'WEBVTT' dihapus agar file diawali dengan nomor 1."],
    softwareTitle: "Penggunaan pada Software Video Editor",
    softwareSubtitle: "Integrasi mudah:",
    softwareWorkflows: [
      { title: "Premiere Pro & DaVinci Resolve", description: "Tarik file .srt langsung ke timeline editor video Anda." }
    ],
    troubleshootTitle: "Mengatasi Masalah Umum",
    troubleshootSubtitle: "Solusi cepat:",
    troubleshootTips: [
      { issue: "File tidak terbaca di editor", cause: "Ganti nama ekstensi manual tanpa konversi sintaks.", solution: "Gunakan konverter online kami untuk menghasilkan file SRT yang valid." }
    ],
    textPreservationTitle: "Apakah Teks Dialog Tetap Utuh?",
    textPreservationText: ["Ya. Seluruh kalimat percakapan dan baris baru dipertahankan sepenuhnya."],
    formatChoiceTitle: "Kapan Menggunakan Masing-masing Format?",
    formatChoiceSubtitle: "Panduan pemilihan format:",
    useVttWhen: ["Video di website dan pemutar HTML5", "Platform kursus online"],
    useSrtWhen: ["Edit video di Premiere, DaVinci, Final Cut", "Nonton video di VLC atau Smart TV"],
    conclusionTitle: "Ubah Subtitle WebVTT Anda ke SRT Sekarang",
    conclusionText: [
      "Konversi subtitle WebVTT ke SRT dalam hitungan detik dengan privasi terjaga.",
      "Coba alat kami lainnya:",
      "• Konverter TXT ke SRT: Buat subtitle dari teks biasa.",
      "• Konverter SRT ke Teks: Ekstrak transkrip bersih tanpa waktu.",
      "• Konverter SRT ke VTT: Sesuaikan subtitle untuk web."
    ]
  },
  tr: {
    introTitle: "WebVTT (VTT) Altyazılarını SubRip (SRT) Formatına Dönüştürme Kılavuzu",
    introSubtitle: "WebVTT (.vtt) dosyalarını video düzenleyiciler, masaüstü medya oynatıcıları ve çevrimdışı iş akışları için standart SubRip (.srt) formatına dönüştürün.",
    introText: [
      "WebVTT (.vtt) web videoları için tercih edilen formatken, SubRip (.srt) masaüstü kurgu programları (Premiere Pro, DaVinci Resolve) ve VLC gibi oynatıcılar için evrensel standarttır.",
      "Ücretsiz çevrimiçi dönüştürücümüz, VTT dosyalarınızı doğrudan tarayıcınızda %100 gizlilikle SRT formatına dönüştürür."
    ],
    whatIsTitle: "VTT - SRT Dönüştürücü Nedir?",
    whatIsText: [
      "WebVTT altyazı yapısını SubRip formatına uyarlayan, 'WEBVTT' başlığını temizleyen, sıralı numaralar ekleyen ve noktalı zaman damgalarını virgüle çeviren bir araçtır."
    ],
    whyConvertTitle: "Neden VTT Dosyasını SRT'ye Dönüştürmelisiniz?",
    whyConvertSubtitle: "Temel uyumluluk avantajları:",
    whyConvertReasons: [
      { title: "Video Kurgu Programları", description: "Adobe Premiere Pro, DaVinci Resolve ve Final Cut Pro .srt dosyalarını yerel olarak destekler." },
      { title: "Masaüstü Oynatıcılar ve Smart TV'ler", description: "VLC ve akıllı televizyonlar .srt altyazılarını otomatik tanır." }
    ],
    howToTitle: "5 Adımda VTT'yi SRT'ye Dönüştürme",
    howToSubtitle: "Hızlı dönüştürme adımları:",
    howToSteps: [
      { step: "1", title: "VTT Dosyasını Yükleyin", description: ".vtt dosyanızı sürükleyin veya metni yapıştırın." },
      { step: "2", title: "Otomatik Dönüştürme", description: "Araç başlığı siler, numaralandırma ve virgülleri ayarlar." },
      { step: "3", title: "Önizlemeyi Kontrol Edin", description: "Oluşan SRT kodunu canlı olarak inceleyin." },
      { step: "4", title: "SRT Dosyasını İndirin", description: "Kullanıma hazır altyazı dosyasını kaydedin." },
      { step: "5", title: "Kurgu Programına Ekleyin", description: "Premiere, DaVinci veya VLC ile açın." }
    ],
    differenceTitle: "VTT ve SRT Arasındaki Farklar",
    differenceSubtitle: "Teknik karşılaştırma:",
    differenceTable: [
      { feature: "Kullanım Alanı", vtt: "Web ve HTML5 video", srt: "Video kurgu ve VLC oynatıcı" },
      { feature: "Dosya Başlığı", vtt: "Zorunlu: 'WEBVTT'", srt: "Yok" },
      { feature: "Zaman Ayracı", vtt: "Nokta (00:01:23.456)", srt: "Virgül (00:01:23,456)" },
      { feature: "Numaralandırma", vtt: "İsteğe bağlı", srt: "Zorunlu (1, 2, 3...)" }
    ],
    syntaxBreakdownTitle: "Zaman Damgası Ayracı: Nokta vs. Virgül",
    syntaxBreakdownText: ["WebVTT milisaniyeden önce nokta kullanırken SRT virgül gerektirir."],
    exampleTitle: "VTT - SRT Dönüşüm Örneği",
    exampleIntro: "Dönüşüm öncesi ve sonrası:",
    exampleVttInput: `WEBVTT

00:00:01.000 --> 00:00:04.200
Video eğitimimize hoş geldiniz.

00:00:04.300 --> 00:00:08.100
Bugün WebVTT altyazılarını SubRip SRT formatına dönüştürüyoruz.`,
    exampleSrtOutput: `1
00:00:01,000 --> 00:00:04,200
Video eğitimimize hoş geldiniz.

2
00:00:04,300 --> 00:00:08,100
Bugün WebVTT altyazılarını SubRip SRT formatına dönüştürüyoruz.`,
    exampleExplanation: "WEBVTT başlığı kaldırıldı, sıra numaraları eklendi ve noktalar virgüle çevrildi.",
    renameTitle: "Sadece Dosya Uzantısını .SRT Yapmak Yeterli mi?",
    renameSubtitle: "Yalnızca yeniden adlandırmanın neden çalışmayacağı:",
    renameReasons: [
      { problem: "Sıra Numaraları Eksik Kalır", explanation: "SRT her blok üstünde sıra numarası gerektirir." },
      { problem: "Noktalar Değişmez", explanation: "Yeniden adlandırma noktalı zaman damgalarını virgüle çevirmez." }
    ],
    ffmpegTitle: "FFmpeg ile VTT'yi SRT'ye Dönüştürme",
    ffmpegSubtitle: "Komut satırı kullanımı:",
    ffmpegCommand: "ffmpeg -i girdi.vtt cikti.srt",
    ffmpegExplanation: [
      "FFmpeg terminal üzerinden altyazıları kolayca dönüştürür.",
      "Program yüklemeden hızlı dönüştürme için çevrimiçi dönüştürücümüzü kullanabilirsiniz."
    ],
    timingTitle: "Zamanlama Değişir mi?",
    timingText: ["Hayır. Başlangıç ve bitiş zamanları birebir korunur."],
    stylingTitle: "WebVTT Biçimlendirmelerine Ne Olur?",
    stylingSubtitle: "Biçimlendirme uyarlaması:",
    stylingText: ["Konuşma metni ve zamanlama korunur; web CSS kodları uyumluluk için temizlenir."],
    stylingList: [
      { feature: "Ekran Konumu", behavior: "SRT'nin standart alt orta konumu için temizlenir." },
      { feature: "Kalın ve İtalik", behavior: "Her iki formatta da korunur." }
    ],
    headerTitle: "WEBVTT Başlığının Temizlenmesi",
    headerText: ["SRT dosyalarının doğrudan 1 numarası ile başlayabilmesi için WEBVTT başlığı silinir."],
    softwareTitle: "Video Kurgu Programlarında Kullanım",
    softwareSubtitle: "Kolay entegrasyon:",
    softwareWorkflows: [
      { title: "Premiere Pro & DaVinci Resolve", description: ".srt dosyasını zaman çizelgenize kolayca sürükleyin." }
    ],
    troubleshootTitle: "Sorun Giderme",
    troubleshootSubtitle: "İpuçları:",
    troubleshootTips: [
      { issue: "Dosya kurgu programında açılmıyor", cause: "Dönüştürmeden sadece uzantı değiştirilmiş.", solution: "Çevrimiçi dönüştürücümüzle geçerli bir SRT oluşturun." }
    ],
    textPreservationTitle: "Metin Korunur mu?",
    textPreservationText: ["Evet. Konuşma metinleri ve satır sonları eksiksiz aktarılır."],
    formatChoiceTitle: "Hangi Formatı Seçmelisiniz?",
    formatChoiceSubtitle: "Kullanım senaryoları:",
    useVttWhen: ["Web siteleri ve HTML5 videolar", "Online eğitim sistemleri"],
    useSrtWhen: ["Premiere, DaVinci, Final Cut kurguları", "VLC ve Smart TV oynatmaları"],
    conclusionTitle: "WebVTT Altyazılarınızı Hemen SRT'ye Dönüştürün",
    conclusionText: [
      "VTT dosyalarınızı saniyeler içinde SRT formatına çevirin.",
      "Diğer popüler araçlarımız:",
      "• TXT - SRT Dönüştürücü: Düz metinden altyazı oluşturun.",
      "• SRT - Metin Dönüştürücü: Altyazılardan temiz metin çıkarın.",
      "• SRT - VTT Dönüştürücü: SubRip dosyalarını WebVTT'ye dönüştürün."
    ]
  },
  it: {
    introTitle: "Guida Completa per Convertire Sottotitoli WebVTT (VTT) in SubRip (SRT)",
    introSubtitle: "Scopri come trasformare file WebVTT (.vtt) nel formato universale SubRip (.srt) per software di montaggio video, player desktop e flussi di lavoro professionali.",
    introText: [
      "WebVTT (.vtt) è lo standard per i video web HTML5, mentre SubRip (.srt) rimane il formato universale per software di editing come Premiere Pro, DaVinci Resolve e player desktop come VLC.",
      "Il nostro convertitore online gratuito trasforma i tuoi file WebVTT in SubRip all'istante nel tuo browser con il 100% di privacy."
    ],
    whatIsTitle: "Cos'è un Convertitore da VTT a SRT?",
    whatIsText: [
      "Uno strumento che adatta i file WebVTT al formato SubRip rimuovendo l'intestazione 'WEBVTT', generando numeri sequenziali (1, 2, 3...) e convertendo i punti decimali in virgole."
    ],
    whyConvertTitle: "Perché Convertire VTT in SRT?",
    whyConvertSubtitle: "Vantaggi di compatibilità:",
    whyConvertReasons: [
      { title: "Software di Montaggio Video", description: "Premiere Pro, DaVinci Resolve e Final Cut Pro supportano nativamente i file .srt." },
      { title: "Player Desktop e Smart TV", description: "VLC e i televisori riconoscono automaticamente i sottotitoli in formato .srt." }
    ],
    howToTitle: "Come Convertire VTT in SRT in 5 Passaggi",
    howToSubtitle: "Guida rapida di conversione:",
    howToSteps: [
      { step: "1", title: "Carica il File VTT", description: "Trascina il file .vtt o incolla il testo nel convertitore." },
      { step: "2", title: "Conversione Automatica", description: "Lo strumento rimuove l'intestazione e numera i blocchi." },
      { step: "3", title: "Controlla l'Anteprima", description: "Verifica il codice SRT generato in tempo reale." },
      { step: "4", title: "Scarica il File .SRT", description: "Salva il file pronto per il tuo montaggio." },
      { step: "5", title: "Importa nel Tuo Software", description: "Aggiungi i sottotitoli in Premiere, DaVinci o VLC." }
    ],
    differenceTitle: "Differenze Tra VTT e SRT",
    differenceSubtitle: "Confronto tecnico:",
    differenceTable: [
      { feature: "Ambito Principale", vtt: "Web e video HTML5", srt: "Montaggio video e VLC" },
      { feature: "Intestazione", vtt: "Obbligatoria: 'WEBVTT'", srt: "Nessuna" },
      { feature: "Separatore Millisecondi", vtt: "Punto decimale (00:01:23.456)", srt: "Virgola (00:01:23,456)" },
      { feature: "Numerazione Blocchi", vtt: "Opzionale", srt: "Obbligatoria (1, 2, 3...)" }
    ],
    syntaxBreakdownTitle: "Sintassi dei Timestamp: Punto vs. Virgola",
    syntaxBreakdownText: ["WebVTT usa il punto per i millisecondi mentre SRT richiede la virgola."],
    exampleTitle: "Esempio di Conversione da VTT a SRT",
    exampleIntro: "Confronto prima e dopo:",
    exampleVttInput: `WEBVTT

00:00:01.000 --> 00:00:04.200
Benvenuti al nostro video tutorial.

00:00:04.300 --> 00:00:08.100
Oggi convertiamo sottotitoli WebVTT in formato SubRip SRT.`,
    exampleSrtOutput: `1
00:00:01,000 --> 00:00:04,200
Benvenuti al nostro video tutorial.

2
00:00:04,300 --> 00:00:08,100
Oggi convertiamo sottotitoli WebVTT in formato SubRip SRT.`,
    exampleExplanation: "L'intestazione WEBVTT viene rimossa, i numeri sequenziali vengono inseriti e i punti diventano virgole.",
    renameTitle: "Basta Rinominare l'Estensione da .VTT a .SRT?",
    renameSubtitle: "Perché rinominare il file non funziona:",
    renameReasons: [
      { problem: "Mancanza di Numerazione", explanation: "SRT richiede numeri interi sopra ogni timestamp." },
      { problem: "I Punti Rimangono Inalterati", explanation: "Rinominare non converte i punti in virgole, provocando errori." }
    ],
    ffmpegTitle: "Convertire VTT in SRT con FFmpeg",
    ffmpegSubtitle: "Comando da terminale:",
    ffmpegCommand: "ffmpeg -i input.vtt output.srt",
    ffmpegExplanation: [
      "FFmpeg converte file di sottotitoli tramite riga di comando.",
      "Per conversioni immediate senza installare programmi, usa il nostro convertitore online."
    ],
    timingTitle: "La Sincronizzazione Viene Modificata?",
    timingText: ["No. I timestamp di inizio e fine rimangono esattamente identici."],
    stylingTitle: "Cosa Succede allo Stile di WebVTT?",
    stylingSubtitle: "Gestione della formattazione:",
    stylingText: ["Testo e minutaggi vengono preservati, mentre gli stili CSS specifici del web vengono puliti per garantire la compatibilità."],
    stylingList: [
      { feature: "Posizionamento a Schermo", behavior: "Rimosso per l'allineamento standard in basso al centro di SRT." },
      { feature: "Grassetto e Corsivo", behavior: "Mantenuti in entrambi i formati." }
    ],
    headerTitle: "Rimozione dell'Intestazione WEBVTT",
    headerText: ["L'intestazione 'WEBVTT' viene rimossa affinché il file inizi direttamente con il numero 1."],
    softwareTitle: "Utilizzo nei Software di Montaggio",
    softwareSubtitle: "Integrazione immediata:",
    softwareWorkflows: [
      { title: "Premiere Pro & DaVinci Resolve", description: "Trascina il file .srt direttamente sulla tua timeline." }
    ],
    troubleshootTitle: "Risoluzione dei Problemi",
    troubleshootSubtitle: "Consigli pratici:",
    troubleshootTips: [
      { issue: "File non riconosciuto dal software", cause: "Semplice cambio di estensione senza conversione della sintassi.", solution: "Usa il nostro convertitore per generare un file SRT valido." }
    ],
    textPreservationTitle: "Il Testo Viene Preservato?",
    textPreservationText: ["Sì. Tutti i dialoghi parlati e le interruzioni di riga vengono mantenuti intatti."],
    formatChoiceTitle: "Quando Usare Ciascun Formato?",
    formatChoiceSubtitle: "Guida alla scelta:",
    useVttWhen: ["Video su siti web e player HTML5", "Piattaforme di formazione online"],
    useSrtWhen: ["Montaggio con Premiere, DaVinci o Final Cut", "Riproduzione con VLC o Smart TV"],
    conclusionTitle: "Converti i Tuoi File WebVTT in SRT Subito",
    conclusionText: [
      "Passa da WebVTT a SubRip in pochi secondi e con la massima privacy.",
      "Scopri gli altri nostri strumenti:",
      "• Convertitore da TXT a SRT: Crea sottotitoli da testo semplice.",
      "• Convertitore da SRT a Testo: Estrai trascrizioni pulite.",
      "• Convertitore da SRT a VTT: Adatta i sottotitoli per il web."
    ]
  }
};

export function getVttToSrtGuideContent(locale: Locale): VttToSrtGuideContent {
  return VTT_TO_SRT_GUIDE[locale] || VTT_TO_SRT_GUIDE.en;
}
