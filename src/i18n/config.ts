export const LOCALES = ['en', 'es', 'pt', 'fr', 'de', 'id', 'tr', 'it'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export interface LocaleInfo {
  code: Locale;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  isoCode: string;
}

export const LOCALE_INFO: Record<Locale, LocaleInfo> = {
  en: { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr', isoCode: 'en-US' },
  es: { code: 'es', name: 'Spanish', nativeName: 'Español', dir: 'ltr', isoCode: 'es-ES' },
  pt: { code: 'pt', name: 'Portuguese', nativeName: 'Português', dir: 'ltr', isoCode: 'pt-BR' },
  fr: { code: 'fr', name: 'French', nativeName: 'Français', dir: 'ltr', isoCode: 'fr-FR' },
  de: { code: 'de', name: 'German', nativeName: 'Deutsch', dir: 'ltr', isoCode: 'de-DE' },
  id: { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', dir: 'ltr', isoCode: 'id-ID' },
  tr: { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', dir: 'ltr', isoCode: 'tr-TR' },
  it: { code: 'it', name: 'Italian', nativeName: 'Italiano', dir: 'ltr', isoCode: 'it-IT' },
};

export function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}
