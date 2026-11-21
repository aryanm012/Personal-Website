"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

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
      <div className="timeline-header" data-reveal>
        <h2 className="section-title" id="experience-title">Experience</h2>
        <div className="timeline-controls">
          <button
            className="button button-outline"
            type="button"
            aria-controls="experience-timeline"
            aria-label="Previous experience entries"
            disabled={!canGoBack}
            onClick={() => move(-1)}
          >
            Previous
          </button>
          <button
            className="button button-outline"
            type="button"
            aria-controls="experience-timeline"
            aria-label="Next experience entries"
            disabled={!canGoForward}
            onClick={() => move(1)}
          >
            Next
          </button>
        </div>
      </div>
      <ol
        className="timeline"
        id="experience-timeline"
        aria-label="Experience timeline"
        tabIndex={0}
        ref={trackRef}
        onScroll={updateControls}
        data-reveal
      >
        {children}
      </ol>
    </>
  );
}
