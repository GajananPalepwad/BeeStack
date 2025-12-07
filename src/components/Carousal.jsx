import React, { useRef, useEffect } from "react";

export default function AnimatedGradient() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");

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

    // Check if mobile screen size (768px and below)
    const isMobile = () => window.innerWidth <= 768;

    const run = () => {
      for (let x = 0; x <= 35; x++) {
        for (let y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t) * brightness, G(x, y, t) * brightness, B(x, y, t) * brightness);
        }
      }
      // Use 0.03 for mobile, 0.06 for desktop
      t += isMobile() ? 0.03 : 0.04;
      requestAnimationFrame(run);
    };

    run();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={32}
      height={32}
      style={{
        width: "100vw",
        height: "",
        margin: 0,
        display: "block",
        overflow: "hidden",        
      }}
    />
  );
}
