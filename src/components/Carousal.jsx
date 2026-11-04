import React, { useRef, useEffect } from "react";

export default function AnimatedGradient() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d", { alpha: false });
    if (!ctx) return;

    const brightness = 0.6; // 0.0 = black, 1.0 = normal
    const col = (x, y, r, g, b) => {
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(x, y, 1, 1);
    };

    const R = (x, y, t) =>
      Math.floor(164 + 54 * Math.cos((x * x - y * y) / 300 + t));
    const G = (x, y, t) =>
      Math.floor(
        164 +
          54 *
            Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
      );
    const B = (x, y, t) =>
      Math.floor(
        164 +
          54 *
            Math.sin(
              5 * Math.sin(t / 9) +
                ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
            )
      );

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
            col(x, y, R(x, y, t) * brightness, G(x, y, t) * brightness, B(x, y, t) * brightness);
          }
        }
        t += isMobile() ? 0.025 : 0.04;
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
