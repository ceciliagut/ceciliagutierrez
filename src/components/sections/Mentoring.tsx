import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const MentoringSection = () => {
  const { t } = useLanguage();

  return (
    <section id="mentoring" className="relative py-16 md:py-24 px-8 md:px-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-body text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-6 block">
            {t.mentoring.label}
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-medium">
            {t.mentoring.heading}
            {t.mentoring.headingAccent && <>{" "}<span className="italic">{t.mentoring.headingAccent}</span></>}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-body text-base md:text-lg leading-[1.8] text-muted-foreground text-center max-w-2xl mx-auto mb-16"
        >
          {t.mentoring.description}{" "}
          <a
            href="https://mujeresit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground font-medium underline underline-offset-4 hover:text-primary transition-colors duration-300"
          >
            {t.mentoring.org}
          </a>
          {t.mentoring.descriptionEnd}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center"
        >
          <a
            href="https://calendly.com/ceciliainesgutierrez/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 border border-border
                       hover:border-foreground/20 transition-all duration-500"
          >
            <span className="font-display text-xl md:text-2xl font-medium text-foreground">
              {t.mentoring.book}
            </span>
            <ArrowUpRight
              size={18}
              className="text-muted-foreground group-hover:text-foreground
                         group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                         transition-all duration-300"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MentoringSection;
