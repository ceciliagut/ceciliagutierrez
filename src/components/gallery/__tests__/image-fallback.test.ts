import { describe, it, expect } from "vitest";
import { getFallbackSrc } from "../image-fallback";

describe("getFallbackSrc", () => {
  it("swaps lowercase .jpg to uppercase .JPG", () => {
    expect(getFallbackSrc("https://r2.example.com/artwork/oil/test/01.jpg")).toBe(
      "https://r2.example.com/artwork/oil/test/01.JPG"
    );
  });

  it("swaps uppercase .JPG to lowercase .jpg", () => {
    expect(getFallbackSrc("https://r2.example.com/artwork/oil/test/02.JPG")).toBe(
      "https://r2.example.com/artwork/oil/test/02.jpg"
    );
  });

  it("returns null for non-jpg extensions", () => {
    expect(getFallbackSrc("https://r2.example.com/artwork/oil/test/01.png")).toBeNull();
    expect(getFallbackSrc("https://r2.example.com/artwork/oil/test/01.webp")).toBeNull();
    expect(getFallbackSrc("https://r2.example.com/artwork/oil/test/01.ARW")).toBeNull();
  });

  it("only swaps the final extension, not mid-path matches", () => {
    expect(getFallbackSrc("https://r2.example.com/.jpg/test/01.jpg")).toBe(
      "https://r2.example.com/.jpg/test/01.JPG"
    );
  });
});
