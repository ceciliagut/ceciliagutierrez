import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import sunflower from "@/assets/sunflower-1.jpg";

const links = [
  {
    label: "Email",
    href: "mailto:ceciliainesgutierrez@gmail.com",
    display: "ceciliainesgutierrez@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gutierrez-cecilia/",
    display: "linkedin.com/in/gutierrez-cecilia",
  },
];

const ConnectSection = () => {
  const { t } = useLanguage();

  return (
    <section id="connect" className="relative py-32 md:py-44 px-8 md:px-16 overflow-hidden">
      {/* Sunflower background */}
      <img
        src={sunflower}
        alt="Sunflower photograph"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/70" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-body text-[11px] tracking-[0.4em] uppercase text-background/60 mb-6 block">
            {t.connect.label}
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-medium mb-6 text-background">
            {t.connect.heading} <span className="italic">{t.connect.headingAccent}</span>
          </h2>
          <p className="font-body text-background/70 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            {t.connect.description}
          </p>
        </motion.div>

        <div className="space-y-0 max-w-lg mx-auto">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label === "LinkedIn" ? "_blank" : undefined}
              rel={link.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group flex items-center justify-between py-8 border-b border-background/20
                         hover:border-background/50 transition-colors duration-300"
            >
              <div>
                <span className="font-body text-[10px] tracking-[0.4em] uppercase text-background/50 block mb-2">
                  {link.label}
                </span>
                <span className="font-body text-base md:text-lg text-background group-hover:text-primary-foreground transition-colors duration-300">
                  {link.display}
                </span>
              </div>
              <ArrowUpRight
                size={16}
                className="text-background/50 group-hover:text-background 
                         group-hover:translate-x-0.5 group-hover:-translate-y-0.5 
                         transition-all duration-300"
              />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-32 text-center"
        >
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-background/40">
            {t.connect.footer.replace("{year}", String(new Date().getFullYear()))}
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default ConnectSection;
