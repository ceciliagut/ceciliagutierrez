import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-8 block">
            About
          </span>

          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-2">
                A note,
                <br />
                <span className="italic text-primary">from me.</span>
              </h2>
            </div>

            <div className="space-y-6 font-body text-base md:text-lg leading-relaxed text-muted-foreground">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                I'm Cecilia — born in Uruguay, living in Barcelona. Since October 2022, I've been
                a Senior Web Engineer at{" "}
                <span className="text-foreground font-medium">N26</span>, where I architect
                and build things for the web. Clean code, thoughtful systems, the kind of work
                that disappears when it's done well.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                But I can't contain myself to just one mode of expression. I draw. I paint —
                oils, acrylics, whatever's nearby. I make digital art. I write. It's not a side
                project or a hobby. It's the other half.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-warm-muted italic"
              >
                This site is where both halves live — the person who debugs distributed systems
                and the one who gets paint under her nails. They're the same person. Always have been.
              </motion.p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent origin-center"
        />
      </div>
    </section>
  );
};

export default AboutSection;
