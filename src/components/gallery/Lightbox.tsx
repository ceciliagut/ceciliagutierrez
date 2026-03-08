import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Image } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Artwork } from "./types";

interface LightboxProps {
  artwork: Artwork | null;
  onClose: () => void;
}

const Lightbox = ({ artwork, onClose }: LightboxProps) => {
  const { t } = useLanguage();
  const [showVideo, setShowVideo] = useState(false);

  const handleClose = () => {
    setShowVideo(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-8"
          onClick={handleClose}
        >
          <button
            className="absolute top-8 right-8 text-muted-foreground hover:text-foreground transition-colors"
            onClick={handleClose}
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
            {showVideo && artwork.videoSrc ? (
              <video
                src={artwork.videoSrc}
                controls
                autoPlay
                playsInline
                className="max-w-full max-h-[80vh] object-contain"
              />
            ) : (
              <img
                src={artwork.src}
                alt={artwork.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
            )}
            <div className="mt-6 text-center">
              <p className="font-display text-2xl text-foreground">{t.gallery.titles[artwork.titleKey]}</p>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-2">
                {t.gallery.categories[artwork.category]}
              </p>
              {artwork.videoSrc && (
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
  );
};

export default Lightbox;
