import type { Locale } from './config';

export interface SrtToAssGuideContent {
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
    srt: string;
    ass: string;
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
  exampleSrtInput: string;
  exampleAssOutput: string;
  exampleExplanation: string;

  featuresTitle: string;
  featuresSubtitle: string;
  assFeatures: {
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

  aegisubTitle: string;
  aegisubSubtitle: string;
  aegisubSteps: string[];

  conclusionTitle: string;
  conclusionText: string[];
}

export const SRT_TO_ASS_GUIDE: Record<Locale, SrtToAssGuideContent> = {
  en: {
    introTitle: "Complete Guide to Converting SubRip (SRT) to Advanced SubStation Alpha (ASS)",
    introSubtitle: "Discover how to transform plain SRT subtitles into fully styled, positioned ASS files for Aegisub, VLC, MPV, anime fansubs, and video editing workflows.",
    introText: [
      "SubRip (.srt) and Advanced SubStation Alpha (.ass) represent two distinct philosophies in video captioning. SRT is intentionally simple: sequential numbers, millisecond timecodes, and plain lines of text. While this simplicity makes SRT universally supported, it severely limits creators who need custom typography, precise screen placement, colored character dialogues, or decorative drop shadows.",
      "Advanced SubStation Alpha (SSA v4.00+), on the other hand, is the gold standard for rich, stylized subtitles. By converting your standard SRT files into ASS format, you unlock pixel-perfect coordinate positioning, custom font families, stroke outlines, background banners, and dynamic karaoke animations—all preserved without needing to permanently burn (hardcode) subtitles into your video stream.",
      "Our free in-browser SRT to ASS converter transforms your subtitles in milliseconds with 100% client-side privacy. Below, you will find an extensive breakdown of both formats, internal file syntax, styling override tags, step-by-step instructions, and troubleshooting tips to achieve flawless results."
    ],

    whatIsTitle: "What Is an SRT to ASS Converter?",
    whatIsText: [
      "An SRT to ASS converter is a specialized subtitle utility that translates SubRip (.srt) caption files into the Advanced SubStation Alpha (.ass) format. The conversion is far more than changing the file extension: it requires building a completely new script architecture.",
      "During conversion, the tool parses each SRT cue block, converts comma-delimited millisecond timestamps (00:01:23,450) into centisecond timecodes (0:01:23.45), maps inline HTML formatting tags (like <i>, <b>, <u>, and <font color>) to ASS style override tags, and wraps the dialogue lines within standard [Script Info], [V4+ Styles], and [Events] declaration blocks.",
      "Because our converter runs entirely in JavaScript on your device, your source video transcripts and intellectual property never leave your browser or get uploaded to third-party cloud servers."
    ],

    whyConvertTitle: "Why Convert SRT to ASS? Core Advantages",
    whyConvertSubtitle: "Upgrading from basic SRT to Advanced SubStation Alpha provides crucial advantages for content creators, animators, and translators:",
    whyConvertReasons: [
      {
        title: "Custom Fonts and Typography",
        description: "Standard SRT files leave font choices to the video player's default setting (often generic Arial or Roboto). ASS lets you define custom font families, font sizes, weights, and character spacing directly within the subtitle file."
      },
      {
        title: "High-Visibility Outlines and Shadows",
        description: "White text over bright video backgrounds frequently becomes unreadable. ASS allows you to define opaque border strokes, deep drop shadows, and glowing outlines with customizable thickness and opacity."
      },
      {
        title: "Precise Screen Positioning & Coordinate Control",
        description: "Avoid covering on-screen graphics, lower-third news chyrons, or actor faces. ASS supports exact (X, Y) pixel coordinates and 9-point numpad alignment (top, middle, bottom, left, center, right)."
      },
      {
        title: "Speaker Distinction with Font Colors",
        description: "Assign distinct text and outline colors to different speakers or voice actors, making rapid multi-character dialogue instantly understandable for viewers."
      },
      {
        title: "Non-Destructive Soft-Sub Delivery",
        description: "Deliver broadcast-grade stylized subtitles in MKV or MP4 containers. Viewers can toggle them on or off, and video creators avoid quality degradation caused by re-encoding video frames."
      },
      {
        title: "Full Compatibility with Aegisub & Video Editors",
        description: "Opening an ASS file in Aegisub or importing it into DaVinci Resolve or Premiere Pro provides an immediate timeline canvas for typography, typesetting, and audio synchronization."
      }
    ],

    howToTitle: "How to Convert SRT to ASS Online (Step-by-Step)",
    howToSubtitle: "Converting your subtitle files on SRTConverters.com is fast, lightweight, and requires zero software installation:",
    howToSteps: [
      {
        step: "1",
        title: "Input Your SRT Subtitle Content",
        description: "Drag and drop your .srt file into the upload zone, click 'Browse Files', or directly paste your raw SubRip subtitle text into the input box on the left."
      },
      {
        step: "2",
        title: "Automatic In-Browser Transformation",
        description: "Our converter instantly parses the cues, calculates centisecond timecodes, converts styling tags, and generates valid ASS v4.00+ Script Info, Styles, and Events blocks in real time."
      },
      {
        step: "3",
        title: "Copy or Download Your .ASS File",
        description: "Click 'Download .ASS' to save the file to your computer, or click 'Copy' to paste the raw ASS script directly into Aegisub, VS Code, or your video editor."
      }
    ],

    differenceTitle: "SRT vs ASS: In-Depth Format Comparison",
    differenceSubtitle: "Understanding the technical differences between SubRip and Advanced SubStation Alpha helps you choose the right format for your project:",
    differenceTable: [
      { feature: "File Extension", srt: ".srt", ass: ".ass (or legacy .ssa)" },
      { feature: "Specification", srt: "SubRip Text (Plain Text)", ass: "Advanced SubStation Alpha v4.00+" },
      { feature: "Timecode Precision", srt: "Milliseconds (00:01:30,500)", ass: "Centiseconds (0:01:30.50)" },
      { feature: "Header Structure", srt: "None (cue blocks start immediately)", ass: "Structured ([Script Info], [V4+ Styles], [Events])" },
      { feature: "Custom Fonts", srt: "Unsupported (relies on player defaults)", ass: "Fully supported (Fontname, Fontsize, Spacing)" },
      { feature: "Colors & Transparency", srt: "Basic <font color> (player-dependent)", ass: "Full 32-bit &HAABBGGRR color with alpha channel" },
      { feature: "Screen Positioning", srt: "Rare non-standard tags ({\\an8})", ass: "Native 9-point alignment (\\an1-9) & pixel coords (\\pos)" },
      { feature: "Outlines & Drop Shadows", srt: "Unsupported", ass: "Configurable thickness, shadow depth, and blur" },
      { feature: "Karaoke & Motion Effects", srt: "Unsupported", ass: "Built-in syllable timing (\\k), fades (\\fad), and rotation" },
      { feature: "Best Use Cases", srt: "YouTube closed captions, simple streaming", ass: "Anime fansubbing, music videos, stylized cinema" }
    ],

    structureTitle: "Inside an ASS Subtitle File: Understanding File Structure",
    structureSubtitle: "An Advanced SubStation Alpha file consists of three mandatory sections that define how media players render dialogue:",
    structureBlocks: [
      {
        name: "[Script Info]",
        description: "Contains script metadata such as title, author, script type (v4.00+), wrap style, and playback canvas resolution (PlayResX, PlayResY).",
        snippet: "[Script Info]\nTitle: Converted Subtitles\nScriptType: v4.00+\nWrapStyle: 0\nScaledBorderAndShadow: yes\nPlayResX: 1920\nPlayResY: 1080"
      },
      {
        name: "[V4+ Styles]",
        description: "Defines reusable visual style templates (default font, size, primary text color, outline color, shadow depth, margins, and alignment).",
        snippet: "[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,48,&H00FFFFFF,&H000000FF,&H00000000,&H64000000,-1,0,0,0,100,100,0,0,1,2,1,2,20,20,30,1"
      },
      {
        name: "[Events]",
        description: "Lists individual dialogue events with start time, end time, style name, margins, and the formatted subtitle text.",
        snippet: "[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:01.00,0:00:04.50,Default,,0,0,0,,Dialogue text goes here"
      }
    ],

    exampleTitle: "SRT to ASS Conversion Example: Before & After",
    exampleIntro: "Here is an example demonstrating how an unstyled SRT cue with basic tags transforms into standard ASS syntax:",
    exampleSrtInput: "1\n00:00:01,250 --> 00:00:04,800\nWelcome to <i>SRTConverters.com</i>!\nEnjoy <b>styled</b> captions.\n\n2\n00:00:05,100 --> 00:00:08,450\n<font color=\"#ffff00\">Warning:</font> Watch out ahead!",
    exampleAssOutput: "[Script Info]\nTitle: Converted Subtitles\nScriptType: v4.00+\nPlayResX: 1920\nPlayResY: 1080\n\n[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,48,&H00FFFFFF,&H000000FF,&H00000000,&H64000000,-1,0,0,0,100,100,0,0,1,2,1,2,20,20,30,1\n\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:01.25,0:00:04.80,Default,,0,0,0,,Welcome to {\\i1}SRTConverters.com{\\i0}!\\NEnjoy {\\b1}styled{\\b0} captions.\nDialogue: 0,0:00:05.10,0:00:08.45,Default,,0,0,0,,{\\c&H00FFFF&}Warning:{\\c} Watch out ahead!",
    exampleExplanation: "Notice three crucial transformations: (1) Timestamps convert from comma milliseconds (00:00:01,250) to period centiseconds (0:00:01.25). (2) Multi-line cues in SRT are joined into a single Dialogue line using ASS hard line break notation (\\N). (3) HTML tags (<i>, <b>, <font color>) are translated into native ASS override tags ({\\i1}, {\\b1}, {\\c&H00FFFF&} in BGR order).",

    featuresTitle: "Advanced SubStation Alpha (ASS) Styling Tags Reference",
    featuresSubtitle: "Once your file is converted to ASS, you can enrich dialogue with inline override tags enclosed in curly braces {\\...}:",
    assFeatures: [
      {
        name: "Font & Weight Overrides",
        tag: "{\\fnFontName\\fsSize\\b1\\i1}",
        explanation: "Changes the font family, font size, bold state (\\b1/\\b0), or italic state (\\i1/\\i0) for specific words or whole lines."
      },
      {
        name: "Color Overrides (BGR Format)",
        tag: "{\\c&HBBGGRR&}",
        explanation: "Sets primary text color using hexadecimal Blue-Green-Red order. Use \\3c&HBBGGRR& to change the outline stroke color."
      },
      {
        name: "Screen Alignment",
        tag: "{\\an1} to {\\an9}",
        explanation: "Sets text anchor according to standard numpad layout: \\an2 is bottom-center (standard), \\an8 is top-center, \\an5 is screen-center."
      },
      {
        name: "Pixel Coordinates Positioning",
        tag: "{\\pos(X, Y)}",
        explanation: "Pins dialogue to exact screen pixel coordinates based on the PlayResX and PlayResY resolution defined in Script Info."
      },
      {
        name: "Smooth Fade In & Fade Out",
        tag: "{\\fad(fade_in_ms, fade_out_ms)}",
        explanation: "Creates smooth alpha transitions when text appears and disappears, e.g. {\\fad(300, 200)} fades in over 300ms and out over 200ms."
      },
      {
        name: "Karaoke Timing Highlights",
        tag: "{\\k<duration_cs>}",
        explanation: "Highlights words or syllables in centiseconds, ideal for music videos, lyrics, and karaoke displays."
      }
    ],

    ffmpegTitle: "How to Convert SRT to ASS With FFmpeg (Command Line)",
    ffmpegSubtitle: "If you are automating video workflows on a server or terminal, FFmpeg provides built-in subtitle conversion:",
    ffmpegCommand: "ffmpeg -i input.srt output.ass",
    ffmpegExplanation: [
      "Running this command reads the input SRT file and produces a basic .ass file using FFmpeg's default subtitle style template.",
      "If you wish to hardcode (burn) the converted ASS subtitles directly into an MP4 video file with all styles rendered, use the subtitles video filter: ffmpeg -i video.mp4 -vf 'subtitles=output.ass' -c:a copy output_burned.mp4",
      "For quick day-to-day conversions without opening terminal windows or configuring command-line environments, our free online converter generates identical valid ASS v4.00+ code right in your web browser."
    ],

    useCasesTitle: "Common Use Cases for SRT to ASS Conversion",
    useCasesSubtitle: "ASS subtitles are the preferred choice across several creative and professional industries:",
    useCasesList: [
      {
        title: "Anime and Foreign Film Fansubbing",
        description: "Community translation teams use ASS to typeset on-screen signs, match typography with video backgrounds, and color-code speaker dialogues."
      },
      {
        title: "Karaoke Tracks & Song Lyric Videos",
        description: "Using syllable-level timing tags (\\k), ASS powers synchronized lyric animations on YouTube, Vimeo, and karaoke bars."
      },
      {
        title: "Social Media Short-Form Video (TikTok / Reels)",
        description: "Create punchy, colored subtitles with thick outlines that stand out over fast-paced smartphone video content."
      },
      {
        title: "Avoiding On-Screen Clutter & Lower-Thirds",
        description: "In documentaries and news broadcasts, ASS allows positioning subtitles at the top or center of the frame when lower thirds or names appear."
      },
      {
        title: "Burned Subtitles via HandBrake",
        description: "Video creators frequently convert SRT to ASS to style their captions before using HandBrake to hardcode them into high-efficiency MP4/MKV video files."
      }
    ],

    troubleshootTitle: "Troubleshooting Common SRT to ASS Conversion Issues",
    troubleshootSubtitle: "Encountering problems during conversion or playback? Here are the most common issues and solutions:",
    troubleshootTips: [
      {
        issue: "Special characters or accents appear corrupted (e.g. Ã©, Ã¼, ?)",
        cause: "The original SRT file was saved using legacy ANSI, Windows-1252, or ISO-8859-1 encoding instead of modern UTF-8.",
        solution: "Re-save your SRT file with UTF-8 encoding in Notepad or VS Code before converting, or paste the text directly into our tool."
      },
      {
        issue: "Custom fonts do not appear on other computers or mobile devices",
        cause: "ASS references font family names installed on the viewer's operating system. If the viewer doesn't have the font, players fall back to Arial.",
        solution: "Mux the .ttf/.otf font files into your MKV container as attachments using MKVToolNix, or burn the subtitles into the video."
      },
      {
        issue: "Colors appear inverted or wrong (e.g. blue shows as red)",
        cause: "ASS uses BGR (Blue-Green-Red) color hexadecimal notation, whereas web and HTML use standard RGB (Red-Green-Blue).",
        solution: "Our converter automatically translates RGB colors into ASS BGR notation ({\\c&HBBGGRR&}) so colors display accurately."
      },
      {
        issue: "Player displays raw code tags like {\\b1} on screen",
        cause: "Older or basic video players lack an ASS subtitle rendering engine (libass) and treat style tags as literal text.",
        solution: "Use modern media players with native ASS support such as VLC, MPV, or PotPlayer."
      }
    ],

    timingTitle: "Does Converting SRT to ASS Affect Subtitle Timing?",
    timingText: [
      "No. Subtitle timing is strictly preserved. In SubRip (.srt), timestamps are measured in hours, minutes, seconds, and milliseconds (e.g., 00:01:23,450). In Advanced SubStation Alpha (.ass), timestamps are measured in hours, minutes, seconds, and centiseconds (e.g., 0:01:23.45).",
      "Our converter mathematically divides milliseconds by 10 and accurately truncates or rounds to two decimal places. As a result, dialogue lines appear and disappear at the exact same video frames as the source SRT."
    ],

    aegisubTitle: "How to Further Edit Your ASS File in Aegisub",
    aegisubSubtitle: "Once your file is converted to .ass, Aegisub gives you total creative control over the visual presentation:",
    aegisubSteps: [
      "Open Aegisub and go to File > Open Subtitles, then select your downloaded .ass file.",
      "Go to Video > Open Video to load your footage and visually preview subtitle placement.",
      "Open Subtitles > Styles Manager to edit the 'Default' style: adjust the font family, font size, primary color, outline width, and shadow offset.",
      "Use Aegisub's visual typesetting tools (Drag, Rotate, Clip, Vector) to position captions directly over on-screen elements.",
      "Save the updated .ass file to preserve your enhanced typography and timeline adjustments."
    ],

    conclusionTitle: "Convert Your Subtitles from SRT to ASS Now",
    conclusionText: [
      "Ready to elevate your subtitles with beautiful fonts, sharp outlines, and precise positioning? Use our free SRT to ASS converter above for instant, secure client-side conversion.",
      "Explore our full suite of free subtitle tools:",
      "• TXT to SRT Converter: Turn unformatted transcripts into synchronized SRT files.",
      "• SRT to Text Converter: Strip timecodes and numbers to extract clean dialogue transcripts.",
      "• SRT to VTT Converter: Transform SubRip captions into W3C-compliant WebVTT for HTML5 video.",
      "• VTT to SRT Converter: Convert WebVTT captions into standard SubRip format for editing."
    ]
  },

  es: {
    introTitle: "Guía Completa para Convertir Subtítulos SubRip (SRT) a Advanced SubStation Alpha (ASS)",
    introSubtitle: "Descubre cómo transformar subtítulos SRT simples en archivos ASS completamente estilizados, con tipografías personalizadas, efectos visuales y posicionamiento exacto para Aegisub, VLC, MPV, fansubs de anime y edición de video.",
    introText: [
      "Los formatos SubRip (.srt) y Advanced SubStation Alpha (.ass) representan dos visiones complementarias en el mundo de los subtítulos digitales. SRT destaca por su sencillez minimalista: números correlativos, marcas de tiempo en milisegundos y líneas de texto sin formato. Si bien esta simplicidad hace que SRT sea compatible con cualquier reproductor del planeta, resulta insuficiente para creadores audiovisuales que necesitan tipografías con personalidad, colocación precisa en pantalla, subtítulos coloreados por personaje o sombras contorneadas para garantizar la lectura.",
      "Por su parte, Advanced SubStation Alpha (especificación SSA v4.00+) es el estándar indiscutible para subtítulos enriquecidos y de alta gama visual. Al convertir un archivo SRT a formato ASS, desbloqueas el posicionamiento por coordenadas píxel a píxel, fuentes tipográficas personalizadas, contornos biselados, fondos translúcidos, rotaciones angulares y sincronización dinámica de karaoke, todo ello preservado como subtítulo flotante sin obligarte a re-codificar (incrustar) el video.",
      "Nuestro convertidor gratuito de SRT a ASS en el navegador realiza la conversión en cuestión de milisegundos con total privacidad del lado del cliente. A continuación encontrarás una guía exhaustiva con las diferencias técnicas, la estructura interna del código ASS, ejemplos prácticos de antes y después, catálogo de etiquetas de estilo y soluciones a los problemas más frecuentes."
    ],

    whatIsTitle: "¿Qué es un Convertidor de SRT a ASS?",
    whatIsText: [
      "Un convertidor de SRT a ASS es una utilidad especializada que traduce la estructura elemental de subtítulos SubRip (.srt) a la arquitectura de secuencias de comandos de Advanced SubStation Alpha (.ass). El proceso va mucho más allá de cambiar la extensión del archivo: implica estructurar un script de subtítulos completo con directivas de renderizado.",
      "Durante la conversión, el motor analiza cada bloque de subtítulo SRT, convierte las marcas temporales delimitadas por comas (00:01:23,450) a la notación de centésimas de segundo con punto (0:01:23.45), traduce etiquetas HTML inline como <i>, <b>, <u> y <font color> a etiquetas de sobreescritura nativas de ASS, y empaqueta los diálogos dentro de las secciones obligatorias [Script Info], [V4+ Styles] y [Events]."
    ],

    whyConvertTitle: "¿Por qué Convertir SRT a ASS? Principales Ventajas",
    whyConvertSubtitle: "Pasar de SubRip a Advanced SubStation Alpha ofrece ventajas determinantes para creadores de contenido, traductores y editores de video:",
    whyConvertReasons: [
      {
        title: "Fuentes y Tipografías Personalizadas",
        description: "Elige cualquier familia tipográfica instalada en el sistema (o incrustada en MKV), ajusta tamaños en puntos y define interlineados específicos sin depender de la fuente por defecto del reproductor."
      },
      {
        title: "Bordes Gruesos y Sombras de Alta Visibilidad",
        description: "Evita que las letras blancas se vuelvan ilegibles en escenas con nieve, cielos brillantes o luces intensas aplicando contornos negros gruesos y sombras paralelas configurables."
      },
      {
        title: "Posicionamiento Exacto por Coordenadas Píxel",
        description: "Coloca subtítulos en coordenadas (X, Y) precisas o sobre la rejilla de 9 cuadrantes para evitar tapar nombres, rótulos informativos de pantalla (lower thirds) o elementos gráficos esenciales."
      },
      {
        title: "Colores Diferenciados por Personaje o Interlocutor",
        description: "Asigna colores de texto y borde distintos a cada participante en un podcast, película o anime, facilitando la comprensión en conversaciones simultáneas y rápidas."
      },
      {
        title: "Subtítulos Flotantes sin Pérdida de Calidad",
        description: "Conserva todos los estilos tipográficos dentro de contenedores MKV o MP4 como pista flotante (soft subtitle), permitiendo al usuario activarlos o desactivarlos sin recomprimir el video."
      },
      {
        title: "Compatibilidad Total con Aegisub y Herramientas Pro",
        description: "El formato ASS es la base nativa del potente editor Aegisub, lo que te permite sincronizar diálogos con el espectrograma de audio y diseñar efectos cinemáticos de karaoke."
      }
    ],

    howToTitle: "Cómo Convertir SRT a ASS Online Paso a Paso",
    howToSubtitle: "Convertir tus archivos de subtítulos en SRTConverters.com es rápido, seguro y no requiere instalar ningún software:",
    howToSteps: [
      {
        step: "1",
        title: "Carga o Pega tus Subtítulos SRT",
        description: "Arrastra y suelta tu archivo .srt en el área de carga, haz clic en 'Explorar archivos' o pega directamente el texto plano de tus subtítulos en el editor de la izquierda."
      },
      {
        step: "2",
        title: "Conversión Instantánea en el Navegador",
        description: "Nuestro motor procesa los bloques al instante, calcula los tiempos en centésimas, traduce las etiquetas HTML de formato y genera la estructura válida ASS v4.00+ en tiempo real."
      },
      {
        step: "3",
        title: "Copia o Descarga tu Archivo .ASS",
        description: "Haz clic en 'Descargar .ASS' para guardar el archivo listo para usar en tu ordenador, o haz clic en 'Copiar' para transferir el código directamente a Aegisub, VS Code o tu software de edición."
      }
    ],

    differenceTitle: "Comparativa Detallada: SRT vs ASS",
    differenceSubtitle: "Comprender las diferencias técnicas entre SubRip y Advanced SubStation Alpha te permitirá elegir el formato óptimo para cada proyecto:",
    differenceTable: [
      { feature: "Extensión de Archivo", srt: ".srt", ass: ".ass (o el histórico .ssa)" },
      { feature: "Especificación Técnica", srt: "SubRip Text (Texto Plano Básico)", ass: "Advanced SubStation Alpha v4.00+" },
      { feature: "Precisión Temporal", srt: "Milisegundos (00:01:30,500)", ass: "Centésimas de segundo (0:01:30.50)" },
      { feature: "Estructura de Encabezados", srt: "Ninguna (los bloques inician directamente)", ass: "Estructurada ([Script Info], [V4+ Styles], [Events])" },
      { feature: "Fuentes Personalizadas", srt: "No admitido (usa el ajuste del reproductor)", ass: "Totalmente configurable (familia, tamaño, interletrado)" },
      { feature: "Colores y Transparencia", srt: "Básico <font color> (soporte dispar)", ass: "Color de 32 bits &HAABBGGRR con canal alfa completo" },
      { feature: "Posicionamiento en Pantalla", srt: "Muy limitado y no estandarizado", ass: "Alineación de 9 puntos (\\an1-9) y coordenadas píxel (\\pos)" },
      { feature: "Bordes y Sombras", srt: "No admitido", ass: "Grosor, color, desenfoque y profundidad configurables" },
      { feature: "Efectos de Karaoke y Animación", srt: "No admitido", ass: "Sincronía silábica (\\k), fundidos (\\fad) y transformaciones" },
      { feature: "Casos de Uso Ideales", srt: "YouTube, subtítulos cerrados sencillos", ass: "Anime fansubbing, videos musicales, cine y reels" }
    ],

    structureTitle: "Estructura Interna de un Archivo ASS: Comprendiendo sus Secciones",
    structureSubtitle: "Un archivo Advanced SubStation Alpha válido se compone de tres secciones indispensables que indican al reproductor cómo interpretar y mostrar los diálogos:",
    structureBlocks: [
      {
        name: "[Script Info]",
        description: "Almacena los metadatos generales del script: título del proyecto, versión (v4.00+), modo de ajuste de líneas (WrapStyle) y resolución de referencia del lienzo (PlayResX, PlayResY).",
        snippet: "[Script Info]\nTitle: Converted Subtitles\nScriptType: v4.00+\nWrapStyle: 0\nScaledBorderAndShadow: yes\nPlayResX: 1920\nPlayResY: 1080"
      },
      {
        name: "[V4+ Styles]",
        description: "Define las plantillas de diseño visual reutilizables: nombre del estilo, tipografía, tamaño, colores primario y secundario, borde, sombra, márgenes y alineación.",
        snippet: "[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,48,&H00FFFFFF,&H000000FF,&H00000000,&H64000000,-1,0,0,0,100,100,0,0,1,2,1,2,20,20,30,1"
      },
      {
        name: "[Events]",
        description: "Enumera cada una de las líneas de diálogo con sus tiempos de inicio y fin, el estilo visual asociado y el texto enriquecido con etiquetas de sobreescritura.",
        snippet: "[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:01.00,0:00:04.50,Default,,0,0,0,,Texto de diálogo enriquecido aquí"
      }
    ],

    exampleTitle: "Ejemplo de Conversión de SRT a ASS: Antes y Después",
    exampleIntro: "Observa cómo se transforma un bloque SRT convencional con etiquetas de formato en sintaxis ASS válida:",
    exampleSrtInput: "1\n00:00:01,250 --> 00:00:04,800\n¡Bienvenido a <i>SRTConverters.com</i>!\nDisfruta de subtítulos <b>estilizados</b>.\n\n2\n00:00:05,100 --> 00:00:08,450\n<font color=\"#ffff00\">Aviso:</font> ¡Mira hacia adelante!",
    exampleAssOutput: "[Script Info]\nTitle: Converted Subtitles\nScriptType: v4.00+\nPlayResX: 1920\nPlayResY: 1080\n\n[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,48,&H00FFFFFF,&H000000FF,&H00000000,&H64000000,-1,0,0,0,100,100,0,0,1,2,1,2,20,20,30,1\n\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:01.25,0:00:04.80,Default,,0,0,0,,¡Bienvenido a {\\i1}SRTConverters.com{\\i0}!\\NDisfruta de subtítulos {\\b1}estilizados{\\b0}.\nDialogue: 0,0:00:05.10,0:00:08.45,Default,,0,0,0,,{\\c&H00FFFF&}Aviso:{\\c} ¡Mira hacia adelante!",
    exampleExplanation: "Observa tres transformaciones esenciales: (1) Las marcas temporales pasan del formato de milisegundos con coma (00:00:01,250) al formato de centésimas con punto (0:00:01.25). (2) Las líneas múltiples se unen en un único registro Dialogue utilizando el salto forzado de ASS (\\N). (3) Las etiquetas HTML (<i>, <b>, <font color>) se convierten a etiquetas de sobreescritura nativas ({\\i1}, {\\b1}, {\\c&H00FFFF&} en orden BGR).",

    featuresTitle: "Referencia de Etiquetas de Estilo Avanzadas en ASS",
    featuresSubtitle: "Una vez convertido tu archivo a ASS, puedes personalizar cualquier línea de diálogo añadiendo etiquetas entre llaves {\\...}:",
    assFeatures: [
      {
        name: "Tipografía, Tamaño y Estilo",
        tag: "{\\fnNombreFuente\\fsTamaño\\b1\\i1}",
        explanation: "Modifica la fuente, el tamaño en píxeles, negrita (\\b1/\\b0) o cursiva (\\i1/\\i0) en palabras específicas o en la línea completa."
      },
      {
        name: "Colores en Notación BGR",
        tag: "{\\c&HBBGGRR&}",
        explanation: "Establece el color del texto principal en orden hexadecimal Azul-Verde-Rojo. Usa \\3c&HBBGGRR& para cambiar el color del borde."
      },
      {
        name: "Alineación en Rejilla de 9 Puntos",
        tag: "{\\an1} a {\\an9}",
        explanation: "Fija el anclaje del texto según la disposición del teclado numérico: \\an2 para inferior central, \\an8 para superior central y \\an5 para el centro exacto."
      },
      {
        name: "Posicionamiento por Coordenadas Píxel",
        tag: "{\\pos(X, Y)}",
        explanation: "Ubica el subtítulo en coordenadas exactas de la pantalla en función de la resolución PlayResX y PlayResY configurada en Script Info."
      },
      {
        name: "Fundidos Suaves de Entrada y Salida",
        tag: "{\\fad(entrada_ms, salida_ms)}",
        explanation: "Genera transiciones suaves de opacidad al inicio y al final; por ejemplo, {\\fad(300, 200)} aparece en 300 ms y se desvanece en 200 ms."
      },
      {
        name: "Sincronización de Karaoke",
        tag: "{\\k<duración_cs>}",
        explanation: "Resalta palabras o sílabas en centésimas de segundo, ideal para videos musicales, aperturas de series y pistas de karaoke."
      }
    ],

    ffmpegTitle: "Cómo Convertir SRT a ASS con FFmpeg (Línea de Comandos)",
    ffmpegSubtitle: "Si automatizas flujos de procesamiento de video en terminal o servidores, FFmpeg incluye soporte nativo de conversión:",
    ffmpegCommand: "ffmpeg -i entrada.srt salida.ass",
    ffmpegExplanation: [
      "Al ejecutar este comando, FFmpeg lee las marcas de tiempo y el texto del archivo SRT y genera un script ASS válido aplicando su plantilla de estilo predeterminada.",
      "Para incrustar (hardcodear o quemar) los subtítulos ASS directamente en un video MP4 con todos los estilos y fuentes renderizados: ffmpeg -i video.mp4 -vf 'subtitles=salida.ass' -c:a copy salida_incrustada.mp4",
      "Para conversiones rápidas del día a día sin necesidad de abrir la consola ni configurar dependencias, nuestro convertidor online en el navegador produce código ASS v4.00+ idéntico e instantáneo."
    ],

    useCasesTitle: "Casos de Uso Comunes para Subtítulos ASS",
    useCasesSubtitle: "El formato ASS es la opción estándar en múltiples entornos de creación y distribución audiovisual:",
    useCasesList: [
      {
        title: "Fansubbing de Anime y Series Extranjeras",
        description: "Equipos de traducción comunitarios usan ASS para rotular carteles de fondo, igualar la tipografía del video original y asignar colores a los personajes."
      },
      {
        title: "Pistas de Karaoke y Videos Musicales",
        description: "Mediante las etiquetas de tiempo silábico (\\k), ASS potencia animaciones de letras sincronizadas en YouTube, salas de karaoke y presentaciones."
      },
      {
        title: "Videos para Redes Sociales (TikTok, Reels, Shorts)",
        description: "Crea subtítulos dinámicos con bordes negros gruesos y tipografías llamativas que captan la atención inmediata en pantallas móviles verticales."
      },
      {
        title: "Evitar Solapamiento con Rótulos y Nombres",
        description: "En documentales y entrevistas, ASS permite subir temporalmente el subtítulo a la parte superior de la pantalla cuando aparecen nombres o rótulos informativos."
      },
      {
        title: "Incrustación de Subtítulos con HandBrake",
        description: "Editores y creadores convierten SRT a ASS para perfeccionar los estilos gráficos antes de incrustarlos de forma fija en videos MP4 o MKV de alta compresión."
      }
    ],

    troubleshootTitle: "Solución a Problemas Frecuentes en la Conversión SRT a ASS",
    troubleshootSubtitle: "¿Tienes dificultades durante la conversión o en la visualización? Estas son las causas más habituales y cómo corregirlas:",
    troubleshootTips: [
      {
        issue: "Aparecen caracteres extraños o símbolos dañados (ej. Ã©, Ã±, ?)",
        cause: "El archivo SRT original se guardó con una codificación heredada como ANSI, Windows-1252 o ISO-8859-1 en lugar de UTF-8.",
        solution: "Abre tu archivo SRT en el Bloc de notas o VS Code y guárdalo seleccionando codificación UTF-8, o copia y pega el texto directamente en nuestro convertidor web."
      },
      {
        issue: "Las fuentes personalizadas no se ven en otros ordenadores o móviles",
        cause: "El formato ASS hace referencia a fuentes instaladas en el sistema operativo del usuario. Si la fuente no existe en su dispositivo, el reproductor sustituye por Arial.",
        solution: "Incrusta los archivos de fuente (.ttf/.otf) como adjuntos dentro del contenedor MKV usando MKVToolNix, o incrusta (quema) los subtítulos en el video."
      },
      {
        issue: "Los colores aparecen invertidos o equivocados (ej. el azul se ve rojo)",
        cause: "El formato ASS utiliza la notación de color BGR (Azul-Verde-Rojo) en hexadecimal, mientras que el código web y HTML utiliza RGB (Rojo-Verde-Azul).",
        solution: "Nuestro convertidor traduce de forma automática los códigos de color RGB a la notación BGR de ASS ({\\c&HBBGGRR&}) para que los colores coincidan fielmente."
      },
      {
        issue: "El reproductor de video muestra etiquetas de código crudas como {\\b1}",
        cause: "Algunos reproductores básicos o antiguos carecen de un motor de renderizado ASS compatible (libass) y tratan las etiquetas de diseño como texto normal.",
        solution: "Utiliza reproductores modernos con soporte completo de ASS como VLC Media Player, MPV o PotPlayer."
      }
    ],

    timingTitle: "¿La Conversión de SRT a ASS Afecta a la Sincronización?",
    timingText: [
      "No. La sincronización de los subtítulos se mantiene de manera rigurosa y exacta. En SubRip (.srt), los tiempos se miden en horas, minutos, segundos y milisegundos (00:01:23,450). En Advanced SubStation Alpha (.ass), se especifican en horas, minutos, segundos y centésimas de segundo (0:01:23.45).",
      "Nuestro algoritmo matemático divide los milisegundos entre 10 y redondea con precisión a dos decimales. De este modo, cada línea de diálogo aparece y desaparece en el fotograma exacto del video original, sin desfases acumulativos ni saltos temporales."
    ],

    aegisubTitle: "Cómo Editar tu Archivo ASS en Aegisub",
    aegisubSubtitle: "Una vez descargado tu archivo .ass, Aegisub te brinda el control visual y creativo absoluto sobre tus subtítulos:",
    aegisubSteps: [
      "Abre Aegisub, ve al menú Archivo > Abrir subtítulos y selecciona tu archivo .ass descargado.",
      "Accede a Video > Abrir video para cargar tu archivo multimedia y previsualizar la posición exacta de cada frase.",
      "Dirígete a Subtítulos > Administrador de estilos para personalizar el estilo 'Default': modifica la tipografía, tamaño, colores, contornos y márgenes.",
      "Aprovecha las herramientas de composición visual de Aegisub (arrastre, rotación, vector y máscara) para colocar subtítulos sobre elementos del plano.",
      "Guarda el archivo .ass actualizado para mantener tus estilos tipográficos y ajustes de tiempo optimizados."
    ],

    conclusionTitle: "Convierte tus Subtítulos de SRT a ASS Ahora Mismo",
    conclusionText: [
      "¿Listo para dotar a tus subtítulos de tipografías atractivas, contornos nítidos y ubicación personalizada? Utiliza nuestro convertidor de SRT a ASS gratuito en la parte superior para una transformación inmediata y confidencial en tu navegador.",
      "Descubre también nuestra colección completa de herramientas de subtítulos gratuitas:",
      "• Convertidor TXT a SRT: Convierte transcripciones y notas de texto plano en subtítulos SRT sincronizados.",
      "• Convertidor SRT a Texto: Elimina tiempos y números para extraer transcripciones limpias y legibles.",
      "• Convertidor SRT a VTT: Transforma subtítulos SubRip a WebVTT para reproductores web y estándar HTML5.",
      "• Convertidor VTT a SRT: Adapta subtítulos WebVTT a formato SubRip compatible con software de edición."
    ]
  },

  pt: {
    introTitle: "Guia Completo para Converter Legendas SubRip (SRT) em Advanced SubStation Alpha (ASS)",
    introSubtitle: "Descubra como transformar legendas SRT simples em arquivos ASS totalmente estilizados, com tipografia personalizada, efeitos visuais e posicionamento de precisão para Aegisub, VLC, MPV, fansubs de anime e edição de vídeo.",
    introText: [
      "Os formatos SubRip (.srt) e Advanced SubStation Alpha (.ass) representam duas propostas muito diferentes na legendagem de vídeos. O formato SRT prioriza a máxima simplicidade: números de sequência, marcações de tempo em milissegundos e linhas de texto puro sem estilização. Embora essa simplicidade garanta que o SRT funcione em qualquer dispositivo ou reprodutor, ela limita profundamente editores que precisam de fontes exclusivas, posicionamento exato na tela, cores distintas por personagem ou sombras contornadas para melhorar a legibilidade.",
      "Em contrapartida, o Advanced SubStation Alpha (especificação SSA v4.00+) é o padrão de referência para legendas ricas e altamente estilizadas. Ao converter arquivos SRT para ASS, você desbloqueia o posicionamento milimétrico por coordenadas de pixels, famílias de fontes personalizadas, contornos espessos, caixas de fundo translúcidas, rotações de texto e efeitos de karaokê sincronizados sílaba por sílaba—tudo preservado como legenda suave (soft subtitle), sem necessidade de queimar (hardcode) o texto na imagem do vídeo.",
      "Nosso conversor gratuito de SRT para ASS baseado no navegador realiza o processamento em milissegundos com 100% de privacidade no lado do cliente. Abaixo, você encontrará uma análise técnica detalhada dos formatos, da estrutura interna dos arquivos ASS, códigos de estilo, tutoriais passo a passo e resolução das dúvidas mais frequentes."
    ],

    whatIsTitle: "O Que É um Conversor de SRT para ASS?",
    whatIsText: [
      "Um conversor de SRT para ASS é uma ferramenta especializada que traduz arquivos de legenda no formato elementar SubRip (.srt) para a arquitetura de scripts do Advanced SubStation Alpha (.ass). Essa conversão vai muito além de uma simples renomeação de extensão: ela reconstrói todo o arquivo dentro de um script padronizado com diretivas visuais completas.",
      "Durante o processamento, o conversor analisa cada bloco de legenda SRT, transforma os códigos de tempo delimitados por vírgula (00:01:23,450) para a notação de centésimos de segundo delimitada por ponto (0:01:23.45), converte tags HTML inline como <i>, <b>, <u> e <font color> em tags nativas de sobreposição do ASS, e encapsula as falas dentro dos blocos obrigatórios [Script Info], [V4+ Styles] e [Events]."
    ],

    whyConvertTitle: "Por Que Converter SRT para ASS? Principais Vantagens",
    whyConvertSubtitle: "A transição de SubRip para Advanced SubStation Alpha oferece benefícios expressivos para editores de vídeo, tradutores e criadores de conteúdo:",
    whyConvertReasons: [
      {
        title: "Fontes e Tipografia Personalizadas",
        description: "Escolha qualquer família tipográfica instalada no computador ou incorporada ao contêiner de vídeo, definindo tamanhos exatos e espaçamento sem depender das configurações padrão do reprodutor."
      },
      {
        title: "Contornos Espessos e Sombras de Alta Visibilidade",
        description: "Elimine o risco de textos brancos sumirem contra fundos claros ou iluminados aplicando contornos pretos espessos e sombras projetadas com intensidade ajustável."
      },
      {
        title: "Posicionamento Exato por Coordenadas em Pixels",
        description: "Posicione diálogos em qualquer coordenada (X, Y) da tela ou na grade de 9 quadrantes, impedindo que o texto cubra letreiros, nomes de entrevistados (lower-thirds) ou elementos gráficos vitais."
      },
      {
        title: "Cores Distintas para Múltiplos Personagens",
        description: "Atribua cores de texto e bordas específicas para cada participante de um diálogo, facilitando a identificação imediata de quem está falando em podcasts, séries e debates rápidos."
      },
      {
        title: "Legendas Suaves Sem Perda de Qualidade",
        description: "Mantenha toda a riqueza estética das legendas em contêineres MKV ou MP4 sem recomprimir ou degradar o sinal de vídeo, permitindo ao usuário ativar ou ocultar as legendas livremente."
      },
      {
        title: "Integração Nativa e Total com o Aegisub",
        description: "O formato ASS é a linguagem nativa do Aegisub, permitindo sincronizar falas visualmente com o espectrograma de áudio e projetar efeitos de animação complexos."
      }
    ],

    howToTitle: "Como Converter SRT para ASS Online (Passo a Passo)",
    howToSubtitle: "Converter suas legendas no SRTConverters.com é extremamente rápido, seguro e não requer instalação de programas:",
    howToSteps: [
      {
        step: "1",
        title: "Envie ou Cole Suas Legendas SRT",
        description: "Arraste e solte o arquivo .srt na área de envio, clique em 'Selecionar Arquivos' ou cole diretamente o texto das legendas no editor posicionado à esquerda."
      },
      {
        step: "2",
        title: "Formatação Automática no Navegador",
        description: "Nosso mecanismo processa os blocos instantaneamente, recalcula os tempos para centésimos de segundo, converte marcações de estilo e cria a estrutura válida do padrão ASS v4.00+."
      },
      {
        step: "3",
        title: "Copie ou Baixe Seu Arquivo .ASS",
        description: "Clique em 'Baixar .ASS' para salvar o arquivo final no seu dispositivo ou clique em 'Copiar' para colar o script diretamente no Aegisub, VS Code ou no seu editor de vídeo favorito."
      }
    ],

    differenceTitle: "Comparação Detalhada: SRT vs ASS",
    differenceSubtitle: "Compreender as diferenças técnicas entre SubRip e Advanced SubStation Alpha permite escolher o formato ideal para cada produção:",
    differenceTable: [
      { feature: "Extensão de Arquivo", srt: ".srt", ass: ".ass (ou o clássico .ssa)" },
      { feature: "Especificação Técnica", srt: "SubRip Text (Texto Simples)", ass: "Advanced SubStation Alpha v4.00+" },
      { feature: "Precisão Temporal", srt: "Milissegundos (00:01:30,500)", ass: "Centésimos de segundo (0:01:30.50)" },
      { feature: "Cabeçalhos Estruturais", srt: "Nenhum (os blocos iniciam direto)", ass: "Estruturados ([Script Info], [V4+ Styles], [Events])" },
      { feature: "Fontes Personalizadas", srt: "Não suportado (usa padrão do player)", ass: "Totalmente configurável (família, tamanho e escala)" },
      { feature: "Cores e Transparência", srt: "Suporte básico a <font color>", ass: "Cores 32-bit no padrão &HAABBGGRR com canal alfa" },
      { feature: "Posicionamento em Tela", srt: "Raras tags proprietárias instáveis", ass: "Grade de 9 pontos (\\an1-9) e coordenadas em pixels (\\pos)" },
      { feature: "Contornos e Sombras", srt: "Não suportado", ass: "Largura do traço, sombra e desfoque totalmente ajustáveis" },
      { feature: "Efeitos de Karaokê e Fade", srt: "Não suportado", ass: "Temporização de sílabas (\\k), transições (\\fad) e rotações" },
      { feature: "Cenários Ideais de Uso", srt: "Legendas ocultas simples (YouTube/web)", ass: "Fansubs de anime, videoclipes, cinema e vídeos verticais" }
    ],

    structureTitle: "Estrutura Interna de um Arquivo ASS: Entendendo as Seções",
    structureSubtitle: "Um arquivo Advanced SubStation Alpha válido é composto por três blocos essenciais que definem como os players renderizam as legendas:",
    structureBlocks: [
      {
        name: "[Script Info]",
        description: "Reúne os metadados do projeto, como título da legenda, versão de script (v4.00+), estilo de quebra de linha (WrapStyle) e a resolução de referência da tela (PlayResX, PlayResY).",
        snippet: "[Script Info]\nTitle: Converted Subtitles\nScriptType: v4.00+\nWrapStyle: 0\nScaledBorderAndShadow: yes\nPlayResX: 1920\nPlayResY: 1080"
      },
      {
        name: "[V4+ Styles]",
        description: "Contém as definições de estilos visuais reutilizáveis: família da fonte, tamanho, cores primária e secundária, bordas, sombras, alinhamento padrão e margens de tela.",
        snippet: "[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,48,&H00FFFFFF,&H000000FF,&H00000000,&H64000000,-1,0,0,0,100,100,0,0,1,2,1,2,20,20,30,1"
      },
      {
        name: "[Events]",
        description: "Lista todas as falas temporizadas, especificando a camada visual (Layer), tempos de entrada e saída, o estilo atribuído e o texto da legenda com marcações de efeito.",
        snippet: "[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:01.00,0:00:04.50,Default,,0,0,0,,Texto formatado da legenda aqui"
      }
    ],

    exampleTitle: "Exemplo Prático de Conversão de SRT para ASS: Antes e Depois",
    exampleIntro: "Veja a transformação detalhada de um trecho SRT comum com marcações HTML para o formato ASS correspondente:",
    exampleSrtInput: "1\n00:00:01,250 --> 00:00:04,800\nBem-vindo ao <i>SRTConverters.com</i>!\nAproveite legendas <b>estilizadas</b>.\n\n2\n00:00:05,100 --> 00:00:08,450\n<font color=\"#ffff00\">Atenção:</font> Olhe para a frente!",
    exampleAssOutput: "[Script Info]\nTitle: Converted Subtitles\nScriptType: v4.00+\nPlayResX: 1920\nPlayResY: 1080\n\n[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,48,&H00FFFFFF,&H000000FF,&H00000000,&H64000000,-1,0,0,0,100,100,0,0,1,2,1,2,20,20,30,1\n\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:01.25,0:00:04.80,Default,,0,0,0,,Bem-vindo ao {\\i1}SRTConverters.com{\\i0}!\\NAproveite legendas {\\b1}estilizadas{\\b0}.\nDialogue: 0,0:00:05.10,0:00:08.45,Default,,0,0,0,,{\\c&H00FFFF&}Atenção:{\\c} Olhe para a frente!",
    exampleExplanation: "Observe as três mudanças estruturais cruciais: (1) As marcas de tempo passam de milissegundos com vírgula (00:00:01,250) para centésimos de segundo com ponto (0:00:01.25). (2) Quebras de linha múltiplas são unificadas em uma única linha Dialogue com a tag de quebra forçada do ASS (\\N). (3) Tags HTML convencionais (<i>, <b>, <font color>) são convertidas com perfeição em tags nativas ({\\i1}, {\\b1}, {\\c&H00FFFF&} em ordem BGR).",

    featuresTitle: "Referência de Tags de Estilo Avançadas no ASS",
    featuresSubtitle: "Com o arquivo em formato ASS, você pode incluir comandos de controle em qualquer diálogo usando chaves {\\...}:",
    assFeatures: [
      {
        name: "Tipografia, Tamanho e Formatação",
        tag: "{\\fnNomeFonte\\fsTamanho\\b1\\i1}",
        explanation: "Altera dinamicamente a família tipográfica, o tamanho em pontos, ativação de negrito (\\b1/\\b0) e itálico (\\i1/\\i0) para palavras específicas ou frases completas."
      },
      {
        name: "Cores Hexadecimais em Ordem BGR",
        tag: "{\\c&HBBGGRR&}",
        explanation: "Define a cor do texto no padrão hexadecimal Azul-Verde-Vermelho. Para alterar a cor do contorno externo, utiliza-se o prefixo \\3c&HBBGGRR&."
      },
      {
        name: "Alinhamento na Grade de 9 Pontos",
        tag: "{\\an1} a {\\an9}",
        explanation: "Define a ancoragem do texto com base no teclado numérico: \\an2 para inferior central (padrão), \\an8 para superior central e \\an5 para o centro da tela."
      },
      {
        name: "Posicionamento Fixo por Coordenadas",
        tag: "{\\pos(X, Y)}",
        explanation: "Fixa a legenda em coordenadas exatas de pixel de acordo com a resolução definida em PlayResX e PlayResY no cabeçalho Script Info."
      },
      {
        name: "Transições Suaves de Entrada e Saída (Fade)",
        tag: "{\\fad(tempo_in_ms, tempo_out_ms)}",
        explanation: "Aplica esmaecimento suave no surgimento e desaparecimento da fala; por exemplo, {\\fad(300, 200)} surge em 300 ms e desvanece em 200 ms."
      },
      {
        name: "Temporização Sílaba a Sílaba (Karaokê)",
        tag: "{\\k<duração_cs>}",
        explanation: "Controla o preenchimento de palavras ou sílabas em centésimos de segundo, perfeito para karaokê, aberturas de programas e clipes musicais."
      }
    ],

    ffmpegTitle: "Como Converter SRT para ASS com FFmpeg (Linha de Comando)",
    ffmpegSubtitle: "Para fluxos de trabalho em lote ou scripts de automação em servidores, o FFmpeg oferece conversão integrada de legendas:",
    ffmpegCommand: "ffmpeg -i entrada.srt saida.ass",
    ffmpegExplanation: [
      "Ao rodar esse comando, o FFmpeg interpreta as marcações de tempo e o texto do arquivo SRT, gerando um script ASS funcional baseado no modelo padrão do software.",
      "Para queimar (hardcode) as legendas ASS diretamente na imagem de um arquivo MP4 com todas as fontes e estilos renderizados: ffmpeg -i video.mp4 -vf 'subtitles=saida.ass' -c:a copy video_legendado.mp4",
      "Para conversões cotidianas e instantâneas sem a necessidade de instalar pacotes de terminal ou configurar bibliotecas, nosso conversor online no navegador gera código ASS v4.00+ com total facilidade e segurança."
    ],

    useCasesTitle: "Casos de Uso Mais Comuns para Legendas ASS",
    useCasesSubtitle: "O formato ASS é a escolha predominante em diversos segmentos da produção audiovisual contemporânea:",
    useCasesList: [
      {
        title: "Fansubs de Animes e Séries Internacionais",
        description: "Comunidades de tradução utilizam ASS para traduzir letreiros em tela com a mesma tipografia da animação e atribuir cores distintas aos personagens."
      },
      {
        title: "Vídeos Musicais e Telas de Karaokê",
        description: "Graças às tags de temporização silábica (\\k), o formato ASS comanda animações sincronizadas de letras musicais no YouTube e sistemas de karaokê."
      },
      {
        title: "Conteúdo para Redes Sociais (TikTok, Reels e Shorts)",
        description: "Crie legendas verticais impactantes, com contornos pretos fortes e fontes expressivas que prendem a atenção nos feeds de smartphones."
      },
      {
        title: "Evitar Conflito com Letreiros e GC (Lower-Thirds)",
        description: "Em documentários e reportagens, o ASS possibilita mover legendas temporariamente para o topo quando surgem nomes de entrevistados na base da tela."
      },
      {
        title: "Gravação Definitiva de Legendas com HandBrake",
        description: "Criadores de vídeo convertem SRT para ASS para aprimorar visualmente suas legendas antes de queimá-las em arquivos MP4/MKV de alta taxa de compressão."
      }
    ],

    troubleshootTitle: "Solução de Problemas Comuns na Conversão de SRT para ASS",
    troubleshootSubtitle: "Encontrou alguma inconsistência na conversão ou na exibição das legendas? Confira as soluções mais eficazes:",
    troubleshootTips: [
      {
        issue: "Caracteres acentuados ou cedilhas aparecem corrompidos (ex.: Ã©, Ã£, ?)",
        cause: "O arquivo SRT original foi salvo em uma codificação antiga como ANSI, Windows-1252 ou ISO-8859-1 em vez do padrão UTF-8.",
        solution: "Abra o arquivo SRT no Bloco de Notas ou VS Code e salve-o com a opção de codificação UTF-8, ou cole o texto diretamente no conversor online."
      },
      {
        issue: "Fontes personalizadas não aparecem em outros computadores ou celulares",
        cause: "O formato ASS referencia nomes de fontes instaladas no sistema operacional do espectador. Se a fonte não estiver presente, o player recorrerá ao padrão Arial.",
        solution: "Anexe os arquivos de fonte (.ttf/.otf) como faixas adicionais no contêiner MKV usando o MKVToolNix, ou queime as legendas no vídeo."
      },
      {
        issue: "As cores das legendas aparecem invertidas (ex.: azul é exibido como vermelho)",
        cause: "O padrão ASS utiliza ordenação hexadecimal BGR (Azul-Verde-Vermelho), ao contrário do padrão web e HTML que segue a ordem RGB.",
        solution: "Nosso conversor traduz automaticamente valores RGB comuns para a notação BGR correta do ASS ({\\c&HBBGGRR&}), preservando a fidelidade cromática."
      },
      {
        issue: "O reprodutor exibe comandos de código crus na tela como {\\b1}",
        cause: "Reprodutores antigos ou aplicativos com suporte limitado não possuem um mecanismo de renderização ASS integrado (libass) e interpretam tags como texto.",
        solution: "Utilize reprodutores modernos com renderização completa de ASS, como VLC Media Player, MPV ou PotPlayer."
      }
    ],

    timingTitle: "A Conversão de SRT para ASS Altera a Sincronia?",
    timingText: [
      "Não. A sincronia temporal das legendas é preservada com exatidão absoluta. No padrão SubRip (.srt), os tempos são expressos em horas, minutos, segundos e milissegundos (00:01:23,450). No Advanced SubStation Alpha (.ass), a medição é feita em centésimos de segundo (0:01:23.45).",
      "Nosso algoritmo converte milissegundos dividindo por 10 com arredondamento estrito para duas casas decimais. Dessa forma, cada fala aparece e sai de tela exatamente nos mesmos quadros do vídeo original, sem drift temporal ou perda de sincronismo."
    ],

    aegisubTitle: "Como Editar seu Arquivo ASS no Aegisub",
    aegisubSubtitle: "Com o arquivo .ass em mãos, o Aegisub proporciona controle criativo irrestrito sobre a apresentação visual:",
    aegisubSteps: [
      "Abra o Aegisub, acesse Arquivo > Abrir legendas e carregue seu arquivo .ass recém-convertido.",
      "Vá até Vídeo > Abrir vídeo para importar o arquivo de vídeo e acompanhar visualmente o posicionamento do texto.",
      "Abra o menu Legendas > Gerenciador de estilos para editar o estilo 'Default': modifique família de fontes, tamanho, contornos e cores.",
      "Utilize as ferramentas de diagramação visual do Aegisub (arrastar, rotacionar, recortar) para ajustar legendas diretamente sobre os elementos da imagem.",
      "Salve o arquivo .ass modificado para manter todas as suas melhorias visuais e ajustes de linha do tempo."
    ],

    conclusionTitle: "Converta Suas Legendas de SRT para ASS Agora Mesmo",
    conclusionText: [
      "Pronto para enriquecer suas legendas com fontes profissionais, contornos nítidos e posicionamento personalizado? Utilize nosso conversor gratuito de SRT para ASS acima para uma transformação instantânea e segura diretamente no seu navegador.",
      "Aproveite também nossa suíte completa de ferramentas gratuitas de legendas:",
      "• Conversor de TXT para SRT: Transforme transcrições e blocos de texto puro em arquivos SRT sincronizados.",
      "• Conversor de SRT para Texto: Remova marcações de tempo e números de sequência para extrair transcrições limpas.",
      "• Conversor de SRT para VTT: Adapte legendas SubRip para o formato WebVTT compatível com navegadores e HTML5.",
      "• Conversor de VTT para SRT: Converta legendas WebVTT de volta para o padrão SubRip aceito em softwares de edição."
    ]
  },

  fr: {
    introTitle: "Guide Complet pour Convertir les Sous-Titres SubRip (SRT) en Advanced SubStation Alpha (ASS)",
    introSubtitle: "Découvrez comment transformer des sous-titres SRT basiques en fichiers ASS entièrement stylisés, avec polices sur mesure, effets visuels et positionnement au pixel près pour Aegisub, VLC, MPV, fansubs d'animés et montage vidéo.",
    introText: [
      "Les formats SubRip (.srt) et Advanced SubStation Alpha (.ass) incarnent deux approches très distinctes du sous-titrage vidéo. Le format SRT mise sur le minimalisme le plus total : des numéros d'index séquentiels, des horodatages précis à la milliseconde et de simples lignes de texte brut. Si cette simplicité confère au SRT une compatibilité universelle avec tous les lecteurs du marché, elle restreint considérablement les vidéastes et traducteurs ayant besoin de polices typographiques soignées, de positionnement millimétré, de dialogues colorés par personnage ou d'ombres portées garantissant une lisibilité sans faille.",
      "À l'inverse, le format Advanced SubStation Alpha (spécification SSA v4.00+) s'impose comme la référence absolue pour le sous-titrage riche et graphiquement évolué. En convertissant vos fichiers SRT en ASS, vous débloquez le positionnement exact par coordonnées cartésiennes en pixels, le choix de familles typographiques, les contours biseautés épais, les arrière-plans translucides, les rotations angulaires et la synchronisation syllabique dynamique de karaoké—le tout conservé sous forme de sous-titres flottants (softsubs), sans requérir d'incrustation définitive (hardcode) qui dégraderait la qualité de votre flux vidéo.",
      "Notre convertisseur gratuit de SRT en ASS fonctionne entièrement dans votre navigateur et opère en quelques millisecondes dans le respect total de votre vie privée. Vous trouverez ci-dessous une étude comparative exhaustive, la décomposition de l'architecture d'un fichier ASS, des exemples concrets avant/après, le lexique des balises de style et nos solutions aux difficultés courantes."
    ],

    whatIsTitle: "Qu'est-ce qu'un Convertisseur SRT en ASS ?",
    whatIsText: [
      "Un convertisseur SRT en ASS est un outil de traitement spécialisé qui transforme les fichiers de sous-titres rudimentaires SubRip (.srt) en scripts structurés conformes au standard Advanced SubStation Alpha (.ass). Cette opération dépasse largement le simple renommage de l'extension de fichier : elle reconstruit l'intégralité du script selon un cahier des charges syntaxique strict comprenant des métadonnées de rendu et des gabarits graphiques.",
      "Au cours de la conversion, le moteur analyse chaque bloc de sous-titre SRT, transpose les marqueurs temporels séparés par des virgules (00:01:23,450) vers la notation en centièmes de seconde à point (0:01:23.45), traduit les balises HTML en ligne comme <i>, <b>, <u> et <font color> en balises de substitution natives ASS, et ordonne les dialogues au sein des sections indispensables [Script Info], [V4+ Styles] et [Events]."
    ],

    whyConvertTitle: "Pourquoi Convertir SRT en ASS ? Les Avantages Clés",
    whyConvertSubtitle: "Passer du format SubRip à Advanced SubStation Alpha offre des avantages déterminants pour les créateurs de contenu, traducteurs et monteurs vidéo :",
    whyConvertReasons: [
      {
        title: "Typographie et Polices Personnalisées",
        description: "Appliquez n'importe quelle police installée sur votre système d'exploitation ou encapsulée dans votre conteneur vidéo, en ajustant précisément la taille en pixels et l'interlignage sans dépendre de la police par défaut du lecteur."
      },
      {
        title: "Contours Épais et Ombres Portées à Haute Lisibilité",
        description: "Empêchez les textes blancs de devenir invisibles sur des arrière-plans clairs (neige, ciels brillants, néons) grâce à des contours noirs marqués et des ombres portées paramétrables."
      },
      {
        title: "Positionnement Précis par Coordonnées Pixels",
        description: "Positionnez vos sous-titres sur n'importe quel point cartésien (X, Y) ou sur la grille standard à 9 quadrants, évitant ainsi de masquer les bandeaux d'information (lower-thirds), les noms d'intervenants ou les éléments graphiques cruciaux."
      },
      {
        title: "Code Couleur par Personnage ou Interlocuteur",
        description: "Attribuez des teintes de texte et de contour spécifiques à chaque participant d'un podcast, d'un film ou d'un animé, fluidifiant la compréhension immédiate lors de dialogues dynamiques."
      },
      {
        title: "Sous-Titres Flottants Sans Perte de Qualité Vidéo",
        description: "Préservez l'intégralité de vos choix esthétiques dans des conteneurs MKV ou MP4 sous forme de piste de sous-titres commutable, permettant au spectateur de les activer ou désactiver à loisir sans réencodage vidéo."
      },
      {
        title: "Intégration Native et Complète avec Aegisub",
        description: "Le format ASS constitue la colonne vertébrale du célèbre logiciel Aegisub, vous offrant la possibilité d'ajuster les timings à la forme d'onde audio et de concevoir des animations cinématiques complexes."
      }
    ],

    howToTitle: "Comment Convertir un Fichier SRT en ASS en Ligne (Étape par Étape)",
    howToSubtitle: "La conversion de vos fichiers sur SRTConverters.com est ultra-rapide, sécurisée et ne nécessite aucune installation de logiciel :",
    howToSteps: [
      {
        step: "1",
        title: "Importez ou Collez Vos Sous-Titres SRT",
        description: "Glissez-déposez votre fichier .srt dans l'espace de téléversement, cliquez sur 'Parcourir les fichiers' ou collez directement le texte brut de vos dialogues dans l'éditeur de gauche."
      },
      {
        step: "2",
        title: "Formatage Automatique en Ligne",
        description: "Notre moteur client analyse instantanément les répliques, recalcule les temps en centièmes de seconde, convertit les balises de mise en forme et produit la syntaxe officielle ASS v4.00+ en direct."
      },
      {
        step: "3",
        title: "Copiez ou Téléchargez Votre Fichier .ASS",
        description: "Cliquez sur 'Télécharger le fichier .ASS' pour enregistrer le document sur votre appareil ou sur 'Copier' pour coller le script immédiatement dans Aegisub, VS Code ou votre suite de montage."
      }
    ],

    differenceTitle: "Comparatif Détaillé : Format SRT vs ASS",
    differenceSubtitle: "Comprendre les spécificités techniques entre SubRip et Advanced SubStation Alpha vous aide à sélectionner le bon format selon vos besoins :",
    differenceTable: [
      { feature: "Extension de Fichier", srt: ".srt", ass: ".ass (ou l'ancienne version .ssa)" },
      { feature: "Spécification Technique", srt: "SubRip Text (Texte brut basique)", ass: "Advanced SubStation Alpha v4.00+" },
      { feature: "Précision Temporelle", srt: "Millisecondes (00:01:30,500)", ass: "Centièmes de seconde (0:01:30.50)" },
      { feature: "En-têtes et Métadonnées", srt: "Aucun (les dialogues débutent directement)", ass: "Structurés ([Script Info], [V4+ Styles], [Events])" },
      { feature: "Polices Typographiques", srt: "Non pris en charge (défini par le lecteur)", ass: "Entièrement configurable (famille, corps, espacement)" },
      { feature: "Couleurs et Transparence", srt: "Support limité de <font color>", ass: "Couleurs 32 bits &HAABBGGRR avec gestion du canal alpha" },
      { feature: "Positionnement à l'Écran", srt: "Balises non standard aléatoires", ass: "Grille de 9 positions (\\an1-9) et coordonnées pixels (\\pos)" },
      { feature: "Contours et Ombres", srt: "Non pris en charge", ass: "Épaisseur, couleur de contour, profondeur et flou d'ombre" },
      { feature: "Karaoké et Animations", srt: "Non pris en charge", ass: "Timing syllabique (\\k), fondus (\\fad) et rotations vectorielles" },
      { feature: "Cas d'Usage Recommandés", srt: "Sous-titrage sourds et malentendants, YouTube", ass: "Fansubbing d'animés, clips musicaux, cinéma et réseaux sociaux" }
    ],

    structureTitle: "Anatomie d'un Fichier ASS : Comprendre la Structure Interne",
    structureSubtitle: "Un fichier Advanced SubStation Alpha valide s'articule autour de trois sections obligatoires qui indiquent au lecteur vidéo comment interpréter les sous-titres :",
    structureBlocks: [
      {
        name: "[Script Info]",
        description: "Contient les métadonnées globales : titre de l'œuvre, version du script (v4.00+), mode de retour à la ligne (WrapStyle) et résolution du canevas de référence (PlayResX, PlayResY).",
        snippet: "[Script Info]\nTitle: Converted Subtitles\nScriptType: v4.00+\nWrapStyle: 0\nScaledBorderAndShadow: yes\nPlayResX: 1920\nPlayResY: 1080"
      },
      {
        name: "[V4+ Styles]",
        description: "Définit les gabarits visuels réutilisables : nom du style, police typographique, taille de point, teintes primaires et secondaires, contours, ombres, marges et alignement de référence.",
        snippet: "[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,48,&H00FFFFFF,&H000000FF,&H00000000,&H64000000,-1,0,0,0,100,100,0,0,1,2,1,2,20,20,30,1"
      },
      {
        name: "[Events]",
        description: "Répertorie l'ensemble des répliques minutées, en précisant le calque de superposition (Layer), les temps d'apparition et de disparition, le style lié et le texte enrichi de balises.",
        snippet: "[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:01.00,0:00:04.50,Default,,0,0,0,,Texte du sous-titre stylisé ici"
      }
    ],

    exampleTitle: "Exemple Pratique de Conversion SRT en ASS : Avant et Après",
    exampleIntro: "Observez comment une séquence de sous-titres SRT pourvue de balises classiques se métamorphose en script ASS officiel :",
    exampleSrtInput: "1\n00:00:01,250 --> 00:00:04,800\nBienvenue sur <i>SRTConverters.com</i> !\nProfitez de sous-titres <b>stylisés</b>.\n\n2\n00:00:05,100 --> 00:00:08,450\n<font color=\"#ffff00\">Attention :</font> Regardez devant vous !",
    exampleAssOutput: "[Script Info]\nTitle: Converted Subtitles\nScriptType: v4.00+\nPlayResX: 1920\nPlayResY: 1080\n\n[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,48,&H00FFFFFF,&H000000FF,&H00000000,&H64000000,-1,0,0,0,100,100,0,0,1,2,1,2,20,20,30,1\n\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:01.25,0:00:04.80,Default,,0,0,0,,Bienvenue sur {\\i1}SRTConverters.com{\\i0} !\\NProfitez de sous-titres {\\b1}stylisés{\\b0}.\nDialogue: 0,0:00:05.10,0:00:08.45,Default,,0,0,0,,{\\c&H00FFFF&}Attention :{\\c} Regardez devant vous !",
    exampleExplanation: "Trois transformations fondamentales s'opèrent : (1) Les horodatages passent du format millisecondes à virgule (00:00:01,250) à la notation centièmes à point (0:01:23.25). (2) Les sauts de ligne multiples sont rassemblés en une seule entrée Dialogue grâce au saut de ligne forcé ASS (\\N). (3) Les balises HTML courantes (<i>, <b>, <font color>) sont substituées par des balises natives conformes ({\\i1}, {\\b1}, {\\c&H00FFFF&} en ordre BGR).",

    featuresTitle: "Guide de Référence des Balises de Style Avancées en ASS",
    featuresSubtitle: "Une fois votre sous-titre converti en ASS, vous pouvez enrichir vos répliques en insérant des balises entre accolades {\\...} :",
    assFeatures: [
      {
        name: "Typographie, Corps et Style",
        tag: "{\\fnNomPolice\\fsTaille\\b1\\i1}",
        explanation: "Modifie dynamiquement la famille typographique, la taille en pixels, l'activation du gras (\\b1/\\b0) ou de l'italique (\\i1/\\i0) sur un mot isolé ou une phrase entière."
      },
      {
        name: "Couleurs en Notation Hexadécimale BGR",
        tag: "{\\c&HBBGGRR&}",
        explanation: "Définit la teinte du texte selon l'ordre hexadécimal Bleu-Vert-Rouge. Utilisez \\3c&HBBGGRR& pour modifier la couleur du contour extérieur."
      },
      {
        name: "Alignement sur Grille à 9 Points",
        tag: "{\\an1} à {\\an9}",
        explanation: "Ancre le texte selon la disposition du pavé numérique : \\an2 pour le bas centré (standard), \\an8 pour le haut centré et \\an5 pour le centre exact de l'écran."
      },
      {
        name: "Positionnement Fixe par Coordonnées",
        tag: "{\\pos(X, Y)}",
        explanation: "Place le sous-titre à des coordonnées géométriques précises en fonction de la résolution PlayResX et PlayResY spécifiée dans l'en-tête Script Info."
      },
      {
        name: "Fondus Doux d'Apparition et de Disparition",
        tag: "{\\fad(duree_in_ms, duree_out_ms)}",
        explanation: "Applique une transition fluide de transparence en début et fin d'affichage ; par exemple, {\\fad(300, 200)} apparaît en 300 ms et s'estompe en 200 ms."
      },
      {
        name: "Animation de Karaoké Syllabique",
        tag: "{\\k<duree_cs>}",
        explanation: "Anime le remplissage des syllabes ou mots en centièmes de seconde, indispensable pour les clips musicaux et les chansons de générique."
      }
    ],

    ffmpegTitle: "Comment Convertir SRT en ASS avec FFmpeg (Ligne de Commande)",
    ffmpegSubtitle: "Si vous travaillez sur des serveurs ou automatisez des flux de traitement vidéo, FFmpeg intègre un module de conversion de sous-titres :",
    ffmpegCommand: "ffmpeg -i sous_titres.srt sous_titres.ass",
    ffmpegExplanation: [
      "En exécutant cette commande, FFmpeg interprète les minutages et textes du fichier SRT puis génère un fichier ASS fonctionnel basé sur sa feuille de style par défaut.",
      "Pour incruster (hardcoder ou brûler) définitivement les sous-titres stylisés dans un fichier vidéo MP4 avec application de tous les effets : ffmpeg -i video.mp4 -vf 'subtitles=sous_titres.ass' -c:a copy video_sous_titree.mp4",
      "Pour vos besoins quotidiens sans manipuler de terminal de commande ni configurer d'environnements logiciels lourds, notre outil gratuit en ligne génère un script ASS v4.00+ rigoureusement identique en un clin d'œil."
    ],

    useCasesTitle: "Cas d'Usage Courants pour les Sous-Titres ASS",
    useCasesSubtitle: "Le format ASS s'impose comme la solution de référence dans de nombreux contextes audiovisuels :",
    useCasesList: [
      {
        title: "Fansubbing d'Animés et Séries Étrangères",
        description: "Les collectifs de traduction utilisent l'ASS pour sous-titrer les enseignes graphiques en incrustation et attribuer des couleurs identifiables à chaque personnage."
      },
      {
        title: "Pistes Karaoké et Vidéoclips Musicaux",
        description: "Grâce aux balises de précision syllabique (\\k), l'ASS pilote des animations de paroles rythmées pour YouTube, les salles de karaoké et les concerts."
      },
      {
        title: "Vidéos Courtes pour Réseaux Sociaux (TikTok, Reels, Shorts)",
        description: "Concevez des textes percutants avec de larges contours noirs et des polices grasses très lisibles sur les écrans verticaux de smartphones."
      },
      {
        title: "Éviter les Superpositions avec Bandeaux et Incrustations",
        description: "Dans les documentaires et reportages, l'ASS permet de déplacer les sous-titres en haut de l'image lorsque des synthés ou noms d'invités apparaissent au bas de l'écran."
      },
      {
        title: "Incrustation Définitive via HandBrake",
        description: "De nombreux monteurs convertissent leurs SRT en ASS afin d'embellir la typographie avant de la graver de façon irréversible dans leurs vidéos MP4/MKV."
      }
    ],

    troubleshootTitle: "Résolution des Problèmes Fréquents de Conversion SRT en ASS",
    troubleshootSubtitle: "Vous rencontrez une anomalie lors de la conversion ou de la lecture ? Voici les explications techniques et leurs solutions :",
    troubleshootTips: [
      {
        issue: "Les accents ou caractères spéciaux s'affichent mal (ex. Ã©, Ã , ?)",
        cause: "Le fichier SRT source a été sauvegardé avec un encodage obsolète de type ANSI, Windows-1252 ou ISO-8859-1 au lieu de l'UTF-8 standard.",
        solution: "Ouvrez votre fichier SRT dans le Bloc-notes ou VS Code et réenregistrez-le avec l'encodage UTF-8, ou collez directement le texte dans notre convertisseur."
      },
      {
        issue: "Les polices personnalisées ne s'affichent pas sur d'autres ordinateurs",
        cause: "Le fichier ASS appelle des typographies installées sur le système du spectateur. Si la police est introuvable, le lecteur bascule par défaut sur Arial.",
        solution: "Attachez les polices (.ttf/.otf) en pièces jointes dans le conteneur MKV grâce à MKVToolNix, ou incrustez (gravez) les sous-titres dans la vidéo."
      },
      {
        issue: "Les couleurs s'affichent inversées (ex. le bleu apparaît en rouge)",
        cause: "Le standard ASS emploie la notation hexadécimale en ordre BGR (Bleu-Vert-Rouge), contrairement au web et HTML qui privilégient le format RGB.",
        solution: "Notre convertisseur transcrit automatiquement les codes RGB vers la syntaxe BGR requise par l'ASS ({\\c&HBBGGRR&}) pour garantir des teintes fidèles."
      },
      {
        issue: "Le lecteur multimédia affiche les codes bruts comme {\\b1} à l'écran",
        cause: "Certains lecteurs basiques ou anciens ne possèdent pas de moteur de rendu ASS (libass) et interprètent les commandes stylistiques comme du texte ordinaire.",
        solution: "Privilégiez des lecteurs multimédias modernes et complets comme VLC Media Player, MPV ou PotPlayer."
      }
    ],

    timingTitle: "La Conversion de SRT en ASS Modifie-t-elle la Synchronisation ?",
    timingText: [
      "Non. La synchronisation temporelle de vos sous-titres est préservée avec une rigueur absolue. Dans un fichier SubRip (.srt), les minutages s'expriment en heures, minutes, secondes et millisecondes (00:01:23,450). Dans l'Advanced SubStation Alpha (.ass), ils sont comptabilisés en centièmes de seconde (0:01:23.45).",
      "Notre algorithme effectue une division exacte des millisecondes par 10 assortie d'un arrondi rigoureux à deux décimales. Chaque réplique apparaît et disparaît exactement sur les mêmes images vidéo que dans le fichier d'origine, garantissant un calage parfait."
    ],

    aegisubTitle: "Comment Éditer Votre Fichier ASS dans Aegisub",
    aegisubSubtitle: "Une fois votre fichier .ass téléchargé, Aegisub vous permet de façonner librement la mise en scène graphique :",
    aegisubSteps: [
      "Lancez Aegisub, cliquez sur Fichier > Ouvrir les sous-titres et sélectionnez votre fichier .ass téléchargé.",
      "Accédez à Vidéo > Ouvrir la vidéo pour importer votre média et visualiser l'agencement spatial des dialogues en temps réel.",
      "Rendez-vous dans Sous-titres > Gestionnaire de styles pour affiner le style 'Default' : famille de police, taille, contours et ombres.",
      "Servez-vous des outils de manipulation visuelle d'Aegisub (déplacement, rotation, masque vectoriel) pour caler vos textes directement sur des éléments du décor.",
      "Enregistrez votre fichier .ass pour pérenniser vos améliorations stylistiques et ajustements de synchronisation."
    ],

    conclusionTitle: "Convertissez Vos Sous-Titres SRT en ASS Dès Maintenant",
    conclusionText: [
      "Prêt à donner du cachet à vos sous-titres grâce à des polices remarquables, des contours contrastés et un placement géométrique sur mesure ? Utilisez notre convertisseur gratuit ci-dessus pour un traitement instantané et privé directement dans votre navigateur.",
      "Explorez également l'ensemble de notre gamme d'outils de sous-titrage gratuits :",
      "• Convertisseur TXT en SRT : Transformez vos retranscriptions et notes textuelles en fichiers de sous-titres SRT synchronisés.",
      "• Convertisseur SRT en Texte : Épurez vos fichiers des codes temporels et numérotations pour obtenir une transcription fluide.",
      "• Convertisseur SRT en VTT : Préparez vos sous-titres SubRip pour l'intégration web et le standard vidéo HTML5.",
      "• Convertisseur VTT en SRT : Reconvertissez vos sous-titres WebVTT en format SubRip pour vos logiciels de montage favoris."
    ]
  },

  de: {
    introTitle: "Komplette Anleitung: SubRip (SRT) in Advanced SubStation Alpha (ASS) umwandeln",
    introSubtitle: "Erfahren Sie, wie Sie einfache SRT-Dateien in stylische, präzise positionierte ASS-Untertitel für Aegisub, VLC, MPV, Anime-Fansubs und professionellen Videoschnitt konvertieren.",
    introText: [
      "Die Formate SubRip (.srt) und Advanced SubStation Alpha (.ass) basieren auf zwei grundlegend verschiedenen Konzepten digitaler Untertitelung. SRT legt den Fokus auf maximale Schlichtheit: fortlaufende Zählernummern, Zeitstempel im Millisekundenbereich und unformatierter Klartext. Auch wenn diese Reduktion für eine nahezu universelle Kompatibilität auf sämtlichen Geräten sorgt, stößt sie schnell an Grenzen, sobald Videoproduzenten individuelle Schriftarten, genaue Bildkoordinaten, farbliche Sprecherunterscheidung oder kontrastreiche Konturen für helle Szenen benötigen.",
      "Demgegenüber gilt Advanced SubStation Alpha (Spezifikation SSA v4.00+) als unangefochtener Goldstandard für typografisch anspruchsvolle und visuell gestaltete Untertitel. Durch die Konvertierung von SRT nach ASS erschließen Sie pixelgenaue Bildschirmplatzierung, benutzerdefinierte Schriftfamilien, dicke Randkonturen, transluzente Textboxen, Drehwinkel und dynamisches Silben-Karaoke—alles vollständig als schaltbare Untertitelspur (Softsub) erhalten, ohne dass Sie das Video aufwendig und mit Qualitätsverlust neu encodieren müssen.",
      "Unser kostenloser Online-Konverter führt die Umwandlung direkt in Ihrem Browser in Millisekunden aus—mit 100%iger Privatsphäre ohne Server-Uploads. Nachfolgend bieten wir Ihnen einen tiefgehenden technischen Vergleich, die Analyse des inneren Dateiaufbaus, Vorher-Nachher-Codebeispiele, eine Übersicht der Stilbefehle sowie Lösungen für typische Probleme."
    ],

    whatIsTitle: "Was ist ein SRT-zu-ASS-Konverter?",
    whatIsText: [
      "Ein SRT-zu-ASS-Konverter ist ein spezialisiertes Dienstprogramm, das SubRip-Untertiteldateien (.srt) in die Skriptarchitektur von Advanced SubStation Alpha (.ass) überführt. Dabei handelt es sich um weit mehr als eine Umbenennung der Dateiendung: Das Werkzeug baut das Untertitelskript mit standardisierten Konfigurationsblöcken und Rendering-Befehlen komplett neu auf.",
      "Während des Konvertierungsvorgangs analysiert die Engine jeden Untertitelblock, wandelt die kommagetrennten Millisekunden-Zeitstempel (00:01:23,450) in die punktgetrennte Hundertstelsekunden-Notation (0:01:23.45) um, übersetzt Inline-HTML-Tags wie <i>, <b>, <u> und <font color> in native ASS-Steuerzeichen und gliedert die Dialoge in die Pflichtsektionen [Script Info], [V4+ Styles] und [Events] ein."
    ],

    whyConvertTitle: "Warum SRT in ASS konvertieren? Die wichtigsten Vorteile",
    whyConvertSubtitle: "Der Wechsel von SubRip zu Advanced SubStation Alpha eröffnet Videoproduzenten, Übersetzern und Editoren entscheidende Gestaltungsmöglichkeiten:",
    whyConvertReasons: [
      {
        title: "Individuelle Schriftarten und Typografie",
        description: "Nutzen Sie jede beliebige Schriftart Ihres Betriebssystems (oder binden Sie Schriften in MKV-Dateien ein), definieren Sie exakte Schriftgrößen und Buchstabenabstände unabhängig von den Voreinstellungen des Players."
      },
      {
        title: "Deutliche Konturen und Schlagschatten",
        description: "Verhindern Sie, dass weiße Untertitel auf hellem Bildhintergrund wie Schnee oder grellem Sonnenlicht verschwimmen, indem Sie dicke schwarze Umrandungen und anpassbare Schatten aktivieren."
      },
      {
        title: "Exakte Pixel-Koordinaten-Positionierung",
        description: "Platzieren Sie Untertitel auf festen Koordinaten (X, Y) oder im 9-Punkte-Raster, damit Bauchbinden, Namenseinblendungen (Lower-Thirds) oder wichtige Bilddetails niemals verdeckt werden."
      },
      {
        title: "Farbcodierung für unterschiedliche Sprecher",
        description: "Weisen Sie verschiedenen Charakteren in Podcasts, Filmen oder Serien eigene Schrift- und Konturfarben zu, um schnellen Dialogen mühelos folgen zu können."
      },
      {
        title: "Verlustfreie Soft-Untertitel ohne Neucodierung",
        description: "Behalten Sie alle typografischen Highlights in MKV- oder MP4-Dateien als zuschaltbare Untertitelspur, sodass Zuschauer die Untertitel flexibel aktivieren oder deaktivieren können."
      },
      {
        title: "Nahtlose Integration in Aegisub",
        description: "ASS ist das native Speicherformat von Aegisub. Sie können die Datei direkt öffnen, Dialoge an der Tonwellenform ausrichten und cineastische Karaoke-Effekte komponieren."
      }
    ],

    howToTitle: "SRT online in ASS umwandeln: Schritt-für-Schritt-Anleitung",
    howToSubtitle: "Die Konvertierung auf SRTConverters.com erfolgt blitzschnell, sicher und ohne Programminstallation:",
    howToSteps: [
      {
        step: "1",
        title: "SRT-Datei hochladen oder einfügen",
        description: "Ziehen Sie Ihre .srt-Datei per Drag & Drop in das Feld, klicken Sie auf 'Dateien durchsuchen' oder fügen Sie den Untertiteltext direkt in das linke Eingabefeld ein."
      },
      {
        step: "2",
        title: "Automatische Formatierung im Browser",
        description: "Unsere clientseitige Engine wandelt Zeitstempel in Hundertstelsekunden um, übersetzt Formatierungs-Tags und erzeugt in Echtzeit ein valides ASS v4.00+ Skript."
      },
      {
        step: "3",
        title: "ASS-Datei kopieren oder herunterladen",
        description: "Klicken Sie auf 'Download .ASS', um die Datei lokal abzuspeichern, oder kopieren Sie den Skriptcode direkt in Aegisub, VS Code oder Ihr Schnittprogramm."
      }
    ],

    differenceTitle: "Detaillierter Formatvergleich: SRT vs. ASS",
    differenceSubtitle: "Ein fundierter Überblick über die technischen Unterschiede zwischen SubRip und Advanced SubStation Alpha hilft Ihnen bei der Wahl des optimalen Formats:",
    differenceTable: [
      { feature: "Dateiendung", srt: ".srt", ass: ".ass (oder das ältere .ssa)" },
      { feature: "Spezifikation", srt: "SubRip Text (reiner Text)", ass: "Advanced SubStation Alpha v4.00+" },
      { feature: "Zeitpräzision", srt: "Millisekunden (00:01:30,500)", ass: "Hundertstelsekunden (0:01:30.50)" },
      { feature: "Header-Struktur", srt: "Keine (Dialoge starten direkt)", ass: "Strukturiert ([Script Info], [V4+ Styles], [Events])" },
      { feature: "Eigene Schriftarten", srt: "Nicht unterstützt (Player-Standard)", ass: "Vollständig konfigurierbar (Schriftfamilie, Größe, Skalierung)" },
      { feature: "Farben & Transparenz", srt: "Eingeschränkt via <font color>", ass: "Volle 32-Bit-Farben (&HAABBGGRR) mit Alphakanal" },
      { feature: "Bildschirmpositionierung", srt: "Instabile Nischen-Tags", ass: "9-Punkte-Raster (\\an1-9) und Pixelkoordinaten (\\pos)" },
      { feature: "Umrandungen & Schatten", srt: "Nicht unterstützt", ass: "Konturdicke, Schattenabstand und Unschärfe frei einstellbar" },
      { feature: "Karaoke- & Bewegungseffekte", srt: "Nicht unterstützt", ass: "Silben-Timing (\\k), Überblendungen (\\fad), Rotationen" },
      { feature: "Optimale Anwendungsfälle", srt: "Einfache YouTube-Untertitel, Web-Streams", ass: "Anime-Fansubbing, Musikvideos, Filme und Kurzvideos" }
    ],

    structureTitle: "Aufbau einer ASS-Datei: Die Sektionen verstehen",
    structureSubtitle: "Eine valide Advanced SubStation Alpha-Datei setzt sich aus drei Pflichtabschnitten zusammen, die dem Videoplayer die genaue Darstellung vorgeben:",
    structureBlocks: [
      {
        name: "[Script Info]",
        description: "Enthält die Metadaten des Skripts wie Titel, Version (v4.00+), Umbruchverhalten (WrapStyle) sowie die zugrunde liegende Videoauflösung (PlayResX, PlayResY).",
        snippet: "[Script Info]\nTitle: Converted Subtitles\nScriptType: v4.00+\nWrapStyle: 0\nScaledBorderAndShadow: yes\nPlayResX: 1920\nPlayResY: 1080"
      },
      {
        name: "[V4+ Styles]",
        description: "Definiert wiederverwendbare Designvorlagen: Schriftfamilie, Schriftgröße, Primär- und Sekundärfarben, Konturstärke, Schattenabstand, Ränder und Ausrichtung.",
        snippet: "[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,48,&H00FFFFFF,&H000000FF,&H00000000,&H64000000,-1,0,0,0,100,100,0,0,1,2,1,2,20,20,30,1"
      },
      {
        name: "[Events]",
        description: "Führt sämtliche getimten Dialogzeilen auf und verknüpft sie mit der jeweiligen visuellen Ebene (Layer), Start- und Endzeiten, dem Stil und Stil-Tags.",
        snippet: "[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:01.00,0:00:04.50,Default,,0,0,0,,Hier steht der formatierte Dialogtext"
      }
    ],

    exampleTitle: "Praxisbeispiel: SRT zu ASS vor und nach der Umwandlung",
    exampleIntro: "Hier sehen Sie, wie ein formatierter SRT-Block in standardkonforme ASS-Syntax transformiert wird:",
    exampleSrtInput: "1\n00:00:01,250 --> 00:00:04,800\nWillkommen bei <i>SRTConverters.com</i>!\nGenießen Sie <b>gestaltete</b> Untertitel.\n\n2\n00:00:05,100 --> 00:00:08,450\n<font color=\"#ffff00\">Achtung:</font> Vorsicht voraus!",
    exampleAssOutput: "[Script Info]\nTitle: Converted Subtitles\nScriptType: v4.00+\nPlayResX: 1920\nPlayResY: 1080\n\n[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,48,&H00FFFFFF,&H000000FF,&H00000000,&H64000000,-1,0,0,0,100,100,0,0,1,2,1,2,20,20,30,1\n\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:01.25,0:00:04.80,Default,,0,0,0,,Willkommen bei {\\i1}SRTConverters.com{\\i0}!\\NGenießen Sie {\\b1}gestaltete{\\b0} Untertitel.\nDialogue: 0,0:00:05.10,0:00:08.45,Default,,0,0,0,,{\\c&H00FFFF&}Achtung:{\\c} Vorsicht voraus!",
    exampleExplanation: "Drei zentrale Anpassungen finden statt: (1) Zeitstempel wechseln von kommagetrennten Millisekunden (00:00:01,250) zu punktgetrennten Hundertstelsekunden (0:01:01.25). (2) Mehrzeilige SRT-Einträge werden über das erzwungene ASS-Zeilenumbruch-Tag (\\N) zu einer einzelnen Dialogue-Zeile zusammengefügt. (3) HTML-Formatierungen (<i>, <b>, <font color>) werden in native ASS-Steuerzeichen übersetzt ({\\i1}, {\\b1}, {\\c&H00FFFF&} in BGR-Reihenfolge).",

    featuresTitle: "Referenz der erweiterten ASS-Formatierungsbefehle",
    featuresSubtitle: "Nach der Umwandlung in ASS können Sie jede Dialogzeile mit Stilbefehlen in geschweiften Klammern {\\...} verfeinern:",
    assFeatures: [
      {
        name: "Schriftart, Schriftgröße & Schriftschnitt",
        tag: "{\\fnSchriftname\\fsGröße\\b1\\i1}",
        explanation: "Ändert die Schriftfamilie, Schriftgröße in Pixeln sowie Fett- (\\b1/\\b0) oder Kursivschrift (\\i1/\\i0) für einzelne Worte oder ganze Zeilen."
      },
      {
        name: "Farbsteuerung in hexadezimaler BGR-Reihenfolge",
        tag: "{\\c&HBBGGRR&}",
        explanation: "Setzt die Hauptschriftfarbe im Blau-Grün-Rot-Hexadezimalsystem. Mit dem Befehl \\3c&HBBGGRR& passen Sie die Konturfarbe des Randes an."
      },
      {
        name: "Ausrichtung im 9-Punkte-Raster",
        tag: "{\\an1} bis {\\an9}",
        explanation: "Verankert den Text analog zum Ziffernblock: \\an2 für unten zentriert (Standard), \\an8 für oben zentriert und \\an5 für die exakte Bildschirmmitte."
      },
      {
        name: "Feste Pixel-Koordinaten-Positionierung",
        tag: "{\\pos(X, Y)}",
        explanation: "Fixiert den Text an exakten Bildschirmkoordinaten bezogen auf die im Header definierte PlayResX- und PlayResY-Auflösung."
      },
      {
        name: "Weiche Ein- und Ausblendungen (Fade)",
        tag: "{\\fad(fade_in_ms, fade_out_ms)}",
        explanation: "Erzeugt weiche Alpha-Transparenzübergänge beim Erscheinen und Verschwinden; {\\fad(300, 200)} blendet in 300 ms ein und in 200 ms aus."
      },
      {
        name: "Silbengenaues Karaoke-Timing",
        tag: "{\\k<dauer_cs>}",
        explanation: "Färbt Worte oder Silben zentisekundengenau ein, ideal für Musikvideos, Songtexte und Anime-Intros."
      }
    ],

    ffmpegTitle: "SRT in ASS mit FFmpeg konvertieren (Kommandozeile)",
    ffmpegSubtitle: "Für automatisierte Workflows auf Servern oder im Terminal bietet FFmpeg eine native Untertitelkonvertierung:",
    ffmpegCommand: "ffmpeg -i eingabe.srt ausgabe.ass",
    ffmpegExplanation: [
      "Dieser Befehl liest die Zeitstempel und Texte der SRT-Datei ein und generiert eine funktionale ASS-Datei mit den Standard-Stileinstellungen von FFmpeg.",
      "Möchten Sie die gestalteten ASS-Untertitel direkt fest in ein MP4-Video einbrennen (Hardcoding): ffmpeg -i video.mp4 -vf 'subtitles=ausgabe.ass' -c:a copy video_eingebrannt.mp4",
      "Für schnelle Konvertierungen im Alltag ohne Terminal-Einrichtung oder Software-Abhängigkeiten liefert unser kostenloser Online-Konverter identischen ASS v4.00+ Code direkt in Ihrem Browser."
    ],

    useCasesTitle: "Typische Einsatzbereiche für ASS-Untertitel",
    useCasesSubtitle: "Das ASS-Format ist in zahlreichen kreativen und professionellen Bereichen der Standard:",
    useCasesList: [
      {
        title: "Anime- und Serien-Fansubbing",
        description: "Übersetzer-Communitys nutzen ASS, um Schriftzüge im Bildhintergrund nahtlos nachzubilden und jedem Charakter eine eigene Sprecherfarbe zuzuweisen."
      },
      {
        title: "Musikvideos und Karaoke-Texte",
        description: "Mithilfe der Silbentaktung (\\k) steuert ASS animierte Textanzeigen auf YouTube, in Karaoke-Bars und bei Konzertübertragungen."
      },
      {
        title: "Social-Media-Kurzvideos für TikTok & Reels",
        description: "Erstellen Sie aufmerksamkeitsstarke Untertitel mit dicken schwarzen Konturen und ausdrucksstarken Schriften, die auf Smartphones sofort ins Auge fallen."
      },
      {
        title: "Vermeidung von Überlagerungen mit Bauchbinden",
        description: "In Dokumentationen ermöglicht ASS das vorübergehende Hochschieben der Untertitel, wenn unten Einblendungen oder Namensschilder erscheinen."
      },
      {
        title: "Festes Einbrennen via HandBrake",
        description: "Videocreator wandeln SRT in ASS um, um Typografie und Ränder vor dem endgültigen Einbrennen in stark komprimierte MP4-Dateien zu perfektionieren."
      }
    ],

    troubleshootTitle: "Fehlerbehebung bei der SRT-zu-ASS-Konvertierung",
    troubleshootSubtitle: "Treten bei der Umwandlung oder Anzeige Unstimmigkeiten auf? Hier finden Sie häufige Ursachen und wirksame Lösungen:",
    troubleshootTips: [
      {
        issue: "Umlaute oder Sonderzeichen werden fehlerhaft dargestellt (z. B. Ã¤, Ã¶, ?)",
        cause: "Die ursprüngliche SRT-Datei wurde in einer veralteten ANSI-, Windows-1252- oder ISO-8859-1-Kodierung anstelle von UTF-8 gespeichert.",
        solution: "Öffnen Sie die SRT-Datei im Editor oder VS Code und speichern Sie sie mit der Kodierung UTF-8 ab, oder fügen Sie den Text direkt in unseren Konverter ein."
      },
      {
        issue: "Eigene Schriftarten werden auf anderen Computern nicht angezeigt",
        cause: "ASS greift auf lokal installierte Systemschriften zu. Fehlt die Schrift beim Zuschauer, weicht der Videoplayer automatisch auf Arial aus.",
        solution: "Binden Sie die Schriftdateien (.ttf/.otf) als Dateianhang mit MKVToolNix in die MKV-Datei ein oder brennen Sie die Untertitel fest ins Bild ein."
      },
      {
        issue: "Farben wirken vertauscht oder invertiert (z. B. Blau wird als Rot dargestellt)",
        cause: "ASS verwendet die Farbreihenfolge BGR (Blau-Grün-Rot), während Webanwendungen und HTML den RGB-Standard nutzen.",
        solution: "Unser Tool konvertiert HTML-Farbcodes automatisch in das korrekte ASS-BGR-Format ({\\c&HBBGGRR&}), damit Farben exakt stimmen."
      },
      {
        issue: "Der Videoplayer zeigt rohe Befehlstags wie {\\b1} im Bild an",
        cause: "Einfache oder ältere Medienplayer besitzen keine Rendering-Engine für ASS (libass) und stellen Formatierungsbefehle als normalen Text dar.",
        solution: "Nutzen Sie moderne Medienplayer mit voller ASS-Unterstützung wie VLC Media Player, MPV oder PotPlayer."
      }
    ],

    timingTitle: "Verändert die Konvertierung das Untertitel-Timing?",
    timingText: [
      "Nein. Das zeitliche Zusammenspiel bleibt vollständig gewahrt. In SubRip (.srt) erfolgt die Zeitmessung in Stunden, Minuten, Sekunden und Millisekunden (00:01:23,450). In Advanced SubStation Alpha (.ass) werden Hundertstelsekunden verwendet (0:01:23.45).",
      "Unser Algorithmus teilt die Millisekunden exakt durch 10 mit kaufmännischer Rundung auf zwei Nachkommastellen. Dadurch erscheinen und verschwinden Ihre Untertitel exakt auf demselben Videoframe wie in der Originaldatei."
    ],

    aegisubTitle: "So bearbeiten Sie Ihre ASS-Datei in Aegisub weiter",
    aegisubSubtitle: "Sobald Ihre Datei im .ass-Format vorliegt, haben Sie in Aegisub die volle kreative Kontrolle über das visuelle Erscheinungsbild:",
    aegisubSteps: [
      "Starten Sie Aegisub, wählen Sie Datei > Untertitel öffnen und laden Sie Ihre konvertierte .ass-Datei.",
      "Öffnen Sie unter Video > Video öffnen Ihre Videodatei, um die Platzierung der Untertitel bildgenau im Vorschaufenster zu überprüfen.",
      "Navigieren Sie zu Untertitel > Stil-Manager, um den Standardstil 'Default' anzupassen: Schriftart, Schriftgröße, Konturstärke und Farben.",
      "Nutzen Sie die visuellen Satzwerkzeuge in Aegisub (Verschieben, Drehen, Vektormasken), um Schriftzüge exakt im Bild auszurichten.",
      "Speichern Sie die aktualisierte .ass-Datei ab, um sämtliche Gestaltungsanpassungen dauerhaft zu sichern."
    ],

    conclusionTitle: "Konvertieren Sie Ihre Untertitel jetzt von SRT in ASS",
    conclusionText: [
      "Möchten Sie Ihre Untertitel mit ansprechenden Schriften, gestochen scharfen Konturen und millimetergenauer Positionierung aufwerten? Nutzen Sie unseren kostenlosen Browser-Konverter oben für eine sofortige und sichere Umwandlung.",
      "Entdecken Sie auch unsere weiteren kostenlosen Untertitel-Werkzeuge:",
      "• TXT-zu-SRT-Konverter: Erstellen Sie aus Rohabschriften und Textnotizen synchronisierte SRT-Untertitel.",
      "• SRT-zu-Text-Konverter: Entfernen Sie Zeitstempel und Ziffern für saubere, lesbare Lesetexte.",
      "• SRT-zu-VTT-Konverter: Konvertieren Sie SubRip in das moderne WebVTT-Format für HTML5-Webvideoplayer.",
      "• VTT-zu-SRT-Konverter: Machen Sie WebVTT-Dateien kompatibel mit Desktop-Schnittprogrammen."
    ]
  },

  id: {
    introTitle: "Panduan Lengkap Konversi Subtitle SubRip (SRT) ke Advanced SubStation Alpha (ASS)",
    introSubtitle: "Pelajari cara mengubah subtitle SRT biasa menjadi file ASS dengan format gaya font kustom, warna, efek visual, dan koordinat posisi presisi untuk Aegisub, VLC, MPV, fansub anime, dan editing video.",
    introText: [
      "Format SubRip (.srt) dan Advanced SubStation Alpha (.ass) mewakili dua filosofi yang sangat berbeda dalam dunia takarir (captioning) video digital. SRT dirancang dengan pendekatan minimalis: nomor urut sederhana, stempel waktu hingga milidetik, dan teks biasa tanpa pemformatan grafis. Walaupun kesederhanaan ini membuat SRT didukung oleh hampir semua media player di dunia, format ini sangat membatasi kreator yang membutuhkan estetika tipografi, penempatan koordinat presisi, warna unik untuk tiap pembicara, atau garis tepi tebal agar teks tetap terbaca di latar terang.",
      "Sebaliknya, Advanced SubStation Alpha (spesifikasi SSA v4.00+) merupakan standar utama untuk subtitle bergaya visual tinggi. Dengan mengonversi file SRT ke ASS, Anda membuka kemampuan pengaturan posisi piksel per piksel, pemilihan keluarga font khusus, garis luar (outline stroke) tebal, bayangan jatuh, latar transparan, serta animasi lirik karaoke per suku kata—semuanya tersimpan rapi sebagai subtitle lunak (softsub) tanpa mengharuskan Anda me-render ulang (hardcode) video utama yang memakan waktu.",
      "Konverter online gratis kami memproses file subtitle langsung di browser Anda dalam hitungan milidetik dengan jaminan privasi 100% di sisi klien. Di bawah ini, Anda akan menemukan perbandingan mendalam, bedah struktur kode file ASS, contoh nyata sebelum dan sesudah, daftar tag gaya visual, serta panduan solusi untuk kendala yang kerap dihadapi."
    ],

    whatIsTitle: "Apa Itu Konverter SRT ke ASS?",
    whatIsText: [
      "Konverter SRT ke ASS adalah utilitas khusus yang menerjemahkan berkas subtitle SubRip (.srt) ke dalam skrip terstruktur Advanced SubStation Alpha (.ass). Proses ini bukan sekadar mengganti ekstensi nama berkas dari .srt menjadi .ass, melainkan menyusun ulang seluruh skrip sesuai aturan sintaksis resmi ASS lengkap dengan direktif rendering layar.",
      "Saat proses berlangsung, sistem membaca setiap blok subtitle SRT, mengonversi stempel waktu berbasis koma milidetik (00:01:23,450) menjadi format centisecond berbasis titik (0:01:23.45), menerjemahkan tag pemformatan HTML (seperti <i>, <b>, <u>, dan <font color>) menjadi tag override gaya ASS, lalu mengemas dialog ke dalam bagian wajib [Script Info], [V4+ Styles], dan [Events]."
    ],

    whyConvertTitle: "Mengapa Mengonversi SRT ke ASS? Keunggulan Utama",
    whyConvertSubtitle: "Beralih dari SubRip ke Advanced SubStation Alpha menghadirkan keunggulan esensial bagi pembuat konten, penerjemah, dan editor video:",
    whyConvertReasons: [
      {
        title: "Tipografi dan Pilihan Font Kustom",
        description: "Gunakan jenis huruf apa pun yang terpasang di sistem operasi atau disematkan ke dalam kontainer video, lengkap dengan penyesuaian ukuran teks dan spasi antarhuruf tanpa bergantung pada font bawaan pemutar video."
      },
      {
        title: "Garis Luar Tebal dan Efek Bayangan Jelas",
        description: "Cegah subtitle putih lenyap atau sulit dibaca di atas adegan terang (seperti langit siang, salju, atau lampu panggung) dengan menambahkan outline hitam pekat dan bayangan jatuh berkedalaman tinggi."
      },
      {
        title: "Posisi Layar Akurat dengan Koordinat Piksel",
        description: "Tempatkan dialog di koordinat (X, Y) mana pun pada layar atau menggunakan kisi 9 titik, sehingga subtitle tidak menutupi nama narasumber (lower-thirds) atau grafis penting video."
      },
      {
        title: "Pewarnaan Teks Berbeda untuk Tiap Pembicara",
        description: "Terapkan warna teks dan garis tepi berbeda untuk setiap tokoh dalam siniar (podcast), film, atau serial anime, mempermudah penonton mengenali siapa yang sedang berbicara secara instan."
      },
      {
        title: "Subtitle Lunak Tanpa Menurunkan Kualitas Video",
        description: "Pertahankan keindahan visual teks dalam berkas MKV atau MP4 sebagai trek terpisah (softsub), memungkinkan pengguna mengaktifkan atau mematikannya tanpa perlu re-encode video."
      },
      {
        title: "Integrasi Total dan Sempurna dengan Aegisub",
        description: "ASS adalah format kerja bawaan aplikasi penyuntingan subtitle Aegisub, memungkinkan Anda menyelaraskan teks langsung dengan gelombang audio dan merancang efek karaoke spektakuler."
      }
    ],

    howToTitle: "Cara Konversi SRT ke ASS Online (Langkah demi Langkah)",
    howToSubtitle: "Mengonversi subtitle di SRTConverters.com berlangsung cepat, aman, dan tanpa perlu menginstal aplikasi apa pun:",
    howToSteps: [
      {
        step: "1",
        title: "Unggah atau Tempel Teks Subtitle SRT",
        description: "Tarik dan lepaskan file .srt Anda ke kotak unggah, klik 'Pilih File', atau tempel langsung teks subtitle mentah ke editor di sisi kiri."
      },
      {
        step: "2",
        title: "Pemformatan Otomatis di Browser",
        description: "Sistem secara instan menganalisis dialog, mengonversi waktu ke format centisecond, menyesuaikan tag gaya, dan menghasilkan struktur resmi ASS v4.00+ secara langsung."
      },
      {
        step: "3",
        title: "Salin atau Unduh File .ASS Anda",
        description: "Klik 'Unduh .ASS' untuk menyimpan berkas ke perangkat Anda, atau klik 'Salin' untuk menempelkan skrip langsung ke Aegisub, VS Code, atau aplikasi video editing Anda."
      }
    ],

    differenceTitle: "Perbandingan Mendalam: SRT vs ASS",
    differenceSubtitle: "Memahami perbedaan teknis antara SubRip dan Advanced SubStation Alpha membantu Anda memilih format yang paling sesuai dengan proyek Anda:",
    differenceTable: [
      { feature: "Ekstensi Berkas", srt: ".srt", ass: ".ass (atau .ssa lawas)" },
      { feature: "Spesifikasi Format", srt: "SubRip Text (Teks Polos Sederhana)", ass: "Advanced SubStation Alpha v4.00+" },
      { feature: "Presisi Waktu", srt: "Milidetik (00:01:30,500)", ass: "Centisecond (0:01:30.50)" },
      { feature: "Struktur Header", srt: "Tidak ada (langsung baris dialog)", ass: "Terstruktur ([Script Info], [V4+ Styles], [Events])" },
      { feature: "Font Kustom", srt: "Tidak didukung (standar pemutar)", ass: "Dukungan penuh (nama font, ukuran, spasi)" },
      { feature: "Warna & Transparansi", srt: "Batas pada <font color>", ass: "Warna 32-bit &HAABBGGRR dengan saluran alfa penuh" },
      { feature: "Posisi di Layar", srt: "Sangat terbatas dan tidak baku", ass: "Perataan 9 titik (\\an1-9) & koordinat piksel (\\pos)" },
      { feature: "Garis Tepi & Bayangan", srt: "Tidak didukung", ass: "Ketebalan garis, bayangan, dan blur dapat diatur" },
      { feature: "Efek Karaoke & Transisi", srt: "Tidak didukung", ass: "Timing suku kata (\\k), fade in/out (\\fad), rotasi" },
      { feature: "Penggunaan Ideal", srt: "Takarir tertutup YouTube, web umum", ass: "Fansub anime, klip musik, film estetis, video vertikal" }
    ],

    structureTitle: "Memahami Struktur Internal File ASS",
    structureSubtitle: "File Advanced SubStation Alpha yang valid terdiri atas tiga bagian wajib yang mengatur bagaimana pemutar video merender teks dialog:",
    structureBlocks: [
      {
        name: "[Script Info]",
        description: "Memuat metadata umum skrip seperti judul proyek, versi skrip (v4.00+), metode pemenggalan baris (WrapStyle), dan resolusi kanvas acuan (PlayResX, PlayResY).",
        snippet: "[Script Info]\nTitle: Converted Subtitles\nScriptType: v4.00+\nWrapStyle: 0\nScaledBorderAndShadow: yes\nPlayResX: 1920\nPlayResY: 1080"
      },
      {
        name: "[V4+ Styles]",
        description: "Mendefinisikan templat tampilan visual teks yang dapat digunakan kembali: jenis font, ukuran, warna teks utama dan sekunder, tebal garis luar, bayangan, dan margin layar.",
        snippet: "[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,48,&H00FFFFFF,&H000000FF,&H00000000,&H64000000,-1,0,0,0,100,100,0,0,1,2,1,2,20,20,30,1"
      },
      {
        name: "[Events]",
        description: "Menyusun setiap baris dialog berstempel waktu dengan menghubungkannya ke layer visual, waktu mulai dan selesai, nama gaya visual, dan teks berformat.",
        snippet: "[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:01.00,0:00:04.50,Default,,0,0,0,,Teks dialog bergaya berada di sini"
      }
    ],

    exampleTitle: "Contoh Nyata Konversi SRT ke ASS: Sebelum & Sesudah",
    exampleIntro: "Perhatikan bagaimana cuplikan subtitle SRT biasa dengan format HTML diubah menjadi kode skrip ASS baku:",
    exampleSrtInput: "1\n00:00:01,250 --> 00:00:04,800\nSelamat datang di <i>SRTConverters.com</i>!\nNikmati subtitle <b>bergaya</b>.\n\n2\n00:00:05,100 --> 00:00:08,450\n<font color=\"#ffff00\">Perhatian:</font> Awas di depan!",
    exampleAssOutput: "[Script Info]\nTitle: Converted Subtitles\nScriptType: v4.00+\nPlayResX: 1920\nPlayResY: 1080\n\n[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,48,&H00FFFFFF,&H000000FF,&H00000000,&H64000000,-1,0,0,0,100,100,0,0,1,2,1,2,20,20,30,1\n\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:01.25,0:00:04.80,Default,,0,0,0,,Selamat datang di {\\i1}SRTConverters.com{\\i0}!\\NNikmati subtitle {\\b1}bergaya{\\b0}.\nDialogue: 0,0:00:05.10,0:00:08.45,Default,,0,0,0,,{\\c&H00FFFF&}Perhatian:{\\c} Awas di depan!",
    exampleExplanation: "Terdapat tiga penyesuaian utama: (1) Stempel waktu berubah dari pemisah koma milidetik (00:00:01,250) menjadi pemisah titik centisecond (0:01:01.25). (2) Baris ganda disatukan menjadi satu baris Dialogue menggunakan kode jeda paksa ASS (\\N). (3) Tag HTML biasa (<i>, <b>, <font color>) dialihkan menjadi tag override native ({\\i1}, {\\b1}, {\\c&H00FFFF&} dalam format urutan BGR).",

    featuresTitle: "Panduan Referensi Tag Gaya Lanjutan pada ASS",
    featuresSubtitle: "Setelah file berbentuk ASS, Anda dapat memperkaya tampilan dialog dengan menyematkan tag di dalam tanda kurung kurawal {\\...}:",
    assFeatures: [
      {
        name: "Pengaturan Font, Ukuran & Tipe",
        tag: "{\\fnNamaFont\\fsUkuran\\b1\\i1}",
        explanation: "Mengubah jenis font, ukuran teks dalam piksel, serta mengaktifkan cetak tebal (\\b1/\\b0) atau miring (\\i1/\\i0) untuk kata tertentu atau satu kalimat penuh."
      },
      {
        name: "Penetapan Warna Format Heksadesimal BGR",
        tag: "{\\c&HBBGGRR&}",
        explanation: "Mengatur warna teks utama menggunakan urutan heksadesimal Biru-Hijau-Merah. Gunakan \\3c&HBBGGRR& untuk mengganti warna garis luar."
      },
      {
        name: "Perataan Berdasarkan Kisi 9 Titik",
        tag: "{\\an1} hingga {\\an9}",
        explanation: "Menentukan jangkar penempatan teks sesuai layout numpad: \\an2 untuk bawah-tengah (standar), \\an8 untuk atas-tengah, dan \\an5 untuk tepat di tengah layar."
      },
      {
        name: "Penempatan Koordinat Piksel Presisi",
        tag: "{\\pos(X, Y)}",
        explanation: "Mengunci posisi teks pada koordinat piksel tertentu mengacu pada resolusi PlayResX dan PlayResY yang ada di Script Info."
      },
      {
        name: "Efek Transisi Halus (Fade In & Fade Out)",
        tag: "{\\fad(durasi_masuk_ms, durasi_keluar_ms)}",
        explanation: "Menciptakan animasi transparansi halus saat teks muncul dan menghilang; contohnya {\\fad(300, 200)} muncul dalam 300 ms dan pudar dalam 200 ms."
      },
      {
        name: "Sinkronisasi Karaoke Per Suku Kata",
        tag: "{\\k<durasi_cs>}",
        explanation: "Mewarnai suku kata secara bertahap dalam hitungan centisecond, sangat cocok untuk video musik, intro anime, dan lirik karaoke."
      }
    ],

    ffmpegTitle: "Cara Konversi SRT ke ASS Menggunakan FFmpeg (Baris Perintah)",
    ffmpegSubtitle: "Bagi Anda yang mengotomatisasi pemrosesan video melalui server atau terminal, FFmpeg menyediakan fitur konversi bawaan:",
    ffmpegCommand: "ffmpeg -i masukan.srt keluaran.ass",
    ffmpegExplanation: [
      "Perintah ini akan membaca waktu dan teks pada file SRT lalu membuat file ASS fungsional menggunakan templat gaya standar FFmpeg.",
      "Jika Anda ingin menempelkan (hardcode / burn) subtitle bergaya ASS langsung ke dalam file video MP4: ffmpeg -i video.mp4 -vf 'subtitles=keluaran.ass' -c:a copy video_tertakarir.mp4",
      "Untuk konversi cepat harian tanpa perlu membuka terminal atau mengatur pustaka tambahan, konverter online gratis kami memberikan hasil kode ASS v4.00+ yang identik secara instan di peramban Anda."
    ],

    useCasesTitle: "Kasus Penggunaan Populer untuk Subtitle ASS",
    useCasesSubtitle: "Format ASS telah menjadi standar pilihan di berbagai industri kreatif dan multimedia:",
    useCasesList: [
      {
        title: "Fansub Anime dan Serial Asing",
        description: "Komunitas penerjemah menggunakan ASS untuk menerjemahkan tulisan latar video dengan tipografi serupa dan memberi warna berbeda untuk setiap tokoh."
      },
      {
        title: "Video Musik dan Lagu Karaoke",
        description: "Memanfaatkan tag timing suku kata (\\k), format ASS menggerakkan teks lirik bersinkronisasi tinggi di YouTube dan layar karaoke."
      },
      {
        title: "Video Pendek Media Sosial (TikTok, Reels, Shorts)",
        description: "Rancang teks subtitle vertikal yang mencolok dengan garis tepi hitam tebal dan font tebal yang langsung menarik perhatian di layar ponsel."
      },
      {
        title: "Menghindari Tumpang-Tindih dengan Teks Berita (Lower-Thirds)",
        description: "Pada tayangan dokumenter dan wawancara, ASS memungkinkan pemindahan posisi teks ke area atas saat nama narasumber muncul di bagian bawah."
      },
      {
        title: "Pembakaran Permanen Subtitle via HandBrake",
        description: "Kreator konten mengonversi SRT ke ASS untuk mempercantik tipografi sebelum membakarnya secara permanen ke dalam video MP4 atau MKV berkecepatan kompresi tinggi."
      }
    ],

    troubleshootTitle: "Solusi Masalah Umum Konversi SRT ke ASS",
    troubleshootSubtitle: "Mengalami kendala saat mengonversi atau memutar file subtitle? Berikut penyebab teknis dan solusi praktisnya:",
    troubleshootTips: [
      {
        issue: "Karakter khusus atau huruf beraksen rusak (misalnya Ã©, Ã¼, ?)",
        cause: "File SRT sumber disimpan dalam enkripsi lawas seperti ANSI, Windows-1252, atau ISO-8859-1, bukan standar UTF-8.",
        solution: "Buka file SRT di Notepad atau VS Code, lalu simpan ulang dengan memilih opsi encoding UTF-8, atau tempelkan teks langsung ke konverter kami."
      },
      {
        issue: "Font kustom tidak muncul saat diputar di perangkat lain",
        cause: "Format ASS merujuk pada font yang terpasang di perangkat penonton. Jika font tidak ada, sistem akan menggantinya dengan font dasar Arial.",
        solution: "Lampirkan file font (.ttf/.otf) ke dalam kontainer MKV menggunakan MKVToolNix, atau bakar subtitle langsung ke dalam video."
      },
      {
        issue: "Warna subtitle tampak terbalik (misalnya biru tampil sebagai merah)",
        cause: "Format ASS mengurutkan warna secara heksadesimal BGR (Biru-Hijau-Merah), berbeda dari standar web dan HTML yang menggunakan urutan RGB.",
        solution: "Konverter kami secara otomatis mengubah nilai RGB umum ke urutan BGR ASS ({\\c&HBBGGRR&}) agar warna tetap akurat."
      },
      {
        issue: "Pemutar video menampilkan kode mentah seperti {\\b1} di layar",
        cause: "Pemutar media yang sederhana atau versi lawas tidak memiliki mesin render ASS (libass) dan menganggap tag gaya sebagai teks biasa.",
        solution: "Gunakan pemutar video modern dengan dukungan penuh terhadap format ASS seperti VLC Media Player, MPV, atau PotPlayer."
      }
    ],

    timingTitle: "Apakah Konversi SRT ke ASS Memengaruhi Sinkronisasi Waktu?",
    timingText: [
      "Tidak sama sekali. Sinkronisasi waktu subtitle dipertahankan secara akurat. Pada format SubRip (.srt), stempel waktu dihitung dalam jam, menit, detik, dan milidetik (00:01:23,450). Sementara pada Advanced SubStation Alpha (.ass), waktu dihitung dalam satuan centisecond (0:01:23.45).",
      "Perhitungan kami membagi milidetik dengan 10 secara matematis dengan pembulatan presisi ke dua desimal. Hasilnya, teks akan muncul dan menghilang tepat pada bingkai video (frame) yang sama persis seperti file SRT aslinya."
    ],

    aegisubTitle: "Cara Mengedit Lebih Lanjut File ASS di Aegisub",
    aegisubSubtitle: "Setelah mendapatkan file .ass, Aegisub memberi Anda kendali kreatif penuh atas aspek visual subtitle:",
    aegisubSteps: [
      "Buka aplikasi Aegisub, pilih menu File > Open Subtitles, lalu muat file .ass yang telah Anda unduh.",
      "Pilih Video > Open Video untuk memuat video Anda agar penataan posisi teks dapat dilihat secara langsung.",
      "Buka menu Subtitles > Styles Manager untuk mengedit gaya 'Default': ganti jenis font, ukuran, warna, garis luar, dan bayangan.",
      "Gunakan alat tata letak visual Aegisub (geser posisi, rotasi, clipping) untuk menempatkan teks di atas objek video tertentu.",
      "Simpan file .ass yang telah diperbarui untuk mempertahankan tata letak dan penyesuaian waktu yang telah Anda sempurnakan."
    ],

    conclusionTitle: "Konversi Subtitle SRT ke ASS Sekarang Juga",
    conclusionText: [
      "Siap mempercantik subtitle Anda dengan pilihan font menarik, outline tajam, dan posisi presisi? Gunakan konverter SRT ke ASS gratis kami di bagian atas untuk pemrosesan instan dan aman langsung dari browser Anda.",
      "Coba juga rangkaian alat subtitle gratis kami lainnya:",
      "• Konverter TXT ke SRT: Ubah naskah teks polos menjadi file subtitle SRT yang tersinkronisasi.",
      "• Konverter SRT ke Teks: Hapus stempel waktu dan nomor urut untuk mendapatkan transkrip dialog bersih.",
      "• Konverter SRT ke VTT: Format subtitle SubRip ke standar WebVTT untuk pemutar video web HTML5.",
      "• Konverter VTT ke SRT: Ubah subtitle WebVTT kembali ke format SubRip untuk kompatibilitas editor video."
    ]
  },

  tr: {
    introTitle: "SubRip (SRT) Dosyasını Advanced SubStation Alpha (ASS) Formatına Dönüştürme Rehberi",
    introSubtitle: "Düz ve biçimlendirilmemiş SRT altyazılarını Aegisub, VLC, MPV, anime çevirileri (fansub) ve profesyonel video kurguları için zengin stilli ve konumlandırılmış ASS dosyalarına dönüştürmeyi öğrenin.",
    introText: [
      "SubRip (.srt) ve Advanced SubStation Alpha (.ass) formatları, dijital video altyazıcılığında iki farklı felsefeyi temsil eder. SRT bütünüyle sadeliğe odaklanır: ardışık satır numaraları, milisaniye cinsinden zaman kodları ve ham metin satırları. Bu yalınlık SRT'nin dünyadaki neredeyse tüm oynatıcılarla uyumlu çalışmasını sağlasa da; özel yazı tipleri, ekran üzerinde piksel hassasiyetinde yerleşim, konuşmacıya göre renklendirilmiş replikler veya parlak sahnelerde okunmayı garantileyen kalın dış çizgiler isteyen içerik üreticilerini fazlasıyla kısıtlar.",
      "Buna karşılık Advanced SubStation Alpha (SSA v4.00+ standardı), gelişmiş ve görsel olarak zenginleştirilmiş altyazıların dünya genelindeki altın standardıdır. Standart SRT dosyalarınızı ASS formatına dönüştürerek piksel tabanlı koordinat yerleşimi, özel yazı tipi aileleri, belirgin kenarlık çizgileri (outline), yarı saydam arka plan kutuları, açısal rotasyonlar ve hece düzeyinde dinamik karaoke animasyonlarının kapısını aralarsınız—üstelik tüm bu özellikleri videoyu yeniden kodlayıp (hardcode) görüntü kalitesini kaybetmeden, değiştirilebilir bir yazılım altyazısı (softsub) olarak saklayabilirsiniz.",
      "Tarayıcı tabanlı ücretsiz SRT - ASS dönüştürücümüz, altyazılarınızı istemci tarafında %100 gizlilik garantisiyle milisaniyeler içinde dönüştürür. Aşağıda iki formatın derinlemesine teknik karşılaştırmasını, ASS dosyasının iç mimarisini, öncesi/sonrası kod örneklerini, biçimlendirme etiketleri rehberini ve sık karşılaşılan sorunların pratik çözümlerini bulabilirsiniz."
    ],

    whatIsTitle: "SRT'den ASS'ye Dönüştürücü Nedir?",
    whatIsText: [
      "SRT'den ASS'ye dönüştürücü, SubRip (.srt) biçimindeki temel altyazı dosyalarını gelişmiş Advanced SubStation Alpha (.ass) skript yapısına çeviren özel bir yazılım aracıdır. Bu işlem dosya uzantısını yeniden adlandırmanın çok ötesindedir: Altyazı dosyasını oynatıcıların görsel direktiflerini içeren resmi bir skript mimarisiyle sıfırdan inşa eder.",
      "Dönüştürme esnasında motorumuz her bir SRT bloğunu ayrıştırır, virgülle ayrılmış milisaniye zaman kodlarını (00:01:23,450) ASS standardı olan noktalı salise formatına (0:01:23.45) dönüştürür, <i>, <b>, <u> ve <font color> gibi satır içi HTML etiketlerini yerel ASS stil kodlarına çevirir ve tüm diyalogları zorunlu olan [Script Info], [V4+ Styles] ve [Events] blokları içerisine yerleştirir."
    ],

    whyConvertTitle: "Neden SRT'den ASS Formatına Geçmelisiniz? Temel Avantajlar",
    whyConvertSubtitle: "SubRip'ten Advanced SubStation Alpha formatına geçiş, içerik üreticileri, çevirmenler ve video editörleri için kritik avantajlar sağlar:",
    whyConvertReasons: [
      {
        title: "Özel Yazı Tipleri ve Tipografi Kontrolü",
        description: "İşletim sisteminizde yüklü olan veya video dosyasına gömülü herhangi bir yazı tipini seçin, punto boyutunu ve harf aralıklarını oynatıcının varsayılan ayarlarına bağlı kalmadan belirleyin."
      },
      {
        title: "Kalın Kenarlıklar ve Yüksek Okunabilirlikli Gölgeler",
        description: "Beyaz altyazıların karlı manzaralarda, parlak gökyüzünde veya beyaz sahne ışıklarında kaybolmasını engellemek için kalın siyah dış hatlar ve gölgeler tanımlayın."
      },
      {
        title: "Piksel Koordinatlarıyla Kusursuz Konumlandırma",
        description: "Altyazıları ekranın istediğiniz (X, Y) koordinatına veya 9 noktalı ızgaraya sabitleyerek alt bantların (lower-thirds), konuşmacı isimliklerinin veya grafiklerin üzerinin kapanmasını önleyin."
      },
      {
        title: "Farklı Konuşmacılar İçin Renk Kodlaması",
        description: "Podcast'lerde, filmlerde veya dizilerde her karaktere ayrı metin ve kenarlık rengi atayarak hızlı diyalogların kim tarafından söylendiğinin anında anlaşılmasını sağlayın."
      },
      {
        title: "Video Kalitesi Düşmeden Gömülü (Softsub) Kullanım",
        description: "Tüm görsel stil zenginliğini MKV veya MP4 kapsayıcıları içerisinde ayrı bir parça olarak koruyun; böylece kullanıcılar videoyu yeniden sıkıştırmadan altyazıyı açıp kapatabilir."
      },
      {
        title: "Aegisub ile Kusursuz ve Doğrudan Entegrasyon",
        description: "ASS formatı, profesyonel altyazı düzenleme yazılımı Aegisub'ın ana çalışma formatıdır. Dosyayı doğrudan açıp ses dalgası üzerinden milimetrik zamanlama ve animasyonlar oluşturabilirsiniz."
      }
    ],

    howToTitle: "SRT'yi ASS Formatına Çevrimiçi Dönüştürme (Adım Adım)",
    howToSubtitle: "SRTConverters.com üzerinde altyazı dönüştürmek son derece hızlı, güvenli ve programsız gerçekleşir:",
    howToSteps: [
      {
        step: "1",
        title: "SRT Altyazınızı Yükleyin veya Yapıştırın",
        description: ".srt uzantılı altyazı dosyanızı yükleme alanına sürükleyip bırakın, 'Dosyalara Göz At' butonuna tıklayın veya ham altyazı metnini sol taraftaki metin kutusuna doğrudan yapıştırın."
      },
      {
        step: "2",
        title: "Tarayıcıda Gerçek Zamanlı Biçimlendirme",
        description: "Dönüştürme motorumuz satırları anında işler, zaman kodlarını saliseye çevirir, stil etiketlerini dönüştürür ve geçerli ASS v4.00+ sözdizimini canlı olarak üretir."
      },
      {
        step: "3",
        title: ".ASS Dosyanızı Kopyalayın veya İndirin",
        description: "Hazırlanan dosyayı bilgisayarınıza kaydetmek için '.ASS İndir' butonuna basın veya metni doğrudan kopyalayarak Aegisub, VS Code ya da kurgu programınıza yapıştırın."
      }
    ],

    differenceTitle: "Kapsamlı Karşılaştırma: SRT ve ASS Formatları",
    differenceSubtitle: "SubRip ile Advanced SubStation Alpha arasındaki teknik farkları bilmek, video projeleriniz için en doğru kararı vermenizi sağlar:",
    differenceTable: [
      { feature: "Dosya Uzantısı", srt: ".srt", ass: ".ass (veya eski .ssa)" },
      { feature: "Biçim Standardı", srt: "SubRip Text (Düz Metin)", ass: "Advanced SubStation Alpha v4.00+" },
      { feature: "Zaman Hassasiyeti", srt: "Milisaniye (00:01:30,500)", ass: "Salise (0:01:30.50)" },
      { feature: "Başlık Yapısı", srt: "Yok (doğrudan diyalog satırları)", ass: "Yapılandırılmış ([Script Info], [V4+ Styles], [Events])" },
      { feature: "Özel Yazı Tipleri", srt: "Desteklenmez (oynatıcı varsayılanı)", ass: "Tamamen özelleştirilebilir (Font adı, boyut, aralık)" },
      { feature: "Renk ve Saydamlık", srt: "Kısıtlı <font color> desteği", ass: "Alfa kanallı tam 32-bit &HAABBGGRR renk paleti" },
      { feature: "Ekran Konumu", srt: "Standart dışı kararsız etiketler", ass: "9 noktalı hizalama (\\an1-9) ve piksel koordinatları (\\pos)" },
      { feature: "Dış Çizgi ve Gölge", srt: "Desteklenmez", ass: "Kenarlık kalınlığı, gölge mesafesi ve bulanıklık ayarı" },
      { feature: "Karaoke ve Animasyon", srt: "Desteklenmez", ass: "Hece zamanlaması (\\k), solma geçişleri (\\fad), rotasyon" },
      { feature: "İdeal Kullanım Alanı", srt: "YouTube kapalı altyazıları, standart web", ass: "Anime fansubları, müzik klipleri, sinema ve dikey videolar" }
    ],

    structureTitle: "ASS Dosyasının İç Yapısı: Bölümleri Anlama",
    structureSubtitle: "Geçerli bir Advanced SubStation Alpha dosyası, oynatıcılara altyazının nasıl görüntüleneceğini bildiren üç temel bölümden oluşur:",
    structureBlocks: [
      {
        name: "[Script Info]",
        description: "Skript başlığı, sürüm bilgisi (v4.00+), satır kaydırma modu (WrapStyle) ve referans ekran çözünürlüğü (PlayResX, PlayResY) gibi temel proje üstverilerini barındırır.",
        snippet: "[Script Info]\nTitle: Converted Subtitles\nScriptType: v4.00+\nWrapStyle: 0\nScaledBorderAndShadow: yes\nPlayResX: 1920\nPlayResY: 1080"
      },
      {
        name: "[V4+ Styles]",
        description: "Tekrar kullanılabilir görsel tasarım şablonlarını tanımlar: Yazı tipi adı, punto boyutu, ana ve ikincil renkler, kenarlık kalınlığı, gölge derinliği ve ekran kenar boşlukları.",
        snippet: "[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,48,&H00FFFFFF,&H000000FF,&H00000000,&H64000000,-1,0,0,0,100,100,0,0,1,2,1,2,20,20,30,1"
      },
      {
        name: "[Events]",
        description: "Başlangıç ve bitiş zaman kodlarını, katman numarasını (Layer), kullanılan stili ve biçimlendirme etiketleriyle zenginleştirilmiş diyalog metinlerini listeler.",
        snippet: "[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:01.00,0:00:04.50,Default,,0,0,0,,Biçimlendirilmiş diyalog metni buraya gelir"
      }
    ],

    exampleTitle: "SRT - ASS Dönüştürme Örneği: Öncesi ve Sonrası",
    exampleIntro: "Standart HTML etiketlerine sahip tipik bir SRT altyazı bloğunun ASS sözdizimine nasıl dönüştüğünü inceleyin:",
    exampleSrtInput: "1\n00:00:01,250 --> 00:00:04,800\n<i>SRTConverters.com</i>'a hoş geldiniz!\n<b>Stillendirilmiş</b> altyazıların tadını çıkarın.\n\n2\n00:00:05,100 --> 00:00:08,450\n<font color=\"#ffff00\">Uyarı:</font> Önünüze dikkat edin!",
    exampleAssOutput: "[Script Info]\nTitle: Converted Subtitles\nScriptType: v4.00+\nPlayResX: 1920\nPlayResY: 1080\n\n[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,48,&H00FFFFFF,&H000000FF,&H00000000,&H64000000,-1,0,0,0,100,100,0,0,1,2,1,2,20,20,30,1\n\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:01.25,0:00:04.80,Default,,0,0,0,,{\\i1}SRTConverters.com{\\i0}'a hoş geldiniz!\\N{\\b1}Stillendirilmiş{\\b0} altyazıların tadını çıkarın.\nDialogue: 0,0:00:05.10,0:00:08.45,Default,,0,0,0,,{\\c&H00FFFF&}Uyarı:{\\c} Önünüze dikkat edin!",
    exampleExplanation: "Gerçekleşen üç kritik dönüşüme dikkat edin: (1) Zaman kodları virgüllü milisaniyeden (00:00:01,250) noktalı saliseye (0:01:01.25) çevrilir. (2) Birden fazla satırdan oluşan SRT blokları, zorunlu satır sonu kodu (\\N) ile tek bir Dialogue satırında birleştirilir. (3) Standart HTML etiketleri (<i>, <b>, <font color>) yerel ASS etiketlerine ({\\i1}, {\\b1}, BGR sıralamasında {\\c&H00FFFF&}) dönüştürülür.",

    featuresTitle: "Gelişmiş ASS Stil Etiketleri Başvuru Rehberi",
    featuresSubtitle: "Altyazınızı ASS formatına dönüştürdükten sonra süslü parantez {\\...} içindeki etiketlerle satırları dilediğiniz gibi özelleştirebilirsiniz:",
    assFeatures: [
      {
        name: "Yazı Tipi, Boyut ve Vurgu",
        tag: "{\\fnFontAdı\\fsBoyut\\b1\\i1}",
        explanation: "Belirli bir kelime veya tüm satır için yazı tipini, piksel boyutunu, kalın (\\b1/\\b0) veya italik (\\i1/\\i0) durumunu anında değiştirir."
      },
      {
        name: "BGR Sıralı Onaltılık Renk Kodu",
        tag: "{\\c&HBBGGRR&}",
        explanation: "Metin rengini Mavi-Yeşil-Kırmızı onaltılık düzeninde ayarlar. Dış çizgi rengini değiştirmek için \\3c&HBBGGRR& komutu kullanılır."
      },
      {
        name: "9 Noktalı Ekran Hizalaması",
        tag: "{\\an1} ile {\\an9} arası",
        explanation: "Metin sabitleme noktasını nümerik klavye düzenine göre belirler: \\an2 alt-orta (varsayılan), \\an8 üst-orta ve \\an5 tam ekran ortasıdır."
      },
      {
        name: "Sabit Piksel Koordinat Konumu",
        tag: "{\\pos(X, Y)}",
        explanation: "Altyazıyı Script Info başlığında belirtilen PlayResX ve PlayResY ekran çözünürlüğüne göre tam piksel koordinatına çiviler."
      },
      {
        name: "Yumuşak Açılma ve Kapanma (Fade)",
        tag: "{\\fad(giriş_ms, çıkış_ms)}",
        explanation: "Metnin görünüş ve kayboluşuna yumuşak saydamlık geçişi ekler; örneğin {\\fad(300, 200)} 300 ms'de belirir ve 200 ms'de silinir."
      },
      {
        name: "Hece Düzeyinde Karaoke Zamanlaması",
        tag: "{\\k<süre_cs>}",
        explanation: "Kelimeleri veya heceleri salise cinsinden sırayla renklendirir; müzik klipleri, dizi jenerikleri ve karaoke için vazgeçilmezdir."
      }
    ],

    ffmpegTitle: "FFmpeg ile SRT'den ASS'ye Dönüştürme (Komut Satırı)",
    ffmpegSubtitle: "Sunucularda veya terminal üzerinde toplu video işleme süreçleri yürütüyorsanız, FFmpeg yerel altyazı dönüştürme özelliğine sahiptir:",
    ffmpegCommand: "ffmpeg -i girdi.srt cikti.ass",
    ffmpegExplanation: [
      "Bu komut, SRT dosyasındaki metin ve zaman kodlarını okuyarak FFmpeg'in varsayılan stil şablonunu içeren işlevsel bir ASS dosyası oluşturur.",
      "Görsel stilleriyle hazırlanmış ASS altyazılarını doğrudan bir MP4 videosunun üzerine kalıcı olarak kazımak (hardburn) isterseniz: ffmpeg -i video.mp4 -vf 'subtitles=cikti.ass' -c:a copy video_altyazili.mp4",
      "Terminal pencereleriyle uğraşmadan veya komut satırı ortamı yapılandırmadan günlük hızlı dönüştürmeler yapmak için ücretsiz çevrimiçi aracımız doğrudan tarayıcınızda geçerli ASS v4.00+ kodu üretir."
    ],

    useCasesTitle: "ASS Altyazı Formatının En Yaygın Kullanım Alanları",
    useCasesSubtitle: "ASS formatı günümüzde birçok yaratıcı ve profesyonel alanda standart tercih haline gelmiştir:",
    useCasesList: [
      {
        title: "Anime ve Yabancı Dizi Çevirileri (Fansub)",
        description: "Gönüllü çeviri ekipleri; ekrandaki tabelaları orijinal grafiklerle eşleştirmek ve her karaktere farklı konuşma renkleri vermek için ASS kullanır."
      },
      {
        title: "Müzik Klipleri ve Karaoke Şarkı Sözleri",
        description: "Hece düzeyinde zamanlama etiketleri (\\k) sayesinde ASS, YouTube'daki ve karaoke mekanlarındaki senkronize şarkı sözü animasyonlarını yönetir."
      },
      {
        title: "Sosyal Medya Dikey Videoları (TikTok, Reels, Shorts)",
        description: "Akıllı telefon ekranlarında anında dikkat çeken kalın siyah kenarlıklı ve vurucu fontlara sahip dinamik altyazılar hazırlayın."
      },
      {
        title: "Ekran Yazıları ve İsimliklerle (Lower-Thirds) Çakışmayı Önleme",
        description: "Belgesel ve röportajlarda ekranın altında konuşmacı isimleri çıktığında altyazıyı geçici olarak ekranın üstüne taşımaya imkân tanır."
      },
      {
        title: "HandBrake ile Videoya Kalıcı Olarak Yazma",
        description: "Video üreticileri, yüksek sıkıştırmalı MP4 veya MKV dosyalarına altyazıları kalıcı olarak kazımadan önce tipografiyi zenginleştirmek için SRT'yi ASS'ye çevirir."
      }
    ],

    troubleshootTitle: "SRT - ASS Dönüşümünde Sık Karşılaşılan Sorunlar ve Çözümleri",
    troubleshootSubtitle: "Dönüştürme veya oynatma esnasında bir aksaklıkla mı karşılaştınız? İşte en yaygın nedenler ve pratik çözümleri:",
    troubleshootTips: [
      {
        issue: "Türkçe karakterler (ğ, ş, ı, İ, ö, ç) bozuk veya soru işareti görünüyor",
        cause: "Orijinal SRT dosyası modern UTF-8 formatı yerine eski ANSI, Windows-1254 veya ISO-8859-9 kodlamasıyla kaydedilmiştir.",
        solution: "SRT dosyasını Not Defteri veya VS Code'da açıp 'UTF-8' kodlamasıyla tekrar kaydedin ya da metni doğrudan kopyalayıp dönüştürücümüze yapıştırın."
      },
      {
        issue: "Özel yazı tipleri başka bilgisayarlarda veya telefonlarda görünmüyor",
        cause: "ASS formatı izleyicinin cihazında kurulu yazı tiplerini çağırır. Font yüklü değilse oynatıcı otomatik olarak standart Arial fontuna döner.",
        solution: "Yazı tipi dosyalarını (.ttf/.otf) MKVToolNix kullanarak MKV kapsayıcısına ek parça olarak iliştirin veya altyazıyı videoya gömün (hardcode)."
      },
      {
        issue: "Altyazı renkleri ters çıkıyor (örneğin mavi renk kırmızı görünüyor)",
        cause: "ASS formatı renkleri BGR (Mavi-Yeşil-Kırmızı) onaltılık sırasında okurken, web ve HTML standartları RGB sırasını kullanır.",
        solution: "Dönüştürücümüz standart RGB kodlarını otomatik olarak doğru ASS BGR kodlamasına ({\\c&HBBGGRR&}) çevirerek doğru rengi güvenceye alır."
      },
      {
        issue: "Video oynatıcı ekranda {\\b1} gibi ham stil kodlarını metin olarak basıyor",
        cause: "Bazı basit veya eski video oynatıcılar gelişmiş ASS işleme motoruna (libass) sahip değildir ve stil etiketlerini düz metin sanır.",
        solution: "VLC Media Player, MPV veya PotPlayer gibi ASS formatını tam destekleyen modern medya oynatıcılarını tercih edin."
      }
    ],

    timingTitle: "SRT'den ASS'ye Dönüştürme Zamanlamayı Etkiler mi?",
    timingText: [
      "Hayır. Altyazıların senkronizasyonu eksiksiz biçimde korunur. SubRip (.srt) formatında zamanlama saat, dakika, saniye ve milisaniye (00:01:23,450) olarak tutulurken; Advanced SubStation Alpha (.ass) formatında salise (0:01:23.45) hassasiyetinde tutulur.",
      "Algoritmamız milisaniyeleri matematiksel olarak tam 10'a böler ve iki ondalık basamağa hassasiyetle yuvarlar. Sonuç olarak diyaloglar videonun orijinal SRT dosyasındakiyle birebir aynı karelerinde (frame) ekrana gelir ve kaybolur."
    ],

    aegisubTitle: "ASS Dosyanızı Aegisub ile Gelişmiş Şekilde Düzenleme",
    aegisubSubtitle: "Dosyanızı .ass biçimine dönüştürdükten sonra Aegisub ile altyazılarınız üzerinde tam görsel hakimiyet kurabilirsiniz:",
    aegisubSteps: [
      "Aegisub uygulamasını açın, Dosya > Altyazıları Aç yolunu izleyerek indirdiğiniz .ass dosyasını seçin.",
      "Video > Video Aç menüsünden videonuzu içe aktararak altyazıların ekrandaki konumunu eşzamanlı olarak önizleyin.",
      "Altyazı > Stil Yöneticisi penceresini açarak 'Default' stilini düzenleyin: Yazı tipi ailesini, boyutunu, renklerini ve dış çizgi kalınlığını ayarlayın.",
      "Aegisub'ın görsel dizgi araçlarını (sürükleme, döndürme, klip maskeleme) kullanarak metinleri sahnedeki nesnelerin üzerine kusursuzca yerleştirin.",
      "Tüm gelişmiş tipografi ve zamanlama düzenlemelerinizi korumak için güncellenen .ass dosyasını kaydedin."
    ],

    conclusionTitle: "Altyazılarınızı Hemen Şimdi SRT'den ASS'ye Dönüştürün",
    conclusionText: [
      "Altyazılarınızı göz alıcı yazı tipleri, belirgin kenarlıklar ve milimetrik ekran yerleşimiyle profesyonel bir seviyeye taşımaya hazır mısınız? Yukarıdaki ücretsiz SRT - ASS dönüştürücümüzü kullanarak tarayıcınızda anında ve güvenle dönüştürün.",
      "Diğer ücretsiz altyazı araçlarımızı da keşfedin:",
      "• TXT'den SRT'ye Dönüştürücü: Düz metinleri ve transkriptleri senkronize SRT altyazı dosyalarına çevirin.",
      "• SRT'den Metne Dönüştürücü: Zaman kodlarını ve satır numaralarını temizleyerek düz metin transkript elde edin.",
      "• SRT'den VTT'ye Dönüştürücü: SubRip altyazılarınızı HTML5 video oynatıcıları için WebVTT formatına aktarın.",
      "• VTT'den SRT'ye Dönüştürücü: Web altyazılarını masaüstü kurgu yazılımlarıyla uyumlu standart SubRip formatına dönüştürün."
    ]
  },

  it: {
    introTitle: "Guida Completa alla Conversione da SubRip (SRT) ad Advanced SubStation Alpha (ASS)",
    introSubtitle: "Scopri come trasformare sottotitoli SRT grezzi in file ASS avanzati e completamente stilizzati, con font personalizzati, effetti grafici e posizionamento di precisione per Aegisub, VLC, MPV, fansub di anime e montaggio video.",
    introText: [
      "I formati SubRip (.srt) e Advanced SubStation Alpha (.ass) rappresentano due filosofie profondamente distinte nell'ambito del sottotitolaggio digitale. SRT privilegia la massima linearità: numeri d'ordine progressivi, minutaggio millimetrico e semplici linee di testo puro prive di grafica. Sebbene questa semplicità renda i file SRT universalmente compatibili con qualunque lettore multimediale, essa limita notevolmente chi necessita di una forte identità tipografica, collocazione millimetrica sullo schermo, battute colorate per ciascun personaggio o contorni spessi studiati per risaltare su sfondi luminosi.",
      "Al contrario, Advanced SubStation Alpha (specifica SSA v4.00+) costituisce lo standard di eccellenza per sottotitoli complessi e ad alto impatto visivo. Convertendo i tuoi file SRT in formato ASS, ottieni la libertà di posizionare il testo tramite coordinate cartesiane pixel per pixel, applicare famiglie tipografiche personalizzate, bordi a contrasto elevato, box di sfondo semitrasparenti, angolazioni dinamiche e animazioni per karaoke sillaba per sillaba—il tutto conservato come sottotitolo commutabile (softsub), senza dover re-encodare il video con perdita di tempo e qualità visiva.",
      "Il nostro convertitore gratuito di sottotitoli online elabora i file direttamente nel tuo browser in pochi millisecondi, garantendo la privacy totale dei tuoi dati senza alcun upload su server esterni. Di seguito troverai un'analisi comparativa approfondita, la struttura interna di uno script ASS, esempi pratici di codice prima e dopo, il catalogo completo dei tag di stile e le soluzioni ai dubbi più frequenti."
    ],

    whatIsTitle: "Cos'è un Convertitore da SRT a ASS?",
    whatIsText: [
      "Un convertitore da SRT a ASS è uno strumento di elaborazione dedicato che ristruttura i file di sottotitoli SubRip (.srt) nella complessa architettura a script di Advanced SubStation Alpha (.ass). La procedura va ben oltre la semplice modifica dell'estensione del file: richiede la generazione ex novo di un copione di sottotitolaggio completo, provvisto di parametri di rendering e modelli di stile.",
      "Durante la conversione, il motore scansiona ogni singolo blocco SRT, traduce i codici temporali con virgola (00:01:23,450) nella notazione a centesimi di secondo con punto (0:01:23.45), converte i tag HTML inline come <i>, <b>, <u> e <font color> nei corrispondenti tag di sovrascrittura nativi ASS, e incapsula i dialoghi all'interno delle sezioni strutturali obbligatorie [Script Info], [V4+ Styles] ed [Events]."
    ],

    whyConvertTitle: "Perché Convertire da SRT a ASS? I Principali Vantaggi",
    whyConvertSubtitle: "Il passaggio dal formato SubRip ad Advanced SubStation Alpha offre vantaggi sostanziali per creator, traduttori e video editor:",
    whyConvertReasons: [
      {
        title: "Tipografia e Font Personalizzati",
        description: "Utilizza qualunque font installato sul sistema operativo o incorporato nel file video, regolando corpo del carattere e interlinea senza dipendere dalle impostazioni predefinite del player."
      },
      {
        title: "Bordi Spessi e Ombreggiature ad Alta Visibilità",
        description: "Impedisci che i testi bianchi risultino illeggibili su sfondi chiari, distese innevate o cieli assolati, applicando contorni neri marcati e ombre sfumate di profondità regolabile."
      },
      {
        title: "Posizionamento Esatto su Coordinate in Pixel",
        description: "Colloca i sottotitoli su qualsiasi coordinata (X, Y) o sulla griglia a 9 posizioni, evitando di coprire grafiche televisive, sottopancia informativi (lower-thirds) o elementi chiave dell'immagine."
      },
      {
        title: "Differenziazione Cromatica per Personaggio",
        description: "Assegna colori del testo e dei bordi specifici a ciascun interlocutore in podcast, film o serie animate, agevolando la comprensione immediata anche nei dialoghi più concitati."
      },
      {
        title: "Sottotitoli Flottanti Senza Perdita di Qualità Video",
        description: "Mantieni tutta la ricchezza stilistica all'interno di file MKV o MP4 come traccia softsub disattivabile, offrendo la massima flessibilità allo spettatore senza dover renderizzare il video."
      },
      {
        title: "Integrazione Perfetta e Diretta con Aegisub",
        description: "Il formato ASS è l'ambiente nativo del software Aegisub, consentendoti di sincronizzare le battute direttamente sulla forma d'onda audio e di ideare elaborati effetti scenici di karaoke."
      }
    ],

    howToTitle: "Come Convertire SRT in ASS Online (Guida Passo dopo Passo)",
    howToSubtitle: "La conversione su SRTConverters.com è fulminea, sicura e non richiede alcuna installazione di software:",
    howToSteps: [
      {
        step: "1",
        title: "Carica o Incolla i Tuoi Sottotitoli SRT",
        description: "Trascina il tuo file .srt nell'area di rilascio, fai clic su 'Sfoglia file' oppure incolla direttamente il testo grezzo dei sottotitoli nel riquadro di sinistra."
      },
      {
        step: "2",
        title: "Formattazione Istantanea nel Browser",
        description: "Il nostro motore converte al volo i minutaggi in centesimi di secondo, traduce i tag grafici e genera la sintassi ufficiale ASS v4.00+ in tempo reale."
      },
      {
        step: "3",
        title: "Copia o Scarica il Tuo File .ASS",
        description: "Fai clic su 'Scarica .ASS' per salvare il file sul tuo computer oppure su 'Copia' per incollare lo script direttamente in Aegisub, VS Code o nel tuo programma di montaggio."
      }
    ],

    differenceTitle: "Confronto Dettagliato dei Formati: SRT vs ASS",
    differenceSubtitle: "Comprendere le differenze tecniche tra SubRip e Advanced SubStation Alpha ti permette di scegliere il formato ideale per le tue produzioni:",
    differenceTable: [
      { feature: "Estensione del File", srt: ".srt", ass: ".ass (o il classico .ssa)" },
      { feature: "Specifica Tecnica", srt: "SubRip Text (Testo grezzo semplice)", ass: "Advanced SubStation Alpha v4.00+" },
      { feature: "Precisione Temporale", srt: "Millisecondi (00:01:30,500)", ass: "Centesimi di secondo (0:01:30.50)" },
      { feature: "Intestazione e Metadati", srt: "Nessuna (i dialoghi iniziano subito)", ass: "Strutturata ([Script Info], [V4+ Styles], [Events])" },
      { feature: "Font Personalizzati", srt: "Non supportato (scelto dal player)", ass: "Pienamente configurabile (famiglia, corpo, spaziatura)" },
      { feature: "Colori e Trasparenze", srt: "Supporto embrionale di <font color>", ass: "Colori completi a 32 bit &HAABBGGRR con canale alfa" },
      { feature: "Posizionamento a Video", srt: "Rari tag non standard e instabili", ass: "Griglia a 9 punti (\\an1-9) e coordinate cartesiane (\\pos)" },
      { feature: "Contorni e Ombreggiature", srt: "Non supportato", ass: "Spessore del tratto, profondità ombra e sfocatura regolabili" },
      { feature: "Effetti Karaoke e Dissolvenze", srt: "Non supportato", ass: "Timing a sillabe (\\k), dissolvenze (\\fad) e rotazioni" },
      { feature: "Destinazione d'Uso Tipica", srt: "Sottotitoli chiusi per YouTube e web", ass: "Fansub di anime, video musicali, cinema e reel verticali" }
    ],

    structureTitle: "Struttura Interna di un File ASS: Comprendere le Sezioni",
    structureSubtitle: "Un file Advanced SubStation Alpha conforme si compone di tre sezioni obbligatorie che definiscono il rendering visivo del testo:",
    structureBlocks: [
      {
        name: "[Script Info]",
        description: "Contiene i metadati generali dell'opera: titolo del progetto, versione (v4.00+), modalità di a capo (WrapStyle) e risoluzione video di riferimento (PlayResX, PlayResY).",
        snippet: "[Script Info]\nTitle: Converted Subtitles\nScriptType: v4.00+\nWrapStyle: 0\nScaledBorderAndShadow: yes\nPlayResX: 1920\nPlayResY: 1080"
      },
      {
        name: "[V4+ Styles]",
        description: "Definisce i modelli grafici riutilizzabili: famiglia del font, dimensione, colori primari e secondari, contorni, ombre, margini dello schermo e allineamento predefinito.",
        snippet: "[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,48,&H00FFFFFF,&H000000FF,&H00000000,&H64000000,-1,0,0,0,100,100,0,0,1,2,1,2,20,20,30,1"
      },
      {
        name: "[Events]",
        description: "Elenca tutte le righe di dialogo temporizzate specificando il livello di sovrapposizione (Layer), orari di inizio e fine, stile associato e testo arricchito dai tag.",
        snippet: "[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:01.00,0:00:04.50,Default,,0,0,0,,Testo stilizzato del dialogo qui"
      }
    ],

    exampleTitle: "Esempio Pratico di Conversione SRT in ASS: Prima e Dopo",
    exampleIntro: "Ecco come un frammento di sottotitolo SRT contenente markup HTML comune viene convertito nella corretta sintassi ASS:",
    exampleSrtInput: "1\n00:00:01,250 --> 00:00:04,800\nBenvenuto su <i>SRTConverters.com</i>!\nGoditi sottotitoli <b>stilizzati</b>.\n\n2\n00:00:05,100 --> 00:00:08,450\n<font color=\"#ffff00\">Attenzione:</font> Guarda dritto avanti!",
    exampleAssOutput: "[Script Info]\nTitle: Converted Subtitles\nScriptType: v4.00+\nPlayResX: 1920\nPlayResY: 1080\n\n[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,48,&H00FFFFFF,&H000000FF,&H00000000,&H64000000,-1,0,0,0,100,100,0,0,1,2,1,2,20,20,30,1\n\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\nDialogue: 0,0:00:01.25,0:00:04.80,Default,,0,0,0,,Benvenuto su {\\i1}SRTConverters.com{\\i0}!\\NGoditi sottotitoli {\\b1}stilizzati{\\b0}.\nDialogue: 0,0:00:05.10,0:00:08.45,Default,,0,0,0,,{\\c&H00FFFF&}Attenzione:{\\c} Guarda dritto avanti!",
    exampleExplanation: "Si notano tre trasformazioni chiave: (1) I codici orari passano dai millisecondi con virgola (00:00:01,250) ai centesimi con punto (0:01:01.25). (2) Le righe multiple in SRT vengono riunite in un unico elemento Dialogue mediante l'interruzione di riga forzata ASS (\\N). (3) I tag HTML (<i>, <b>, <font color>) vengono rimpiazzati con tag di sovrascrittura nativi ({\\i1}, {\\b1}, {\\c&H00FFFF&} in ordine BGR).",

    featuresTitle: "Guida di Riferimento ai Tag di Stile Avanzati in ASS",
    featuresSubtitle: "Una volta ottenuto il file ASS, puoi arricchire le singole battute inserendo tag di controllo racchiusi tra parentesi graffe {\\...}:",
    assFeatures: [
      {
        name: "Font, Dimensione e Tratto",
        tag: "{\\fnNomeFont\\fsDimensione\\b1\\i1}",
        explanation: "Modifica dinamicamente la famiglia del carattere, il corpo in pixel, l'attivazione del grassetto (\\b1/\\b0) o del corsivo (\\i1/\\i0) su singole parole o intere frasi."
      },
      {
        name: "Colori Esadecimali in Ordine BGR",
        tag: "{\\c&HBBGGRR&}",
        explanation: "Imposta il colore primario del testo seguendo la sequenza Blu-Verde-Rosso. Per cambiare il colore del contorno esterno si impiega il tag \\3c&HBBGGRR&."
      },
      {
        name: "Allineamento su Griglia a 9 Punti",
        tag: "{\\an1} a {\\an9}",
        explanation: "Ancora il testo rifacendosi alla disposizione del tastierino numerico: \\an2 per il centro in basso (standard), \\an8 per il centro in alto e \\an5 per il centro perfetto dello schermo."
      },
      {
        name: "Posizionamento su Coordinate Cartesiane",
        tag: "{\\pos(X, Y)}",
        explanation: "Fissa il sottotitolo a coordinate geometriche esatte in pixel in relazione alla risoluzione PlayResX e PlayResY impostata nella sezione Script Info."
      },
      {
        name: "Dissolvenze Morbide in Entrata e Uscita (Fade)",
        tag: "{\\fad(durata_in_ms, durata_out_ms)}",
        explanation: "Applica una transizione di trasparenza progressiva all'inizio e alla fine della battuta; ad esempio {\\fad(300, 200)} sfuma in entrata per 300 ms e in uscita per 200 ms."
      },
      {
        name: "Sincronizzazione di Karaoke a Sillabe",
        tag: "{\\k<durata_cs>}",
        explanation: "Evidenzia parole o sillabe in sequenza contando i centesimi di secondo, ideale per clip musicali, canzoni di sigle e schermi da karaoke."
      }
    ],

    ffmpegTitle: "Come Convertire da SRT a ASS con FFmpeg (Riga di Comando)",
    ffmpegSubtitle: "Se gestisci elaborazioni video automatizzate da terminale o su server, FFmpeg supporta nativamente la conversione dei sottotitoli:",
    ffmpegCommand: "ffmpeg -i input.srt output.ass",
    ffmpegExplanation: [
      "L'esecuzione di questo comando consente a FFmpeg di leggere i tempi e i testi del file SRT per generare un documento ASS valido provvisto dello stile predefinito.",
      "Se desideri imprimere (hardcodare o bruciare) in modo permanente i sottotitoli ASS stilizzati sul flusso video di un file MP4: ffmpeg -i video.mp4 -vf 'subtitles=output.ass' -c:a copy video_con_sottotitoli.mp4",
      "Per le conversioni quotidiane senza dover ricorrere al terminale o installare complesse librerie sul computer, il nostro convertitore online gratuito produce codice ASS v4.00+ impeccabile in pochi istanti."
    ],

    useCasesTitle: "Ambiti di Utilizzo Più Diffusi per i Sottotitoli ASS",
    useCasesSubtitle: "Il formato ASS si conferma lo standard irrinunciabile in diversi campi della produzione e dell'adattamento video:",
    useCasesList: [
      {
        title: "Fansub di Anime e Serie Straniere",
        description: "Gruppi di traduzione amatoriale usano ASS per ricreare cartelli e scritte a video con lo stesso font originale e differenziare i personaggi con colori appositi."
      },
      {
        title: "Videoclip Musicali e Testi per Karaoke",
        description: "Grazie ai tag di scansione sillabica (\\k), il formato ASS anima con perfetta puntualità i testi di canzoni su YouTube e nei locali karaoke."
      },
      {
        title: "Video Corti per Social Network (TikTok, Reels, Shorts)",
        description: "Crea scritte verticali appariscenti con contorni neri marcati e font audaci che catturano subito lo sguardo sugli schermi verticali degli smartphone."
      },
      {
        title: "Evitare la Sovrapposizione con Grafiche e Sottopancia",
        description: "Nei documentari e nelle interviste, l'ASS permette di spostare i sottotitoli nella parte superiore dello schermo quando in basso compaiono nomi o sottopancia."
      },
      {
        title: "Impressione Definitiva su Video via HandBrake",
        description: "I videomaker convertono da SRT ad ASS per rifinire la veste grafica prima di imprimere a fuoco i sottotitoli all'interno di file compressi MP4 o MKV."
      }
    ],

    troubleshootTitle: "Risoluzione dei Problemi Comuni nella Conversione SRT a ASS",
    troubleshootSubtitle: "Hai riscontrato qualche comportamento anomalo durante la conversione o la riproduzione? Ecco le cause e i rimedi pratici:",
    troubleshootTips: [
      {
        issue: "I caratteri accentati (è, à, ù, ì, ó) risultano distorti o illeggibili",
        cause: "Il file SRT sorgente è stato codificato con una codifica datata come ANSI, Windows-1252 o ISO-8859-1 anziché con il moderno standard UTF-8.",
        solution: "Apri il file SRT con Blocco Note o VS Code e salvalo specificando la codifica UTF-8, oppure incolla direttamente il testo nel nostro convertitore web."
      },
      {
        issue: "I font personalizzati non vengono visualizzati su altri computer o smartphone",
        cause: "Lo script ASS richiama i font installati nel sistema dell'utente. Se il carattere non è presente, il player lo sostituirà automaticamente con Arial.",
        solution: "Includi i file dei font (.ttf/.otf) come allegati nel file contenitore MKV tramite MKVToolNix, oppure imprimi (brucia) i sottotitoli direttamente nel video."
      },
      {
        issue: "Le tonalità dei colori appaiono invertite (ad esempio il blu diventa rosso)",
        cause: "Lo standard ASS struttura i colori nella sequenza esadecimale BGR (Blu-Verde-Rosso), a differenza del web e del codice HTML che impiegano l'ordine RGB.",
        solution: "Il nostro convertitore adatta automaticamente i codici esadecimali HTML alla sequenza BGR richiesta da ASS ({\\c&HBBGGRR&}), garantendo fedeltà cromatica."
      },
      {
        issue: "Il lettore multimediale visualizza codici grezzi come {\\b1} sul video",
        cause: "Alcuni media player essenziali o obsoleti sono privi del motore di rendering ASS (libass) e considerano i tag di formattazione come testo convenzionale.",
        solution: "Adotta software multimediali aggiornati con pieno supporto per ASS come VLC Media Player, MPV o PotPlayer."
      }
    ],

    timingTitle: "La Conversione da SRT a ASS Altera la Sincronizzazione?",
    timingText: [
      "No. La perfetta sincronizzazione audio-video dei sottotitoli viene rigorosamente preservata. Nel formato SubRip (.srt) i tempi sono espressi in ore, minuti, secondi e millisecondi (00:01:23,450), mentre in Advanced SubStation Alpha (.ass) vengono quantificati in centesimi di secondo (0:01:23.45).",
      "Il nostro algoritmo applica una divisione esatta per 10 con arrotondamento matematico a due cifre decimali. Di conseguenza, ogni riga di testo apparirà e scomparirà esattamente negli stessi identici fotogrammi video (frame) del file di partenza."
    ],

    aegisubTitle: "Come Modificare Ulteriormente il Tuo File ASS in Aegisub",
    aegisubSubtitle: "Una volta scaricato il file .ass, Aegisub ti garantisce pieno potere creativo sulla presentazione visiva:",
    aegisubSteps: [
      "Avvia Aegisub, fai clic su File > Apri sottotitoli e seleziona il file .ass che hai appena convertito.",
      "Accedi al menu Video > Apri video per caricare il tuo filmato e controllare visivamente la corretta collocazione del testo.",
      "Apri la finestra Sottotitoli > Gestore stili per personalizzare lo stile 'Default': modifica tipo di carattere, dimensione, contorni, colori e ombre.",
      "Sfrutta gli strumenti visivi di impaginazione di Aegisub (trascinamento, rotazione, maschera vettoriale) per posizionare le frasi sopra specifici elementi visivi.",
      "Salva il file .ass aggiornato per preservare per sempre le tue personalizzazioni stilistiche e l'ottimizzazione della timeline."
    ],

    conclusionTitle: "Converti i Tuoi Sottotitoli da SRT a ASS Adesso",
    conclusionText: [
      "Pronto a impreziosire i tuoi sottotitoli con font di carattere, contorni definiti e un posizionamento millimetrico? Usa subito il nostro convertitore gratuito in alto per una trasformazione istantanea, pulita e protetta direttamente nel tuo browser.",
      "Esplora inoltre la nostra gamma completa di strumenti gratuiti per i sottotitoli:",
      "• Convertitore da TXT a SRT: Trasforma trascrizioni e testi semplici in file di sottotitoli SRT perfettamente sincronizzati.",
      "• Convertitore da SRT a Testo: Rimuovi minutaggi e numeri sequenziali per ottenere una trascrizione pulita e leggibile.",
      "• Convertitore da SRT a VTT: Prepara i tuoi sottotitoli SubRip per il web e lo standard video HTML5.",
      "• Convertitore da VTT a SRT: Converti i sottotitoli WebVTT nel diffuso formato SubRip per i software di montaggio video."
    ]
  }
};

export function getSrtToAssGuideContent(locale: Locale): SrtToAssGuideContent {
  return SRT_TO_ASS_GUIDE[locale] || SRT_TO_ASS_GUIDE.en;
}
