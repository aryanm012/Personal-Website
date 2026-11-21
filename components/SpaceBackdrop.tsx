"use client";

import { useEffect, useRef } from "react";

const fullCircle = Math.PI * 2;

function createStars(count: number) {
  let seed = 37;
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };

  return Array.from({ length: count }, () => ({
    x: random(),
    y: random(),
    depth: 0.18 + random() * 0.82,
    brightness: random(),
    warm: random() > 0.83,
  }));
}

const stars = createStars(230);

function drawPlanet(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  ringed: boolean,
) {
  ctx.save();
  ctx.translate(x, y);

  const glow = ctx.createRadialGradient(0, 0, radius * 0.88, 0, 0, radius * 1.65);
  glow.addColorStop(0, ringed ? "rgba(150, 123, 244, 0.36)" : "rgba(94, 155, 222, 0.25)");
  glow.addColorStop(1, "transparent");
  ctx.fillStyle = glow;
  ctx.fillRect(-radius * 1.7, -radius * 1.7, radius * 3.4, radius * 3.4);

  function drawRings(front: boolean) {
    ctx.strokeStyle = front ? "rgba(195, 173, 250, 0.48)" : "rgba(160, 134, 224, 0.25)";
    ctx.lineWidth = Math.max(0.7, radius * 0.012);
    for (const distance of [1.28, 1.35, 1.43, 1.58, 1.67, 1.74]) {
      const ring = radius * distance;
      ctx.beginPath();
      // The minor axis is the projection of the ring plane at an inclined angle.
      ctx.ellipse(0, 0, ring, ring * 0.32, -0.31, front ? 0 : Math.PI, front ? Math.PI : fullCircle);
      ctx.stroke();
    }
  }

  if (ringed) drawRings(false);

  const surface = ctx.createRadialGradient(
    -radius * 0.57, -radius * 0.6, radius * 0.02,
    radius * 0.12, radius * 0.29, radius * 1.2,
  );
  surface.addColorStop(0, ringed ? "#b6a2e4" : "#84aed4");
  surface.addColorStop(0.36, ringed ? "#594778" : "#315477");
  surface.addColorStop(0.73, ringed ? "#231b3f" : "#101a34");
  surface.addColorStop(1, "#080914");
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, fullCircle);
  ctx.fillStyle = surface;
  ctx.fill();
  ctx.strokeStyle = ringed ? "rgba(214, 198, 255, 0.32)" : "rgba(160, 200, 241, 0.3)";
  ctx.lineWidth = 1;
  ctx.stroke();

  if (ringed) {
    ctx.save();
    ctx.clip();
    ctx.rotate(-0.31);
    ctx.strokeStyle = "rgba(204, 181, 243, 0.13)";
    ctx.lineWidth = radius * 0.035;
    for (const latitude of [-0.47, -0.28, -0.19, 0.06, 0.14, 0.34, 0.56]) {
      ctx.beginPath();
      ctx.ellipse(0, radius * latitude, radius, radius * 0.24, 0, 0, Math.PI);
      ctx.stroke();
    }
    ctx.restore();
    drawRings(true);
  }

  ctx.restore();
}

export function SpaceBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const element = canvasRef.current;
    const context = element?.getContext("2d");
    if (!element || !context) return;

    const canvas = element;
    const ctx = context;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame: number | undefined;
    let width = 0;
    let height = 0;

    function render() {
      frame = undefined;
      ctx.clearRect(0, 0, width, height);
      if (!width || !height) return;

      const scroll = reducedMotion.matches ? 0 : window.scrollY;
      const count = Math.min(stars.length, Math.max(80, Math.round(width * height / 4200)));
      const fieldHeight = height + 20;
      for (let index = 0; index < count; index++) {
        const star = stars[index];
        const offset = (star.y * fieldHeight - scroll * star.depth * 0.46) % fieldHeight;
        const y = (offset + fieldHeight) % fieldHeight - 10;
        const x = star.x * width;
        const size = 0.45 + star.depth * (0.45 + star.brightness * 0.7);
        const alpha = 0.18 + star.brightness * 0.68;
        ctx.fillStyle = star.warm ? `rgba(251, 219, 188, ${alpha})` : `rgba(219, 229, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, fullCircle);
        ctx.fill();
      }

      const smallScreen = width < 760;
      const orbit = Math.sin(scroll / 1050);
      ctx.globalAlpha = smallScreen ? 0.53 : 0.86;
      drawPlanet(
        ctx,
        width * (smallScreen ? 0.96 : 0.82) + orbit * width * 0.055,
        height * (0.32 - orbit * 0.18),
        Math.min(width * (smallScreen ? 0.27 : 0.155), height * 0.23, 248),
        true,
      );
      ctx.globalAlpha = smallScreen ? 0.35 : 0.58;
      drawPlanet(ctx, width * (0.13 - orbit * 0.08), height * (0.88 - orbit * 0.12), Math.min(width * 0.065, 82), false);
      ctx.globalAlpha = 1;
    }

    function schedule() {
      if (frame === undefined) frame = window.requestAnimationFrame(render);
    }

    function resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const scale = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = Math.round(width * scale);
      canvas.height = Math.round(height * scale);
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      schedule();
    }

    function onScroll() {
      if (!reducedMotion.matches) schedule();
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    reducedMotion.addEventListener("change", schedule);

    return () => {
      if (frame !== undefined) window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      reducedMotion.removeEventListener("change", schedule);
    };
  }, []);

  return (
    <div className="space-backdrop" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
