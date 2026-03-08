import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Artwork } from "./types";

interface ArtworkGridProps {
  artworks: Artwork[];
  onSelect: (artwork: Artwork) => void;
}

const ArtworkGrid = ({ artworks, onSelect }: ArtworkGridProps) => {
  const { t } = useLanguage();

  return (
    <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <AnimatePresence mode="popLayout">
        {artworks.map((artwork) => (
          <motion.div
            key={artwork.titleKey}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className={`group cursor-pointer relative overflow-hidden ${artwork.span || ""}`}
            onClick={() => onSelect(artwork)}
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
  );
};

export default ArtworkGrid;
