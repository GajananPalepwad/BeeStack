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
              d="M 0.5,0.01
              L 0.99,0.39
              Q 1,0.4 0.99,0.41
              L 0.51,0.99
              Q 0.5,1 0.49,0.99
              L 0.01,0.41
              Q 0,0.4 0.01,0.39
              L 0.49,0.01
              Q 0.5,0 0.5,0.01 Z"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Stack;
