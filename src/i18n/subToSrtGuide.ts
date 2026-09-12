import type { Locale } from './config';

export interface SubToSrtGuideContent {
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
  exampleSubInput: string;
  exampleSrtOutput: string;
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

export const SUB_TO_SRT_GUIDES: Record<Locale, SubToSrtGuideContent> = {
  en: {
  "introTitle": "The Complete Guide to Converting SUB Subtitles to SRT Format",
  "introSubtitle": "Master the transition from legacy frame-indexed MicroDVD and timestamped SubViewer (.sub) subtitles to universally compatible SubRip (.srt). Learn the underlying mathematics of frame-to-time conversion, command-line FFmpeg operations, and proven troubleshooting techniques for frame-accurate synchronization.",
  "introText": [
    "For decades, the .sub file extension has been a ubiquitous fixture in digital video playback, home video ripping, and multimedia entertainment. Yet, anyone attempting to play an older video file with an accompanying .sub subtitle on a modern Smart TV, smartphone, web player, or video editing suite will almost inevitably encounter playback failures, missing text, or severe desynchronization. In contrast, SubRip (.srt) has established itself as the undisputed, universal standard for text subtitles worldwide.",
    "The primary technical obstacle when dealing with .sub files stems from format fragmentation. Unlike modern subtitle standards that store timecodes as absolute clock hours, minutes, seconds, and milliseconds, the most widely used text-based SUB format—MicroDVD—stores dialogue timing as raw video frame numbers. The subtitle file itself contains no concept of clock time; it merely dictates that a line should appear at Frame 1500 and disappear at Frame 1650. Consequently, converting MicroDVD SUB subtitles to standard SRT requires an accurate mathematical transformation based on the exact frame rate (FPS) of the accompanying video file.",
    "Whether you are digitizing an archive of classic cinema, preparing video assets for YouTube or streaming platforms, or editing subtitles in Premiere Pro, DaVinci Resolve, or Final Cut Pro, this comprehensive technical guide will equip you with everything you need. From frame-accurate timestamp calculation formulas and command-line FFmpeg scripts to in-depth format architecture comparisons and common troubleshooting workflows, you will gain full mastery over SUB to SRT conversion."
  ],
  "whatIsTitle": "Understanding SUB and SRT: Frame-Indexed Subtitles vs. Universal Timecodes",
  "whatIsText": [
    "SubRip (.srt) was created in the late 1990s as part of Brain's SubRip software to rip and store DVD subtitle text in an open, lightweight format. An SRT file is structured with extreme simplicity: each cue consists of an incremental numeric counter (1, 2, 3...), a start-and-end timestamp delimited by ' --> ' with millisecond precision (HH:MM:SS,mmm), one or more lines of dialogue text, and a blank separator line. This structural simplicity has made SRT natively supported across virtually every modern media player, operating system, video editing platform, and online video hosting provider in existence.",
    "The .sub extension, on the other hand, represents a legacy landscape divided across three completely different technologies: MicroDVD (.sub), SubViewer (.sub), and VobSub (.sub). MicroDVD was engineered in 1999–2001 by Tias Software specifically for early MPEG-4, DivX 3.11, and XviD media files. Instead of using real-world time, each subtitle cue is indexed by the exact video frame numbers at which it appears and disappears, using curly braces: {start_frame}{end_frame}Subtitle line. Multiple dialogue lines are delimited by vertical pipe characters (|).",
    "SubViewer (.sub), created by David Vignoni for the SubViewer player, is a text-based format that uses a metadata header ([INFORMATION]) followed by centisecond timestamps (HH:MM:SS.cs,HH:MM:SS.cs) and [br] tags for line breaks. Meanwhile, VobSub (.sub + .idx) is an entirely different beast: it is a binary container holding raw bitmap graphic images extracted directly from DVD video discs. Understanding which type of .sub file you possess is the foundational first step toward successful conversion."
  ],
  "whyConvertTitle": "Why Convert SUB Subtitles to SRT?",
  "whyConvertSubtitle": "Discover the critical advantages of migrating from legacy .sub files to modern, standardized SubRip (.srt) subtitles.",
  "whyConvertReasons": [
    {
      "title": "Universal Player & Device Compatibility",
      "description": "SRT is natively supported by 100% of modern media players (VLC, MPC-HC, IINA, MPV), mobile operating systems (iOS, Android), Smart TVs (Samsung Tizen, LG webOS, Android TV), and streaming devices (Roku, Apple TV, Chromecast) without requiring legacy codec packs or specialized plugins."
    },
    {
      "title": "Ready for Web & Streaming Platforms",
      "description": "Major video platforms like YouTube, Vimeo, Facebook, and modern HTML5 web video players reject frame-indexed .sub files entirely. Converting to SRT allows immediate upload, automatic closed-captioning, and seamless browser-based playback."
    },
    {
      "title": "Elimination of Frame Rate Dependency",
      "description": "MicroDVD subtitles are locked to a specific video frame rate. If you encode, transcode, or change the playback speed of the video, frame-based subtitles instantly break. SRT uses absolute clock timecodes, making the subtitles independent of display refresh rates or video frame interpolation."
    },
    {
      "title": "Seamless Subtitle Editing & Translation",
      "description": "Modern subtitle editors (Subtitle Edit, Aegisub, Jubler) and professional NLE editing suites (Adobe Premiere Pro, Blackmagic DaVinci Resolve, Apple Final Cut Pro) offer full native support for SRT, making timing adjustments, spell-checking, and localization effortless."
    }
  ],
  "howToTitle": "How to Convert SUB to SRT Online in 3 Simple Steps",
  "howToSubtitle": "Convert your MicroDVD or SubViewer .sub files into clean, synchronized .srt subtitles directly in your browser without software installation.",
  "howToSteps": [
    {
      "step": "1",
      "title": "Upload or Paste Your SUB Subtitles",
      "description": "Drag and drop your .sub file into the designated dropzone, click to browse your local files, or copy and paste your subtitle text directly into the input editor."
    },
    {
      "step": "2",
      "title": "Verify Video Frame Rate (FPS)",
      "description": "Our converter automatically detects whether your file is MicroDVD or SubViewer. For MicroDVD files, verify your video's frame rate (e.g., 23.976, 24, 25, or 29.97 FPS) so frame numbers convert into exact clock timestamps."
    },
    {
      "step": "3",
      "title": "Download Converted SRT File",
      "description": "Click Download .SRT to instantly save your converted SubRip file to your device, or use the Copy to Clipboard button to paste your standardized subtitles into any text or subtitle editor."
    }
  ],
  "differenceTitle": "Technical Comparison: SUB (MicroDVD & SubViewer) vs. SRT",
  "differenceSubtitle": "A detailed side-by-side comparison of timing mechanisms, file structures, platform support, and formatting features.",
  "differenceTable": [
    {
      "feature": "Timing Mechanism",
      "srt": "Absolute clock time (HH:MM:SS,mmm)",
      "microdvd": "Video frame numbers ({start}{end})",
      "subviewer": "Absolute clock time (HH:MM:SS.cs)"
    },
    {
      "feature": "Time Precision / Unit",
      "srt": "1 millisecond (1/1000 second)",
      "microdvd": "1 video frame (1/FPS second)",
      "subviewer": "1 centisecond (1/100 second)"
    },
    {
      "feature": "File Structure",
      "srt": "Numbered blocks separated by blank lines",
      "microdvd": "One line per cue with frame brackets",
      "subviewer": "Header section, timestamp line, text line(s)"
    },
    {
      "feature": "Multiline Delimiter",
      "srt": "Standard newline (CRLF or LF)",
      "microdvd": "Vertical pipe character (|)",
      "subviewer": "[br] tag or newline"
    },
    {
      "feature": "Styling Capabilities",
      "srt": "Basic HTML (<i>, <b>, <u>, <font color>)",
      "microdvd": "Legacy control tags ({Y:i}, {Y:b}, {C:$BBGGRR})",
      "subviewer": "Header metadata fonts & basic tags"
    },
    {
      "feature": "Modern Player Support",
      "srt": "100% universal across all hardware & software",
      "microdvd": "Limited to VLC and legacy desktop players",
      "subviewer": "Rarely supported outside desktop media players"
    },
    {
      "feature": "Web & Streaming Support",
      "srt": "Universal (YouTube, Vimeo, HTML5 <track> via VTT)",
      "microdvd": "Unsupported (requires transcoding to SRT/VTT)",
      "subviewer": "Unsupported on modern streaming platforms"
    },
    {
      "feature": "Frame Rate Dependency",
      "srt": "Zero dependency (clock-based)",
      "microdvd": "Strictly tied to video FPS",
      "subviewer": "Zero dependency (clock-based)"
    }
  ],
  "fpsGuideTitle": "The Role of Video Frame Rate (FPS) in SUB to SRT Conversion",
  "fpsGuideSubtitle": "Why accurate frame rate matching is essential when translating video frame numbers into absolute clock timestamps.",
  "fpsGuideText": [
    "When converting MicroDVD (.sub) files to SRT, understanding video frame rates is not optional—it is the single most critical factor determining whether your converted subtitles will play in perfect harmony with the audio or fail with unwatchable timing errors. Because MicroDVD cues are indexed by frame numbers rather than real-world seconds, the converter must divide the frame number by the video's exact frames per second (FPS) to compute the corresponding timecode.",
    "If you convert a subtitle file with the wrong frame rate, the timing error does not stay constant—it compounds continuously throughout the entire playback duration. For instance, converting a 23.976 FPS cinema film using a 25.000 FPS PAL setting creates a speed discrepancy of approximately 4.1%. After 10 minutes, the subtitles will appear 25 seconds too early; after an hour, they will be out of sync by more than two and a half minutes! Always check your video file's true frame rate before converting."
  ],
  "fpsTable": [
    {
      "fps": "23.976 FPS (24000/1001)",
      "standard": "NTSC Film / Blu-ray / Web Cinema",
      "useCase": "The standard frame rate for theatrical movies, North American Blu-ray releases, and high-end streaming video."
    },
    {
      "fps": "24.000 FPS",
      "standard": "True Cinema / DCI",
      "useCase": "Theatrical projection standard and digital cinema packages (DCP), commonly used in festival screenings."
    },
    {
      "fps": "25.000 FPS",
      "standard": "PAL / SECAM Broadcast",
      "useCase": "European, Australian, and Asian television broadcasts, European DVDs, and standard video productions."
    },
    {
      "fps": "29.970 FPS (30000/1001)",
      "standard": "NTSC Broadcast",
      "useCase": "Standard-definition and high-definition television broadcast in North America, Japan, and South Korea."
    },
    {
      "fps": "30.000 FPS",
      "standard": "Web Video / Legacy Digital",
      "useCase": "Commonly used in early smartphone recording, web cams, and computer-generated screen recordings."
    },
    {
      "fps": "50.000 FPS",
      "standard": "PAL High Frame Rate (HFR)",
      "useCase": "European sports broadcasts, live event television, and progressive European broadcast feeds (720p50 / 1080p50)."
    },
    {
      "fps": "59.940 FPS (60000/1001)",
      "standard": "NTSC High Frame Rate",
      "useCase": "North American sports television, video game capture, and 60p web streaming broadcasts."
    },
    {
      "fps": "60.000 FPS",
      "standard": "Gaming / Digital Display",
      "useCase": "Computer monitors, modern smartphone cameras, 60 FPS YouTube gameplay videos, and high-motion content."
    }
  ],
  "mathTitle": "The Mathematics of Frame-to-Time Conversion",
  "mathSubtitle": "How frame numbers are mathematically transformed into hours, minutes, seconds, and milliseconds.",
  "mathFormula": "Time in Milliseconds = Math.round((Frame Number / Video FPS) * 1000)",
  "mathExplanation": [
    "To understand how our converter translates MicroDVD frame numbers into standard SubRip timecodes, consider a concrete calculation: suppose a subtitle cue in a MicroDVD file is defined as {1440}{1560}Dialogue line, and your video file plays at 24.000 FPS.",
    "To calculate the start time: 1440 divided by 24.000 equals exactly 60.000 seconds (60,000 milliseconds). In SRT format, this is formatted as 00:01:00,000. For the end time: 1560 divided by 24.000 equals 65.000 seconds (65,000 milliseconds), yielding 00:01:05,000. The resulting SRT cue becomes: 00:01:00,000 --> 00:01:05,000.",
    "Now consider the same frame number (1440) for a video recorded at 23.976 FPS (23.976023976...): 1440 / 23.976023976 = 60.060 seconds (60,060 milliseconds), which formats as 00:01:00,060. Although the difference is only 60 milliseconds at the one-minute mark, over a two-hour movie this fractional difference accumulates into a substantial timing error if calculated with an incorrect frame rate."
  ],
  "exampleTitle": "Concrete SUB to SRT Conversion Example",
  "exampleIntro": "Compare an original MicroDVD subtitle file against the clean, standardized SubRip output generated by our converter.",
  "exampleSubInput": "{1}{1}25.000\n{25}{75}Welcome to the film festival!\n{100}{175}Tonight we present the premiere|of our international documentary.\n{200}{275}{Y:i}Narrator: The journey began in 1998...\n{300}{375}Thank you for watching.|Enjoy the screening!",
  "exampleSrtOutput": "1\n00:00:01,000 --> 00:00:03,000\nWelcome to the film festival!\n\n2\n00:00:04,000 --> 00:00:07,000\nTonight we present the premiere\nof our international documentary.\n\n3\n00:00:08,000 --> 00:00:11,000\n<i>Narrator: The journey began in 1998...</i>\n\n4\n00:00:12,000 --> 00:00:15,000\nThank you for watching.\nEnjoy the screening!",
  "exampleExplanation": "In this example, the input MicroDVD file contains an embedded {1}{1}25.000 header, which our converter automatically detected to set the conversion speed to 25.000 FPS. Frame 25 converted to 1.000s (00:00:01,000) and frame 75 converted to 3.000s (00:00:03,000). Notice that the vertical pipe delimiter (|) on cue 2 was cleanly converted into a natural subtitle line break, and the legacy {Y:i} italic tag on cue 3 was automatically transformed into a valid HTML <i> tag recognized by all modern video players.",
  "formatsComparisonTitle": "MicroDVD (.sub) vs. SubViewer (.sub) vs. VobSub (.sub)",
  "formatsComparisonSubtitle": "Deciphering the three completely different subtitle technologies that share the .sub file extension.",
  "formatsComparisonText": [
    "One of the most confusing aspects of digital video management is that three entirely incompatible subtitle formats share the identical .sub file extension. If you open a .sub file in a plain text editor (such as Notepad, TextEdit, or VS Code), you can immediately tell which format you are dealing with.",
    "If the file starts with curly brackets containing integers (such as {1}{1}25.000 or {50}{120}Hello), it is a MicroDVD text file. If the file opens with an [INFORMATION] section followed by timestamps separated by commas (such as 00:01:25.50,00:01:28.10), it is a SubViewer text file. Both of these formats are 100% supported by our converter and will convert into clean SRT subtitles instantly.",
    "However, if opening the file reveals garbled binary characters, unreadable symbols, or if the file was extracted alongside a matching .idx file, you have a VobSub binary subtitle package. VobSub files do not contain text—they contain compressed bitmap images of DVD subtitles. Converting VobSub to SRT requires Optical Character Recognition (OCR) software such as Subtitle Edit or BDSup2Sub. Our converter automatically detects binary VobSub files and alerts you immediately."
  ],
  "ffmpegTitle": "Converting SUB to SRT via Command Line (FFmpeg)",
  "ffmpegSubtitle": "Automated subtitle transcoding commands for power users, developers, and media pipeline engineers.",
  "ffmpegCommand": "# Convert timestamped SubViewer (.sub) to SubRip (.srt)\nffmpeg -i input.sub output.srt\n\n# Convert frame-indexed MicroDVD (.sub) with specified frame rate (23.976 FPS)\nffmpeg -r 23.976 -i input.sub output.srt\n\n# Convert MicroDVD with legacy Windows-1252 (ANSI) character encoding\nffmpeg -sub_charenc CP1252 -r 25 -i input.sub output.srt\n\n# Batch convert all .sub files in a directory on Windows PowerShell\nGet-ChildItem *.sub | ForEach-Object { ffmpeg -r 23.976 -i $_.FullName ($_.BaseName + \".srt\") }",
  "ffmpegExplanation": [
    "FFmpeg is a powerful command-line multimedia framework capable of transcoding, muxing, and demuxing video, audio, and subtitle streams. When converting SubViewer (.sub) files, FFmpeg can parse the timecodes directly because they are already clock-based.",
    "However, when converting MicroDVD (.sub) files, you MUST specify the video frame rate using the -r flag before the -i input argument. Without the -r parameter, FFmpeg defaults to a standard 25 FPS rate, which will desynchronize subtitles for any video encoded at 23.976, 29.97, or 30 FPS.",
    "Furthermore, legacy SUB files were frequently saved using regional ANSI character encodings (such as Windows-1252 for Western European, Windows-1250 for Central European, or Windows-1254 for Turkish) rather than modern UTF-8. Using the -sub_charenc flag ensures that accented characters and special symbols are transcoded into valid UTF-8 without question marks or corruption."
  ],
  "useCasesTitle": "Common Scenarios for SUB to SRT Conversion",
  "useCasesSubtitle": "Practical situations where transforming legacy .sub subtitles into standard .srt is essential.",
  "useCasesList": [
    {
      "title": "Playing Movies on Modern Smart TVs & Streaming Devices",
      "description": "Smart TVs from Samsung, LG, Sony, and streaming boxes like Apple TV and Roku cannot parse frame-indexed MicroDVD subtitles. Converting to SRT allows native subtitle playback via USB drives, DLNA, or Plex/Emby home servers."
    },
    {
      "title": "Publishing Videos to YouTube, Vimeo, and Social Platforms",
      "description": "Online video hosting platforms require standard closed-caption formats (SRT, VTT). Uploading converted SRT files enables viewer captions, improves video accessibility, and boosts algorithmic SEO rankings."
    },
    {
      "title": "Professional Video Editing in Premiere, DaVinci & Final Cut",
      "description": "Video editing software cannot import frame-indexed .sub files into the subtitle track. SRT provides instant, track-based integration with customizable fonts, styles, animations, and burnt-in export options."
    },
    {
      "title": "Digital Archiving & Long-Term Preservation",
      "description": "Preserving video collections with proprietary or obsolete subtitle formats risks future incompatibility. Converting your legacy subtitle archive to open, UTF-8 encoded SRT ensures accessibility across all future computing platforms."
    }
  ],
  "troubleshootTitle": "Troubleshooting Common SUB to SRT Conversion Issues",
  "troubleshootSubtitle": "Quick diagnosis and practical solutions for subtitle desynchronization, encoding artifacts, and VobSub errors.",
  "troubleshootTips": [
    {
      "issue": "Subtitles progressively drift out of sync during video playback",
      "cause": "The video frame rate (FPS) selected during conversion did not match the true frame rate of your video stream (e.g., converted at 25 FPS instead of 23.976 FPS).",
      "solution": "Open your video file in VLC Media Player, press Ctrl+J (or Cmd+I) to open Codec Information, check the exact Frame rate, return to our converter, select the matching FPS option, and re-download your SRT file."
    },
    {
      "issue": "Accented characters appear corrupted, scrambled, or as question marks",
      "cause": "The original .sub file was saved in a legacy regional ANSI encoding (e.g., Windows-1252 or ISO-8859-1) rather than standard UTF-8.",
      "solution": "Open the .sub file in Notepad or VS Code, select File > Save As, choose UTF-8 from the Encoding dropdown menu, save the file, and convert it again using our browser tool."
    },
    {
      "issue": "The converter displays an alert that the file is a binary VobSub file",
      "cause": "The file you uploaded is a compiled binary DVD graphic packet (.sub + .idx) containing bitmap pictures rather than text characters.",
      "solution": "Use a dedicated desktop OCR subtitle utility such as Subtitle Edit (Windows/Linux) or OCR-SubRip. These tools visually inspect the bitmap letters and generate standard editable text SRT files."
    },
    {
      "issue": "Subtitle lines appear joined together or vertical pipe (|) symbols remain",
      "cause": "The file used an uncommon delimiter or formatting tags were disabled during the conversion process.",
      "solution": "Ensure that the 'Convert Formatting Tags' toggle is enabled in the converter settings. Our tool automatically splits vertical pipe characters into clean, standard multi-line subtitle cues."
    }
  ],
  "workflowTitle": "Recommended Subtitle Processing Workflow",
  "workflowSubtitle": "Best practices for converting, synchronizing, and embedding your subtitles into modern video workflows.",
  "workflowSteps": [
    "Step 1: Inspect the Video Properties — Open your video in VLC or MediaInfo to determine the exact frame rate (e.g., 23.976 or 25.000 FPS) and audio language.",
    "Step 2: Convert SUB to SRT — Upload your .sub file to our online converter, verify the matching FPS setting, and download your clean, UTF-8 encoded .srt file.",
    "Step 3: Verify Playback Synchronization — Open the video file alongside the newly converted .srt in VLC to confirm that dialogue cues align with spoken audio at the beginning, middle, and end of the video.",
    "Step 4: Embed or Distribute — Mux the SRT subtitle stream directly into an MP4 or MKV container using MKVToolNix or FFmpeg, or upload it as an external closed-caption track on your hosting platform."
  ],
  "conclusionTitle": "Conclusion: Unlock Flawless Subtitle Compatibility",
  "conclusionText": [
    "Migrating from legacy frame-indexed SUB subtitles to modern, open SubRip (.srt) files is the single most effective way to guarantee seamless playback across all your devices, players, and editing software. By properly calculating millisecond timecodes from video frame counts, our SUB to SRT converter ensures frame-perfect audio synchronization without tedious manual timing adjustments.",
    "Best of all, SRTConverters processes 100% of your subtitle files locally inside your web browser. With zero server uploads, complete confidential privacy, and instant conversion speeds, you can convert your entire subtitle collection with confidence. Bookmark this page and explore our full suite of subtitle conversion tools for all your video workflow needs."
  ]
},
  es: {
  "introTitle": "Guía Completa para Convertir Subtítulos SUB al Formato SRT",
  "introSubtitle": "Domina la transición desde subtítulos heredados MicroDVD basados en fotogramas y SubViewer (.sub) al estándar universal SubRip (.srt). Aprende la matemática subyacente de conversión de fotogramas a tiempo, comandos de terminal con FFmpeg y técnicas de resolución de problemas para lograr una sincronización perfecta.",
  "introText": [
    "Durante décadas, la extensión de archivo .sub ha sido un estándar recurrente en la reproducción de vídeo digital, la copia de discos DVD y el entretenimiento multimedia. Sin embargo, cualquier usuario que intente reproducir un archivo .sub antiguo junto a un vídeo en un televisor inteligente moderno, un teléfono móvil, un reproductor web o un programa de edición sufrirá errores de reproducción, textos omitidos o graves desfases de sincronización. Por el contrario, SubRip (.srt) se ha consolidado como el estándar universal indiscutible para subtítulos de texto en todo el mundo.",
    "El principal obstáculo técnico al trabajar con archivos .sub proviene de la fragmentación de formatos. A diferencia de las normas de subtitulado modernas que almacenan marcas de tiempo en horas, minutos, segundos y milisegundos reales, el formato SUB de texto más extendido—MicroDVD—guarda los tiempos como números de fotogramas del vídeo. El propio archivo de subtítulos carece de noción de hora; únicamente indica que una línea debe mostrarse en el fotograma 1500 y desaparecer en el 1650. Por ello, convertir subtítulos MicroDVD a SRT requiere una transformación matemática rigurosa basada en la velocidad de fotogramas (FPS) del vídeo.",
    "Tanto si estás digitalizando una colección de cine clásico como si preparas contenidos para YouTube o plataformas de streaming, o editas pistas de subtítulos en Premiere Pro, DaVinci Resolve o Final Cut Pro, esta guía técnica te proporcionará todo lo necesario. Desde fórmulas de conversión matemática y comandos de FFmpeg hasta comparativas de arquitectura y soluciones a errores comunes, obtendrás el control total sobre la conversión de SUB a SRT."
  ],
  "whatIsTitle": "Entendiendo SUB y SRT: Subtítulos por Fotogramas vs. Tiempos Universales",
  "whatIsText": [
    "SubRip (.srt) nació a finales de la década de 1990 dentro del software de extracción de DVDs creado por Brain, con el propósito de guardar subtítulos en un formato abierto y ligero. Su estructura es sumamente clara: cada bloque contiene un número correlativo (1, 2, 3...), una marca de tiempo de inicio y fin separada por ' --> ' con precisión de milisegundos (HH:MM:SS,mmm), una o varias líneas de diálogo y una línea en blanco de separación. Esta sencillez estructural permite que SRT sea compatible de forma nativa con casi cualquier reproductor, sistema operativo o editor de vídeo actual.",
    "Por otro lado, la extensión .sub engloba tres tecnologías radicalmente diferentes: MicroDVD (.sub), SubViewer (.sub) y VobSub (.sub). MicroDVD fue desarrollado entre 1999 y 2001 por Tias Software para los primeros reproductores de vídeo en formato DivX y XviD. En lugar de emplear marcas de tiempo, cada diálogo se define mediante el número de fotograma en el que aparece y desaparece entre llaves: {fotograma_inicio}{fotograma_fin}Texto del diálogo. Las líneas múltiples se separan con barras verticales (|).",
    "SubViewer (.sub), creado por David Vignoni, es un formato de texto estructurado con una cabecera de metadatos ([INFORMATION]) seguida de marcas de tiempo en centésimas de segundo (HH:MM:SS.cs,HH:MM:SS.cs) y etiquetas [br] para los saltos de línea. Finalmente, VobSub (.sub + .idx) no es texto, sino un contenedor binario con imágenes de mapa de bits extraídas directamente de DVDs comerciales. Saber qué tipo de archivo .sub tienes es el primer paso indispensable para convertirlo con éxito."
  ],
  "whyConvertTitle": "¿Por Qué Convertir Subtítulos SUB a SRT?",
  "whyConvertSubtitle": "Descubre las ventajas técnicas fundamentales de migrar desde archivos .sub heredados hacia el formato estándar SubRip (.srt).",
  "whyConvertReasons": [
    {
      "title": "Compatibilidad Universal con Dispositivos y Reproductores",
      "description": "El formato SRT es compatible de forma nativa con el 100% de los reproductores modernos (VLC, MPC-HC, IINA, MPV), sistemas operativos móviles (iOS, Android), televisores inteligentes (Samsung Tizen, LG webOS, Android TV) y dispositivos de streaming (Roku, Apple TV, Chromecast) sin necesidad de códecs adicionales."
    },
    {
      "title": "Listo para la Web y Plataformas de Streaming",
      "description": "Las plataformas de vídeo como YouTube, Vimeo, Facebook y los reproductores HTML5 rechazan completamente los archivos .sub indexados por fotogramas. Convertir a SRT permite publicar subtítulos al instante y garantizar una visualización fluida en cualquier navegador."
    },
    {
      "title": "Eliminación de la Dependencia de Fotogramas (FPS)",
      "description": "Los subtítulos MicroDVD están atados a la cadencia de imágenes del vídeo original. Si recomprimes, cambias la velocidad o reproduces en pantallas con distinta frecuencia, los fotogramas se desajustan. SRT utiliza tiempo de reloj absoluto, independizándose por completo de los FPS del reproductor."
    },
    {
      "title": "Edición y Traducción Cómoda y Precisa",
      "description": "Los editores de subtítulos profesionales (Subtitle Edit, Aegisub) y las suites de montaje (Adobe Premiere Pro, Blackmagic DaVinci Resolve, Apple Final Cut Pro) ofrecen soporte pleno para SRT, facilitando correcciones ortográficas, ajustes de tiempo y traducciones."
    }
  ],
  "howToTitle": "Cómo Convertir SUB a SRT Online en 3 Sencillos Pasos",
  "howToSubtitle": "Convierte tus archivos MicroDVD o SubViewer .sub en subtítulos .srt limpios y sincronizados directamente en tu navegador sin instalar programas.",
  "howToSteps": [
    {
      "step": "1",
      "title": "Sube o Pega tus Subtítulos SUB",
      "description": "Arrastra y suelta tu archivo .sub en la zona de carga, haz clic para buscarlo en tu equipo o pega el contenido de texto directamente en el editor interactivo."
    },
    {
      "step": "2",
      "title": "Verifica los Fotogramas por Segundo (FPS)",
      "description": "Nuestro conversor detectará automáticamente si el archivo es MicroDVD o SubViewer. Si es MicroDVD, comprueba la tasa de fotogramas del vídeo (ej. 23.976, 24, 25 o 29.97 FPS) para calcular las marcas de tiempo exactas."
    },
    {
      "step": "3",
      "title": "Descarga el Archivo SRT Convertido",
      "description": "Haz clic en Descargar .SRT para guardar el archivo SubRip generado de inmediato o pulsa Copiar al portapapeles para transferir el texto a cualquier editor de texto o subtítulos."
    }
  ],
  "differenceTitle": "Comparativa Técnica: SUB (MicroDVD y SubViewer) vs. SRT",
  "differenceSubtitle": "Una comparación detallada de mecanismos temporales, estructuras de archivo, compatibilidad y funciones de estilo.",
  "differenceTable": [
    {
      "feature": "Mecanismo Temporal",
      "srt": "Tiempo de reloj absoluto (HH:MM:SS,mmm)",
      "microdvd": "Números de fotograma ({inicio}{fin})",
      "subviewer": "Tiempo de reloj absoluto (HH:MM:SS.cs)"
    },
    {
      "feature": "Precisión / Unidad",
      "srt": "1 milisegundo (1/1000 de segundo)",
      "microdvd": "1 fotograma de vídeo (1/FPS segundo)",
      "subviewer": "1 centésima de segundo (1/100 segundo)"
    },
    {
      "feature": "Estructura de Archivo",
      "srt": "Bloques numerados separados por líneas en blanco",
      "microdvd": "Una línea por diálogo con corchetes de fotogramas",
      "subviewer": "Sección de cabecera, línea de tiempo, diálogo"
    },
    {
      "feature": "Salto de Línea Múltiple",
      "srt": "Salto de línea convencional (CRLF o LF)",
      "microdvd": "Carácter de barra vertical o tubería (|)",
      "subviewer": "Etiqueta [br] o salto de línea"
    },
    {
      "feature": "Capacidad de Estilos",
      "srt": "Etiquetas HTML básicas (<i>, <b>, <u>, <font color>)",
      "microdvd": "Códigos propietarios ({Y:i}, {Y:b}, {C:$BBGGRR})",
      "subviewer": "Fuentes en cabecera y estilos básicos"
    },
    {
      "feature": "Compatibilidad Actual",
      "srt": "Universal al 100% en todo software y hardware",
      "microdvd": "Muy limitada (VLC y reproductores antiguos)",
      "subviewer": "Escasa fuera de reproductores de escritorio"
    },
    {
      "feature": "Soporte Web y Streaming",
      "srt": "Universal (YouTube, Vimeo, HTML5 vía VTT)",
      "microdvd": "Incompatible (requiere transcodificación)",
      "subviewer": "Incompatible con plataformas de vídeo modernas"
    },
    {
      "feature": "Dependencia de FPS",
      "srt": "Ninguna (basado en tiempo real)",
      "microdvd": "Estricta (ligada a los FPS del archivo de vídeo)",
      "subviewer": "Ninguna (basado en tiempo real)"
    }
  ],
  "fpsGuideTitle": "El Papel Fundamental de los FPS en la Conversión de SUB a SRT",
  "fpsGuideSubtitle": "Por qué la correspondencia exacta de fotogramas es crucial al transformar índices de fotogramas en horas de reloj.",
  "fpsGuideText": [
    "Al convertir archivos MicroDVD (.sub) a SRT, comprender la velocidad de fotogramas no es un detalle secundario: es el factor determinante para que tus subtítulos se sincronicen de manera impecable con el audio o sufran desfases insoportables. Dado que MicroDVD define cuándo aparece cada réplica según el número de fotograma, el conversor debe dividir dicho número entre la velocidad exacta del vídeo para obtener la marca horaria en milisegundos.",
    "Si realizas la conversión con una tasa de FPS incorrecta, el error temporal no se mantiene fijo, sino que se va acumulando minuto a minuto. Por ejemplo, convertir una película cinematográfica rodada a 23.976 FPS utilizando un ajuste de 25.000 FPS (PAL) genera una aceleración del 4.1%. Tras 10 minutos de reproducción, los subtítulos aparecerán 25 segundos antes de tiempo; al cabo de una hora, la desviación superará los dos minutos y medio. Verifica siempre los FPS reales antes de convertir."
  ],
  "fpsTable": [
    {
      "fps": "23.976 FPS (24000/1001)",
      "standard": "Cine NTSC / Blu-ray / Streaming",
      "useCase": "Cadencia habitual en producciones cinematográficas, lanzamientos Blu-ray en Norteamérica y series de streaming."
    },
    {
      "fps": "24.000 FPS",
      "standard": "Cine Estándar / DCI",
      "useCase": "Estándar de proyección en salas comerciales y paquetes digitales DCP para festivales y estrenos."
    },
    {
      "fps": "25.000 FPS",
      "standard": "Emisión PAL / SECAM",
      "useCase": "Televisión europea, australiana y de parte de Asia, DVDs europeos y producciones televisivas PAL."
    },
    {
      "fps": "29.970 FPS (30000/1001)",
      "standard": "Emisión NTSC",
      "useCase": "Retransmisión televisiva estándar y de alta definición en Norteamérica, Japón y Corea del Sur."
    },
    {
      "fps": "30.000 FPS",
      "standard": "Vídeo Web / Digital Antiguo",
      "useCase": "Grabaciones en smartphones antiguos, cámaras web y capturas de pantalla de ordenador."
    },
    {
      "fps": "50.000 FPS",
      "standard": "PAL Alta Frecuencia (HFR)",
      "useCase": "Retransmisiones deportivas europeas, eventos en directo e informativos en 720p50 o 1080p50."
    },
    {
      "fps": "59.940 FPS (60000/1001)",
      "standard": "NTSC Alta Frecuencia",
      "useCase": "Emisiones deportivas en Norteamérica, capturas de consolas de videojuegos y emisiones web a 60p."
    },
    {
      "fps": "60.000 FPS",
      "standard": "Gaming / Pantallas Modernas",
      "useCase": "Monitores de ordenador, cámaras móviles modernas, gameplay en YouTube y vídeos con alta fluidez."
    }
  ],
  "mathTitle": "La Matemática de la Conversión de Fotograma a Tiempo",
  "mathSubtitle": "Cómo se transforman matemáticamente los números de fotograma en horas, minutos, segundos y milisegundos.",
  "mathFormula": "Tiempo en Milisegundos = Math.round((Número de Fotograma / FPS del Vídeo) * 1000)",
  "mathExplanation": [
    "Para visualizar cómo nuestro conversor transforma los fotogramas de MicroDVD en marcas de tiempo SubRip estándar, examinemos un cálculo concreto: supongamos una línea de subtítulo definida como {1440}{1560}Texto del diálogo en un vídeo que se reproduce a 24.000 FPS.",
    "Para calcular el inicio: 1440 dividido entre 24.000 da exactamente 60.000 segundos (60,000 milisegundos). En formato SRT se expresa como 00:01:00,000. Para el final: 1560 dividido entre 24.000 equivale a 65.000 segundos (65,000 milisegundos), que corresponde a 00:01:05,000. El bloque SRT resultante queda definido como: 00:01:00,000 --> 00:01:05,000.",
    "Si tomamos ese mismo fotograma (1440) en un vídeo codificado a 23.976 FPS (23.976023976...): 1440 / 23.976023976 = 60.060 segundos (60,060 milisegundos), lo que genera la marca 00:01:00,060. Aunque en el primer minuto la diferencia es de apenas 60 milisegundos, a lo largo de una película de dos horas el error acumulado desincronizará por completo los diálogos si no se utiliza la velocidad adecuada."
  ],
  "exampleTitle": "Ejemplo Real de Conversión de SUB a SRT",
  "exampleIntro": "Compara un archivo original MicroDVD con el resultado SubRip limpio y estandarizado generado por nuestro conversor.",
  "exampleSubInput": "{1}{1}25.000\n{25}{75}¡Bienvenidos al festival de cine!\n{100}{175}Esta noche presentamos el estreno|de nuestro documental internacional.\n{200}{275}{Y:i}Narrador: El viaje comenzó en 1998...\n{300}{375}Gracias por acompañarnos.|¡Disfruten de la proyección!",
  "exampleSrtOutput": "1\n00:00:01,000 --> 00:00:03,000\n¡Bienvenidos al festival de cine!\n\n2\n00:00:04,000 --> 00:00:07,000\nEsta noche presentamos el estreno\nde nuestro documental internacional.\n\n3\n00:00:08,000 --> 00:00:11,000\n<i>Narrador: El viaje comenzó en 1998...</i>\n\n4\n00:00:12,000 --> 00:00:15,000\nGracias por acompañarnos.\n¡Disfruten de la proyección!",
  "exampleExplanation": "En este ejemplo práctico, el archivo MicroDVD incluye una cabecera {1}{1}25.000, la cual fue detectada por nuestro conversor para aplicar de forma automática una velocidad de 25.000 FPS. El fotograma 25 se transformó en 1.000s (00:00:01,000) y el 75 en 3.000s (00:00:03,000). Observa además cómo la barra vertical (|) en la réplica 2 se tradujo en un salto de línea natural y el código de estilo {Y:i} en la línea 3 se convirtió en la etiqueta HTML <i> compatible con todos los reproductores.",
  "formatsComparisonTitle": "MicroDVD (.sub) vs. SubViewer (.sub) vs. VobSub (.sub)",
  "formatsComparisonSubtitle": "Diferenciando las tres tecnologías de subtítulos que comparten la misma extensión .sub.",
  "formatsComparisonText": [
    "Uno de los puntos que genera mayor confusión entre editores y usuarios de vídeo es que tres formatos incompatibles utilizan la misma extensión de archivo .sub. Al abrir el archivo con un editor de texto convencional (como el Bloc de notas o VS Code), es muy fácil identificar de cuál se trata.",
    "Si el documento comienza con números entre llaves (como {1}{1}25.000 o {50}{120}Hola), se trata de un subtítulo de texto MicroDVD. Si comienza con una sección [INFORMATION] seguida de tiempos separados por comas (como 00:01:25.50,00:01:28.10), es un archivo SubViewer. Ambos formatos son procesados de forma nativa e inmediata por nuestra herramienta web.",
    "Sin embargo, si al abrir el archivo ves símbolos ininteligibles o caracteres binarios extraños, o si vino acompañado de un archivo con el mismo nombre y extensión .idx, estás ante un archivo VobSub. Los subtítulos VobSub contienen imágenes escaneadas de DVDs comerciales, no texto alfanumérico. Para convertirlos a SRT se precisa un software con reconocimiento óptico de caracteres (OCR) como Subtitle Edit. Nuestro conversor detecta archivos VobSub y te avisará inmediatamente."
  ],
  "ffmpegTitle": "Conversión de SUB a SRT Mediante Línea de Comandos (FFmpeg)",
  "ffmpegSubtitle": "Comandos automatizados de transcodificación de subtítulos para usuarios avanzados y desarrolladores.",
  "ffmpegCommand": "# Convertir SubViewer (.sub) basado en tiempo a SubRip (.srt)\nffmpeg -i entrada.sub salida.srt\n\n# Convertir MicroDVD (.sub) indicando la tasa de fotogramas del vídeo (23.976 FPS)\nffmpeg -r 23.976 -i entrada.sub salida.srt\n\n# Convertir MicroDVD con codificación regional Windows-1252 (ANSI)\nffmpeg -sub_charenc CP1252 -r 25 -i entrada.sub salida.srt\n\n# Conversión por lotes de todos los archivos .sub en PowerShell de Windows\nGet-ChildItem *.sub | ForEach-Object { ffmpeg -r 23.976 -i $_.FullName ($_.BaseName + \".srt\") }",
  "ffmpegExplanation": [
    "FFmpeg es el conjunto de herramientas multimedia en terminal más versátil para multiplexar, demultiplexar y transcodificar pistas de vídeo, audio y subtítulos. Al trabajar con archivos SubViewer (.sub), FFmpeg puede interpretar los tiempos directamente puesto que ya se basan en horas y minutos de reloj.",
    "En cambio, al convertir subtítulos MicroDVD (.sub), es OBLIGATORIO indicar la velocidad de fotogramas del vídeo con el argumento -r antes del archivo de entrada (-i). De lo contrario, FFmpeg asumirá una velocidad estándar de 25 FPS por defecto, provocando desincronización en cualquier vídeo de 23.976, 29.97 o 30 FPS.",
    "Además, muchos subtítulos antiguos se guardaron con codificaciones de caracteres regionales como Windows-1252 o ISO-8859-1 en vez de UTF-8. El parámetro -sub_charenc garantiza que las tildes, signos de apertura (¿, ¡) y caracteres especiales se transcodifiquen limpiamente a UTF-8 sin errores tipográficos."
  ],
  "useCasesTitle": "Escenarios Habituales para la Conversión de SUB a SRT",
  "useCasesSubtitle": "Situaciones prácticas donde transformar subtítulos .sub heredados a .srt estándar resulta imprescindible.",
  "useCasesList": [
    {
      "title": "Reproducción en Smart TVs y Reproductores Multimedia de Salón",
      "description": "Los televisores inteligentes de marcas como Samsung, LG o Sony y dispositivos como Apple TV o Roku no admiten subtítulos por fotogramas. Convertir a SRT permite reproducir desde memorias USB, servidores DLNA o plataformas como Plex y Emby."
    },
    {
      "title": "Publicación de Vídeos en YouTube, Vimeo y Redes Sociales",
      "description": "Las plataformas de alojamiento web exigen archivos de subtítulos cerrados estándar (SRT o VTT). Subir subtítulos SRT convertidos permite activar subtítulos opcionales, mejorar la accesibilidad y optimizar el posicionamiento SEO en búsquedas."
    },
    {
      "title": "Edición Profesional en Premiere Pro, DaVinci Resolve y Final Cut",
      "description": "Las suites de edición de vídeo profesionales no admiten pistas .sub con fotogramas en la línea de tiempo. SRT permite editar estilos, fuentes, tamaños, corrección de textos y exportar subtítulos incrustados o independientes."
    },
    {
      "title": "Preservación Digital y Gestión de Archivos Multimedia",
      "description": "Mantener colecciones de cine en formatos de subtítulos obsoletos o propietarios conlleva el riesgo de incompatibilidad futura. Estandarizar tus subtítulos en archivos SRT codificados en UTF-8 asegura su durabilidad a largo plazo."
    }
  ],
  "troubleshootTitle": "Solución de Problemas Frecuentes en la Conversión de SUB a SRT",
  "troubleshootSubtitle": "Diagnóstico rápido y soluciones directas para desincronizaciones, fallos de codificación y errores de formato VobSub.",
  "troubleshootTips": [
    {
      "issue": "Los subtítulos se desincronizan de forma progresiva durante la reproducción",
      "cause": "La tasa de fotogramas (FPS) elegida durante la conversión no coincide con la velocidad real del vídeo (por ejemplo, se convirtió a 25 FPS un vídeo rodado a 23.976 FPS).",
      "solution": "Abre el vídeo en VLC Media Player, pulsa Ctrl+J (o Cmd+I) para ver la Información del códec, comprueba la Tasa de fotogramas exacta, regresa a nuestro conversor, elige el valor idéntico y vuelve a descargar el archivo SRT."
    },
    {
      "issue": "Las letras con tildes, eñes o caracteres especiales aparecen con símbolos extraños",
      "cause": "El archivo .sub original fue guardado con una codificación ANSI regional (como Windows-1252 o ISO-8859-1) en lugar de UTF-8.",
      "solution": "Abre el archivo .sub en el Bloc de notas o VS Code, selecciona Archivo > Guardar como, elige la codificación UTF-8 en el menú inferior, guarda y repite la conversión en nuestro conversor web."
    },
    {
      "issue": "El conversor indica que el archivo es un paquete binario VobSub",
      "cause": "Has subido un archivo binario (.sub + .idx) procedente de un disco DVD que contiene imágenes gráficas en vez de caracteres alfanuméricos.",
      "solution": "Utiliza un software de OCR para subtítulos como Subtitle Edit (Windows/Linux) o BDSup2Sub. Estos programas leen visualmente los píxeles de cada letra y generan un archivo de texto SRT editable."
    },
    {
      "issue": "Los diálogos aparecen amontonados en una sola línea o conservan la barra vertical (|)",
      "cause": "El archivo original utilizaba delimitadores atípicos o la opción de limpieza de etiquetas estaba desactivada.",
      "solution": "Asegúrate de marcar la casilla 'Convertir Etiquetas de Formato' en los ajustes de nuestro conversor. La herramienta reemplazará las barras verticales (|) por saltos de línea de subtítulo limpios."
    }
  ],
  "workflowTitle": "Flujo de Trabajo Recomendado para el Procesamiento de Subtítulos",
  "workflowSubtitle": "Mejores prácticas para convertir, sincronizar e integrar tus subtítulos en flujos de vídeo actuales.",
  "workflowSteps": [
    "Paso 1: Examinar los Parámetros del Vídeo — Abre el vídeo en VLC o MediaInfo para identificar la tasa de fotogramas exacta (por ejemplo, 23.976 o 25.000 FPS) y el idioma de los diálogos.",
    "Paso 2: Realizar la Conversión de SUB a SRT — Carga tu archivo .sub en nuestro conversor web, confirma el ajuste de FPS correspondiente y descarga tu archivo .srt limpio con codificación UTF-8.",
    "Paso 3: Comprobar la Sincronización en el Reproductor — Abre el vídeo junto al archivo .srt generado en VLC y verifica que las voces coincidan al principio, en el punto medio y al final del metraje.",
    "Paso 4: Incrustar o Distribuir el Archivo — Integra la pista SRT en un archivo MP4 o MKV con herramientas como MKVToolNix o súbelo como pista independiente de subtítulos a tu plataforma web."
  ],
  "conclusionTitle": "Conclusión: Logra una Compatibilidad Impecable para tus Subtítulos",
  "conclusionText": [
    "Migrar de subtítulos antiguos MicroDVD a archivos modernos y universales SubRip (.srt) es la forma más rápida y fiable de asegurar una reproducción perfecta en todos tus dispositivos, televisores y programas de edición. Al calcular con exactitud los milisegundos a partir de los fotogramas del vídeo, nuestro conversor garantiza una sincronización sonora impecable sin necesidad de retoques manuales.",
    "Además, SRTConverters ejecuta todo el procesamiento de manera 100% local en tu propio navegador. Sin subir archivos a servidores externos, con absoluta confidencialidad y una velocidad instantánea, podrás transformar tu colección de subtítulos con total tranquilidad. Guarda esta herramienta en tus marcadores y aprovecha nuestra suite completa de utilidades de subtitulado."
  ]
},
  pt: {
  "introTitle": "Guia Completo para Converter Legendas SUB em Formato SRT",
  "introSubtitle": "Domine a transição de legendas legadas MicroDVD baseadas em frames e SubViewer (.sub) para o formato universalmente compatível SubRip (.srt). Aprenda a matemática exata de conversão de quadros em tempo, comandos FFmpeg no terminal e técnicas de resolução de problemas para sincronização perfeita.",
  "introText": [
    "Durante décadas, a extensão de arquivo .sub foi uma presença constante na reprodução de vídeos digitais, em cópias de DVDs caseiras e no entretenimento multimídia. No entanto, qualquer usuário que tente reproduzir um arquivo .sub antigo ao lado de um vídeo em uma Smart TV moderna, smartphone, reprodutor web ou software de edição de vídeo inevitavelmente enfrentará falhas de reprodução, legendas ocultas ou severos problemas de sincronização. Em contrapartida, o SubRip (.srt) se estabeleceu como o padrão universal e absoluto para legendas de texto no mundo inteiro.",
    "O principal desafio técnico ao lidar com arquivos .sub reside na fragmentação de formatos. Ao contrário dos padrões de legendas modernos que armazenam marcações de tempo em horas, minutos, segundos e milissegundos reais, o formato textual mais comum sob a extensão .sub—o MicroDVD—armazena o tempo de exibição como números de frames do vídeo. O arquivo de legenda em si não possui nenhuma noção de horário do relógio; ele apenas determina que uma fala deve surgir no frame 1500 e desaparecer no frame 1650. Consequentemente, converter MicroDVD para SRT exige uma conversão matemática rigorosa baseada na taxa de quadros (FPS) do vídeo correspondente.",
    "Quer você esteja digitalizando um acervo de clássicos do cinema, preparando arquivos de vídeo para o YouTube ou plataformas de streaming, ou editando faixas de legendas no Premiere Pro, DaVinci Resolve ou Final Cut Pro, este guia técnico abrangente fornecerá todo o conhecimento necessário. Desde fórmulas de cálculo temporal e comandos de terminal com o FFmpeg até comparativos de arquitetura e resolução de falhas comuns, você dominará plenamente a conversão de SUB para SRT."
  ],
  "whatIsTitle": "Entendendo SUB e SRT: Legendas Indexadas por Quadros vs. Códigos de Tempo Universais",
  "whatIsText": [
    "O formato SubRip (.srt) foi desenvolvido no final dos anos 1990 como parte do software homônimo criado por Brain para extrair legendas de DVDs em um padrão aberto e leve. A estrutura do arquivo SRT é extremamente simples e intuitiva: cada bloco de diálogo contém um número sequencial incremental (1, 2, 3...), marcações de tempo de início e término separadas por ' --> ' com precisão de milissegundos (HH:MM:SS,mmm), uma ou mais linhas de texto e uma linha em branco separadora. Essa simplicidade estrutural fez com que o SRT se tornasse compatível nativamente com praticamente todos os reprodutores de mídia, sistemas operacionais e plataformas online do mercado.",
    "Por outro lado, a extensão .sub abrange três tecnologias completamente distintas: MicroDVD (.sub), SubViewer (.sub) e VobSub (.sub). O MicroDVD foi desenvolvido entre 1999 e 2001 pela Tias Software especialmente para os formatos compactados da época, como DivX e XviD. Em vez de usar tempo real, cada fala é indexada pelos números exatos de frame em que deve aparecer e sumir da tela, usando chaves: {frame_inicial}{frame_final}Texto da fala. Falas com múltiplas linhas são delimitadas por barras verticais (|).",
    "Já o SubViewer (.sub), desenvolvido por David Vignoni, é um formato de texto com cabeçalho de metadados ([INFORMATION]) seguido por tempos em centésimos de segundo (HH:MM:SS.cs,HH:MM:SS.cs) e tags [br] para quebras de linha. Por fim, o VobSub (.sub + .idx) é algo completamente diferente: um pacote binário composto por imagens gráficas (bitmaps) extraídas de DVDs comerciais. Identificar qual formato .sub você tem em mãos é o primeiro passo essencial para uma conversão bem-sucedida."
  ],
  "whyConvertTitle": "Por Que Converter Legendas SUB em SRT?",
  "whyConvertSubtitle": "Descubra as vantagens técnicas indispensáveis ao migrar de arquivos .sub legados para o formato universal SubRip (.srt).",
  "whyConvertReasons": [
    {
      "title": "Compatibilidade Universal com Dispositivos e Players",
      "description": "O formato SRT é aceito nativamente por 100% dos reprodutores de mídia modernos (VLC, MPC-HC, IINA, MPV), sistemas operacionais móveis (iOS, Android), Smart TVs (Samsung Tizen, LG webOS, Android TV) e dispositivos de streaming (Roku, Apple TV, Chromecast)."
    },
    {
      "title": "Totalmente Pronto para a Web e Streaming",
      "description": "Plataformas populares como YouTube, Vimeo, Facebook e reprodutores HTML5 modernos não aceitam arquivos .sub indexados por frames. Converter para SRT permite o envio imediato de legendas e uma exibição perfeita no navegador."
    },
    {
      "title": "Fim da Dependência da Taxa de Quadros (FPS)",
      "description": "Legendas MicroDVD ficam presas à taxa de quadros original do vídeo. Se o vídeo for reencodado ou reproduzido em taxas diferentes, a sincronia é perdida. O formato SRT utiliza horários de relógio absolutos, tornando a legenda imune a alterações de FPS."
    },
    {
      "title": "Edição e Tradução Ágeis e Eficientes",
      "description": "Editores profissionais de legendas (Subtitle Edit, Aegisub) e softwares de montagem não linear (Adobe Premiere Pro, Blackmagic DaVinci Resolve, Apple Final Cut Pro) oferecem suporte nativo total ao SRT para ajustes, correções e localização."
    }
  ],
  "howToTitle": "Como Converter SUB para SRT Online em 3 Passos Simples",
  "howToSubtitle": "Converta seus arquivos MicroDVD ou SubViewer .sub em legendas .srt limpas e perfeitamente sincronizadas diretamente no navegador.",
  "howToSteps": [
    {
      "step": "1",
      "title": "Envie ou Cole suas Legendas SUB",
      "description": "Arraste e solte o arquivo .sub na área de upload, clique para selecionar em seu computador ou cole o texto das legendas diretamente no editor interativo."
    },
    {
      "step": "2",
      "title": "Verifique a Taxa de Quadros (FPS)",
      "description": "Nossa ferramenta identifica automaticamente se o arquivo é MicroDVD ou SubViewer. Para MicroDVD, confirme a taxa de quadros do vídeo (ex.: 23.976, 24, 25 ou 29.97 FPS) para calcular os tempos exatos."
    },
    {
      "step": "3",
      "title": "Baixe o Arquivo SRT Convertido",
      "description": "Clique em Baixar .SRT para salvar o arquivo SubRip gerado instantaneamente no seu dispositivo ou copie o texto formatado para a área de transferência."
    }
  ],
  "differenceTitle": "Comparativo Técnico: SUB (MicroDVD e SubViewer) vs. SRT",
  "differenceSubtitle": "Uma análise detalhada lado a lado sobre temporização, estruturas de arquivo, compatibilidade e suporte a estilos.",
  "differenceTable": [
    {
      "feature": "Mecanismo Temporal",
      "srt": "Tempo de relógio absoluto (HH:MM:SS,mmm)",
      "microdvd": "Número de frames do vídeo ({início}{fim})",
      "subviewer": "Tempo de relógio absoluto (HH:MM:SS.cs)"
    },
    {
      "feature": "Precisão / Resolução",
      "srt": "1 milissegundo (1/1000 de segundo)",
      "microdvd": "1 frame de vídeo (1/FPS segundo)",
      "subviewer": "1 centésimo de segundo (1/100 segundo)"
    },
    {
      "feature": "Estrutura do Arquivo",
      "srt": "Blocos numerados separados por linhas vazias",
      "microdvd": "Uma linha por legenda com frames entre chaves",
      "subviewer": "Seção de cabeçalho, linha de tempo, diálogos"
    },
    {
      "feature": "Quebra de Linha Múltipla",
      "srt": "Quebra de linha padrão (CRLF ou LF)",
      "microdvd": "Caractere de barra vertical (|)",
      "subviewer": "Tag [br] ou quebra de linha"
    },
    {
      "feature": "Recursos de Estilo",
      "srt": "Tags HTML básicas (<i>, <b>, <u>, <font color>)",
      "microdvd": "Comandos legados ({Y:i}, {Y:b}, {C:$BBGGRR})",
      "subviewer": "Fontes no cabeçalho e estilos simples"
    },
    {
      "feature": "Compatibilidade Atual",
      "srt": "Universal em 100% dos aparelhos e programas",
      "microdvd": "Restrita ao VLC e reprodutores legados",
      "subviewer": "Rara fora de computadores desktop"
    },
    {
      "feature": "Suporte na Web / Streaming",
      "srt": "Universal (YouTube, Vimeo, HTML5 via VTT)",
      "microdvd": "Sem suporte (exige conversão prévia)",
      "subviewer": "Sem suporte em plataformas modernas"
    },
    {
      "feature": "Dependência de FPS",
      "srt": "Nula (baseada em relógio real)",
      "microdvd": "Total (vinculada aos FPS do arquivo de vídeo)",
      "subviewer": "Nula (baseada em relógio real)"
    }
  ],
  "fpsGuideTitle": "O Papel Crítico da Taxa de Quadros (FPS) na Conversão de SUB para SRT",
  "fpsGuideSubtitle": "Por que a precisão nos FPS é fundamental para converter números de frames em horas de relógio sem descompasso.",
  "fpsGuideText": [
    "Ao converter arquivos MicroDVD (.sub) em SRT, compreender a taxa de quadros (FPS) do vídeo não é opcional: é o fator crucial que determina se as legendas ficarão perfeitamente sincronizadas com as falas ou se ficarão completamente desalinhadas. Como o MicroDVD define a aparição de cada fala pelo número de frames, o conversor precisa dividir esse valor pela quantidade exata de quadros por segundo para determinar a marcação em milissegundos.",
    "Se você converter um arquivo de legenda com uma taxa incorreta, o erro de sincronização não permanecerá estável—ele aumentará continuamente a cada minuto de reprodução. Por exemplo, converter um filme de 23.976 FPS com uma configuração de 25.000 FPS (PAL) cria uma discrepância de 4,1%. Após 10 minutos, o texto estará adiantado em cerca de 25 segundos; após uma hora, o descompasso ultrapassará dois minutos e meio! Sempre confirme a taxa real do vídeo antes de converter."
  ],
  "fpsTable": [
    {
      "fps": "23.976 FPS (24000/1001)",
      "standard": "Cinema NTSC / Blu-ray / Streaming",
      "useCase": "Padrão de filmes cinematográficos, lançamentos em Blu-ray na América do Norte e séries de grandes plataformas."
    },
    {
      "fps": "24.000 FPS",
      "standard": "Cinema DCI / Projeção Padrão",
      "useCase": "Padrão das salas de cinema convencionais e pacotes de cinema digital (DCP) para festivais e estreias."
    },
    {
      "fps": "25.000 FPS",
      "standard": "Transmissão PAL / SECAM",
      "useCase": "Televisão na Europa, Austrália e partes da Ásia, DVDs europeus e produções televisivas internacionais."
    },
    {
      "fps": "29.970 FPS (30000/1001)",
      "standard": "Transmissão NTSC",
      "useCase": "Transmissão de televisão nos Estados Unidos, Japão e Coreia do Sul em definição padrão e alta definição."
    },
    {
      "fps": "30.000 FPS",
      "standard": "Vídeo Web / Câmeras Antigas",
      "useCase": "Gravações feitas em celulares mais antigos, webcams e capturas de tela de computador."
    },
    {
      "fps": "50.000 FPS",
      "standard": "PAL Alta Taxa (HFR)",
      "useCase": "Transmissões esportivas na Europa, programas ao vivo e canais com sinal em 720p50 ou 1080p50."
    },
    {
      "fps": "59.940 FPS (60000/1001)",
      "standard": "NTSC Alta Taxa",
      "useCase": "Eventos esportivos nos EUA, transmissões ao vivo e gravações de consoles de videogame a 60p."
    },
    {
      "fps": "60.000 FPS",
      "standard": "Games / Telas Modernas",
      "useCase": "Monitores de alta taxa, smartphones modernos, vídeos de gameplay no YouTube e cenas com muito movimento."
    }
  ],
  "mathTitle": "A Matemática da Conversão de Frames em Tempo",
  "mathSubtitle": "Como os números de frames são calculados matematicamente para gerar horas, minutos, segundos e milissegundos.",
  "mathFormula": "Tempo em Milissegundos = Math.round((Número do Frame / FPS do Vídeo) * 1000)",
  "mathExplanation": [
    "Para entender como nosso conversor traduz os frames do MicroDVD em marcações de tempo SubRip, vejamos um cálculo prático: imagine uma legenda definida como {1440}{1560}Texto da fala em um vídeo que roda a 24.000 FPS.",
    "Para calcular o início: 1440 dividido por 24.000 resulta em exatamente 60.000 segundos (60.000 milissegundos), o que no padrão SRT é formatado como 00:01:00,000. Para o término da fala: 1560 dividido por 24.000 é igual a 65.000 segundos (65.000 milissegundos), correspondendo a 00:01:05,000. O bloco de legenda resultante fica estruturado como: 00:01:00,000 --> 00:01:05,000.",
    "Se pegarmos esse mesmo frame (1440) em um vídeo gravado a 23.976 FPS (23.976023976...): 1440 / 23.976023976 = 60.060 segundos (60.060 milissegundos), gerando a marca 00:01:00,060. Embora no primeiro minuto a diferença seja de apenas 60 milissegundos, ao longo de um filme de duas horas esse erro cumulativo tornará a legenda completamente desincronizada se calculada incorretamente."
  ],
  "exampleTitle": "Exemplo Prático de Conversão de SUB para SRT",
  "exampleIntro": "Compare um arquivo original MicroDVD com o resultado SubRip padronizado e limpo gerado por nosso conversor.",
  "exampleSubInput": "{1}{1}25.000\n{25}{75}Bem-vindos ao festival de cinema!\n{100}{175}Hoje apresentamos a estreia exclusiva|do nosso documentário internacional.\n{200}{275}{Y:i}Narrador: A jornada começou em 1998...\n{300}{375}Muito obrigado por assistir.|Aproveitem a exibição!",
  "exampleSrtOutput": "1\n00:00:01,000 --> 00:00:03,000\nBem-vindos ao festival de cinema!\n\n2\n00:00:04,000 --> 00:00:07,000\nHoje apresentamos a estreia exclusiva\ndo nosso documentário internacional.\n\n3\n00:00:08,000 --> 00:00:11,000\n<i>Narrador: A jornada começou em 1998...</i>\n\n4\n00:00:12,000 --> 00:00:15,000\nMuito obrigado por assistir.\nAproveitem a exibição!",
  "exampleExplanation": "Neste exemplo, o arquivo MicroDVD incluía uma linha de cabeçalho {1}{1}25.000, que nosso conversor detectou automaticamente para aplicar a taxa de 25.000 FPS. O frame 25 foi convertido para 1,000s (00:00:01,000) e o frame 75 para 3,000s (00:00:03,000). Repare também que a barra vertical (|) na fala 2 foi convertida em uma quebra de linha natural e o código de itálico {Y:i} na fala 3 foi traduzido para a tag HTML <i>, suportada por todos os reprodutores modernos.",
  "formatsComparisonTitle": "MicroDVD (.sub) vs. SubViewer (.sub) vs. VobSub (.sub)",
  "formatsComparisonSubtitle": "Diferenciando as três tecnologias de legendas que compartilham a mesma extensão .sub.",
  "formatsComparisonText": [
    "Um dos pontos que mais gera confusão entre profissionais de vídeo é que três formatos totalmente incompatíveis compartilham a mesma extensão .sub. Ao abrir o arquivo em um editor de texto básico (como o Bloco de Notas ou VS Code), é fácil reconhecer qual deles você possui.",
    "Se o conteúdo começar com números entre chaves (como {1}{1}25.000 ou {50}{120}Olá), trata-se de uma legenda de texto MicroDVD. Se começar com uma seção [INFORMATION] seguida de tempos separados por vírgula (como 00:01:25.50,00:01:28.10), é um arquivo SubViewer. Ambos os formatos são convertidos com total precisão em nossa ferramenta.",
    "No entanto, se ao abrir o arquivo você visualizar caracteres ilegíveis e símbolos binários, ou se o arquivo veio acompanhado de um arquivo com o mesmo nome e extensão .idx, trata-se de um arquivo binário VobSub. Arquivos VobSub não são textos—são imagens de bitmap extraídas de DVDs. Para convertê-los em SRT, é necessário usar um programa de OCR como o Subtitle Edit. Nossa ferramenta detecta arquivos VobSub e emite um alerta imediatamente."
  ],
  "ffmpegTitle": "Convertendo SUB para SRT na Linha de Comando (FFmpeg)",
  "ffmpegSubtitle": "Comandos automatizados de conversão para usuários avançados, programadores e editores de vídeo.",
  "ffmpegCommand": "# Converter SubViewer (.sub) baseado em tempo para SubRip (.srt)\nffmpeg -i entrada.sub saida.srt\n\n# Converter MicroDVD (.sub) especificando a taxa de quadros do vídeo (23.976 FPS)\nffmpeg -r 23.976 -i entrada.sub saida.srt\n\n# Converter MicroDVD com codificação regional Windows-1252 (ANSI)\nffmpeg -sub_charenc CP1252 -r 25 -i entrada.sub saida.srt\n\n# Conversão em lote de todos os arquivos .sub no PowerShell do Windows\nGet-ChildItem *.sub | ForEach-Object { ffmpeg -r 23.976 -i $_.FullName ($_.BaseName + \".srt\") }",
  "ffmpegExplanation": [
    "O FFmpeg é uma ferramenta de linha de comando consagrada para processar, muxar e converter fluxos de vídeo, áudio e legendas. Ao converter arquivos SubViewer (.sub), o FFmpeg consegue ler as marcações diretamente, pois elas já estão em formato de relógio.",
    "Por outro lado, ao converter arquivos MicroDVD (.sub), você DEVE informar a taxa de quadros do vídeo com o parâmetro -r antes do arquivo de entrada (-i). Sem esse parâmetro, o FFmpeg adota a taxa padrão de 25 FPS, o que causará descompasso caso seu vídeo tenha sido codificado em 23.976, 29.97 ou 30 FPS.",
    "Além disso, muitos arquivos .sub antigos foram salvos em codificações regionais como Windows-1252 ou ISO-8859-1 em vez de UTF-8. O uso da opção -sub_charenc assegura que letras com acentos, cedilhas e caracteres especiais sejam transcritos corretamente para UTF-8 sem erros visuais."
  ],
  "useCasesTitle": "Cenários Comuns para a Conversão de SUB para SRT",
  "useCasesSubtitle": "Situações práticas em que a migração de legendas .sub legadas para .srt se torna indispensável.",
  "useCasesList": [
    {
      "title": "Reprodução em Smart TVs e Aparelhos de Sala",
      "description": "Smart TVs de marcas como Samsung, LG ou Sony e dispositivos de streaming como Apple TV e Roku não reproduzem legendas indexadas por frames. A conversão para SRT permite assistir via USB, DLNA ou servidores como Plex e Emby."
    },
    {
      "title": "Envio de Vídeos para o YouTube, Vimeo e Redes Sociais",
      "description": "Plataformas online de vídeo exigem arquivos de legendas no formato SRT ou VTT. Fazer upload de arquivos SRT melhora a acessibilidade, ativa legendas ocultas e otimiza o rankeamento nas buscas dessas plataformas."
    },
    {
      "title": "Edição Profissional no Premiere Pro, DaVinci e Final Cut",
      "description": "Os principais editores de vídeo profissionais não aceitam trilhas de legendas .sub. O formato SRT oferece suporte imediato em trilhas dedicadas com personalização visual de fontes, cores, estilos e queima de legendas."
    },
    {
      "title": "Preservação Digital e Gestão de Bibliotecas de Vídeo",
      "description": "Manter acervos de filmes com legendas em formatos obsoletos acarreta sérios riscos de incompatibilidade futura. Converter suas legendas para SRT com codificação UTF-8 garante acesso perpétuo em qualquer sistema futuro."
    }
  ],
  "troubleshootTitle": "Resolução de Problemas Comuns na Conversão de SUB para SRT",
  "troubleshootSubtitle": "Diagnóstico rápido e soluções práticas para perda de sincronia, falhas de codificação e alertas de VobSub.",
  "troubleshootTips": [
    {
      "issue": "As legendas começam no tempo certo, mas vão se atrasando ou adiantando com o tempo",
      "cause": "A taxa de quadros (FPS) informada durante a conversão não corresponde à taxa real do vídeo (por exemplo, conversão em 25 FPS para um vídeo gravado em 23.976 FPS).",
      "solution": "Abra o vídeo no VLC Media Player, pressione Ctrl+J (ou Cmd+I), verifique a Taxa de quadros exata na aba Codec, volte ao nosso conversor, selecione a mesma opção de FPS e gere novamente o arquivo SRT."
    },
    {
      "issue": "Letras com acentos ou cedilha aparecem corrompidas com pontos de interrogação",
      "cause": "O arquivo .sub original foi gravado em uma codificação legada ANSI (como Windows-1252 ou ISO-8859-1) em vez de UTF-8.",
      "solution": "Abra o arquivo .sub no Bloco de Notas ou VS Code, vá em Arquivo > Salvar como, selecione UTF-8 no campo Codificação, salve o arquivo e converta-o novamente em nossa ferramenta."
    },
    {
      "issue": "O conversor exibe um aviso informando que o arquivo é um pacote binário VobSub",
      "cause": "O arquivo enviado é uma imagem binária (.sub + .idx) de um DVD que contém imagens rasterizadas e não texto de caracteres.",
      "solution": "Utilize uma ferramenta de OCR dedicada a legendas como o Subtitle Edit (Windows/Linux) ou BDSup2Sub. Esses softwares leem visualmente os caracteres desenhados e geram arquivos SRT de texto editável."
    },
    {
      "issue": "As falas aparecem coladas em uma única linha ou os caracteres de barra (|) permaneceram",
      "cause": "O arquivo continha quebras atípicas ou a opção de conversão de formatação estava desmarcada.",
      "solution": "Certifique-se de que a opção 'Converter Tags de Formatação' está ativada nas configurações do conversor. Nosso sistema divide automaticamente as barras verticais em quebras de linha padrão de legendas."
    }
  ],
  "workflowTitle": "Fluxo de Trabalho Recomendado para Processar Legendas",
  "workflowSubtitle": "Melhores práticas para converter, sincronizar e embutir suas legendas em fluxos de trabalho modernos.",
  "workflowSteps": [
    "Passo 1: Inspecionar o Vídeo — Abra o vídeo no VLC ou MediaInfo para verificar a taxa de quadros exata (ex.: 23.976 ou 25.000 FPS) e o idioma do áudio.",
    "Passo 2: Converter SUB em SRT — Carregue seu arquivo .sub no nosso conversor web, confirme a taxa de quadros correspondente e baixe o arquivo .srt limpo em UTF-8.",
    "Passo 3: Validar a Sincronização — Abra o vídeo junto com a legenda .srt no VLC e verifique se as falas coincidem no começo, no meio e nos minutos finais da obra.",
    "Passo 4: Embutir ou Distribuir — Muxe a trilha SRT no arquivo MP4 ou MKV utilizando o MKVToolNix ou envie o arquivo diretamente como faixa de legenda na plataforma web."
  ],
  "conclusionTitle": "Conclusão: Garanta Compatibilidade Impecável para suas Legendas",
  "conclusionText": [
    "Migrar de legendas antigas MicroDVD para o padrão aberto SubRip (.srt) é a forma mais segura e eficiente de garantir reprodução perfeita em todos os seus aparelhos, softwares e televisores. Ao calcular os milissegundos com exatidão matemática a partir dos frames do vídeo, nosso conversor de SUB para SRT entrega sincronização impecável sem ajustes manuais cansativos.",
    "E o melhor: o SRTConverters opera 100% de forma local no seu navegador. Sem envio de dados para servidores, com total privacidade e velocidade instantânea, você pode converter toda a sua coleção com segurança. Salve esta página nos favoritos e aproveite nossa suíte completa de ferramentas de legendas."
  ]
},
  fr: {
  "introTitle": "Le Guide Complet pour Convertir des Sous-titres SUB en Format SRT",
  "introSubtitle": "Maîtrisez la conversion des sous-titres historiques MicroDVD basés sur les images et SubViewer (.sub) vers le format universel SubRip (.srt). Découvrez les calculs mathématiques précis d'images en millisecondes, les commandes terminales FFmpeg et les techniques de dépannage pour une synchronisation irréprochable.",
  "introText": [
    "Pendant plusieurs décennies, l'extension de fichier .sub a occupé une place prépondérante dans le monde de la vidéo numérique, de la copie de DVD et du divertissement multimédia. Pourtant, quiconque tente aujourd'hui de lire un fichier .sub ancien avec une vidéo sur une Smart TV moderne, un smartphone, un lecteur web ou un logiciel de montage se heurte inévitablement à des erreurs de lecture, des répliques absentes ou d'importants décalages temporels. À l'opposé, SubRip (.srt) s'est imposé comme la référence universelle et incontestée du sous-titrage textuel à l'échelle mondiale.",
    "La principale difficulté technique liée aux fichiers .sub provient de la fragmentation des formats. Contrairement aux standards modernes qui conservent des repères temporels exprimés en heures, minutes, secondes et millisecondes réelles, le format textuel .sub le plus répandu—MicroDVD—stocke les répliques sous forme de numéros d'images vidéo (frames). Le fichier de sous-titres ne possède aucune notion de temps d'horloge : il indique simplement qu'une phrase doit apparaître à l'image 1500 et s'effacer à l'image 1650. Par conséquent, convertir un sous-titre MicroDVD en SRT exige une conversion mathématique exacte basée sur la cadence d'images (FPS) de la vidéo correspondante.",
    "Que vous souhaitiez restaurer une collection de films classiques, préparer des vidéos pour YouTube ou des plateformes de streaming, ou monter des sous-titres dans Premiere Pro, DaVinci Resolve ou Final Cut Pro, ce guide technique complet rassemble tout ce dont vous avez besoin. Des formules de calcul temporel aux lignes de commande FFmpeg, en passant par l'analyse des architectures de fichiers et la résolution des erreurs courantes, vous maîtriserez parfaitement la conversion de SUB en SRT."
  ],
  "whatIsTitle": "Comprendre SUB et SRT : Sous-titres par Images vs. Repères Horaires Universels",
  "whatIsText": [
    "Le format SubRip (.srt) a vu le jour à la fin des années 1990 au sein du logiciel éponyme développé par Brain pour extraire les sous-titres de DVD dans un format ouvert, léger et indépendant. Sa structure est un modèle de clarté : chaque bloc comprend un numéro d'ordre séquentiel (1, 2, 3...), un horodatage de début et de fin séparé par ' --> ' avec une précision à la milliseconde (HH:MM:SS,mmm), une ou plusieurs lignes de réplique et une ligne vide de séparation. Cette simplicité exemplaire assure une prise en charge native sur l'ensemble des lecteurs vidéo, téléviseurs et plateformes web de la planète.",
    "À l'inverse, l'extension .sub regroupe trois technologies totalement différentes : MicroDVD (.sub), SubViewer (.sub) et VobSub (.sub). MicroDVD a été conçu entre 1999 et 2001 par Tias Software pour accompagner les premiers lecteurs de vidéos compressées en DivX et XviD. Au lieu de mesurer le temps qui passe, chaque sous-titre est calé sur le numéro précis de l'image vidéo d'apparition et de disparition entre accolades : {image_début}{image_fin}Texte du sous-titre. Les répliques sur plusieurs lignes sont séparées par des barres verticales (|).",
    "SubViewer (.sub), créé par David Vignoni, est quant à lui un format textuel comportant un en-tête d'informations ([INFORMATION]) suivi d'horodatages en centièmes de seconde (HH:MM:SS.cs,HH:MM:SS.cs) et de balises [br] pour les retours à la ligne. Enfin, VobSub (.sub + .idx) constitue un univers à part : il s'agit d'un paquet binaire renfermant des images bitmap (graphiques) issues de DVD vidéo commerciaux. Savoir identifier le type exact de votre fichier .sub est la condition indispensable d'une conversion réussie."
  ],
  "whyConvertTitle": "Pourquoi Convertir vos Sous-titres SUB en SRT ?",
  "whyConvertSubtitle": "Découvrez les bénéfices techniques essentiels d'une transition depuis des fichiers .sub obsolètes vers le standard universel SubRip (.srt).",
  "whyConvertReasons": [
    {
      "title": "Compatibilité Universelle avec Tous les Appareils et Lecteurs",
      "description": "Le format SRT est lu nativement par 100% des lecteurs modernes (VLC, MPC-HC, IINA, MPV), des systèmes d'exploitation mobiles (iOS, Android), des téléviseurs connectés (Samsung Tizen, LG webOS, Android TV) et des box multimédias (Apple TV, Roku, Chromecast)."
    },
    {
      "title": "Parfaitement Adapté au Web et aux Plateformes de Streaming",
      "description": "Les plateformes comme YouTube, Vimeo, Dailymotion et les lecteurs vidéo web HTML5 refusent catégoriquement les fichiers .sub indexés par images. Convertir en SRT permet une publication immédiate et une compatibilité sans faille dans le navigateur."
    },
    {
      "title": "Fin de la Dépendance à la Cadence d'Images (FPS)",
      "description": "Les sous-titres MicroDVD sont tributaires de la cadence d'images de la vidéo. Si la vidéo est réencodée ou lue à une cadence différente, le décalage est immédiat. Le format SRT s'appuie sur le temps réel absolu, éliminant tout lien avec la fréquence d'affichage."
    },
    {
      "title": "Édition et Traduction Facilitées dans les Logiciels Pro",
      "description": "Les éditeurs de sous-titres reconnus (Subtitle Edit, Aegisub) ainsi que les suites de montage professionnelles (Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro) intègrent parfaitement le SRT pour la retouche textuelle et le calage fin."
    }
  ],
  "howToTitle": "Comment Convertir un Fichier SUB en SRT en 3 Étapes Simples",
  "howToSubtitle": "Transformez vos fichiers MicroDVD ou SubViewer .sub en sous-titres .srt propres et synchronisés directement dans votre navigateur sans logiciel tiers.",
  "howToSteps": [
    {
      "step": "1",
      "title": "Importez ou Collez vos Sous-titres SUB",
      "description": "Déposez votre fichier .sub dans l'espace de glisser-déposer, parcourez les dossiers de votre appareil ou collez le texte du sous-titre directement dans la zone de saisie."
    },
    {
      "step": "2",
      "title": "Vérifiez la Fréquence d'Images (FPS)",
      "description": "Notre outil détecte automatiquement s'il s'agit de MicroDVD ou de SubViewer. Pour MicroDVD, vérifiez la fréquence de votre vidéo (ex. 23.976, 24, 25 ou 29.97 FPS) afin de convertir les images en temps exact."
    },
    {
      "step": "3",
      "title": "Téléchargez le Fichier SRT Converti",
      "description": "Cliquez sur Télécharger .SRT pour récupérer immédiatement votre fichier SubRip conforme ou copiez le texte formaté dans votre presse-papiers."
    }
  ],
  "differenceTitle": "Comparatif Technique : SUB (MicroDVD et SubViewer) vs. SRT",
  "differenceSubtitle": "Une comparaison détaillée point par point portant sur la synchronisation, la structure, la compatibilité et la mise en forme.",
  "differenceTable": [
    {
      "feature": "Moyen de Synchronisation",
      "srt": "Temps d'horloge absolu (HH:MM:SS,mmm)",
      "microdvd": "Numéros d'images vidéo ({début}{fin})",
      "subviewer": "Temps d'horloge absolu (HH:MM:SS.cs)"
    },
    {
      "feature": "Résolution / Précision",
      "srt": "1 milliseconde (1/1000 de seconde)",
      "microdvd": "1 image vidéo (1/FPS seconde)",
      "subviewer": "1 centième de seconde (1/100 seconde)"
    },
    {
      "feature": "Structure du Fichier",
      "srt": "Blocs numérotés séparés par des lignes vides",
      "microdvd": "Une ligne par réplique avec repères entre accolades",
      "subviewer": "En-tête de métadonnées, horodatage, réplique"
    },
    {
      "feature": "Saut de Ligne Interne",
      "srt": "Retour à la ligne standard (CRLF ou LF)",
      "microdvd": "Caractère barre verticale ou tube (|)",
      "subviewer": "Balise [br] ou retour à la ligne"
    },
    {
      "feature": "Options de Style",
      "srt": "Balises HTML simples (<i>, <b>, <u>, <font color>)",
      "microdvd": "Commandes propriétaires ({Y:i}, {Y:b}, {C:$BBGGRR})",
      "subviewer": "Police d'en-tête et styles élémentaires"
    },
    {
      "feature": "Compatibilité Actuelle",
      "srt": "Universelle sur 100% du matériel et des logiciels",
      "microdvd": "Très limitée (VLC et vieux lecteurs média)",
      "subviewer": "Rare en dehors de quelques lecteurs PC"
    },
    {
      "feature": "Prise en Charge Web / Streaming",
      "srt": "Universelle (YouTube, Vimeo, HTML5 via VTT)",
      "microdvd": "Nulle (nécessite une conversion préalable)",
      "subviewer": "Nulle sur les plateformes vidéo en ligne"
    },
    {
      "feature": "Dépendance à la Cadence (FPS)",
      "srt": "Aucune (basé sur le temps réel)",
      "microdvd": "Totale (étroitement lié au FPS du fichier vidéo)",
      "subviewer": "Aucune (basé sur le temps réel)"
    }
  ],
  "fpsGuideTitle": "L'Importance Cruciale de la Fréquence d'Images (FPS) pour la Conversion",
  "fpsGuideSubtitle": "Pourquoi la correspondance exacte des FPS est indispensable pour convertir des numéros d'images en horodatages sans dérive.",
  "fpsGuideText": [
    "Lors de la conversion de fichiers MicroDVD (.sub) en SRT, comprendre la cadence d'images de votre vidéo n'est pas un luxe : c'est le facteur déterminant qui garantit que vos sous-titres colleront parfaitement aux dialogues ou subiront un décalage inacceptable. Comme MicroDVD exprime chaque apparition en nombre d'images, le convertisseur doit diviser ce chiffre par la fréquence réelle du flux vidéo pour calculer la durée en millisecondes.",
    "Si vous convertissez un fichier avec une valeur FPS erronée, l'erreur ne reste pas constante : elle grandit à chaque minute de lecture. Par exemple, convertir un film à 23.976 FPS avec une option réglée à 25.000 FPS (PAL) accélère les sous-titres de 4,1%. Après 10 minutes, les textes apparaîtront avec 25 secondes d'avance ; après une heure, l'écart dépassera deux minutes et demie ! Contrôlez toujours la cadence réelle avant de lancer la conversion."
  ],
  "fpsTable": [
    {
      "fps": "23.976 FPS (24000/1001)",
      "standard": "Cinéma NTSC / Blu-ray / Streaming",
      "useCase": "Cadence de référence des longs-métrages de cinéma, des disques Blu-ray nord-américains et des productions SVOD."
    },
    {
      "fps": "24.000 FPS",
      "standard": "Cinéma Standard / Projection DCI",
      "useCase": "Norme de projection en salle de cinéma et paquets de cinéma numérique (DCP) pour festivals et avant-premières."
    },
    {
      "fps": "25.000 FPS",
      "standard": "Diffusion Télé PAL / SECAM",
      "useCase": "Télévision européenne, australienne et d'une partie de l'Asie, DVD européens et productions télévisées."
    },
    {
      "fps": "29.970 FPS (30000/1001)",
      "standard": "Diffusion Télé NTSC",
      "useCase": "Norme de diffusion télévisée en Amérique du Nord, au Japon et en Corée du Sud en SD et en HD."
    },
    {
      "fps": "30.000 FPS",
      "standard": "Vidéo Web / Téléphones Anciens",
      "useCase": "Enregistrements sur anciens smartphones, caméras web et captures d'écran informatiques."
    },
    {
      "fps": "50.000 FPS",
      "standard": "PAL Haute Cadence (HFR)",
      "useCase": "Événements sportifs européens en direct, plateaux d'actualité et flux broadcast en 720p50 ou 1080p50."
    },
    {
      "fps": "59.940 FPS (60000/1001)",
      "standard": "NTSC Haute Cadence",
      "useCase": "Sports retransmis en Amérique du Nord, enregistrements de consoles de jeu et flux de streaming en 60p."
    },
    {
      "fps": "60.000 FPS",
      "standard": "Jeux Vidéo / Écrans Modernes",
      "useCase": "Moniteurs PC, smartphones récents, vidéos de gameplay sur YouTube et captations fluides à haute dynamique."
    }
  ],
  "mathTitle": "La Formule Mathématique de Conversion Image vers Temps",
  "mathSubtitle": "Comment les numéros d'images sont transformés avec rigueur en heures, minutes, secondes et millisecondes.",
  "mathFormula": "Temps en Millisecondes = Math.round((Numéro d'Image / FPS de la Vidéo) * 1000)",
  "mathExplanation": [
    "Pour comprendre la manière dont notre outil convertit les images MicroDVD en repères SubRip standards, observons un exemple mathématique : supposons une réplique définie par {1440}{1560}Texte du dialogue sur une vidéo tournant à 24.000 FPS.",
    "Pour calculer l'instant de départ : 1440 divisé par 24.000 donne très exactement 60.000 secondes (soit 60 000 millisecondes), ce qui s'écrit en format SRT : 00:01:00,000. Pour la fin : 1560 divisé par 24.000 donne 65.000 secondes (65 000 millisecondes), ce qui correspond à 00:01:05,000. Le bloc de sous-titre SRT obtenu est donc : 00:01:00,000 --> 00:01:05,000.",
    "Prenons ce même numéro d'image (1440) pour une vidéo cadencée à 23.976 FPS (23.976023976...) : 1440 / 23.976023976 = 60.060 secondes (60 060 millisecondes), ce qui donne 00:01:00,060. Si l'écart n'est que de 60 millisecondes au bout d'une minute, au terme d'un film de deux heures cette différence devient un décalage immense si la cadence choisie n'est pas la bonne."
  ],
  "exampleTitle": "Exemple Concret de Conversion de SUB en SRT",
  "exampleIntro": "Comparez un fichier original MicroDVD avec le résultat SubRip clair et normalisé généré par notre outil.",
  "exampleSubInput": "{1}{1}25.000\n{25}{75}Bienvenue au festival de cinéma international !\n{100}{175}Ce soir nous vous présentons en avant-première|notre grand documentaire exclusif.\n{200}{275}{Y:i}Narrateur : Le voyage a débuté en 1998...\n{300}{375}Merci à tous de votre présence.|Bonne projection à tous !",
  "exampleSrtOutput": "1\n00:00:01,000 --> 00:00:03,000\nBienvenue au festival de cinéma international !\n\n2\n00:00:04,000 --> 00:00:07,000\nCe soir nous vous présentons en avant-première\nnotre grand documentaire exclusif.\n\n3\n00:00:08,000 --> 00:00:11,000\n<i>Narrateur : Le voyage a débuté en 1998...</i>\n\n4\n00:00:12,000 --> 00:00:15,000\nMerci à tous de votre présence.\nBonne projection à tous !",
  "exampleExplanation": "Dans cet exemple pratique, le fichier MicroDVD comportait la ligne d'en-tête {1}{1}25.000, détectée par notre outil pour caler la conversion sur 25.000 FPS. L'image 25 s'est transformée en 1.000s (00:00:01,000) et l'image 75 en 3.000s (00:00:03,000). Remarquez également que la barre verticale (|) de la réplique 2 a été convertie en un saut de ligne naturel et que la balise de style {Y:i} de la réplique 3 a été changée en balise HTML <i> reconnue par tous les lecteurs vidéo.",
  "formatsComparisonTitle": "MicroDVD (.sub) vs. SubViewer (.sub) vs. VobSub (.sub)",
  "formatsComparisonSubtitle": "Distinguer clairement les trois technologies de sous-titres réunies sous la même extension .sub.",
  "formatsComparisonText": [
    "L'une des sources de confusion les plus récurrentes dans le traitement vidéo provient du fait que trois formats incompatibles partagent la même extension .sub. En ouvrant simplement le fichier dans un éditeur de texte standard (comme le Bloc-notes ou VS Code), la distinction saute immédiatement aux yeux.",
    "Si le document commence par des chiffres entre accolades (comme {1}{1}25.000 ou {50}{120}Bonjour), il s'agit d'un sous-titre texte MicroDVD. S'il débute par une section [INFORMATION] suivie d'horodatages séparés par des virgules (comme 00:01:25.50,00:01:28.10), il s'agit de SubViewer. Ces deux formats sont convertis instantanément par notre outil.",
    "En revanche, si l'ouverture du fichier révèle des caractères incompréhensibles et des symboles binaires, ou s'il était accompagné d'un fichier .idx du même nom, vous avez affaire à un fichier binaire VobSub. Les sous-titres VobSub contiennent des images de sous-titres extraites de DVD, et non du texte éditable. Pour les convertir en SRT, un logiciel d'OCR comme Subtitle Edit est nécessaire. Notre outil détecte automatiquement les fichiers VobSub et vous alerte aussitôt."
  ],
  "ffmpegTitle": "Conversion de SUB en SRT en Ligne de Commande (FFmpeg)",
  "ffmpegSubtitle": "Lignes de commande automatisées pour les utilisateurs expérimentés, développeurs et techniciens vidéo.",
  "ffmpegCommand": "# Convertir un fichier SubViewer (.sub) basé sur le temps en SubRip (.srt)\nffmpeg -i entree.sub sortie.srt\n\n# Convertir un fichier MicroDVD (.sub) en spécifiant la cadence de la vidéo (23.976 FPS)\nffmpeg -r 23.976 -i entree.sub sortie.srt\n\n# Convertir un fichier MicroDVD avec encodage régional Windows-1252 (ANSI)\nffmpeg -sub_charenc CP1252 -r 25 -i entree.sub sortie.srt\n\n# Traitement par lot de tous les fichiers .sub sous PowerShell Windows\nGet-ChildItem *.sub | ForEach-Object { ffmpeg -r 23.976 -i $_.FullName ($_.BaseName + \".srt\") }",
  "ffmpegExplanation": [
    "FFmpeg est le couteau suisse incontournable en ligne de commande pour le traitement et la conversion de flux vidéo, audio et de sous-titres. Pour les fichiers SubViewer (.sub), FFmpeg lit directement les temps puisqu'ils s'appuient déjà sur des minutes et secondes d'horloge.",
    "En revanche, pour convertir des sous-titres MicroDVD (.sub), il est IMPÉRATIF d'indiquer la cadence d'images avec le paramètre -r avant le fichier d'entrée (-i). Sans ce paramètre, FFmpeg appliquera par défaut une valeur de 25 FPS, provoquant un décalage immédiat sur les vidéos tournées à 23.976, 29.97 ou 30 FPS.",
    "De surcroît, de nombreux fichiers anciens ont été enregistrés avec des pages de code régionales comme Windows-1252 ou ISO-8859-1 au lieu de l'UTF-8 standard. Le paramètre -sub_charenc permet de convertir les accents français (é, è, ê, ç, à) sans altération visuelle."
  ],
  "useCasesTitle": "Cas d'Usage Courants pour la Conversion de SUB en SRT",
  "useCasesSubtitle": "Situations concrètes où le passage de sous-titres .sub historiques vers le format .srt s'impose.",
  "useCasesList": [
    {
      "title": "Lecture sur Téléviseurs Connectés et Boîtiers Multimédias",
      "description": "Les Smart TV de marques comme Samsung, LG ou Sony ainsi que les boîtiers Apple TV et Roku ne lisent pas les sous-titres par images. Convertir en SRT permet une lecture fluide via clé USB, serveurs DLNA ou applications comme Plex et Emby."
    },
    {
      "title": "Publication de Vidéos sur YouTube, Vimeo et Réseaux Sociaux",
      "description": "Les hébergeurs vidéo exigent des fichiers de sous-titres textuels standard (SRT ou VTT). L'intégration de fichiers SRT active le sous-titrage pour malentendants et améliore le référencement naturel (SEO) de vos vidéos."
    },
    {
      "title": "Montage Professionnel dans Premiere Pro, DaVinci et Final Cut",
      "description": "Les logiciels de montage non linéaire professionnels ne gèrent pas les fichiers .sub par images sur leur timeline. Le format SRT offre une gestion sur piste dédiée avec paramétrage de polices, styles et incrustation."
    },
    {
      "title": "Archivage Numérique et Pérennité des Collections Vidéo",
      "description": "Conserver des œuvres avec des sous-titres au format propriétaire fait courir un risque d'obsolescence à moyen terme. Harmoniser sa cinémathèque au format SRT encodé en UTF-8 garantit une lisibilité sur tous les appareils de demain."
    }
  ],
  "troubleshootTitle": "Résolution des Problèmes Fréquents lors de la Conversion SUB vers SRT",
  "troubleshootSubtitle": "Diagnostiquez et corrigez rapidement les désynchronisations progressives, corruptions d'accents et erreurs VobSub.",
  "troubleshootTips": [
    {
      "issue": "Les sous-titres se décalent de manière progressive au fil de la lecture",
      "cause": "La cadence d'images (FPS) choisie lors de la conversion ne correspond pas à la cadence réelle de la vidéo (ex. conversion à 25 FPS d'un film tourné à 23.976 FPS).",
      "solution": "Ouvrez la vidéo dans VLC Media Player, faites Ctrl+J (ou Cmd+I) pour voir les Informations sur les codecs, relevez la Fréquence d'images exacte, puis reconvertissez votre fichier dans notre outil avec la même valeur."
    },
    {
      "issue": "Les lettres accentuées ou caractères spéciaux apparaissent déformés",
      "cause": "Le fichier .sub d'origine a été enregistré avec un encodage ANSI régional (Windows-1252 ou ISO-8859-1) au lieu de l'UTF-8.",
      "solution": "Ouvrez le fichier .sub dans le Bloc-notes ou VS Code, choisissez Fichier > Enregistrer sous, sélectionnez UTF-8 dans le menu déroulant Encodage, puis convertissez à nouveau votre fichier dans notre navigateur."
    },
    {
      "issue": "Le convertisseur signale que le fichier est un conteneur binaire VobSub",
      "cause": "Vous avez importé un fichier binaires (.sub + .idx) extrait d'un DVD, qui contient des images de pixels et non du texte brut.",
      "solution": "Utilisez un utilitaire d'OCR spécialisé comme Subtitle Edit (Windows/Linux) ou BDSup2Sub. Ces programmes analysent visuellement les dessins des lettres pour produire un fichier texte SRT modifiable."
    },
    {
      "issue": "Les phrases se retrouvent sur une seule ligne ou contiennent encore des barres (|)",
      "cause": "Le fichier d'origine utilisait un délimiteur singulier ou l'option de nettoyage était désactivée.",
      "solution": "Veillez à cocher l'option 'Convertir les Balises de Style' dans les paramètres du convertisseur. Notre système scinde automatiquement les barres verticales (|) en retours à la ligne naturels."
    }
  ],
  "workflowTitle": "Protocole Idéal pour le Traitement de vos Sous-titres",
  "workflowSubtitle": "Bonnes pratiques pour convertir, vérifier et intégrer vos sous-titres dans vos projets vidéo.",
  "workflowSteps": [
    "Étape 1 : Analyser la Vidéo — Ouvrez votre vidéo dans VLC ou MediaInfo pour déterminer la cadence d'images précise (ex. 23.976 ou 25.000 FPS) ainsi que la langue audio.",
    "Étape 2 : Convertir le Fichier SUB en SRT — Déposez votre fichier .sub dans notre convertisseur en ligne, ajustez la cadence correspondante et téléchargez votre fichier .srt propre en UTF-8.",
    "Étape 3 : Contrôler la Synchronisation — Lancez la vidéo avec le fichier .srt dans VLC pour vous assurer que les répliques tombent juste au début, au milieu et vers la fin du film.",
    "Étape 4 : Multiplexer ou Publier — Intégrez la piste SRT dans votre fichier MP4 ou MKV avec MKVToolNix ou téléversez le sous-titre sur votre plateforme de streaming préférée."
  ],
  "conclusionTitle": "Conclusion : Offrez une Compatibilité Parfaite à vos Sous-titres",
  "conclusionText": [
    "Passer des sous-titres anciens MicroDVD au standard universel SubRip (.srt) est la démarche la plus efficace pour garantir une diffusion irréprochable sur tous vos écrans, lecteurs et outils de montage. Grâce à un calcul rigoureux des millisecondes à partir des images vidéo, notre convertisseur de SUB en SRT assure un calage parfait sans perte de temps.",
    "De plus, SRTConverters s'exécute intégralement en local dans votre navigateur web. Sans téléversement de fichiers, dans le respect absolu de votre vie privée et avec une rapidité instantanée, vous pouvez convertir l'ensemble de votre vidéothèque en toute sérénité. Ajoutez cette page à vos favoris et profitez de l'ensemble de nos outils de sous-titrage en ligne."
  ]
},
  de: {
  "introTitle": "Der vollständige Leitfaden zur Konvertierung von SUB-Untertiteln in das SRT-Format",
  "introSubtitle": "Meistern Sie den Übergang von älteren framebasierten MicroDVD- und zeitbasierten SubViewer (.sub)-Untertiteln zu universell kompatiblem SubRip (.srt). Lernen Sie die mathematische Frame-in-Zeit-Umrechnung, FFmpeg-Terminalbefehle und bewährte Fehlerbehebungsmethoden für eine perfekte Synchronisation kennen.",
  "introText": [
    "Über viele Jahre hinweg war die Dateiendung .sub ein unverzichtbarer Bestandteil der digitalen Videowiedergabe, beim Rippen von DVDs und im Multimedia-Bereich. Wer heute jedoch versucht, eine ältere .sub-Datei zusammen mit einem Video auf einem modernen Smart-TV, Smartphone, Web-Player oder in einem Schnittprogramm abzuspielen, wird fast unweigerlich mit Wiedergabefehlern, fehlendem Text oder erheblichen Asynchronitäten konfrontiert. Dagegen hat sich SubRip (.srt) als der weltweite, unangefochtene Standard für textbasierte Untertitel durchgesetzt.",
    "Das grundlegende technische Problem bei .sub-Dateien liegt in der Fragmentierung historischer Formate. Während moderne Standards Zeitstempel in realen Stunden, Minuten, Sekunden und Millisekunden speichern, speichert das am weitesten verbreitete textbasierte SUB-Format—MicroDVD—die Einblendzeiten als bloße Bildnummern (Frames) der Videodatei. Die Untertiteldatei selbst besitzt keinerlei Verständnis für die reale Uhrzeit; sie gibt lediglich an, dass eine Textzeile bei Frame 1500 erscheinen und bei Frame 1650 wieder ausgeblendet werden soll. Die Umwandlung von MicroDVD in SRT verlangt daher eine präzise mathematische Umrechnung anhand der exakten Bildwiederholrate (FPS) der Videospur.",
    "Ganz gleich, ob Sie ein Archiv klassischer Spielfilme digitalisieren, Videodateien für YouTube und Streaming-Plattformen aufbereiten oder Untertitelspuren in Premiere Pro, DaVinci Resolve oder Final Cut Pro schneiden möchten: Dieser ausführliche Leitfaden liefert Ihnen sämtliche Werkzeuge. Von mathematischen Umrechnungsformeln über FFmpeg-Skripte bis hin zu Strukturvergleichen und Fehlerbehebungen erlangen Sie die volle Kontrolle über die Konvertierung von SUB in SRT."
  ],
  "whatIsTitle": "SUB und SRT verstehen: Framebasierte Untertitel vs. universelle Zeitstempel",
  "whatIsText": [
    "SubRip (.srt) entstand Ende der 1990er-Jahre als Teil der gleichnamigen Ripping-Software von Brain, um DVD-Untertitel in einem offenen, schlanken und universellen Textformat zu speichern. Die Struktur einer SRT-Datei ist denkbar einfach: Jeder Block besteht aus einer fortlaufenden Nummer (1, 2, 3...), einem durch ' --> ' getrennten Zeitstempelpaar mit Millisekunden-Genauigkeit (HH:MM:SS,mmm), einer oder mehreren Textzeilen und einer Leerzeile als Trenner. Diese unkomplizierte Struktur garantiert eine native Unterstützung auf praktisch allen Mediaplayern, Betriebssystemen und Videoplattformen.",
    "Hinter der Dateiendung .sub verbergen sich dagegen drei grundverschiedene Technologien: MicroDVD (.sub), SubViewer (.sub) und VobSub (.sub). MicroDVD wurde 1999–2001 von Tias Software für frühe DivX- und XviD-Videodateien entwickelt. Anstelle von realen Uhrzeiten wird jeder Untertitel durch geschweifte Klammern und Framenummern definiert: {start_frame}{end_frame}Untertiteltext. Mehrzeilige Dialoge werden durch ein Pipe-Symbol (|) getrennt.",
    "SubViewer (.sub), entwickelt von David Vignoni, ist ein Textformat mit Metadaten-Kopfzeile ([INFORMATION]), Zeitstempeln in Hundertstelsekunden (HH:MM:SS.cs,HH:MM:SS.cs) und [br]-Tags für Zeilenumbrüche. VobSub (.sub + .idx) wiederum ist gar keine Textdatei, sondern ein binäres Paket aus Bitmap-Grafiken (Pixelbildern), die direkt von Video-DVDs ausgelesen wurden. Zu wissen, welcher .sub-Typ vorliegt, ist der entscheidende erste Schritt für eine erfolgreiche Umwandlung."
  ],
  "whyConvertTitle": "Warum sollten Sie SUB-Untertitel in SRT umwandeln?",
  "whyConvertSubtitle": "Erfahren Sie die wesentlichen technischen Vorzüge des Wechsels von alten .sub-Dateien zum modernen SubRip (.srt)-Standard.",
  "whyConvertReasons": [
    {
      "title": "Universelle Geräte- und Player-Kompatibilität",
      "description": "SRT wird von 100% aller modernen Mediaplayer (VLC, MPC-HC, IINA, MPV), mobilen Betriebssysteme (iOS, Android), Smart-TVs (Samsung Tizen, LG webOS, Android TV) und Streaming-Boxen (Roku, Apple TV, Chromecast) ohne zusätzliche Codecs nativ unterstützt."
    },
    {
      "title": "Optimale Eignung für Web und Streaming",
      "description": "Videoplattformen wie YouTube, Vimeo, Facebook sowie moderne HTML5-Webplayer verweigern framebasierte .sub-Dateien vollständig. Die Konvertierung in SRT ermöglicht den sofortigen Upload und eine reibungslose Darstellung im Webbrowser."
    },
    {
      "title": "Keine Bindung an Bildwiederholraten (FPS) mehr",
      "description": "MicroDVD-Untertitel sind untrennbar mit der Framerate des Originalvideos verknüpft. Wird das Video neu kodiert oder mit anderer Geschwindigkeit abgespielt, geraten die Untertitel aus dem Takt. SRT nutzt absolute Zeitstempel und ist völlig unabhängig von Bildraten."
    },
    {
      "title": "Mühelose Bearbeitung und Übersetzung in Schnittsoftware",
      "description": "Gängige Untertitel-Editoren (Subtitle Edit, Aegisub) sowie professionelle NLE-Schnittprogramme (Adobe Premiere Pro, Blackmagic DaVinci Resolve, Final Cut Pro) unterstützen SRT nativ für Korrekturen, Timing-Anpassungen und Lokalisierungen."
    }
  ],
  "howToTitle": "In 3 einfachen Schritten SUB online in SRT konvertieren",
  "howToSubtitle": "Wandeln Sie Ihre MicroDVD- oder SubViewer-.sub-Dateien direkt im Browser in saubere, synchronisierte .srt-Dateien um – ohne Softwareinstallation.",
  "howToSteps": [
    {
      "step": "1",
      "title": "SUB-Untertitel hochladen oder einfügen",
      "description": "Ziehen Sie Ihre .sub-Datei per Drag & Drop in das Feld, wählen Sie die Datei über den Dateimanager aus oder fügen Sie den Untertiteltext direkt in das Textfeld ein."
    },
    {
      "step": "2",
      "title": "Video-Bildrate (FPS) überprüfen",
      "description": "Unser Konverter erkennt automatisch, ob es sich um MicroDVD oder SubViewer handelt. Bei MicroDVD prüfen Sie bitte die Bildrate des Videos (z. B. 23.976, 24, 25 oder 29.97 FPS) für eine exakte Umrechnung."
    },
    {
      "step": "3",
      "title": "Konvertierte SRT-Datei herunterladen",
      "description": "Klicken Sie auf .SRT herunterladen, um die fertige SubRip-Datei sofort auf Ihrem Gerät zu speichern, oder nutzen Sie den Button In die Zwischenablage kopieren."
    }
  ],
  "differenceTitle": "Technischer Vergleich: SUB (MicroDVD & SubViewer) vs. SRT",
  "differenceSubtitle": "Ein detaillierter Gegenüberstellung von Zeitmessung, Dateiaufbau, Kompatibilität und Formatierung.",
  "differenceTable": [
    {
      "feature": "Zeitmessung",
      "srt": "Reale Uhrzeit (HH:MM:SS,mmm)",
      "microdvd": "Video-Framenummern ({start}{ende})",
      "subviewer": "Reale Uhrzeit (HH:MM:SS.cs)"
    },
    {
      "feature": "Präzision / Zeiteinheit",
      "srt": "1 Millisekunde (1/1000 Sekunde)",
      "microdvd": "1 Video-Frame (1/FPS Sekunde)",
      "subviewer": "1 Hundertstelsekunde (1/100 Sekunde)"
    },
    {
      "feature": "Dateiaufbau",
      "srt": "Nummerierte Textblöcke getrennt durch Leerzeilen",
      "microdvd": "Eine Zeile pro Untertitel mit Klammern",
      "subviewer": "Header-Bereich, Zeitzeile, Dialogzeilen"
    },
    {
      "feature": "Mehrzeilige Untertitel",
      "srt": "Standard-Zeilenumbruch (CRLF oder LF)",
      "microdvd": "Vertikaler Strich bzw. Pipe-Symbol (|)",
      "subviewer": "[br]-Tag oder normaler Zeilenumbruch"
    },
    {
      "feature": "Formatierungsmöglichkeiten",
      "srt": "Einfache HTML-Tags (<i>, <b>, <u>, <font color>)",
      "microdvd": "Proprietäre Tags ({Y:i}, {Y:b}, {C:$BBGGRR})",
      "subviewer": "Schriftangaben im Header und Basistags"
    },
    {
      "feature": "Aktuelle Geräteunterstützung",
      "srt": "100% universell auf allen Geräten und Programmen",
      "microdvd": "Sehr begrenzt (VLC und alte Mediaplayer)",
      "subviewer": "Selten außerhalb spezieller Desktop-Tools"
    },
    {
      "feature": "Web- und Streaming-Support",
      "srt": "Universell (YouTube, Vimeo, HTML5 via VTT)",
      "microdvd": "Nicht unterstützt (Umwandlung erforderlich)",
      "subviewer": "Auf modernen Plattformen nicht unterstützt"
    },
    {
      "feature": "Bindung an Videobildrate (FPS)",
      "srt": "Keine (auf echter Uhrzeit basierend)",
      "microdvd": "Vollständig (an die FPS des Videos gebunden)",
      "subviewer": "Keine (auf echter Uhrzeit basierend)"
    }
  ],
  "fpsGuideTitle": "Die entscheidende Rolle der Bildrate (FPS) bei der Konvertierung",
  "fpsGuideSubtitle": "Warum die exakte Übereinstimmung der FPS für eine driftfreie Umrechnung von Framenummern in Uhrzeiten unerlässlich ist.",
  "fpsGuideText": [
    "Bei der Umwandlung von MicroDVD (.sub)-Dateien in SRT ist das Wissen um die Bildwiederholrate kein nebensächliches Detail: Es ist der entscheidende Parameter dafür, ob die Untertitel perfekt synchron zum Ton laufen oder unbrauchbar versetzt dargestellt werden. Da MicroDVD jede Dialogzeile anhand von Bildnummern ausweist, muss der Konverter diesen Wert durch die tatsächlichen Bilder pro Sekunde dividieren, um die Millisekunden zu berechnen.",
    "Wählen Sie bei der Umwandlung eine abweichende Bildrate, bleibt der Zeitfehler nicht gleich—er wächst mit jeder Minute der Wiedergabe weiter an. Ein Spielfilm mit 23.976 FPS, der versehentlich mit einer 25.000 FPS-Einstellung (PAL) umgewandelt wird, führt zu einer Geschwindigkeitsabweichung von 4,1%. Nach 10 Minuten eilt der Text bereits um 25 Sekunden voraus; nach einer Stunde beträgt der Versatz über zweieinhalb Minuten! Kontrollieren Sie daher stets die Original-FPS."
  ],
  "fpsTable": [
    {
      "fps": "23.976 FPS (24000/1001)",
      "standard": "NTSC-Kino / Blu-ray / Streaming",
      "useCase": "Standard für Spielfilme, nordamerikanische Blu-ray-Veröffentlichungen und internationale Streaming-Produktionen."
    },
    {
      "fps": "24.000 FPS",
      "standard": "Kino-Standard / DCI-Projektion",
      "useCase": "Klassischer Standard für Theater- und Kinovorführungen sowie Digital Cinema Packages (DCP) bei Filmfestivals."
    },
    {
      "fps": "25.000 FPS",
      "standard": "PAL- / SECAM-Fernsehen",
      "useCase": "Europäisches, australisches und asiatisches Fernsehen, europäische DVDs und Standard-Fernsehproduktionen."
    },
    {
      "fps": "29.970 FPS (30000/1001)",
      "standard": "NTSC-Fernsehen",
      "useCase": "Standard- und High-Definition-Fernsehübertragungen in Nordamerika, Japan und Südkorea."
    },
    {
      "fps": "30.000 FPS",
      "standard": "Web-Videos / Frühe Digitalaufnahmen",
      "useCase": "Ältere Smartphone-Aufnahmen, Webcams und einfache Bildschirmaufzeichnungen am PC."
    },
    {
      "fps": "50.000 FPS",
      "standard": "PAL High Frame Rate (HFR)",
      "useCase": "Europäische Sportübertragungen, Live-Events und fortschrittliche Broadcast-Signale in 720p50 oder 1080p50."
    },
    {
      "fps": "59.940 FPS (60000/1001)",
      "standard": "NTSC High Frame Rate",
      "useCase": "Sportfernsehen in den USA, Aufnahmen moderner Spielkonsolen und professionelle 60p-Web-Streams."
    },
    {
      "fps": "60.000 FPS",
      "standard": "Gaming / Moderne Displays",
      "useCase": "PC-Monitore, aktuelle Smartphones, YouTube-Gaming-Videos und extrem flüssige Bewegungsaufnahmen."
    }
  ],
  "mathTitle": "Die Mathematik der Frame-in-Zeit-Umrechnung",
  "mathSubtitle": "Wie Framenummern mathematisch präzise in Stunden, Minuten, Sekunden und Millisekunden überführt werden.",
  "mathFormula": "Zeit in Millisekunden = Math.round((Framenummer / Video-FPS) * 1000)",
  "mathExplanation": [
    "Um nachzuvollziehen, wie unser Konverter Framenummern aus MicroDVD in reguläre SubRip-Zeitstempel umrechnet, betrachten wir ein anschauliches Rechenbeispiel: Ein Untertitelblock lautet {1440}{1560}Dialogzeile bei einem Video mit einer Bildrate von 24.000 FPS.",
    "Für die Startzeit: 1440 geteilt durch 24.000 ergibt exakt 60.000 Sekunden (also 60.000 Millisekunden). Im SRT-Format entspricht dies 00:01:00,000. Für die Endzeit: 1560 geteilt durch 24.000 ergibt 65.000 Sekunden (65.000 Millisekunden), formatiert als 00:01:05,000. Der vollständige SRT-Block lautet somit: 00:01:00,000 --> 00:01:05,000.",
    "Betrachten wir dieselbe Framenummer (1440) bei einem Video mit 23.976 FPS (23.976023976...): 1440 / 23.976023976 = 60.060 Sekunden (60.060 Millisekunden), was als 00:01:00,060 formatiert wird. Auch wenn die Differenz nach einer Minute nur 60 Millisekunden beträgt, wächst dieser kleine Unterschied über die Spieldauer eines zweistündigen Films zu einem massiven Versatz heran, wenn mit der falschen Bildrate gerechnet wird."
  ],
  "exampleTitle": "Konkretes Beispiel für die Konvertierung von SUB in SRT",
  "exampleIntro": "Vergleichen Sie eine originale MicroDVD-Untertiteldatei mit der sauberen, standardisierten SRT-Ausgabe unseres Konverters.",
  "exampleSubInput": "{1}{1}25.000\n{25}{75}Willkommen beim internationalen Filmfestival!\n{100}{175}Heute präsentieren wir die exklusive Premiere|unserer großen Dokumentation.\n{200}{275}{Y:i}Erzähler: Die Reise begann im Jahr 1998...\n{300}{375}Vielen Dank für Ihre Aufmerksamkeit.|Viel Freude bei der Vorführung!",
  "exampleSrtOutput": "1\n00:00:01,000 --> 00:00:03,000\nWillkommen beim internationalen Filmfestival!\n\n2\n00:00:04,000 --> 00:00:07,000\nHeute präsentieren wir die exklusive Premiere\nunserer großen Dokumentation.\n\n3\n00:00:08,000 --> 00:00:11,000\n<i>Erzähler: Die Reise begann im Jahr 1998...</i>\n\n4\n00:00:12,000 --> 00:00:15,000\nVielen Dank für Ihre Aufmerksamkeit.\nViel Freude bei der Vorführung!",
  "exampleExplanation": "In diesem Beispiel enthielt die MicroDVD-Eingabedatei die Kopfzeile {1}{1}25.000. Unser Konverter hat diesen Wert automatisch erkannt und die Umrechnung auf 25.000 FPS eingestellt. Frame 25 wurde zu 1,000s (00:00:01,000) und Frame 75 zu 3,000s (00:00:03,000). Beachten Sie zudem, dass der senkrechte Strich (|) in Block 2 sauber in einen echten Zeilenumbruch umgewandelt wurde und das Formatierungs-Tag {Y:i} in Block 3 in ein reguläres HTML-Tag <i> überführt wurde.",
  "formatsComparisonTitle": "MicroDVD (.sub) vs. SubViewer (.sub) vs. VobSub (.sub)",
  "formatsComparisonSubtitle": "Die drei grundverschiedenen Untertiteltechnologien unter der gemeinsamen Endung .sub unterscheiden.",
  "formatsComparisonText": [
    "Ein häufiger Grund für Missverständnisse bei der Videoverarbeitung ist die Tatsache, dass drei vollkommen inkompatible Dateiformate dieselbe Dateiendung .sub verwenden. Wenn Sie eine Datei in einem normalen Texteditor (wie Notepad oder VS Code) öffnen, erkennen Sie sofort, um welche Variante es sich handelt.",
    "Beginnt das Dokument mit Zahlen in geschweiften Klammern (wie {1}{1}25.000 oder {50}{120}Hallo), liegt eine MicroDVD-Textdatei vor. Beginnt sie mit einem Abschnitt [INFORMATION] gefolgt von kommagetrennten Zeitangaben (wie 00:01:25.50,00:01:28.10), handelt es sich um SubViewer. Beide Formate werden von unserem Web-Tool sofort in sauberes SRT umgewandelt.",
    "Sehen Sie beim Öffnen jedoch unleserliche Binärzeichen und wirre Symbole, oder lag neben der Datei eine gleichnamige .idx-Datei, handelt es sich um ein VobSub-Grafikpaket. VobSub-Dateien enthalten gerenderte Pixelbilder von DVD-Untertiteln, keinen echten Text. Um sie in SRT umzuwandeln, ist ein OCR-Texterkennungsprogramm wie Subtitle Edit erforderlich. Unser Tool erkennt binäre VobSub-Dateien automatisch und weist Sie sofort darauf hin."
  ],
  "ffmpegTitle": "SUB über die Kommandozeile in SRT umwandeln (FFmpeg)",
  "ffmpegSubtitle": "Automatisierte Transcodierungsbefehle für Power-User, Softwareentwickler und Videospezialisten.",
  "ffmpegCommand": "# Zeitbasierte SubViewer-Dateien (.sub) in SubRip (.srt) umwandeln\nffmpeg -i eingabe.sub ausgabe.srt\n\n# Framebasierte MicroDVD-Dateien (.sub) mit Bildrate umwandeln (23.976 FPS)\nffmpeg -r 23.976 -i eingabe.sub ausgabe.srt\n\n# MicroDVD mit Zeichensatz-Korrektur für Windows-1252 (ANSI) umwandeln\nffmpeg -sub_charenc CP1252 -r 25 -i eingabe.sub ausgabe.srt\n\n# Stapelverarbeitung aller .sub-Dateien in einem Ordner unter Windows PowerShell\nGet-ChildItem *.sub | ForEach-Object { ffmpeg -r 23.976 -i $_.FullName ($_.BaseName + \".srt\") }",
  "ffmpegExplanation": [
    "FFmpeg ist das führende Befehlszeilen-Framework für die Verarbeitung, das Muxen und das Konvertieren von Video-, Audio- und Untertitelspuren. Bei SubViewer (.sub)-Dateien kann FFmpeg die Zeitwerte direkt einlesen, da sie bereits auf realen Minuten und Sekunden basieren.",
    "Beim Konvertieren von MicroDVD (.sub)-Dateien MÜSSEN Sie dagegen vor dem Eingabeparameter (-i) die Bildrate mit dem Flag -r angeben. Ohne diesen Schalter setzt FFmpeg standardmäßig eine Rate von 25 FPS an, was bei Videos mit 23.976, 29.97 oder 30 FPS sofort zu massiven Asynchronitäten führt.",
    "Zudem wurden viele alte Untertiteldateien nicht in modernem UTF-8, sondern in länderspezifischen ANSI-Kodierungen wie Windows-1252 oder ISO-8859-1 abgespeichert. Mit dem Parameter -sub_charenc stellen Sie sicher, dass deutsche Umlaute (ä, ö, ü, ß) und Sonderzeichen fehlerfrei in UTF-8 überführt werden."
  ],
  "useCasesTitle": "Typische Anwendungsszenarien für die Konvertierung von SUB in SRT",
  "useCasesSubtitle": "Praxisfälle, in denen die Umstellung von alten .sub-Untertiteln auf modernes .srt unumgänglich ist.",
  "useCasesList": [
    {
      "title": "Wiedergabe auf modernen Smart-TVs und Streaming-Geräten",
      "description": "Smart-TVs von Samsung, LG oder Sony sowie Boxen wie Apple TV und Roku können framebasierte MicroDVD-Dateien nicht interpretieren. Das SRT-Format ermöglicht eine einwandfreie Wiedergabe via USB, DLNA oder Heimserver (Plex, Emby)."
    },
    {
      "title": "Veröffentlichung auf YouTube, Vimeo und sozialen Medien",
      "description": "Online-Videoplattformen akzeptieren ausschließlich standardisierte Untertiteldateien (SRT oder VTT). Der Upload von SRT ermöglicht Untertitel für Barrierefreiheit und verbessert das Auffinden in Suchmaschinen (SEO)."
    },
    {
      "title": "Professioneller Videoschnitt in Premiere Pro, DaVinci und Final Cut",
      "description": "Professionelle Schnittprogramme können framebasierte .sub-Dateien nicht auf Untertitelspuren verarbeiten. SRT ermöglicht die flexible Bearbeitung von Schriften, Positionen, Stilen sowie das dauerhafte Einbrennen ins Bild."
    },
    {
      "title": "Digitale Langzeitarchivierung und Mediathek-Pflege",
      "description": "Videosammlungen mit veralteten oder proprietären Untertitelformaten bergen die Gefahr künftiger Inkompatibilität. Die Vereinheitlichung auf offene, UTF-8-kodierte SRT-Dateien gewährleistet die Lesbarkeit über Jahrzehnte hinweg."
    }
  ],
  "troubleshootTitle": "Häufige Probleme bei der Konvertierung und deren Lösungen",
  "troubleshootSubtitle": "Schnelle Fehlerdiagnose bei fortschreitender Asynchronität, Zeichensatzproblemen und VobSub-Grafiken.",
  "troubleshootTips": [
    {
      "issue": "Die Untertitel laufen mit der Zeit allmählich aus dem Takt",
      "cause": "Die bei der Umwandlung eingestellte Bildwiederholrate (FPS) stimmte nicht mit der tatsächlichen Framerate des Videos überein (z. B. 25 FPS gewählt für einen Film mit 23.976 FPS).",
      "solution": "Öffnen Sie das Video im VLC Media Player, drücken Sie Strg+J (oder Cmd+I), prüfen Sie den genauen Wert bei 'Bildwiederholrate', wählen Sie denselben Wert in unserem Konverter und wandeln Sie die Datei erneut um."
    },
    {
      "issue": "Umlaute und Sonderzeichen werden als seltsame Symbole dargestellt",
      "cause": "Die originale .sub-Datei wurde in einer veralteten ANSI-Kodierung (wie Windows-1252 oder ISO-8859-1) statt in modernem UTF-8 gespeichert.",
      "solution": "Öffnen Sie die .sub-Datei im Editor (Notepad), wählen Sie Datei > Speichern unter, stellen Sie die Codierung auf UTF-8 um, speichern Sie ab und wiederholen Sie die Konvertierung in unserem Online-Tool."
    },
    {
      "issue": "Der Konverter meldet, dass die Datei ein binäres VobSub-Paket ist",
      "cause": "Die hochgeladene Datei stammt von einer DVD (.sub + .idx) und enthält Bitmap-Bilder der Untertitel statt digitalem Text.",
      "solution": "Nutzen Sie ein spezielles OCR-Programm für Untertitel wie Subtitle Edit (Windows/Linux) oder BDSup2Sub. Diese Werkzeuge analysieren die Pixelbilder und generieren eine bearbeitbare SRT-Textdatei."
    },
    {
      "issue": "Textzeilen erscheinen ungetrennt in einer Zeile oder zeigen noch das Pipe-Symbol (|)",
      "cause": "Die Ausgangsdatei enthielt unübliche Trennungen oder die Formatierungsoption war deaktiviert.",
      "solution": "Stellen Sie sicher, dass der Schalter 'Formatierungs-Tags umwandeln' in den Einstellungen aktiviert ist. Unser Konverter wandelt Pipe-Symbole automatisch in saubere, standardkonforme Zeilenumbrüche um."
    }
  ],
  "workflowTitle": "Empfohlener Workflow zur Untertitelbearbeitung",
  "workflowSubtitle": "Best Practices für das Konvertieren, Prüfen und Einbinden Ihrer Untertitel in moderne Videoprojekte.",
  "workflowSteps": [
    "Schritt 1: Video-Eigenschaften ermitteln — Öffnen Sie das Video in VLC oder MediaInfo, um die exakte Framerate (z. B. 23.976 oder 25.000 FPS) und Audiosprache zu überprüfen.",
    "Schritt 2: SUB in SRT konvertieren — Laden Sie die .sub-Datei in unseren Online-Konverter, überprüfen Sie die passende FPS-Einstellung und laden Sie die fertige, UTF-8-kodierte .srt-Datei herunter.",
    "Schritt 3: Synchronisation gegenprüfen — Starten Sie das Video zusammen mit der neuen .srt-Datei in VLC und kontrollieren Sie, ob die Sprache am Anfang, in der Mitte und gegen Ende des Films exakt mit dem Text übereinstimmt.",
    "Schritt 4: Muxen oder Veröffentlichen — Fügen Sie die SRT-Spur mit MKVToolNix dauerhaft in eine MP4- oder MKV-Datei ein oder laden Sie die Untertiteldatei auf Ihre Streaming-Plattform hoch."
  ],
  "conclusionTitle": "Fazit: Sichern Sie sich lückenlose Kompatibilität für Ihre Untertitel",
  "conclusionText": [
    "Der Wechsel von veralteten framebasierten SUB-Untertiteln zum modernen SubRip (.srt)-Standard ist der verlässlichste Weg, um eine einwandfreie Wiedergabe auf all Ihren Geräten, Fernsehgeräten und Schnittprogrammen sicherzustellen. Durch die exakte mathematische Umrechnung von Video-Frames in Millisekunden liefert unser Konverter bildgenaue Untertitel ohne lästige Nachjustierung.",
    "Das Beste daran: SRTConverters verarbeitet alle Ihre Dateien vollständig lokal im Browser. Ohne Server-Uploads, bei garantiertem Datenschutz und mit sofortiger Konvertierungsgeschwindigkeit können Sie Ihre Untertitelsammlung sorgenfrei modernisieren. Speichern Sie diese Seite als Lesezeichen und entdecken Sie unsere weiteren Untertitel-Tools."
  ]
},
  id: {
  "introTitle": "Panduan Lengkap Mengonversi Subtitle SUB ke Format SRT",
  "introSubtitle": "Pelajari cara mengubah subtitle MicroDVD berbasis frame dan SubViewer (.sub) menjadi format SubRip (.srt) yang kompatibel secara universal. Pahami rumus konversi frame ke waktu, perintah terminal FFmpeg, serta solusi praktis untuk mengatasi ketidaksinkronan.",
  "introText": [
    "Selama puluhan tahun, ekstensi file .sub telah menjadi format yang sangat umum dalam pemutaran video digital, ripping DVD rumahan, dan hiburan multimedia. Namun, jika Anda mencoba memutar file video lama bersama subtitle .sub di Smart TV modern, ponsel pintar, pemutar web, atau aplikasi video editing, Anda hampir pasti akan mengalami kegagalan pemutaran, teks tidak terbaca, atau pergeseran waktu yang parah. Sebaliknya, SubRip (.srt) telah mengukuhkan diri sebagai standar universal yang paling diandalkan untuk subtitle teks di seluruh dunia.",
    "Hambatan teknis utama dalam menangani file .sub berakar pada fragmentasi format lama. Berbeda dengan format subtitle modern yang menyimpan penanda waktu dalam hitungan jam, menit, detik, dan milidetik nyata, format SUB teks yang paling banyak dipakai—MicroDVD—menyimpan waktu dialog berdasarkan nomor frame video. File subtitle itu sendiri tidak memiliki konsep waktu jam; file hanya memerintahkan bahwa suatu kalimat harus muncul pada frame ke-1500 dan hilang pada frame ke-1650. Akibatnya, mengonversi MicroDVD ke SRT menuntut kalkulasi matematis yang akurat berdasarkan frame rate (FPS) dari video terkait.",
    "Baik Anda sedang mendigitalkan koleksi film bioskop klasik, menyiapkan video untuk YouTube atau platform streaming, maupun mengedit subtitle di Premiere Pro, DaVinci Resolve, atau Final Cut Pro, panduan teknis mendalam ini menyediakan semua yang Anda perlukan. Mulai dari rumus konversi milidetik dan baris perintah FFmpeg hingga perbandingan struktur format dan solusi masalah umum, Anda akan menguasai konversi SUB ke SRT secara menyeluruh."
  ],
  "whatIsTitle": "Memahami SUB dan SRT: Subtitle Berbasis Frame vs. Penanda Waktu Universal",
  "whatIsText": [
    "SubRip (.srt) diciptakan pada akhir tahun 1990-an sebagai bagian dari aplikasi SubRip buatan Brain untuk mengekstrak subtitle DVD ke dalam format teks terbuka yang ringan. Struktur file SRT sangat sederhana: setiap entri terdiri dari nomor urut bertahap (1, 2, 3...), rentang waktu awal dan akhir yang dipisahkan oleh ' --> ' dengan presisi milidetik (HH:MM:SS,mmm), satu atau beberapa baris teks dialog, serta baris kosong sebagai pemisah. Kesederhanaan inilah yang membuat SRT didukung secara luas oleh hampir semua pemutar media dan perangkat modern.",
    "Di sisi lain, ekstensi .sub mencakup tiga teknologi yang sama sekali berbeda: MicroDVD (.sub), SubViewer (.sub), dan VobSub (.sub). MicroDVD dirancang pada tahun 1999–2001 oleh Tias Software khusus untuk video kompresi era awal seperti DivX dan XviD. Alih-alih memakai waktu nyata, setiap dialog ditentukan oleh nomor frame video saat muncul dan menghilang dengan tanda kurung kurawal: {frame_awal}{frame_akhir}Teks dialog. Dialog multi-baris dipisahkan oleh karakter garis pipa vertikal (|).",
    "Sementara itu, SubViewer (.sub) yang dibuat oleh David Vignoni adalah format teks yang memiliki header informasi ([INFORMATION]) diikuti penanda waktu dalam perseratus detik (HH:MM:SS.cs,HH:MM:SS.cs) dan tag [br] untuk baris baru. Terakhir, VobSub (.sub + .idx) adalah format biner berisi gambar grafis bitmap yang disalin dari DVD video komersial. Mengetahui jenis file .sub yang Anda miliki adalah langkah awal paling penting sebelum melakukan konversi."
  ],
  "whyConvertTitle": "Mengapa Perlu Mengonversi Subtitle SUB ke SRT?",
  "whyConvertSubtitle": "Ketahui berbagai keuntungan teknis utama saat beralih dari format lama .sub ke standar universal SubRip (.srt).",
  "whyConvertReasons": [
    {
      "title": "Kompatibilitas Menyeluruh pada Semua Perangkat dan Pemutar",
      "description": "Format SRT didukung secara bawaan oleh 100% pemutar media modern (VLC, MPC-HC, IINA, MPV), sistem operasi seluler (iOS, Android), Smart TV (Samsung Tizen, LG webOS, Android TV), dan perangkat streaming (Roku, Apple TV, Chromecast)."
    },
    {
      "title": "Siap Digunakan di Web dan Platform Streaming",
      "description": "Platform video online seperti YouTube, Vimeo, Facebook, dan pemutar video HTML5 tidak menerima file .sub berbasis frame. Konversi ke SRT memungkinkan proses unggah instan dan penayangan langsung di browser web."
    },
    {
      "title": "Bebas dari Ketergantungan Frame Rate (FPS)",
      "description": "Subtitle MicroDVD terikat erat pada frame rate video aslinya. Jika video di-encode ulang atau dimainkan dengan kecepatan berbeda, subtitle akan langsung tidak pas. SRT menggunakan jam absolut, sehingga kebal terhadap perubahan kecepatan playback."
    },
    {
      "title": "Kemudahan Mengedit dan Menerjemahkan di Software Profesional",
      "description": "Aplikasi pengedit subtitle (Subtitle Edit, Aegisub) dan software video editing profesional (Adobe Premiere Pro, Blackmagic DaVinci Resolve, Final Cut Pro) mendukung SRT secara penuh untuk penyesuaian waktu dan pengecekan ejaan."
    }
  ],
  "howToTitle": "Cara Mengonversi SUB ke SRT Online dalam 3 Langkah Mudah",
  "howToSubtitle": "Ubah file MicroDVD atau SubViewer .sub Anda menjadi subtitle .srt yang rapi dan sinkron langsung di browser tanpa instalasi aplikasi tambahan.",
  "howToSteps": [
    {
      "step": "1",
      "title": "Unggah atau Tempel Subtitle SUB Anda",
      "description": "Tarik dan lepas file .sub Anda ke kotak upload, klik untuk memilih dari komputer Anda, atau tempelkan teks subtitle secara langsung ke area editor."
    },
    {
      "step": "2",
      "title": "Periksa Nilai Frame Rate Video (FPS)",
      "description": "Alat kami akan mengenali secara otomatis apakah file berupa MicroDVD atau SubViewer. Untuk MicroDVD, pastikan nilai FPS video (misalnya 23.976, 24, 25, atau 29.97 FPS) sesuai agar frame terhitung menjadi jam dan menit yang tepat."
    },
    {
      "step": "3",
      "title": "Unduh File SRT Hasil Konversi",
      "description": "Klik Unduh .SRT untuk langsung menyimpan file SubRip yang sudah dikonversi ke perangkat Anda, atau klik Salin ke Papan Klip untuk menempelkannya ke editor pilihan Anda."
    }
  ],
  "differenceTitle": "Perbandingan Teknis: SUB (MicroDVD & SubViewer) vs. SRT",
  "differenceSubtitle": "Tinjauan mendalam berdampingan mengenai mekanisme waktu, struktur file, dukungan perangkat, dan kemampuan pemformatan.",
  "differenceTable": [
    {
      "feature": "Mekanisme Waktu",
      "srt": "Waktu jam absolut (HH:MM:SS,mmm)",
      "microdvd": "Nomor frame video ({awal}{akhir})",
      "subviewer": "Waktu jam absolut (HH:MM:SS.cs)"
    },
    {
      "feature": "Presisi / Satuan",
      "srt": "1 milidetik (1/1000 detik)",
      "microdvd": "1 frame video (1/FPS detik)",
      "subviewer": "1 perseratus detik (1/100 detik)"
    },
    {
      "feature": "Struktur Dokumen",
      "srt": "Blok bernomor dipisahkan oleh baris kosong",
      "microdvd": "Satu baris per dialog dengan kurung kurawal",
      "subviewer": "Bagian header, baris waktu, baris teks"
    },
    {
      "feature": "Pemisah Baris Ganda",
      "srt": "Pemisah baris baru standar (CRLF atau LF)",
      "microdvd": "Karakter garis pipa vertikal (|)",
      "subviewer": "Tag [br] atau baris baru biasa"
    },
    {
      "feature": "Dukungan Pemformatan",
      "srt": "Tag HTML dasar (<i>, <b>, <u>, <font color>)",
      "microdvd": "Kode kontrol lama ({Y:i}, {Y:b}, {C:$BBGGRR})",
      "subviewer": "Font di header dan pemformatan dasar"
    },
    {
      "feature": "Kompatibilitas Perangkat",
      "srt": "100% universal di semua software dan hardware",
      "microdvd": "Sangat terbatas (hanya VLC dan pemutar lawas)",
      "subviewer": "Jarang didukung di luar software komputer"
    },
    {
      "feature": "Dukungan Web & Streaming",
      "srt": "Universal (YouTube, Vimeo, HTML5 via VTT)",
      "microdvd": "Tidak didukung (wajib konversi terlebih dahulu)",
      "subviewer": "Tidak didukung di platform streaming modern"
    },
    {
      "feature": "Ketergantungan pada FPS",
      "srt": "Tidak ada (berdasarkan waktu jam nyata)",
      "microdvd": "Mutlak (terikat dengan FPS file video)",
      "subviewer": "Tidak ada (berdasarkan waktu jam nyata)"
    }
  ],
  "fpsGuideTitle": "Peran Krusial Frame Rate Video (FPS) dalam Konversi SUB ke SRT",
  "fpsGuideSubtitle": "Mengapa kecocokan nilai FPS sangat menentukan akurasi perubahan nomor frame menjadi penanda waktu jam.",
  "fpsGuideText": [
    "Saat mengonversi file MicroDVD (.sub) ke SRT, memahami frame rate video Anda bukanlah hal sepele: ini adalah faktor penentu apakah subtitle akan sinkron sempurna dengan dialog suara atau bergeser secara kacau. Karena MicroDVD menandai kemunculan dialog berdasarkan nomor frame, konverter wajib membagi nomor frame tersebut dengan jumlah frame per detik yang tepat untuk menghasilkan satuan milidetik.",
    "Jika Anda mengonversi file dengan pengaturan FPS yang keliru, selisih waktu tidak akan bernilai tetap, melainkan akan terus bertambah seiring berjalannya film. Contohnya, mengonversi film bioskop 23.976 FPS dengan opsi 25.000 FPS (PAL) menyebabkan teks berjalan 4,1% lebih cepat. Setelah 10 menit, teks sudah mendahului audio sebanyak 25 detik; setelah satu jam, selisihnya melebihi dua setengah menit! Pastikan Anda memeriksa nilai FPS video sebelum melakukan konversi."
  ],
  "fpsTable": [
    {
      "fps": "23.976 FPS (24000/1001)",
      "standard": "Sinema NTSC / Blu-ray / Streaming",
      "useCase": "Standar film bioskop komersial, rilisan Blu-ray di Amerika Utara, dan serial di platform streaming terkemuka."
    },
    {
      "fps": "24.000 FPS",
      "standard": "Sinema Standar / Proyeksi DCI",
      "useCase": "Standar proyeksi di gedung bioskop dan paket Digital Cinema Package (DCP) untuk festival film internasional."
    },
    {
      "fps": "25.000 FPS",
      "standard": "Siaran Televisi PAL / SECAM",
      "useCase": "Televisi di wilayah Eropa, Australia, sebagian Asia, format DVD Eropa, dan rekaman video standar PAL."
    },
    {
      "fps": "29.970 FPS (30000/1001)",
      "standard": "Siaran Televisi NTSC",
      "useCase": "Siaran televisi standar dan definisi tinggi di Amerika Serikat, Jepang, dan Korea Selatan."
    },
    {
      "fps": "30.000 FPS",
      "standard": "Video Web / Ponsel Lama",
      "useCase": "Rekaman kamera smartphone generasi awal, rekaman webcam, dan tangkapan layar komputer biasa."
    },
    {
      "fps": "50.000 FPS",
      "standard": "PAL Frekuensi Tinggi (HFR)",
      "useCase": "Siaran langsung olahraga di Eropa, siaran berita berkecepatan tinggi dalam format 720p50 atau 1080p50."
    },
    {
      "fps": "59.940 FPS (60000/1001)",
      "standard": "NTSC Frekuensi Tinggi",
      "useCase": "Siaran olahraga di Amerika Utara, perekaman konsol game, dan siaran streaming video 60p."
    },
    {
      "fps": "60.000 FPS",
      "standard": "Gaming / Layar Modern",
      "useCase": "Monitor gaming, kamera smartphone modern, video gameplay 60 FPS di YouTube, dan video gerakan cepat."
    }
  ],
  "mathTitle": "Rumus Matematis Perhitungan Frame ke Waktu",
  "mathSubtitle": "Bagaimana nomor frame dihitung secara presisi menjadi jam, menit, detik, dan milidetik.",
  "mathFormula": "Waktu dalam Milidetik = Math.round((Nomor Frame / FPS Video) * 1000)",
  "mathExplanation": [
    "Untuk memahami cara konverter kami mengubah nomor frame MicroDVD menjadi penanda waktu SubRip standar, mari kita lihat simulasi hitungan berikut: sebuah dialog pada MicroDVD tercatat sebagai {1440}{1560}Teks dialog pada video yang berputar pada kecepatan 24.000 FPS.",
    "Untuk menghitung waktu mulai: 1440 dibagi 24.000 menghasilkan tepat 60.000 detik (60.000 milidetik). Dalam format SRT ditulis sebagai 00:01:00,000. Untuk waktu selesai: 1560 dibagi 24.000 menghasilkan 65.000 detik (65.000 milidetik), yang berformat 00:01:05,000. Blok SRT yang dihasilkan menjadi: 00:01:00,000 --> 00:01:05,000.",
    "Sekarang ambil nomor frame yang sama (1440) pada video berkecepatan 23.976 FPS (23.976023976...): 1440 / 23.976023976 = 60.060 detik (60.060 milidetik), yang menghasilkan penanda 00:01:00,060. Meskipun perbedaannya hanya 60 milidetik pada menit pertama, dalam durasi film dua jam perbedaan kecil ini akan menumpuk menjadi selisih waktu yang sangat merusak pengalaman menonton jika dihitung dengan FPS yang salah."
  ],
  "exampleTitle": "Contoh Nyata Konversi dari SUB ke SRT",
  "exampleIntro": "Bandingkan file subtitle MicroDVD asli dengan hasil SubRip yang rapi dan terstandarisasi yang dibuat oleh alat kami.",
  "exampleSubInput": "{1}{1}25.000\n{25}{75}Selamat datang di festival film internasional!\n{100}{175}Malam ini kami mempersembahkan penayangan perdana|dari film dokumenter eksklusif kami.\n{200}{275}{Y:i}Narator: Perjalanan panjang ini dimulai pada tahun 1998...\n{300}{375}Terima kasih telah hadir bersama kami.|Selamat menikmati pertunjukan!",
  "exampleSrtOutput": "1\n00:00:01,000 --> 00:00:03,000\nSelamat datang di festival film internasional!\n\n2\n00:00:04,000 --> 00:00:07,000\nMalam ini kami mempersembahkan penayangan perdana\ndari film dokumenter eksklusif kami.\n\n3\n00:00:08,000 --> 00:00:11,000\n<i>Narator: Perjalanan panjang ini dimulai pada tahun 1998...</i>\n\n4\n00:00:12,000 --> 00:00:15,000\nTerima kasih telah hadir bersama kami.\nSelamat menikmati pertunjukan!",
  "exampleExplanation": "Pada contoh praktis ini, file input MicroDVD memuat baris header {1}{1}25.000, yang langsung dikenali oleh sistem kami sehingga kecepatan konversi diatur otomatis ke 25.000 FPS. Frame 25 berubah menjadi 1.000 detik (00:00:01,000) dan frame 75 menjadi 3.000 detik (00:00:03,000). Perhatikan juga bagaimana simbol garis pipa (|) pada dialog ke-2 diubah menjadi baris baru alami dan kode miring {Y:i} pada dialog ke-3 diubah menjadi tag HTML <i> yang valid.",
  "formatsComparisonTitle": "MicroDVD (.sub) vs. SubViewer (.sub) vs. VobSub (.sub)",
  "formatsComparisonSubtitle": "Mengenali tiga format subtitle yang sangat berlainan di bawah ekstensi file yang sama.",
  "formatsComparisonText": [
    "Salah satu hal yang paling membingungkan pengguna video adalah adanya tiga format yang saling tidak cocok tetapi menggunakan ekstensi file yang persis sama, yaitu .sub. Dengan membuka file menggunakan editor teks sederhana (seperti Notepad atau VS Code), Anda dapat langsung mengetahui format aslinya.",
    "Jika dokumen diawali dengan angka di dalam kurung kurawal (seperti {1}{1}25.000 atau {50}{120}Halo), itu adalah file teks MicroDVD. Jika diawali dengan bagian [INFORMATION] diikuti penanda waktu berformat koma (seperti 00:01:25.50,00:01:28.10), itu adalah SubViewer. Kedua format ini didukung 100% oleh alat kami dan dapat langsung dikonversi ke SRT.",
    "Akan tetapi, jika saat dibuka yang tampak adalah simbol biner yang berantakan, atau jika file tersebut didampingi oleh file lain bernama sama berekstensi .idx, maka itu adalah paket biner VobSub. File VobSub tidak memuat teks, melainkan gambar piksel bitmap dari subtitle DVD asli. Untuk mengubahnya ke SRT diperlukan aplikasi OCR (Optical Character Recognition) seperti Subtitle Edit. Konverter kami akan langsung memberi peringatan jika mendeteksi file biner VobSub."
  ],
  "ffmpegTitle": "Mengonversi SUB ke SRT Melalui Baris Perintah (FFmpeg)",
  "ffmpegSubtitle": "Perintah konversi otomatis di terminal untuk pengguna mahir, developer, dan teknisi alur kerja video.",
  "ffmpegCommand": "# Mengonversi SubViewer (.sub) berbasis waktu ke SubRip (.srt)\nffmpeg -i input.sub output.srt\n\n# Mengonversi MicroDVD (.sub) dengan mencantumkan frame rate video (23.976 FPS)\nffmpeg -r 23.976 -i input.sub output.srt\n\n# Mengonversi MicroDVD dengan penyesuaian pengkodean karakter Windows-1252 (ANSI)\nffmpeg -sub_charenc CP1252 -r 25 -i input.sub output.srt\n\n# Mengonversi semua file .sub dalam sebuah folder sekaligus di PowerShell Windows\nGet-ChildItem *.sub | ForEach-Object { ffmpeg -r 23.976 -i $_.FullName ($_.BaseName + \".srt\") }",
  "ffmpegExplanation": [
    "FFmpeg adalah framework multimedia baris perintah paling populer untuk memproses, memisahkan, dan mengonversi format video, audio, dan subtitle. Saat mengonversi file SubViewer (.sub), FFmpeg dapat membaca penanda waktu secara langsung karena sudah berbasis jam dan menit.",
    "Namun, saat mengonversi file MicroDVD (.sub), Anda WAJIB menyertakan nilai frame rate video menggunakan parameter -r sebelum file input (-i). Jika diabaikan, FFmpeg secara otomatis menerapkan nilai default 25 FPS, yang akan membuat subtitle melenceng pada video dengan kecepatan 23.976, 29.97, atau 30 FPS.",
    "Selain itu, banyak file subtitle lama disimpan menggunakan format pengkodean karakter regional (seperti Windows-1252 atau ISO-8859-1) dan bukan UTF-8 standar. Opsi -sub_charenc memastikan tanda baca dan karakter khusus dapat ditranskodekan ke UTF-8 tanpa teks berantakan."
  ],
  "useCasesTitle": "Kasus Penggunaan Umum Konversi SUB ke SRT",
  "useCasesSubtitle": "Berbagai skenario nyata di mana migrasi dari subtitle lama .sub ke .srt menjadi kebutuhan mendesak.",
  "useCasesList": [
    {
      "title": "Memutar Film di Smart TV dan Media Player Ruang Keluarga",
      "description": "Smart TV dari produsen seperti Samsung, LG, atau Sony serta perangkat streaming seperti Apple TV dan Roku tidak mendukung subtitle berbasis frame. Konversi ke SRT memungkinkan pemutaran lancar lewat USB drive, DLNA, atau server rumah seperti Plex dan Emby."
    },
    {
      "title": "Mengunggah Video ke YouTube, Vimeo, dan Media Sosial",
      "description": "Platform penyedia video online hanya menerima subtitle tertutup standar (SRT atau VTT). Menambahkan file SRT akan mengaktifkan subtitle untuk penonton dan meningkatkan peringkat SEO video dalam pencarian."
    },
    {
      "title": "Editing Profesional di Premiere Pro, DaVinci Resolve, dan Final Cut",
      "description": "Aplikasi editing video modern tidak dapat memasukkan file .sub ke timeline trek subtitle. Format SRT memberikan kemudahan pengaturan font, ukuran, warna, penataan posisi, dan proses burn-in subtitle."
    },
    {
      "title": "Pengarsipan Digital dan Pelestarian Koleksi Film",
      "description": "Menyimpan koleksi film dengan format subtitle lawas atau tertutup sangat berisiko menimbulkan masalah di masa mendatang. Standardisasi koleksi Anda menjadi file SRT berenkripsi UTF-8 menjamin kemudahan akses di era komputasi masa depan."
    }
  ],
  "troubleshootTitle": "Mengatasi Masalah Umum pada Konversi SUB ke SRT",
  "troubleshootSubtitle": "Langkah diagnosis kilat dan solusi tepat untuk desinkronisasi bertahap, karakter rusak, dan file VobSub.",
  "troubleshootTips": [
    {
      "issue": "Subtitle awalnya sinkron tetapi semakin lama semakin mendahului atau tertinggal",
      "cause": "Nilai frame rate (FPS) yang dipilih saat konversi tidak cocok dengan frame rate video yang sebenarnya (contoh: video 23.976 FPS dikonversi dengan opsi 25 FPS).",
      "solution": "Buka file video di VLC Media Player, tekan Ctrl+J (atau Cmd+I) untuk memeriksa Informasi Codec, lihat angka Frame rate yang tepat, lalu ulangi konversi di situs kami menggunakan angka FPS yang sama."
    },
    {
      "issue": "Tanda baca, huruf beraksen, atau karakter khusus tampak rusak dan berisi tanda tanya",
      "cause": "File .sub asli disimpan dengan pengkodean karakter ANSI lama (seperti Windows-1252 atau ISO-8859-1) dan bukan UTF-8.",
      "solution": "Buka file .sub di aplikasi Notepad atau VS Code, klik File > Save As, pilih opsi UTF-8 pada menu Encoding di bagian bawah, simpan, lalu ulangi proses konversi di peramban Anda."
    },
    {
      "issue": "Konverter menampilkan peringatan bahwa file adalah paket biner VobSub",
      "cause": "File yang Anda masukkan adalah paket biner DVD (.sub + .idx) yang berisi potongan gambar bitmap dan bukan teks biasa.",
      "solution": "Gunakan aplikasi OCR khusus subtitle di komputer seperti Subtitle Edit (Windows/Linux) atau BDSup2Sub. Aplikasi ini akan membaca gambar huruf dan mengubahnya menjadi file teks SRT yang dapat diedit."
    },
    {
      "issue": "Kalimat subtitle menumpuk dalam satu baris atau masih menampilkan garis pipa (|)",
      "cause": "File awal memakai tanda pemisah yang tidak standar atau fitur pembersihan tag dalam kondisi tidak aktif.",
      "solution": "Pastikan opsi 'Konversi Tag Format' dicentang di pengaturan konverter. Alat kami akan secara otomatis memecah garis pipa menjadi pemisah baris subtitle yang rapi."
    }
  ],
  "workflowTitle": "Alur Kerja yang Disarankan untuk Mengolah Subtitle",
  "workflowSubtitle": "Langkah terbaik untuk mengonversi, memeriksa, dan menyatukan subtitle Anda ke dalam proyek video.",
  "workflowSteps": [
    "Langkah 1: Periksa Karakteristik Video — Buka video di VLC atau MediaInfo untuk mengetahui nilai frame rate yang tepat (misalnya 23.976 atau 25.000 FPS) dan bahasa audionya.",
    "Langkah 2: Konversikan SUB ke SRT — Unggah file .sub ke konverter online kami, sesuaikan pengaturan FPS, dan unduh file .srt hasil konversi yang sudah berstandar UTF-8.",
    "Langkah 3: Periksa Sinkronisasi — Putar video bersama file .srt yang baru dibuat di VLC dan pastikan dialog suara pas di awal, di tengah, dan menjelang akhir durasi film.",
    "Langkah 4: Muxing atau Publikasikan — Gabungkan trek SRT ke wadah file MP4 atau MKV memakai aplikasi seperti MKVToolNix atau unggah subtitle langsung ke akun platform video Anda."
  ],
  "conclusionTitle": "Kesimpulan: Dapatkan Kompatibilitas Subtitle yang Sempurna",
  "conclusionText": [
    "Beralih dari subtitle lama MicroDVD ke standar terbuka SubRip (.srt) adalah cara paling praktis dan tepat untuk memastikan subtitle Anda dapat diputar tanpa kendala di semua perangkat, TV, dan aplikasi pengedit video. Melalui perhitungan milidetik yang presisi dari nomor frame video, konverter SUB ke SRT kami menghadirkan sinkronisasi suara yang sempurna tanpa perlu penyelarasan manual yang memakan waktu.",
    "Yang terpenting, SRTConverters bekerja 100% secara lokal di dalam browser Anda. Tanpa proses upload ke server, dengan privasi penuh dan kecepatan instan, Anda dapat memodernisasi seluruh koleksi subtitle Anda dengan rasa tenang. Simpan halaman ini sebagai bookmark dan manfaatkan beragam alat subtitle kami lainnya."
  ]
},
  tr: {
  "introTitle": "SUB Altyazılarını SRT Formatına Dönüştürme Kapsamlı Rehberi",
  "introSubtitle": "Eski kare tabanlı MicroDVD ve zaman damgalı SubViewer (.sub) altyazılarını evrensel olarak desteklenen SubRip (.srt) formatına dönüştürme sanatında ustalaşın. Karelerden milisaniyeye zaman dönüşümü matematiğini, FFmpeg terminal komutlarını ve kusursuz senkronizasyon için kanıtlanmış sorun giderme adımlarını öğrenin.",
  "introText": [
    "Onlarca yıl boyunca .sub dosya uzantısı, dijital video oynatma, evde DVD kopyalama (ripping) ve multimedya eğlence dünyasının vazgeçilmez bir parçası olmuştur. Ancak bugün eski bir .sub altyazı dosyasını modern bir Akıllı TV'de, akıllı telefonda, web tarayıcısında veya profesyonel video kurgu yazılımında bir videoyla birlikte oynatmaya çalışan herkes; oynatma hataları, eksik metinler veya ciddi senkron kaymalarıyla karşı karşıya kalmaktadır. Buna karşılık SubRip (.srt), dünya çapında metin tabanlı altyazılar için tartışmasız evrensel standart konumuna yükselmiştir.",
    "Bir .sub dosyasıyla çalışırken karşılaşılan başlıca teknik engel, geçmişten gelen format karmaşasından kaynaklanır. Zaman kodlarını gerçek saat, dakika, saniye ve milisaniye olarak saklayan modern altyazı standartlarının aksine, en yaygın metin tabanlı SUB formatı olan MicroDVD, diyalog zamanlarını video kare (frame) numaraları olarak saklar. Altyazı dosyasının kendisinde mutlak bir saat kavramı yoktur; yalnızca bir cümlenin 1500. karede ekrana gelip 1650. karede kaybolacağını belirtir. Bu nedenle MicroDVD altyazılarını standart SRT'ye dönüştürmek, ilgili video dosyasının kesin kare hızına (FPS) dayalı hassas bir matematiksel hesaplama gerektirir.",
    "İster klasik bir sinema arşivini dijitalleştiriyor olun, ister YouTube veya yayın platformları için video hazırlıyor olun ya da Premiere Pro, DaVinci Resolve ve Final Cut Pro üzerinde altyazı düzenliyor olun; bu kapsamlı teknik rehber ihtiyacınız olan her şeyi sunmaktadır. Milisaniye hassasiyetindeki formüllerden ve FFmpeg komut satırı kodlarından, format mimarisi karşılaştırmalarına ve yaygın sorun giderme yöntemlerine kadar SUB'dan SRT'ye dönüştürme sürecinin her aşamasına tam olarak hâkim olacaksınız."
  ],
  "whatIsTitle": "SUB ve SRT'yi Anlamak: Kare Tabanlı Altyazılar ve Evrensel Zaman Kodları",
  "whatIsText": [
    "SubRip (.srt), 1990'ların sonunda Brain tarafından geliştirilen ve DVD altyazılarını açık, hafif ve taşınabilir bir metin formatında kaydetmeyi amaçlayan aynı adlı yazılımın bir parçası olarak ortaya çıkmıştır. Bir SRT dosyasının yapısı son derece yalındır: her altyazı bloğu artan bir sıra numarası (1, 2, 3...), ' --> ' ayracıyla ayrılmış milisaniye hassasiyetinde başlangıç ve bitiş zaman damgaları (SS:DD:SS,mmm), bir veya birden fazla diyalog satırı ve blokları ayıran boş bir satırdan oluşur. Bu yapısal sadelik, SRT'nin günümüzdeki hemen hemen her medya oynatıcısında, işletim sisteminde ve çevrimiçi video platformunda yerel olarak desteklenmesini sağlamıştır.",
    "Buna karşılık .sub uzantısı, birbiriyle tamamen ilgisiz üç farklı teknolojiyi temsil eder: MicroDVD (.sub), SubViewer (.sub) ve VobSub (.sub). MicroDVD, 1999–2001 yıllarında Tias Software tarafından ilk DivX ve XviD video dosyaları için özel olarak geliştirilmiştir. Gerçek zaman damgaları yerine her altyazı, süslü parantezler içindeki başlangıç ve bitiş kare numaralarıyla tanımlanır: {başlangıç_karesi}{bitiş_karesi}Altyazı metni. Çok satırlı diyaloglar dikey boru karakteri (|) ile ayrılır.",
    "David Vignoni tarafından geliştirilen SubViewer (.sub) ise bir bilgi başlığı ([INFORMATION]), saniyenin yüzde biri cinsinden zaman kodları (SS:DD:SS.ss,SS:DD:SS.ss) ve satır sonları için [br] etiketleri içeren bir metin formatıdır. Son olarak VobSub (.sub + .idx) bambaşka bir yapıya sahiptir: DVD disklerinden çıkarılan raster grafik (bitmap) resimlerini barındıran ikili (binary) bir pakettir. Elinizdeki .sub dosyasının hangi türe ait olduğunu bilmek, başarılı bir dönüştürme işleminin en temel adımıdır."
  ],
  "whyConvertTitle": "SUB Altyazılarını Neden SRT'ye Dönüştürmelisiniz?",
  "whyConvertSubtitle": "Eski .sub dosyalarından modern, standartlaştırılmış SubRip (.srt) altyazılarına geçişin temel teknik avantajlarını keşfedin.",
  "whyConvertReasons": [
    {
      "title": "Tüm Cihaz ve Oynatıcılarla Evrensel Uyumluluk",
      "description": "SRT; modern medya oynatıcıları (VLC, MPC-HC, IINA, MPV), mobil işletim sistemleri (iOS, Android), Akıllı TV'ler (Samsung Tizen, LG webOS, Android TV) ve yayın cihazları (Apple TV, Roku, Chromecast) tarafından harici kodek gerekmeksizin %100 yerel olarak desteklenir."
    },
    {
      "title": "Web ve Video Yayın Platformlarına Tam Hazırlık",
      "description": "YouTube, Vimeo, Facebook gibi büyük platformlar ve modern HTML5 web video oynatıcıları, kare tabanlı .sub dosyalarını kesinlikle kabul etmez. SRT'ye dönüştürmek, anında yükleme ve sorunsuz tarayıcı içi gösterim sağlar."
    },
    {
      "title": "Video Kare Hızına (FPS) Bağımlılığın Ortadan Kalkması",
      "description": "MicroDVD altyazıları videonun orijinal kare hızına sıkı sıkıya bağlıdır. Video yeniden kodlandığında veya farklı hızlarda oynatıldığında senkronizasyon anında bozulur. SRT mutlak saat kodları kullandığından kare hızındaki değişimlerden asla etkilenmez."
    },
    {
      "title": "Kurgu ve Çeviri Yazılımlarında Kolay Düzenleme",
      "description": "Popüler altyazı düzenleyicileri (Subtitle Edit, Aegisub) ve profesyonel NLE kurgu yazılımları (Adobe Premiere Pro, Blackmagic DaVinci Resolve, Final Cut Pro), zaman ayarı ve yazım denetimi için SRT'ye eksiksiz yerel destek sunar."
    }
  ],
  "howToTitle": "SUB Dosyasını 3 Kolay Adımda Çevrimiçi Olarak SRT'ye Dönüştürme",
  "howToSubtitle": "MicroDVD veya SubViewer .sub dosyalarınızı herhangi bir program yüklemeden, doğrudan tarayıcınızda temiz ve senkronize .srt dosyalarına dönüştürün.",
  "howToSteps": [
    {
      "step": "1",
      "title": "SUB Altyazınızı Yükleyin veya Yapıştırın",
      "description": ".sub dosyanızı sürükleyip yükleme alanına bırakın, cihazınızdan seçmek için tıklayın veya altyazı metninizi doğrudan giriş kutusuna yapıştırın."
    },
    {
      "step": "2",
      "title": "Video Kare Hızını (FPS) Doğrulayın",
      "description": "Dönüştürücümüz dosyanın MicroDVD mi yoksa SubViewer mı olduğunu otomatik olarak algılar. MicroDVD dosyalarında, karelerin doğru zamana dönüşmesi için video FPS değerini (örn. 23.976, 24, 25 veya 29.97 FPS) kontrol edin."
    },
    {
      "step": "3",
      "title": "Dönüştürülen SRT Dosyasını İndirin",
      "description": "Oluşturulan SubRip dosyasını anında cihazınıza kaydetmek için .SRT İndir butonuna tıklayın veya metni herhangi bir düzenleyiciye yapıştırmak için Panoya Kopyala butonunu kullanın."
    }
  ],
  "differenceTitle": "Teknik Karşılaştırma: SUB (MicroDVD ve SubViewer) vs. SRT",
  "differenceSubtitle": "Zamanlama mekanizmaları, dosya mimarileri, cihaz desteği ve biçimlendirme yeteneklerinin ayrıntılı analizi.",
  "differenceTable": [
    {
      "feature": "Zamanlama Mekanizması",
      "srt": "Mutlak saat zamanı (SS:DD:SS,mmm)",
      "microdvd": "Video kare numaraları ({başlangıç}{bitiş})",
      "subviewer": "Mutlak saat zamanı (SS:DD:SS.ss)"
    },
    {
      "feature": "Zaman Hassasiyeti",
      "srt": "1 milisaniye (1/1000 saniye)",
      "microdvd": "1 video karesi (1/FPS saniye)",
      "subviewer": "1 santisaniye (1/100 saniye)"
    },
    {
      "feature": "Dosya Yapısı",
      "srt": "Boş satırlarla ayrılmış numaralı bloklar",
      "microdvd": "Kare parantezli, her diyalog için tek satır",
      "subviewer": "Başlık bölümü, zaman satırı, metin satırı"
    },
    {
      "feature": "Çok Satırlı Ayracı",
      "srt": "Standart satır sonu (CRLF veya LF)",
      "microdvd": "Dikey boru karakteri (|)",
      "subviewer": "[br] etiketi veya normal satır sonu"
    },
    {
      "feature": "Biçimlendirme Desteği",
      "srt": "Temel HTML etiketleri (<i>, <b>, <u>, <font color>)",
      "microdvd": "Eski özel etiketler ({Y:i}, {Y:b}, {C:$BBGGRR})",
      "subviewer": "Başlıkta yazı tipi ve basit etiketler"
    },
    {
      "feature": "Modern Cihaz Uyumluluğu",
      "srt": "%100 evrensel (tüm cihaz ve yazılımlarda)",
      "microdvd": "Oldukça kısıtlı (VLC ve eski oynatıcılar)",
      "subviewer": "Masaüstü oynatıcılar dışında nadir"
    },
    {
      "feature": "Web ve Yayın Desteği",
      "srt": "Evrensel (YouTube, Vimeo, HTML5 <track>)",
      "microdvd": "Desteklenmez (dönüştürme gerektirir)",
      "subviewer": "Modern platformlarda desteklenmez"
    },
    {
      "feature": "Kare Hızına (FPS) Bağımlılık",
      "srt": "Yok (gerçek saat zamanına dayalı)",
      "microdvd": "Mutlak (video dosyasının FPS'sine bağlı)",
      "subviewer": "Yok (gerçek saat zamanına dayalı)"
    }
  ],
  "fpsGuideTitle": "SUB - SRT Dönüşümünde Video Kare Hızının (FPS) Hayati Önemi",
  "fpsGuideSubtitle": "Kare numaralarının zaman kodlarına dönüştürülmesinde FPS eşleşmesinin neden kritik olduğunu keşfedin.",
  "fpsGuideText": [
    "MicroDVD (.sub) dosyalarını SRT'ye dönüştürürken videonuzun kare hızını (FPS) bilmek bir ayrıntı değil, altyazıların sesle kusursuz örtüşmesini ya da tamamen kaymasını belirleyen en temel faktördür. MicroDVD her diyaloğu kare numarasıyla tanımladığından, dönüştürücü bu sayıyı videonun gerçek saniye başına kare sayısına bölerek milisaniye değerini hesaplamak zorundadır.",
    "Yanlış bir kare hızıyla dönüştürme yaparsanız, zaman hatası sabit kalmaz; video oynatıldıkça her dakika daha da büyür. Örneğin, 23.976 FPS bir sinema filmini 25.000 FPS (PAL) ayarıyla dönüştürmek %4,1'lik bir hız farkı yaratır. 10 dakika sonra altyazılar 25 saniye önden gidecek; bir saat sonra ise fark iki buçuk dakikayı aşacaktır! Dönüştürmeden önce mutlaka videonuzun gerçek kare hızını kontrol edin."
  ],
  "fpsTable": [
    {
      "fps": "23.976 FPS (24000/1001)",
      "standard": "NTSC Sinema / Blu-ray / Web Akışı",
      "useCase": "Sinema filmleri, Kuzey Amerika Blu-ray sürümleri ve büyük çevrimiçi yayın platformlarının standart kare hızı."
    },
    {
      "fps": "24.000 FPS",
      "standard": "Gerçek Sinema / DCI Standart",
      "useCase": "Geleneksel sinema salonu projeksiyonları ve uluslararası film festivallerindeki Dijital Sinema Paketleri (DCP)."
    },
    {
      "fps": "25.000 FPS",
      "standard": "PAL / SECAM Televizyon Yayını",
      "useCase": "Avrupa, Avustralya ve Asya televizyon yayınları, Avrupa DVD'leri ve PAL standart video prodüksiyonları."
    },
    {
      "fps": "29.970 FPS (30000/1001)",
      "standard": "NTSC Televizyon Yayını",
      "useCase": "Kuzey Amerika, Japonya ve Güney Kore'deki standart ve yüksek çözünürlüklü televizyon yayınları."
    },
    {
      "fps": "30.000 FPS",
      "standard": "Web Videosu / Eski Dijital Kayıtlar",
      "useCase": "Eski akıllı telefon kameraları, web kameraları ve standart bilgisayar ekran kayıtları."
    },
    {
      "fps": "50.000 FPS",
      "standard": "PAL Yüksek Kare Hızı (HFR)",
      "useCase": "Avrupa canlı spor karşılaşmaları, stüdyo yayınları ve 720p50 veya 1080p50 ilerlemeli yayın sinyalleri."
    },
    {
      "fps": "59.940 FPS (60000/1001)",
      "standard": "NTSC Yüksek Kare Hızı",
      "useCase": "Kuzey Amerika spor yayınları, oyun konsolu kayıtları ve profesyonel 60p web yayınları."
    },
    {
      "fps": "60.000 FPS",
      "standard": "Oyun / Modern Ekranlar",
      "useCase": "Bilgisayar monitörleri, güncel telefonlar, YouTube 60 FPS oyun videoları ve yüksek hareketli sahneler."
    }
  ],
  "mathTitle": "Kareden Zamana Dönüşümün Matematiksel Formülü",
  "mathSubtitle": "Kare numaralarının saat, dakika, saniye ve milisaniyeye nasıl matematiksel olarak dönüştürüldüğü.",
  "mathFormula": "Milisaniye Cinsinden Zaman = Math.round((Kare Numarası / Video FPS) * 1000)",
  "mathExplanation": [
    "Dönüştürücümüzün MicroDVD kare numaralarını SubRip zaman kodlarına nasıl çevirdiğini somut bir örnekle açıklayalım: 24.000 FPS hızında çalışan bir videoda bir diyalog satırının {1440}{1560}Diyalog metni şeklinde kaydedildiğini varsayalım.",
    "Başlangıç zamanı için: 1440 sayısı 24.000'e bölündüğünde tam olarak 60.000 saniye (60.000 milisaniye) elde edilir. Bu değer SRT formatında 00:01:00,000 olarak yazılır. Bitiş zamanı için: 1560 sayısı 24.000'e bölündüğünde 65.000 saniye (65.000 milisaniye) çıkar ve 00:01:05,000 olarak biçimlendirilir. Ortaya çıkan SRT zaman satırı: 00:01:00,000 --> 00:01:05,000 olur.",
    "Aynı kare numarasını (1440), 23.976 FPS (23.976023976...) hızındaki bir video için hesapladığımızda: 1440 / 23.976023976 = 60.060 saniye (60.060 milisaniye) çıkar ve 00:01:00,060 olarak yazılır. Birinci dakikadaki 60 milisaniyelik bu fark önemsiz gibi görünse de, iki saatlik bir filmin sonunda yanlış FPS seçimi altyazının tamamen kaymasına yol açar."
  ],
  "exampleTitle": "Somut Bir SUB - SRT Dönüşüm Örneği",
  "exampleIntro": "Orijinal bir MicroDVD altyazı dosyası ile dönüştürücümüz tarafından oluşturulan temiz, standart SRT çıktısını karşılaştırın.",
  "exampleSubInput": "{1}{1}25.000\n{25}{75}Uluslararası film festivalimize hoş geldiniz!\n{100}{175}Bu akşam özel belgeselimizin|dünya prömiyerini sunuyoruz.\n{200}{275}{Y:i}Anlatıcı: Bu unutulmaz yolculuk 1998'de başladı...\n{300}{375}Katıldığınız için çok teşekkürler.|İyi seyirler dileriz!",
  "exampleSrtOutput": "1\n00:00:01,000 --> 00:00:03,000\nUluslararası film festivalimize hoş geldiniz!\n\n2\n00:00:04,000 --> 00:00:07,000\nBu akşam özel belgeselimizin\ndünya prömiyerini sunuyoruz.\n\n3\n00:00:08,000 --> 00:00:11,000\n<i>Anlatıcı: Bu unutulmaz yolculuk 1998'de başladı...</i>\n\n4\n00:00:12,000 --> 00:00:15,000\nKatıldığınız için çok teşekkürler.\nİyi seyirler dileriz!",
  "exampleExplanation": "Bu örnekte MicroDVD giriş dosyası bir {1}{1}25.000 başlık satırı içermekteydi; dönüştürücümüz bunu otomatik olarak okuyarak hızı 25.000 FPS olarak belirledi. 25. kare 1.000 saniyeye (00:00:01,000) ve 75. kare 3.000 saniyeye (00:00:03,000) çevrildi. Ayrıca 2. bloktaki dikey boru karakterinin (|) doğal bir satır sonuna, 3. bloktaki {Y:i} eğik yazı kodunun ise tüm oynatıcılarca desteklenen HTML <i> etiketine dönüştürüldüğüne dikkat edin.",
  "formatsComparisonTitle": "MicroDVD (.sub) vs. SubViewer (.sub) vs. VobSub (.sub)",
  "formatsComparisonSubtitle": "Aynı .sub uzantısını paylaşan üç tamamen farklı altyazı teknolojisini ayırt etme rehberi.",
  "formatsComparisonText": [
    "Dijital video yönetiminde en sık kafa karışıklığı yaratan durumlardan biri, birbiriyle uyumsuz üç farklı altyazı formatının aynı .sub uzantısını kullanmasıdır. Dosyayı Not Defteri veya VS Code gibi bir metin düzenleyicide açtığınızda formatı hemen anlayabilirsiniz.",
    "Belge süslü parantezler içindeki sayılarla başlıyorsa ({1}{1}25.000 veya {50}{120}Merhaba gibi), bu bir MicroDVD metin dosyasıdır. [INFORMATION] başlığı ve ardından virgülle ayrılmış zaman damgaları geliyorsa (00:01:25.50,00:01:28.10 gibi), bu bir SubViewer dosyasıdır. Her iki format da aracımız tarafından %100 desteklenir ve saniyeler içinde SRT'ye dönüştürülür.",
    "Ancak dosyayı açtığınızda anlamsız ikili karakterler ve karmaşık semboller görüyorsanız ya da dosyanın yanında aynı ada sahip bir .idx dosyası varsa, elinizdeki dosya bir VobSub ikili altyazı paketidir. VobSub dosyaları metin değil, DVD altyazılarına ait piksel resimleridir. Bunları SRT'ye çevirmek için Subtitle Edit gibi bir OCR (Optik Karakter Tanıma) yazılımı gerekir. Aracımız ikili VobSub dosyalarını algılar ve sizi anında uyarır."
  ],
  "ffmpegTitle": "Komut Satırında SUB Dosyasını SRT'ye Dönüştürme (FFmpeg)",
  "ffmpegSubtitle": "İleri düzey kullanıcılar, yazılımcılar ve video kurgucuları için otomatik komut satırı yönergeleri.",
  "ffmpegCommand": "# Zaman damgalı SubViewer (.sub) dosyasını SubRip (.srt) formatına dönüştürme\nffmpeg -i girdi.sub cikti.srt\n\n# Kare tabanlı MicroDVD (.sub) dosyasını video kare hızını (23.976 FPS) belirterek dönüştürme\nffmpeg -r 23.976 -i girdi.sub cikti.srt\n\n# Türkçe karakterler içeren Windows-1254 (ANSI) kodlamalı MicroDVD dosyasını dönüştürme\nffmpeg -sub_charenc CP1254 -r 25 -i girdi.sub cikti.srt\n\n# Windows PowerShell üzerinde bir klasördeki tüm .sub dosyalarını topluca dönüştürme\nGet-ChildItem *.sub | ForEach-Object { ffmpeg -r 23.976 -i $_.FullName ($_.BaseName + \".srt\") }",
  "ffmpegExplanation": [
    "FFmpeg; video, ses ve altyazı akışlarını dönüştürmek ve birleştirmek için kullanılan en gelişmiş komut satırı aracıdır. Zaman damgalı SubViewer (.sub) dosyalarında FFmpeg zamanları doğrudan okuyabilir, çünkü bu dosyalar zaten saat ve dakikaya dayanır.",
    "Buna karşılık MicroDVD (.sub) dosyalarını dönüştürürken, girdi dosyasından (-i) önce mutlaka -r parametresiyle video kare hızını belirtmelisiniz. Aksi takdirde FFmpeg varsayılan olarak 25 FPS kabul edecek ve 23.976, 29.97 ya da 30 FPS videolarınızda altyazıların kaymasına neden olacaktır.",
    "Ayrıca birçok eski altyazı dosyası UTF-8 yerine Windows-1254 veya ISO-8859-9 gibi bölgesel karakter kodlamalarıyla kaydedilmiştir. -sub_charenc parametresi Türkçe karakterlerin (ş, ğ, ı, ö, ü, ç) bozulmadan UTF-8 formatına aktarılmasını sağlar."
  ],
  "useCasesTitle": "SUB'dan SRT'ye Dönüştürmede Yaygın Kullanım Alanları",
  "useCasesSubtitle": "Eski .sub dosyalarını standart .srt formatına dönüştürmenin zorunlu olduğu pratik senaryolar.",
  "useCasesList": [
    {
      "title": "Akıllı TV'lerde ve Salon Oynatıcılarında Sorunsuz İzleme",
      "description": "Samsung, LG, Sony gibi markaların Smart TV'leri ve Apple TV, Roku gibi cihazlar kare tabanlı MicroDVD dosyalarını açamaz. SRT'ye dönüştürerek USB bellekten, DLNA üzerinden veya Plex/Emby sunucunuzdan sorunsuz izleyebilirsiniz."
    },
    {
      "title": "Videoları YouTube, Vimeo ve Sosyal Medyaya Yükleme",
      "description": "Video barındırma siteleri yalnızca standart metin altyazılarını (SRT veya VTT) destekler. SRT dosyası yüklemek işitme engelliler için erişilebilirlik sunar ve videoların arama motoru sıralamasını (SEO) güçlendirir."
    },
    {
      "title": "Premiere Pro, DaVinci ve Final Cut'ta Profesyonel Kurgu",
      "description": "Profesyonel video kurgu yazılımları kare tabanlı .sub dosyalarını zaman çizgisine kabul etmez. SRT formatı; yazı tipi, renk, boyut ve konumlandırma ayarlarıyla eksiksiz kurgu olanağı tanır."
    },
    {
      "title": "Dijital Arşivleme ve Film Koleksiyonlarının Korunması",
      "description": "Eski veya özel formatlarda altyazı saklamak gelecekte uyumsuzluk riski taşır. Altyazı arşivinizi evrensel UTF-8 kodlamalı SRT formatında standartlaştırmak, tüm gelecekteki sistemlerde okunabilirliği garanti eder."
    }
  ],
  "troubleshootTitle": "SUB - SRT Dönüşümünde Sık Karşılaşılan Sorunlar ve Çözümleri",
  "troubleshootSubtitle": "Kademeli senkron kaymaları, bozuk karakterler ve VobSub hataları için hızlı teşhis rehberi.",
  "troubleshootTips": [
    {
      "issue": "Altyazılar başta uyumluyken video ilerledikçe öne geçiyor veya geride kalıyor",
      "cause": "Dönüştürme sırasında seçilen kare hızı (FPS), videonun gerçek kare hızıyla eşleşmemiştir (örneğin 23.976 FPS bir film 25 FPS ile dönüştürülmüştür).",
      "solution": "Videonuzu VLC Media Player'da açın, Ctrl+J (veya Cmd+I) ile Kodlayıcı Bilgileri penceresini açıp gerçek Kare hızını öğrenin, sitemize dönüp aynı değeri seçerek dosyanızı yeniden dönüştürün."
    },
    {
      "issue": "Türkçe karakterler (ş, ğ, ı, ç, ö, ü) bozuk veya soru işareti şeklinde çıkıyor",
      "cause": "Orijinal .sub dosyası UTF-8 yerine eski bir ANSI kodlamasıyla (Windows-1254 veya ISO-8859-9) kaydedilmiştir.",
      "solution": "Dosyayı Not Defteri'nde açın, Dosya > Farklı Kaydet seçeneğine tıklayın, Kodlama menüsünden UTF-8'i seçip kaydedin ve sitemizde yeniden dönüştürün."
    },
    {
      "issue": "Dönüştürücü dosyanın ikili bir VobSub dosyası olduğu uyarısını veriyor",
      "cause": "Yüklediğiniz dosya metin değil, DVD diskinden çıkarılmış resim grafiklerini içeren ikili bir pakettir (.sub + .idx).",
      "solution": "Subtitle Edit veya BDSup2Sub gibi masaüstü OCR yazılımlarını kullanın. Bu programlar resimdeki harfleri tanıyarak düzenlenebilir bir metin SRT dosyası üretir."
    },
    {
      "issue": "Diyaloglar tek bir satırda birleşmiş görünüyor veya dikey boru (|) simgeleri duruyor",
      "cause": "Orijinal dosyada alışılmadık ayraçlar kullanılmış veya biçimlendirme temizleme seçeneği kapatılmıştır.",
      "solution": "Dönüştürücü ayarlarındaki 'Biçimlendirme Etiketlerini Dönüştür' seçeneğinin açık olduğundan emin olun. Aracımız dikey boru karakterlerini otomatik olarak temiz satır sonlarına çevirecektir."
    }
  ],
  "workflowTitle": "Önerilen Altyazı İşleme İş Akışı",
  "workflowSubtitle": "Altyazılarınızı dönüştürmek, doğrulamak ve projelerinize entegre etmek için en iyi yöntemler.",
  "workflowSteps": [
    "1. Adım: Video Bilgilerini İnceleyin — Videonuzu VLC veya MediaInfo ile açarak kesin kare hızını (örn. 23.976 veya 25.000 FPS) ve ses dilini tespit edin.",
    "2. Adım: SUB Dosyasını SRT'ye Dönüştürün — .sub dosyanızı çevrimiçi dönüştürücümüze yükleyin, doğru FPS ayarını seçin ve UTF-8 kodlamalı temiz .srt dosyanızı indirin.",
    "3. Adım: Senkronizasyonu Kontrol Edin — Videoyu yeni .srt dosyasıyla birlikte VLC'de açarak diyalogların filmin başında, ortasında ve sonunda tam oturup oturmadığını doğrulayın.",
    "4. Adım: Birleştirin veya Yayınlayın — SRT altyazısını MKVToolNix ile videoya gömün ya da doğrudan video barındırma platformunuza harici altyazı olarak yükleyin."
  ],
  "conclusionTitle": "Sonuç: Altyazılarınız İçin Kusursuz Uyumluluğa Ulaşın",
  "conclusionText": [
    "Eski MicroDVD altyazılarından modern ve açık SubRip (.srt) formatına geçmek, tüm cihazlarınızda, televizyonlarınızda ve montaj programlarınızda kusursuz oynatmayı garanti etmenin en pratik yoludur. Video kare sayılarından milisaniyeyi kesin matematikle hesaplayan SUB - SRT dönüştürücümüz, zahmetli el ile düzeltmelere gerek kalmadan mükemmel bir senkronizasyon sunar.",
    "En önemlisi, SRTConverters tüm altyazı dosyalarınızı tamamen tarayıcınızın içinde yerel olarak işler. Sunucuya dosya yükleme olmadan, tam gizlilikle ve anlık dönüşüm hızıyla tüm altyazı koleksiyonunuzu güvenle yenileyebilirsiniz. Bu sayfayı yer imlerinize ekleyin ve diğer kullanışlı altyazı araçlarımızı keşfedin."
  ]
},
  it: {
  "introTitle": "La Guida Completa per Convertire Sottotitoli SUB in Formato SRT",
  "introSubtitle": "Padroneggia il passaggio dai sottotitoli storici MicroDVD basati su frame e SubViewer (.sub) al formato universalmente compatibile SubRip (.srt). Scopri la formula matematica di conversione da fotogrammi a millisecondi, i comandi FFmpeg da terminale e i metodi efficaci per una sincronizzazione impeccabile.",
  "introText": [
    "Per molti decenni l'estensione di file .sub ha rappresentato uno standard diffuso nella riproduzione di video digitali, nella copia di DVD e nell'intrattenimento multimediale. Tuttavia, chiunque provi oggi a riprodurre un vecchio file .sub insieme a un video su una moderna Smart TV, su uno smartphone, su un lettore web o all'interno di un software di montaggio video andrà quasi certamente incontro a errori di lettura, battute mancanti o marcati problemi di asincronia. Al contrario, SubRip (.srt) si è affermato come lo standard universale indiscusso per i sottotitoli testuali in tutto il mondo.",
    "Il principale ostacolo tecnico dei file .sub deriva dalla frammentazione dei formati passati. A differenza degli standard attuali che memorizzano i codici temporali in ore, minuti, secondi e millisecondi reali, il formato SUB testuale più comune—MicroDVD—salva i tempi come numeri di fotogramma (frame) del video. Il file di sottotitoli in sé non ha alcuna nozione di orario assoluto; si limita a indicare che una battuta deve apparire al fotogramma 1500 e scomparire al fotogramma 1650. Per questo motivo, convertire MicroDVD in SRT richiede un calcolo matematico rigoroso basato sull'esatta frequenza dei fotogrammi (FPS) della traccia video.",
    "Che tu stia restaurando un archivio di capolavori del cinema, preparando contenuti per YouTube o servizi di streaming, o modificando tracce sottotitoli in Premiere Pro, DaVinci Resolve o Final Cut Pro, questa guida tecnica esaustiva ti fornirà tutto il necessario. Dalle formule di conversione e script FFmpeg per riga di comando ai confronti strutturali e alla risoluzione dei problemi comuni, acquisirai una padronanza totale della conversione da SUB a SRT."
  ],
  "whatIsTitle": "Comprendere SUB e SRT: Sottotitoli a Fotogrammi vs. Timestamp Universali",
  "whatIsText": [
    "SubRip (.srt) è nato alla fine degli anni '90 all'interno dell'omonimo software creato da Brain per estrarre sottotitoli da DVD in un formato aperto, leggero e leggibile. La struttura di un file SRT è estremamente lineare: ogni blocco è composto da un numero progressivo sequenziale (1, 2, 3...), un intervallo temporale con inizio e fine separati da ' --> ' con precisione al millisecondo (HH:MM:SS,mmm), una o più righe di testo e una riga vuota di separazione. Questa semplicità strutturale ha reso SRT compatibile in modo nativo con pressoché qualsiasi player multimediale, televisore smart e piattaforma web.",
    "Al contrario, l'estensione .sub racchiude tre tecnologie profondamente distinte: MicroDVD (.sub), SubViewer (.sub) e VobSub (.sub). MicroDVD è stato sviluppato tra il 1999 e il 2001 da Tias Software per i primi file video compressi in DivX e XviD. Anziché basarsi sul tempo reale, ciascuna battuta è definita dai numeri di fotogramma esatti tra parentesi graffe: {frame_inizio}{frame_fine}Testo della battuta. Le battute su più righe sono separate da una barra verticale (|).",
    "SubViewer (.sub), ideato da David Vignoni, è un formato di testo caratterizzato da un'intestazione ([INFORMATION]) seguita da timestamp in centesimi di secondo (HH:MM:SS.cs,HH:MM:SS.cs) e tag [br] per le interruzioni di riga. Infine, VobSub (.sub + .idx) appartiene a una categoria del tutto diversa: è un pacchetto binario contenente immagini bitmap rasterizzate estratte dai dischi DVD originali. Riconoscere quale formato .sub possiedi è il primo passo indispensabile per una conversione ottimale."
  ],
  "whyConvertTitle": "Perché Convertire i Sottotitoli SUB in SRT?",
  "whyConvertSubtitle": "Scopri i grandi vantaggi tecnici del passaggio dai vecchi file .sub allo standard universale SubRip (.srt).",
  "whyConvertReasons": [
    {
      "title": "Compatibilità Totale con Player e Dispositivi",
      "description": "Il formato SRT è supportato nativamente dal 100% dei lettori multimediali moderni (VLC, MPC-HC, IINA, MPV), dei sistemi operativi mobili (iOS, Android), delle Smart TV (Samsung Tizen, LG webOS, Android TV) e dei dispositivi streaming (Roku, Apple TV, Chromecast)."
    },
    {
      "title": "Perfetta Integrazione con Web e Servizi di Streaming",
      "description": "Piattaforme video come YouTube, Vimeo, Facebook e i riproduttori web HTML5 non accettano i file .sub basati su fotogrammi. Convertire in SRT consente il caricamento immediato e una visualizzazione impeccabile nel browser."
    },
    {
      "title": "Eliminazione della Dipendenza dalla Frequenza dei Fotogrammi",
      "description": "I sottotitoli MicroDVD sono legati alla frequenza del video originale. Se il video viene ricodificato o riprodotto a una velocità diversa, la sincronia svanisce. SRT adotta timestamp orari assoluti, rendendosi indipendente dal framerate del riproduttore."
    },
    {
      "title": "Facilità di Montaggio e Traduzione nei Software Professionali",
      "description": "I migliori editor di sottotitoli (Subtitle Edit, Aegisub) e le suite di montaggio video professionali (Adobe Premiere Pro, Blackmagic DaVinci Resolve, Final Cut Pro) offrono supporto nativo ad alto livello per il formato SRT."
    }
  ],
  "howToTitle": "Come Convertire SUB in SRT Online in 3 Semplici Passaggi",
  "howToSubtitle": "Trasforma i tuoi file MicroDVD o SubViewer .sub in sottotitoli .srt ordinati e sincronizzati direttamente nel tuo browser, senza installare alcun programma.",
  "howToSteps": [
    {
      "step": "1",
      "title": "Carica o Incolla i Sottotitoli SUB",
      "description": "Trascina e rilascia il file .sub nell'area apposita, fai clic per selezionarlo dal tuo dispositivo oppure incolla il testo dei sottotitoli direttamente nell'editor."
    },
    {
      "step": "2",
      "title": "Verifica la Frequenza dei Fotogrammi (FPS)",
      "description": "Il nostro strumento riconosce automaticamente se il file è MicroDVD o SubViewer. Per i file MicroDVD, controlla il framerate del video (es. 23.976, 24, 25 o 29.97 FPS) per calcolare orari perfetti."
    },
    {
      "step": "3",
      "title": "Scarica il File SRT Convertito",
      "description": "Fai clic su Scarica .SRT per salvare subito il file SubRip sul tuo computer, oppure usa Copia negli appunti per incollare il testo in qualunque editor tu preferisca."
    }
  ],
  "differenceTitle": "Confronto Tecnico: SUB (MicroDVD e SubViewer) vs. SRT",
  "differenceSubtitle": "Un'analisi comparativa approfondita su gestione temporale, strutture di file, compatibilità e formattazione.",
  "differenceTable": [
    {
      "feature": "Maccanismo Temporale",
      "srt": "Tempo di orologio assoluto (HH:MM:SS,mmm)",
      "microdvd": "Numeri di fotogramma del video ({inizio}{fine})",
      "subviewer": "Tempo di orologio assoluto (HH:MM:SS.cs)"
    },
    {
      "feature": "Risoluzione / Precisione",
      "srt": "1 millisecondo (1/1000 di secondo)",
      "microdvd": "1 fotogramma video (1/FPS secondo)",
      "subviewer": "1 centesimo di secondo (1/100 secondo)"
    },
    {
      "feature": "Struttura del Documento",
      "srt": "Blocchi numerati separati da righe vuote",
      "microdvd": "Una riga per battuta con parentesi graffe",
      "subviewer": "Intestazione, riga oraria, righe di dialogo"
    },
    {
      "feature": "A capo su Più Righe",
      "srt": "Normale interruzione di riga (CRLF o LF)",
      "microdvd": "Carattere barra verticale o pipe (|)",
      "subviewer": "Tag [br] o normale a capo"
    },
    {
      "feature": "Funzioni di Stile",
      "srt": "Tag HTML di base (<i>, <b>, <u>, <font color>)",
      "microdvd": "Comandi proprietari ({Y:i}, {Y:b}, {C:$BBGGRR})",
      "subviewer": "Font nell'intestazione e stili elementari"
    },
    {
      "feature": "Supporto Dispositivi Attuali",
      "srt": "Universale al 100% su qualsiasi software e TV",
      "microdvd": "Molto ridotto (VLC e vecchi lettori multimediali)",
      "subviewer": "Raro all'infuori dei software per computer"
    },
    {
      "feature": "Supporto Web e Streaming",
      "srt": "Universale (YouTube, Vimeo, HTML5 con VTT)",
      "microdvd": "Assente (richiede conversione preventiva)",
      "subviewer": "Assente sulle moderne piattaforme di streaming"
    },
    {
      "feature": "Dipendenza dal Framerate (FPS)",
      "srt": "Nessuna (fondato sul tempo reale)",
      "microdvd": "Totale (strettamente legato agli FPS del video)",
      "subviewer": "Nessuna (fondato sul tempo reale)"
    }
  ],
  "fpsGuideTitle": "Il Ruolo Determinante del Framerate (FPS) nella Conversione",
  "fpsGuideSubtitle": "Perché la corrispondenza esatta degli FPS è fondamentale per trasformare i fotogrammi in orari senza sfasamenti.",
  "fpsGuideText": [
    "Nella conversione di file MicroDVD (.sub) in SRT, conoscere la frequenza dei fotogrammi del proprio video non è un dettaglio secondario: è l'elemento decisivo che stabilisce se i sottotitoli resteranno perfettamente ancorati al parlato o se subiranno uno slittamento disastroso. Poiché MicroDVD esprime ogni comparsa come numero di fotogramma, il convertitore deve dividere tale valore per l'esatto quantitativo di frame al secondo per ottenere i millisecondi corrispondenti.",
    "Se effettui la conversione impostando un valore di FPS errato, l'errore di sincronia non resta fisso: aumenta progressivamente a ogni minuto di riproduzione. Per esempio, convertire un film cinematografico girato a 23.976 FPS con un'opzione impostata a 25.000 FPS (PAL) crea una discrepanza del 4,1%. Dopo 10 minuti, il testo comparirà con ben 25 secondi di anticipo; dopo un'ora, lo sfasamento supererà i due minuti e mezzo! Controlla sempre il framerate reale del file video prima di convertire."
  ],
  "fpsTable": [
    {
      "fps": "23.976 FPS (24000/1001)",
      "standard": "Cinema NTSC / Blu-ray / Web Streaming",
      "useCase": "Framerate tipico delle pellicole cinematografiche, delle uscite Blu-ray nordamericane e delle serie TV in streaming."
    },
    {
      "fps": "24.000 FPS",
      "standard": "Cinema Standard / Proiezione DCI",
      "useCase": "Standard storico per sale cinematografiche e Digital Cinema Package (DCP) per festival e anteprime."
    },
    {
      "fps": "25.000 FPS",
      "standard": "Trasmissione TV PAL / SECAM",
      "useCase": "Televisione in Europa, Australia e parte dell'Asia, DVD europei e produzioni video televisive standard."
    },
    {
      "fps": "29.970 FPS (30000/1001)",
      "standard": "Trasmissione TV NTSC",
      "useCase": "Standard televisivo in Nord America, Giappone e Corea del Sud in definizione standard e alta definizione."
    },
    {
      "fps": "30.000 FPS",
      "standard": "Video Web / Vecchi Smartphone",
      "useCase": "Registrazioni di vecchi telefoni cellulari, webcam e acquisizioni dello schermo del computer."
    },
    {
      "fps": "50.000 FPS",
      "standard": "PAL Alta Frequenza (HFR)",
      "useCase": "Eventi sportivi europei in diretta, trasmissioni di notiziari e segnali televisivi a 720p50 o 1080p50."
    },
    {
      "fps": "59.940 FPS (60000/1001)",
      "standard": "NTSC Alta Frequenza",
      "useCase": "Sport professionistico in Nord America, acquisizione da console di gioco e trasmissioni web a 60p."
    },
    {
      "fps": "60.000 FPS",
      "standard": "Gaming / Schermi Moderni",
      "useCase": "Monitor per computer, fotocamere per smartphone recenti, video di gameplay a 60 FPS su YouTube e scene rapide."
    }
  ],
  "mathTitle": "La Matematica della Conversione da Fotogramma a Tempo",
  "mathSubtitle": "Come i numeri di fotogramma vengono calcolati con precisione millimetrica in ore, minuti, secondi e millisecondi.",
  "mathFormula": "Tempo in Millisecondi = Math.round((Numero di Fotogramma / FPS del Video) * 1000)",
  "mathExplanation": [
    "Per visualizzare il modo in cui il nostro convertitore traduce i frame di MicroDVD nei timestamp SubRip regolamentari, esaminiamo un calcolo concreto: consideriamo una battuta definita come {1440}{1560}Riga di dialogo all'interno di un video riprodotto a 24.000 FPS.",
    "Per determinare il momento di inizio: 1440 diviso 24.000 dà esattamente 60.000 secondi (ovvero 60.000 millisecondi). Nello standard SRT questo orario si formatta come 00:01:00,000. Per la fine della battuta: 1560 diviso 24.000 dà 65.000 secondi (65.000 millisecondi), corrispondente a 00:01:05,000. Il blocco SRT risultante sarà: 00:01:00,000 --> 00:01:05,000.",
    "Prendiamo ora lo stesso fotogramma (1440) per un video codificato a 23.976 FPS (23.976023976...): 1440 / 23.976023976 = 60.060 secondi (60.060 millisecondi), che si formatta come 00:01:00,060. Benché al primo minuto lo scarto sia di soli 60 millisecondi, nel corso di un film di due ore questo piccolo scarto si trasforma in uno sfasamento intollerabile se calcolato con il valore sbagliato."
  ],
  "exampleTitle": "Esempio Pratico di Conversione da SUB a SRT",
  "exampleIntro": "Metti a confronto un file originale MicroDVD con l'output SubRip pulito e normalizzato generato dal nostro convertitore.",
  "exampleSubInput": "{1}{1}25.000\n{25}{75}Benvenuti al nostro festival del cinema!\n{100}{175}Questa sera presentiamo l'anteprima esclusiva|del nostro documentario internazionale.\n{200}{275}{Y:i}Voce narrante: Il viaggio iniziò nel 1998...\n{300}{375}Grazie di cuore per essere qui.|Buona visione a tutti!",
  "exampleSrtOutput": "1\n00:00:01,000 --> 00:00:03,000\nBenvenuti al nostro festival del cinema!\n\n2\n00:00:04,000 --> 00:00:07,000\nQuesta sera presentiamo l'anteprima esclusiva\ndel nostro documentario internazionale.\n\n3\n00:00:08,000 --> 00:00:11,000\n<i>Voce narrante: Il viaggio iniziò nel 1998...</i>\n\n4\n00:00:12,000 --> 00:00:15,000\nGrazie di cuore per essere qui.\nBuona visione a tutti!",
  "exampleExplanation": "In questo esempio pratico, il file MicroDVD comprendeva la riga di intestazione {1}{1}25.000, che il nostro strumento ha riconosciuto in automatico impostando la frequenza a 25.000 FPS. Il frame 25 è diventato 1.000s (00:00:01,000) e il frame 75 è diventato 3.000s (00:00:03,000). Nota inoltre come la barra verticale (|) nella battuta 2 sia stata convertita in un'interruzione di riga naturale e il codice {Y:i} nella battuta 3 sia stato tradotto nel tag HTML <i> compatibile con tutti i player moderni.",
  "formatsComparisonTitle": "MicroDVD (.sub) vs. SubViewer (.sub) vs. VobSub (.sub)",
  "formatsComparisonSubtitle": "Distinguere con chiarezza le tre tecnologie di sottotitoli che condividono la stessa estensione .sub.",
  "formatsComparisonText": [
    "Uno dei fattori che genera più smarrimento nel trattamento dei file video è la presenza di tre formati completamente diversi che utilizzano la stessa estensione .sub. Aprendo il file con un semplice editor di testo (come Blocco note o VS Code), riconoscerai all'istante di quale formato si tratta.",
    "Se il documento si apre con numeri tra parentesi graffe ({1}{1}25.000 o {50}{120}Ciao), ti trovi di fronte a un file di testo MicroDVD. Se inizia con una sezione [INFORMATION] seguita da orari separati da virgole (come 00:01:25.50,00:01:28.10), è un file SubViewer. Entrambi i formati sono supportati al 100% dal nostro strumento e vengono convertiti all'istante in SRT.",
    "Se invece all'apertura vedi simboli incomprensibili e caratteri binari caotici, oppure se il file era accompagnato da un altro con lo stesso nome ed estensione .idx, hai a che fare con un file binario VobSub. I file VobSub non contengono testo, bensì immagini bitmap scansionate dai sottotitoli di un DVD. Per convertirli in SRT occorre un software con OCR (Riconoscimento Ottico dei Caratteri) come Subtitle Edit. Il nostro convertitore rileva i file VobSub e ti mostrerà subito un avviso informativo."
  ],
  "ffmpegTitle": "Convertire SUB in SRT da Riga di Comando (FFmpeg)",
  "ffmpegSubtitle": "Comandi di transcodifica automatizzata per utenti esperti, sviluppatori e tecnici del montaggio video.",
  "ffmpegCommand": "# Convertire un file SubViewer (.sub) basato sul tempo in SubRip (.srt)\nffmpeg -i input.sub output.srt\n\n# Convertire un file MicroDVD (.sub) specificando la frequenza fotogrammi (23.976 FPS)\nffmpeg -r 23.976 -i input.sub output.srt\n\n# Convertire MicroDVD con codifica regionale caratteri Windows-1252 (ANSI)\nffmpeg -sub_charenc CP1252 -r 25 -i input.sub output.srt\n\n# Conversione in batch di tutti i file .sub in una cartella con PowerShell di Windows\nGet-ChildItem *.sub | ForEach-Object { ffmpeg -r 23.976 -i $_.FullName ($_.BaseName + \".srt\") }",
  "ffmpegExplanation": [
    "FFmpeg è il punto di riferimento assoluto da terminale per manipolare, muxare e convertire flussi video, audio e sottotitoli. Per i file SubViewer (.sub), FFmpeg può interpretare i valori temporali direttamente poiché sono già scanditi in ore e minuti reali.",
    "Per convertire file MicroDVD (.sub), invece, DEVI indicare la frequenza fotogrammi del video con il parametro -r prima del file di input (-i). Senza questa opzione, FFmpeg imposterà arbitrariamente un valore di 25 FPS, creando sfasamenti immediati su video a 23.976, 29.97 o 30 FPS.",
    "Inoltre, molti vecchi sottotitoli sono stati salvati con codifiche ANSI regionali come Windows-1252 o ISO-8859-1 anziché in UTF-8. Il parametro -sub_charenc garantisce che lettere accentate italiane (à, è, é, ì, ò, ù) e caratteri speciali vengano trascritti in UTF-8 senza corruzioni o caratteri illeggibili."
  ],
  "useCasesTitle": "Casi d'Uso Tipici per la Conversione da SUB a SRT",
  "useCasesSubtitle": "Scenari concreti in cui la migrazione dai vecchi file .sub verso il moderno formato .srt è indispensabile.",
  "useCasesList": [
    {
      "title": "Visione su Smart TV e Lettori Multimediali da Salotto",
      "description": "Le Smart TV di produttori come Samsung, LG o Sony e dispositivi come Apple TV e Roku non supportano i sottotitoli basati su frame. La conversione in SRT garantisce la visione via USB, server DLNA o piattaforme home server come Plex ed Emby."
    },
    {
      "title": "Caricamento di Video su YouTube, Vimeo e Social Network",
      "description": "Le piattaforme di hosting video accettano esclusivamente formati di sottotitoli chiusi standard (SRT o VTT). Caricare file SRT attiva i sottotitoli per non udenti e potenzia il posizionamento SEO del video nelle ricerche."
    },
    {
      "title": "Montaggio Professionale in Premiere Pro, DaVinci e Final Cut",
      "description": "I software di montaggio video professionale non consentono di gestire i file .sub basati su frame all'interno della timeline. Lo standard SRT consente una regolazione completa di font, stili, posizionamenti e burn-in."
    },
    {
      "title": "Archiviazione Digitale e Salvaguardia delle Videoteche",
      "description": "Conservare film con sottotitoli in formati obsoleti rischia di renderli illeggibili in futuro. Convertire il tuo archivio nel formato aperto SRT con codifica UTF-8 ti garantisce un'accessibilità permanente su tutti i dispositivi di domani."
    }
  ],
  "troubleshootTitle": "Risoluzione dei Problemi Comuni nella Conversione SUB in SRT",
  "troubleshootSubtitle": "Diagnosi immediata e soluzioni concrete per sfasamenti progressivi, errori di codifica e segnalazioni VobSub.",
  "troubleshootTips": [
    {
      "issue": "I sottotitoli partono sincronizzati ma tendono ad anticipare o ritardare progressivamente",
      "cause": "La frequenza dei fotogrammi (FPS) selezionata durante la conversione non corrispondeva al framerate reale del video (ad esempio conversione a 25 FPS per un video a 23.976 FPS).",
      "solution": "Apri il video in VLC Media Player, premi Ctrl+J (o Cmd+I) per verificare la Frequenza fotogrammi nella scheda Codificatore, torna nel nostro convertitore, seleziona la stessa cifra e rigenera il file SRT."
    },
    {
      "issue": "Le lettere accentate o i caratteri speciali appaiono come simboli strani o punti interrogativi",
      "cause": "Il file .sub originale è stato salvato con una codifica ANSI obsoleta (come Windows-1252 o ISO-8859-1) anziché in UTF-8.",
      "solution": "Apri il file .sub con Blocco note o VS Code, seleziona File > Salva con nome, scegli UTF-8 nel menu a tendina Codifica in basso, salva e ripeti la procedura nel nostro strumento online."
    },
    {
      "issue": "Il convertitore segnala che il file caricato è un pacchetto binario VobSub",
      "cause": "Il file inserito proviene da un disco DVD (.sub + .idx) e contiene immagini grafiche dei sottotitoli anziché testo alfanumerico.",
      "solution": "Utilizza un software di OCR dedicato ai sottotitoli come Subtitle Edit (Windows/Linux) o BDSup2Sub. Questi strumenti leggono visivamente le lettere disegnate e producono un file di testo SRT modificabile."
    },
    {
      "issue": "Le battute compaiono ammassate su una sola riga o mostrano ancora la barra verticale (|)",
      "cause": "Il file originale conteneva separatori insoliti o l'opzione di conversione formattazione era disattivata.",
      "solution": "Assicurati che la casella 'Converti Tag di Formattazione' sia attiva nelle impostazioni del convertitore. Il sistema trasformerà automaticamente ogni barra verticale (|) in un a capo pulito."
    }
  ],
  "workflowTitle": "Flusso di Lavoro Consigliato per i Sottotitoli",
  "workflowSubtitle": "Le migliori pratiche per convertire, controllare e integrare i sottotitoli nei tuoi flussi di lavoro video.",
  "workflowSteps": [
    "Passo 1: Esaminare le Proprietà del Video — Apri il video in VLC o MediaInfo per verificare il framerate esatto (es. 23.976 o 25.000 FPS) e la lingua dell'audio.",
    "Passo 2: Convertire il File SUB in SRT — Carica il file .sub nel nostro convertitore web, seleziona il framerate corretto e scarica il file .srt pulito in formato UTF-8.",
    "Passo 3: Verificare la Sincronizzazione — Riproduci il video insieme al file .srt in VLC e accertati che le battute siano a tempo all'inizio, a metà e negli ultimi minuti del film.",
    "Passo 4: Incorporare o Distribuire — Muxa la traccia SRT nel file MP4 o MKV tramite MKVToolNix oppure carica il file come traccia sottotitoli esterna sulla tua piattaforma online."
  ],
  "conclusionTitle": "Conclusione: Ottieni una Compatibilità Impeccabile per i tuoi Sottotitoli",
  "conclusionText": [
    "Passare dai vecchi sottotitoli MicroDVD al formato aperto SubRip (.srt) è il metodo più sicuro e rapido per assicurarsi una riproduzione fluida su qualunque dispositivo, televisore e programma di editing. Calcolando con esattezza millisecondi precisi partendo dai frame video, il nostro convertitore da SUB a SRT offre una sincronizzazione impeccabile senza complicate regolazioni a mano.",
    "Soprattutto, SRTConverters lavora al 100% in locale all'interno del tuo browser. Senza caricamento di file su server esterni, nella più totale riservatezza e con una velocità fulminea, puoi modernizzare la tua collezione di sottotitoli in totale serenità. Aggiungi questa pagina ai preferiti ed esplora la nostra gamma completa di strumenti per i sottotitoli."
  ]
},
};

export function getSubToSrtGuideContent(locale: Locale): SubToSrtGuideContent {
  return SUB_TO_SRT_GUIDES[locale] || SUB_TO_SRT_GUIDES.en;
}
