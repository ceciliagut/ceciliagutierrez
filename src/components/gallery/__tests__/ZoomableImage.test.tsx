import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
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

  it("active image is relative (for layout) but invisible before load", () => {
    render(<ZoomableImage images={images} activeIndex={1} />);

    const imgs = screen.getAllByRole("img");
    expect(imgs[1].className).toContain("relative");
    expect(imgs[1].className).toContain("opacity-0");
  });

  it("active image becomes visible after load", () => {
    render(<ZoomableImage images={images} activeIndex={1} />);

    const imgs = screen.getAllByRole("img");
    fireEvent.load(imgs[1]);
    expect(imgs[1].className).toContain("relative");
    expect(imgs[1].className).toContain("opacity-100");
  });

  it("inactive images stay absolute and hidden even after load", () => {
    render(<ZoomableImage images={images} activeIndex={1} />);

    const imgs = screen.getAllByRole("img");
    fireEvent.load(imgs[0]);
    expect(imgs[0].className).toContain("absolute");
    expect(imgs[0].className).toContain("opacity-0");
  });

  it("shows image immediately if already loaded at mount (hydration)", () => {
    // Simulate an image that loaded before React hydration
    const originalComplete = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, "complete");
    const originalNaturalWidth = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, "naturalWidth");
    Object.defineProperty(HTMLImageElement.prototype, "complete", { get: () => true, configurable: true });
    Object.defineProperty(HTMLImageElement.prototype, "naturalWidth", { get: () => 800, configurable: true });

    render(<ZoomableImage images={images} activeIndex={0} />);

    const imgs = screen.getAllByRole("img");
    expect(imgs[0].className).toContain("opacity-100");

    // Restore
    if (originalComplete) Object.defineProperty(HTMLImageElement.prototype, "complete", originalComplete);
    if (originalNaturalWidth) Object.defineProperty(HTMLImageElement.prototype, "naturalWidth", originalNaturalWidth);
  });

  it("retries with uppercase .JPG on error", () => {
    render(<ZoomableImage images={images} activeIndex={0} />);

    const imgs = screen.getAllByRole("img");
    fireEvent.error(imgs[0]);
    expect(imgs[0]).toHaveAttribute("src", "/img/01.JPG");
  });
});
