import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Image } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

import drawing4 from "@/assets/artwork/drawing-4.png";
import drawing5 from "@/assets/artwork/drawing-5.png";
import drawing6 from "@/assets/artwork/drawing-6.png";
import painting4 from "@/assets/artwork/painting-4.png";
import drawing7 from "@/assets/artwork/drawing-7.png";
import video1 from "@/assets/artwork/video-1.mp4";
import video2 from "@/assets/artwork/video-2.mp4";
import digitalTigers from "@/assets/artwork/digital-tigers.png";
import digitalHendrix from "@/assets/artwork/digital-hendrix.png";
import pastel1 from "@/assets/artwork/pastel-1.png";
import charcoal1 from "@/assets/artwork/charcoal-1.png";
import painting5 from "@/assets/artwork/painting-5.png";
import charcoal2 from "@/assets/artwork/charcoal-2.png";

type ArtworkCategory = "all" | "charcoal" | "pastel" | "digital" | "oil";

interface Artwork {
  src: string;
  alt: string;
  category: Exclude<ArtworkCategory, "all">;
  titleKey: string;
  span?: string;
  videoSrc?: string;
}

const artworks: Artwork[] = [
  { src: drawing4, alt: "Charcoal still life of a jug on easel", category: "charcoal", titleKey: "jarra" },
  { src: digitalTigers, alt: "Expressive digital painting of tigers", category: "digital", titleKey: "tigers", videoSrc: video1 },
  { src: drawing5, alt: "Classical bust portrait in charcoal", category: "charcoal", titleKey: "busto", span: "md:row-span-2" },
  { src: pastel1, alt: "Pastel portrait of a woman", category: "pastel", titleKey: "pastelRetrato" },
  { src: drawing6, alt: "Charcoal studies of facial features — eye, nose, lips", category: "charcoal", titleKey: "anatomicos" },
  { src: painting4, alt: "Pastel portrait study after old master", category: "pastel", titleKey: "estudioRetrato" },
  { src: digitalHendrix, alt: "Digital portrait of Jimi Hendrix", category: "digital", titleKey: "hendrix", videoSrc: video2 },
  { src: charcoal1, alt: "Charcoal study of a veiled bust", category: "charcoal", titleKey: "velo", span: "md:row-span-2" },
  { src: drawing7, alt: "Charcoal hand study with plaster cast", category: "charcoal", titleKey: "mano" },
  { src: painting5, alt: "Digital painting of a man with a dog and blue figure", category: "digital", titleKey: "rubel" },
  { src: charcoal2, alt: "Charcoal portrait study in art studio", category: "charcoal", titleKey: "retratoCarbon" },
];

const categoryKeys: ArtworkCategory[] = ["all", "oil", "digital", "charcoal", "pastel"];

const GallerySection = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ArtworkCategory>("all");
  const [lightboxImage, setLightboxImage] = useState<Artwork | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  const filtered = activeCategory === "all"
    ? artworks
    : artworks.filter((a) => a.category === activeCategory);

  const openLightbox = (artwork: Artwork) => {
    setLightboxImage(artwork);
    setShowVideo(false);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setShowVideo(false);
  };

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

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center gap-8 mb-16 font-body text-[11px] tracking-[0.2em] uppercase"
        >
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`transition-colors duration-300 pb-2 border-b ${
                activeCategory === key
                  ? "text-foreground border-foreground"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              {t.gallery.categories[key]}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((artwork) => (
              <motion.div
                key={artwork.titleKey}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`group cursor-pointer relative overflow-hidden ${artwork.span || ""}`}
                onClick={() => openLightbox(artwork)}
              >
                <img
                  src={artwork.src}
                  alt={artwork.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {artwork.videoSrc && (
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Play size={14} className="text-foreground" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-end p-6">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-display text-xl text-white">{t.gallery.titles[artwork.titleKey]}</p>
                    <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/70 mt-1">
                      {t.gallery.categories[artwork.category]}
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
            onClick={closeLightbox}
          >
            <button
              className="absolute top-8 right-8 text-muted-foreground hover:text-foreground transition-colors"
              onClick={closeLightbox}
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
              {showVideo && lightboxImage.videoSrc ? (
                <video
                  src={lightboxImage.videoSrc}
                  controls
                  autoPlay
                  playsInline
                  className="max-w-full max-h-[80vh] object-contain"
                />
              ) : (
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              )}
              <div className="mt-6 text-center">
                <p className="font-display text-2xl text-foreground">{t.gallery.titles[lightboxImage.titleKey]}</p>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-2">
                  {t.gallery.categories[lightboxImage.category]}
                </p>
                {lightboxImage.videoSrc && (
                  <button
                    onClick={() => setShowVideo(!showVideo)}
                    className="mt-4 inline-flex items-center gap-2 font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground/30 hover:border-foreground pb-1"
                  >
                    {showVideo ? (
                      <>
                        <Image size={12} />
                        {t.gallery.viewArtwork}
                      </>
                    ) : (
                      <>
                        <Play size={12} />
                        {t.gallery.watchProcess}
                      </>
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
