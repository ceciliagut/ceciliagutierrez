import { useState } from "react";
import type { Artwork, ArtworkCategory } from "./types";
import { artworks } from "./artworks";
import CategoryFilters from "./CategoryFilters";
import ArtworkGrid from "./ArtworkGrid";
import Lightbox from "./Lightbox";

interface GalleryIslandProps {
  titles: Record<string, string>;
  categoryLabels: Record<string, string>;
  viewArtworkLabel: string;
  watchProcessLabel: string;
}

const GalleryIsland = ({
  titles,
  categoryLabels,
  viewArtworkLabel,
  watchProcessLabel,
}: GalleryIslandProps) => {
  const [activeCategory, setActiveCategory] = useState<ArtworkCategory>("all");
  const [lightboxImage, setLightboxImage] = useState<Artwork | null>(null);

  const filtered =
    activeCategory === "all"
      ? artworks
      : artworks.filter((a) => a.category === activeCategory);

  return (
    <>
      <CategoryFilters
        active={activeCategory}
        onChange={setActiveCategory}
        categoryLabels={categoryLabels}
      />
      <ArtworkGrid
        artworks={filtered}
        onSelect={setLightboxImage}
        titles={titles}
        categoryLabels={categoryLabels}
      />
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
