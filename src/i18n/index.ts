import en from './en';
import es from './es';

const translations = { en, es } as const;

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof en;

export function useTranslations(locale: string): TranslationKeys {
  return translations[locale as Locale] ?? translations.en;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'es') return 'es';
  return 'en';
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}
