/**
 * Returns an alternate src with swapped extension case (.jpg <-> .JPG),
 * or null if no fallback is available.
 */
export function getFallbackSrc(src: string): string | null {
  if (src.endsWith(".jpg")) return src.replace(/\.jpg$/, ".JPG");
  if (src.endsWith(".JPG")) return src.replace(/\.JPG$/, ".jpg");
  return null;
}
