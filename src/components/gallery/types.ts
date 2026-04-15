export const CATEGORIES = ["all", "oil", "digital", "charcoal", "pastel"] as const;
export type ArtworkCategory = (typeof CATEGORIES)[number];

export interface ArtworkImage {
  src: string;
  alt: string;
}

export interface Artwork {
  id: string;
  images: ArtworkImage[];
  category: Exclude<ArtworkCategory, "all">;
  titleKey: string;
  span?: string;
  videoSrc?: string;
}
