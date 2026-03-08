import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const writings = [
  {
    title: "Medium",
    url: "https://medium.com/@gutierrez-cecilia",
    description:
      "Long-form thoughts on engineering, building for the web, and the space where technology meets creativity.",
  },
  {
    title: "Substack",
    url: "https://substack.com/@ceciliagutierrez",
    description:
      "More personal writing — essays, reflections, and the kind of thinking that doesn't fit in a code review.",
  },
];

const WritingSection = () => {
  return (
    <section id="writing" className="relative py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            Writing
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-medium mb-16">
            Words, <span className="italic">too</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
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
              className="group block p-8 md:p-10 border border-border rounded-sm bg-elevated
                         hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-2xl font-medium text-foreground">
                    {item.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground group-hover:text-primary 
                             group-hover:translate-x-1 group-hover:-translate-y-1 
                             transition-all duration-300"
                  />
                </div>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
