export const CATEGORIES = ["oil", "digital", "charcoal", "pastel", "all"] as const;
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
  videoSrc?: string;
  year?: number;
}
