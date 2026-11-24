"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { SectionHeading } from "./SectionHeading";

export function ExperienceTimeline({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLOListElement>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  const updateControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    setCanGoBack(track.scrollLeft > 1);
    setCanGoForward(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new ResizeObserver(updateControls);
    observer.observe(track);
    return () => observer.disconnect();
  }, [updateControls]);

  function move(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;

    const [first, second] = track.children;
    const step = first && second
      ? second.getBoundingClientRect().left - first.getBoundingClientRect().left
      : track.clientWidth;

    track.scrollBy({ left: direction * step });
  }

  return (
    <>
      <div
        className="timeline-header"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "0.65rem",
          marginBottom: "1rem",
        }}
      >
        <SectionHeading id="experience-title" label="Career" title="Experience" />
        <div className="timeline-navigation" style={{ display: "flex", gap: "0.5rem", marginInlineStart: "auto" }} data-reveal>
          <button
            className="button button-outline timeline-scroll-button"
            type="button"
            aria-controls="experience-timeline"
            aria-label="Scroll to earlier experience"
            disabled={!canGoBack}
            onClick={() => move(-1)}
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            className="button button-outline timeline-scroll-button"
            type="button"
            aria-controls="experience-timeline"
            aria-label="Scroll to later experience"
            disabled={!canGoForward}
            onClick={() => move(1)}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <ol
        className="timeline"
        id="experience-timeline"
        aria-label="Experience timeline"
        tabIndex={0}
        ref={trackRef}
        style={{ scrollbarWidth: "none" }}
        onScroll={updateControls}
        data-reveal
      >
        {children}
      </ol>
    </>
  );
}
