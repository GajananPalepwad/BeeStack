import React from "react";
import { useBlobAnimation } from "./UseBlobAnimation";

/**
 * Drop-in animated blob background.
 * Usage: place as the FIRST child inside .ow-page (or any relative/fixed container):
 *
 *   <div className="ow-page">
 *     <BlobBackground />
 *     <aside className="ow-sidebar">...</aside>
 *     <main className="ow-main">...</main>
 *   </div>
 */
const BlobBackground = () => {
  const blobsRef = useBlobAnimation();

  return (
    <div className="ow-blobs" aria-hidden="true">
      {[0, 1, 2, 3, 4].map(i => (
        <div
          key={i}
          className={`ow-blob ow-blob--${i}`}
          ref={el => blobsRef.current[i] = el}
        />
      ))}
    </div>
  );
};

export default BlobBackground;