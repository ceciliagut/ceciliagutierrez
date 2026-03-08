import { createContext, useContext, type ReactNode } from "react";
import { translations, type Locale, type Translations } from "./translations";

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  otherLocale: Locale;
  otherLocalePath: string;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  t: translations.en,
  otherLocale: "es",
  otherLocalePath: "/es",
});

export const LanguageProvider = ({ locale, children }: { locale: Locale; children: ReactNode }) => {
  const t = translations[locale];
  const otherLocale = locale === "en" ? "es" : "en";
  const otherLocalePath = otherLocale === "en" ? "/" : `/${otherLocale}`;

  return (
    <LanguageContext.Provider value={{ locale, t, otherLocale, otherLocalePath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
