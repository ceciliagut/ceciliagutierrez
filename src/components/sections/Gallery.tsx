import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Artwork, ArtworkCategory } from "@/components/gallery/types";
import { artworks } from "@/components/gallery/artworks";
import CategoryFilters from "@/components/gallery/CategoryFilters";
import ArtworkGrid from "@/components/gallery/ArtworkGrid";
import Lightbox from "@/components/gallery/Lightbox";

const GallerySection = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ArtworkCategory>("all");
  const [lightboxImage, setLightboxImage] = useState<Artwork | null>(null);

  const filtered = activeCategory === "all"
    ? artworks
    : artworks.filter((a) => a.category === activeCategory);

  return (
    <section id="work" className="relative py-10 md:py-16 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-6 block">
            {t.gallery.label}
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-medium text-card-foreground">
            {t.gallery.heading} <span className="italic">{t.gallery.headingAccent}</span>
          </h2>
        </motion.div>

        <CategoryFilters active={activeCategory} onChange={setActiveCategory} />
        <ArtworkGrid artworks={filtered} onSelect={setLightboxImage} />
      </div>

      <Lightbox artwork={lightboxImage} onClose={() => setLightboxImage(null)} />
    </section>
  );
};

export default GallerySection;
