import type { Locale } from './config';

export interface SrtToSubGuideContent {
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
    microdvd: string;
    subviewer: string;
  }[];

  fpsGuideTitle: string;
  fpsGuideSubtitle: string;
  fpsGuideText: string[];
  fpsTable: {
    fps: string;
    standard: string;
    useCase: string;
  }[];

  mathTitle: string;
  mathSubtitle: string;
  mathFormula: string;
  mathExplanation: string[];

  exampleTitle: string;
  exampleIntro: string;
  exampleSrtInput: string;
  exampleMicroDvdOutput: string;
  exampleSubViewerOutput: string;
  exampleExplanation: string;

  formatsComparisonTitle: string;
  formatsComparisonSubtitle: string;
  formatsComparisonText: string[];

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

  workflowTitle: string;
  workflowSubtitle: string;
  workflowSteps: string[];

  conclusionTitle: string;
  conclusionText: string[];
}

export const SRT_TO_SUB_GUIDES: Record<Locale, SrtToSubGuideContent> = {
  en: {
    "introTitle": "The Complete Guide to Converting SRT Subtitles to SUB Format",
    "introSubtitle": "Learn how to convert SubRip (.srt) subtitles into frame-indexed MicroDVD and timestamped SubViewer (.sub) formats, master video frame rates (FPS), and achieve flawless synchronization on legacy hardware players and multimedia consoles.",
    "introText": [
        "SubRip (.srt) is universally recognized as the de facto standard for digital video subtitles. It is lightweight, human-readable, and supported by virtually every modern media player, streaming platform, and web browser. However, when working with older standalone DVD players, DivX/XviD-certified home theater systems, in-car entertainment units, or specialized video authoring pipelines, you will frequently encounter hardware that cannot parse time-based SRT files and strictly requires subtitle files with the .sub extension.",
        "In the realm of subtitle engineering, the .sub extension primarily represents two distinct text-based specifications: MicroDVD (a frame-indexed subtitle format created for video discs and DivX media) and SubViewer 2.0 (a centisecond timestamp-based format). Unlike modern time-based subtitles that calculate cue display intervals strictly using hours, minutes, seconds, and milliseconds, MicroDVD subtitles synchronize dialogue directly with the individual video frames rendered on your screen.",
        "Because MicroDVD relies on frame counts ({start_frame}{end_frame}) rather than absolute wall-clock time, converting an SRT file to SUB requires an accurate mathematical transformation based on the video's exact frame rate (FPS). A mismatch between the subtitle frame calculation and the video stream will cause the subtitles to drift progressively ahead of or behind the spoken audio. This comprehensive guide covers the technical architecture of SUB formats, frame rate mathematics, command-line FFmpeg operations, and practical troubleshooting workflows."
    ],
    "whatIsTitle": "Understanding SRT and SUB: Modern Timecodes vs. Frame-Indexed Subtitles",
    "whatIsText": [
        "SubRip (.srt) was engineered in the late 1990s alongside Brain's DVD ripping software to extract and store subtitles in an open, highly portable format. An SRT file consists of a sequential integer counter, a start-and-end timestamp delimited by ' --> ' formatted in milliseconds (HH:MM:SS,mmm), and one or more lines of plain text dialogue followed by a blank separator line. SRT files leave visual styling, positioning, and rendering entirely to the host player.",
        "MicroDVD (.sub), developed in 1999–2001 by Tias Software for the popular MicroDVD player, was purpose-built for early MPEG-4, DivX, and AVI media containers. Instead of using real-world timestamps, each dialogue cue is defined by the exact frame numbers at which it should appear and disappear: {start_frame}{end_frame}Subtitle text. If a subtitle spans multiple lines, the lines are separated by a vertical pipe delimiter (|). MicroDVD files may also include an optional initial header line ({1}{1}25.000 or {1}{1}23.976) that informs the media player of the target frame rate.",
        "SubViewer 2.0 (.sub) was designed as an alternative text-based format featuring an initial metadata header block ([INFORMATION] ... [SUBTITLE]) followed by centisecond timestamps (HH:MM:SS.cs,HH:MM:SS.cs) and dialogue lines delimited by [br]. While less common than MicroDVD on standalone DVD hardware, SubViewer remains supported across many classic subtitle editing suites. Both formats serve vital roles in preserving compatibility with retro hardware and specialized playback environments."
    ],
    "whyConvertTitle": "6 Core Reasons to Convert SRT Subtitles to SUB Format",
    "whyConvertSubtitle": "Why video editors, media archivists, and home theater enthusiasts convert standard SubRip captions into frame-indexed SUB files.",
    "whyConvertReasons": [
        {
            "title": "1. Native Playback on Standalone DVD & DivX Players",
            "description": "Older standalone DVD/CD players, DivX Ultra certified home theater decks, and portable media players often lack SRT parsers but provide seamless native support for MicroDVD .sub files stored alongside AVI and MP4 files on USB drives or optical discs."
        },
        {
            "title": "2. In-Car Infotainment & Dashboard Video Displays",
            "description": "Many automotive multimedia consoles and rear-seat entertainment units utilize legacy embedded Linux or Windows CE operating systems with firmware that only renders subtitle streams from MicroDVD .sub files."
        },
        {
            "title": "3. Frame-Locked Subtitle Synchronization",
            "description": "Because MicroDVD links every cue directly to a discrete video frame, subtitles remain locked to the video stream even when scrubbing, playing at non-standard speeds, or editing in software that operates strictly on a frame-by-frame basis."
        },
        {
            "title": "4. Compatibility with Retro Media Centers & Modded Consoles",
            "description": "Classic homebrew media players on platforms like the original Xbox (XBMC 1.0), PlayStation 2 (SMS Player), and Nintendo Wii often demonstrate superior font rendering and caching performance with lightweight MicroDVD subtitles."
        },
        {
            "title": "5. Multi-Line Compact Formatting via Pipe Delimiters",
            "description": "MicroDVD compacts multi-line dialogue into a single structured string using pipe characters ({120}{250}Line 1|Line 2), minimizing file size and preventing line-break parsing errors in minimalist firmware."
        },
        {
            "title": "6. 100% Private, Client-Side Browser Conversion",
            "description": "Our online converter processes your subtitle files entirely within your local browser memory using client-side JavaScript. No scripts, transcripts, or personal video dialogue are ever transmitted to external cloud servers."
        }
    ],
    "howToTitle": "Step-by-Step: How to Convert SRT to SUB Online",
    "howToSubtitle": "Follow these simple steps to transform your SubRip SRT subtitles into clean, frame-accurate SUB files in seconds.",
    "howToSteps": [
        {
            "step": "1",
            "title": "Upload or Paste Your SRT Content",
            "description": "Drag and drop your .srt file directly onto the upload zone, or copy your SubRip subtitle text and paste it into the left-hand input editor."
        },
        {
            "step": "2",
            "title": "Choose Target Format (MicroDVD or SubViewer)",
            "description": "Select MicroDVD (.sub) for frame-indexed playback on DVD/DivX devices, or choose SubViewer 2.0 (.sub) for timestamp-based centisecond playback."
        },
        {
            "step": "3",
            "title": "Select the Matching Video Frame Rate (FPS)",
            "description": "If converting to MicroDVD, choose the exact frame rate of your video file (e.g., 23.976, 24, 25, or 29.97 FPS) to ensure frame-perfect audio synchronization."
        },
        {
            "step": "4",
            "title": "Download Your Converted .SUB File",
            "description": "Click the Download .SUB button to save the file directly to your device, or copy the converted output text to your clipboard for instant testing."
        }
    ],
    "differenceTitle": "SRT vs. MicroDVD SUB vs. SubViewer SUB: 10-Point Technical Comparison",
    "differenceSubtitle": "A detailed technical breakdown of timing models, formatting delimiters, header structures, and playback support.",
    "differenceTable": [
        {
            "feature": "Timing Mechanism",
            "srt": "Time-based (Milliseconds: HH:MM:SS,mmm)",
            "microdvd": "Frame-based (Frame numbers: {start}{end})",
            "subviewer": "Time-based (Centiseconds: HH:MM:SS.cs)"
        },
        {
            "feature": "Frame Rate Dependency",
            "srt": "None (Frame rate independent)",
            "microdvd": "High (Requires exact video FPS to sync)",
            "subviewer": "None (Absolute clock time)"
        },
        {
            "feature": "Multi-Line Delimiter",
            "srt": "Standard line break (\\n)",
            "microdvd": "Vertical pipe character (|)",
            "subviewer": "Explicit tag ([br])"
        },
        {
            "feature": "File Header",
            "srt": "No header (Starts with cue 1)",
            "microdvd": "Optional FPS header ({1}{1}25.000)",
            "subviewer": "Mandatory metadata block ([INFORMATION])"
        },
        {
            "feature": "Cue Index Counter",
            "srt": "Mandatory sequential integer (1, 2, 3...)",
            "microdvd": "No cue counter (Implicit in frame tags)",
            "subviewer": "No cue counter (Timestamp line only)"
        },
        {
            "feature": "HTML Tag Support",
            "srt": "Basic tags (<i>, <b>, <u>, <font>)",
            "microdvd": "Proprietary tags ({Y:i}, {Y:b}) or plain text",
            "subviewer": "Limited or plain text"
        },
        {
            "feature": "Smart TV & Web Support",
            "srt": "Universal (100% native compatibility)",
            "microdvd": "Limited (Requires VLC, MPV, or legacy player)",
            "subviewer": "Very limited (Legacy media software only)"
        },
        {
            "feature": "Standalone DVD/DivX Players",
            "srt": "Inconsistent on older firmware",
            "microdvd": "Universal native hardware support",
            "subviewer": "Supported on select DivX chipsets"
        },
        {
            "feature": "Average File Size",
            "srt": "Small (~40 KB per feature film)",
            "microdvd": "Very compact (~25 KB per feature film)",
            "subviewer": "Moderate (~45 KB with header)"
        },
        {
            "feature": "Primary Use Case",
            "srt": "Web video, streaming, YouTube, modern TVs",
            "microdvd": "Hardware players, retro consoles, car audio",
            "subviewer": "Vintage desktop editing and archival"
        }
    ],
    "fpsGuideTitle": "Video Frame Rate (FPS) Guide: How to Avoid Subtitle Drift",
    "fpsGuideSubtitle": "Selecting the correct frame rate is the single most critical factor in successful MicroDVD subtitle conversion.",
    "fpsGuideText": [
        "Because MicroDVD specifies subtitle appearance by counting video frames, entering the wrong frame rate into the conversion formula will result in progressive subtitle desynchronization. If the frame rate you choose is higher than the video's actual frame rate, the subtitles will appear too late and fall further behind as the film progresses. Conversely, if the chosen frame rate is lower than the video, the subtitles will display too early.",
        "For example, a movie encoded at 23.976 FPS (standard cinema / American Blu-ray) converted using a 25.000 FPS setting will accumulate approximately 2.5 seconds of timing error every minute. After just 20 minutes of playback, the subtitles will be off by nearly a full minute, rendering the video completely unwatchable.",
        "The table below outlines the standard video frame rates used across the film and television broadcast industries. Always inspect your video file with VLC Media Player (Ctrl+J) or MediaInfo before converting your subtitles to identify the precise frame rate."
    ],
    "fpsTable": [
        {
            "fps": "23.976 FPS",
            "standard": "NTSC Film / 24p Cinema",
            "useCase": "Standard theatrical feature films, American and Japanese anime Blu-rays, streaming drama series."
        },
        {
            "fps": "24.000 FPS",
            "standard": "True DCI Cinema",
            "useCase": "Digital theatrical film prints, DCP projection masters, European cinematic cinema productions."
        },
        {
            "fps": "25.000 FPS",
            "standard": "PAL / SECAM Broadcast",
            "useCase": "European, Australian, British, and South American television broadcasts and PAL DVDs."
        },
        {
            "fps": "29.970 FPS",
            "standard": "NTSC Broadcast Television",
            "useCase": "North American and Japanese television broadcasts, soap operas, documentary DVDs, and camcorders."
        },
        {
            "fps": "30.000 FPS",
            "standard": "Web Video / Digital Media",
            "useCase": "Older web video clips, screencasts, smartphone camera recordings, and computer-generated video."
        },
        {
            "fps": "50.000 FPS",
            "standard": "PAL High Frame Rate",
            "useCase": "European sports broadcasts, live high-definition European television streams."
        },
        {
            "fps": "59.940 / 60 FPS",
            "standard": "NTSC High Frame Rate / Gaming",
            "useCase": "Modern 60fps YouTube gaming videos, action sports broadcasts, high-speed camera footage."
        }
    ],
    "mathTitle": "The Mathematics of Frame-Based Subtitle Conversion",
    "mathSubtitle": "How timestamps are calculated and transformed into integer frame numbers.",
    "mathFormula": "Frame Number = Math.round((Time_in_Milliseconds / 1000) × Video_FPS)",
    "mathExplanation": [
        "1. Timestamp Parsing: The converter extracts the start and end timestamps from the SubRip cue (e.g., 00:01:24,500) and converts the time into total milliseconds: (1 min × 60,000 ms) + (24 sec × 1,000 ms) + 500 ms = 84,500 milliseconds (84.500 seconds).",
        "2. Frame Calculation: The total time in seconds is multiplied by the target frame rate. At 25.000 FPS (PAL), the calculation is: 84.500 × 25 = 2,112.5. Rounding to the nearest integer produces Start Frame 2113.",
        "3. End Frame Calculation: If the cue ends at 00:01:28,000 (88.000 seconds), the end frame is: 88.000 × 25 = 2,200. The cue is formatted as {2113}{2200}.",
        "4. Minimum Duration Safety: If a very short subtitle produces identical start and end frames due to rounding, the converter automatically increments the end frame by 1 so the subtitle displays for at least one full video frame."
    ],
    "exampleTitle": "Before & After: SRT to MicroDVD and SubViewer Conversion Example",
    "exampleIntro": "Examine how a standard SubRip subtitle containing multi-line text and basic formatting is transformed into clean MicroDVD and SubViewer 2.0 representations.",
    "exampleSrtInput": "1\n00:01:20,100 --> 00:01:23,450\nWelcome to the presentation!\nEnjoy this high-definition film.\n\n2\n00:01:24,500 --> 00:01:28,000\nCreated by <i>SRTConverters</i>.\nVisit us online today!",
    "exampleMicroDvdOutput": "{1}{1}25.000\n{2003}{2086}Welcome to the presentation!|Enjoy this high-definition film.\n{2113}{2200}Created by SRTConverters.|Visit us online today!",
    "exampleSubViewerOutput": "[INFORMATION]\n[TITLE]Converted with SRTConverters\n[AUTHOR]SRTConverters\n[SOURCE]\n[PRG]SRT to SUB Converter\n[FILEPATH]\n[DELAY]0\n[CD TRACK]0\n[COMMENT]Free Online Subtitle Converter\n[END INFORMATION]\n[SUBTITLE]\n[COLF]&H00FFFFFF,[STYLE]no,[SIZE]18,[FONT]Arial\n00:01:20.10,00:01:23.45\nWelcome to the presentation![br]Enjoy this high-definition film.\n\n00:01:24.50,00:01:28.00\nCreated by SRTConverters.[br]Visit us online today!",
    "exampleExplanation": "Notice how the MicroDVD format combines the two lines of text using a vertical pipe (|) and replaces the millisecond timestamp with frame numbers calculated at 25 FPS ({2003}{2086}). The SubViewer 2.0 format preserves clock timing in centiseconds (00:01:20.10,00:01:23.45) and joins multi-line dialogue using [br]. In both outputs, HTML tags like <i> are stripped to ensure seamless playback on legacy hardware.",
    "formatsComparisonTitle": "MicroDVD vs. SubViewer vs. VobSub: Understanding the .SUB Ambiguity",
    "formatsComparisonSubtitle": "Why the .sub extension can refer to completely different subtitle file types.",
    "formatsComparisonText": [
        "One of the most frequent sources of confusion in digital video is that three fundamentally different technologies share the exact same '.sub' file extension:",
        "1. MicroDVD (.sub): A lightweight text file containing frame-indexed cues formatted as {start}{end}text. This is the format generated by our tool and expected by standalone DVD players and DivX media streamers.",
        "2. SubViewer 2.0 (.sub): A human-readable text file with an [INFORMATION] metadata header and centisecond timestamps. Also generated by our tool for compatible software players.",
        "3. VobSub (.sub + .idx): A binary subtitle format extracted directly from DVD-Video discs. VobSub files do NOT contain editable text; instead, they store raw 2-bit compressed bitmap images of the original DVD subtitles, paired with an index file (.idx) that contains timing and palette coordinates. VobSub files cannot be opened in a text editor or edited with simple text converters without Optical Character Recognition (OCR)."
    ],
    "ffmpegTitle": "How to Convert SRT to SUB Using the FFmpeg Command Line",
    "ffmpegSubtitle": "Automate batch subtitle conversions across video directories with the open-source FFmpeg CLI.",
    "ffmpegCommand": "ffmpeg -i input.srt -c:s microdvd -r 23.976 output.sub",
    "ffmpegExplanation": [
        "-i input.srt: Specifies the input SubRip subtitle file.",
        "-c:s microdvd: Instructs FFmpeg to encode the subtitle stream into the MicroDVD .sub format.",
        "-r 23.976: Sets the target frame rate used to calculate frame numbers from SRT milliseconds (adjust to 24, 25, or 29.97 to match your video file).",
        "output.sub: Designates the name and path of the generated MicroDVD subtitle file."
    ],
    "useCasesTitle": "5 Practical Real-World Use Cases for SRT to SUB Conversion",
    "useCasesSubtitle": "Common scenarios where converting SubRip captions to frame-accurate SUB subtitles is required.",
    "useCasesList": [
        {
            "title": "1. Burning AVI/DivX Video Discs for Hardware DVD Players",
            "description": "Many standalone DVD players with USB or CD/DVD data disc slots can play MPEG-4 AVI files but strictly require a companion .sub subtitle file with identical naming (e.g., movie.avi and movie.sub) to render on-screen captions."
        },
        {
            "title": "2. In-Car Entertainment & Head Unit Playback",
            "description": "Aftermarket and factory dashboard video systems in cars frequently run lightweight firmware that natively decodes MicroDVD .sub files while failing to parse modern WebVTT or complex SRT formatting."
        },
        {
            "title": "3. Archiving Subtitles for Retro Gaming Consoles",
            "description": "Media center software running on vintage consoles like the Xbox Classic (XBMC) or PS2 (SMS) renders MicroDVD subtitles with zero CPU overhead, preserving smooth video playback without frame drops."
        },
        {
            "title": "4. Video Authoring in Legacy Production Suites",
            "description": "Older versions of authoring suites such as DVD Maestro, Scenarist, and Sonic DVDit often accept MicroDVD frame-indexed text files for building custom DVD subtitle tracks."
        },
        {
            "title": "5. Frame-by-Frame Subtitle Verification in Video Editing",
            "description": "Video editors working in NLE software can cross-reference exact frame numbers in a MicroDVD file against the video playhead to verify that dialogue cuts occur exactly on scene boundaries."
        }
    ],
    "troubleshootTitle": "Troubleshooting Common SRT to SUB Conversion Issues",
    "troubleshootSubtitle": "Quick fixes for synchronization drift, missing text, and character encoding errors.",
    "troubleshootTips": [
        {
            "issue": "Subtitles drift out of sync over time",
            "cause": "The frame rate (FPS) selected during conversion does not match the true frame rate of the video track (e.g., 25 FPS was used instead of 23.976 FPS).",
            "solution": "Open your video file in VLC Media Player, press Ctrl+J to inspect Codec Information, find the exact Frame rate, and reconvert your SRT file with the matching FPS value."
        },
        {
            "issue": "Multi-line subtitles appear on a single cramped line",
            "cause": "The media player does not support standard line breaks or failed to parse the vertical pipe (|) character used by MicroDVD.",
            "solution": "Ensure your player firmware is updated, or switch to SubViewer 2.0 mode which uses explicit [br] tags to break lines."
        },
        {
            "issue": "Subtitle file fails to load or shows an error on a DVD player",
            "cause": "The hardware player requires an initial frame rate declaration header to recognize the file structure.",
            "solution": "Make sure the 'Include FPS Header' checkbox is enabled when converting to MicroDVD. This prepends the {1}{1}FPS header line to the top of the file."
        },
        {
            "issue": "Special accented letters or symbols appear corrupted (mojibake)",
            "cause": "The original SRT file was saved with UTF-8 encoding with or without BOM, while the hardware player only reads ANSI or Windows-1252 character sets.",
            "solution": "Open the converted .sub file in Windows Notepad, click File > Save As, and select ANSI or UTF-8 depending on your device's language specifications."
        }
    ],
    "workflowTitle": "Professional Subtitle Engineering Workflow",
    "workflowSubtitle": "Best practices for preparing, converting, and testing your subtitles for hardware compatibility.",
    "workflowSteps": [
        "Step 1: Inspect the Source Video — Open the target video in VLC or MediaInfo to confirm the video container, duration, and exact frame rate (e.g., 23.976 or 25.000 FPS).",
        "Step 2: Clean the SRT Subtitle — Check your SRT file for overlapping timestamps, negative durations, or non-standard HTML tags that might confuse hardware decoders.",
        "Step 3: Convert with SRTConverters — Paste or upload your file, select the matching frame rate, keep 'Include FPS Header' checked, and download your .sub file.",
        "Step 4: Rename for Playback — Name the .sub file identically to your video file in the same directory (e.g., movie_title.avi and movie_title.sub).",
        "Step 5: Test on Hardware — Load the video onto a USB thumb drive formatted in FAT32, plug it into your hardware player, and verify timing synchronization during the first 10 minutes."
    ],
    "conclusionTitle": "Summary & Key Takeaways",
    "conclusionText": [
        "Converting SubRip (.srt) subtitles to SUB format (MicroDVD or SubViewer) bridges the gap between modern digital video files and legacy hardware media players. By understanding the critical role of video frame rates and utilizing frame-accurate conversion mathematics, you can ensure flawless subtitle playback across older DVD players, in-car displays, and specialized authoring environments.",
        "SRTConverters provides a fast, 100% private, and browser-based converter with comprehensive frame rate support. Whether you need frame-indexed MicroDVD files or timestamped SubViewer captions, our tool ensures your subtitles remain sharp, synchronized, and ready for any screen."
    ]
},
  es: {
    "introTitle": "Guía Completa para Convertir Subtítulos SRT a Formato SUB",
    "introSubtitle": "Aprende a convertir subtítulos SubRip (.srt) a los formatos MicroDVD y SubViewer (.sub) indexados por fotogramas, domina las tasas de fotogramas (FPS) y logra una sincronización perfecta en reproductores clásicos y consolas multimedia.",
    "introText": [
        "SubRip (.srt) es reconocido mundialmente como el estándar de facto para subtítulos de video digital. Es un formato ligero, fácil de leer para humanos y soportado de forma nativa por prácticamente cualquier reproductor de software, navegador web y Smart TV moderna. Sin embargo, al trabajar con reproductores de DVD independientes más antiguos, sistemas de cine en casa con certificación DivX/XviD, pantallas multimedia de automóviles o flujos de autoría de video especializados, con frecuencia encontrarás hardware que no puede leer archivos SRT basados en tiempo y exige estrictamente subtítulos con la extensión .sub.",
        "En el campo de la ingeniería de subtítulos, la extensión .sub representa principalmente dos especificaciones de texto muy diferentes: MicroDVD (un formato indexado por fotogramas creado para discos de video y archivos multimedia DivX) y SubViewer 2.0 (un formato basado en marcas de centésimas de segundo). A diferencia de los subtítulos modernos que calculan los intervalos de aparición mediante horas, minutos, segundos y milisegundos, los subtítulos MicroDVD sincronizan los diálogos directamente con los fotogramas individuales que se dibujan en la pantalla.",
        "Debido a que MicroDVD depende de números de fotograma ({fotograma_inicio}{fotograma_fin}) en lugar de tiempo absoluto de reloj, convertir un archivo SRT a SUB requiere una transformación matemática precisa basada en la tasa de fotogramas por segundo (FPS) del video. Un error entre el cálculo de fotogramas y el video provocará que los subtítulos se adelanten o se atrasen de forma progresiva. Esta guía exhaustiva analiza la arquitectura técnica de los formatos SUB, las matemáticas de conversión de FPS, comandos de FFmpeg y soluciones prácticas para problemas comunes."
    ],
    "whatIsTitle": "Comprendiendo SRT y SUB: Códigos de Tiempo Modernos vs. Subtítulos por Fotogramas",
    "whatIsText": [
        "SubRip (.srt) fue desarrollado a finales de los años 90 junto con la herramienta de extracción de DVD creada por Brain, con el propósito de almacenar subtítulos en un formato abierto y altamente portable. Un archivo SRT consta de un contador numérico secuencial, una marca de tiempo inicial y final separada por ' --> ' con precisión de milisegundos (HH:MM:SS,mmm), y una o más líneas de texto seguidas de un salto de línea en blanco. El formato SRT delega el estilo visual, la posición y el renderizado al reproductor.",
        "MicroDVD (.sub), creado entre 1999 y 2001 por Tias Software para el popular reproductor MicroDVD, fue diseñado expresamente para contenedores de video MPEG-4, DivX y AVI. En vez de marcas horarias de reloj, cada réplica se define por los números exactos de fotograma en los que debe aparecer y desaparecer: {fotograma_inicio}{fotograma_fin}Texto del subtítulo. Si el texto abarca varias líneas, estas se separan mediante una barra vertical (|). Los archivos MicroDVD también admiten una línea inicial opcional ({1}{1}25.000 o {1}{1}23.976) que indica al reproductor la tasa de fotogramas de destino.",
        "SubViewer 2.0 (.sub) fue diseñado como una alternativa basada en texto que incluye un encabezado de metadatos ([INFORMATION] ... [SUBTITLE]) seguido de tiempos en centésimas de segundo (HH:MM:SS.cs,HH:MM:SS.cs) y líneas de texto delimitadas por la etiqueta [br]. Aunque es menos habitual que MicroDVD en reproductores de DVD físicos, SubViewer cuenta con amplio soporte en programas de edición clásicos. Ambos formatos cumplen una función indispensable para mantener la compatibilidad con equipos retro y pantallas especiales."
    ],
    "whyConvertTitle": "6 Razones Clave para Convertir Subtítulos SRT a Formato SUB",
    "whyConvertSubtitle": "Por qué editores de video, archivistas multimedia y aficionados al cine en casa convierten subtítulos SubRip a archivos SUB.",
    "whyConvertReasons": [
        {
            "title": "1. Reproducción Nativa en Reproductores de DVD y DivX de Sobremesa",
            "description": "Muchos reproductores de DVD con puerto USB o ranura para discos de datos admiten videos AVI/MPEG-4 pero carecen de decodificador SRT, requiriendo archivos MicroDVD .sub con el mismo nombre para mostrar subtítulos."
        },
        {
            "title": "2. Pantallas Multimedia y Sistemas de Audio en Automóviles",
            "description": "Numerosos sistemas de infoentretenimiento para tableros de vehículos y pantallas traseras ejecutan firmwares ligeros basados en Linux embebido o Windows CE que solo reconocen archivos MicroDVD .sub."
        },
        {
            "title": "3. Sincronización Bloqueada al Fotograma Exacto",
            "description": "Dado que MicroDVD vincula cada diálogo a un fotograma de video concreto, la sincronía permanece perfecta incluso al avanzar cuadro por cuadro o editar en programas que operan estrictamente por fotogramas."
        },
        {
            "title": "4. Compatibilidad con Centros Multimedia Retro y Consolas Modificadas",
            "description": "Aplicaciones clásicas para consolas retro como Xbox Classic (XBMC 1.0), PlayStation 2 (SMS Player) y Nintendo Wii ofrecen un rendimiento óptimo al procesar subtítulos ligeros en formato MicroDVD."
        },
        {
            "title": "5. Formato Compacto Multilínea mediante Barras Verticales",
            "description": "MicroDVD compacta subtítulos de varias líneas en una sola cadena mediante barras verticales ({120}{250}Línea 1|Línea 2), reduciendo el tamaño del archivo y evitando errores de salto de línea en reproductores antiguos."
        },
        {
            "title": "6. Conversión 100% Privada en el Navegador",
            "description": "Nuestro convertidor procesa tus archivos exclusivamente en la memoria local de tu navegador mediante JavaScript. Ningún archivo ni texto de video se envía a servidores externos."
        }
    ],
    "howToTitle": "Paso a Paso: Cómo Convertir SRT a SUB Online",
    "howToSubtitle": "Sigue estos sencillos pasos para transformar tus subtítulos SubRip SRT en archivos SUB limpios y perfectamente sincronizados.",
    "howToSteps": [
        {
            "step": "1",
            "title": "Sube o Pega tu Contenido SRT",
            "description": "Arrastra y suelta tu archivo .srt directamente en el área de carga o copia el texto de tus subtítulos y pégalo en el panel izquierdo."
        },
        {
            "step": "2",
            "title": "Elige el Formato de Destino (MicroDVD o SubViewer)",
            "description": "Selecciona MicroDVD (.sub) para reproducción indexada por fotogramas en reproductores DVD/DivX, o SubViewer 2.0 (.sub) para marcas temporales en centésimas."
        },
        {
            "step": "3",
            "title": "Indica la Tasa de Fotogramas (FPS) del Video",
            "description": "Al convertir a MicroDVD, selecciona la tasa exacta de fotogramas de tu video (ej. 23.976, 24, 25 o 29.97 FPS) para garantizar una sincronía impecable con el audio."
        },
        {
            "step": "4",
            "title": "Descarga tu Archivo .SUB Convertido",
            "description": "Haz clic en el botón Descargar .SUB para guardar el archivo en tu dispositivo o copia el texto generado al portapapeles para comprobarlo de inmediato."
        }
    ],
    "differenceTitle": "SRT vs. MicroDVD SUB vs. SubViewer SUB: Comparativa Técnica de 10 Puntos",
    "differenceSubtitle": "Análisis técnico exhaustivo de modelos de temporización, delimitadores de formato, encabezados y compatibilidad.",
    "differenceTable": [
        {
            "feature": "Mecanismo de Temporización",
            "srt": "Basado en tiempo (Milisegundos: HH:MM:SS,mmm)",
            "microdvd": "Basado en fotogramas (Números: {inicio}{fin})",
            "subviewer": "Basado en tiempo (Centésimas: HH:MM:SS.cs)"
        },
        {
            "feature": "Dependencia de los FPS",
            "srt": "Ninguna (Independiente de la tasa de cuadros)",
            "microdvd": "Alta (Requiere los FPS exactos del video)",
            "subviewer": "Ninguna (Tiempo de reloj absoluto)"
        },
        {
            "feature": "Delimitador Multilínea",
            "srt": "Salto de línea estándar (\\n)",
            "microdvd": "Barra vertical (|)",
            "subviewer": "Etiqueta explícita ([br])"
        },
        {
            "feature": "Encabezado de Archivo",
            "srt": "Sin encabezado (Comienza con el subtítulo 1)",
            "microdvd": "Encabezado FPS opcional ({1}{1}25.000)",
            "subviewer": "Bloque de metadatos obligatorio ([INFORMATION])"
        },
        {
            "feature": "Contador Secuencial",
            "srt": "Entero secuencial obligatorio (1, 2, 3...)",
            "microdvd": "Sin contador (Implícito en los fotogramas)",
            "subviewer": "Sin contador (Solo marcas de tiempo)"
        },
        {
            "feature": "Soporte de Etiquetas HTML",
            "srt": "Etiquetas básicas (<i>, <b>, <u>, <font>)",
            "microdvd": "Etiquetas propias ({Y:i}, {Y:b}) o texto plano",
            "subviewer": "Limitado o texto plano"
        },
        {
            "feature": "Smart TVs y Reproductores Web",
            "srt": "Universal (Compatibilidad nativa del 100%)",
            "microdvd": "Limitado (Requiere VLC, MPV o reproductor retro)",
            "subviewer": "Muy limitado (Solo software antiguo)"
        },
        {
            "feature": "Reproductores DVD/DivX de Sobremesa",
            "srt": "Inconsistente en firmwares clásicos",
            "microdvd": "Soporte nativo universal en hardware",
            "subviewer": "Admitido en ciertos chipsets DivX"
        },
        {
            "feature": "Tamaño Medio de Archivo",
            "srt": "Pequeño (~40 KB por película)",
            "microdvd": "Muy compacto (~25 KB por película)",
            "subviewer": "Moderado (~45 KB con encabezado)"
        },
        {
            "feature": "Caso de Uso Principal",
            "srt": "Video web, streaming, YouTube, Smart TVs",
            "microdvd": "Reproductores de hardware, consolas retro, autos",
            "subviewer": "Edición clásica en PC y archivado"
        }
    ],
    "fpsGuideTitle": "Guía de Fotogramas por Segundo (FPS): Cómo Evitar Desincronizaciones",
    "fpsGuideSubtitle": "Elegir los FPS correctos es el factor individual más importante al convertir a subtítulos MicroDVD.",
    "fpsGuideText": [
        "Dado que MicroDVD especifica el momento de aparición de cada réplica contando los fotogramas del video, utilizar un valor de FPS incorrecto en la fórmula de conversión provocará una desincronización progresiva. Si la tasa elegida es mayor que la tasa real del video, los subtítulos aparecerán cada vez más tarde respecto a la voz. Si es menor, aparecerán antes de tiempo.",
        "Por ejemplo, una película codificada a 23.976 FPS (cine estándar / Blu-ray estadounidense) que se convierta utilizando un ajuste de 25.000 FPS acumulará aproximadamente 2,5 segundos de desfase por cada minuto de metraje. A los 20 minutos de película, los subtítulos estarán desfasados por casi un minuto completo, haciendo imposible seguir el diálogo.",
        "La tabla siguiente detalla las tasas de fotogramas estándar empleadas en la industria del cine y la televisión. Te recomendamos verificar siempre tu archivo de video con VLC Media Player (Ctrl+J) o MediaInfo antes de realizar la conversión."
    ],
    "fpsTable": [
        {
            "fps": "23.976 FPS",
            "standard": "Cine NTSC / Estándar 24p",
            "useCase": "Películas de cine comercial, Blu-rays de anime y series de televisión para streaming."
        },
        {
            "fps": "24.000 FPS",
            "standard": "Cine Digital DCI",
            "useCase": "Proyecciones cinematográficas digitales, copias DCP maestras y producciones europeas de cine."
        },
        {
            "fps": "25.000 FPS",
            "standard": "Emisión PAL / SECAM",
            "useCase": "Televisión europea, británica, australiana y latinoamericana, así como discos DVD PAL."
        },
        {
            "fps": "29.970 FPS",
            "standard": "Televisión NTSC",
            "useCase": "Transmisiones televisivas en Norteamérica y Japón, documentales en DVD y grabaciones de videocámara."
        },
        {
            "fps": "30.000 FPS",
            "standard": "Video Digital para Web",
            "useCase": "Clips de video para internet, grabaciones de pantalla y videos grabados con teléfonos inteligentes."
        },
        {
            "fps": "50.000 FPS",
            "standard": "Alta Frecuencia PAL",
            "useCase": "Retransmisiones deportivas en Europa y emisiones televisivas en alta definición a 50 Hz."
        },
        {
            "fps": "59.940 / 60 FPS",
            "standard": "Alta Frecuencia NTSC / Videojuegos",
            "useCase": "Videos de videojuegos en YouTube a 60 fps, deportes de acción y cámaras de alta velocidad."
        }
    ],
    "mathTitle": "Matemáticas de la Conversión de Subtítulos Basada en Fotogramas",
    "mathSubtitle": "Cómo se transforman las marcas de tiempo en números enteros de fotograma.",
    "mathFormula": "Número de Fotograma = Math.round((Tiempo_en_Milisegundos / 1000) × FPS_del_Video)",
    "mathExplanation": [
        "1. Lectura del Tiempo: El convertidor toma la marca de inicio y fin del subtítulo SRT (por ejemplo, 00:01:24,500) y la calcula en milisegundos totales: (1 min × 60.000 ms) + (24 s × 1.000 ms) + 500 ms = 84.500 milisegundos (84,500 segundos).",
        "2. Multiplicación por FPS: El tiempo en segundos se multiplica por la tasa de fotogramas del video. A 25.000 FPS (PAL): 84,500 × 25 = 2.112,5. Al redondear al entero más cercano se obtiene el Fotograma de Inicio 2113.",
        "3. Cálculo del Fotograma Final: Si la réplica termina en 00:01:28,000 (88,000 segundos), el fotograma final es: 88,000 × 25 = 2.200. El bloque queda formateado como {2113}{2200}.",
        "4. Salvaguarda de Duración Mínima: Si un subtítulo muy corto produce el mismo fotograma inicial y final por redondeo, el convertidor suma automáticamente 1 al fotograma final para que permanezca visible al menos durante un fotograma completo."
    ],
    "exampleTitle": "Antes y Después: Ejemplo de Conversión de SRT a MicroDVD y SubViewer",
    "exampleIntro": "Comprueba cómo un subtítulo SubRip con múltiples líneas y formato básico se convierte limpiamente a MicroDVD y SubViewer 2.0.",
    "exampleSrtInput": "1\n00:01:20,100 --> 00:01:23,450\n¡Bienvenidos a la presentación!\nDisfruten de esta película en alta definición.\n\n2\n00:01:24,500 --> 00:01:28,000\nCreado por <i>SRTConverters</i>.\n¡Visítanos hoy mismo!",
    "exampleMicroDvdOutput": "{1}{1}25.000\n{2003}{2086}¡Bienvenidos a la presentación!|Disfruten de esta película en alta definición.\n{2113}{2200}Creado por SRTConverters.|¡Visítanos hoy mismo!",
    "exampleSubViewerOutput": "[INFORMATION]\n[TITLE]Converted with SRTConverters\n[AUTHOR]SRTConverters\n[SOURCE]\n[PRG]SRT to SUB Converter\n[FILEPATH]\n[DELAY]0\n[CD TRACK]0\n[COMMENT]Free Online Subtitle Converter\n[END INFORMATION]\n[SUBTITLE]\n[COLF]&H00FFFFFF,[STYLE]no,[SIZE]18,[FONT]Arial\n00:01:20.10,00:01:23.45\n¡Bienvenidos a la presentación![br]Disfruten de esta película en alta definición.\n\n00:01:24.50,00:01:28.00\nCreado por SRTConverters.[br]¡Visítanos hoy mismo!",
    "exampleExplanation": "Observa cómo el formato MicroDVD une las dos líneas de diálogo con una barra vertical (|) y sustituye las marcas en milisegundos por fotogramas a 25 FPS ({2003}{2086}). En SubViewer 2.0 se preserva la medida horaria en centésimas (00:01:20.10,00:01:23.45) y las líneas se separan con [br]. En ambos casos, las etiquetas HTML como <i> se limpian para asegurar la lectura en reproductores antiguos.",
    "formatsComparisonTitle": "MicroDVD vs. SubViewer vs. VobSub: Aclarando la Ambigüedad de la Extensión .SUB",
    "formatsComparisonSubtitle": "Por qué la extensión .sub puede corresponder a archivos totalmente distintos.",
    "formatsComparisonText": [
        "Uno de los motivos de mayor confusión en el video digital es que tres tecnologías esencialmente diferentes comparten la misma extensión '.sub':",
        "1. MicroDVD (.sub): Archivo de texto plano ligero con tiempos definidos por fotogramas ({inicio}{fin}texto). Es el formato que genera nuestra herramienta y el que leen reproductores DVD de mesa y equipos DivX.",
        "2. SubViewer 2.0 (.sub): Archivo de texto con encabezado de metadatos [INFORMATION] y marcas de tiempo en centésimas de segundo, también generado por nuestra herramienta.",
        "3. VobSub (.sub + .idx): Formato de subtítulos binario extraído directamente de discos DVD-Video comerciales. Los archivos VobSub NO contienen texto editable, sino imágenes gráficas comprimidas (bitmaps) de los subtítulos originales acompañadas de un archivo índice (.idx). No pueden abrirse con un editor de texto sin antes realizar un reconocimiento óptico de caracteres (OCR)."
    ],
    "ffmpegTitle": "Cómo Convertir SRT a SUB desde la Línea de Comandos con FFmpeg",
    "ffmpegSubtitle": "Automatiza la conversión por lotes en directorios de video mediante la herramienta de código abierto FFmpeg.",
    "ffmpegCommand": "ffmpeg -i input.srt -c:s microdvd -r 23.976 output.sub",
    "ffmpegExplanation": [
        "-i input.srt: Define el archivo de subtítulos SubRip de entrada.",
        "-c:s microdvd: Indica a FFmpeg que codifique los subtítulos en formato MicroDVD .sub.",
        "-r 23.976: Establece la tasa de fotogramas empleada para convertir los milisegundos a números de frame (ajustar a 24, 25 o 29.97 según el video).",
        "output.sub: Nombre y ruta del archivo de subtítulos MicroDVD generado."
    ],
    "useCasesTitle": "5 Casos de Uso Reales para la Conversión de SRT a SUB",
    "useCasesSubtitle": "Situaciones prácticas donde convertir subtítulos SubRip a formato SUB es la mejor solución.",
    "useCasesList": [
        {
            "title": "1. Grabación de Discos AVI/DivX para Reproductores de DVD Físicos",
            "description": "Muchos reproductores de salón con puerto USB o lector de discos pueden reproducir archivos AVI pero necesitan obligatoriamente un archivo .sub con el mismo nombre (ej. pelicula.avi y pelicula.sub) para mostrar subtítulos."
        },
        {
            "title": "2. Pantallas y Sistemas de Infoentretenimiento en Vehículos",
            "description": "Las pantallas traseras y los sistemas de audio para salpicaderos ejecutan firmwares sencillos que leen subtítulos MicroDVD .sub de manera nativa sin sobrecargar el procesador del vehículo."
        },
        {
            "title": "3. Centros Multimedia en Consolas de Videojuegos Clásicas",
            "description": "Programas como XBMC en la Xbox clásica o SMS Player en PlayStation 2 rinden de forma óptima al decodificar subtítulos MicroDVD sin caídas en la tasa de cuadros del video."
        },
        {
            "title": "4. Creación de Discos en Suites de Autoría Tradicionales",
            "description": "Versiones clásicas de programas de autoría de DVD como DVD Maestro, Scenarist y Sonic DVDit aceptan listas de texto indexadas por fotogramas para generar pistas de subtítulos para discos ópticos."
        },
        {
            "title": "5. Verificación Fotograma a Fotograma en Edición de Video",
            "description": "Editores que trabajan en software de montaje pueden contrastar el número exacto de fotograma de un archivo MicroDVD con la línea de tiempo para asegurar que las réplicas comiencen exactamente en el corte de plano."
        }
    ],
    "troubleshootTitle": "Solución de Problemas Comunes en la Conversión de SRT a SUB",
    "troubleshootSubtitle": "Respuestas rápidas para fallos de sincronía, texto cortado y problemas de codificación.",
    "troubleshootTips": [
        {
            "issue": "Los subtítulos se van desincronizando con el paso de los minutos",
            "cause": "La tasa de fotogramas (FPS) seleccionada en la conversión no coincide con la del video (por ejemplo, se convirtió a 25 FPS un video de 23.976 FPS).",
            "solution": "Abre el video en VLC Media Player, pulsa Ctrl+J para revisar Información del códec, comprueba los FPS reales y vuelve a convertir el archivo SRT con el valor exacto."
        },
        {
            "issue": "Los subtítulos de varias líneas aparecen en un solo renglón amontonado",
            "cause": "El reproductor multimedia no interpreta saltos de línea estándar o no reconoce el carácter de barra vertical (|) de MicroDVD.",
            "solution": "Comprueba si hay actualizaciones de firmware para tu equipo o cambia al modo SubViewer 2.0, que utiliza etiquetas [br] explícitas para dividir los renglones."
        },
        {
            "issue": "El reproductor de DVD no reconoce el archivo o muestra un error de lectura",
            "cause": "Ciertos reproductores requieren obligatoriamente una línea inicial de declaración de tasa de fotogramas para identificar el archivo.",
            "solution": "Asegúrate de marcar la casilla 'Incluir Encabezado FPS' al convertir a MicroDVD para que se añada la cabecera {1}{1}FPS al inicio del documento."
        },
        {
            "issue": "Las letras con tilde, caracteres especiales o signos aparecen con símbolos extraños",
            "cause": "El archivo SRT original estaba en codificación UTF-8 mientras que el reproductor físico solo lee caracteres en ANSI o Windows-1252.",
            "solution": "Abre el archivo .sub generado en el Bloc de notas de Windows, pulsa Archivo > Guardar como y selecciona la codificación ANSI o UTF-8 según las especificaciones de tu aparato."
        }
    ],
    "workflowTitle": "Flujo de Trabajo Profesional para Subtítulos",
    "workflowSubtitle": "Recomendaciones para preparar, convertir y probar subtítulos con total garantía en hardware físico.",
    "workflowSteps": [
        "Paso 1: Analizar el Video de Origen — Abre el video en VLC o MediaInfo para confirmar la duración, el formato y los FPS exactos (por ejemplo, 23.976 o 25.000 FPS).",
        "Paso 2: Limpiar el Archivo SRT — Revisa que no haya tiempos solapados, duraciones negativas ni etiquetas extrañas que puedan confundir a decodificadores antiguos.",
        "Paso 3: Convertir en SRTConverters — Pega o sube tu archivo, selecciona los FPS correspondientes, mantén activada la cabecera FPS y descarga el archivo .sub.",
        "Paso 4: Nombrar el Archivo para Reproducción — Asigna al archivo .sub exactamente el mismo nombre que tiene el video en la misma carpeta (ej. pelicula.avi y pelicula.sub).",
        "Paso 5: Probar en el Dispositivo — Pasa los archivos a una memoria USB en formato FAT32, conéctala a tu reproductor y comprueba la sincronía durante los primeros 10 minutos."
    ],
    "conclusionTitle": "Resumen y Conclusiones",
    "conclusionText": [
        "Convertir subtítulos SubRip (.srt) al formato SUB (MicroDVD o SubViewer) permite salvar la brecha tecnológica entre los archivos de video actuales y los reproductores físicos clásicos. Comprender el papel clave de las tasas de fotogramas por segundo y aplicar cálculos exactos garantiza una reproducción fluida y sin desajustes.",
        "SRTConverters te proporciona una herramienta en línea rápida, gratuita y totalmente privada para convertir tus subtítulos con soporte para todas las tasas de fotogramas del mercado. Tus subtítulos estarán listos para disfrutarse en cualquier pantalla."
    ]
},
  pt: {
    "introTitle": "Guia Completo para Converter Legendas SRT para o Formato SUB",
    "introSubtitle": "Aprenda como converter legendas SubRip (.srt) para os formatos MicroDVD e SubViewer (.sub) indexados por quadros, domine as taxas de quadros (FPS) e alcance uma sincronização impecável em aparelhos clássicos e centrais multimídia.",
    "introText": [
        "O SubRip (.srt) é amplamente reconhecido no mundo todo como o padrão de fato para legendas de vídeo digital. Trata-se de um formato leve, de fácil leitura para seres humanos e suportado nativamente por praticamente todos os players de software, navegadores web e Smart TVs modernas. No entanto, ao trabalhar com reprodutores de DVD de mesa mais antigos, sistemas de home theater certificados para DivX/XviD, telas multimídia veiculares ou pipelines especializados de autoração de vídeo, é muito comum encontrar aparelhos que não conseguem interpretar arquivos SRT baseados em tempo e exigem estritamente arquivos com a extensão .sub.",
        "Na engenharia de legendagem, a extensão .sub representa primariamente duas especificações de texto muito diferentes: o MicroDVD (formato indexado por quadros criado para discos de vídeo e arquivos DivX) e o SubViewer 2.0 (formato com marcação de tempo em centésimos de segundo). Ao contrário das legendas modernas que determinam os intervalos de exibição através de horas, minutos, segundos e milissegundos, as legendas MicroDVD sincronizam as falas diretamente com os quadros individuais desenhados na tela.",
        "Como o MicroDVD depende de números de quadros ({quadro_inicial}{quadro_final}) em vez de tempo absoluto de relógio, converter um arquivo SRT para SUB exige uma conversão matemática precisa baseada na taxa de quadros por segundo (FPS) do arquivo de vídeo. Qualquer diferença entre o cálculo de quadros e o vídeo real fará com que a legenda adiante ou atrase progressivamente ao longo da reprodução. Este guia detalhado aborda a arquitetura técnica dos formatos SUB, a matemática da conversão de FPS, comandos de linha com FFmpeg e soluções práticas para problemas comuns."
    ],
    "whatIsTitle": "Entendendo SRT e SUB: Códigos de Tempo Modernos vs. Legendas por Quadros",
    "whatIsText": [
        "O SubRip (.srt) foi desenvolvido no fim dos anos 90 junto com a ferramenta de extração de DVD de Brain para armazenar legendas em um formato aberto e extremamente portável. Um arquivo SRT é formado por um contador numérico sequencial, uma marcação de tempo inicial e final separada por ' --> ' com precisão de milissegundos (HH:MM:SS,mmm), e uma ou mais linhas de texto seguidas por uma linha em branco. O padrão SRT delega toda a estilização visual, posicionamento e renderização ao software de reprodução.",
        "O MicroDVD (.sub), lançado entre 1999 e 2001 pela Tias Software para o reprodutor MicroDVD, foi projetado especificamente para arquivos em contêineres MPEG-4, DivX e AVI. Em vez de marcas de relógio, cada fala é definida pelos números exatos de quadros em que deve aparecer e sumir da tela: {quadro_inicial}{quadro_final}Texto da legenda. Se o texto tiver mais de uma linha, elas são separadas pelo caractere de barra vertical (|). Arquivos MicroDVD também podem incluir uma linha inicial opcional ({1}{1}25.000 ou {1}{1}23.976) que comunica a taxa de quadros esperada ao reprodutor.",
        "O SubViewer 2.0 (.sub) foi criado como uma alternativa em texto que traz um bloco inicial de metadados ([INFORMATION] ... [SUBTITLE]) seguido de marcações em centésimos de segundo (HH:MM:SS.cs,HH:MM:SS.cs) e quebras de linha identificadas por [br]. Embora seja menos frequente que o MicroDVD em aparelhos de DVD de mesa, o SubViewer possui ampla compatibilidade em softwares clássicos de edição. Ambos os formatos cumprem um papel fundamental para manter a utilidade de equipamentos legados."
    ],
    "whyConvertTitle": "6 Motivos Principais para Converter Legendas SRT em Formato SUB",
    "whyConvertSubtitle": "Por que editores de vídeo, colecionadores e entusiastas de home theater convertem legendas SubRip para arquivos SUB.",
    "whyConvertReasons": [
        {
            "title": "1. Reprodução Nativa em Aparelhos de DVD e DivX de Mesa",
            "description": "Reprodutores de DVD domésticos com portas USB ou leitores de disco de dados reproduzem vídeos AVI/DivX perfeitamente, mas com frequência não leem SRT, exigindo arquivos MicroDVD .sub com o mesmo nome do filme."
        },
        {
            "title": "2. Telas Multimídia e Sistemas de Painel Automotivo",
            "description": "Centrais multimídia e telas para passageiros em veículos frequentemente rodam firmwares enxutos baseados em Linux ou Windows CE que só reconhecem legendas em formato MicroDVD .sub."
        },
        {
            "title": "3. Sincronização Travada no Quadro Exato",
            "description": "Como o MicroDVD vincula cada diálogo a um quadro de vídeo específico, a legenda permanece perfeitamente alinhada mesmo ao reproduzir em velocidades variáveis ou ao editar quadro a quadro."
        },
        {
            "title": "4. Compatibilidade com Videogames Antigos e Modificados",
            "description": "Players homebrew em consoles como Xbox clássico (XBMC), PlayStation 2 (SMS Player) e Nintendo Wii alcançam melhor fluidez gráfica processando legendas MicroDVD sem quedas de frames no vídeo."
        },
        {
            "title": "5. Formatação Multilinhas Compacta via Barra Vertical",
            "description": "O MicroDVD condensa falas com duas ou mais linhas em uma única linha com barras verticais ({120}{250}Linha 1|Linha 2), poupando espaço e evitando erros de quebra em chips mais simples."
        },
        {
            "title": "6. Conversão 100% Privada Diretamente no Navegador",
            "description": "Nosso conversor processa suas legendas integralmente na memória do seu navegador através de JavaScript. Nenhum arquivo ou texto de diálogo é enviado para servidores na nuvem."
        }
    ],
    "howToTitle": "Passo a Passo: Como Converter SRT para SUB Online",
    "howToSubtitle": "Siga estas etapas simples para transformar suas legendas SubRip SRT em arquivos SUB limpos e sincronizados em instantes.",
    "howToSteps": [
        {
            "step": "1",
            "title": "Envie ou Cole o Conteúdo SRT",
            "description": "Arraste e solte o arquivo .srt diretamente no painel de upload ou copie o texto das suas legendas e cole-o no campo de edição à esquerda."
        },
        {
            "step": "2",
            "title": "Escolha o Formato de Destino (MicroDVD ou SubViewer)",
            "description": "Selecione MicroDVD (.sub) para reprodução baseada em quadros em aparelhos DVD/DivX ou SubViewer 2.0 (.sub) para marcações em centésimos."
        },
        {
            "step": "3",
            "title": "Indique a Taxa de Quadros (FPS) do Vídeo",
            "description": "Ao converter para MicroDVD, selecione a taxa de quadros correta do seu arquivo de vídeo (ex.: 23.976, 24, 25 ou 29.97 FPS) para sincronizar perfeitamente com o áudio."
        },
        {
            "step": "4",
            "title": "Baixe o Arquivo .SUB Convertido",
            "description": "Clique no botão Baixar .SUB para salvar o arquivo de legenda no seu computador ou celular, ou copie o texto gerado para a área de transferência."
        }
    ],
    "differenceTitle": "SRT vs. MicroDVD SUB vs. SubViewer SUB: Comparativo Técnico de 10 Pontos",
    "differenceSubtitle": "Análise técnica minuciosa sobre modelos de temporização, delimitadores de linha, cabeçalhos e suporte em aparelhos.",
    "differenceTable": [
        {
            "feature": "Mecanismo de Temporização",
            "srt": "Baseado em tempo (Milissegundos: HH:MM:SS,mmm)",
            "microdvd": "Baseado em quadros (Números: {início}{fim})",
            "subviewer": "Baseado em tempo (Centésimos: HH:MM:SS.cs)"
        },
        {
            "feature": "Dependência de FPS",
            "srt": "Nenhuma (Independente da taxa de quadros)",
            "microdvd": "Alta (Requer os FPS exatos do vídeo)",
            "subviewer": "Nenhuma (Tempo absoluto de relógio)"
        },
        {
            "feature": "Delimitador Multilinhas",
            "srt": "Quebra de linha padrão (\\n)",
            "microdvd": "Barra vertical (|)",
            "subviewer": "Tag explícita ([br])"
        },
        {
            "feature": "Cabeçalho de Arquivo",
            "srt": "Sem cabeçalho (Inicia na legenda 1)",
            "microdvd": "Cabeçalho FPS opcional ({1}{1}25.000)",
            "subviewer": "Bloco de metadados obrigatório ([INFORMATION])"
        },
        {
            "feature": "Contador Sequencial",
            "srt": "Número inteiro obrigatório (1, 2, 3...)",
            "microdvd": "Sem contador (Implícito nos quadros)",
            "subviewer": "Sem contador (Apenas marcas temporais)"
        },
        {
            "feature": "Suporte a Tags HTML",
            "srt": "Tags básicas (<i>, <b>, <u>, <font>)",
            "microdvd": "Tags proprietárias ({Y:i}, {Y:b}) ou texto puro",
            "subviewer": "Limitado ou texto puro"
        },
        {
            "feature": "Smart TVs e Web Players",
            "srt": "Universal (100% de suporte nativo)",
            "microdvd": "Limitado (Requer VLC, MPV ou player antigo)",
            "subviewer": "Muito limitado (Apenas softwares legados)"
        },
        {
            "feature": "Aparelhos de DVD/DivX de Mesa",
            "srt": "Instável em aparelhos mais velhos",
            "microdvd": "Suporte nativo universal em hardware",
            "subviewer": "Suportado em certos chipsets DivX"
        },
        {
            "feature": "Tamanho Médio de Arquivo",
            "srt": "Pequeno (~40 KB por filme)",
            "microdvd": "Muito compacto (~25 KB por filme)",
            "subviewer": "Moderado (~45 KB com cabeçalho)"
        },
        {
            "feature": "Principal Cenário de Uso",
            "srt": "Vídeos para web, streaming, YouTube, TVs",
            "microdvd": "Players de hardware, consoles retrô, carros",
            "subviewer": "Edição clássica em PC e arquivamento"
        }
    ],
    "fpsGuideTitle": "Guia de Taxas de Quadros (FPS): Como Evitar Dessincronizações",
    "fpsGuideSubtitle": "Definir a taxa correta de quadros por segundo é o fator mais decisivo para o sucesso da conversão para MicroDVD.",
    "fpsGuideText": [
        "Como o MicroDVD marca o momento das legendas contando quadros exibidos na tela, aplicar um valor incorreto de FPS na fórmula resultará em dessincronia progressiva. Se o valor selecionado for maior do que a taxa real do vídeo, as legendas surgirão com atraso crescente em relação à fala dos personagens. Se for menor, a legenda aparecerá antes da fala.",
        "Por exemplo, um filme codificado a 23.976 FPS (cinema norte-americano / Blu-ray) que for convertido usando a taxa de 25.000 FPS acumulará cerca de 2,5 segundos de erro temporal a cada minuto de reprodução. Ao atingir 20 minutos de filme, o atraso já será de quase um minuto, inviabilizando completamente a experiência de assistir ao vídeo.",
        "A tabela a seguir apresenta as principais taxas de quadros padronizadas na indústria audiovisual. Sempre verifique o arquivo com o VLC Media Player (Ctrl+J) ou o utilitário MediaInfo antes de converter suas legendas."
    ],
    "fpsTable": [
        {
            "fps": "23.976 FPS",
            "standard": "Cinema NTSC / Padrão 24p",
            "useCase": "Filmes de cinema comercial, Blu-rays de anime e séries para plataformas de streaming."
        },
        {
            "fps": "24.000 FPS",
            "standard": "Cinema Digital DCI",
            "useCase": "Projeções digitais de cinema, masters DCP e filmes cinematográficos europeus."
        },
        {
            "fps": "25.000 FPS",
            "standard": "Transmissão PAL / SECAM",
            "useCase": "Televisão na Europa, Brasil, Austrália e América do Sul, além de discos de DVD PAL."
        },
        {
            "fps": "29.970 FPS",
            "standard": "Televisão NTSC",
            "useCase": "Transmissões de TV nos Estados Unidos e Japão, documentários em DVD e filmadoras domésticas."
        },
        {
            "fps": "30.000 FPS",
            "standard": "Vídeo Digital para Web",
            "useCase": "Vídeos antigos para internet, gravações de tela e gravações realizadas em smartphones."
        },
        {
            "fps": "50.000 FPS",
            "standard": "Alta Frequência PAL",
            "useCase": "Transmissões esportivas na Europa e transmissões de TV ao vivo em alta definição."
        },
        {
            "fps": "59.940 / 60 FPS",
            "standard": "Alta Frequência NTSC / Games",
            "useCase": "Gameplays a 60 fps no YouTube, transmissões esportivas de ação e câmeras de alta velocidade."
        }
    ],
    "mathTitle": "A Matemática da Conversão de Legendas por Quadros",
    "mathSubtitle": "Como as marcações de tempo são calculadas e transformadas em números inteiros de quadros.",
    "mathFormula": "Número do Quadro = Math.round((Tempo_em_Milissegundos / 1000) × FPS_do_Vídeo)",
    "mathExplanation": [
        "1. Leitura do Tempo: O conversor extrai os tempos inicial e final da legenda SRT (ex.: 00:01:24,500) e os converte em milissegundos totais: (1 min × 60.000 ms) + (24 s × 1.000 ms) + 500 ms = 84.500 milissegundos (84,500 segundos).",
        "2. Multiplicação pelos FPS: O tempo em segundos é multiplicado pela taxa de quadros do vídeo. A 25.000 FPS (PAL): 84,500 × 25 = 2.112,5. Arredondando para o número inteiro mais próximo, obtém-se o Quadro Inicial 2113.",
        "3. Cálculo do Quadro Final: Se a fala termina em 00:01:28,000 (88,000 segundos), o cálculo é: 88,000 × 25 = 2.200. A linha fica gravada como {2113}{2200}.",
        "4. Garantia de Duração Mínima: Se uma legenda muito curta resultar no mesmo número para início e fim devido ao arredondamento, o conversor adiciona automaticamente 1 ao quadro final para mantê-la visível por pelo menos um quadro completo."
    ],
    "exampleTitle": "Antes e Depois: Exemplo Prático de Conversão de SRT para MicroDVD e SubViewer",
    "exampleIntro": "Veja como uma legenda SubRip padrão com quebra de linhas e formatação básica é convertida de forma limpa para MicroDVD e SubViewer 2.0.",
    "exampleSrtInput": "1\n00:01:20,100 --> 00:01:23,450\nSejam bem-vindos à apresentação!\nAproveitem este filme em alta definição.\n\n2\n00:01:24,500 --> 00:01:28,000\nCriado por <i>SRTConverters</i>.\nVisite nosso site hoje mesmo!",
    "exampleMicroDvdOutput": "{1}{1}25.000\n{2003}{2086}Sejam bem-vindos à apresentação!|Aproveitem este filme em alta definição.\n{2113}{2200}Criado por SRTConverters.|Visite nosso site hoje mesmo!",
    "exampleSubViewerOutput": "[INFORMATION]\n[TITLE]Converted with SRTConverters\n[AUTHOR]SRTConverters\n[SOURCE]\n[PRG]SRT to SUB Converter\n[FILEPATH]\n[DELAY]0\n[CD TRACK]0\n[COMMENT]Free Online Subtitle Converter\n[END INFORMATION]\n[SUBTITLE]\n[COLF]&H00FFFFFF,[STYLE]no,[SIZE]18,[FONT]Arial\n00:01:20.10,00:01:23.45\nSejam bem-vindos à apresentação![br]Aproveitem este filme em alta definição.\n\n00:01:24.50,00:01:28.00\nCriado por SRTConverters.[br]Visite nosso site hoje mesmo!",
    "exampleExplanation": "Repare que o formato MicroDVD une as duas linhas com a barra vertical (|) e substitui os tempos por números de quadros a 25 FPS ({2003}{2086}). No SubViewer 2.0, o tempo é expresso em centésimos (00:01:20.10,00:01:23.45) e as linhas são unidas por [br]. Em ambos, as tags HTML como <i> são limpas para assegurar compatibilidade com equipamentos legados.",
    "formatsComparisonTitle": "MicroDVD vs. SubViewer vs. VobSub: Desvendando a Extensão .SUB",
    "formatsComparisonSubtitle": "Por que a extensão .sub pode se referir a tipos de arquivos completamente incompatíveis.",
    "formatsComparisonText": [
        "Uma das dúvidas mais frequentes na área de vídeo é a existência de três tecnologias totalmente diferentes que compartilham a mesma extensão '.sub':",
        "1. MicroDVD (.sub): Arquivo de texto puro e leve com marcações por quadros de vídeo ({início}{fim}texto). É o formato criado pela nossa ferramenta e requerido por reprodutores de DVD e aparelhos DivX de mesa.",
        "2. SubViewer 2.0 (.sub): Arquivo de texto estruturado com cabeçalho [INFORMATION] e marcações de tempo em centésimos de segundo, também suportado pelo nosso conversor.",
        "3. VobSub (.sub + .idx): Formato binário de legendas extraído diretamente de discos de DVD-Vídeo. Arquivos VobSub NÃO são texto editável, mas sim imagens gráficas (bitmaps) compactadas das legendas originais acompanhadas por um arquivo de índice (.idx). Eles não podem ser abertos em editores de texto sem um processo prévio de OCR (Reconhecimento Óptico de Caracteres)."
    ],
    "ffmpegTitle": "Como Converter SRT para SUB na Linha de Comando com FFmpeg",
    "ffmpegSubtitle": "Automatize a conversão em lote de pastas inteiras de vídeo usando o consagrado utilitário FFmpeg.",
    "ffmpegCommand": "ffmpeg -i input.srt -c:s microdvd -r 23.976 output.sub",
    "ffmpegExplanation": [
        "-i input.srt: Especifica o arquivo de legendas SubRip original de entrada.",
        "-c:s microdvd: Instrui o FFmpeg a codificar o fluxo de legendas para o formato MicroDVD .sub.",
        "-r 23.976: Define a taxa de quadros utilizada para transformar os milissegundos em quadros de vídeo (ajuste para 24, 25 ou 29.97 de acordo com o vídeo).",
        "output.sub: Caminho e nome do arquivo de legenda MicroDVD de saída."
    ],
    "useCasesTitle": "5 Casos Práticos de Uso da Conversão de SRT para SUB",
    "useCasesSubtitle": "Situações reais em que transformar legendas SubRip em arquivos SUB é a solução ideal.",
    "useCasesList": [
        {
            "title": "1. Gravação de Discos AVI/DivX para Reprodutores de DVD de Mesa",
            "description": "Diversos aparelhos de DVD de sala com entrada USB ou leitor de mídia óptica leem vídeos em formato AVI perfeitamente, mas dependem de um arquivo .sub idêntico (ex.: filme.avi e filme.sub) para exibir as legendas."
        },
        {
            "title": "2. Telas Multimídia e Centrais de Som Automotivo",
            "description": "Sistemas de painel em automóveis frequentemente executam firmwares leves que interpretam arquivos MicroDVD .sub com rapidez e sem travamentos na exibição de vídeo."
        },
        {
            "title": "3. Centrais Multimídia em Videogames Retrô",
            "description": "Aplicativos em consoles antigos como Xbox Clássico (XBMC) ou PlayStation 2 (SMS) processam legendas MicroDVD com consumo mínimo de processamento gráfico."
        },
        {
            "title": "4. Criação de Menus e Autoração de Discos Tradicionais",
            "description": "Ferramentas clássicas de autoração de DVD como DVD Maestro, Scenarist e Sonic DVDit aceitam arquivos de texto indexados por quadros para criar trilhas de legendas para prensagem."
        },
        {
            "title": "5. Conferência Quadro a Quadro em Edição de Vídeo",
            "description": "Editores em programas como Premiere ou DaVinci podem conferir os números de quadros de um arquivo MicroDVD contra a agulha de reprodução para sincronizar os cortes com a fala dos atores."
        }
    ],
    "troubleshootTitle": "Resolução de Problemas Comuns na Conversão de SRT para SUB",
    "troubleshootSubtitle": "Soluções rápidas para erros de sincronia, quebras de linha e caracteres desconfigurados.",
    "troubleshootTips": [
        {
            "issue": "As legendas começam certas mas vão se adiantando ou atrasando aos poucos",
            "cause": "A taxa de quadros (FPS) informada na conversão não bate com a taxa real da faixa de vídeo (por exemplo, foi usado 25 FPS para um vídeo gravado em 23.976 FPS).",
            "solution": "Abra o vídeo no VLC Media Player, tecle Ctrl+J para consultar Informações do Codec, confira a Taxa de quadros real e refaça a conversão do arquivo SRT com o valor exato."
        },
        {
            "issue": "Legendas de várias linhas aparecem amontoadas em uma linha única",
            "cause": "O reprodutor não reconhece quebras normais de linha ou não consegue interpretar o caractere de barra vertical (|) do MicroDVD.",
            "solution": "Verifique atualizações de firmware do aparelho ou utilize o modo SubViewer 2.0, que emprega a marcação explícita [br] para separar as linhas."
        },
        {
            "issue": "O reprodutor de DVD acusa erro de leitura ou não carrega a legenda",
            "cause": "Certos equipamentos de hardware exigem que a primeira linha do arquivo declare a taxa de quadros para identificar o formato.",
            "solution": "Certifique-se de marcar a opção 'Incluir Cabeçalho FPS' antes de converter para MicroDVD. Isso adiciona a linha {1}{1}FPS no início do arquivo."
        },
        {
            "issue": "Caracteres especiais, acentos e cedilhas aparecem com símbolos estranhos",
            "cause": "O arquivo SRT foi salvo em UTF-8 com ou sem BOM, mas o aparelho só lê páginas de código em ANSI ou Windows-1252.",
            "solution": "Abra o arquivo .sub gerado no Bloco de Notas do Windows, clique em Arquivo > Salvar como e selecione ANSI ou UTF-8 conforme as especificações do seu aparelho."
        }
    ],
    "workflowTitle": "Fluxo Profissional para Legendas em Aparelhos Físicos",
    "workflowSubtitle": "Boas práticas para preparar, converter e testar arquivos com total segurança em qualquer aparelho.",
    "workflowSteps": [
        "Passo 1: Analisar o Vídeo — Abra o vídeo no VLC ou MediaInfo para confirmar duração, resolução e a taxa exata de FPS (como 23.976 ou 25.000 FPS).",
        "Passo 2: Revisar o Arquivo SRT — Certifique-se de que o SRT não possui tempos sobrepostos, durações negativas ou tags incompatíveis com chips de decodificação antigos.",
        "Passo 3: Converter no SRTConverters — Cole ou envie seu arquivo, escolha a taxa de FPS correspondente, mantenha a opção de cabeçalho marcada e baixe o arquivo .sub.",
        "Passo 4: Nomear Corretamente os Arquivos — Dê ao arquivo .sub exatamente o mesmo nome do arquivo de vídeo na mesma pasta (ex.: filme.avi e filme.sub).",
        "Passo 5: Testar no Aparelho — Transfira os arquivos para um pendrive formatado em FAT32, conecte ao aparelho e avalie a sincronia nos primeiros 10 minutos de filme."
    ],
    "conclusionTitle": "Resumo e Principais Aprendizados",
    "conclusionText": [
        "A conversão de legendas SubRip (.srt) para o formato SUB (MicroDVD ou SubViewer) é a solução ideal para conectar vídeos modernos a equipamentos de reprodução clássicos. Ao dominar o conceito de taxa de quadros e utilizar cálculos matemáticos exatos, você garante exibições sem descompasso em aparelhos de DVD de mesa e telas de carros.",
        "O SRTConverters oferece uma plataforma online veloz, gratuita e 100% privada para converter suas legendas com suporte completo a todos os padrões de FPS da indústria. Suas legendas estarão prontas para rodar perfeitamente em qualquer tela."
    ]
},
  fr: {
    "introTitle": "Le Guide Complet pour Convertir des Sous-Titres SRT au Format SUB",
    "introSubtitle": "Découvrez comment convertir des sous-titres SubRip (.srt) vers les formats MicroDVD et SubViewer (.sub) indexés par images, maîtriser la cadence d'images (FPS) et obtenir une synchronisation rigoureuse sur platines de salon et équipements rétro.",
    "introText": [
        "SubRip (.srt) s'est imposé dans le monde entier comme la référence absolue des sous-titres vidéo numériques. Ce format texte simple, léger et lisible par l'homme est pris en charge nativement par presque tous les logiciels multimédias, téléviseurs connectés et navigateurs web. Cependant, face à d'anciens lecteurs DVD de salon, des chaînes home-cinéma certifiées DivX/XviD, des écrans multimédias embarqués dans les véhicules ou des logiciels d'authoring spécialisés, vous ferez fréquemment face à du matériel incapable d'interpréter les fichiers SRT horodatés et réclamant impérativement des fichiers portant l'extension .sub.",
        "Dans l'ingénierie des sous-titres, l'extension .sub fait référence à deux normes textuelles bien distinctes : MicroDVD (un format indexé par numéros d'images conçu pour les disques vidéo et les fichiers DivX) et SubViewer 2.0 (un format basé sur des horodatages en centièmes de seconde). Contrairement aux formats récents qui calculent les plages d'affichage en heures, minutes, secondes et millisecondes, MicroDVD cale chaque réplique directement sur les images (frames) individuelles dessinées par le flux vidéo.",
        "Puisque MicroDVD se base sur des numéros d'images ({image_début}{image_fin}) plutôt que sur une horloge absolue, la conversion d'un fichier SRT en SUB nécessite une transformation mathématique précise selon la fréquence d'images par seconde (FPS) de votre vidéo. Tout décalage entre le calcul des images et la vidéo réelle entraînera une dérive progressive du texte par rapport aux dialogues audio. Ce guide détaillé analyse l'architecture technique des formats SUB, les calculs de conversion FPS, les commandes FFmpeg et les méthodes de dépannage éprouvées."
    ],
    "whatIsTitle": "Comprendre SRT et SUB : Codes Temporels vs. Sous-Titres par Images",
    "whatIsText": [
        "SubRip (.srt) a vu le jour à la fin des années 1990 conjointement au logiciel d'extraction de DVD mis au point par Brain, afin d'enregistrer les répliques dans un format ouvert et hautement interopérable. Un fichier SRT se compose d'un compteur séquentiel entier, d'un horodatage de début et de fin séparé par ' --> ' avec une précision à la milliseconde (HH:MM:SS,mmm), et d'une ou plusieurs lignes de texte suivies d'un saut de ligne vide. Le standard SRT laisse l'intégralité du rendu visuel et du positionnement au logiciel de lecture.",
        "MicroDVD (.sub), développé entre 1999 et 2001 par Tias Software pour le lecteur MicroDVD, a été créé spécifiquement pour les conteneurs MPEG-4, DivX et AVI. Au lieu d'horodatages horaires, chaque réplique est définie par les numéros d'images exacts auxquels elle doit s'afficher puis disparaître : {image_début}{image_fin}Texte du sous-titre. Lorsqu'une réplique comporte plusieurs lignes, celles-ci sont séparées par une barre verticale (|). Les fichiers MicroDVD peuvent également comporter une ligne d'en-tête facultative ({1}{1}25.000 ou {1}{1}23.976) renseignant le lecteur sur la cadence prévue.",
        "SubViewer 2.0 (.sub) constitue une alternative textuelle comportant un bloc d'en-tête de métadonnées ([INFORMATION] ... [SUBTITLE]) suivi d'horodatages en centièmes de seconde (HH:MM:SS.cs,HH:MM:SS.cs) et de sauts de ligne marqués par [br]. Bien que moins répandu que MicroDVD sur les lecteurs de salon physiques, SubViewer demeure reconnu par de nombreux outils d'édition historiques. Ces deux formats jouent un rôle indispensable pour pérenniser l'usage d'équipements de diffusion matériels."
    ],
    "whyConvertTitle": "6 Bonnes Raisons de Convertir vos Sous-Titres SRT au Format SUB",
    "whyConvertSubtitle": "Pourquoi éditeurs vidéo, archivistes et passionnés de home-cinéma convertissent leurs sous-titres SubRip en fichiers SUB.",
    "whyConvertReasons": [
        {
            "title": "1. Lecture Directe sur Platines DVD et Lecteurs DivX de Salon",
            "description": "De nombreux lecteurs de salon équipés de ports USB ou de tiroirs de disques lisent les vidéos AVI/MPEG-4 mais ignorent les fichiers SRT, réclamant impérativement des fichiers MicroDVD .sub de nom identique."
        },
        {
            "title": "2. Écrans Multimédias et Systèmes Embarqués Automobiles",
            "description": "Les tableaux de bord et les écrans arrière de voitures fonctionnent couramment avec des firmwares légers sous Linux embarqué ou Windows CE qui ne décodent que les sous-titres au format MicroDVD .sub."
        },
        {
            "title": "3. Synchronisation Verrouillée à l'Image Près",
            "description": "Parce que MicroDVD relie chaque dialogue à une image vidéo précise, le texte reste parfaitement calé même lors de lectures accélérées, au ralenti ou lors d'un montage vidéo image par image."
        },
        {
            "title": "4. Prise en Charge par les Consoles Rétro et Moddées",
            "description": "Des logiciels multimédias historiques sur consoles comme la Xbox originale (XBMC), la PlayStation 2 (SMS Player) et la Wii traitent les fichiers MicroDVD légers sans surcharge processeur ni saccades."
        },
        {
            "title": "5. Formatage Multiligne Compact grâce aux Barres Verticales",
            "description": "MicroDVD compacte les répliques sur plusieurs lignes en une seule chaîne continue avec des barres verticales ({120}{250}Ligne 1|Ligne 2), éliminant les erreurs d'interprétation de sauts de ligne sur puces anciennes."
        },
        {
            "title": "6. Conversion 100% Confidentielle dans le Navigateur",
            "description": "Notre outil convertit vos sous-titres directement dans la mémoire de votre navigateur via JavaScript côté client. Aucun fichier vidéo, texte ou dialogue n'est transmis à des serveurs distants."
        }
    ],
    "howToTitle": "Guide Pratique : Comment Convertir un Fichier SRT en SUB en Ligne",
    "howToSubtitle": "Suivez ces instructions pour transformer vos fichiers SubRip SRT en sous-titres SUB rigoureusement calés en quelques secondes.",
    "howToSteps": [
        {
            "step": "1",
            "title": "Déposez ou Collez votre Contenu SRT",
            "description": "Glissez-déposez votre fichier .srt dans la zone de téléversement ou collez le texte de vos sous-titres directement dans le champ d'édition de gauche."
        },
        {
            "step": "2",
            "title": "Sélectionnez le Format Voulu (MicroDVD ou SubViewer)",
            "description": "Choisissez MicroDVD (.sub) pour une lecture indexée par images sur platines DVD/DivX ou SubViewer 2.0 (.sub) pour un horodatage en centièmes."
        },
        {
            "step": "3",
            "title": "Indiquez la Cadence d'Images (FPS) de la Vidéo",
            "description": "Pour MicroDVD, sélectionnez la cadence exacte de votre vidéo (ex. 23.976, 24, 25 ou 29.97 FPS) afin d'éviter tout décalage par rapport à la bande-son."
        },
        {
            "step": "4",
            "title": "Téléchargez votre Fichier .SUB Converti",
            "description": "Cliquez sur le bouton Télécharger .SUB pour enregistrer le fichier sur votre appareil ou copiez le texte produit dans votre presse-papiers."
        }
    ],
    "differenceTitle": "SRT vs. MicroDVD SUB vs. SubViewer SUB : Comparatif Technique en 10 Points",
    "differenceSubtitle": "Une confrontation approfondie des modèles d'horodatage, des délimiteurs, des en-têtes et de la compatibilité matérielle.",
    "differenceTable": [
        {
            "feature": "Modèle de Synchronisation",
            "srt": "Basé sur le temps (Millisecondes : HH:MM:SS,mmm)",
            "microdvd": "Basé sur les images (Numéros : {début}{fin})",
            "subviewer": "Basé sur le temps (Centièmes : HH:MM:SS.cs)"
        },
        {
            "feature": "Sensibilité à la Fréquence (FPS)",
            "srt": "Nulle (Indépendant de la cadence d'images)",
            "microdvd": "Élevée (Nécessite la cadence exacte du film)",
            "subviewer": "Nulle (Temps horloge absolu)"
        },
        {
            "feature": "Séparateur Multiligne",
            "srt": "Saut de ligne classique (\\n)",
            "microdvd": "Barre verticale (|)",
            "subviewer": "Balise textuelle explicite ([br])"
        },
        {
            "feature": "En-Tête de Fichier",
            "srt": "Aucun en-tête (Débute à la réplique 1)",
            "microdvd": "En-tête FPS optionnel ({1}{1}25.000)",
            "subviewer": "Bloc de métadonnées requis ([INFORMATION])"
        },
        {
            "feature": "Numérotation des Répliques",
            "srt": "Compteur séquentiel obligatoire (1, 2, 3...)",
            "microdvd": "Sans compteur (Implicite dans les balises)",
            "subviewer": "Sans compteur (Ligne temporelle uniquement)"
        },
        {
            "feature": "Balises HTML Prises en Charge",
            "srt": "Balises de base (<i>, <b>, <u>, <font>)",
            "microdvd": "Balises dédiées ({Y:i}, {Y:b}) ou texte brut",
            "subviewer": "Limitées ou texte brut"
        },
        {
            "feature": "Téléviseurs Connectés & Web",
            "srt": "Universel (Compatibilité native à 100%)",
            "microdvd": "Limité (Nécessite VLC, MPV ou lecteur adapté)",
            "subviewer": "Très restreint (Outils multimédias anciens)"
        },
        {
            "feature": "Platines DVD/DivX Physiques",
            "srt": "Aléatoire sur les micrologiciels anciens",
            "microdvd": "Support matériel universel",
            "subviewer": "Géré par certains processeurs DivX"
        },
        {
            "feature": "Poids Moyen du Fichier",
            "srt": "Réduit (~40 Ko par long-métrage)",
            "microdvd": "Ultra-compact (~25 Ko par long-métrage)",
            "subviewer": "Modéré (~45 Ko avec en-tête)"
        },
        {
            "feature": "Usage Recommandé",
            "srt": "Vidéos web, streaming, YouTube, téléviseurs",
            "microdvd": "Platines de salon, consoles rétro, autoradios",
            "subviewer": "Édition bureautique classique et archivage"
        }
    ],
    "fpsGuideTitle": "Guide des Fréquences d'Images (FPS) : Éviter les Problèmes de Désynchronisation",
    "fpsGuideSubtitle": "Bien paramétrer la cadence d'images est le facteur le plus déterminant lors de la conversion MicroDVD.",
    "fpsGuideText": [
        "Parce que MicroDVD positionne l'apparition des sous-titres en comptant les images vidéo, utiliser une cadence erronée lors de la conversion conduira inévitablement à un décalage progressif. Si la cadence choisie est supérieure à celle de la vidéo, les sous-titres s'afficheront de plus en plus en retard par rapport aux voix. Inversement, si elle est inférieure, ils apparaîtront trop tôt.",
        "Par exemple, un film encodé à 23.976 FPS (standard cinéma / Blu-ray américain) converti par mégarde à 25.000 FPS accumulera environ 2,5 secondes d'avance par minute de film. Après seulement 20 minutes de visionnage, le décalage atteindra près d'une minute entière, rendant le visionnage totalement impossible.",
        "Le tableau ci-après récapitule les principales cadences d'images standardisées dans l'audiovisuel. Nous vous conseillons de vérifier votre fichier vidéo avec VLC Media Player (Ctrl+J) ou MediaInfo avant d'effectuer la conversion."
    ],
    "fpsTable": [
        {
            "fps": "23.976 FPS",
            "standard": "Cinéma NTSC / Standard 24p",
            "useCase": "Longs-métrages de cinéma, Blu-rays d'animation et séries pour plateformes de streaming."
        },
        {
            "fps": "24.000 FPS",
            "standard": "Cinéma Numérique DCI",
            "useCase": "Copies cinématographiques numériques professionnelles, masters DCP et films européens."
        },
        {
            "fps": "25.000 FPS",
            "standard": "Diffusion PAL / SECAM",
            "useCase": "Télévision européenne, britannique, australienne, et disques DVD de zone 2 (PAL)."
        },
        {
            "fps": "29.970 FPS",
            "standard": "Télévision NTSC",
            "useCase": "Émissions télévisées en Amérique du Nord et au Japon, documentaires DVD et caméscopes."
        },
        {
            "fps": "30.000 FPS",
            "standard": "Vidéo Numérique Web",
            "useCase": "Clips vidéo pour internet, captures d'écran et séquences capturées sur smartphones."
        },
        {
            "fps": "50.000 FPS",
            "standard": "Haute Fréquence PAL",
            "useCase": "Retransmissions sportives européennes et diffusions télévisées en haute définition à 50 Hz."
        },
        {
            "fps": "59.940 / 60 FPS",
            "standard": "Haute Fréquence NTSC / Jeux Vidéo",
            "useCase": "Vidéos de jeux vidéo à 60 fps sur YouTube, sports rapides et caméras haute vitesse."
        }
    ],
    "mathTitle": "Les Mathématiques de la Conversion de Sous-Titres par Images",
    "mathSubtitle": "Comment les horodatages sont convertis avec précision en numéros d'images entiers.",
    "mathFormula": "Numéro d'Image = Math.round((Temps_en_Millisecondes / 1000) × FPS_de_la_Vidéo)",
    "mathExplanation": [
        "1. Décomposition Temporelle : Le convertisseur lit les temps de départ et de fin du sous-titre SRT (ex. 00:01:24,500) et calcule le temps total en millisecondes : (1 min × 60 000 ms) + (24 s × 1 000 ms) + 500 ms = 84 500 millisecondes (84,500 secondes).",
        "2. Multiplication par la Cadence : Le temps en secondes est multiplié par la cadence de la vidéo. À 25.000 FPS (PAL) : 84,500 × 25 = 2 112,5. L'arrondi à l'entier le plus proche donne l'Image de Départ 2113.",
        "3. Calcul de l'Image de Fin : Si la phrase se termine à 00:01:28,000 (88,000 secondes), le calcul donne : 88,000 × 25 = 2 200. Le bloc s'écrit donc {2113}{2200}.",
        "4. Sécurité de Durée Minimale : Si une réplique très courte aboutit au même numéro pour l'image de début et de fin, le convertisseur incrémente automatiquement l'image de fin d'une unité pour garantir son affichage pendant au moins une image entière."
    ],
    "exampleTitle": "Avant / Après : Exemple de Conversion de SRT vers MicroDVD et SubViewer",
    "exampleIntro": "Découvrez comment un sous-titre SubRip multiligne avec enrichissement basique est transposé en formats MicroDVD et SubViewer 2.0.",
    "exampleSrtInput": "1\n00:01:20,100 --> 00:01:23,450\nBienvenue à cette présentation !\nProfitez de ce film en haute définition.\n\n2\n00:01:24,500 --> 00:01:28,000\nCréé par <i>SRTConverters</i>.\nVisitez notre site dès aujourd'hui !",
    "exampleMicroDvdOutput": "{1}{1}25.000\n{2003}{2086}Bienvenue à cette présentation !|Profitez de ce film en haute définition.\n{2113}{2200}Créé par SRTConverters.|Visitez notre site dès aujourd'hui !",
    "exampleSubViewerOutput": "[INFORMATION]\n[TITLE]Converted with SRTConverters\n[AUTHOR]SRTConverters\n[SOURCE]\n[PRG]SRT to SUB Converter\n[FILEPATH]\n[DELAY]0\n[CD TRACK]0\n[COMMENT]Free Online Subtitle Converter\n[END INFORMATION]\n[SUBTITLE]\n[COLF]&H00FFFFFF,[STYLE]no,[SIZE]18,[FONT]Arial\n00:01:20.10,00:01:23.45\nBienvenue à cette présentation ![br]Profitez de ce film en haute définition.\n\n00:01:24.50,00:01:28.00\nCréé par SRTConverters.[br]Visitez notre site dès aujourd'hui !",
    "exampleExplanation": "Notez comment le format MicroDVD réunit les deux lignes avec une barre verticale (|) et remplace les millisecondes par des numéros d'images calculés à 25 FPS ({2003}{2086}). Le format SubViewer 2.0 conserve une référence temporelle en centièmes (00:01:20.10,00:01:23.45) et lie les lignes avec [br]. Dans les deux résultats, les balises HTML comme <i> sont éliminées pour éviter tout bogue sur les matériels plus anciens.",
    "formatsComparisonTitle": "MicroDVD vs. SubViewer vs. VobSub : Lever l'Ambigüité de l'Extension .SUB",
    "formatsComparisonSubtitle": "Pourquoi l'extension .sub peut désigner des types de fichiers radicalement distincts.",
    "formatsComparisonText": [
        "L'une des plus grandes sources de confusion en vidéo numérique réside dans le fait que trois technologies fondamentalement dissemblables utilisent la même extension '.sub' :",
        "1. MicroDVD (.sub) : Fichier texte léger dont les répliques sont indexées par des numéros d'images ({début}{fin}texte). C'est le format produit par notre outil et attendu par les lecteurs DVD de salon et platines DivX.",
        "2. SubViewer 2.0 (.sub) : Fichier texte lisible muni d'un en-tête [INFORMATION] et de temps en centièmes de seconde, également proposé par notre convertisseur.",
        "3. VobSub (.sub + .idx) : Format binaire de sous-titres extrait directement des disques DVD-Vidéo du commerce. Les fichiers VobSub ne contiennent PAS de texte modifiable, mais des images matricielles compressées (bitmaps) des sous-titres originaux, assorties d'un fichier index (.idx). Ils ne peuvent pas être ouverts dans un éditeur de texte sans recourir à une reconnaissance optique de caractères (OCR)."
    ],
    "ffmpegTitle": "Comment Convertir du SRT en SUB en Ligne de Commande avec FFmpeg",
    "ffmpegSubtitle": "Automatisez la conversion par lots de dossiers entiers de vidéos grâce au logiciel libre FFmpeg.",
    "ffmpegCommand": "ffmpeg -i input.srt -c:s microdvd -r 23.976 output.sub",
    "ffmpegExplanation": [
        "-i input.srt : Indique le fichier de sous-titres SubRip source.",
        "-c:s microdvd : Demande à FFmpeg d'encoder le flux de sous-titres au format MicroDVD .sub.",
        "-r 23.976 : Spécifie la cadence d'images utilisée pour calculer les numéros de frames (ajustez à 24, 25 ou 29.97 selon votre vidéo).",
        "output.sub : Nom et emplacement du fichier de sous-titres MicroDVD généré."
    ],
    "useCasesTitle": "5 Cas d'Usage Pratiques pour la Conversion SRT en SUB",
    "useCasesSubtitle": "Des contextes réels dans lesquels la conversion vers le format SUB s'avère indispensable.",
    "useCasesList": [
        {
            "title": "1. Gravure de Disques AVI/DivX pour Platines DVD de Salon",
            "description": "De nombreux lecteurs de salon équipés de fentes USB ou optiques lisent les fichiers AVI mais exigent impérativement un fichier .sub de même nom (ex. film.avi et film.sub) pour afficher les répliques."
        },
        {
            "title": "2. Écrans Multimédias et Systèmes Embarqués dans les Véhicules",
            "description": "Les tableaux de bord et lecteurs vidéo pour passagers arrière intègrent des micrologiciels épurés décodant le format MicroDVD .sub sans ralentir la lecture du film."
        },
        {
            "title": "3. Lecture Multimédia sur Consoles de Jeux Rétro",
            "description": "Les lecteurs alternatifs sur consoles de salon comme la Xbox Première Génération (XBMC) ou la PS2 (SMS Player) gèrent les sous-titres MicroDVD avec une consommation processeur négligeable."
        },
        {
            "title": "4. Création de Disques dans d'Anciens Logiciels d'Authoring",
            "description": "Les versions professionnelles de logiciels tels que DVD Maestro, Scenarist et Sonic DVDit prennent en charge les listes de texte indexées par images pour générer les pistes de sous-titrage DVD."
        },
        {
            "title": "5. Contrôle Image par Image en Montage Vidéo",
            "description": "Les monteurs vidéo travaillant sur bancs virtuels peuvent vérifier le numéro d'image précis d'un fichier MicroDVD sur leur tête de lecture pour aligner les apparitions de texte au millimètre."
        }
    ],
    "troubleshootTitle": "Résolution des Problèmes Courants lors de la Conversion SRT en SUB",
    "troubleshootSubtitle": "Conseils pratiques pour corriger les décalages audio, les textes écrasés et les erreurs d'encodage.",
    "troubleshootTips": [
        {
            "issue": "Les sous-titres se décalent au fur et à mesure que le film avance",
            "cause": "La cadence d'images (FPS) choisie lors de la conversion ne correspond pas à la cadence réelle de la vidéo (ex. conversion à 25 FPS pour une vidéo tournée à 23.976 FPS).",
            "solution": "Ouvrez la vidéo dans VLC Media Player, faites Ctrl+J pour afficher les Informations sur les codecs, repérez la Fréquence d'images réelle et reconvertissez votre fichier SRT avec cette cadence précise."
        },
        {
            "issue": "Les répliques sur plusieurs lignes se retrouvent entassées sur une seule ligne",
            "cause": "Le lecteur multimédia ne gère pas les sauts de ligne ou ne décode pas le séparateur barre verticale (|) propre à MicroDVD.",
            "solution": "Mettez à jour le micrologiciel de votre lecteur ou activez le mode SubViewer 2.0 qui fait appel aux balises explicites [br] pour les retours à la ligne."
        },
        {
            "issue": "Le lecteur DVD refuse d'ouvrir le fichier ou affiche une erreur de lecture",
            "cause": "Certains lecteurs de salon exigent une déclaration formelle de la cadence sur la toute première ligne pour initialiser leur décodeur.",
            "solution": "Veillez à cocher la case 'Inclure En-Tête FPS' lors de la conversion vers MicroDVD. Cela insère la ligne {1}{1}FPS en tête de fichier."
        },
        {
            "issue": "Les accents, caractères français et symboles s'affichent avec des hiéroglyphes (mojibake)",
            "cause": "Le fichier SRT source était encodé en UTF-8 alors que le lecteur matériel ne sait lire que les jeux de caractères ANSI ou Windows-1252.",
            "solution": "Ouvrez le fichier .sub obtenu dans le Bloc-notes de Windows, cliquez sur Fichier > Enregistrer sous et sélectionnez l'encodage ANSI ou UTF-8 selon le manuel de votre équipement."
        }
    ],
    "workflowTitle": "Protocole Professionnel pour les Sous-Titres sur Matériel Dédié",
    "workflowSubtitle": "Recommandations méthodologiques pour préparer, convertir et valider vos sous-titres sur tout matériel.",
    "workflowSteps": [
        "Étape 1 : Analyser la Vidéo Source — Ouvrez la vidéo dans VLC ou MediaInfo pour déterminer sa durée, son conteneur et sa cadence exacte en FPS (ex. 23.976 ou 25.000 FPS).",
        "Étape 2 : Nettoyer le Fichier SRT — Vérifiez que le fichier ne renferme pas d'horodatages superposés, de durées négatives ou de balises complexes qui bloqueraient les décodeurs matériels.",
        "Étape 3 : Convertir avec SRTConverters — Collez ou téléversez votre fichier, sélectionnez la cadence appropriée, laissez l'en-tête coché et téléchargez votre fichier .sub.",
        "Étape 4 : Nommer les Fichiers à l'Identique — Donnez au fichier .sub exactement le même nom qu'au fichier vidéo dans le même répertoire (ex. film.avi et film.sub).",
        "Étape 5 : Tester sur le Lecteur — Copiez les fichiers sur une clé USB formatée en FAT32, branchez-la sur votre appareil et contrôlez la synchronisation sur les 10 premières minutes."
    ],
    "conclusionTitle": "Synthèse et Points Essentiels",
    "conclusionText": [
        "La conversion de sous-titres SubRip (.srt) au format SUB (MicroDVD ou SubViewer) jette un pont précieux entre les fichiers vidéo récents et les platines matérielles classiques. En maîtrisant la cadence d'images par seconde et en appliquant des règles mathématiques rigoureuses, vous vous assurez d'une lecture harmonieuse sur vos téléviseurs et équipements de salon.",
        "SRTConverters met à votre disposition un convertisseur en ligne ultra-rapide, gratuit et 100% confidentiel, supportant l'ensemble des fréquences d'images courantes. Vos sous-titres seront prêts à être lus fidèlement sur tous vos appareils."
    ]
},
  de: {
    "introTitle": "Der vollständige Leitfaden zur Konvertierung von SRT-Untertiteln in das SUB-Format",
    "introSubtitle": "Erfahren Sie, wie Sie SubRip (.srt) Untertitel in framebasierte MicroDVD- und zeitbasierte SubViewer-Dateien (.sub) umwandeln, Bildwiederholraten (FPS) meistern und perfekte Synchronität auf Standalone-Playern und Heimkino-Geräten erzielen.",
    "introText": [
        "SubRip (.srt) gilt weltweit als De-facto-Standard für digitale Video-Untertitel. Das Format ist schlank, für Menschen lesbar und wird von nahezu jedem modernen Mediaplayer, Streaming-Dienst und Smart-TV nativ unterstützt. Wenn Sie jedoch mit älteren Standalone-DVD-Playern, DivX/XviD-zertifizierten Heimkino-Anlagen, Fahrzeug-Monitoren oder speziellen DVD-Authoring-Suiten arbeiten, stoßen Sie häufig auf Abspielgeräte, die zeitbasierte SRT-Dateien nicht interpretieren können und zwingend Untertitel mit der Dateiendung .sub voraussetzen.",
        "In der Untertitel-Technik steht die Dateiendung .sub primär für zwei grundverschiedene textbasierte Spezifikationen: MicroDVD (ein framebasiertes Untertitelformat, das ursprünglich für Video-Discs und DivX-Dateien entwickelt wurde) und SubViewer 2.0 (ein zeitbasiertes Format mit Hundertstelsekunden-Präzision). Im Gegensatz zu modernen Untertiteln, die Anzeigezeiten nach Stunden, Minuten, Sekunden und Millisekunden steuern, synchronisiert MicroDVD Dialogzeilen direkt mit den einzelnen gerenderten Videobildern (Frames).",
        "Da MicroDVD auf Bildnummern ({Start-Frame}{End-Frame}) anstelle absoluter Uhrzeiten aufbaut, erfordert die Konvertierung einer SRT-Datei in SUB eine exakte mathematische Umrechnung anhand der tatsächlichen Bildfrequenz (FPS) des Videos. Weicht die berechnete Bildrate vom Videomaterial ab, laufen Ton und Untertitel mit fortschreitender Spieldauer unweigerlich auseinander. Dieser umfassende Leitfaden erläutert den technischen Aufbau der SUB-Formate, die mathematische Frame-Umrechnung, FFmpeg-Terminalbefehle und bewährte Fehlerbehebungen."
    ],
    "whatIsTitle": "SRT und SUB verstehen: Zeitcodes vs. Frame-basierte Untertitel",
    "whatIsText": [
        "SubRip (.srt) entstand Ende der 1990er-Jahre zusammen mit Brains DVD-Ripping-Software, um Filmuntertitel in einem offenen, transportablen Format zu sichern. Eine SRT-Datei besteht aus einer fortlaufenden Ganzzahl-Nummerierung, Zeitstempeln für Beginn und Ende mit Millisekunden-Genauigkeit (HH:MM:SS,mmm), getrennt durch ' --> ', sowie Dialogzeilen und einer abschließenden Leerzeile. Das optische Styling, die Schriftart und Positionierung überlässt SRT vollständig dem Abspielgerät.",
        "MicroDVD (.sub) wurde zwischen 1999 und 2001 von Tias Software für den populären MicroDVD Player entwickelt und speziell für MPEG-4-, DivX- und AVI-Container optimiert. Statt Zeitangaben wird jede Einblendung über die exakte Bildnummer definiert, bei der sie erscheinen und wieder verschwinden soll: {Start-Frame}{End-Frame}Untertiteltext. Bei mehrzeiligem Text werden die Zeilen durch einen senkrechten Strich (|) getrennt. Optional kann eine MicroDVD-Datei in der ersten Zeile einen FPS-Header enthalten ({1}{1}25.000 oder {1}{1}23.976), der dem Abspielgerät die Soll-Bildrate mitteilt.",
        "SubViewer 2.0 (.sub) wurde als textbasierte Alternative mit einem Metadaten-Block ([INFORMATION] ... [SUBTITLE]) konzipiert, gefolgt von Zeitstempeln in Hundertstelsekunden (HH:MM:SS.cs,HH:MM:SS.cs) und Zeilenumbrüchen mit [br]. Obwohl auf DVD-Playern seltener als MicroDVD anzutreffen, erfreut sich SubViewer in klassischen Untertitel-Editoren breiter Unterstützung. Beide Formate sind unverzichtbar, um die Kompatibilität mit bewährter Hardware zu sichern."
    ],
    "whyConvertTitle": "6 zentrale Gründe für die Konvertierung von SRT in das SUB-Format",
    "whyConvertSubtitle": "Warum Cutter, Archivare und Heimkino-Liebhaber SubRip-Dateien in framebasierte SUB-Untertitel umwandeln.",
    "whyConvertReasons": [
        {
            "title": "1. Native Wiedergabe auf Standalone-DVD- und DivX-Playern",
            "description": "Viele ältere DVD-Player mit USB-Anschluss oder Daten-CD-Laufwerk spielen AVI-Filme problemlos ab, verweigern jedoch SRT-Dateien und verlangen zwingend gleichnamige MicroDVD .sub-Dateien."
        },
        {
            "title": "2. Kfz-Multimediasysteme und Fond-Bildschirme",
            "description": "Fahrzeug-Entertainment-Systeme laufen häufig auf schlanken Linux- oder Windows-CE-Firmwares, die Untertitel ausschließlich aus MicroDVD .sub-Dateien dekodieren können."
        },
        {
            "title": "3. Bildgenaue Untertitel-Synchronisation",
            "description": "Weil MicroDVD jeden Text direkt an ein bestimmtes Einzelbild koppelt, bleibt die Einblendung selbst beim Spulen, bei Zeitlupen oder beim bildgenauen Schnitt absolut fest verankert."
        },
        {
            "title": "4. Kompatibilität mit Retro-Konsolen und Homebrew-Mediaplayern",
            "description": "Klassische Mediaplayer auf Konsolen wie der originalen Xbox (XBMC), der PlayStation 2 (SMS Player) oder der Nintendo Wii rendern schlanke MicroDVD-Dateien ohne Ruckler oder Performance-Einbrüche."
        },
        {
            "title": "5. Platzsparende mehrzeilige Formatierung mit Trennstrichen",
            "description": "MicroDVD fasst mehrzeilige Dialoge mithilfe des Pipe-Symbols (|) in einer einzigen Textzeile zusammen ({120}{250}Zeile 1|Zeile 2), was Darstellungsfehler auf einfacher Hardware verhindert."
        },
        {
            "title": "6. 100% Datenschutz durch lokale Browser-Verarbeitung",
            "description": "Unser Online-Konverter verarbeitet Ihre Untertiteldateien vollständig lokal im Arbeitsspeicher Ihres Browsers. Keine Skripte, Texte oder Dialoge werden auf fremde Server übertragen."
        }
    ],
    "howToTitle": "Schritt für Schritt: SRT online in SUB umwandeln",
    "howToSubtitle": "Folgen Sie dieser kurzen Anleitung, um Ihre SubRip-Dateien in wenigen Sekunden in framegenaue SUB-Dateien zu überführen.",
    "howToSteps": [
        {
            "step": "1",
            "title": "SRT-Datei hochladen oder Text einfügen",
            "description": "Ziehen Sie Ihre .srt-Datei per Drag & Drop in den Upload-Bereich oder fügen Sie den Inhalt Ihrer Untertitel direkt in das linke Eingabefeld ein."
        },
        {
            "step": "2",
            "title": "Zielformat festlegen (MicroDVD oder SubViewer)",
            "description": "Wählen Sie MicroDVD (.sub) für framebasierte Wiedergabe auf DVD/DivX-Geräten oder SubViewer 2.0 (.sub) für Zeitstempel mit Hundertstelsekunden."
        },
        {
            "step": "3",
            "title": "Passende Video-Bildfrequenz (FPS) auswählen",
            "description": "Wählen Sie für MicroDVD die genaue Bildwiederholrate Ihres Videos (z. B. 23.976, 24, 25 oder 29.97 FPS), um Asynchronitäten zu verhindern."
        },
        {
            "step": "4",
            "title": "Konvertierte .SUB-Datei herunterladen",
            "description": "Klicken Sie auf .SUB herunterladen, um die Datei sofort abzuspeichern, oder kopieren Sie das Ergebnis direkt in Ihre Zwischenablage."
        }
    ],
    "differenceTitle": "SRT vs. MicroDVD SUB vs. SubViewer SUB: Technischer Vergleich in 10 Punkten",
    "differenceSubtitle": "Eine Gegenüberstellung der Zeitmodelle, Zeilentrenner, Dateiköpfe und Hardware-Kompatibilität.",
    "differenceTable": [
        {
            "feature": "Timing-Mechanismus",
            "srt": "Zeitbasiert (Millisekunden: HH:MM:SS,mmm)",
            "microdvd": "Framebasiert (Bildnummern: {Start}{Ende})",
            "subviewer": "Zeitbasiert (Hundertstelsekunden: HH:MM:SS.cs)"
        },
        {
            "feature": "FPS-Abhängigkeit",
            "srt": "Keine (Völlig unabhängig von der Bildrate)",
            "microdvd": "Hoch (Erfordert exakte Video-FPS)",
            "subviewer": "Keine (Absolute Uhrzeit)"
        },
        {
            "feature": "Mehrzeilen-Trenner",
            "srt": "Standard-Zeilenumbruch (\\n)",
            "microdvd": "Senkrechter Strich (|)",
            "subviewer": "Explizites Tag ([br])"
        },
        {
            "feature": "Dateikopf (Header)",
            "srt": "Kein Header (Beginnt mit Untertitel 1)",
            "microdvd": "Optionaler FPS-Header ({1}{1}25.000)",
            "subviewer": "Erforderlicher Metadatenblock ([INFORMATION])"
        },
        {
            "feature": "Zählindex (Counter)",
            "srt": "Pflicht-Ganzzahl (1, 2, 3...)",
            "microdvd": "Kein Zähler (In Frame-Tags enthalten)",
            "subviewer": "Kein Zähler (Nur Zeitstempel-Zeile)"
        },
        {
            "feature": "HTML-Formatierung",
            "srt": "Basis-Tags (<i>, <b>, <u>, <font>)",
            "microdvd": "Eigene Tags ({Y:i}, {Y:b}) oder Klartext",
            "subviewer": "Eingeschränkt oder Klartext"
        },
        {
            "feature": "Smart-TVs und Webplayer",
            "srt": "Universell (100% native Unterstützung)",
            "microdvd": "Eingeschränkt (VLC, MPV oder Spezialplayer)",
            "subviewer": "Sehr eingeschränkt (Nur alte Software)"
        },
        {
            "feature": "Hardware-DVD/DivX-Player",
            "srt": "Oft fehlerhaft auf alter Firmware",
            "microdvd": "Breite native Hardware-Unterstützung",
            "subviewer": "Wird von manchen DivX-Chipsätzen erkannt"
        },
        {
            "feature": "Dateigröße im Schnitt",
            "srt": "Gering (~40 KB pro Spielfilm)",
            "microdvd": "Sehr kompakt (~25 KB pro Spielfilm)",
            "subviewer": "Moderat (~45 KB mit Kopfzeilen)"
        },
        {
            "feature": "Haupteinsatzzweck",
            "srt": "Web-Video, Streaming, YouTube, moderne TVs",
            "microdvd": "Hardware-Player, Retro-Konsolen, Kfz",
            "subviewer": "Desktop-Editoren und Medien-Archivierung"
        }
    ],
    "fpsGuideTitle": "Leitfaden zu Bildraten (FPS): Zeitversatz zuverlässig verhindern",
    "fpsGuideSubtitle": "Die Wahl der richtigen Bildrate ist der entscheidende Faktor bei jeder MicroDVD-Konvertierung.",
    "fpsGuideText": [
        "Da MicroDVD die Anzeigedauer über gerenderte Einzelbilder bestimmt, führt eine falsche Bildrate bei der Umrechnung zu einem stetig wachsenden Zeitversatz. Ist die gewählte Bildrate höher als die des Videos, erscheint der Untertitel zu spät. Ist sie niedriger, wird der Text zu früh eingeblendet.",
        "Ein Spielfilm mit 23.976 FPS (Kinofilm / US-Blu-ray), der versehentlich mit 25.000 FPS konvertiert wird, weicht pro Minute um rund 2,5 Sekunden ab. Nach 20 Minuten beträgt der Versatz bereits fast eine Minute, sodass die Untertitel unbrauchbar werden.",
        "Die nachfolgende Übersicht zeigt die gängigen Bildraten in Film und Fernsehen. Prüfen Sie Ihr Video stets vorab mit dem VLC Media Player (Strg+J) oder MediaInfo."
    ],
    "fpsTable": [
        {
            "fps": "23.976 FPS",
            "standard": "NTSC Film / 24p Kino",
            "useCase": "Internationale Kinofilme, Anime-Blu-rays und Serien auf Streaming-Portalen."
        },
        {
            "fps": "24.000 FPS",
            "standard": "DCI Digital Cinema",
            "useCase": "Digitale Kinoprojektionen, DCP-Vorlagen und europäische Kinoproduktionen."
        },
        {
            "fps": "25.000 FPS",
            "standard": "PAL / SECAM TV",
            "useCase": "Europäisches Fernsehen, britische und australische Sendungen sowie PAL-DVDs."
        },
        {
            "fps": "29.970 FPS",
            "standard": "NTSC Fernsehübertragung",
            "useCase": "US-amerikanisches und japanisches Fernsehen, Dokumentar-DVDs und Camcorder."
        },
        {
            "fps": "30.000 FPS",
            "standard": "Web-Video / Digitalmedien",
            "useCase": "Internet-Videoclips, Bildschirmaufnahmen und Handyvideos."
        },
        {
            "fps": "50.000 FPS",
            "standard": "PAL High Frame Rate",
            "useCase": "Europäische Sportübertragungen und hochauflösende Live-Fernsehsendungen."
        },
        {
            "fps": "59.940 / 60 FPS",
            "standard": "NTSC High Frame Rate / Gaming",
            "useCase": "60fps-Gaming-Videos auf YouTube, Actionsport und Zeitlupenaufnahmen."
        }
    ],
    "mathTitle": "Mathematik der framebasierten Untertitel-Umrechnung",
    "mathSubtitle": "Wie Zeitstempel exakt in ganzzahlige Bildnummern umgerechnet werden.",
    "mathFormula": "Bildnummer = Math.round((Zeit_in_Millisekunden / 1000) × Video_FPS)",
    "mathExplanation": [
        "1. Zeitwerte zerlegen: Der Konverter liest Start- und Endzeit der SRT-Zeile (z. B. 00:01:24,500) und berechnet die Gesamt-Millisekunden: (1 min × 60.000 ms) + (24 s × 1.000 ms) + 500 ms = 84.500 Millisekunden (84,500 Sekunden).",
        "2. Multiplikation mit FPS: Die Sekunden werden mit der Bildrate multipliziert. Bei 25.000 FPS (PAL): 84,500 × 25 = 2.112,5. Durch Rundung ergibt sich Start-Frame 2113.",
        "3. End-Frame bestimmen: Endet der Satz bei 00:01:28,000 (88,000 Sekunden), folgt: 88,000 × 25 = 2.200. Der Cue lautet {2113}{2200}.",
        "4. Mindestdauer sichern: Führt ein sehr kurzer Untertitel durch Rundung zu identischen Start- und Endframes, erhöht der Konverter das End-Frame automatisch um 1."
    ],
    "exampleTitle": "Vorher & Nachher: Beispiel einer SRT zu MicroDVD und SubViewer Konvertierung",
    "exampleIntro": "Sehen Sie, wie ein SubRip-Eintrag mit Zeilenumbruch und Formatierung in MicroDVD und SubViewer 2.0 übersetzt wird.",
    "exampleSrtInput": "1\n00:01:20,100 --> 00:01:23,450\nHerzlich willkommen zur Präsentation!\nGenießen Sie diesen Film in HD.\n\n2\n00:01:24,500 --> 00:01:28,000\nErstellt von <i>SRTConverters</i>.\nBesuchen Sie uns online!",
    "exampleMicroDvdOutput": "{1}{1}25.000\n{2003}{2086}Herzlich willkommen zur Präsentation!|Genießen Sie diesen Film in HD.\n{2113}{2200}Erstellt von SRTConverters.|Besuchen Sie uns online!",
    "exampleSubViewerOutput": "[INFORMATION]\n[TITLE]Converted with SRTConverters\n[AUTHOR]SRTConverters\n[SOURCE]\n[PRG]SRT to SUB Converter\n[FILEPATH]\n[DELAY]0\n[CD TRACK]0\n[COMMENT]Free Online Subtitle Converter\n[END INFORMATION]\n[SUBTITLE]\n[COLF]&H00FFFFFF,[STYLE]no,[SIZE]18,[FONT]Arial\n00:01:20.10,00:01:23.45\nHerzlich willkommen zur Präsentation![br]Genießen Sie diesen Film in HD.\n\n00:01:24.50,00:01:28.00\nErstellt von SRTConverters.[br]Besuchen Sie uns online!",
    "exampleExplanation": "Das MicroDVD-Format verbindet beide Textzeilen mit einem Trennstrich (|) und ersetzt Millisekunden durch Frame-Werte bei 25 FPS ({2003}{2086}). SubViewer 2.0 speichert Hundertstelsekunden (00:01:20.10,00:01:23.45) und nutzt [br]. HTML-Tags wie <i> werden in beiden Formaten entfernt, um Anzeigefehler zu vermeiden.",
    "formatsComparisonTitle": "MicroDVD vs. SubViewer vs. VobSub: Die Mehrdeutigkeit von .SUB verstehen",
    "formatsComparisonSubtitle": "Warum die Dateiendung .sub für völlig verschiedene Dateitypen steht.",
    "formatsComparisonText": [
        "Ein häufiger Irrtum bei digitalen Videoformaten ist, dass drei grundverschiedene Technologien dieselbe Dateiendung '.sub' nutzen:",
        "1. MicroDVD (.sub): Schlanke Textdatei mit bildbasierten Zeitmarken ({Start}{Ende}Text). Dies ist das von unserem Tool erzeugte Format für Standalone-DVD-Player und DivX-Geräte.",
        "2. SubViewer 2.0 (.sub): Strukturierte Textdatei mit [INFORMATION]-Header und Hundertstelsekunden, die ebenfalls von unserem Konverter unterstützt wird.",
        "3. VobSub (.sub + .idx): Binäres Format aus kommerziellen DVD-Videospuren. VobSub-Dateien enthalten KEINEN editierbaren Text, sondern komprimierte 2-Bit-Grafikbilder der Untertitel nebst Index-Datei (.idx). Sie lassen sich nur per OCR-Texterkennung in Text umwandeln."
    ],
    "ffmpegTitle": "SRT mit der FFmpeg-Kommandozeile in SUB umwandeln",
    "ffmpegSubtitle": "Automatisieren Sie die Konvertierung kompletter Filmordner über das kostenlose Tool FFmpeg.",
    "ffmpegCommand": "ffmpeg -i input.srt -c:s microdvd -r 23.976 output.sub",
    "ffmpegExplanation": [
        "-i input.srt: Bestimmt die SubRip-Eingangsdatei.",
        "-c:s microdvd: Weist FFmpeg an, den Untertitelstrom in das MicroDVD .sub-Format zu kodieren.",
        "-r 23.976: Gibt die Ziel-Bildrate für die Frame-Berechnung vor (anpassen auf 24, 25 oder 29.97 je nach Videospur).",
        "output.sub: Pfad und Dateiname der erzeugten MicroDVD-Datei."
    ],
    "useCasesTitle": "5 praktische Einsatzgebiete für die SRT in SUB Konvertierung",
    "useCasesSubtitle": "Klassische Szenarien, in denen framegenaue SUB-Dateien benötigt werden.",
    "useCasesList": [
        {
            "title": "1. Brennen von AVI/DivX-Discs für Standalone-DVD-Player",
            "description": "Viele DVD-Geräte im Wohnzimmer spielen AVI-Dateien über USB ab, benötigen zur Darstellung von Untertiteln jedoch eine gleichnamige .sub-Datei im selben Verzeichnis (z. B. film.avi und film.sub)."
        },
        {
            "title": "2. Kfz-Entertainment und Fond-Monitore",
            "description": "Bildschirme in Fahrzeugen nutzen ressourcensparende Firmwares, die MicroDVD .sub-Dateien ohne Ruckler oder Systemabstürze verarbeiten."
        },
        {
            "title": "3. Mediacenter auf Retro-Konsolen",
            "description": "Homebrew-Mediaplayer auf Konsolen wie der Xbox Classic (XBMC) oder PS2 (SMS) stellen MicroDVD-Untertitel extrem rechensparend dar."
        },
        {
            "title": "4. Video-Authoring in traditionellen Produktions-Suiten",
            "description": "Klassische Authoring-Programme wie DVD Maestro, Scenarist oder Sonic DVDit unterstützen framebasierte Textlisten beim Erstellen professioneller DVD-Spuren."
        },
        {
            "title": "5. Einzelbild-Abgleich im professionellen Videoschnitt",
            "description": "Cutter können die Bildnummern einer MicroDVD-Datei direkt mit dem Playhead ihrer Schnittsoftware abgleichen, um Textwechsel exakt auf harte Schnitte zu legen."
        }
    ],
    "troubleshootTitle": "Fehlerbehebung bei der SRT in SUB Konvertierung",
    "troubleshootSubtitle": "Schnelle Lösungen für Zeitversatz, unschöne Zeilenumbrüche und Zeichensatzfehler.",
    "troubleshootTips": [
        {
            "issue": "Untertitel laufen im Filmverlauf immer weiter auseinander",
            "cause": "Die gewählte Bildrate (FPS) stimmt nicht mit der Videospur überein (z. B. 25 FPS statt 23.976 FPS gewählt).",
            "solution": "Öffnen Sie das Video in VLC, drücken Sie Strg+J für die Codec-Informationen, prüfen Sie die Bildwiederholrate und konvertieren Sie die SRT-Datei mit dem exakten Wert neu."
        },
        {
            "issue": "Mehrzeilige Untertitel kleben in einer einzigen langen Zeile zusammen",
            "cause": "Der Player interpretiert den senkrechten Trennstrich (|) des MicroDVD-Formats nicht als Zeilenumbruch.",
            "solution": "Aktualisieren Sie die Player-Firmware oder wechseln Sie in das Format SubViewer 2.0, das Zeilenumbrüche über explizite [br]-Tags steuert."
        },
        {
            "issue": "Der DVD-Player erkennt die Datei nicht oder meldet einen Lesefehler",
            "cause": "Ältere Geräte verlangen zwingend die Angabe der Bildrate in der allerersten Zeile der Datei.",
            "solution": "Aktivieren Sie die Option 'FPS-Header einfügen'. Dadurch wird die Kopfzeile {1}{1}FPS automatisch an den Dateianfang gesetzt."
        },
        {
            "issue": "Umlaute und Sonderzeichen werden fehlerhaft dargestellt (Kryptische Zeichen)",
            "cause": "Die SRT-Datei war in UTF-8 kodiert, während der Player ausschließlich ANSI oder Windows-1252 versteht.",
            "solution": "Öffnen Sie die erzeugte .sub-Datei im Windows-Editor, wählen Sie Datei > Speichern unter und stellen Sie die Kodierung passend zu Ihrem Player auf ANSI oder UTF-8."
        }
    ],
    "workflowTitle": "Professioneller Arbeitsablauf für Untertitel auf Hardware-Geräten",
    "workflowSubtitle": "Bewährte Schritte zum fehlerfreien Vorbereiten und Testen von Untertiteln.",
    "workflowSteps": [
        "Schritt 1: Video analysieren — Videodatei in VLC oder MediaInfo öffnen, um Laufzeit, Auflösung und exakte Bildrate (z. B. 23.976 oder 25.000 FPS) zu ermitteln.",
        "Schritt 2: SRT-Datei prüfen — Sicherstellen, dass keine überlappenden Zeiten oder störende HTML-Tags enthalten sind, die alte Decoder irritieren.",
        "Schritt 3: Konvertieren bei SRTConverters — Datei hochladen, passende FPS wählen, FPS-Header aktiviert lassen und .sub-Datei herunterladen.",
        "Schritt 4: Identisch benennen — Der .sub-Datei exakt denselben Dateinamen wie dem Video im gleichen Ordner geben (z. B. film.avi und film.sub).",
        "Schritt 5: Testlauf starten — Dateien auf einen FAT32-formatierten USB-Stick kopieren, am Player anschließen und die ersten 10 Minuten auf Synchronität prüfen."
    ],
    "conclusionTitle": "Zusammenfassung & Fazit",
    "conclusionText": [
        "Die Konvertierung von SubRip (.srt) in das SUB-Format (MicroDVD oder SubViewer) schließt die Lücke zwischen modernen Videodateien und bewährten Hardware-Playern. Wer die Funktionsweise von Einzelbildraten versteht und auf mathematische Genauigkeit achtet, genießt perfekt synchronisierte Filmabende auf DVD-Geräten und im Auto.",
        "SRTConverters bietet Ihnen ein blitzschnelles, kostenloses und privates Online-Tool mit umfassender Bildraten-Unterstützung. So sind Ihre Untertitel im Handumdrehen fit für jedes Display."
    ]
},
  id: {
    "introTitle": "Panduan Lengkap Mengonversi Subtitle SRT ke Format SUB",
    "introSubtitle": "Pelajari cara mengubah subtitle SubRip (.srt) ke format MicroDVD dan SubViewer (.sub) berbasis frame, kuasai pengaturan frame rate (FPS), dan capai sinkronisasi audio-visual sempurna pada pemutar DVD jadul dan layar multimedia.",
    "introText": [
        "SubRip (.srt) secara universal diakui sebagai standar utama untuk subtitle video digital. Format teks ini ringan, mudah dibaca manusia, dan didukung secara luas oleh hampir semua pemutar media modern, platform streaming, dan Smart TV. Namun, ketika Anda memutar video di pemutar DVD standalone generasi lama, sistem home theater bersertifikat DivX/XviD, head unit audio mobil, atau software authoring video lawas, Anda akan sering menjumpai perangkat yang tidak bisa membaca file SRT berbasis waktu jam dan mewajibkan file subtitle berekstensi .sub.",
        "Dalam teknologi subtitle, ekstensi .sub merujuk pada dua format teks yang sangat berbeda: MicroDVD (format berbasis nomor frame video yang dirancang untuk disc video dan file DivX) serta SubViewer 2.0 (format berbasis waktu seperseratus detik). Berbeda dengan subtitle modern yang mengatur interval kemunculan menggunakan jam, menit, detik, dan milidetik, subtitle MicroDVD menyinkronkan dialog langsung dengan setiap frame video yang ditampilkan pada layar.",
        "Karena MicroDVD menggunakan nomor frame ({frame_awal}{frame_akhir}) alih-alih waktu jam absolut, mengonversi file SRT ke SUB memerlukan perhitungan matematika yang tepat berdasarkan frame rate (FPS) video yang bersangkutan. Ketidakcocokan antara perhitungan frame dengan video asli akan menyebabkan subtitle bergeser semakin cepat atau terlambat seiring berjalannya film. Panduan komprehensif ini mengupas tuntas arsitektur format SUB, perhitungan matematika FPS, perintah FFmpeg, dan solusi praktis untuk kendala pemutaran."
    ],
    "whatIsTitle": "Memahami SRT dan SUB: Kode Waktu Modern vs. Subtitle Berbasis Frame",
    "whatIsText": [
        "SubRip (.srt) dikembangkan pada akhir tahun 1990-an bersamaan dengan aplikasi DVD ripper buatan Brain untuk menyimpan subtitle dalam format terbuka dan portabel. File SRT terdiri atas nomor urut bilangan bulat, stempel waktu awal dan akhir yang dipisahkan oleh tanda ' --> ' dalam milidetik (HH:MM:SS,mmm), serta baris teks dialog yang diakhiri baris kosong. Format SRT menyerahkan seluruh gaya visual, font, dan posisi teks kepada aplikasi pemutar.",
        "MicroDVD (.sub), dikembangkan antara tahun 1999 dan 2001 oleh Tias Software untuk pemutar MicroDVD, dirancang khusus untuk wadah video MPEG-4, DivX, dan AVI. Alih-alih stempel waktu, setiap teks subtitle ditentukan oleh nomor frame spesifik saat teks harus muncul dan hilang: {frame_awal}{frame_akhir}Teks subtitle. Jika teks memiliki lebih dari satu baris, baris tersebut dipisahkan dengan tanda pipa vertikal (|). File MicroDVD juga dapat memuat baris header opsional ({1}{1}25.000 atau {1}{1}23.976) untuk memberitahukan frame rate ke pemutar media.",
        "SubViewer 2.0 (.sub) dirancang sebagai alternatif teks yang menyertakan blok metadata awal ([INFORMATION] ... [SUBTITLE]) diikuti oleh penanda waktu seperseratus detik (HH:MM:SS.cs,HH:MM:SS.cs) dan pemisah baris [br]. Walaupun lebih jarang ditemui di pemutar DVD fisik dibanding MicroDVD, SubViewer didukung luas oleh editor subtitle klasik. Kedua format memegang peranan krusial untuk menjaga kompatibilitas dengan perangkat keras lawas."
    ],
    "whyConvertTitle": "6 Alasan Utama Mengonversi Subtitle SRT ke Format SUB",
    "whyConvertSubtitle": "Mengapa editor video, pengarsip media, dan pecinta film mengonversi teks SubRip ke file SUB berbasis frame.",
    "whyConvertReasons": [
        {
            "title": "1. Pemutaran Lancar pada Pemutar DVD & DivX Standalone",
            "description": "Banyak pemutar DVD rumahan dengan port USB atau slot cakram data dapat membaca video AVI namun tidak mengenali SRT, sehingga mewajibkan file MicroDVD .sub dengan nama yang sama."
        },
        {
            "title": "2. Layar Multimedia Dashboard dan Head Unit Mobil",
            "description": "Sistem audio mobil dan layar monitor penumpang di kursi belakang kerap menggunakan firmware ringan Linux atau Windows CE yang hanya membaca subtitle MicroDVD .sub."
        },
        {
            "title": "3. Sinkronisasi Terkunci Persis pada Frame Video",
            "description": "Karena MicroDVD mengaitkan setiap baris teks pada frame video tertentu, teks subtitle tetap tepat posisinya bahkan saat video dipercepat, diperlambat, atau diedit per frame."
        },
        {
            "title": "4. Kompatibel dengan Konsol Game Jadul & Pemutar Homebrew",
            "description": "Aplikasi media player pada konsol seperti Xbox klasik (XBMC 1.0), PS2 (SMS Player), dan Nintendo Wii memproses subtitle MicroDVD secara efisien tanpa menurunkan performa pemutaran."
        },
        {
            "title": "5. Format Multibaris Ringkas dengan Karakter Pipa",
            "description": "MicroDVD menggabungkan teks multibaris menjadi satu baris terstruktur menggunakan pemisah pipa ({120}{250}Baris 1|Baris 2), menghemat ukuran file dan menghindari eror pemisah baris."
        },
        {
            "title": "6. Privasi 100% Terjaga di Browser",
            "description": "Konverter kami memproses file Anda sepenuhnya di memori browser lokal dengan JavaScript. Tidak ada file video atau teks dialog yang dikirim ke server cloud eksternal."
        }
    ],
    "howToTitle": "Langkah demi Langkah: Cara Mengonversi SRT ke SUB Online",
    "howToSubtitle": "Ikuti tahapan mudah ini untuk mengubah subtitle SubRip SRT menjadi file SUB berbasis frame yang rapi dalam hitungan detik.",
    "howToSteps": [
        {
            "step": "1",
            "title": "Unggah atau Tempel Konten SRT",
            "description": "Tarik dan lepas file .srt Anda ke area unggah atau salin teks subtitle SubRip dan tempelkan langsung ke editor sebelah kiri."
        },
        {
            "step": "2",
            "title": "Pilih Format Tujuan (MicroDVD atau SubViewer)",
            "description": "Pilih MicroDVD (.sub) untuk pemutaran berbasis frame pada perangkat DVD/DivX atau SubViewer 2.0 (.sub) untuk penanda waktu seperseratus detik."
        },
        {
            "step": "3",
            "title": "Tentukan Frame Rate (FPS) Video yang Sesuai",
            "description": "Saat mengonversi ke MicroDVD, pilih frame rate video Anda yang sebenarnya (misal 23.976, 24, 25, atau 29.97 FPS) agar sinkronisasi dialog tidak meleset."
        },
        {
            "step": "4",
            "title": "Unduh File .SUB Hasil Konversi",
            "description": "Klik tombol Unduh .SUB untuk menyimpan file ke perangkat Anda atau salin teks hasil konversi ke papan klip untuk langsung dicoba."
        }
    ],
    "differenceTitle": "SRT vs. MicroDVD SUB vs. SubViewer SUB: Perbandingan Teknis 10 Poin",
    "differenceSubtitle": "Perbandingan mendalam mengenai sistem penentuan waktu, pemisah baris, susunan header, dan dukungan perangkat keras.",
    "differenceTable": [
        {
            "feature": "Mekanisme Waktu",
            "srt": "Berbasis waktu (Milidetik: HH:MM:SS,mmm)",
            "microdvd": "Berbasis frame (Nomor: {awal}{akhir})",
            "subviewer": "Berbasis waktu (Centisecond: HH:MM:SS.cs)"
        },
        {
            "feature": "Ketergantungan FPS",
            "srt": "Tidak ada (Bebas dari frame rate video)",
            "microdvd": "Tinggi (Wajib memasukkan FPS video yang tepat)",
            "subviewer": "Tidak ada (Berdasarkan jam absolut)"
        },
        {
            "feature": "Pemisah Multibaris",
            "srt": "Pindah baris standar (\\n)",
            "microdvd": "Karakter pipa vertikal (|)",
            "subviewer": "Tag teks eksplisit ([br])"
        },
        {
            "feature": "Header File",
            "srt": "Tanpa header (Langsung mulai dari cue 1)",
            "microdvd": "Header FPS opsional ({1}{1}25.000)",
            "subviewer": "Blok metadata wajib ([INFORMATION])"
        },
        {
            "feature": "Penomoran Urut",
            "srt": "Wajib angka bulat urut (1, 2, 3...)",
            "microdvd": "Tanpa nomor urut (Implisit pada frame)",
            "subviewer": "Tanpa nomor urut (Hanya penanda waktu)"
        },
        {
            "feature": "Dukungan Tag HTML",
            "srt": "Tag dasar (<i>, <b>, <u>, <font>)",
            "microdvd": "Tag bawaan ({Y:i}, {Y:b}) atau teks polos",
            "subviewer": "Terbatas atau teks polos"
        },
        {
            "feature": "Smart TV & Pemutar Web",
            "srt": "Universal (100% didukung bawaan)",
            "microdvd": "Terbatas (Perlu VLC, MPV, atau app jadul)",
            "subviewer": "Sangat terbatas (Hanya software lawas)"
        },
        {
            "feature": "Pemutar DVD/DivX Fisik",
            "srt": "Sering bermasalah di firmware lawas",
            "microdvd": "Dukungan native hardware menyeluruh",
            "subviewer": "Didukung pada chipset DivX tertentu"
        },
        {
            "feature": "Ukuran Rata-Rata File",
            "srt": "Kecil (~40 KB per film)",
            "microdvd": "Sangat hemat (~25 KB per film)",
            "subviewer": "Sedang (~45 KB beserta header)"
        },
        {
            "feature": "Tujuan Utama Pemakaian",
            "srt": "Video web, streaming, YouTube, Smart TV",
            "microdvd": "Pemutar DVD fisik, konsol retro, mobil",
            "subviewer": "Editing desktop klasik dan arsip"
        }
    ],
    "fpsGuideTitle": "Panduan Frame Rate (FPS): Cara Mencegah Subtitle Bergeser",
    "fpsGuideSubtitle": "Memilih frame rate yang tepat adalah faktor paling krusial dalam konversi subtitle MicroDVD.",
    "fpsGuideText": [
        "Karena MicroDVD menentukan waktu tayang subtitle berdasarkan hitungan frame video, kesalahan memasukkan nilai FPS akan mengakibatkan subtitle bergeser secara progresif. Jika FPS yang dipilih lebih tinggi daripada video aslinya, subtitle akan muncul terlambat. Sebaliknya, jika FPS yang dipilih lebih rendah, subtitle akan muncul mendahului suara dialog.",
        "Sebagai contoh, film dengan 23.976 FPS (film bioskop standar / Blu-ray Amerika) yang dikonversi dengan setelan 25.000 FPS akan mengalami selisih sekitar 2,5 detik per menit. Setelah 20 menit berjalan, subtitle sudah bergeser hampir satu menit penuh sehingga film menjadi mustahil ditonton dengan nyaman.",
        "Tabel berikut merangkum standar frame rate yang umum dipakai di industri film dan pertelevisian. Selalu periksa file video Anda terlebih dahulu dengan VLC Media Player (Ctrl+J) atau MediaInfo sebelum melakukan konversi."
    ],
    "fpsTable": [
        {
            "fps": "23.976 FPS",
            "standard": "Film Bioskop NTSC / Standar 24p",
            "useCase": "Film layar lebar komersial, Blu-ray anime Jepang, dan serial drama streaming."
        },
        {
            "fps": "24.000 FPS",
            "standard": "Sinema Digital DCI",
            "useCase": "Proyeksi bioskop digital, master DCP, dan film produksi perfilman Eropa."
        },
        {
            "fps": "25.000 FPS",
            "standard": "Siaran PAL / SECAM",
            "useCase": "Televisi Eropa, Inggris, Australia, Indonesia, dan keping DVD standar PAL."
        },
        {
            "fps": "29.970 FPS",
            "standard": "Siaran Televisi NTSC",
            "useCase": "Siaran TV di Amerika Utara dan Jepang, DVD dokumenter, dan kamera handycam."
        },
        {
            "fps": "30.000 FPS",
            "standard": "Video Digital Internet",
            "useCase": "Video lawas di web, rekaman layar komputer, dan rekaman kamera ponsel cerdas."
        },
        {
            "fps": "50.000 FPS",
            "standard": "PAL High Frame Rate",
            "useCase": "Siaran olahraga di Eropa dan siaran langsung televisi berdefinisi tinggi 50 Hz."
        },
        {
            "fps": "59.940 / 60 FPS",
            "standard": "NTSC High Frame Rate / Game",
            "useCase": "Video rekaman game 60 fps di YouTube, olahraga aksi, dan kamera slow-motion."
        }
    ],
    "mathTitle": "Matematika di Balik Konversi Subtitle Berbasis Frame",
    "mathSubtitle": "Bagaimana stempel waktu jam diubah secara akurat menjadi nomor frame bulat.",
    "mathFormula": "Nomor Frame = Math.round((Waktu_dalam_Milidetik / 1000) × FPS_Video)",
    "mathExplanation": [
        "1. Pemecahan Waktu: Konverter membaca stempel waktu awal dan akhir pada teks SRT (misal 00:01:24,500) lalu menghitung total milidetik: (1 menit × 60.000 ms) + (24 detik × 1.000 ms) + 500 ms = 84.500 milidetik (84,500 detik).",
        "2. Perkalian dengan Nilai FPS: Waktu dalam detik dikalikan dengan frame rate video. Pada 25.000 FPS (PAL): 84,500 × 25 = 2.112,5. Pembulatan ke bilangan bulat terdekat menghasilkan Frame Awal 2113.",
        "3. Hitungan Frame Akhir: Jika dialog berakhir pada 00:01:28,000 (88,000 detik), hitungannya adalah: 88,000 × 25 = 2.200. Baris subtitle diformat sebagai {2113}{2200}.",
        "4. Pengaman Durasi Minimal: Jika subtitle yang sangat pendek menghasilkan frame awal dan akhir yang sama akibat pembulatan, konverter secara otomatis menambah 1 frame pada akhir agar teks sempat tampil setidaknya selama satu frame."
    ],
    "exampleTitle": "Sebelum & Sesudah: Contoh Konversi SRT ke MicroDVD dan SubViewer",
    "exampleIntro": "Lihat bagaimana teks SubRip dengan pemisah baris dan format dasar diubah secara rapi ke format MicroDVD dan SubViewer 2.0.",
    "exampleSrtInput": "1\n00:01:20,100 --> 00:01:23,450\nSelamat datang di presentasi kami!\nNikmati film berdefinisi tinggi ini.\n\n2\n00:01:24,500 --> 00:01:28,000\nDibuat oleh <i>SRTConverters</i>.\nKunjungi situs web kami hari ini!",
    "exampleMicroDvdOutput": "{1}{1}25.000\n{2003}{2086}Selamat datang di presentasi kami!|Nikmati film berdefinisi tinggi ini.\n{2113}{2200}Dibuat oleh SRTConverters.|Kunjungi situs web kami hari ini!",
    "exampleSubViewerOutput": "[INFORMATION]\n[TITLE]Converted with SRTConverters\n[AUTHOR]SRTConverters\n[SOURCE]\n[PRG]SRT to SUB Converter\n[FILEPATH]\n[DELAY]0\n[CD TRACK]0\n[COMMENT]Free Online Subtitle Converter\n[END INFORMATION]\n[SUBTITLE]\n[COLF]&H00FFFFFF,[STYLE]no,[SIZE]18,[FONT]Arial\n00:01:20.10,00:01:23.45\nSelamat datang di presentasi kami![br]Nikmati film berdefinisi tinggi ini.\n\n00:01:24.50,00:01:28.00\nDibuat oleh SRTConverters.[br]Kunjungi situs web kami hari ini!",
    "exampleExplanation": "Perhatikan bagaimana format MicroDVD menggabungkan dua baris kalimat dengan karakter pipa (|) dan mengganti milidetik dengan nomor frame pada 25 FPS ({2003}{2086}). Format SubViewer 2.0 mempertahankan penanda waktu centisecond (00:01:20.10,00:01:23.45) dan menyambung baris teks menggunakan [br]. Pada kedua format hasil, tag HTML seperti <i> dibersihkan guna memastikan kompatibilitas penuh pada pemutar jadul.",
    "formatsComparisonTitle": "MicroDVD vs. SubViewer vs. VobSub: Memahami Ambiguitas Ekstensi .SUB",
    "formatsComparisonSubtitle": "Mengapa ekstensi .sub dapat merujuk pada jenis file yang sepenuhnya berbeda.",
    "formatsComparisonText": [
        "Salah satu kesalahpahaman paling umum dalam dunia video digital adalah adanya tiga teknologi yang sangat berbeda yang memakai ekstensi file yang persis sama, yaitu '.sub':",
        "1. MicroDVD (.sub): File teks ringan berisi penanda frame ({awal}{akhir}teks). Format inilah yang dihasilkan konverter kami dan dikenali oleh DVD player fisik serta perangkat DivX.",
        "2. SubViewer 2.0 (.sub): File teks terstruktur dengan header metadata [INFORMATION] dan stempel waktu seperseratus detik, yang juga didukung konverter kami.",
        "3. VobSub (.sub + .idx): Format subtitle biner yang diekstrak langsung dari keping DVD-Video komersial. File VobSub BUKANLAH file teks yang dapat diedit, melainkan gambar grafik terkompresi (bitmap) dari subtitle aslinya yang didampingi file indeks (.idx). File ini tidak dapat dibuka di editor teks tanpa melewati proses OCR (Optical Character Recognition)."
    ],
    "ffmpegTitle": "Cara Mengonversi SRT ke SUB Lewat Command Line dengan FFmpeg",
    "ffmpegSubtitle": "Otomatisasi konversi subtitle massal dalam folder video menggunakan software FFmpeg.",
    "ffmpegCommand": "ffmpeg -i input.srt -c:s microdvd -r 23.976 output.sub",
    "ffmpegExplanation": [
        "-i input.srt: Menentukan file subtitle SubRip asal yang akan dikonversi.",
        "-c:s microdvd: Memerintahkan FFmpeg untuk mengodekan aliran subtitle ke format MicroDVD .sub.",
        "-r 23.976: Menentukan frame rate target untuk menghitung frame dari milidetik (sesuaikan menjadi 24, 25, atau 29.97 sesuai video Anda).",
        "output.sub: Nama dan lokasi file subtitle MicroDVD yang dihasilkan."
    ],
    "useCasesTitle": "5 Contoh Kasus Praktis Penggunaan Konversi SRT ke SUB",
    "useCasesSubtitle": "Kondisi nyata di mana Anda membutuhkan subtitle dalam format SUB berbasis frame.",
    "useCasesList": [
        {
            "title": "1. Membakar Keping AVI/DivX untuk DVD Player Ruang Keluarga",
            "description": "Banyak pemutar DVD lawas dengan colokan USB atau pemutar disc bisa memutar file film AVI namun wajib memiliki file pendamping .sub dengan nama yang sama persis (misal film.avi dan film.sub)."
        },
        {
            "title": "2. Pemutaran di Layar Monitor Mobil dan Head Unit Audio",
            "description": "Layar monitor mobil umumnya menggunakan firmware sederhana yang membaca file MicroDVD .sub secara mulus tanpa membuat sistem audio mobil hang."
        },
        {
            "title": "3. Pusat Media pada Konsol Video Game Klasik",
            "description": "Aplikasi homebrew pada konsol seperti Xbox Classic (XBMC) atau PS2 (SMS Player) memproses teks MicroDVD dengan konsumsi memori yang sangat minim."
        },
        {
            "title": "4. Authoring Video pada Software Produksi Tradisional",
            "description": "Software authoring DVD lawas seperti DVD Maestro, Scenarist, dan Sonic DVDit menerima daftar teks bernomor frame untuk membuat trek subtitle pada keping DVD komersial."
        },
        {
            "title": "5. Pengecekan Frame per Frame pada Software Editing Video",
            "description": "Editor video dapat mencocokkan nomor frame pada file MicroDVD dengan playhead pada timeline software untuk memastikan pergantian kalimat tepat pada pergantian adegan."
        }
    ],
    "troubleshootTitle": "Mengatasi Masalah Umum Saat Mengonversi SRT ke SUB",
    "troubleshootSubtitle": "Solusi cepat untuk subtitle yang meleset, baris teks menumpuk, dan karakter aneh.",
    "troubleshootTips": [
        {
            "issue": "Subtitle semakin lama semakin tidak sinkron dengan suara aktor",
            "cause": "Frame rate (FPS) yang dipilih saat konversi berbeda dari frame rate asli video (contoh: memilih 25 FPS untuk video yang berjalan di 23.976 FPS).",
            "solution": "Buka video di VLC Media Player, tekan Ctrl+J untuk melihat Informasi Codec, cari angka Frame rate, lalu konversi ulang file SRT dengan angka FPS yang sesuai."
        },
        {
            "issue": "Teks dua baris atau lebih tampil menyatu dalam satu baris panjang",
            "cause": "Pemutar media tidak mengenali pemisah baris vertikal pipa (|) yang dipakai oleh format MicroDVD.",
            "solution": "Perbarui firmware pemutar media Anda atau beralihlah ke format SubViewer 2.0 yang memakai tanda eksplisit [br] untuk memisah baris."
        },
        {
            "issue": "Pemutar DVD menolak membaca file atau memunculkan pesan eror",
            "cause": "Beberapa perangkat keras pemutar memerlukan deklarasi nilai frame rate pada baris pertama agar mengenali jenis file tersebut.",
            "solution": "Pastikan mencentang opsi 'Sertakan Header FPS' saat mengonversi ke MicroDVD. Opsi ini menyisipkan baris {1}{1}FPS di awal dokumen."
        },
        {
            "issue": "Huruf beraksen atau karakter khusus berubah menjadi simbol acak (mojibake)",
            "cause": "File SRT asli disimpan dalam pengodean UTF-8 sedangkan pemutar fisik Anda hanya mampu membaca ANSI atau Windows-1252.",
            "solution": "Buka file .sub di Notepad Windows, klik File > Save As, lalu ubah encoding menjadi ANSI atau UTF-8 sesuai dengan petunjuk pemutar Anda."
        }
    ],
    "workflowTitle": "Alur Kerja Profesional untuk Pemutaran Subtitle di Perangkat Fisik",
    "workflowSubtitle": "Panduan praktis mempersiapkan, mengonversi, dan menguji file subtitle di pemutar keras.",
    "workflowSteps": [
        "Langkah 1: Periksa Video Asal — Buka video di VLC atau MediaInfo untuk memastikan durasi, format wadah, dan nilai FPS yang tepat (misal 23.976 atau 25.000 FPS).",
        "Langkah 2: Bersihkan File SRT — Pastikan tidak ada stempel waktu yang tumpang-tindih atau tag rumit yang dapat membingungkan prosesor pemutar lama.",
        "Langkah 3: Konversi di SRTConverters — Unggah atau tempel file, tentukan nilai FPS yang cocok, pastikan opsi header dicentang, lalu unduh file .sub.",
        "Langkah 4: Samakan Nama File — Beri nama file .sub persis sama dengan nama file video di folder yang sama (misal film.avi dan film.sub).",
        "Langkah 5: Uji Coba pada Pemutar — Salin file ke flashdisk USB berformat FAT32, hubungkan ke pemutar DVD atau mobil, dan tonton 10 menit pertama untuk memastikan sinkronisasi."
    ],
    "conclusionTitle": "Rangkuman & Poin Penting",
    "conclusionText": [
        "Mengonversi subtitle SubRip (.srt) ke format SUB (MicroDVD atau SubViewer) menjembatani file video digital modern dengan perangkat keras pemutar legendaris. Memahami pengaruh frame rate dan mengandalkan rumus konversi yang presisi akan memastikan pengalaman menonton Anda bebas dari gangguan subtitle yang melenceng.",
        "SRTConverters menghadirkan sarana konversi online yang cepat, gratis, dan 100% terjaga privasinya dengan dukungan seluruh frame rate populer. Subtitle Anda siap dinikmati di layar mana pun dengan sempurna."
    ]
},
  tr: {
    "introTitle": "SRT Altyazılarını SUB Formatına Dönüştürme Rehberi",
    "introSubtitle": "SubRip (.srt) altyazılarını kare tabanlı MicroDVD ve zaman damgalı SubViewer (.sub) formatlarına dönüştürmeyi öğrenin; kare hızlarında (FPS) uzmanlaşarak eski donanımlarda ve harici oynatıcılarda kusursuz senkronizasyon elde edin.",
    "introText": [
        "SubRip (.srt), dijital video altyazıları dünyasında tartışmasız evrensel standart kabul edilir. Son derece hafif, metin tabanlı ve insanlar tarafından okunabilir yapısıyla neredeyse tüm modern medya oynatıcılarında, internet tarayıcılarında ve akıllı televizyonlarda yerel olarak desteklenir. Ancak eski masaüstü DVD oynatıcılar, DivX/XviD sertifikalı ev sinema sistemleri, araç içi multimedya ekranları veya özel video yazarlık programlarıyla çalışırken, saat tabanlı SRT dosyalarını okuyamayan ve kesinlikle .sub uzantılı dosya talep eden cihazlarla sıkça karşılaşırsınız.",
        "Altyazı mühendisliğinde .sub uzantısı temel olarak birbirinden tamamen farklı iki metin standardını temsil eder: MicroDVD (video diskleri ve DivX medyaları için geliştirilmiş kare indeksli format) ve SubViewer 2.0 (salise zaman damgalarına dayalı format). Gösterim aralıklarını saat, dakika, saniye ve milisaniye olarak hesaplayan modern altyazıların aksine, MicroDVD altyazıları doğrudan ekrana çizilen tekil video kareleriyle (frame) eşleşir.",
        "MicroDVD altyazıları mutlak saat zamanı yerine kare numaralarını ({başlangıç_karesi}{bitiş_karesi}) kullandığından, bir SRT dosyasını SUB formatına dönüştürmek videonun gerçek kare hızına (FPS) dayalı hassas bir matematiksel işlem gerektirir. Kare hesaplaması ile video akışı arasındaki herhangi bir uyuşmazlık, altyazıların film ilerledikçe öne geçmesine ya da arkada kalmasına yol açar. Bu kapsamlı rehberde SUB formatlarının teknik yapısı, kare hızı matematiği, FFmpeg komutları ve pratik çözüm yöntemleri ele alınmaktadır."
    ],
    "whatIsTitle": "SRT ve SUB Formatlarını Tanımak: Zaman Kodları ve Kare Tabanlı Altyazılar",
    "whatIsText": [
        "SubRip (.srt), 1990'ların sonunda Brain tarafından geliştirilen DVD kopyalama yazılımıyla birlikte, altyazıları açık ve taşınabilir bir yapıda saklamak amacıyla üretildi. Bir SRT dosyası; sıralı bir tamsayı sayacından, milisaniye hassasiyetinde ' --> ' ayracıyla belirtilen başlangıç ve bitiş zaman damgalarından (HH:MM:SS,mmm) ve ardından gelen diyalog satırları ile boş bir satırdan oluşur. SRT standardı yazı tipi seçimini, boyutlandırmayı ve konumlandırmayı tamamen oynatıcı yazılıma bırakır.",
        "MicroDVD (.sub), 1999–2001 yıllarında Tias Software tarafından popüler MicroDVD oynatıcı için geliştirilmiş olup özellikle MPEG-4, DivX ve AVI kapsayıcılarına odaklanmıştır. Zaman damgaları yerine, her replik ekranda belireceği ve kaybolacağı kesin kare numaralarıyla ifade edilir: {başlangıç_karesi}{bitiş_karesi}Altyazı metni. Birden fazla satırdan oluşan diyaloglar dikey çizgi ayracıyla (|) birbirine bağlanır. MicroDVD dosyalarında isteğe bağlı olarak oynatıcıya hedef kare hızını bildiren bir başlık satırı ({1}{1}25.000 veya {1}{1}23.976) yer alabilir.",
        "SubViewer 2.0 (.sub), bir üst bilgi bloğu ([INFORMATION] ... [SUBTITLE]) ile başlayan, ardından salise zaman damgaları (HH:MM:SS.cs,HH:MM:SS.cs) ve satır sonu için [br] etiketleri içeren alternatif bir metin formatıdır. Masaüstü DVD cihazlarında MicroDVD kadar yaygın olmasa da pek çok klasik altyazı düzenleme yazılımında geniş desteğe sahiptir. Her iki format da eski donanımlarla uyumluluğu korumak açısından hayati bir role sahiptir."
    ],
    "whyConvertTitle": "SRT Altyazılarını SUB Formatına Dönüştürmek İçin 6 Temel Neden",
    "whyConvertSubtitle": "Video editörlerinin, arşivcilerin ve ev sineması meraklılarının SubRip altyazılarını neden SUB dosyalarına çevirdiğini keşfedin.",
    "whyConvertReasons": [
        {
            "title": "1. Harici Masaüstü DVD ve DivX Oynatıcılarda Doğrudan Oynatma",
            "description": "USB girişi veya disk yuvası bulunan pek çok eski DVD oynatıcı AVI/MPEG-4 videoları sorunsuz oynatır ancak SRT dosyalarını okuyamaz; altyazı göstermek için aynı isimli MicroDVD .sub dosyalarını şart koşar."
        },
        {
            "title": "2. Araç İçi Multimedya ve Arka Koltuk Eğlence Ekranları",
            "description": "Otomobil ön panelleri ve arka koltuk ekranları genellikle yalın Linux veya Windows CE sistemleri çalıştırır ve yalnızca MicroDVD .sub dosyalarını çözen hafif yazılımlara sahiptir."
        },
        {
            "title": "3. Kareye Kilitli Kusursuz Senkronizasyon",
            "description": "MicroDVD her repliği belirli bir video karesine bağladığı için, video hızlandırıldığında, yavaşlatıldığında veya kare kare kurgulandığında altyazılar daima tam vaktinde görüntülenir."
        },
        {
            "title": "4. Klasik Oyun Konsolları ve Medya Merkezleriyle Uyumluluk",
            "description": "Orijinal Xbox (XBMC 1.0), PlayStation 2 (SMS Player) ve Nintendo Wii gibi eski konsollardaki medya oynatıcılar, MicroDVD altyazılarını işlemciyi yormadan son derece akıcı şekilde görüntüler."
        },
        {
            "title": "5. Dikey Çizgi ile Kompakt Çok Satırlı Formatlama",
            "description": "MicroDVD çok satırlı diyalogları dikey çizgi (|) ile tek bir satırda toplar ({120}{250}Satır 1|Satır 2); bu sayede dosya boyutu küçülür ve satır başı okuma hataları engellenir."
        },
        {
            "title": "6. %100 Güvenli ve Tarayıcı İçi Yerel Dönüştürme",
            "description": "Çevrimiçi aracımız dosyalarınızı JavaScript aracılığıyla tamamen tarayıcınızın geçici belleğinde işler. Hiçbir altyazı metni, video içeriği veya veri harici sunuculara iletilmez."
        }
    ],
    "howToTitle": "Adım Adım: Çevrimiçi SRT - SUB Dönüştürme",
    "howToSubtitle": "SubRip SRT altyazılarınızı saniyeler içinde temiz ve kare hassasiyetinde SUB dosyalarına dönüştürmek için bu adımları izleyin.",
    "howToSteps": [
        {
            "step": "1",
            "title": "SRT Dosyanızı Yükleyin veya Yapıştırın",
            "description": ".srt dosyanızı yükleme alanına sürükleyip bırakın veya SubRip altyazı metnini kopyalayarak sol taraftaki giriş alanına yapıştırın."
        },
        {
            "step": "2",
            "title": "Hedef Formatı Seçin (MicroDVD veya SubViewer)",
            "description": "DVD/DivX cihazlarında kare tabanlı oynatmak için MicroDVD (.sub), salise zaman damgalı oynatmak için SubViewer 2.0 (.sub) seçeneğini işaretleyin."
        },
        {
            "step": "3",
            "title": "Videonuzun Gerçek Kare Hızını (FPS) Belirleyin",
            "description": "MicroDVD formatına çevirirken videonuzun tam kare hızını (ör. 23.976, 24, 25 veya 29.97 FPS) seçerek ses ve altyazının kusursuz eşleşmesini sağlayın."
        },
        {
            "step": "4",
            "title": "Dönüştürülen .SUB Dosyasını İndirin",
            "description": "Hazırlanan altyazıyı cihazınıza kaydetmek için .SUB İndir butonuna tıklayın veya metni panoya kopyalayarak hemen deneyin."
        }
    ],
    "differenceTitle": "SRT vs. MicroDVD SUB vs. SubViewer SUB: 10 Maddelik Teknik Karşılaştırma",
    "differenceSubtitle": "Zamanlama modelleri, satır ayrıcıları, dosya başlıkları ve donanım desteğinin ayrıntılı analizi.",
    "differenceTable": [
        {
            "feature": "Zamanlama Mekanizması",
            "srt": "Zaman tabanlı (Milisaniyeler: HH:MM:SS,mmm)",
            "microdvd": "Kare tabanlı (Kare numaraları: {başlangıç}{bitiş})",
            "subviewer": "Zaman tabanlı (Saliseler: HH:MM:SS.cs)"
        },
        {
            "feature": "FPS Bağımlılığı",
            "srt": "Yok (Videonun kare hızından bağımsız)",
            "microdvd": "Yüksek (Doğru video FPS değeri şarttır)",
            "subviewer": "Yok (Mutlak saat zamanı)"
        },
        {
            "feature": "Çok Satır Ayracı",
            "srt": "Standart satır sonu (\\n)",
            "microdvd": "Dikey çizgi karakteri (|)",
            "subviewer": "Açık metin etiketi ([br])"
        },
        {
            "feature": "Dosya Başlığı (Header)",
            "srt": "Başlık yok (1. altyazıyla başlar)",
            "microdvd": "İsteğe bağlı FPS başlığı ({1}{1}25.000)",
            "subviewer": "Zorunlu metadata bloğu ([INFORMATION])"
        },
        {
            "feature": "Sıra Numarası Sayacı",
            "srt": "Zorunlu sıralı tamsayı (1, 2, 3...)",
            "microdvd": "Sayaç yok (Kare etiketlerinde örtüktür)",
            "subviewer": "Sayaç yok (Yalnızca zaman satırı)"
        },
        {
            "feature": "HTML Etiket Desteği",
            "srt": "Temel etiketler (<i>, <b>, <u>, <font>)",
            "microdvd": "Özel etiketler ({Y:i}, {Y:b}) veya düz metin",
            "subviewer": "Kısıtlı veya düz metin"
        },
        {
            "feature": "Akıllı TV & Web Oynatıcılar",
            "srt": "Evrensel (%100 yerel uyumluluk)",
            "microdvd": "Kısıtlı (VLC, MPV veya eski oynatıcı gerektirir)",
            "subviewer": "Çok kısıtlı (Sadece eski yazılımlar)"
        },
        {
            "feature": "Fiziksel DVD/DivX Cihazları",
            "srt": "Eski yazılımlarda çoğunlukla çalışmaz",
            "microdvd": "Donanım düzeyinde yaygın destek",
            "subviewer": "Belirli DivX yongalarında desteklenir"
        },
        {
            "feature": "Ortalama Dosya Boyutu",
            "srt": "Küçük (Film başına ~40 KB)",
            "microdvd": "Çok kompakt (Film başına ~25 KB)",
            "subviewer": "Orta (Başlıkla birlikte ~45 KB)"
        },
        {
            "feature": "Birincil Kullanım Alanı",
            "srt": "İnternet videoları, YouTube, Smart TV'ler",
            "microdvd": "Harici oynatıcılar, retro konsollar, arabalar",
            "subviewer": "Eski masaüstü düzenleyiciler ve arşivleme"
        }
    ],
    "fpsGuideTitle": "Kare Hızı (FPS) Kılavuzu: Altyazı Kaymalarını Önleme Yolları",
    "fpsGuideSubtitle": "Doğru video kare hızını seçmek, MicroDVD dönüşümünün başarısındaki en kritik aşamadır.",
    "fpsGuideText": [
        "MicroDVD altyazıların gösterim sürelerini kare sayılarıyla belirlediğinden, dönüşüm esnasında yanlış FPS değeri kullanmak altyazıların kademeli olarak kaymasına sebep olur. Seçilen kare hızı videonun gerçek hızından yüksekse altyazılar gecikmeli görünür; düşükse replikler konuşmadan önce ekranda belirir.",
        "Örneğin 23.976 FPS (sinema standardı / Amerikan Blu-ray) hızındaki bir film 25.000 FPS ile dönüştürülürse, her dakika yaklaşık 2,5 saniyelik bir zaman farkı oluşur. Yalnızca 20 dakikalık bir izleme sonunda fark neredeyse bir dakikaya ulaşarak filmi izlenemez hale getirir.",
        "Aşağıdaki tablo sinema ve televizyon dünyasında kabul gören temel kare hızlarını özetlemektedir. Altyazınızı dönüştürmeden önce video dosyanızı VLC Media Player (Ctrl+J) veya MediaInfo programıyla incelemeniz önemle tavsiye edilir."
    ],
    "fpsTable": [
        {
            "fps": "23.976 FPS",
            "standard": "NTSC Sinema / Standart 24p",
            "useCase": "Vizyon sinema filmleri, anime Blu-ray sürümleri ve dijital platform dizileri."
        },
        {
            "fps": "24.000 FPS",
            "standard": "DCI Dijital Sinema",
            "useCase": "Dijital sinema salonu gösterimleri, DCP ana kopyaları ve Avrupa yapımı filmler."
        },
        {
            "fps": "25.000 FPS",
            "standard": "PAL / SECAM Yayını",
            "useCase": "Avrupa, Türkiye, İngiltere ve Avustralya televizyon yayınları ile PAL DVD diskleri."
        },
        {
            "fps": "29.970 FPS",
            "standard": "NTSC Televizyon Yayını",
            "useCase": "Kuzey Amerika ve Japonya televizyon yayınları, belgesel DVD'leri ve el kameraları."
        },
        {
            "fps": "30.000 FPS",
            "standard": "İnternet Videosu / Dijital Medya",
            "useCase": "Eski internet videoları, ekran kayıtları ve akıllı telefon çekimleri."
        },
        {
            "fps": "50.000 FPS",
            "standard": "PAL Yüksek Kare Hızı",
            "useCase": "Avrupa spor müsabakaları yayınları ve 50 Hz yüksek çözünürlüklü canlı televizyon."
        },
        {
            "fps": "59.940 / 60 FPS",
            "standard": "NTSC Yüksek Kare Hızı / Oyun",
            "useCase": "YouTube'da 60 fps oyun videoları, aksiyon sporları ve yüksek hızlı çekim kameraları."
        }
    ],
    "mathTitle": "Kare Tabanlı Altyazı Dönüşümünün Matematiksel Mantığı",
    "mathSubtitle": "Zaman damgalarının tam sayı kare numaralarına nasıl dönüştürüldüğünü inceleyin.",
    "mathFormula": "Kare Numarası = Math.round((Milisaniye_Cinsinden_Zaman / 1000) × Video_FPS)",
    "mathExplanation": [
        "1. Zaman Çözümleme: Dönüştürücü, SRT repliğindeki başlangıç ve bitiş zaman damgalarını (ör. 00:01:24,500) okur ve toplam milisaniyeyi hesaplar: (1 dk × 60.000 ms) + (24 sn × 1.000 ms) + 500 ms = 84.500 milisaniye (84,500 saniye).",
        "2. FPS ile Çarpma: Saniye cinsinden değer video kare hızıyla çarpılır. 25.000 FPS (PAL) için: 84,500 × 25 = 2.112,5. En yakın tam sayıya yuvarlandığında Başlangıç Karesi 2113 olarak bulunur.",
        "3. Bitiş Karesi Hesabı: Replik 00:01:28,000 (88,000 saniye) anında sona eriyorsa: 88,000 × 25 = 2.200. Ortaya çıkan satır {2113}{2200} şeklinde yazılır.",
        "4. Minimum Süre Koruması: Çok kısa repliklerde yuvarlama sebebiyle başlangıç ve bitiş karesi aynı çıkarsa, dönüştürücü bitiş karesine otomatik olarak 1 ekleyerek yazının en az bir tam kare görünmesini sağlar."
    ],
    "exampleTitle": "Öncesi ve Sonrası: SRT - MicroDVD ve SubViewer Dönüşüm Örneği",
    "exampleIntro": "Çok satırlı ve temel formatlama içeren bir SubRip altyazısının MicroDVD ve SubViewer 2.0 formatlarına nasıl temiz biçimde uyarlandığını görün.",
    "exampleSrtInput": "1\n00:01:20,100 --> 00:01:23,450\nSunumumuza hoş geldiniz!\nBu yüksek çözünürlüklü filmin tadını çıkarın.\n\n2\n00:01:24,500 --> 00:01:28,000\n<i>SRTConverters</i> tarafından hazırlandı.\nWeb sitemizi bugün ziyaret edin!",
    "exampleMicroDvdOutput": "{1}{1}25.000\n{2003}{2086}Sunumumuza hoş geldiniz!|Bu yüksek çözünürlüklü filmin tadını çıkarın.\n{2113}{2200}SRTConverters tarafından hazırlandı.|Web sitemizi bugün ziyaret edin!",
    "exampleSubViewerOutput": "[INFORMATION]\n[TITLE]Converted with SRTConverters\n[AUTHOR]SRTConverters\n[SOURCE]\n[PRG]SRT to SUB Converter\n[FILEPATH]\n[DELAY]0\n[CD TRACK]0\n[COMMENT]Free Online Subtitle Converter\n[END INFORMATION]\n[SUBTITLE]\n[COLF]&H00FFFFFF,[STYLE]no,[SIZE]18,[FONT]Arial\n00:01:20.10,00:01:23.45\nSunumumuza hoş geldiniz![br]Bu yüksek çözünürlüklü filmin tadını çıkarın.\n\n00:01:24.50,00:01:28.00\nSRTConverters tarafından hazırlandı.[br]Web sitemizi bugün ziyaret edin!",
    "exampleExplanation": "MicroDVD formatının iki satırı dikey çizgi (|) ile birleştirdiğini ve milisaniyeleri 25 FPS'deki kare numaralarıyla değiştirdiğini ({2003}{2086}) görebilirsiniz. SubViewer 2.0 formatı salise zamanlamasını (00:01:20.10,00:01:23.45) korur ve satırları [br] ile bağlar. Her iki çıktıda da eski cihazların hata vermemesi için <i> gibi HTML etiketleri temizlenmiştir.",
    "formatsComparisonTitle": "MicroDVD vs. SubViewer vs. VobSub: .SUB Uzantısı Karışıklığına Son",
    "formatsComparisonSubtitle": ".sub uzantısının neden birbirinden tamamen alakasız dosya türlerini ifade edebildiğini anlayın.",
    "formatsComparisonText": [
        "Dijital video dünyasında en sık karşılaşılan kafa karışıklıklarından biri, üç bambaşka teknolojinin aynı '.sub' uzantısını kullanmasıdır:",
        "1. MicroDVD (.sub): Kare indeksli replikler içeren hafif bir metin dosyasıdır ({başlangıç}{bitiş}metin). Aracımızın ürettiği ve masaüstü DVD/DivX oynatıcılarının beklediği format budur.",
        "2. SubViewer 2.0 (.sub): [INFORMATION] başlığı ve salise zaman damgaları içeren yapılandırılmış bir metin dosyasıdır; aracımız tarafından da desteklenir.",
        "3. VobSub (.sub + .idx): Orijinal ticari DVD-Video disklerinden ayıklanan ikili (binary) bir altyazı formatıdır. VobSub dosyaları düzenlenebilir metin İÇERMEZ; DVD'deki pikselli bitmap grafik görüntülerini ve bunlara ait .idx indeks dosyasını barındırır. OCR (Optik Karakter Tanıma) uygulanmadıkça metin editörlerinde düzenlenemez."
    ],
    "ffmpegTitle": "FFmpeg Komut Satırıyla SRT Dosyasını SUB Formatına Dönüştürme",
    "ffmpegSubtitle": "Açık kaynaklı FFmpeg yazılımını kullanarak video klasörlerinizdeki altyazıları toplu olarak dönüştürün.",
    "ffmpegCommand": "ffmpeg -i input.srt -c:s microdvd -r 23.976 output.sub",
    "ffmpegExplanation": [
        "-i input.srt: Kaynak SubRip altyazı dosyasını belirtir.",
        "-c:s microdvd: FFmpeg'e altyazı akışını MicroDVD .sub formatında kodlamasını söyler.",
        "-r 23.976: Milisaniyelerden kare hesaplanırken kullanılacak hedef kare hızını ayarlar (videonuza göre 24, 25 veya 29.97 olarak değiştirin).",
        "output.sub: Oluşturulan MicroDVD altyazı dosyasının adı ve konumu."
    ],
    "useCasesTitle": "SRT - SUB Dönüşümü İçin 5 Pratik Gerçek Hayat Senaryosu",
    "useCasesSubtitle": "Kare tabanlı SUB altyazılarına ihtiyaç duyulan yaygın kullanım alanları.",
    "useCasesList": [
        {
            "title": "1. Masaüstü DVD Cihazları İçin AVI/DivX Diskleri Yazma",
            "description": "USB veya CD/DVD yuvasına sahip birçok klasik ev sinema oynatıcısı AVI formatındaki filmleri oynatabilir ancak altyazı göstermek için aynı isimli bir .sub dosyasına (ör. film.avi ve film.sub) ihtiyaç duyar."
        },
        {
            "title": "2. Otomobil İçi Multimedya ve Kafalık Ekranları",
            "description": "Oto teypleri ve arka koltuk ekranları, MicroDVD .sub altyazılarını sistem performansını zorlamadan doğrudan çözen hafif gömülü yazılımlar kullanır."
        },
        {
            "title": "3. Klasik Oyun Konsollarında Medya Oynatıcı Kullanımı",
            "description": "Xbox Classic (XBMC) veya PS2 (SMS Player) gibi eski konsollardaki ev yapımı oynatıcılar, MicroDVD altyazılarını takılma olmaksızın en yüksek verimle çalıştırır."
        },
        {
            "title": "4. Geleneksel DVD Yazarlık (Authoring) Programları",
            "description": "DVD Maestro, Scenarist ve Sonic DVDit gibi klasik yazarlık yazılımları, ticari DVD disklerine altyazı kanalı eklerken kare numaralı metin listelerini kabul eder."
        },
        {
            "title": "5. Video Kurguda Kare Kare Senkron Kontrolü",
            "description": "Kurgucular bir MicroDVD dosyasındaki kesin kare numaralarını kurgu programının oynatma kafasıyla karşılaştırarak altyazının tam sahne geçişine oturmasını sağlar."
        }
    ],
    "troubleshootTitle": "SRT - SUB Dönüştürmede Karşılaşılan Sorunlar ve Çözümleri",
    "troubleshootSubtitle": "Altyazı kaymaları, birleşik satırlar ve karakter bozulmaları için hızlı çözümler.",
    "troubleshootTips": [
        {
            "issue": "Altyazı film ilerledikçe sesten yavaş yavaş uzaklaşıyor ve kayıyor",
            "cause": "Dönüştürme sırasında seçilen kare hızı (FPS), videonun asıl kare hızıyla eşleşmiyor (örneğin 23.976 FPS hızındaki bir video için 25 FPS seçilmiş).",
            "solution": "Videonuzu VLC Media Player'da açın, Ctrl+J ile Kodlayıcı Bilgileri'ne bakın, doğru Kare hızı değerini öğrenin ve SRT dosyanızı o değerle yeniden dönüştürün."
        },
        {
            "issue": "Çok satırlı altyazılar tek bir satırda sıkışık olarak görünüyor",
            "cause": "Oynatıcı MicroDVD formatının dikey çizgi (|) satır ayracını satır başı olarak algılayamıyor.",
            "solution": "Oynatıcınızın yazılımını güncelleyin veya satır sonları için açık [br] etiketleri kullanan SubViewer 2.0 moduna geçin."
        },
        {
            "issue": "DVD oynatıcı altyazı dosyasını görmüyor ya da okuma hatası veriyor",
            "cause": "Bazı donanımlar dosyanın biçimini tanıyabilmek için ilk satırda kare hızı bildirim başlığının yer almasını zorunlu tutar.",
            "solution": "MicroDVD formatına dönüştürürken 'FPS Başlığını Ekle' seçeneğinin işaretli olduğundan emin olun. Bu ayar dosyanın en başına {1}{1}FPS satırını ekler."
        },
        {
            "issue": "Türkçe karakterler (ş, ç, ğ, ı, ö, ü) bozuk ya da anlamsız semboller olarak çıkıyor",
            "cause": "Orijinal SRT dosyası UTF-8 olarak kaydedilmişken donanımsal oynatıcınız yalnızca ANSI (Windows-1254) karakter kodlamasını okuyabiliyordur.",
            "solution": "Oluşturulan .sub dosyasını Windows Not Defteri ile açın, Dosya > Farklı Kaydet seçeneğine tıklayın ve cihazınızın kılavuzuna göre Kodlama kısmını ANSI veya UTF-8 olarak ayarlayıp kaydedin."
        }
    ],
    "workflowTitle": "Fiziksel Cihazlar İçin Profesyonel Altyazı İş Akışı",
    "workflowSubtitle": "Altyazılarınızı her türlü cihazda sorunsuz çalıştırmak için izlemeniz gereken adımlar.",
    "workflowSteps": [
        "1. Adım: Kaynak Videoyu İnceleyin — VLC veya MediaInfo ile videonun süresini, formatını ve kesin FPS değerini (ör. 23.976 veya 25.000) öğrenin.",
        "2. Adım: SRT Dosyasını Denetleyin — Çakışan zamanlar veya eski oynatıcıları kilitleyebilecek hatalı etiketler bulunmadığından emin olun.",
        "3. Adım: SRTConverters ile Dönüştürün — Dosyayı yapıştırın veya yükleyin, doğru FPS'yi seçin, başlık kutusunu işaretli tutun ve .sub dosyasını indirin.",
        "4. Adım: Dosyaları Aynı İsimle Kaydedin — .sub dosyasına aynı klasördeki video dosyasıyla harfi harfine aynı ismi verin (ör. film.avi ve film.sub).",
        "5. Adım: Cihazda Deneme Yapın — Dosyaları FAT32 formatlı bir USB belleğe yükleyip cihazınıza takın ve ilk 10 dakikayı izleyerek senkronizasyonu onaylayın."
    ],
    "conclusionTitle": "Özet ve Temel Çıkarımlar",
    "conclusionText": [
        "SubRip (.srt) altyazılarını SUB formatına (MicroDVD veya SubViewer) dönüştürmek, güncel dijital videolar ile klasik oynatıcılar arasındaki teknoloji farkını ortadan kaldırır. Kare hızlarının önemini bilerek doğru matematiksel dönüşümü uygulamak, eski DVD oynatıcılarda ve araç ekranlarında kusursuz bir izleme keyfi sunar.",
        "SRTConverters, tüm popüler kare hızlarını destekleyen hızlı, ücretsiz ve %100 gizli bir çevrimiçi altyazı dönüştürücüsüdür. Altyazılarınız dilediğiniz her ekranda sorunsuzca oynamaya hazır olacaktır."
    ]
},
  it: {
    "introTitle": "La Guida Completa per Convertire Sottotitoli da SRT a Formato SUB",
    "introSubtitle": "Scopri come convertire i sottotitoli SubRip (.srt) nei formati MicroDVD e SubViewer (.sub) indicizzati per fotogrammi, padroneggiare la frequenza fotogrammi (FPS) e ottenere una perfetta sincronizzazione sui lettori multimediali da tavolo e su impianti rétro.",
    "introText": [
        "SubRip (.srt) è universalmente riconosciuto come lo standard di riferimento per i sottotitoli video digitali. Si tratta di un formato leggero, basato su testo leggibile e nativamente supportato da quasi tutti i lettori multimediali moderni, browser web e Smart TV. Tuttavia, quando si utilizzano lettori DVD da salotto meno recenti, impianti home theater certificati DivX/XviD, monitor multimediali per auto o programmi di authoring video dedicati, ci si imbatte frequentemente in dispositivi hardware che non possono analizzare i file SRT basati sull'orologio ed esigono categoricamente file con estensione .sub.",
        "Nel campo dell'ingegneria dei sottotitoli, l'estensione .sub fa riferimento principalmente a due standard testuali molto diversi: MicroDVD (un formato indicizzato per fotogrammi creato per dischi video e file multimediali DivX) e SubViewer 2.0 (un formato basato su timestamp in centesimi di secondo). A differenza dei sottotitoli moderni che calcolano la visualizzazione mediante ore, minuti, secondi e millisecondi, MicroDVD aggancia i dialoghi direttamente ai singoli fotogrammi video (frame) visualizzati sullo schermo.",
        "Poiché MicroDVD si basa sui numeri dei fotogrammi ({fotogramma_inizio}{fotogramma_fine}) anziché sul tempo assoluto dell'orologio, convertire un file SRT in SUB richiede una trasformazione matematica precisa basata sull'esatta frequenza dei fotogrammi (FPS) del video. Qualsiasi scostamento tra il calcolo dei fotogrammi e il video reale provocherà una progressiva perdita di sincronia dell'audio con le scritte a schermo. Questa guida completa illustra l'architettura tecnica dei formati SUB, le formule di calcolo degli FPS, i comandi FFmpeg e le soluzioni pratiche per i problemi di lettura."
    ],
    "whatIsTitle": "Comprendere SRT e SUB: Codici Temporali vs. Sottotitoli a Fotogrammi",
    "whatIsText": [
        "SubRip (.srt) fu ideato alla fine degli anni '90 assieme al software di estrazione DVD di Brain per archiviare i sottotitoli in un formato aperto e altamente portabile. Un file SRT comprende un contatore intero progressivo, timestamp di inizio e fine separati da ' --> ' con precisione al millisecondo (HH:MM:SS,mmm), e una o più righe di testo seguite da una riga vuota di separazione. Lo standard SRT affida completamente lo stile dei caratteri, le dimensioni e il posizionamento all'applicazione di riproduzione.",
        "MicroDVD (.sub), sviluppato tra il 1999 e il 2001 da Tias Software per il celebre lettore MicroDVD, fu ottimizzato specificamente per file in contenitori MPEG-4, DivX e AVI. Al posto dei timestamp orari, ogni battuta è definita dai numeri esatti dei fotogrammi in cui deve comparire e scomparire dallo schermo: {fotogramma_inizio}{fotogramma_fine}Testo del sottotitolo. Se il testo si estende su più righe, queste sono separate dal carattere barra verticale (|). I file MicroDVD possono includere una riga di intestazione opzionale iniziale ({1}{1}25.000 o {1}{1}23.976) che notifica al lettore la frequenza fotogrammi attesa.",
        "SubViewer 2.0 (.sub) fu creato come alternativa testuale dotata di un'intestazione di metadati iniziale ([INFORMATION] ... [SUBTITLE]) seguita da timestamp in centesimi di secondo (HH:MM:SS.cs,HH:MM:SS.cs) e righe separate dal marcatore [br]. Sebbene meno diffuso di MicroDVD sui lettori DVD da tavolo, SubViewer vanta un supporto esteso nei programmi di montaggio storici. Entrambi i formati svolgono un compito essenziale nel mantenere la compatibilità con le apparecchiature tradizionali."
    ],
    "whyConvertTitle": "6 Motivi Cruciali per Convertire Sottotitoli SRT nel Formato SUB",
    "whyConvertSubtitle": "Perché editor video, archivisti e appassionati di cinema convertono i file SubRip in sottotitoli SUB indicizzati a fotogrammi.",
    "whyConvertReasons": [
        {
            "title": "1. Riproduzione Diretta su Lettori DVD e DivX da Tavolo",
            "description": "Molti lettori DVD con porta USB o vano disco leggono i video AVI senza problemi, ma rifiutano i file SRT, richiedendo file MicroDVD .sub con lo stesso nome per visualizzare i testi."
        },
        {
            "title": "2. Schermi e Sistemi di Infotainment per Automobili",
            "description": "Gli schermi per cruscotto e i monitor per i passeggeri posteriori integrano spesso firmware leggeri basati su Linux o Windows CE che supportano esclusivamente il formato MicroDVD .sub."
        },
        {
            "title": "3. Sincronizzazione Agganciata al Singolo Fotogramma",
            "description": "Dato che MicroDVD abbina ogni battuta a un preciso frame video, il testo non perde la sincronia nemmeno riproducendo a velocità alterata o montando video fotogramma per fotogramma."
        },
        {
            "title": "4. Compatibilità con Console Vintage e Media Center Modificati",
            "description": "Applicazioni homebrew su console come la prima Xbox (XBMC 1.0), PlayStation 2 (SMS Player) e Nintendo Wii elaborano i file MicroDVD con un consumo hardware irrisorio e senza rallentamenti."
        },
        {
            "title": "5. Formattazione Multiriga Compatta Tramite Barre Verticali",
            "description": "MicroDVD raggruppa dialoghi su più righe in un'unica stringa ordinata tramite il carattere barra verticale ({120}{250}Riga 1|Riga 2), riducendo le dimensioni del file ed evitando errori di visualizzazione."
        },
        {
            "title": "6. Massima Privacy ed Elaborazione Locale nel Browser",
            "description": "Il nostro convertitore opera interamente all'interno della memoria del tuo browser tramite codice JavaScript. Nessun file video, script o testo viene inviato a server cloud remoti."
        }
    ],
    "howToTitle": "Guida Passo-Passo: Come Convertire SRT in SUB Online",
    "howToSubtitle": "Segui queste semplici istruzioni per trasformare i tuoi sottotitoli SubRip SRT in file SUB perfetti e sincronizzati in pochi secondi.",
    "howToSteps": [
        {
            "step": "1",
            "title": "Carica o Incolla i tuoi Sottotitoli SRT",
            "description": "Trascina e rilascia il tuo file .srt nell'area designata oppure copia il testo delle tue battute SubRip e incollalo nell'editor di sinistra."
        },
        {
            "step": "2",
            "title": "Scegli il Formato di Destinazione (MicroDVD o SubViewer)",
            "description": "Seleziona MicroDVD (.sub) per la riproduzione a fotogrammi su dispositivi DVD/DivX o SubViewer 2.0 (.sub) per timestamp in centesimi."
        },
        {
            "step": "3",
            "title": "Imposta la Frequenza Fotogrammi (FPS) del Video",
            "description": "In caso di conversione in MicroDVD, scegli il frame rate corrispondente al video (es. 23.976, 24, 25 o 29.97 FPS) per evitare asincronie rispetto all'audio."
        },
        {
            "step": "4",
            "title": "Scarica il File .SUB Convertito",
            "description": "Fai clic sul pulsante Scarica .SUB per salvare il file generato sul tuo dispositivo oppure copia il testo negli appunti per verificarlo all'istante."
        }
    ],
    "differenceTitle": "SRT vs. MicroDVD SUB vs. SubViewer SUB: Confronto Tecnico in 10 Punti",
    "differenceSubtitle": "Un confronto approfondito tra modelli di temporizzazione, delimitatori di riga, intestazioni e supporto hardware.",
    "differenceTable": [
        {
            "feature": "Meccanismo Temporale",
            "srt": "Basato sul tempo (Millisecondi: HH:MM:SS,mmm)",
            "microdvd": "Basato sui fotogrammi (Numeri: {inizio}{fine})",
            "subviewer": "Basato sul tempo (Centesimi: HH:MM:SS.cs)"
        },
        {
            "feature": "Dipendenza da FPS",
            "srt": "Nessuna (Indipendente dal frame rate del video)",
            "microdvd": "Elevata (Richiede il valore esatto degli FPS)",
            "subviewer": "Nessuna (Tempo assoluto dell'orologio)"
        },
        {
            "feature": "Delimitatore Multiriga",
            "srt": "A capo standard (\\n)",
            "microdvd": "Barra verticale (|)",
            "subviewer": "Marcatore esplicito ([br])"
        },
        {
            "feature": "Intestazione del File",
            "srt": "Nessuna intestazione (Inizia con il sottotitolo 1)",
            "microdvd": "Intestazione FPS opzionale ({1}{1}25.000)",
            "subviewer": "Blocco metadati obbligatorio ([INFORMATION])"
        },
        {
            "feature": "Contatore Sequenziale",
            "srt": "Intero progressivo obbligatorio (1, 2, 3...)",
            "microdvd": "Nessun contatore (Implicito nei fotogrammi)",
            "subviewer": "Nessun contatore (Solo riga oraria)"
        },
        {
            "feature": "Tag HTML Supportati",
            "srt": "Tag base (<i>, <b>, <u>, <font>)",
            "microdvd": "Tag proprietari ({Y:i}, {Y:b}) o testo puro",
            "subviewer": "Limitati o solo testo puro"
        },
        {
            "feature": "Smart TV & Riproduttori Web",
            "srt": "Universale (Compatibilità nativa al 100%)",
            "microdvd": "Limitato (Richiede VLC, MPV o player apposito)",
            "subviewer": "Molto limitato (Solo software datati)"
        },
        {
            "feature": "Lettori DVD/DivX da Tavolo",
            "srt": "Spesso non supportato nei vecchi firmware",
            "microdvd": "Supporto nativo diffuso nei dispositivi",
            "subviewer": "Riconosciuto da alcuni chipset DivX"
        },
        {
            "feature": "Dimensione Media File",
            "srt": "Compatta (~40 KB per film)",
            "microdvd": "Estremamente ridotta (~25 KB per film)",
            "subviewer": "Moderata (~45 KB con intestazione)"
        },
        {
            "feature": "Impiego Principale",
            "srt": "Web, streaming, YouTube, Smart TV moderne",
            "microdvd": "Lettori fisici, console rétro, impianti auto",
            "subviewer": "Editing desktop tradizionale e archivi"
        }
    ],
    "fpsGuideTitle": "Guida alle Frequenze Fotogrammi (FPS): Come Prevenire Perdite di Sincronia",
    "fpsGuideSubtitle": "Selezionare il frame rate adeguato è il passo più importante nella conversione verso MicroDVD.",
    "fpsGuideText": [
        "Dato che MicroDVD determina la durata e l'apparizione delle scritte contando i fotogrammi video, inserire un valore di FPS errato nella formula causerà una progressiva perdita di sincronia. Se la frequenza impostata è più alta di quella reale, i sottotitoli appariranno in ritardo; se è più bassa, compariranno prima che l'attore parli.",
        "Ad esempio, un film a 23.976 FPS (standard cinematografico / Blu-ray americano) convertito erroneamente a 25.000 FPS accumulerà circa 2,5 secondi di anticipo ogni minuto. Trascorsi appena 20 minuti di riproduzione, il disallineamento supererà i 50 secondi, rendendo la visione incomprensibile.",
        "La tabella seguente riassume le frequenze fotogrammi convenzionali del settore cine-televisivo. Consigliamo di verificare sempre il file con VLC Media Player (Ctrl+J) o con l'utility MediaInfo prima di procedere con la conversione."
    ],
    "fpsTable": [
        {
            "fps": "23.976 FPS",
            "standard": "Cinema NTSC / Standard 24p",
            "useCase": "Lungometraggi cinematografici, Blu-ray di anime e serie per piattaforme di streaming."
        },
        {
            "fps": "24.000 FPS",
            "standard": "Cinema Digitale DCI",
            "useCase": "Proiezioni cinematografiche digitali, master DCP e produzioni europee d'autore."
        },
        {
            "fps": "25.000 FPS",
            "standard": "Trasmissioni PAL / SECAM",
            "useCase": "Televisione italiana, europea, australiana e dischi DVD in formato PAL."
        },
        {
            "fps": "29.970 FPS",
            "standard": "Televisione NTSC",
            "useCase": "Programmi televisivi in Nord America e Giappone, documentari su DVD e videocamere."
        },
        {
            "fps": "30.000 FPS",
            "standard": "Video Digitale per Web",
            "useCase": "Video online datati, registrazioni di schermate e filmati acquisiti da smartphone."
        },
        {
            "fps": "50.000 FPS",
            "standard": "Alta Frequenza PAL",
            "useCase": "Dirette sportive europee e trasmissioni televisive in alta definizione a 50 Hz."
        },
        {
            "fps": "59.940 / 60 FPS",
            "standard": "Alta Frequenza NTSC / Gaming",
            "useCase": "Video di videogiochi a 60 fps su YouTube, riprese d'azione e telecamere ad alta velocità."
        }
    ],
    "mathTitle": "La Matematica Dietro la Conversione Basata su Fotogrammi",
    "mathSubtitle": "Ecco come le indicazioni orarie vengono convertite in numeri di fotogramma precisi.",
    "mathFormula": "Numero Fotogramma = Math.round((Tempo_in_Millisecondi / 1000) × FPS_del_Video)",
    "mathExplanation": [
        "1. Calcolo del Tempo: Il convertitore ricava i tempi iniziale e finale dal blocco SRT (es. 00:01:24,500) e li trasforma in millisecondi totali: (1 min × 60.000 ms) + (24 s × 1.000 ms) + 500 ms = 84.500 millisecondi (84,500 secondi).",
        "2. Moltiplicazione per gli FPS: I secondi vengono moltiplicati per il frame rate del video. A 25.000 FPS (PAL): 84,500 × 25 = 2.112,5. Arrotondando all'intero più vicino si ottiene il Fotogramma Iniziale 2113.",
        "3. Fotogramma Finale: Se la battuta termina a 00:01:28,000 (88,000 secondi), il calcolo è: 88,000 × 25 = 2.200. La stringa finale risulta {2113}{2200}.",
        "4. Salvaguardia di Durata Minima: Se una battuta brevissima restituisce lo stesso numero di fotogramma sia all'inizio che alla fine, il sistema incrementa automaticamente la fine di 1 per garantire la visibilità del testo."
    ],
    "exampleTitle": "Prima e Dopo: Esempio di Conversione da SRT a MicroDVD e SubViewer",
    "exampleIntro": "Guarda come un sottotitolo SubRip multilinea con formattazione standard viene convertito nei formati MicroDVD e SubViewer 2.0.",
    "exampleSrtInput": "1\n00:01:20,100 --> 00:01:23,450\nBenvenuti alla presentazione!\nGodetevi questo film in alta definizione.\n\n2\n00:01:24,500 --> 00:01:28,000\nCreato da <i>SRTConverters</i>.\nVisitate il nostro sito oggi stesso!",
    "exampleMicroDvdOutput": "{1}{1}25.000\n{2003}{2086}Benvenuti alla presentazione!|Godetevi questo film in alta definizione.\n{2113}{2200}Creato da SRTConverters.|Visitate il nostro sito oggi stesso!",
    "exampleSubViewerOutput": "[INFORMATION]\n[TITLE]Converted with SRTConverters\n[AUTHOR]SRTConverters\n[SOURCE]\n[PRG]SRT to SUB Converter\n[FILEPATH]\n[DELAY]0\n[CD TRACK]0\n[COMMENT]Free Online Subtitle Converter\n[END INFORMATION]\n[SUBTITLE]\n[COLF]&H00FFFFFF,[STYLE]no,[SIZE]18,[FONT]Arial\n00:01:20.10,00:01:23.45\nBenvenuti alla presentazione![br]Godetevi questo film in alta definizione.\n\n00:01:24.50,00:01:28.00\nCreato da SRTConverters.[br]Visitate il nostro sito oggi stesso!",
    "exampleExplanation": "Nota come MicroDVD unisca le due righe di testo tramite la barra verticale (|) e sostituisca i millisecondi con i fotogrammi a 25 FPS ({2003}{2086}). SubViewer 2.0 mantiene la misurazione in centesimi (00:01:20.10,00:01:23.45) e connette le righe con [br]. In entrambi gli output i tag HTML come <i> sono rimossi per garantire la massima stabilità sui lettori hardware.",
    "formatsComparisonTitle": "MicroDVD vs. SubViewer vs. VobSub: Chiarire l'Ambiguità dell'Estensione .SUB",
    "formatsComparisonSubtitle": "Perché l'estensione .sub può denotare file tecnicamente incompatibili fra loro.",
    "formatsComparisonText": [
        "Una delle maggiori fonti di equivoco nel settore video risiede nel fatto che tre tecnologie completamente differenti condividono la medesima estensione '.sub':",
        "1. MicroDVD (.sub): Un file di testo snello con battute indicizzate tramite numeri di fotogramma ({inizio}{fine}testo). È il formato prodotto dal nostro strumento e richiesto dai lettori DVD da salotto e decoder DivX.",
        "2. SubViewer 2.0 (.sub): Un file di testo con intestazione [INFORMATION] e timestamp in centesimi di secondo, anch'esso generato dal nostro portale.",
        "3. VobSub (.sub + .idx): Un formato binario estratto direttamente dai dischi DVD commerciali. I file VobSub NON contengono testo modificabile, bensì pacchetti grafici compressi (bitmap) dei sottotitoli originali abbinati a un indice (.idx). Non possono essere letti con normali elaboratori di testo senza prima effettuare un riconoscimento OCR."
    ],
    "ffmpegTitle": "Come Convertire SRT in SUB dalla Riga di Comando con FFmpeg",
    "ffmpegSubtitle": "Automatizza la conversione di intere cartelle di filmati tramite il tool open source FFmpeg.",
    "ffmpegCommand": "ffmpeg -i input.srt -c:s microdvd -r 23.976 output.sub",
    "ffmpegExplanation": [
        "-i input.srt: Specifica il file di sottotitoli SubRip sorgente.",
        "-c:s microdvd: Imposta il codec per generare un flusso in formato MicroDVD .sub.",
        "-r 23.976: Fissa il frame rate con cui calcolare i numeri dei fotogrammi (imposta su 24, 25 o 29.97 a seconda del video).",
        "output.sub: Nome e percorso del file MicroDVD di destinazione."
    ],
    "useCasesTitle": "5 Scenari d'Uso Pratici per la Conversione da SRT a SUB",
    "useCasesSubtitle": "I casi più frequenti in cui è indispensabile disporre di file SUB con riferimenti a fotogrammi.",
    "useCasesList": [
        {
            "title": "1. Masterizzazione di Dischi AVI/DivX per Lettori DVD da Salotto",
            "description": "Numerosi lettori DVD con ingresso USB leggono i file video AVI, ma per visualizzare i sottotitoli richiedono inderogabilmente un file .sub con il medesimo nome (es. film.avi e film.sub)."
        },
        {
            "title": "2. Schermi Multimediali e Monitor Integrati nelle Automobili",
            "description": "I lettori integrati su cruscotti e poggiatesta delle vetture utilizzano firmware compatti che decodificano i sottotitoli MicroDVD .sub con eccezionale fluidità."
        },
        {
            "title": "3. Media Player su Console di Gioco Rétro",
            "description": "Applicazioni su console storiche come la prima Xbox (XBMC) o PlayStation 2 (SMS Player) riproducono i sottotitoli MicroDVD senza alcun rallentamento della grafica video."
        },
        {
            "title": "4. Creazione di Dischi in Programmi di Authoring Tradizionali",
            "description": "Software di authoring DVD classici come DVD Maestro, Scenarist e Sonic DVDit accettano elenchi di testo indicizzati per fotogrammi per creare le tracce dei sottotitoli."
        },
        {
            "title": "5. Verifica Fotogramma per Fotogramma nel Montaggio Video",
            "description": "I montatori possono confrontare i numeri dei fotogrammi di un file MicroDVD con la testina della timeline per accertarsi che i dialoghi compaiano esattamente sul cambio scena."
        }
    ],
    "troubleshootTitle": "Risoluzione dei Problemi Comuni nella Conversione SRT in SUB",
    "troubleshootSubtitle": "Suggerimenti immediati per correggere anticipi audio, righe compresse e caratteri illeggibili.",
    "troubleshootTips": [
        {
            "issue": "I sottotitoli perdono progressivamente la sincronia con l'audio",
            "cause": "La frequenza fotogrammi (FPS) indicata non coincide con quella del video (es. conversione a 25 FPS per un video registrato a 23.976 FPS).",
            "solution": "Apri il video con VLC Media Player, premi Ctrl+J per visualizzare Dettagli codec, individua i Fotogrammi al secondo effettivi e riconverti il file SRT con tale valore."
        },
        {
            "issue": "Le battute su più righe compaiono schiacciate su una riga unica",
            "cause": "Il lettore non gestisce la barra verticale (|) adottata da MicroDVD come separatore di riga.",
            "solution": "Aggiorna il software del dispositivo o seleziona il formato SubViewer 2.0 che adotta tag espliciti [br] per andare a capo."
        },
        {
            "issue": "Il lettore DVD non legge il file o segnala un errore di formato",
            "cause": "Alcuni apparecchi pretendono che la prima riga dichiari esplicitamente il frame rate per avviare il decodificatore.",
            "solution": "Assicurati di spuntare la casella 'Includi Intestazione FPS'. In questo modo la riga {1}{1}FPS verrà inserita in cima al documento."
        },
        {
            "issue": "Lettere accentate o caratteri speciali appaiono come simboli strani (mojibake)",
            "cause": "Il file SRT di origine era in formato UTF-8, mentre il lettore fisico riconosce solo la codifica ANSI o Windows-1252.",
            "solution": "Apri il file .sub convertito con il Blocco note di Windows, fai clic su File > Salva con nome e seleziona la codifica ANSI o UTF-8 a seconda delle specifiche del dispositivo."
        }
    ],
    "workflowTitle": "Metodologia Professionale per Sottotitoli su Dispositivi Fisici",
    "workflowSubtitle": "Le migliori pratiche per preparare, convertire e verificare i file con totale affidabilità.",
    "workflowSteps": [
        "Fase 1: Verificare il Video — Apri il filmato in VLC o MediaInfo per determinare durata, contenitore e gli esatti FPS (es. 23.976 o 25.000 FPS).",
        "Fase 2: Controllare il File SRT — Assicurati che non vi siano timestamp sovrapposti, durate negative o tag che possano disorientare i decoder fisici.",
        "Fase 3: Convertire con SRTConverters — Incolla o carica il file, seleziona la frequenza corretta, lascia spuntata l'intestazione e scarica il file .sub.",
        "Fase 4: Denominare Correttamente i File — Assegna al file .sub esattamente lo stesso nome del file video nella medesima cartella (es. film.avi e film.sub).",
        "Fase 5: Prova Finale sull'Apparecchio — Copia i file su una chiavetta USB in formato FAT32, collegala al lettore e verifica la sincronia nei primi 10 minuti di visione."
    ],
    "conclusionTitle": "Riepilogo e Considerazioni Finali",
    "conclusionText": [
        "La conversione dei sottotitoli SubRip (.srt) nel formato SUB (MicroDVD o SubViewer) unisce i moderni flussi multimediali ai collaudati dispositivi fisici da salotto. Comprendendo la funzione fondamentale della frequenza fotogrammi e applicando formule di conversione matematicamente esatte, si garantisce un'esperienza di visione piacevole e priva di sfasamenti.",
        "SRTConverters ti offre uno strumento online immediato, gratuito e totalmente riservato, compatibile con tutte le frequenze industriali. I tuoi sottotitoli saranno pronti per qualsiasi display."
    ]
},
};

export function getSrtToSubGuideContent(locale: Locale): SrtToSubGuideContent {
  return SRT_TO_SUB_GUIDES[locale] || SRT_TO_SUB_GUIDES.en;
}
