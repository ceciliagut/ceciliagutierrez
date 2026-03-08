import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
  return (
    <section id="connect" className="relative py-32 md:py-44 px-8 md:px-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-body text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-6 block">
            Connect
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-medium mb-6">
            Say <span className="italic">hello</span>
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg max-w-md mx-auto leading-relaxed">
            Whether it's about code, art, or something in between — I'd love to hear from you.
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
              className="group flex items-center justify-between py-8 border-b border-border
                         hover:border-foreground/30 transition-colors duration-300"
            >
              <div>
                <span className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground block mb-2">
                  {link.label}
                </span>
                <span className="font-body text-base md:text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  {link.display}
                </span>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted-foreground group-hover:text-foreground 
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
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            © {new Date().getFullYear()} Cecilia Gutierrez
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default ConnectSection;
