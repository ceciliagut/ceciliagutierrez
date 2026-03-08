import { motion } from "framer-motion";
import heroTexture from "@/assets/hero-texture.jpg";
import ThemeToggle from "./ThemeToggle";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background texture — full bleed, atmospheric */}
      <div className="absolute inset-0">
        <img
          src={heroTexture}
          alt=""
          className="w-full h-full object-cover opacity-30 dark:opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/50 dark:bg-background/70" />
      </div>

      {/* Navigation — centered, all-caps, wide tracking */}
      <nav className="relative z-10 flex justify-between items-center px-8 md:px-16 py-10">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-display text-xl font-semibold text-foreground"
        >
          Cecilia
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="flex items-center gap-10 font-body text-[11px] tracking-[0.25em] uppercase text-muted-foreground"
        >
          <a href="#about" className="hover:text-foreground transition-colors duration-300 hidden md:block">About</a>
          <a href="#work" className="hover:text-foreground transition-colors duration-300 hidden md:block">Work</a>
          <a href="#writing" className="hover:text-foreground transition-colors duration-300 hidden md:block">Writing</a>
          <a href="#connect" className="hover:text-foreground transition-colors duration-300 hidden md:block">Connect</a>
          <ThemeToggle />
        </motion.div>
      </nav>

      {/* Hero content — centered, dramatic */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-body text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-10"
        >
          Barcelona — from Uruguay
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-medium leading-[0.9] tracking-tight mb-8"
        >
          Cecilia
          <br />
          <span className="italic text-primary">Gutierrez</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="font-body text-base md:text-lg text-muted-foreground max-w-md leading-relaxed"
        >
          I build systems by day and make art by night.
          <br />
          <span className="italic">Sometimes both at once.</span>
        </motion.p>
      </div>

      {/* Scroll indicator — centered bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative z-10 flex flex-col items-center gap-3 pb-12"
      >
        <span className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-border"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
