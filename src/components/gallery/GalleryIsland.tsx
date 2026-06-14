import { useState, useEffect } from "react";
import type { Artwork, ArtworkCategory } from "./types";
import { artworks } from "./artworks";
import CategoryFilters from "./CategoryFilters";
import ArtworkGrid from "./ArtworkGrid";
import Lightbox from "./Lightbox";

const BATCH_SIZE = 9;

interface GalleryIslandProps {
  titles: Record<string, string>;
  categoryLabels: Record<string, string>;
  viewArtworkLabel: string;
  watchProcessLabel: string;
  showMoreLabel: string;
}

const GalleryIsland = ({
  titles,
  categoryLabels,
  viewArtworkLabel,
  watchProcessLabel,
  showMoreLabel,
}: GalleryIslandProps) => {
  const [activeCategory, setActiveCategory] = useState<ArtworkCategory>("all");
  const [lightboxImage, setLightboxImage] = useState<Artwork | null>(null);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [activeCategory]);

  const filtered =
    activeCategory === "all"
      ? artworks
      : artworks.filter((a) => a.category === activeCategory);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <>
      <CategoryFilters
        active={activeCategory}
        onChange={setActiveCategory}
        categoryLabels={categoryLabels}
      />
      <ArtworkGrid
        artworks={visible}
        onSelect={setLightboxImage}
        titles={titles}
        categoryLabels={categoryLabels}
      />

      {hasMore && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisibleCount((c) => c + BATCH_SIZE)}
            className="font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground border border-muted-foreground/30 px-8 py-3 hover:text-foreground hover:border-foreground transition-colors duration-300"
          >
            {showMoreLabel}
          </button>
        </div>
      )}

      <Lightbox
        artwork={lightboxImage}
        onClose={() => setLightboxImage(null)}
        titles={titles}
        categoryLabels={categoryLabels}
        viewArtworkLabel={viewArtworkLabel}
        watchProcessLabel={watchProcessLabel}
      />
    </>
  );
};

export default GalleryIsland;
