"use client";

import { useEffect } from "react";

export function PageMotion() {
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      !window.matchMedia("(prefers-reduced-motion: no-preference)").matches
    ) {
      return;
    }

    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]")).filter(
      (target) => target.getBoundingClientRect().top >= window.innerHeight,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting } of entries) {
          if (isIntersecting) {
            target.setAttribute("data-reveal-state", "visible");
            observer.unobserve(target);
          }
        }
      },
      { rootMargin: "0px 0px -24px" },
    );

    for (const target of targets) {
      target.setAttribute("data-reveal-state", "pending");
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
      for (const target of targets) {
        target.removeAttribute("data-reveal-state");
      }
    };
  }, []);

  return null;
}
