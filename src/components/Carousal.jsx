import React, { useRef, useEffect } from "react";

export default function AnimatedGradient() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d", { alpha: false });
    if (!ctx) return;

    const col = (x, y, r, g, b) => {
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(x, y, 1, 1);
    };

    // Curated BeeStack luxury tech palette — prevents muddy/olive color drift
    const cNavy = [10, 16, 32];     // Deep midnight obsidian base
    const cAmber = [252, 171, 30];  // Signature BeeStack amber
    const cCyan = [0, 201, 167];    // Electric cyan/teal accent
    const cViolet = [79, 70, 229];  // Royal tech violet depth

    const getPixelRgb = (x, y, t) => {
      // Fluid sinusoidal fields normalized 0..1
      const w1 = (Math.sin(x * 0.16 + t * 0.6) + 1) * 0.5;
      const w2 = (Math.cos(y * 0.14 - t * 0.45 + x * 0.06) + 1) * 0.5;
      const w3 = (Math.sin((x * 0.08 - y * 0.08) + t * 0.75) + 1) * 0.5;

      // Soft non-linear highlight distributions
      const aW = Math.pow(w1 * w2, 1.7) * 0.8;
      const cW = Math.pow((1 - w1) * w3, 1.9) * 0.6;
      const vW = Math.pow(w2 * (1 - w3), 1.8) * 0.5;

      const baseWeight = Math.max(0, 1 - aW - cW - vW);

      const r = Math.round(cNavy[0] * baseWeight + cAmber[0] * aW + cCyan[0] * cW + cViolet[0] * vW);
      const g = Math.round(cNavy[1] * baseWeight + cAmber[1] * aW + cCyan[1] * cW + cViolet[1] * vW);
      const b = Math.round(cNavy[2] * baseWeight + cAmber[2] * aW + cCyan[2] * cW + cViolet[2] * vW);

      return [
        Math.max(10, Math.min(255, r)),
        Math.max(16, Math.min(255, g)),
        Math.max(32, Math.min(255, b)),
      ];
    };

    let t = 0;
    let rafId = null;
    let isVisible = true;
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

    // Observe canvas visibility — pause animation when scrolled past hero
    let observer;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !rafId) {
            rafId = requestAnimationFrame(run);
          }
        },
        { threshold: 0.05 }
      );
      observer.observe(c);
    }

    let lastFrameTime = 0;
    const minFrameInterval = isMobile ? 36 : 22; // ~28fps on mobile to preserve battery and GPU, ~45fps on desktop
    const limit = isMobile ? 22 : 31;

    const run = (currentTime) => {
      if (!isVisible) {
        rafId = null;
        return;
      }

      if (currentTime - lastFrameTime >= minFrameInterval) {
        lastFrameTime = currentTime;
        for (let x = 0; x <= limit; x++) {
          for (let y = 0; y <= limit; y++) {
            const [r, g, b] = getPixelRgb(x, y, t);
            col(x, y, r, g, b);
          }
        }
        t += isMobile ? 0.025 : 0.04;
      }

      rafId = requestAnimationFrame(run);
    };

    rafId = requestAnimationFrame(run);

    return () => {
      if (observer) observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={32}
      height={32}
      style={{
        width: "100vw",
        height: "100%",
        margin: 0,
        display: "block",
        overflow: "hidden",
        willChange: "transform",
      }}
    />
  );
}
