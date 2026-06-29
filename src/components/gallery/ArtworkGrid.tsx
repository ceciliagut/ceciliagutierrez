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
            src={artwork.images[0].src}
            alt={artwork.images[0].alt}
            loading="lazy"
            fetchPriority="low"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            onError={(e) => {
              const card = (e.currentTarget as HTMLElement).closest('.group');
              if (card) (card as HTMLElement).style.display = 'none';
            }}
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
              <p className="font-display text-xl text-white">{titles[artwork.titleKey] || artwork.titleKey.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}</p>
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
