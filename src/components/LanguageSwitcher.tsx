import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";

const LanguageSwitcher = () => {
  const { locale, otherLocale, otherLocalePath } = useLanguage();

  return (
    <Link
      to={otherLocalePath}
      className="font-body text-[11px] tracking-[0.15em] uppercase hover:text-foreground transition-colors duration-300"
      title={otherLocale === "es" ? "Cambiar a español" : "Switch to English"}
    >
      {locale === "en" ? "ES" : "EN"}
    </Link>
  );
};

export default LanguageSwitcher;
