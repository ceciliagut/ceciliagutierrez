import { Play, Layers } from "lucide-react";
import type { Artwork } from "./types";

interface ArtworkGridProps {
  artworks: Artwork[];
  titles: Record<string, string>;
  subtitles: Record<string, string>;
  categoryLabels: Record<string, string>;
  locale: string;
}

const ArtworkGrid = ({ artworks, titles, subtitles, categoryLabels, locale }: ArtworkGridProps) => {
  const pathPrefix = locale === "es" ? "/es" : "";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {artworks.map((artwork) => (
        <a
          key={artwork.id}
          href={`${pathPrefix}/gallery/${artwork.id}`}
          className="group cursor-pointer relative overflow-hidden aspect-[3/4] shimmer block"
        >
          <img
            src={artwork.thumbnailSrc ?? artwork.images[0].src}
            alt={artwork.images[0].alt}
            loading="lazy"
            fetchPriority="low"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            onError={(e) => {
              const card = (e.currentTarget as HTMLElement).closest('.group');
              if (card) (card as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute top-4 right-4 flex gap-2">
            {artwork.images.length > 1 && (
              <div className="bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1.5 flex items-center gap-1.5">
                <Layers size={12} className="text-white/90" />
                <span className="text-white/90 text-[11px] font-body">{artwork.images.length}</span>
              </div>
            )}
            {artwork.videoSrc && (
              <div className="bg-black/50 backdrop-blur-sm rounded-full p-1.5">
                <Play size={12} className="text-white/90" />
              </div>
            )}
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pt-16 pb-5 px-5 group-hover:from-black/80 group-hover:via-black/50 transition-all duration-500">
            <p className="font-display text-lg text-white drop-shadow-sm">{titles[artwork.titleKey] || artwork.titleKey.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}</p>
            <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500">
              {subtitles[artwork.titleKey] && (
                <p className="font-body text-xs text-white/80 mt-1">{subtitles[artwork.titleKey]}</p>
              )}
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/70 mt-1">
                {categoryLabels[artwork.category]}{artwork.year ? ` — ${artwork.year}` : ""}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ArtworkGrid;
