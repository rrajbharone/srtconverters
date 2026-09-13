import { LOCALES, type Locale, DEFAULT_LOCALE } from './config';

export type RouteId =
  | 'home'
  | 'txt-to-srt'
  | 'srt-to-text'
  | 'srt-to-vtt'
  | 'vtt-to-srt'
  | 'srt-to-ass'
  | 'ass-to-srt'
  | 'srt-to-sub'
  | 'sub-to-srt'
  | 'sbv-to-srt'
  | 'tools';

export const ROUTES: Record<RouteId, Record<Locale, string>> = {
  home: {
    en: '/',
    es: '/es/',
    pt: '/pt/',
    fr: '/fr/',
    de: '/de/',
    id: '/id/',
    tr: '/tr/',
    it: '/it/',
  },
  'txt-to-srt': {
    en: '/txt-to-srt/',
    es: '/es/convertidor-txt-a-srt/',
    pt: '/pt/conversor-txt-para-srt/',
    fr: '/fr/convertisseur-txt-en-srt/',
    de: '/de/txt-in-srt-konverter/',
    id: '/id/konverter-txt-ke-srt/',
    tr: '/tr/txt-srt-donusturucu/',
    it: '/it/convertitore-da-txt-a-srt/',
  },
  'srt-to-text': {
    en: '/srt-to-text/',
    es: '/es/convertidor-srt-a-texto/',
    pt: '/pt/conversor-srt-para-texto/',
    fr: '/fr/convertisseur-srt-en-texte/',
    de: '/de/srt-in-text-konverter/',
    id: '/id/konverter-srt-ke-teks/',
    tr: '/tr/srt-metin-donusturucu/',
    it: '/it/convertitore-da-srt-a-testo/',
  },
  'srt-to-vtt': {
    en: '/srt-to-vtt/',
    es: '/es/convertidor-srt-a-vtt/',
    pt: '/pt/conversor-srt-para-vtt/',
    fr: '/fr/convertisseur-srt-en-vtt/',
    de: '/de/srt-in-vtt-konverter/',
    id: '/id/konverter-srt-ke-vtt/',
    tr: '/tr/srt-vtt-donusturucu/',
    it: '/it/convertitore-da-srt-a-vtt/',
  },
  'vtt-to-srt': {
    en: '/vtt-to-srt/',
    es: '/es/convertidor-vtt-a-srt/',
    pt: '/pt/conversor-vtt-para-srt/',
    fr: '/fr/convertisseur-vtt-en-srt/',
    de: '/de/vtt-in-srt-konverter/',
    id: '/id/konverter-vtt-ke-srt/',
    tr: '/tr/vtt-srt-donusturucu/',
    it: '/it/convertitore-da-vtt-a-srt/',
  },
  'srt-to-ass': {
    en: '/srt-to-ass/',
    es: '/es/convertidor-srt-a-ass/',
    pt: '/pt/conversor-srt-para-ass/',
    fr: '/fr/convertisseur-srt-en-ass/',
    de: '/de/srt-in-ass-konverter/',
    id: '/id/konverter-srt-ke-ass/',
    tr: '/tr/srt-ass-donusturucu/',
    it: '/it/convertitore-da-srt-a-ass/',
  },
  'ass-to-srt': {
    en: '/ass-to-srt/',
    es: '/es/convertidor-ass-a-srt/',
    pt: '/pt/conversor-ass-para-srt/',
    fr: '/fr/convertisseur-ass-en-srt/',
    de: '/de/ass-in-srt-konverter/',
    id: '/id/konverter-ass-ke-srt/',
    tr: '/tr/ass-srt-donusturucu/',
    it: '/it/convertitore-da-ass-a-srt/',
  },
  'srt-to-sub': {
    en: '/srt-to-sub/',
    es: '/es/convertidor-srt-a-sub/',
    pt: '/pt/conversor-srt-para-sub/',
    fr: '/fr/convertisseur-srt-en-sub/',
    de: '/de/srt-in-sub-konverter/',
    id: '/id/konverter-srt-ke-sub/',
    tr: '/tr/srt-sub-donusturucu/',
    it: '/it/convertitore-da-srt-a-sub/',
  },
  'sub-to-srt': {
    en: '/sub-to-srt/',
    es: '/es/convertidor-sub-a-srt/',
    pt: '/pt/conversor-sub-para-srt/',
    fr: '/fr/convertisseur-sub-en-srt/',
    de: '/de/sub-in-srt-konverter/',
    id: '/id/konverter-sub-ke-srt/',
    tr: '/tr/sub-srt-donusturucu/',
    it: '/it/convertitore-da-sub-a-srt/',
  },
  'sbv-to-srt': {
    en: '/sbv-to-srt-converter/',
    es: '/es/convertidor-sbv-a-srt/',
    pt: '/pt/conversor-sbv-para-srt/',
    fr: '/fr/convertisseur-sbv-en-srt/',
    de: '/de/sbv-in-srt-konverter/',
    id: '/id/konverter-sbv-ke-srt/',
    tr: '/tr/sbv-srt-donusturucu/',
    it: '/it/convertitore-da-sbv-a-srt/',
  },
  tools: {
    en: '/tools/',
    es: '/es/herramientas/',
    pt: '/pt/ferramentas/',
    fr: '/fr/outils/',
    de: '/de/tools/',
    id: '/id/alat/',
    tr: '/tr/araclar/',
    it: '/it/strumenti/',
  },
};

export interface AlternateLink {
  locale: Locale;
  href: string;
  hreflang: string;
}

export function getRoutePath(routeId: RouteId, locale: Locale): string {
  return ROUTES[routeId]?.[locale] || ROUTES[routeId]?.[DEFAULT_LOCALE] || '/';
}

export function getAlternateLinks(routeId: RouteId, baseUrl = 'https://srtconverters.com'): AlternateLink[] {
  const mapping = ROUTES[routeId];
  if (!mapping) return [];

  const alternates: AlternateLink[] = LOCALES.map((locale) => ({
    locale,
    href: baseUrl + mapping[locale],
    hreflang: locale,
  }));

  // Add x-default pointing to English default
  alternates.push({
    locale: 'en',
    href: baseUrl + mapping.en,
    hreflang: 'x-default',
  });

  return alternates;
}

function normalizePath(pathname: string): string {
  let p = pathname.trim();
  if (!p.startsWith('/')) p = '/' + p;
  if (!p.endsWith('/')) p = p + '/';
  return p;
}

export function findRouteByPath(pathname: string): { routeId: RouteId; locale: Locale } | null {
  const normalized = normalizePath(pathname);
  for (const [rId, locMap] of Object.entries(ROUTES)) {
    for (const [loc, path] of Object.entries(locMap)) {
      if (normalizePath(path) === normalized) {
        return { routeId: rId as RouteId, locale: loc as Locale };
      }
    }
  }
  return null;
}
