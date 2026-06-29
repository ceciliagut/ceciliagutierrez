import { useState } from "react";
import type { ArtworkCategory } from "./types";
import { useRemoteArtworks } from "./useRemoteArtworks";
import CategoryFilters from "./CategoryFilters";
import ArtworkGrid from "./ArtworkGrid";

interface GalleryIslandProps {
  categoryLabels: Record<string, string>;
  locale: string;
}

const GalleryIsland = ({ categoryLabels, locale }: GalleryIslandProps) => {
  const [activeCategory, setActiveCategory] = useState<ArtworkCategory>("oil");
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
        titles={titles}
        subtitles={subtitles}
        categoryLabels={categoryLabels}
        locale={locale}
      />
    </>
  );
};

export default GalleryIsland;
