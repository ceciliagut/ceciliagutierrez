import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 md:py-44 px-8 md:px-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-6 block">
            About
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-tight">
            A note,{" "}
            <span className="italic text-primary">from me</span>
          </h2>
        </motion.div>

        <div className="space-y-8 font-body text-base md:text-lg leading-[1.8] text-muted-foreground text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            I'm Cecilia — born in Uruguay, living in Barcelona. I've been at{" "}
            <span className="text-foreground font-medium">N26</span> since 2022, growing
            into my current role as Senior Web Engineer. I architect and build things for the
            web — clean code, thoughtful systems, the kind of work that disappears when
            it's done well.
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
            className="italic text-foreground/60"
          >
            This site is where both halves live — the person who debugs distributed systems
            and the one who gets paint under her nails. They're the same person. Always have been.
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
