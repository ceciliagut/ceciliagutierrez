export const CATEGORIES = ["all", "oil", "digital", "charcoal", "pastel"] as const;
export type ArtworkCategory = (typeof CATEGORIES)[number];

export interface Artwork {
  src: string;
  alt: string;
  category: Exclude<ArtworkCategory, "all">;
  titleKey: string;
  span?: string;
  videoSrc?: string;
}
