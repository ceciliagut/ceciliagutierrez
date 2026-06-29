import { describe, it, expect, vi, afterEach } from "vitest";
import { fetchArtworks } from "../gallery-data";
import { R2_URL, sampleManifest, noTitleManifest, subtitleManifest } from "./fixtures";
import { mockFetch } from "./helpers";

vi.stubEnv("PUBLIC_R2_URL", R2_URL);

describe("fetchArtworks", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns artwork page data from manifest", async () => {
    mockFetch(sampleManifest);
    const artworks = await fetchArtworks();

    expect(artworks).toHaveLength(3);
    expect(artworks.map((a) => a.slug)).toEqual([
      "oil-fallen-angel",
      "oil-marble-bust",
      "digital-tigers",
    ]);
  });

  it("builds correct image paths", async () => {
    mockFetch(sampleManifest);
    const artworks = await fetchArtworks();

    const fallenAngel = artworks[0];
    expect(fallenAngel.images).toHaveLength(2);
    expect(fallenAngel.images[0].src).toBe(`${R2_URL}/artwork/oil/fallen-angel/01.jpg`);
    expect(fallenAngel.images[1].src).toBe(`${R2_URL}/artwork/oil/fallen-angel/02.jpg`);

    const marbleBust = artworks[1];
    expect(marbleBust.images).toHaveLength(1);
  });

  it("includes both localized titles", async () => {
    mockFetch(sampleManifest);
    const artworks = await fetchArtworks();

    expect(artworks[0].title).toEqual({ en: "The Fallen Angel", es: "El Ángel Caído" });
  });

  it("includes both localized subtitles", async () => {
    mockFetch(subtitleManifest);
    const artworks = await fetchArtworks();

    expect(artworks[0].subtitle).toEqual({ en: "Oil on canvas", es: "Óleo sobre lienzo" });
  });

  it("humanizes slug when title is missing", async () => {
    mockFetch(noTitleManifest);
    const artworks = await fetchArtworks();

    expect(artworks[0].title).toEqual({ en: "My New Painting", es: "My New Painting" });
  });

  it("sets empty string for missing subtitles", async () => {
    mockFetch(sampleManifest);
    const artworks = await fetchArtworks();

    expect(artworks[0].subtitle).toEqual({ en: "", es: "" });
  });

  it("includes videoSrc when video is specified", async () => {
    mockFetch(sampleManifest);
    const artworks = await fetchArtworks();

    const tigers = artworks.find((a) => a.slug === "digital-tigers");
    expect(tigers?.videoSrc).toBe(`${R2_URL}/artwork/digital/tigers/01.mp4`);
  });

  it("omits videoSrc when no video", async () => {
    mockFetch(sampleManifest);
    const artworks = await fetchArtworks();

    expect(artworks[0].videoSrc).toBeUndefined();
  });

  it("includes year when provided", async () => {
    const manifest = {
      oil: [{ slug: "test", title: { en: "Test", es: "Test" }, year: 2025 }],
    };
    mockFetch(manifest);
    const artworks = await fetchArtworks();

    expect(artworks[0].year).toBe(2025);
  });

  it("omits year when not provided", async () => {
    mockFetch(sampleManifest);
    const artworks = await fetchArtworks();

    expect(artworks[0].year).toBeUndefined();
  });

  it("throws when fetch response is not ok", async () => {
    mockFetch(null, false);

    await expect(fetchArtworks()).rejects.toThrow("Failed to fetch gallery manifest");
  });

  it("assigns category from manifest keys", async () => {
    mockFetch(sampleManifest);
    const artworks = await fetchArtworks();

    expect(artworks[0].category).toBe("oil");
    expect(artworks[2].category).toBe("digital");
  });
});
