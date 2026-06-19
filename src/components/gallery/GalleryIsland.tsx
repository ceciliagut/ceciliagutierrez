import { useState } from "react";
import type { Artwork, ArtworkCategory } from "./types";
import { useRemoteArtworks } from "./useRemoteArtworks";
import CategoryFilters from "./CategoryFilters";
import ArtworkGrid from "./ArtworkGrid";
import Lightbox from "./Lightbox";

interface GalleryIslandProps {
  categoryLabels: Record<string, string>;
  viewArtworkLabel: string;
  watchProcessLabel: string;
}

const GalleryIsland = ({
  categoryLabels,
  viewArtworkLabel,
  watchProcessLabel,
}: GalleryIslandProps) => {
  const [activeCategory, setActiveCategory] = useState<ArtworkCategory>("all");
  const [lightboxImage, setLightboxImage] = useState<Artwork | null>(null);
  const { artworks, titles, subtitles } = useRemoteArtworks();

  const filtered =
    activeCategory === "all"
      ? artworks
      : artworks.filter((artwork) => artwork.category === activeCategory);

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
        subtitles={subtitles}
        categoryLabels={categoryLabels}
      />
      <Lightbox
        artwork={lightboxImage}
        onClose={() => setLightboxImage(null)}
        titles={titles}
        subtitles={subtitles}
        categoryLabels={categoryLabels}
        viewArtworkLabel={viewArtworkLabel}
        watchProcessLabel={watchProcessLabel}
      />
    </>
  );
};

export default GalleryIsland;
