import type { Locale } from './config';

export interface SupToSrtGuideContent {
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
    sup: string;
    srt: string;
  }[];

  technicalDeepDiveTitle: string;
  technicalDeepDiveSubtitle: string;
  technicalDeepDiveText: string[];

  exampleTitle: string;
  exampleIntro: string;
  exampleSupDetails: string;
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

export const SUP_TO_SRT_GUIDE_CONTENT: Record<Locale, SupToSrtGuideContent> = {
  "en": {
    "introTitle": "The Definitive Guide to Converting Blu-ray SUP (PGS) to SRT Subtitles",
    "introSubtitle": "Understand Blu-ray bitmap subtitle architecture, optical character recognition (OCR), and how to generate clean SubRip text files.",
    "introText": [
      "Blu-ray discs and modern high-definition video rips often package their subtitles in the .SUP file format, formally known as Presentation Graphic Stream (PGS). Unlike plain text formats like SubRip (.srt) or WebVTT (.vtt), a PGS SUP file does not contain a single character of raw text. Instead, it is a sequential collection of compressed 8-bit indexed bitmap images, where every line of dialogue is pre-rendered as a graphic overlay complete with proprietary fonts, colors, and alpha-transparency boundaries.",
      "Because of this bitmap-based structure, traditional subtitle converters that simply parse text timestamps or alter file extensions fail entirely on SUP files. Renaming a .sup file to .srt or opening it inside a text editor produces nothing but unintelligible binary data, causing media players to freeze or ignore the subtitle track completely. To turn a Blu-ray SUP file into a standard, universally compatible SRT subtitle file, the image graphics must undergo optical character recognition (OCR).",
      "Our browser-based SUP to SRT converter combines full client-side binary PGS packet parsing with high-performance WebAssembly OCR. It decodes the run-length encoded (RLE) bitmap frames, applies the embedded color palettes, calculates millisecond-accurate timestamps from the 90 kHz Presentation Time Stamps (PTS), and accurately extracts the spoken dialogue into clean, editable SubRip subtitles—all without uploading your files to any external server."
    ],
    "whatIsTitle": "What Is a Blu-ray SUP (PGS) File?",
    "whatIsText": [
      "A .sup file is an elementary subtitle stream extracted directly from an M2TS Blu-ray container or Matroska (.mkv) video file. Engineered specifically for high-definition optical media, PGS subtitles allow movie studios to display dialogue in bespoke cinematic typography with precise drop shadows and fixed screen coordinates, ensuring the text looks identical across all Blu-ray hardware players.",
      "Internally, a Blu-ray SUP file is divided into distinct Display Sets, each containing a sequence of functional segments. The Presentation Composition Segment (PCS) controls the overall screen resolution, composition state, and display timing. The Window Definition Segment (WDS) establishes the bounding rectangles on screen. The Palette Definition Segment (PDS) provides the 8-bit YCbCr color table with alpha transparency values, and the Object Definition Segment (ODS) stores the actual subtitle imagery compressed using a custom 2-byte run-length encoding (RLE) algorithm.",
      "Crucially, timing in a SUP file is governed by 90 kHz Presentation Time Stamps (PTS). A subtitle begins displaying when a PCS with composition objects arrives, and remains on screen until a subsequent 'clearing' PCS (with zero objects) commands the player to erase the graphic. Converting this pipeline into SRT requires calculating the exact elapsed milliseconds from the 90 kHz clock and pairing those intervals with the text extracted by OCR."
    ],
    "whyConvertTitle": "Why Convert Blu-ray SUP Subtitles to SubRip (.SRT)?",
    "whyConvertSubtitle": "Discover the critical playback, compatibility, and performance advantages of migrating from bitmap graphics to standard text subtitles.",
    "whyConvertReasons": [
      {
        "title": "Universal Media Player & Device Compatibility",
        "description": "While specialized media players like Kodi and VLC can render PGS bitmaps, most smart TVs, mobile browsers, Apple AirPlay devices, Chromecast, and web players cannot parse SUP streams. Converting to SubRip (.srt) ensures your subtitles display flawlessly on every screen without requiring transcoding."
      },
      {
        "title": "Over 99% File Size Reduction",
        "description": "Because Blu-ray SUP files store uncompressed or lightly RLE-compressed 1080p/4K graphic bitmaps for every line of dialogue, a full movie subtitle track typically weighs between 20 MB and 80 MB. The equivalent text-based SRT file consumes merely 40 KB to 120 KB, freeing up storage and enabling instant streaming."
      },
      {
        "title": "Full Text Searchability & AI Indexing",
        "description": "Bitmap subtitles cannot be indexed, searched, or processed by accessibility screen readers. Converting your SUP files to SRT unlocks full-text search across dialogue, enables automated translations, and allows search engines and video catalogs to index your media."
      },
      {
        "title": "Seamless Video Editing & Post-Production",
        "description": "Major non-linear editors like Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro, and Avid Media Composer do not natively accept raw .sup files on their subtitle tracks. Converting to standard SRT allows editors to import, customize styles, adjust timing, and burn in captions effortlessly."
      }
    ],
    "howToTitle": "How to Convert SUP to SRT Online in 3 Steps",
    "howToSubtitle": "Follow our simple, client-side workflow to extract text subtitles from Blu-ray PGS files.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Load Your Blu-ray SUP File",
        "description": "Drag and drop your .sup file directly into the converter dropzone, or click 'Browse Files' to select it from your device. You can also click 'Load Sample SUP' to test the full OCR pipeline immediately with our built-in test stream."
      },
      {
        "step": "2",
        "title": "Automatic Binary Decoding & WebAssembly OCR",
        "description": "The in-browser engine parses the PGS display sets, reconstructs the 8-bit bitmap frames onto an offscreen canvas, and executes optical character recognition using WebAssembly to transcribe every dialogue line with millisecond-exact PTS timing."
      },
      {
        "step": "3",
        "title": "Review Visual Cues & Export SRT",
        "description": "Inspect the recognized dialogue alongside the original Blu-ray graphic thumbnails in the visual cue editor. Make any quick manual corrections if needed, then click 'Download .SRT' or 'Copy SRT' to save your clean SubRip file."
      }
    ],
    "differenceTitle": "Blu-ray SUP (PGS) vs SubRip (.SRT): Complete Format Comparison",
    "differenceSubtitle": "Compare the technical architecture, capabilities, and system requirements of bitmap-based and text-based subtitle standards.",
    "differenceTable": [
      {
        "feature": "Data Storage Format",
        "sup": "Binary stream of 8-bit indexed RLE bitmap graphic images",
        "srt": "Clean, human-readable UTF-8 plain text with sequential numbers"
      },
      {
        "feature": "Average Full-Movie File Size",
        "sup": "20 MB – 80 MB (contains hundreds of raster images)",
        "srt": "40 KB – 120 KB (pure text data)"
      },
      {
        "feature": "Timing Coordinate Clock",
        "sup": "90 kHz Presentation Time Stamps (PTS integers)",
        "srt": "Standard clock timecodes formatted as HH:MM:SS,mmm"
      },
      {
        "feature": "Typography & Visual Styling",
        "sup": "Fixed studio font, baked-in colors, outlines, and screen positions",
        "srt": "Rendered dynamically by player settings (font, color, and size customizable by viewer)"
      },
      {
        "feature": "Hardware & Platform Support",
        "sup": "Blu-ray players, VLC, Kodi, MPC-HC (often causes Plex transcoding)",
        "srt": "Universal: iOS, Android, Smart TVs, Web browsers, YouTube, Premiere Pro"
      },
      {
        "feature": "Editing & Searchability",
        "sup": "Requires specialized graphic editors (BDSup2Sub); cannot be searched",
        "srt": "Easily edited in any text editor or Subtitle Edit; 100% searchable"
      }
    ],
    "technicalDeepDiveTitle": "Inside the Blu-ray PGS Binary Architecture",
    "technicalDeepDiveSubtitle": "A detailed engineering breakdown of how Presentation Graphic Stream packets are decoded into raster images and synchronized to video.",
    "technicalDeepDiveText": [
      "Every segment in a Blu-ray PGS SUP file begins with a 13-byte header. The first two bytes must match the magic number 0x50 0x47 (ASCII characters 'PG'). Following the magic identifier are a 32-bit Presentation Time Stamp (PTS), a 32-bit Decode Time Stamp (DTS), a 1-byte segment type identifier, and a 16-bit integer indicating the total payload length.",
      "To display a subtitle, a Blu-ray authoring muxer outputs a sequence of segments forming a Display Set. The Presentation Composition Segment (type 0x16) declares the video canvas dimensions (typically 1920x1080 for standard HD or 3840x2160 for Ultra HD Blu-ray) and points to composition objects with designated horizontal (X) and vertical (Y) coordinates. The Palette Definition Segment (type 0x14) provides color entries stored in YCbCr color space along with an 8-bit alpha transparency channel. The Object Definition Segment (type 0x15) contains the pixel data compressed via run-length encoding.",
      "Our parser processes these segments sequentially. When an ODS is encountered, its RLE data stream is decompressed into a 2D matrix of palette index values. The indices are mapped to 32-bit RGBA color values using the active PDS table. The resulting image is drawn onto an in-memory HTML5 Canvas. A high-contrast binarization filter is applied to separate the text glyphs from shadows and anti-aliasing artifacts, creating a pristine input image for our WebAssembly OCR worker.",
      "PTS values are converted into SubRip timecodes using the formula: Total Milliseconds = Math.round(PTS / 90). The display start timestamp is locked to the PTS of the composition PCS, and the subtitle display closes when a subsequent clearing PCS (composition state 0x00 with 0 objects) arrives. This ensures perfect lip-sync accuracy identical to the original Blu-ray disc."
    ],
    "exampleTitle": "Conversion Example: From Binary PGS Packet to SubRip SRT",
    "exampleIntro": "Examine how a decoded Blu-ray subtitle graphic is converted into standard SRT text format with exact timing.",
    "exampleSupDetails": "Segment Type: 0x16 (PCS) at PTS 270,000 (00:00:03,000) | Object: 1920x1080 Canvas, Subtitle Bounds: 640x72 px\nPalette: Entry 1 = Y:235, Cb:128, Cr:128, Alpha:255 (Pure White Text)\nDecoded Image: Rendered graphic reading 'Welcome back, Commander.'\nClearing PCS: at PTS 540,000 (00:00:06,000)",
    "exampleSrtOutput": "1\n00:00:03,000 --> 00:00:06,000\nWelcome back, Commander.\n\n2\n00:00:07,500 --> 00:00:10,200\nThe fleet has arrived at orbit.",
    "exampleExplanation": "The PTS clock timestamp 270,000 divided by 90 yields exactly 3,000 milliseconds (00:00:03,000). The clearing segment at PTS 540,000 defines the cue end time of 6,000 milliseconds (00:00:06,000). The OCR engine transcribes the bitmap glyphs into clean UTF-8 text, formatted with standard sequential cue numbers.",
    "ffmpegTitle": "Can You Convert SUP to SRT Using FFmpeg?",
    "ffmpegSubtitle": "Why standard FFmpeg commands fail on Blu-ray SUP files and how our browser tool solves the problem.",
    "ffmpegCommand": "# Standard FFmpeg fails because it lacks an internal OCR engine:\nffmpeg -i input.sup output.srt\n# Output error: 'Subtitle encoding not supported: bitmap to text conversion requires OCR'\n\n# Alternative desktop tool workflow (requires Java runtime & GUI):\njava -jar BDSup2Sub.jar input.sup -o output.sub\n# Then open Subtitle Edit to run Tesseract OCR manually",
    "ffmpegExplanation": [
      "A common point of confusion among video enthusiasts is attempting to convert SUP to SRT using FFmpeg. When you run `ffmpeg -i subtitles.sup subtitles.srt`, FFmpeg aborts with an error message indicating that it cannot copy or convert bitmap subtitle streams into text codecs. FFmpeg is designed for stream multiplexing, demuxing, and video/audio transcoding; it does not include an optical character recognition engine by default.",
      "While desktop power users historically combined legacy Java utilities like BDSup2Sub with Subtitle Edit, that workflow demands downloading multiple heavy software packages, configuring Java runtime environments, and managing local language dictionaries.",
      "Our web-based converter eliminates all software installation. By running Tesseract.js directly inside a sandboxed WebAssembly worker in your browser, you get instant, accurate OCR text extraction with zero setup and complete local privacy."
    ],
    "useCasesTitle": "Common Use Cases for SUP to SRT Conversion",
    "useCasesSubtitle": "Discover where converting Blu-ray subtitles into SubRip format provides immediate workflow improvements.",
    "useCasesList": [
      {
        "title": "Preventing Plex & Emby Server Transcoding",
        "description": "When streaming movies with PGS SUP subtitles to Apple TV, Roku, or web browsers, media servers like Plex and Jellyfin are often forced to transcode the entire video stream on-the-fly to burn in the bitmaps. Converting your SUP tracks to SRT allows instant direct play, slashing CPU load and preventing buffering."
      },
      {
        "title": "Creating Accessible Multi-Language Translations",
        "description": "Subtitle translation platforms and language-learning apps cannot read raw bitmap files. Extracting clean SRT text allows translators and automated localization tools to translate dialogue into dozens of languages effortlessly."
      },
      {
        "title": "Hardcoding & Burning Captions for Social Media",
        "description": "Video creators making short clips, trailers, or commentaries from Blu-ray sources need text subtitles that can be resized, stylized, and animated in CapCut, Premiere, or DaVinci Resolve without blurry raster pixelation."
      },
      {
        "title": "Archiving & Digital Media Optimization",
        "description": "Stripping 50 MB PGS subtitle tracks from MKV video libraries and replacing them with 60 KB SRT files significantly cleans up file structures and ensures long-term preservation across future playback devices."
      }
    ],
    "troubleshootTitle": "Troubleshooting Blu-ray SUP to SRT Conversion",
    "troubleshootSubtitle": "Proven solutions for common OCR recognition issues, italicized fonts, and complex multi-line subtitle dialogue.",
    "troubleshootTips": [
      {
        "issue": "OCR Confuses Similar Characters ('I', 'l', '1', or 'rn' vs 'm')",
        "cause": "Fine serif typography, heavy italics, or low-contrast anti-aliasing borders can cause adjacent glyphs to appear merged or ambiguous to optical recognition algorithms.",
        "solution": "Our tool automatically applies high-contrast thresholding before passing images to the OCR engine. In addition, our interactive visual cue editor displays the original Blu-ray graphic beside each recognized sentence, enabling you to inspect and correct any minor character confusions in seconds."
      },
      {
        "issue": "Subtitles Lack Punctuation or Quotation Marks",
        "cause": "Some Blu-ray releases place curved quotation marks or dashes far to the left or above the dialogue baseline, which can be cropped if window bounding boxes are tight.",
        "solution": "Ensure the 'Preserve Multi-line Layout' setting is enabled in the converter controls. Our parser computes the full composite bounding box of all ODS objects within each Display Set to ensure no outer punctuation is clipped."
      },
      {
        "issue": "The Converter Reports 'Invalid Header Magic (0x50 0x47 missing)'",
        "cause": "The uploaded file is not a valid Blu-ray PGS SUP file. It may be a DVD VobSub (.sub) file, an Advanced SubStation Alpha file, or a corrupted download.",
        "solution": "Verify that your subtitle file originates from a Blu-ray source. If your file is a DVD VobSub file (which is paired with an .idx file) or a MicroDVD file, use our dedicated SUB to SRT Converter instead."
      },
      {
        "issue": "Subtitles Drift Out of Sync When Remuxed Into Video",
        "cause": "The video stream may have been ripped at a different frame rate (e.g. 23.976 FPS vs 25.000 FPS PAL), or an introductory studio bumper was trimmed from the video without adjusting subtitle PTS offsets.",
        "solution": "Our tool extracts PTS timestamps with millisecond fidelity directly from the Blu-ray master clock. If your video rip was trimmed or retimed, you can adjust global offset in your media player or remuxing tool with exact confidence."
      }
    ],
    "conclusionTitle": "Streamline Your Blu-ray Subtitle Workflow Today",
    "conclusionText": [
      "Converting image-based Blu-ray PGS (.sup) subtitles into clean, universally supported SubRip (.srt) files no longer requires installing cumbersome desktop applications or wrestling with complex command-line scripts. With our free online SUP to SRT converter, you can harness modern WebAssembly optical character recognition to extract dialogue and timestamps accurately in seconds.",
      "Experience instant playback on Plex, mobile devices, and smart TVs, reduce subtitle storage by over 99%, and preserve full control over your media with complete client-side privacy. Drag and drop your .sup file above to get started!"
    ]
  },
  "es": {
    "introTitle": "Guía Definitiva para Convertir Subtítulos Blu-ray SUP (PGS) a SRT",
    "introSubtitle": "Aprenda cómo funciona la arquitectura de subtítulos gráficos Blu-ray, el reconocimiento óptico OCR y cómo generar archivos de texto SubRip limpios.",
    "introText": [
      "Los discos Blu-ray y las copias de vídeo en alta definición suelen empaquetar sus subtítulos en formato .SUP, conocido técnicamente como Presentation Graphic Stream (PGS). A diferencia de formatos de texto plano como SubRip (.srt) o WebVTT (.vtt), un archivo PGS SUP no contiene ni un solo carácter de texto sin procesar. En su lugar, es una secuencia estructurada de imágenes de mapa de bits indexadas de 8 bits comprimidas, donde cada línea de diálogo está pre-renderizada como un gráfico con fuentes, colores y bordes transparentes propios.",
      "Debido a esta naturaleza gráfica, los convertidores tradicionales que intentan interpretar texto o simplemente cambiar la extensión del archivo fallan por completo. Renombrar un archivo .sup a .srt o abrirlo en el bloc de notas solo muestra datos binarios ilegibles, haciendo que los reproductores multimedia se bloqueen o ignoren la pista de subtítulos. Para convertir un archivo Blu-ray SUP en un subtítulo SRT estándar y universal, las imágenes deben someterse a reconocimiento óptico de caracteres (OCR).",
      "Nuestro convertidor online combina el análisis binario de paquetes PGS en el navegador con un motor OCR de alto rendimiento en WebAssembly. Descomprime las imágenes RLE, aplica las paletas de color integradas, calcula tiempos exactos en milisegundos a partir del reloj PTS de 90 kHz y extrae los diálogos en subtítulos SubRip limpios y editables, todo sin subir ningún archivo a servidores externos."
    ],
    "whatIsTitle": "¿Qué es un Archivo Blu-ray SUP (PGS)?",
    "whatIsText": [
      "Un archivo .sup es un flujo elemental de subtítulos extraído de un contenedor Blu-ray M2TS o de un archivo Matroska (.mkv). Diseñado específicamente para discos ópticos de alta definición, el formato PGS permite a los estudios cinematográficos utilizar tipografías exclusivas con sombras y posiciones fijas, asegurando que los subtítulos se vean idénticos en cualquier reproductor físico.",
      "Internamente, un archivo SUP se divide en conjuntos de visualización (Display Sets). El segmento Presentation Composition Segment (PCS) controla la resolución y el momento de mostrar u ocultar la imagen. El Window Definition Segment (WDS) define el área de pantalla. El Palette Definition Segment (PDS) contiene la tabla de colores YCbCr con valores de transparencia alfa, y el Object Definition Segment (ODS) almacena la imagen comprimida con un algoritmo RLE específico.",
      "La sincronización se rige por marcas Presentation Time Stamps (PTS) basadas en un reloj de 90 kHz. Un subtítulo aparece cuando un PCS con objetos activos llega al decodificador y permanece hasta que un PCS de limpieza (con 0 objetos) indica su borrado. Convertir esto a SRT requiere transformar los ciclos de 90 kHz a milisegundos y asociarlos al texto extraído por OCR."
    ],
    "whyConvertTitle": "¿Por Qué Convertir Subtítulos Blu-ray SUP a SubRip (.SRT)?",
    "whyConvertSubtitle": "Descubra las enormes ventajas de compatibilidad, rendimiento y almacenamiento al pasar de imágenes a subtítulos de texto estándar.",
    "whyConvertReasons": [
      {
        "title": "Compatibilidad Universal con Todos los Reproductores",
        "description": "Aunque reproductores como VLC o Kodi leen mapas de bits PGS, la mayoría de Smart TVs, navegadores móviles, Chromecast y consolas no admiten SUP. Convertir a SubRip (.srt) garantiza una reproducción fluida en cualquier pantalla sin necesidad de transcodificación."
      },
      {
        "title": "Reducción de Tamaño de Más del 99%",
        "description": "Dado que los archivos Blu-ray SUP almacenan cientos de imágenes gráficas para cada diálogo, una película completa ocupa entre 20 MB y 80 MB. El archivo SRT equivalente en texto plano solo pesa entre 40 KB y 120 KB, optimizando espacio y velocidad de transmisión."
      },
      {
        "title": "Búsqueda de Texto Completa y Accesibilidad",
        "description": "Las imágenes bitmap no pueden ser indexadas ni leídas por software de accesibilidad para personas con discapacidad visual. El formato SRT permite buscar cualquier diálogo, traducir automáticamente y catalogar el contenido con facilidad."
      },
      {
        "title": "Edición Profesional en Premiere, DaVinci y Final Cut",
        "description": "Los programas de edición de vídeo profesionales no admiten pistas .sup directamente. Convertir a SRT permite a editores y creadores importar subtítulos, personalizar estilos y ajustar tiempos al instante."
      }
    ],
    "howToTitle": "Cómo Convertir SUP a SRT Online en 3 Pasos",
    "howToSubtitle": "Siga nuestro proceso en el navegador para extraer subtítulos de texto de archivos Blu-ray PGS.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Cargue su Archivo Blu-ray SUP",
        "description": "Arrastre y suelte su archivo .sup en la zona de carga o haga clic en 'Explorar archivos'. También puede pulsar 'Cargar muestra SUP' para probar el motor de OCR al instante."
      },
      {
        "step": "2",
        "title": "Decodificación Binaria y OCR Automático",
        "description": "El motor del navegador analiza los paquetes PGS, reconstruye las imágenes en un lienzo interno y ejecuta el reconocimiento OCR para transcribir los diálogos con precisión milimétrica."
      },
      {
        "step": "3",
        "title": "Revise los Subtítulos y Guarde el Archivo SRT",
        "description": "Compare el texto reconocido con la imagen gráfica original en el editor interactivo. Realice ajustes si lo desea y haga clic en 'Descargar .SRT' o 'Copiar SRT'."
      }
    ],
    "differenceTitle": "Blu-ray SUP (PGS) frente a SubRip (.SRT): Comparativa Técnica",
    "differenceSubtitle": "Analice las diferencias fundamentales entre el formato de gráficos Blu-ray y el estándar de texto para subtítulos.",
    "differenceTable": [
      {
        "feature": "Formato de Datos",
        "sup": "Flujo binario de imágenes de mapa de bits indexadas en 8 bits (RLE)",
        "srt": "Texto plano estructurado en UTF-8 con numeración secuencial"
      },
      {
        "feature": "Tamaño Promedio por Película",
        "sup": "20 MB – 80 MB (almacena cientos de imágenes gráficas)",
        "srt": "40 KB – 120 KB (datos de texto ultraligeros)"
      },
      {
        "feature": "Reloj de Sincronización",
        "sup": "Marcas PTS de 90 kHz (números enteros de reloj)",
        "srt": "Códigos de tiempo estándar con formato HH:MM:SS,mmm"
      },
      {
        "feature": "Tipografía y Estilo",
        "sup": "Fuentes fijas incrustadas con sombras y colores inmodificables",
        "srt": "Renderizado dinámicamente según la configuración elegida por el usuario"
      },
      {
        "feature": "Soporte en Dispositivos",
        "sup": "Limitado a reproductores Blu-ray y VLC (fuerza transcodificación en Plex)",
        "srt": "Universal: Smart TVs, iOS, Android, YouTube, navegadores web"
      },
      {
        "feature": "Edición y Corrección",
        "sup": "Requiere programas complejos de imágenes; no se puede buscar texto",
        "srt": "Modificable en cualquier editor de texto o Subtitle Edit; 100% editable"
      }
    ],
    "technicalDeepDiveTitle": "Análisis Interno de la Estructura Binaria PGS de Blu-ray",
    "technicalDeepDiveSubtitle": "Detalles de ingeniería sobre cómo se decodifican los paquetes gráficos y se transforman en códigos de tiempo precisos.",
    "technicalDeepDiveText": [
      "Cada segmento de un archivo SUP de Blu-ray comienza con una cabecera de 13 bytes. Los dos primeros bytes corresponden a los caracteres 'PG' (0x50 0x47). A continuación se incluye un PTS de 32 bits, un DTS de 32 bits, un byte identificador de tipo de segmento y un entero de 16 bits con la longitud de los datos.",
      "Para mostrar un diálogo, el autor del Blu-ray emite un Presentation Composition Segment (0x16) con la resolución de pantalla (habitualmente 1920x1080 o 3840x2160 en UHD) y las coordenadas X e Y. El segmento PDS (0x14) define la paleta YCbCr con canal alfa, y el segmento ODS (0x15) guarda los píxeles comprimidos por longitud de tramo (RLE).",
      "Nuestro analizador decodifica estos bytes en tiempo real. Cuando encuentra un ODS, descomprime los píxeles hacia una matriz de índices y aplica la paleta PDS para generar una imagen en un lienzo HTML5. Aplicamos un filtro de alto contraste para separar los caracteres de sombras o efectos de suavizado, entregando una imagen perfecta al motor OCR.",
      "El cálculo de marcas de tiempo traduce los ciclos del reloj de 90 kHz a milisegundos: Milisegundos = Math.round(PTS / 90). El inicio se vincula al segmento PCS que proyecta el subtítulo y el final al PCS que borra la pantalla, garantizando una sincronía idéntica a la pista original."
    ],
    "exampleTitle": "Ejemplo de Conversión: De Paquete Binario PGS a SubRip SRT",
    "exampleIntro": "Observe cómo un gráfico decodificado de Blu-ray se convierte en un bloque SRT con marcas temporales exactas.",
    "exampleSupDetails": "Tipo de segmento: 0x16 (PCS) en PTS 270.000 (00:00:03,000) | Objeto: 1920x1080, Subtítulo: 640x72 px\nPaleta: Entrada 1 = Blanco puro (Y:235, Cb:128, Cr:128, Alfa:255)\nImagen: Gráfico con el texto 'Bienvenido de nuevo, comandante.'\nPCS de borrado: PTS 540.000 (00:00:06,000)",
    "exampleSrtOutput": "1\n00:00:03,000 --> 00:00:06,000\nBienvenido de nuevo, comandante.\n\n2\n00:00:07,500 --> 00:00:10,200\nLa flota ha llegado a la órbita.",
    "exampleExplanation": "El valor PTS 270.000 dividido entre 90 equivale a 3.000 milisegundos (00:00:03,000). El borrado en PTS 540.000 establece el final en 6.000 milisegundos (00:00:06,000). El OCR extrae las letras en texto limpio con la numeración secuencial de SubRip.",
    "ffmpegTitle": "¿Se Puede Convertir SUP a SRT con FFmpeg?",
    "ffmpegSubtitle": "Por qué el comando habitual de FFmpeg falla con archivos Blu-ray SUP y cómo soluciona el problema nuestra herramienta.",
    "ffmpegCommand": "# El comando directo de FFmpeg falla porque carece de motor OCR:\nffmpeg -i entrada.sup salida.srt\n# Error: 'Subtitle encoding not supported: bitmap to text conversion requires OCR'\n\n# Flujo tradicional en PC (requiere Java y programas pesados):\njava -jar BDSup2Sub.jar entrada.sup -o salida.sub\n# Luego abrir Subtitle Edit para ejecutar Tesseract OCR manualmente",
    "ffmpegExplanation": [
      "Muchos usuarios intentan convertir SUP a SRT directamente en FFmpeg mediante la instrucción `ffmpeg -i entrada.sup salida.srt`. Sin embargo, el comando se detiene con un error porque FFmpeg no incluye un motor OCR integrado para subtítulos gráficos. FFmpeg multiplexa y transcodifica audio y vídeo, pero no lee texto en imágenes.",
      "El método tradicional exigía instalar paquetes como BDSup2Sub y Subtitle Edit con máquinas virtuales de Java y configuraciones de diccionarios locales.",
      "Nuestra herramienta web elimina instalaciones complejas: ejecuta Tesseract OCR en WebAssembly directamente en su navegador, con procesamiento local, rápido y 100% privado."
    ],
    "useCasesTitle": "Casos de Uso Principales para la Conversión de SUP a SRT",
    "useCasesSubtitle": "Situaciones habituales donde convertir subtítulos Blu-ray a formato SubRip optimiza el flujo de trabajo.",
    "useCasesList": [
      {
        "title": "Evitar la Transcodificación en Plex y Emby",
        "description": "Al reproducir películas con subtítulos PGS SUP en Apple TV, Roku o navegadores, servidores como Plex deben transcodificar el vídeo para incrustar los gráficos. Convertir a SRT permite la reproducción directa instantánea sin sobrecargar la CPU."
      },
      {
        "title": "Traducción Multilingüe y Accesibilidad",
        "description": "Las plataformas de traducción no pueden procesar imágenes bitmap. Extraer texto SRT permite traducir diálogos a decenas de idiomas y habilitar lectores de pantalla para personas con discapacidad."
      },
      {
        "title": "Edición y Subtítulos en Redes Sociales",
        "description": "Creadores de contenido que utilizan fragmentos de Blu-ray para tráileres o reseñas necesitan subtítulos editables para modificar tipografías y animar el texto en Premiere o CapCut."
      },
      {
        "title": "Ahorro de Espacio y Archivo Digital",
        "description": "Sustituir pistas PGS de 60 MB por archivos SRT de 50 KB dentro de colecciones MKV reduce el tamaño general y garantiza compatibilidad a largo plazo."
      }
    ],
    "troubleshootTitle": "Solución de Problemas Comunes en la Conversión SUP a SRT",
    "troubleshootSubtitle": "Recomendaciones prácticas para resolver dificultades de reconocimiento OCR, cursivas o saltos de línea.",
    "troubleshootTips": [
      {
        "issue": "Confusión entre Caracteres Similares ('I', 'l', '1' o 'rn' frente a 'm')",
        "cause": "Tipografías con remates finos o letras muy inclinadas en cursiva pueden hacer que caracteres próximos parezcan unidos al algoritmo de OCR.",
        "solution": "Aplicamos umbralizado de alto contraste antes de procesar cada imagen. Además, nuestro editor visual interactivo le permite comparar el gráfico original con el texto extraído y corregir cualquier letra en segundos."
      },
      {
        "issue": "Omisión de Signos de Apertura (¿ ¡) o Comillas",
        "cause": "Algunas ediciones ubican comillas o signos de puntuación fuera del margen principal, pudiendo quedar al borde del cuadro delimitador.",
        "solution": "Asegúrese de activar la opción 'Mantener Saltos de Línea Múltiples'. Nuestro analizador calcula el área combinada completa de todos los objetos ODS para no recortar signos exteriores."
      },
      {
        "issue": "El Convertidor Muestra 'Cabecera no válida (falta PG)'",
        "cause": "El archivo cargado no es un flujo Blu-ray PGS SUP auténtico. Puede ser un archivo DVD VobSub (.sub), un subtítulo ASS o un archivo corrupto.",
        "solution": "Verifique el origen de su archivo. Si proviene de un DVD estándar (VobSub .sub con archivo .idx asociado), utilice nuestro convertidor especializado SUB a SRT."
      },
      {
        "issue": "Desincronización Temporal al Incrustar el Subtítulo en el Vídeo",
        "cause": "El vídeo puede haber sido recomprimido a distinta cadencia (por ejemplo, 23,976 FPS frente a 25 FPS PAL), o se eliminaron cortinillas iniciales.",
        "solution": "Nuestra herramienta extrae marcas PTS con precisión milimétrica respecto al reloj maestro. Si su vídeo sufrió recortes, puede ajustar el desfase temporal con total fiabilidad."
      }
    ],
    "conclusionTitle": "Optimice sus Subtítulos Blu-ray Hoy Mismo",
    "conclusionText": [
      "Convertir subtítulos gráficos Blu-ray PGS (.sup) a texto SubRip (.srt) limpio y universal ya no exige instalar programas pesados ni aprender comandos complejos. Con nuestro convertidor online gratuito, puede aprovechar la tecnología WebAssembly OCR para extraer texto y tiempos en cuestión de segundos.",
      "Disfrute de reproducción directa en Plex y televisores inteligentes, reduzca el peso de sus subtítulos más de un 99% y mantenga total privacidad con procesamiento 100% local. ¡Cargue su archivo .sup para comenzar!"
    ]
  },
  "pt": {
    "introTitle": "Guia Definitivo para Converter Legendas Blu-ray SUP (PGS) para SRT",
    "introSubtitle": "Entenda a arquitetura de legendas em imagem Blu-ray, reconhecimento óptico OCR e como gerar arquivos de texto SubRip perfeitos.",
    "introText": [
      "Discos Blu-ray e arquivos de vídeo em alta definição costumam armazenar legendas no formato .SUP, conhecido tecnicamente como Presentation Graphic Stream (PGS). Ao contrário de formatos de texto como SubRip (.srt) ou WebVTT (.vtt), um arquivo PGS SUP não contém uma única palavra em texto simples. Em vez disso, é uma sequência contínua de imagens bitmap indexadas de 8 bits compactadas, onde cada linha de diálogo é desenhada com fontes, cores e transparências específicas do estúdio.",
      "Por causa dessa estrutura gráfica, conversores comuns que apenas alteram a extensão do arquivo falham completamente. Renomear um arquivo .sup para .srt ou abri-lo em um editor de texto resulta apenas em caracteres binários corrompidos, fazendo com que os reprodutores travem ou ignorem a legenda. Para transformar um arquivo Blu-ray SUP em uma legenda SRT padrão e compatível, as imagens precisam passar por reconhecimento óptico de caracteres (OCR).",
      "Nosso conversor online executa toda a decodificação binária de pacotes PGS diretamente no navegador, combinada com OCR de alta velocidade em WebAssembly. Ele descompacta os bitmaps RLE, aplica as paletas de cores, calcula a sincronia exata em milissegundos com base no relógio PTS de 90 kHz e extrai o texto com máxima precisão, sem enviar nenhum arquivo para servidores externos."
    ],
    "whatIsTitle": "O Que É um Arquivo Blu-ray SUP (PGS)?",
    "whatIsText": [
      "Um arquivo .sup é um fluxo elementar de legendas extraído de discos Blu-ray M2TS ou recipientes Matroska (.mkv). Desenvolvido exclusivamente para mídia óptica HD e 4K, o formato PGS permite que distribuidoras usem tipografias personalizadas com sombras e posições exatas na tela, mantendo a mesma identidade visual em qualquer aparelho.",
      "Na estrutura interna, o arquivo SUP é organizado em conjuntos de exibição (Display Sets). O segmento Presentation Composition Segment (PCS) controla a resolução do vídeo e o momento em que a legenda aparece e desaparece. O Window Definition Segment (WDS) delimita a área gráfica. O Palette Definition Segment (PDS) define as cores YCbCr com transparência alfa, e o Object Definition Segment (ODS) armazena os pixels da imagem compactados via algoritmo RLE de 2 bytes.",
      "O tempo de exibição é coordenado por marcas Presentation Time Stamps (PTS) baseadas em um clock mestre de 90 kHz. Uma fala começa quando chega um PCS com objetos gráficos e permanece na tela até que um PCS de limpeza (com zero objetos) comande o apagamento. A conversão para SRT calcula esses intervalos em milissegundos e os vincula ao texto identificado pelo OCR."
    ],
    "whyConvertTitle": "Por Que Converter Legendas Blu-ray SUP para SubRip (.SRT)?",
    "whyConvertSubtitle": "Conheça os benefícios de compatibilidade, espaço em disco e facilidade de reprodução ao migrar para texto padrão.",
    "whyConvertReasons": [
      {
        "title": "Compatibilidade Universal em Qualquer Dispositivo",
        "description": "Embora programas como VLC e Kodi leiam mapas de bits PGS, Smart TVs, navegadores de celular, Chromecast e consoles não têm suporte nativo a SUP. Converter para SubRip (.srt) garante exibição perfeita em qualquer aparelho sem forçar transcodificação."
      },
      {
        "title": "Redução de Tamanho Superior a 99%",
        "description": "Como arquivos Blu-ray SUP guardam centenas de imagens rasterizadas para cada fala, a legenda de um filme completo ocupa entre 20 MB e 80 MB. O arquivo SRT em texto correspondente consome apenas entre 40 KB e 120 KB, economizando espaço considerável."
      },
      {
        "title": "Pesquisa de Texto Completa e Acessibilidade",
        "description": "Imagens não podem ser indexadas nem lidas por leitores de tela para pessoas com deficiência visual. O formato SRT permite localizar falas instantaneamente, aplicar tradução automática e categorizar acervos de vídeo."
      },
      {
        "title": "Edição Profissional no Premiere, DaVinci e Final Cut",
        "description": "Editores de vídeo consagrados não aceitam arquivos .sup diretamente em suas faixas de legenda. Converter para SRT permite importar legendas, customizar fontes e sincronizar cortes sem complicação."
      }
    ],
    "howToTitle": "Como Converter SUP para SRT Online em 3 Passos",
    "howToSubtitle": "Siga nosso fluxo de trabalho seguro no navegador para extrair legendas de texto de arquivos Blu-ray.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Carregue o Arquivo Blu-ray SUP",
        "description": "Arraste e solte seu arquivo .sup na área indicada ou clique em 'Procurar Arquivos'. Use 'Carregar Exemplo SUP' para experimentar o processo de OCR imediatamente."
      },
      {
        "step": "2",
        "title": "Decodificação PGS e OCR em WebAssembly",
        "description": "O motor no navegador processa a estrutura binária PGS, renderiza as imagens em uma tela interna e transcreve as falas com tempos precisos calculados pelo relógio PTS."
      },
      {
        "step": "3",
        "title": "Revise os Subtítulos e Salve o SRT",
        "description": "Confira o texto reconhecido ao lado da imagem original no editor visual. Faça correções rápidas se desejar e clique em 'Baixar .SRT' ou 'Copiar SRT'."
      }
    ],
    "differenceTitle": "Blu-ray SUP (PGS) vs SubRip (.SRT): Comparativo Completo",
    "differenceSubtitle": "Entenda as diferenças estruturais entre o padrão gráfico do Blu-ray e o formato de texto universal.",
    "differenceTable": [
      {
        "feature": "Formato de Dados",
        "sup": "Fluxo binário de imagens de mapa de bits indexadas em 8 bits (RLE)",
        "srt": "Texto simples legível em codificação UTF-8 com numeração sequencial"
      },
      {
        "feature": "Tamanho Médio por Filme",
        "sup": "20 MB – 80 MB (armazena centenas de imagens gráficas)",
        "srt": "40 KB – 120 KB (dados em texto ultraleves)"
      },
      {
        "feature": "Sistema de Tempo",
        "sup": "Presentation Time Stamps (PTS) baseados em relógio de 90 kHz",
        "srt": "Timecodes padronizados no formato HH:MM:SS,mmm"
      },
      {
        "feature": "Tipografia e Estilo",
        "sup": "Fontes fixas gravadas na imagem com cores e contornos imutáveis",
        "srt": "Renderizado pelo reprodutor (usuário pode trocar tamanho, cor e fonte)"
      },
      {
        "feature": "Suporte em Aparelhos",
        "sup": "Restrito a players de Blu-ray e VLC (causa transcodificação no Plex)",
        "srt": "Universal: Smart TVs, celulares, navegadores, YouTube, Premiere"
      },
      {
        "feature": "Edição e Busca",
        "sup": "Exige softwares pesados de imagem; não permite busca textual",
        "srt": "Editável no Bloco de Notas ou Subtitle Edit; 100% pesquisável"
      }
    ],
    "technicalDeepDiveTitle": "Análise Técnica da Arquitetura Binária PGS do Blu-ray",
    "technicalDeepDiveSubtitle": "Como os pacotes gráficos são decodificados em imagens rasterizadas e convertidos em tempo real.",
    "technicalDeepDiveText": [
      "Cada segmento de um arquivo Blu-ray SUP inicia com um cabeçalho de 13 bytes. Os primeiros dois bytes trazem a assinatura 'PG' (0x50 0x47). Em seguida, há os campos PTS de 32 bits, DTS de 32 bits, um identificador de tipo de segmento e o tamanho total do pacote em 16 bits.",
      "Para exibir uma legenda, o estúdio inclui um Presentation Composition Segment (0x16) com as dimensões da tela (1920x1080 ou 3840x2160) e coordenadas X e Y. O Palette Definition Segment (0x14) fornece a paleta de cores YCbCr com canal de transparência alfa, e o Object Definition Segment (0x15) armazena os pixels comprimidos via RLE.",
      "Nosso decodificador interpreta cada segmento sucessivamente. Ao encontrar um ODS, descompacta os pixels em uma matriz de índices de cores e gera uma imagem com a paleta PDS ativa. Um filtro de binarização com alto contraste isola as letras de sombras e contornos, otimizando a leitura pelo motor OCR.",
      "O cálculo dos timestamps transforma a frequência de 90 kHz em milissegundos: Milissegundos = Math.round(PTS / 90). O início decorre do PCS que projeta o gráfico e o término do PCS de limpeza seguinte, mantendo sincronia labial perfeita."
    ],
    "exampleTitle": "Exemplo de Conversão: De Pacote Gráfico PGS para SubRip SRT",
    "exampleIntro": "Veja como um gráfico de legenda é transformado em texto com sincronização milimétrica.",
    "exampleSupDetails": "Tipo de Segmento: 0x16 (PCS) em PTS 270.000 (00:00:03,000) | Objeto: 1920x1080, Caixa de Texto: 640x72 px\nPaleta: Entrada 1 = Branco Puro (Y:235, Cb:128, Cr:128, Alfa:255)\nImagem: Gráfico exibindo a frase 'Bem-vindo de volta, Comandante.'\nPCS de Limpeza: PTS 540.000 (00:00:06,000)",
    "exampleSrtOutput": "1\n00:00:03,000 --> 00:00:06,000\nBem-vindo de volta, Comandante.\n\n2\n00:00:07,500 --> 00:00:10,200\nA frota já entrou em órbita.",
    "exampleExplanation": "O valor PTS 270.000 dividido por 90 resulta exatamente em 3.000 milissegundos (00:00:03,000). O segmento de limpeza em 540.000 encerra a fala em 6.000 milissegundos (00:00:06,000). O OCR reconhece o texto com acentuação correta e numeração ordenada.",
    "ffmpegTitle": "É Possível Converter SUP para SRT Usando o FFmpeg?",
    "ffmpegSubtitle": "Por que o FFmpeg tradicional não converte legendas SUP para SRT e qual a solução ideal.",
    "ffmpegCommand": "# O FFmpeg comum falha por não ter módulo de OCR nativo:\nffmpeg -i entrada.sup saida.srt\n# Erro: 'Subtitle encoding not supported: bitmap to text conversion requires OCR'\n\n# Fluxo antigo no computador (exige Java e programas externos):\njava -jar BDSup2Sub.jar entrada.sup -o saida.sub\n# Depois abrir o Subtitle Edit para rodar o Tesseract OCR manualmente",
    "ffmpegExplanation": [
      "Uma dúvida frequente é se o FFmpeg pode transformar SUP em SRT diretamente. Ao executar `ffmpeg -i entrada.sup saida.srt`, o processo falha informando que codecs de imagem não podem ser copiados para texto. O FFmpeg atua na multiplexação e transcodificação de áudio e vídeo, mas não possui OCR integrado por padrão.",
      "O método tradicional exigia usar softwares pesados como BDSup2Sub e Subtitle Edit, necessitando de Java instalado e gerenciamento manual de dicionários.",
      "Nossa ferramenta elimina downloads e configurações: ela roda o Tesseract OCR em WebAssembly dentro do seu navegador com velocidade e total sigilo de dados."
    ],
    "useCasesTitle": "Principais Aplicações da Conversão de SUP para SRT",
    "useCasesSubtitle": "Situações práticas onde migrar legendas Blu-ray para SubRip gera ganhos imediatos.",
    "useCasesList": [
      {
        "title": "Eliminar Transcodificação no Plex e Jellyfin",
        "description": "Ao assistir a filmes com legendas PGS SUP na Apple TV ou Smart TVs, o servidor precisa transcodificar o vídeo em tempo real para desenhar as imagens. Mudar para SRT habilita a reprodução direta e reduz o consumo de CPU a zero."
      },
      {
        "title": "Tradução Automática e Acessibilidade",
        "description": "Ferramentas de tradução não compreendem arquivos de imagem. O texto SRT limpo permite traduzir roteiros para qualquer idioma e possibilita a leitura por pessoas com deficiência visual."
      },
      {
        "title": "Criação de Clipes para Redes Sociais",
        "description": "Criadores que usam trechos de filmes no CapCut ou Premiere precisam de legendas editáveis para mudar fontes e animar palavras com nitidez vetorial."
      },
      {
        "title": "Economia de Armazenamento e Preservação Digital",
        "description": "Substituir faixas de 70 MB por arquivos SRT de 60 KB economiza gigabytes em acervos de filmes e assegura compatibilidade com futuras plataformas."
      }
    ],
    "troubleshootTitle": "Resolução de Dúvidas na Conversão de SUP para SRT",
    "troubleshootSubtitle": "Dicas para contornar confusões de caracteres, palavras em itálico e problemas de formatação.",
    "troubleshootTips": [
      {
        "issue": "Confusão entre Caracteres Parecidos ('I', 'l', '1' ou 'rn' com 'm')",
        "cause": "Fontes muito finas, itálico acentuado ou sombras com pouco contraste podem fazer com que caracteres vizinhos pareçam grudados para o algoritmo de OCR.",
        "solution": "Aplicamos filtros de contraste reforçado antes da análise. Além disso, nosso editor visual permite checar a imagem original e corrigir qualquer letra com facilidade."
      },
      {
        "issue": "Falta de Pontuação ou Travessões Iniciais",
        "cause": "Algumas edições em Blu-ray posicionam aspas ou travessões muito próximos da borda da tela, podendo sofrer corte se a janela delimitadora for estreita.",
        "solution": "Mantenha ativada a opção 'Preservar Quebras de Linha'. Nosso leitor calcula a união completa de todos os objetos gráficos para não cortar sinais nos cantos."
      },
      {
        "issue": "Alerta de 'Cabeçalho Inválido (ausência de PG)'",
        "cause": "O arquivo selecionado não é um fluxo Blu-ray PGS SUP autêntico. Pode ser um arquivo DVD VobSub (.sub) ou um arquivo corrompido.",
        "solution": "Confirme se o arquivo foi extraído de Blu-ray. Se for originário de DVD comum (VobSub .sub com arquivo .idx correspondente), use nosso conversor específico SUB para SRT."
      },
      {
        "issue": "Legenda Fora de Sincronia com o Vídeo",
        "cause": "O vídeo pode estar em outra taxa de quadros (23,976 FPS vs 25 FPS PAL) ou teve introduções de estúdio cortadas sem atualizar o offset.",
        "solution": "Nosso sistema calcula os tempos diretamente do relógio original do Blu-ray. Se o vídeo foi reeditado, você pode aplicar o ajuste global de tempo com precisão milissegundo a milissegundo."
      }
    ],
    "conclusionTitle": "Modernize suas Legendas Blu-ray Agora Mesmo",
    "conclusionText": [
      "Transformar legendas em imagem Blu-ray PGS (.sup) em arquivos SubRip (.srt) leves e universais não exige mais softwares complicados nem comandos técnicos no terminal. Com nosso conversor gratuito online, você conta com o poder do WebAssembly OCR para extrair textos e tempos com precisão em instantes.",
      "Aproveite a reprodução direta no Plex, economize mais de 99% de espaço e mantenha total privacidade com processamento local no seu navegador. Arraste seu arquivo .sup para começar!"
    ]
  },
  "fr": {
    "introTitle": "Le Guide Complet pour Convertir les Sous-Titres Blu-ray SUP (PGS) en SRT",
    "introSubtitle": "Comprenez la structure des sous-titres graphiques Blu-ray, l'extraction par reconnaissance optique (OCR) et la création de fichiers SubRip parfaits.",
    "introText": [
      "Les disques Blu-ray et les copies vidéo haute définition utilisent généralement le format .SUP pour leurs sous-titres, techniquement appelé Presentation Graphic Stream (PGS). Contrairement aux formats de texte brut comme SubRip (.srt) ou WebVTT (.vtt), un fichier PGS SUP ne contient aucun caractère de texte direct. Il s'agit en réalité d'une série d'images matricielles indexées en 8 bits compressées, où chaque ligne de dialogue est pré-rendue sous forme de graphique avec des polices de caractères, couleurs et bordures transparentes propres au studio.",
      "En raison de cette structure sous forme d'images, les convertisseurs classiques qui cherchent du texte brut ou changent simplement l'extension de fichier échouent totalement. Renommer un fichier .sup en .srt ou l'ouvrir avec un éditeur de texte ne produit qu'une série de symboles binaires illisibles, provoquant le blocage des lecteurs vidéo. Pour transformer un fichier Blu-ray SUP en sous-titre SRT standard et universellement compatible, les graphismes doivent faire l'objet d'une reconnaissance optique de caractères (OCR).",
      "Notre convertisseur en ligne combine l'analyse binaire directe des paquets PGS dans le navigateur avec un moteur OCR ultra-performant sous WebAssembly. Il décompresse les images RLE, applique les palettes de couleurs intégrées, calcule les horodatages précis à la milliseconde près à partir de l'horloge PTS à 90 kHz et extrait le dialogue dans des sous-titres SubRip éditables, sans aucun envoi vers un serveur distant."
    ],
    "whatIsTitle": "Qu'est-ce qu'un Fichier Blu-ray SUP (PGS) ?",
    "whatIsText": [
      "Un fichier .sup est un flux de sous-titres extrait directement d'un conteneur Blu-ray M2TS ou d'un fichier Matroska (.mkv). Conçu spécifiquement pour les supports optiques haute définition, le format PGS permet aux éditeurs de films d'utiliser une typographie soignée avec des ombres portées et des coordonnées d'affichage rigoureuses, garantissant un rendu identique sur tous les lecteurs Blu-ray.",
      "Sur le plan interne, un fichier SUP est structuré en ensembles d'affichage (Display Sets). Le segment Presentation Composition Segment (PCS) gère la résolution d'écran et détermine le moment où le sous-titre apparaît ou s'efface. Le Window Definition Segment (WDS) délimite les fenêtres de positionnement. Le Palette Definition Segment (PDS) définit les couleurs YCbCr avec transparence alpha, et l'Object Definition Segment (ODS) contient les pixels de l'image compressés via un algorithme RLE sur 2 octets.",
      "La synchronisation temporelle repose sur une horloge de référence cadencée à 90 kHz (Presentation Time Stamps - PTS). Une réplique commence lorsqu'un PCS comportant des objets graphiques arrive, et persiste jusqu'à ce qu'un PCS d'effacement (sans aucun objet) ordonne sa suppression. La conversion en SRT convertit ces cycles d'horloge en millisecondes et les associe au texte transcrit par OCR."
    ],
    "whyConvertTitle": "Pourquoi Convertir des Sous-Titres Blu-ray SUP en SubRip (.SRT) ?",
    "whyConvertSubtitle": "Profitez d'une compatibilité universelle, d'une réduction drastique de poids et d'une fluidité de lecture inégalée.",
    "whyConvertReasons": [
      {
        "title": "Compatibilité Universelle avec Tous les Écrans",
        "description": "Alors que VLC ou Kodi prennent en charge les images PGS, la plupart des téléviseurs connectés, smartphones, boîtiers Chromecast et navigateurs web ne gèrent pas le format SUP. Passer en SubRip (.srt) assure une lecture immédiate sur tous les appareils sans transcodage."
      },
      {
        "title": "Réduction de Taille Supérieure à 99%",
        "description": "Les fichiers SUP de Blu-ray stockent des centaines d'images pour chaque ligne de dialogue, atteignant un volume de 20 Mo à 80 Mo par film. Le fichier SRT équivalent pèse seulement entre 40 Ko et 120 Ko, libérant un espace de stockage précieux."
      },
      {
        "title": "Recherche Intégrale et Accessibilité",
        "description": "Les fichiers graphiques ne peuvent être indexés ni interprétés par les lecteurs d'écran pour personnes malvoyantes. Le format SRT rend vos sous-titres entièrement consultables par mot-clé et compatibles avec la traduction automatique."
      },
      {
        "title": "Montage Simplifié dans Premiere, DaVinci et Final Cut",
        "description": "Les principaux logiciels de montage vidéo n'acceptent pas les flux .sup bruts sur leurs pistes de sous-titres. La conversion en SRT permet d'importer le texte, de modifier la mise en page et d'ajuster le calage sans aucune contrainte."
      }
    ],
    "howToTitle": "Comment Convertir un Fichier SUP en SRT en 3 Étapes",
    "howToSubtitle": "Suivez notre méthode simple et sécurisée dans votre navigateur pour convertir vos sous-titres Blu-ray.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Importez le Fichier Blu-ray SUP",
        "description": "Glissez-déposez votre fichier .sup dans la zone dédiée ou cliquez sur 'Parcourir les fichiers'. Vous pouvez aussi cliquer sur 'Charger un échantillon SUP' pour tester le moteur OCR instantanément."
      },
      {
        "step": "2",
        "title": "Décodage Binaire et Reconnaissance OCR",
        "description": "Le convertisseur analyse les segments PGS, reconstruit chaque image sur un canvas virtuel et exécute l'OCR en WebAssembly pour transcrire fidèlement le dialogue et caler les temps PTS."
      },
      {
        "step": "3",
        "title": "Vérifiez les Sous-Titres et Téléchargez le SRT",
        "description": "Visualisez le texte transcrit en face de la vignette graphique originale dans l'éditeur interactif. Corrigez d'éventuels détails puis cliquez sur 'Télécharger .SRT' ou 'Copier SRT'."
      }
    ],
    "differenceTitle": "Blu-ray SUP (PGS) vs SubRip (.SRT) : Tableau Comparatif",
    "differenceSubtitle": "Examinez les caractéristiques techniques du format d'images Blu-ray et de la norme universelle de sous-titres texte.",
    "differenceTable": [
      {
        "feature": "Format de Données",
        "sup": "Flux binaire d'images bitmap 8 bits indexées compressées en RLE",
        "srt": "Texte brut UTF-8 structuré avec numérotation séquentielle"
      },
      {
        "feature": "Taille Moyenne par Film",
        "sup": "20 Mo – 80 Mo (contient des centaines d'images graphiques)",
        "srt": "40 Ko – 120 Ko (fichier texte ultra-léger)"
      },
      {
        "feature": "Horloge de Synchronisation",
        "sup": "Presentation Time Stamps (PTS) sur horloge 90 kHz",
        "srt": "Codes temporels standardisés au format HH:MM:SS,mmm"
      },
      {
        "feature": "Typographie et Habillage",
        "sup": "Polices et couleurs gravées dans l'image avec coordonnées fixes",
        "srt": "Affiché dynamiquement selon les réglages définis par l'utilisateur"
      },
      {
        "feature": "Prise en Charge Matérielle",
        "sup": "Lecteurs Blu-ray et VLC (entraîne un transcodage lourd sous Plex)",
        "srt": "Universelle : Smart TV, iPhone, Android, YouTube, Première Pro"
      },
      {
        "feature": "Édition et Recherche",
        "sup": "Nécessite des logiciels graphiques complexes ; non recherchable",
        "srt": "Modifiable avec le Bloc-notes ou Subtitle Edit ; 100% indexable"
      }
    ],
    "technicalDeepDiveTitle": "Au Cœur de la Structure Binaire PGS du Blu-ray",
    "technicalDeepDiveSubtitle": "Détails techniques sur la décompression des paquets graphiques et le calcul des horodatages.",
    "technicalDeepDiveText": [
      "Chaque segment d'un fichier Blu-ray SUP s'ouvre par un en-tête de 13 octets. Les deux premiers octets correspondent aux lettres 'PG' (0x50 0x47). Suivent les champs PTS sur 32 bits, DTS sur 32 bits, un octet indiquant le type de paquet et deux octets codant la taille totale.",
      "Pour afficher une réplique, le flux intègre un Presentation Composition Segment (0x16) définissant la géométrie d'affichage (1920x1080 ou 3840x2160) et les coordonnées de position. Le Palette Definition Segment (0x14) contient la table de couleurs YCbCr avec transparence alpha, et l'Object Definition Segment (0x15) stocke les pixels sous compression RLE.",
      "Notre parseur traite chaque segment à la volée. Lors de la lecture d'un ODS, les données RLE sont dépliées en une matrice d'indices de palette pour générer une image fidèle. Un algorithme de contraste accentué isole les caractères des bordures d'adoucissement, garantissant une netteté idéale pour l'OCR.",
      "La conversion temporelle traduit les unités à 90 kHz en millisecondes : Millisecondes = Math.round(PTS / 90). Le début correspond au PCS d'affichage et la fin au PCS de nettoyage, assurant une synchronisation labiale absolue."
    ],
    "exampleTitle": "Exemple de Conversion : Du Paquet Binaire PGS au Format SubRip SRT",
    "exampleIntro": "Observez comment un graphique Blu-ray est transcrit en réplique SRT avec un minutage exact.",
    "exampleSupDetails": "Segment : 0x16 (PCS) à PTS 270 000 (00:00:03,000) | Image : 1920x1080, Cadre : 640x72 px\nPalette : Entrée 1 = Blanc pur (Y:235, Cb:128, Cr:128, Alpha:255)\nImage décodée : Graphique portant le texte 'Ravi de vous revoir, Commandant.'\nPCS d'effacement : à PTS 540 000 (00:00:06,000)",
    "exampleSrtOutput": "1\n00:00:03,000 --> 00:00:06,000\nRavi de vous revoir, Commandant.\n\n2\n00:00:07,500 --> 00:00:10,200\nLa flotte vient d'entrer en orbite.",
    "exampleExplanation": "La valeur PTS 270 000 divisée par 90 donne rigoureusement 3 000 millisecondes (00:00:03,000). Le segment de fermeture à 540 000 arrête la réplique à 6 000 millisecondes (00:00:06,000). L'OCR transcrit les caractères avec les accents et la ponctuation d'origine.",
    "ffmpegTitle": "Peut-on Convertir du SUP en SRT avec FFmpeg ?",
    "ffmpegSubtitle": "Pourquoi la commande FFmpeg standard échoue avec les fichiers Blu-ray SUP et comment notre outil y répond.",
    "ffmpegCommand": "# La commande FFmpeg échoue car elle ne possède aucun moteur OCR intégré :\nffmpeg -i entree.sup sortie.srt\n# Message d'erreur : 'Subtitle encoding not supported: bitmap to text conversion requires OCR'\n\n# Ancienne méthode sur ordinateur (nécessite Java et des outils lourds) :\njava -jar BDSup2Sub.jar entree.sup -o sortie.sub\n# Puis ouvrir Subtitle Edit pour faire tourner Tesseract OCR manuellement",
    "ffmpegExplanation": [
      "Une erreur courante consiste à vouloir convertir du SUP en SRT avec FFmpeg via `ffmpeg -i entree.sup sortie.srt`. FFmpeg s'arrête systématiquement avec un message d'erreur stipulant qu'un flux de sous-titres bitmap ne peut pas être converti en texte brut. FFmpeg réencode et multiplexe l'audio et la vidéo, mais n'intègre pas d'OCR autonome.",
      "L'ancienne méthode obligeait à installer des applications telles que BDSup2Sub et Subtitle Edit avec des environnements Java et des dictionnaires à gérer localement.",
      "Notre outil web supprime toute installation : il exécute Tesseract OCR en WebAssembly au cœur de votre navigateur, assurant un traitement instantané et une confidentialité absolue."
    ],
    "useCasesTitle": "Applications Pratiques de la Conversion SUP vers SRT",
    "useCasesSubtitle": "Des cas d'usage concrets où convertir vos sous-titres Blu-ray en SubRip simplifie tout.",
    "useCasesList": [
      {
        "title": "Éviter le Transcodage sur Plex et Emby",
        "description": "Lors de la diffusion de films contenant des sous-titres PGS SUP vers une Apple TV ou une Smart TV, le serveur doit souvent réencoder toute la vidéo pour incruster les images. Passer en SRT permet une lecture directe immédiate et libère la puissance du processeur."
      },
      {
        "title": "Traduction Multilingue et Accessibilité",
        "description": "Les logiciels de traduction automatique ne peuvent pas lire de simples images. Disposer de texte SRT propre permet de traduire les dialogues dans toutes les langues et de rendre les médias accessibles aux malvoyants."
      },
      {
        "title": "Création de Vidéos pour les Réseaux Sociaux",
        "description": "Les vidéastes extrayant des extraits de films pour des critiques ou bandes-annonces ont besoin de sous-titres éditables pour adapter la typographie et animer le texte sous Premiere ou CapCut."
      },
      {
        "title": "Archivage Numérique et Gain de Place",
        "description": "Remplacer des pistes PGS de 70 Mo par des fichiers SRT de 60 Ko au sein de collections MKV permet d'économiser un espace disque considérable et garantit la compatibilité future."
      }
    ],
    "troubleshootTitle": "Dépannage des Erreurs lors de la Conversion SUP en SRT",
    "troubleshootSubtitle": "Conseils pratiques pour résoudre les ambiguïtés de caractères, les italiques et les calages complexes.",
    "troubleshootTips": [
      {
        "issue": "Confusion entre Caractères Voisins ('I', 'l', '1' ou 'rn' face à 'm')",
        "cause": "Des polices avec empattements fins ou des italiques très inclinés peuvent amener l'algorithme d'OCR à confondre des caractères dont les traits se rejoignent.",
        "solution": "Notre outil binarise l'image avec un seuil de contraste renforcé avant l'analyse. Notre éditeur visuel vous permet en outre de comparer chaque réplique avec l'image originale pour corriger les mots douteux en un clic."
      },
      {
        "issue": "Absence de Tirets de Dialogue ou de Guillemets",
        "cause": "Certaines éditions Blu-ray positionnent les guillemets ou les tirets très près du bord du cadre, risquant d'être rognés si la fenêtre de délimitation est serrée.",
        "solution": "Vérifiez que l'option 'Conserver les Sauts de Ligne' est bien cochée. Notre système englobe l'ensemble des éléments ODS pour ne tronquer aucun symbole de ponctuation."
      },
      {
        "issue": "Message 'En-tête invalide (identifiant PG manquant)'",
        "cause": "Le fichier importé n'est pas un flux Blu-ray PGS SUP authentique. Il peut s'agir d'un fichier DVD VobSub (.sub) ou d'un fichier endommagé.",
        "solution": "Contrôlez l'origine de votre fichier. Si votre fichier provient d'un DVD classique (VobSub .sub accompagné d'un fichier .idx), utilisez notre convertisseur dédié SUB en SRT."
      },
      {
        "issue": "Sous-Titres Décalés par Rapport à la Vidéo",
        "cause": "La vidéo a pu être réencodée à une cadence différente (ex. 23,976 i/s contre 25 i/s en PAL) ou des génériques de début ont été coupés.",
        "solution": "Notre moteur extrait scrupuleusement les valeurs PTS de l'horloge d'origine. Si votre vidéo a été recoupée, vous pouvez appliquer un décalage global en toute confiance."
      }
    ],
    "conclusionTitle": "Modernisez vos Sous-Titres Blu-ray Dès Aujourd'hui",
    "conclusionText": [
      "Convertir les sous-titres graphiques Blu-ray PGS (.sup) en fichiers texte SubRip (.srt) universels et légers ne réclame plus de logiciels compliqués ni de commandes obscures dans un terminal. Avec notre convertisseur gratuit en ligne, vous bénéficiez de toute la puissance de l'OCR WebAssembly pour extraire dialogues et codes temporels en quelques secondes.",
      "Profitez d'une lecture directe sur vos téléviseurs et smartphones, allégez vos fichiers de plus de 99 % et conservez une confidentialité totale grâce à un traitement 100 % local. Importez votre fichier .sup dès maintenant pour démarrer !"
    ]
  },
  "de": {
    "introTitle": "Der ultimative Leitfaden zur Konvertierung von Blu-ray SUP (PGS) in SRT",
    "introSubtitle": "Verstehen Sie die Bilduntertitel-Architektur von Blu-rays, optische Zeichenerkennung (OCR) und wie Sie saubere SubRip-Textdateien erstellen.",
    "introText": [
      "Blu-ray-Discs und hochauflösende Film-Rips speichern Untertitel überwiegend im .SUP-Dateiformat, fachlich als Presentation Graphic Stream (PGS) bezeichnet. Im Gegensatz zu reinen Textuntertiteln wie SubRip (.srt) oder WebVTT (.vtt) enthält eine PGS-SUP-Datei kein einziges Zeichen Klartext. Stattdessen handelt es sich um einen Datenstrom aus komprimierten 8-Bit-indizierten Bitmap-Bildern, bei denen jede Dialogzeile als eigenständige Grafik inklusive studioeigener Schriftarten, Farbpaletten und Transparenzen gerendert ist.",
      "Aufgrund dieser bildbasierten Struktur scheitern herkömmliche Untertitel-Konverter, die versuchen, Textdateien auszulesen oder einfach die Dateiendung umzubenennen. Das Umbenennen einer .sup-Datei in .srt oder das Öffnen in einem Texteditor führt lediglich zu unleserlichem Binärmüll, wodurch Mediaplayer abstürzen oder die Untertitelspur gänzlich ignorieren. Um eine Blu-ray-SUP-Datei in ein universell lesbares SRT-Format zu überführen, müssen die Bilddaten mittels optischer Zeichenerkennung (OCR) analysiert werden.",
      "Unser browserbasierter SUP-in-SRT-Konverter vereint ein vollständiges binäres PGS-Parsing im Webbrowser mit moderner WebAssembly-OCR. Er dekomprimiert die RLE-codierten Bitmaps, wendet die integrierten Farbpaletten an, errechnet millisekundengenaue Zeitstempel aus dem 90-kHz-PTS-Takt und überführt gesprochene Dialoge in saubere, editierbare SubRip-Untertitel – ganz ohne Dateiuploads auf fremde Server."
    ],
    "whatIsTitle": "Was ist eine Blu-ray SUP (PGS) Datei?",
    "whatIsText": [
      "Eine .sup-Datei ist ein elementarer Untertitel-Stream, der direkt aus einem Blu-ray-M2TS-Container oder einer Matroska-Videodatei (.mkv) extrahiert wird. Speziell für hochauflösende optische Medien entwickelt, ermöglicht PGS Filmstudios die Darstellung eleganter Typografie mit exakten Schatten und festgelegten Bildschirmkoordinaten, sodass Untertitel auf jedem Blu-ray-Player identisch dargestellt werden.",
      "Intern ist eine SUP-Datei in sogenannte Display Sets gegliedert. Das Presentation Composition Segment (PCS) steuert Bildschirmauflösung und Einblendzeiten. Das Window Definition Segment (WDS) definiert Anzeigebereiche. Das Palette Definition Segment (PDS) hält die YCbCr-Farbtabelle mit Alpha-Transparenzen bereit, und das Object Definition Segment (ODS) speichert die eigentlichen Bildpixel, komprimiert durch ein spezielles 2-Byte-Run-Length-Encoding (RLE).",
      "Die zeitliche Steuerung erfolgt über 90-kHz-Presentation Time Stamps (PTS). Eine Einblendung startet mit dem Eintreffen eines PCS mit Bildobjekten und bleibt sichtbar, bis ein nachfolgendes Lösch-PCS (mit 0 Objekten) die Anzeige leert. Die Konvertierung in SRT rechnet diese 90-kHz-Werte in Millisekunden um und verknüpft sie mit den OCR-Textergebnissen."
    ],
    "whyConvertTitle": "Warum Blu-ray SUP in SubRip (.SRT) umwandeln?",
    "whyConvertSubtitle": "Erfahren Sie, welche Vorteile universelle Kompatibilität, enorme Speicherersparnis und Textsuchbarkeit bieten.",
    "whyConvertReasons": [
      {
        "title": "Universelle Wiedergabe auf allen Endgeräten",
        "description": "Während Spezialplayer wie VLC oder Kodi PGS-Bitmaps darstellen können, unterstützen viele Smart-TVs, mobile Browser, Chromecast und Konsolen keine SUP-Dateien. Die Umwandlung in SubRip (.srt) garantiert eine fehlerfreie Wiedergabe auf jedem Gerät ohne rechenintensives Transcodieren."
      },
      {
        "title": "Über 99% geringere Dateigröße",
        "description": "Da Blu-ray-SUP-Dateien hunderte unkomprimierte oder leicht RLE-komprimierte Grafiken für jeden Filmdialog enthalten, wiegt eine Untertitelspur oft zwischen 20 MB und 80 MB. Die entsprechende SRT-Textdatei benötigt lediglich 40 KB bis 120 KB Speicherplatz."
      },
      {
        "title": "Vollständige Textsuche und Barrierefreiheit",
        "description": "Bilddateien können weder durchsucht noch von Screenreadern für sehbehinderte Menschen vorgelesen werden. SRT-Dateien machen Filmdialoge durchsuchbar, automatisierbar und ermöglichen maschinelle Übersetzungen in jede Sprache."
      },
      {
        "title": "Mühelose Weiterverarbeitung im Videoschnitt",
        "description": "Professionelle Schnittprogramme wie Adobe Premiere Pro, DaVinci Resolve und Final Cut Pro akzeptieren keine rohen .sup-Grafikdateien auf ihren Untertitelspuren. Das SRT-Format erlaubt sofortigen Import und flexible Schriftanpassungen."
      }
    ],
    "howToTitle": "So konvertieren Sie SUP in 3 einfachen Schritten in SRT",
    "howToSubtitle": "Nutzen Sie unseren sicheren Browser-Workflow, um Textuntertitel aus Blu-ray-PGS-Dateien zu extrahieren.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Blu-ray SUP-Datei laden",
        "description": "Ziehen Sie Ihre .sup-Datei per Drag & Drop in den Bereich oder wählen Sie sie über 'Dateien durchsuchen' aus. Mit 'Muster-SUP laden' können Sie die OCR-Funktion sofort ausprobieren."
      },
      {
        "step": "2",
        "title": "Binäre Dekodierung und WebAssembly-OCR",
        "description": "Unser System zerlegt die PGS-Segmente, rekonstruiert die Bitmaps im Hintergrund und führt die Texterkennung durch, um Dialoge präzise mit dem 90-kHz-PTS-Takt abzugleichen."
      },
      {
        "step": "3",
        "title": "Untertitel prüfen und SRT exportieren",
        "description": "Vergleichen Sie den erkannten Text direkt neben der Originalgrafik im visuellen Editor. Nehmen Sie bei Bedarf Korrekturen vor und klicken Sie auf 'SRT herunterladen' oder 'SRT kopieren'."
      }
    ],
    "differenceTitle": "Blu-ray SUP (PGS) vs. SubRip (.SRT): Formatvergleich",
    "differenceSubtitle": "Gegenüberstellung der technischen Merkmale von bildbasierten und textbasierten Untertitelstandards.",
    "differenceTable": [
      {
        "feature": "Datenspeicherformat",
        "sup": "Binärer Stream aus RLE-komprimierten 8-Bit-Grafikbildern",
        "srt": "Klar lesbarer UTF-8-Reinstext mit fortlaufender Nummerierung"
      },
      {
        "feature": "Durchschnittliche Dateigröße pro Film",
        "sup": "20 MB – 80 MB (enthält hunderte Rasterbilder)",
        "srt": "40 KB – 120 KB (extrem kompakte Textdaten)"
      },
      {
        "feature": "Zeitstempel-Basis",
        "sup": "Presentation Time Stamps (PTS) auf 90-kHz-Takt",
        "srt": "Standardisierte Uhrzeit-Timecodes im Format HH:MM:SS,mmm"
      },
      {
        "feature": "Schriftbild und Gestaltung",
        "sup": "Feste Studioschriften, unveränderbare Farben und Positionen",
        "srt": "Dynamisch vom Mediaplayer gerendert (Schriftgröße und Farbe wählbar)"
      },
      {
        "feature": "Geräteunterstützung",
        "sup": "Blu-ray-Player und VLC (erzwingt in Plex oft Videotranscodierung)",
        "srt": "Universell: Smart-TVs, Mobilgeräte, Browser, YouTube, Premiere Pro"
      },
      {
        "feature": "Bearbeitbarkeit und Suche",
        "sup": "Erfordert Spezialsoftware; keine Textsuche möglich",
        "srt": "In jedem Editor oder Subtitle Edit editierbar; 100% durchsuchbar"
      }
    ],
    "technicalDeepDiveTitle": "Einblick in die binäre PGS-Architektur von Blu-rays",
    "technicalDeepDiveSubtitle": "Detaillierte Erläuterung der Paketdekodierung und exakten Millisekunden-Berechnung.",
    "technicalDeepDiveText": [
      "Jedes Segment einer Blu-ray-SUP-Datei beginnt mit einem 13 Byte langen Header. Die ersten beiden Bytes tragen die magische Kennung 'PG' (0x50 0x47). Darauf folgen 32-Bit-PTS- und 32-Bit-DTS-Werte, die Segmenttyp-Kennung und eine 16-Bit-Längenangabe.",
      "Zur Darstellung eines Dialogs erzeugt das Blu-ray-Authoring ein Presentation Composition Segment (0x16) mit Bildschirmauflösung (1920x1080 oder 3840x2160) und X/Y-Koordinaten. Das Palette Definition Segment (0x14) liefert die YCbCr-Farben samt Transparenzwerten, während das Object Definition Segment (0x15) die RLE-Pixeldaten enthält.",
      "Unser Parser verarbeitet diese Segmente sequenziell. Gefundene ODS-Segmente werden in eine Farbmatrix entpackt und anhand der PDS-Palette zu Bilddaten zusammengesetzt. Ein Kontrastfilter trennt Schriftzeichen sauber von Schatten und Kantenglättungen, um eine optimale OCR-Erkennung zu gewährleisten.",
      "Die Umrechnung der PTS-Werte erfolgt nach der Formel: Millisekunden = Math.round(PTS / 90). Der Beginn bindet sich an das darstellende PCS und das Ende an das nachfolgende Lösch-PCS, wodurch Bild und Ton absolut synchron bleiben."
    ],
    "exampleTitle": "Konvertierungsbeispiel: Vom PGS-Grafikpaket zu SubRip SRT",
    "exampleIntro": "Sehen Sie, wie eine Blu-ray-Untertitelgrafik in formatierten Text mit exakter Zeitmessung umgewandelt wird.",
    "exampleSupDetails": "Segment: 0x16 (PCS) bei PTS 270.000 (00:00:03,000) | Grafikgröße: 1920x1080, Textbereich: 640x72 px\nPalette: Index 1 = Weiß (Y:235, Cb:128, Cr:128, Alpha:255)\nDekodiertes Bild: Grafik mit dem Text 'Willkommen zurück, Commander.'\nLösch-PCS: bei PTS 540.000 (00:00:06,000)",
    "exampleSrtOutput": "1\n00:00:03,000 --> 00:00:06,000\nWillkommen zurück, Commander.\n\n2\n00:00:07,500 --> 00:00:10,200\nDie Flotte hat den Orbit erreicht.",
    "exampleExplanation": "PTS 270.000 geteilt durch 90 ergibt exakt 3.000 Millisekunden (00:00:03,000). Das Löschsegment bei PTS 540.000 schließt die Einblendung bei 6.000 Millisekunden (00:00:06,000) ab. Die OCR-Engine überträgt die Grafik in sauberen Text mit fortlaufender Nummerierung.",
    "ffmpegTitle": "Kann man SUP mit FFmpeg in SRT konvertieren?",
    "ffmpegSubtitle": "Warum reguläre FFmpeg-Befehle bei Blu-ray-SUP-Dateien scheitern und wie unser Tool hilft.",
    "ffmpegCommand": "# Regulärer FFmpeg-Befehl bricht ab, da kein OCR-Modul integriert ist:\nffmpeg -i eingabe.sup ausgabe.srt\n# Fehlermeldung: 'Subtitle encoding not supported: bitmap to text conversion requires OCR'\n\n# Bisheriger Desktop-Workflow (benötigt Java und mehrere Programme):\njava -jar BDSup2Sub.jar eingabe.sup -o ausgabe.sub\n# Anschließend in Subtitle Edit öffnen und Tesseract-OCR manuell ausführen",
    "ffmpegExplanation": [
      "Ein weit verbreiteter Irrtum ist der Versuch, SUP-Dateien über `ffmpeg -i eingabe.sup ausgabe.srt` umzuwandeln. FFmpeg bricht mit einem Fehler ab, weil Bitmap-Untertitel nicht ohne OCR in Textformate kopiert werden können. FFmpeg dient dem Multiplexen und Recodieren von Video und Audio, besitzt jedoch standardmäßig keine eigene Texterkennung.",
      "Früher mussten Nutzer Softwarepakete wie BDSup2Sub und Subtitle Edit mitsamt Java-Laufzeitumgebungen und Wörterbüchern lokal installieren.",
      "Unser Web-Tool macht Schluss mit Installationen: Es führt Tesseract-OCR via WebAssembly direkt in Ihrem Browser aus – blitzschnell, zuverlässig und mit vollständiger Privatsphäre."
    ],
    "useCasesTitle": "Typische Einsatzbereiche für die SUP-in-SRT-Konvertierung",
    "useCasesSubtitle": "Praxisbeispiele, in denen die Umstellung auf SubRip-Untertitel sofortige Vorteile bringt.",
    "useCasesList": [
      {
        "title": "Verhindern von Transcodierung in Plex und Emby",
        "description": "Beim Abspielen von Filmen mit PGS-SUP-Untertiteln auf Apple TV oder Smart-TVs müssen Medienserver das Video oft komplett transcodieren, um die Grafikbilder ins Video einzubrennen. SRT ermöglicht direktes Abspielen und entlastet die CPU vollständig."
      },
      {
        "title": "Automatische Übersetzung und Barrierefreiheit",
        "description": "Übersetzungssoftware kann mit Bilddateien nicht arbeiten. Das SRT-Format erlaubt die Übersetzung von Filmen in fremde Sprachen und ermöglicht Bildschirmlesegeräten das Vorlesen."
      },
      {
        "title": "Erstellung von Social-Media-Clips",
        "description": "Content Creator, die Szenen aus Blu-rays für Rezensionen oder Clips schneiden, benötigen anpassbare Untertitel, um Schriftarten in Programmen wie Premiere oder CapCut frei zu animieren."
      },
      {
        "title": "Speicherplatzoptimierung digitaler Mediensammlungen",
        "description": "Das Ersetzen von 70-MB-PGS-Spuren durch 50-KB-SRT-Dateien in MKV-Bibliotheken spart gigabyteweise Speicher und sichert dauerhafte Kompatibilität für die Zukunft."
      }
    ],
    "troubleshootTitle": "Häufige Fehler bei der SUP-in-SRT-Konvertierung beheben",
    "troubleshootSubtitle": "Praktische Tipps bei Zeichenverwechslungen, kursiven Schriften und Zeilenumbrüchen.",
    "troubleshootTips": [
      {
        "issue": "Verwechslung ähnlicher Zeichen ('I', 'l', '1' oder 'rn' mit 'm')",
        "cause": "Serifenschriften, starke Schrägstellung (Kursiv) oder geringer Farbkontrast können dazu führen, dass Zeichen für den OCR-Algorithmus verschwimmen.",
        "solution": "Wir binarisieren jedes Bild mit hohem Kontrast vor der Texterkennung. Zudem zeigt unser visueller Editor das Originalbild neben dem Textfeld, sodass Sie Abweichungen in Sekunden korrigieren können."
      },
      {
        "issue": "Fehlende Gedankenstriche oder Anführungszeichen",
        "cause": "Einige Blu-ray-Fassungen platzieren Anführungszeichen oder Spiegelstriche nah am Rand, wo sie bei engen Begrenzungsrahmen abgeschnitten werden könnten.",
        "solution": "Aktivieren Sie die Option 'Mehrzeiliges Layout beibehalten'. Unser Parser fasst alle ODS-Objekte zusammen, damit keine Satzzeichen am Rand verloren gehen."
      },
      {
        "issue": "Fehlermeldung 'Ungültiger Header (PG fehlt)'",
        "cause": "Die hochgeladene Datei ist keine echte Blu-ray-PGS-SUP-Datei. Möglicherweise handelt es sich um eine DVD-VobSub-Datei (.sub) oder eine beschädigte Datei.",
        "solution": "Prüfen Sie die Herkunft. Handelt es sich um eine herkömmliche DVD-Untertiteldatei (VobSub .sub mit dazugehöriger .idx-Datei), nutzen Sie bitte unseren SUB in SRT Konverter."
      },
      {
        "issue": "Untertitel laufen asynchron zum Film",
        "cause": "Das Video wurde mit abweichender Bildrate neu codiert (z. B. 23,976 FPS statt 25 FPS PAL) oder Einblendungen am Filmanfang wurden herausgeschnitten.",
        "solution": "Unser Tool extrahiert Zeitstempel mit Millisekunden-Präzision direkt aus dem Blu-ray-Mastertakt. Wurde das Video gekürzt, können Sie den Zeitversatz gezielt anpassen."
      }
    ],
    "conclusionTitle": "Optimieren Sie Ihre Blu-ray-Untertitel noch heute",
    "conclusionText": [
      "Die Umwandlung bildbasierter Blu-ray-PGS-Dateien (.sup) in universelle SubRip-Untertitel (.srt) erfordert weder umständliche Programme noch Konsolenbefehle. Mit unserem kostenlosen Online-Konverter nutzen Sie moderne WebAssembly-OCR, um Dialoge und Zeitstempel in Sekundenschnelle präzise zu extrahieren.",
      "Genießen Sie direkte Wiedergabe auf Plex und Smart-TVs, reduzieren Sie die Dateigröße um mehr als 99 % und schützen Sie Ihre Privatsphäre durch 100 % lokale Verarbeitung. Ziehen Sie Ihre .sup-Datei einfach hierher, um loszulegen!"
    ]
  },
  "id": {
    "introTitle": "Panduan Lengkap Mengonversi Subtitle Blu-ray SUP (PGS) ke SRT",
    "introSubtitle": "Pahami arsitektur subtitle gambar Blu-ray, pengenalan teks optik (OCR), dan cara menghasilkan file teks SubRip yang bersih.",
    "introText": [
      "Piringan Blu-ray dan salinan video resolusi tinggi umumnya menyimpan subtitle dalam format berkas .SUP, yang secara teknis dikenal sebagai Presentation Graphic Stream (PGS). Berbeda dari format teks biasa seperti SubRip (.srt) atau WebVTT (.vtt), berkas PGS SUP sama sekali tidak memuat teks biasa. Format ini merupakan rangkaian gambar bitmap terindeks 8-bit yang dikompresi, di mana setiap baris dialog dirender sebagai grafik lengkap dengan jenis huruf, warna, dan batas transparansi tersendiri.",
      "Karena berbasis gambar, alat konversi subtitle biasa yang sekadar membaca teks atau mengubah ekstensi berkas akan gagal total. Mengubah nama berkas .sup menjadi .srt atau membukanya di aplikasi penyunting teks hanya akan menampilkan susunan karakter biner yang rusak, sehingga pemutar video macet atau mengabaikan trek subtitle. Untuk mengubah berkas Blu-ray SUP menjadi subtitle SRT standar yang kompatibel secara luas, gambar tersebut harus diproses melalui pengenalan karakter optik (OCR).",
      "Konverter SUP ke SRT berbasis browser kami menggabungkan penguraian biner paket PGS langsung di sisi klien dengan mesin OCR WebAssembly berkecepatan tinggi. Alat ini mendekompresi gambar RLE, menerapkan palet warna bawaan, menghitung stempel waktu milidetik akurat dari jam PTS 90 kHz, dan mengekstrak percakapan menjadi teks SubRip yang dapat diedit tanpa mengunggah berkas Anda ke server eksternal mana pun."
    ],
    "whatIsTitle": "Apa Itu Berkas Blu-ray SUP (PGS)?",
    "whatIsText": [
      "Berkas .sup adalah aliran subtitle mentah yang diekstrak langsung dari kontainer Blu-ray M2TS atau berkas video Matroska (.mkv). Dirancang khusus untuk media optik resolusi tinggi, format PGS memungkinkan studio film menampilkan dialog dengan tipografi sinematik khusus, bayangan tegas, dan koordinat layar yang presisi, sehingga tampil identik di semua perangkat pemutar Blu-ray fisik.",
      "Di dalamnya, berkas SUP dibagi menjadi beberapa kelompok tampilan (Display Sets). Presentation Composition Segment (PCS) mengatur resolusi layar dan waktu kemunculan serta penghapusan subtitle. Window Definition Segment (WDS) menentukan batas jendela layar. Palette Definition Segment (PDS) memuat tabel warna YCbCr beserta tingkat transparansi alfa, dan Object Definition Segment (ODS) menyimpan piksel gambar yang dikompresi dengan algoritma RLE 2-byte.",
      "Sinkronisasi waktu diatur oleh Presentation Time Stamps (PTS) dengan jam master berfrekuensi 90 kHz. Suatu teks muncul ketika PCS berisi objek grafik tiba dan tetap tampil sampai PCS pembersih (dengan 0 objek) menghapusnya dari layar. Konversi ke SRT menghitung interval milidetik dari jam 90 kHz ini dan memadukannya dengan teks hasil OCR."
    ],
    "whyConvertTitle": "Mengapa Mengonversi Subtitle Blu-ray SUP ke SubRip (.SRT)?",
    "whyConvertSubtitle": "Ketahui keuntungan besar dalam kompatibilitas pemutar, penghematan memori, dan fleksibilitas teks standar.",
    "whyConvertReasons": [
      {
        "title": "Kompatibilitas Luas di Semua Perangkat",
        "description": "Meskipun pemutar seperti VLC dan Kodi dapat membaca bitmap PGS, sebagian besar Smart TV, peramban ponsel, Chromecast, dan pemutar web tidak mendukung SUP. Mengonversi ke SubRip (.srt) memastikan subtitle tampil mulus di layar mana pun tanpa perlu transcoding video."
      },
      {
        "title": "Penghematan Ukuran Berkas Lebih dari 99%",
        "description": "Karena berkas Blu-ray SUP menyimpan ratusan gambar grafik untuk setiap baris dialog, satu trek subtitle film penuh biasanya berukuran 20 MB hingga 80 MB. Berkas teks SRT yang setara hanya berukuran 40 KB hingga 120 KB, menghemat ruang penyimpanan secara signifikan."
      },
      {
        "title": "Pencarian Teks Penuh dan Aksesibilitas",
        "description": "Berkas gambar tidak dapat dicari maupun dibaca oleh pembaca layar tunanetra. Format SRT memungkinkan pencarian dialog, penerjemahan otomatis ke bahasa lain, dan pengindeksan video secara instan."
      },
      {
        "title": "Kemudahan Penyuntingan Video Profesional",
        "description": "Aplikasi penyunting video seperti Premiere Pro, DaVinci Resolve, dan Final Cut Pro tidak mendukung berkas mentah .sup pada trek subtitle. Mengubahnya ke SRT memudahkan pengimporan, penyesuaian gaya teks, dan penataan waktu."
      }
    ],
    "howToTitle": "Cara Mengonversi SUP ke SRT Online dalam 3 Langkah",
    "howToSubtitle": "Ikuti langkah mudah kami di browser untuk mengekstrak subtitle teks dari berkas Blu-ray PGS.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Muat Berkas Blu-ray SUP",
        "description": "Seret dan lepas berkas .sup Anda ke kotak yang tersedia atau klik 'Pilih File'. Anda juga dapat mengeklik 'Muat Contoh SUP' untuk langsung menguji mesin OCR."
      },
      {
        "step": "2",
        "title": "Penguraian Biner & OCR Otomatis",
        "description": "Mesin peramban menguraikan paket PGS, merekonstruksi gambar bitmap, dan menjalankan OCR berbasis WebAssembly untuk menyalin dialog sesuai waktu PTS yang tepat."
      },
      {
        "step": "3",
        "title": "Periksa Teks dan Unduh Berkas SRT",
        "description": "Bandingkan teks hasil deteksi dengan gambar asli di editor visual. Lakukan penyuntingan bila perlu, lalu klik 'Unduh .SRT' atau 'Salin SRT'."
      }
    ],
    "differenceTitle": "Blu-ray SUP (PGS) vs SubRip (.SRT): Perbandingan Format",
    "differenceSubtitle": "Bandingkan arsitektur teknis dan persyaratan sistem antara format gambar Blu-ray dan standar teks SubRip.",
    "differenceTable": [
      {
        "feature": "Format Penyimpanan Data",
        "sup": "Aliran biner gambar grafik bitmap terindeks 8-bit berformat RLE",
        "srt": "Teks polos UTF-8 yang mudah dibaca dengan penomoran urut"
      },
      {
        "feature": "Ukuran Rata-rata per Film",
        "sup": "20 MB – 80 MB (berisi ratusan gambar raster)",
        "srt": "40 KB – 120 KB (berkas teks sangat ringan)"
      },
      {
        "feature": "Dasar Sinkronisasi Waktu",
        "sup": "Presentation Time Stamps (PTS) pada jam master 90 kHz",
        "srt": "Timecode standar jam dalam format format HH:MM:SS,mmm"
      },
      {
        "feature": "Tipografi dan Tampilan",
        "sup": "Huruf paten grafis studio dengan warna dan posisi layar tetap",
        "srt": "Dirender secara dinamis oleh pemutar (ukuran dan warna dapat diatur penonton)"
      },
      {
        "feature": "Dukungan Perangkat",
        "sup": "Terbatas pada pemutar Blu-ray dan VLC (memicu transcoding di Plex)",
        "srt": "Universal: Smart TV, smartphone, peramban web, YouTube, Premiere"
      },
      {
        "feature": "Penyuntingan dan Pencarian",
        "sup": "Membutuhkan software grafik rumit; tidak dapat dicari secara teks",
        "srt": "Dapat disunting di Notepad atau Subtitle Edit; 100% dapat dicari"
      }
    ],
    "technicalDeepDiveTitle": "Mengenal Arsitektur Biner PGS pada Blu-ray",
    "technicalDeepDiveSubtitle": "Ulasan teknis mengenai cara mendekode paket grafis menjadi gambar dan menghasilkan stempel waktu milidetik.",
    "technicalDeepDiveText": [
      "Setiap segmen dalam berkas SUP Blu-ray diawali dengan header berukuran 13 byte. Dua byte pertama berisi tanda pengenal 'PG' (0x50 0x47). Setelah itu terdapat nilai PTS 32-bit, DTS 32-bit, penanda jenis segmen, dan nilai integer 16-bit penentu panjang data.",
      "Untuk menampilkan suatu baris teks, pembuat video menyertakan Presentation Composition Segment (0x16) yang memuat resolusi layar (1920x1080 atau 3840x2160) beserta koordinat X dan Y. Palette Definition Segment (0x14) memuat warna YCbCr dan kanal transparansi, sedangkan Object Definition Segment (0x15) menyimpan piksel yang dikompresi dengan RLE.",
      "Pengurai kami membaca segmen-segmen ini secara berurutan. Saat mendeteksi ODS, data RLE diekstrak ke dalam matriks indeks warna lalu digabungkan dengan palet PDS menjadi gambar utuh. Filter kontras tinggi diterapkan untuk memisahkan huruf dari bayangan halus, memberikan input yang tajam bagi OCR.",
      "Perhitungan waktu mengonversi jam 90 kHz ke milidetik: Milidetik = Math.round(PTS / 90). Waktu mulai ditentukan oleh PCS pemuncul teks dan waktu selesai oleh PCS penghapus, menjaga keselarasan gerak bibir yang sempurna."
    ],
    "exampleTitle": "Contoh Konversi: Dari Paket Biner PGS ke SubRip SRT",
    "exampleIntro": "Lihat bagaimana grafik subtitle Blu-ray diubah menjadi teks SRT standar dengan ketepatan waktu tinggi.",
    "exampleSupDetails": "Segmen: 0x16 (PCS) pada PTS 270.000 (00:00:03,000) | Ukuran: 1920x1080, Area Teks: 640x72 px\nPalet: Indeks 1 = Putih Cerah (Y:235, Cb:128, Cr:128, Alfa:255)\nGambar Terbaca: Grafik teks 'Selamat datang kembali, Komandan.'\nPCS Pembersih: pada PTS 540.000 (00:00:06,000)",
    "exampleSrtOutput": "1\n00:00:03,000 --> 00:00:06,000\nSelamat datang kembali, Komandan.\n\n2\n00:00:07,500 --> 00:00:10,200\nArmada telah memasuki orbit.",
    "exampleExplanation": "Nilai PTS 270.000 dibagi 90 menghasilkan tepat 3.000 milidetik (00:00:03,000). Segmen pembersih pada PTS 540.000 mengakhiri teks pada 6.000 milidetik (00:00:06,000). Mesin OCR mengubah gambar menjadi teks lengkap dengan nomor urut SubRip.",
    "ffmpegTitle": "Bisakah Mengonversi SUP ke SRT Menggunakan FFmpeg?",
    "ffmpegSubtitle": "Mengapa perintah FFmpeg biasa gagal pada berkas SUP dan bagaimana alat kami memberikan solusi.",
    "ffmpegCommand": "# Perintah FFmpeg langsung akan gagal karena tidak memiliki OCR bawaan:\nffmpeg -i input.sup output.srt\n# Pesan error: 'Subtitle encoding not supported: bitmap to text conversion requires OCR'\n\n# Metode lama di komputer (memerlukan instalasi Java & aplikasi berat):\njava -jar BDSup2Sub.jar input.sup -o output.sub\n# Lalu buka Subtitle Edit untuk menjalankan Tesseract OCR secara manual",
    "ffmpegExplanation": [
      "Banyak pengguna mencoba mengonversi SUP ke SRT menggunakan FFmpeg melalui perintah `ffmpeg -i input.sup output.srt`. Namun proses ini langsung terhenti karena FFmpeg tidak dibekali mesin OCR mandiri untuk membaca teks pada gambar. FFmpeg bertugas mengemas dan mengodekan audio/video, bukan mengenali karakter visual.",
      "Metode konvensional mengharuskan pengguna memasang perangkat lunak seperti BDSup2Sub dan Subtitle Edit beserta Java Runtime dan paket bahasa.",
      "Alat berbasis web kami meniadakan semua kerumitan tersebut: mesin Tesseract OCR berjalan lewat WebAssembly di peramban Anda dengan proses cepat dan privasi penuh."
    ],
    "useCasesTitle": "Kasus Penggunaan Utama Konversi SUP ke SRT",
    "useCasesSubtitle": "Contoh nyata di mana pengalihan ke format SubRip memberikan kemudahan langsung.",
    "useCasesList": [
      {
        "title": "Mencegah Transcoding pada Plex dan Emby",
        "description": "Saat memutar film bersubtitle PGS SUP di Apple TV atau Smart TV, server media terpaksa melakukan transcode video untuk menempelkan gambar subtitle. Beralih ke SRT memungkinkan pemutaran langsung tanpa beban CPU."
      },
      {
        "title": "Penerjemahan Otomatis dan Aksesibilitas",
        "description": "Aplikasi penerjemah tidak dapat membaca berkas gambar. Format SRT bersih memungkinkan penerjemahan dialog ke berbagai bahasa serta mendukung pembaca layar untuk disabilitas."
      },
      {
        "title": "Pembuatan Video Pendek di Media Sosial",
        "description": "Kreator konten yang memotong adegan Blu-ray membutuhkan subtitle teks agar dapat mengatur gaya jenis huruf dan animasi di aplikasi seperti Premiere atau CapCut."
      },
      {
        "title": "Penghematan Ruang Penyimpanan Koleksi Film",
        "description": "Mengganti trek PGS berukuran 70 MB dengan berkas SRT berukuran 60 KB pada berkas MKV menghemat ruang penyimpanan besar dan memastikan kompatibilitas masa depan."
      }
    ],
    "troubleshootTitle": "Mengatasi Kendala Konversi SUP ke SRT",
    "troubleshootSubtitle": "Langkah praktis mengatasi kesalahan deteksi karakter, huruf miring, atau baris bertingkat.",
    "troubleshootTips": [
      {
        "issue": "Karakter Tertukar ('I', 'l', '1', atau 'rn' dengan 'm')",
        "cause": "Bentuk huruf tipis atau miring dengan kontras rendah dapat membuat huruf berdekatan tampak bersatu di mata sistem OCR.",
        "solution": "Kami menerapkan filter kontras tinggi sebelum pembacaan teks. Selain itu, editor visual kami memudahkan Anda membandingkan gambar asli dengan teks untuk memperbaiki kekeliruan dalam hitungan detik."
      },
      {
        "issue": "Tanda Petik atau Tanda Hubung Awal Tidak Terdeteksi",
        "cause": "Beberapa edisi Blu-ray meletakkan tanda petik atau garis bicara terlalu dekat dengan tepi layar sehingga terpotong jika batas kotak terlalu sempit.",
        "solution": "Pastikan opsi 'Pertahankan Format Multi-baris' aktif. Sistem kami menggabungkan seluruh batas objek grafik agar tidak ada tanda baca tepi yang terpotong."
      },
      {
        "issue": "Pesan 'Header Tidak Valid (tanda PG tidak ditemukan)'",
        "cause": "Berkas yang dipilih bukan berkas Blu-ray PGS SUP yang valid. Kemungkinan berkas tersebut adalah format DVD VobSub (.sub) atau berkas rusak.",
        "solution": "Periksa kembali sumber berkas Anda. Jika berasal dari DVD standar (VobSub .sub dengan berkas .idx pasangan), gunakan konverter khusus SUB ke SRT kami."
      },
      {
        "issue": "Waktu Subtitle Tidak Selaras dengan Video",
        "cause": "Video mungkin telah dikompresi ulang dengan frame rate berbeda (misal 23,976 FPS vs 25 FPS PAL) atau bagian pembuka video dipotong.",
        "solution": "Alat kami mencatat waktu PTS dengan presisi milidetik dari jam master. Jika video Anda mengalami pemotongan durasi, Anda dapat menggeser offset waktu dengan akurat."
      }
    ],
    "conclusionTitle": "Perbarui Subtitle Blu-ray Anda Sekarang",
    "conclusionText": [
      "Mengubah subtitle gambar Blu-ray PGS (.sup) menjadi teks SubRip (.srt) yang ringan dan kompatibel kini tidak lagi membutuhkan instalasi aplikasi rumit. Dengan konverter online gratis kami, Anda dapat memanfaatkan kecanggihan WebAssembly OCR untuk mengekstrak dialog dan stempel waktu secara akurat dalam hitungan detik.",
      "Nikmati pemutaran instan di Plex dan Smart TV, hemat ruang penyimpanan hingga lebih dari 99%, dan jaga kerahasiaan berkas Anda dengan pemrosesan 100% lokal di browser. Seret berkas .sup Anda ke atas untuk memulai!"
    ]
  },
  "tr": {
    "introTitle": "Blu-ray SUP (PGS) Dosyalarını SRT Formatına Dönüştürme Kılavuzu",
    "introSubtitle": "Blu-ray resim tabanlı altyazı yapısını, optik karakter tanıma (OCR) teknolojisini ve kusursuz SubRip metin dosyaları oluşturmayı öğrenin.",
    "introText": [
      "Blu-ray diskler ve yüksek çözünürlüklü video kayıtları altyazılarını genellikle teknik adı Presentation Graphic Stream (PGS) olan .SUP dosya formatında barındırır. SubRip (.srt) veya WebVTT (.vtt) gibi düz metin formatlarının aksine, bir PGS SUP dosyası tek bir karakter bile düz metin içermez. Bunun yerine, her diyalog satırının özel yazı tipleri, renkler ve saydamlık sınırlarıyla çizildiği sıkıştırılmış 8 bitlik indekslenmiş bitmap resimlerinden oluşan ikili bir veri akışıdır.",
      "Bu resim tabanlı mimari nedeniyle, yalnızca metin okuyan veya dosya uzantısını değiştirmeye çalışan klasik altyazı dönüştürücüler SUP dosyalarında tamamen yetersiz kalır. Bir .sup dosyasını .srt olarak yeniden adlandırmak veya metin düzenleyicide açmak yalnızca anlamsız bozuk karakterler üretir ve medya oynatıcıların çökmesine veya altyazıyı yok saymasına yol açar. Bir Blu-ray SUP dosyasını evrensel olarak uyumlu standart bir SRT altyazısına dönüştürmek için resimlerin optik karakter tanıma (OCR) sürecinden geçmesi zorunludur.",
      "Tarayıcı tabanlı SUP - SRT dönüştürücümüz, tarayıcı içi ikili PGS paket çözümlemesini yüksek performanslı WebAssembly OCR motoruyla birleştirir. RLE sıkıştırmalı bitmap karelerini açar, dahili renk paletlerini uygular, 90 kHz Presentation Time Stamps (PTS) saatinden milisaniye doğruluğunda zaman kodları üretir ve diyalogları düzenlenebilir SubRip altyazılarına dönüştürür; üstelik dosyalarınızı hiçbir sunucuya yüklemeden."
    ],
    "whatIsTitle": "Blu-ray SUP (PGS) Dosyası Nedir?",
    "whatIsText": [
      "Bir .sup dosyası, M2TS Blu-ray paketinden veya Matroska (.mkv) video dosyasından doğrudan ayıklanan temel bir altyazı akışıdır. Yüksek çözünürlüklü optik diskler için özel olarak geliştirilen PGS formatı, film stüdyolarının özel sinematik yazı tipleri, net gölgelendirmeler ve sabit ekran koordinatları kullanmasına imkan vererek altyazıların tüm donanımlarda aynı görünmesini sağlar.",
      "Yapısal olarak SUP dosyası Display Sets adı verilen görüntüleme gruplarına ayrılmıştır. Presentation Composition Segment (PCS) ekran çözünürlüğünü ve altyazının gösterilip temizlenme zamanını yönetir. Window Definition Segment (WDS) ekran pencerelerini sınırlar. Palette Definition Segment (PDS) alfa saydamlığı içeren YCbCr renk tablosunu barındırır ve Object Definition Segment (ODS) 2 baytlık RLE algoritmasıyla sıkıştırılmış piksel verilerini saklar.",
      "Zamanlama 90 kHz ana saat frekansına sahip Presentation Time Stamps (PTS) değerleriyle yürütülür. Altyazı, grafik nesneleri içeren bir PCS geldiğinde ekrana gelir ve ekranı temizleyen bir sonraki PCS (0 nesneli) gelene kadar görünür kalır. SRT formatına dönüşüm bu 90 kHz değerlerini milisaniyeye çevirerek OCR ile okunan metinlerle eşleştirir."
    ],
    "whyConvertTitle": "Blu-ray SUP Altyazılarını Neden SubRip (.SRT) Formatına Dönüştürmelisiniz?",
    "whyConvertSubtitle": "Metin tabanlı altyazılara geçişin sunduğu geniş cihaz desteği, depolama tasarrufu ve oynatma avantajlarını keşfedin.",
    "whyConvertReasons": [
      {
        "title": "Tüm Cihaz ve Oynatıcılarda Evrensel Uyumluluk",
        "description": "VLC veya Kodi gibi gelişmiş oynatıcılar PGS resimlerini açabilirken, çoğu Akıllı TV, mobil tarayıcı, Chromecast ve oyun konsolu SUP formatını desteklemez. SubRip (.srt) formatına dönüştürmek, altyazıların video dönüştürmeye gerek kalmadan her ekranda sorunsuz çalışmasını sağlar."
      },
      {
        "title": "%99'un Üzerinde Dosya Boyutu Tasarrufu",
        "description": "Blu-ray SUP dosyaları her konuşma satırı için yüzlerce raster resim sakladığından tam bir film altyazısı 20 MB ile 80 MB yer kaplar. Aynı içeriğin SRT metin dosyası ise yalnızca 40 KB ile 120 KB yer kaplayarak büyük depolama tasarrufu sağlar."
      },
      {
        "title": "Tam Metin Araması ve Erişilebilirlik",
        "description": "Resim tabanlı altyazılar aranamaz ve görme engellilere yönelik ekran okuyucu yazılımlar tarafından seslendirilemez. SRT formatı metin aramayı, otomatik çeviri araçlarını ve video indekslemeyi mümkün kılar."
      },
      {
        "title": "Premiere, DaVinci ve Final Cut ile Kolay Kurgu",
        "description": "Profesyonel video kurgu yazılımları .sup dosyalarını altyazı kanallarına doğrudan kabul etmez. Standart SRT'ye çevirmek, kurgucuların metinleri kolayca içe aktarmasına ve yazı stillerini dilediğince değiştirmesine olanak tanır."
      }
    ],
    "howToTitle": "3 Basit Adımda SUP Dosyası Nasıl SRT'ye Dönüştürülür?",
    "howToSubtitle": "Blu-ray PGS dosyalarından metin altyazıları ayıklamak için güvenli tarayıcı içi adımlarımızı takip edin.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Blu-ray SUP Dosyasını Yükleyin",
        "description": ".sup dosyanızı sürükleyip bırakın veya 'Dosyalara Göz At' düğmesine tıklayarak seçin. Sistemi anında denemek için 'Örnek SUP Yükle' düğmesini de kullanabilirsiniz."
      },
      {
        "step": "2",
        "title": "Otomatik İkili Ayrıştırma ve WebAssembly OCR",
        "description": "Tarayıcı motoru PGS paketlerini çözer, resimleri sanal bir tuvalde birleştirir ve WebAssembly OCR motoruyla diyalogları 90 kHz PTS saatine göre eksiksiz okur."
      },
      {
        "step": "3",
        "title": "Altyazıları İnceleyin ve SRT İndirin",
        "description": "Görsel düzenleyicide orijinal Blu-ray resmiyle tanınan metni yan yana kontrol edin. Gerekli düzeltmeleri yaptıktan sonra '.SRT İndir' veya 'SRT Kopyala' düğmesine tıklayın."
      }
    ],
    "differenceTitle": "Blu-ray SUP (PGS) ve SubRip (.SRT) Karşılaştırması",
    "differenceSubtitle": "Resim tabanlı Blu-ray formatı ile evrensel metin standardı arasındaki teknik farkları inceleyin.",
    "differenceTable": [
      {
        "feature": "Veri Depolama Formatı",
        "sup": "RLE sıkıştırmalı 8 bitlik indekslenmiş bitmap resim akışı",
        "srt": "Sıralı numaralandırmaya sahip temiz ve okunabilir UTF-8 düz metin"
      },
      {
        "feature": "Film Başına Ortalama Boyut",
        "sup": "20 MB – 80 MB (yüzlerce grafik resim içerir)",
        "srt": "40 KB – 120 KB (son derece hafif metin verisi)"
      },
      {
        "feature": "Zaman Eşitleme Temeli",
        "sup": "90 kHz ana saat frekanslı Presentation Time Stamps (PTS)",
        "srt": "Standart saat zaman kodları (HH:MM:SS,mmm biçiminde)"
      },
      {
        "feature": "Yazı Tipi ve Görsel Stil",
        "sup": "Sabit renk, gölge ve ekran konumuna sahip stüdyo fontları",
        "srt": "Oynatıcı tarafından dinamik çizilir (boyut ve renk kullanıcı tarafından değiştirilebilir)"
      },
      {
        "feature": "Cihaz ve Oynatıcı Desteği",
        "sup": "Blu-ray oynatıcılar ve VLC (Plex üzerinde video kodlamayı zorunlu kılar)",
        "srt": "Evrensel: Akıllı TV, cep telefonları, tarayıcılar, YouTube, Premiere"
      },
      {
        "feature": "Düzenleme ve Arama",
        "sup": "Karmaşık grafik araçları gerektirir; metin araması yapılamaz",
        "srt": "Not Defteri veya Subtitle Edit ile kolayca düzenlenir; %100 aranabilir"
      }
    ],
    "technicalDeepDiveTitle": "Blu-ray PGS İkili Mimarisinin Teknik Detayları",
    "technicalDeepDiveSubtitle": "Grafik paketlerinin çözümlenmesi ve milisaniye zamanlamalarının hesaplanması.",
    "technicalDeepDiveText": [
      "Bir Blu-ray SUP dosyasındaki her segment 13 baytlık bir başlıkla başlar. İlk iki bayt 'PG' (0x50 0x47) tanımlayıcısıdır. Ardından 32 bitlik PTS, 32 bitlik DTS, segment türü baytı ve paket uzunluğunu belirten 16 bitlik tamsayı yer alır.",
      "Bir diyalog oluşturmak için Presentation Composition Segment (0x16) ile ekran çözünürlüğü (1920x1080 veya 3840x2160) ve X/Y koordinatları belirlenir. Palette Definition Segment (0x14) alfa saydamlıklı YCbCr renklerini sunar ve Object Definition Segment (0x15) RLE ile sıkıştırılmış pikselleri barındırır.",
      "Ayrıştırıcımız bu paketleri sırayla işler. Bir ODS segmenti okunduğunda RLE verisi çözülerek PDS renk paletiyle tam bir resme dönüştürülür. Yüksek kontrastlı netleştirme filtresiyle harfler kenar yumuşatma izlerinden arındırılır ve OCR motoruna kusursuz bir görüntü iletilir.",
      "Zaman damgası hesaplaması 90 kHz değerini milisaniyeye çevirir: Milisaniye = Math.round(PTS / 90). Başlangıç altyazıyı çizen PCS ile, bitiş ise ekranı temizleyen sonraki PCS ile kilitlenerek sesle dudak hareketleri arasında tam senkronizasyon sağlanır."
    ],
    "exampleTitle": "Dönüştürme Örneği: PGS Paketinden SubRip SRT Formatına",
    "exampleIntro": "Blu-ray altyazı resminin hassas zamanlama eşliğinde SRT metnine nasıl dönüştüğünü görün.",
    "exampleSupDetails": "Segment: 0x16 (PCS) PTS 270.000 (00:00:03,000) | Boyut: 1920x1080, Metin Alanı: 640x72 px\nPalet: İndeks 1 = Saf Beyaz (Y:235, Cb:128, Cr:128, Alfa:255)\nÇözülen Resim: 'Tekrar hoş geldiniz, Komutan.' yazılı grafik\nTemizleme PCS: PTS 540.000 (00:00:06,000)",
    "exampleSrtOutput": "1\n00:00:03,000 --> 00:00:06,000\nTekrar hoş geldiniz, Komutan.\n\n2\n00:00:07,500 --> 00:00:10,200\nFilo yörüngeye ulaştı.",
    "exampleExplanation": "PTS 270.000 değeri 90'a bölündüğünde tam 3.000 milisaniye (00:00:03,000) elde edilir. PTS 540.000 anındaki temizleme segmenti süreyi 6.000 milisaniyede (00:00:06,000) sonlandırır. OCR harfleri Türkçe karakterleriyle birlikte sıralı SRT bloklarına aktarır.",
    "ffmpegTitle": "FFmpeg ile SUP Dosyası SRT Formatına Dönüştürülebilir mi?",
    "ffmpegSubtitle": "Standart FFmpeg komutunun neden hata verdiği ve web aracımızın bunu nasıl aştığı.",
    "ffmpegCommand": "# Standart FFmpeg komutu dahili OCR motoru olmadığı için başarısız olur:\nffmpeg -i girdi.sup cikti.srt\n# Hata çıktısı: 'Subtitle encoding not supported: bitmap to text conversion requires OCR'\n\n# Eski masaüstü yöntemi (Java ve harici yazılımlar gerektirir):\njava -jar BDSup2Sub.jar girdi.sup -o cikti.sub\n# Ardından Subtitle Edit programında Tesseract OCR'ı elle çalıştırmak gerekir",
    "ffmpegExplanation": [
      "Sık karşılaşılan bir yanılgı `ffmpeg -i girdi.sup cikti.srt` komutuyla doğrudan dönüştürme yapmaya çalışmaktır. FFmpeg, resim altyazılarını metne aktaracak bir OCR motoruna varsayılan olarak sahip olmadığından işlem hata ile durur. FFmpeg çoklama ve ses/video dönüştürme yapar, ancak resimdeki metinleri tanımaz.",
      "Eski yöntemler kullanıcıları BDSup2Sub ve Subtitle Edit gibi Java tabanlı ağır programları bilgisayarlarına kurmaya zorluyordu.",
      "Web tabanlı dönüştürücümüz kurulum gereksinimini ortadan kaldırır: Tesseract OCR motorunu WebAssembly ile tarayıcınızda çalıştırarak hızlı ve tamamen gizli bir işlem sunar."
    ],
    "useCasesTitle": "SUP Dosyalarını SRT Formatına Çevirmenin Başlıca Kullanım Alanları",
    "useCasesSubtitle": "SubRip formatına geçişin iş akışlarını kolaylaştırdığı pratik senaryolar.",
    "useCasesList": [
      {
        "title": "Plex ve Emby Sunucularında Transcoding İşlemini Önleme",
        "description": "Apple TV veya Akıllı TV'lerde PGS SUP altyazılı filmler izlenirken medya sunucuları resimleri videoya gömmek için işlemciyi aşırı yorar. SRT kullanmak doğrudan oynatmayı (Direct Play) mümkün kılar."
      },
      {
        "title": "Otomatik Çeviri ve Erişilebilirlik Desteği",
        "description": "Çeviri yazılımları resim dosyalarını anlayamaz. Temiz SRT metni elde etmek diyalogların diğer dillere kolayca çevrilmesine ve sesli okuma sistemlerine uyarlanmasına kapı açar."
      },
      {
        "title": "Sosyal Medya ve Video Kurgu Çalışmaları",
        "description": "Film sahnelerinden kısa videolar üreten içerik üreticileri Premiere veya CapCut üzerinde yazı tiplerini serbestçe değiştirmek için düzenlenebilir metne ihtiyaç duyar."
      },
      {
        "title": "Arşiv Boyutunu Küçültme ve Dijital Koruma",
        "description": "MKV arşivlerinde 70 MB'lık PGS parçalarını 60 KB'lık SRT dosyalarıyla değiştirmek gigabaytlarca alan kazandırır ve gelecekteki cihazlarla tam uyum sağlar."
      }
    ],
    "troubleshootTitle": "SUP - SRT Dönüştürme Sırasında Karşılaşılan Sorunları Giderme",
    "troubleshootSubtitle": "Karakter benzerlikleri, italik yazılar ve zaman kaymaları için pratik çözümler.",
    "troubleshootTips": [
      {
        "issue": "Benzer Karakterlerin Karışması ('I', 'l', '1' veya 'rn' ile 'm')",
        "cause": "İnce tırnaklı fontlar, aşırı eğik italik yazılar veya düşük kontrastlı kenarlıklar harflerin OCR motoru tarafından birleşik algılanmasına yol açabilir.",
        "solution": "İşlemden önce resimlere yüksek kontrast filtreleri uygularız. Ayrıca görsel düzenleyicimiz orijinal resmi metnin yanında göstererek harfleri saniyeler içinde düzeltmenizi sağlar."
      },
      {
        "issue": "Tırnak İşaretleri veya Konuşma Çizgilerinin Eksik Çıkması",
        "cause": "Bazı Blu-ray sürümleri konuşma çizgilerini ekranın çok kenarına yerleştirdiğinden dar sınır pencerelerinde bu işaretler dışarıda kalabilir.",
        "solution": "'Çok Satırlı Düzeni Koru' ayarının açık olduğundan emin olun. Ayrıştırıcımız tüm grafik nesnelerinin ortak sınırlarını hesaplayarak kenar noktalama işaretlerini korur."
      },
      {
        "issue": "'Geçersiz Başlık (PG bulunamadı)' Uyarısı",
        "cause": "Yüklenen dosya gerçek bir Blu-ray PGS SUP dosyası değildir. Standart DVD VobSub (.sub) veya hasar görmüş bir dosya olabilir.",
        "solution": "Dosyanızın kaynağını kontrol edin. Eğer dosyanız klasik bir DVD altyazısıysa (.idx dosyasıyla eşleşen VobSub .sub), lütfen SUB - SRT Dönüştürücümüzü kullanın."
      },
      {
        "issue": "Altyazının Video ile Senkronunun Kayması",
        "cause": "Videonun farklı bir kare hızında yeniden kodlanmış olması (örneğin 23,976 FPS yerine 25 FPS PAL) veya video girişindeki logoların kesilmiş olması zamanlamayı kaydırabilir.",
        "solution": "Aracımız PTS değerlerini ana saatten milisaniye kesinliğinde alır. Videonuzda kırpılma varsa medya oynatıcınız üzerinden zaman ötelemesini güvenle ayarlayabilirsiniz."
      }
    ],
    "conclusionTitle": "Blu-ray Altyazılarınızı Hemen Şimdi Dönüştürün",
    "conclusionText": [
      "Resim tabanlı Blu-ray PGS (.sup) altyazılarını hafif ve evrensel SubRip (.srt) metinlerine dönüştürmek artık karmaşık programlar yüklemeyi veya terminal komutlarıyla uğraşmayı gerektirmiyor. Ücretsiz çevrimiçi SUP - SRT dönüştürücümüzle WebAssembly OCR gücünü kullanarak metinleri ve zamanlamaları saniyeler içinde ayıklayabilirsiniz.",
      "Plex ve televizyonlarınızda doğrudan oynatmanın keyfini çıkarın, altyazı boyutunuzu %99'dan fazla küçültün ve %100 yerel tarayıcı işlemeyle gizliliğinizi koruyun. Başlamak için .sup dosyanızı yukarıya sürükleyin!"
    ]
  },
  "it": {
    "introTitle": "La Guida Completa alla Conversione di Sottotitoli Blu-ray SUP (PGS) in SRT",
    "introSubtitle": "Comprendi la struttura dei sottotitoli grafici Blu-ray, il riconoscimento ottico (OCR) e come creare file di testo SubRip perfetti.",
    "introText": [
      "I dischi Blu-ray e i rip video ad alta definizione memorizzano comunemente i propri sottotitoli nel formato .SUP, tecnicamente noto come Presentation Graphic Stream (PGS). A differenza dei formati basati su testo come SubRip (.srt) o WebVTT (.vtt), un file PGS SUP non racchiude un singolo carattere di testo puro. Si tratta invece di una sequenza continua di immagini bitmap indicizzate a 8 bit compresse, dove ciascuna battuta di dialogo è pre-renderizzata graficamente con caratteri, colori e trasparenze proprietarie dello studio cinematografico.",
      "A causa di questa struttura grafica, i convertitori tradizionali che cercano di leggere testo semplice o si limitano a rinominare l'estensione del file falliscono completamente. Rinominare un file .sup in .srt o aprirlo con un editor di testo genera soltanto una serie di caratteri binari incomprensibili, causando il blocco del lettore video o la mancata visualizzazione della traccia. Per trasformare un file Blu-ray SUP in un sottotitolo SRT universale e compatibile, le immagini devono essere elaborate tramite riconoscimento ottico dei caratteri (OCR).",
      "Il nostro convertitore online unisce l'analisi binaria diretta dei pacchetti PGS all'interno del browser a un motore OCR ad alte prestazioni basato su WebAssembly. Decomprime le immagini RLE, applica le tavolozze colori incorporate, calcola i timestamp precisi al millisecondo tramite il clock PTS a 90 kHz ed estrae il dialogo in sottotitoli SubRip puliti e modificabili, il tutto senza caricare alcun file su server esterni."
    ],
    "whatIsTitle": "Che Cos'è un File Blu-ray SUP (PGS)?",
    "whatIsText": [
      "Un file .sup è un flusso elementare di sottotitoli estratto direttamente da un contenitore Blu-ray M2TS o da un file Matroska (.mkv). Progettato specificamente per supporti ottici in alta definizione, il formato PGS consente alle case di produzione di utilizzare una tipografia esclusiva con ombreggiature nette e coordinate fisse a schermo, garantendo una visualizzazione identica su tutti i lettori fisici.",
      "A livello architetturale, un file SUP è suddiviso in insiemi di visualizzazione (Display Sets). Il Presentation Composition Segment (PCS) controlla la risoluzione e determina quando la grafica compare o scompare. Il Window Definition Segment (WDS) delimita le finestre a schermo. Il Palette Definition Segment (PDS) include la tabella colori YCbCr con valori di trasparenza alfa, e l'Object Definition Segment (ODS) memorizza i pixel dell'immagine compressi con un algoritmo RLE a 2 byte.",
      "La sincronizzazione temporale è governata dai Presentation Time Stamps (PTS) basati su un clock master a 90 kHz. Una battuta compare quando arriva un PCS provvisto di oggetti grafici e rimane visibile fino all'arrivo di un PCS di cancellazione (con zero oggetti) che pulisce lo schermo. La conversione in SRT trasforma questi intervalli a 90 kHz in millisecondi e li unisce al testo riconosciuto tramite OCR."
    ],
    "whyConvertTitle": "Perché Convertire i Sottotitoli Blu-ray SUP in SubRip (.SRT)?",
    "whyConvertSubtitle": "Scopri i grandi vantaggi di compatibilità, risparmio di spazio e fluidità garantiti dal formato di testo standard.",
    "whyConvertReasons": [
      {
        "title": "Compatibilità Totale su Tutti i Dispositivi",
        "description": "Sebbene software come VLC e Kodi supportino i bitmap PGS, la maggior parte delle Smart TV, browser per smartphone, Chromecast e console non è in grado di leggere il formato SUP. La conversione in SubRip (.srt) garantisce una visione perfetta su ogni schermo senza richiedere la transcodifica video."
      },
      {
        "title": "Riduzione delle Dimensioni Oltre il 99%",
        "description": "Poiché i file Blu-ray SUP memorizzano centinaia di immagini graficas per ogni battuta, la traccia di un intero film pesa comunemente tra 20 MB e 80 MB. Il corrispettivo file SRT in testo puro occupa solamente tra 40 KB e 120 KB, liberando prezioso spazio su disco."
      },
      {
        "title": "Ricerca del Testo e Accessibilità",
        "description": "Le immagini non possono essere cercate né lette dagli screen reader per persone con disabilità visive. Il formato SRT rende i dialoghi completamente indicizzabili, ricercabili e pronti per la traduzione automatica in qualsiasi lingua."
      },
      {
        "title": "Montaggio Video Immediato in Premiere, DaVinci e Final Cut",
        "description": "I software di montaggio professionale non accettano tracce grafiche .sup grezze nella timeline dei sottotitoli. Convertire in SRT consente di importare i testi, regolare la grafica e modificare i tagli al volo."
      }
    ],
    "howToTitle": "Come Convertire SUP in SRT Online in 3 Semplici Passaggi",
    "howToSubtitle": "Segui la nostra procedura guidata nel browser per estrarre sottotitoli in formato testo dai file Blu-ray.",
    "howToSteps": [
      {
        "step": "1",
        "title": "Carica il File Blu-ray SUP",
        "description": "Trascina e rilascia il file .sup nell'area indicata oppure clicca su 'Sfoglia file'. Puoi anche selezionare 'Carica esempio SUP' per testare immediatamente il motore OCR."
      },
      {
        "step": "2",
        "title": "Decodifica Binaria e Riconoscimento OCR",
        "description": "Il motore nel browser decodifica i pacchetti PGS, disegna le immagini su un canvas interno ed esegue l'OCR WebAssembly per trascrivere i dialoghi con sincronizzazione PTS perfetta."
      },
      {
        "step": "3",
        "title": "Verifica le Battute e Salva il File SRT",
        "description": "Confronta il testo estratto con l'immagine originale nell'editor visivo. Apporta le modifiche desiderate e clicca su 'Scarica .SRT' o 'Copia SRT'."
      }
    ],
    "differenceTitle": "Blu-ray SUP (PGS) vs SubRip (.SRT): Tabella Comparativa",
    "differenceSubtitle": "Analizza le differenze tecniche fondamentali tra il formato grafico Blu-ray e lo standard di testo universale.",
    "differenceTable": [
      {
        "feature": "Formato dei Dati",
        "sup": "Flusso binario di immagini bitmap indicizzate a 8 bit con compressione RLE",
        "srt": "Testo semplice UTF-8 pulito e leggibile con numerazione sequenziale"
      },
      {
        "feature": "Dimensione Media per Film",
        "sup": "20 MB – 80 MB (racchiude centinaia di immagini grafiche)",
        "srt": "40 KB – 120 KB (dati testuali ultraleggeri)"
      },
      {
        "feature": "Base di Sincronizzazione",
        "sup": "Presentation Time Stamps (PTS) su frequenza di clock a 90 kHz",
        "srt": "Timecode standard orari nel formato HH:MM:SS,mmm"
      },
      {
        "feature": "Tipografia e Personalizzazione",
        "sup": "Caratteri fissi impressi nell'immagine con colori e bordi immutabili",
        "srt": "Renderizzato dinamicamente dal lettore (dimensione e colore personalizzabili dall'utente)"
      },
      {
        "feature": "Supporto Dispositivi",
        "sup": "Limitato a lettori Blu-ray e VLC (impone la transcodifica video su Plex)",
        "srt": "Universale: Smart TV, smartphone, browser web, YouTube, Premiere Pro"
      },
      {
        "feature": "Modifica e Ricerca",
        "sup": "Richiede software grafici complessi; ricerca del testo impossibile",
        "srt": "Modificabile con qualsiasi editor di testo o Subtitle Edit; 100% ricercabile"
      }
    ],
    "technicalDeepDiveTitle": "Dentro l'Architettura Binaria PGS dei Blu-ray",
    "technicalDeepDiveSubtitle": "Dettagli tecnici sulla decodifica dei pacchetti e sul calcolo accurato dei millisecondi.",
    "technicalDeepDiveText": [
      "Ciascun segmento di un file Blu-ray SUP si apre con un'intestazione di 13 byte. I primi due byte recano la firma 'PG' (0x50 0x47). Seguono i valori PTS e DTS a 32 bit, l'identificativo del tipo di pacchetto e un intero a 16 bit che specifica la lunghezza totale.",
      "Per visualizzare una battuta, il flusso contiene un Presentation Composition Segment (0x16) con la risoluzione dello schermo (1920x1080 o 3840x2160) e le coordinate X e Y. Il Palette Definition Segment (0x14) fornisce i colori YCbCr e la trasparenza alfa, mentre l'Object Definition Segment (0x15) conserva i pixel compressi tramite RLE.",
      "Il nostro parser elabora questi segmenti in successione. Quando rileva un ODS, estrae i pixel in una matrice e compone l'immagine definitiva tramite la tavolozza PDS. Un filtro ad alto contrasto ripulisce le lettere da sfumature e artefatti di antialiasing, offrendo un'immagine ideale al motore OCR.",
      "La conversione dei timestamp converte le unità a 90 kHz in millisecondi: Millisecondi = Math.round(PTS / 90). L'inizio è fissato dal PCS che visualizza l'immagine e la conclusione dal PCS di cancellazione successivo, assicurando una sincronia perfetta con il parlato."
    ],
    "exampleTitle": "Esempio di Conversione: Dal Pacchetto Grafico PGS a SubRip SRT",
    "exampleIntro": "Guarda come un'immagine Blu-ray viene trasformata in testo formattato con tempi precisi.",
    "exampleSupDetails": "Segmento: 0x16 (PCS) a PTS 270.000 (00:00:03,000) | Immagine: 1920x1080, Riquadro: 640x72 px\nTavolozza: Voce 1 = Bianco Puro (Y:235, Cb:128, Cr:128, Alfa:255)\nImmagine Decodificata: Grafica recante 'Bentornato, Comandante.'\nPCS di Cancellazione: a PTS 540.000 (00:00:06,000)",
    "exampleSrtOutput": "1\n00:00:03,000 --> 00:00:06,000\nBentornato, Comandante.\n\n2\n00:00:07,500 --> 00:00:10,200\nLa flotta è appena entrata in orbita.",
    "exampleExplanation": "Il valore PTS 270.000 diviso per 90 corrisponde esattamente a 3.000 millisecondi (00:00:03,000). Il segmento di chiusura a 540.000 fissa la fine della battuta a 6.000 millisecondi (00:00:06,000). L'OCR estrae le lettere con punteggiatura corretta e numerazione SubRip.",
    "ffmpegTitle": "Si Può Convertire SUP in SRT con FFmpeg?",
    "ffmpegSubtitle": "Perché il comando standard di FFmpeg non funziona e come il nostro strumento online risolve il problema.",
    "ffmpegCommand": "# Il comando FFmpeg fallisce poiché non contiene un motore OCR interno:\nffmpeg -i input.sup output.srt\n# Errore: 'Subtitle encoding not supported: bitmap to text conversion requires OCR'\n\n# Procedura desktop tradizionale (richiede Java e programmi esterni):\njava -jar BDSup2Sub.jar input.sup -o output.sub\n# Poi aprire Subtitle Edit ed eseguire Tesseract OCR manualmente",
    "ffmpegExplanation": [
      "Un errore comune è provare a convertire file SUP in SRT tramite `ffmpeg -i input.sup output.srt`. Il processo si interrompe subito con un messaggio d'errore poiché FFmpeg non possiede un motore OCR autonomo per estrarre testo da immagini. FFmpeg gestisce multiplexing e transcodifica, ma non interpreta le scritte grafiche.",
      "La prassi tradizionale costringeva a installare software pesanti come BDSup2Sub e Subtitle Edit, con relative librerie Java e dizionari linguistici da configurare.",
      "Il nostro convertitore web evita qualsiasi installazione: esegue Tesseract OCR in WebAssembly all'interno del browser con elaborazione istantanea e totale riservatezza."
    ],
    "useCasesTitle": "Casi d'Uso Principali per la Conversione da SUP a SRT",
    "useCasesSubtitle": "Scenari pratici in cui passare a sottotitoli SubRip porta benefici immediati.",
    "useCasesList": [
      {
        "title": "Eliminare la Transcodifica su Plex ed Emby",
        "description": "Durante lo streaming di film con sottotitoli PGS SUP su Apple TV o Smart TV, i server multimediali sono spesso costretti a ricodificare il video per imprimere i sottotitoli grafici. Il passaggio a SRT abilita la riproduzione diretta e azzera il carico sulla CPU."
      },
      {
        "title": "Traduzione Automatica e Accessibilità",
        "description": "I software di traduzione automatica non possono interpretare semplici immagini. Disporre di testo SRT pulito consente di tradurre i dialoghi in qualunque lingua e garantisce la lettura da parte di screen reader per non vedenti."
      },
      {
        "title": "Creazione di Clip e Video per i Social Network",
        "description": "I creator che montano spezzoni di film su Premiere o CapCut necessitano di sottotitoli modificabili per cambiare caratteri, colori e animare le parole con nitidezza."
      },
      {
        "title": "Risparmio di Spazio e Archiviazione Digitale",
        "description": "Sostituire tracce PGS da 70 MB con file SRT da 60 KB nelle collezioni MKV fa risparmiare gigabyte di spazio e assicura compatibilità a lungo termine."
      }
    ],
    "troubleshootTitle": "Risoluzione dei Problemi nella Conversione da SUP a SRT",
    "troubleshootSubtitle": "Consigli pratici per superare confusioni tra lettere simili, corsivi o interruzioni di riga.",
    "troubleshootTips": [
      {
        "issue": "Confusione tra Caratteri Simili ('I', 'l', '1' o 'rn' rispetto a 'm')",
        "cause": "Caratteri con grazie sottili, corsivi molto inclinati o contorni sfumati possono far sembrare unite due lettere vicine all'algoritmo di OCR.",
        "solution": "Applichiamo filtri ad alto contrasto prima dell'analisi. Inoltre, il nostro editor visivo mostra l'immagine originale a fianco del testo, consentendo di correggere qualunque battuta in pochi istanti."
      },
      {
        "issue": "Mancanza di Trattini di Dialogo o Virgolette",
        "cause": "Alcune edizioni Blu-ray collocano virgolette o trattini molto vicini al bordo dello schermo, rischiando di tagliarli se la finestra di visualizzazione è stretta.",
        "solution": "Assicurati che l'opzione 'Mantieni Layout Multi-riga' sia abilitata. Il nostro analizzatore considera l'intera area composita di tutti gli oggetti per non tagliare la punteggiatura."
      },
      {
        "issue": "Avviso di 'Intestazione Non Valida (firma PG assente)'",
        "cause": "Il file selezionato non è un vero flusso Blu-ray PGS SUP. Potrebbe trattarsi di un sottotitolo DVD VobSub (.sub) o di un file corrotto.",
        "solution": "Verifica l'origine del file. Se proviene da un DVD convenzionale (VobSub .sub con relativo file .idx), usa il nostro convertitore specifico da SUB a SRT."
      },
      {
        "issue": "Sottotitoli Fuori Sincrono Rispetto al Video",
        "cause": "Il video potrebbe essere stato ricodificato con una frequenza di fotogrammi diversa (es. 23,976 FPS anziché 25 FPS PAL) o sono state rimosse le sigle iniziali.",
        "solution": "Il nostro motore estrae i valori PTS con precisione al millisecondo dal clock master. Se il video è stato accorciato, puoi applicare un ritardo o anticipo globale in totale sicurezza."
      }
    ],
    "conclusionTitle": "Aggiorna i Tuoi Sottotitoli Blu-ray Oggi Stesso",
    "conclusionText": [
      "Trasformare i sottotitoli grafici Blu-ray PGS (.sup) in file di testo SubRip (.srt) leggeri e universali non richiede più programmi complicati o istruzioni complesse nel terminale. Con il nostro convertitore gratuito online, puoi sfruttare la potenza dell'OCR in WebAssembly per estrarre dialoghi e tempi in pochi secondi.",
      "Goditi una riproduzione diretta su Plex e Smart TV, riduci il peso dei tuoi sottotitoli di oltre il 99% e proteggi la tua privacy con elaborazione al 100% locale nel browser. Trascina qui sopra il tuo file .sup per iniziare!"
    ]
  }
};

export function getSupToSrtGuideContent(locale: Locale): SupToSrtGuideContent {
  return SUP_TO_SRT_GUIDE_CONTENT[locale] || SUP_TO_SRT_GUIDE_CONTENT['en'];
}
