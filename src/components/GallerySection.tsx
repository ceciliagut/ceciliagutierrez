import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import painting1 from "@/assets/artwork/painting-1.jpg";
import painting2 from "@/assets/artwork/painting-2.jpg";
import painting3 from "@/assets/artwork/painting-3.jpg";
import drawing1 from "@/assets/artwork/drawing-1.jpg";
import drawing2 from "@/assets/artwork/drawing-2.jpg";
import drawing3 from "@/assets/artwork/drawing-3.jpg";
import digital1 from "@/assets/artwork/digital-1.jpg";
import digital2 from "@/assets/artwork/digital-2.jpg";
import digital3 from "@/assets/artwork/digital-3.jpg";
import video1 from "@/assets/artwork/video-1.mp4";
import video2 from "@/assets/artwork/video-2.mp4";

type ArtworkCategory = "all" | "paintings" | "drawings" | "digital" | "video";

interface Artwork {
  src: string;
  alt: string;
  category: ArtworkCategory;
  title: string;
  span?: string;
  type?: "image" | "video";
}

const artworks: Artwork[] = [
  { src: painting1, alt: "Abstract landscape in warm earth tones", category: "paintings", title: "Tierra Adentro", span: "md:row-span-2" },
  { src: digital1, alt: "Glitch art composition with amber accents", category: "digital", title: "Signal / Noise" },
  { src: drawing1, alt: "Botanical ink illustration", category: "drawings", title: "Herbarium I" },
  { src: video1, alt: "Ilustración sin título", category: "video", title: "Ilustración sin título", type: "video" },
  { src: painting2, alt: "Expressive portrait in golden tones", category: "paintings", title: "Retrato con Luz" },
  { src: drawing2, alt: "Gestural charcoal figure drawing", category: "drawings", title: "Estudio en Carbón", span: "md:row-span-2" },
  { src: digital2, alt: "Mixed media digital collage", category: "digital", title: "Fragmentos" },
  { src: video2, alt: "Lover Man - Jimi Hendrix", category: "video", title: "Lover Man", type: "video" },
  { src: painting3, alt: "Abstract composition in navy and amber", category: "paintings", title: "Nocturno" },
  { src: drawing3, alt: "Surreal pen and ink illustration", category: "drawings", title: "El Bosque Interior" },
  { src: digital3, alt: "Abstract geometric digital art", category: "digital", title: "Geometría Orgánica" },
];

const categories: { key: ArtworkCategory; label: string }[] = [
  { key: "all", label: "Everything" },
  { key: "paintings", label: "Paintings" },
  { key: "drawings", label: "Drawings" },
  { key: "digital", label: "Digital" },
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState<ArtworkCategory>("all");
  const [lightboxImage, setLightboxImage] = useState<Artwork | null>(null);

  const filtered = activeCategory === "all"
    ? artworks
    : artworks.filter((a) => a.category === activeCategory);

  return (
    <section id="work" className="relative py-32 md:py-44 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-6 block">
            Work
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-medium">
            The other <span className="italic">language</span>
          </h2>
        </motion.div>

        {/* Category filters — centered */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center gap-8 mb-16 font-body text-[11px] tracking-[0.2em] uppercase"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`transition-colors duration-300 pb-2 border-b ${
                activeCategory === cat.key
                  ? "text-foreground border-foreground"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((artwork) => (
              <motion.div
                key={artwork.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`group cursor-pointer relative overflow-hidden ${artwork.span || ""}`}
                onClick={() => setLightboxImage(artwork)}
              >
                <img
                  src={artwork.src}
                  alt={artwork.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/70 transition-all duration-500 flex items-end p-6">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-display text-xl text-foreground">{artwork.title}</p>
                    <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">
                      {artwork.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-8"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-8 right-8 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setLightboxImage(null)}
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="mt-6 text-center">
                <p className="font-display text-2xl text-foreground">{lightboxImage.title}</p>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-2">
                  {lightboxImage.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
