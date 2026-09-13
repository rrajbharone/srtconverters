import type { Locale } from './config';

export interface SbvToSrtGuideContent {
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
    sbv: string;
    srt: string;
  }[];

  youtubeWorkflowTitle: string;
  youtubeWorkflowSubtitle: string;
  youtubeWorkflowSteps: {
    step: string;
    title: string;
    description: string;
  }[];

  architectureTitle: string;
  architectureSubtitle: string;
  architectureText: string[];

  exampleTitle: string;
  exampleIntro: string;
  exampleSbvInput: string;
  exampleSrtOutput: string;
  exampleExplanation: string;

  htmlEntitiesTitle: string;
  htmlEntitiesSubtitle: string;
  htmlEntitiesTable: {
    entity: string;
    decoded: string;
    description: string;
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

  conclusionTitle: string;
  conclusionText: string[];
}

export const SBV_TO_SRT_GUIDES: Record<Locale, SbvToSrtGuideContent> = {
  "en": {
    "introTitle": "The Complete Guide to Converting SBV to SRT Subtitles",
    "introSubtitle": "Master the conversion from YouTube SubViewer (.sbv) captions to universally compatible SubRip (.srt) subtitles. Learn how timestamp syntax differs, how to cleanly decode HTML entities, and how to seamlessly import YouTube captions into Premiere Pro, DaVinci Resolve, Final Cut Pro, and VLC.",
    "introText": [
      "YouTube is the world's largest video streaming platform, hosting billions of hours of content watched by global audiences daily. For video creators, educators, and enterprise media teams, captions and subtitles are essential for accessibility, international SEO, and viewer engagement. When you create or automatically transcribe captions inside YouTube Studio and choose to download them, YouTube provides a subtitle file with the .sbv file extension—commonly known as the YouTube SubViewer format.",
      "However, once you attempt to use that downloaded .sbv file outside of YouTube—whether importing it into video editing software like Adobe Premiere Pro, DaVinci Resolve, or Final Cut Pro, loading it into media players like VLC or Plex, or uploading it to other platforms like Vimeo, Facebook, or LinkedIn—you will quickly discover that almost none of these applications support the .sbv format. The undisputed, universal standard for subtitle exchange across the entire digital media industry is SubRip (.srt).",
      "Converting SBV to SRT bridges this technical gap. While both are plain-text formats containing dialogue text and timestamps, they differ fundamentally in their timestamp formatting, cue numbering structure, delimiter conventions, and HTML character encoding. This technical guide covers everything you need to know about the SBV format, the mathematical and structural mechanics of converting SBV to SRT, how to resolve common issues like encoded HTML entities and sound descriptors, and how to achieve seamless subtitle interoperability across all your video workflows."
    ],
    "whatIsTitle": "What is an SBV File? Understanding YouTube's SubViewer Format",
    "whatIsText": [
      "An SBV (.sbv) file is a lightweight, plain-text subtitle format created by Google specifically for managing captions within YouTube. The acronym stands for 'SubViewer', reflecting its lineage as a streamlined variant of David Vignoni's original SubViewer 2.0 format. Unlike SubViewer 2.0, which included metadata headers ([INFORMATION]) and [br] tags, YouTube's SBV format is radically simplified.",
      "In an SBV file, every subtitle cue consists of a single timestamp line followed immediately by one or more lines of dialogue text, with blank lines separating adjacent cues. The timestamp line defines both the start time and end time separated by a single comma: 'H:MM:SS.mmm,H:MM:SS.mmm'. Noticeable characteristics of SBV include the omission of sequential cue index numbers, the use of a decimal period before milliseconds, and the frequent use of a single-digit hour (such as '0:01:23.450').",
      "SubRip (.srt), in contrast, was created in the late 1990s as part of Brain's DVD ripping software and has since become the universally recognized standard for external video subtitles. An SRT file enforces a strict four-part structure for every cue: an incremental numeric index (1, 2, 3...), a timestamp line formatted with two-digit hours and commas before milliseconds joined by an arrow delimiter ('00:01:23,450 --> 00:01:28,900'), one or more dialogue lines, and a blank terminating line. Because virtually every media player, Smart TV, smartphone operating system, and NLE editor natively parses SRT, converting SBV to SRT is a standard daily task for modern video producers."
    ],
    "whyConvertTitle": "Why Convert YouTube SBV Subtitles to SRT?",
    "whyConvertSubtitle": "Discover the critical workflow advantages of converting YouTube captions into industry-standard SubRip (.srt) files.",
    "whyConvertReasons": [
      {
        "title": "Universal Video Editor Compatibility",
        "description": "Professional editing suites such as Adobe Premiere Pro, DaVinci Resolve, Apple Final Cut Pro, Avid Media Composer, and CapCut do not accept .sbv files. Converting to .srt allows you to import captions directly onto your timeline as editable subtitle tracks."
      },
      {
        "title": "Cross-Platform Social Media Publishing",
        "description": "When repurposing YouTube videos for LinkedIn, Facebook, Twitter/X, or Vimeo, those platforms strictly require .srt caption uploads. Converting your YouTube .sbv export gives you instant multi-platform readiness."
      },
      {
        "title": "Full Media Player & Smart TV Support",
        "description": "Standalone media players (VLC, MPC-HC, IINA, MPV) and Smart TVs (Samsung Tizen, LG webOS, Android TV, Apple TV) natively render .srt subtitles alongside MP4 and MKV video files, whereas .sbv files are ignored or rejected."
      },
      {
        "title": "Elimination of Ugly HTML Code Artifacts",
        "description": "YouTube caption exports frequently encode punctuation as raw HTML entities like '&amp;' for ampersands, '&#39;' for apostrophes, and '&quot;' for quotation marks. A proper SBV to SRT conversion decodes these into clean, human-readable text."
      },
      {
        "title": "Easy Archiving & Translation Workflows",
        "description": "Professional translation agencies, localization tools, and translation management systems (CAT tools like Trados, MemoQ, or Smartcat) expect SRT or VTT files, making SRT the ideal interchange format for multilingual localization."
      }
    ],
    "howToTitle": "How to Convert SBV to SRT Online (Step-by-Step)",
    "howToSubtitle": "Follow these simple steps to transform your YouTube captions into perfectly formatted SubRip .srt files in seconds.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Export Captions from YouTube Studio",
        "description": "Navigate to YouTube Studio > Subtitles, select your video, click the three-dots Options menu next to your caption track, and choose Download > .sbv."
      },
      {
        "step": "2",
        "title": "Upload or Paste into the Converter",
        "description": "Drag and drop your 'captions.sbv' file into the converter upload area above, or open the file in Notepad/TextEdit and paste the text directly."
      },
      {
        "step": "3",
        "title": "Select Cleaning & Formatting Options",
        "description": "Enable 'Decode HTML Entities' to automatically turn codes like &amp; and &#39; into real punctuation, and optionally toggle 'Remove Sound Descriptors' to strip [Music] and [Applause] cues."
      },
      {
        "step": "4",
        "title": "Download Standard .SRT",
        "description": "Click 'Download .SRT' to immediately save your valid SubRip file, ready to drop into Premiere Pro, DaVinci Resolve, VLC, or any video platform."
      }
    ],
    "differenceTitle": "Technical Comparison: SBV vs. SRT Format Architecture",
    "differenceSubtitle": "Understand the structural, syntactical, and compatibility differences between YouTube SubViewer and SubRip subtitles.",
    "differenceTable": [
      {
        "feature": "Primary Developer / Origin",
        "sbv": "Google / YouTube (SubViewer variant)",
        "srt": "Brain / SubRip DVD Ripping Project"
      },
      {
        "feature": "File Extension",
        "sbv": ".sbv (sometimes .sub)",
        "srt": ".srt"
      },
      {
        "feature": "Cue Counter / Index Numbers",
        "sbv": "None (starts directly with timecodes)",
        "srt": "Mandatory integer sequence (1, 2, 3...)"
      },
      {
        "feature": "Timestamp Delimiter",
        "sbv": "Single comma without spaces (',')",
        "srt": "Arrow with spaces (' --> ')"
      },
      {
        "feature": "Millisecond Separator",
        "sbv": "Decimal point / period ('.')",
        "srt": "Comma (',') per French/European standard"
      },
      {
        "feature": "Hour Notation",
        "sbv": "Often single digit ('0:01:23.450')",
        "srt": "Strictly two digits ('00:01:23,450')"
      },
      {
        "feature": "HTML Entity Encoding",
        "sbv": "Commonly encoded (&amp;, &#39;, &quot;)",
        "srt": "Plain UTF-8 text or basic tags (<i>, <b>)"
      },
      {
        "feature": "Software Compatibility",
        "sbv": "YouTube Studio only",
        "srt": "Universal (Premiere, Resolve, VLC, TVs, Web)"
      }
    ],
    "youtubeWorkflowTitle": "How to Download SBV Captions from YouTube Studio",
    "youtubeWorkflowSubtitle": "Step-by-step walkthrough to extract automatic or manually edited captions directly from your YouTube account.",
    "youtubeWorkflowSteps": [
      {
        "step": "1",
        "title": "Open YouTube Studio",
        "description": "Log into your creator account at studio.youtube.com and ensure you are in the channel dashboard that owns the target video."
      },
      {
        "step": "2",
        "title": "Access the Subtitles Menu",
        "description": "In the left-hand navigation sidebar, click on 'Subtitles' to view a list of all uploaded videos with their associated caption languages."
      },
      {
        "step": "3",
        "title": "Select Your Video",
        "description": "Click on the thumbnail or title of the video whose captions you wish to retrieve. This opens the video subtitles detail page."
      },
      {
        "step": "4",
        "title": "Locate the Target Caption Track",
        "description": "You will see published tracks (such as 'English (Automatic)' or manually uploaded languages). Hover over the track you want to download."
      },
      {
        "step": "5",
        "title": "Download the .sbv File",
        "description": "Click the three vertical dots (Options) on the right side of the track, click 'Download', and select '.sbv'. The file will save to your Downloads folder."
      }
    ],
    "architectureTitle": "Timestamp Architecture: How SBV Converts to SRT",
    "architectureSubtitle": "A deep dive into the mathematical and syntactical transformation applied to subtitle timecodes.",
    "architectureText": [
      "The core of any subtitle format conversion is timecode transformation. Because both SBV and SRT are time-based (unlike frame-based formats like MicroDVD), the underlying temporal points are identical, but their syntactical representations differ dramatically.",
      "In an SBV file, timestamps follow the pattern: 'H:MM:SS.mmm,H:MM:SS.mmm'. For instance, a cue starting at 1 minute, 23 seconds, and 450 milliseconds and ending at 1 minute, 27 seconds, and 800 milliseconds is represented as '0:01:23.450,0:01:27.800'. Notice three distinct structural attributes: the hour component has only one digit ('0:'), milliseconds are preceded by a decimal point ('.'), and the start and end times are glued together by a single comma with no surrounding whitespace.",
      "To convert this into valid SubRip SRT syntax, four distinct transformations must take place: First, an incremental sequence number ('1') must be generated and prepended above the cue. Second, the single-digit hour ('0:') must be left-padded with a leading zero to satisfy the strict two-digit SRT requirement ('00:'). Third, the decimal period preceding the millisecond fraction must be replaced with a comma (',') per the French convention defined in Brain's original SubRip specification. Finally, the solitary comma connecting the two timestamps must be replaced with the standard arrow delimiter surrounded by spaces (' --> '). The resulting line becomes '00:01:23,450 --> 00:01:27,800'."
    ],
    "exampleTitle": "Concrete Example: Before and After Conversion",
    "exampleIntro": "Compare the raw YouTube SBV input with the clean, standardized SubRip SRT output generated by our converter:",
    "exampleSbvInput": "0:00:01.200,0:00:04.850\nWelcome to our tutorial on &quot;Video Editing&quot;!\n\n0:00:05.100,0:00:09.300\n[Music]\nToday we&#39;re exploring color grading &amp; audio mixing.",
    "exampleSrtOutput": "1\n00:00:01,200 --> 00:00:04,850\nWelcome to our tutorial on \"Video Editing\"!\n\n2\n00:00:05,100 --> 00:00:09,300\nToday we're exploring color grading & audio mixing.",
    "exampleExplanation": "In this example, three critical improvements occurred: (1) Cue numbers 1 and 2 were added above each block. (2) Timestamps were converted to two-digit hours with arrow delimiters (' --> ') and comma millisecond separators. (3) HTML entities &quot;, &#39;, and &amp; were safely decoded into standard typographic quotes, apostrophes, and ampersands, while the [Music] sound descriptor was filtered out.",
    "htmlEntitiesTitle": "Handling YouTube HTML Entities: Common Codes and Solutions",
    "htmlEntitiesSubtitle": "Why YouTube captions contain raw HTML entities and how our converter ensures clean punctuation.",
    "htmlEntitiesTable": [
      {
        "entity": "&amp;",
        "decoded": "&",
        "description": "Ampersand sign. Common in company names (AT&T), titles, and casual dialogue."
      },
      {
        "entity": "&#39; or &apos;",
        "decoded": "'",
        "description": "Single quote or apostrophe. Essential for English contractions (don't, it's, we're)."
      },
      {
        "entity": "&quot;",
        "decoded": "\"",
        "description": "Double quotation mark. Used for spoken quotes, titles, and emphasized terms."
      },
      {
        "entity": "&lt;",
        "decoded": "<",
        "description": "Less-than sign. Occasionally used in mathematical explanations or coding tutorials."
      },
      {
        "entity": "&gt;",
        "decoded": ">",
        "description": "Greater-than sign. Used in mathematical discussions or speaker indicators (>>)."
      },
      {
        "entity": "&nbsp;",
        "decoded": " (space)",
        "description": "Non-breaking space. Used by web browsers to prevent awkward line breaks."
      }
    ],
    "ffmpegTitle": "Command-Line Conversion: Converting SBV to SRT with FFmpeg",
    "ffmpegSubtitle": "How to automate SBV to SRT batch conversion using command-line tools for developer pipelines.",
    "ffmpegCommand": "ffmpeg -i captions.sbv -c:s srt output.srt",
    "ffmpegExplanation": [
      "For developers and media engineers automating subtitle ingestion pipelines across hundreds of YouTube videos, FFmpeg provides native subtitle demuxing and transcoding capabilities. The command above reads the input .sbv file, invokes FFmpeg's internal subtitle parser, and outputs a standard SubRip .srt file.",
      "To batch convert an entire folder of downloaded YouTube .sbv files on Windows PowerShell, run: Get-ChildItem *.sbv | ForEach-Object { ffmpeg -i $_.FullName -c:s srt ($_.BaseName + '.srt') }. On macOS or Linux terminal: for f in *.sbv; do ffmpeg -i \"$f\" -c:s srt \"${f%.sbv}.srt\"; done.",
      "While FFmpeg handles basic timestamp reformatting, it does not automatically decode HTML entities like &amp; or strip sound descriptors like [Music]. Our online converter handles timestamp formatting, entity decoding, and sound tag filtering in a single automated step inside your browser."
    ],
    "useCasesTitle": "Real-World Use Cases for SBV to SRT Conversion",
    "useCasesSubtitle": "Explore how content creators, localization teams, and media professionals utilize SBV to SRT conversion daily.",
    "useCasesList": [
      {
        "title": "Importing YouTube Auto-Captions into Premiere & DaVinci",
        "description": "YouTube's speech recognition engine generates remarkably accurate automatic captions for long videos. By downloading the .sbv file and converting it to .srt, editors can import the transcribed dialogue into Premiere Pro or DaVinci Resolve without paying for third-party transcription services."
      },
      {
        "title": "Repurposing Long-Form Content into Shorts & Reels",
        "description": "Short-form creators frequently pull segments from existing YouTube videos to publish on TikTok, Instagram Reels, and YouTube Shorts. Converting the master .sbv captions to .srt lets editing apps like CapCut and Descript instantly burn dynamic, animated captions onto vertical video."
      },
      {
        "title": "Translating and Localizing Global Video Content",
        "description": "Global video localization requires clean SRT files for professional translation platforms (Smartcat, MemoQ, Trados). Translators cannot work efficiently with .sbv files due to lacking tool support. Converting to SRT ensures seamless translation workflow."
      },
      {
        "title": "Archiving Closed Captions for Legal & Educational Compliance",
        "description": "Educational institutions, universities, and public broadcasters are legally required to provide accessible closed captions (under ADA and Section 508 guidelines). Standardizing all downloaded video transcripts into permanent .srt archives ensures long-term accessibility compliance."
      }
    ],
    "troubleshootTitle": "Troubleshooting Common SBV to SRT Conversion Issues",
    "troubleshootSubtitle": "Diagnose and resolve the most frequent errors encountered when converting YouTube captions.",
    "troubleshootTips": [
      {
        "issue": "Raw HTML Entities Appear in Video Subtitles",
        "cause": "YouTube exported special characters as &amp;, &#39;, or &quot;, and your video editor displayed them literally.",
        "solution": "Ensure the 'Decode HTML Entities' option is enabled in our converter. It automatically restores real punctuation characters before generating the .srt file."
      },
      {
        "issue": "Subtitles Display Sound Cues like [Music] or [Applause]",
        "cause": "YouTube's automated speech recognition adds acoustic tags for non-speech audio events, which clutter clean dialogue.",
        "solution": "Toggle the 'Remove Sound Descriptors' option in our tool. It automatically detects and filters out bracketed sound cues like [Music] and (applause)."
      },
      {
        "issue": "Video Editor Rejects the Converted File with a Syntax Error",
        "cause": "Missing blank lines between subtitle blocks, unpadded hours, or decimal points instead of commas in timestamps.",
        "solution": "Our converter strictly validates and normalizes all line endings, adds two-digit hour padding ('00:'), and inserts standard commas with blank line separators."
      },
      {
        "issue": "Garbled Accents or Special Characters (Encoding Error)",
        "cause": "The subtitle file was saved using Windows-1252 (ANSI) or ISO-8859-1 rather than standard UTF-8 encoding.",
        "solution": "Our browser converter processes all text using universal UTF-8 character encoding, preserving Spanish tildes, French accents, German umlauts, and international scripts flawlessly."
      }
    ],
    "conclusionTitle": "Conclusion: Fast, Free, and Privacy-Focused SBV to SRT Conversion",
    "conclusionText": [
      "The ability to freely convert YouTube's proprietary .sbv captions into universally compatible SubRip .srt subtitles is an indispensable tool in any digital video producer's arsenal. Whether you need to import automated YouTube transcripts into Premiere Pro, subtitle a video for multi-platform distribution on LinkedIn and Facebook, or build an accessible institutional video archive, having clean, well-formatted SRT files ensures maximum compatibility across all devices and software.",
      "With SRTConverters, you get an instant, lightweight, and 100% private solution that runs entirely in your web browser. There are no software downloads, no account registrations, and no file uploads to external servers. Bookmark this tool for your next YouTube caption workflow and convert your SBV files to standard SRT in seconds."
    ]
  },
  "es": {
    "introTitle": "Guía Completa para Convertir Subtítulos SBV a SRT",
    "introSubtitle": "Domina la conversión de subtítulos de YouTube (.sbv) al estándar universal SubRip (.srt). Aprende cómo difieren las marcas de tiempo, cómo decodificar entidades HTML y cómo importar subtítulos de YouTube en Premiere Pro, DaVinci Resolve, Final Cut Pro y VLC sin complicaciones.",
    "introText": [
      "YouTube es la plataforma de transmisión de video más grande del mundo, con miles de millones de horas de contenido visualizadas diariamente. Para creadores de contenido, educadores y empresas audiovisuales, los subtítulos son un recurso vital para la accesibilidad, el posicionamiento SEO internacional y la retención de audiencia. Cuando creas o descargas subtítulos desde YouTube Studio, la plataforma proporciona un archivo con la extensión .sbv, conocido como el formato YouTube SubViewer.",
      "Sin embargo, en cuanto intentas utilizar ese archivo .sbv fuera de YouTube —ya sea importándolo en editores profesionales como Adobe Premiere Pro, DaVinci Resolve o Final Cut Pro, reproduciéndolo en VLC o Plex, o subiéndolo a plataformas como Facebook o LinkedIn— notarás que casi ningún software lo admite. El estándar indiscutible y universal de la industria audiovisual es SubRip (.srt).",
      "Convertir SBV a SRT soluciona esta barrera técnica. Aunque ambos son formatos de texto plano con diálogos y marcas de tiempo, difieren profundamente en su sintaxis temporal, numeración de bloques, delimitadores y codificación de caracteres HTML. Esta guía técnica cubre todo lo necesario sobre el formato SBV, la mecánica matemática de su conversión a SRT, la resolución de errores comunes y la interoperabilidad perfecta en tus flujos de trabajo de video."
    ],
    "whatIsTitle": "¿Qué es un Archivo SBV? El Formato SubViewer de YouTube",
    "whatIsText": [
      "Un archivo SBV (.sbv) es un formato de subtítulos de texto plano desarrollado por Google exclusivamente para gestionar subtítulos en YouTube. Las siglas provienen de 'SubViewer', ya que es una variante simplificada del clásico formato SubViewer 2.0 creado por David Vignoni. A diferencia de su predecesor, que requería encabezados [INFORMATION] y etiquetas [br], el formato de YouTube es minimalista al extremo.",
      "En un archivo SBV, cada bloque de subtítulo inicia directamente con una línea de tiempo seguida inmediatamente por el diálogo, separando cada bloque con líneas en blanco. La línea temporal contiene el tiempo inicial y final separados por una sola coma: 'H:MM:SS.mmm,H:MM:SS.mmm'. Sus características distintivas son la ausencia de números de índice, el uso de puntos decimales para milisegundos y el empleo frecuente de horas con un solo dígito (por ejemplo, '0:01:23.450').",
      "SubRip (.srt), por el contrario, fue creado a finales de los años 90 como parte del software de ripeo de DVD SubRip y se ha consolidado como el estándar universal indiscutible. Un archivo SRT exige una estructura fija de cuatro partes: un número entero correlativo (1, 2, 3...), una línea de tiempo con horas en dos dígitos y comas para milisegundos unidas por una flecha ('00:01:23,450 --> 00:01:28,900'), el texto del diálogo y una línea en blanco final. Dado que prácticamente cualquier reproductor o televisor lee SRT, convertir SBV a SRT es una tarea cotidiana indispensable."
    ],
    "whyConvertTitle": "¿Por Qué Convertir Subtítulos SBV de YouTube a SRT?",
    "whyConvertSubtitle": "Descubre las ventajas clave de migrar tus subtítulos de YouTube al formato estándar SubRip (.srt).",
    "whyConvertReasons": [
      {
        "title": "Compatibilidad Universal con Editores de Video",
        "description": "Suites de edición como Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro y CapCut no admiten archivos .sbv. Convertir a .srt te permite importar subtítulos directamente en la línea de tiempo como pistas editables."
      },
      {
        "title": "Publicación Multiplataforma en Redes Sociales",
        "description": "Al reutilizar videos de YouTube para LinkedIn, Facebook, Twitter/X o Vimeo, estas plataformas exigen obligatoriamente archivos .srt para subtítulos cerrados."
      },
      {
        "title": "Soporte Total en Reproductores y Smart TVs",
        "description": "Reproductores como VLC, MPC-HC, IINA y televisores inteligentes (Samsung, LG, Android TV) leen subtítulos .srt de forma nativa, mientras que rechazan los archivos .sbv."
      },
      {
        "title": "Eliminación de Entidades HTML Extrañas",
        "description": "YouTube exporta caracteres como '&amp;' para el signo &, '&#39;' para apóstrofes y '&quot;' para comillas. Una conversión correcta a SRT decodifica estos códigos en texto limpio y legible."
      },
      {
        "title": "Facilidad para Traducción y Localización",
        "description": "Las agencias de traducción y plataformas CAT (Trados, MemoQ, Smartcat) trabajan exclusivamente con archivos SRT o VTT, convirtiendo a SRT en el formato de intercambio idóneo."
      }
    ],
    "howToTitle": "Cómo Convertir SBV a SRT Online (Paso a Paso)",
    "howToSubtitle": "Sigue estos sencillos pasos para transformar tus subtítulos de YouTube en archivos SubRip .srt perfectamente formateados.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Descarga los Subtítulos desde YouTube Studio",
        "description": "Accede a YouTube Studio > Subtítulos, selecciona tu video, haz clic en el menú de tres puntos junto a la pista de subtítulos y elige Descargar > .sbv."
      },
      {
        "step": "2",
        "title": "Sube o Pega el Archivo en el Convertidor",
        "description": "Arrastra y suelta tu archivo 'captions.sbv' en el área superior de esta página, o abre el archivo en el Bloc de notas y pega el texto directamente."
      },
      {
        "step": "3",
        "title": "Configura las Opciones de Limpieza",
        "description": "Activa 'Decodificar Entidades HTML' para corregir códigos como &amp; y &#39;, y selecciona opcionalmente 'Eliminar Descriptores de Sonido' para limpiar marcadores como [Música]."
      },
      {
        "step": "4",
        "title": "Descarga el Archivo .SRT Estándar",
        "description": "Haz clic en 'Descargar .SRT' para guardar tu archivo listo para usar en Premiere Pro, DaVinci Resolve, VLC o cualquier otra aplicación."
      }
    ],
    "differenceTitle": "Comparación Técnica: Arquitectura de SBV frente a SRT",
    "differenceSubtitle": "Conoce las diferencias sintácticas y estructurales entre ambos formatos de subtítulos.",
    "differenceTable": [
      {
        "feature": "Desarrollador / Origen",
        "sbv": "Google / YouTube (variante SubViewer)",
        "srt": "Brain / Proyecto SubRip DVD"
      },
      {
        "feature": "Extensión de Archivo",
        "sbv": ".sbv (ocasionalmente .sub)",
        "srt": ".srt"
      },
      {
        "feature": "Número de Bloque / Índice",
        "sbv": "Ninguno (inicia directamente con el tiempo)",
        "srt": "Obligatorio entero correlativo (1, 2, 3...)"
      },
      {
        "feature": "Delimitador de Tiempo",
        "sbv": "Coma simple sin espacios (',')",
        "srt": "Flecha con espacios (' --> ')"
      },
      {
        "feature": "Separador de Milisegundos",
        "sbv": "Punto decimal ('.')",
        "srt": "Coma decimal (',') según norma europea"
      },
      {
        "feature": "Notación de Horas",
        "sbv": "Frecuentemente un solo dígito ('0:01:23.450')",
        "srt": "Estrictamente dos dígitos ('00:01:23,450')"
      },
      {
        "feature": "Codificación de Entidades HTML",
        "sbv": "Frecuente (&amp;, &#39;, &quot;)",
        "srt": "Texto plano UTF-8 o etiquetas básicas (<i>, <b>)"
      },
      {
        "feature": "Compatibilidad de Software",
        "sbv": "Casi exclusiva de YouTube Studio",
        "srt": "Universal (Premiere, Resolve, VLC, TVs, Web)"
      }
    ],
    "youtubeWorkflowTitle": "Cómo Descargar Subtítulos SBV desde YouTube Studio",
    "youtubeWorkflowSubtitle": "Guía paso a paso para extraer subtítulos automáticos o manuales directamente de tu canal.",
    "youtubeWorkflowSteps": [
      {
        "step": "1",
        "title": "Inicia Sesión en YouTube Studio",
        "description": "Accede con tu cuenta de creador a studio.youtube.com y asegúrate de encontrarte en el canal propietario del video."
      },
      {
        "step": "2",
        "title": "Entra a la Sección Subtítulos",
        "description": "En el menú lateral izquierdo, haz clic en 'Subtítulos' para ver el listado de videos publicados con pistas de texto."
      },
      {
        "step": "3",
        "title": "Selecciona el Video Deseado",
        "description": "Haz clic sobre el título o la miniatura del video cuyos subtítulos deseas extraer para ver los detalles de idiomas."
      },
      {
        "step": "4",
        "title": "Ubica la Pista de Subtítulos",
        "description": "Verás las pistas publicadas (automáticas o manuales). Pasa el cursor sobre la pista que deseas descargar."
      },
      {
        "step": "5",
        "title": "Descarga en Formato .sbv",
        "description": "Haz clic en los tres puntos verticales (Opciones) a la derecha, selecciona 'Descargar' y elige '.sbv'. El archivo se guardará en tu carpeta de descargas."
      }
    ],
    "architectureTitle": "Arquitectura Temporal: Cómo se Transforma SBV a SRT",
    "architectureSubtitle": "Análisis técnico de la transformación matemática y sintáctica de los códigos de tiempo.",
    "architectureText": [
      "El núcleo de la conversión entre formatos de subtítulos radica en la transformación de sus marcas temporales. Al ser formatos basados en tiempo real (a diferencia de formatos basados en fotogramas como MicroDVD), los momentos temporales son equivalentes, pero su sintaxis es radicalmente distinta.",
      "En un archivo SBV, el tiempo se expresa como: 'H:MM:SS.mmm,H:MM:SS.mmm'. Por ejemplo, un subtítulo que inicia en el minuto 1, segundo 23 y 450 milisegundos se escribe '0:01:23.450,0:01:27.800'. Presenta tres características clave: la hora tiene un solo dígito ('0:'), los milisegundos llevan punto decimal ('.') y el inicio y fin están unidos por una simple coma sin espacios.",
      "Para convertirlo a SubRip SRT, se ejecutan cuatro transformaciones: (1) Se añade un número de índice secuencial ('1') sobre el bloque. (2) La hora con un solo dígito se rellena con un cero a la izquierda ('00:') para cumplir el estándar estricto de dos dígitos. (3) El punto de los milisegundos se reemplaza por una coma (','). (4) La coma central se sustituye por la flecha con espacios (' --> '). La línea resultante queda exactamente como '00:01:23,450 --> 00:01:27,800'."
    ],
    "exampleTitle": "Ejemplo Práctico: Antes y Después de la Conversión",
    "exampleIntro": "Observa la transformación directa de un fragmento de YouTube SBV a SubRip SRT estándar:",
    "exampleSbvInput": "0:00:01.200,0:00:04.850\n¡Bienvenidos a nuestro tutorial de &quot;Edición de Video&quot;!\n\n0:00:05.100,0:00:09.300\n[Música]\nHoy aprenderemos corrección de color &amp; mezcla de audio.",
    "exampleSrtOutput": "1\n00:00:01,200 --> 00:00:04,850\n¡Bienvenidos a nuestro tutorial de \"Edición de Video\"!\n\n2\n00:00:05,100 --> 00:00:09,300\nHoy aprenderemos corrección de color & mezcla de audio.",
    "exampleExplanation": "En este ejemplo se aprecian las tres mejoras fundamentales: (1) Se generaron los números de bloque 1 y 2. (2) Las marcas de tiempo adoptaron horas con dos dígitos, flecha separadora y comas para milisegundos. (3) Las entidades &quot; y &amp; fueron reemplazadas por comillas y el signo &, mientras que el marcador sonoro [Música] fue eliminado limpiamente.",
    "htmlEntitiesTitle": "Entidades HTML en Subtítulos de YouTube: Códigos Frecuentes",
    "htmlEntitiesSubtitle": "Por qué YouTube codifica caracteres especiales y cómo nuestro convertidor los normaliza.",
    "htmlEntitiesTable": [
      {
        "entity": "&amp;",
        "decoded": "&",
        "description": "Signo ampersand. Muy común en marcas comerciales, títulos y expresiones."
      },
      {
        "entity": "&#39; o &apos;",
        "decoded": "'",
        "description": "Comilla simple o apóstrofe. Común en citas y palabras en otros idiomas."
      },
      {
        "entity": "&quot;",
        "decoded": "\"",
        "description": "Comillas dobles. Utilizadas para citas textuales y términos destacados."
      },
      {
        "entity": "&lt;",
        "decoded": "<",
        "description": "Signo menor que. Frecuente en tutoriales de programación y matemáticas."
      },
      {
        "entity": "&gt;",
        "decoded": ">",
        "description": "Signo mayor que. Usado en matemáticas o como indicador de hablante (>>)."
      },
      {
        "entity": "&nbsp;",
        "decoded": " (espacio)",
        "description": "Espacio de no separación. Empleado por navegadores para evitar saltos indeseados."
      }
    ],
    "ffmpegTitle": "Conversión por Línea de Comandos: SBV a SRT con FFmpeg",
    "ffmpegSubtitle": "Automatiza la conversión por lotes mediante scripts y herramientas de terminal.",
    "ffmpegCommand": "ffmpeg -i captions.sbv -c:s srt output.srt",
    "ffmpegExplanation": [
      "Para desarrolladores y editores que procesan cientos de videos de YouTube, FFmpeg ofrece capacidades nativas de remuxing y transcodificación de subtítulos. El comando superior lee el archivo .sbv de entrada y genera un archivo .srt estándar sin recodificar video.",
      "Para procesar por lotes una carpeta entera en PowerShell de Windows: Get-ChildItem *.sbv | ForEach-Object { ffmpeg -i $_.FullName -c:s srt ($_.BaseName + '.srt') }. En Linux o macOS: for f in *.sbv; do ffmpeg -i \"$f\" -c:s srt \"${f%.sbv}.srt\"; done.",
      "Sin embargo, FFmpeg no decodifica automáticamente entidades HTML como &amp; ni elimina etiquetas como [Música]. Nuestro convertidor online integra todas estas funciones en un solo paso directamente en tu navegador."
    ],
    "useCasesTitle": "Casos de Uso Reales para la Conversión de SBV a SRT",
    "useCasesSubtitle": "Descubre cómo creadores de contenido y profesionales de video aprovechan esta herramienta a diario.",
    "useCasesList": [
      {
        "title": "Importar Subtítulos Automáticos en Premiere y DaVinci",
        "description": "El motor de reconocimiento de voz de YouTube genera subtítulos automáticos de gran calidad. Al descargar el .sbv y convertirlo a .srt, los editores obtienen transcripciones gratuitas listas para su línea de tiempo sin pagar servicios externos."
      },
      {
        "title": "Creación de Shorts, Reels y TikToks",
        "description": "Al recortar momentos destacados de videos largos para redes verticales, convertir los subtítulos maestros de SBV a SRT permite que apps como CapCut o Premiere generen subtítulos dinámicos de inmediato."
      },
      {
        "title": "Traducción y Localización de Contenidos",
        "description": "La localización profesional exige archivos SRT para herramientas de traducción asistida (CAT). Convertir desde SBV permite enviar los diálogos a traductores de forma rápida y compatible."
      },
      {
        "title": "Archivo y Cumplimiento de Accesibilidad",
        "description": "Instituciones educativas y empresas deben garantizar la accesibilidad de sus videos bajo normativas internacionales. Almacenar subtítulos en formato estándar .srt asegura su durabilidad a largo plazo."
      }
    ],
    "troubleshootTitle": "Solución de Problemas Frecuentes al Convertir SBV a SRT",
    "troubleshootSubtitle": "Diagnóstico y soluciones rápidas para los errores más habituales con subtítulos de YouTube.",
    "troubleshootTips": [
      {
        "issue": "Aparecen Códigos como &amp; o &#39; en Pantalla",
        "cause": "YouTube exportó caracteres tipográficos como entidades HTML y tu reproductor los muestra de forma literal.",
        "solution": "Asegúrate de marcar la casilla 'Decodificar Entidades HTML' en nuestro convertidor para restaurar los caracteres reales."
      },
      {
        "issue": "Los Subtítulos Muestran Etiquetas como [Música] o [Aplausos]",
        "cause": "El sistema de reconocimiento de voz de YouTube añade descripciones acústicas automáticas que ensucian el diálogo.",
        "solution": "Activa la opción 'Eliminar Descriptores de Sonido' para limpiar automáticamente estas etiquetas entre corchetes."
      },
      {
        "issue": "El Editor de Video Rechaza el Archivo con Error de Sintaxis",
        "cause": "Faltan líneas en blanco entre bloques, las horas no tienen dos dígitos o los milisegundos llevan punto en vez de coma.",
        "solution": "Nuestro convertidor normaliza estrictamente toda la estructura del archivo, asegurando compatibilidad al 100% con Premiere, DaVinci y Final Cut."
      },
      {
        "issue": "Caracteres Especiales o Acentos Deformados (Error de Codificación)",
        "cause": "El archivo se guardó en codificación ANSI o Windows-1252 en lugar de UTF-8 estándar.",
        "solution": "Nuestra herramienta procesa todo el texto en UTF-8 universal, preservando tildes, eñes, diéresis y caracteres de todos los idiomas sin errores."
      }
    ],
    "conclusionTitle": "Conclusión: Conversión de SBV a SRT Rápida, Gratuita y Privada",
    "conclusionText": [
      "Poder transformar fácilmente los subtítulos .sbv de YouTube en archivos SubRip .srt universales es indispensable para cualquier creador o editor audiovisual. Ya sea que necesites subtítulos para Premiere Pro, para publicar en redes sociales o para crear un archivo institucional accesible, el formato SRT garantiza compatibilidad absoluta en cualquier dispositivo y software.",
      "Con SRTConverters cuentas con una solución rápida, ligera y 100% privada que opera íntegramente en tu navegador web. No requiere descargas de programas, suscripciones ni transferencias a servidores externos. Guarda esta herramienta en tus marcadores y convierte tus archivos SBV a SRT en cuestión de segundos."
    ]
  },
  "pt": {
    "introTitle": "Guia Completo para Converter Legendas SBV em SRT",
    "introSubtitle": "Domine a conversão de legendas do YouTube (.sbv) para o padrão universal SubRip (.srt). Entenda como diferem os códigos de tempo, como decodificar entidades HTML e como importar legendas do YouTube no Premiere Pro, DaVinci Resolve, Final Cut Pro e VLC com total facilidade.",
    "introText": [
      "O YouTube é a maior plataforma de streaming de vídeo do mundo, transmitindo bilhões de horas de conteúdo todos os dias. Para criadores de conteúdo, educadores e produtoras audiovisuais, as legendas são fundamentais para acessibilidade, SEO internacional e engajamento do público. Quando você cria ou transcreve legendas automaticamente no YouTube Studio e decide baixá-las, a plataforma disponibiliza um arquivo com a extensão .sbv — conhecido como formato YouTube SubViewer.",
      "No entanto, ao tentar usar esse arquivo .sbv fora do YouTube — seja importando-o em softwares de edição profissional como Adobe Premiere Pro, DaVinci Resolve ou Final Cut Pro, abrindo-o no VLC ou Plex, ou publicando em plataformas como LinkedIn ou Facebook —, você logo descobre que praticamente nenhum desses programas aceita arquivos .sbv. O padrão universal e indiscutível da indústria audiovisual é o SubRip (.srt).",
      "Converter SBV em SRT resolve essa barreira técnica. Embora ambos sejam formatos em texto simples contendo falas e marcações de tempo, eles diferem substancialmente na sintaxe temporal, na numeração de blocos, nos delimitadores e na codificação de caracteres HTML. Este guia técnico detalha a arquitetura do formato SBV, a matemática de conversão para SRT, a solução de erros comuns como códigos HTML e marcadores sonoros, e a garantia de interoperabilidade em seus projetos de vídeo."
    ],
    "whatIsTitle": "O que é um Arquivo SBV? Entendendo o Formato SubViewer do YouTube",
    "whatIsText": [
      "Um arquivo SBV (.sbv) é um formato de legendas em texto simples desenvolvido pelo Google exclusivamente para o gerenciamento de legendas no YouTube. A sigla vem de 'SubViewer', refletindo sua origem como uma versão simplificada do formato clássico SubViewer 2.0 criado por David Vignoni. Ao contrário de seu predecessor, que utilizava cabeçalhos complexos ([INFORMATION]) e quebras de linha com [br], o formato do YouTube é extremamente conciso.",
      "Em um arquivo SBV, cada fala de legenda começa diretamente com uma linha contendo os tempos de início e fim separados por uma única vírgula: 'H:MM:SS.mmm,H:MM:SS.mmm', seguida imediatamente pelo texto da fala, com linhas em branco separando os blocos. Suas características marcantes são a ausência de números de índice, o uso de ponto decimal para milissegundos e o emprego frequente de horas em dígito único (como '0:01:23.450').",
      "O SubRip (.srt), por outro lado, foi criado no final dos anos 90 como parte do software de extração de DVD SubRip e consolidou-se como o padrão universal absoluto de legendas externas. Um arquivo SRT exige uma estrutura rígida de quatro elementos por fala: um contador numérico sequencial (1, 2, 3...), uma linha de tempo com horas em dois dígitos e vírgulas para milissegundos unidas por uma seta ('00:01:23,450 --> 00:01:28,900'), o texto do diálogo e uma linha em branco ao final. Como qualquer reprodutor ou TV moderna aceita SRT, converter SBV para SRT é uma tarefa diária fundamental."
    ],
    "whyConvertTitle": "Por Que Converter Legendas SBV do YouTube em SRT?",
    "whyConvertSubtitle": "Conheça as vantagens práticas de migrar suas legendas do YouTube para o padrão universal SubRip (.srt).",
    "whyConvertReasons": [
      {
        "title": "Compatibilidade Universal com Editores de Vídeo",
        "description": "Softwares profissionais como Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro e CapCut não aceitam arquivos .sbv. A conversão para .srt permite importar legendas diretamente para a timeline como faixas editáveis."
      },
      {
        "title": "Publicação Multiplataforma em Redes Sociais",
        "description": "Ao reaproveitar vídeos do YouTube no LinkedIn, Facebook, Instagram ou Vimeo, essas plataformas exigem arquivos .srt para legendas ocultas (closed captions)."
      },
      {
        "title": "Suporte Total em Players e Smart TVs",
        "description": "Reprodutores de mídia (VLC, MPC-HC, IINA, MPV) e televisores inteligentes (Samsung, LG, Android TV) reconhecem legendas .srt nativamente, ignorando arquivos .sbv."
      },
      {
        "title": "Eliminação de Códigos HTML Estranhos",
        "description": "O YouTube exporta pontuações como códigos HTML (&amp; para &, &#39; para apóstrofos). Uma conversão adequada decodifica esses elementos em texto natural e limpo."
      },
      {
        "title": "Facilidade em Processos de Tradução e Localização",
        "description": "Agências de tradução e plataformas CAT (Trados, MemoQ, Smartcat) trabalham exclusivamente com arquivos SRT ou VTT, tornando o SRT o formato de intercâmbio indispensável."
      }
    ],
    "howToTitle": "Como Converter SBV para SRT Online (Passo a Passo)",
    "howToSubtitle": "Siga estes passos simples para transformar suas legendas do YouTube em arquivos SubRip .srt perfeitamente estruturados em segundos.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Baixe as Legendas no YouTube Studio",
        "description": "Acesse YouTube Studio > Legendas, selecione seu vídeo, clique no menu de três pontos ao lado da faixa de legendas e escolha Fazer download > .sbv."
      },
      {
        "step": "2",
        "title": "Envie ou Cole no Conversor",
        "description": "Arraste e solte seu arquivo 'captions.sbv' na área de upload acima ou abra o arquivo no Bloco de Notas e cole o texto diretamente no campo de entrada."
      },
      {
        "step": "3",
        "title": "Defina as Opções de Limpeza",
        "description": "Ative a opção 'Decodificar Entidades HTML' para corrigir &amp; e &#39;, e selecione se deseja remover marcadores automáticos de áudio como [Música]."
      },
      {
        "step": "4",
        "title": "Baixe o Arquivo .SRT Padrão",
        "description": "Clique em 'Baixar .SRT' para salvar seu arquivo imediatamente, pronto para ser usado no Premiere Pro, DaVinci Resolve, VLC ou qualquer reprodutor."
      }
    ],
    "differenceTitle": "Comparação Técnica: Estrutura SBV versus SRT",
    "differenceSubtitle": "Entenda as principais diferenças estruturais e sintáticas entre os dois formatos de legendas.",
    "differenceTable": [
      {
        "feature": "Desenvolvedor / Origem",
        "sbv": "Google / YouTube (variante SubViewer)",
        "srt": "Brain / Projeto SubRip DVD"
      },
      {
        "feature": "Extensão de Arquivo",
        "sbv": ".sbv (às vezes .sub)",
        "srt": ".srt"
      },
      {
        "feature": "Numeração de Bloco / Índice",
        "sbv": "Nenhuma (inicia direto com os tempos)",
        "srt": "Obrigatório inteiro sequencial (1, 2, 3...)"
      },
      {
        "feature": "Delimitador de Tempo",
        "sbv": "Vírgula única sem espaços (',')",
        "srt": "Seta com espaços (' --> ')"
      },
      {
        "feature": "Separador de Milissegundos",
        "sbv": "Ponto decimal ('.')",
        "srt": "Vírgula decimal (',') padrão europeu"
      },
      {
        "feature": "Notação de Horas",
        "sbv": "Frequentemente um único dígito ('0:01:23.450')",
        "srt": "Rigorosamente dois dígitos ('00:01:23,450')"
      },
      {
        "feature": "Codificação de Entidades HTML",
        "sbv": "Frequente (&amp;, &#39;, &quot;)",
        "srt": "Texto puro UTF-8 ou tags básicas (<i>, <b>)"
      },
      {
        "feature": "Compatibilidade de Software",
        "sbv": "Quase exclusiva do YouTube Studio",
        "srt": "Universal (Premiere, Resolve, VLC, TVs, Web)"
      }
    ],
    "youtubeWorkflowTitle": "Como Baixar Legendas SBV do YouTube Studio",
    "youtubeWorkflowSubtitle": "Passo a passo para extrair legendas automáticas ou manuais direto do seu canal.",
    "youtubeWorkflowSteps": [
      {
        "step": "1",
        "title": "Acesse o YouTube Studio",
        "description": "Entre com sua conta em studio.youtube.com e selecione o canal que contém o vídeo desejado."
      },
      {
        "step": "2",
        "title": "Abra a Aba Legendas",
        "description": "No menu de navegação à esquerda, clique em 'Legendas' para visualizar todos os vídeos com faixas de legendas disponíveis."
      },
      {
        "step": "3",
        "title": "Escolha o Vídeo",
        "description": "Clique no título ou na miniatura do vídeo para abrir os detalhes das faixas de idiomas."
      },
      {
        "step": "4",
        "title": "Localize a Faixa Alvo",
        "description": "Passe o cursor sobre a faixa de legenda publicada (automática ou enviada manualmente) que deseja baixar."
      },
      {
        "step": "5",
        "title": "Faça o Download em .sbv",
        "description": "Clique nos três pontos verticais (Opções) no canto direito, selecione 'Fazer download' e escolha '.sbv'. O arquivo será salvo no seu computador."
      }
    ],
    "architectureTitle": "Arquitetura Temporal: Como o SBV se Transforma em SRT",
    "architectureSubtitle": "Mergulho técnico na transformação matemática e sintática dos códigos de tempo.",
    "architectureText": [
      "A base da conversão de legendas é a transformação de seus códigos temporais. Por serem ambos formatos fundamentados em tempo absoluto (ao contrário de formatos baseados em quadros como o MicroDVD), os instantes são idênticos, mas a sintaxe é muito diferente.",
      "Em um arquivo SBV, o tempo é expresso como: 'H:MM:SS.mmm,H:MM:SS.mmm'. Por exemplo, uma fala iniciando em 1 minuto, 23 segundos e 450 milissegundos é escrita como '0:01:23.450,0:01:27.800'. Ela apresenta três traços particulares: a hora possui apenas um dígito ('0:'), os milissegundos vêm precedidos por ponto ('.') e o início e fim estão unidos por uma simples vírgula sem espaços.",
      "Para gerar a sintaxe SubRip SRT correta, são feitas quatro alterações: (1) Adiciona-se um contador sequencial ('1') sobre a fala. (2) A hora com um dígito ganha um zero à esquerda ('00:') para atender aos dois dígitos obrigatórios. (3) O ponto dos milissegundos é substituído por vírgula (','). (4) A vírgula central é substituída pela seta com espaços (' --> '). A linha final fica exatamente '00:01:23,450 --> 00:01:27,800'."
    ],
    "exampleTitle": "Exemplo Prático: Antes e Depois da Conversão",
    "exampleIntro": "Veja a transformação direta de um trecho de legendas do YouTube SBV para o padrão SubRip SRT:",
    "exampleSbvInput": "0:00:01.200,0:00:04.850\nBem-vindos ao nosso tutorial de &quot;Edição de Vídeo&quot;!\n\n0:00:05.100,0:00:09.300\n[Música]\nHoje vamos aprender correção de cor &amp; mixagem de áudio.",
    "exampleSrtOutput": "1\n00:00:01,200 --> 00:00:04,850\nBem-vindos ao nosso tutorial de \"Edição de Vídeo\"!\n\n2\n00:00:05,100 --> 00:00:09,300\nHoje vamos aprender correção de cor & mixagem de áudio.",
    "exampleExplanation": "Neste exemplo, três aprimoramentos essenciais aconteceram: (1) Os índices 1 e 2 foram criados acima de cada bloco. (2) As marcações de tempo adotaram horas em dois dígitos, seta com espaços e vírgulas para milissegundos. (3) As entidades &quot; e &amp; viraram aspas e o caractere &, enquanto o marcador sonoro [Música] foi removido.",
    "htmlEntitiesTitle": "Entidades HTML em Legendas do YouTube: Códigos Frequentes",
    "htmlEntitiesSubtitle": "Por que o YouTube codifica caracteres especiais e como nosso conversor os normaliza.",
    "htmlEntitiesTable": [
      {
        "entity": "&amp;",
        "decoded": "&",
        "description": "Caractere 'e' comercial. Muito comum em marcas, títulos e nomes próprios."
      },
      {
        "entity": "&#39; ou &apos;",
        "decoded": "'",
        "description": "Apóstrofo ou aspas simples. Frequente em contrações e citações."
      },
      {
        "entity": "&quot;",
        "decoded": "\"",
        "description": "Aspas duplas. Utilizadas em termos destacados ou diálogos citados."
      },
      {
        "entity": "&lt;",
        "decoded": "<",
        "description": "Sinal de menor que. Usado em explicações matemáticas ou tutoriais de programação."
      },
      {
        "entity": "&gt;",
        "decoded": ">",
        "description": "Sinal de maior que. Comum em fórmulas ou indicadores de orador (>>)."
      },
      {
        "entity": "&nbsp;",
        "decoded": " (espaço)",
        "description": "Espaço sem quebra. Utilizado em navegadores para evitar quebras de linha impróprias."
      }
    ],
    "ffmpegTitle": "Conversão na Linha de Comando: SBV para SRT com FFmpeg",
    "ffmpegSubtitle": "Como automatizar a conversão em lote por meio de scripts e terminal.",
    "ffmpegCommand": "ffmpeg -i captions.sbv -c:s srt output.srt",
    "ffmpegExplanation": [
      "Para desenvolvedores e editores que processam centenas de vídeos, o FFmpeg oferece suporte nativo para transcodificação de legendas. O comando acima lê o arquivo .sbv de entrada e gera um arquivo .srt sem recodificar o vídeo.",
      "Para converter em lote uma pasta inteira no Windows PowerShell: Get-ChildItem *.sbv | ForEach-Object { ffmpeg -i $_.FullName -c:s srt ($_.BaseName + '.srt') }. No Linux ou macOS: for f in *.sbv; do ffmpeg -i \"$f\" -c:s srt \"${f%.sbv}.srt\"; done.",
      "Contudo, o FFmpeg não limpa códigos HTML como &amp; nem exclui marcadores como [Música]. Nosso conversor online executa todas essas correções em uma única operação diretamente no seu navegador."
    ],
    "useCasesTitle": "Casos de Uso Reais para a Conversão de SBV em SRT",
    "useCasesSubtitle": "Descubra como criadores de conteúdo e editores aproveitam esta ferramenta diariamente.",
    "useCasesList": [
      {
        "title": "Importar Legendas Automáticas no Premiere e DaVinci",
        "description": "O sistema de transcrição automática do YouTube produz resultados bastante precisos. Ao converter o arquivo .sbv para .srt, você obtém uma transcrição completa e gratuita para sua ilha de edição sem pagar serviços externos."
      },
      {
        "title": "Criação de Shorts, Reels e Vídeos para TikTok",
        "description": "Ao extrair cortes de vídeos longos para formatos verticais, converter as legendas originais de SBV para SRT permite que softwares como CapCut ou Premiere gerem legendas dinâmicas instantaneamente."
      },
      {
        "title": "Tradução e Localização para Mercados Internacionais",
        "description": "Plataformas profissionais de tradução exigem arquivos SRT para importação. Converter suas legendas do YouTube em SRT garante compatibilidade com ferramentas de tradução assistida (CAT)."
      },
      {
        "title": "Arquivamento e Conformidade de Acessibilidade",
        "description": "Empresas e instituições de ensino precisam manter registros acessíveis de seus vídeos. Armazenar transcrições no padrão universal .srt garante compatibilidade por muitos anos."
      }
    ],
    "troubleshootTitle": "Solução de Problemas Comuns na Conversão de SBV para SRT",
    "troubleshootSubtitle": "Diagnósticos e soluções práticas para os erros mais frequentes com legendas do YouTube.",
    "troubleshootTips": [
      {
        "issue": "Códigos Estranhos como &amp; ou &#39; Aparecem na Tela",
        "cause": "O YouTube exportou sinais de pontuação como entidades HTML e o editor de vídeo os exibiu textualmente.",
        "solution": "Certifique-se de marcar a opção 'Decodificar Entidades HTML' no conversor para restaurar os caracteres corretos."
      },
      {
        "issue": "As Legendas Exibem Rótulos como [Música] ou [Aplausos]",
        "cause": "O reconhecimento de fala automático do YouTube inclui descrições acústicas que poluem o diálogo.",
        "solution": "Ative a opção 'Remover Descrições de Som' para filtrar e limpar essas marcações entre colchetes."
      },
      {
        "issue": "O Editor de Vídeo Rejeita o Arquivo com Erro de Sintaxe",
        "cause": "Ausência de linhas em branco entre falas, horas em dígito único ou pontos decimais nos milissegundos.",
        "solution": "Nosso conversor valida rigorosamente toda a estrutura, assegurando conformidade total com Premiere, DaVinci e Final Cut."
      },
      {
        "issue": "Acentos e Caracteres Especiais Desconfigurados (Erro de Codificação)",
        "cause": "O arquivo foi salvo em codificação ANSI ou Windows-1252 em vez do padrão universal UTF-8.",
        "solution": "Nossa ferramenta processa todo o texto em codificação UTF-8, preservando acentos, cedilhas e caracteres internacionais perfeitamente."
      }
    ],
    "conclusionTitle": "Conclusão: Conversão de SBV para SRT Rápida, Gratuita e Privada",
    "conclusionText": [
      "A possibilidade de transformar legendas .sbv do YouTube em arquivos SubRip .srt universais é essencial para o fluxo de trabalho de qualquer produtor de vídeo. Seja para importar transcrições no Premiere Pro, publicar vídeos com legendas no LinkedIn ou arquivar conteúdos com acessibilidade, o formato SRT oferece compatibilidade absoluta em qualquer sistema.",
      "Com o SRTConverters, você conta com uma ferramenta rápida, leve e 100% confidencial que roda inteiramente no seu navegador. Sem cadastros, sem downloads e sem upload de dados para servidores externos. Adicione esta página aos seus favoritos e converta suas legendas SBV para SRT em segundos."
    ]
  },
  "fr": {
    "introTitle": "Le Guide Complet de la Conversion de Sous-titres SBV en SRT",
    "introSubtitle": "Maîtrisez la conversion des sous-titres YouTube (.sbv) vers le standard universel SubRip (.srt). Découvrez les subtilités d'horodatage, le décodage indispensable des entités HTML et comment importer facilement vos sous-titres YouTube dans Premiere Pro, DaVinci Resolve, Final Cut Pro et VLC.",
    "introText": [
      "YouTube est la plus grande plateforme de diffusion vidéo au monde, totalisant des milliards d'heures visionnées au quotidien. Pour les créateurs, formateurs et diffuseurs, les sous-titres constituent un atout stratégique pour l'accessibilité, le référencement international et l'engagement des spectateurs. Lorsque vous créez ou générez automatiquement des sous-titres sur YouTube Studio et que vous les téléchargez, YouTube fournit un fichier doté de l'extension .sbv — désigné sous le nom de format YouTube SubViewer.",
      "Néanmoins, dès que vous tentez d'exploiter ce fichier .sbv en dehors de YouTube — que ce soit pour l'intégrer dans un logiciel de montage vidéo professionnel comme Adobe Premiere Pro, DaVinci Resolve ou Final Cut Pro, le lire dans VLC ou Plex, ou le publier sur LinkedIn ou Facebook —, vous constatez qu'aucun de ces outils ne reconnaît nativement le format .sbv. Le standard universel incontesté de l'industrie vidéo est le SubRip (.srt).",
      "Convertir SBV en SRT résout immédiatement cette incompatibilité. Bien que ces deux formats soient du texte brut contenant des dialogues et des codes temporels, ils diffèrent profondément dans leur syntaxe d'horodatage, leur numérotation de répliques, leurs séparateurs et leur encodage de caractères HTML. Ce guide technique détaillé aborde les fondements du format SBV, la mécanique mathématique de conversion en SRT, la résolution des codes HTML indésirables et les meilleures pratiques pour des flux de travail vidéo fluides."
    ],
    "whatIsTitle": "Qu'est-ce qu'un Fichier SBV ? Comprendre le Format SubViewer de YouTube",
    "whatIsText": [
      "Un fichier SBV (.sbv) est un format de sous-titres en texte brut créé par Google spécifiquement pour la gestion des sous-titres sur YouTube. L'acronyme renvoie à 'SubViewer', car il s'agit d'une version allégée du format SubViewer 2.0 originellement conçu par David Vignoni. Contrairement à son aîné qui imposait des métadonnées d'en-tête ([INFORMATION]) et des balises [br], la déclinaison de YouTube est dépouillée à l'extrême.",
      "Dans un fichier SBV, chaque réplique s'ouvre directement sur une ligne d'horodatage liant le début et la fin par une simple virgule : 'H:MM:SS.mmm,H:MM:SS.mmm', immédiatement suivie du texte du dialogue, les répliques étant séparées par des sauts de ligne. Ses caractéristiques distinctives sont l'absence de numérotation séquentielle, l'emploi du point décimal pour les millisecondes et l'affichage fréquent des heures sur un seul chiffre (ex. : '0:01:23.450').",
      "Le format SubRip (.srt), quant à lui, est né à la fin des années 1990 dans le logiciel d'extraction de DVD SubRip et s'est imposé comme la norme universelle de sous-titrage externe. Un fichier SRT applique une structure quadripartite stricte : un compteur numérique (1, 2, 3...), une ligne temporelle avec heures à deux chiffres et virgules pour les millisecondes reliées par une flèche ('00:01:23,450 --> 00:01:28,900'), le dialogue, et une ligne vide finale. Puisque la quasi-totalité des lecteurs et téléviseurs lisent le SRT, convertir SBV en SRT est une opération indispensable au quotidien."
    ],
    "whyConvertTitle": "Pourquoi Convertir des Sous-titres SBV de YouTube en SRT ?",
    "whyConvertSubtitle": "Découvrez les bénéfices concrets de l'adoption du standard SubRip (.srt) pour vos vidéos.",
    "whyConvertReasons": [
      {
        "title": "Compatibilité Universelle avec les Logiciels de Montage",
        "description": "Les logiciels comme Adobe Premiere Pro, DaVinci Resolve, Apple Final Cut Pro et CapCut n'acceptent pas les fichiers .sbv. Convertir en .srt permet d'importer vos sous-titres directement sur la timeline sous forme de pistes modifiables."
      },
      {
        "title": "Diffusion Multi-Plateforme sur les Réseaux Sociaux",
        "description": "Pour recycler vos vidéos YouTube sur LinkedIn, Facebook, Twitter/X ou Vimeo, ces plateformes exigent obligatoirement des sous-titres au format .srt."
      },
      {
        "title": "Prise en Charge Totale par les Lecteurs et Téléviseurs",
        "description": "Les lecteurs vidéo (VLC, MPC-HC, IINA, MPV) et les téléviseurs connectés (Samsung, LG, Android TV) prennent en charge le SRT nativement, alors qu'ils rejettent le .sbv."
      },
      {
        "title": "Suppression des Codes HTML Inesthétiques",
        "description": "YouTube exporte les ponctuations sous forme d'entités HTML brutes (&amp; pour &, &#39; pour les apostrophes). Une bonne conversion en SRT rétablit une typographie nette et lisible."
      },
      {
        "title": "Simplification des Processus de Traduction",
        "description": "Les agences de traduction et outils de TAO (Trados, MemoQ, Smartcat) requièrent des fichiers SRT ou VTT, faisant du SRT le format d'échange idéal pour l'internationalisation."
      }
    ],
    "howToTitle": "Comment Convertir un Fichier SBV en SRT en Ligne (Étape par Étape)",
    "howToSubtitle": "Suivez ces instructions simples pour transformer vos sous-titres YouTube en fichiers SubRip .srt parfaits en quelques secondes.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Téléchargez les Sous-titres sur YouTube Studio",
        "description": "Rendez-vous dans YouTube Studio > Sous-titres, choisissez votre vidéo, cliquez sur le menu à trois points en face de la piste de sous-titres et sélectionnez Télécharger > .sbv."
      },
      {
        "step": "2",
        "title": "Importez ou Collez dans le Convertisseur",
        "description": "Glissez-déposez votre fichier 'captions.sbv' dans la zone ci-dessus ou ouvrez le fichier dans un éditeur de texte pour en copier-coller le contenu."
      },
      {
        "step": "3",
        "title": "Configurez les Options de Nettoyage",
        "description": "Cochez 'Décoder les Entités HTML' pour transformer &amp; et &#39; en caractères réels, et choisissez éventuellement de retirer les mentions comme [Musique]."
      },
      {
        "step": "4",
        "title": "Téléchargez votre Fichier .SRT",
        "description": "Cliquez sur 'Télécharger .SRT' pour enregistrer instantanément votre fichier prêt pour Premiere Pro, DaVinci Resolve, VLC ou toute autre plateforme."
      }
    ],
    "differenceTitle": "Comparaison Technique : Architecture SBV contre SRT",
    "differenceSubtitle": "Comprendre les divergences fondamentales de structure et de syntaxe entre ces deux formats.",
    "differenceTable": [
      {
        "feature": "Créateur / Origine",
        "sbv": "Google / YouTube (variante SubViewer)",
        "srt": "Brain / Projet SubRip DVD"
      },
      {
        "feature": "Extension de Fichier",
        "sbv": ".sbv (parfois .sub)",
        "srt": ".srt"
      },
      {
        "feature": "Index / Compteur de Réplique",
        "sbv": "Aucun (débute directement par l'horodatage)",
        "srt": "Entier séquentiel obligatoire (1, 2, 3...)"
      },
      {
        "feature": "Séparateur d'Horodatage",
        "sbv": "Virgule simple sans espace (',')",
        "srt": "Flèche entourée d'espaces (' --> ')"
      },
      {
        "feature": "Séparateur des Millisecondes",
        "sbv": "Point décimal ('.')",
        "srt": "Virgule décimale (',') norme européenne"
      },
      {
        "feature": "Formatage des Heures",
        "sbv": "Souvent un seul chiffre ('0:01:23.450')",
        "srt": "Strictement deux chiffres ('00:01:23,450')"
      },
      {
        "feature": "Encodage des Entités HTML",
        "sbv": "Fréquent (&amp;, &#39;, &quot;)",
        "srt": "Texte brut UTF-8 ou balises simples (<i>, <b>)"
      },
      {
        "feature": "Compatibilité Logicielle",
        "sbv": "Quasiment limitée à YouTube Studio",
        "srt": "Universelle (Premiere, Resolve, VLC, TV, Web)"
      }
    ],
    "youtubeWorkflowTitle": "Comment Télécharger des Sous-titres SBV sur YouTube Studio",
    "youtubeWorkflowSubtitle": "Guide pratique pour récupérer vos sous-titres automatiques ou manuels directement depuis votre compte.",
    "youtubeWorkflowSteps": [
      {
        "step": "1",
        "title": "Connectez-vous à YouTube Studio",
        "description": "Rendez-vous sur studio.youtube.com avec votre compte de créateur et vérifiez que vous êtes sur la bonne chaîne."
      },
      {
        "step": "2",
        "title": "Accédez à l'Onglet Sous-titres",
        "description": "Dans la colonne de gauche, cliquez sur 'Sous-titres' pour afficher la liste de vos vidéos dotées de pistes textuelles."
      },
      {
        "step": "3",
        "title": "Sélectionnez la Vidéo",
        "description": "Cliquez sur la miniature ou le titre de la vidéo concernée pour ouvrir le détail des langues."
      },
      {
        "step": "4",
        "title": "Repérez la Piste Souhaitée",
        "description": "Survolez la piste de sous-titres publiée (automatique ou saisie manuellement) que vous voulez récupérer."
      },
      {
        "step": "5",
        "title": "Téléchargez au Format .sbv",
        "description": "Cliquez sur les trois points verticais à droite, cliquez sur 'Télécharger' et choisissez '.sbv'. Le fichier s'enregistre sur votre disque."
      }
    ],
    "architectureTitle": "Architecture Temporelle : De SBV à SRT Décrypté",
    "architectureSubtitle": "Analyse des transformations mathématiques et syntaxiques appliquées aux codes temporels.",
    "architectureText": [
      "La conversion de sous-titres repose avant tout sur l'adaptation des codes temporels. Les deux formats étant basés sur le temps absolu (contrairement aux formats basés sur les images comme le MicroDVD), la position temporelle des sous-titres est rigoureusement identique, mais leur écriture diffère profondément.",
      "Dans un fichier SBV, l'horodatage se présente sous la forme : 'H:MM:SS.mmm,H:MM:SS.mmm'. Ainsi, un sous-titre débutant à 1 minute, 23 secondes et 450 millisecondes s'écrit '0:01:23.450,0:01:27.800'. On note trois particularités : l'heure ne comporte qu'un chiffre ('0:'), les millisecondes sont précédées d'un point ('.') et une virgule unique sans espace unit le début et la fin.",
      "Pour aboutir à une syntaxe SubRip SRT valide, quatre opérations sont nécessaires : (1) Générer un numéro de réplique séquentiel ('1') au-dessus du bloc. (2) Ajouter un zéro initial à l'heure ('00:') pour répondre à l'exigence des deux chiffres. (3) Remplacer le point des millisecondes par une virgule (','). (4) Substituer la virgule centrale par la flèche espacée (' --> '). La ligne finale devient fidèlement '00:01:23,450 --> 00:01:27,800'."
    ],
    "exampleTitle": "Exemple Concret : Avant et Après Conversion",
    "exampleIntro": "Observez la transformation directe d'un extrait de sous-titres YouTube SBV vers le format universel SubRip SRT :",
    "exampleSbvInput": "0:00:01.200,0:00:04.850\nBienvenue dans notre tutoriel sur le &quot;Montage Vidéo&quot; !\n\n0:00:05.100,0:00:09.300\n[Musique]\nAujourd&#39;hui, nous abordons l&#39;étalonnage &amp; le mixage sonore.",
    "exampleSrtOutput": "1\n00:00:01,200 --> 00:00:04,850\nBienvenue dans notre tutoriel sur le \"Montage Vidéo\" !\n\n2\n00:00:05,100 --> 00:00:09,300\nAujourd'hui, nous abordons l'étalonnage & le mixage sonore.",
    "exampleExplanation": "Dans cet exemple, trois améliorations majeures ont opéré : (1) Les index 1 et 2 ont été créés pour chaque réplique. (2) Les horodatages ont été restructurés avec heures à deux chiffres, flèche et virgules décimales. (3) Les codes HTML &quot;, &#39; et &amp; sont devenus de véritables guillemets, apostrophes et esperluettes, et l'indication [Musique] a été effacée.",
    "htmlEntitiesTitle": "Entités HTML dans les Sous-titres YouTube : Codes et Équivalences",
    "htmlEntitiesSubtitle": "Pourquoi YouTube encode certains caractères et comment notre convertisseur rétablit la typographie correcte.",
    "htmlEntitiesTable": [
      {
        "entity": "&amp;",
        "decoded": "&",
        "description": "Esperluette / et commercial. Très fréquent dans les noms de marques et titres."
      },
      {
        "entity": "&#39; ou &apos;",
        "decoded": "'",
        "description": "Apostrophe ou guillemet simple. Indispensable pour la langue française (l'arbre, d'accord)."
      },
      {
        "entity": "&quot;",
        "decoded": "\"",
        "description": "Guillemet double. Utilisé pour encadrer des citations ou termes spécifiques."
      },
      {
        "entity": "&lt;",
        "decoded": "<",
        "description": "Signe inférieur à. Courant dans les tutoriels techniques et mathématiques."
      },
      {
        "entity": "&gt;",
        "decoded": ">",
        "description": "Signe supérieur à. Utilisé en mathématiques ou pour désigner les locuteurs (>>)."
      },
      {
        "entity": "&nbsp;",
        "decoded": " (espace)",
        "description": "Espace insécable. Utilisé pour éviter les retours à la ligne intempestifs."
      }
    ],
    "ffmpegTitle": "Conversion en Ligne de Commande : SBV en SRT avec FFmpeg",
    "ffmpegSubtitle": "Automatisez la conversion par lots à l'aide de scripts dans votre terminal.",
    "ffmpegCommand": "ffmpeg -i captions.sbv -c:s srt output.srt",
    "ffmpegExplanation": [
      "Pour les développeurs et professionnels gérant des centaines de vidéos, FFmpeg propose des fonctionnalités natives de transcodage de sous-titres. La commande ci-dessus lit le fichier .sbv en entrée et produit un fichier .srt standard sans toucher au flux vidéo.",
      "Pour traiter un dossier complet sur Windows PowerShell : Get-ChildItem *.sbv | ForEach-Object { ffmpeg -i $_.FullName -c:s srt ($_.BaseName + '.srt') }. Sur Linux ou macOS : for f in *.sbv; do ffmpeg -i \"$f\" -c:s srt \"${f%.sbv}.srt\"; done.",
      "Toutefois, FFmpeg ne décode pas les entités HTML comme &amp; et ne supprime pas les balises sonores [Musique]. Notre outil en ligne intègre l'ensemble de ces traitements en un clic dans votre navigateur."
    ],
    "useCasesTitle": "Cas d'Usage Réels de la Conversion SBV en SRT",
    "useCasesSubtitle": "Découvrez comment créateurs et monteurs exploitent cet outil au quotidien.",
    "useCasesList": [
      {
        "title": "Récupération des Transcriptions YouTube dans Premiere & DaVinci",
        "description": "La reconnaissance vocale de YouTube génère des sous-titres automatiques très précis. En convertissant le fichier .sbv en .srt, les monteurs récupèrent une transcription exploitable sur leur timeline sans payer d'outils tiers."
      },
      {
        "title": "Création de Formats Courts pour TikTok, Shorts et Reels",
        "description": "Pour extraire des séquences percutantes à diffuser au format vertical, convertir les sous-titres maîtres en SRT permet à CapCut ou Premiere d'animer dynamiquement les textes à l'écran."
      },
      {
        "title": "Traduction et Internationalisation des Vidéos",
        "description": "Les traducteurs professionnels exigent des fichiers SRT pour leurs logiciels de TAO. Convertir vos fichiers YouTube en SRT garantit un échange fluide avec vos prestataires linguistiques."
      },
      {
        "title": "Archivage et Conformité Légale d'Accessibilité",
        "description": "Organismes publics et entreprises sont tenus de garantir l'accessibilité de leurs contenus. Conserver les sous-titres au standard .srt pérennise l'accès pour les années futures."
      }
    ],
    "troubleshootTitle": "Dépannage des Erreurs Fréquentes de Conversion SBV en SRT",
    "troubleshootSubtitle": "Diagnostiquez et résolvez rapidement les anomalies rencontrées avec les sous-titres YouTube.",
    "troubleshootTips": [
      {
        "issue": "Des Codes comme &amp; ou &#39; S'affichent à l'Écran",
        "cause": "YouTube a exporté les ponctuations sous forme d'entités HTML et votre lecteur vidéo les affiche mot pour mot.",
        "solution": "Activez l'option 'Décoder les Entités HTML' dans notre convertisseur pour restaurer les véritables signes typographiques."
      },
      {
        "issue": "Les Sous-titres Contiennent des Mentions comme [Musique]",
        "cause": "L'outil de transcription automatique de YouTube insère des descriptions acoustiques qui encombrent les dialogues.",
        "solution": "Cochez 'Supprimer les Bruits et Effets' pour filtrer automatiquement ces balises superflues entre crochets."
      },
      {
        "issue": "Le Logiciel de Montage Refuse le Fichier (Erreur de Syntaxe)",
        "cause": "Lignes vides manquantes, heures à un chiffre ou points au lieu de virgules sur les millisecondes.",
        "solution": "Notre outil valide et normalise scrupuleusement la structure pour une compatibilité parfaite avec Premiere, DaVinci et Final Cut."
      },
      {
        "issue": "Caractères Accentués Altérés ou Illisibles (Erreur d'Encodage)",
        "cause": "Le fichier a été sauvegardé en codage ANSI ou Windows-1252 au lieu de l'UTF-8 standard.",
        "solution": "Notre application traite l'intégralité du texte en UTF-8 universel, garantissant la restitution fidèle des accents français et cédilles."
      }
    ],
    "conclusionTitle": "Conclusion : Une Conversion SBV en SRT Rapide, Gratuite et Confidentielle",
    "conclusionText": [
      "Convertir facilement les sous-titres propriétaires .sbv de YouTube en fichiers SubRip .srt universels est un atout indispensable pour tout créateur de contenu vidéo. Que vous souhaitiez intégrer des sous-titres dans Premiere Pro, publier sur les réseaux sociaux ou concevoir des archives pérennes, le standard SRT offre une fiabilité absolue sur tous les supports.",
      "Avec SRTConverters, vous disposez d'un outil rapide, léger et 100 % confidentiel qui s'exécute directement dans votre navigateur web. Aucun logiciel à installer, aucune inscription requise et aucun transfert de fichiers vers des serveurs distants. Enregistrez cette page dans vos favoris et convertissez vos fichiers SBV en SRT en un éclair."
    ]
  },
  "de": {
    "introTitle": "Der Umfassende Leitfaden zur Konvertierung von SBV in SRT",
    "introSubtitle": "Meistern Sie die Umwandlung von YouTube SubViewer (.sbv) Untertiteln in das universelle SubRip (.srt) Standardformat. Erfahren Sie, wie sich Zeitstempel unterscheiden, wie HTML-Entitäten sauber dekodiert werden und wie Sie YouTube-Untertitel mühelos in Premiere Pro, DaVinci Resolve, Final Cut Pro und VLC importieren.",
    "introText": [
      "YouTube ist die weltweit größte Videoplattform mit Milliarden von Wiedergabestunden täglich. Für Content Creator, Bildungseinrichtungen und Medienproduzenten sind Untertitel unverzichtbar für Barrierefreiheit, internationale Auffindbarkeit (SEO) und Zuschauerbindung. Wenn Sie im YouTube Studio automatische Untertitel generieren oder manuell bearbeiten und herunterladen, stellt YouTube eine Datei mit der Endung .sbv bereit – das sogenannte YouTube SubViewer-Format.",
      "Sobald Sie jedoch versuchen, diese heruntergeladene .sbv-Datei außerhalb von YouTube einzusetzen – sei es beim Videoschnitt in Adobe Premiere Pro, DaVinci Resolve oder Final Cut Pro, beim Abspielen in VLC oder beim Upload auf Plattformen wie LinkedIn oder Facebook –, stellen Sie schnell fest, dass fast kein anderes System das .sbv-Format akzeptiert. Der unangefochtene, universelle Standard im Videoschnitt ist SubRip (.srt).",
      "Die Konvertierung von SBV in SRT überbrückt diese technische Hürde. Obwohl beide Formate reine Textdateien mit Zeitstempeln und Sprechtexten sind, unterscheiden sie sich grundlegend in der Zeitstempelsyntax, der Blocknummerierung, den Trennzeichen und der Zeichenkodierung von HTML-Entitäten. Dieser technische Leitfaden erklärt alle Details des SBV-Formats, die exakte Umwandlung in standardkonformes SRT und Lösungen für typische Probleme wie verfälschte Umlaute und störende Geräusch-Tags."
    ],
    "whatIsTitle": "Was ist eine SBV-Datei? Das SubViewer-Format von YouTube",
    "whatIsText": [
      "Eine SBV-Datei (.sbv) ist ein einfaches Textuntertitelformat, das Google speziell für YouTube entwickelt hat. Das Akronym leitet sich von 'SubViewer' ab, da es auf einer radikal vereinfachten Version des ursprünglichen SubViewer 2.0-Formats von David Vignoni basiert. Im Gegensatz zum alten Standard, der Datei-Header ([INFORMATION]) und [br]-Umbruch-Tags verlangte, ist das YouTube-Format auf das absolute Minimum reduziert.",
      "In einer SBV-Datei beginnt jeder Untertitelblock unmittelbar mit einer Zeitstempelzeile, gefolgt vom Dialogtext. Zwischen den Blöcken stehen Leerzeilen. Die Zeitstempelzeile enthält Anfangs- und Endzeit getrennt durch ein einziges Komma: 'H:MM:SS.mmm,H:MM:SS.mmm'. Typische Merkmale sind das Fehlen von Blocknummern, Punkte vor den Millisekunden und oft einstellige Stundenangaben (z. B. '0:01:23.450').",
      "SubRip (.srt) hingegen wurde Ende der 1990er Jahre für das DVD-Ripping-Tool SubRip entwickelt und gilt weltweit als Standard für externe Untertitel. Ein SRT-Block verlangt zwingend vier Elemente: eine fortlaufende Zeilennummer (1, 2, 3...), eine Zeitstempelzeile mit zweistelligen Stunden und Kommas für Millisekunden, verbunden durch einen Pfeil ('00:01:23,450 --> 00:01:28,900'), den Text und eine abschließende Leerzeile. Da nahezu alle Schnittprogramme und TVs SRT nativ unterstützen, ist die Umwandlung von SBV in SRT eine tägliche Notwendigkeit."
    ],
    "whyConvertTitle": "Warum YouTube SBV-Untertitel in SRT Konvertieren?",
    "whyConvertSubtitle": "Erfahren Sie, welche entscheidenden Vorteile der Wechsel zum universellen SubRip (.srt) Standard bietet.",
    "whyConvertReasons": [
      {
        "title": "Universelle Schnittsoftware-Kompatibilität",
        "description": "Professionelle Schnittprogramme wie Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro und CapCut unterstützen keine .sbv-Dateien. Durch die Konvertierung in .srt können Untertitel direkt auf der Timeline editiert werden."
      },
      {
        "title": "Plattformübergreifendes Publizieren",
        "description": "Beim Wiederverwenden von YouTube-Videos auf LinkedIn, Facebook, Twitter/X oder Vimeo verlangen diese Netzwerke zwingend .srt-Dateien für geschlossene Untertitel."
      },
      {
        "title": "Volle Unterstützung durch Mediaplayer und Smart-TVs",
        "description": "Player wie VLC, MPC-HC, IINA sowie Smart-TVs (Samsung, LG, Android TV) spielen .srt-Dateien reibungslos ab, während .sbv ignoriert oder als fehlerhaft abgelehnt wird."
      },
      {
        "title": "Beseitigung unschöner HTML-Code-Fragmente",
        "description": "YouTube exportiert Sonderzeichen oft als HTML-Codes (&amp; für &, &#39; für Apostrophe). Ein präziser Konverter wandelt diese wieder in lesbaren Text um."
      },
      {
        "title": "Einfache Übersetzung und Lokalisierung",
        "description": "Übersetzungsbüros und Lokalisierungssoftware (CAT-Tools wie Trados, MemoQ oder Smartcat) setzen auf SRT oder VTT als Austauschstandard."
      }
    ],
    "howToTitle": "So Konvertieren Sie SBV in SRT Online (Schritt-für-Schritt)",
    "howToSubtitle": "In wenigen Schritten verwandeln Sie Ihre YouTube-Untertitel in saubere, standardkonforme SubRip .srt-Dateien.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Untertitel aus YouTube Studio Herunterladen",
        "description": "Gehen Sie in YouTube Studio auf 'Untertitel', wählen Sie Ihr Video aus, klicken Sie auf die drei Punkte neben der Untertitelspur und wählen Sie Herunterladen > .sbv."
      },
      {
        "step": "2",
        "title": "In den Konverter Hochladen oder Einfügen",
        "description": "Ziehen Sie Ihre 'captions.sbv'-Datei per Drag & Drop in das Upload-Feld oben oder fügen Sie den kopierten Text direkt in das Eingabefeld ein."
      },
      {
        "step": "3",
        "title": "Bereinigungsoptionen Festlegen",
        "description": "Aktivieren Sie 'HTML-Entitäten Dekodieren' für saubere Satzzeichen und wählen Sie optional 'Geräusch-Deskriptoren Entfernen', um [Musik]-Hinweise zu löschen."
      },
      {
        "step": "4",
        "title": "Standard .SRT-Datei Herunterladen",
        "description": "Klicken Sie auf '.SRT Herunterladen', um die fertige Datei zu speichern, bereit für Premiere Pro, DaVinci Resolve, VLC oder andere Videoplattformen."
      }
    ],
    "differenceTitle": "Technischer Vergleich: SBV vs. SRT Format-Architektur",
    "differenceSubtitle": "Verstehen Sie die strukturellen und syntaktischen Unterschiede zwischen YouTube SubViewer und SubRip.",
    "differenceTable": [
      {
        "feature": "Entwickler / Ursprung",
        "sbv": "Google / YouTube (SubViewer-Variante)",
        "srt": "Brain / SubRip DVD-Projekt"
      },
      {
        "feature": "Dateiendung",
        "sbv": ".sbv (gelegentlich .sub)",
        "srt": ".srt"
      },
      {
        "feature": "Nummerierung / Zähler",
        "sbv": "Keine (beginnt direkt mit Zeitcode)",
        "srt": "Fortlaufende Ganzzahl zwingend (1, 2, 3...)"
      },
      {
        "feature": "Zeit-Trennzeichen",
        "sbv": "Einfaches Komma ohne Leerzeichen (',')",
        "srt": "Pfeil mit Leerzeichen (' --> ')"
      },
      {
        "feature": "Millisekunden-Trenner",
        "sbv": "Dezimalpunkt ('.')",
        "srt": "Komma (',') nach europäischem Standard"
      },
      {
        "feature": "Stunden-Notation",
        "sbv": "Häufig einstellig ('0:01:23.450')",
        "srt": "Strikt zweistellig ('00:01:23,450')"
      },
      {
        "feature": "HTML-Entitäten",
        "sbv": "Häufig vorhanden (&amp;, &#39;, &quot;)",
        "srt": "Reiner UTF-8 Text oder Basistags (<i>, <b>)"
      },
      {
        "feature": "Software-Kompatibilität",
        "sbv": "Praktisch nur YouTube Studio",
        "srt": "Universell (Premiere, Resolve, VLC, Smart-TVs)"
      }
    ],
    "youtubeWorkflowTitle": "So Laden Sie SBV-Untertitel aus YouTube Studio Herunter",
    "youtubeWorkflowSubtitle": "Schritt-für-Schritt-Anleitung zum Exportieren automatischer oder manueller Untertitelspuren.",
    "youtubeWorkflowSteps": [
      {
        "step": "1",
        "title": "YouTube Studio Öffnen",
        "description": "Melden Sie sich unter studio.youtube.com an und stellen Sie sicher, dass Sie sich im richtigen Kanal befinden."
      },
      {
        "step": "2",
        "title": "Menü 'Untertitel' Aufrufen",
        "description": "Klicken Sie in der linken Seitenleiste auf 'Untertitel', um die Liste aller Videos mit Untertiteln anzuzeigen."
      },
      {
        "step": "3",
        "title": "Gewünschtes Video Auswählen",
        "description": "Klicken Sie auf das Vorschaubild oder den Titel des Videos, dessen Untertitel Sie exportieren möchten."
      },
      {
        "step": "4",
        "title": "Untertitelspur Finden",
        "description": "Fahren Sie mit der Maus über die gewünschte Spur (z. B. 'Deutsch (Automatisch)' oder eine manuell erstellte Sprache)."
      },
      {
        "step": "5",
        "title": "Als .sbv Herunterladen",
        "description": "Klicken Sie auf die drei vertikalen Punkte (Optionen) rechts, wählen Sie 'Herunterladen' und dann '.sbv'. Die Datei wird im Download-Ordner abgelegt."
      }
    ],
    "architectureTitle": "Zeitstempel-Architektur: Wie SBV in SRT Umgerechnet Wird",
    "architectureSubtitle": "Die mathematische und syntaktische Transformation der Zeitstempel im Detail.",
    "architectureText": [
      "Das Herzstück jeder Untertitel-Konvertierung ist die präzise Transformation der Zeitcodes. Da sowohl SBV als auch SRT auf realer Uhrzeit basieren (im Gegensatz zu bildbasierten Formaten wie MicroDVD), sind die zeitlichen Eckpunkte identisch, ihre Syntax unterscheidet sich jedoch erheblich.",
      "In einer SBV-Datei lautet das Schema: 'H:MM:SS.mmm,H:MM:SS.mmm'. Ein Untertitel bei Minute 1, Sekunde 23 und 450 Millisekunden wird als '0:01:23.450,0:01:27.800' geschrieben. Auffällig sind drei Details: einstündige Angaben haben oft nur eine Ziffer ('0:'), Millisekunden folgen nach einem Punkt und Start- sowie Endzeit kleben an einem Komma ohne Leerzeichen.",
      "Um standardkonformes SRT zu erzeugen, erfolgen vier Schritte: (1) Eine fortlaufende Blocknummer ('1') wird vorangestellt. (2) Die Stunde wird mit einer führenden Null aufgefüllt ('00:'). (3) Der Dezimalpunkt der Millisekunden wird durch ein Komma (',') ersetzt. (4) Das mittlere Komma wird durch den Pfeil mit Leerzeichen (' --> ') ersetzt. Die fertige Zeile lautet exakt '00:01:23,450 --> 00:01:27,800'."
    ],
    "exampleTitle": "Konkretes Beispiel: Vorher und Nachher der Konvertierung",
    "exampleIntro": "Vergleichen Sie die rohe YouTube SBV-Eingabe mit der sauberen, standardisierten SRT-Ausgabe:",
    "exampleSbvInput": "0:00:01.200,0:00:04.850\nWillkommen zu unserem Tutorial über &quot;Videoschnitt&quot;!\n\n0:00:05.100,0:00:09.300\n[Musik]\nHeute behandeln wir Farbkorrektur &amp; Tonmischung.",
    "exampleSrtOutput": "1\n00:00:01,200 --> 00:00:04,850\nWillkommen zu unserem Tutorial über \"Videoschnitt\"!\n\n2\n00:00:05,100 --> 00:00:09,300\nHeute behandeln wir Farbkorrektur & Tonmischung.",
    "exampleExplanation": "In diesem Beispiel wurden drei wichtige Verbesserungen erzielt: (1) Die Blocknummern 1 und 2 wurden eingefügt. (2) Die Zeitstempel erhielten zweistellige Stunden, Kommas und den Standard-Pfeil. (3) HTML-Codes wie &quot; und &amp; wurden durch Anführungszeichen und das Und-Zeichen ersetzt, während der Tag [Musik] sauber entfernt wurde.",
    "htmlEntitiesTitle": "HTML-Entitäten in YouTube-Untertiteln: Häufige Codes und Korrektur",
    "htmlEntitiesSubtitle": "Warum YouTube Sonderzeichen maskiert und wie unser Konverter für lesbare Texte sorgt.",
    "htmlEntitiesTable": [
      {
        "entity": "&amp;",
        "decoded": "&",
        "description": "Kaufmännisches Und. Sehr häufig in Firmennamen, Titeln und Redewendungen."
      },
      {
        "entity": "&#39; oder &apos;",
        "decoded": "'",
        "description": "Apostroph oder einfaches Anführungszeichen. Wichtig für englische Verkürzungen und Zitate."
      },
      {
        "entity": "&quot;",
        "decoded": "\"",
        "description": "Doppeltes Anführungszeichen. Zur Kennzeichnung direkter Rede oder besonderer Begriffe."
      },
      {
        "entity": "&lt;",
        "decoded": "<",
        "description": "Kleiner-als-Zeichen. Häufig in Mathe-Erklärungen oder Programmier-Tutorials."
      },
      {
        "entity": "&gt;",
        "decoded": ">",
        "description": "Größer-als-Zeichen. Für Formeln oder als Sprecher-Kennzeichnung (>>)."
      },
      {
        "entity": "&nbsp;",
        "decoded": " (Leerzeichen)",
        "description": "Geschütztes Leerzeichen. Verhindert unerwünschte automatische Zeilenumbrüche."
      }
    ],
    "ffmpegTitle": "Kommandozeilen-Konvertierung: SBV in SRT mit FFmpeg",
    "ffmpegSubtitle": "Automatisierte Stapelkonvertierung über Terminal-Skripte für Entwickler und Studios.",
    "ffmpegCommand": "ffmpeg -i captions.sbv -c:s srt output.srt",
    "ffmpegExplanation": [
      "Für Programmierer und Medientechniker, die Hunderte von Videos verarbeiten, bietet FFmpeg native Funktionen zum Extrahieren und Konvertieren von Untertiteln. Der obige Befehl liest die .sbv-Datei ein und schreibt eine standardkonforme .srt-Datei ohne das Video neu zu rendern.",
      "Für die Stapelverarbeitung eines ganzen Verzeichnisses unter Windows PowerShell: Get-ChildItem *.sbv | ForEach-Object { ffmpeg -i $_.FullName -c:s srt ($_.BaseName + '.srt') }. Unter Linux oder macOS: for f in *.sbv; do ffmpeg -i \"$f\" -c:s srt \"${f%.sbv}.srt\"; done.",
      "Beachten Sie jedoch: FFmpeg dekodiert HTML-Entitäten wie &amp; nicht automatisch und filtert auch keine [Musik]-Tags heraus. Unser browserbasierter Konverter vereint all diese Aufgaben in einem einzigen, mühelosen Schritt."
    ],
    "useCasesTitle": "Typische Praxisszenarien für die SBV in SRT Konvertierung",
    "useCasesSubtitle": "Wie Videoproduzenten und Unternehmen dieses Werkzeug im Alltag einsetzen.",
    "useCasesList": [
      {
        "title": "YouTube-Transkripte in Premiere & DaVinci Weiterbearbeiten",
        "description": "Die automatische Spracherkennung von YouTube liefert erstaunlich exakte Texte. Nach der Konvertierung von .sbv in .srt können Editoren das Skript direkt in ihrer Timeline nutzen, ohne teure Transkriptionsdienste buchen zu müssen."
      },
      {
        "title": "Erstellung von Shorts, Reels und TikTok-Videos",
        "description": "Wer Clips aus langen YouTube-Videos für Hochkantformate schneidet, kann die Originaluntertitel in SRT umwandeln und in Programmen wie CapCut sofort animierte Untertitel einbrennen."
      },
      {
        "title": "Internationale Übersetzung und Synchronisation",
        "description": "Übersetzungsagenturen verlangen standardisierte SRT-Dateien für professionelle CAT-Programme. Eine SRT-Datei gewährleistet eine reibungslose Übergabe an Übersetzer."
      },
      {
        "title": "Rechtssichere Archivierung und Barrierefreiheit",
        "description": "Universitäten und Behörden sind gesetzlich zur Barrierefreiheit verpflichtet. Das Speichern von Untertiteln im offenen .srt-Format garantiert langfristige Lesbarkeit auf allen zukünftigen Systemen."
      }
    ],
    "troubleshootTitle": "Fehlerbehebung bei der SBV in SRT Konvertierung",
    "troubleshootSubtitle": "Lösungen für die häufigsten Stolperfallen beim Umgang mit YouTube-Untertiteln.",
    "troubleshootTips": [
      {
        "issue": "Kryptische Codes wie &amp; oder &#39; Erscheinen im Video",
        "cause": "YouTube hat Sonderzeichen als HTML-Entitäten exportiert, die von Schnittprogrammen buchstabengetreu wiedergegeben werden.",
        "solution": "Aktivieren Sie im Konverter die Option 'HTML-Entitäten Dekodieren'. Sie ersetzt die Codes durch echte Anführungszeichen und Satzzeichen."
      },
      {
        "issue": "Untertitel Enthalten Störende Hinweise wie [Musik] oder [Applaus]",
        "cause": "Die automatische Spracherkennung fügt akustische Deskriptoren ein, die im finalen Dialogtext oft unerwünscht sind.",
        "solution": "Wählen Sie 'Geräusch-Deskriptoren Entfernen', um Tags in eckigen Klammern automatisch herausfiltern zu lassen."
      },
      {
        "issue": "Schnittprogramm Meldet Syntaxfehler Beim Importieren",
        "cause": "Fehlende Leerzeilen zwischen Blöcken, unvollständige Stundenangaben oder Punkte statt Kommas in den Millisekunden.",
        "solution": "Unser Konverter erzeugt eine lückenlos validierte SRT-Struktur, die von Premiere, DaVinci und Final Cut garantiert akzeptiert wird."
      },
      {
        "issue": "Umlaute und Sonderzeichen Werden Zerstört Dargestellt",
        "cause": "Die Datei wurde fälschlicherweise in Windows-1252 (ANSI) statt UTF-8 gespeichert.",
        "solution": "Unser Konverter arbeitet durchgängig mit modernem UTF-8, wodurch deutsche Umlaute (ä, ö, ü, ß) und Sonderzeichen fehlerfrei erhalten bleiben."
      }
    ],
    "conclusionTitle": "Fazit: Schnelle, Kostenlose und Sichere SBV in SRT Konvertierung",
    "conclusionText": [
      "Die Umwandlung der proprietären .sbv-Untertitel von YouTube in universelle SubRip .srt-Dateien ist ein elementarer Arbeitsschritt für jeden modernen Videoproduzenten. Ob für den professionellen Schnitt in Premiere Pro, das Veröffentlichen auf LinkedIn oder barrierefreie Archive: SRT garantiert maximale Kompatibilität auf allen Endgeräten.",
      "Mit SRTConverters steht Ihnen eine schnelle, schlanke und zu 100 % private Lösung zur Verfügung, die vollständig in Ihrem Browser arbeitet. Keine Downloads, keine Anmeldung und kein Hochladen auf fremde Server. Speichern Sie diese Seite als Lesezeichen und konvertieren Sie Ihre SBV-Dateien in Sekundenschnelle."
    ]
  },
  "id": {
    "introTitle": "Panduan Lengkap Konversi Subtitle SBV ke SRT",
    "introSubtitle": "Kuasai konversi subtitle YouTube SubViewer (.sbv) ke format standar universal SubRip (.srt). Pelajari perbedaan format waktu, cara decode entitas HTML dengan bersih, serta cara mudah mengimpor subtitle YouTube ke Premiere Pro, DaVinci Resolve, Final Cut Pro, dan VLC.",
    "introText": [
      "YouTube adalah platform streaming video terbesar di dunia dengan miliaran jam penayangan setiap harinya. Bagi para kreator konten, pendidik, dan tim produksi video, subtitle adalah elemen krusial untuk aksesibilitas, SEO internasional, dan kenyamanan penonton. Ketika Anda membuat atau mentranskripsikan subtitle otomatis di YouTube Studio lalu mengunduhnya, YouTube menyediakan file dengan ekstensi .sbv — yang dikenal sebagai format YouTube SubViewer.",
      "Namun, saat Anda mencoba menggunakan file .sbv tersebut di luar YouTube — misalnya membukanya di software editing video profesional seperti Adobe Premiere Pro, DaVinci Resolve, atau Final Cut Pro, memutarnya di VLC, atau mengunggahnya ke LinkedIn atau Facebook —, Anda akan menemukan bahwa hampir tidak ada software yang mendukung format .sbv secara native. Standar industri yang diakui secara universal adalah SubRip (.srt).",
      "Mengonversi SBV ke SRT menjembatani kendala teknis ini. Meskipun keduanya merupakan format teks biasa yang memuat dialog dan penanda waktu, keduanya sangat berbeda dalam sintaksis timestamp, penomoran baris, pemisah waktu, dan pengodean karakter HTML. Panduan teknis ini mengupas tuntas struktur format SBV, mekanisme konversinya ke SRT, solusi untuk kode HTML yang mengganggu, serta tips alur kerja video yang efisien."
    ],
    "whatIsTitle": "Apa itu File SBV? Mengenal Format SubViewer YouTube",
    "whatIsText": [
      "File SBV (.sbv) adalah format subtitle teks polos yang dikembangkan oleh Google khusus untuk mengelola subtitle di YouTube. Nama ini merupakan singkatan dari 'SubViewer', yang merujuk pada format SubViewer 2.0 karya David Vignoni yang telah disederhanakan secara radikal. Berbeda dengan pendahulunya yang menggunakan header metadata ([INFORMATION]) dan tag [br], format YouTube sangat ringkas dan to-the-point.",
      "Dalam file SBV, setiap blok subtitle diawali langsung oleh baris timestamp yang memuat waktu mulai dan waktu selesai dipisahkan oleh satu tanda koma: 'H:MM:SS.mmm,H:MM:SS.mmm', diikuti langsung oleh teks dialog, dengan baris kosong sebagai pemisah antarblok. Ciri khas SBV antara lain tidak memiliki nomor urut baris, menggunakan titik desimal sebelum milidetik, dan kerap memakai format jam satu digit (contohnya '0:01:23.450').",
      "Sebaliknya, SubRip (.srt) diciptakan pada akhir era 1990-an sebagai bagian dari program ripping DVD SubRip dan kini menjadi standar global untuk subtitle eksternal. File SRT memiliki struktur baku empat baris per blok: nomor urut bilangan bulat (1, 2, 3...), baris waktu dengan jam dua digit dan koma sebelum milidetik yang dihubungkan tanda panah ('00:01:23,450 --> 00:01:28,900'), teks dialog, serta baris kosong penutup. Karena hampir semua pemutar video dan Smart TV mendukung SRT, mengonversi SBV ke SRT adalah kebutuhan harian yang sangat penting."
    ],
    "whyConvertTitle": "Mengapa Perlu Mengonversi Subtitle SBV YouTube ke SRT?",
    "whyConvertSubtitle": "Ketahui keuntungan praktis mengalihkan subtitle YouTube Anda ke format universal SubRip (.srt).",
    "whyConvertReasons": [
      {
        "title": "Kompatibilitas Universal dengan Editor Video",
        "description": "Software pengedit video profesional seperti Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro, dan CapCut tidak mendukung file .sbv. Mengonversi ke .srt memungkinkan Anda mengimpor teks langsung ke timeline sebagai trek subtitle yang dapat diedit."
      },
      {
        "title": "Publikasi Lintas Platform Media Sosial",
        "description": "Saat membagikan ulang video YouTube ke LinkedIn, Facebook, Twitter/X, atau Vimeo, platform tersebut mewajibkan file .srt untuk closed captions."
      },
      {
        "title": "Dukungan Penuh Pemutar Media & Smart TV",
        "description": "Aplikasi pemutar video (VLC, MPC-HC, IINA, MPV) dan Smart TV (Samsung, LG, Android TV) membaca subtitle .srt secara native, sedangkan file .sbv diabaikan atau gagal diputar."
      },
      {
        "title": "Menghilangkan Karakter Kode HTML yang Mengganggu",
        "description": "Ekspor YouTube sering memuat entitas HTML mentah seperti '&amp;' untuk tanda &, '&#39;' untuk tanda petik, dan '&quot;' untuk kutip dua. Konversi yang tepat mengubahnya menjadi tanda baca yang bersih dan enak dibaca."
      },
      {
        "title": "Mempermudah Alur Penerjemahan dan Lokalisasi",
        "description": "Agensi penerjemahan dan software CAT (Trados, MemoQ, Smartcat) mengharuskan file SRT atau VTT untuk proses translasi, menjadikan SRT format standar industri."
      }
    ],
    "howToTitle": "Cara Konversi SBV ke SRT Online (Langkah demi Langkah)",
    "howToSubtitle": "Ikuti langkah sederhana ini untuk mengubah subtitle YouTube menjadi file SubRip .srt yang rapi dalam hitungan detik.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Unduh Subtitle dari YouTube Studio",
        "description": "Buka YouTube Studio > Subtitle, pilih video Anda, klik menu titik tiga di sebelah trek subtitle yang ingin diunduh, lalu pilih Download > .sbv."
      },
      {
        "step": "2",
        "title": "Unggah atau Tempel ke Konverter",
        "description": "Tarik dan lepas file 'captions.sbv' Anda ke kotak upload di bagian atas halaman ini, atau buka file di Notepad lalu salin-tempel teksnya langsung."
      },
      {
        "step": "3",
        "title": "Atur Opsi Pembersihan Teks",
        "description": "Aktifkan opsi 'Decode Entitas HTML' untuk merapikan kode seperti &amp; dan &#39;, serta centang 'Hapus Deskripsi Suara' jika ingin membuang penanda [Musik]."
      },
      {
        "step": "4",
        "title": "Unduh File .SRT Standar",
        "description": "Klik tombol 'Unduh .SRT' untuk langsung menyimpan file SubRip Anda, siap dipakai di Premiere Pro, DaVinci Resolve, VLC, atau pemutar video lainnya."
      }
    ],
    "differenceTitle": "Perbandingan Teknis: Arsitektur SBV vs. SRT",
    "differenceSubtitle": "Pahami perbedaan struktural dan sintaksis antara format YouTube SubViewer dan SubRip.",
    "differenceTable": [
      {
        "feature": "Pengembang / Asal-Usul",
        "sbv": "Google / YouTube (varian SubViewer)",
        "srt": "Brain / Proyek SubRip DVD"
      },
      {
        "feature": "Ekstensi File",
        "sbv": ".sbv (terkadang .sub)",
        "srt": ".srt"
      },
      {
        "feature": "Penomoran Blok / Indeks",
        "sbv": "Tidak ada (langsung waktu)",
        "srt": "Wajib nomor bulat urut (1, 2, 3...)"
      },
      {
        "feature": "Pemisah Waktu",
        "sbv": "Koma tunggal tanpa spasi (',')",
        "srt": "Tanda panah dengan spasi (' --> ')"
      },
      {
        "feature": "Pemisah Milidetik",
        "sbv": "Titik desimal ('.')",
        "srt": "Koma desimal (',') standar Eropa"
      },
      {
        "feature": "Format Jam",
        "sbv": "Sering satu digit ('0:01:23.450')",
        "srt": "Ketat dua digit ('00:01:23,450')"
      },
      {
        "feature": "Pengodean Karakter HTML",
        "sbv": "Kerap muncul (&amp;, &#39;, &quot;)",
        "srt": "Teks polos UTF-8 atau tag dasar (<i>, <b>)"
      },
      {
        "feature": "Kompatibilitas Software",
        "sbv": "Hanya YouTube Studio",
        "srt": "Universal (Premiere, Resolve, VLC, TV, Web)"
      }
    ],
    "youtubeWorkflowTitle": "Cara Mengunduh Subtitle SBV dari YouTube Studio",
    "youtubeWorkflowSubtitle": "Panduan praktis untuk mengekstrak subtitle otomatis atau manual langsung dari akun YouTube Anda.",
    "youtubeWorkflowSteps": [
      {
        "step": "1",
        "title": "Buka YouTube Studio",
        "description": "Masuk dengan akun kreator Anda di studio.youtube.com dan pastikan Anda berada di channel yang memiliki video target."
      },
      {
        "step": "2",
        "title": "Pilih Menu Subtitle",
        "description": "Di bilah menu navigasi sebelah kiri, klik 'Subtitle' untuk melihat daftar seluruh video yang memiliki trek subtitle."
      },
      {
        "step": "3",
        "title": "Pilih Video yang Diinginkan",
        "description": "Klik pada thumbnail atau judul video untuk membuka rincian bahasa subtitle video tersebut."
      },
      {
        "step": "4",
        "title": "Cari Trek Subtitle Target",
        "description": "Arahkan kursor ke trek subtitle yang telah dipublikasikan (subtitle otomatis atau subtitle yang diunggah manual)."
      },
      {
        "step": "5",
        "title": "Unduh dalam Format .sbv",
        "description": "Klik ikon tiga titik (Opsi) di sebelah kanan, pilih 'Download', lalu klik opsi '.sbv'. File akan otomatis tersimpan di komputer Anda."
      }
    ],
    "architectureTitle": "Arsitektur Timestamp: Bagaimana SBV Dikonversi Menjadi SRT",
    "architectureSubtitle": "Ulasan mendalam tentang transformasi matematis dan sintaksis kode waktu subtitle.",
    "architectureText": [
      "Inti dari konversi format subtitle terletak pada penyesuaian kode waktunya. Karena SBV dan SRT sama-sama berbasis waktu nyata (berbeda dari format berbasis frame seperti MicroDVD), titik waktu awal dan akhirnya sama persis, tetapi penulisan sintaksisnya sangat berbeda.",
      "Pada file SBV, format waktu ditulis sebagai: 'H:MM:SS.mmm,H:MM:SS.mmm'. Misalnya, subtitle yang muncul pada menit ke-1, detik ke-23, dan 450 milidetik ditulis sebagai '0:01:23.450,0:01:27.800'. Format ini memiliki tiga ciri khusus: jam hanya satu digit ('0:'), milidetik didahului tanda titik ('.'), dan waktu mulai serta selesai digabungkan oleh satu tanda koma tanpa spasi.",
      "Untuk mengubahnya menjadi sintaksis SubRip SRT yang valid, dilakukan empat perubahan utama: (1) Menambahkan nomor urut ('1') di atas blok teks. (2) Menambahkan angka nol di depan jam satu digit ('00:') agar memenuhi aturan dua digit. (3) Mengganti titik desimal milidetik menjadi koma (','). (4) Mengganti koma pemisah waktu dengan tanda panah berspasi (' --> '). Hasil akhirnya menjadi '00:01:23,450 --> 00:01:27,800'."
    ],
    "exampleTitle": "Contoh Nyata: Sebelum dan Sesudah Konversi",
    "exampleIntro": "Lihat perbedaan langsung antara teks input YouTube SBV dan hasil output SubRip SRT standar:",
    "exampleSbvInput": "0:00:01.200,0:00:04.850\nSelamat datang di tutorial &quot;Editing Video&quot; kami!\n\n0:00:05.100,0:00:09.300\n[Musik]\nHari ini kita akan mempelajari color grading &amp; mixing audio.",
    "exampleSrtOutput": "1\n00:00:01,200 --> 00:00:04,850\nSelamat datang di tutorial \"Editing Video\" kami!\n\n2\n00:00:05,100 --> 00:00:09,300\nHari ini kita akan mempelajari color grading & mixing audio.",
    "exampleExplanation": "Pada contoh di atas terjadi tiga penyempurnaan utama: (1) Nomor urut 1 dan 2 berhasil ditambahkan. (2) Format waktu disesuaikan dengan jam dua digit, tanda panah, dan koma milidetik. (3) Kode HTML &quot; dan &amp; didekode menjadi tanda kutip dan simbol &, sementara penanda suara [Musik] dihapus secara rapi.",
    "htmlEntitiesTitle": "Entitas HTML pada Subtitle YouTube: Kode Populer dan Solusinya",
    "htmlEntitiesSubtitle": "Mengapa YouTube mengekspor kode HTML dan bagaimana konverter kami merapikannya.",
    "htmlEntitiesTable": [
      {
        "entity": "&amp;",
        "decoded": "&",
        "description": "Simbol ampersand / dan. Kerap muncul pada nama merek, judul, dan percakapan."
      },
      {
        "entity": "&#39; atau &apos;",
        "decoded": "'",
        "description": "Tanda petik tunggal atau apostrof. Penting untuk penulisan kutipan dan singkatan."
      },
      {
        "entity": "&quot;",
        "decoded": "\"",
        "description": "Tanda kutip ganda. Digunakan untuk menyorot dialog langsung atau istilah penting."
      },
      {
        "entity": "&lt;",
        "decoded": "<",
        "description": "Tanda lebih kecil dari. Kerap dipakai dalam rumus matematika atau tutorial pemrograman."
      },
      {
        "entity": "&gt;",
        "decoded": ">",
        "description": "Tanda lebih besar dari. Dipakai dalam formula atau indikator pembicara (>>)."
      },
      {
        "entity": "&nbsp;",
        "decoded": " (spasi)",
        "description": "Spasi tanpa pemutus baris. Digunakan browser agar susunan kata tidak terpotong canggung."
      }
    ],
    "ffmpegTitle": "Konversi via Command Line: Mengubah SBV ke SRT dengan FFmpeg",
    "ffmpegSubtitle": "Otomatisasi konversi massal menggunakan skrip terminal untuk developer dan editor video.",
    "ffmpegCommand": "ffmpeg -i captions.sbv -c:s srt output.srt",
    "ffmpegExplanation": [
      "Bagi developer dan editor yang memproses ratusan video YouTube, FFmpeg memiliki dukungan bawaan untuk transkoding subtitle. Perintah di atas membaca file .sbv dan menghasilkan file .srt standar tanpa memproses ulang video.",
      "Untuk konversi massal satu folder penuh di Windows PowerShell: Get-ChildItem *.sbv | ForEach-Object { ffmpeg -i $_.FullName -c:s srt ($_.BaseName + '.srt') }. Di terminal macOS atau Linux: for f in *.sbv; do ffmpeg -i \"$f\" -c:s srt \"${f%.sbv}.srt\"; done.",
      "Namun, FFmpeg tidak secara otomatis membersihkan kode HTML seperti &amp; atau membuang tanda suara seperti [Musik]. Konverter online kami menyelesaikan seluruh kebutuhan tersebut dalam satu langkah instan di browser Anda."
    ],
    "useCasesTitle": "Contoh Penggunaan Nyata Konversi SBV ke SRT",
    "useCasesSubtitle": "Bagaimana para kreator konten dan editor video memanfaatkan alat ini setiap hari.",
    "useCasesList": [
      {
        "title": "Mengimpor Subtitle Otomatis ke Premiere dan DaVinci",
        "description": "Teknologi pengenalan suara YouTube menghasilkan transkripsi otomatis yang sangat akurat. Dengan mengunduh .sbv dan mengonversinya ke .srt, editor mendapatkan subtitle gratis langsung di timeline editing tanpa biaya langganan aplikasi luar."
      },
      {
        "title": "Pembuatan Video Pendek untuk Shorts, Reels, dan TikTok",
        "description": "Saat memotong bagian menarik dari video panjang untuk media sosial vertikal, mengubah subtitle master ke format SRT memudahkan aplikasi seperti CapCut atau Premiere menambahkan subtitle animasi yang dinamis."
      },
      {
        "title": "Penerjemahan dan Internasionalisasi Video",
        "description": "Agensi penerjemah membutuhkan file SRT untuk diimpor ke software CAT. Mengonversi subtitle YouTube ke SRT mempermudah pertukaran berkas dengan tim penerjemah profesional."
      },
      {
        "title": "Pengarsipan Dokumen dan Kepatuhan Aksesibilitas",
        "description": "Lembaga pendidikan dan instansi publik diwajibkan menyediakan video yang ramah disabilitas. Menyimpan transkrip video dalam format standar .srt menjamin arsip tetap dapat diakses di masa depan."
      }
    ],
    "troubleshootTitle": "Mengatasi Masalah Umum Saat Konversi SBV ke SRT",
    "troubleshootSubtitle": "Panduan cepat mengatasi kendala yang kerap terjadi saat memproses subtitle YouTube.",
    "troubleshootTips": [
      {
        "issue": "Muncul Kode Seperti &amp; atau &#39; di Layar Video",
        "cause": "YouTube mengekspor tanda baca sebagai entitas HTML dan software video menampilkannya secara mentah.",
        "solution": "Pastikan opsi 'Decode Entitas HTML' dicentang di konverter kami agar tanda baca asli kembali ditampilkan dengan benar."
      },
      {
        "issue": "Subtitle Memuat Teks Seperti [Musik] atau [Tepuk Tangan]",
        "cause": "Sistem ucapan otomatis YouTube mendeteksi suara latar dan menyisipkan teks deskriptif yang mengotori dialog.",
        "solution": "Aktifkan 'Hapus Deskripsi Suara' untuk membersihkan secara otomatis teks dalam tanda kurung siku tersebut."
      },
      {
        "issue": "Editor Video Menolak File dengan Pesan Error Sintaksis",
        "cause": "Kurang baris kosong antarblok, jam tidak ditulis dua digit, atau pemisah milidetik menggunakan titik alih-alih koma.",
        "solution": "Konverter kami memvalidasi dan merapikan seluruh susunan file sehingga dijamin 100% kompatibel dengan Premiere, DaVinci, dan Final Cut."
      },
      {
        "issue": "Karakter Khusus dan Tanda Baca Terlihat Rusak (Encoding Error)",
        "cause": "File disimpan dengan format ANSI atau Windows-1252 alih-alih format standar UTF-8.",
        "solution": "Konverter kami memproses seluruh berkas menggunakan UTF-8 universal, menjaga huruf dan karakter internasional tetap utuh sempurna."
      }
    ],
    "conclusionTitle": "Kesimpulan: Solusi Konversi SBV ke SRT Cepat, Gratis, dan Aman",
    "conclusionText": [
      "Kemampuan mengubah subtitle .sbv milik YouTube menjadi file SubRip .srt yang kompatibel secara universal merupakan keahlian praktis yang sangat bernilai bagi kreator video masa kini. Baik untuk editing di Premiere Pro, publikasi di media sosial, maupun arsip institusional, format SRT memberikan kepastian kompatibilitas di semua perangkat.",
      "Bersama SRTConverters, Anda menikmati sarana konversi yang instan, ringan, dan 100% menjaga privasi karena bekerja langsung di dalam browser Anda. Tanpa instalasi aplikasi, tanpa pendaftaran, dan tanpa pengunggahan file ke server luar. Simpan halaman ini di bookmark Anda dan nikmati kemudahan konversi SBV ke SRT kapan pun Anda butuhkan."
    ]
  },
  "tr": {
    "introTitle": "SBV'yi SRT Altyazısına Dönüştürme Rehberi",
    "introSubtitle": "YouTube SubViewer (.sbv) altyazılarını evrensel SubRip (.srt) formatına dönüştürmeyi öğrenin. Zaman damgası farklarını, HTML kodlarını temizlemeyi ve YouTube altyazılarını Premiere Pro, DaVinci Resolve, Final Cut Pro ve VLC'ye nasıl aktaracağınızı keşfedin.",
    "introText": [
      "YouTube, dünya genelinde milyarlarca saat içeriğin izlendiği en büyük video platformudur. İçerik üreticileri, eğitimciler ve dijital ajanslar için altyazılar erişilebilirlik, küresel SEO ve izleyici etkileşimi açısından kritik bir öneme sahiptir. YouTube Studio içinde otomatik ya da manuel altyazı oluşturup indirdiğinizde, YouTube size .sbv uzantılı bir dosya verir — bu dosya YouTube SubViewer formatı olarak bilinir.",
      "Ancak indirilen bu .sbv dosyasını YouTube dışında kullanmak istediğinizde — örneğin Adobe Premiere Pro, DaVinci Resolve veya Final Cut Pro gibi kurgu yazılımlarına aktarmayı, VLC veya akıllı TV'lerde oynatmayı ya da LinkedIn ve Facebook gibi platformlara yüklemeyi denediğinizde — bu programların neredeyse hiçbirinin .sbv formatını desteklemediğini görürsünüz. Dijital video sektörünün evrensel altyazı standardı SubRip (.srt)'dir.",
      "SBV'yi SRT'ye dönüştürmek bu teknik engeli ortadan kaldırır. Her iki format da diyalog ve zaman damgası içeren düz metin dosyaları olsa da; zaman damgası sözdizimi, blok numaralandırması, ayraçlar ve HTML karakter kodlaması açısından tamamen farklıdır. Bu kapsamlı rehberde SBV formatını, SRT'ye dönüştürme matematiğini, HTML kodları ve ses efektlerinin nasıl temizleneceğini ve iş akışınızı nasıl hızlandıracağınızı bulacaksınız."
    ],
    "whatIsTitle": "SBV Dosyası Nedir? YouTube'un SubViewer Formatını Anlamak",
    "whatIsText": [
      "SBV (.sbv) dosyası, Google tarafından YouTube altyazılarını yönetmek amacıyla özel olarak geliştirilmiş hafif bir düz metin altyazı formatıdır. İsim, David Vignoni'nin orijinal SubViewer 2.0 formatının sadeleştirilmiş bir türevi olmasından dolayı 'SubViewer' kelimesinden gelir. Üst bilgi başlıkları ([INFORMATION]) ve [br] etiketleri içeren eski formatların aksine YouTube SBV oldukça yalındır.",
      "Bir SBV dosyasında her altyazı bloğu, doğrudan başlangıç ve bitiş zamanını tek bir virgülle ayıran bir zaman damgası satırıyla başlar: 'H:MM:SS.mmm,H:MM:SS.mmm'. Ardından konuşma metni gelir ve bloklar arasında boş satırlar yer alır. SBV'nin belirgin özellikleri arasında sıra numaralarının olmaması, milisaniyelerden önce nokta kullanılması ve saatlerin genellikle tek basamaklı (örneğin '0:01:23.450') yazılması bulunur.",
      "Buna karşılık SubRip (.srt), 1990'ların sonunda DVD kopyalama yazılımı SubRip ile ortaya çıkmış ve harici altyazılarda küresel standart haline gelmiştir. Bir SRT dosyası her blok için dört zorunlu öğe içerir: sıralı bir tam sayı (1, 2, 3...), saatlerin iki basamaklı olduğu ve milisaniyelerden önce virgül bulunan oklu bir zaman satırı ('00:01:23,450 --> 00:01:28,900'), diyalog metni ve bir boş satır. Neredeyse tüm video oynatıcılar ve kurgu araçları SRT'yi doğrudan tanıdığı için SBV'den SRT'ye dönüştürme günlük video üretiminin temel bir parçasıdır."
    ],
    "whyConvertTitle": "YouTube SBV Altyazılarını Neden SRT'ye Dönüştürmelisiniz?",
    "whyConvertSubtitle": "YouTube altyazılarınızı endüstri standardı SubRip (.srt) formatına geçirmenin pratik avantajlarını keşfedin.",
    "whyConvertReasons": [
      {
        "title": "Kurgu Programlarıyla Tam Uyumluluk",
        "description": "Adobe Premiere Pro, DaVinci Resolve, Apple Final Cut Pro ve CapCut gibi profesyonel yazılımlar .sbv dosyalarını açmaz. SRT'ye dönüştürerek altyazıları doğrudan zaman çizelgenize aktarabilirsiniz."
      },
      {
        "title": "Sosyal Medyada Çoklu Platform Paylaşımı",
        "description": "YouTube videolarını LinkedIn, Facebook, Twitter/X veya Vimeo'da yeniden paylaşırken bu platformlar kapalı altyazı için yalnızca .srt dosyalarını kabul eder."
      },
      {
        "title": "Medya Oynatıcılar ve Akıllı TV Desteği",
        "description": "VLC, MPC-HC, IINA ve akıllı televizyonlar (Samsung, LG, Android TV) .srt altyazıları sorunsuz gösterirken .sbv dosyalarını tanımaz."
      },
      {
        "title": "Karmaşık HTML Kodlarının Temizlenmesi",
        "description": "YouTube dışa aktarımlarında '&' işareti için '&amp;', kesme işareti için '&#39;' gibi kodlar yer alır. Kaliteli bir dönüştürme bu kodları temiz ve okunabilir metne çevirir."
      },
      {
        "title": "Kolay Çeviri ve Yerelleştirme",
        "description": "Profesyonel çeviri ajansları ve CAT araçları (Trados, MemoQ, Smartcat) SRT veya VTT formatıyla çalışır; bu da SRT'yi ideal değişim formatı yapar."
      }
    ],
    "howToTitle": "SBV'yi SRT'ye Online Dönüştürme (Adım Adım)",
    "howToSubtitle": "YouTube altyazılarınızı saniyeler içinde kusursuz SubRip .srt dosyalarına dönüştürmek için bu adımları izleyin.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Altyazıyı YouTube Studio'dan İndirin",
        "description": "YouTube Studio > Altyazılar bölümüne gidin, videonuzu seçin, altyazı satırının yanındaki üç noktaya tıklayın ve İndir > .sbv seçeneğini belirleyin."
      },
      {
        "step": "2",
        "title": "Dönüştürücüye Yükleyin veya Yapıştırın",
        "description": "'captions.sbv' dosyanızı yukarıdaki yükleme alanına sürükleyip bırakın veya metni kopyalayarak doğrudan giriş kutusuna yapıştırın."
      },
      {
        "step": "3",
        "title": "Temizleme Ayarlarını Seçin",
        "description": "&amp; ve &#39; gibi kodları düzeltmek için 'HTML Varlıklarını Çözümle'yi etkinleştirin ve [Müzik] gibi ifadeleri silmek için ilgili kutuyu işaretleyin."
      },
      {
        "step": "4",
        "title": "Standart .SRT Dosyasını İndirin",
        "description": "Dönüştürülmüş SubRip dosyanızı kaydetmek için '.SRT İndir' butonuna tıklayın; dosyanız Premiere Pro veya VLC için anında hazır olacaktır."
      }
    ],
    "differenceTitle": "Teknik Karşılaştırma: SBV ve SRT Format Mimarisi",
    "differenceSubtitle": "İki altyazı formatı arasındaki yapısal ve sözdizimsel farkları anlayın.",
    "differenceTable": [
      {
        "feature": "Geliştirici / Köken",
        "sbv": "Google / YouTube (SubViewer türevi)",
        "srt": "Brain / SubRip DVD Projesi"
      },
      {
        "feature": "Dosya Uzantısı",
        "sbv": ".sbv (bazen .sub)",
        "srt": ".srt"
      },
      {
        "feature": "Blok Sıra Numarası",
        "sbv": "Yok (doğrudan zamanla başlar)",
        "srt": "Zorunlu sıralı tam sayı (1, 2, 3...)"
      },
      {
        "feature": "Zaman Ayracı",
        "sbv": "Boşluksuz tek virgül (',')",
        "srt": "Boşluklu ok işareti (' --> ')"
      },
      {
        "feature": "Milisaniye Ayracı",
        "sbv": "Ondalık nokta ('.')",
        "srt": "Avrupa standardı virgül (',')"
      },
      {
        "feature": "Saat Formatı",
        "sbv": "Genellikle tek basamaklı ('0:01:23.450')",
        "srt": "Kesinlikle iki basamaklı ('00:01:23,450')"
      },
      {
        "feature": "HTML Varlıkları",
        "sbv": "Sıkça kodlanmış (&amp;, &#39;, &quot;)",
        "srt": "Düz UTF-8 metin veya basit etiketler (<i>, <b>)"
      },
      {
        "feature": "Yazılım Desteği",
        "sbv": "Neredeyse sadece YouTube Studio",
        "srt": "Evrensel (Premiere, Resolve, VLC, TV, Web)"
      }
    ],
    "youtubeWorkflowTitle": "YouTube Studio'dan SBV Altyazıları Nasıl İndirilir?",
    "youtubeWorkflowSubtitle": "Kanalınızdaki otomatik veya manuel altyazıları indirmek için pratik kılavuz.",
    "youtubeWorkflowSteps": [
      {
        "step": "1",
        "title": "YouTube Studio'ya Giriş Yapın",
        "description": "studio.youtube.com adresine gidin ve ilgili videonun bulunduğu kanal hesabınızda olduğunuzdan emin olun."
      },
      {
        "step": "2",
        "title": "Altyazılar Menüsüne Tıklayın",
        "description": "Sol menü çubuğunda 'Altyazılar' sekmesine tıklayarak altyazısı bulunan tüm videolarınızın listesini açın."
      },
      {
        "step": "3",
        "title": "Videonuzu Seçin",
        "description": "Altyazısını almak istediğiniz videonun başlığına veya küçük resmine tıklayarak dil ayrıntılarına girin."
      },
      {
        "step": "4",
        "title": "Hedef Altyazı Satırını Bulun",
        "description": "İndirmek istediğiniz yayınlanmış altyazı parçasının (örneğin 'Türkçe (Otomatik)' veya manuel yükleme) üzerine gelin."
      },
      {
        "step": "5",
        "title": ".sbv Formatında İndirin",
        "description": "Sağ taraftaki üç dikey noktaya (Seçenekler) tıklayın, 'İndir'i ve ardından '.sbv'yi seçin. Dosya bilgisayarınıza kaydedilecektir."
      }
    ],
    "architectureTitle": "Zaman Damgası Mimarisi: SBV'den SRT'ye Dönüşüm Mantığı",
    "architectureSubtitle": "Zaman kodlarına uygulanan matematiksel ve biçimsel dönüşümün ayrıntıları.",
    "architectureText": [
      "Altyazı dönüştürmenin temelinde zaman kodlarının dönüştürülmesi yatar. Hem SBV hem de SRT gerçek saat zamanına dayandığı için (kare tabanlı MicroDVD formatından farklı olarak), zamanlama noktaları tamamen aynıdır; ancak gösterim sözdizimi oldukça farklıdır.",
      "Bir SBV dosyasında zamanlama: 'H:MM:SS.mmm,H:MM:SS.mmm' şeklinde yazılır. Örneğin 1. dakika, 23. saniye ve 450. milisaniyede başlayan bir konuşma '0:01:23.450,0:01:27.800' olarak ifade edilir. Burada saat tek basamaklıdır, milisaniyeler noktayla ayrılır ve başlangıç-bitiş tek bir virgülle birleşir.",
      "Standart SubRip SRT sözdizimine geçmek için dört aşama uygulanır: (1) Bloğun üstüne sıralı bir numara ('1') eklenir. (2) Tek basamaklı saatin önüne sıfır eklenerek iki basamak ('00:') sağlanır. (3) Milisaniyelerdeki nokta virgüle (',') dönüştürülür. (4) Aradaki virgül boşluklu ok işaretine (' --> ') dönüştürülür. Sonuç satırı kusursuz bir şekilde '00:01:23,450 --> 00:01:27,800' halini alır."
    ],
    "exampleTitle": "Somut Örnek: Dönüşüm Öncesi ve Sonrası",
    "exampleIntro": "YouTube SBV giriş verisi ile temizlenmiş SubRip SRT çıkış verisini karşılaştırın:",
    "exampleSbvInput": "0:00:01.200,0:00:04.850\n&quot;Video Kurgu&quot; eğitimimize hoş geldiniz!\n\n0:00:05.100,0:00:09.300\n[Müzik]\nBugün renk düzenleme &amp; ses miksajı konularını işliyoruz.",
    "exampleSrtOutput": "1\n00:00:01,200 --> 00:00:04,850\n\"Video Kurgu\" eğitimimize hoş geldiniz!\n\n2\n00:00:05,100 --> 00:00:09,300\nBugün renk düzenleme & ses miksajı konularını işliyoruz.",
    "exampleExplanation": "Bu örnekte üç temel iyileştirme gerçekleşti: (1) 1 ve 2 numaralı blok indeksleri eklendi. (2) Zaman damgaları iki basamaklı saat, ok simgesi ve milisaniye virgülleriyle biçimlendirildi. (3) &quot; ve &amp; kodları tırnak ve & sembolüne dönüştürüldü; [Müzik] etiketi temizlendi.",
    "htmlEntitiesTitle": "YouTube Altyazılarında HTML Varlıkları ve Düzeltmeleri",
    "htmlEntitiesSubtitle": "YouTube'un neden özel karakterleri kodladığı ve dönüştürücümüzün bunları nasıl temizlediği.",
    "htmlEntitiesTable": [
      {
        "entity": "&amp;",
        "decoded": "&",
        "description": "Ve işareti / ampersand. Marka adlarında, başlıklarda ve diyaloglarda sıkça görülür."
      },
      {
        "entity": "&#39; veya &apos;",
        "decoded": "'",
        "description": "Kesme işareti veya tek tırnak. Alıntılarda ve özel isimlerde gereklidir."
      },
      {
        "entity": "&quot;",
        "decoded": "\"",
        "description": "Çift tırnak işareti. Vurgulanan kelimeler ve doğrudan konuşmalar için kullanılır."
      },
      {
        "entity": "&lt;",
        "decoded": "<",
        "description": "Küçüktür işareti. Matematiksel anlatımlarda veya kodlama derslerinde yer alabilir."
      },
      {
        "entity": "&gt;",
        "decoded": ">",
        "description": "Büyüktür işareti. Formüllerde veya konuşmacı belirtecinde (>>) kullanılır."
      },
      {
        "entity": "&nbsp;",
        "decoded": " (boşluk)",
        "description": "Bölünemez boşluk. Web tarayıcılarında kelimelerin yanlış satıra kaymasını önler."
      }
    ],
    "ffmpegTitle": "Komut Satırında Dönüştürme: FFmpeg ile SBV'den SRT'ye",
    "ffmpegSubtitle": "Geliştiriciler ve stüdyolar için terminal betikleriyle toplu dönüştürme.",
    "ffmpegCommand": "ffmpeg -i captions.sbv -c:s srt output.srt",
    "ffmpegExplanation": [
      "Yüzlerce videoyla çalışan kurgucular ve geliştiriciler için FFmpeg yerel altyazı dönüştürme yetenekleri sunar. Yukarıdaki komut girdi dosyasını okur ve videoyu yeniden işlemeden standart bir .srt dosyası üretir.",
      "Windows PowerShell'de bir klasördeki tüm dosyaları topluca dönüştürmek için: Get-ChildItem *.sbv | ForEach-Object { ffmpeg -i $_.FullName -c:s srt ($_.BaseName + '.srt') }. macOS veya Linux terminalinde: for f in *.sbv; do ffmpeg -i \"$f\" -c:s srt \"${f%.sbv}.srt\"; done.",
      "Bununla birlikte FFmpeg, &amp; gibi HTML kodlarını otomatik çözmez ve [Müzik] etiketlerini ayıklamaz. Çevrim içi dönüştürücümüz tüm bu işlemleri tek adımda tarayıcınızda halleder."
    ],
    "useCasesTitle": "SBV - SRT Dönüştürmenin Gerçek Kullanım Alanları",
    "useCasesSubtitle": "İçerik üreticilerinin ve video uzmanlarının bu aracı günlük işlerinde nasıl kullandığı.",
    "useCasesList": [
      {
        "title": "YouTube Otomatik Altyazılarını Premiere ve DaVinci'ye Aktarma",
        "description": "YouTube'un konuşma tanıma motoru oldukça başarılı metinler üretir. .sbv dosyasını .srt'ye çevirerek üçüncü taraf transkripsiyon servislerine ücret ödemeden kurgu programınızda hazır altyazılara sahip olabilirsiniz."
      },
      {
        "title": "Shorts, Reels ve TikTok İçin Dikey Video Üretimi",
        "description": "Uzun videolardan dikey format için kesitler alırken ana altyazıyı SRT'ye çevirmek, CapCut veya Premiere gibi araçlarda dinamik altyazıların anında eklenmesini sağlar."
      },
      {
        "title": "Küresel Çeviri ve Yerelleştirme Süreçleri",
        "description": "Profesyonel çeviri büroları CAT yazılımları için SRT formatı talep eder. Altyazıları SRT'ye dönüştürmek çevirmenlerle sorunsuz çalışmayı mümkün kılar."
      },
      {
        "title": "Erişilebilirlik ve Kurumsal Arşivleme",
        "description": "Eğitim kurumları ve şirketler erişilebilirlik standartlarına uymak zorundadır. Altyazıları evrensel .srt standardında arşivlemek uzun vadeli erişim garantisi sunar."
      }
    ],
    "troubleshootTitle": "SBV - SRT Dönüştürmede Sık Karşılaşılan Sorunlar",
    "troubleshootSubtitle": "YouTube altyazılarıyla ilgili en yaygın hatalar ve pratik çözüm yolları.",
    "troubleshootTips": [
      {
        "issue": "Videoda &amp; veya &#39; Gibi Kodlar Görünüyor",
        "cause": "YouTube noktalama işaretlerini HTML kodu olarak dışa aktardı ve kurgu programı bunları harfi harfine gösterdi.",
        "solution": "Dönüştürücümüzdeki 'HTML Varlıklarını Çözümle' kutucuğunun işaretli olduğundan emin olun; gerçek noktalama işaretleri geri yüklenecektir."
      },
      {
        "issue": "Altyazılarda [Müzik] Gibi İstenmeyen İfadeler Var",
        "cause": "Otomatik ses tanıma sistemi diyalog dışındaki sesleri köşeli parantez içinde altyazıya ekler.",
        "solution": "'Ses Açıklamalarını Kaldır' seçeneğini işaretleyerek bu tür parantez içi akustik ifadelerin temizlenmesini sağlayın."
      },
      {
        "issue": "Kurgu Programı Sözdizimi Hatası Veriyor ve Dosyayı Açmıyor",
        "cause": "Bloklar arasında boş satır eksikliği, tek basamaklı saatler veya milisaniyelerde nokta kullanılması.",
        "solution": "Aracımız tüm SRT sözdizimini standartlara göre normalize ederek Premiere, DaVinci ve Final Cut ile tam uyum sağlar."
      },
      {
        "issue": "Türkçe Karakterler ve Noktalama Bozuk Görünüyor (Encoding Hatası)",
        "cause": "Dosya UTF-8 yerine ANSI veya Windows-1254 olarak kaydedilmiştir.",
        "solution": "Aracımız tüm metinleri evrensel UTF-8 standardında işler; Türkçe karakterler (ç, ğ, ı, ö, ş, ü) ve özel işaretler kusursuz korunur."
      }
    ],
    "conclusionTitle": "Sonuç: Hızlı, Ücretsiz ve Güvenli SBV - SRT Dönüşümü",
    "conclusionText": [
      "YouTube'a özgü .sbv altyazılarını evrensel SubRip .srt dosyalarına kolayca dönüştürebilmek her dijital video üreticisi için vazgeçilmez bir kolaylıktır. İster Premiere Pro'da kurgu yapın, ister sosyal medyada paylaşın ya da kurumsal arşiv oluşturun; SRT formatı tüm ortamlarda maksimum uyumluluk sağlar.",
      "SRTConverters ile tamamen tarayıcınızda çalışan, hızlı, hafif ve %100 gizlilik odaklı bir deneyim elde edersiniz. Kurulum yok, üyelik yok ve dosyalarınız asla sunuculara yüklenmez. Bu sayfayı yer işaretlerinize ekleyin ve altyazılarınızı saniyeler içinde dönüştürün."
    ]
  },
  "it": {
    "introTitle": "La Guida Completa per Convertire Sottotitoli SBV in SRT",
    "introSubtitle": "Impara a convertire i sottotitoli YouTube SubViewer (.sbv) nello standard universale SubRip (.srt). Scopri le differenze di sintassi temporale, come decodificare le entità HTML e come importare facilmente i sottotitoli di YouTube in Premiere Pro, DaVinci Resolve, Final Cut Pro e VLC.",
    "introText": [
      "YouTube è la principale piattaforma video al mondo, con miliardi di ore di contenuti visualizzati quotidianamente. Per creator, formatori ed emittenti, i sottotitoli rappresentano uno strumento indispensabile per garantire accessibilità, posizionamento SEO internazionale e fidelizzazione del pubblico. Quando crei o scarichi sottotitoli automatici tramite YouTube Studio, la piattaforma genera un file con estensione .sbv — comunemente denominato formato YouTube SubViewer.",
      "Tuttavia, quando tenti di utilizzare quel file .sbv al di fuori di YouTube — che si tratti di importarlo in software di montaggio video professionale come Adobe Premiere Pro, DaVinci Resolve o Final Cut Pro, di riprodurlo su VLC o Plex, oppure di caricarlo su LinkedIn o Facebook —, scoprirai che quasi nessun programma supporta il formato .sbv in modo nativo. Lo standard universale incontrastato dell'industria multimediale è il SubRip (.srt).",
      "Convertire SBV in SRT supera questo ostacolo tecnico. Sebbene entrambi siano formati di testo semplice contenenti battute e timestamp, differiscono profondamente nella sintassi dei codici orari, nella numerazione dei blocchi, nei delimitatori e nella codifica dei caratteri HTML. Questa guida tecnica approfondisce l'architettura del formato SBV, le regole matematiche per la conversione in SRT, la pulizia dei codici HTML e le migliori pratiche per flussi di lavoro professionali."
    ],
    "whatIsTitle": "Cos'è un File SBV? Comprendere il Formato SubViewer di YouTube",
    "whatIsText": [
      "Un file SBV (.sbv) è un formato di sottotitoli in testo semplice sviluppato da Google specificamente per la gestione dei sottotitoli all'interno di YouTube. L'acronimo deriva da 'SubViewer', trattandosi di una variante estremamente semplificata del formato SubViewer 2.0 ideato in origine da David Vignoni. A differenza del predecessore, che richiedeva metadati ([INFORMATION]) e tag [br], il formato di YouTube è ridotto all'essenziale.",
      "In un file SBV, ogni blocco inizia direttamente con una riga contenente i tempi di inizio e fine separati da una singola virgola: 'H:MM:SS.mmm,H:MM:SS.mmm', seguita dal testo della battuta, con righe vuote a separare i blocchi successivi. Le caratteristiche distintive di SBV sono l'assenza di indici numerici sequenziali, l'uso del punto decimale per i millisecondi e l'uso frequente di ore a cifra singola (ad esempio '0:01:23.450').",
      "Al contrario, SubRip (.srt) è nato alla fine degli anni '90 con il software di estrazione DVD SubRip ed è diventato lo standard universale per i sottotitoli video. Un file SRT richiede quattro componenti rigide per blocco: un numero d'indice intero (1, 2, 3...), una riga temporale con ore a due cifre e virgole per i millisecondi unite da una freccia ('00:01:23,450 --> 00:01:28,900'), il testo della battuta e una riga vuota finale. Poiché tutti i lettori e software leggono SRT, convertire SBV in SRT è un'operazione quotidiana indispensabile."
    ],
    "whyConvertTitle": "Perché Convertire i Sottotitoli SBV di YouTube in SRT?",
    "whyConvertSubtitle": "Scopri i vantaggi pratici nel migrare i tuoi sottotitoli di YouTube verso lo standard universale SubRip (.srt).",
    "whyConvertReasons": [
      {
        "title": "Compatibilità Totale con i Software di Montaggio",
        "description": "Software di editing come Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro e CapCut non leggono i file .sbv. Convertire in .srt consente di importare i sottotitoli direttamente sulla timeline come tracce modificabili."
      },
      {
        "title": "Pubblicazione Multi-Piattaforma sui Social Network",
        "description": "Quando riutilizzi i video di YouTube su LinkedIn, Facebook, Twitter/X o Vimeo, queste piattaforme richiedono obbligatoriamente file .srt per i sottotitoli chiusi."
      },
      {
        "title": "Supporto Nativo su Lettori Multimediali e Smart TV",
        "description": "Player video (VLC, MPC-HC, IINA, MPV) e smart TV (Samsung, LG, Android TV) leggono i sottotitoli .srt senza configurazioni, mentre i file .sbv vengono ignorati."
      },
      {
        "title": "Eliminazione di Codici HTML Antiestetici",
        "description": "I file esportati da YouTube contengono spesso codici come '&amp;' per la e commerciale e '&#39;' per gli apostrofi. La conversione in SRT li decodifica in testo chiaro e naturale."
      },
      {
        "title": "Flusso Semplificato per Traduzione e Localizzazione",
        "description": "Agenzie di traduzione e software CAT (Trados, MemoQ, Smartcat) accettano solo file SRT o VTT, rendendo il formato SRT indispensabile per progetti multilingue."
      }
    ],
    "howToTitle": "Come Convertire SBV in SRT Online (Passo dopo Passo)",
    "howToSubtitle": "Segui questi semplici passaggi per trasformare i tuoi sottotitoli di YouTube in file SubRip .srt perfetti in pochi istanti.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Scarica i Sottotitoli da YouTube Studio",
        "description": "Accedi a YouTube Studio > Sottotitoli, seleziona il video, clicca sui tre puntini accanto alla traccia desiderata e seleziona Scarica > .sbv."
      },
      {
        "step": "2",
        "title": "Carica o Incolla nel Convertitore",
        "description": "Trascina il file 'captions.sbv' nell'area di upload in alto oppure copia e incolla il testo direttamente nella casella di testo."
      },
      {
        "step": "3",
        "title": "Imposta le Opzioni di Pulizia",
        "description": "Attiva 'Decodifica Entità HTML' per ripristinare &amp; e &#39;, e spunta opzionalmente 'Rimuovi Descrittori Audio' per cancellare etichette come [Musica]."
      },
      {
        "step": "4",
        "title": "Scarica il File .SRT Standard",
        "description": "Fai clic su 'Scarica .SRT' per salvare subito il tuo file, pronto per essere inserito in Premiere Pro, DaVinci Resolve, VLC o sui tuoi canali social."
      }
    ],
    "differenceTitle": "Confronto Tecnico: Architettura SBV contro SRT",
    "differenceSubtitle": "Comprendi le differenze strutturali e sintattiche tra i due formati di sottotitoli.",
    "differenceTable": [
      {
        "feature": "Sviluppatore / Origine",
        "sbv": "Google / YouTube (variante SubViewer)",
        "srt": "Brain / Progetto SubRip DVD"
      },
      {
        "feature": "Estensione File",
        "sbv": ".sbv (talvolta .sub)",
        "srt": ".srt"
      },
      {
        "feature": "Numero d'Indice del Blocco",
        "sbv": "Nessuno (inizia subito con l'orario)",
        "srt": "Intero sequenziale obbligatorio (1, 2, 3...)"
      },
      {
        "feature": "Separatore di Timestamp",
        "sbv": "Virgola singola senza spazi (',')",
        "srt": "Freccia con spazi (' --> ')"
      },
      {
        "feature": "Separatore dei Millisecondi",
        "sbv": "Punto decimale ('.')",
        "srt": "Virgola decimale (',') standard europeo"
      },
      {
        "feature": "Formato delle Ore",
        "sbv": "Spesso a cifra singola ('0:01:23.450')",
        "srt": "Rigorosamente a due cifre ('00:01:23,450')"
      },
      {
        "feature": "Codifica Entità HTML",
        "sbv": "Frequente (&amp;, &#39;, &quot;)",
        "srt": "Testo puro UTF-8 o tag essenziali (<i>, <b>)"
      },
      {
        "feature": "Compatibilità Software",
        "sbv": "Praticamente limitata a YouTube Studio",
        "srt": "Universale (Premiere, Resolve, VLC, Smart TV)"
      }
    ],
    "youtubeWorkflowTitle": "Come Scaricare i Sottotitoli SBV da YouTube Studio",
    "youtubeWorkflowSubtitle": "Guida passo dopo passo per esportare i sottotitoli automatici o manuali dal tuo canale.",
    "youtubeWorkflowSteps": [
      {
        "step": "1",
        "title": "Accedi a YouTube Studio",
        "description": "Entra su studio.youtube.com con il tuo account creator e accertati di trovarti nel canale proprietario del video."
      },
      {
        "step": "2",
        "title": "Apri la Sezione Sottotitoli",
        "description": "Nel menu laterale a sinistra, clicca su 'Sottotitoli' per visualizzare l'elenco dei video con tracce testuali."
      },
      {
        "step": "3",
        "title": "Seleziona il Video Desiderato",
        "description": "Fai clic sul titolo o sulla miniatura del video per accedere ai dettagli delle tracce linguistiche."
      },
      {
        "step": "4",
        "title": "Individua la Traccia da Scaricare",
        "description": "Passa il mouse sulla traccia pubblicata (generata automaticamente o caricata manualmente)."
      },
      {
        "step": "5",
        "title": "Scarica in Formato .sbv",
        "description": "Clicca sui tre puntini verticali (Opzioni) a destra, seleziona 'Scarica' e scegli '.sbv'. Il file verrà salvato sul tuo computer."
      }
    ],
    "architectureTitle": "Architettura dei Timestamp: Come SBV Viene Trasformato in SRT",
    "architectureSubtitle": "La trasformazione matematica e sintattica dei codici orari spiegata nei dettagli.",
    "architectureText": [
      "Il fulcro della conversione risiede nell'adattamento dei codici orari. Essendo entrambi formati basati sul tempo reale (a differenza dei formati a fotogrammi come MicroDVD), i punti temporali sono identici, ma la loro rappresentazione sintattica è profondamente differente.",
      "In un file SBV, i codici orari appaiono come: 'H:MM:SS.mmm,H:MM:SS.mmm'. Ad esempio, una battuta che inizia al minuto 1, secondo 23 e 450 millisecondi viene scritta '0:01:23.450,0:01:27.800'. Vi sono tre caratteristiche: l'ora ha spesso una sola cifra ('0:'), i millisecondi sono preceduti da un punto ('.') e inizio e fine sono legati da una virgola priva di spazi.",
      "Per ottenere una sintassi SubRip SRT valida, intervengono quattro passaggi: (1) Viene generato un contatore sequenziale ('1') sopra il blocco. (2) L'ora a cifra singola riceve uno zero iniziale ('00:') per soddisfare lo standard a due cifre. (3) Il punto dei millisecondi viene sostituito da una virgola (','). (4) La virgola centrale viene sostituita dalla freccia con spazi (' --> '). La riga risultante diventa perfettamente '00:01:23,450 --> 00:01:27,800'."
    ],
    "exampleTitle": "Esempio Pratico: Prima e Dopo la Conversione",
    "exampleIntro": "Confronta l'input originale YouTube SBV con l'output generato in formato SubRip SRT standard:",
    "exampleSbvInput": "0:00:01.200,0:00:04.850\nBenvenuti al nostro tutorial sul &quot;Montaggio Video&quot;!\n\n0:00:05.100,0:00:09.300\n[Musica]\nOggi parleremo di color grading &amp; missaggio audio.",
    "exampleSrtOutput": "1\n00:00:01,200 --> 00:00:04,850\nBenvenuti al nostro tutorial sul \"Montaggio Video\"!\n\n2\n00:00:05,100 --> 00:00:09,300\nOggi parleremo di color grading & missaggio audio.",
    "exampleExplanation": "In questo esempio si notano tre importanti miglioramenti: (1) Aggiunti gli indici 1 e 2 per ciascun blocco. (2) I codici orari sono stati formattati con ore a due cifre, freccia e virgole per i millisecondi. (3) I codici HTML &quot; e &amp; sono stati trasformati in virgolette e nel simbolo &, mentre il tag [Musica] è stato rimosso.",
    "htmlEntitiesTitle": "Entità HTML nei Sottotitoli YouTube: Codici Comuni e Correzione",
    "htmlEntitiesSubtitle": "Perché YouTube esporta entità HTML e come il nostro strumento le normalizza.",
    "htmlEntitiesTable": [
      {
        "entity": "&amp;",
        "decoded": "&",
        "description": "Simbolo 'e' commerciale. Comune in marchi, titoli e discorsi."
      },
      {
        "entity": "&#39; o &apos;",
        "decoded": "'",
        "description": "Apostrofo o virgoletta singola. Fondamentale per la lingua italiana (l'albero, un'ora)."
      },
      {
        "entity": "&quot;",
        "decoded": "\"",
        "description": "Virgolette doppie. Utilizzate per citazioni dirette ed espressioni in risalto."
      },
      {
        "entity": "&lt;",
        "decoded": "<",
        "description": "Segno minore di. Comune in tutorial matematici o spiegazioni informatiche."
      },
      {
        "entity": "&gt;",
        "decoded": ">",
        "description": "Segno maggiore di. Usato in formule matematiche o indicatori di voce (>>)."
      },
      {
        "entity": "&nbsp;",
        "decoded": " (spazio)",
        "description": "Spazio indivisibile. Impiegato nei browser per evitare ritorni a capo scorretti."
      }
    ],
    "ffmpegTitle": "Conversione da Riga di Comando: SBV in SRT con FFmpeg",
    "ffmpegSubtitle": "Come automatizzare la conversione in batch mediante script terminale.",
    "ffmpegCommand": "ffmpeg -i captions.sbv -c:s srt output.srt",
    "ffmpegExplanation": [
      "Per sviluppatori e montatori che gestiscono centinaia di video, FFmpeg offre supporto nativo per la transcodifica dei sottotitoli. Il comando sopra legge il file .sbv e genera un file .srt standard senza ricodificare il video.",
      "Per convertire un'intera cartella su Windows PowerShell: Get-ChildItem *.sbv | ForEach-Object { ffmpeg -i $_.FullName -c:s srt ($_.BaseName + '.srt') }. Su terminale Linux o macOS: for f in *.sbv; do ffmpeg -i \"$f\" -c:s srt \"${f%.sbv}.srt\"; done.",
      "Tuttavia, FFmpeg non decodifica in automatico codici come &amp; e non rimuove etichette come [Musica]. Il nostro convertitore online esegue tutte queste operazioni contemporaneamente nel tuo browser."
    ],
    "useCasesTitle": "Casi d'Uso Reali della Conversione da SBV a SRT",
    "useCasesSubtitle": "Come creator, montatori e aziende utilizzano questo strumento nella vita quotidiana.",
    "useCasesList": [
      {
        "title": "Importare Trascrizioni YouTube in Premiere e DaVinci",
        "description": "Il sistema di riconoscimento vocale di YouTube crea trascrizioni automatiche molto precise. Convertire il file .sbv in .srt consente di disporre dei sottotitoli direttamente sulla timeline senza ricorrere a costosi servizi terzi."
      },
      {
        "title": "Creazione di Contenuti per TikTok, Reel e Short",
        "description": "Quando si estraggono momenti salienti da video lunghi per il formato verticale, convertire i sottotitoli originali in SRT permette ad app come CapCut o Premiere di animare automaticamente le battute sullo schermo."
      },
      {
        "title": "Traduzione e Localizzazione per Mercati Esteri",
        "description": "I traduttori professionisti richiedono file SRT per i loro programmi di traduzione assistita (CAT). Convertire i sottotitoli di YouTube in SRT assicura la massima compatibilità operativa."
      },
      {
        "title": "Archiviazione a Norma di Legge e Accessibilità",
        "description": "Enti pubblici e università devono garantire l'accessibilità dei loro video. Archiviare i sottotitoli nello standard aperto .srt ne preserva la fruibilità nel corso degli anni."
      }
    ],
    "troubleshootTitle": "Risoluzione dei Problemi Comuni nella Conversione SBV in SRT",
    "troubleshootSubtitle": "Diagnosi e rimedi rapidi per le anomalie più frequenti con i sottotitoli YouTube.",
    "troubleshootTips": [
      {
        "issue": "Compaiono Codici come &amp; o &#39; nel Video",
        "cause": "YouTube ha esportato la punteggiatura come entità HTML e il software di montaggio la mostra letteralmente.",
        "solution": "Assicurati di selezionare 'Decodifica Entità HTML' nel convertitore per ripristinare la corretta punteggiatura italiana."
      },
      {
        "issue": "I Sottotitoli Contengono Indicazioni come [Musica]",
        "cause": "La trascrizione automatica inserisce descrizioni acustiche che appesantiscono la lettura del parlato.",
        "solution": "Attiva l'opzione 'Rimuovi Descrittori Audio' per eliminare automaticamente i testi tra parentesi quadre."
      },
      {
        "issue": "L'Editor Video Rifiuta il File per Errore di Sintassi",
        "cause": "Righe vuote mancanti, ore con una sola cifra o punti al posto delle virgole sui millisecondi.",
        "solution": "Il nostro convertitore normalizza la struttura per garantire compatibilità immediata al 100% con Premiere, DaVinci e Final Cut."
      },
      {
        "issue": "Lettere Accentate Danneggiate o Illegibili (Errore di Encoding)",
        "cause": "Il file è stato salvato con codifica ANSI o Windows-1252 anziché nel formato universale UTF-8.",
        "solution": "Il nostro convertitore elabora tutto il testo in UTF-8 universale, preservando perfettamente accenti, apostrofi e caratteri speciali."
      }
    ],
    "conclusionTitle": "Conclusione: Conversione da SBV a SRT Rapida, Gratuita e Riservata",
    "conclusionText": [
      "La possibilità di convertire facilmente i sottotitoli .sbv di YouTube in file SubRip .srt universali è un tassello fondamentale per ogni professionista del video. Sia per il montaggio su Premiere Pro, sia per la condivisione sui social o per la creazione di archivi accessibili, il formato SRT assicura la massima affidabilità su ogni dispositivo.",
      "Con SRTConverters hai a disposizione uno strumento rapido, leggero e riservato al 100%, attivo interamente nel tuo browser web. Nessun programma da installare, nessuna registrazione richiesta e nessun file inviato a server esterni. Aggiungi questa pagina ai tuoi preferiti e converti i tuoi sottotitoli SBV in SRT in pochi istanti."
    ]
  }
};

export function getSbvToSrtGuideContent(locale: Locale): SbvToSrtGuideContent {
  return SBV_TO_SRT_GUIDES[locale] || SBV_TO_SRT_GUIDES.en;
}
