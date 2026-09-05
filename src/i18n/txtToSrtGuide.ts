import type { Locale } from './config';

export interface GuideSection {
  title?: string;
  subtitle?: string;
  content: string;
}

export interface TxtToSrtGuideContent {
  introTitle: string;
  introSubtitle: string;
  introText: string[];
  
  whatIsTitle: string;
  whatIsText: string[];
  whatIsComparison: {
    feature: string;
    txt: string;
    srt: string;
  }[];
  
  howToTitle: string;
  howToSubtitle: string;
  howToSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  
  howItWorksTitle: string;
  howItWorksText: string[];
  howItWorksBullets: {
    title: string;
    description: string;
  }[];
  
  exampleTitle: string;
  exampleIntro: string;
  exampleTxtInput: string;
  exampleSrtOutput: string;
  exampleExplanation: string;
  
  srtFormatTitle: string;
  srtFormatIntro: string;
  srtFormatElements: {
    num: string;
    name: string;
    detail: string;
  }[];
  srtTimestampFormula: string;
  srtTimestampExplanation: string;
  
  useCasesTitle: string;
  useCasesSubtitle: string;
  useCases: {
    title: string;
    description: string;
  }[];
  
  noSoftwareTitle: string;
  noSoftwareText: string[];
  noSoftwareBenefits: {
    title: string;
    description: string;
  }[];
  
  macGuideTitle: string;
  macGuideText: string[];
  macSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  
  troubleshootingTitle: string;
  troubleshootingSubtitle: string;
  problems: {
    issue: string;
    cause: string;
    solution: string;
  }[];
  
  tipsTitle: string;
  tipsSubtitle: string;
  tips: {
    title: string;
    rule: string;
    why: string;
  }[];
  
  comparisonTitle: string;
  comparisonSubtitle: string;
  comparisonTable: {
    factor: string;
    converter: string;
    manual: string;
  }[];
  comparisonVerdict: string;
  
  conclusionTitle: string;
  conclusionText: string[];
}

export const TXT_TO_SRT_GUIDE: Record<Locale, TxtToSrtGuideContent> = {
  en: {
    introTitle: "Complete Guide to Converting TXT Transcripts into SRT Subtitles",
    introSubtitle: "Everything you need to know about subtitle formatting, reading-speed calculation, timestamp structuring, and video caption workflows.",
    introText: [
      "Turning an unformatted transcript, video script, or speech-to-text recording into a synchronized subtitle file is one of the most essential tasks in modern video editing and content creation. Whether you are publishing videos on YouTube, editing reels for TikTok and Instagram, producing e-learning modules, or preparing captions for a broadcast film, video players and editing suites require structured subtitle files rather than raw text documents.",
      "A plain text (.txt) file simply stores unbroken words, sentences, or dialogue. In contrast, a SubRip (.srt) subtitle file organizes that text into sequentially numbered caption blocks, paired with precise start and end timestamps (formatted in hours, minutes, seconds, and milliseconds). Our free online TXT to SRT converter bridges this gap instantly—converting plain text transcripts into fully compliant SubRip subtitle files right inside your browser without uploading your sensitive data to remote servers."
    ],
    whatIsTitle: "What Is a TXT to SRT Converter?",
    whatIsText: [
      "A TXT to SRT converter is a specialized formatting and timing utility designed to convert raw, unstructured text files into standardized SubRip (.srt) caption files. When you write a script in Notepad, copy an automated transcript from a voice recorder, or export notes from a meeting, the resulting text has no timecodes, cue numbers, or line length limits.",
      "Video editing software (such as Adobe Premiere Pro, DaVinci Resolve, and Final Cut Pro) and video platforms (such as YouTube, Vimeo, and Facebook) cannot display raw .txt files as synchronized closed captions. They require a structured timecode format that tells the video player exactly when each line should appear on screen and when it should vanish. A TXT to SRT converter takes your sentences, segments them into comfortable reading chunks, assigns estimated reading-time durations, and formats the output with strict SubRip syntax."
    ],
    whatIsComparison: [
      {
        feature: "File Purpose",
        txt: "Unstructured plain text storage (notes, scripts, articles)",
        srt: "Synchronized timed captions for video players & NLEs"
      },
      {
        feature: "Timecode Data",
        txt: "None (text only)",
        srt: "Millisecond-accurate start and end timestamps (00:00:00,000)"
      },
      {
        feature: "Structural Syntax",
        txt: "Freeform paragraphs or single lines",
        srt: "Strict 4-part block: Sequence index, timecode, text, blank line"
      },
      {
        feature: "Video Compatibility",
        txt: "Cannot be loaded directly as video subtitle track",
        srt: "Universally supported by YouTube, VLC, Premiere, DaVinci, FCP"
      },
      {
        feature: "Reading Pacing",
        txt: "No pacing or screen-time boundaries",
        srt: "Optimized characters-per-second (CPS) screen duration"
      }
    ],
    howToTitle: "How to Convert TXT to SRT Online in 3 Simple Steps",
    howToSubtitle: "Follow this straightforward workflow to change any TXT transcript into a ready-to-use SubRip subtitle file in seconds.",
    howToSteps: [
      {
        step: "1",
        title: "Import Your Text Transcript",
        description: "Paste your text directly into the input box above, or drag and drop a .txt document from your computer or mobile device. You can use transcripts from Otter.ai, Whisper, Zoom, voice memos, or handwritten dialogue scripts."
      },
      {
        step: "2",
        title: "Customize Pacing & Segmentation Settings",
        description: "Choose your segmentation strategy (Sentence & Punctuation Splitting is recommended for natural speech), set your target reading speed (15–20 Characters Per Second), configure maximum characters per line (37–42 characters), and set your starting timestamp."
      },
      {
        step: "3",
        title: "Preview and Download Your .SRT File",
        description: "Review the generated subtitle cues in the live preview window. Check the cue numbering, timecode intervals, and line wraps. When satisfied, click 'Download .SRT' to save your file or 'Copy to Clipboard' for immediate pasting into your video editor."
      }
    ],
    howItWorksTitle: "How Does TXT to SRT Conversion Work Behind the Scenes?",
    howItWorksText: [
      "Converting plain text to subtitles is far more sophisticated than simply appending a timecode. A high-quality converter must parse human language patterns, respect grammatical boundaries, calculate cognitive reading speed, and maintain strict SubRip syntax specifications.",
      "Here is how our client-side conversion engine processes your plain text into professional subtitles:"
    ],
    howItWorksBullets: [
      {
        title: "1. Intelligent Text Segmentation & Sentence Boundary Detection",
        description: "The converter scans the input text for natural syntactic breakpoints such as periods, question marks, exclamation points, commas, semicolons, and paragraph returns. It breaks large blocks of prose into bite-sized subtitle lines without cutting words in half or leaving awkward orphaned punctuation."
      },
      {
        title: "2. Characters-Per-Second (CPS) Duration Calculation",
        description: "Because raw TXT files lack audio timing, the converter calculates duration dynamically based on reading psychology. Adult viewers comfortably read between 15 and 20 characters per second. The engine counts characters in each cue and allocates appropriate screen display time (e.g., a 45-character line receives approximately 2.5 to 3.0 seconds of screen time)."
      },
      {
        title: "3. Inter-Cue Gap Management",
        description: "To ensure media players register subtitle transitions smoothly, the converter inserts a mandatory 100-millisecond gap between consecutive subtitle cues. This prevents visual flickering and ensures caption rendering engines refresh cleanly."
      },
      {
        title: "4. Standard SubRip Timecode Formatting",
        description: "The engine converts accumulated millisecond offsets into standard SubRip timestamp strings (hh:mm:ss,ms) using comma-delimited milliseconds, and appends sequential integer indices (1, 2, 3...) separated by blank line delimiters."
      }
    ],
    exampleTitle: "TXT to SRT Conversion Example: Before and After",
    exampleIntro: "To see how plain text changes into a formatted SubRip caption file, examine this real-world before-and-after conversion example:",
    exampleTxtInput: `Welcome to our comprehensive video production tutorial. Today, we are going to explore how subtitle synchronization improves audience retention. Subtitles make your content accessible to global viewers and silent mobile scrollers. Make sure to optimize your captions for clear reading speed.`,
    exampleSrtOutput: `1
00:00:01,000 --> 00:00:04,100
Welcome to our comprehensive
video production tutorial.

2
00:00:04,200 --> 00:00:08,300
Today, we are going to explore how
subtitle synchronization improves audience retention.

3
00:00:08,400 --> 00:00:12,650
Subtitles make your content accessible to
global viewers and silent mobile scrollers.

4
00:00:12,750 --> 00:00:16,200
Make sure to optimize your captions
for clear reading speed.`,
    exampleExplanation: "Notice how the single unstructured paragraph was cleanly broken into four sequential subtitle blocks. Each block has a sequential number, an estimated start and end timecode with a 100ms gap, two balanced lines under 42 characters, and a blank line separator.",
    srtFormatTitle: "Understanding the SubRip (.SRT) File Format",
    srtFormatIntro: "SubRip (.srt) is the most widely supported subtitle format in the world. Its simplicity and human-readable structure make it the gold standard for video production. Every valid SRT cue block consists of four distinct components:",
    srtFormatElements: [
      {
        num: "1",
        name: "Sequence Index (Cue Number)",
        detail: "A positive integer starting at 1 that increases sequentially (1, 2, 3, 4...) for every subtitle cue in the file. Gaps or missing numbers can cause playback glitches in older video players."
      },
      {
        num: "2",
        name: "Timecode Range (Start --> End)",
        detail: "Two timestamps separated by a space, two dashes, a greater-than symbol, and a space (' --> '). Each timestamp follows the strict format: hh:mm:ss,ms (two digits for hours, minutes, and seconds, followed by a comma and three digits for milliseconds)."
      },
      {
        num: "3",
        name: "Subtitle Text",
        detail: "The actual caption text displayed on screen. Typically formatted as 1 to 2 lines, containing 37 to 42 characters per line for optimal readability across desktop and mobile screens."
      },
      {
        num: "4",
        name: "Blank Line Delimiter",
        detail: "An empty line (double newline) after the subtitle text. This blank line is critical—it tells video parsers that the current subtitle block has ended and the next one is beginning."
      }
    ],
    srtTimestampFormula: "00:01:23,456 --> 00:01:27,890",
    srtTimestampExplanation: "Important: SubRip uses a comma (',') as the millisecond separator (00:01:23,456). In contrast, WebVTT (.vtt) files use a period ('.'). If you are working with HTML5 web players, you can convert your SRT files to WebVTT format using our SRT to VTT Converter.",
    useCasesTitle: "When Should You Convert TXT to SRT? Practical Use Cases",
    useCasesSubtitle: "Converting plain text transcripts to SRT subtitles is essential across many creative and professional workflows:",
    useCases: [
      {
        title: "YouTube Creators & Social Media Influencers",
        description: "Over 75% of social media videos on Facebook, Instagram, and LinkedIn are watched without sound. Converting your script or transcript to an SRT file allows you to upload closed captions directly, dramatically increasing viewer retention, watch time, and SEO discoverability."
      },
      {
        title: "Online Educators & E-Learning Platforms",
        description: "Course creators on Udemy, Coursera, Teachable, and Skillshare need subtitles to accommodate non-native English speakers and comply with global digital accessibility standards (such as ADA and WCAG 2.1 guidelines)."
      },
      {
        title: "Podcasters & Audio Interviewers",
        description: "When creating audiograms or video podcasts for YouTube and Spotify, converting speech transcripts into SRT files enables synchronized on-screen lyric-style captions that grab viewers' attention."
      },
      {
        title: "Professional Video Editors & Filmmakers",
        description: "Editors working in Adobe Premiere Pro, DaVinci Resolve, or Final Cut Pro often receive voiceover scripts in Word or Notepad. Converting them to SRT provides a pre-timed subtitle track that can be dragged directly onto the editing timeline."
      },
      {
        title: "Translators & Localization Teams",
        description: "Translating videos into multiple languages begins with a plain text translation. Converting that translated text into an SRT file creates localized subtitle tracks ready for international distribution."
      }
    ],
    noSoftwareTitle: "Convert TXT to SRT Online Free Without Installing Software",
    noSoftwareText: [
      "Traditional subtitle tools often require downloading heavy desktop software, managing command-line Python scripts, or purchasing expensive software subscriptions. In contrast, our online TXT to SRT converter operates entirely inside your modern web browser.",
      "Here is why using a browser-based converter offers significant advantages:"
    ],
    noSoftwareBenefits: [
      {
        title: "100% Client-Side Privacy & Security",
        description: "Your text, scripts, and video transcripts never leave your computer. All parsing, line breaking, and timestamp calculations are executed locally via JavaScript in your browser session. We do not store, log, or inspect your content."
      },
      {
        title: "Zero Installation & Zero Dependencies",
        description: "No need to install Python, Node.js, Subtitle Edit, or Aegisub. Works instantly on any device with a web browser."
      },
      {
        title: "Cross-Platform Universal Support",
        description: "Compatible with macOS, Windows, Linux, ChromeOS, iPadOS, iOS, and Android. Open the page and convert files immediately."
      },
      {
        title: "Completely Free with No File Limits",
        description: "Convert short 10-second TikTok scripts or 2-hour conference transcripts without watermarks, paywalls, or artificial size limits."
      }
    ],
    macGuideTitle: "How to Convert TXT to SRT on Mac (macOS Guide)",
    macGuideText: [
      "Mac users frequently encounter difficulties when attempting to create SRT files using the default macOS TextEdit application. By default, TextEdit saves files in Rich Text Format (.rtf) or inserts smart quotes and hidden typography metadata that invalidate SubRip syntax.",
      "Our web-based converter provides the easiest, safest method to convert TXT to SRT on macOS without configuring TextEdit preferences or installing third-party apps:"
    ],
    macSteps: [
      {
        step: "1",
        title: "Open the Converter in Safari or Chrome",
        description: "Navigate to SRTConverters.com on your Mac using Safari, Google Chrome, or Brave."
      },
      {
        step: "2",
        title: "Paste Your Script or Drop Your .txt File",
        description: "Copy text from Notes, Pages, Google Docs, or Word and paste it directly into the input area."
      },
      {
        step: "3",
        title: "Download Clean .SRT for Final Cut Pro or Premiere",
        description: "Click 'Download .SRT'. The generated file is saved directly to your Downloads folder, encoded in clean UTF-8 with standard LF line breaks, ready to be imported directly into Final Cut Pro, Adobe Premiere Pro, or DaVinci Resolve."
      }
    ],
    troubleshootingTitle: "Common TXT to SRT Conversion Problems & How to Fix Them",
    troubleshootingSubtitle: "Avoid these common formatting and synchronization pitfalls when generating SRT subtitle files from plain text:",
    problems: [
      {
        issue: "Timing Drift or Desynchronization with Audio",
        cause: "Plain text files do not contain audio waveforms or speech timestamps. The converter calculates timestamps based on average reading speeds (CPS), not the speaker's actual talking speed.",
        solution: "Treat the converted SRT as a structured timing foundation. Import the .srt file into your video editor (Premiere, DaVinci, or CapCut) and slide individual cues slightly along the timeline to match the exact audio speech peaks."
      },
      {
        issue: "Subtitles Cut Off or Overcrowded on Mobile Screens",
        cause: "Subtitle lines exceeding 42 characters or blocks containing more than 2 lines of text.",
        solution: "Set the 'Max Characters per Line' setting to 37–40 characters in our converter, and ensure the segmentation mode is set to 'Sentence & Punctuation Splitting'."
      },
      {
        issue: "Garbled Accents or Special Characters (Broken UTF-8)",
        cause: "Files saved in legacy ANSI or Windows-1252 character encodings can cause accented letters (á, é, ö, ñ, ç) or emojis to render as '' or broken symbols.",
        solution: "Our converter automatically exports valid UTF-8 encoded files, ensuring perfect character rendering across all languages and international alphabets."
      },
      {
        issue: "Invalid Timestamp Syntax or Dot Millisecond Delimiters",
        cause: "Using dots instead of commas for milliseconds (e.g., 00:00:01.500 instead of 00:00:01,500) will cause VLC and Premiere to reject the file.",
        solution: "Our converter automatically guarantees strict SubRip comma formatting. If you specifically need WebVTT dot formatting for HTML5 video, use our SRT to VTT Converter."
      },
      {
        issue: "File Saved as 'subtitles.srt.txt'",
        cause: "Operating systems (especially Windows and macOS) sometimes append a hidden .txt extension to downloaded files.",
        solution: "Make sure the file extension ends strictly in '.srt'. On Windows, enable 'File name extensions' in File Explorer; on Mac, check 'Get Info' (Cmd+I) and remove any trailing .txt extension."
      }
    ],
    tipsTitle: "Pro Tips for Creating High-Quality SRT Subtitles",
    tipsSubtitle: "Follow these industry-standard subtitling rules used by professional broadcasters and streaming networks:",
    tips: [
      {
        title: "The 37–42 Character-per-Line Guideline",
        rule: "Keep each subtitle line between 37 and 42 characters maximum.",
        why: "Longer lines force viewers' eyes to scan back and forth across the screen, pulling their focus away from the video visuals."
      },
      {
        title: "Target 15 to 20 Characters Per Second (CPS)",
        rule: "Aim for a reading speed of 15 to 20 CPS for general audiences (12–14 CPS for children's content).",
        why: "Subtitles that appear on screen for less than 1.5 seconds are difficult to read, while cues lingering longer than 6 seconds feel stale."
      },
      {
        title: "Limit Cues to Maximum 2 Lines",
        rule: "Never exceed 2 lines of text per subtitle block.",
        why: "Three or more lines obstruct critical video content, cover actors' faces, and clutter mobile displays."
      },
      {
        title: "Maintain a 100ms Gap Between Cues",
        rule: "Always include a 100–150 millisecond interval between consecutive subtitle blocks.",
        why: "Video players need a brief moment without captions to trigger the visual re-render of the next subtitle cue."
      },
      {
        title: "Break Lines at Natural Syntactic Pauses",
        rule: "Divide multi-line subtitles at natural clause and phrase boundaries (after commas, prepositions, or conjunctions).",
        why: "Breaking sentences mid-compound word or between an adjective and its noun disrupts viewer reading comprehension."
      }
    ],
    comparisonTitle: "TXT to SRT Converter vs. Manually Writing an SRT File",
    comparisonSubtitle: "Why automated conversion is significantly faster than typing timecodes by hand:",
    comparisonTable: [
      {
        factor: "Time Required (10-min video)",
        converter: "Under 5 seconds (instant automated calculation)",
        manual: "45 to 60 minutes of manual typing"
      },
      {
        factor: "Syntax Error Risk",
        converter: "Zero (strictly validated SubRip syntax & sequential numbering)",
        manual: "High (easy to miss commas, colons, or blank lines)"
      },
      {
        factor: "CPS Reading Speed Calculation",
        converter: "Automated mathematical duration based on character count",
        manual: "Requires manual guesswork and stopwatch estimation"
      },
      {
        factor: "Line Length & Wrapping",
        converter: "Automatic line break formatting at character limits",
        manual: "Must manually count characters per line"
      },
      {
        factor: "Editing Suite Readiness",
        converter: "Immediately importable into Premiere, DaVinci, FCP",
        manual: "Prone to syntax rejections during NLE import"
      }
    ],
    comparisonVerdict: "Automating the initial text segmentation, cue numbering, and timestamp synthesis with our TXT to SRT converter saves hours of repetitive manual formatting. Once generated, you can import the .srt file into your video editor and make fine adjustments in minutes.",
    conclusionTitle: "Convert Your Text to Subtitles in Seconds",
    conclusionText: [
      "Adding accurate, well-formatted subtitles to your video content increases viewer engagement, improves accessibility for deaf and hard-of-hearing audiences, and boosts social media watch time. By using our free online TXT to SRT converter, you can transform unformatted transcripts, notes, and scripts into professional SubRip subtitle files in seconds.",
      "Explore our related subtitle utilities to streamline your video caption workflow:",
      "• SRT to Text Converter: Strip timecodes and extract clean plain text transcripts from any subtitle file.",
      "• SRT to VTT Converter: Convert SubRip (.srt) files into WebVTT (.vtt) format for HTML5 web video players.",
      "• VTT to SRT Converter: Convert WebVTT captions into universal SubRip files for video editors."
    ]
  },
  es: {
    introTitle: "Guía Completa para Convertir Transcripciones TXT a Subtítulos SRT",
    introSubtitle: "Todo lo que necesitas saber sobre formato de subtítulos, velocidad de lectura, estructura de marcas de tiempo y edición de video.",
    introText: [
      "Convertir una transcripción de texto sin formato o un guion en un archivo de subtítulos sincronizado es una tarea fundamental en la creación de contenido y edición de video actual. Ya sea para videos de YouTube, TikTok, Instagram Reels, cursos online o producciones cinematográficas, los reproductores y editores de video requieren archivos de subtítulos estructurados en lugar de texto plano.",
      "Un archivo TXT almacena texto continuo sin tiempos. En cambio, un archivo SubRip (.srt) organiza el contenido en bloques numerados secuencialmente con marcas de tiempo exactas (horas, minutos, segundos y milisegundos). Nuestro convertidor gratuito de TXT a SRT en línea realiza esta transformación al instante directamente en tu navegador, garantizando total privacidad sin enviar datos a servidores externos."
    ],
    whatIsTitle: "¿Qué es un Convertidor de TXT a SRT?",
    whatIsText: [
      "Un convertidor de TXT a SRT es una herramienta que transforma texto sin formato en archivos de subtítulos SubRip (.srt) estandarizados. Cuando escribes un guion en el Bloc de notas o descargas una transcripción de audio, el texto carece de códigos de tiempo, números de bloque o límites de caracteres por línea.",
      "Los editores de video como Premiere Pro, DaVinci Resolve y Final Cut Pro, así como plataformas como YouTube y Facebook, no pueden cargar archivos .txt directamente como subtítulos sincronizados. Necesitan la estructura de tiempo de un archivo SRT para saber cuándo mostrar y ocultar cada frase. El convertidor divide el texto en fragmentos de lectura cómodos, calcula tiempos estimados según la velocidad de lectura y aplica la sintaxis SubRip."
    ],
    whatIsComparison: [
      {
        feature: "Propósito",
        txt: "Almacenamiento de texto plano (guiones, notas)",
        srt: "Subtítulos sincronizados con tiempo para video"
      },
      {
        feature: "Marcas de Tiempo",
        txt: "Ninguna (solo texto)",
        srt: "Tiempos exactos con milisegundos (00:00:00,000)"
      },
      {
        feature: "Estructura",
        txt: "Párrafos libres",
        srt: "Bloques de 4 partes: Número, tiempo, texto, línea en blanco"
      },
      {
        feature: "Compatibilidad",
        txt: "No se puede usar directamente como pista de subtítulos",
        srt: "Compatible con YouTube, VLC, Premiere, DaVinci, FCP"
      },
      {
        feature: "Ritmo de Lectura",
        txt: "Sin control de ritmo",
        srt: "Optimizado en caracteres por segundo (CPS)"
      }
    ],
    howToTitle: "Cómo Convertir TXT a SRT en Línea en 3 Pasos",
    howToSubtitle: "Sigue este sencillo proceso para convertir cualquier texto en un archivo SRT listo para usar en pocos segundos.",
    howToSteps: [
      {
        step: "1",
        title: "Importa tu Transcripción de Texto",
        description: "Pega tu texto en el cuadro superior o arrastra un archivo .txt desde tu dispositivo. Puedes usar transcripciones de Whisper, Otter.ai, Zoom o guiones propios."
      },
      {
        step: "2",
        title: "Configura la Velocidad y División",
        description: "Elige la división por frases y puntuación, ajusta la velocidad de lectura (15–20 CPS) y define el máximo de caracteres por línea (37–42 caracteres)."
      },
      {
        step: "3",
        title: "Previsualiza y Descarga tu Archivo .SRT",
        description: "Revisa los subtítulos en la vista previa en tiempo real. Haz clic en 'Descargar .SRT' o copia el resultado al portapapeles para pegarlo en tu editor."
      }
    ],
    howItWorksTitle: "¿Cómo Funciona la Conversión de TXT a SRT?",
    howItWorksText: [
      "Convertir texto a subtítulos requiere analizar la estructura del lenguaje, respetar las pausas gramaticales, calcular la velocidad de lectura humana y aplicar la sintaxis SubRip estricta.",
      "Así es como nuestro motor en el navegador procesa tu texto:"
    ],
    howItWorksBullets: [
      {
        title: "1. División Inteligente por Puntuación",
        description: "Detecta puntos, comas, signos de interrogación y saltos de línea para dividir oraciones largas sin cortar palabras de forma antinatural."
      },
      {
        title: "2. Cálculo de Tiempo CPS (Caracteres por Segundo)",
        description: "Como el texto no contiene audio, calcula la duración en pantalla según la velocidad de lectura humana (15 a 20 caracteres por segundo)."
      },
      {
        title: "3. Intervalo de 100ms entre Subtítulos",
        description: "Inserta una pausa de 100 milisegundos entre subtítulos consecutivos para que los reproductores de video refresquen visualmente cada línea."
      },
      {
        title: "4. Sintaxis SubRip Estándar",
        description: "Genera marcas de tiempo en formato hh:mm:ss,ms con coma para milisegundos y numeración secuencial con líneas en blanco separadoras."
      }
    ],
    exampleTitle: "Ejemplo de Conversión TXT a SRT: Antes y Después",
    exampleIntro: "Observa cómo se transforma un párrafo de texto plano en un archivo de subtítulos SRT estructurado:",
    exampleTxtInput: `Bienvenido a nuestro tutorial de producción de video. Hoy aprenderemos cómo los subtítulos mejoran la retención de la audiencia. Los subtítulos hacen que tu contenido sea accesible para usuarios globales y personas que miran videos sin sonido.`,
    exampleSrtOutput: `1
00:00:01,000 --> 00:00:04,200
Bienvenido a nuestro tutorial
de producción de video.

2
00:00:04,300 --> 00:00:08,400
Hoy aprenderemos cómo los subtítulos
mejoran la retención de la audiencia.

3
00:00:08,500 --> 00:00:13,100
Los subtítulos hacen que tu contenido sea accesible
para usuarios globales y videos sin sonido.`,
    exampleExplanation: "El texto plano se convirtió en 3 bloques de subtítulos con numeración secuencial, tiempos calculados, líneas balanceadas y separaciones limpias.",
    srtFormatTitle: "Estructura del Formato de Subtítulos SubRip (.SRT)",
    srtFormatIntro: "El formato SRT es el estándar universal en video. Cada bloque de subtítulo consta de 4 elementos obligatorios:",
    srtFormatElements: [
      {
        num: "1",
        name: "Número Secuencial",
        detail: "Un número entero que comienza en 1 y aumenta en orden correlativo (1, 2, 3...) para cada subtítulo."
      },
      {
        num: "2",
        name: "Rango de Tiempo (Inicio --> Fin)",
        detail: "Dos marcas de tiempo en formato hh:mm:ss,ms separadas por ' --> ' con milisegundos delimitados por comas."
      },
      {
        num: "3",
        name: "Texto del Subtítulo",
        detail: "El texto a mostrar en pantalla, organizado en 1 o 2 líneas de 37 a 42 caracteres."
      },
      {
        num: "4",
        name: "Línea en Blanco",
        detail: "Una línea vacía al final de cada bloque que indica el término del subtítulo actual."
      }
    ],
    srtTimestampFormula: "00:01:23,456 --> 00:01:27,890",
    srtTimestampExplanation: "Nota: SRT usa comas para los milisegundos (00:01:23,456). Si necesitas formato WebVTT con puntos para video web HTML5, puedes usar nuestro Convertidor de SRT a VTT.",
    useCasesTitle: "¿Cuándo Deberías Convertir TXT a SRT? Casos de Uso",
    useCasesSubtitle: "La conversión de texto a SRT es indispensable en múltiples escenarios profesionales:",
    useCases: [
      {
        title: "Creadores de YouTube y Redes Sociales",
        description: "Más del 75% de los videos en redes se ven sin sonido. Subir un archivo SRT aumenta la retención y el posicionamiento SEO."
      },
      {
        title: "Educadores y Plataformas E-Learning",
        description: "Permite cumplir normativas de accesibilidad y facilita el aprendizaje para estudiantes internacionales."
      },
      {
        title: "Podcasts y Entrevistas",
        description: "Convierte transcripciones de audio en subtítulos sincronizados para crear videoclips atractivos."
      },
      {
        title: "Editores de Video Profesionales",
        description: "Convierte guiones de locución en pistas de subtítulos listas para arrastrar a la línea de tiempo de Premiere o DaVinci."
      },
      {
        title: "Traducción y Doblaje",
        description: "Genera archivos de subtítulos en diferentes idiomas a partir de traducciones en texto plano."
      }
    ],
    noSoftwareTitle: "Convierte TXT a SRT Gratis Sin Instalar Programas",
    noSoftwareText: [
      "Olvídate de instalar programas pesados o lidiar con herramientas complejas. Nuestro convertidor funciona 100% en tu navegador web.",
      "Ventajas principales de nuestra herramienta online:"
    ],
    noSoftwareBenefits: [
      {
        title: "Privacidad Total (100% en el Navegador)",
        description: "Tus textos y guiones no se suben a ningún servidor. Todo se procesa de forma segura en tu propio dispositivo."
      },
      {
        title: "Sin Instalación ni Dependencias",
        description: "No requiere Python ni programas adicionales. Funciona al instante en cualquier navegador."
      },
      {
        title: "Compatibilidad Multiplataforma",
        description: "Funciona perfectamente en Windows, Mac, Linux, iPhone y Android."
      },
      {
        title: "Totalmente Gratis y Sin Límites",
        description: "Convierte textos cortos o transcripciones de horas sin marcas de agua ni costes."
      }
    ],
    macGuideTitle: "Cómo Convertir TXT a SRT en Mac (Guía macOS)",
    macGuideText: [
      "En Mac, la aplicación TextEdit suele guardar archivos en formato enriquecido (.rtf) o con comillas tipográficas que rompen el formato SRT.",
      "Nuestra herramienta en línea es la forma más rápida y segura de convertir TXT a SRT en Mac:"
    ],
    macSteps: [
      {
        step: "1",
        title: "Abre el Convertidor en Safari o Chrome",
        description: "Visita SRTConverters.com desde tu navegador en Mac."
      },
      {
        step: "2",
        title: "Pega tu Guion o Arrastra el Archivo .txt",
        description: "Copia el texto desde Notas, Pages o Word y pégalo en la herramienta."
      },
      {
        step: "3",
        title: "Descarga el Archivo .SRT",
        description: "Haz clic en 'Descargar .SRT'. El archivo se guardará en tu carpeta Descargas en codificación UTF-8, listo para Final Cut Pro o Premiere."
      }
    ],
    troubleshootingTitle: "Problemas Frecuentes al Convertir TXT a SRT y Soluciones",
    troubleshootingSubtitle: "Evita estos errores comunes al generar subtítulos desde texto plano:",
    problems: [
      {
        issue: "Desincronización con el Audio",
        cause: "El texto plano no contiene tiempos reales de voz; los tiempos se calculan por velocidad de lectura promedio.",
        solution: "Usa el SRT generado como base e impórtalo en tu editor de video para ajustar ligeramente la posición de los bloques en la pista de audio."
      },
      {
        issue: "Líneas de Subtítulos Demasiado Largas",
        cause: "Líneas que superan los 42 caracteres se cortan en pantallas de móviles.",
        solution: "Configura el límite en 37–40 caracteres y utiliza la opción de división por frases."
      },
      {
        issue: "Caracteres Especiales Rotos (á, é, ñ, ¿)",
        cause: "Codificación ANSI o formato no UTF-8.",
        solution: "Nuestro convertidor exporta automáticamente en UTF-8 garantizando que tildes y caracteres en español se muestren correctamente."
      },
      {
        issue: "Puntos en Lugar de Comas en Milisegundos",
        cause: "El formato SRT exige comas (00:00:01,000). Los puntos pertenecen a WebVTT.",
        solution: "Nuestra herramienta genera comas automáticamente. Si necesitas formato WebVTT, usa nuestro Convertidor de SRT a VTT."
      },
      {
        issue: "El Archivo se Guarda como .srt.txt",
        cause: "El sistema operativo añade la extensión .txt automáticamente.",
        solution: "Renombra el archivo y elimina la extensión .txt final para que termine en .srt."
      }
    ],
    tipsTitle: "Consejos Profesionales para Subtítulos de Alta Calidad",
    tipsSubtitle: "Aplica estas reglas estándar de la industria audiovisual:",
    tips: [
      {
        title: "Regla de 37 a 42 Caracteres por Línea",
        rule: "Mantén cada línea dentro de este rango.",
        why: "Permite una lectura rápida sin desviar la mirada del contenido del video."
      },
      {
        title: "Velocidad de 15 a 20 Caracteres por Segundo (CPS)",
        rule: "Ajusta la duración para un ritmo de lectura cómodo.",
        why: "Evita que los subtítulos desaparezcan demasiado rápido o permanezcan demasiado tiempo."
      },
      {
        title: "Máximo 2 Líneas por Subtítulo",
        rule: "Nunca uses más de 2 líneas por bloque.",
        why: "Tres o más líneas tapan la imagen y resultan incómodas en móviles."
      },
      {
        title: "Pausa de 100ms entre Bloques",
        rule: "Deja un intervalo de 100 milisegundos entre subtítulos.",
        why: "Facilita la transición visual en los reproductores de video."
      },
      {
        title: "Cortes en Pausas Gramaticales Naturales",
        rule: "Divide después de comas o conectores lógicos.",
        why: "Mejora la comprensión lectora del espectador."
      }
    ],
    comparisonTitle: "Convertidor TXT a SRT vs. Crear Archivos Manualmente",
    comparisonSubtitle: "Por qué usar un convertidor automático ahorra tiempo:",
    comparisonTable: [
      {
        factor: "Tiempo Necesario (Video 10 min)",
        converter: "Menos de 5 segundos",
        manual: "45 a 60 minutos escribiendo códigos"
      },
      {
        factor: "Riesgo de Errores de Sintaxis",
        converter: "Cero (formato SubRip validado)",
        manual: "Alto (comas o líneas faltantes)"
      },
      {
        factor: "Cálculo de Tiempos CPS",
        converter: "Cálculo matemático automático",
        manual: "Estimación a ojo con cronómetro"
      },
      {
        factor: "Límites de Línea",
        converter: "División automática de caracteres",
        manual: "Conteo manual de letras"
      },
      {
        factor: "Importación en Editores",
        converter: "Compatible de inmediato",
        manual: "Suele dar errores de importación"
      }
    ],
    comparisonVerdict: "El convertidor automático elimina el 90% del trabajo mecánico de formato, permitiéndote concentrarte en afinar la sincronización en tu editor.",
    conclusionTitle: "Convierte tus Textos a Subtítulos en Segundos",
    conclusionText: [
      "Los subtítulos mejoran el alcance, la retención y la accesibilidad de tus videos. Con nuestro convertidor gratuito de TXT a SRT, puedes crear archivos de subtítulos profesionales al instante.",
      "Descubre nuestras otras herramientas para subtítulos:",
      "• Convertidor de SRT a Texto: Extrae texto limpio de subtítulos eliminando marcas de tiempo.",
      "• Convertidor de SRT a VTT: Convierte subtítulos SRT a WebVTT para reproductores web HTML5.",
      "• Convertidor de VTT a SRT: Transforma archivos WebVTT en formato universal SubRip."
    ]
  },
  pt: {
    introTitle: "Guia Completo para Converter Transcrições TXT em Legendas SRT",
    introSubtitle: "Tudo o que você precisa saber sobre formatação de legendas, velocidade de leitura (CPS), marcas de tempo e edição de vídeo.",
    introText: [
      "Converter uma transcrição de texto simples ou roteiro em um arquivo de legendas sincronizado é essencial na produção de vídeos modernos. Seja para o YouTube, TikTok, Instagram Reels, cursos online ou produções audiovisuais, os players e editores de vídeo exigem arquivos de legendas estruturados.",
      "Um arquivo TXT armazena apenas texto corrido. Já o arquivo SubRip (.srt) organiza o conteúdo em blocos numerados com tempos precisos de início e fim (horas, minutos, segundos e milissegundos). Nosso conversor online gratuito de TXT para SRT faz essa conversão instantaneamente no seu navegador com total privacidade."
    ],
    whatIsTitle: "O Que é um Conversor de TXT para SRT?",
    whatIsText: [
      "Um conversor de TXT para SRT é uma ferramenta que transforma textos sem formatação em arquivos de legendas SubRip (.srt) compatíveis com todos os editores de vídeo como Premiere Pro, DaVinci Resolve e Final Cut Pro.",
      "Softwares de edição e plataformas de vídeo não conseguem carregar arquivos .txt como legendas sincronizadas. O conversor divide o texto em blocos legíveis, calcula tempos estimados com base na velocidade de leitura humana e formata o arquivo com a sintaxe padrão SubRip."
    ],
    whatIsComparison: [
      { feature: "Objetivo", txt: "Texto simples sem formatação", srt: "Legendas sincronizadas com tempo para vídeo" },
      { feature: "Marcas de Tempo", txt: "Nenhuma (apenas texto)", srt: "Tempos precisos com milissegundos (00:00:00,000)" },
      { feature: "Estrutura", txt: "Parágrafos livres", srt: "Blocos de 4 partes: Número, tempo, texto e linha vazia" },
      { feature: "Compatibilidade", txt: "Não funciona como legenda de vídeo", srt: "Compatível com YouTube, VLC, Premiere, DaVinci" },
      { feature: "Velocidade de Leitura", txt: "Sem controle de ritmo", srt: "Otimizado em caracteres por segundo (CPS)" }
    ],
    howToTitle: "Como Converter TXT para SRT Online em 3 Passos",
    howToSubtitle: "Siga este passo a passo simples para gerar legendas SRT a partir de qualquer texto em segundos.",
    howToSteps: [
      { step: "1", title: "Cole o Texto ou Envie o Arquivo", description: "Insira seu texto na caixa acima ou arraste um arquivo .txt do seu computador ou celular." },
      { step: "2", title: "Configure a Divisão e a Velocidade", description: "Defina a divisão por frases, a velocidade de leitura (15–20 CPS) e o limite de caracteres por linha (37–42)." },
      { step: "3", title: "Visualize e Baixe o Arquivo .SRT", description: "Verifique a prévia em tempo real e clique em 'Baixar .SRT' para salvar seu arquivo pronto." }
    ],
    howItWorksTitle: "Como Funciona a Conversão de TXT para SRT?",
    howItWorksText: [
      "Nosso algoritmo analisa a pontuação natural do texto, calcula o tempo de leitura confortável e estrutura os blocos no padrão SubRip.",
      "Veja as etapas do processamento:"
    ],
    howItWorksBullets: [
      { title: "1. Divisão Inteligente por Pontuação", description: "Divide o texto em pontos, vírgulas e quebras de linha para manter frases naturais." },
      { title: "2. Cálculo de Tempo CPS", description: "Estima a duração na tela com base na velocidade de leitura humana recomendada (15 a 20 caracteres por segundo)." },
      { title: "3. Intervalo de 100ms entre Legendas", description: "Adiciona uma pausa de 100 milissegundos para transição suave no player de vídeo." },
      { title: "4. Formatação SubRip Padrão", description: "Gera marcas de tempo no formato hh:mm:ss,ms com numeração sequencial e linhas em branco." }
    ],
    exampleTitle: "Exemplo de Conversão TXT para SRT",
    exampleIntro: "Veja como um parágrafo de texto simples se transforma em um arquivo SRT estruturado:",
    exampleTxtInput: `Bem-vindo ao nosso tutorial de produção de vídeo. Hoje vamos aprender como as legendas aumentam a retenção do público. As legendas tornam seu conteúdo acessível para espectadores do mundo todo.`,
    exampleSrtOutput: `1
00:00:01,000 --> 00:00:04,100
Bem-vindo ao nosso tutorial
de produção de vídeo.

2
00:00:04,200 --> 00:00:08,200
Hoje vamos aprender como as legendas
aumentam a retenção do público.

3
00:00:08,300 --> 00:00:12,500
As legendas tornam seu conteúdo acessível
para espectadores do mundo todo.`,
    exampleExplanation: "O texto foi dividido em 3 blocos ordenados com tempos calculados e linhas equilibradas.",
    srtFormatTitle: "Entendendo o Formato SubRip (.SRT)",
    srtFormatIntro: "O formato SRT é composto por quatro elementos essenciais em cada bloco de legenda:",
    srtFormatElements: [
      { num: "1", name: "Número Sequencial", detail: "Índice numérico crescente (1, 2, 3...) para cada legenda." },
      { num: "2", name: "Intervalo de Tempo", detail: "Tiempos no formato hh:mm:ss,ms separados por ' --> ' com vírgulas nos milissegundos." },
      { num: "3", name: "Texto da Legenda", detail: "1 a 2 linhas de texto com 37 a 42 caracteres." },
      { num: "4", name: "Linha em Branco", detail: "Espaço separador obrigatório entre cada legenda." }
    ],
    srtTimestampFormula: "00:01:23,456 --> 00:01:27,890",
    srtTimestampExplanation: "Nota: O formato SRT utiliza vírgulas nos milissegundos. Para vídeos web em HTML5 com formato WebVTT, use nosso Conversor de SRT para VTT.",
    useCasesTitle: "Quando Converter TXT para SRT? Casos de Uso",
    useCasesSubtitle: "A conversão de texto para legendas é essencial para:",
    useCases: [
      { title: "Criadores do YouTube e Redes Sociais", description: "Aumente o alcance e a retenção de vídeos assistidos sem som no Instagram, TikTok e LinkedIn." },
      { title: "Cursos Online e E-Learning", description: "Melhore a acessibilidade e facilite o aprendizado de alunos de diferentes idiomas." },
      { title: "Podcasts e Audiogramas", description: "Transforme transcrições em legendas dinâmicas para cortes de vídeo." },
      { title: "Editores de Vídeo", description: "Importe roteiros diretamente para a linha do tempo do Premiere ou DaVinci Resolve." },
      { title: "Tradução de Conteúdo", description: "Gere legendas traduzidas a partir de textos em outros idiomas." }
    ],
    noSoftwareTitle: "Converta TXT para SRT Sem Instalar Programas",
    noSoftwareText: [
      "Nosso conversor roda diretamente no seu navegador, sem necessidade de baixar programas pesados.",
      "Vantagens exclusivas:"
    ],
    noSoftwareBenefits: [
      { title: "100% Privado no Navegador", description: "Seus textos não são enviados para servidores externos." },
      { title: "Sem Instalação", description: "Pronto para usar no Chrome, Safari, Edge ou Firefox." },
      { title: "Compatível com Qualquer Sistema", description: "Funciona em Mac, Windows, Linux, Android e iOS." },
      { title: "Totalmente Gratuito", description: "Sem limites de arquivos ou marcas d'água." }
    ],
    macGuideTitle: "Como Converter TXT para SRT no Mac (Guia macOS)",
    macGuideText: [
      "No Mac, o TextEdit pode salvar arquivos em formato rico (.rtf) ou alterar aspas, corrompendo o SRT.",
      "Use nossa ferramenta online para converter com segurança no macOS:"
    ],
    macSteps: [
      { step: "1", title: "Acesse o site no Safari ou Chrome", description: "Abra o SRTConverters.com no seu Mac." },
      { step: "2", title: "Cole o Texto", description: "Copie seu roteiro do Pages ou Notas e cole no conversor." },
      { step: "3", title: "Baixe o Arquivo .SRT", description: "Baixe o arquivo em UTF-8 pronto para o Final Cut Pro ou Premiere." }
    ],
    troubleshootingTitle: "Problemas Comuns e Soluções",
    troubleshootingSubtitle: "Como evitar erros frequentes:",
    problems: [
      { issue: "Dessincronização com o Áudio", cause: "O texto não possui tempos reais de voz.", solution: "Use o SRT como base e ajuste o posicionamento no seu editor de vídeo." },
      { issue: "Linhas Muito Longas", cause: "Textos com mais de 42 caracteres por linha.", solution: "Ajuste o limite de caracteres para 37–40 nas configurações." },
      { issue: "Caracteres Especiais Quebrados (ç, ã, é)", cause: "Codificação ANSI em vez de UTF-8.", solution: "Nosso conversor salva automaticamente em UTF-8." },
      { issue: "Pontos em vez de Vírgulas nos Milissegundos", cause: "Sintaxe incorreta para SRT.", solution: "Nossa ferramenta aplica vírgulas no padrão SubRip." },
      { issue: "Arquivo salvo como .srt.txt", cause: "Extensão duplicada pelo sistema.", solution: "Renomeie o arquivo removendo a terminação .txt." }
    ],
    tipsTitle: "Dicas para Criar Legendas Profissionais",
    tipsSubtitle: "Boas práticas recomendadas pelo mercado audiovisual:",
    tips: [
      { title: "Limite de 37 a 42 Caracteres", rule: "Mantenha as linhas curtas.", why: "Facilita a leitura rápida em telas de celulares." },
      { title: "Velocidade de 15 a 20 CPS", rule: "Ajuste o tempo de exibição.", why: "Evita que a legenda passe rápido demais." },
      { title: "Máximo de 2 Linhas", rule: "Nunca use 3 linhas.", why: "Não polui o vídeo nem cobre os rostos." },
      { title: "Pausa de 100ms", rule: "Mantenha o intervalo entre blocos.", why: "Garante a atualização correta no player." },
      { title: "Quebras em Pausas Naturais", rule: "Quebre após vírgulas e conectivos.", why: "Melhora a compreensão da leitura." }
    ],
    comparisonTitle: "Conversor TXT para SRT vs. Criação Manual",
    comparisonSubtitle: "Economia de tempo comprovada:",
    comparisonTable: [
      { factor: "Tempo (Vídeo de 10 min)", converter: "Menos de 5 segundos", manual: "45 a 60 minutos digitando" },
      { factor: "Risco de Erros de Sintaxe", converter: "Zero", manual: "Alto" },
      { factor: "Cálculo de CPS", converter: "Automático e preciso", manual: "Estimativa manual" },
      { factor: "Quebra de Linha", converter: "Formatada automaticamente", manual: "Contagem manual" },
      { factor: "Importação no Editor", converter: "100% compatível", manual: "Sujeito a falhas" }
    ],
    comparisonVerdict: "O conversor automatiza a formatação pesada para que você apenas faça o ajuste fino na edição.",
    conclusionTitle: "Converta Seus Textos em Legendas Agora",
    conclusionText: [
      "Legendas profissionais aumentam o engajamento e a acessibilidade dos seus vídeos. Use nosso conversor gratuito para gerar arquivos SRT em segundos.",
      "Conheça também nossas outras ferramentas:",
      "• Conversor de SRT para Texto: Extraia texto limpo de arquivos de legenda.",
      "• Conversor de SRT para VTT: Converta legendas para o padrão WebVTT de vídeo web.",
      "• Conversor de VTT para SRT: Transforme arquivos WebVTT em formato SubRip."
    ]
  },
  fr: {
    introTitle: "Guide Complet pour Convertir des Transcriptions TXT en Sous-Titres SRT",
    introSubtitle: "Tout savoir sur le formatage des sous-titres, la vitesse de lecture (CPS), les repères temporels et le montage vidéo.",
    introText: [
      "Transformer une transcription brute ou un scénario en un fichier de sous-titres synchronisé est une étape essentielle de la création vidéo moderne. Que ce soit pour YouTube, TikTok, Instagram, des cours en ligne ou des productions audiovisuelles, les lecteurs vidéo exigent des fichiers de sous-titres structurés.",
      "Un fichier texte (.txt) ne contient que du texte brut sans minutage. À l'inverse, un fichier SubRip (.srt) organise les sous-titres en blocs numérotés avec des codes temporels précis (heures, minutes, secondes et millisecondes). Notre convertisseur TXT en SRT en ligne gratuit effectue cette conversion instantanément dans votre navigateur en toute confidentialité."
    ],
    whatIsTitle: "Qu'est-ce qu'un Convertisseur TXT en SRT ?",
    whatIsText: [
      "Un convertisseur TXT en SRT est un outil conçu pour transformer du texte brut en fichiers de sous-titres SubRip (.srt) compatibles avec les logiciels de montage vidéo tels que Premiere Pro, DaVinci Resolve et Final Cut Pro.",
      "Les plateformes vidéo et logiciels de montage ne peuvent pas lire de simples fichiers .txt comme sous-titres synchronisés. Le convertisseur découpe votre texte en segments lisibles, calcule des durées adaptées au rythme de lecture humain et génère la syntaxe SubRip exacte."
    ],
    whatIsComparison: [
      { feature: "Objectif", txt: "Stockage de texte brut (scripts, notes)", srt: "Sous-titres synchronisés avec le temps pour vidéo" },
      { feature: "Codes Temporels", txt: "Aucun (texte seul)", srt: "Horodatages précis à la milliseconde (00:00:00,000)" },
      { feature: "Structure", txt: "Paragraphes libres", srt: "Blocs de 4 lignes : Numéro, code temporel, texte, ligne vide" },
      { feature: "Compatibilité", txt: "Incompatible comme piste de sous-titres", srt: "Compatible avec YouTube, VLC, Premiere, DaVinci" },
      { feature: "Vitesse de Lecture", txt: "Aucun contrôle de rythme", srt: "Optimisé en caractères par seconde (CPS)" }
    ],
    howToTitle: "Comment Convertir TXT en SRT en Ligne en 3 Étapes",
    howToSubtitle: "Suivez ces étapes simples pour transformer n'importe quel texte en fichier SRT en quelques secondes.",
    howToSteps: [
      { step: "1", title: "Collez votre Texte ou Importez un Fichier", description: "Collez votre transcription dans l'encadré ci-dessus ou glissez-déposez un fichier .txt depuis votre appareil." },
      { step: "2", title: "Configurez le Découpage et la Vitesse", description: "Choisissez le découpage par phrases, réglez la vitesse de lecture (15–20 CPS) et fixez la limite de caractères par ligne (37–42)." },
      { step: "3", title: "Prévisualisez et Téléchargez le Fichier .SRT", description: "Vérifiez le résultat dans l'aperçu en direct et cliquez sur 'Télécharger .SRT' pour obtenir votre fichier prêt à l'emploi." }
    ],
    howItWorksTitle: "Comment Fonctionne la Conversion TXT en SRT ?",
    howItWorksText: [
      "Notre moteur d'analyse examine la ponctuation de votre texte, estime une durée d'affichage optimale et structure les sous-titres selon les normes SubRip.",
      "Voici les étapes de traitement :"
    ],
    howItWorksBullets: [
      { title: "1. Découpage Intelligent par Ponctuation", description: "Scinde les longs paragraphes aux points, virgules et sauts de ligne pour une lecture fluide." },
      { title: "2. Calcul du Minutage CPS", description: "Calcule la durée d'affichage en fonction de la vitesse de lecture humaine standard (15 à 20 caractères par seconde)." },
      { title: "3. Intervalle de 100ms entre les Sous-Titres", description: "Insère un espace de 100 millisecondes pour assurer une transition visuelle nette." },
      { title: "4. Formatage SubRip Conforme", description: "Formate les horodatages au format hh:mm:ss,ms avec des virgules pour les millisecondes." }
    ],
    exampleTitle: "Exemple de Conversion TXT en SRT",
    exampleIntro: "Découvrez comment un paragraphe de texte brut devient un fichier de sous-titres SRT :",
    exampleTxtInput: `Bienvenue dans notre tutoriel de production vidéo. Aujourd'hui, nous allons voir comment les sous-titres améliorent la rétention des spectateurs. Les sous-titres rendent vos contenus accessibles au monde entier.`,
    exampleSrtOutput: `1
00:00:01,000 --> 00:00:04,100
Bienvenue dans notre tutoriel
de production vidéo.

2
00:00:04,200 --> 00:00:08,300
Aujourd'hui, nous allons voir comment les sous-titres
améliorent la rétention des spectateurs.

3
00:00:08,400 --> 00:00:12,600
Les sous-titres rendent vos contenus
accessibles au monde entier.`,
    exampleExplanation: "Le texte a été transformé en 3 sous-titres numérotés avec des durées calculées et des lignes équilibrées.",
    srtFormatTitle: "Comprendre la Structure du Format SubRip (.SRT)",
    srtFormatIntro: "Chaque bloc de sous-titre dans un fichier SRT contient quatre éléments indispensables :",
    srtFormatElements: [
      { num: "1", name: "Numéro de Séquence", detail: "Un nombre entier croissant (1, 2, 3...) pour chaque sous-titre." },
      { num: "2", name: "Plage Horodatée", detail: "Deux codes temporels au format hh:mm:ss,ms séparés par ' --> ' avec des virgules pour les millisecondes." },
      { num: "3", name: "Texte du Sous-Titre", detail: "1 à 2 lignes de 37 à 42 caractères pour un confort de lecture optimal." },
      { num: "4", name: "Ligne Vide", detail: "Un saut de ligne séparateur indispensable entre chaque bloc." }
    ],
    srtTimestampFormula: "00:01:23,456 --> 00:01:27,890",
    srtTimestampExplanation: "Remarque : SRT utilise une virgule pour les millisecondes. Pour les vidéos web HTML5 au format WebVTT, utilisez notre Convertisseur SRT en VTT.",
    useCasesTitle: "Quand Convertir TXT en SRT ? Cas d'Usage",
    useCasesSubtitle: "La conversion de texte en sous-titres s'avère indispensable pour :",
    useCases: [
      { title: "Créateurs YouTube et Réseaux Sociaux", description: "Captez l'attention des utilisateurs qui regardent les vidéos sans le son sur Instagram, TikTok et LinkedIn." },
      { title: "Formateurs et Plateformes E-Learning", description: "Rendez vos cours accessibles aux personnes malentendantes et aux apprenants internationaux." },
      { title: "Podcasts et Entretiens", description: "Transformez vos transcriptions audio en extraits vidéo sous-titrés percutants." },
      { title: "Monteurs Vidéo Professionnels", description: "Importez vos scripts voix off directement dans la timeline de Premiere Pro ou DaVinci Resolve." },
      { title: "Traduction et Localisation", description: "Générez des sous-titres multilingues à partir de traductions textuelles." }
    ],
    noSoftwareTitle: "Convertir TXT en SRT en Ligne Sans Installer de Logiciel",
    noSoftwareText: [
      "Notre outil fonctionne intégralement dans votre navigateur web, sans téléchargement de logiciel volumineux.",
      "Les avantages clés :"
    ],
    noSoftwareBenefits: [
      { title: "100% Confidentiel dans le Navigateur", description: "Vos textes ne sont envoyés à aucun serveur distant." },
      { title: "Sans Installation", description: "Accessible instantanément sur Chrome, Safari, Edge et Firefox." },
      { title: "Compatibilité Universelle", description: "Fonctionne sur Mac, Windows, Linux, Android et iOS." },
      { title: "Entièrement Gratuit", description: "Sans limitation de volume ni filigrane." }
    ],
    macGuideTitle: "Comment Convertir TXT en SRT sur Mac (Guide macOS)",
    macGuideText: [
      "Sur Mac, l'application TextEdit peut enregistrer les fichiers en texte enrichi (.rtf) ou insérer des guillemets typographiques qui rendent le fichier SRT invalide.",
      "Notre outil web est la méthode la plus sûre pour convertir TXT en SRT sur macOS :"
    ],
    macSteps: [
      { step: "1", title: "Ouvrez le Convertisseur dans Safari ou Chrome", description: "Rendez-vous sur SRTConverters.com depuis votre Mac." },
      { step: "2", title: "Collez votre Script", description: "Copiez le texte depuis Notes ou Pages et collez-le dans l'outil." },
      { step: "3", title: "Téléchargez le Fichier .SRT", description: "Enregistrez le fichier UTF-8 prêt à être importé dans Final Cut Pro ou Premiere." }
    ],
    troubleshootingTitle: "Problèmes Courants et Solutions",
    troubleshootingSubtitle: "Comment éviter les pièges fréquents :",
    problems: [
      { issue: "Désynchronisation avec l'Audio", cause: "Le fichier texte ne contient aucun minutage vocal réel.", solution: "Utilisez le SRT comme base et ajustez les blocs dans votre logiciel de montage vidéo." },
      { issue: "Lignes Trop Longues sur Mobile", cause: "Lignes dépassant 42 caractères.", solution: "Réglez la limite à 37–40 caractères dans les paramètres du convertisseur." },
      { issue: "Caractères Accentués Altérés (é, è, à, ç)", cause: "Encodage ANSI au lieu de UTF-8.", solution: "Notre outil exporte automatiquement en UTF-8 conforme." },
      { issue: "Points au lieu de Virgules", cause: "Sintaxe non conforme au standard SRT.", solution: "Notre outil applique automatiquement les virgules SubRip." },
      { issue: "Fichier nommé .srt.txt", cause: "Double extension ajoutée par le système.", solution: "Renommez le fichier en supprimant l'extension .txt finale." }
    ],
    tipsTitle: "Conseils pour des Sous-Titres Professionnels",
    tipsSubtitle: "Les meilleures pratiques de l'industrie audiovisuelle :",
    tips: [
      { title: "Règle des 37 à 42 Caractères", rule: "Gardez des lignes courtes.", why: "Facilite la lecture sans quitter la vidéo des yeux." },
      { title: "Vitesse de 15 à 20 CPS", rule: "Adaptez la durée d'affichage.", why: "Permet une lecture confortable et naturelle." },
      { title: "Maximum 2 Lignes", rule: "Ne dépassez jamais 2 lignes.", why: "Évite de masquer l'image et les visages." },
      { title: "Pause de 100ms", rule: "Conservez l'intervalle entre blocs.", why: "Permet aux lecteurs vidéo de rafraîchir l'affichage." },
      { title: "Coupures Grammaticales Naturelles", rule: "Coupez après les virgules et propositions.", why: "Améliore grandement la compréhension." }
    ],
    comparisonTitle: "Convertisseur Automatique vs Création Manuelle",
    comparisonSubtitle: "Pourquoi l'automatisation fait gagner un temps précieux :",
    comparisonTable: [
      { factor: "Temps (Vidéo 10 min)", converter: "Moins de 5 secondes", manual: "45 à 60 minutes de saisie" },
      { factor: "Risque d'Erreur", converter: "Zéro (syntaxe validée)", manual: "Élevé (oublis de ponctuation)" },
      { factor: "Calcul du Rythme CPS", converter: "Calcul mathématique précis", manual: "Estimation au chronomètre" },
      { factor: "Retours à la Ligne", converter: "Formatage automatique", manual: "Comptage manuel des lettres" },
      { factor: "Import Logiciel Montage", converter: "100% compatible", manual: "Fréquents refus d'import" }
    ],
    comparisonVerdict: "Le convertisseur supprime 90% du travail répétitif pour vous permettre de vous concentrer sur le montage.",
    conclusionTitle: "Convertissez Vos Textes en Sous-Titres Dès Maintenant",
    conclusionText: [
      "Les sous-titres augmentent la portée et l'engagement de vos vidéos. Utilisez notre convertisseur gratuit pour générer des fichiers SRT en quelques secondes.",
      "Découvrez également nos autres outils spécialisés :",
      "• Convertisseur SRT en Texte : Extrayez le texte brut de vos fichiers de sous-titres.",
      "• Convertisseur SRT en VTT : Convertissez vos sous-titres au standard WebVTT pour le web.",
      "• Convertisseur VTT en SRT : Transformez les fichiers WebVTT en format universel SubRip."
    ]
  },
  de: {
    introTitle: "Vollständiger Leitfaden zur Konvertierung von TXT-Transkripten in SRT-Untertitel",
    introSubtitle: "Alles über Untertitel-Formatierung, Lesegeschwindigkeit (CPS), Zeitstempel und Video-Workflows.",
    introText: [
      "Die Umwandlung eines einfachen Textes oder Skripts in eine synchronisierte Untertiteldatei ist für moderne Video-Produktionen unverzichtbar. Ob für YouTube, TikTok, Instagram Reels, E-Learning-Kurse oder professionelle Filme – Videoplayer und Schnittprogramme benötigen strukturierte Untertiteldateien statt reinem Fließtext.",
      "Eine TXT-Datei speichert Text ohne Zeitbezug. Eine SubRip-Datei (.srt) gliedert den Text hingegen in nummerierte Blöcke mit präzisen Start- und Endzeitstempeln (Stunden, Minuten, Sekunden und Millisekunden). Unser kostenloser Online-Konverter wandelt TXT direkt in Ihrem Browser sicher und ohne Server-Upload in SRT um."
    ],
    whatIsTitle: "Was ist ein TXT-in-SRT-Konverter?",
    whatIsText: [
      "Ein TXT-in-SRT-Konverter ist ein Tool, das unstrukturierten Text in standardisierte SubRip-Dateien (.srt) für Schnittprogramme wie Premiere Pro, DaVinci Resolve und Final Cut Pro umwandelt.",
      "Videoplattformen können reine .txt-Dateien nicht als synchronisierte Untertitel anzeigen. Der Konverter teilt den Text in lesefreundliche Segmente auf, berechnet die Anzeigedauer anhand der Lesegeschwindigkeit und wendet die exakte SRT-Syntax an."
    ],
    whatIsComparison: [
      { feature: "Zweck", txt: "Unstrukturierter Text (Skripte, Notizen)", srt: "Synchronisierte Video-Untertitel mit Zeitstempeln" },
      { feature: "Zeitstempel", txt: "Keine (nur Text)", srt: "Millisekundengenaue Zeitstempel (00:00:00,000)" },
      { feature: "Struktur", txt: "Freier Fließtext", srt: "4-teiliger Block: Nummer, Zeitstempel, Text, Leerzeile" },
      { feature: "Kompatibilität", txt: "Nicht als Untertitelspur ladbar", srt: "Universell kompatibel (YouTube, Premiere, VLC)" },
      { feature: "Lesetempo", txt: "Keine Tempokontrolle", srt: "Optimiert nach Zeichen pro Sekunde (CPS)" }
    ],
    howToTitle: "Wie man TXT in 3 Schritten online in SRT umwandelt",
    howToSubtitle: "Verwandeln Sie jedes Textdokument in Sekundenschnelle in eine einsatzbereite SRT-Datei.",
    howToSteps: [
      { step: "1", title: "Text einfügen oder Datei hochladen", description: "Fügen Sie Ihr Transkript in das Textfeld ein oder ziehen Sie eine .txt-Datei hinein." },
      { step: "2", title: "Aufteilung und Lesetempo anpassen", description: "Wählen Sie Satzaufteilung, setzen Sie die Lesegeschwindigkeit (15–20 CPS) und das Zeichenlimit pro Zeile (37–42)." },
      { step: "3", title: "Vorschau prüfen und .SRT herunterladen", description: "Prüfen Sie das Ergebnis in der Live-Vorschau und laden Sie die fertige .srt-Datei herunter." }
    ],
    howItWorksTitle: "Wie funktioniert die TXT-in-SRT-Konvertierung?",
    howItWorksText: [
      "Der Konverter analysiert die Zeichensetzung, ermittelt eine angenehme Anzeigedauer und erstellt standardkonforme SubRip-Blöcke.",
      "Die einzelnen Verarbeitungsschritte:"
    ],
    howItWorksBullets: [
      { title: "1. Intelligente Satzaufteilung", description: "Teilt Absätze an Punkten, Kommas und Zeilenumbrüchen in natürliche Sinnesabschnitte." },
      { title: "2. CPS-Zeitberechnung (Zeichen pro Sekunde)", description: "Berechnet die Verweildauer auf Basis normaler Lesegeschwindigkeiten (15 bis 20 Zeichen pro Sekunde)." },
      { title: "3. 100ms-Pause zwischen Blöcken", description: "Fügt eine kurze Lücke ein, damit der Player den Bildaufbau nahtlos aktualisiert." },
      { title: "4. Standardkonforme SubRip-Syntax", description: "Erstellt Zeitstempel im Format hh:mm:ss,ms mit Kommas für Millisekunden." }
    ],
    exampleTitle: "Beispiel: TXT zu SRT Vorher-Nachher",
    exampleIntro: "So verwandelt sich unformatierter Fließtext in eine strukturierte Untertiteldatei:",
    exampleTxtInput: `Willkommen zu unserem Videoproduktions-Tutorial. Heute lernen wir, wie Untertitel die Zuschauerbindung verbessern. Untertitel machen Ihre Inhalte für ein weltweites Publikum und stumme Mobilnutzer zugänglich.`,
    exampleSrtOutput: `1
00:00:01,000 --> 00:00:04,100
Willkommen zu unserem
Videoproduktions-Tutorial.

2
00:00:04,200 --> 00:00:08,300
Heute lernen wir, wie Untertitel
die Zuschauerbindung verbessern.

3
00:00:08,400 --> 00:00:12,800
Untertitel machen Ihre Inhalte für ein weltweites
Publikum und stumme Mobilnutzer zugänglich.`,
    exampleExplanation: "Der Fließtext wurde in 3 nummerierte Blöcke mit berechneten Zeiten und ausgewogenen Zeilen aufgeteilt.",
    srtFormatTitle: "Aufbau des SubRip-Formats (.SRT)",
    srtFormatIntro: "Jeder Untertitelblock in einer SRT-Datei besteht aus vier Elementen:",
    srtFormatElements: [
      { num: "1", name: "Sequenznummer", detail: "Fortlaufende Ganzzahl (1, 2, 3...) für jeden Block." },
      { num: "2", name: "Zeitspanne", detail: "Start- und Endzeit im Format hh:mm:ss,ms getrennt durch ' --> ' mit Kommas für Millisekunden." },
      { num: "3", name: "Untertiteltext", detail: "1 bis 2 Zeilen mit maximal 37 bis 42 Zeichen pro Zeile." },
      { num: "4", name: "Leerzeile", detail: "Erforderliche Leerzeile zur Abgrenzung des nächsten Blocks." }
    ],
    srtTimestampFormula: "00:01:23,456 --> 00:01:27,890",
    srtTimestampExplanation: "Hinweis: SRT verwendet Kommas für Millisekunden. Für HTML5-Webplayer im WebVTT-Format nutzen Sie unseren SRT-in-VTT-Konverter.",
    useCasesTitle: "Wann sollte man TXT in SRT konvertieren? Anwendungsbereiche",
    useCasesSubtitle: "Die Konvertierung ist in vielen Bereichen unverzichtbar:",
    useCases: [
      { title: "YouTube-Creator & Social Media", description: "Über 75 % der Videos auf Social Media werden ohne Ton angesehen. Untertitel steigern die Wiedergabezeit." },
      { title: "Online-Kurse & E-Learning", description: "Ermöglicht barrierefreien Zugang und unterstützt internationale Lernende." },
      { title: "Podcasts & Interviews", description: "Verwandelt Audio-Transkripte in dynamische Videoclips mit Untertiteln." },
      { title: "Videoschnitt & Filmproduktion", description: "Sprechertexte direkt in die Timeline von Premiere Pro oder DaVinci Resolve importieren." },
      { title: "Übersetzung & Lokalisierung", description: "Übersetzte Texte schnell in Untertitelspuren verwandeln." }
    ],
    noSoftwareTitle: "TXT in SRT online konvertieren ohne Software-Installation",
    noSoftwareText: [
      "Unser Tool läuft vollständig im Webbrowser, ohne Downloads oder Installationen.",
      "Die wichtigsten Vorteile:"
    ],
    noSoftwareBenefits: [
      { title: "100% Datenschutz im Browser", description: "Ihre Texte bleiben lokal auf Ihrem Gerät und werden an keinen Server gesendet." },
      { title: "Keine Installation", description: "Sofort einsatzbereit in Chrome, Safari, Firefox und Edge." },
      { title: "Plattformunabhängig", description: "Funktioniert auf Windows, Mac, Linux, Android und iOS." },
      { title: "Kostenlos und unbegrenzt", description: "Keine Wasserzeichen oder Dateibeschränkungen." }
    ],
    macGuideTitle: "TXT in SRT auf dem Mac umwandeln (macOS-Leitfaden)",
    macGuideText: [
      "Auf dem Mac speichert TextEdit Dateien oft im RTF-Format oder fügt typografische Anführungszeichen ein, was SRT-Dateien unbrauchbar macht.",
      "Unser Online-Tool ist der sicherste Weg für macOS-Nutzer:"
    ],
    macSteps: [
      { step: "1", title: "Tool in Safari oder Chrome öffnen", description: "Besuchen Sie SRTConverters.com auf Ihrem Mac." },
      { step: "2", title: "Text einfügen", description: "Kopieren Sie das Skript aus Notizen oder Pages in das Eingabefeld." },
      { step: "3", title: "SRT-Datei herunterladen", description: "Speichern Sie die fertige UTF-8-Datei direkt für Final Cut Pro oder Premiere." }
    ],
    troubleshootingTitle: "Häufige Fehler und Lösungen",
    troubleshootingSubtitle: "So vermeiden Sie typische Probleme:",
    problems: [
      { issue: "Asynchroner Ton", cause: "Reiner Text enthält keine Sprachzeitstempel.", solution: "Nutzen Sie die Datei als Basis und passen Sie die Position im Schnittprogramm an." },
      { issue: "Zu lange Zeilen auf Smartphones", cause: "Zeilen mit über 42 Zeichen.", solution: "Begrenzen Sie die Zeilenlänge im Tool auf 37–40 Zeichen." },
      { issue: "Fehlerhafte Umlaute (ä, ö, ü, ß)", cause: "ANSI- statt UTF-8-Codierung.", solution: "Unser Tool speichert automatisch im fehlerfreien UTF-8-Format." },
      { issue: "Punkte statt Kommas bei Millisekunden", cause: "WebVTT- statt SRT-Syntax.", solution: "Unser Tool verwendet standardmäßig SubRip-Kommas." },
      { issue: "Datei heißt .srt.txt", cause: "Doppelte Dateiendung durch das Betriebssystem.", solution: "Entfernen Sie die Endung .txt im Dateinamen." }
    ],
    tipsTitle: "Tipps für professionelle Untertitel",
    tipsSubtitle: "Bewährte Standards der Medienbranche:",
    tips: [
      { title: "37 bis 42 Zeichen pro Zeile", rule: "Kurze Zeilen wählen.", why: "Ermöglicht schnelles Erfassen beim Zuschauen." },
      { title: "15 bis 20 CPS Lesetempo", rule: "Anzeigedauer abstimmen.", why: "Sorgt für ein natürliches Leseerlebnis." },
      { title: "Maximal 2 Zeilen", rule: "Nie 3 Zeilen verwenden.", why: "Verdeckt keine wichtigen Bildinhalte." },
      { title: "100ms Lücke zwischen Blöcken", rule: "Pause beibehalten.", why: "Sichert saubere Übergänge im Player." },
      { title: "Sinnvolle Satzumbrüche", rule: "Nach Kommas und Satzteilen trennen.", why: "Erhöht das Textverständnis." }
    ],
    comparisonTitle: "Automatischer Konverter vs. Manuelles Erstellen",
    comparisonSubtitle: "Warum Automatisierung enorm viel Zeit spart:",
    comparisonTable: [
      { factor: "Zeitaufwand (10-Min-Video)", converter: "Unter 5 Sekunden", manual: "45 bis 60 Minuten Tippen" },
      { factor: "Syntax-Fehlerrisiko", converter: "Null (validiertes SRT)", manual: "Hoch (fehlende Kommas/Zeilen)" },
      { factor: "CPS-Berechnung", converter: "Automatisch berechnet", manual: "Mühsames Schätzen mit Stoppuhr" },
      { factor: "Zeilenumbrüche", converter: "Automatisch formatiert", manual: "Manuelles Zeichenzählen" },
      { factor: "Import in Schnittprogramme", converter: "Sofort kompatibel", manual: "Häufige Importfehler" }
    ],
    comparisonVerdict: "Der Konverter übernimmt 90 % der zeitraubenden Formatierung, sodass Sie sich voll auf den Feinschliff konzentrieren können.",
    conclusionTitle: "Verwandeln Sie Text jetzt in Untertitel",
    conclusionText: [
      "Untertitel steigern Reichweite, Barrierefreiheit und Zuschauerbindung. Nutzen Sie unseren kostenlosen Konverter für schnelle Ergebnisse.",
      "Entdecken Sie weitere praktische Tools:",
      "• SRT-in-Text-Konverter: Reinen Text aus Untertiteldateien extrahieren.",
      "• SRT-in-VTT-Konverter: SRT-Untertitel für HTML5-Webplayer in WebVTT umwandeln.",
      "• VTT-in-SRT-Konverter: WebVTT-Dateien in universelles SubRip-Format umwandeln."
    ]
  },
  id: {
    introTitle: "Panduan Lengkap Mengubah Transkrip TXT Menjadi Subtitle SRT",
    introSubtitle: "Pelajari format subtitle, penghitungan kecepatan membaca (CPS), penataan timestamp, dan alur kerja video.",
    introText: [
      "Mengubah transkrip teks mentah atau naskah menjadi file subtitle yang tersinkronisasi adalah kebutuhan penting dalam produksi video modern. Baik untuk YouTube, TikTok, Instagram Reels, kelas online, maupun film, pemutar video memerlukan file subtitle terstruktur alih-alih teks biasa.",
      "File TXT hanya menyimpan teks tanpa penanda waktu. Sebaliknya, file SubRip (.srt) menyusun teks ke dalam blok bernomor dengan timestamp awal dan akhir yang presisi (jam, menit, detik, dan milidetik). Konverter TXT ke SRT online gratis kami melakukan konversi ini langsung di browser Anda tanpa mengunggah data ke server luar."
    ],
    whatIsTitle: "Apa Itu Konverter TXT ke SRT?",
    whatIsText: [
      "Konverter TXT ke SRT adalah alat untuk mengubah teks mentah menjadi file subtitle SubRip (.srt) yang kompatibel dengan software edit video seperti Premiere Pro, DaVinci Resolve, dan Final Cut Pro.",
      "Platform video tidak dapat membaca file .txt biasa sebagai subtitle tersinkronisasi. Konverter membagi teks menjadi baris yang nyaman dibaca, menghitung durasi berdasarkan kecepatan membaca manusia, dan menerapkan sintaks SRT yang valid."
    ],
    whatIsComparison: [
      { feature: "Tujuan", txt: "Penyimpanan teks biasa (naskah, catatan)", srt: "Subtitle video tersinkronisasi dengan waktu" },
      { feature: "Data Waktu", txt: "Tidak ada (hanya teks)", srt: "Timestamp akurat hingga milidetik (00:00:00,000)" },
      { feature: "Struktur", txt: "Paragraf bebas", srt: "4 bagian: Nomor urut, timestamp, teks, baris kosong" },
      { feature: "Kompatibilitas", txt: "Tidak bisa dipakai langsung sebagai subtitle", srt: "Kompatibel dengan YouTube, VLC, Premiere, DaVinci" },
      { feature: "Kecepatan Baca", txt: "Tanpa kontrol kecepatan", srt: "Dioptimalkan berdasarkan karakter per detik (CPS)" }
    ],
    howToTitle: "Cara Mengubah TXT ke SRT Online dalam 3 Langkah",
    howToSubtitle: "Ubah naskah teks menjadi file subtitle SRT siap pakai hanya dalam hitungan detik.",
    howToSteps: [
      { step: "1", title: "Tempel Teks atau Unggah File", description: "Masukkan transkrip Anda ke kotak di atas atau seret file .txt dari perangkat Anda." },
      { step: "2", title: "Atur Pembagian & Kecepatan", description: "Pilih pemisahan berdasarkan kalimat, atur kecepatan membaca (15–20 CPS), dan batas karakter per baris (37–42)." },
      { step: "3", title: "Pratinjau & Unduh File .SRT", description: "Cek hasil pada pratinjau langsung dan klik 'Unduh .SRT' untuk menyimpan file Anda." }
    ],
    howItWorksTitle: "Bagaimana Cara Kerja Konversi TXT ke SRT?",
    howItWorksText: [
      "Algoritma kami menganalisis tanda baca teks, menghitung durasi tampil yang nyaman, dan menyusun blok subtitle sesuai standar SubRip.",
      "Berikut tahapan pemrosesannya:"
    ],
    howItWorksBullets: [
      { title: "1. Pemisahan Cerdas Berdasarkan Tanda Baca", description: "Membagi paragraf panjang pada titik, koma, dan jeda baris agar kalimat terdengar alami." },
      { title: "2. Perhitungan Durasi CPS", description: "Menghitung durasi tayang berdasarkan kecepatan membaca rata-rata (15 hingga 20 karakter per detik)." },
      { title: "3. Jeda 100ms Antar Subtitle", description: "Memberikan jeda singkat 100 milidetik agar transisi subtitle pada pemutar video berjalan mulus." },
      { title: "4. Format SubRip Standar", description: "Menghasilkan format waktu hh:mm:ss,ms dengan koma untuk milidetik dan nomor urut teratur." }
    ],
    exampleTitle: "Contoh Konversi TXT ke SRT",
    exampleIntro: "Lihat bagaimana teks biasa diubah menjadi file subtitle SRT terstruktur:",
    exampleTxtInput: `Selamat datang di tutorial produksi video kami. Hari ini kita akan mempelajari bagaimana subtitle meningkatkan retensi penonton. Subtitle membuat konten Anda dapat diakses oleh penonton global.`,
    exampleSrtOutput: `1
00:00:01,000 --> 00:00:04,100
Selamat datang di tutorial
produksi video kami.

2
00:00:04,200 --> 00:00:08,300
Hari ini kita akan mempelajari bagaimana
subtitle meningkatkan retensi penonton.

3
00:00:08,400 --> 00:00:12,600
Subtitle membuat konten Anda dapat diakses
oleh penonton global.`,
    exampleExplanation: "Teks berhasil dipecah menjadi 3 blok subtitle bernomor dengan durasi yang dihitung dan baris yang seimbang.",
    srtFormatTitle: "Memahami Format File SubRip (.SRT)",
    srtFormatIntro: "Setiap blok subtitle dalam file SRT terdiri dari empat komponen utama:",
    srtFormatElements: [
      { num: "1", name: "Nomor Urut", detail: "Angka berurutan (1, 2, 3...) untuk setiap segmen subtitle." },
      { num: "2", name: "Rentang Waktu", detail: "Format waktu hh:mm:ss,ms yang dipisahkan oleh ' --> ' dengan koma untuk milidetik." },
      { num: "3", name: "Teks Subtitle", detail: "1 hingga 2 baris teks dengan 37 sampai 42 karakter per baris." },
      { num: "4", name: "Baris Kosong", detail: "Pemisah wajib antara satu subtitle dengan subtitle berikutnya." }
    ],
    srtTimestampFormula: "00:01:23,456 --> 00:01:27,890",
    srtTimestampExplanation: "Catatan: SRT menggunakan tanda koma untuk milidetik. Jika Anda membutuhkan format WebVTT untuk video HTML5, gunakan Konverter SRT ke VTT kami.",
    useCasesTitle: "Kapan Harus Mengubah TXT ke SRT? Penggunaan Praktis",
    useCasesSubtitle: "Konversi teks ke subtitle sangat dibutuhkan untuk:",
    useCases: [
      { title: "Kreator YouTube & Media Sosial", description: "Lebih dari 75% video di media sosial ditonton tanpa suara. Subtitle meningkatkan retensi dan jangkauan." },
      { title: "Kursus Online & Pendidikan", description: "Membantu aksesibilitas bagi penyandang disabilitas dan siswa dari berbagai wilayah." },
      { title: "Podcast & Wawancara", description: "Mengubah rekaman suara menjadi klip video pendek dengan takarir teks." },
      { title: "Editor Video Profesional", description: "Memasukkan naskah sulih suara langsung ke timeline Premiere Pro atau DaVinci Resolve." },
      { title: "Penerjemahan & Lokalisasi", description: "Membuat subtitle multi-bahasa dari naskah terjemahan." }
    ],
    noSoftwareTitle: "Konversi TXT ke SRT Online Tanpa Instal Aplikasi",
    noSoftwareText: [
      "Alat kami beroperasi langsung di browser tanpa perlu mengunduh aplikasi berat.",
      "Keunggulan utama:"
    ],
    noSoftwareBenefits: [
      { title: "100% Privasi di Browser", description: "Teks Anda diproses secara lokal tanpa dikirim ke server luar." },
      { title: "Tanpa Perlu Instalasi", description: "Langsung bisa digunakan di Chrome, Safari, Edge, atau Firefox." },
      { title: "Kompatibel di Semua Perangkat", description: "Bisa digunakan di Mac, Windows, Linux, Android, dan iPhone." },
      { title: "Gratis Tanpa Batasan", description: "Konversi teks sebanyak apa pun tanpa watermark." }
    ],
    macGuideTitle: "Cara Mengubah TXT ke SRT di Mac (Panduan macOS)",
    macGuideText: [
      "Di Mac, aplikasi TextEdit kerap menyimpan file dalam format kaya (.rtf) atau mengubah tanda petik yang membuat format SRT error.",
      "Gunakan konverter web kami untuk konversi yang aman di Mac:"
    ],
    macSteps: [
      { step: "1", title: "Buka Alat di Safari atau Chrome", description: "Buka SRTConverters.com pada Mac Anda." },
      { step: "2", title: "Tempel Naskah Anda", description: "Salin teks dari Notes atau Pages dan tempelkan ke kolom yang tersedia." },
      { step: "3", title: "Unduh File .SRT", description: "Unduh file UTF-8 siap pakai untuk Final Cut Pro atau Premiere." }
    ],
    troubleshootingTitle: "Masalah Umum dan Solusinya",
    troubleshootingSubtitle: "Hindari kesalahan umum saat membuat subtitle:",
    problems: [
      { issue: "Subtitle Tidak Pas dengan Suara", cause: "File teks tidak memiliki data waktu rekaman suara asli.", solution: "Gunakan file SRT hasil konversi sebagai draf, lalu geser posisi di software editing video." },
      { issue: "Baris Teks Terlalu Panjang", cause: "Teks melebihi 42 karakter per baris.", solution: "Atur batas karakter menjadi 37–40 pada pengaturan alat." },
      { issue: "Karakter Simbol Rusak", cause: "Format encoding non-UTF-8.", solution: "Alat kami otomatis mengekspor dalam format UTF-8 standar." },
      { issue: "Tanda Titik pada Milidetik", cause: "Sintaks yang salah untuk format SRT.", solution: "Alat kami otomatis menggunakan tanda koma standar SubRip." },
      { issue: "File Bernama .srt.txt", cause: "Ekstensi ganda yang ditambahkan sistem.", solution: "Ubah nama file dan hapus akhiran .txt." }
    ],
    tipsTitle: "Tips Membuat Subtitle Berkualitas",
    tipsSubtitle: "Standar industri yang direkomendasikan:",
    tips: [
      { title: "Batas 37 hingga 42 Karakter", rule: "Gunakan baris pendek.", why: "Memudahkan penonton membaca cepat di layar HP." },
      { title: "Kecepatan 15–20 CPS", rule: "Sesuaikan durasi tayang.", why: "Membuat teks tidak lewat terlalu cepat." },
      { title: "Maksimal 2 Baris", rule: "Jangan gunakan 3 baris.", why: "Tidak menutupi wajah atau objek video." },
      { title: "Jeda 100ms Antar Blok", rule: "Pertahankan jeda singkat.", why: "Memastikan transisi teks terbaca mulus." },
      { title: "Pecah pada Jeda Alami", rule: "Bagi setelah tanda koma atau kata sambung.", why: "Meningkatkan kenyamanan membaca." }
    ],
    comparisonTitle: "Konverter Otomatis vs Mengetik Manual",
    comparisonSubtitle: "Hemat waktu dengan konversi otomatis:",
    comparisonTable: [
      { factor: "Waktu (Video 10 Menit)", converter: "Kurang dari 5 detik", manual: "45 hingga 60 menit mengetik waktu" },
      { factor: "Risiko Salah Sintaks", converter: "Nol (format tervalidasi)", manual: "Tinggi (koma/baris terlewat)" },
      { factor: "Perhitungan CPS", converter: "Otomatis dan presisi", manual: "Perkiraan manual" },
      { factor: "Pemisahan Baris", converter: "Diformat otomatis", manual: "Menghitung karakter manual" },
      { factor: "Kompatibilitas Editor", converter: "100% langsung bisa diimpor", manual: "Sering ditolak sistem" }
    ],
    comparisonVerdict: "Konverter otomatis menghemat waktu pemformatan agar Anda bisa fokus menyempurnakan video.",
    conclusionTitle: "Ubah Teks Menjadi Subtitle Sekarang",
    conclusionText: [
      "Subtitle meningkatkan jangkauan dan kepuasan penonton video Anda. Gunakan konverter gratis kami untuk membuat file SRT berkualitas.",
      "Coba juga alat bantu subtitle kami lainnya:",
      "• Konverter SRT ke Teks: Ekstrak teks bersih dari file subtitle.",
      "• Konverter SRT ke VTT: Ubah subtitle SRT menjadi WebVTT untuk web HTML5.",
      "• Konverter VTT ke SRT: Ubah file WebVTT menjadi format SubRip universal."
    ]
  },
  tr: {
    introTitle: "TXT Transkriptlerini SRT Altyazılarına Dönüştürme Kılavuzu",
    introSubtitle: "Altyazı formatlama, okuma hızı (CPS) hesaplama, zaman damgası yapılandırma ve video düzenleme rehberi.",
    introText: [
      "Düz bir metin transkriptini veya senaryoyu senkronize bir altyazı dosyasına dönüştürmek modern video üretiminin vazgeçilmez bir parçasıdır. YouTube, TikTok, Instagram Reels, online eğitimler veya film projeleri için video oynatıcılar düz metin yerine zaman kodlu altyazı dosyalarına ihtiyaç duyar.",
      "TXT dosyası sadece metin içerir, zaman bilgisi barındırmaz. SubRip (.srt) dosyası ise metni saat, dakika, saniye ve milisaniye içeren başlangıç-bitiş zaman damgalarıyla bloklara ayırır. Ücretsiz online TXT - SRT dönüştürücümüz, verilerinizi sunuculara yüklemeden doğrudan tarayıcınızda dönüştürür."
    ],
    whatIsTitle: "TXT - SRT Dönüştürücü Nedir?",
    whatIsText: [
      "TXT - SRT dönüştürücü, düz metin belgelerini Premiere Pro, DaVinci Resolve ve Final Cut Pro gibi video düzenleme yazılımlarıyla uyumlu SubRip (.srt) formatına dönüştüren bir araçtır.",
      "Video düzenleyiciler ve platformlar düz .txt dosyalarını altyazı olarak oynatamaz. Dönüştürücü, metninizi okunabilir satırlara böler, insan okuma hızına göre süre hesaplar ve standart SRT sözdizimini uygular."
    ],
    whatIsComparison: [
      { feature: "Amaç", txt: "Biçimlendirilmemiş metin (notlar, senaryolar)", srt: "Zaman kodlu senkronize video altyazısı" },
      { feature: "Zaman Bilgisi", txt: "Yok (yalnızca metin)", srt: "Milisaniye hassasiyetli zaman damgaları (00:00:00,000)" },
      { feature: "Yapı", txt: "Serbest paragraflar", srt: "4 parçalı blok: Sıra no, zaman damgası, metin, boş satır" },
      { feature: "Uyumluluk", txt: "Altyazı parçası olarak yüklenemez", srt: "YouTube, VLC, Premiere, DaVinci ile tam uyumlu" },
      { feature: "Okuma Hızı", txt: "Hız kontrolü yok", srt: "Saniyedeki karakter sayısına (CPS) göre optimize" }
    ],
    howToTitle: "3 Adımda TXT Dosyasını SRT'ye Dönüştürme",
    howToSubtitle: "Herhangi bir metin dosyasını saniyeler içinde kullanıma hazır bir SRT altyazısına dönüştürün.",
    howToSteps: [
      { step: "1", title: "Metni Yapıştırın veya Dosya Yükleyin", description: "Transkriptinizi yukarıdaki kutuya yapıştırın veya .txt dosyasını sürükleyip bırakın." },
      { step: "2", title: "Bölme ve Hız Ayarlarını Yapın", description: "Cümle bazlı bölmeyi seçin, okuma hızını (15–20 CPS) ve satır başı karakter sınırını (37–42) belirleyin." },
      { step: "3", title: "Önizleyin ve .SRT İndirin", description: "Canlı önizlemede altyazıları kontrol edin ve 'SRT İndir' butonuna tıklayın." }
    ],
    howItWorksTitle: "TXT - SRT Dönüştürme Nasıl Çalışır?",
    howItWorksText: [
      "Algoritmamız metindeki noktalama işaretlerini analiz eder, rahat bir okuma süresi hesaplar ve SubRip standardında bloklar oluşturur.",
      "İşlem aşamaları:"
    ],
    howItWorksBullets: [
      { title: "1. Akıllı Noktalama Bölmesi", description: "Uzun paragrafları nokta, virgül ve satır sonlarında doğal cümle bloklarına ayırır." },
      { title: "2. CPS Süre Hesaplaması", description: "Ortalama okuma hızına (saniyede 15-20 karakter) göre ekranda kalma süresini belirler." },
      { title: "3. 100ms Blok Aralığı", description: "Altyazıların oynatıcıda kusursuz yenilenmesi için araya 100 milisaniyelik boşluk ekler." },
      { title: "4. Standart SubRip Formatı", description: "Milisaniyeler için virgül kullanan hh:mm:ss,ms zaman formatı ve sıra numaraları oluşturur." }
    ],
    exampleTitle: "TXT - SRT Dönüşüm Örneği",
    exampleIntro: "Düz metnin nasıl yapılandırılmış bir SRT dosyasına dönüştüğünü inceleyin:",
    exampleTxtInput: `Video prodüksiyon eğitimimize hoş geldiniz. Bugün altyazıların izleyici bağlılığını nasıl artırdığını öğreneceğiz. Altyazılar içeriğinizi tüm dünyadaki izleyiciler için erişilebilir kılar.`,
    exampleSrtOutput: `1
00:00:01,000 --> 00:00:04,100
Video prodüksiyon eğitimimize
hoş geldiniz.

2
00:00:04,200 --> 00:00:08,300
Bugün altyazıların izleyici bağlılığını
nasıl artırdığını öğreneceğiz.

3
00:00:08,400 --> 00:00:12,600
Altyazılar içeriğinizi tüm dünyadaki
izleyiciler için erişilebilir kılar.`,
    exampleExplanation: "Düz metin, hesaplanmış süreler ve dengeli satırlarla 3 adet numaralandırılmış altyazı bloğuna dönüştürüldü.",
    srtFormatTitle: "SubRip (.SRT) Format Yapısını Anlama",
    srtFormatIntro: "Bir SRT dosyasındaki her altyazı bloğu 4 temel bileşenden oluşur:",
    srtFormatElements: [
      { num: "1", name: "Sıra Numarası", detail: "Her altyazı için artan tamsayı indeksi (1, 2, 3...)." },
      { num: "2", name: "Zaman Aralığı", detail: "Milisaniyeler için virgül kullanılan ve ' --> ' ile ayrılan hh:mm:ss,ms zaman formatı." },
      { num: "3", name: "Altyazı Metni", detail: "Satır başına 37-42 karakter içeren 1 veya 2 satırlık metin." },
      { num: "4", name: "Boş Satır", detail: "Bir sonraki bloğa geçişi belirten zorunlu boş satır." }
    ],
    srtTimestampFormula: "00:01:23,456 --> 00:01:27,890",
    srtTimestampExplanation: "Not: SRT formatı milisaniyeler için virgül kullanır. HTML5 video oynatıcılar için WebVTT formatına ihtiyacınız varsa SRT - VTT Dönüştürücümüzü kullanabilirsiniz.",
    useCasesTitle: "Ne Zaman TXT Dosyasını SRT'ye Dönüştürmelisiniz?",
    useCasesSubtitle: "Altyazı dönüştürme şu alanlarda kritik öneme sahiptir:",
    useCases: [
      { title: "YouTube ve Sosyal Medya Üreticileri", description: "Videoların %75'inden fazlası sessiz izlenir. Altyazı eklemek izlenme süresini ve etkileşimi artırır." },
      { title: "Online Eğitim ve E-Öğrenme", description: "Eğitimlerin işitme engelliler ve yabancı öğrenciler için erişilebilir olmasını sağlar." },
      { title: "Podcast ve Ses Kayıtları", description: "Ses transkriptlerini altyazılı video kliplere dönüştürür." },
      { title: "Profesyonel Video Kurgucuları", description: "Seslendirme metinlerini doğrudan Premiere veya DaVinci zaman çizgisine aktarmayı sağlar." },
      { title: "Çeviri ve Yerelleştirme", description: "Düz metin çevirilerini hızlıca altyazı parçalarına dönüştürür." }
    ],
    noSoftwareTitle: "Program İndirmeden Online TXT - SRT Dönüştürme",
    noSoftwareText: [
      "Aracımız bilgisayarınıza ek bir program yüklemeden tamamen web tarayıcınızda çalışır.",
      "Temel avantajlar:"
    ],
    noSoftwareBenefits: [
      { title: "%100 Tarayıcı İçi Gizlilik", description: "Metinleriniz hiçbir sunucuya yüklenmez, verileriniz güvende kalır." },
      { title: "Kurulum Gerektirmez", description: "Chrome, Safari, Edge veya Firefox üzerinden anında kullanın." },
      { title: "Tüm Cihazlarla Uyumlu", description: "Mac, Windows, Linux, Android ve iOS üzerinde sorunsuz çalışır." },
      { title: "Tamamen Ücretsiz", description: "Dosya sınırlaması veya filigran olmadan dönüştürün." }
    ],
    macGuideTitle: "Mac'te TXT Dosyasını SRT'ye Dönüştürme (macOS Rehberi)",
    macGuideText: [
      "Mac'te TextEdit uygulaması dosyaları zengin metin (.rtf) olarak kaydedebilir ve SRT yapısını bozabilir.",
      "Mac kullanıcıları için en güvenli yöntem online aracımızı kullanmaktır:"
    ],
    macSteps: [
      { step: "1", title: "Safari veya Chrome'da Açın", description: "Mac'inizden SRTConverters.com adresine gidin." },
      { step: "2", title: "Metninizi Yapıştırın", description: "Notlar veya Pages'daki metninizi araca yapıştırın." },
      { step: "3", title: ".SRT Dosyasını İndirin", description: "Final Cut Pro veya Premiere için UTF-8 formatında hazır dosyanızı indirin." }
    ],
    troubleshootingTitle: "Sık Karşılaşılan Sorunlar ve Çözümleri",
    troubleshootingSubtitle: "Olası hataların önüne geçin:",
    problems: [
      { issue: "Ses ile Senkron Kayması", cause: "Düz metin gerçek konuşma süresi bilgisi içermez.", solution: "Oluşturulan SRT dosyasını video kurgu programınızda ses dalgalarına göre hafifçe kaydırarak hizalayın." },
      { issue: "Mobilde Taşma Yapan Uzun Satırlar", cause: "Satırın 42 karakteri aşması.", solution: "Ayar panelinden satır sınırını 37–40 karaktere çekin." },
      { issue: "Bozuk Türkçe Karakterler (ç, ğ, ı, ö, ş, ü)", cause: "ANSI kodlaması kullanımı.", solution: "Aracımız dosyaları otomatik olarak UTF-8 formatında dışa aktarır." },
      { issue: "Milisaniyede Nokta Kullanılması", cause: "SRT standardına uymayan sözdizimi.", solution: "Aracımız otomatik olarak SubRip virgül formatı uygular." },
      { issue: "Dosyanın .srt.txt Olarak Kaydedilmesi", cause: "İşletim sisteminin çift uzantı eklemesi.", solution: "Dosyayı yeniden adlandırıp sondaki .txt uzantısını silin." }
    ],
    tipsTitle: "Profesyonel Altyazı Tavsiyeleri",
    tipsSubtitle: "Yayıncılık standartlarına uygun ipuçları:",
    tips: [
      { title: "Satır Başına 37–42 Karakter Kuralı", rule: "Satırları kısa tutun.", why: "Mobil ekranlarda kolayca okunmasını sağlar." },
      { title: "15–20 CPS Okuma Hızı", rule: "Ekranda kalma süresini dengeleyin.", why: "Metnin çok hızlı kaybolmasını önler." },
      { title: "En Fazla 2 Satır", rule: "Asla 3 satır kullanmayın.", why: "Görüntüyü kapatmaz ve gözü yormaz." },
      { title: "Bloklar Arası 100ms Boşluk", rule: "Kısa aralık bırakın.", why: "Oynatıcıların altyazıyı sorunsuz yenilemesini sağlar." },
      { title: "Doğal Cümle Bölmeleri", rule: "Virgül ve bağlaçlardan sonra bölün.", why: "Okuma akıcılığını ve anlama kolaylığını artırır." }
    ],
    comparisonTitle: "Otomatik Dönüştürücü ve Manuel Yazım Karşılaştırması",
    comparisonSubtitle: "Otomasyonun sağladığı zaman tasarrufu:",
    comparisonTable: [
      { factor: "Süre (10 dk Video)", converter: "5 saniyeden az", manual: "45-60 dakika elle yazım" },
      { factor: "Hata Riski", converter: "Sıfır (doğrulanmış sözdizimi)", manual: "Yüksek (virgül/satır hataları)" },
      { factor: "CPS Hesaplama", converter: "Otomatik ve hassas", manual: "Kronometre ile tahmini" },
      { factor: "Satır Bölme", converter: "Otomatik karakter kontrolü", manual: "Elle harf sayımı" },
      { factor: "Kurgu Programı Uyumu", converter: "%100 uyumlu", manual: "Sıkça içe aktarma hatası" }
    ],
    comparisonVerdict: "Otomatik dönüştürücü angarya işleri halleder, size sadece videonuza göre ince ayar yapmak kalır.",
    conclusionTitle: "Metinlerinizi Hemen Altyazıya Dönüştürün",
    conclusionText: [
      "Altyazılar videolarınızın izlenme oranını ve erişilebilirliğini artırır. Ücretsiz aracımızla saniyeler içinde kaliteli SRT dosyaları oluşturun.",
      "Diğer yardımcı altyazı araçlarımızı keşfedin:",
      "• SRT - Metin Dönüştürücü: Altyazı dosyalarından zaman kodlarını temizleyip düz metin çıkarın.",
      "• SRT - VTT Dönüştürücü: Altyazıları HTML5 web video standardı WebVTT formatına dönüştürün.",
      "• VTT - SRT Dönüştürücü: WebVTT dosyalarını evrensel SubRip formatına çevirin."
    ]
  },
  it: {
    introTitle: "Guida Completa per Convertire Trascrizioni TXT in Sottotitoli SRT",
    introSubtitle: "Tutto su formattazione dei sottotitoli, velocità di lettura (CPS), timestamp e montaggio video.",
    introText: [
      "Trasformare una trascrizione di testo o una sceneggiatura in un file di sottotitoli sincronizzato è essenziale nella produzione video moderna. Che si tratti di video per YouTube, TikTok, Instagram Reels, corsi online o produzioni cinematografiche, i lettori video richiedono file di sottotitoli strutturati anziché testo normale.",
      "Un file TXT memorizza semplicemente testo senza riferimenti temporali. Un file SubRip (.srt), invece, organizza il testo in blocchi numerati sequenzialmente con timestamp precisi (ore, minuti, secondi e millisecondi). Il nostro convertitore online gratuito da TXT a SRT esegue questa conversione direttamente nel browser in totale privacy."
    ],
    whatIsTitle: "Cos'è un Convertitore da TXT a SRT?",
    whatIsText: [
      "Un convertitore da TXT a SRT è uno strumento che trasforma testi non strutturati in file di sottotitoli SubRip (.srt) compatibili con programmi di montaggio come Premiere Pro, DaVinci Resolve e Final Cut Pro.",
      "Le piattaforme video non possono leggere direttamente file .txt come sottotitoli sincronizzati. Il convertitore suddivide il testo in blocchi leggibili, calcola la durata ottimale in base alla velocità di lettura umana e applica la corretta sintassi SubRip."
    ],
    whatIsComparison: [
      { feature: "Scopo", txt: "Testo semplice non strutturato (note, copioni)", srt: "Sottotitoli sincronizzati con il tempo per video" },
      { feature: "Timestamp", txt: "Nessuno (solo testo)", srt: "Timestamp precisi al millisecondo (00:00:00,000)" },
      { feature: "Struttura", txt: "Paragrafi liberi", srt: "Blocchi di 4 parti: Numero, timestamp, testo, riga vuota" },
      { feature: "Compatibilità", txt: "Inutilizzabile come traccia sottotitoli", srt: "Compatibile con YouTube, VLC, Premiere, DaVinci" },
      { feature: "Velocità di Lettura", txt: "Nessun controllo del ritmo", srt: "Ottimizzato in caratteri al secondo (CPS)" }
    ],
    howToTitle: "Come Convertire TXT in SRT Online in 3 Passaggi",
    howToSubtitle: "Converti qualsiasi file di testo in un file di sottotitoli SRT pronto all'uso in pochi secondi.",
    howToSteps: [
      { step: "1", title: "Incolla il Testo o Carica il File", description: "Inserisci la tua trascrizione nel riquadro in alto o trascina un file .txt dal tuo computer o smartphone." },
      { step: "2", title: "Configura Divisione e Velocità", description: "Scegli la divisione per frasi, imposta la velocità di lettura (15–20 CPS) e il limite di caratteri per riga (37–42)." },
      { step: "3", title: "Anteprima e Scarica il File .SRT", description: "Controlla il risultato nell'anteprima in tempo reale e clicca su 'Scarica .SRT' per salvare il file." }
    ],
    howItWorksTitle: "Come Funziona la Conversione da TXT a SRT?",
    howItWorksText: [
      "Il nostro motore analizza la punteggiatura del testo, calcola una durata di visualizzazione confortevole e struttura i blocchi secondo lo standard SubRip.",
      "Ecco i passaggi principali:"
    ],
    howItWorksBullets: [
      { title: "1. Suddivisione Intelligente della Punteggiatura", description: "Divide i paragrafi in corrispondenza di punti, virgole e a capo per mantenere frasi fluide." },
      { title: "2. Calcolo dei Tempi CPS", description: "Calcola la permanenza a schermo in base alla velocità di lettura media (da 15 a 20 caratteri al secondo)." },
      { title: "3. Intervallo di 100ms tra i Blocchi", description: "Inserisce una pausa di 100 millisecondi per garantire una transizione pulita nel player." },
      { title: "4. Formattazione SubRip Standard", description: "Genera timestamp nel formato hh:mm:ss,ms con virgole per i millisecondi e numerazione sequenziale." }
    ],
    exampleTitle: "Esempio di Conversione da TXT a SRT",
    exampleIntro: "Ecco come un testo semplice si trasforma in un file di sottotitoli SRT strutturato:",
    exampleTxtInput: `Benvenuti al nostro tutorial di produzione video. Oggi scopriremo come i sottotitoli aumentano il coinvolgimento del pubblico. I sottotitoli rendono i tuoi contenuti accessibili a spettatori di tutto il mondo.`,
    exampleSrtOutput: `1
00:00:01,000 --> 00:00:04,100
Benvenuti al nostro tutorial
di produzione video.

2
00:00:04,200 --> 00:00:08,300
Oggi scopriremo come i sottotitoli
aumentano il coinvolgimento del pubblico.

3
00:00:08,400 --> 00:00:12,600
I sottotitoli rendono i tuoi contenuti
accessibili a spettatori di tutto il mondo.`,
    exampleExplanation: "Il testo è stato suddiviso in 3 blocchi numerati con durate calcolate e righe perfettamente bilanciate.",
    srtFormatTitle: "Comprendere la Struttura del Formato SubRip (.SRT)",
    srtFormatIntro: "Ogni blocco di sottotitolo in un file SRT è composto da quattro elementi fondamentali:",
    srtFormatElements: [
      { num: "1", name: "Numero di Sequenza", detail: "Numero progressivo (1, 2, 3...) per ogni blocco di sottotitolo." },
      { num: "2", name: "Intervallo Temporale", detail: "Timestamp nel formato hh:mm:ss,ms separati da ' --> ' con virgole per i millisecondi." },
      { num: "3", name: "Testo del Sottotitolo", detail: "1 o 2 righe di testo con 37-42 caratteri per riga per una lettura ottimale." },
      { num: "4", name: "Riga Vuota", detail: "Spazio vuoto obbligatorio che separa ciascun blocco dal successivo." }
    ],
    srtTimestampFormula: "00:01:23,456 --> 00:01:27,890",
    srtTimestampExplanation: "Nota: Lo standard SRT richiede le virgole per i millisecondi. Se necessiti del formato WebVTT con punti per player web HTML5, usa il nostro Convertitore da SRT a VTT.",
    useCasesTitle: "Quando Convertire TXT in SRT? Casi d'Uso",
    useCasesSubtitle: "La conversione da testo a sottotitoli è indispensabile per:",
    useCases: [
      { title: "Creator di YouTube e Social Media", description: "Oltre il 75% dei video sui social viene guardato senza audio. I sottotitoli aumentano la permanenza visiva." },
      { title: "Corsi Online ed E-Learning", description: "Garantisce l'accessibilità a studenti non madrelingua e persone con disabilità uditive." },
      { title: "Podcast e Interviste", description: "Trasforma trascrizioni audio in clip video accattivanti con sottotitoli sincronizzati." },
      { title: "Montatori Video Professionisti", description: "Importa testi di speakeraggio direttamente nella timeline di Premiere o DaVinci Resolve." },
      { title: "Traduzione e Localizzazione", description: "Genera sottotitoli multilingua a partire da traduzioni testuali." }
    ],
    noSoftwareTitle: "Converti TXT in SRT Online Senza Installare Programmi",
    noSoftwareText: [
      "Il nostro strumento funziona interamente nel browser web senza dover scaricare software pesanti.",
      "I principali vantaggi:"
    ],
    noSoftwareBenefits: [
      { title: "100% Privacy nel Browser", description: "I tuoi testi non vengono inviati a server esterni e rimangono sul tuo dispositivo." },
      { title: "Nessuna Installazione", description: "Utilizzabile all'istante su Chrome, Safari, Edge e Firefox." },
      { title: "Compatibilità Totale", description: "Funziona perfettamente su Mac, Windows, Linux, Android e iOS." },
      { title: "Completamente Gratuito", description: "Nessun limite di file o filigrana." }
    ],
    macGuideTitle: "Come Convertire TXT in SRT su Mac (Guida macOS)",
    macGuideText: [
      "Su Mac, l'app TextEdit salva spesso i file in formato RTF o inserisce virgolette tipografiche che corrodono la sintassi SRT.",
      "La nostra piattaforma web rappresenta la soluzione più sicura per utenti macOS:"
    ],
    macSteps: [
      { step: "1", title: "Apri lo Strumento in Safari o Chrome", description: "Accedi a SRTConverters.com dal tuo Mac." },
      { step: "2", title: "Incolla il Testo", description: "Copia il testo da Note o Pages e incollalo nel convertitore." },
      { step: "3", title: "Scarica il File .SRT", description: "Salva il file UTF-8 pronto per Final Cut Pro o Premiere." }
    ],
    troubleshootingTitle: "Problemi Comuni e Soluzioni",
    troubleshootingSubtitle: "Come evitare gli errori più diffusi:",
    problems: [
      { issue: "Disallineamento con l'Audio", cause: "Il testo non contiene informazioni temporali sulla voce reale.", solution: "Usa il file SRT generato come base e sincronizza i blocchi nel software di montaggio." },
      { issue: "Righe Troppo Lunghe su Mobile", cause: "Righe che superano i 42 caratteri.", solution: "Imposta il limite a 37–40 caratteri nelle opzioni del convertitore." },
      { issue: "Caratteri Accentuati Danneggiati (à, è, é, ì, ò, ù)", cause: "Codifica ANSI anziché UTF-8.", solution: "Il nostro convertitore esporta automaticamente in formato UTF-8 standard." },
      { issue: "Punti anziché Virgole nei Millisecondi", cause: "Sintassi non compatibile con lo standard SRT.", solution: "Il nostro strumento applica automaticamente le virgole SubRip." },
      { issue: "File Salvato come .srt.txt", cause: "Estensione duplicata aggiunta dal sistema operativo.", solution: "Rinomina il file rimuovendo l'estensione .txt finale." }
    ],
    tipsTitle: "Consigli per Sottotitoli Professionali",
    tipsSubtitle: "Buone pratiche del settore audiovisivo:",
    tips: [
      { title: "Regola dei 37–42 Caratteri per Riga", rule: "Usa righe corte.", why: "Facilita la lettura rapida sugli schermi degli smartphone." },
      { title: "Velocità di 15–20 CPS", rule: "Bilancia il tempo di permanenza.", why: "Evita che il testo scompaia troppo velocemente." },
      { title: "Massimo 2 Righe per Blocco", rule: "Non usare mai 3 righe.", why: "Non copre le immagini o i volti nel video." },
      { title: "Pausa di 100ms tra i Blocchi", rule: "Mantieni l'intervallo.", why: "Garantisce una transizione pulita nei lettori video." },
      { title: "Tagli su Pause Grammaticali Naturali", rule: "Spezza dopo virgole e congiunzioni.", why: "Migliora nettamente la comprensione del testo." }
    ],
    comparisonTitle: "Convertitore Automatico vs Creazione Manuale",
    comparisonSubtitle: "Perché l'automazione fa risparmiare tempo prezioso:",
    comparisonTable: [
      { factor: "Tempo (Video di 10 min)", converter: "Meno di 5 secondi", manual: "45-60 minuti di digitazione manuale" },
      { factor: "Rischio Errori di Sintassi", converter: "Zero (sintassi validata)", manual: "Alto (virgole o righe omesse)" },
      { factor: "Calcolo CPS", converter: "Calcolo matematico automatico", manual: "Stima a occhio con cronometro" },
      { factor: "A Capo Automatico", converter: "Formattazione automatica", manual: "Conteggio manuale delle lettere" },
      { factor: "Import nel Programma di Montaggio", converter: "100% compatibile", manual: "Frequenti errori di importazione" }
    ],
    comparisonVerdict: "Il convertitore automatico elimina il lavoro noioso di formattazione, lasciandoti solo l'eventuale rifinitura nel montaggio.",
    conclusionTitle: "Converti i Tuoi Testi in Sottotitoli Ora",
    conclusionText: [
      "I sottotitoli aumentano la portata e l'accessibilità dei tuoi video. Usa il nostro convertitore gratuito per creare file SRT professionali in pochi istanti.",
      "Scopri anche gli altri nostri strumenti utili:",
      "• Convertitore da SRT a Testo: Estrai testo pulito dai tuoi file di sottotitoli.",
      "• Convertitore da SRT a VTT: Trasforma i sottotitoli nel formato WebVTT per video web HTML5.",
      "• Convertitore da VTT a SRT: Converti file WebVTT nel formato universale SubRip."
    ]
  }
};

export function getTxtToSrtGuideContent(locale: Locale): TxtToSrtGuideContent {
  return TXT_TO_SRT_GUIDE[locale] || TXT_TO_SRT_GUIDE.en;
}
