import { translations, type Locale, type Translations } from "./translations";

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}

export function getOtherLocale(locale: Locale): Locale {
  return locale === "en" ? "es" : "en";
}

export function getOtherLocalePath(locale: Locale): string {
  return locale === "en" ? "/es/" : "/";
}
