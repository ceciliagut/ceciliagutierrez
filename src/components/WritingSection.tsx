import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WritingSection = () => {
  const { t } = useLanguage();

  const writings = [
    {
      title: "Medium",
      url: "https://medium.com/@gutierrez-cecilia",
      description: t.writing.medium,
    },
  ];

  return (
    <section id="writing" className="relative py-32 md:py-44 px-8 md:px-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-body text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-6 block">
            {t.writing.label}
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-medium">
            {t.writing.heading} <span className="italic">{t.writing.headingAccent}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {writings.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group block p-10 md:p-12 border border-border
                         hover:border-foreground/20 transition-all duration-500 relative"
            >
              <div className="flex items-start justify-between mb-8">
                <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground">
                  {item.title}
                </h3>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-foreground 
                           group-hover:translate-x-0.5 group-hover:-translate-y-0.5 
                           transition-all duration-300 mt-2"
                />
              </div>
              <p className="font-body text-sm leading-[1.8] text-muted-foreground">
                {item.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
