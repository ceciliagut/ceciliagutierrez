import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-16 md:py-24 px-8 md:px-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-6 block">
            {t.about.label}
          </span>
        </motion.div>

        <div className="space-y-8 font-body text-base md:text-lg leading-[1.8] text-muted-foreground text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t.about.p1}{" "}
            <a href="https://n26.com/" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium underline underline-offset-4 hover:text-primary transition-colors duration-300">{t.about.p1Company}</a> {t.about.p1End}{" "}
            <a href="https://udelar.edu.uy/" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium underline underline-offset-4 hover:text-primary transition-colors duration-300">{t.about.p1University}</a>{t.about.p1End2}
          </motion.p>

          {t.about.p2 && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {t.about.p2}
            </motion.p>
          )}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-foreground/60"
          >
            {t.about.p3}
          </motion.p>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-24 h-px bg-border origin-center max-w-xs mx-auto"
        />
      </div>
    </section>
  );
};

export default AboutSection;
