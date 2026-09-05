import { LOCALES, type Locale, DEFAULT_LOCALE, LOCALE_INFO, isValidLocale } from './config';
import { ROUTES, type RouteId, getRoutePath, getAlternateLinks, findRouteByPath, type AlternateLink } from './routes';
import { UI_TRANSLATIONS, type UiStrings } from './ui';
import { TOOLS_TRANSLATIONS, type ToolsContent, type ToolDetail } from './tools';
import { SEO_TRANSLATIONS, type PageSeo } from './seo';

export {
  LOCALES,
  DEFAULT_LOCALE,
  LOCALE_INFO,
  isValidLocale,
  ROUTES,
  getRoutePath,
  getAlternateLinks,
  findRouteByPath,
};
export type { Locale, RouteId, AlternateLink, UiStrings, ToolsContent, ToolDetail, PageSeo };

export function getUiStrings(locale: Locale): UiStrings {
  return UI_TRANSLATIONS[locale] || UI_TRANSLATIONS[DEFAULT_LOCALE];
}

export function getToolsContent(locale: Locale): ToolsContent {
  return TOOLS_TRANSLATIONS[locale] || TOOLS_TRANSLATIONS[DEFAULT_LOCALE];
}

export function getPageSeo(routeId: RouteId | '404', locale: Locale): PageSeo {
  const locSeo = SEO_TRANSLATIONS[locale] || SEO_TRANSLATIONS[DEFAULT_LOCALE];
  return locSeo[routeId] || SEO_TRANSLATIONS[DEFAULT_LOCALE][routeId] || { title: 'SRTConverters', description: 'Free Online Subtitle Tools' };
}
