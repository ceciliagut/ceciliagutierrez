import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ArtworkGrid from "../ArtworkGrid";
import type { Artwork } from "../types";

const artworks: Artwork[] = [
  {
    id: "oil-fallen-angel",
    images: [{ src: "/img/01.jpg", alt: "The Fallen Angel" }],
    category: "oil",
    titleKey: "oil-fallen-angel",
    year: 2025,
  },
  {
    id: "digital-tigers",
    images: [
      { src: "/img/t1.jpg", alt: "Tigers" },
      { src: "/img/t2.jpg", alt: "Tigers" },
    ],
    category: "digital",
    titleKey: "digital-tigers",
    videoSrc: "/vid/01.mp4",
  },
];

const titles: Record<string, string> = {
  "oil-fallen-angel": "The Fallen Angel",
  "digital-tigers": "Me Chama de Gato",
};

const subtitles: Record<string, string> = {
  "oil-fallen-angel": "After Cabanel",
};

const categoryLabels: Record<string, string> = {
  oil: "Oil",
  digital: "Digital",
};

describe("ArtworkGrid", () => {
  it("renders links to detail pages for each artwork", () => {
    render(
      <ArtworkGrid
        artworks={artworks}
        titles={titles}
        subtitles={subtitles}
        categoryLabels={categoryLabels}
        locale="en"
      />
    );

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute("href", "/gallery/oil-fallen-angel");
    expect(links[1]).toHaveAttribute("href", "/gallery/digital-tigers");
  });

  it("uses /es prefix for Spanish locale", () => {
    render(
      <ArtworkGrid
        artworks={artworks}
        titles={titles}
        subtitles={subtitles}
        categoryLabels={categoryLabels}
        locale="es"
      />
    );

    const links = screen.getAllByRole("link");
    expect(links[0]).toHaveAttribute("href", "/es/gallery/oil-fallen-angel");
  });

  it("displays artwork title from titles record", () => {
    render(
      <ArtworkGrid
        artworks={artworks}
        titles={titles}
        subtitles={subtitles}
        categoryLabels={categoryLabels}
        locale="en"
      />
    );

    expect(screen.getByText("The Fallen Angel")).toBeInTheDocument();
    expect(screen.getByText("Me Chama de Gato")).toBeInTheDocument();
  });

  it("displays subtitle when available", () => {
    render(
      <ArtworkGrid
        artworks={artworks}
        titles={titles}
        subtitles={subtitles}
        categoryLabels={categoryLabels}
        locale="en"
      />
    );

    expect(screen.getByText("After Cabanel")).toBeInTheDocument();
  });

  it("shows year when artwork has one", () => {
    render(
      <ArtworkGrid
        artworks={artworks}
        titles={titles}
        subtitles={subtitles}
        categoryLabels={categoryLabels}
        locale="en"
      />
    );

    expect(screen.getByText(/Oil — 2025/)).toBeInTheDocument();
  });

  it("shows category without year when artwork has none", () => {
    render(
      <ArtworkGrid
        artworks={artworks}
        titles={titles}
        subtitles={subtitles}
        categoryLabels={categoryLabels}
        locale="en"
      />
    );

    expect(screen.getByText("Digital")).toBeInTheDocument();
  });

  it("renders first image of each artwork", () => {
    render(
      <ArtworkGrid
        artworks={artworks}
        titles={titles}
        subtitles={subtitles}
        categoryLabels={categoryLabels}
        locale="en"
      />
    );

    const images = screen.getAllByRole("img");
    expect(images[0]).toHaveAttribute("src", "/img/01.jpg");
    expect(images[1]).toHaveAttribute("src", "/img/t1.jpg");
  });
});
