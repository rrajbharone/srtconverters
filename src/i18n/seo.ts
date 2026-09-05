import type { Locale } from './config';
import type { RouteId } from './routes';

export interface PageSeo {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}

export const SEO_TRANSLATIONS: Record<Locale, Record<RouteId | '404', PageSeo>> = {
  en: {
    home: {
      title: 'TXT to SRT Converter – Free Online Text to Subtitles | SRTConverters',
      description: 'Convert plain text transcripts, scripts, and lyrics to SubRip (.srt) subtitle files online for free. Custom reading speeds, automatic timing estimation, and 100% browser privacy.',
    },
    'txt-to-srt': {
      title: 'TXT to SRT Converter – Free Online Text to Subtitles | SRTConverters',
      description: 'Convert plain text transcripts, scripts, and lyrics to SubRip (.srt) subtitle files online for free. Custom reading speeds, automatic timing estimation, and 100% browser privacy.',
    },
    'srt-to-text': {
      title: 'SRT to Text Converter – Extract Plain Text from Subtitles | SRTConverters',
      description: 'Extract clean plain text transcripts from SRT subtitle files online for free. Remove timestamps, line numbers, and formatting with 100% browser-side privacy.',
    },
    'srt-to-vtt': {
      title: 'SRT to VTT Converter – Convert Subtitles to WebVTT Online | SRTConverters',
      description: 'Convert SRT subtitles to WebVTT (.vtt) format online for free. Fully compliant with HTML5 video players and web standards. Instant client-side tool.',
    },
    'vtt-to-srt': {
      title: 'VTT to SRT Converter – Convert WebVTT to SubRip Online | SRTConverters',
      description: 'Convert WebVTT (.vtt) captions to standard SRT subtitle files online for free. Compatible with Premiere Pro, DaVinci Resolve, VLC, and YouTube.',
    },
    tools: {
      title: 'Free Subtitle & SRT Tools – Convert, Format & Edit | SRTConverters',
      description: 'Explore our complete suite of free online subtitle tools. Convert TXT to SRT, SRT to Text, SRT to VTT, and VTT to SRT securely in your browser.',
    },


    '404': {
      title: 'Page Not Found (404) | SRTConverters',
      description: 'The page you requested could not be found.',
    },
  },
  es: {
    home: {
      title: 'Convertidor TXT a SRT – Convertir Texto a Subtítulos Gratis | SRTConverters',
      description: 'Convierte transcripciones de texto (TXT) a formato de subtítulos SRT gratis y online. Tiempos configurables, cálculo de caracteres por segundo y 100% de privacidad.',
    },
    'txt-to-srt': {
      title: 'Convertidor TXT a SRT – Convertir Texto a Subtítulos Gratis | SRTConverters',
      description: 'Convierte transcripciones de texto (TXT) a formato de subtítulos SRT gratis y online. Tiempos configurables, cálculo de caracteres por segundo y 100% de privacidad.',
    },
    'srt-to-text': {
      title: 'Convertidor SRT a Texto – Extraer Texto Plano de Subtítulos | SRTConverters',
      description: 'Extrae transcripciones en texto plano de archivos de subtítulos SRT gratis y online. Elimina marcas de tiempo y numeración con total privacidad.',
    },
    'srt-to-vtt': {
      title: 'Convertidor SRT a VTT – Convertir Subtítulos a WebVTT Online | SRTConverters',
      description: 'Convierte subtítulos SRT a formato WebVTT (.vtt) online y gratis. Compatible con reproductores de video HTML5 y estándares web.',
    },
    'vtt-to-srt': {
      title: 'Convertidor VTT a SRT – Convertir WebVTT a SubRip Online | SRTConverters',
      description: 'Convierte subtítulos WebVTT (.vtt) a formato estándar SRT online y gratis. Compatible con Premiere Pro, DaVinci Resolve, VLC y YouTube.',
    },
    tools: {
      title: 'Herramientas Gratuitas de Subtítulos y SRT | SRTConverters',
      description: 'Explora nuestra suite completa de herramientas online gratuitas para subtítulos. Convierte TXT a SRT, SRT a Texto, SRT a VTT y VTT a SRT de forma segura en tu navegador.',
    },


    '404': {
      title: 'Página No Encontrada (404) | SRTConverters',
      description: 'La página solicitada no existe o ha sido movida.',
    },
  },
  pt: {
    home: {
      title: 'Conversor TXT para SRT – Converter Texto em Legendas Grátis | SRTConverters',
      description: 'Converta transcrições de texto (TXT) para formato de legendas SRT grátis e online. Ajuste de tempo, cálculo de caracteres por segundo e 100% de privacidade.',
    },
    'txt-to-srt': {
      title: 'Conversor TXT para SRT – Converter Texto em Legendas Grátis | SRTConverters',
      description: 'Converta transcrições de texto (TXT) para formato de legendas SRT grátis e online. Ajuste de tempo, cálculo de caracteres por segundo e 100% de privacidade.',
    },
    'srt-to-text': {
      title: 'Conversor SRT para Texto – Extrair Texto de Legendas | SRTConverters',
      description: 'Extraia transcrições em texto simples de arquivos de legendas SRT online e grátis. Remova tempos e numeração com total privacidade.',
    },
    'srt-to-vtt': {
      title: 'Conversor SRT para VTT – Converter Legendas em WebVTT Online | SRTConverters',
      description: 'Converta legendas SRT para formato WebVTT (.vtt) online e grátis. Compatível com reprodutores HTML5 e padrões web modernos.',
    },
    'vtt-to-srt': {
      title: 'Conversor VTT para SRT – Converter WebVTT em SubRip Online | SRTConverters',
      description: 'Converta legendas WebVTT (.vtt) para formato padrão SRT online e grátis. Compatível com Premiere Pro, DaVinci Resolve, VLC e YouTube.',
    },
    tools: {
      title: 'Ferramentas Gratuitas de Legendas e SRT | SRTConverters',
      description: 'Explore nossa suíte de ferramentas online de legendas. Converta TXT para SRT, SRT para Texto, SRT para VTT e VTT para SRT com privacidade total no navegador.',
    },


    '404': {
      title: 'Página Não Encontrada (404) | SRTConverters',
      description: 'A página procurada não foi encontrada.',
    },
  },
  fr: {
    home: {
      title: 'Convertisseur TXT en SRT – Convertir Texte en Sous-titres Gratuit | SRTConverters',
      description: 'Convertissez des fichiers texte (TXT) en sous-titres SRT gratuitement en ligne. Minutage personnalisable, calcul de caractères par seconde et 100% privé.',
    },
    'txt-to-srt': {
      title: 'Convertisseur TXT en SRT – Convertir Texte en Sous-titres Gratuit | SRTConverters',
      description: 'Convertissez des fichiers texte (TXT) en sous-titres SRT gratuitement en ligne. Minutage personnalisable, calcul de caractères par seconde et 100% privé.',
    },
    'srt-to-text': {
      title: 'Convertisseur SRT en Texte – Extraire du Texte depuis des Sous-titres | SRTConverters',
      description: 'Extrayez des transcriptions en texte brut à partir de fichiers de sous-titres SRT en ligne gratuitement. Supprimez horodatages et numéros en toute confidentialité.',
    },
    'srt-to-vtt': {
      title: 'Convertisseur SRT en VTT – Convertir Sous-titres en WebVTT en Ligne | SRTConverters',
      description: 'Convertissez vos sous-titres SRT au format WebVTT (.vtt) en ligne et gratuitement. Conforme aux standards HTML5 et lecteurs web.',
    },
    'vtt-to-srt': {
      title: 'Convertisseur VTT en SRT – Convertir WebVTT en SubRip en Ligne | SRTConverters',
      description: 'Convertissez des sous-titres WebVTT (.vtt) en format SRT standard en ligne gratuitement. Compatible Premiere Pro, DaVinci Resolve, VLC et YouTube.',
    },
    tools: {
      title: 'Outils Gratuits de Sous-titres et SRT | SRTConverters',
      description: 'Découvrez notre suite d’outils gratuits en ligne pour sous-titres. Convertissez TXT en SRT, SRT en Texte, SRT en VTT et VTT en SRT en toute sécurité.',
    },


    '404': {
      title: 'Page Non Trouvée (404) | SRTConverters',
      description: 'La page que vous recherchez n’existe pas.',
    },
  },
  de: {
    home: {
      title: 'TXT in SRT Konverter – Text kostenlos in Untertitel umwandeln | SRTConverters',
      description: 'Konvertieren Sie Text-Transkripte (TXT) kostenlos online in das SRT-Untertitelformat. Einstellbares Timing, Zeichen-pro-Sekunde-Berechnung und 100% Datenschutz.',
    },
    'txt-to-srt': {
      title: 'TXT in SRT Konverter – Text kostenlos in Untertitel umwandeln | SRTConverters',
      description: 'Konvertieren Sie Text-Transkripte (TXT) kostenlos online in das SRT-Untertitelformat. Einstellbares Timing, Zeichen-pro-Sekunde-Berechnung und 100% Datenschutz.',
    },
    'srt-to-text': {
      title: 'SRT in Text Konverter – Text aus Untertiteln extrahieren | SRTConverters',
      description: 'Extrahieren Sie reinen Text aus SRT-Untertiteldateien kostenlos online. Zeitstempel und Nummerierung sauber entfernen mit 100% Datenschutz.',
    },
    'srt-to-vtt': {
      title: 'SRT in VTT Konverter – Untertitel in WebVTT umwandeln | SRTConverters',
      description: 'Konvertieren Sie SRT-Untertitel kostenlos online in das WebVTT-Format (.vtt). Vollständig konform mit HTML5-Videoplayern und Webstandards.',
    },
    'vtt-to-srt': {
      title: 'VTT in SRT Konverter – WebVTT in SubRip online umwandeln | SRTConverters',
      description: 'Konvertieren Sie WebVTT (.vtt) kostenlos online in das Standard-SRT-Format. Kompatibel mit Premiere Pro, DaVinci Resolve, VLC und YouTube.',
    },
    tools: {
      title: 'Kostenlose Untertitel- & SRT-Tools | SRTConverters',
      description: 'Entdecken Sie unsere kostenlosen Online-Untertitel-Tools. Konvertieren Sie TXT in SRT, SRT in Text, SRT in VTT und VTT in SRT sicher in Ihrem Browser.',
    },


    '404': {
      title: 'Seite nicht gefunden (404) | SRTConverters',
      description: 'Die angeforderte Seite konnte nicht gefunden werden.',
    },
  },
  id: {
    home: {
      title: 'Konverter TXT ke SRT – Ubah Teks Jadi Subtitle Gratis | SRTConverters',
      description: 'Konversi transkrip teks (TXT) ke format subtitle SRT online gratis. Penyesuaian waktu, perhitungan karakter per detik, dan 100% privasi di peramban.',
    },
    'txt-to-srt': {
      title: 'Konverter TXT ke SRT – Ubah Teks Jadi Subtitle Gratis | SRTConverters',
      description: 'Konversi transkrip teks (TXT) ke format subtitle SRT online gratis. Penyesuaian waktu, perhitungan karakter per detik, dan 100% privasi di peramban.',
    },
    'srt-to-text': {
      title: 'Konverter SRT ke Teks – Ekstrak Teks dari Subtitle | SRTConverters',
      description: 'Ekstrak transkrip teks polos dari file subtitle SRT online gratis. Bersihkan stempel waktu dan nomor urut dengan privasi 100% di peramban.',
    },
    'srt-to-vtt': {
      title: 'Konverter SRT ke VTT – Ubah Subtitle ke WebVTT Online | SRTConverters',
      description: 'Konversi subtitle SRT ke format WebVTT (.vtt) online gratis. Sesuai dengan standar video HTML5 dan pemutar web.',
    },
    'vtt-to-srt': {
      title: 'Konverter VTT ke SRT – Ubah WebVTT ke SubRip Online | SRTConverters',
      description: 'Konversi subtitle WebVTT (.vtt) ke format standar SRT online gratis. Kompatibel dengan Premiere Pro, DaVinci Resolve, VLC, dan YouTube.',
    },
    tools: {
      title: 'Alat Subtitle & SRT Gratis Online | SRTConverters',
      description: 'Jelajahi rangkaian lengkap alat subtitle online gratis. Konversi TXT ke SRT, SRT ke Teks, SRT ke VTT, dan VTT ke SRT dengan aman di peramban Anda.',
    },


    '404': {
      title: 'Halaman Tidak Ditemukan (404) | SRTConverters',
      description: 'Halaman yang Anda cari tidak ditemukan.',
    },
  },
  tr: {
    home: {
      title: 'TXT - SRT Dönüştürücü – Metni Altyazıya Dönüştür | SRTConverters',
      description: 'Düz metin (TXT) transkriptlerini ücretsiz çevrimiçi SRT altyazı formatına dönüştürün. Özel zamanlama, saniye başına karakter hesabı ve %100 tarayıcı gizliliği.',
    },
    'txt-to-srt': {
      title: 'TXT - SRT Dönüştürücü – Metni Altyazıya Dönüştür | SRTConverters',
      description: 'Düz metin (TXT) transkriptlerini ücretsiz çevrimiçi SRT altyazı formatına dönüştürün. Özel zamanlama, saniye başına karakter hesabı ve %100 tarayıcı gizliliği.',
    },
    'srt-to-text': {
      title: 'SRT - Metin Dönüştürücü – Altyazıdan Düz Metin Çıkarın | SRTConverters',
      description: 'SRT altyazı dosyalarından düz metin transkriptlerini ücretsiz çevrimiçi çıkarın. Zaman damgalarını ve numaraları %100 gizlilikle temizleyin.',
    },
    'srt-to-vtt': {
      title: 'SRT - VTT Dönüştürücü – Altyazıyı WebVTT Formatına Dönüştür | SRTConverters',
      description: 'SRT altyazılarını ücretsiz çevrimiçi WebVTT (.vtt) formatına dönüştürün. HTML5 video oynatıcıları ve modern web standartlarıyla tam uyumlu.',
    },
    'vtt-to-srt': {
      title: 'VTT - SRT Dönüştürücü – WebVTT’yi SRT Formatına Dönüştür | SRTConverters',
      description: 'WebVTT (.vtt) altyazılarını ücretsiz çevrimiçi standart SRT formatına dönüştürün. Premiere Pro, DaVinci Resolve, VLC ve YouTube ile uyumlu.',
    },
    tools: {
      title: 'Ücretsiz Altyazı ve SRT Araçları | SRTConverters',
      description: 'Ücretsiz çevrimiçi altyazı araçlarımızı keşfedin. TXT dosyasını SRT formatına, SRT dosyasını Metne, SRT dosyasını VTT formatına ve VTT dosyasını SRT formatına güvenle dönüştürün.',
    },


    '404': {
      title: 'Sayfa Bulunamadı (404) | SRTConverters',
      description: 'Aradığınız sayfa bulunamadı.',
    },
  },
  it: {
    home: {
      title: 'Convertitore da TXT a SRT – Converti Testo in Sottotitoli Gratis | SRTConverters',
      description: 'Converti trascrizioni di testo (TXT) in formato sottotitoli SRT gratis online. Timing personalizzabile, calcolo caratteri al secondo e 100% di privacy nel browser.',
    },
    'txt-to-srt': {
      title: 'Convertitore da TXT a SRT – Converti Testo in Sottotitoli Gratis | SRTConverters',
      description: 'Converti trascrizioni di testo (TXT) in formato sottotitoli SRT gratis online. Timing personalizzabile, calcolo caratteri al secondo e 100% di privacy nel browser.',
    },
    'srt-to-text': {
      title: 'Convertitore da SRT a Testo – Estrai Testo da Sottotitoli | SRTConverters',
      description: 'Estrai trascrizioni in testo semplice da file di sottotitoli SRT gratis online. Rimuovi timestamp e numeri di riga con massima privacy nel browser.',
    },
    'srt-to-vtt': {
      title: 'Convertitore da SRT a VTT – Converti Sottotitoli in WebVTT Online | SRTConverters',
      description: 'Converti sottotitoli SRT in formato WebVTT (.vtt) online gratis. Pienamente conforme agli standard video HTML5 e player web.',
    },
    'vtt-to-srt': {
      title: 'Convertitore da VTT a SRT – Converti WebVTT in SubRip Online | SRTConverters',
      description: 'Converti sottotitoli WebVTT (.vtt) nel formato standard SRT online gratis. Compatibile con Premiere Pro, DaVinci Resolve, VLC e YouTube.',
    },
    tools: {
      title: 'Strumenti Gratuiti per Sottotitoli e SRT | SRTConverters',
      description: 'Esplora la nostra gamma completa di strumenti online gratuiti per sottotitoli. Converti TXT in SRT, SRT in Testo, SRT in VTT e VTT in SRT in totale sicurezza.',
    },


    '404': {
      title: 'Pagina Non Trovata (404) | SRTConverters',
      description: 'La pagina richiesta non è stata trovata.',
    },
  },
};
