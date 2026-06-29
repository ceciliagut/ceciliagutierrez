import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ZoomableImage from "../ZoomableImage";

const images = [
  { src: "/img/01.jpg", alt: "First" },
  { src: "/img/02.jpg", alt: "Second" },
  { src: "/img/03.jpg", alt: "Third" },
];

describe("ZoomableImage", () => {
  it("renders all images in the DOM", () => {
    render(<ZoomableImage images={images} activeIndex={0} />);

    const imgs = screen.getAllByRole("img");
    expect(imgs).toHaveLength(3);
  });

  it("sets eager loading on first image and lazy on others", () => {
    render(<ZoomableImage images={images} activeIndex={0} />);

    const imgs = screen.getAllByRole("img");
    expect(imgs[0]).toHaveAttribute("loading", "eager");
    expect(imgs[1]).toHaveAttribute("loading", "lazy");
    expect(imgs[2]).toHaveAttribute("loading", "lazy");
  });

  it("sets high fetchPriority on first image", () => {
    render(<ZoomableImage images={images} activeIndex={0} />);

    const imgs = screen.getAllByRole("img");
    expect(imgs[0]).toHaveAttribute("fetchPriority", "high");
    expect(imgs[1]).toHaveAttribute("fetchPriority", "low");
  });

  it("applies opacity-100 to active image and opacity-0 to others", () => {
    render(<ZoomableImage images={images} activeIndex={1} />);

    const imgs = screen.getAllByRole("img");
    expect(imgs[0].className).toContain("opacity-0");
    expect(imgs[1].className).toContain("opacity-100");
    expect(imgs[2].className).toContain("opacity-0");
  });
});
