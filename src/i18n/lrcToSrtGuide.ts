import type { Locale } from './config';

export interface LrcToSrtGuideContent {
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
    lrc: string;
    srt: string;
  }[];

  timingMechanicsTitle: string;
  timingMechanicsSubtitle: string;
  timingMechanicsText: string[];

  multiTimestampTitle: string;
  multiTimestampSubtitle: string;
  multiTimestampText: string[];

  exampleTitle: string;
  exampleIntro: string;
  exampleLrcInput: string;
  exampleSrtOutput: string;
  exampleExplanation: string;

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

export const LRC_TO_SRT_GUIDES: Record<Locale, LrcToSrtGuideContent> = {
  "en": {
    "introTitle": "Complete Guide to Converting LRC Lyrics into SubRip (.SRT) Subtitles",
    "introSubtitle": "Master the mechanics of converting synchronized song lyrics, timestamps, multi-timecode verses, and instrumental breaks into universally compatible video subtitles.",
    "introText": [
      "The LRC (Lyrics) format has stood as the universal standard for synchronized digital song lyrics since the golden era of portable MP3 players, Winamp plugins, and mobile karaoke apps. By attaching lightweight timecode tags to individual lines of text, LRC files allow media players to highlight verses in real-time alongside audio playback. However, content creators, video editors, and music producers frequently encounter a critical barrier when attempting to import LRC lyrics into modern non-linear editing systems (NLEs) like Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro, or web video platforms like YouTube and Vimeo: video editing software and streaming containers require SubRip (.SRT) subtitle files rather than LRC lyrics.",
      "The structural divergence between LRC and SRT is substantial. LRC files operate on a continuous timeline of starting points—specifying only when a vocal line begins—with no built-in mechanism to declare when a lyric ends or how long a line should stay visible. In contrast, SubRip (.SRT) files demand strictly bounded time intervals with explicit start timecodes, end timecodes, sequential numerical indexes, and millisecond formatting (00:00:00,000 --> 00:00:00,000). Converting LRC to SRT is not a matter of simply renaming a file extension; it requires an intelligent synchronization engine that calculates natural end times, accounts for extended instrumental interludes, splits multi-timestamp cues, and strips non-caption metadata tags.",
      "This comprehensive guide details the technical architecture of both formats, walks through the algorithmic conversion process, explains how to handle edge cases like repeated choruses and custom [offset:] headers, and demonstrates how to prepare broadcast-ready subtitle tracks for music videos, lyric visualizers, concert recordings, and language learning materials."
    ],
    "whatIsTitle": "Understanding the Formats: LRC vs. SubRip (SRT)",
    "whatIsText": [
      "An LRC file is a plaintext file designed specifically for music players (such as Foobar2000, MiniLyrics, Walkman devices, and modern streaming apps). Its primary syntax relies on bracketed time tags formatted as [mm:ss.xx] or [mm:ss.xxx], where 'mm' represents minutes, 'ss' represents seconds, and 'xx' represents centiseconds (hundredths of a second). Each tag immediately prefixes the lyric text that begins at that exact point in time. Additionally, LRC files often incorporate ID3-style metadata tags at the head of the file, such as [ti:Title], [ar:Artist], [al:Album], [by:Author], and [length:Duration].",
      "SubRip (.SRT), on the other hand, is the global lingua franca of video captioning. Originating from the Windows DVD ripping tool of the same name, an SRT file consists of sequentially numbered subtitle blocks separated by blank lines. Each block contains an integer index, a directional timecode span formatted with hours, minutes, seconds, and comma-delimited milliseconds (00:00:00,000 --> 00:00:00,000), followed by one or more lines of subtitle text. Unlike LRC, SRT subtitles are completely agnostic to musical tempo and are engineered to guarantee that subtitles vanish cleanly from the video canvas before subsequent dialogue or visual elements appear."
    ],
    "whyConvertTitle": "Why Convert LRC Lyrics to SRT Format?",
    "whyConvertSubtitle": "Unlocking widespread compatibility across professional video editors, streaming platforms, and media players.",
    "whyConvertReasons": [
      {
        "title": "Universal Video Editor Compatibility",
        "description": "NLEs such as Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro X, and Avid Media Composer do not support native .lrc imports. Converting lyrics to .srt allows editors to drag and drop synchronized text tracks directly onto the timeline with exact frame accuracy."
      },
      {
        "title": "Direct Uploads to YouTube, TikTok & Social Platforms",
        "description": "Major social and video streaming platforms require .srt or .vtt for closed captions. Converting your song lyrics to SRT enables native multi-language subtitles and accessibility captions for music videos."
      },
      {
        "title": "Eliminating Text Freezing During Instrumental Breaks",
        "description": "Standard LRC files lack end timestamps, causing naive converters to leave lyrics frozen on screen during 30-second guitar solos or piano interludes. Our converter calculates smart end times to keep video presentations polished."
      },
      {
        "title": "Support for Repetitive Choruses and Cloned Cues",
        "description": "In compressed LRC files, repeated verses frequently share a single line with multiple time tags. Converting to SRT clones and re-orders these cues into strict chronological order required by subtitle renderers."
      }
    ],
    "howToTitle": "Step-by-Step Conversion Workflow",
    "howToSubtitle": "How our converter transforms lyric files into millisecond-accurate SubRip subtitles in seconds.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Load or Paste LRC Lyrics",
        "description": "Upload your .lrc file via drag-and-drop or paste raw LRC text containing [mm:ss.xx] timestamps and metadata tags into the left input pane."
      },
      {
        "step": "2",
        "title": "Configure Timing Constraints",
        "description": "Set your preferred maximum cue duration (to cap display time during instrumental breaks) and inter-cue gap (typically 50ms to prevent visual flickering)."
      },
      {
        "step": "3",
        "title": "Verify and Export SRT",
        "description": "Review the generated SubRip output in the right preview window, copy to clipboard, or click 'Download .SRT' for immediate use in video projects."
      }
    ],
    "differenceTitle": "Technical Comparison: LRC vs. SRT Architecture",
    "differenceSubtitle": "Key distinctions between music lyric tags and professional video subtitle standards.",
    "differenceTable": [
      {
        "feature": "Primary Use Case",
        "lrc": "Music playback & karaoke lyric display in audio software",
        "srt": "Closed captions and subtitles for video, film, and web streaming"
      },
      {
        "feature": "Timestamp Format",
        "lrc": "[mm:ss.xx] (centiseconds) or [mm:ss.xxx] (milliseconds)",
        "srt": "HH:MM:SS,mmm (hours, minutes, seconds, comma milliseconds)"
      },
      {
        "feature": "Time Interval Definition",
        "lrc": "Start time only; end time is implicit or absent",
        "srt": "Explicit start AND end timecodes separated by '-->'"
      },
      {
        "feature": "Sequential Indexing",
        "lrc": "None; lines are rendered chronologically by tag",
        "srt": "Mandatory ascending sequential integers (1, 2, 3...)"
      },
      {
        "feature": "Multiple Timestamps per Line",
        "lrc": "Supported (e.g. [00:12.00][01:30.00]Chorus line)",
        "srt": "Not allowed; each cue must be an independent block"
      },
      {
        "feature": "Header Metadata",
        "lrc": "Built-in tags ([ar:], [ti:], [al:], [offset:], [length:])",
        "srt": "No metadata header; starts immediately with cue 1"
      },
      {
        "feature": "Instrumental Gap Handling",
        "lrc": "Relies on player heuristics or explicit empty tags [00:45.00]",
        "srt": "Guaranteed blank screen when no active cue interval exists"
      }
    ],
    "timingMechanicsTitle": "The Mechanics of End-Time Derivation & Instrumental Caps",
    "timingMechanicsSubtitle": "How the converter bridges the gap between start-only timestamps and bounded subtitle intervals.",
    "timingMechanicsText": [
      "Because the standard LRC specification does not define an end timestamp for individual vocal lines, converting to SRT requires a robust heuristic engine to synthesize mathematically sound end timecodes. Without this, a subtitle display engine would be forced to keep a lyric line visible until the next lyric arrives—resulting in awkward, amateurish visuals where a vocal line remains frozen on screen throughout a 45-second guitar solo or drum fill.",
      "Our converter executes a multi-tier calculation for every cue:",
      "1. Lookahead Cue Synchronization: For cue N, the converter inspects the start timestamp of cue N+1. The preliminary end time is set to Start(N+1) minus an inter-cue gap (typically 50 milliseconds). This small gap prevents video renderers from conflating adjacent text buffers and avoids visual flicker on screen.",
      "2. Instrumental Gap Capping: If the duration between Start(N) and Start(N+1) exceeds the configurable 'Max Cue Duration' (default: 5.0 seconds), the engine caps the display duration to 5.0 seconds. The lyric disappears gracefully, allowing the audience to focus on the instrumental performance.",
      "3. Empty Cue Truncation: In well-authored LRC files, lyric authors occasionally place empty time tags (e.g. '[01:15.00]') without accompanying text to signal the exact moment a line finishes. Our parser recognizes these silent cues as definitive clearance markers and closes the preceding subtitle precisely at that millisecond.",
      "4. Terminal Cue Estimation: For the final line of the song, there is no subsequent cue to reference. The converter calculates a comfortable reading duration based on character count (15 to 17 characters per second) with an absolute minimum of 2.0 seconds and a maximum of 5.0 seconds."
    ],
    "multiTimestampTitle": "Handling Multi-Timestamp Lines & Offset Headers",
    "multiTimestampSubtitle": "Deconstructing compressed lyric patterns and global millisecond synchronization.",
    "multiTimestampText": [
      "In music lyric authoring, file size optimization historically led to the adoption of multi-timestamp lines. For repetitive song structures such as pop choruses or hip-hop hooks, a single line of text might be prefixed with three or four distinct timestamps: '[00:45.20][01:45.20][02:45.20]Don\\'t stop believing'. While audio players like MiniLyrics handle this seamlessly, video subtitle parsers will fail completely if multiple timestamps appear in an SRT block.",
      "Our converter's lexical analyzer detects all timestamp tokens on each line, extracts the common lyric string, and clones the lyric into separate independent cue entities. Once all lines are parsed, the entire cue list is sorted chronologically by start timestamp. Sequential cue numbers (1, 2, 3...) are then assigned, producing a clean, compliant SubRip file where repeated choruses appear at their exact moments in the video.",
      "Furthermore, some LRC files incorporate a global offset tag in the header, formatted as '[offset:+/-ms]'. A positive value (e.g. '[offset:500]') indicates that the audio tracks behind the lyrics by 500ms, requiring a 500ms delay. A negative value advances the timing. Our tool reads this tag and automatically shifts every calculated timestamp forward or backward when the 'Apply [offset:] Tag' option is enabled."
    ],
    "exampleTitle": "Concrete Conversion Example: LRC to SubRip (SRT)",
    "exampleIntro": "Compare raw LRC lyrics containing metadata, multi-timestamp lines, and centisecond tags against the finalized, clean SubRip (.SRT) output.",
    "exampleLrcInput": "[ti:Bohemian Rhapsody]\n[ar:Queen]\n[al:A Night at the Opera]\n[offset:200]\n[00:01.50]Is this the real life?\n[00:04.80]Is this just fantasy?\n[00:09.10]Caught in a landslide, no escape from reality\n[00:17.00]\n[00:28.50][01:45.00]Any way the wind blows",
    "exampleSrtOutput": "1\n00:00:01,700 --> 00:00:04,950\nIs this the real life?\n\n2\n00:00:05,000 --> 00:00:09,250\nIs this just fantasy?\n\n3\n00:00:09,300 --> 00:00:14,300\nCaught in a landslide, no escape from reality\n\n4\n00:00:28,700 --> 00:00:33,700\nAny way the wind blows\n\n5\n00:01:45,200 --> 00:01:50,200\nAny way the wind blows",
    "exampleExplanation": "Notice several critical transformations in this example: First, the 200ms offset was applied to all timestamps ([00:01.50] became 00:00:01,700). Second, the empty tag at [00:17.00] acted as an instrumental boundary, ensuring cue 3 capped out at a maximum of 5 seconds rather than stretching into the quiet passage. Third, the multi-timestamp chorus line was split into two separate chronological cues (cue 4 at 00:28,700 and cue 5 at 01:45,200). Finally, all metadata header tags were cleanly removed.",
    "ffmpegTitle": "Automating LRC to SRT Conversion with FFmpeg",
    "ffmpegSubtitle": "Extracting, converting, and embedding lyric subtitles via command-line automation.",
    "ffmpegCommand": "ffmpeg -i audio.mp3 -sub_charenc UTF-8 -i lyrics.lrc -c:a copy -c:s srt output.mkv",
    "ffmpegExplanation": [
      "While FFmpeg can mux subtitle streams into modern multimedia containers like Matroska (.mkv) or MP4 (.mp4), its internal LRC demuxer treats end timestamps conservatively. If you need to convert a standalone LRC file directly into an SRT file from the terminal, you can run: 'ffmpeg -i song.lrc song.srt'.",
      "However, command-line converters frequently lack sophisticated heuristics for capping long instrumental pauses, often resulting in subtitles that remain on screen until the next verse begins minutes later. Using our browser-based tool ensures that duration caps and gap parameters are applied with pinpoint precision prior to video muxing."
    ],
    "useCasesTitle": "Real-World Applications for LRC to SRT Conversion",
    "useCasesSubtitle": "Where synchronized subtitle conversion delivers immediate creative and technical value.",
    "useCasesList": [
      {
        "title": "Music Video Production & Lyric Videos",
        "description": "Motion designers and video editors create kinetic lyric videos and social media visualizers by importing converted SRT files directly into Adobe After Effects, Premiere Pro, or CapCut."
      },
      {
        "title": "Karaoke Video Creation & Screen Displays",
        "description": "Converts synchronized digital lyrics into standard subtitle streams for event screens, bar karaoke systems, and live streaming overlays with guaranteed readability."
      },
      {
        "title": "Language Learning & Transcription Studies",
        "description": "Foreign language learners utilize synchronized song subtitles on platforms like VLC and YouTube to study pronunciation, rhythm, and vocabulary simultaneously."
      },
      {
        "title": "Concert Films & Archival Music Documentaries",
        "description": "Documentary filmmakers synchronize historical song lyrics across live concert recordings and festival broadcasts for broadcast television compliance."
      }
    ],
    "troubleshootTitle": "Troubleshooting Common LRC to SRT Issues",
    "troubleshootSubtitle": "Resolving encoding conflicts, timestamp anomalies, and timing drift.",
    "troubleshootTips": [
      {
        "issue": "Lyrics Appear Several Seconds Out of Sync with Audio",
        "cause": "The source LRC file may contain an [offset:+/-ms] tag intended for a specific music player, or the audio file may include an intro silence omitted from the lyric file.",
        "solution": "Check whether your LRC file contains an '[offset:]' header. Toggle the 'Apply [offset:] Tag' option in the tool, or adjust the global timing offset in milliseconds to align with the audio track."
      },
      {
        "issue": "Lyrics Stay on Screen During Long Guitar Solos or Instrumental Pauses",
        "cause": "LRC files do not contain explicit end timestamps; naive parsers leave subtitles open indefinitely until the next lyric arrives.",
        "solution": "Ensure the 'Max Cue Duration' setting is enabled in the converter (recommended: 4.0 to 5.0 seconds). This automatically closes the subtitle when an extended musical break occurs."
      },
      {
        "issue": "Garbled Accents, Non-Latin Characters, or Mojibake in SRT Output",
        "cause": "The original .lrc file was saved using legacy ANSI or regional encodings (such as Windows-1252, GB2312, Shift-JIS, or EUC-KR) rather than UTF-8.",
        "solution": "Open your original .lrc file in a text editor like Notepad or VS Code and save it with UTF-8 encoding before uploading to the converter."
      },
      {
        "issue": "Repetitive Choruses Are Missing from the Converted Subtitles",
        "cause": "The source LRC file used multi-timestamp notation (e.g., '[01:10.00][02:20.00]Chorus') that some simple converters discard or mishandle.",
        "solution": "Our converter natively recognizes multiple timestamps per line, cloning and sorting each occurrence into its proper chronological position in the SRT file."
      }
    ],
    "conclusionTitle": "Streamlined, Accurate Subtitle Conversion for Music & Video",
    "conclusionText": [
      "Bridging the divide between synchronized music lyrics and universal video subtitles is effortless with the right tools. By combining millisecond-accurate mathematical parsing, intelligent lookahead end-time derivation, configurable instrumental pause capping, and multi-timestamp chorus expansion, our LRC to SRT converter delivers flawless, broadcast-ready SubRip subtitles in seconds.",
      "Best of all, our tool operates 100% within your web browser using modern client-side JavaScript. Your lyric files, audio transcripts, and intellectual property remain private on your computer, with zero server uploads and zero privacy risks. Convert your LRC files today and bring synchronized music lyrics to any video player or editing timeline worldwide."
    ]
  },
  "es": {
    "introTitle": "Guía Completa para Convertir Letras LRC a Subtítulos SubRip (.SRT)",
    "introSubtitle": "Domina la técnica de conversión de letras sincronizadas, marcas de tiempo, estribillos repetidos y pausas instrumentales en subtítulos de vídeo universales.",
    "introText": [
      "El formato LRC (Lyrics) ha sido el estándar por excelencia para la sincronización de letras de canciones en reproductores digitales desde los primeros tiempos de los dispositivos MP3 portátiles, complementos de Winamp y aplicaciones de karaoke móvil. Al incluir marcas de tiempo ligeras en cada verso, los archivos LRC permiten que los reproductores resalten la letra en tiempo real junto con la música. Sin embargo, editores de vídeo, creadores de contenido y productores se encuentran frecuentemente con un obstáculo insalvable al intentar importar letras LRC a programas de edición no lineal (NLE) como Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro o plataformas web como YouTube: los editores de vídeo exigen subtítulos SubRip (.SRT) y no admiten el formato LRC.",
      "La diferencia estructural entre ambos formatos es enorme. Los archivos LRC operan como una línea de tiempo continua de momentos de inicio (especificando únicamente cuándo empieza a cantarse un verso), sin ningún mecanismo nativo para definir cuándo concluye la frase o cuánto tiempo debe permanecer visible en pantalla. En cambio, los archivos SubRip (.SRT) requieren intervalos de tiempo acotados y estrictos con código de inicio, código de fin, numeración secuencial y formato con milisegundos (00:00:00,000 --> 00:00:00,000). Convertir LRC a SRT no es simplemente cambiar la extensión de un archivo; requiere un motor inteligente de sincronización que calcule tiempos de fin naturales, controle pausas instrumentales extensas, desdoble marcas de tiempo múltiples y elimine metadatos no pertinentes.",
      "Esta guía técnica describe en detalle la arquitectura de ambos formatos, el proceso algorítmico de conversión, el tratamiento de estribillos repetidos y etiquetas de desfase [offset:], y la preparación de pistas de subtítulos profesionales para vídeos musicales, visualizadores de letras y contenidos de aprendizaje de idiomas."
    ],
    "whatIsTitle": "Diferencias Estructurales: Formato LRC frente a SubRip (.SRT)",
    "whatIsText": [
      "Un archivo LRC es un documento de texto sin formato diseñado específicamente para reproductores musicales (como Foobar2000, MiniLyrics o reproductores móviles). Su sintaxis principal emplea corchetes temporales con la estructura [mm:ss.xx] o [mm:ss.xxx], donde 'mm' representa minutos, 'ss' segundos y 'xx' centésimas de segundo. Cada etiqueta precede inmediatamente a la letra que comienza en ese instante preciso. Además, los archivos LRC suelen incorporar metadatos de cabecera como [ti:Título], [ar:Artista], [al:Álbum], [by:Autor] y [length:Duración].",
      "SubRip (.SRT), por el contrario, es el estándar universal e indiscutible del subtitulado para vídeo. Nacido de la célebre herramienta de extracción de subtítulos de DVD para Windows, un archivo SRT se organiza en bloques numerados secuencialmente y separados por líneas en blanco. Cada bloque contiene un número de índice, un rango temporal con horas, minutos, segundos y milisegundos separados por coma (00:00:00,000 --> 00:00:00,000) y el texto correspondiente. A diferencia del LRC, el formato SRT está diseñado para garantizar que cada subtítulo desaparezca limpiamente de la pantalla antes de la siguiente intervención visual o de diálogo."
    ],
    "whyConvertTitle": "¿Por Qué Convertir Letras LRC al Formato SRT?",
    "whyConvertSubtitle": "Garantiza total compatibilidad con editores profesionales, reproductores y plataformas de streaming.",
    "whyConvertReasons": [
      {
        "title": "Compatibilidad Universal con Editores de Vídeo",
        "description": "Programas como Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro y CapCut no admiten archivos .lrc. Al convertir a .srt, las letras se pueden arrastrar directamente a la línea de tiempo con precisión de fotograma."
      },
      {
        "title": "Subida Directa a YouTube, TikTok y Redes Sociales",
        "description": "Las plataformas de vídeo exigen subtítulos en formato .srt o .vtt. Convertir las letras a SRT permite activar subtítulos opcionales y accesibles para vídeos musicales."
      },
      {
        "title": "Eliminación de Texto Congelado en Pausas Musicales",
        "description": "Al carecer de tiempos de finalización, un conversor básico dejaría la letra fija durante un solo de guitarra de 40 segundos. Nuestro conversor calcula límites inteligentes para ocultar el texto a tiempo."
      },
      {
        "title": "Soporte para Estribillos y Marcas Repetidas",
        "description": "En archivos LRC optimizados, los estribillos repetidos suelen compartir una sola línea con varios tiempos. Al convertir a SRT, cada aparición se duplica y ordena cronológicamente de forma estricta."
      }
    ],
    "howToTitle": "Flujo de Trabajo Paso a Paso para la Conversión",
    "howToSubtitle": "Cómo transformar tus letras en subtítulos SubRip precisos al milisegundo en cuestión de segundos.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Cargar o Pegar la Letra LRC",
        "description": "Arrastra y suelta tu archivo .lrc en el área de carga o pega el texto con marcas [mm:ss.xx] directamente en el editor izquierdo."
      },
      {
        "step": "2",
        "title": "Ajustar Duración Máxima e Intervalos",
        "description": "Define el límite de duración máxima para pausas instrumentales y el intervalo entre líneas consecutivas (habitualmente 50 ms)."
      },
      {
        "step": "3",
        "title": "Verificar y Descargar el Archivo SRT",
        "description": "Revisa la salida SubRip en el panel de vista previa, copia el texto al portapapeles o haz clic en 'Descargar .SRT' para usarlo en tus proyectos."
      }
    ],
    "differenceTitle": "Comparativa Técnica: Arquitectura LRC vs. SRT",
    "differenceSubtitle": "Diferencias fundamentales entre letras de canciones y subtítulos de vídeo profesionales.",
    "differenceTable": [
      {
        "feature": "Uso Principal",
        "lrc": "Reproducción musical y visualización de letras en reproductores de audio",
        "srt": "Subtítulos para cine, vídeo profesional y streaming web"
      },
      {
        "feature": "Formato Temporal",
        "lrc": "[mm:ss.xx] (centésimas) o [mm:ss.xxx] (milésimas)",
        "srt": "HH:MM:SS,mmm (horas, minutos, segundos, milisegundos con coma)"
      },
      {
        "feature": "Definición del Intervalo",
        "lrc": "Solo tiempo de inicio; el final es implícito o no existe",
        "srt": "Tiempos explícitos de inicio Y fin unidos por '-->'"
      },
      {
        "feature": "Numeración Secuencial",
        "lrc": "Inexistente; las líneas se ordenan por su marca",
        "srt": "Obligatoria mediante enteros consecutivos (1, 2, 3...)"
      },
      {
        "feature": "Múltiples Marcas por Línea",
        "lrc": "Permitido (ej. [00:12.00][01:30.00]Estribillo)",
        "srt": "No permitido; cada bloque debe ser independiente"
      },
      {
        "feature": "Metadatos de Cabecera",
        "lrc": "Etiquetas integradas ([ar:], [ti:], [al:], [offset:])",
        "srt": "Sin metadatos; comienza de inmediato con el bloque 1"
      },
      {
        "feature": "Gestión de Silencios Musicales",
        "lrc": "Depende del reproductor o requiere etiquetas vacías",
        "srt": "Pantalla limpia garantizada cuando no hay subtítulo activo"
      }
    ],
    "timingMechanicsTitle": "Mecánica del Cálculo de Tiempos Finales y Pausas Musicales",
    "timingMechanicsSubtitle": "Cómo salvar la distancia entre tiempos de inicio puros e intervalos cerrados de subtítulo.",
    "timingMechanicsText": [
      "Dado que la especificación LRC no contempla un tiempo de fin para las frases cantadas, transformar estas líneas a SRT exige un algoritmo robusto que calcule tiempos finales lógicos y naturales. De lo contrario, un reproductor de vídeo mantendría visible el texto hasta la llegada del siguiente verso, produciendo un efecto visual descuidado donde una frase queda congelada en pantalla a lo largo de un solo de batería de medio minuto.",
      "Nuestro convertidor aplica un cálculo multinivel para cada entrada:",
      "1. Sincronización Proyectiva: Para el verso N, el sistema examina el inicio del verso N+1. El fin provisional se fija en Inicio(N+1) menos un margen de seguridad (por defecto 50 milisegundos). Esta pequeña pausa evita el parpadeo visual entre subtítulos consecutivos.",
      "2. Límite de Pausa Instrumental: Si el espacio entre Inicio(N) e Inicio(N+1) supera el valor configurado en 'Duración Máxima de Subtítulo' (por defecto 5,0 segundos), el motor limita la permanencia a 5,0 segundos. La frase se desvanece a tiempo, permitiendo disfrutar del solo instrumental.",
      "3. Marcadores Vacíos de Silencio: En archivos LRC bien elaborados, los autores a menudo colocan marcas sin texto (ej. '[01:15.00]') para señalar con exactitud el final de una frase. El analizador reconoce estas marcas como señales de cierre inmediato y finaliza el subtítulo en ese milisegundo exacto.",
      "4. Estimación del Verso Final: Para el último verso de la pista no hay frase posterior de referencia. El convertidor calcula la duración según el recuento de caracteres con una velocidad media de lectura (entre 15 y 17 caracteres por segundo), garantizando entre 2 y 5 segundos de visualización."
    ],
    "multiTimestampTitle": "Gestión de Marcas Múltiples y Etiquetas [offset:]",
    "multiTimestampSubtitle": "Descomposición de letras comprimidas y ajuste de sincronización global.",
    "multiTimestampText": [
      "En la creación de archivos LRC para música, el ahorro de espacio impulsó el uso de marcas temporales agrupadas. En estribillos reiterados, una sola línea de texto suele precederse de varias marcas: '[00:45.20][01:45.20][02:45.20]Don\\'t stop believing'. Aunque reproductores como MiniLyrics comprenden esta estructura, cualquier software de vídeo fallará si encuentra múltiples marcas en un archivo de subtítulos.",
      "El analizador de nuestro convertidor detecta todas las marcas de tiempo de cada renglón, extrae la frase lírica y genera copias independientes para cada instante. Una vez procesado todo el documento, reordena todos los bloques cronológicamente por su tiempo de inicio y asigna la numeración secuencial de SubRip (1, 2, 3...), logrando que cada estribillo surja en el momento exacto.",
      "Adicionalmente, ciertos archivos LRC incluyen en su cabecera la etiqueta '[offset:+/-ms]'. Un valor positivo (ej. '[offset:500]') indica que el audio va 500 ms retrasado respecto a la letra, requiriendo aplicar un desfase de medio segundo. El convertidor detecta este parámetro y corrige matemáticamente todas las marcas al activar la opción 'Aplicar Etiqueta [offset:]'."
    ],
    "exampleTitle": "Ejemplo Concreto de Conversión: De LRC a SubRip (SRT)",
    "exampleIntro": "Compara un archivo LRC con metadatos, marcas múltiples y tiempos en centésimas frente al resultado limpio y ordenado en formato SubRip (.SRT).",
    "exampleLrcInput": "[ti:Bohemian Rhapsody]\n[ar:Queen]\n[al:A Night at the Opera]\n[offset:200]\n[00:01.50]Is this the real life?\n[00:04.80]Is this just fantasy?\n[00:09.10]Caught in a landslide, no escape from reality\n[00:17.00]\n[00:28.50][01:45.00]Any way the wind blows",
    "exampleSrtOutput": "1\n00:00:01,700 --> 00:00:04,950\nIs this the real life?\n\n2\n00:00:05,000 --> 00:00:09,250\nIs this just fantasy?\n\n3\n00:00:09,300 --> 00:00:14,300\nCaught in a landslide, no escape from reality\n\n4\n00:00:28,700 --> 00:00:33,700\nAny way the wind blows\n\n5\n00:01:45,200 --> 00:01:50,200\nAny way the wind blows",
    "exampleExplanation": "Observa las transformaciones aplicadas: Primero, se sumó el desfase de 200 ms a todos los tiempos ([00:01.50] pasó a 00:00:01,700). Segundo, la marca vacía en [00:17.00] actuó como delimitador de pausa instrumental, acotando el subtítulo 3 a un máximo de 5 segundos. Tercero, la línea con dos marcas de tiempo se convirtió en dos subtítulos independientes (subtítulo 4 en 00:28,700 y subtítulo 5 en 01:45,200). Finalmente, los metadatos de cabecera fueron descartados por completo.",
    "ffmpegTitle": "Automatización de LRC a SRT con FFmpeg",
    "ffmpegSubtitle": "Extracción, conversión y ensamblaje de subtítulos musicales mediante línea de comandos.",
    "ffmpegCommand": "ffmpeg -i audio.mp3 -sub_charenc UTF-8 -i lyrics.lrc -c:a copy -c:s srt output.mkv",
    "ffmpegExplanation": [
      "Aunque FFmpeg es capaz de multiplexar pistas de subtítulos en contenedores modernos como Matroska (.mkv) o MP4 (.mp4), su analizador interno de LRC aplica criterios rígidos sobre la duración final de las frases. Si deseas convertir un archivo de letras directamente desde tu terminal, puedes ejecutar: 'ffmpeg -i cancion.lrc cancion.srt'.",
      "No obstante, los conversores por línea de comandos suelen carecer de ajustes flexibles para recortar silencios musicales prolongados, dejando en ocasiones subtítulos abiertos durante minutos enteros. Nuestra herramienta en el navegador garantiza una delimitación de tiempos impecable antes de integrar los subtítulos en tus vídeos."
    ],
    "useCasesTitle": "Casos de Uso Reales para la Conversión de LRC a SRT",
    "useCasesSubtitle": "Escenarios donde la sincronización de letras aporta valor creativo y técnico inmediato.",
    "useCasesList": [
      {
        "title": "Producción de Videoclips y Lyric Videos",
        "description": "Diseñadores audiovisuales importan pistas SRT convertidas en Premiere Pro, After Effects o CapCut para animar letras sincronizadas con la música."
      },
      {
        "title": "Creación de Vídeos de Karaoke y Pantallas de Directo",
        "description": "Convierte letras sincronizadas en pistas universales para sistemas de karaoke en bares, monitores de escenario o retransmisiones en directo."
      },
      {
        "title": "Aprendizaje de Idiomas mediante Canciones",
        "description": "Estudiantes y profesores utilizan subtítulos sincronizados en VLC y YouTube para seguir la dicción y pronunciación de temas musicales."
      },
      {
        "title": "Conciertos Grabados y Documentales Musicales",
        "description": "Permite incorporar subtítulos accesibles y traducciones sobre actuaciones en directo para su distribución en festivales y televisión."
      }
    ],
    "troubleshootTitle": "Solución de Problemas Frecuentes de LRC a SRT",
    "troubleshootSubtitle": "Resolución de desincronización, caracteres corruptos y líneas faltantes.",
    "troubleshootTips": [
      {
        "issue": "La letra aparece varios segundos adelantada o retrasada respecto al audio",
        "cause": "El archivo LRC original puede contener una etiqueta [offset:+/-ms] o el archivo de audio incluye un silencio introductorio que no figuraba en la letra.",
        "solution": "Verifica si el LRC tiene una etiqueta '[offset:]'. Activa o desactiva la casilla 'Aplicar Etiqueta [offset:]' en las opciones de la herramienta para corregir el desfase."
      },
      {
        "issue": "La letra permanece en pantalla durante solos de guitarra o pausas musicales",
        "cause": "El formato LRC carece de tiempos de fin; si un conversor no incorpora límites de duración, la frase queda expuesta hasta el siguiente verso.",
        "solution": "Asegúrate de que la opción 'Duración Máxima de Subtítulo' esté activada (recomendado: de 4,0 a 5,0 segundos) para cerrar automáticamente las frases durante interludios."
      },
      {
        "issue": "Aparecen caracteres extraños (mojibake) en acentos, eñes o caracteres especiales",
        "cause": "El archivo .lrc original fue guardado en una codificación antigua como ANSI, Windows-1252 o ISO-8859-1 en lugar del estándar moderno UTF-8.",
        "solution": "Abre tu archivo .lrc en un editor de texto (como el Bloc de notas o VS Code) y guárdalo seleccionando la codificación UTF-8 antes de subirlo al conversor."
      },
      {
        "issue": "Faltan estribillos que se repiten a lo largo de la canción",
        "cause": "El archivo original agrupaba varias marcas temporales en una sola línea y herramientas básicas descartan las marcas adicionales.",
        "solution": "Nuestro convertidor reconoce múltiples marcas por renglón de forma nativa, duplicando y ordenando cronológicamente cada aparición en el archivo SRT."
      }
    ],
    "conclusionTitle": "Subtitulado Musical Rápido, Preciso y Sin Complicaciones",
    "conclusionText": [
      "Unir el mundo de las letras musicales sincronizadas con los estándares universales de subtitulado de vídeo es sencillo con las herramientas adecuadas. Gracias al análisis temporal preciso al milisegundo, el cálculo inteligente de tiempos finales, la limitación de pausas instrumentales y el tratamiento de estribillos con marcas múltiples, nuestro convertidor de LRC a SRT ofrece subtítulos profesionales listos para cualquier producción en segundos.",
      "Y lo más importante: toda la conversión se ejecuta al 100% de manera local en tu navegador mediante JavaScript. Tus letras, pistas de audio y archivos personales jamás se suben a servidores externos, garantizando la máxima privacidad y rapidez. Convierte tus archivos LRC hoy mismo y lleva tus canciones a cualquier editor de vídeo o reproductor multimedia."
    ]
  },
  "pt": {
    "introTitle": "Guia Completo para Converter Letras LRC em Legendas SubRip (.SRT)",
    "introSubtitle": "Domine a conversão de letras musicais sincronizadas, timecodes, versos com múltiplos marcadores e pausas de instrumentos em legendas profissionais de vídeo.",
    "introText": [
      "O formato LRC (Lyrics) consolidou-se como o padrão universal para sincronização digital de letras de música desde a época dos reprodutores MP3 portáteis, plugins de Winamp e aplicativos de karaokê para celular. Ao incorporar marcadores de tempo leves no início de cada verso, os arquivos LRC permitem que players destaquem as frases em tempo real durante a execução da faixa musical. No entanto, editores de vídeo, produtores de conteúdo e músicos deparam-se frequentemente com uma barreira técnica ao importar letras LRC para programas de edição profissional (NLEs) como Adobe Premiere Pro, DaVinci Resolve e Final Cut Pro, ou plataformas como o YouTube: essas ferramentas aceitam exclusivamente legendas SubRip (.SRT) e não reconhecem o formato LRC.",
      "A disparidade estrutural entre os dois formatos é profunda. Os arquivos LRC operam em uma linha do tempo contínua baseada apenas no momento de início (especificando quando um verso começa a ser cantado), sem qualquer indicação de quando ele termina ou por quantos segundos deve permanecer visível na tela. Em contrapartida, as legendas SubRip (.SRT) exigem intervalos temporais estritamente delimitados com início, término, numeração de índice sequencial e formatação precisa em milissegundos (00:00:00,000 --> 00:00:00,000). Converter LRC para SRT não é apenas alterar a extensão do arquivo; requer um algoritmo inteligente capaz de deduzir durações naturais, tratar pausas instrumentais longas, desmembrar linhas com vários marcadores e remover metadados desnecessários.",
      "Este guia abrangente examina a arquitetura de ambos os formatos, o fluxo algorítmico de conversão, a resolução de casos especiais como refrões com tags agrupadas e a criação de faixas de legendas perfeitamente ajustadas para videoclipes, vídeos de letras (lyric videos) e materiais de estudo musical."
    ],
    "whatIsTitle": "Entendendo os Formatos: Arquivos LRC vs. Legendas SubRip (SRT)",
    "whatIsText": [
      "Um arquivo LRC é um documento de texto simples desenvolvido para tocadores de mídia e softwares de áudio (como Foobar2000, MiniLyrics e reprodutores portáteis). A sua sintaxe baseia-se em colchetes temporais no padrão [mm:ss.xx] ou [mm:ss.xxx], onde 'mm' representa minutos, 'ss' segundos e 'xx' centésimos de segundo. Cada tag precede o verso cantado naquele momento exato. Além disso, arquivos LRC podem conter tags de cabeçalho com metadados como [ti:Título], [ar:Artista], [al:Álbum], [by:Autor] e [length:Duração].",
      "Já o padrão SubRip (.SRT) é a linguagem universal das legendas de vídeo. Criado originalmente pelo utilitário homônimo de extração de DVDs no Windows, o formato SRT estrutura-se em blocos sequenciais separados por linhas em branco. Cada bloco traz um número de ordem, um intervalo temporal com horas, minutos, segundos e milissegundos separados por vírgula (00:00:00,000 --> 00:00:00,000) e o texto da legenda. Ao contrário do LRC, o SRT é concebido para garantir que o texto desapareça de forma limpa da tela antes que novos elementos visuais ou falas ocorram."
    ],
    "whyConvertTitle": "Por Que Converter Letras LRC para o Formato SRT?",
    "whyConvertSubtitle": "Garanta compatibilidade total com softwares de edição de vídeo, reprodutores e plataformas de streaming.",
    "whyConvertReasons": [
      {
        "title": "Compatibilidade Universal com Editores NLE",
        "description": "Softwares como Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro e CapCut não importam arquivos .lrc. Ao converter para .srt, as faixas sincronizadas podem ser arrastadas diretamente para a timeline com precisão de quadro."
      },
      {
        "title": "Envio Direto para YouTube, TikTok e Redes Sociais",
        "description": "Plataformas de compartilhamento de vídeo exigem legendas no formato .srt ou .vtt. A conversão permite ativar legendas opcionais e melhorar a acessibilidade de videoclipes."
      },
      {
        "title": "Eliminação de Legendas Congeladas em Solos Musicais",
        "description": "Como o LRC não especifica fim de verso, conversores simplistas deixam a letra parada durante solos de 30 segundos. Nossa ferramenta limita durações automaticamente para manter o vídeo limpo."
      },
      {
        "title": "Suporte a Refrões Repetidos e Tags Agrupadas",
        "description": "Em arquivos LRC compactados, versos repetidos dividem uma única linha com múltiplos horários. Na conversão para SRT, cada ocorrência é duplicada e ordenada cronologicamente."
      }
    ],
    "howToTitle": "Passo a Passo para a Conversão",
    "howToSubtitle": "Como transformar seus arquivos de letras em legendas SubRip exatas em poucos cliques.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Carregar ou Colar a Letra LRC",
        "description": "Arraste e solte o arquivo .lrc na área indicada ou cole o texto com marcadores de tempo diretamente no editor à esquerda."
      },
      {
        "step": "2",
        "title": "Configurar Limites de Tempo e Intervalos",
        "description": "Defina o teto máximo de duração para passagens instrumentais e o intervalo entre legendas consecutivas (geralmente 50 ms)."
      },
      {
        "step": "3",
        "title": "Verificar e Baixar o Arquivo SRT",
        "description": "Analise a legenda gerada no painel de pré-visualização, copie para a área de transferência ou clique em 'Baixar .SRT' para salvar."
      }
    ],
    "differenceTitle": "Comparação Técnica: Arquitetura LRC vs. SRT",
    "differenceSubtitle": "Diferenças cruciais entre letras de músicas e padrões de legendagem para vídeo.",
    "differenceTable": [
      {
        "feature": "Finalidade Principal",
        "lrc": "Exibição de letras sincronizadas em reprodutores de áudio e karaokê",
        "srt": "Legendas e closed captions para cinema, vídeo profissional e streaming"
      },
      {
        "feature": "Formato de Marcação",
        "lrc": "[mm:ss.xx] (centésimos) ou [mm:ss.xxx] (milissegundos)",
        "srt": "HH:MM:SS,mmm (horas, minutos, segundos, vírgula milissegundos)"
      },
      {
        "feature": "Definição de Duração",
        "lrc": "Apenas ponto de partida; o término é implícito",
        "srt": "Horários explícitos de início E fim interligados por '-->'"
      },
      {
        "feature": "Numeração de Linhas",
        "lrc": "Inexistente; linhas são organizadas pelas marcas de tempo",
        "srt": "Obrigatória através de inteiros sequenciais (1, 2, 3...)"
      },
      {
        "feature": "Múltiplas Marcas por Linha",
        "lrc": "Suportado (ex.: [00:12.00][01:30.00]Refrão)",
        "srt": "Não permitido; cada fala deve compor um bloco individual"
      },
      {
        "feature": "Metadados de Cabeçalho",
        "lrc": "Tags nativas ([ar:], [ti:], [al:], [offset:], [length:])",
        "srt": "Sem metadados; inicia imediatamente no bloco 1"
      },
      {
        "feature": "Tratamento de Silêncios",
        "lrc": "Depende de heurísticas do player ou de tags vazias",
        "srt": "Tela limpa garantida quando não há legenda ativa no intervalo"
      }
    ],
    "timingMechanicsTitle": "Mecânica do Cálculo de Término e Limite Instrumental",
    "timingMechanicsSubtitle": "Como solucionar a transição entre pontos de início e intervalos delimitados.",
    "timingMechanicsText": [
      "Como a especificação original do LRC não inclui um momento de encerramento para cada frase musical, converter essas linhas para SRT exige um mecanismo heurístico capaz de definir horários de término harmônicos e coerentes. Do contrário, um player de vídeo manteria a legenda fixa na tela até a próxima frase ser cantada, gerando um efeito amador onde o texto permanece visível durante um longo solo instrumental.",
      "Nosso conversor adota um cálculo refinado para cada linha:",
      "1. Sincronização por Antecipação: Para o bloco N, o sistema analisa o início do bloco N+1. O término provisório é definido como Início(N+1) menos um intervalo de respiro (padrão de 50 milissegundos), impedindo que as legendas colidam visualmente na tela.",
      "2. Limite em Pausas Instrumentais: Se o intervalo entre Início(N) e Início(N+1) for superior à 'Duração Máxima da Legenda' (padrão de 5,0 segundos), o sistema encerra a exibição aos 5,0 segundos, permitindo que o público aprecie a música sem distrações de texto.",
      "3. Marcadores Vazios de Limpeza: Em arquivos LRC de alta precisão, criadores costumam inserir tags de tempo vazias (como '[01:15.00]') para demarcar exatamente onde a voz cessa. Nosso algoritmo identifica essas tags como pontos de fechamento imediato do verso anterior.",
      "4. Estimativa para o Verso Final: Como a última linha da canção não possui um bloco subsequente como referência, sua duração é estimada pela contagem de caracteres em ritmo de leitura natural (entre 15 e 17 caracteres por segundo), respeitando o limite de 2 a 5 segundos."
    ],
    "multiTimestampTitle": "Tratamento de Tags Múltiplas e Cabeçalhos [offset:]",
    "multiTimestampSubtitle": "Descompactação de linhas repetidas e alinhamento milimétrico global.",
    "multiTimestampText": [
      "Na elaboração de arquivos LRC, o reaproveitamento de linhas era muito comum para economizar espaço em refrões e trechos repetitivos. Dessa forma, um mesmo verso podia receber vários horários de uma vez: '[00:45.20][01:45.20][02:45.20]Don\\'t stop believing'. Reprodutores de áudio conseguem ler essa sintaxe, mas programas de vídeo exigem blocos de legendas separados e ordenados cronologicamente.",
      "Nosso analisador lê todas as marcações presentes em cada linha, extrai a letra correspondente e cria instâncias independentes para cada momento. Em seguida, todo o conjunto é reorganizado em estrita ordem cronológica por horário de início e recebe numeração sequencial (1, 2, 3...), gerando um arquivo SubRip impecável.",
      "Além disso, arquivos LRC podem conter a tag '[offset:+/-ms]' no topo. Valores positivos (ex.: '[offset:500]') indicam que o áudio está atrasado em relação à letra e que as legendas precisam de um acréscimo de 500 ms. Ao marcar a opção 'Aplicar Tag [offset:]', o conversor compensa automaticamente essa diferença em todos os cálculos."
    ],
    "exampleTitle": "Exemplo Prático de Conversão: De LRC para SubRip (SRT)",
    "exampleIntro": "Veja a transformação de um arquivo LRC com metadados, marcas múltiplas e centésimos em um documento SubRip (.SRT) limpo e pronto para exibição.",
    "exampleLrcInput": "[ti:Bohemian Rhapsody]\n[ar:Queen]\n[al:A Night at the Opera]\n[offset:200]\n[00:01.50]Is this the real life?\n[00:04.80]Is this just fantasy?\n[00:09.10]Caught in a landslide, no escape from reality\n[00:17.00]\n[00:28.50][01:45.00]Any way the wind blows",
    "exampleSrtOutput": "1\n00:00:01,700 --> 00:00:04,950\nIs this the real life?\n\n2\n00:00:05,000 --> 00:00:09,250\nIs this just fantasy?\n\n3\n00:00:09,300 --> 00:00:14,300\nCaught in a landslide, no escape from reality\n\n4\n00:00:28,700 --> 00:00:33,700\nAny way the wind blows\n\n5\n00:01:45,200 --> 00:01:50,200\nAny way the wind blows",
    "exampleExplanation": "Observe as principais correções realizadas: Primeiro, o deslocamento de 200 ms foi adicionado a todos os tempos ([00:01.50] tornou-se 00:00:01,700). Segundo, a tag sem texto em [00:17.00] atuou como demarcação de silêncio, limitando a legenda 3 a 5 segundos. Terceiro, o verso com dois marcadores foi dividido em duas legendas cronológicas (legenda 4 em 00:28,700 e legenda 5 em 01:45,200). Por fim, todos os metadados do cabeçalho foram descartados.",
    "ffmpegTitle": "Automatizando a Conversão de LRC para SRT com FFmpeg",
    "ffmpegSubtitle": "Extração, conversão e incorporação de legendas musicais via linha de comando.",
    "ffmpegCommand": "ffmpeg -i audio.mp3 -sub_charenc UTF-8 -i lyrics.lrc -c:a copy -c:s srt output.mkv",
    "ffmpegExplanation": [
      "O FFmpeg permite embutir faixas de legendas em contêineres multimídia como Matroska (.mkv) ou MP4 (.mp4). Para converter um arquivo de letras isolado no terminal, você pode rodar: 'ffmpeg -i musica.lrc musica.srt'.",
      "Entretanto, ferramentas de terminal costumam pecar no controle de duração das frases durante pausas da música, mantendo versos abertos até o próximo acontecimento sonoro. Usar nosso conversor no navegador garante que durações máximas e intervalos sejam ajustados com total precisão antes da renderização final."
    ],
    "useCasesTitle": "Principais Cenários de Uso para a Conversão de LRC em SRT",
    "useCasesSubtitle": "Onde a sincronização de letras oferece agilidade e padrão profissional.",
    "useCasesList": [
      {
        "title": "Produção de Lyric Videos e Clipes Musicais",
        "description": "Animadores e editores utilizam faixas SRT geradas no Premiere Pro, After Effects ou CapCut para criar animações tipográficas sincronizadas com a batida."
      },
      {
        "title": "Sistemas de Karaokê e Telões para Eventos",
        "description": "Permite transformar letras de músicas em legendas compatíveis com telões de bares, conferências e sistemas de transmissão ao vivo."
      },
      {
        "title": "Estudo de Idiomas através da Música",
        "description": "Estudantes e professores aproveitam legendas sincronizadas no VLC e YouTube para acompanhar dicção, vocabulário e entonação em línguas estrangeiras."
      },
      {
        "title": "Shows Gravados e Documentários Musicais",
        "description": "Facilita a inclusão de legendas traduzidas ou transcrições precisas em registros audiovisuais de concertos para distribuição em festivais e TV."
      }
    ],
    "troubleshootTitle": "Solução de Dúvidas e Problemas Frequentes",
    "troubleshootSubtitle": "Como resolver desvios de tempo, caracteres corrompidos e frases ausentes.",
    "troubleshootTips": [
      {
        "issue": "A letra está adiantada ou atrasada em relação à música",
        "cause": "O arquivo LRC pode conter uma tag [offset:+/-ms] configurada para outro player, ou o áudio possui silêncio inicial omitido na letra.",
        "solution": "Verifique se há uma linha '[offset:]' no arquivo. Ative ou desative a opção 'Aplicar Tag [offset:]' na ferramenta para equilibrar o tempo da faixa."
      },
      {
        "issue": "A legenda fica estática na tela durante solos instrumentais",
        "cause": "O formato LRC não traz o fim das frases; conversores simples não fecham a legenda até que a frase seguinte comece.",
        "solution": "Mantenha ativado o parâmetro 'Duração Máxima da Legenda' (recomendado entre 4,0 e 5,0 segundos) para ocultar automaticamente os versos durante pausas."
      },
      {
        "issue": "Caracteres especiais, acentos ou cedilhas aparecem desfigurados",
        "cause": "O arquivo .lrc de origem foi codificado em padrões legados (como ANSI ou Windows-1252) em vez do padrão universal UTF-8.",
        "solution": "Abra o arquivo .lrc no Bloco de Notas ou VS Code e salve-o com codificação UTF-8 antes de carregar no conversor."
      },
      {
        "issue": "Refrões repetidos desapareceram após a conversão",
        "cause": "O arquivo original agrupava múltiplos horários na mesma linha e conversores convencionais descartaram as marcações extras.",
        "solution": "Nosso sistema reconhece todas as marcações presentes no mesmo verso, gerando entradas individuais e cronológicas no arquivo SRT."
      }
    ],
    "conclusionTitle": "Legendas Musicais Precisas, Rápidas e Seguras",
    "conclusionText": [
      "Unificar o universo das letras musicais com os padrões de legendas de vídeo torna-se uma tarefa ágil com a tecnologia adequada. Com processamento temporal milimétrico, cálculo de término por antecipação, controle de pausas e desdobramento de refrões repetidos, nosso conversor de LRC para SRT entrega arquivos SubRip de qualidade profissional em poucos segundos.",
      "O grande diferencial é que toda a operação acontece 100% no seu navegador através de JavaScript moderno. Suas músicas, letras e materiais autorais jamais são enviados para servidores externos, proporcionando velocidade máxima e total sigilo de dados. Converta seus arquivos LRC agora e utilize suas letras em qualquer editor ou tocador de vídeo."
    ]
  },
  "fr": {
    "introTitle": "Guide Complet pour Convertir des Paroles LRC en Sous-titres SubRip (.SRT)",
    "introSubtitle": "Maîtrisez la conversion des paroles de chansons synchronisées, des horodatages, des refrains répétés et des ponts instrumentaux en sous-titres vidéo universels.",
    "introText": [
      "Le format LRC (Lyrics) s'est imposé comme le standard incontournable pour la synchronisation numérique des paroles de musique dès l'avènement des baladeurs MP3, des modules Winamp et des applications de karaoké pour smartphones. Grâce à des balises temporelles légères placées au début de chaque vers, les fichiers LRC permettent aux lecteurs audio de surligner le texte en temps réel au rythme de la musique. Néanmoins, les monteurs vidéo, créateurs de contenu et musiciens se heurtent systématiquement à un obstacle lorsqu'ils souhaitent importer ces fichiers dans des logiciels de montage (NLE) comme Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro ou sur des plateformes comme YouTube : ces environnements vidéo exigent des sous-titres SubRip (.SRT) et ignorent totalement le format LRC.",
      "La différence de conception entre ces deux formats est fondamentale. Un fichier LRC fonctionne selon une suite de points de départ (indiquant uniquement l'instant où un vers commence à être chanté), sans aucun moyen formel d'indiquer quand la phrase se termine ni combien de temps elle doit rester affichée. En revanche, le format SubRip (.SRT) impose des plages temporelles strictement délimitées avec une heure de début, une heure de fin, une numérotation séquentielle et une précision à la milliseconde (00:00:00,000 --> 00:00:00,000). Convertir du LRC en SRT ne se résume donc pas à renommer une extension de fichier ; cela requiert un moteur de synchronisation intelligent qui calcule des durées d'affichage cohérentes, gère les ponts musicaux, duplique les vers multiplement horodatés et nettoie les métadonnées superflues.",
      "Ce guide exhaustif détaille la structure interne de ces deux formats, les étapes algorithmiques de la conversion, la gestion des refrains regroupés et des en-têtes [offset:], et explique comment préparer des fichiers de sous-titres impeccables pour des clips musicaux, des vidéos de paroles (lyric videos) et des supports pédagogiques."
    ],
    "whatIsTitle": "Comprendre les Formats : Fichiers LRC vs. Sous-titres SubRip (.SRT)",
    "whatIsText": [
      "Un fichier LRC est un document en texte brut conçu pour les lecteurs audio (tels que Foobar2000, MiniLyrics ou les baladeurs numériques). Sa syntaxe repose sur des balises entre crochets au format [mm:ss.xx] ou [mm:ss.xxx], où 'mm' représente les minutes, 'ss' les secondes et 'xx' les centièmes de seconde. Chaque balise précède immédiatement le texte chanté à ce moment précis. Les fichiers LRC comportent fréquemment des balises d'en-tête de métadonnées de type ID3, telles que [ti:Titre], [ar:Artiste], [al:Album], [by:Auteur] et [length:Durée].",
      "À l'opposé, SubRip (.SRT) est la norme de référence mondiale pour le sous-titrage vidéo. Issu de l'outil éponyme d'extraction de sous-titres de DVD sous Windows, un fichier SRT est constitué de blocs numérotés séparés par des lignes vides. Chaque bloc comprend un numéro d'ordre, un intervalle temporel au format heures, minutes, secondes et millisecondes séparées par une virgule (00:00:00,000 --> 00:00:00,000) et le texte correspondant. Contrairement au LRC, le format SRT garantit que chaque phrase s'efface parfaitement de l'écran avant le déclenchement d'un nouveau dialogue ou plan visuel."
    ],
    "whyConvertTitle": "Pourquoi Convertir des Paroles LRC au Format SRT ?",
    "whyConvertSubtitle": "Offrez une compatibilité sans faille avec vos logiciels de montage, vos lecteurs multimédias et vos réseaux sociaux.",
    "whyConvertReasons": [
      {
        "title": "Compatibilité Universelle avec les Logiciels de Montage",
        "description": "Les outils NLE tels qu'Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro et CapCut ne prennent pas en charge les fichiers .lrc. Convertir en .srt permet de déposer la piste de paroles directement sur la timeline avec une précision à l'image près."
      },
      {
        "title": "Intégration Directe sur YouTube, TikTok et les Réseaux Sociaux",
        "description": "Les plateformes vidéo nécessitent des sous-titres en .srt ou .vtt. La conversion permet de fournir des sous-titres multilingues et d'améliorer l'accessibilité de vos créations musicales."
      },
      {
        "title": "Suppression du Texte Figé Pendant les Solos Musicaux",
        "description": "Faute d'horodatage de fin, un convertisseur basique laisserait le texte affiché pendant un solo de guitare de 40 secondes. Notre outil calcule des durées adaptées pour fermer les sous-titres à temps."
      },
      {
        "title": "Gestion des Refrains Répétés et des Balises Multiples",
        "description": "Dans les fichiers LRC optimisés, les refrains récurrents partagent une seule ligne avec plusieurs horodatages. La conversion en SRT duplique et ordonne chaque bloc de façon strictement chronologique."
      }
    ],
    "howToTitle": "Méthode de Conversion Étape par Étape",
    "howToSubtitle": "Transformez vos paroles en sous-titres SubRip parfaits en quelques secondes.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Charger ou Coller les Paroles LRC",
        "description": "Glissez-déposez votre fichier .lrc dans la zone de dépôt ou collez le texte contenant les balises [mm:ss.xx] directement dans le volet gauche."
      },
      {
        "step": "2",
        "title": "Définir Durées et Intervalles",
        "description": "Configurez la durée maximale d'affichage pour les passages instrumentaux et l'intervalle entre vers successifs (recommandé : 50 ms)."
      },
      {
        "step": "3",
        "title": "Vérifier et Télécharger le Fichier SRT",
        "description": "Consultez le résultat dans la zone de prévisualisation, copiez le contenu ou cliquez sur 'Télécharger .SRT' pour obtenir votre fichier prêt à l'emploi."
      }
    ],
    "differenceTitle": "Comparatif Technique : Architecture LRC vs. SRT",
    "differenceSubtitle": "Les distinctions majeures entre paroles de musique et standards de sous-titrage vidéo.",
    "differenceTable": [
      {
        "feature": "Usage Principal",
        "lrc": "Affichage de paroles synchronisées dans les lecteurs audio et karaokés",
        "srt": "Sous-titrage pour le cinéma, la vidéo professionnelle et le streaming"
      },
      {
        "feature": "Format Temporel",
        "lrc": "[mm:ss.xx] (centièmes) ou [mm:ss.xxx] (millisecondes)",
        "srt": "HH:MM:SS,mmm (heures, minutes, secondes, virgule millisecondes)"
      },
      {
        "feature": "Définition de l'Intervalle",
        "lrc": "Point de départ uniquement ; la fin est implicite",
        "srt": "Horodatages explicites de début ET de fin reliés par '-->'"
      },
      {
        "feature": "Numérotation Séquentielle",
        "lrc": "Absente ; les lignes sont affichées dans l'ordre de leurs balises",
        "srt": "Obligatoire avec des entiers consécutifs (1, 2, 3...)"
      },
      {
        "feature": "Balises Multiples par Ligne",
        "lrc": "Accepté (ex. [00:12.00][01:30.00]Refrain)",
        "srt": "Interdit ; chaque sous-titre doit constituer un bloc autonome"
      },
      {
        "feature": "Métadonnées d'En-tête",
        "lrc": "Balises dédiées ([ar:], [ti:], [al:], [offset:], [length:])",
        "srt": "Aucun en-tête ; commence immédiatement au bloc 1"
      },
      {
        "feature": "Gestion des Silences Musicaux",
        "lrc": "Dépend du lecteur ou requiert des balises vides",
        "srt": "Écran propre garanti dès qu'aucun sous-titre n'est actif"
      }
    ],
    "timingMechanicsTitle": "Mécanisme de Calcul de Fin de Vers et Plafonds Musicaux",
    "timingMechanicsSubtitle": "Comment passer d'un simple point de départ à des intervalles de sous-titres rigoureusement clos.",
    "timingMechanicsText": [
      "La norme LRC ne prévoyant aucun horodatage de fin pour les vers chantés, convertir ces lignes vers le format SRT nécessite un moteur heuristique capable d'estimer des moments de disparition naturels. Sans ce traitement, un lecteur vidéo laisserait le texte affiché jusqu'à la réplique suivante, produisant un rendu peu soigné où une ligne reste visible pendant un long solo de batterie.",
      "Notre convertisseur met en œuvre un calcul à plusieurs niveaux pour chaque ligne :",
      "1. Synchronisation Anticipée : Pour le sous-titre N, l'algorithme regarde l'horodatage de début du sous-titre N+1. La fin prévisionnelle est fixée à Début(N+1) moins un intervalle de sécurité (50 millisecondes par défaut), ce qui évite tout chevauchement visuel désagréable à l'écran.",
      "2. Plafond pour les Ponts Instrumentaux : Si l'écart entre Début(N) et Début(N+1) excède la 'Durée Maximale du Sous-titre' (5,0 secondes par défaut), le système clôture l'affichage à 5,0 secondes. Le texte s'efface en douceur pour laisser toute la place à l'interprétation musicale.",
      "3. Balises Vides de Réinitialisation : Dans les fichiers LRC rédigés avec minutie, les auteurs placent parfois des balises temporelles sans texte (comme '[01:15.00]') pour indiquer précisément l'arrêt de la voix. Notre analyseur identifie ces signaux et interrompt le sous-titre précédent à cette milliseconde précise.",
      "4. Estimation du Vers Final : Comme la dernière ligne de la chanson n'a pas de sous-titre suivant pour servir de repère, sa durée est déterminée d'après le nombre de caractères selon une vitesse de lecture naturelle (15 à 17 caractères par seconde), dans une fourchette de 2 à 5 secondes."
    ],
    "multiTimestampTitle": "Gestion des Balises Multiples et des En-têtes [offset:]",
    "multiTimestampSubtitle": "Décomposition des refrains regroupés et calage temporel universel.",
    "multiTimestampText": [
      "Dans l'univers des fichiers de paroles pour baladeurs, l'économie d'espace a favorisé l'écriture de lignes comportant plusieurs balises pour les refrains répétés : '[00:45.20][01:45.20][02:45.20]Don\\'t stop believing'. Si les lecteurs musicaux comme MiniLyrics interprètent très bien ce raccourci, les logiciels vidéo refusent catégoriquement les fichiers contenant plusieurs horodatages sur une même ligne.",
      "Notre analyseur extrait chaque balise présente sur la ligne, récupère les paroles associées et génère des sous-titres indépendants pour chacune d'elles. L'ensemble des répliques est ensuite réordonné chronologiquement par heure de début et indexé numériquement (1, 2, 3...), produisant un fichier SubRip parfaitement conforme.",
      "Par ailleurs, certains fichiers LRC intègrent une balise d'en-tête '[offset:+/-ms]'. Une valeur positive (ex. '[offset:500]') indique que l'audio accuse un retard de 500 ms par rapport aux paroles et nécessite un décalage d'une demi-seconde. En activant l'option 'Appliquer la Balise [offset:]', le convertisseur ajuste automatiquement l'ensemble des repères temporels."
    ],
    "exampleTitle": "Exemple Concret de Conversion : De LRC à SubRip (SRT)",
    "exampleIntro": "Comparez un fichier LRC brut avec métadonnées, balises multiples et centièmes de seconde au fichier SubRip (.SRT) propre et ordonné obtenu en sortie.",
    "exampleLrcInput": "[ti:Bohemian Rhapsody]\n[ar:Queen]\n[al:A Night at the Opera]\n[offset:200]\n[00:01.50]Is this the real life?\n[00:04.80]Is this just fantasy?\n[00:09.10]Caught in a landslide, no escape from reality\n[00:17.00]\n[00:28.50][01:45.00]Any way the wind blows",
    "exampleSrtOutput": "1\n00:00:01,700 --> 00:00:04,950\nIs this the real life?\n\n2\n00:00:05,000 --> 00:00:09,250\nIs this just fantasy?\n\n3\n00:00:09,300 --> 00:00:14,300\nCaught in a landslide, no escape from reality\n\n4\n00:00:28,700 --> 00:00:33,700\nAny way the wind blows\n\n5\n00:01:45,200 --> 00:01:50,200\nAny way the wind blows",
    "exampleExplanation": "Remarquez les ajustements appliqués : Premièrement, le décalage de 200 ms a été ajouté à chaque temps ([00:01.50] est devenu 00:00:01,700). Deuxièmement, la balise vide à [00:17.00] a servi de délimiteur de silence, bornant le sous-titre 3 à 5 secondes. Troisièmement, le vers pourvu de deux balises a été dédoublé en deux sous-titres distincts (sous-titre 4 à 00:28,700 et sous-titre 5 à 01:45,200). Enfin, les métadonnées d'en-tête ont été éliminées.",
    "ffmpegTitle": "Automatiser la Conversion LRC vers SRT avec FFmpeg",
    "ffmpegSubtitle": "Extraction, conversion et intégration de paroles sous forme de sous-titres en ligne de commande.",
    "ffmpegCommand": "ffmpeg -i audio.mp3 -sub_charenc UTF-8 -i lyrics.lrc -c:a copy -c:s srt output.mkv",
    "ffmpegExplanation": [
      "FFmpeg permet d'incorporer des flux de sous-titres dans des conteneurs modernes comme Matroska (.mkv) ou MP4 (.mp4). Pour convertir un fichier de paroles isolé dans votre terminal, vous pouvez lancer : 'ffmpeg -i chanson.lrc chanson.srt'.",
      "Cependant, les convertisseurs en ligne de commande appliquent rarement des règles intelligentes pour raccourcir les silences musicaux prolongés, ce qui peut laisser des sous-titres visibles pendant de longues minutes. Notre outil web assure un calage irréprochable des durées et des pauses avant tout multiplexage vidéo."
    ],
    "useCasesTitle": "Applications Concrètes de la Conversion LRC vers SRT",
    "useCasesSubtitle": "Des cas d'usage où la synchronisation de paroles apporte une réelle valeur ajoutée.",
    "useCasesList": [
      {
        "title": "Création de Clips et de Vidéos Lyriques (Lyric Videos)",
        "description": "Monteurs et motion designers importent les sous-titres SRT convertis dans Premiere Pro, After Effects ou CapCut pour créer des animations de texte calées sur la musique."
      },
      {
        "title": "Écrans de Karaoké et Retransmissions en Direct",
        "description": "Permet de convertir des paroles numériques en pistes universelles pour les systèmes de karaoké en salle, les écrans de concert et les flux de streaming."
      },
      {
        "title": "Apprentissage des Langues par la Chanson",
        "description": "Étudiants et enseignants s'appuient sur des sous-titres synchronisés dans VLC ou YouTube pour observer la prononciation et le débit en temps réel."
      },
      {
        "title": "Concerts Filmés et Documentaires Musicaux",
        "description": "Facilite l'intégration de traductions ou de transcriptions précises sur des enregistrements de spectacles vivants pour la télévision ou le cinéma."
      }
    ],
    "troubleshootTitle": "Résolution des Difficultés Fréquentes de LRC vers SRT",
    "troubleshootSubtitle": "Comment corriger les décalages audio, les anomalies de caractères et les répliques manquantes.",
    "troubleshootTips": [
      {
        "issue": "Les paroles sont décalées de plusieurs secondes par rapport à la voix",
        "cause": "Le fichier LRC peut comporter une balise [offset:+/-ms] propre à un lecteur donné, ou le fichier audio possède un silence introductif absent du texte.",
        "solution": "Vérifiez la présence d'une ligne '[offset:]' dans le fichier. Cochez ou décochez l'option 'Appliquer la Balise [offset:]' dans les réglages de l'outil pour recaler le texte."
      },
      {
        "issue": "Le texte reste bloqué à l'écran pendant les solos d'instruments",
        "cause": "Le format LRC ne renseigne pas la fin des phrases ; sans plafond de durée, un convertisseur maintient le texte affiché jusqu'au vers suivant.",
        "solution": "Veillez à ce que le paramètre 'Durée Maximale du Sous-titre' soit activé (valeur conseillée : 4,0 à 5,0 secondes) pour fermer automatiquement les vers lors des pauses."
      },
      {
        "issue": "Les lettres accentuées ou les caractères spéciaux apparaissent corrompus",
        "cause": "Le fichier .lrc source a été sauvegardé avec un encodage ancien (comme ANSI, Windows-1252 ou ISO-8859-1) au lieu de l'encodage moderne UTF-8.",
        "solution": "Ouvrez votre fichier .lrc dans le Bloc-notes ou VS Code et réenregistrez-le au format UTF-8 avant de l'importer dans le convertisseur."
      },
      {
        "issue": "Les refrains récurrents sont absents du fichier converti",
        "cause": "Le fichier source regroupait plusieurs balises temporelles sur une seule ligne et des outils simples ont ignoré les balises additionnelles.",
        "solution": "Notre outil prend en charge nativement les balises multiples par ligne, dupliquant et ordonnant chaque occurrence dans la chronologie du fichier SRT."
      }
    ],
    "conclusionTitle": "Un Sous-titrage Musical Rapide, Précis et Respectueux de Vos Données",
    "conclusionText": [
      "Faire le pont entre paroles musicales synchronisées et sous-titres vidéo universels est simple avec les bons outils. En conjuguant une précision mathématique à la milliseconde, une détection anticipée de fin de réplique, le plafonnement des ponts instrumentaux et la duplication des refrains, notre convertisseur LRC en SRT produit des fichiers SubRip de niveau professionnel en quelques secondes.",
      "De plus, l'ensemble du processus s'effectue intégralement dans votre navigateur web via un code JavaScript moderne. Vos musiques, paroles et créations restent confidentielles sur votre ordinateur, sans aucun téléversement sur des serveurs distants. Convertissez vos fichiers LRC dès maintenant et sublimez vos vidéos avec des paroles parfaitement synchronisées."
    ]
  },
  "de": {
    "introTitle": "Umfassender Leitfaden zur Konvertierung von LRC-Liedtexten in SubRip (.SRT) Untertitel",
    "introSubtitle": "Meistern Sie die Transformation synchronisierter Songtexte, Zeitstempel, mehrfacher Zeitmarken und Instrumentalpausen in universelle Videountertitel.",
    "introText": [
      "Das LRC-Format (Lyrics) gilt seit den Anfängen tragbarer MP3-Player, Winamp-Plugins und mobiler Karaoke-Apps als unangefochtener Standard für synchronisierte Songtexte. Durch die Verknüpfung kompakter Zeitmarken mit einzelnen Textzeilen ermöglichen LRC-Dateien Audio-Playern, Verse während der Wiedergabe in Echtzeit hervorzuheben. Videoproduzenten, Editoren und Content-Ersteller stoßen jedoch regelmäßig auf eine unüberwindbare Hürde, wenn sie LRC-Dateien in professionelle Schnittprogramme wie Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro oder auf Plattformen wie YouTube importieren möchten: Videoschnitt-Software akzeptiert ausschließlich SubRip (.SRT) Untertiteldateien und kann mit LRC-Dateien nichts anfangen.",
      "Die strukturellen Unterschiede zwischen beiden Formaten sind gravierend. LRC-Dateien arbeiten als kontinuierliche Abfolge von Startzeitpunkten (sie definieren lediglich, wann eine gesungene Zeile beginnt), besitzen jedoch keinen Mechanismus, um das Ende einer Zeile oder deren Anzeigedauer festzulegen. SubRip-Dateien (.SRT) verlangen hingegen strikt begrenzte Zeitintervalle mit expliziter Start- und Endzeit, fortlaufenden Sequenznummern und Millisekundengenauigkeit (00:00:00,000 --> 00:00:00,000). Die Umwandlung von LRC in SRT ist daher weit mehr als eine Dateiendungsänderung; sie erfordert eine intelligente Synchronisationslogik, die natürliche Endzeiten berechnet, Instrumentalpausen abfängt, mehrfach getaggte Zeilen aufteilt und störende Metadaten entfernt.",
      "Dieser Leitfaden beleuchtet die technische Architektur beider Formate, erläutert die algorithmischen Schritte der Konvertierung, beschreibt den Umgang mit wiederkehrenden Refrains sowie [offset:]-Headern und zeigt, wie Sie fehlerfreie Untertitelspuren für Musikvideos, Lyric-Visualisierungen und Sprachlernprojekte erstellen."
    ],
    "whatIsTitle": "Format-Vergleich: LRC vs. SubRip (SRT)",
    "whatIsText": [
      "Eine LRC-Datei ist ein reines Textdokument, das speziell für Audioplayer und Musikprogramme (wie Foobar2000, MiniLyrics oder mobile Mediaplayer) entwickelt wurde. Die grundlegende Syntax basiert auf Zeitmarken in eckigen Klammern der Form [mm:ss.xx] oder [mm:ss.xxx], wobei 'mm' für Minuten, 'ss' für Sekunden und 'xx' für Hundertstelsekunden steht. Jedes Tag steht unmittelbar vor dem Text, der genau zu diesem Zeitpunkt gesungen wird. Zudem enthalten LRC-Dateien im Kopfbereich oft Metadaten im ID3-Stil wie [ti:Titel], [ar:Künstler], [al:Album], [by:Autor] und [length:Dauer].",
      "SubRip (.SRT) hingegen ist der weltweite Standard für Videountertitel. Ursprünglich aus dem gleichnamigen DVD-Ripping-Programm für Windows hervorgegangen, besteht eine SRT-Datei aus nummerierten Untertitelblöcken, die durch Leerzeilen getrennt sind. Jeder Block enthält eine ganzzahlige Indexnummer, eine Zeitspanne im Format Stunden, Minuten, Sekunden und kommagetrennte Millisekunden (00:00:00,000 --> 00:00:00,000) sowie den eigentlichen Text. Anders als LRC garantiert SRT, dass Untertitel wieder zuverlässig vom Bildschirm verschwinden, bevor neue Szenen oder Dialoge beginnen."
    ],
    "whyConvertTitle": "Warum LRC-Liedtexte in das SRT-Format umwandeln?",
    "whyConvertSubtitle": "Volle Kompatibilität mit professionellen Schnittprogrammen, Streamingdiensten und Videoplayern sicherstellen.",
    "whyConvertReasons": [
      {
        "title": "Universelle Kompatibilität mit Videoschnittprogrammen",
        "description": "Schnittprogramme wie Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro und CapCut unterstützen keine .lrc-Dateien. Die Umwandlung in .srt ermöglicht das direkte Ablegen synchroner Textspuren auf der Timeline."
      },
      {
        "title": "Direkter Upload auf YouTube, TikTok und Social Media",
        "description": "Videoplattformen setzen .srt oder .vtt für Untertitel voraus. Die Konvertierung gestattet das Einbinden barrierefreier und mehrsprachiger Untertitel in Musikvideos."
      },
      {
        "title": "Kein Einfrieren von Textzeilen bei Musikpausen",
        "description": "Da LRC keine Endzeiten besitzt, würden einfache Konverter Verse während 40-sekündiger Gitarrensoli unbegrenzt stehen lassen. Unser Tool blendet Untertitel durch intelligente Zeitgrenzen rechtzeitig aus."
      },
      {
        "title": "Unterstützung für mehrfach getaggte Refrains",
        "description": "In optimierten LRC-Dateien teilen sich wiederholte Refrains oft eine Zeile mit mehreren Zeitstempeln. Bei der Konvertierung in SRT wird jede Wiederholung dupliziert und chronologisch eingeordnet."
      }
    ],
    "howToTitle": "Schritt-für-Schritt-Anleitung zur Konvertierung",
    "howToSubtitle": "So wandeln Sie Songtexte in wenigen Sekunden in präzise SubRip-Untertitel um.",
    "howToSteps": [
      {
        "step": "1",
        "title": "LRC-Text laden oder einfügen",
        "description": "Ziehen Sie Ihre .lrc-Datei in das Upload-Feld oder fügen Sie den Liedtext mit [mm:ss.xx]-Zeitmarken direkt in das linke Textfenster ein."
      },
      {
        "step": "2",
        "title": "Laufzeitgrenzen und Abstände anpassen",
        "description": "Stellen Sie die maximale Anzeigedauer für Instrumentalpausen sowie den Abstand zwischen aufeinanderfolgenden Zeilen (Standard: 50 ms) ein."
      },
      {
        "step": "3",
        "title": "SRT-Datei prüfen und herunterladen",
        "description": "Überprüfen Sie das Ergebnis im Vorschaubereich, kopieren Sie den Text in die Zwischenablage oder klicken Sie auf '.SRT herunterladen'."
      }
    ],
    "differenceTitle": "Technischer Vergleich: LRC- vs. SRT-Architektur",
    "differenceSubtitle": "Wesentliche Unterschiede zwischen Songtext-Markups und professionellen Untertitelstandards.",
    "differenceTable": [
      {
        "feature": "Haupteinsatzzweck",
        "lrc": "Liedtextanzeige und Karaoke in Musikplayern und Audiosoftware",
        "srt": "Untertitel und Closed Captions für Film, Fernsehen und Webstreaming"
      },
      {
        "feature": "Zeitstempel-Format",
        "lrc": "[mm:ss.xx] (Hundertstelsekunden) oder [mm:ss.xxx] (Millisekunden)",
        "srt": "HH:MM:SS,mmm (Stunden, Minuten, Sekunden, Komma Millisekunden)"
      },
      {
        "feature": "Zeitintervall-Definition",
        "lrc": "Nur Startzeit; Endzeitpunkt ist implizit oder fehlt",
        "srt": "Explizite Start- UND Endzeiten, verbunden durch '-->'"
      },
      {
        "feature": "Sequenzielle Nummerierung",
        "lrc": "Keine; Zeilen werden anhand der Zeitmarke gerendert",
        "srt": "Zwingend vorgeschrieben mit fortlaufenden Ganzzahlen (1, 2, 3...)"
      },
      {
        "feature": "Mehrere Zeitmarken pro Zeile",
        "lrc": "Erlaubt (z. B. [00:12.00][01:30.00]Refrainzeile)",
        "srt": "Nicht zulässig; jeder Untertitel muss ein eigener Block sein"
      },
      {
        "feature": "Header-Metadaten",
        "lrc": "Integrierte Tags ([ar:], [ti:], [al:], [offset:], [length:])",
        "srt": "Kein Datei-Header; beginnt direkt mit Untertitelblock 1"
      },
      {
        "feature": "Behandlung von Musikpausen",
        "lrc": "Abhängig von Player-Logik oder erfordert leere Zeitmarken",
        "srt": "Garantiert freier Bildschirm, sobald kein Untertitel aktiv ist"
      }
    ],
    "timingMechanicsTitle": "Mechanik der Endzeitberechnung und Instrumental-Obergrenzen",
    "timingMechanicsSubtitle": "Wie die Lücke zwischen reinen Startpunkten und geschlossenen Untertitelintervallen geschlossen wird.",
    "timingMechanicsText": [
      "Da die LRC-Spezifikation keine Endzeit für einzelne Zeilen vorsieht, erfordert die Umwandlung in SRT einen intelligenten Berechnungsansatz, der harmonische Endzeitpunkte bestimmt. Andernfalls würde ein Videoplayer den Untertitel bis zur nächsten gesungenen Zeile anzeigen, was bei längeren Soli oder Instrumentalabschnitten zu störenden, unschönen Standbildern des Textes führt.",
      "Unser Konverter nutzt eine mehrstufige Auswertung für jeden Eintrag:",
      "1. Vorausschauende Synchronisation: Für Block N prüft das System den Startzeitpunkt von Block N+1. Das vorläufige Ende wird auf Start(N+1) minus einen kleinen Pufferabstand (standardmäßig 50 Millisekunden) festgelegt, wodurch visuelles Flackern verhindert wird.",
      "2. Obergrenze bei Musikpausen: Überschreitet die Spanne zwischen Start(N) und Start(N+1) die eingestellte 'Maximale Untertiteldauer' (Standard: 5,0 Sekunden), begrenzt das Tool die Anzeige auf 5,0 Sekunden. Der Text blendet sanft aus und lenkt nicht von der Musik ab.",
      "3. Erkennung stummer Löschmarken: In sorgfältig erstellten LRC-Dateien setzen Autoren oft leere Zeitmarken (z. B. '[01:15.00]') ein, um das genaue Ende eines Gesangsteils zu markieren. Unser Parser erkennt diese Tags und schließt den vorherigen Untertitel exakt zu diesem Zeitpunkt.",
      "4. Zeitschätzung für die letzte Zeile: Für den letzten Vers eines Songs gibt es keinen nachfolgenden Block als Referenz. Hier wird die Anzeigedauer anhand der Zeichenanzahl mit natürlicher Lesegeschwindigkeit (15 bis 17 Zeichen pro Sekunde) im Rahmen von 2 bis 5 Sekunden ermittelt."
    ],
    "multiTimestampTitle": "Umgang mit mehrfachen Zeitstempeln und [offset:]-Headern",
    "multiTimestampSubtitle": "Auflösung komprimierter Liedtextstrukturen und millimetergenaue Gesamtanpassung.",
    "multiTimestampText": [
      "Zur Reduzierung der Dateigröße wurden bei LRC-Dateien wiederkehrende Textabschnitte wie Refrains häufig in einer einzigen Zeile mit mehreren Zeitmarken zusammengefasst: '[00:45.20][01:45.20][02:45.20]Don\\'t stop believing'. Während Audioplayer diese Notation problemlos verarbeiten, verweigern Videoschnittprogramme solche Konstrukte strikt.",
      "Unser Parser analysiert alle Zeitstempel einer Zeile, extrahiert den zugehörigen Text und generiert für jede Marke einen eigenständigen Untertitel. Anschließend wird die gesamte Liste chronologisch sortiert und mit fortlaufenden Nummern (1, 2, 3...) versehen, wodurch eine vollkommen normgerechte SubRip-Datei entsteht.",
      "Darüber hinaus enthalten manche LRC-Dateien im Kopfbereich den Tag '[offset:+/-ms]'. Ein positiver Wert (z. B. '[offset:500]') besagt, dass der Ton hinter dem Text zurückliegt und eine Verzögerung von 500 ms benötigt. Ist die Option '[offset:]-Tag anwenden' aktiviert, rechnet der Konverter diesen Wert automatisch in alle Zeitmarken ein."
    ],
    "exampleTitle": "Praxisbeispiel: Von LRC zu SubRip (SRT)",
    "exampleIntro": "Vergleichen Sie eine rohe LRC-Liedtextdatei mit Metadaten, mehrfachen Zeitstempeln und Hundertstelsekunden mit der sauberen SubRip (.SRT) Ausgabe.",
    "exampleLrcInput": "[ti:Bohemian Rhapsody]\n[ar:Queen]\n[al:A Night at the Opera]\n[offset:200]\n[00:01.50]Is this the real life?\n[00:04.80]Is this just fantasy?\n[00:09.10]Caught in a landslide, no escape from reality\n[00:17.00]\n[00:28.50][01:45.00]Any way the wind blows",
    "exampleSrtOutput": "1\n00:00:01,700 --> 00:00:04,950\nIs this the real life?\n\n2\n00:00:05,000 --> 00:00:09,250\nIs this just fantasy?\n\n3\n00:00:09,300 --> 00:00:14,300\nCaught in a landslide, no escape from reality\n\n4\n00:00:28,700 --> 00:00:33,700\nAny way the wind blows\n\n5\n00:01:45,200 --> 00:01:50,200\nAny way the wind blows",
    "exampleExplanation": "Wichtige Punkte dieses Beispiels: Erstens wurde der 200-ms-Offset auf alle Zeitmarken angewendet ([00:01.50] wurde zu 00:00:01,700). Zweitens fungierte der leere Tag bei [00:17.00] als Instrumentalbegrenzung, sodass Untertitel 3 nach 5 Sekunden schloss. Drittens wurde die Zeile mit zwei Zeitstempeln in zwei chronologische Untertitel (Block 4 bei 00:28,700 und Block 5 bei 01:45,200) getrennt. Die Kopfdaten wurden vollständig entfernt.",
    "ffmpegTitle": "Automatisierte Konvertierung von LRC in SRT mit FFmpeg",
    "ffmpegSubtitle": "Extrahieren, konvertieren und einbetten von Liedtext-Untertiteln per Terminalbefehl.",
    "ffmpegCommand": "ffmpeg -i audio.mp3 -sub_charenc UTF-8 -i lyrics.lrc -c:a copy -c:s srt output.mkv",
    "ffmpegExplanation": [
      "FFmpeg kann Untertitelspuren in Mediencontainer wie Matroska (.mkv) oder MP4 (.mp4) einbetten. Um eine einzelne LRC-Datei direkt im Terminal umzuwandeln, genügt der Befehl: 'ffmpeg -i song.lrc song.srt'.",
      "Allerdings besitzen Befehlszeilen-Tools oft keine flexiblen Heuristiken zur Begrenzung langer Instrumentalpausen, wodurch Zeilen minutenlang stehen bleiben können. Mit unserem Browser-Tool stellen Sie sicher, dass Dauerobergrenzen und Abstände vor dem Video-Muxing exakt greifen."
    ],
    "useCasesTitle": "Typische Einsatzbereiche für die LRC-in-SRT-Konvertierung",
    "useCasesSubtitle": "Situationen, in denen die präzise Liedtext-Synchronisation unmittelbaren Mehrwert schafft.",
    "useCasesList": [
      {
        "title": "Produktion von Musikvideos und Lyric-Videos",
        "description": "Cutter und Motion Designer importieren konvertierte SRT-Spuren in Premiere Pro, After Effects oder CapCut, um typografische Textanimationen passgenau zum Beat anzulegen."
      },
      {
        "title": "Karaoke-Monitore und Bühnenanzeigen",
        "description": "Ermöglicht die Bereitstellung synchroner Songtexte für Karaoke-Systeme, Bühnenmonitore und Live-Streams mit optimaler Lesbarkeit."
      },
      {
        "title": "Sprachunterricht und Transkriptionsanalysen",
        "description": "Lehrende und Sprachschüler nutzen synchrone Lieduntertitel in VLC oder YouTube, um Aussprache, Intonation und Wortschatz gezielt nachzuvollziehen."
      },
      {
        "title": "Konzertmitschnitte und Musikdokumentationen",
        "description": "Erleichtert das Einfügen übersetzter Untertitel und Gesangstexte in Live-Aufnahmen für TV-Ausstrahlungen und Filmfestivals."
      }
    ],
    "troubleshootTitle": "Fehlerbehebung bei der LRC-in-SRT-Konvertierung",
    "troubleshootSubtitle": "Lösungen für Asynchronitäten, Darstellungsfehler und fehlende Zeilen.",
    "troubleshootTips": [
      {
        "issue": "Der Text erscheint um mehrere Sekunden verschoben zum Ton",
        "cause": "Die LRC-Datei enthält eventuell ein herstellerspezifisches [offset:+/-ms]-Tag oder die Audiodatei hat eine Stille am Anfang, die im Text fehlt.",
        "solution": "Prüfen Sie, ob eine '[offset:]'-Zeile vorhanden ist. Aktivieren oder deaktivieren Sie die Option '[offset:]-Tag anwenden' im Konverter, um die Zeitachse anzupassen."
      },
      {
        "issue": "Liedtexte bleiben während Soli minutenlang auf dem Bildschirm stehen",
        "cause": "Das LRC-Format enthält keine Endzeiten; einfache Konverter lassen Zeilen bis zum nächsten Vers geöffnet.",
        "solution": "Aktivieren Sie die Option 'Max. Untertiteldauer' (empfohlen: 4,0 bis 5,0 Sekunden), damit Zeilen bei Musikpausen automatisch ausgeblendet werden."
      },
      {
        "issue": "Umlaute und Sonderzeichen werden fehlerhaft dargestellt (Mojibake)",
        "cause": "Die .lrc-Datei wurde in einer veralteten ANSI- oder Windows-Codierung anstelle von standardmäßigem UTF-8 abgespeichert.",
        "solution": "Öffnen Sie die .lrc-Datei im Windows-Editor oder in VS Code und speichern Sie sie im UTF-8-Format ab, bevor Sie sie im Konverter laden."
      },
      {
        "issue": "Wiederkehrende Refrains fehlen in der Ausgabedatei",
        "cause": "Die Originaldatei nutzte mehrere Zeitmarken auf einer Zeile, welche von simplen Tools ignoriert wurden.",
        "solution": "Unser Konverter unterstützt mehrfache Zeitstempel pro Zeile standardmäßig und ordnet jeden Refrain chronologisch korrekt in die SRT-Datei ein."
      }
    ],
    "conclusionTitle": "Präzise und sichere Untertitelung für Musik und Video",
    "conclusionText": [
      "Die Umwandlung synchronisierter Songtexte in standardisierte Videountertitel gelingt mit den richtigen Werkzeugen im Handumdrehen. Durch millisekundengenaue Auswertung, intelligente Endzeitberechnung, Pausenbegrenzung und die Entflechtung mehrfach getaggter Refrains liefert unser LRC in SRT Konverter sendefertige SubRip-Dateien in Sekunden.",
      "Dabei arbeitet das Tool vollständig lokal in Ihrem Webbrowser mittels modernem JavaScript. Ihre Songtexte, Musikdateien und Notizen bleiben auf Ihrem Rechner geschützt – ohne Server-Uploads und ohne Risiko für Ihre Privatsphäre. Konvertieren Sie Ihre LRC-Dateien noch heute für jedes Schnittprogramm und jeden Mediaplayer."
    ]
  },
  "id": {
    "introTitle": "Panduan Lengkap Mengubah Lirik Lagu LRC Menjadi Subtitle SubRip (.SRT)",
    "introSubtitle": "Kuasai konversi lirik lagu tersinkronisasi, penanda waktu, bait berulang, dan jeda instrumen musik menjadi subtitle video standar.",
    "introText": [
      "Format LRC (Lyrics) telah menjadi standar universal untuk menyinkronkan teks lirik lagu digital sejak era pemutar MP3 portabel, plugin Winamp, dan aplikasi karaoke ponsel pintar. Dengan menyematkan penanda waktu ringan di awal setiap baris teks, file LRC memungkinkan aplikasi pemutar musik menyorot lirik secara tepat seiring berjalannya lagu. Namun, para editor video, pembuat konten, dan musisi sering kali menghadapi kendala teknis saat ingin memasukkan lirik LRC ke dalam aplikasi pengeditan video (NLE) seperti Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro, atau platform seperti YouTube: semua perangkat lunak video tersebut membutuhkan subtitle SubRip (.SRT) dan tidak mendukung format LRC.",
      "Perbedaan struktur antara kedua format ini sangat mendasar. File LRC bekerja berdasarkan lini masa titik mulai (hanya mencatat kapan sebuah bait dinyanyikan), tanpa mekanisme bawaan untuk menentukan kapan baris itu selesai atau berapa lama teks harus tampil di layar. Sebaliknya, file SubRip (.SRT) menuntut rentang waktu yang tegas dengan penanda awal, penanda akhir, nomor urut teratur, dan format hingga satuan milidetik (00:00:00,000 --> 00:00:00,000). Mengubah LRC ke SRT bukanlah sekadar mengganti ekstensi file; proses ini membutuhkan mesin sinkronisasi cerdas yang mampu memperkirakan durasi wajar, mengatasi jeda musik solo yang panjang, memecah bait dengan banyak waktu sekaligus, dan menyingkirkan tag metadata yang tidak diperlukan.",
      "Panduan ini mengupas tuntas arsitektur teknis kedua format, langkah kerja konversi, penanganan bait berulang dan header [offset:], serta cara menyiapkan trek subtitle yang rapi untuk video musik, visualizer lirik, dan sarana pembelajaran bahasa."
    ],
    "whatIsTitle": "Memahami Perbedaan Format: LRC vs. SubRip (.SRT)",
    "whatIsText": [
      "File LRC adalah dokumen teks polos yang dirancang khusus untuk pemutar musik (seperti Foobar2000, MiniLyrics, atau pemutar audio portabel). Sintaks dasarnya menggunakan tanda kurung siku dengan format [mm:ss.xx] atau [mm:ss.xxx], di mana 'mm' mewakili menit, 'ss' detik, dan 'xx' seperseratus detik. Setiap penanda waktu diletakkan tepat sebelum lirik yang dinyanyikan pada detik tersebut. Selain itu, file LRC sering menyertakan metadata di bagian atas seperti [ti:Judul], [ar:Artis], [al:Album], [by:Penulis], dan [length:Durasi].",
      "Sebaliknya, SubRip (.SRT) merupakan format standar internasional untuk teks terjemahan dan takarir video. Lahir dari perangkat lunak penyalin DVD untuk Windows, file SRT tersusun atas blok-blok bernomor yang dipisahkan oleh baris kosong. Tiap blok memuat nomor urut, rentang waktu berformat jam, menit, detik, dan milidetik dengan tanda koma (00:00:00,000 --> 00:00:00,000), serta teks yang ditampilkan. Berbeda dari LRC, format SRT memastikan teks benar-benar menghilang dari layar sebelum adegan atau dialog berikutnya dimulai."
    ],
    "whyConvertTitle": "Mengapa Perlu Mengubah Lirik LRC ke Format SRT?",
    "whyConvertSubtitle": "Mendapatkan kompatibilitas penuh dengan software video editing, media player, dan platform media sosial.",
    "whyConvertReasons": [
      {
        "title": "Dukungan Penuh pada Software Video Editing",
        "description": "Software seperti Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro, dan CapCut tidak mendukung format .lrc. Mengubahnya ke .srt memudahkan Anda menyeret trek lirik langsung ke timeline dengan presisi tinggi."
      },
      {
        "title": "Bisa Diunggah Langsung ke YouTube, TikTok & Medsos",
        "description": "Platform video membutuhkan format .srt atau .vtt untuk takarir otomatis. Konversi ini memungkinkan penonton menikmati lirik interaktif pada video musik Anda."
      },
      {
        "title": "Mencegah Teks Tertahan Saat Solo Musik Panjang",
        "description": "Karena LRC tidak mencatat waktu berakhir, konverter biasa akan membiarkan lirik tetap terpampang selama solo gitar 40 detik. Alat kami membatasi durasi tampilan secara otomatis agar video tetap rapi."
      },
      {
        "title": "Mendukung Reff Berulang dengan Banyak Penanda Waktu",
        "description": "Dalam file LRC yang efisien, reff lagu sering kali digabung dalam satu baris dengan beberapa penanda waktu. Saat diubah ke SRT, setiap bagian digandakan dan diurutkan secara kronologis."
      }
    ],
    "howToTitle": "Panduan Langkah demi Langkah Melakukan Konversi",
    "howToSubtitle": "Cara mengubah lirik lagu menjadi subtitle SubRip akurat hanya dalam beberapa detik.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Unggah atau Tempel Lirik LRC",
        "description": "Tarik dan lepas file .lrc Anda ke kotak yang tersedia atau tempel teks lirik dengan penanda [mm:ss.xx] langsung ke panel kiri."
      },
      {
        "step": "2",
        "title": "Atur Batas Durasi dan Jeda Antar Baris",
        "description": "Tentukan batas durasi maksimal untuk jeda melodi dan jeda waktu sebelum baris berikutnya tampil (biasanya 50 milidetik)."
      },
      {
        "step": "3",
        "title": "Periksa dan Unduh File SRT",
        "description": "Lihat hasil konversi di panel sebelah kanan, salin teks ke papan klip, atau klik 'Unduh .SRT' untuk langsung digunakan."
      }
    ],
    "differenceTitle": "Perbandingan Teknis: Arsitektur LRC vs. SRT",
    "differenceSubtitle": "Perbedaan mendasar antara penanda lirik musik dan standar takarir video profesional.",
    "differenceTable": [
      {
        "feature": "Tujuan Utama",
        "lrc": "Tampilan lirik lagu dan karaoke pada software pemutar musik",
        "srt": "Subtitle dan takarir untuk film, video profesional, dan tayangan web"
      },
      {
        "feature": "Format Penanda Waktu",
        "lrc": "[mm:ss.xx] (centisecond) atau [mm:ss.xxx] (milidetik)",
        "srt": "HH:MM:SS,mmm (jam, menit, detik, tanda koma milidetik)"
      },
      {
        "feature": "Definisi Rentang Waktu",
        "lrc": "Hanya waktu awal; waktu selesai bersifat tersirat atau tidak ada",
        "srt": "Waktu awal DAN akhir dinyatakan secara eksplisit dengan tanda '-->'"
      },
      {
        "feature": "Penomoran Urut",
        "lrc": "Tidak ada; baris ditampilkan sesuai urutan waktu",
        "srt": "Wajib menggunakan bilangan bulat berturut-turut (1, 2, 3...)"
      },
      {
        "feature": "Banyak Penanda Waktu per Baris",
        "lrc": "Didukung (contoh: [00:12.00][01:30.00]Reff lagu)",
        "srt": "Dilarang; tiap kalimat harus menjadi blok tersendiri"
      },
      {
        "feature": "Header Metadata",
        "lrc": "Tersedia tag khusus ([ar:], [ti:], [al:], [offset:], [length:])",
        "srt": "Tidak ada header; langsung dimulai dari blok nomor 1"
      },
      {
        "feature": "Penanganan Jeda Musik",
        "lrc": "Bergantung pada pemutar atau membutuhkan tag kosong",
        "srt": "Layar dipastikan bersih dari teks saat tidak ada suara vokal"
      }
    ],
    "timingMechanicsTitle": "Cara Kerja Penentuan Waktu Akhir dan Pembatasan Jeda Musik",
    "timingMechanicsSubtitle": "Menghubungkan titik mulai lirik dengan rentang subtitle yang tertutup rapi.",
    "timingMechanicsText": [
      "Karena spesifikasi asli LRC tidak menyertakan waktu akhir bagi tiap kalimat lagu, mengubah file ke SRT memerlukan perhitungan algoritma cerdas untuk menentukan kapan teks harus ditutup. Tanpa perhitungan ini, pemutar video akan terus menampilkan teks sampai bait berikutnya dinyanyikan, sehingga lirik akan membeku di layar selama solo gitar atau jeda drum yang panjang.",
      "Konverter kami menerapkan perhitungan berlapis untuk setiap baris:",
      "1. Penyelarasan Prediktif: Untuk bait N, sistem memeriksa waktu mulai dari bait N+1. Waktu selesai sementara ditetapkan pada Awal(N+1) dikurangi jeda bernapas (default: 50 milidetik), sehingga tidak terjadi tabrakan teks di layar.",
      "2. Pembatasan Jeda Melodi: Apabila jarak antara Awal(N) dan Awal(N+1) melebihi pengaturan 'Durasi Maksimal Subtitle' (default: 5,0 detik), teks akan otomatis dihilangkan setelah 5 detik agar penonton bisa menikmati musik tanpa gangguan.",
      "3. Deteksi Tag Kosong: Pada file LRC yang rapi, pembuat lirik terkadang menambahkan penanda waktu tanpa teks (misalnya '[01:15.00]') untuk menandai berhentinya vokal. Konverter kami mengenali ini sebagai tanda penutup baris sebelumnya pada milidetik tersebut.",
      "4. Perkiraan Baris Terakhir: Karena bait terakhir tidak memiliki baris berikutnya sebagai rujukan, durasinya dihitung berdasarkan jumlah karakter dengan kecepatan membaca rata-rata (15-17 karakter per detik) dalam rentang 2 hingga 5 detik."
    ],
    "multiTimestampTitle": "Penanganan Banyak Penanda Waktu dan Header [offset:]",
    "multiTimestampSubtitle": "Memisahkan baris lirik gabungan dan menyelaraskan waktu secara menyeluruh.",
    "multiTimestampText": [
      "Saat membuat file lirik LRC untuk menghemat ukuran, bagian lagu yang berulang seperti reff sering digabung menjadi satu baris dengan banyak penanda waktu: '[00:45.20][01:45.20][02:45.20]Don\\'t stop believing'. Meskipun pemutar audio dapat membacanya dengan lancar, aplikasi video tidak dapat memproses format tersebut.",
      "Mesin pengurai kami mendeteksi seluruh penanda waktu pada setiap baris, menduplikasi lirik yang bersangkutan untuk tiap waktu, dan menyusunnya kembali berdasarkan urutan kronologis. Setelah itu nomor urut (1, 2, 3...) diberikan sehingga menghasilkan file SubRip yang sepenuhnya valid.",
      "Selain itu, beberapa file LRC memiliki tag '[offset:+/-ms]' di bagian atas. Nilai positif (misal '[offset:500]') berarti audio lebih lambat 500 ms dibanding lirik dan perlu penundaan. Jika opsi 'Terapkan Tag [offset:]' dicentang, konverter akan otomatis memperhitungkan selisih waktu tersebut pada seluruh baris."
    ],
    "exampleTitle": "Contoh Konkret Konversi: Dari LRC ke SubRip (SRT)",
    "exampleIntro": "Bandingkan file teks LRC mentah yang memuat metadata, penanda waktu ganda, dan centisecond dengan file SubRip (.SRT) yang dihasilkan.",
    "exampleLrcInput": "[ti:Bohemian Rhapsody]\n[ar:Queen]\n[al:A Night at the Opera]\n[offset:200]\n[00:01.50]Is this the real life?\n[00:04.80]Is this just fantasy?\n[00:09.10]Caught in a landslide, no escape from reality\n[00:17.00]\n[00:28.50][01:45.00]Any way the wind blows",
    "exampleSrtOutput": "1\n00:00:01,700 --> 00:00:04,950\nIs this the real life?\n\n2\n00:00:05,000 --> 00:00:09,250\nIs this just fantasy?\n\n3\n00:00:09,300 --> 00:00:14,300\nCaught in a landslide, no escape from reality\n\n4\n00:00:28,700 --> 00:00:33,700\nAny way the wind blows\n\n5\n00:01:45,200 --> 00:01:50,200\nAny way the wind blows",
    "exampleExplanation": "Perhatikan perubahan yang terjadi: Pertama, penyesuaian 200 ms diterapkan pada semua penanda waktu ([00:01.50] berubah menjadi 00:00:01,700). Kedua, penanda kosong di [00:17.00] menjadi penutup jeda instrumen sehingga baris ke-3 dibatasi maksimal 5 detik. Ketiga, baris dengan dua penanda waktu dipecah menjadi dua subtitle terpisah (baris 4 pada 00:28,700 dan baris 5 pada 01:45,200). Metadata bagian atas juga dibersihkan sepenuhnya.",
    "ffmpegTitle": "Mengotomatiskan Konversi LRC ke SRT dengan FFmpeg",
    "ffmpegSubtitle": "Ekstraksi, konversi, dan penggabungan subtitle lirik melalui perintah terminal.",
    "ffmpegCommand": "ffmpeg -i audio.mp3 -sub_charenc UTF-8 -i lyrics.lrc -c:a copy -c:s srt output.mkv",
    "ffmpegExplanation": [
      "FFmpeg dapat menggabungkan trek subtitle ke dalam wadah video modern seperti Matroska (.mkv) atau MP4 (.mp4). Jika Anda hanya ingin mengubah file lirik di terminal, jalankan: 'ffmpeg -i lagu.lrc lagu.srt'.",
      "Sayangnya, konverter berbasis command-line sering kali tidak memiliki aturan cerdas untuk membatasi teks saat ada jeda instrumen panjang, sehingga lirik bisa menggantung di layar selama beberapa menit. Menggunakan alat berbasis web kami menjamin durasi dan jeda diatur dengan sempurna sebelum video digabungkan."
    ],
    "useCasesTitle": "Contoh Penggunaan Nyata Konversi LRC ke SRT",
    "useCasesSubtitle": "Pemanfaatan praktis di mana sinkronisasi lirik memberikan manfaat langsung.",
    "useCasesList": [
      {
        "title": "Pembuatan Video Musik dan Video Lirik",
        "description": "Editor video mengimpor file SRT hasil konversi ke Premiere Pro, After Effects, atau CapCut untuk menganimasikan teks lirik sesuai irama musik."
      },
      {
        "title": "Layar Karaoke dan Tampilan Panggung Konser",
        "description": "Mengubah lirik lagu menjadi trek standar yang siap ditampilkan di layar tempat karaoke, proyektor acara, atau siaran langsung."
      },
      {
        "title": "Pembelajaran Bahasa Melalui Lagu",
        "description": "Pengajar dan siswa menggunakan subtitle lirik di VLC atau YouTube untuk mempelajari pelafalan, intonasi, dan kosakata bahasa asing."
      },
      {
        "title": "Dokumenter Musik dan Rekaman Konser",
        "description": "Memudahkan penyematan takarir lagu pada rekaman penampilan langsung untuk keperluan penyiaran televisi atau festival film."
      }
    ],
    "troubleshootTitle": "Mengatasi Masalah Umum pada Konversi LRC ke SRT",
    "troubleshootSubtitle": "Solusi untuk pergeseran waktu, karakter aneh, dan teks yang hilang.",
    "troubleshootTips": [
      {
        "issue": "Lirik muncul beberapa detik lebih cepat atau lambat dibanding audio",
        "cause": "File LRC kemungkinan memiliki tag [offset:+/-ms] dari pemutar lama, atau file audio memiliki jeda hening di awal yang tidak tercatat.",
        "solution": "Periksa apakah ada baris '[offset:]' di file Anda. Aktifkan atau nonaktifkan pilihan 'Terapkan Tag [offset:]' untuk menyesuaikan sinkronisasi."
      },
      {
        "issue": "Lirik tidak kunjung hilang saat ada solo gitar atau jeda musik",
        "cause": "Format LRC tidak memuat waktu berakhir; tanpa batas waktu, teks akan terus tampil sampai lirik berikutnya dimulai.",
        "solution": "Pastikan pengaturan 'Durasi Maksimal Subtitle' diaktifkan (disarankan 4,0 hingga 5,0 detik) agar teks tertutup secara otomatis."
      },
      {
        "issue": "Huruf beraksen atau karakter khusus berubah menjadi karakter aneh (mojibake)",
        "cause": "File .lrc disimpan dengan format pengodean lama seperti ANSI atau Windows-1252 dan bukan standar UTF-8.",
        "solution": "Buka file .lrc di Notepad atau VS Code, lalu simpan ulang dengan memilih pengodean UTF-8 sebelum mengunggahnya ke konverter."
      },
      {
        "issue": "Bagian reff yang berulang tidak muncul pada hasil konversi",
        "cause": "File asli menggabungkan beberapa penanda waktu dalam satu baris dan konverter sederhana mengabaikan waktu tambahannya.",
        "solution": "Alat kami secara otomatis mendeteksi semua penanda waktu pada satu baris, menggandakannya, dan mengurutkannya secara tepat pada file SRT."
      }
    ],
    "conclusionTitle": "Solusi Subtitle Musik yang Cepat, Akurat, dan Aman",
    "conclusionText": [
      "Menjembatani perbedaan antara teks lagu digital dan subtitle video kini sangat mudah dilakukan. Berbekal ketelitian milidetik, penghitungan waktu akhir otomatis, pembatasan jeda melodi, dan penguraian bait berulang, konverter LRC ke SRT kami menyajikan file SubRip siap pakai dalam hitungan detik.",
      "Yang terpenting, semua proses konversi berlangsung 100% di browser Anda menggunakan JavaScript modern. File lagu, teks lirik, dan materi Anda tidak pernah dikirim ke server mana pun, menjamin privasi dan keamanan total. Konversikan file LRC Anda sekarang juga dan hadirkan teks lagu pada video Anda."
    ]
  },
  "tr": {
    "introTitle": "LRC Şarkı Sözlerini SubRip (.SRT) Altyazılarına Dönüştürme Kılavuzu",
    "introSubtitle": "Senkronize şarkı sözlerini, zaman damgalarını, tekrarlanan nakaratları ve enstrümantal aralıkları evrensel video altyazılarına dönüştürmenin tüm incelikleri.",
    "introText": [
      "LRC (Lyrics) formatı; taşınabilir MP3 çalarlar, Winamp eklentileri ve mobil karaoke uygulamalarından bu yana dijital şarkı sözlerini senkronize etmenin tartışmasız standardı olmuştur. Her satırın başına eklenen hafif zaman damgaları sayesinde LRC dosyaları, müzik çalarların şarkı sözlerini sesle eş zamanlı olarak ekranda vurgulamasını sağlar. Bununla birlikte video editörleri, içerik üreticileri ve müzisyenler; bu sözleri Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro veya YouTube gibi platformlara aktarmak istediklerinde büyük bir engelle karşılaşırlar: tüm bu profesyonel video araçları SubRip (.SRT) altyazılarını zorunlu kılar ve LRC formatını desteklemez.",
      "İki format arasındaki yapısal ayrım oldukça büyüktür. LRC dosyaları yalnızca satırların başlama anını gösteren sürekli bir zaman akışına dayanır; sözün ne zaman biteceğini veya ekranda kaç saniye kalacağını belirten bir mekanizmaya sahip değildir. Oysa SubRip (.SRT) dosyaları; açık başlangıç ve bitiş kodları, sıralı indeks numaraları ve milisaniye hassasiyetinde (00:00:00,000 --> 00:00:00,000) kesin zaman aralıkları gerektirir. LRC'yi SRT'ye dönüştürmek dosya uzantısını değiştirmekten ibaret değildir; dizeler için doğal bitiş sürelerini hesaplayan, uzun gitar sololarında altyazıyı kapatan, aynı satırdaki çoklu zaman damgalarını ayrıştıran ve başlık metadatalarını temizleyen akıllı bir senkronizasyon motoru gerektirir.",
      "Bu ayrıntılı teknik rehber, her iki formatın mimarisini inceler, algoritmik dönüştürme adımlarını açıklar, tekrarlanan nakaratların ve [offset:] etiketlerinin nasıl işlendiğini gösterir ve müzik videoları ile dil öğrenme içerikleri için kusursuz altyazılar oluşturmanızı sağlar."
    ],
    "whatIsTitle": "Formatları Tanıyalım: LRC ve SubRip (SRT)",
    "whatIsText": [
      "Bir LRC dosyası; müzik çalarlar ve ses yazılımları (Foobar2000, MiniLyrics veya taşınabilir cihazlar) için özel olarak geliştirilmiş düz bir metin belgesidir. Temel sözdizimi, 'mm' dakika, 'ss' saniye ve 'xx' saniyenin yüzde biri olmak üzere [mm:ss.xx] veya [mm:ss.xxx] şeklindeki köşeli parantezli zaman etiketlerine dayanır. Her etiket, o anda söylenen dizeden hemen önce yer alır. Ayrıca LRC dosyaları baş kısımda [ti:Başlık], [ar:Sanatçı], [al:Albüm], [by:Yazar] ve [length:Süre] gibi meta etiketler barındırır.",
      "SubRip (.SRT) ise video altyazıcılığında küresel bir standarttır. Windows ortamındaki ünlü DVD sökme aracından türeyen SRT dosyaları, boş satırlarla ayrılmış numaralandırılmış bloklardan oluşur. Her blok; sıralı bir numara, saat, dakika, saniye ve virgülle ayrılmış milisaniyeleri içeren bir zaman aralığı (00:00:00,000 --> 00:00:00,000) ile gösterilecek metni içerir. LRC'den farklı olarak SRT, sonraki diyalog veya sahne başlamadan önce altyazının ekrandan temiz bir şekilde kaybolmasını garanti eder."
    ],
    "whyConvertTitle": "LRC Şarkı Sözlerini Neden SRT Formatına Dönüştürmelisiniz?",
    "whyConvertSubtitle": "Profesyonel video kurgu yazılımları, medya oynatıcılar ve video platformlarıyla tam uyumluluk elde edin.",
    "whyConvertReasons": [
      {
        "title": "Kurgu Programlarıyla Tam Uyumluluk",
        "description": "Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro ve CapCut gibi programlar .lrc dosyalarını açamaz. Şarkı sözlerini .srt formatına çevirerek zaman çizelgesine kare hassasiyetinde yerleştirebilirsiniz."
      },
      {
        "title": "YouTube, TikTok ve Sosyal Medyaya Doğrudan Yükleme",
        "description": "Video paylaşım siteleri kapalı altyazı için .srt veya .vtt formatını şart koşar. Dönüştürme sayesinde müzik videolarınıza erişilebilir altyazılar ekleyebilirsiniz."
      },
      {
        "title": "Müzik Aralarında Metnin Ekranda Asılı Kalmasını Önleme",
        "description": "LRC dosyalarında bitiş süresi bulunmadığından basit araçlar 40 saniyelik bir soloda sözü ekranda donmuş bırakır. Aracımız akıllı süre kısıtlamalarıyla altyazıyı zamanında kapatır."
      },
      {
        "title": "Tekrarlanan Nakaratlar ve Çoklu Zaman Etiketleri",
        "description": "Sıkıştırılmış LRC dosyalarında tekrarlanan nakaratlar tek bir satırda birden fazla zaman damgasıyla yer alır. SRT dönüşümü her dizeyi çoğaltır ve kronolojik sıraya dizer."
      }
    ],
    "howToTitle": "Adım Adım Dönüştürme Süreci",
    "howToSubtitle": "Şarkı sözlerinizi saniyeler içinde hatasız SubRip altyazılarına nasıl dönüştürebilirsiniz?",
    "howToSteps": [
      {
        "step": "1",
        "title": "LRC Sözlerini Yükleyin veya Yapıştırın",
        "description": ".lrc dosyanızı sürükleyip ilgili alana bırakın ya da [mm:ss.xx] zaman damgalı metni doğrudan sol paneldeki editöre yapıştırın."
      },
      {
        "step": "2",
        "title": "Süre ve Boşluk Parametrelerini Ayarlayın",
        "description": "Enstrümantal kısımlar için azami gösterim sınırını ve dizeler arasındaki nefes payını (varsayılan: 50 ms) belirleyin."
      },
      {
        "step": "3",
        "title": "Sonucu İnceleyin ve SRT Dosyasını İndirin",
        "description": "Sağdaki önizleme alanında oluşturulan altyazıyı kontrol edin, metni kopyalayın ya da '.SRT İndir' butonuna tıklayarak dosyanızı kaydedin."
      }
    ],
    "differenceTitle": "Teknik Karşılaştırma: LRC ve SRT Mimarisi",
    "differenceSubtitle": "Müzik sözü işaretlemeleri ile profesyonel video altyazı standartları arasındaki temel farklar.",
    "differenceTable": [
      {
        "feature": "Temel Kullanım Alanı",
        "lrc": "Müzik çalarlarda ve karaoke yazılımlarında söz gösterimi",
        "srt": "Film, profesyonel video ve dijital yayıncılık için altyazılar"
      },
      {
        "feature": "Zaman Damgası Formatı",
        "lrc": "[mm:ss.xx] (yüzde bir saniye) veya [mm:ss.xxx] (milisaniye)",
        "srt": "HH:MM:SS,mmm (saat, dakika, saniye, virgül milisaniye)"
      },
      {
        "feature": "Zaman Aralığı Tanımı",
        "lrc": "Yalnızca başlangıç; bitiş zamanı örtüktür veya yoktur",
        "srt": "'-->' ile birbirine bağlanan açık başlangıç VE bitiş kodları"
      },
      {
        "feature": "Sıralı Numaralandırma",
        "lrc": "Bulunmaz; satırlar zaman etiketine göre işlenir",
        "srt": "Ardışık tamsayılar ile zorunludur (1, 2, 3...)"
      },
      {
        "feature": "Satır Başına Çoklu Zaman Damgası",
        "lrc": "Desteklenir (örn: [00:12.00][01:30.00]Nakarat satırı)",
        "srt": "Yasak; her altyazı bağımsız bir blok olmak zorundadır"
      },
      {
        "feature": "Üst Bilgi Metadataları",
        "lrc": "Özel etiketler mevcuttur ([ar:], [ti:], [al:], [offset:], [length:])",
        "srt": "Üst bilgi yoktur; doğrudan 1 numaralı altyazı bloğu ile başlar"
      },
      {
        "feature": "Müzik Boşluklarının Yönetimi",
        "lrc": "Oynatıcıya bağlıdır veya boş zaman etiketi gerektirir",
        "srt": "Aktif bir altyazı yoksa ekranın tamamen temiz kalması garanti edilir"
      }
    ],
    "timingMechanicsTitle": "Bitiş Zamanı Hesaplama Mantığı ve Enstrümantal Sınırlar",
    "timingMechanicsSubtitle": "Yalnızca başlangıç içeren etiketlerden kapalı altyazı aralıklarına geçiş yöntemi.",
    "timingMechanicsText": [
      "LRC standardı dizelerin bitiş zamanını içermediğinden, bu dosyaları SRT'ye aktarmak mantıklı ve dengeli bitiş süreleri üreten akıllı bir hesaplama motoru gerektirir. Aksi halde video oynatıcı, sonraki dize başlayana kadar mevcut yazıyı ekranda tutar ve bu da uzun sololarda rahatsız edici bir görsel kirliliğe yol açar.",
      "Dönüştürücümüz her dize için çok katmanlı bir mantık uygular:",
      "1. İleriye Dönük Eşzamanlama: N numaralı dize için N+1 dizenin başlama anı incelenir. Geçici bitiş zamanı, Başlangıç(N+1) eksi küçük bir güvenlik payı (varsayılan: 50 milisaniye) olarak belirlenir. Bu boşluk ekranda altyazıların üst üste binmesini önler.",
      "2. Enstrümantal Bölüm Sınırı: Başlangıç(N) ile Başlangıç(N+1) arasındaki süre 'Maksimum Altyazı Süresi' ayarını (varsayılan: 5,0 saniye) aşıyorsa, altyazı 5 saniyenin ardından otomatik olarak kapatılır. Böylece izleyici müziğe odaklanabilir.",
      "3. Boş Zaman Etiketlerinin Algılanması: Özenle hazırlanmış LRC dosyalarında dize bittiğinde içi boş zaman etiketleri (örn: '[01:15.00]') kullanılabilir. Sistemimiz bu etiketleri kesin kapanış anı olarak kabul eder ve önceki altyazıyı o anda sonlandırır.",
      "4. Son Dize İçin Süre Tahmini: Şarkının son dizesi için kendisinden sonra bir dize bulunmadığından, karakter sayısına dayalı doğal okuma hızı katsayısıyla (saniyede 15-17 karakter) 2 ila 5 saniye arasında uygun bir süre belirlenir."
    ],
    "multiTimestampTitle": "Çoklu Zaman Damgaları ve [offset:] Üst Bilgileri",
    "multiTimestampSubtitle": "Sıkıştırılmış şarkı sözlerinin ayrıştırılması ve milisaniyelik genel hizalama.",
    "multiTimestampText": [
      "LRC dosyaları hazırlanırken dosya boyutunu küçültmek amacıyla nakarat gibi yinelenen dizeler tek bir satırda çoklu zaman damgasıyla yazılırdı: '[00:45.20][01:45.20][02:45.20]Don\\'t stop believing'. Müzik çalarlar bu yapıyı sorunsuz oynatırken, video yazılımları bu formatı kesinlikle reddeder.",
      "Ayrıştırma motorumuz bir satırdaki tüm zaman damgalarını yakalar, dize metnini kopyalar ve her damga için bağımsız bir altyazı girişi oluşturur. Ardından tüm liste baştan sona kronolojik sıraya dizilir ve ardışık numaralar (1, 2, 3...) verilerek eksiksiz bir SubRip dosyası meydana getirilir.",
      "Ayrıca bazı LRC dosyalarının üst kısmında '[offset:+/-ms]' etiketi bulunur. Pozitif bir değer (örn: '[offset:500]'), sesin sözlerden 500 ms geride olduğunu ve altyazıların geciktirilmesi gerektiğini gösterir. '[offset:] Etiketini Uygula' seçeneği işaretlendiğinde aracımız tüm zamanlamaları bu farka göre otomatik olarak öteler."
    ],
    "exampleTitle": "Somut Dönüştürme Örneği: LRC'den SubRip'e (SRT)",
    "exampleIntro": "Üst bilgi, çoklu zaman etiketleri ve yüzde bir saniye içeren ham bir LRC dosyasını, elde edilen tertemiz SubRip (.SRT) çıktısıyla karşılaştırın.",
    "exampleLrcInput": "[ti:Bohemian Rhapsody]\n[ar:Queen]\n[al:A Night at the Opera]\n[offset:200]\n[00:01.50]Is this the real life?\n[00:04.80]Is this just fantasy?\n[00:09.10]Caught in a landslide, no escape from reality\n[00:17.00]\n[00:28.50][01:45.00]Any way the wind blows",
    "exampleSrtOutput": "1\n00:00:01,700 --> 00:00:04,950\nIs this the real life?\n\n2\n00:00:05,000 --> 00:00:09,250\nIs this just fantasy?\n\n3\n00:00:09,300 --> 00:00:14,300\nCaught in a landslide, no escape from reality\n\n4\n00:00:28,700 --> 00:00:33,700\nAny way the wind blows\n\n5\n00:01:45,200 --> 00:01:50,200\nAny way the wind blows",
    "exampleExplanation": "Bu örnekteki önemli düzenlemelere dikkat edin: İlk olarak 200 ms ofset tüm zamanlara eklendi ([00:01.50] değeri 00:00:01,700 oldu). İkinci olarak [00:17.00] anındaki boş etiket enstrümantal aralık sınırı oluşturarak 3. altyazının 5 saniyede kapanmasını sağladı. Üçüncü olarak çift etiketli nakarat satırı iki bağımsız kronolojik altyazıya bölündü (28. saniyede 4. blok, 1. dakika 45. saniyede 5. blok). Üst bilgi metadataları ise bütünüyle temizlendi.",
    "ffmpegTitle": "FFmpeg ile LRC'den SRT'ye Dönüşümü Otomatikleştirme",
    "ffmpegSubtitle": "Komut satırı üzerinden şarkı sözü altyazılarını çıkarma, dönüştürme ve birleştirme.",
    "ffmpegCommand": "ffmpeg -i audio.mp3 -sub_charenc UTF-8 -i lyrics.lrc -c:a copy -c:s srt output.mkv",
    "ffmpegExplanation": [
      "FFmpeg, altyazı akışlarını Matroska (.mkv) veya MP4 (.mp4) gibi modern kapsayıcılara gömebilir. Tek bir LRC dosyasını doğrudan terminalden dönüştürmek isterseniz şu komutu kullanabilirsiniz: 'ffmpeg -i sarki.lrc sarki.srt'.",
      "Fakat komut satırı araçları enstrümantal boşlukları kısaltan akıllı kurallardan yoksundur ve altyazıların dakikalarca ekranda kalmasına sebep olabilir. Web tabanlı aracımız, videonuzu işlemeden önce tüm süre ve boşluk ayarlarının kusursuz uygulanmasını sağlar."
    ],
    "useCasesTitle": "LRC - SRT Dönüştürmenin Gerçek Kullanım Alanları",
    "useCasesSubtitle": "Senkronize şarkı sözlerinin iş akışlarına doğrudan hız ve değer kattığı senaryolar.",
    "useCasesList": [
      {
        "title": "Video Klip ve Şarkı Sözü Videosu (Lyric Video) Üretimi",
        "description": "Video kurgucuları dönüştürdükleri SRT altyazılarını Premiere Pro veya CapCut'a aktararak ritimle senkronize tipografik animasyonlar oluştururlar."
      },
      {
        "title": "Karaoke Sistemleri ve Konser Sahne Ekranları",
        "description": "Senkronize şarkı sözlerini sahnelerdeki canlı yayın ekranlarına, mekan monitörlerine veya karaoke cihazlarına uygun standart altyazılara dönüştürür."
      },
      {
        "title": "Şarkılarla Yabancı Dil Eğitimi",
        "description": "Öğrenciler ve eğitmenler VLC veya YouTube üzerinde senkronize altyazıları takip ederek telaffuz, tonlama ve kelime hazinesini pekiştirirler."
      },
      {
        "title": "Konser Kayıtları ve Müzik Belgeselleri",
        "description": "Televizyon yayınları veya festivaller için canlı performans kayıtlarına doğru çeviriler ve şarkı sözü altyazıları eklemeyi kolaylaştırır."
      }
    ],
    "troubleshootTitle": "LRC - SRT Dönüşümünde Sık Karşılaşılan Sorunlar",
    "troubleshootSubtitle": "Senkronizasyon kaymaları, karakter bozulmaları ve eksik satırların çözümü.",
    "troubleshootTips": [
      {
        "issue": "Şarkı sözleri sese göre birkaç saniye önden veya arkadan geliyor",
        "cause": "LRC dosyasında başka bir oynatıcı için eklenmiş [offset:+/-ms] etiketi bulunabilir veya ses dosyasının başında boşluk vardır.",
        "solution": "Dosyanızda '[offset:]' satırı olup olmadığını kontrol edin. Senkronu yakalamak için araçtaki '[offset:] Etiketini Uygula' seçeneğini değiştirin."
      },
      {
        "issue": "Uzun gitar soloları boyunca yazı ekranda sabit kalıyor",
        "cause": "LRC formatı bitiş süresi barındırmaz; basit dönüştürücüler sonraki dizeye kadar yazıyı ekrandan kaldırmaz.",
        "solution": "Enstrümantal aralıklarda altyazının otomatik kapanması için 'Maksimum Altyazı Süresi' ayarını etkinleştirin (önerilen: 4,0 - 5,0 sn)."
      },
      {
        "issue": "Türkçe karakterler (ş, ğ, ı, ç, ö, ü) bozuk görünüyor (mojibake)",
        "cause": "Kaynak .lrc dosyası evrensel UTF-8 standardı yerine eski ANSI veya Windows-1254 kodlamasıyla kaydedilmiştir.",
        "solution": ".lrc dosyasını Not Defteri veya VS Code ile açın ve dönüştürücüye yüklemeden önce UTF-8 formatında yeniden kaydedin."
      },
      {
        "issue": "Şarkıdaki tekrarlanan nakaratlar çıktı dosyasında görünmüyor",
        "cause": "Orijinal dosyada tek satırda birden fazla zaman damgası kullanılmıştır ve sıradan araçlar fazladan etiketleri atlamıştır.",
        "solution": "Dönüştürücümüz satırdaki tüm zaman damgalarını otomatik tanır, sözleri çoğaltır ve her birini kronolojik sıraya dizer."
      }
    ],
    "conclusionTitle": "Hızlı, Güvenli ve Kusursuz Müzik Altyazısı Çözümü",
    "conclusionText": [
      "Müzik sözleri ile standart video altyazıları arasındaki boşluğu doldurmak doğru araçla son derece kolaydır. Milisaniye düzeyinde hassas matematiksel hesaplama, ileriye dönük bitiş zamanı tahmini, müzik molalarını sınırlama ve çoklu zaman damgası desteği sayesinde LRC - SRT dönüştürücümüz saniyeler içinde yayına hazır SubRip dosyaları sunar.",
      "Üstelik tüm işlem modern JavaScript mimarisiyle %100 web tarayıcınızda gerçekleşir. Şarkı sözleriniz ve medya dosyalarınız hiçbir sunucuya yüklenmez, verilerinizin gizliliği tamamen korunur. LRC dosyalarınızı hemen dönüştürün ve şarkı sözlerinizi dilediğiniz video kurgusuna taşıyın."
    ]
  },
  "it": {
    "introTitle": "Guida Completa alla Conversione di Testi LRC in Sottotitoli SubRip (.SRT)",
    "introSubtitle": "Padroneggia la tecnica per convertire testi musicali sincronizzati, timestamp, ritornelli multipli e assoli strumentali in sottotitoli video universali.",
    "introText": [
      "Il formato LRC (Lyrics) ha rappresentato il punto di riferimento universale per la sincronizzazione dei testi musicali fin dai primi lettori MP3 tascabili, dai plugin per Winamp e dalle prime app di karaoke per smartphone. Applicando marcatori temporali leggeri all'inizio di ciascun verso, i file LRC consentono ai riproduttori audio di evidenziare le frasi in tempo reale a ritmo di musica. Tuttavia, montatori video, videomaker e musicisti si scontrano con un limite invalicabile quando cercano di importare questi file in software di montaggio non lineare (NLE) come Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro o su YouTube: l'ambiente video accetta unicamente sottotitoli SubRip (.SRT) e non supporta in alcun modo i file LRC.",
      "La discrepanza strutturale tra i due formati è sostanziale. I file LRC si basano su una sequenza continua di istanti di inizio (indicando soltanto quando una riga comincia a essere cantata), senza alcun parametro nativo per stabilire quando la frase debba terminare o per quanti secondi debba restare a schermo. Al contrario, i file SubRip (.SRT) pretendono intervalli temporali rigorosamente delimitati con orario di inizio, orario di fine, indice numerico sequenziale e formato espresso in millisecondi (00:00:00,000 --> 00:00:00,000). Convertire LRC in SRT non significa semplicemente rinominare l'estensione del file; serve un algoritmo di sincronizzazione intelligente capace di stimare durate naturali, gestire assoli strumentali prolungati, sdoppiare righe con timestamp multipli ed eliminare metadati non pertinenti.",
      "Questa guida tecnica analizza nel dettaglio l'architettura di entrambi i formati, illustra i passaggi algoritmici di calcolo, spiega la gestione di ritornelli accorpati e intestazioni [offset:], e mostra come generare tracce di sottotitoli professionali per videoclip, lyric video e percorsi didattici musicali."
    ],
    "whatIsTitle": "Confronto Strutturale: File LRC vs. Sottotitoli SubRip (SRT)",
    "whatIsText": [
      "Un file LRC è un documento di testo semplice ideato appositamente per software e lettori musicali (come Foobar2000, MiniLyrics o lettori portatili). La sintassi cardine impiega parentesi quadre temporali nella formula [mm:ss.xx] o [mm:ss.xxx], dove 'mm' indica i minuti, 'ss' i secondi e 'xx' i centesimi di secondo. Ogni marcatore precede direttamente il verso cantato in quell'istante preciso. Inoltre, i file LRC presentano spesso metadati di intestazione come [ti:Titolo], [ar:Artista], [al:Album], [by:Autore] e [length:Durata].",
      "All'estremo opposto, SubRip (.SRT) è il formato sovrano e globale per i sottotitoli video. Nato dal celebre programma di estrazione da DVD per Windows, un file SRT è strutturato in blocchi ordinati separati da righe vuote. Ciascun blocco reca un indice progressivo, un intervallo orario con ore, minuti, secondi e millisecondi separati da virgola (00:00:00,000 --> 00:00:00,000) e il testo vero e proprio. A differenza dell'LRC, il formato SRT assicura che il testo scompaia dallo schermo prima che sopraggiungano nuove battute o elementi visivi."
    ],
    "whyConvertTitle": "Perché Convertire i Testi LRC nel Formato SRT?",
    "whyConvertSubtitle": "Ottieni la massima compatibilità con programmi di editing video, lettori multimediali e piattaforme social.",
    "whyConvertReasons": [
      {
        "title": "Piena Compatibilità con Software di Montaggio",
        "description": "Applicazioni come Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro e CapCut non possono aprire file .lrc. Convertire in .srt consente di trascinare la traccia dei testi sulla timeline con precisione al singolo frame."
      },
      {
        "title": "Caricamento Diretto su YouTube, TikTok e Social Network",
        "description": "Le piattaforme di streaming richiedono sottotitoli in .srt o .vtt. La conversione consente di abilitare i sottotitoli facoltativi e migliorare l'accessibilità dei video musicali."
      },
      {
        "title": "Eliminazione del Testo Bloccato Durante le Pause Strumentali",
        "description": "Non avendo orari di fine, i convertitori superficiali lasciano il testo fisso a schermo durante un assolo di chitarra di 40 secondi. Il nostro tool applica limiti intelligenti per chiudere il verso per tempo."
      },
      {
        "title": "Gestione dei Ritornelli Ripetuti con Più Timestamp",
        "description": "Nei file LRC ottimizzati i ritornelli ricorrenti condividono una sola riga con più orari. Nella conversione a SRT ogni istanza viene duplicata e riordinata cronologicamente."
      }
    ],
    "howToTitle": "Procedura di Conversione Passo dopo Passo",
    "howToSubtitle": "Come trasformare i tuoi testi in sottotitoli SubRip accurati in pochi istanti.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Carica o Incolla il Testo LRC",
        "description": "Trascina il tuo file .lrc nel riquadro di caricamento oppure incolla il testo con i timestamp [mm:ss.xx] direttamente nell'editor a sinistra."
      },
      {
        "step": "2",
        "title": "Imposta Limiti di Durata e Intervalli",
        "description": "Stabilisci il tetto massimo di permanenza per gli stacchi strumentali e l'intervallo tra battute consecutive (consigliato: 50 ms)."
      },
      {
        "step": "3",
        "title": "Verifica e Scarica il File SRT",
        "description": "Esamina il risultato nel pannello di anteprima a destra, copia il testo o clicca su 'Scarica .SRT' per salvarlo sul computer."
      }
    ],
    "differenceTitle": "Confronto Tecnico: Architettura LRC vs. SRT",
    "differenceSubtitle": "Le discrepanze fondamentali tra marcatura per testi musicali e standard video professionali.",
    "differenceTable": [
      {
        "feature": "Scopo Principale",
        "lrc": "Visualizzazione sincronizzata di testi in player audio e karaoke",
        "srt": "Sottotitoli e closed captions per cinema, video ed emittenti"
      },
      {
        "feature": "Formato Timestamp",
        "lrc": "[mm:ss.xx] (centesimi) o [mm:ss.xxx] (millisecondi)",
        "srt": "HH:MM:SS,mmm (ore, minuti, secondi, virgola millisecondi)"
      },
      {
        "feature": "Definizione dell'Intervallo",
        "lrc": "Solo punto di avvio; la fine è implicita o assente",
        "srt": "Marcatori espliciti di inizio E fine collegati da '-->'"
      },
      {
        "feature": "Numerazione Sequenziale",
        "lrc": "Assente; le righe si susseguono in base al timestamp",
        "srt": "Obbligatoria con numeri interi crescenti (1, 2, 3...)"
      },
      {
        "feature": "Timestamp Multipli per Riga",
        "lrc": "Consentito (es. [00:12.00][01:30.00]Ritornello)",
        "srt": "Vietato; ogni battuta deve essere un blocco a sé stante"
      },
      {
        "feature": "Metadati di Intestazione",
        "lrc": "Tag incorporati ([ar:], [ti:], [al:], [offset:], [length:])",
        "srt": "Nessun header; comincia direttamente con il blocco 1"
      },
      {
        "feature": "Gestione delle Pause Musicali",
        "lrc": "Dipende dal player o richiede tag temporali vuoti",
        "srt": "Schermo pulito garantito quando non ci sono versi attivi"
      }
    ],
    "timingMechanicsTitle": "Meccanica del Calcolo di Chiusura e Limiti Strumentali",
    "timingMechanicsSubtitle": "Come colmare il divario tra singoli punti di avvio e intervalli di sottotitolo chiusi.",
    "timingMechanicsText": [
      "Poiché la specifica LRC non contempla l'orario di fine delle frasi cantate, la trasformazione verso lo standard SRT richiede un algoritmo intelligente capace di dedurre istanti di chiusura armoniosi e naturali. Senza questo calcolo, il player video manterrebbe la riga visibile fino all'inizio del verso successivo, producendo un antiestetico effetto in cui il testo rimane congelato a schermo durante un lungo assolo.",
      "Il nostro convertitore adotta una logica a più stadi per ciascun elemento:",
      "1. Sincronizzazione Anticipata: Per il sottotitolo N, il sistema esamina l'orario di avvio del sottotitolo N+1. La fine provvisoria è fissata a Inizio(N+1) meno un breve stacco di sicurezza (predefinito: 50 millisecondi), impedendo sfarfallii visivi tra righe adiacenti.",
      "2. Soglia per Pause Strumentali: Se l'intervallo tra Inizio(N) e Inizio(N+1) oltrepassa la 'Durata Massima Sottotitolo' (predefinito: 5,0 secondi), il motore forza lo spegnimento dopo 5 secondi. La frase sfuma dolcemente lasciando spazio all'ascolto musicale.",
      "3. Riconoscimento Tag Vuoti: Nei file LRC compilati con precisione, gli autori inseriscono talvolta tag temporali senza testo (es. '[01:15.00]') per indicare con esattezza l'arresto della voce. Il nostro motore riconosce questi segnali e chiude il verso precedente a quel preciso millisecondo.",
      "4. Stima del Verso Finale: Poiché l'ultima riga della canzone non ha un elemento successivo su cui basarsi, la durata viene stimata in funzione del numero di caratteri a velocità di lettura naturale (15-17 caratteri al secondo), mantenendosi nell'intervallo tra 2 e 5 secondi."
    ],
    "multiTimestampTitle": "Gestione di Timestamp Multipli e Intestazioni [offset:]",
    "multiTimestampSubtitle": "Scomposizione di versi accorpati e regolazione millimetrica complessiva.",
    "multiTimestampText": [
      "Nella stesura di file LRC, l'esigenza di risparmiare spazio ha spesso portato a raggruppare i ritornelli su un'unica riga associata a più marcatori orari: '[00:45.20][01:45.20][02:45.20]Don\\'t stop believing'. Se i lettori audio decodificano facilmente questa scrittura, i software video la rifiutano senza appello.",
      "Il nostro parser estrae tutti i tag orari presenti sulla riga, associa a ciascuno il testo corrispondente e crea blocchi di sottotitoli autonomi. L'intero elenco viene poi ordinato cronologicamente per tempo di avvio e numerato in sequenza (1, 2, 3...), producendo un file SubRip impeccabile.",
      "In aggiunta, diversi file LRC recano nell'intestazione la dicitura '[offset:+/-ms]'. Un valore positivo (es. '[offset:500]') segnala che l'audio è in ritardo di 500 ms rispetto alle parole e necessita di un posticipo. Abilitando l'opzione 'Applica Tag [offset:]', il convertitore corregge automaticamente tutti i valori orari."
    ],
    "exampleTitle": "Esempio Reale di Conversione: Da LRC a SubRip (SRT)",
    "exampleIntro": "Metti a confronto un testo LRC grezzo con metadati, marcatori multipli e centesimi di secondo con il documento SubRip (.SRT) pulito e conforme ottenuto.",
    "exampleLrcInput": "[ti:Bohemian Rhapsody]\n[ar:Queen]\n[al:A Night at the Opera]\n[offset:200]\n[00:01.50]Is this the real life?\n[00:04.80]Is this just fantasy?\n[00:09.10]Caught in a landslide, no escape from reality\n[00:17.00]\n[00:28.50][01:45.00]Any way the wind blows",
    "exampleSrtOutput": "1\n00:00:01,700 --> 00:00:04,950\nIs this the real life?\n\n2\n00:00:05,000 --> 00:00:09,250\nIs this just fantasy?\n\n3\n00:00:09,300 --> 00:00:14,300\nCaught in a landslide, no escape from reality\n\n4\n00:00:28,700 --> 00:00:33,700\nAny way the wind blows\n\n5\n00:01:45,200 --> 00:01:50,200\nAny way the wind blows",
    "exampleExplanation": "Nota gli interventi apportati: Primo, l'offset di 200 ms è stato applicato a tutti i valori ([00:01.50] è diventato 00:00:01,700). Secondo, il tag vuoto a [00:17.00] ha funzionato da delimitatore strumentale, limitando il blocco 3 a 5 secondi. Terzo, la riga con doppio marcatore è stata divisa in due battute distinte (blocco 4 a 00:28,700 e blocco 5 a 01:45,200). Infine, tutti i metadati dell'intestazione sono stati ripuliti.",
    "ffmpegTitle": "Automatizzare la Conversione da LRC a SRT con FFmpeg",
    "ffmpegSubtitle": "Estrazione, conversione e inclusione di sottotitoli musicali tramite riga di comando.",
    "ffmpegCommand": "ffmpeg -i audio.mp3 -sub_charenc UTF-8 -i lyrics.lrc -c:a copy -c:s srt output.mkv",
    "ffmpegExplanation": [
      "FFmpeg consente di inserire tracce di sottotitoli in contenitori multimediali come Matroska (.mkv) o MP4 (.mp4). Per convertire un singolo file di testi da terminale puoi eseguire: 'ffmpeg -i brano.lrc brano.srt'.",
      "Tuttavia, i comandi da terminale difettano sovente di logiche flessibili per troncare le lunghe pause tra gli assoli, rischiando di lasciare il testo a schermo per minuti interi. Il nostro convertitore online assicura che durate e pause vengano bilanciate alla perfezione prima del muxing finale."
    ],
    "useCasesTitle": "Scenari d'Uso Concreti per la Conversione da LRC a SRT",
    "useCasesSubtitle": "Ambiti in cui la sincronizzazione dei testi velocizza il lavoro creativo e tecnico.",
    "useCasesList": [
      {
        "title": "Realizzazione di Videoclip e Lyric Video",
        "description": "Monteri e grafici importano le tracce SRT convertite in Premiere Pro o CapCut per creare testi animati sincronizzati con il ritmo della canzone."
      },
      {
        "title": "Schermi di Karaoke e Monitor da Palco",
        "description": "Permette di trasformare testi musicali in file compatibili con impianti per serate karaoke, schermi da concerto o regie di dirette streaming."
      },
      {
        "title": "Didattica e Apprendimento Linguistico",
        "description": "Studenti e insegnanti utilizzano sottotitoli sincronizzati su VLC e YouTube per analizzare la pronuncia e l'intonazione dei brani musicali."
      },
      {
        "title": "Registrazioni di Concerti e Documentari Musicali",
        "description": "Agevola l'aggiunta di testi tradotti o trascrizioni precise su riprese di eventi musicali destinate alla trasmissione televisiva o a festival."
      }
    ],
    "troubleshootTitle": "Risoluzione dei Problemi Più Comuni",
    "troubleshootSubtitle": "Come rimediare a sfasamenti temporali, caratteri anomali e strofe mancanti.",
    "troubleshootTips": [
      {
        "issue": "Il testo risulta anticipato o posticipato di alcuni secondi rispetto alla musica",
        "cause": "Il file LRC potrebbe contenere un tag [offset:+/-ms] calibrato per un altro player, oppure l'audio ha un silenzio iniziale non considerato nel testo.",
        "solution": "Verifica se è presente la riga '[offset:]' nel file. Attiva o disattiva l'opzione 'Applica Tag [offset:]' per allineare l'inizio della canzone."
      },
      {
        "issue": "La riga di testo rimane ferma a schermo durante gli assoli di chitarra",
        "cause": "Il formato LRC non registra la conclusione dei versi; i convertitori basilari lasciano aperto il testo fino alla strofa successiva.",
        "solution": "Assicurati che sia attiva la 'Durata Massima Sottotitolo' (consigliati 4,0 - 5,0 secondi) per far sparire il testo durante le pause."
      },
      {
        "issue": "Lettere accentate o caratteri speciali appaiono alterati (mojibake)",
        "cause": "Il file .lrc originario è stato salvato con codifiche datate (come ANSI o Windows-1252) anziché nel moderno standard universale UTF-8.",
        "solution": "Apri il file .lrc con il Blocco Note o VS Code e salvalo nuovamente selezionando la codifica UTF-8 prima di inserirlo nel convertitore."
      },
      {
        "issue": "I ritornelli ricorrenti non compaiono nel file convertito",
        "cause": "Il file di partenza raggruppava più marcatori su una sola riga e convertitori elementari hanno ignorato i timestamp aggiuntivi.",
        "solution": "Il nostro strumento riconosce nativamente ogni timestamp presente sulla riga, generando repliche cronologiche ordinate nel file SRT."
      }
    ],
    "conclusionTitle": "Sottotitolaggio Musicale Veloce, Preciso e Riservato",
    "conclusionText": [
      "Unire i testi sincronizzati per musica con gli standard del sottotitolaggio video è oggi un'operazione immediata. Con una scansione temporale al millisecondo, la previsione della chiusura verso, la delimitazione delle pause strumentali e l'espansione dei ritornelli multipli, il nostro convertitore LRC a SRT assicura file SubRip di altissimo profilo in pochi istanti.",
      "La procedura avviene al 100% all'interno del tuo browser web tramite JavaScript moderno. I tuoi brani, testi e file personali non viaggiano mai su server esterni, garantendoti la totale privacy. Converti i tuoi file LRC oggi stesso e valorizza i tuoi progetti video con testi perfettamente sincronizzati."
    ]
  }
};

export function getLrcToSrtGuideContent(locale: Locale): LrcToSrtGuideContent {
  return LRC_TO_SRT_GUIDES[locale] || LRC_TO_SRT_GUIDES.en;
}
