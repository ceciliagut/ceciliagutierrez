import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useRemoteArtworks } from "../useRemoteArtworks";
import { R2_URL, sampleManifest, noTitleManifest, subtitleManifest, duplicateSlugManifest } from "./fixtures";
import { mockFetch, mockFetchError, setLocale } from "./helpers";

vi.stubEnv("PUBLIC_R2_URL", R2_URL);

describe("useRemoteArtworks", () => {
  beforeEach(() => {
    setLocale("/");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns empty artworks initially before fetch resolves", () => {
    mockFetch(sampleManifest);
    const { result } = renderHook(() => useRemoteArtworks());

    expect(result.current.artworks).toEqual([]);
    expect(result.current.titles).toEqual({});
    expect(result.current.subtitles).toEqual({});
  });

  it("fetches gallery.json and resolves artworks", async () => {
    mockFetch(sampleManifest);
    const { result } = renderHook(() => useRemoteArtworks());

    await waitFor(() => {
      expect(result.current.artworks).toHaveLength(3);
    });

    const ids = result.current.artworks.map((artwork) => artwork.id);
    expect(ids).toEqual(["oil-fallen-angel", "oil-marble-bust", "digital-tigers"]);
  });

  it("assigns correct categories from manifest keys", async () => {
    mockFetch(sampleManifest);
    const { result } = renderHook(() => useRemoteArtworks());

    await waitFor(() => {
      expect(result.current.artworks).toHaveLength(3);
    });

    expect(result.current.artworks[0].category).toBe("oil");
    expect(result.current.artworks[1].category).toBe("oil");
    expect(result.current.artworks[2].category).toBe("digital");
  });

  it("generates correct image paths based on count", async () => {
    mockFetch(sampleManifest);
    const { result } = renderHook(() => useRemoteArtworks());

    await waitFor(() => {
      expect(result.current.artworks).toHaveLength(3);
    });

    const fallenAngel = result.current.artworks[0];
    expect(fallenAngel.images).toHaveLength(2);
    expect(fallenAngel.images[0].src).toBe(`${R2_URL}/artwork/oil/fallen-angel/01.jpg`);
    expect(fallenAngel.images[1].src).toBe(`${R2_URL}/artwork/oil/fallen-angel/02.jpg`);

    const marbleBust = result.current.artworks[1];
    expect(marbleBust.images).toHaveLength(1);
    expect(marbleBust.images[0].src).toBe(`${R2_URL}/artwork/oil/marble-bust/01.jpg`);
  });

  it("builds video src when video is specified", async () => {
    mockFetch(sampleManifest);
    const { result } = renderHook(() => useRemoteArtworks());

    await waitFor(() => {
      expect(result.current.artworks).toHaveLength(3);
    });

    const tigers = result.current.artworks[2];
    expect(tigers.videoSrc).toBe(`${R2_URL}/artwork/digital/tigers/01.mp4`);

    const fallenAngel = result.current.artworks[0];
    expect(fallenAngel.videoSrc).toBeUndefined();
  });

  it("resolves English titles when on root path", async () => {
    mockFetch(sampleManifest);
    const { result } = renderHook(() => useRemoteArtworks());

    await waitFor(() => {
      expect(result.current.titles["oil-fallen-angel"]).toBe("The Fallen Angel");
    });

    expect(result.current.titles["oil-marble-bust"]).toBe("Marble Bust");
    expect(result.current.titles["digital-tigers"]).toBe("Me Chama de Gato");
  });

  it("resolves Spanish titles when on /es path", async () => {
    setLocale("/es/");

    mockFetch(sampleManifest);
    const { result } = renderHook(() => useRemoteArtworks());

    await waitFor(() => {
      expect(result.current.titles["oil-fallen-angel"]).toBe("El Ángel Caído");
    });

    expect(result.current.titles["oil-marble-bust"]).toBe("Busto de Mármol");
  });

  it("uses title as alt text for images", async () => {
    mockFetch(sampleManifest);
    const { result } = renderHook(() => useRemoteArtworks());

    await waitFor(() => {
      expect(result.current.artworks).toHaveLength(3);
    });

    expect(result.current.artworks[0].images[0].alt).toBe("The Fallen Angel");
  });

  it("humanizes slug as alt text when title is missing", async () => {
    mockFetch(noTitleManifest);
    const { result } = renderHook(() => useRemoteArtworks());

    await waitFor(() => {
      expect(result.current.artworks).toHaveLength(1);
    });

    expect(result.current.artworks[0].images[0].alt).toBe("My New Painting");
  });

  it("resolves subtitles when provided", async () => {
    mockFetch(subtitleManifest);
    const { result } = renderHook(() => useRemoteArtworks());

    await waitFor(() => {
      expect(result.current.subtitles["oil-test-piece"]).toBe("Oil on canvas");
    });
  });

  it("generates unique IDs for same slug across categories", async () => {
    mockFetch(duplicateSlugManifest);
    const { result } = renderHook(() => useRemoteArtworks());

    await waitFor(() => {
      expect(result.current.artworks).toHaveLength(2);
    });

    const ids = result.current.artworks.map((artwork) => artwork.id);
    expect(ids).toEqual(["charcoal-portrait-study", "pastel-portrait-study"]);
  });

  it("keeps empty state when fetch fails", async () => {
    mockFetchError();
    const { result } = renderHook(() => useRemoteArtworks());

    await waitFor(() => {
      expect(result.current.artworks).toEqual([]);
    });
  });

  it("keeps empty state when response is not ok", async () => {
    mockFetch(null, false);
    const { result } = renderHook(() => useRemoteArtworks());

    await waitFor(() => {
      expect(result.current.artworks).toEqual([]);
    });
  });
});
