import { useEffect, useRef } from "react";

/**
 * Drop-in hook for the animated colour-cycling blob background.
 * Returns blobsRef — attach it to each blob div:
 *   ref={el => blobsRef.current[i] = el}
 */
export function useBlobAnimation() {
  const blobsRef = useRef([]);

  useEffect(() => {
    const palette = [
      ["#a8edea","#fed6e3","#f9c784","#c2e9fb","#fbc2eb"],
      ["#fbc2eb","#ffd6a5","#fddb92","#e0c3fc","#8ec5fc"],
      ["#fddb92","#d1fdff","#ffcba4","#a8edea","#96e6a1"],
      ["#e0c3fc","#ffd6a5","#f9d4d4","#fbc2eb","#c8f7c5"],
      ["#c8f7c5","#96e6a1","#ffe8cc","#fddb92","#c2e9fb"],
    ];
    const cfg = [
      { rx:40, ry:32, spd:0.27, ph:0    },
      { rx:32, ry:25, spd:0.41, ph:1.26 },
      { rx:28, ry:22, spd:0.35, ph:2.51 },
      { rx:22, ry:17, spd:0.49, ph:3.77 },
      { rx:36, ry:29, spd:0.30, ph:5.03 },
    ];

    function hexRgb(h) {
      return [parseInt(h.slice(1,3),16), parseInt(h.slice(3,5),16), parseInt(h.slice(5,7),16)];
    }
    function lerpCol(c1, c2, p) {
      const [r1,g1,b1] = hexRgb(c1), [r2,g2,b2] = hexRgb(c2);
      return `rgb(${Math.round(r1+(r2-r1)*p)},${Math.round(g1+(g2-g1)*p)},${Math.round(b1+(b2-b1)*p)})`;
    }

    let t = 0, palIdx = 0, nxtIdx = 1, prog = 0, raf;

    const animate = () => {
      t += 0.004; prog += 0.008;
      if (prog >= 1) { prog = 0; palIdx = nxtIdx; nxtIdx = (nxtIdx + 1) % palette.length; }
      const cur = palette[palIdx], nxt = palette[nxtIdx];
      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const { rx, ry, spd, ph } = cfg[i];
        const x = 50 + rx * Math.sin(t * spd + ph);
        const y = 50 + ry * Math.cos(t * spd * 0.72 + ph);
        el.style.transform = `translate(${x - 50}%, ${y - 50}%)`;
        el.style.backgroundColor = lerpCol(cur[i % 5], nxt[i % 5], prog);
      });
      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  return blobsRef;
}