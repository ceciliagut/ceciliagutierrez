import { motion } from "framer-motion";
import { Play, Layers } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Artwork } from "./types";

interface ArtworkGridProps {
  artworks: Artwork[];
  onSelect: (artwork: Artwork) => void;
}

const ArtworkGrid = ({ artworks, onSelect }: ArtworkGridProps) => {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {artworks.map((artwork) => (
        <motion.div
          key={artwork.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`group cursor-pointer relative overflow-hidden ${artwork.span || ""}`}
          onClick={() => onSelect(artwork)}
        >
          <img
            src={artwork.images[0].src}
            alt={artwork.images[0].alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {artwork.images.length > 1 && (
              <div className="bg-background/80 backdrop-blur-sm rounded-full p-2">
                <Layers size={14} className="text-foreground" />
              </div>
            )}
            {artwork.videoSrc && (
              <div className="bg-background/80 backdrop-blur-sm rounded-full p-2">
                <Play size={14} className="text-foreground" />
              </div>
            )}
          </div>
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
    </div>
  );
};

export default ArtworkGrid;
