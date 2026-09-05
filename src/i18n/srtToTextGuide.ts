import type { Locale } from './config';

export interface SrtToTextGuideContent {
  introTitle: string;
  introSubtitle: string;
  introText: string[];

  whatIsTitle: string;
  whatIsText: string[];
  whatIsElements: {
    name: string;
    description: string;
    fate: string;
  }[];

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

  timecodesTitle: string;
  timecodesText: string[];

  withTimecodeTitle: string;
  withTimecodeText: string[];
  withTimecodeComparison: {
    mode: string;
    outputFormat: string;
    bestFor: string;
  }[];

  exampleTitle: string;
  exampleIntro: string;
  exampleSrtInput: string;
  exampleTxtOutputClean: string;
  exampleTxtOutputWithTime: string;
  exampleExplanation: string;

  comparisonTitle: string;
  comparisonSubtitle: string;
  comparisonTable: {
    feature: string;
    srt: string;
    txt: string;
  }[];

  useCasesTitle: string;
  useCasesSubtitle: string;
  useCases: {
    role: string;
    description: string;
  }[];

  transcriptsTitle: string;
  transcriptsText: string[];

  cleanerTextTitle: string;
  cleanerTextSubtitle?: string;
  cleanerSubtitle?: string;
  cleanerTips: {
    issue: string;
    explanation: string;
    recommendation: string;
  }[];

  encodingTitle: string;
  encodingText: string[];

  osGuideTitle: string;
  osGuideText: string[];

  conclusionTitle: string;
  conclusionText: string[];
}

export const SRT_TO_TEXT_GUIDE: Record<Locale, SrtToTextGuideContent> = {
  en: {
    introTitle: "Complete Guide to Converting SRT Subtitles into Plain Text (TXT)",
    introSubtitle: "Learn how to strip timestamps, clean up subtitle cues, extract video transcripts, and convert SubRip (.srt) files into readable text.",
    introText: [
      "SubRip (.srt) files are the universal standard for video closed captions, but their rigid timecode formatting and numbered line breaks make them difficult to read as standard documents. When you need to read a video's dialogue, repurpose a speech into a blog article, study lecture notes, or feed transcripts into AI tools, converting an SRT file to plain text (.txt) is the fastest and most practical solution.",
      "An SRT to TXT converter extracts the spoken dialogue from your subtitle files while stripping away timing headers, cue indices, and HTML styling tags. Our free online SRT to TXT converter performs this extraction entirely in your browser—guaranteeing 100% privacy with zero server uploads and flexible formatting options."
    ],
    whatIsTitle: "What Is an SRT to TXT Converter?",
    whatIsText: [
      "An SRT to TXT converter is a text-processing utility designed to transform structured SubRip (.srt) subtitle files into continuous, readable plain text (.txt) documents. Standard SRT files are written in a strict four-part block syntax required by media players and video editing timelines.",
      "During the conversion process, our tool analyzes each subtitle block and separates the actual dialogue from metadata:"
    ],
    whatIsElements: [
      {
        name: "Sequential Cue Numbers (1, 2, 3...)",
        description: "Integer indices at the top of each subtitle block indicating cue sequence.",
        fate: "Stripped automatically when 'Remove Cue Numbers' is checked, preventing random numbers from cluttering your reading text."
      },
      {
        name: "Timestamp Ranges (00:00:01,000 --> 00:00:04,500)",
        description: "Start and end timecodes formatted in hours, minutes, seconds, and milliseconds.",
        fate: "Removed cleanly when 'Remove Timestamps' is checked. If you uncheck this setting, timecodes are preserved alongside the dialogue."
      },
      {
        name: "Subtitle Dialogue Lines",
        description: "The actual spoken words and captions displayed on screen.",
        fate: "Preserved intact, with HTML styling tags (such as <b>, <i>, and <font>) stripped to produce clean, distraction-free text."
      },
      {
        name: "Blank Line Delimiters",
        description: "Double line breaks separating consecutive subtitle cues.",
        fate: "Normalized into standard single line breaks or merged into continuous paragraphs according to your formatting preferences."
      }
    ],
    whyConvertTitle: "Why Convert SRT to TXT? Practical Benefits",
    whyConvertSubtitle: "Extracting plain text from subtitle files unlocks numerous content creation, academic, and professional advantages:",
    whyConvertReasons: [
      {
        title: "Reading Subtitles as Clean Transcripts",
        description: "Reading raw SRT files in a text editor is frustrating because your eyes must constantly jump over timecodes and cue numbers. Converting to TXT creates a clean, flowing reading experience."
      },
      {
        title: "Repurposing Video Dialogue into Blog Posts & Articles",
        description: "Content marketers and creators can convert YouTube video subtitles into written articles, social media posts, newsletters, and summaries in minutes."
      },
      {
        title: "Feeding Video Content into AI & LLM Tools",
        description: "Large language models (like ChatGPT, Claude, and Gemini) work best with clean, unformatted prose. Stripping timestamps from your SRT file saves valuable prompt tokens and improves AI comprehension."
      },
      {
        title: "Editing, Proofreading & Spell-Checking Dialogue",
        description: "Proofreading an entire video script is significantly faster in plain text format with standard spell-checkers before importing final captions back into an editing suite."
      },
      {
        title: "Study Notes, Academic Research & Meeting Summaries",
        description: "Students and researchers can convert recorded Zoom lectures, webinars, and interviews into searchable study notes and reference quotes."
      },
      {
        title: "Preparing Text for Human or Machine Translation",
        description: "Translators often prefer working with uninterrupted text paragraphs rather than translating isolated subtitle fragments constrained by technical syntax."
      }
    ],
    howToTitle: "How to Convert SRT to TXT Online in 4 Simple Steps",
    howToSubtitle: "Follow this quick guide to convert any SRT subtitle file into a clean plain text transcript in seconds:",
    howToSteps: [
      {
        step: "1",
        title: "Upload Your SRT File or Paste Text",
        description: "Drag and drop your .srt document directly into the upload area above, browse your local files, or copy and paste the raw subtitle text into the input box."
      },
      {
        step: "2",
        title: "Configure Your Output Preferences",
        description: "Choose whether to remove timestamps, strip line numbers, and enable 'Join into Continuous Paragraphs' if you want flowing prose instead of line-by-line breaks."
      },
      {
        step: "3",
        title: "Review Extracted Text in Live Preview",
        description: "Inspect the cleaned text in the right-hand output pane. The preview updates instantly as you adjust options in real time."
      },
      {
        step: "4",
        title: "Copy to Clipboard or Download .TXT",
        description: "Click 'Copy to Clipboard' to paste directly into Google Docs, Word, or an email, or click 'Download .TXT' to save the file to your device."
      }
    ],
    timecodesTitle: "What Happens to Timecodes When Converting SRT to TXT?",
    timecodesText: [
      "In a standard SRT-to-TXT conversion, timecodes are deliberately removed. SubRip timecodes (such as '00:01:23,456 --> 00:01:27,890') are essential for video players to know when captions appear on screen, but they disrupt human reading and clutter document layouts.",
      "By removing these timecode headers, the converter produces a clean, uninterrupted script. However, certain specialized workflows—such as legal video depositions, broadcast logging, or editing reference sheets—require timecodes to remain visible alongside the spoken dialogue."
    ],
    withTimecodeTitle: "Can You Convert SRT to TXT With Timecode?",
    withTimecodeText: [
      "Yes! Our SRT to TXT converter includes full support for both timecode-stripped and timecode-preserved extraction.",
      "In our converter's settings panel below the tool, you will find the 'Remove Timestamps' checkbox. By default, this option is checked to produce clean reading text. If you uncheck 'Remove Timestamps', the converter will preserve the original start and end timecode headers for every subtitle cue in your output file.",
      "Here is how the two output modes compare:"
    ],
    withTimecodeComparison: [
      {
        mode: "Clean Text (Default - Timestamps Removed)",
        outputFormat: "Pure dialogue without timecodes or numbers",
        bestFor: "Blog articles, study notes, AI prompts, summaries, reading transcripts"
      },
      {
        mode: "Timecode-Preserved (Timestamps Unchecked)",
        outputFormat: "Timecodes retained above each dialogue cue",
        bestFor: "Video logging, video editing reference sheets, legal depositions, translation syncing"
      }
    ],
    exampleTitle: "SRT to TXT Conversion Example: Before and After",
    exampleIntro: "Examine this practical example showing how structured SubRip subtitles are converted into clean, readable plain text:",
    exampleSrtInput: `1
00:00:01,000 --> 00:00:04,200
Welcome to our video tutorial!

2
00:00:04,300 --> 00:00:08,100
Today we will learn how to extract clean
plain text from subtitle files.

3
00:00:08,200 --> 00:00:11,500
This is useful for blogs, transcripts,
and study notes.`,
    exampleTxtOutputClean: `Welcome to our video tutorial!
Today we will learn how to extract clean plain text from subtitle files.
This is useful for blogs, transcripts, and study notes.`,
    exampleTxtOutputWithTime: `00:00:01,000 --> 00:00:04,200
Welcome to our video tutorial!
00:00:04,300 --> 00:00:08,100
Today we will learn how to extract clean plain text from subtitle files.
00:00:08,200 --> 00:00:11,500
This is useful for blogs, transcripts, and study notes.`,
    exampleExplanation: "In the clean output, sequence indices, timecodes, and mid-sentence line breaks are normalized into cohesive, readable text lines. If 'Join into Continuous Paragraphs' is enabled, the text flows seamlessly into a single unified paragraph.",
    comparisonTitle: "SRT vs TXT: What Is the Difference?",
    comparisonSubtitle: "Understanding the technical and functional distinctions between subtitle files and plain text documents:",
    comparisonTable: [
      {
        feature: "Primary Function",
        srt: "Synchronized timed caption track for video media",
        txt: "General-purpose plain text storage and reading"
      },
      {
        feature: "Timecode Syntax",
        srt: "Mandatory millisecond timecodes (hh:mm:ss,ms)",
        txt: "None (text only)"
      },
      {
        feature: "Sequential Numbering",
        srt: "Mandatory numeric indices (1, 2, 3...)",
        txt: "None"
      },
      {
        feature: "Human Readability",
        srt: "Poor (cluttered by technical timestamps)",
        txt: "Excellent (uninterrupted, clean prose)"
      },
      {
        feature: "Video Player Support",
        srt: "Universal (YouTube, VLC, Premiere, Final Cut)",
        txt: "Cannot be loaded directly as timed subtitle track"
      },
      {
        feature: "AI & Word Processor Readiness",
        srt: "Requires cleaning before processing",
        txt: "Ready for immediate reading, editing, and prompt input"
      }
    ],
    useCasesTitle: "Common Uses for an SRT to TXT Converter",
    useCasesSubtitle: "See how professionals and creators utilize subtitle text extraction in everyday workflows:",
    useCases: [
      {
        role: "YouTube Creators & Podcasters",
        description: "Quickly turn auto-generated YouTube or podcast captions into video descriptions, show notes, blog posts, and newsletter highlights."
      },
      {
        role: "Video Editors & Post-Production Teams",
        description: "Extract voiceover transcripts from approved subtitle tracks to share with clients for script sign-off without sending raw video files."
      },
      {
        role: "Content Writers & Copywriters",
        description: "Repurpose recorded keynote speeches, webinars, and interviews into high-ranking SEO articles and whitepapers."
      },
      {
        role: "Students, Academics & Researchers",
        description: "Convert recorded online lectures, Zoom meetings, and research interviews into searchable text documents for citations and review."
      },
      {
        role: "Translators & Localization Specialists",
        description: "Export clean plain text transcripts to translate the core narrative before adapting translated lines into timed subtitle cues with our TXT to SRT Converter."
      }
    ],
    transcriptsTitle: "SRT to TXT for Transcripts vs. Audio Transcription",
    transcriptsText: [
      "It is important to understand the technical distinction between an SRT to TXT converter and an automatic speech recognition (ASR) transcription service.",
      "An SRT to TXT converter extracts text that is already present inside an existing subtitle file (.srt). It parses, filters, and reformats pre-existing caption text by stripping timecodes and structural metadata. It does not transcribe raw audio or video files directly.",
      "If you already have an SRT subtitle file (downloaded from YouTube Studio, Zoom, Whisper, or a video editor), our converter is the fastest way to extract clean, readable text without paying for transcription services."
    ],
    cleanerTextTitle: "How to Get Cleaner Text From an SRT File",
    cleanerTextSubtitle: "Understand common subtitle anomalies and how to produce the cleanest possible transcript output:",
    cleanerTips: [
      {
        issue: "Repeated Subtitle Lines (Roll-Up Captions)",
        explanation: "Some broadcast captions and automated transcription tools repeat the previous line across consecutive cues for visual continuity.",
        recommendation: "Review the extracted text for duplicate phrases. Our 'Join into Continuous Paragraphs' option makes duplicate phrases easy to spot and edit in any text editor."
      },
      {
        issue: "HTML Formatting Tags (<b>, <i>, <font>)",
        explanation: "Some SRT files contain HTML tags used to format italicized narration or colored speaker text.",
        recommendation: "Our converter automatically identifies and strips all HTML tags, leaving only the pure spoken words in your output."
      },
      {
        issue: "Non-Speech Sound Indicators ([Music], [Applause])",
        explanation: "Accessibility closed captions often contain sound descriptors in brackets.",
        recommendation: "These text markers remain in the output. If you do not need sound descriptions, use your text editor's Find and Replace feature to remove bracketed tags in one click."
      },
      {
        issue: "Speaker Labels (John:, Speaker 1:)",
        explanation: "Interviews often prefix subtitle cues with speaker names.",
        recommendation: "Speaker prefixes are preserved in the text output, which helps maintain dialogue clarity in multi-speaker interview transcripts."
      }
    ],
    encodingTitle: "SRT Encoding & Special Characters (UTF-8 Standards)",
    encodingText: [
      "Character encoding is critical when converting subtitle files. Subtitle tracks frequently contain accented characters (such as é, ñ, ç, ü), international alphabets (such as Cyrillic, Greek, or Arabic), Asian scripts (such as Japanese, Chinese, or Korean), and emojis.",
      "If an SRT file was saved in an outdated legacy encoding (like ANSI or Windows-1252), opening it on a modern system can cause special characters to turn into garbled symbols (mojibake).",
      "Our SRT to TXT converter processes text using modern UTF-8 encoding standards. When you download your converted .txt file, it is exported in clean UTF-8 with standard LF line breaks, ensuring flawless rendering across all operating systems, text editors, and language environments."
    ],
    osGuideTitle: "Is SRT to TXT Conversion Different on Windows and Mac?",
    osGuideText: [
      "Because our converter operates 100% inside your web browser via client-side JavaScript, the conversion process is identical across all operating systems.",
      "Whether you are working on macOS (Safari, Chrome), Windows 11/10 (Edge, Chrome, Firefox), Linux, Chromebook, iOS, or Android, you do not need to install third-party desktop utilities, Python scripts, or command-line tools. Simply open the page, drop your .srt file, and download clean plain text immediately."
    ],
    conclusionTitle: "Convert Your Subtitles to Plain Text in Seconds",
    conclusionText: [
      "Converting SRT subtitle files into plain text transforms rigid timecoded captions into flexible, readable, and editable text. Whether you are generating study notes, drafting blog posts, or preparing prompts for AI tools, our free online converter provides instant, private, and customizable text extraction.",
      "Explore our complete suite of subtitle conversion tools to streamline your video workflows:",
      "• TXT to SRT Converter: Turn plain text transcripts back into synchronized SubRip subtitles.",
      "• SRT to VTT Converter: Convert SubRip (.srt) captions into WebVTT (.vtt) for HTML5 web video players.",
      "• VTT to SRT Converter: Convert WebVTT files into universal SubRip files for video editors."
    ]
  },
  es: {
    introTitle: "Guía Completa para Convertir Subtítulos SRT a Texto Plano (TXT)",
    introSubtitle: "Aprende a eliminar marcas de tiempo, limpiar bloques de subtítulos, extraer transcripciones de video y convertir archivos SubRip (.srt) a texto legible.",
    introText: [
      "Los archivos SubRip (.srt) son el estándar universal para subtítulos de video, pero sus códigos de tiempo y números secuenciales dificultan su lectura como documentos normales. Cuando necesitas leer el diálogo de un video, crear un artículo para un blog, tomar notas de estudio o procesar texto con inteligencia artificial, convertir un archivo SRT a texto plano (.txt) es la solución más rápida.",
      "Un convertidor de SRT a TXT extrae el texto hablado eliminando marcas de tiempo, números de bloque y etiquetas de formato. Nuestro convertidor gratuito en línea procesa todo en tu navegador con total privacidad, sin enviar tus archivos a servidores externos."
    ],
    whatIsTitle: "¿Qué es un Convertidor de SRT a TXT?",
    whatIsText: [
      "Un convertidor de SRT a TXT es una herramienta que transforma archivos de subtítulos SubRip (.srt) en documentos de texto plano (.txt) continuos y legibles.",
      "Durante la conversión, la herramienta analiza cada bloque de subtítulo y separa el texto de los metadatos técnicos:"
    ],
    whatIsElements: [
      {
        name: "Números Secuenciales (1, 2, 3...)",
        description: "Índices numéricos en cada bloque de subtítulo.",
        fate: "Se eliminan automáticamente al marcar 'Eliminar Números de Línea', evitando que números sueltos ensucien la lectura."
      },
      {
        name: "Marcas de Tiempo (00:00:01,000 --> 00:00:04,500)",
        description: "Tiempos de inicio y fin con horas, minutos, segundos y milisegundos.",
        fate: "Se eliminan al marcar 'Eliminar Marcas de Tiempo'. Si desmarcas esta opción, los tiempos se conservan junto al texto."
      },
      {
        name: "Texto del Subtítulo",
        description: "Las palabras y diálogos mostrados en pantalla.",
        fate: "Se conservan intactos, eliminando etiquetas HTML (como <b> o <i>) para un texto limpio."
      },
      {
        name: "Líneas en Blanco",
        description: "Separadores entre bloques de subtítulos.",
        fate: "Se unifican en saltos de línea estándar o se unen en párrafos continuos según tus preferencias."
      }
    ],
    whyConvertTitle: "¿Por Qué Convertir SRT a TXT? Ventajas Prácticas",
    whyConvertSubtitle: "Extraer texto de subtítulos ofrece múltiples ventajas:",
    whyConvertReasons: [
      {
        title: "Lectura Cómoda como Transcripción",
        description: "Leer un archivo SRT sin códigos de tiempo permite una lectura fluida y natural del diálogo."
      },
      {
        title: "Reutilización de Contenido para Blogs y Artículos",
        description: "Transforma videos de YouTube o conferencias en artículos escritos, notas de prensa o resúmenes en minutos."
      },
      {
        title: "Uso con Herramientas de Inteligencia Artificial (IA)",
        description: "Modelos como ChatGPT o Claude procesan mejor el texto limpio sin marcas de tiempo, ahorrando tokens."
      },
      {
        title: "Corrección y Revisión de Guiones",
        description: "Revisar la ortografía y gramática es mucho más rápido en un documento de texto antes de la edición final."
      },
      {
        title: "Notas de Estudio y Resúmenes Académicos",
        description: "Convierte clases grabadas en Zoom o seminarios en apuntes de texto fáciles de buscar y estudiar."
      },
      {
        title: "Preparación para Traducción",
        description: "Facilita el trabajo de traductores al trabajar con párrafos continuos en lugar de fragmentos aislados."
      }
    ],
    howToTitle: "Cómo Convertir SRT a TXT Online en 4 Pasos",
    howToSubtitle: "Sigue estos sencillos pasos para extraer texto de cualquier archivo de subtítulos:",
    howToSteps: [
      {
        step: "1",
        title: "Sube tu Archivo SRT o Pega el Texto",
        description: "Arrastra tu archivo .srt al área de carga o pega el contenido directamente en la casilla de entrada."
      },
      {
        step: "2",
        title: "Configura las Opciones de Salida",
        description: "Elige si deseas eliminar marcas de tiempo, números de línea o unir el texto en párrafos continuos."
      },
      {
        step: "3",
        title: "Revisa la Vista Previa",
        description: "Verifica el texto limpio en el panel derecho con actualización instantánea."
      },
      {
        step: "4",
        title: "Copia o Descarga el Archivo .TXT",
        description: "Copia al portapapeles o descarga el archivo .txt directamente a tu dispositivo."
      }
    ],
    timecodesTitle: "¿Qué Pasa con los Códigos de Tiempo al Convertir SRT a TXT?",
    timecodesText: [
      "En una conversión estándar, los códigos de tiempo se eliminan para facilitar la lectura. Las marcas como '00:01:23,456 --> 00:01:27,890' son esenciales para los reproductores de video, pero interrumpen la lectura en documentos de texto.",
      "Al retirar las marcas de tiempo se obtiene un guion limpio. No obstante, ciertos flujos de trabajo profesionales requieren conservar los tiempos de referencia."
    ],
    withTimecodeTitle: "¿Se Puede Convertir SRT a TXT Conservando los Códigos de Tiempo?",
    withTimecodeText: [
      "¡Sí! Nuestro convertidor permite extraer texto limpio o conservar las marcas de tiempo según lo necesites.",
      "En el panel de configuración, desmarca la casilla 'Eliminar Marcas de Tiempo' para que los tiempos se mantengan junto al diálogo.",
      "Comparativa de modos:"
    ],
    withTimecodeComparison: [
      {
        mode: "Texto Limpio (Predeterminado)",
        outputFormat: "Diálogo puro sin tiempos ni números",
        bestFor: "Artículos, apuntes, prompts de IA, resúmenes"
      },
      {
        mode: "Con Códigos de Tiempo",
        outputFormat: "Marcas de tiempo conservadas en cada bloque",
        bestFor: "Guías de edición de video, transcripciones legales, revisión de subtitulado"
      }
    ],
    exampleTitle: "Ejemplo de Conversión SRT a TXT: Antes y Después",
    exampleIntro: "Observa cómo se transforma un archivo SRT estructurado en texto limpio:",
    exampleSrtInput: `1
00:00:01,000 --> 00:00:04,200
¡Bienvenido a nuestro tutorial!

2
00:00:04,300 --> 00:00:08,100
Hoy aprenderemos a extraer texto plano
limpio desde archivos de subtítulos.

3
00:00:08,200 --> 00:00:11,500
Esto es ideal para blogs, transcripciones
y notas de estudio.`,
    exampleTxtOutputClean: `¡Bienvenido a nuestro tutorial!
Hoy aprenderemos a extraer texto plano limpio desde archivos de subtítulos.
Esto es ideal para blogs, transcripciones y notas de estudio.`,
    exampleTxtOutputWithTime: `00:00:01,000 --> 00:00:04,200
¡Bienvenido a nuestro tutorial!
00:00:04,300 --> 00:00:08,100
Hoy aprenderemos a extraer texto plano limpio desde archivos de subtítulos.
00:00:08,200 --> 00:00:11,500
Esto es ideal para blogs, transcripciones y notas de estudio.`,
    exampleExplanation: "En la salida limpia, los números y tiempos se eliminan, dejando solo las oraciones legibles.",
    comparisonTitle: "SRT vs TXT: ¿Cuál es la Diferencia?",
    comparisonSubtitle: "Diferencias técnicas entre archivos de subtítulos y documentos de texto:",
    comparisonTable: [
      {
        feature: "Función Principal",
        srt: "Pista de subtítulos sincronizada con video",
        txt: "Almacenamiento y lectura de texto plano"
      },
      {
        feature: "Códigos de Tiempo",
        srt: "Obligatorios con milisegundos (hh:mm:ss,ms)",
        txt: "Ninguno (solo texto)"
      },
      {
        feature: "Numeración",
        srt: "Números secuenciales obligatorios",
        txt: "Ninguna"
      },
      {
        feature: "Facilidad de Lectura",
        srt: "Baja (interrumpida por números y tiempos)",
        txt: "Alta (texto fluido y sin distracciones)"
      },
      {
        feature: "Compatibilidad de Video",
        srt: "Universal (YouTube, VLC, Premiere)",
        txt: "No se puede usar directamente como subtítulo"
      }
    ],
    useCasesTitle: "Usos Habituales del Convertidor de SRT a TXT",
    useCasesSubtitle: "Casos de uso para creadores y profesionales:",
    useCases: [
      {
        role: "Creadores de YouTube y Podcasts",
        description: "Transforma transcripciones automáticas en descripciones, resúmenes y boletines de noticias."
      },
      {
        role: "Editores de Video",
        description: "Extrae el texto de las pistas de subtítulos para validación con clientes sin enviar el video completo."
      },
      {
        role: "Redactores de Contenido",
        description: "Convierte conferencias y webinars en artículos optimizados para buscadores."
      },
      {
        role: "Estudiantes e Investigadores",
        description: "Pasa clases grabadas a documentos de texto fáciles de buscar y subrayar."
      },
      {
        role: "Traductores",
        description: "Traduce párrafos completos de texto antes de generar subtítulos con nuestro Convertidor de TXT a SRT."
      }
    ],
    transcriptsTitle: "Extracción de Texto vs. Transcripción de Audio",
    transcriptsText: [
      "Es importante aclarar que un convertidor de SRT a TXT no transcribe archivos de audio o video directamente.",
      "La herramienta extrae y limpia el texto que ya existe dentro de un archivo de subtítulos .srt generado previamente por YouTube, Zoom o programas de edición.",
      "Si ya cuentas con un archivo SRT, nuestro convertidor es la forma más rápida y gratuita de obtener el texto limpio sin pagar servicios de transcripción."
    ],
    cleanerTextTitle: "Cómo Obtener un Texto Más Limpio desde un SRT",
    cleanerSubtitle: "Recomendaciones para optimizar el texto extraído:",
    cleanerTips: [
      {
        issue: "Líneas de Subtítulo Repetidas",
        explanation: "Algunos subtítulos automáticos repiten frases consecutivas para simular texto en desplazamiento.",
        recommendation: "Usa la opción 'Unir en Párrafos Continuos' para detectar y editar duplicados fácilmente."
      },
      {
        issue: "Etiquetas HTML (<b>, <i>, <font>)",
        explanation: "Etiquetas usadas en subtítulos para cursiva o colores.",
        recommendation: "Nuestra herramienta elimina automáticamente todas las etiquetas HTML."
      },
      {
        issue: "Indicadores de Sonido ([Música], [Aplausos])",
        explanation: "Anotaciones descriptivas para personas con discapacidad auditiva.",
        recommendation: "Puedes borrarlas rápidamente con la función Buscar y Reemplazar de tu editor de texto."
      },
      {
        issue: "Nombres de Interlocutores (Juan:, Presentador:)",
        explanation: "Etiquetas al inicio de las frases en entrevistas.",
        recommendation: "Se mantienen en el texto para conservar la claridad de quién habla."
      }
    ],
    encodingTitle: "Codificación UTF-8 y Caracteres Especiales",
    encodingText: [
      "El formato de codificación es fundamental al trabajar con subtítulos en español (tildes, ñ, ¿, ¡) o en idiomas extranjeros.",
      "Nuestro convertidor exporta archivos en codificación estándar UTF-8 con saltos de línea universales, garantizando que tildes y caracteres especiales se muestren sin fallos en Windows, Mac y móviles."
    ],
    osGuideTitle: "¿La Conversión es Diferente en Windows y Mac?",
    osGuideText: [
      "Dado que nuestro convertidor funciona 100% en el navegador web mediante JavaScript, el proceso es idéntico en Windows, macOS, Linux, iPhone y Android.",
      "No necesitas instalar programas adicionales. Solo abres la página, subes tu archivo .srt y descargas el texto limpio al instante."
    ],
    conclusionTitle: "Extrae Texto de tus Subtítulos al Instante",
    conclusionText: [
      "Convertir archivos SRT a texto plano hace que el contenido de tus videos sea fácil de leer, editar y reutilizar.",
      "Descubre nuestras otras herramientas para subtítulos:",
      "• Convertidor de TXT a SRT: Convierte transcripciones de texto en subtítulos sincronizados.",
      "• Convertidor de SRT a VTT: Transforma subtítulos SRT en WebVTT para reproductores web HTML5.",
      "• Convertidor de VTT a SRT: Convierte archivos WebVTT en formato universal SubRip."
    ]
  },
  pt: {
    introTitle: "Guia Completo para Converter Legendas SRT em Texto Simples (TXT)",
    introSubtitle: "Aprenda a remover marcas de tempo, limpar legendas, extrair transcrições de vídeo e converter arquivos SubRip (.srt) em texto legível.",
    introText: [
      "Arquivos SubRip (.srt) são o padrão mundial para legendas de vídeo, mas seus códigos de tempo e numerações dificultam a leitura contínua. Quando você precisa ler o diálogo de um vídeo, criar um artigo de blog, estudar anotações de aulas ou usar o texto em ferramentas de IA, converter SRT para texto simples (.txt) é a melhor solução.",
      "Nosso conversor online gratuito de SRT para TXT extrai o diálogo falado eliminando códigos de tempo e formatações, diretamente no seu navegador com total privacidade e sem envio de arquivos para servidores."
    ],
    whatIsTitle: "O Que é um Conversor de SRT para TXT?",
    whatIsText: [
      "Um conversor de SRT para TXT é uma ferramenta que transforma arquivos de legendas SubRip (.srt) em documentos de texto (.txt) limpos e fáceis de ler.",
      "A ferramenta separa o diálogo dos metadados técnicos de forma automática:"
    ],
    whatIsElements: [
      { name: "Números Sequenciais (1, 2, 3...)", description: "Índice numérico de cada legenda.", fate: "Removidos automaticamente para não poluir o texto." },
      { name: "Marcas de Tempo (00:00:01,000 --> 00:00:04,500)", description: "Horas, minutos, segundos e milissegundos.", fate: "Removidos por padrão, ou mantidos caso a opção seja desmarcada." },
      { name: "Texto da Legenda", description: "O diálogo falado exibido na tela.", fate: "Preservado com limpeza automática de tags HTML (como <b> e <i>)." },
      { name: "Linhas em Branco", description: "Espaço entre blocos de legenda.", fate: "Unificadas em quebras de linha ou parágrafos contínuos." }
    ],
    whyConvertTitle: "Por Que Converter SRT para TXT? Vantagens Práticas",
    whyConvertSubtitle: "Principais benefícios de extrair texto de legendas:",
    whyConvertReasons: [
      { title: "Leitura Fluida como Transcrição", description: "Leia o diálogo do vídeo sem interrupções de tempos ou números." },
      { title: "Transformação em Artigos e Posts", description: "Transforme vídeos do YouTube e palestras em textos para blogs e redes sociais." },
      { title: "Uso com Ferramentas de IA (ChatGPT, Claude)", description: "Textos limpos economizam tokens e facilitam resumos automáticos por IA." },
      { title: "Revisão e Correção Gramatical", description: "Revise roteiros em editores de texto antes da edição final de vídeo." },
      { title: "Anotações de Aulas e Reuniões", description: "Converta aulas gravadas no Zoom em material de estudo pesquisável." },
      { title: "Facilidade para Tradutores", description: "Traduza o texto em parágrafos completos com maior contexto." }
    ],
    howToTitle: "Como Converter SRT para TXT Online em 4 Passos",
    howToSubtitle: "Passo a passo simples para extrair texto de legendas:",
    howToSteps: [
      { step: "1", title: "Envie o Arquivo SRT ou Cole o Texto", description: "Arraste o arquivo .srt ou cole o conteúdo no campo de entrada." },
      { step: "2", title: "Escolha as Opções de Limpeza", description: "Defina se deseja remover marcas de tempo, números ou unir em parágrafos." },
      { step: "3", title: "Veja a Prévia em Tempo Real", description: "Confira o texto limpo atualizado instantaneamente no painel direito." },
      { step: "4", title: "Copie ou Baixe o Arquivo .TXT", description: "Copie para a área de transferência ou baixe o arquivo .txt pronto." }
    ],
    timecodesTitle: "O Que Acontece com as Marcas de Tempo?",
    timecodesText: [
      "Na conversão padrão, as marcas de tempo são removidas para proporcionar uma leitura agradável.",
      "No entanto, caso você precise de referências temporais para edição ou fins jurídicos, é possível mantê-las."
    ],
    withTimecodeTitle: "É Possível Converter SRT para TXT Mantendo os Tempos?",
    withTimecodeText: [
      "Sim! Nosso conversor oferece suporte a ambos os formatos.",
      "Basta desmarcar a opção 'Remover Marcas de Tempo' nas configurações para manter os tempos no arquivo gerado."
    ],
    withTimecodeComparison: [
      { mode: "Texto Limpo (Padrão)", outputFormat: "Apenas diálogo sem números ou tempos", bestFor: "Leitura, artigos, resumos, IA" },
      { mode: "Com Marcas de Tempo", outputFormat: "Tempos preservados em cada bloco", bestFor: "Edição de vídeo, transcrições jurídicas, conferência" }
    ],
    exampleTitle: "Exemplo de Conversão SRT para TXT",
    exampleIntro: "Veja como um arquivo SRT se transforma em texto simples:",
    exampleSrtInput: `1
00:00:01,000 --> 00:00:04,200
Bem-vindo ao nosso tutorial!

2
00:00:04,300 --> 00:00:08,100
Hoje vamos aprender a extrair texto limpo
a partir de arquivos de legenda.

3
00:00:08,200 --> 00:00:11,500
Isso é ótimo para blogs, transcrições
e anotações de estudo.`,
    exampleTxtOutputClean: `Bem-vindo ao nosso tutorial!
Hoje vamos aprender a extrair texto limpo a partir de arquivos de legenda.
Isso é ótimo para blogs, transcrições e anotações de estudo.`,
    exampleTxtOutputWithTime: `00:00:01,000 --> 00:00:04,200
Bem-vindo ao nosso tutorial!
00:00:04,300 --> 00:00:08,100
Hoje vamos aprender a extrair texto limpo a partir de arquivos de legenda.
00:00:08,200 --> 00:00:11,500
Isso é ótimo para blogs, transcrições e anotações de estudo.`,
    exampleExplanation: "O resultado é um texto limpo, sem códigos de tempo, pronto para leitura.",
    comparisonTitle: "SRT vs TXT: Principais Diferenças",
    comparisonSubtitle: "Comparação entre formatos de legenda e texto:",
    comparisonTable: [
      { feature: "Função", srt: "Faixa de legendas sincronizada com vídeo", txt: "Leitura e edição de texto simples" },
      { feature: "Marcas de Tempo", srt: "Obrigatórias (hh:mm:ss,ms)", txt: "Nenhuma (apenas texto)" },
      { feature: "Numeração", srt: "Índice sequencial obrigatório", txt: "Nenhuma" },
      { feature: "Legibilidade", srt: "Baixa (poluída por tempos)", txt: "Alta (fluida e limpa)" },
      { feature: "Uso em Vídeos", srt: "Suportado nativamente", txt: "Não funciona como legenda de vídeo" }
    ],
    useCasesTitle: "Quem Usa o Conversor de SRT para TXT?",
    useCasesSubtitle: "Aplicações práticas no dia a dia:",
    useCases: [
      { role: "Criadores de Conteúdo e Podcasters", description: "Transforme transcrições em resumos, posts e newsletters." },
      { role: "Editores de Vídeo", description: "Extraia diálogos para aprovação de roteiros com clientes." },
      { role: "Estudantes e Pesquisadores", description: "Converta aulas em textos fáceis de pesquisar e resumir." },
      { role: "Tradutores", description: "Traduza o texto antes de criar novas legendas com nosso Conversor de TXT para SRT." }
    ],
    transcriptsTitle: "Extração de Texto vs. Transcrição de Áudio",
    transcriptsText: [
      "Nosso conversor extrai texto de arquivos .srt existentes. Ele não transcreve arquivos de áudio ou vídeo brutos.",
      "Se você já possui um arquivo SRT, este é o método mais rápido e gratuito de obter o texto limpo."
    ],
    cleanerTextTitle: "Dicas para um Texto Ainda Mais Limpo",
    cleanerSubtitle: "Como lidar com particularidades de legendas:",
    cleanerTips: [
      { issue: "Frases Repetidas", explanation: "Legendas automáticas às vezes repetem linhas anteriores.", recommendation: "Use 'Unir em Parágrafos' para revisar e editar duplicatas com facilidade." },
      { issue: "Tags HTML (<b>, <i>)", explanation: "Formatação de itálico ou cor.", recommendation: "Nossa ferramenta remove automaticamente todas as tags HTML." },
      { issue: "Sons e Efeitos ([Música], [Aplausos])", explanation: "Descrições sonoras de acessibilidade.", recommendation: "Remova rapidamente usando Localizar e Substituir no seu editor." }
    ],
    encodingTitle: "Codificação UTF-8 e Caracteres Especiais",
    encodingText: [
      "Nosso conversor utiliza padrão UTF-8, garantindo que acentos (á, é, ã, ç) e caracteres internacionais apareçam perfeitamente em qualquer dispositivo."
    ],
    osGuideTitle: "Funciona em Windows e Mac?",
    osGuideText: [
      "Sim. Como roda 100% no navegador, o funcionamento é idêntico no Windows, Mac, Linux, Android e iPhone, sem necessidade de instalar aplicativos."
    ],
    conclusionTitle: "Extraia Texto das Suas Legendas Agora",
    conclusionText: [
      "Converta legendas SRT em texto simples em segundos com rapidez e total privacidade.",
      "Conheça nossas outras ferramentas:",
      "• Conversor de TXT para SRT: Crie legendas sincronizadas a partir de textos.",
      "• Conversor de SRT para VTT: Converta legendas para o formato WebVTT.",
      "• Conversor de VTT para SRT: Transforme arquivos WebVTT em SubRip."
    ]
  },
  fr: {
    introTitle: "Guide Complet pour Convertir des Sous-Titres SRT en Texte Brut (TXT)",
    introSubtitle: "Apprenez à supprimer les codes temporels, nettoyer les sous-titres, extraire des transcriptions et transformer des fichiers SubRip (.srt) en texte lisible.",
    introText: [
      "Les fichiers SubRip (.srt) sont idéaux pour afficher des sous-titres sur une vidéo, mais leur structure horodatée rend leur lecture fastidieuse sous forme de document. Pour relire un discours, rédiger un article de blog, étudier un cours en ligne ou alimenter des outils d'IA, convertir un fichier SRT en texte brut (.txt) est la solution idéale.",
      "Notre convertisseur SRT en TXT en ligne gratuit extrait le texte parlé en supprimant automatiquement les repères temporels et les balises de style, directement dans votre navigateur en toute confidentialité."
    ],
    whatIsTitle: "Qu'est-ce qu'un Convertisseur SRT en TXT ?",
    whatIsText: [
      "Un convertisseur SRT en TXT est un utilitaire conçu pour transformer des fichiers de sous-titres SubRip (.srt) en documents texte (.txt) fluides et faciles à lire.",
      "L'outil sépare automatiquement le dialogue des métadonnées techniques :"
    ],
    whatIsElements: [
      { name: "Numéros Séquentiels (1, 2, 3...)", description: "Indice numérique au début de chaque sous-titre.", fate: "Supprimés automatiquement pour ne pas encombrer le texte." },
      { name: "Codes Temporels (00:00:01,000 --> 00:00:04,500)", description: "Horodatages de début et de fin.", fate: "Supprimés par défaut, ou conservés si l'option est décochée." },
      { name: "Texte du Dialogue", description: "Les paroles prononcées à l'écran.", fate: "Conservé avec suppression automatique des balises HTML (<b>, <i>)." },
      { name: "Lignes Vides", description: "Séparateurs entre les blocs.", fate: "Harmonisées en sauts de ligne ou paragraphes continus." }
    ],
    whyConvertTitle: "Pourquoi Convertir SRT en TXT ? Avantages Pratiques",
    whyConvertSubtitle: "Les principaux cas d'utilisation pour extraire le texte des sous-titres :",
    whyConvertReasons: [
      { title: "Lecture Fluide sous Forme de Transcription", description: "Lisez le contenu d'une vidéo sans être gêné par les codes temporels." },
      { title: "Création d'Articles et Contenus Écrits", description: "Transformez vos vidéos YouTube ou podcasts en articles de blog et newsletters." },
      { title: "Utilisation avec l'Intelligence Artificielle (ChatGPT, Claude)", description: "Le texte brut sans horodatage économise des tokens et améliore la compréhension de l'IA." },
      { title: "Relecture et Correction Orthographique", description: "Relisez facilement le script avant le montage final de la vidéo." },
      { title: "Prise de Notes et Recherche Universitaire", description: "Convertissez des conférences enregistrées en notes de cours faciles à parcourir." },
      { title: "Aide à la Traduction", description: "Traduisez des paragraphes entiers avec un meilleur contexte global." }
    ],
    howToTitle: "Comment Convertir SRT en TXT en Ligne en 4 Étapes",
    howToSubtitle: "Marche à suivre pour extraire le texte de vos sous-titres :",
    howToSteps: [
      { step: "1", title: "Importez votre Fichier SRT ou Collez le Texte", description: "Déposez votre fichier .srt ou collez le texte dans le champ prévu à cet effet." },
      { step: "2", title: "Choisissez vos Options de Formatage", description: "Définissez si vous souhaitez supprimer les codes temporels ou fusionner les paragraphes." },
      { step: "3", title: "Visualisez l'Aperçu en Direct", description: "Vérifiez le texte nettoyé instantanément dans le panneau de droite." },
      { step: "4", title: "Copiez ou Téléchargez le Fichier .TXT", description: "Copiez dans le presse-papiers ou téléchargez votre fichier texte prêt à l'emploi." }
    ],
    timecodesTitle: "Que Deviennent les Horodatages lors de la Conversion ?",
    timecodesText: [
      "Par défaut, les codes temporels sont supprimés pour produire un texte propre et fluide.",
      "Toutefois, si votre projet nécessite de conserver les repères temporels (pour le montage ou le juridique), vous pouvez les conserver facilement."
    ],
    withTimecodeTitle: "Peut-on Convertir SRT en TXT en Gardant les Horodatages ?",
    withTimecodeText: [
      "Oui ! Notre convertisseur prend en charge l'extraction avec ou sans codes temporels.",
      "Il vous suffit de décocher l'option 'Supprimer les Horodatages' dans les paramètres pour conserver les repères temporels dans votre fichier texte."
    ],
    withTimecodeComparison: [
      { mode: "Texte Nettoyé (Par Défaut)", outputFormat: "Dialogue pur sans minutage ni numéros", bestFor: "Lecture, articles, notes, IA" },
      { mode: "Avec Horodatages", outputFormat: "Repères temporels conservés sur chaque bloc", bestFor: "Montage vidéo, vérification, transcriptions juridiques" }
    ],
    exampleTitle: "Exemple de Conversion SRT en TXT",
    exampleIntro: "Découvrez la transformation d'un fichier SRT en texte brut :",
    exampleSrtInput: `1
00:00:01,000 --> 00:00:04,200
Bienvenue dans notre tutoriel vidéo !

2
00:00:04,300 --> 00:00:08,100
Aujourd'hui, nous allons apprendre à extraire
du texte propre depuis des sous-titres.

3
00:00:08,200 --> 00:00:11,500
C'est très utile pour les blogs, transcriptions
et notes d'études.`,
    exampleTxtOutputClean: `Bienvenue dans notre tutoriel vidéo !
Aujourd'hui, nous allons apprendre à extraire du texte propre depuis des sous-titres.
C'est très utile pour les blogs, transcriptions et notes d'études.`,
    exampleTxtOutputWithTime: `00:00:01,000 --> 00:00:04,200
Bienvenue dans notre tutoriel vidéo !
00:00:04,300 --> 00:00:08,100
Aujourd'hui, nous allons apprendre à extraire du texte propre depuis des sous-titres.
00:00:08,200 --> 00:00:11,500
C'est très utile pour les blogs, transcriptions et notes d'études.`,
    exampleExplanation: "Les numéros et codes temporels disparaissent pour laisser place à un texte agréable à lire.",
    comparisonTitle: "SRT vs TXT : Quelles Différences ?",
    comparisonSubtitle: "Comparatif technique entre sous-titres et texte brut :",
    comparisonTable: [
      { feature: "Fonction Principale", srt: "Piste de sous-titres synchronisée avec la vidéo", txt: "Stockage et lecture de texte simple" },
      { feature: "Codes Temporels", srt: "Obligatoires avec millisecondes (hh:mm:ss,ms)", txt: "Aucun (texte pur)" },
      { feature: "Numérotation", srt: "Indice séquentiel obligatoire", txt: "Aucune" },
      { feature: "Confort de Lecture", srt: "Faible (pollué par les horodatages)", txt: "Élevé (lecture fluide)" },
      { feature: "Usage Vidéo", srt: "Compatible avec tous les lecteurs", txt: "Incompatible comme piste de sous-titres" }
    ],
    useCasesTitle: "Cas d'Usage Courants du Convertisseur SRT en TXT",
    useCasesSubtitle: "Pour qui cet outil est-il particulièrement utile ?",
    useCases: [
      { role: "Créateurs de Contenu et Podcasteurs", description: "Transformez des sous-titres automatiques en résumés et newsletters." },
      { role: "Monteurs Vidéo", description: "Transmettez les dialogues écrits à vos clients pour validation sans exporter la vidéo." },
      { role: "Étudiants et Chercheurs", description: "Convertissez des cours en ligne en documents de révision indexables." },
      { role: "Traducteurs", description: "Traduisez le texte avant de générer de nouveaux sous-titres avec notre Convertisseur TXT en SRT." }
    ],
    transcriptsTitle: "Extraction de Sous-Titres vs. Transcription Audio",
    transcriptsText: [
      "Notre outil extrait le texte présent dans un fichier .srt existant. Il ne transcrit pas directement de fichiers audio ou vidéo bruts.",
      "Si vous avez déjà un fichier SRT, c'est le moyen le plus rapide et gratuit d'en extraire le texte."
    ],
    cleanerTextTitle: "Conseils pour Obtenir un Texte Parfait",
    cleanerSubtitle: "Comment gérer les particularités des fichiers sous-titres :",
    cleanerTips: [
      { issue: "Phrases Répétées", explanation: "Certains sous-titres automatiques dupliquent des lignes.", recommendation: "Activez 'Fusionner en Paragraphes' pour repérer et corriger les doublons." },
      { issue: "Balises HTML (<b>, <i>)", explanation: "Mise en forme des sous-titres.", recommendation: "Notre outil nettoie automatiquement toutes les balises HTML." },
      { issue: "Indications Sonores ([Musique], [Rires])", explanation: "Descriptions sonores pour sourds et malentendants.", recommendation: "Supprimez-les facilement avec la fonction Rechercher/Remplacer de votre traitement de texte." }
    ],
    encodingTitle: "Encodage UTF-8 et Caractères Accentúes",
    encodingText: [
      "Notre convertisseur utilise l'encodage standard UTF-8, garantissant que les accents français (é, è, à, ç) s'affichent parfaitement sur tous les appareils."
    ],
    osGuideTitle: "Compatibilité Windows et Mac",
    osGuideText: [
      "L'outil s'exécute entièrement dans votre navigateur et fonctionne de manière identique sous Mac, Windows, Linux, Android et iOS."
    ],
    conclusionTitle: "Convertissez Vos Sous-Titres en Texte Dès Maintenant",
    conclusionText: [
      "Transformez vos fichiers SRT en texte clair en quelques secondes avec une confidentialité totale.",
      "Découvrez nos autres outils dédiés aux sous-titres :",
      "• Convertisseur TXT en SRT : Créez des sous-titres synchronisés à partir de texte.",
      "• Convertisseur SRT en VTT : Convertissez vos sous-titres au standard WebVTT.",
      "• Convertisseur VTT en SRT : Transformez les fichiers WebVTT en SubRip."
    ]
  },
  de: {
    introTitle: "Vollständiger Leitfaden: SRT-Untertitel in Klartext (TXT) umwandeln",
    introSubtitle: "Erfahren Sie, wie Sie Zeitstempel entfernen, Untertitelblöcke bereinigen, Videotranskripte extrahieren und SubRip-Dateien (.srt) in lesbaren Text umwandeln.",
    introText: [
      "SubRip-Dateien (.srt) sind ideal für Video-Untertitel, eignen sich wegen ihrer Zeitstempel und Zeilennummern jedoch kaum zum Lesen als Fließtext. Wenn Sie den Dialog eines Videos nachlesen, einen Blogbeitrag verfassen, Vorlesungsnotizen erstellen oder Texte für KI-Modelle aufbereiten möchten, ist die Umwandlung von SRT in TXT die schnellste Lösung.",
      "Unser kostenloser Online-Konverter von SRT in TXT extrahiert den gesprochenen Text und entfernt Zeitcodes sowie HTML-Formatierungen direkt in Ihrem Browser – 100 % datenschutzkonform und ohne Server-Uploads."
    ],
    whatIsTitle: "Was ist ein SRT-in-TXT-Konverter?",
    whatIsText: [
      "Ein SRT-in-TXT-Konverter ist ein Tool, das strukturierte SubRip-Dateien (.srt) in saubere, zusammenhängende Fließtextdokumente (.txt) umwandelt.",
      "Dabei trennt das Tool automatisch die gesprochenen Dialoge von technischen Metadaten:"
    ],
    whatIsElements: [
      { name: "Fortlaufende Nummern (1, 2, 3...)", description: "Ziffern zu Beginn jedes Untertitelblocks.", fate: "Werden automatisch entfernt, um den Text übersichtlich zu halten." },
      { name: "Zeitstempel (00:00:01,000 --> 00:00:04,500)", description: "Start- und Endzeitcodes mit Millisekunden.", fate: "Werden standardmäßig entfernt, können bei Bedarf aber beibehalten werden." },
      { name: "Untertiteltext", description: "Der eigentliche gesprochene Dialog.", fate: "Wird vollständig übernommen; HTML-Tags (wie <b> oder <i>) werden sauber bereinigt." },
      { name: "Leerzeilen", description: "Trennlinien zwischen den Blöcken.", fate: "Werden in standardmäßige Zeilenumbrüche oder Absätze zusammengefügt." }
    ],
    whyConvertTitle: "Warum SRT in TXT umwandeln? Praktische Vorteile",
    whyConvertSubtitle: "Wichtige Anwendungsfälle für die Textextraktion aus Untertiteln:",
    whyConvertReasons: [
      { title: "Angenehmes Lesen als Transkript", description: "Lesen Sie den gesamten Dialog ohne störende Zeitstempel oder Nummerierungen." },
      { title: "Content-Wiederverwendung für Artikel & Blogs", description: "Verwandeln Sie YouTube-Videos und Webinare in lesenswerte Artikel und Newsletter." },
      { title: "Nutzung mit KI-Tools (ChatGPT, Claude)", description: "Reiner Text spart Token und liefert KI-Modellen optimalen Kontext ohne störende Formatierung." },
      { title: "Korrekturlesen und Rechtschreibprüfung", description: "Prüfen Sie Texte vor der finalen Videoveröffentlichung bequem in einer Textverarbeitung." },
      { title: "Studiennotizen & Recherche", description: "Wandeln Sie aufgezeichnete Zoom-Meetings oder Vorlesungen in durchsuchbare Notizen um." },
      { title: "Vorbereitung für Übersetzer", description: "Übersetzen Sie Fließtext mit vollem Satzkontext statt isolierter Untertitelfragmente." }
    ],
    howToTitle: "SRT in TXT online umwandeln in 4 Schritten",
    howToSubtitle: "So einfach extrahieren Sie Text aus Untertiteldateien:",
    howToSteps: [
      { step: "1", title: "SRT-Datei hochladen oder Text einfügen", description: "Ziehen Sie Ihre .srt-Datei in den Upload-Bereich oder fügen Sie den Text direkt ein." },
      { step: "2", title: "Formatierungsoptionen wählen", description: "Wählen Sie, ob Zeitstempel entfernt oder Absätze zusammengefügt werden sollen." },
      { step: "3", title: "Live-Vorschau prüfen", description: "Sehen Sie das bereinigte Ergebnis sofort in der rechten Vorschau." },
      { step: "4", title: "Kopieren oder .TXT herunterladen", description: "Kopieren Sie den Text in die Zwischenablage oder laden Sie die .txt-Datei herunter." }
    ],
    timecodesTitle: "Was passiert mit den Zeitstempeln bei der Konvertierung?",
    timecodesText: [
      "Standardmäßig werden Zeitstempel entfernt, um ein sauberes und lesbares Textdokument zu erstellen.",
      "Wenn Sie die Zeitcodes jedoch für den Videoschnitt oder als Referenz benötigen, können Sie diese beibehalten."
    ],
    withTimecodeTitle: "Kann man SRT mit Zeitstempeln in TXT umwandeln?",
    withTimecodeText: [
      "Ja! Unser Konverter unterstützt sowohl die Ausgabe ohne als auch mit Zeitstempeln.",
      "Deaktivieren Sie einfach die Option 'Zeitstempel entfernen', um die Zeitcodes im Text beizubehalten."
    ],
    withTimecodeComparison: [
      { mode: "Bereinigter Text (Standard)", outputFormat: "Reiner Dialog ohne Zeitstempel", bestFor: "Artikel, Notizen, Zusammenfassungen, KI" },
      { mode: "Mit Zeitstempeln", outputFormat: "Zeitcodes vor jedem Block erhalten", bestFor: "Videoschnitt-Referenzen, Protokolle, Überprüfungen" }
    ],
    exampleTitle: "Beispiel: SRT zu TXT Vorher-Nachher",
    exampleIntro: "So verwandelt sich eine SRT-Datei in sauberen Text:",
    exampleSrtInput: `1
00:00:01,000 --> 00:00:04,200
Willkommen zu unserem Video-Tutorial!

2
00:00:04,300 --> 00:00:08,100
Heute lernen wir, wie man sauberen
Klartext aus Untertiteldateien extrahiert.

3
00:00:08,200 --> 00:00:11,500
Das ist ideal für Blogs, Transkripte
und Studiennotizen.`,
    exampleTxtOutputClean: `Willkommen zu unserem Video-Tutorial!
Heute lernen wir, wie man sauberen Klartext aus Untertiteldateien extrahiert.
Das ist ideal für Blogs, Transkripte und Studiennotizen.`,
    exampleTxtOutputWithTime: `00:00:01,000 --> 00:00:04,200
Willkommen zu unserem Video-Tutorial!
00:00:04,300 --> 00:00:08,100
Heute lernen wir, wie man sauberen Klartext aus Untertiteldateien extrahiert.
00:00:08,200 --> 00:00:11,500
Das ist ideal für Blogs, Transkripte und Studiennotizen.`,
    exampleExplanation: "Alle Zeitstempel und Blocknummern werden sauber entfernt, sodass nur der eigentliche Text erhalten bleibt.",
    comparisonTitle: "SRT vs. TXT: Die Unterschiede im Überblick",
    comparisonSubtitle: "Technischer Vergleich zwischen Untertitel- und Textdateien:",
    comparisonTable: [
      { feature: "Hauptfunktion", srt: "Synchronisierte Untertitelspur für Videos", txt: "Speichern und Lesen von reinem Fließtext" },
      { feature: "Zeitstempel", srt: "Zwingend erforderlich (hh:mm:ss,ms)", txt: "Keine (reiner Text)" },
      { feature: "Nummerierung", srt: "Fortlaufende Blocknummern", txt: "Keine" },
      { feature: "Lesbarkeit", srt: "Gering (durch Zeitcodes gestört)", txt: "Sehr hoch (zusammenhängend und sauber)" },
      { feature: "Video-Einsatz", srt: "Universell kompatibel", txt: "Nicht direkt als Untertitel ladbar" }
    ],
    useCasesTitle: "Typische Einsatzbereiche für SRT zu TXT",
    useCasesSubtitle: "Wer profitiert von der Textextraktion?",
    useCases: [
      { role: "YouTuber und Podcaster", description: "Erstellen Sie aus Untertiteln schnell Zusammenfassungen, Show Notes und Blogbeiträge." },
      { role: "Video-Editoren", description: "Geben Sie Dialogtexte zur Freigabe an Kunden weiter, ohne das Video exportieren zu müssen." },
      { role: "Studenten und Dozenten", description: "Wandeln Sie Online-Vorlesungen in leicht durchsuchbare Lernunterlagen um." },
      { role: "Übersetzer", description: "Übersetzen Sie Fließtext, bevor Sie mit unserem TXT-in-SRT-Konverter neue Untertitel erstellen." }
    ],
    transcriptsTitle: "Textextraktion vs. Audio-Transkription",
    transcriptsText: [
      "Unser Tool extrahiert Text aus bestehenden .srt-Dateien. Es transkribiert keine rohen Audio- oder Videodateien.",
      "Wenn Sie bereits eine SRT-Datei besitzen, ist dies der schnellste und kostenlose Weg, reinen Text zu erhalten."
    ],
    cleanerTextTitle: "Tipps für besonders sauberen Text",
    cleanerSubtitle: "So vermeiden Sie typische Formatierungsfehler:",
    cleanerTips: [
      { issue: "Wiederholte Textzeilen", explanation: "Manche automatischen Untertitel duplizieren Zeilen.", recommendation: "Nutzen Sie 'In Absätze zusammenfügen', um Duplikate schnell zu erkennen." },
      { issue: "HTML-Tags (<b>, <i>)", explanation: "Formatierungen für Kursivschrift oder Farben.", recommendation: "Unser Tool entfernt HTML-Tags automatisch und vollständig." },
      { issue: "Geräuschbeschreibungen ([Musik], [Applaus])", explanation: "Hinweise für Gehörlose.", recommendation: "Entfernen Sie diese bei Bedarf über Suchen & Ersetzen in Ihrer Textverarbeitung." }
    ],
    encodingTitle: "UTF-8-Codierung und Umlaute (ä, ö, ü, ß)",
    encodingText: [
      "Unser Tool verwendet den modernen UTF-8-Standard, wodurch deutsche Umlaute und Sonderzeichen fehlerfrei dargestellt und heruntergeladen werden."
    ],
    osGuideTitle: "Funktioniert auf Windows und Mac",
    osGuideText: [
      "Da die Verarbeitung zu 100 % im Webbrowser läuft, funktioniert das Tool identisch auf Windows, Mac, Linux, Android und iOS."
    ],
    conclusionTitle: "Extrahieren Sie jetzt Text aus Ihren Untertiteln",
    conclusionText: [
      "Verwandeln Sie SRT-Dateien in Sekundenschnelle in sauberen Text mit voller Privatsphäre.",
      "Entdecken Sie weitere nützliche Tools:",
      "• TXT-in-SRT-Konverter: Erstellen Sie synchronisierte Untertitel aus Fließtext.",
      "• SRT-in-VTT-Konverter: Konvertieren Sie Untertitel in das WebVTT-Format.",
      "• VTT-in-SRT-Konverter: Wandeln Sie WebVTT-Dateien in SubRip um."
    ]
  },
  id: {
    introTitle: "Panduan Lengkap Mengubah Subtitle SRT Menjadi Teks Polos (TXT)",
    introSubtitle: "Pelajari cara menghapus stempel waktu, membersihkan baris subtitle, mengekstrak transkrip video, dan mengubah file SubRip (.srt) menjadi teks yang mudah dibaca.",
    introText: [
      "File SubRip (.srt) sangat cocok untuk menampilkan subtitle pada video, namun kode waktu dan penomoran yang berulang membuatnya tidak nyaman dibaca sebagai dokumen biasa. Ketika Anda ingin membaca naskah video, membuat artikel blog, merangkum materi kuliah, atau memasukkan teks ke AI, mengubah SRT ke teks (.txt) adalah solusi tercepat.",
      "Konverter online gratis SRT ke TXT kami mengekstrak dialog dan menghapus stempel waktu secara otomatis langsung di browser Anda dengan jaminan privasi 100% tanpa unggah server."
    ],
    whatIsTitle: "Apa Itu Konverter SRT ke TXT?",
    whatIsText: [
      "Konverter SRT ke TXT adalah alat untuk mengubah file subtitle SubRip (.srt) menjadi dokumen teks biasa (.txt) yang rapi dan mudah dibaca.",
      "Alat ini memisahkan dialog dari data teknis secara otomatis:"
    ],
    whatIsElements: [
      { name: "Nomor Urut (1, 2, 3...)", description: "Angka urutan di awal setiap blok subtitle.", fate: "Dihapus otomatis agar tidak mengotori naskah bacaan." },
      { name: "Stempel Waktu (00:00:01,000 --> 00:00:04,500)", description: "Waktu awal dan akhir tampilan subtitle.", fate: "Dihapus secara default, atau dapat dipertahankan sesuai kebutuhan." },
      { name: "Teks Dialog", description: "Perkataan yang diucapkan dalam video.", fate: "Dipertahankan utuh dengan pembersihan tag HTML otomatis (seperti <b> dan <i>)." },
      { name: "Baris Kosong", description: "Pemisah antar blok subtitle.", fate: "Disatukan menjadi baris standar atau paragraf menyambung." }
    ],
    whyConvertTitle: "Mengapa Mengubah SRT ke TXT? Manfaat Praktis",
    whyConvertSubtitle: "Keuntungan utama mengekstrak teks dari subtitle:",
    whyConvertReasons: [
      { title: "Membaca Nyaman Sebagai Transkrip", description: "Baca seluruh isi video tanpa terganggu oleh kode waktu atau angka." },
      { title: "Membuat Artikel Blog & Konten Tulisan", description: "Ubah video YouTube atau rekaman webinar menjadi artikel dan materi tulisan." },
      { title: "Memasukkan Teks ke AI (ChatGPT, Claude)", description: "Teks polos menghemat token dan memudahkan AI memahami konteks naskah." },
      { title: "Memeriksa Ejaan dan Naskah", description: "Koreksi tata bahasa lebih mudah dilakukan pada dokumen teks sebelum video dipublikasikan." },
      { title: "Catatan Kuliah dan Rapat", description: "Ubah rekaman Zoom menjadi ringkasan materi yang mudah dicari." },
      { title: "Mempermudah Penerjemahan", description: "Penerjemah dapat memahami konteks kalimat utuh dengan lebih baik." }
    ],
    howToTitle: "Cara Mengubah SRT ke TXT Online dalam 4 Langkah",
    howToSubtitle: "Langkah mudah mengekstrak teks dari file subtitle:",
    howToSteps: [
      { step: "1", title: "Unggah File SRT atau Tempel Teks", description: "Tarik file .srt Anda ke area unggah atau tempel teks ke kolom input." },
      { step: "2", title: "Pilih Opsi Format", description: "Tentukan apakah ingin menghapus stempel waktu atau menggabungkan paragraf." },
      { step: "3", title: "Lihat Pratinjau Teks Bersih", description: "Periksa hasil teks bersih di panel kanan secara instan." },
      { step: "4", title: "Salin atau Unduh File .TXT", description: "Salin ke papan klip atau unduh file .txt langsung ke perangkat Anda." }
    ],
    timecodesTitle: "Apa yang Terjadi pada Stempel Waktu?",
    timecodesText: [
      "Secara default, stempel waktu dihapus untuk menghasilkan dokumen teks yang rapi dan nyaman dibaca.",
      "Namun, jika Anda membutuhkan patokan waktu untuk editing video atau arsip, Anda tetap dapat menyertakannya."
    ],
    withTimecodeTitle: "Bisakah Mengubah SRT ke TXT dengan Menyimpan Stempel Waktu?",
    withTimecodeText: [
      "Bisa! Konverter kami mendukung mode teks bersih maupun teks dengan stempel waktu.",
      "Cukup hilangkan centang pada opsi 'Hapus Stempel Waktu' di pengaturan untuk mempertahankan waktu tampilan."
    ],
    withTimecodeComparison: [
      { mode: "Teks Bersih (Default)", outputFormat: "Hanya teks dialog tanpa angka atau waktu", bestFor: "Membaca, artikel blog, rangkuman, prompt AI" },
      { mode: "Dengan Stempel Waktu", outputFormat: "Stempel waktu tetap ada di setiap baris", bestFor: "Referensi editing video, transkrip hukum, verifikasi" }
    ],
    exampleTitle: "Contoh Konversi SRT ke TXT",
    exampleIntro: "Lihat bagaimana file SRT diubah menjadi teks bersih:",
    exampleSrtInput: `1
00:00:01,000 --> 00:00:04,200
Selamat datang di tutorial video kami!

2
00:00:04,300 --> 00:00:08,100
Hari ini kita akan belajar cara mengekstrak
teks bersih dari file subtitle.

3
00:00:08,200 --> 00:00:11,500
Ini sangat berguna untuk blog, transkrip,
dan catatan belajar.`,
    exampleTxtOutputClean: `Selamat datang di tutorial video kami!
Hari ini kita akan belajar cara mengekstrak teks bersih dari file subtitle.
Ini sangat berguna untuk blog, transkrip, dan catatan belajar.`,
    exampleTxtOutputWithTime: `00:00:01,000 --> 00:00:04,200
Selamat datang di tutorial video kami!
00:00:04,300 --> 00:00:08,100
Hari ini kita akan belajar cara mengekstrak teks bersih dari file subtitle.
00:00:08,200 --> 00:00:11,500
Ini sangat berguna untuk blog, transkrip, dan catatan belajar.`,
    exampleExplanation: "Hasilnya adalah teks bersih yang nyaman dibaca dan siap diedit.",
    comparisonTitle: "Perbedaan Antara SRT dan TXT",
    comparisonSubtitle: "Perbandingan teknis antara file subtitle dan teks biasa:",
    comparisonTable: [
      { feature: "Fungsi Utama", srt: "Trek subtitle tersinkronisasi untuk video", txt: "Membaca dan mengedit teks biasa" },
      { feature: "Kode Waktu", srt: "Wajib ada milidetik (hh:mm:ss,ms)", txt: "Tidak ada (teks murni)" },
      { feature: "Penomoran", srt: "Wajib bernomor urut", txt: "Tidak ada" },
      { feature: "Kenyamanan Membaca", srt: "Rendah (terganggu kode waktu)", txt: "Tinggi (rapi dan mengalir)" },
      { feature: "Penggunaan Video", srt: "Didukung semua pemutar video", txt: "Tidak bisa dipakai langsung sebagai subtitle" }
    ],
    useCasesTitle: "Penggunaan Populer Konverter SRT ke TXT",
    useCasesSubtitle: "Siapa saja yang membutuhkan alat ini?",
    useCases: [
      { role: "Kreator Konten & Podcaster", description: "Ubah subtitle video menjadi artikel blog dan ringkasan konten." },
      { role: "Editor Video", description: "Kirim naskah dialog ke klien untuk disetujui tanpa mengirim file video." },
      { role: "Pelajar & Peneliti", description: "Ubah rekaman materi kuliah menjadi ringkasan naskah yang mudah dipelajari." },
      { role: "Penerjemah", description: "Terjemahkan naskah sebelum membuat subtitle baru dengan Konverter TXT ke SRT kami." }
    ],
    transcriptsTitle: "Ekstraksi Subtitle vs. Transkripsi Audio",
    transcriptsText: [
      "Alat ini mengekstrak teks dari file .srt yang sudah ada. Alat ini tidak mentranskripsi file suara atau video mentah secara langsung.",
      "Jika Anda sudah memiliki file SRT, ini adalah cara paling cepat dan gratis untuk mendapatkan teks bersih."
    ],
    cleanerTextTitle: "Tips Mendapatkan Teks yang Lebih Bersih",
    cleanerSubtitle: "Cara mengatasi keunikan format subtitle:",
    cleanerTips: [
      { issue: "Teks yang Berulang", explanation: "Beberapa subtitle otomatis mengulang baris sebelumnya.", recommendation: "Gunakan opsi 'Gabung Menjadi Paragraf' untuk menemukan dan menghapus duplikasi." },
      { issue: "Tag HTML (<b>, <i>)", explanation: "Format teks miring atau warna.", recommendation: "Alat kami otomatis menghapus semua tag HTML." },
      { issue: "Keterangan Suara ([Musik], [Tepuk Tangan])", explanation: "Deskripsi audio untuk tunarungu.", recommendation: "Hapus dengan mudah menggunakan fitur Cari & Ganti pada aplikasi teks." }
    ],
    encodingTitle: "Standar Encoding UTF-8",
    encodingText: [
      "Alat kami menggunakan standar UTF-8 modern sehingga karakter teks dan simbol bahasa apa pun tampil sempurna di semua perangkat."
    ],
    osGuideTitle: "Kompatibilitas di Windows dan Mac",
    osGuideText: [
      "Karena berjalan 100% di browser, alat ini bekerja sama baiknya di Windows, Mac, Linux, Android, dan iPhone tanpa perlu memasang aplikasi tambahan."
    ],
    conclusionTitle: "Ekstrak Teks Subtitle Anda Sekarang",
    conclusionText: [
      "Ubah file SRT menjadi teks biasa dalam hitungan detik dengan privasi terjaga.",
      "Coba alat subtitle kami lainnya:",
      "• Konverter TXT ke SRT: Buat subtitle tersinkronisasi dari teks biasa.",
      "• Konverter SRT ke VTT: Ubah subtitle ke format WebVTT.",
      "• Konverter VTT ke SRT: Ubah file WebVTT menjadi format SubRip."
    ]
  },
  tr: {
    introTitle: "SRT Altyazılarını Düz Metne (TXT) Dönüştürme Kılavuzu",
    introSubtitle: "Zaman damgalarını kaldırmayı, altyazıları temizlemeyi, video transkriptlerini çıkarmayı ve SubRip (.srt) dosyalarını okunabilir metne dönüştürmeyi öğrenin.",
    introText: [
      "SubRip (.srt) dosyaları video altyazıları için mükemmeldir ancak zaman kodları ve sıra numaraları düz bir metin gibi okunmalarını zorlaştırır. Bir videonun konuşmalarını okumak, blog yazısı hazırlamak, ders notu çıkarmak veya yapay zeka araçlarına metin aktarmak istediğinizde SRT'yi TXT'ye dönüştürmek en pratik yoldur.",
      "Ücretsiz çevrimiçi SRT - TXT dönüştürücümüz, zaman damgalarını ve biçimlendirmeleri temizleyerek konuşmaları doğrudan tarayıcınızda %100 gizlilikle düz metne aktarır."
    ],
    whatIsTitle: "SRT - TXT Dönüştürücü Nedir?",
    whatIsText: [
      "SRT - TXT dönüştürücü, yapılandırılmış SubRip (.srt) dosyalarını temiz, akıcı ve okunabilir düz metin (.txt) belgelerine dönüştüren bir araçtır.",
      "Dönüştürme işlemi sırasında altyazı diyalogları teknik verilerden ayrıştırılır:"
    ],
    whatIsElements: [
      { name: "Sıra Numaraları (1, 2, 3...)", description: "Her altyazı bloğunun başındaki sayı.", fate: "Metin kalabalığını önlemek için otomatik olarak temizlenir." },
      { name: "Zaman Damgaları (00:00:01,000 --> 00:00:04,500)", description: "Başlangıç ve bitiş zaman kodları.", fate: "Varsayılan olarak kaldırılır; istenirse ayardan korunabilir." },
      { name: "Altyazı Metni", description: "Videoda konuşulan asıl metin.", fate: "HTML etiketleri (<b>, <i>) temizlenerek korunur." },
      { name: "Boş Satırlar", description: "Altyazı blokları arasındaki ayırıcılar.", fate: "Standart satır sonlarına veya akıcı paragraflara dönüştürülür." }
    ],
    whyConvertTitle: "Neden SRT Dosyasını TXT'ye Dönüştürmelisiniz?",
    whyConvertSubtitle: "Altyazılardan metin çıkarmanın sağladığı avantajlar:",
    whyConvertReasons: [
      { title: "Transkript Olarak Rahat Okuma", description: "Zaman kodlarına takılmadan videodaki konuşmaları akıcı bir metin olarak okuyun." },
      { title: "Blog ve Yazılı İçerik Üretimi", description: "YouTube videolarını ve seminerleri dakikalar içinde blog yazılarına ve makalelere çevirin." },
      { title: "Yapay Zeka Araçlarında Kullanım (ChatGPT, Claude)", description: "Temiz metinler token tasarrufu sağlar ve yapay zekanın bağlamı daha iyi anlamasını sağlar." },
      { title: "Metin Düzeltme ve İmla Kontrolü", description: "Video kurgusundan önce diyalogları kelime işlemcilerde hızlıca kontrol edin." },
      { title: "Ders Notları ve Toplantı Özetleri", description: "Zoom kayıtlarını ve ders videolarını aranabilir notlara dönüştürün." },
      { title: "Çeviri Kolaylığı", description: "Parçalanmış altyazılar yerine bütün cümleler üzerinde daha rahat çeviri yapın." }
    ],
    howToTitle: "4 Adımda SRT Dosyasını TXT'ye Dönüştürme",
    howToSubtitle: "Altyazılarınızdan metin çıkarmak için bu adımları izleyin:",
    howToSteps: [
      { step: "1", title: "SRT Dosyasını Yükleyin veya Metni Yapıştırın", description: ".srt dosyanızı sürükleyip bırakın veya metni alana yapıştırın." },
      { step: "2", title: "Biçimlendirme Ayarlarını Seçin", description: "Zaman damgalarını kaldırma veya paragrafları birleştirme seçeneklerini belirleyin." },
      { step: "3", title: "Canlı Önizlemede Kontrol Edin", description: "Temizlenen metni sağdaki önizleme panelinde anında görüntüleyin." },
      { step: "4", title: "Kopyalayın veya .TXT Olarak İndirin", description: "Panoya kopyalayın veya cihazınıza .txt belgesi olarak kaydedin." }
    ],
    timecodesTitle: "Dönüştürme Sırasında Zaman Kodlarına Ne Olur?",
    timecodesText: [
      "Standart dönüştürmede zaman kodları akıcı bir okuma deneyimi için kaldırılır.",
      "Ancak video kurgusu veya yasal kayıtlar için zaman kodlarına ihtiyacınız varsa bunları koruyabilirsiniz."
    ],
    withTimecodeTitle: "SRT Zaman Damgalarıyla Birlikte TXT'ye Dönüştürülebilir mi?",
    withTimecodeText: [
      "Evet! Dönüştürücümüz zaman damgalı ve zaman damgasız metin çıkarma desteği sunar.",
      "Zaman kodlarını korumak için ayarlar panelindeki 'Zaman Damgalarını Kaldır' seçeneğinin işaretini kaldırmanız yeterlidir."
    ],
    withTimecodeComparison: [
      { mode: "Temiz Metin (Varsayılan)", outputFormat: "Zaman kodsuz düz konuşma metni", bestFor: "Okuma, blog yazıları, özetler, yapay zeka" },
      { mode: "Zaman Damgalı", outputFormat: "Her bloğun zaman kodu korunur", bestFor: "Kurgu referansı, yasal transkriptler, doğrulama" }
    ],
    exampleTitle: "SRT - TXT Dönüşüm Örneği",
    exampleIntro: "Bir SRT dosyasının nasıl düz metne dönüştüğünü görün:",
    exampleSrtInput: `1
00:00:01,000 --> 00:00:04,200
Video eğitimimize hoş geldiniz!

2
00:00:04,300 --> 00:00:08,100
Bugün altyazı dosyalarından temiz metin
çıkarmayı öğreneceğiz.

3
00:00:08,200 --> 00:00:11,500
Bu işlem bloglar, transkriptler ve ders
notları için oldukça kullanışlıdır.`,
    exampleTxtOutputClean: `Video eğitimimize hoş geldiniz!
Bugün altyazı dosyalarından temiz metin çıkarmayı öğreneceğiz.
Bu işlem bloglar, transkriptler ve ders notları için oldukça kullanışlıdır.`,
    exampleTxtOutputWithTime: `00:00:01,000 --> 00:00:04,200
Video eğitimimize hoş geldiniz!
00:00:04,300 --> 00:00:08,100
Bugün altyazı dosyalarından temiz metin çıkarmayı öğreneceğiz.
00:00:08,200 --> 00:00:11,500
Bu işlem bloglar, transkriptler ve ders notları için oldukça kullanışlıdır.`,
    exampleExplanation: "Tüm teknik kodlar kaldırılarak tertemiz bir okuma metni oluşturulur.",
    comparisonTitle: "SRT ve TXT Arasındaki Farklar",
    comparisonSubtitle: "Altyazı ve metin dosyalarının karşılaştırması:",
    comparisonTable: [
      { feature: "Temel İşlev", srt: "Video için zaman kodlu altyazı parçası", txt: "Düz metin saklama ve okuma" },
      { feature: "Zaman Kodları", srt: "Zorunlu (hh:mm:ss,ms)", txt: "Yok (yalnızca metin)" },
      { feature: "Numaralandırma", srt: "Sıra numarası zorunlu", txt: "Yok" },
      { feature: "Okunabilirlik", srt: "Düşük (kodlar araya girer)", txt: "Yüksek (akıcı ve temiz)" },
      { feature: "Video Desteği", srt: "Tüm oynatıcılarda uyumlu", txt: "Altyazı olarak yüklenemez" }
    ],
    useCasesTitle: "SRT - TXT Dönüştürücünün Kullanım Alanları",
    useCasesSubtitle: "Kimler için uygundur?",
    useCases: [
      { role: "İçerik Üreticileri ve Podcaster'lar", description: "Altyazıları özetlere ve blog yazılarına dönüştürün." },
      { role: "Video Kurgucuları", description: "Konuşma metinlerini video render almadan müşterilerin onayına sunun." },
      { role: "Öğrenciler ve Akademisyenler", description: "Ders videolarını aranabilir çalışma notlarına dönüştürün." },
      { role: "Çevirmenler", description: "TXT - SRT Dönüştürücümüzle yeni altyazı üretmeden önce metni rahatça çevirin." }
    ],
    transcriptsTitle: "Altyazı Çıkarma ve Ses Deşifresi Farkı",
    transcriptsText: [
      "Bu araç var olan bir .srt dosyasındaki metinleri ayıklar. Ham ses veya video dosyalarını deşifre etmez.",
      "Elinizde zaten bir SRT dosyası varsa, bu yöntem en hızlı ve ücretsiz çözümdür."
    ],
    cleanerTextTitle: "Daha Temiz Metin Elde Etme İpuçları",
    cleanerSubtitle: "Altyazı metinlerini düzenleme tavsiyeleri:",
    cleanerTips: [
      { issue: "Tekrarlanan Satırlar", explanation: "Otomatik altyazılar bazen önceki satırı tekrar eder.", recommendation: "'Paragrafları Birleştir' seçeneğini kullanarak tekrarları kolayca temizleyin." },
      { issue: "HTML Etiketleri (<b>, <i>)", explanation: "İtalik veya renk biçimlendirmeleri.", recommendation: "Aracımız tüm HTML etiketlerini otomatik olarak temizler." },
      { issue: "Ses Efekti Belirteçleri ([Müzik], [Alkış])", explanation: "İşitme engelliler için eklenen ses tanımları.", recommendation: "Metin düzenleyicinizde 'Bul ve Değiştir' ile saniyeler içinde silebilirsiniz." }
    ],
    encodingTitle: "UTF-8 Karakter Kodlaması",
    encodingText: [
      "Aracımız UTF-8 standardını kullanır; bu sayede Türkçe karakterler (ç, ğ, ı, ö, ş, ü) bozulmadan kusursuz şekilde aktarılır."
    ],
    osGuideTitle: "Windows ve Mac Uyumluluğu",
    osGuideText: [
      "İşlemler tamamen tarayıcınızda gerçekleştiği için Windows, Mac, Linux, Android ve iOS cihazlarda farksız çalışır."
    ],
    conclusionTitle: "Altyazılarınızı Hemen Düz Metne Dönüştürün",
    conclusionText: [
      "SRT dosyalarınızı saniyeler içinde okunabilir metinlere çevirin.",
      "Diğer popüler altyazı araçlarımızı deneyin:",
      "• TXT - SRT Dönüştürücü: Düz metinlerden zaman kodlu altyazılar oluşturun.",
      "• SRT - VTT Dönüştürücü: Altyazıları WebVTT formatına çevirin.",
      "• VTT - SRT Dönüştürücü: WebVTT dosyalarını SubRip formatına dönüştürün."
    ]
  },
  it: {
    introTitle: "Guida Completa per Convertire Sottotitoli SRT in Testo Semplice (TXT)",
    introSubtitle: "Scopri come rimuovere i timestamp, pulire i blocchi di sottotitoli, estrarre trascrizioni video e convertire file SubRip (.srt) in testo leggibile.",
    introText: [
      "I file SubRip (.srt) sono indispensabili per i sottotitoli video, ma la loro struttura rigida con timestamp e numeri sequenziali li rende scomodi da leggere come testo normale. Quando vuoi leggere il dialogo di un video, creare un articolo per il blog, studiare appunti di lezioni o usare il testo con strumenti di IA, convertire un file SRT in TXT è la soluzione ideale.",
      "Il nostro convertitore online gratuito da SRT a TXT estrae il parlato eliminando i codici orari e la formattazione direttamente nel tuo browser, garantendo il 100% di privacy senza inviare file a server remoti."
    ],
    whatIsTitle: "Cos'è un Convertitore da SRT a TXT?",
    whatIsText: [
      "Un convertitore da SRT a TXT è uno strumento che trasforma file di sottotitoli SubRip (.srt) in documenti di testo (.txt) chiari e facili da leggere.",
      "Lo strumento separa automaticamente il testo parlato dai metadati tecnici:"
    ],
    whatIsElements: [
      { name: "Numeri Sequenziali (1, 2, 3...)", description: "Indice numerico all'inizio di ogni blocco.", fate: "Rimossi automaticamente per una lettura pulita." },
      { name: "Intervalli Temporali (00:00:01,000 --> 00:00:04,500)", description: "Timestamp di inizio e fine con millisecondi.", fate: "Rimossi per impostazione predefinita, o conservati se desiderato." },
      { name: "Testo del Sottotitolo", description: "Le parole effettive pronunciate a schermo.", fate: "Preservato con rimozione automatica dei tag HTML (come <b> o <i>)." },
      { name: "Righe Vuote", description: "Spaziatori tra i blocchi di sottotitolo.", fate: "Unificate in ritorni a capo standard o paragrafi continui." }
    ],
    whyConvertTitle: "Perché Convertire SRT in TXT? Vantaggi Pratici",
    whyConvertSubtitle: "I principali benefici dell'estrazione di testo dai sottotitoli:",
    whyConvertReasons: [
      { title: "Lettura Scorrevole come Trascrizione", description: "Leggi il dialogo del video senza interruzioni di numeri o codici temporali." },
      { title: "Creazione di Articoli e Post per Blog", description: "Trasforma video di YouTube o webinar in articoli scritti, newsletter e riassunti." },
      { title: "Utilizzo con Strumenti di IA (ChatGPT, Claude)", description: "Il testo pulito senza timestamp fa risparmiare token e migliora la comprensione dell'IA." },
      { title: "Revisione e Correzione dei Testi", description: "Correggi l'ortografia dei copioni in modo rapido prima del montaggio finale." },
      { title: "Appunti di Studio e Riunioni", description: "Trasforma registrazioni di lezioni o riunioni Zoom in documenti facili da consultare." },
      { title: "Supporto alla Traduzione", description: "Traduci interi paragrafi con un contesto narrativo più chiaro." }
    ],
    howToTitle: "Come Convertire SRT in TXT Online in 4 Passaggi",
    howToSubtitle: "Semplice guida per estrarre il testo dai tuoi sottotitoli:",
    howToSteps: [
      { step: "1", title: "Carica il File SRT o Incolla il Testo", description: "Trascina il tuo file .srt o incolla il testo nell'area di input." },
      { step: "2", title: "Scegli le Opzioni di Formattazione", description: "Imposta se desideri rimuovere i timestamp o unire il testo in paragrafi." },
      { step: "3", title: "Controlla l'Anteprima in Tempo Reale", description: "Verifica il testo pulito nel pannello di destra." },
      { step: "4", title: "Copia o Scarica il File .TXT", description: "Copia negli appunti o scarica il file .txt direttamente sul tuo dispositivo." }
    ],
    timecodesTitle: "Cosa Succede ai Timestamp Durante la Conversione?",
    timecodesText: [
      "Nella conversione standard, i timestamp vengono rimossi per creare un testo pulito e scorrevole.",
      "Tuttavia, se hai bisogno dei riferimenti temporali per il montaggio video o fini legali, puoi mantenerli."
    ],
    withTimecodeTitle: "È Possibile Convertire SRT in TXT Mantenendo i Timestamp?",
    withTimecodeText: [
      "Sì! Il nostro convertitore supporta sia l'estrazione pulita sia l'estrazione con timestamp.",
      "Basta deselezionare l'opzione 'Rimuovi Timestamp' nel pannello impostazioni per mantenere i codici orari."
    ],
    withTimecodeComparison: [
      { mode: "Testo Pulito (Predefinito)", outputFormat: "Solo dialogo senza timestamp né numeri", bestFor: "Lettura, articoli per blog, riassunti, IA" },
      { mode: "Con Timestamp", outputFormat: "Timestamp conservati su ogni riga", bestFor: "Riferimento per montaggio video, trascrizioni legali" }
    ],
    exampleTitle: "Esempio di Conversione da SRT a TXT",
    exampleIntro: "Ecco come un file SRT si trasforma in testo semplice:",
    exampleSrtInput: `1
00:00:01,000 --> 00:00:04,200
Benvenuti al nostro video tutorial!

2
00:00:04,300 --> 00:00:08,100
Oggi impareremo come estrarre testo pulito
dai file di sottotitoli.

3
00:00:08,200 --> 00:00:11,500
Questo è utilissimo per blog, trascrizioni
e appunti di studio.`,
    exampleTxtOutputClean: `Benvenuti al nostro video tutorial!
Oggi impareremo come estrarre testo pulito dai file di sottotitoli.
Questo è utilissimo per blog, trascrizioni e appunti di studio.`,
    exampleTxtOutputWithTime: `00:00:01,000 --> 00:00:04,200
Benvenuti al nostro video tutorial!
00:00:04,300 --> 00:00:08,100
Oggi impareremo come estrarre testo pulito dai file di sottotitoli.
00:00:08,200 --> 00:00:11,500
Questo è utilissimo per blog, trascrizioni e appunti di studio.`,
    exampleExplanation: "Numeri e codici temporali vengono rimossi per ottenere un testo chiaro e pronto per la lettura.",
    comparisonTitle: "SRT vs TXT: Quali Sono le Differenze?",
    comparisonSubtitle: "Confronto tra file di sottotitoli e documenti di testo:",
    comparisonTable: [
      { feature: "Funzione Principale", srt: "Traccia sottotitoli sincronizzata per video", txt: "Archiviazione e lettura di testo semplice" },
      { feature: "Timestamp", srt: "Obbligatori con millisecondi (hh:mm:ss,ms)", txt: "Nessuno (solo testo)" },
      { feature: "Numerazione", srt: "Indice sequenziale obbligatorio", txt: "Nessuna" },
      { feature: "Leggibilità", srt: "Bassa (interrotta dai timestamp)", txt: "Alta (scorrevole e pulita)" },
      { feature: "Uso Video", srt: "Supportato da tutti i player", txt: "Non utilizzabile direttamente come sottotitolo" }
    ],
    useCasesTitle: "Casi d'Uso del Convertitore da SRT a TXT",
    useCasesSubtitle: "Per chi è utile questo strumento?",
    useCases: [
      { role: "Creator e Podcaster", description: "Trasforma trascrizioni video in riassunti, post e newsletter." },
      { role: "Montatori Video", description: "Invia i testi dei dialoghi ai clienti per approvazione senza esportare il video." },
      { role: "Studenti e Ricercatori", description: "Converti lezioni registrate in appunti facili da consultare." },
      { role: "Traduttori", description: "Traduci il testo prima di creare nuovi sottotitoli con il nostro Convertitore da TXT a SRT." }
    ],
    transcriptsTitle: "Estrazione da Sottotitoli vs. Trascrizione Audio",
    transcriptsText: [
      "Il nostro strumento estrae il testo già presente in un file .srt. Non trascrive file audio o video grezzi.",
      "Se hai già un file SRT, questo è il modo più rapido e gratuito per estrarne il testo pulito."
    ],
    cleanerTextTitle: "Consigli per Ottenere un Testo Più Pulito",
    cleanerSubtitle: "Come gestire le particolarità dei sottotitoli:",
    cleanerTips: [
      { issue: "Frasi Ripetute", explanation: "Alcuni sottotitoli automatici ripetono le righe precedenti.", recommendation: "Attiva 'Unisci in Paragrafi' per individuare e correggere i duplicati facilmente." },
      { issue: "Tag HTML (<b>, <i>)", explanation: "Formattazioni di corsivo o colore.", recommendation: "Il nostro strumento rimuove automaticamente tutti i tag HTML." },
      { issue: "Descrizioni Sonore ([Musica], [Applausi])", explanation: "Indicazioni audio per non udenti.", recommendation: "Rimuovile rapidamente con la funzione Trova e Sostituisci del tuo editor di testo." }
    ],
    encodingTitle: "Codifica UTF-8 e Caratteri Accentuati",
    encodingText: [
      "Il nostro convertitore utilizza lo standard UTF-8, garantendo che lettere accentate italiane (à, è, é, ì, ò, ù) e caratteri speciali vengano visualizzati correttamente su ogni dispositivo."
    ],
    osGuideTitle: "Compatibilità Windows e Mac",
    osGuideText: [
      "Funzionando interamente nel browser tramite JavaScript, lo strumento è identico su Windows, Mac, Linux, Android e iOS senza bisogno di installare nulla."
    ],
    conclusionTitle: "Converti i Tuoi Sottotitoli in Testo Subito",
    conclusionText: [
      "Trasforma i tuoi file SRT in testo semplice in pochi istanti e con la massima privacy.",
      "Scopri gli altri nostri strumenti per sottotitoli:",
      "• Convertitore da TXT a SRT: Crea sottotitoli sincronizzati partendo da testo semplice.",
      "• Convertitore da SRT a VTT: Trasforma i sottotitoli nel formato WebVTT.",
      "• Convertitore da VTT a SRT: Converti file WebVTT nel formato universale SubRip."
    ]
  }
};

export function getSrtToTextGuideContent(locale: Locale): SrtToTextGuideContent {
  return SRT_TO_TEXT_GUIDE[locale] || SRT_TO_TEXT_GUIDE.en;
}
