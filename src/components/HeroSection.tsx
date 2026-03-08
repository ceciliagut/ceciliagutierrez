import { motion } from "framer-motion";
import heroTexture from "@/assets/hero-texture.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0">
        <img
          src={heroTexture}
          alt=""
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-6 md:px-12 py-8">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground"
        >
          CG
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="flex gap-8 font-mono text-xs tracking-wider text-muted-foreground"
        >
          <a href="#about" className="hover:text-primary transition-colors duration-300">About</a>
          <a href="#work" className="hover:text-primary transition-colors duration-300">Work</a>
          <a href="#writing" className="hover:text-primary transition-colors duration-300">Writing</a>
          <a href="#connect" className="hover:text-primary transition-colors duration-300">Connect</a>
        </motion.div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 px-6 md:px-12 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6"
        >
          Barcelona — from Montevideo
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight mb-8"
        >
          Cecilia
          <br />
          <span className="text-gradient">Gutierrez</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
        >
          I build systems by day and make art by night.
          <br />
          <span className="text-warm-muted italic">Sometimes both at once.</span>
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.3, duration: 1, ease: "easeOut" }}
          className="mt-12 h-px bg-gradient-to-r from-primary/60 to-transparent origin-left max-w-xs"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 right-6 md:right-12 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground rotate-90 origin-center translate-y-6">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
