import React from "react";
import "./Stack.css";

const Stack = () => {
  return (
    <div className="stack-container flex justify-center items-center py-10">
      {/* Hidden on mobile */}
      <div
        className="
          stack
          hidden sm:block
          scale-75 md:scale-90 lg:scale-100
        "
      >
        <div className="layer layer1"></div>
        <div className="layer layer2"></div>
        <div className="layer layer3"></div>
      </div>

      {/* Rounded diamond shape definition */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="roundedDiamond" clipPathUnits="objectBoundingBox">
            <path
              d="
      M 0.5,0.04
      Q 0.55,0.05 0.96,0.4
      Q 1,0.45 0.96,0.5
      Q 0.55,0.95 0.5,0.96
      Q 0.45,0.95 0.04,0.5
      Q 0,0.45 0.04,0.4
      Q 0.45,0.05 0.5,0.04
      Z
    "
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Stack;
