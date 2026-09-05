import type { Locale } from './config';

export interface SrtToVttGuideContent {
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
    vtt: string;
  }[];
  syntaxBreakdownTitle: string;
  syntaxBreakdownText: string[];

  renameTitle: string;
  renameSubtitle: string;
  renameReasons: {
    problem: string;
    explanation: string;
  }[];

  exampleTitle: string;
  exampleIntro: string;
  exampleSrtInput: string;
  exampleVttOutput: string;
  exampleExplanation: string;

  ffmpegTitle: string;
  ffmpegSubtitle: string;
  ffmpegCommand: string;
  ffmpegExplanation: string[];

  html5Title: string;
  html5Subtitle: string;
  html5CodeSnippet: string;
  html5Explanation: string[];

  whenToUseTitle: string;
  whenToUseSubtitle: string;
  whenToUseSrt: string[];
  whenToUseVtt: string[];

  troubleshootTitle: string;
  troubleshootSubtitle: string;
  troubleshootTips: {
    issue: string;
    cause: string;
    solution: string;
  }[];

  timingTitle: string;
  timingText: string[];

  textPreservationTitle: string;
  textPreservationText: string[];

  webAppsTitle: string;
  webAppsText: string[];

  conclusionTitle: string;
  conclusionText: string[];
}

export const SRT_TO_VTT_GUIDE: Record<Locale, SrtToVttGuideContent> = {
  en: {
    introTitle: "Complete Guide to Converting SubRip (SRT) Subtitles to WebVTT (VTT)",
    introSubtitle: "Learn how to convert SRT subtitle files into W3C-compliant WebVTT format for HTML5 web video players, modern browsers, and streaming platforms.",
    introText: [
      "SubRip (.srt) and WebVTT (.vtt) are the two most dominant subtitle formats in modern video production. While SRT has long been the standard for desktop media players and professional video editing suites, WebVTT (Web Video Text Tracks) is the official W3C web standard specifically engineered for HTML5 video playback, modern browsers, and online learning platforms.",
      "If you attempt to load a raw .srt file into an HTML5 <video> element using a <track> tag, modern browsers will reject the track because they strictly require valid WebVTT syntax. Our free online SRT to VTT converter bridges this compatibility gap instantly—transforming your SubRip files into fully compliant WebVTT files directly in your web browser with 100% client-side privacy."
    ],
    whatIsTitle: "What Is an SRT to VTT Converter?",
    whatIsText: [
      "An SRT to VTT converter is a specialized subtitle transformation tool that converts SubRip (.srt) caption files into the WebVTT (.vtt) format. While both file types are plain-text formats designed to display timed captions over video, they adhere to different syntax rules, timestamp delimiters, and structural headers.",
      "A converter takes the subtitle sequence numbers, timecode ranges, and caption text from an SRT file, prepends the mandatory 'WEBVTT' file signature header, translates comma-based millisecond delimiters (00:00:01,000) into period-based millisecond delimiters (00:00:01.000), and outputs clean, standards-compliant WebVTT code."
    ],
    whyConvertTitle: "Why Convert SRT to VTT? Practical Web Benefits",
    whyConvertSubtitle: "Converting your subtitle files from SRT to WebVTT is essential for numerous online video and web development scenarios:",
    whyConvertReasons: [
      {
        title: "Native HTML5 Video Player Compatibility",
        description: "Modern web browsers (Chrome, Safari, Firefox, Edge) natively support WebVTT via the HTML5 <track> element. Browsers do not natively parse SRT files without heavy custom JavaScript libraries."
      },
      {
        title: "Web Accessibility (WCAG 2.1 & ADA Compliance)",
        description: "Providing closed captions in WebVTT format ensures your web video content meets global accessibility standards, accommodating deaf and hard-of-hearing viewers."
      },
      {
        title: "Support for Modern Web Video Players",
        description: "Popular web media players—including Video.js, Plyr, JW Player, HLS.js, and Dash.js—use WebVTT as their primary format for synchronized closed captions and chapter markers."
      },
      {
        title: "Online Learning Management Systems (LMS)",
        description: "Platforms like Canvas, Moodle, Blackboard, Teachable, and Coursera specifically require WebVTT caption uploads for course lecture videos."
      },
      {
        title: "Advanced CSS Styling & Positioning Capabilities",
        description: "Unlike basic SRT files, WebVTT supports CSS styling (::cue selector), font colors, backgrounds, text alignment, and precise screen positioning cues."
      },
      {
        title: "Improved Mobile & Browser Performance",
        description: "Because browsers parse WebVTT natively at the engine level, caption rendering is lightning fast, highly responsive, and consumes less CPU than third-party subtitle polyfills."
      }
    ],
    howToTitle: "How to Convert SRT to VTT Online in 5 Simple Steps",
    howToSubtitle: "Follow this straightforward guide to turn any SubRip subtitle file into a standard WebVTT file in seconds:",
    howToSteps: [
      {
        step: "1",
        title: "Upload Your SRT File or Paste Text",
        description: "Drag and drop your .srt document into the upload zone above, browse your computer, or paste raw SubRip text into the input box."
      },
      {
        step: "2",
        title: "Automatic Instant Conversion",
        description: "Our browser-based engine automatically adds the WEBVTT header and reformats comma timestamps into period delimiters in real time."
      },
      {
        step: "3",
        title: "Review Your WebVTT Output",
        description: "Inspect the generated WebVTT cues in the live preview window to verify that timecodes and text formatting are intact."
      },
      {
        step: "4",
        title: "Copy or Download .VTT File",
        description: "Click 'Download .VTT' to save the file to your hard drive, or click 'Copy to Clipboard' for immediate pasting into your web project."
      },
      {
        step: "5",
        title: "Integrate with Your Video Player",
        description: "Link the downloaded .vtt file to your HTML5 video using the <track kind=\"subtitles\"> tag or upload it to your video hosting platform."
      }
    ],
    differenceTitle: "What Is the Difference Between SRT and VTT?",
    differenceSubtitle: "Technical comparison between SubRip (.srt) and WebVTT (.vtt) formats:",
    differenceTable: [
      {
        feature: "Primary Ecosystem",
        srt: "Desktop media players (VLC), desktop NLE video editors (Premiere, Final Cut)",
        vtt: "Web browsers, HTML5 <video> elements, online media players, LMS platforms"
      },
      {
        feature: "Mandatory Header",
        srt: "None (starts directly with cue number 1)",
        vtt: "Mandatory 'WEBVTT' signature on line 1"
      },
      {
        feature: "Timestamp Delimiter",
        srt: "Comma before milliseconds (00:01:23,456)",
        vtt: "Period / dot before milliseconds (00:01:23.456)"
      },
      {
        feature: "Sequential Cue Numbers",
        srt: "Strictly mandatory (1, 2, 3...)",
        vtt: "Optional (cue identifiers are supported but not required)"
      },
      {
        feature: "CSS Styling & Classes",
        srt: "Limited to legacy HTML tags (<b>, <i>, <u>)",
        vtt: "Full CSS styling support via ::cue pseudo-element, voice tags, and classes"
      },
      {
        feature: "Screen Positioning Cues",
        srt: "Not supported (always positioned at bottom center)",
        vtt: "Supported (line:X%, position:Y%, align:start/end/center)"
      },
      {
        feature: "Native Browser Support",
        srt: "No (requires JavaScript parsing library)",
        vtt: "Yes (native W3C browser standard across all modern devices)"
      }
    ],
    syntaxBreakdownTitle: "Timestamp Syntax Breakdown: Comma vs. Period",
    syntaxBreakdownText: [
      "The single most critical syntax difference between SRT and WebVTT is the millisecond delimiter.",
      "• SubRip (.srt) Syntax: 00:00:01,500 --> 00:00:04,800 (Uses a comma ',')",
      "• WebVTT (.vtt) Syntax: 00:00:01.500 --> 00:00:04.800 (Uses a decimal period '.')",
      "Because web browser HTML5 media engines expect strict W3C WebVTT syntax, encountering a comma in place of a period will cause the browser parser to silently discard the subtitle cue."
    ],
    renameTitle: "Can You Just Rename an .SRT File to .VTT?",
    renameSubtitle: "Why simply renaming the file extension in File Explorer or Finder will break your web subtitles:",
    renameReasons: [
      {
        problem: "Missing Mandatory WEBVTT Header",
        explanation: "HTML5 video parsers examine the very first line of the file. If it does not begin with the exact string 'WEBVTT', the browser immediately aborts parsing and displays nothing."
      },
      {
        problem: "Invalid Millisecond Comma Delimiters",
        explanation: "Renaming a file does not change its internal text. The timestamps will still contain commas (00:00:01,000) rather than periods (00:00:01.000), causing timecode parsing syntax errors in the browser."
      },
      {
        problem: "Silent Failure in Web Players",
        explanation: "When a browser encounters a renamed .srt file loaded via a <track> tag, it typically fails silently without showing an on-screen error, leaving viewers without captions."
      }
    ],
    exampleTitle: "SRT to VTT Conversion Example: Before and After",
    exampleIntro: "Compare this real-world example showing how a SubRip file is structured before and after conversion into WebVTT:",
    exampleSrtInput: `1
00:00:01,000 --> 00:00:04,500
Welcome to our video production tutorial.

2
00:00:04,600 --> 00:00:08,200
Today we are learning how to convert SRT
subtitles into WebVTT format.`,
    exampleVttOutput: `WEBVTT

00:00:01.000 --> 00:00:04.500
Welcome to our video production tutorial.

00:00:04.600 --> 00:00:08.200
Today we are learning how to convert SRT
subtitles into WebVTT format.`,
    exampleExplanation: "Notice the two key transformations: the mandatory 'WEBVTT' header was inserted at the very top, and all timecode commas (00:00:01,000) were converted into decimal periods (00:00:01.000). The subtitle text and exact playback timing remain 100% preserved.",
    ffmpegTitle: "How to Convert SRT to VTT With FFmpeg (Command-Line Guide)",
    ffmpegSubtitle: "For developers and automated video pipelines using command-line tools:",
    ffmpegCommand: "ffmpeg -i input.srt output.vtt",
    ffmpegExplanation: [
      "FFmpeg is a powerful open-source multimedia framework that can convert subtitle files from the terminal or command line. To convert an SRT file to WebVTT, run the basic command shown above.",
      "• '-i input.srt': Specifies the path to your source SubRip subtitle file.",
      "• 'output.vtt': Specifies the destination filename. FFmpeg automatically recognizes the .vtt extension and writes a valid WebVTT file.",
      "Note: Using FFmpeg requires downloading, installing, and configuring command-line binaries on your system. For quick, one-off conversions or users without terminal access, our free online browser converter delivers the same standardized WebVTT output instantly without installing software."
    ],
    html5Title: "Using WebVTT Subtitles with HTML5 Video (<track> Tag)",
    html5Subtitle: "How to embed your converted .vtt subtitle file into a website or web application:",
    html5CodeSnippet: `<video controls width="800" poster="thumbnail.jpg">
  <source src="video.mp4" type="video/mp4">
  <track 
    label="English" 
    kind="subtitles" 
    srclang="en" 
    src="subtitles.vtt" 
    default>
</video>`,
    html5Explanation: [
      "To display closed captions on your website, place a <track> element inside your HTML5 <video> block.",
      "• 'kind=\"subtitles\"': Tells the browser that this track contains translated dialogue or captions.",
      "• 'srclang=\"en\"': Specifies the two-letter language code (such as 'en' for English or 'es' for Spanish).",
      "• 'label=\"English\"': The user-friendly name displayed in the video player's subtitle selector menu.",
      "• 'default': Automatically enables this subtitle track when the video starts playing."
    ],
    whenToUseTitle: "When Should You Use SRT vs. WebVTT?",
    whenToUseSubtitle: "Choose the optimal subtitle format based on your publishing destination:",
    whenToUseSrt: [
      "Video Editing in Desktop NLEs (Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro)",
      "Uploading to YouTube Studio, Facebook, or Vimeo for server-side processing",
      "Playing local video files in desktop media players like VLC, MPC-HC, or MPV",
      "Broadcasting and traditional post-production workflows"
    ],
    whenToUseVtt: [
      "Embedding video on websites using native HTML5 <video> and <track> tags",
      "Custom web video players (Video.js, Plyr, JW Player, Bitmovin)",
      "Online course platforms and LMS software (Canvas, Moodle, Teachable)",
      "Web applications requiring CSS custom subtitle styling and screen positioning"
    ],
    troubleshootTitle: "Common SRT to VTT Conversion Problems & Troubleshooting",
    troubleshootSubtitle: "Resolve frequent WebVTT playback and formatting issues quickly:",
    troubleshootTips: [
      {
        issue: "Captions Not Displaying in Web Browser",
        cause: "The server is serving the .vtt file with an incorrect MIME type, or the file is missing the 'WEBVTT' header.",
        solution: "Ensure your web server (Apache/Nginx) sends the 'Content-Type: text/vtt; charset=utf-8' header, and confirm the file begins with 'WEBVTT'."
      },
      {
        issue: "CORS (Cross-Origin Resource Sharing) Errors",
        cause: "The .vtt subtitle file is hosted on a different domain or CDN than the web page without CORS headers.",
        solution: "Add 'crossorigin=\"anonymous\"' to your <video> tag and configure 'Access-Control-Allow-Origin: *' on your CDN server."
      },
      {
        issue: "Corrupted Accents or Special Characters (Mojibake)",
        cause: "The original SRT file was saved in ANSI or Windows-1252 instead of UTF-8 encoding.",
        solution: "Our converter automatically exports valid UTF-8 encoded VTT files to ensure all international characters display properly."
      },
      {
        issue: "Timestamps Contain Commas Instead of Periods",
        cause: "The file was simply renamed from .srt to .vtt without true syntax conversion.",
        solution: "Use our online converter to properly convert millisecond commas into standard WebVTT decimal points."
      }
    ],
    timingTitle: "Does Converting SRT to VTT Change Subtitle Timing?",
    timingText: [
      "No. A proper format conversion strictly preserves the exact start and end timestamps of every subtitle cue.",
      "The only change is syntactic: the millisecond delimiter is converted from a comma to a period (e.g., '00:01:23,456' becomes '00:01:23.456'). The actual on-screen duration and synchronization with your video remain 100% unchanged."
    ],
    textPreservationTitle: "Does Converting SRT to VTT Preserve Subtitle Text?",
    textPreservationText: [
      "Yes. All dialogue lines, spoken words, speaker prefixes, and line breaks are fully preserved during conversion.",
      "Basic inline formatting tags (such as <i> for italics and <b> for bold) are standard in both formats and will display properly across all modern WebVTT-compliant video players."
    ],
    webAppsTitle: "SRT to VTT for Websites, Web Apps & Developers",
    webAppsText: [
      "For frontend developers and web creators, WebVTT is the bedrock of modern web video accessibility. It integrates seamlessly with modern JavaScript frameworks (React, Vue, Svelte, Next.js) and standard browser APIs like the TextTrack and TextTrackCue interfaces.",
      "By converting your desktop SRT files to WebVTT, you unlock automated accessibility compliance, search-engine indexing of video text tracks, and frictionless cross-browser caption rendering."
    ],
    conclusionTitle: "Convert SRT Subtitles to WebVTT in Seconds",
    conclusionText: [
      "Converting SubRip (.srt) subtitles to WebVTT (.vtt) is the essential step for publishing synchronized captions on websites, HTML5 video players, and e-learning platforms. Our free online converter provides instant, browser-based conversion with full standards compliance and total privacy.",
      "Explore our complete suite of subtitle conversion tools:",
      "• TXT to SRT Converter: Convert raw text transcripts into synchronized SubRip subtitles.",
      "• SRT to Text Converter: Strip timestamps and extract clean plain text transcripts from SRT files.",
      "• VTT to SRT Converter: Convert WebVTT captions back into universal SubRip files for video editors."
    ]
  },
  es: {
    introTitle: "Guía Completa para Convertir Subtítulos SRT a WebVTT (VTT)",
    introSubtitle: "Aprende a transformar archivos SubRip (.srt) en el formato estándar WebVTT (.vtt) para reproductores de video HTML5, navegadores web y plataformas educativas.",
    introText: [
      "SubRip (.srt) y WebVTT (.vtt) son los dos formatos de subtítulos más utilizados. Mientras que SRT es el estándar clásico para reproductores de escritorio y programas de edición, WebVTT es el estándar oficial del W3C diseñado específicamente para la web y reproductores HTML5.",
      "Si intentas cargar un archivo .srt en una etiqueta <video> con un elemento <track>, el navegador no lo mostrará porque requiere la sintaxis estricta de WebVTT. Nuestro convertidor gratuito en línea realiza esta conversión en segundos directamente en tu navegador con total privacidad."
    ],
    whatIsTitle: "¿Qué es un Convertidor de SRT a VTT?",
    whatIsText: [
      "Un convertidor de SRT a VTT es una herramienta que transforma archivos SubRip (.srt) en el formato WebVTT (.vtt).",
      "El convertidor añade el encabezado obligatorio 'WEBVTT' al inicio del archivo y cambia las comas de los milisegundos (00:00:01,000) por puntos decimales (00:00:01.000), garantizando que los navegadores web puedan leer las pistas de subtítulos sin errores."
    ],
    whyConvertTitle: "¿Por Qué Convertir SRT a VTT? Ventajas para la Web",
    whyConvertSubtitle: "Razones principales para convertir subtítulos a WebVTT:",
    whyConvertReasons: [
      { title: "Compatibilidad Nativa con Video HTML5", description: "Los navegadores modernos soportan WebVTT de forma nativa mediante la etiqueta <track>." },
      { title: "Accesibilidad Web (Estándares WCAG)", description: "Permite cumplir con las normas de accesibilidad para personas con dificultades auditivas." },
      { title: "Plataformas de Cursos y LMS", description: "Sistemas como Moodle, Canvas, Teachable y Coursera exigen subtítulos en formato WebVTT." },
      { title: "Estilos CSS y Posicionamiento", description: "WebVTT permite personalizar colores, fuentes y posición de los subtítulos en pantalla." }
    ],
    howToTitle: "Cómo Convertir SRT a VTT Online en 5 Pasos",
    howToSubtitle: "Sigue este sencillo proceso:",
    howToSteps: [
      { step: "1", title: "Sube tu Archivo SRT", description: "Arrastra tu archivo .srt o pega el texto en el convertidor." },
      { step: "2", title: "Conversión Instantánea", description: "La herramienta añade el encabezado WEBVTT y ajusta los puntos decimales." },
      { step: "3", title: "Revisa la Vista Previa", description: "Comprueba el resultado formateado en tiempo real." },
      { step: "4", title: "Descarga el Archivo .VTT", description: "Guarda tu archivo .vtt listo para usar." },
      { step: "5", title: "Intégralo en tu Reproductor", description: "Vincúlalo con tu video HTML5 mediante la etiqueta <track>." }
    ],
    differenceTitle: "¿Cuál es la Diferencia Entre SRT y VTT?",
    differenceSubtitle: "Comparativa técnica entre ambos formatos:",
    differenceTable: [
      { feature: "Entorno Principal", srt: "Reproductores de escritorio (VLC) y editores (Premiere)", vtt: "Navegadores web, HTML5 y plataformas online" },
      { feature: "Encabezado Obligatorio", srt: "Ninguno", vtt: "Obligatorio: 'WEBVTT' en la primera línea" },
      { feature: "Separador de Milisegundos", srt: "Coma (00:01:23,456)", vtt: "Punto decimal (00:01:23.456)" },
      { feature: "Soporte Nativo en Navegadores", srt: "No (requiere librerías JS)", vtt: "Sí (estándar oficial W3C)" }
    ],
    syntaxBreakdownTitle: "Sintaxis de Tiempos: Coma vs. Punto",
    syntaxBreakdownText: [
      "La diferencia fundamental radica en el delimitador de milisegundos:",
      "• SRT: 00:00:01,500 --> 00:00:04,800 (usa coma ',')",
      "• VTT: 00:00:01.500 --> 00:00:04.800 (usa punto '.')",
      "Los navegadores web descartan cualquier subtítulo que contenga comas en lugar de puntos."
    ],
    renameTitle: "¿Se Puede Solo Cambiar la Extensión de .SRT a .VTT?",
    renameSubtitle: "Por qué cambiar el nombre del archivo no funciona:",
    renameReasons: [
      { problem: "Falta el Encabezado WEBVTT", explanation: "Sin la palabra 'WEBVTT' en la primera línea, el navegador rechaza el archivo." },
      { problem: "Las Comas no se Convierten", explanation: "Cambiar el nombre no modifica el contenido interno, manteniendo comas inválidas." }
    ],
    exampleTitle: "Ejemplo de Conversión SRT a VTT: Antes y Después",
    exampleIntro: "Observa la transformación del formato:",
    exampleSrtInput: `1
00:00:01,000 --> 00:00:04,500
Bienvenido a nuestro tutorial.

2
00:00:04,600 --> 00:00:08,200
Hoy aprenderemos a convertir subtítulos SRT a WebVTT.`,
    exampleVttOutput: `WEBVTT

00:00:01.000 --> 00:00:04.500
Bienvenido a nuestro tutorial.

00:00:04.600 --> 00:00:08.200
Hoy aprenderemos a convertir subtítulos SRT a WebVTT.`,
    exampleExplanation: "Se añade el encabezado WEBVTT y las comas de tiempo se convierten en puntos decimales.",
    ffmpegTitle: "Cómo Convertir SRT a VTT con FFmpeg (Línea de Comandos)",
    ffmpegSubtitle: "Comando para usuarios avanzados:",
    ffmpegCommand: "ffmpeg -i entrada.srt salida.vtt",
    ffmpegExplanation: [
      "FFmpeg reconoce automáticamente la extensión .vtt y genera un archivo WebVTT válido.",
      "Para conversiones rápidas sin instalar software, nuestro convertidor web ofrece el mismo resultado al instante."
    ],
    html5Title: "Uso de Subtítulos WebVTT en Video HTML5",
    html5Subtitle: "Ejemplo de integración en una página web:",
    html5CodeSnippet: `<video controls width="800">
  <source src="video.mp4" type="video/mp4">
  <track label="Español" kind="subtitles" srclang="es" src="subtitulos.vtt" default>
</video>`,
    html5Explanation: [
      "La etiqueta <track> permite vincular el archivo .vtt directamente con el video HTML5.",
      "El atributo 'default' activa los subtítulos automáticamente al reproducir el video."
    ],
    whenToUseTitle: "¿Cuándo Usar SRT y Cuándo WebVTT?",
    whenToUseSubtitle: "Guía de decisión rápida:",
    whenToUseSrt: [
      "Edición de video en Premiere Pro, DaVinci Resolve o Final Cut Pro",
      "Subida directa a YouTube Studio o Facebook",
      "Reproducción local en VLC Media Player"
    ],
    whenToUseVtt: [
      "Videos en páginas web mediante etiquetas HTML5",
      "Plataformas educativas y cursos online (LMS)",
      "Reproductores web como Video.js o Plyr"
    ],
    troubleshootTitle: "Problemas Comunes y Soluciones",
    troubleshootSubtitle: "Cómo resolver errores frecuentes:",
    troubleshootTips: [
      { issue: "Los subtítulos no aparecen en el navegador", cause: "Falta el encabezado WEBVTT o el servidor no tiene configurado el tipo MIME text/vtt.", solution: "Verifica que el archivo comience con 'WEBVTT' y que el servidor entregue el archivo como text/vtt." },
      { issue: "Caracteres extraños en acentos", cause: "El archivo original no estaba guardado en UTF-8.", solution: "Nuestro convertidor exporta siempre en UTF-8 estándar." }
    ],
    timingTitle: "¿La Conversión Altera la Sincronización?",
    timingText: [
      "No. La conversión solo modifica la sintaxis (cambia comas por puntos y añade el encabezado). Los tiempos de inicio y fin se mantienen exactamente iguales."
    ],
    textPreservationTitle: "¿Se Conserva el Texto del Subtítulo?",
    textPreservationText: [
      "Sí. Todas las líneas de diálogo, etiquetas de cursiva y formato se transfieren intactas al archivo WebVTT."
    ],
    webAppsTitle: "WebVTT para Aplicaciones Web",
    webAppsText: [
      "WebVTT se integra de forma nativa con frameworks modernos (React, Vue, Next.js) y permite un control total mediante JavaScript y CSS."
    ],
    conclusionTitle: "Convierte tus Subtítulos a WebVTT al Instante",
    conclusionText: [
      "Convierte archivos SRT a WebVTT en segundos con total compatibilidad y privacidad.",
      "Explora nuestras otras herramientas:",
      "• Convertidor de TXT a SRT: Crea subtítulos sincronizados desde texto plano.",
      "• Convertidor de SRT a Texto: Extrae transcripciones limpias sin marcas de tiempo.",
      "• Convertidor de VTT a SRT: Transforma archivos WebVTT en SubRip."
    ]
  },
  pt: {
    introTitle: "Guia Completo para Converter Legendas SRT em WebVTT (VTT)",
    introSubtitle: "Aprenda a transformar arquivos SubRip (.srt) no formato padrão WebVTT (.vtt) para vídeos HTML5, navegadores e plataformas de cursos.",
    introText: [
      "SubRip (.srt) e WebVTT (.vtt) são os formatos de legendas mais usados no mundo. Enquanto o SRT é o padrão clássico para editores de vídeo e reprodutores locais, o WebVTT é o padrão oficial da web (W3C) para vídeo HTML5.",
      "Nosso conversor online gratuito de SRT para VTT realiza essa conversão instantaneamente no seu navegador com total privacidade."
    ],
    whatIsTitle: "O Que é um Conversor de SRT para VTT?",
    whatIsText: [
      "É uma ferramenta que adapta a estrutura de legendas SubRip para o formato WebVTT, adicionando o cabeçalho 'WEBVTT' e convertendo as vírgulas de tempo em pontos decimais."
    ],
    whyConvertTitle: "Por Que Converter SRT para VTT?",
    whyConvertSubtitle: "Principais motivos para usar WebVTT na web:",
    whyConvertReasons: [
      { title: "Suporte Nativo em Navegadores", description: "Compatível diretamente com a tag <track> do HTML5 em todos os navegadores modernos." },
      { title: "Acessibilidade na Web", description: "Garante conformidade com as diretrizes de acessibilidade para deficientes auditivos." },
      { title: "Plataformas de E-Learning", description: "Exigido por sistemas como Moodle, Canvas, Teachable e Hotmart." }
    ],
    howToTitle: "Como Converter SRT para VTT Online em 5 Passos",
    howToSubtitle: "Passo a passo rápido:",
    howToSteps: [
      { step: "1", title: "Envie o Arquivo SRT", description: "Arraste o arquivo .srt ou cole o texto no conversor." },
      { step: "2", title: "Conversão Automática", description: "A ferramenta aplica o cabeçalho e ajusta a pontuação." },
      { step: "3", title: "Confira a Prévia", description: "Visualize o formato WebVTT em tempo real." },
      { step: "4", title: "Baixe o Arquivo .VTT", description: "Salve o arquivo pronto para o seu site." },
      { step: "5", title: "Integre com seu Vídeo", description: "Adicione à tag <video> usando o elemento <track>." }
    ],
    differenceTitle: "Qual a Diferença Entre SRT e VTT?",
    differenceSubtitle: "Comparação técnica dos formatos:",
    differenceTable: [
      { feature: "Uso Principal", srt: "Editores de vídeo (Premiere) e VLC", vtt: "Web, navegadores e players HTML5" },
      { feature: "Cabeçalho", srt: "Nenhum", vtt: "Obrigatório 'WEBVTT' no início" },
      { feature: "Separador de Tempo", srt: "Vírgula (00:01:23,456)", vtt: "Ponto decimal (00:01:23.456)" }
    ],
    syntaxBreakdownTitle: "Sintaxe de Tempo: Vírgula vs. Ponto",
    syntaxBreakdownText: [
      "O SRT usa vírgula antes dos milissegundos (00:00:01,000), enquanto o WebVTT exige ponto decimal (00:00:01.000)."
    ],
    renameTitle: "Basta Renomear .SRT para .VTT?",
    renameSubtitle: "Por que apenas renomear o arquivo não funciona:",
    renameReasons: [
      { problem: "Falta o Cabeçalho WEBVTT", explanation: "O navegador não reconhece o arquivo sem o cabeçalho oficial." },
      { problem: "As Vírgulas Permanecem", explanation: "Renomear não altera as vírgulas internas, causando erro de leitura." }
    ],
    exampleTitle: "Exemplo de Conversão SRT para VTT",
    exampleIntro: "Veja a transformação na prática:",
    exampleSrtInput: `1
00:00:01,000 --> 00:00:04,500
Bem-vindo ao nosso tutorial de vídeo.

2
00:00:04,600 --> 00:00:08,200
Hoje vamos aprender a converter SRT para WebVTT.`,
    exampleVttOutput: `WEBVTT

00:00:01.000 --> 00:00:04.500
Bem-vindo ao nosso tutorial de vídeo.

00:00:04.600 --> 00:00:08.200
Hoje vamos aprender a converter SRT para WebVTT.`,
    exampleExplanation: "O cabeçalho WEBVTT é incluído e as vírgulas tornam-se pontos.",
    ffmpegTitle: "Converter SRT para VTT com FFmpeg",
    ffmpegSubtitle: "Comando de terminal:",
    ffmpegCommand: "ffmpeg -i entrada.srt saida.vtt",
    ffmpegExplanation: [
      "O FFmpeg converte arquivos pela linha de comando com precisão.",
      "Para conversões rápidas sem instalação, use nosso conversor online gratuito."
    ],
    html5Title: "Como Usar WebVTT no HTML5",
    html5Subtitle: "Exemplo de código:",
    html5CodeSnippet: `<video controls width="800">
  <source src="video.mp4" type="video/mp4">
  <track label="Português" kind="subtitles" srclang="pt" src="legendas.vtt" default>
</video>`,
    html5Explanation: [
      "Use a tag <track> dentro do elemento <video> para carregar as legendas automaticamente."
    ],
    whenToUseTitle: "Quando Usar Cada Formato?",
    whenToUseSubtitle: "Guia prático de escolha:",
    whenToUseSrt: ["Edição no Premiere, DaVinci e Final Cut", "Envio para YouTube Studio", "Reprodução no VLC"],
    whenToUseVtt: ["Vídeos em sites e navegadores", "Plataformas de cursos online (LMS)", "Players como Video.js"],
    troubleshootTitle: "Resolução de Problemas Comuns",
    troubleshootSubtitle: "Dicas úteis:",
    troubleshootTips: [
      { issue: "Legendas não aparecem no navegador", cause: "Falta o cabeçalho WEBVTT ou erro de MIME type no servidor.", solution: "Garanta o cabeçalho 'WEBVTT' e configure o servidor para 'text/vtt'." }
    ],
    timingTitle: "A Conversão Altera a Sincronização?",
    timingText: ["Não. Os tempos de início e fim continuam rigorosamente idênticos."],
    textPreservationTitle: "O Texto é Mantido Integralmente?",
    textPreservationText: ["Sim. Todo o diálogo e marcações de formatação são preservados."],
    webAppsTitle: "WebVTT para Desenvolvedores Web",
    webAppsText: ["Permite estilização completa com CSS através do pseudo-elemento ::cue."],
    conclusionTitle: "Converta Suas Legendas Agora",
    conclusionText: [
      "Transforme legendas SRT em WebVTT em segundos com total privacidade.",
      "Conheça nossas outras ferramentas:",
      "• Conversor de TXT para SRT: Crie legendas a partir de textos.",
      "• Conversor de SRT para Texto: Extraia transcrições limpas.",
      "• Conversor de VTT para SRT: Converta WebVTT em SubRip."
    ]
  },
  fr: {
    introTitle: "Guide Complet pour Convertir des Sous-Titres SRT en WebVTT (VTT)",
    introSubtitle: "Apprenez à transformer des fichiers SubRip (.srt) au format standard WebVTT (.vtt) pour les lecteurs vidéo HTML5, navigateurs et plateformes en ligne.",
    introText: [
      "SubRip (.srt) et WebVTT (.vtt) sont les formats de sous-titres les plus répandus. Alors que le format SRT est le standard pour les logiciels de montage et lecteurs de bureau, WebVTT est le standard officiel du W3C pour la vidéo sur le web.",
      "Notre convertisseur en ligne gratuit transforme vos sous-titres SRT en WebVTT instantanément dans votre navigateur avec une confidentialité totale."
    ],
    whatIsTitle: "Qu'est-ce qu'un Convertisseur SRT en VTT ?",
    whatIsText: [
      "Il s'agit d'un outil qui convertit la structure SubRip au standard WebVTT en ajoutant l'en-tête 'WEBVTT' et en remplaçant les virgules temporelles par des points décimaux."
    ],
    whyConvertTitle: "Pourquoi Convertir SRT en VTT ?",
    whyConvertSubtitle: "Avantages clés pour le web :",
    whyConvertReasons: [
      { title: "Compatibilité Native HTML5", description: "Reconnu directement par la balise <track> de tous les navigateurs modernes." },
      { title: "Accessibilité Web (Normes WCAG)", description: "Assure l'accessibilité des vidéos pour les personnes malentendantes." },
      { title: "Plateformes de Cours en Ligne", description: "Requis par Moodle, Canvas, Teachable et les LMS modernes." }
    ],
    howToTitle: "Comment Convertir SRT en VTT en 5 Étapes",
    howToSubtitle: "Guide rapide de conversion :",
    howToSteps: [
      { step: "1", title: "Importez le Fichier SRT", description: "Déposez votre fichier .srt ou collez le texte." },
      { step: "2", title: "Conversion Automatique", description: "L'outil applique les normes WebVTT instantanément." },
      { step: "3", title: "Vérifiez l'Aperçu", description: "Contrôlez le formatage en direct." },
      { step: "4", title: "Téléchargez le Fichier .VTT", description: "Enregistrez le fichier prêt pour votre site web." },
      { step: "5", title: "Intégrez à Votre Vidéo", description: "Associez le fichier .vtt à la balise <track>." }
    ],
    differenceTitle: "Différences Entre SRT et VTT",
    differenceSubtitle: "Comparatif technique :",
    differenceTable: [
      { feature: "Usage Principal", srt: "Montage vidéo (Premiere) et VLC", vtt: "Web, navigateurs et lecteurs HTML5" },
      { feature: "En-tête", srt: "Aucun", vtt: "Obligatoire : 'WEBVTT'" },
      { feature: "Séparateur de Millisecondes", srt: "Virgule (00:01:23,456)", vtt: "Point décimal (00:01:23.456)" }
    ],
    syntaxBreakdownTitle: "Syntaxe Temporelle : Virgule vs. Point",
    syntaxBreakdownText: [
      "Le format SRT utilise une virgule avant les millisecondes, tandis que WebVTT impose un point décimal."
    ],
    renameTitle: "Peut-on Juste Renommer .SRT en .VTT ?",
    renameSubtitle: "Pourquoi le simple renommage échoue :",
    renameReasons: [
      { problem: "Absence de l'En-tête WEBVTT", explanation: "Le navigateur refuse le fichier sans l'en-tête officiel." },
      { problem: "Virgules Non Converties", explanation: "Le renommage ne modifie pas les virgules internes, provoquant des erreurs." }
    ],
    exampleTitle: "Exemple de Conversion SRT en VTT",
    exampleIntro: "Exemple concret avant/après :",
    exampleSrtInput: `1
00:00:01,000 --> 00:00:04,500
Bienvenue dans notre tutoriel vidéo.

2
00:00:04,600 --> 00:00:08,200
Aujourd'hui nous apprenons à convertir des SRT en WebVTT.`,
    exampleVttOutput: `WEBVTT

00:00:01.000 --> 00:00:04.500
Bienvenue dans notre tutoriel vidéo.

00:00:04.600 --> 00:00:08.200
Aujourd'hui nous apprenons à convertir des SRT en WebVTT.`,
    exampleExplanation: "L'en-tête WEBVTT est inséré et les virgules deviennent des points.",
    ffmpegTitle: "Convertir SRT en VTT avec FFmpeg",
    ffmpegSubtitle: "Commande terminal :",
    ffmpegCommand: "ffmpeg -i entree.srt sortie.vtt",
    ffmpegExplanation: [
      "FFmpeg permet de convertir des fichiers en ligne de commande.",
      "Pour une conversion rapide sans installation, utilisez notre outil en ligne."
    ],
    html5Title: "Intégration HTML5 avec la Balise <track>",
    html5Subtitle: "Exemple de code :",
    html5CodeSnippet: `<video controls width="800">
  <source src="video.mp4" type="video/mp4">
  <track label="Français" kind="subtitles" srclang="fr" src="sous-titres.vtt" default>
</video>`,
    html5Explanation: [
      "Insérez la balise <track> dans votre élément <video> pour afficher les sous-titres sur votre site."
    ],
    whenToUseTitle: "Quand Utiliser SRT ou WebVTT ?",
    whenToUseSubtitle: "Guide de choix :",
    whenToUseSrt: ["Logiciels de montage (Premiere Pro, DaVinci)", "Téléversement sur YouTube Studio", "Lecture avec VLC"],
    whenToUseVtt: ["Intégration web HTML5", "Plateformes de formation en ligne", "Lecteurs comme Video.js et Plyr"],
    troubleshootTitle: "Dépannage des Problèmes Courants",
    troubleshootSubtitle: "Conseils utiles :",
    troubleshootTips: [
      { issue: "Sous-titres invisibles dans le navigateur", cause: "En-tête WEBVTT manquant ou type MIME text/vtt incorrect sur le serveur.", solution: "Assurez-vous que le fichier commence par 'WEBVTT' et configurez le serveur web." }
    ],
    timingTitle: "La Synchronisation Est-elle Modifiée ?",
    timingText: ["Non. Les repères temporels de début et de fin restent strictement identiques."],
    textPreservationTitle: "Le Texte Est-il Préservé ?",
    textPreservationText: ["Oui. L'intégralité du dialogue et de la mise en forme est conservée."],
    webAppsTitle: "WebVTT pour les Développeurs Web",
    webAppsText: ["Permet une personnalisation graphique complète avec CSS via le pseudo-élément ::cue."],
    conclusionTitle: "Convertissez Vos Sous-Titres en WebVTT Dès Maintenant",
    conclusionText: [
      "Passez du format SRT à WebVTT en quelques clics avec une totale confidentialité.",
      "Découvrez nos autres outils :",
      "• Convertisseur TXT en SRT : Créez des sous-titres depuis du texte brut.",
      "• Convertisseur SRT en Texte : Extrayez des transcriptions propres.",
      "• Convertisseur VTT en SRT : Convertissez des fichiers WebVTT en SubRip."
    ]
  },
  de: {
    introTitle: "Vollständiger Leitfaden: SRT-Untertitel in WebVTT (VTT) umwandeln",
    introSubtitle: "Erfahren Sie, wie Sie SubRip-Dateien (.srt) in das W3C-konforme WebVTT-Format für HTML5-Videoplayer, Browser und E-Learning-Plattformen konvertieren.",
    introText: [
      "SRT und WebVTT sind die beiden führenden Untertitelformate. Während SRT der Standard für Schnittprogramme und Desktop-Player ist, ist WebVTT der offizielle W3C-Webstandard für HTML5-Videos.",
      "Unser kostenloser Online-Konverter wandelt SRT-Dateien direkt im Browser in gültiges WebVTT um – schnell, sicher und ohne Server-Uploads."
    ],
    whatIsTitle: "Was ist ein SRT-in-VTT-Konverter?",
    whatIsText: [
      "Ein Tool, das SubRip-Untertitel strukturell anpasst: Es fügt den 'WEBVTT'-Header hinzu und ersetzt Kommas in Zeitstempeln durch Dezimalpunkte."
    ],
    whyConvertTitle: "Warum SRT in WebVTT umwandeln?",
    whyConvertSubtitle: "Die wichtigsten Vorteile für Web-Videos:",
    whyConvertReasons: [
      { title: "Native HTML5-Kompatibilität", description: "Wird von modernen Browsern über das <track>-Element direkt ohne Plugins unterstützt." },
      { title: "Barrierefreiheit im Web (WCAG)", description: "Ermöglicht barrierefreie Videoinhalte für hörgeschädigte Nutzer." },
      { title: "E-Learning & LMS-Plattformen", description: "Standardanforderung für Moodle, Canvas und webbasierte Lernsysteme." }
    ],
    howToTitle: "In 5 Schritten SRT in VTT online konvertieren",
    howToSubtitle: "So einfach funktioniert die Umwandlung:",
    howToSteps: [
      { step: "1", title: "SRT-Datei hochladen", description: "Laden Sie die .srt-Datei hoch oder fügen Sie den Text ein." },
      { step: "2", title: "Automatische Konvertierung", description: "Der Header und die Dezimalpunkte werden sofort angepasst." },
      { step: "3", title: "Vorschau prüfen", description: "Kontrollieren Sie das WebVTT-Ergebnis in Echtzeit." },
      { step: "4", title: ".VTT-Datei herunterladen", description: "Speichern Sie die fertige Untertiteldatei." },
      { step: "5", title: "In Video einbinden", description: "Binden Sie die .vtt-Datei über das <track>-Element in Ihr HTML5-Video ein." }
    ],
    differenceTitle: "SRT vs. VTT: Die Unterschiede",
    differenceSubtitle: "Technischer Vergleich:",
    differenceTable: [
      { feature: "Haupteinsatz", srt: "Schnittprogramme (Premiere, DaVinci) und VLC", vtt: "Websites, Browser und HTML5-Videoplayer" },
      { feature: "Header", srt: "Keiner", vtt: "Zwingend erforderlich: 'WEBVTT'" },
      { feature: "Zeitstempel-Trennzeichen", srt: "Komma (00:01:23,456)", vtt: "Punkt (00:01:23.456)" }
    ],
    syntaxBreakdownTitle: "Zeitstempel-Syntax: Komma vs. Punkt",
    syntaxBreakdownText: [
      "SRT nutzt Kommas (00:00:01,000), während WebVTT Punkte erfordert (00:00:01.000)."
    ],
    renameTitle: "Kann man .SRT einfach in .VTT umbenennen?",
    renameSubtitle: "Warum das reine Umbenennen der Datei fehlschlägt:",
    renameReasons: [
      { problem: "Fehlender WEBVTT-Header", explanation: "Browser verwerfen die Datei ohne den offiziellen Header." },
      { problem: "Kommas bleiben erhalten", explanation: "Das Umbenennen ändert nicht die Kommas im Text, was zu Syntaxfehlern führt." }
    ],
    exampleTitle: "Beispiel: SRT zu WebVTT",
    exampleIntro: "Vorher-Nachher-Vergleich:",
    exampleSrtInput: `1
00:00:01,000 --> 00:00:04,500
Willkommen zu unserem Video-Tutorial.

2
00:00:04,600 --> 00:00:08,200
Heute lernen wir, wie man SRT in WebVTT umwandelt.`,
    exampleVttOutput: `WEBVTT

00:00:01.000 --> 00:00:04.500
Willkommen zu unserem Video-Tutorial.

00:00:04.600 --> 00:00:08.200
Heute lernen wir, wie man SRT in WebVTT umwandelt.`,
    exampleExplanation: "Der Header wird eingefügt und alle Zeitstempelkommas werden zu Punkten.",
    ffmpegTitle: "SRT in VTT mit FFmpeg umwandeln",
    ffmpegSubtitle: "Terminal-Befehl:",
    ffmpegCommand: "ffmpeg -i eingabe.srt ausgabe.vtt",
    ffmpegExplanation: [
      "FFmpeg ermöglicht die Konvertierung per Befehlszeile.",
      "Für schnelle Einzelkonvertierungen ohne Installation nutzen Sie einfach unser Online-Tool."
    ],
    html5Title: "HTML5-Video-Einbindung mit dem <track>-Tag",
    html5Subtitle: "Code-Beispiel:",
    html5CodeSnippet: `<video controls width="800">
  <source src="video.mp4" type="video/mp4">
  <track label="Deutsch" kind="subtitles" srclang="de" src="untertitel.vtt" default>
</video>`,
    html5Explanation: ["Binden Sie die .vtt-Datei direkt im <video>-Tag Ihrer Website ein."],
    whenToUseTitle: "Wann welches Format nutzen?",
    whenToUseSubtitle: "Entscheidungshilfe:",
    whenToUseSrt: ["Videoschnitt in Premiere Pro, DaVinci oder Final Cut", "Upload bei YouTube Studio", "Lokale Wiedergabe im VLC Player"],
    whenToUseVtt: ["Websites und HTML5-Player", "Online-Akademien und LMS", "Web-Player wie Video.js"],
    troubleshootTitle: "Häufige Fehler beheben",
    troubleshootSubtitle: "Tipps zur Fehlerbehebung:",
    troubleshootTips: [
      { issue: "Untertitel werden im Browser nicht angezeigt", cause: "Fehlender WEBVTT-Header oder falscher MIME-Type (text/vtt) auf dem Webserver.", solution: "Prüfen Sie den Dateianfang und die Serverkonfiguration." }
    ],
    timingTitle: "Bleibt das Timing erhalten?",
    timingText: ["Ja, Start- und Endzeitpunkte bleiben exakt unverändert."],
    textPreservationTitle: "Bleibt der Text erhalten?",
    textPreservationText: ["Ja, der gesamte Dialogtext wird vollständig übernommen."],
    webAppsTitle: "WebVTT für Entwickler",
    webAppsText: ["Unterstützt volle CSS-Gestaltung über das ::cue-Pseudoelement."],
    conclusionTitle: "Jetzt SRT in WebVTT umwandeln",
    conclusionText: [
      "Erstellen Sie kompatible WebVTT-Dateien in Sekunden mit maximalem Datenschutz.",
      "Weitere nützliche Tools:",
      "• TXT-in-SRT-Konverter: Erstellen Sie Untertitel aus Fließtext.",
      "• SRT-in-Text-Konverter: Extrahieren Sie saubere Transkripte.",
      "• VTT-in-SRT-Konverter: Wandeln Sie WebVTT-Dateien in SubRip um."
    ]
  },
  id: {
    introTitle: "Panduan Lengkap Mengubah Subtitle SRT ke WebVTT (VTT)",
    introSubtitle: "Pelajari cara mengubah file SubRip (.srt) menjadi format standar WebVTT (.vtt) untuk pemutar video HTML5, browser modern, dan platform kursus online.",
    introText: [
      "SRT (.srt) dan WebVTT (.vtt) adalah format subtitle yang paling banyak digunakan. Sementara SRT populer untuk software editing video desktop, WebVTT adalah standar resmi W3C untuk pemutar video berbasis web HTML5.",
      "Konverter online gratis kami mengubah file SRT menjadi WebVTT secara instan langsung di browser Anda dengan privasi 100%."
    ],
    whatIsTitle: "Apa Itu Konverter SRT ke VTT?",
    whatIsText: [
      "Alat yang memformat ulang file subtitle SubRip dengan menyisipkan header 'WEBVTT' dan mengubah koma pada stempel waktu menjadi titik desimal agar sesuai dengan standar web."
    ],
    whyConvertTitle: "Mengapa Mengubah SRT ke VTT?",
    whyConvertSubtitle: "Keuntungan format WebVTT untuk web:",
    whyConvertReasons: [
      { title: "Kompatibel dengan Video HTML5", description: "Didukung langsung oleh tag <track> di semua browser modern tanpa plugin tambahan." },
      { title: "Aksesibilitas Web (WCAG)", description: "Memenuhi standar aksesibilitas digital bagi penonton tunarungu." },
      { title: "Platform Belajar Online (LMS)", description: "Diperlukan oleh Moodle, Canvas, Teachable, dan platform kursus lainnya." }
    ],
    howToTitle: "Cara Mengubah SRT ke VTT Online dalam 5 Langkah",
    howToSubtitle: "Langkah mudah konversi subtitle:",
    howToSteps: [
      { step: "1", title: "Unggah File SRT", description: "Tarik file .srt Anda atau tempel teksnya." },
      { step: "2", title: "Konversi Otomatis", description: "Sistem otomatis menambahkan header dan menyesuaikan format waktu." },
      { step: "3", title: "Periksa Pratinjau", description: "Lihat hasil WebVTT secara langsung di layar." },
      { step: "4", title: "Unduh File .VTT", description: "Simpan file subtitle yang siap dipakai di web." },
      { step: "5", title: "Pasang ke Video HTML5", description: "Hubungkan file .vtt menggunakan elemen <track>." }
    ],
    differenceTitle: "Perbedaan Antara SRT dan VTT",
    differenceSubtitle: "Perbandingan teknis format:",
    differenceTable: [
      { feature: "Penggunaan Utama", srt: "Software edit video (Premiere) & VLC", vtt: "Web, browser & video HTML5" },
      { feature: "Header File", srt: "Tidak ada", vtt: "Wajib: 'WEBVTT' di baris pertama" },
      { feature: "Pemisah Milidetik", srt: "Koma (00:01:23,456)", vtt: "Titik desimal (00:01:23.456)" }
    ],
    syntaxBreakdownTitle: "Sintaks Waktu: Koma vs. Titik",
    syntaxBreakdownText: [
      "SRT menggunakan koma (00:00:01,000) sedangkan WebVTT menggunakan titik (00:00:01.000)."
    ],
    renameTitle: "Bisakah Hanya Mengganti Ekstensi .SRT Menjadi .VTT?",
    renameSubtitle: "Mengapa sekadar mengganti nama file tidak akan bekerja:",
    renameReasons: [
      { problem: "Header WEBVTT Tidak Ada", explanation: "Browser akan mengabaikan file jika tidak diawali kata 'WEBVTT'." },
      { problem: "Koma Waktu Tidak Berubah", explanation: "Mengganti nama file tidak mengubah koma di dalam teks menjadi titik." }
    ],
    exampleTitle: "Contoh Konversi SRT ke VTT",
    exampleIntro: "Perbandingan sebelum dan sesudah:",
    exampleSrtInput: `1
00:00:01,000 --> 00:00:04,500
Selamat datang di video tutorial kami.

2
00:00:04,600 --> 00:00:08,200
Hari ini kita belajar mengubah subtitle SRT ke format WebVTT.`,
    exampleVttOutput: `WEBVTT

00:00:01.000 --> 00:00:04.500
Selamat datang di video tutorial kami.

00:00:04.600 --> 00:00:08.200
Hari ini kita belajar mengubah subtitle SRT ke format WebVTT.`,
    exampleExplanation: "Header WEBVTT ditambahkan dan koma diubah menjadi titik secara otomatis.",
    ffmpegTitle: "Mengubah SRT ke VTT Menggunakan FFmpeg",
    ffmpegSubtitle: "Perintah terminal:",
    ffmpegCommand: "ffmpeg -i input.srt output.vtt",
    ffmpegExplanation: [
      "FFmpeg memproses konversi subtitle melalui baris perintah.",
      "Untuk kemudahan tanpa instalasi aplikasi, gunakan konverter online kami."
    ],
    html5Title: "Integrasi Subtitle WebVTT pada Video HTML5",
    html5Subtitle: "Contoh kode website:",
    html5CodeSnippet: `<video controls width="800">
  <source src="video.mp4" type="video/mp4">
  <track label="Indonesia" kind="subtitles" srclang="id" src="subtitle.vtt" default>
</video>`,
    html5Explanation: ["Gunakan tag <track> di dalam tag <video> untuk memuat subtitle."],
    whenToUseTitle: "Kapan Menggunakan SRT vs. WebVTT?",
    whenToUseSubtitle: "Panduan pemilihan format:",
    whenToUseSrt: ["Edit video di Premiere Pro, DaVinci, Final Cut", "Upload ke YouTube Studio", "Putar video lokal di VLC"],
    whenToUseVtt: ["Tampilan video di website HTML5", "Platform kursus online (LMS)", "Web player seperti Video.js"],
    troubleshootTitle: "Mengatasi Masalah Umum",
    troubleshootSubtitle: "Solusi praktis:",
    troubleshootTips: [
      { issue: "Subtitle tidak muncul di browser", cause: "Header WEBVTT hilang atau tipe MIME server belum diatur ke text/vtt.", solution: "Pastikan teks diawali 'WEBVTT' dan periksa konfigurasi server web." }
    ],
    timingTitle: "Apakah Konversi Mengubah Waktu Subtitle?",
    timingText: ["Tidak. Waktu mulai dan selesai subtitle tetap sama persis."],
    textPreservationTitle: "Apakah Teks Dialog Tetap Utuh?",
    textPreservationText: ["Ya. Seluruh isi percakapan dan format teks dipertahankan sepenuhnya."],
    webAppsTitle: "WebVTT untuk Pengembang Web",
    webAppsText: ["Mendukung kustomisasi tampilan dengan CSS melalui selector ::cue."],
    conclusionTitle: "Ubah Subtitle SRT Anda ke WebVTT Sekarang",
    conclusionText: [
      "Konversi subtitle ke WebVTT dalam hitungan detik dengan privasi terjaga.",
      "Coba alat kami lainnya:",
      "• Konverter TXT ke SRT: Buat subtitle dari teks biasa.",
      "• Konverter SRT ke Teks: Ekstrak transkrip bersih tanpa waktu.",
      "• Konverter VTT ke SRT: Ubah file WebVTT kembali ke format SubRip."
    ]
  },
  tr: {
    introTitle: "SRT Altyazılarını WebVTT (VTT) Formatına Dönüştürme Kılavuzu",
    introSubtitle: "SubRip (.srt) dosyalarını HTML5 video oynatıcıları, web tarayıcıları ve çevrimiçi eğitim platformları için standart WebVTT (.vtt) formatına dönüştürün.",
    introText: [
      "SRT (.srt) ve WebVTT (.vtt) en popüler altyazı formatlarıdır. SRT masaüstü kurgu programlarının vazgeçilmeziyken, WebVTT modern web tarayıcıları ve HTML5 videoları için resmi W3C standardıdır.",
      "Ücretsiz çevrimiçi dönüştürücümüz, SRT dosyalarınızı doğrudan tarayıcınızda %100 gizlilikle WebVTT formatına dönüştürür."
    ],
    whatIsTitle: "SRT - VTT Dönüştürücü Nedir?",
    whatIsText: [
      "SubRip altyazı yapısını WebVTT formatına uyarlayan, dosyanın başına 'WEBVTT' başlığı ekleyen ve zaman damgası virgüllerini noktaya çeviren bir araçtır."
    ],
    whyConvertTitle: "Neden SRT Dosyasını VTT'ye Dönüştürmelisiniz?",
    whyConvertSubtitle: "WebVTT formatının web için avantajları:",
    whyConvertReasons: [
      { title: "HTML5 Video ile Yerel Uyumluluk", description: "Modern tarayıcılarda <track> etiketi ile doğrudan çalışır." },
      { title: "Web Erişilebilirliği (WCAG)", description: "İşitme engelli kullanıcılar için uluslararası erişilebilirlik standartlarını karşılar." },
      { title: "Eğitim ve LMS Platformları", description: "Canvas, Moodle ve Coursera gibi platformlar WebVTT formatı gerektirir." }
    ],
    howToTitle: "5 Adımda SRT'yi VTT'ye Dönüştürme",
    howToSubtitle: "Hızlı dönüştürme adımları:",
    howToSteps: [
      { step: "1", title: "SRT Dosyasını Yükleyin", description: ".srt dosyanızı sürükleyin veya metni yapıştırın." },
      { step: "2", title: "Otomatik Dönüştürme", description: "Araç başlığı ekler ve zaman damgalarını anında düzenler." },
      { step: "3", title: "Önizlemeyi Kontrol Edin", description: "Oluşan WebVTT kodunu canlı olarak inceleyin." },
      { step: "4", title: ".VTT Dosyasını İndirin", description: "Web için hazır altyazı dosyasını kaydedin." },
      { step: "5", title: "Videonuza Ekleyin", description: "<track> etiketi ile HTML5 videonuza bağlayın." }
    ],
    differenceTitle: "SRT ve VTT Arasındaki Farklar",
    differenceSubtitle: "Teknik karşılaştırma:",
    differenceTable: [
      { feature: "Kullanım Alanı", srt: "Masaüstü kurgu (Premiere) ve VLC", vtt: "Web siteleri, tarayıcılar ve HTML5" },
      { feature: "Dosya Başlığı", srt: "Yok", vtt: "Zorunlu: İlk satırda 'WEBVTT'" },
      { feature: "Zaman Ayracı", srt: "Virgül (00:01:23,456)", vtt: "Nokta (00:01:23.456)" }
    ],
    syntaxBreakdownTitle: "Zaman Damgası Ayracı: Virgül vs. Nokta",
    syntaxBreakdownText: [
      "SRT formatı milisaniyeden önce virgül (00:00:01,000) kullanırken WebVTT nokta (00:00:01.000) kullanır."
    ],
    renameTitle: "Sadece Dosya Uzantısını .VTT Yapmak Yeterli mi?",
    renameSubtitle: "Yalnızca dosya adı değiştirmenin neden çalışmayacağı:",
    renameReasons: [
      { problem: "WEBVTT Başlığı Eksik Kalır", explanation: "Tarayıcılar dosyanın başında 'WEBVTT' görmezse altyazıyı yüklemez." },
      { problem: "Virgüller Değişmez", explanation: "Dosya adını değiştirmek içerikteki virgülleri noktaya çevirmez." }
    ],
    exampleTitle: "SRT - VTT Dönüşüm Örneği",
    exampleIntro: "Dönüşüm öncesi ve sonrası:",
    exampleSrtInput: `1
00:00:01,000 --> 00:00:04,500
Video eğitimimize hoş geldiniz.

2
00:00:04,600 --> 00:00:08,200
Bugün SRT altyazılarını WebVTT formatına dönüştürmeyi öğreniyoruz.`,
    exampleVttOutput: `WEBVTT

00:00:01.000 --> 00:00:04.500
Video eğitimimize hoş geldiniz.

00:00:04.600 --> 00:00:08.200
Bugün SRT altyazılarını WebVTT formatına dönüştürmeyi öğreniyoruz.`,
    exampleExplanation: "WEBVTT başlığı eklendi ve tüm zaman damgası virgülleri noktaya dönüştürüldü.",
    ffmpegTitle: "FFmpeg ile SRT'yi VTT'ye Dönüştürme",
    ffmpegSubtitle: "Komut satırı kullanımı:",
    ffmpegCommand: "ffmpeg -i girdi.srt cikti.vtt",
    ffmpegExplanation: [
      "FFmpeg terminal üzerinden altyazıları kolayca dönüştürür.",
      "Program yüklemeden hızlı dönüştürme için çevrimiçi aracımızı kullanabilirsiniz."
    ],
    html5Title: "HTML5 Video İçinde <track> Etiketi Kullanımı",
    html5Subtitle: "Web kodu örneği:",
    html5CodeSnippet: `<video controls width="800">
  <source src="video.mp4" type="video/mp4">
  <track label="Türkçe" kind="subtitles" srclang="tr" src="altyazi.vtt" default>
</video>`,
    html5Explanation: ["HTML5 <video> etiketine <track> ekleyerek altyazıyı web sitenizde yayınlayın."],
    whenToUseTitle: "Hangi Formatı Seçmelisiniz?",
    whenToUseSubtitle: "Kullanım senaryoları:",
    whenToUseSrt: ["Premiere Pro, DaVinci Resolve kurguları", "YouTube Studio yüklemeleri", "VLC ile yerel izleme"],
    whenToUseVtt: ["Web sitelerindeki HTML5 videolar", "Online eğitim ve LMS sistemleri", "Video.js web oynatıcıları"],
    troubleshootTitle: "Sık Karşılaşılan Sorunlar ve Çözümleri",
    troubleshootSubtitle: "İpuçları:",
    troubleshootTips: [
      { issue: "Altyazı tarayıcıda görünmüyor", cause: "WEBVTT başlığı eksik veya sunucu MIME türü text/vtt olarak ayarlanmamış.", solution: "Dosyanın 'WEBVTT' ile başladığını ve sunucu ayarlarını doğrulayın." }
    ],
    timingTitle: "Zamanlama Değişir mi?",
    timingText: ["Hayır. Başlangıç ve bitiş zamanları birebir korunur."],
    textPreservationTitle: "Metin Korunur mu?",
    textPreservationText: ["Evet. Konuşma metinleri ve temel biçimlendirmeler eksiksiz aktarılır."],
    webAppsTitle: "Geliştiriciler İçin WebVTT",
    webAppsText: ["::cue seçicisi ile CSS üzerinden tam tasarım özelleştirmesi sağlar."],
    conclusionTitle: "Altyazılarınızı Hemen WebVTT'ye Dönüştürün",
    conclusionText: [
      "SRT dosyalarınızı saniyeler içinde WebVTT formatına çevirin.",
      "Diğer popüler araçlarımız:",
      "• TXT - SRT Dönüştürücü: Düz metinden altyazı oluşturun.",
      "• SRT - Metin Dönüştürücü: Altyazılardan temiz metin çıkarın.",
      "• VTT - SRT Dönüştürücü: WebVTT dosyalarını SubRip'e dönüştürün."
    ]
  },
  it: {
    introTitle: "Guida Completa per Convertire Sottotitoli SRT in WebVTT (VTT)",
    introSubtitle: "Scopri come trasformare file SubRip (.srt) nel formato standard WebVTT (.vtt) per player video HTML5, browser moderni e piattaforme e-learning.",
    introText: [
      "SRT (.srt) e WebVTT (.vtt) sono i due formati di sottotitoli più diffusi. Mentre SRT è il punto di riferimento per il montaggio video e player desktop, WebVTT è lo standard ufficiale del W3C per i video sul web.",
      "Il nostro convertitore online gratuito trasforma i tuoi file SRT in WebVTT all'istante nel tuo browser con il 100% di privacy."
    ],
    whatIsTitle: "Cos'è un Convertitore da SRT a VTT?",
    whatIsText: [
      "Uno strumento che adatta i sottotitoli SubRip inserendo l'intestazione 'WEBVTT' e convertendo le virgole dei timestamp in punti decimali per la piena conformità web."
    ],
    whyConvertTitle: "Perché Convertire SRT in VTT?",
    whyConvertSubtitle: "I vantaggi del formato WebVTT per il web:",
    whyConvertReasons: [
      { title: "Compatibilità Nativa con Video HTML5", description: "Supportato direttamente dal tag <track> in tutti i browser senza plugin." },
      { title: "Accessibilità Web (Standard WCAG)", description: "Garantisce l'accessibilità dei contenuti per le persone con disabilità uditive." },
      { title: "Piattaforme di Corsi Online (LMS)", description: "Richiesto da Moodle, Canvas, Teachable e dai moderni player web." }
    ],
    howToTitle: "Come Convertire SRT in VTT Online in 5 Passaggi",
    howToSubtitle: "Guida rapida di conversione:",
    howToSteps: [
      { step: "1", title: "Carica il File SRT", description: "Trascina il file .srt o incolla il testo nel convertitore." },
      { step: "2", title: "Conversione Automatica", description: "Lo strumento applica l'intestazione e corregge i punti decimali." },
      { step: "3", title: "Controlla l'Anteprima", description: "Verifica il codice WebVTT generato in tempo reale." },
      { step: "4", title: "Scarica il File .VTT", description: "Salva il file pronto per il tuo sito web." },
      { step: "5", title: "Integra nel Video HTML5", description: "Collega il file .vtt tramite l'elemento <track>." }
    ],
    differenceTitle: "Differenze Tra SRT e VTT",
    differenceSubtitle: "Confronto tecnico:",
    differenceTable: [
      { feature: "Ambito Principale", srt: "Montaggio video (Premiere) e player locali (VLC)", vtt: "Siti web, browser e player video HTML5" },
      { feature: "Intestazione", srt: "Nessuna", vtt: "Obbligatoria: 'WEBVTT' nella prima riga" },
      { feature: "Separatore Millisecondi", srt: "Virgola (00:01:23,456)", vtt: "Punto decimale (00:01:23.456)" }
    ],
    syntaxBreakdownTitle: "Sintassi dei Timestamp: Virgola vs. Punto",
    syntaxBreakdownText: [
      "Il formato SRT usa la virgola (00:00:01,000) mentre WebVTT richiede il punto decimale (00:00:01.000)."
    ],
    renameTitle: "Basta Rinominare l'Estensione da .SRT a .VTT?",
    renameSubtitle: "Perché rinominare il file non funziona:",
    renameReasons: [
      { problem: "Manca l'Intestazione WEBVTT", explanation: "I browser rifiutano il file se non inizia con 'WEBVTT'." },
      { problem: "Le Virgole Rimangono Inalterate", explanation: "Rinominare il file non converte le virgole interne in punti decimali." }
    ],
    exampleTitle: "Esempio di Conversione da SRT a VTT",
    exampleIntro: "Confronto prima e dopo:",
    exampleSrtInput: `1
00:00:01,000 --> 00:00:04,500
Benvenuti al nostro video tutorial.

2
00:00:04,600 --> 00:00:08,200
Oggi impareremo a convertire sottotitoli SRT in WebVTT.`,
    exampleVttOutput: `WEBVTT

00:00:01.000 --> 00:00:04.500
Benvenuti al nostro video tutorial.

00:00:04.600 --> 00:00:08.200
Oggi impareremo a convertire sottotitoli SRT in WebVTT.`,
    exampleExplanation: "L'intestazione WEBVTT viene aggiunta e le virgole temporali diventano punti decimali.",
    ffmpegTitle: "Convertire SRT in VTT con FFmpeg",
    ffmpegSubtitle: "Comando da terminale:",
    ffmpegCommand: "ffmpeg -i input.srt output.vtt",
    ffmpegExplanation: [
      "FFmpeg converte file di sottotitoli tramite riga di comando.",
      "Per conversioni immediate senza installare software, usa il nostro convertitore online."
    ],
    html5Title: "Integrazione nei Video HTML5 con il Tag <track>",
    html5Subtitle: "Esempio di codice:",
    html5CodeSnippet: `<video controls width="800">
  <source src="video.mp4" type="video/mp4">
  <track label="Italiano" kind="subtitles" srclang="it" src="sottotitoli.vtt" default>
</video>`,
    html5Explanation: ["Inserisci il tag <track> nel tuo elemento <video> per mostrare i sottotitoli sul web."],
    whenToUseTitle: "Quando Usare SRT o WebVTT?",
    whenToUseSubtitle: "Guida alla scelta:",
    whenToUseSrt: ["Montaggio con Premiere Pro, DaVinci Resolve o Final Cut", "Caricamento su YouTube Studio", "Riproduzione locale con VLC"],
    whenToUseVtt: ["Siti web e player video HTML5", "Piattaforme di formazione online (LMS)", "Player come Video.js e Plyr"],
    troubleshootTitle: "Risoluzione dei Problemi Comuni",
    troubleshootSubtitle: "Consigli pratici:",
    troubleshootTips: [
      { issue: "I sottotitoli non compaiono nel browser", cause: "Intestazione WEBVTT mancante o MIME type text/vtt non configurato sul server.", solution: "Verifica che il file inizi con 'WEBVTT' e controlla le impostazioni del server." }
    ],
    timingTitle: "La Sincronizzazione Viene Modificata?",
    timingText: ["No. I timestamp di inizio e fine rimangono perfettamente invariati."],
    textPreservationTitle: "Il Testo Viene Preservato?",
    textPreservationText: ["Sì. Tutti i dialoghi e le formattazioni di base vengono trasferiti intatti."],
    webAppsTitle: "WebVTT per Sviluppatori Web",
    webAppsText: ["Supporta la personalizzazione stilistica completa tramite CSS con lo pseudoelemento ::cue."],
    conclusionTitle: "Converti i Tuoi Sottotitoli in WebVTT Subito",
    conclusionText: [
      "Passa da SRT a WebVTT in pochi secondi e con la massima privacy.",
      "Scopri gli altri nostri strumenti:",
      "• Convertitore da TXT a SRT: Crea sottotitoli partendo da testo semplice.",
      "• Convertitore da SRT a Testo: Estrai trascrizioni pulite senza timestamp.",
      "• Convertitore da VTT a SRT: Trasforma file WebVTT in formato SubRip."
    ]
  }
};

export function getSrtToVttGuideContent(locale: Locale): SrtToVttGuideContent {
  return SRT_TO_VTT_GUIDE[locale] || SRT_TO_VTT_GUIDE.en;
}
