import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ArtworkDetail from "../ArtworkDetail";

const defaultProps = {
  images: [
    { src: "/img/01.jpg", alt: "Image 1" },
    { src: "/img/02.jpg", alt: "Image 2" },
  ],
  title: "The Fallen Angel",
  subtitle: "After Cabanel",
  year: 2025,
  categoryLabel: "Oil",
  viewArtworkLabel: "View artwork",
  watchProcessLabel: "Watch process",
  backLabel: "Back to gallery",
  backHref: "/#gallery",
};

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const { initial, animate, transition, ...rest } = props;
      return <div {...rest}>{children}</div>;
    },
  },
}));

describe("ArtworkDetail", () => {
  it("renders title and subtitle", () => {
    render(<ArtworkDetail {...defaultProps} />);

    expect(screen.getByText("The Fallen Angel")).toBeInTheDocument();
    expect(screen.getByText("After Cabanel")).toBeInTheDocument();
  });

  it("renders category with year", () => {
    render(<ArtworkDetail {...defaultProps} />);

    expect(screen.getByText(/Oil — 2025/)).toBeInTheDocument();
  });

  it("renders category without year when not provided", () => {
    render(<ArtworkDetail {...defaultProps} year={undefined} />);

    const categoryEl = screen.getByText("Oil");
    expect(categoryEl).toBeInTheDocument();
    expect(categoryEl.textContent).not.toContain("—");
  });

  it("renders back links", () => {
    render(<ArtworkDetail {...defaultProps} />);

    const backLinks = screen.getAllByText("Back to gallery");
    expect(backLinks.length).toBeGreaterThanOrEqual(1);
    expect(backLinks[0].closest("a")).toHaveAttribute("href", "/#gallery");
  });

  it("shows image counter for multiple images", () => {
    render(<ArtworkDetail {...defaultProps} />);

    expect(screen.getAllByText("1 / 2").length).toBeGreaterThanOrEqual(1);
  });

  it("navigates images with keyboard arrows", () => {
    render(<ArtworkDetail {...defaultProps} />);

    expect(screen.getAllByText("1 / 2").length).toBeGreaterThanOrEqual(1);

    fireEvent.keyDown(window, { key: "ArrowRight" });
    expect(screen.getAllByText("2 / 2").length).toBeGreaterThanOrEqual(1);

    fireEvent.keyDown(window, { key: "ArrowLeft" });
    expect(screen.getAllByText("1 / 2").length).toBeGreaterThanOrEqual(1);
  });

  it("wraps around when navigating past last image", () => {
    render(<ArtworkDetail {...defaultProps} />);

    fireEvent.keyDown(window, { key: "ArrowRight" });
    fireEvent.keyDown(window, { key: "ArrowRight" });

    expect(screen.getAllByText("1 / 2").length).toBeGreaterThanOrEqual(1);
  });

  it("wraps around when navigating before first image", () => {
    render(<ArtworkDetail {...defaultProps} />);

    fireEvent.keyDown(window, { key: "ArrowLeft" });

    expect(screen.getAllByText("2 / 2").length).toBeGreaterThanOrEqual(1);
  });

  it("does not show video toggle when no videoSrc", () => {
    render(<ArtworkDetail {...defaultProps} />);

    expect(screen.queryByText("Watch process")).not.toBeInTheDocument();
  });

  it("shows video toggle when videoSrc is provided", () => {
    render(<ArtworkDetail {...defaultProps} videoSrc="/vid/01.mp4" />);

    expect(screen.getByText("Watch process")).toBeInTheDocument();
  });

  it("toggles between video and artwork view", () => {
    render(<ArtworkDetail {...defaultProps} videoSrc="/vid/01.mp4" />);

    fireEvent.click(screen.getByText("Watch process"));
    expect(screen.getByText("View artwork")).toBeInTheDocument();

    fireEvent.click(screen.getByText("View artwork"));
    expect(screen.getByText("Watch process")).toBeInTheDocument();
  });

  it("disables keyboard navigation while video is showing", () => {
    render(<ArtworkDetail {...defaultProps} videoSrc="/vid/01.mp4" />);

    fireEvent.click(screen.getByText("Watch process"));
    fireEvent.keyDown(window, { key: "ArrowRight" });

    // Switch back to artwork — should still be on image 1
    fireEvent.click(screen.getByText("View artwork"));
    expect(screen.getAllByText("1 / 2").length).toBeGreaterThanOrEqual(1);
  });

  it("does not show image counter for single image", () => {
    render(
      <ArtworkDetail
        {...defaultProps}
        images={[{ src: "/img/01.jpg", alt: "Single" }]}
      />
    );

    expect(screen.queryByText(/1 \/ 1/)).not.toBeInTheDocument();
  });

  it("does not render subtitle when not provided", () => {
    render(<ArtworkDetail {...defaultProps} subtitle={undefined} />);

    expect(screen.queryByText("After Cabanel")).not.toBeInTheDocument();
  });
});
