import { motion } from "framer-motion";
import heroPhoto from "@/assets/hero-photo-bw.jpg";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* White header bar */}
      <nav className="bg-background flex justify-between items-center px-8 md:px-16 py-8">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-display text-xl font-semibold text-foreground"
        >
          Cecilia
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex items-center gap-10 font-body text-[11px] tracking-[0.25em] uppercase text-muted-foreground"
        >
          <a href="#about" className="hover:text-foreground transition-colors duration-300 hidden md:block">{t.nav.about}</a>
          <a href="#work" className="hover:text-foreground transition-colors duration-300 hidden md:block">{t.nav.work}</a>
          <a href="#writing" className="hover:text-foreground transition-colors duration-300 hidden md:block">{t.nav.writing}</a>
          <a href="#connect" className="hover:text-foreground transition-colors duration-300 hidden md:block">{t.nav.connect}</a>
          <LanguageSwitcher />
          <ThemeToggle />
        </motion.div>
      </nav>

      {/* Hero image section */}
      <section className="relative h-[70vh] max-h-[700px] md:max-h-[800px] flex flex-col">
        <div className="absolute inset-0 z-0">
          <img
            src={heroPhoto}
            alt="Cecilia Gutierrez smiling at a train station"
            loading="eager"
            className="w-full h-full object-cover"
            style={{ objectPosition: '50% 100%' }}
          />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-body text-[11px] tracking-[0.4em] uppercase text-white/60 mb-10"
          >
            {t.hero.location}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-body text-sm md:text-base tracking-wide text-white/60 mb-3"
          >
            {t.hero.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-medium leading-[0.9] tracking-tight text-white"
          >
            Cecilia
            <br />
            <span className="italic">Gutierrez</span>
          </motion.h1>

          {(t.hero.tagline || t.hero.taglineItalic) && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="font-body text-base md:text-lg text-white/70 max-w-md leading-relaxed mt-10"
            >
              {t.hero.tagline}
              {t.hero.taglineItalic && <><br /><span className="italic">{t.hero.taglineItalic}</span></>}
            </motion.p>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="relative z-10 flex flex-col items-center gap-3 pb-12"
        >
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-white/50">
            {t.hero.scroll}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-8 bg-white/30"
          />
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
