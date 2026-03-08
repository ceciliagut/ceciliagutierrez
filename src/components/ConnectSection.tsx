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
    <section id="connect" className="relative py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            Connect
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-medium mb-4">
            Say <span className="italic">hello</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-16 max-w-md">
            Whether it's about code, art, or something in between — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="space-y-0">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label === "LinkedIn" ? "_blank" : undefined}
              rel={link.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group flex items-center justify-between py-6 border-b border-border
                         hover:border-primary/40 transition-colors duration-300"
            >
              <div>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-1">
                  {link.label}
                </span>
                <span className="font-body text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  {link.display}
                </span>
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted-foreground group-hover:text-primary 
                         group-hover:translate-x-1 group-hover:-translate-y-1 
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
          className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            © {new Date().getFullYear()} Cecilia Gutierrez
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default ConnectSection;
