import React, { useState, useEffect, useRef } from "react";
import "./Stack.css";

const stackLayers = [
  {
    id: 1,
    tag: "01",
    label: "Apps & Web",
    title: "Web & Mobile Apps",
    desc: "Fast, intuitive web applications and mobile apps your customers love using.",
    color: "#FCAB1E",
    rgb: "252, 171, 30",
    icon: "✦",
  },
  {
    id: 2,
    tag: "02",
    label: "Logic & APIs",
    title: "Smart Core & APIs",
    desc: "High-throughput business logic, secure payments, and reliable automated workflows.",
    color: "#00C9A7",
    rgb: "0, 201, 167",
    icon: "⚡",
  },
  {
    id: 3,
    tag: "03",
    label: "Cloud & Scale",
    title: "Cloud Infrastructure",
    desc: "Enterprise cloud architecture with 99.9% uptime, data security, and fast scaling.",
    color: "#8B5CF6",
    rgb: "139, 92, 246",
    icon: "🛡️",
  },
];

const DEFAULT_DESC = "Every platform we build is engineered in three seamless, scalable layers.";

const Stack = () => {
  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const stackWrapperRef = useRef(null);

  const [activeLayer, setActiveLayer] = useState(null);
  const [hoveredLayer, setHoveredLayer] = useState(null);
  const [isMouseOverStage, setIsMouseOverStage] = useState(false);

  // Smooth spring lerp 3D tracking
  const currentRotX = useRef(0);
  const currentRotY = useRef(0);
  const targetRotX = useRef(0);
  const targetRotY = useRef(0);
  const idleAngle = useRef(0);

  useEffect(() => {
    let rafId;

    const animate = () => {
      if (!isMouseOverStage) {
        // Calming organic idle breathing float
        idleAngle.current += 0.015;
        targetRotX.current = Math.sin(idleAngle.current * 0.8) * 3;
        targetRotY.current = Math.cos(idleAngle.current * 0.6) * 4.5;
      }

      currentRotX.current += (targetRotX.current - currentRotX.current) * 0.08;
      currentRotY.current += (targetRotY.current - currentRotY.current) * 0.08;

      if (stackWrapperRef.current) {
        stackWrapperRef.current.style.transform = `rotateX(${currentRotX.current}deg) rotateY(${currentRotY.current}deg)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, [isMouseOverStage]);

  // Stage Mouse Move: Smooth 3D tilt + robust layer detection without boundary jitter
  const handleStageMouseMove = (e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const relX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const relY = (e.clientY - rect.top) / rect.height;

    targetRotX.current = -(relY - 0.5) * 2 * 11;
    targetRotY.current = relX * 15;
    setIsMouseOverStage(true);

    // Reliable vertical layer detection across the 3 stacked plates:
    // Top plate: 0 to 0.42
    // Middle plate: 0.42 to 0.70
    // Bottom plate: 0.70 to 1.0
    if (relY < 0.42) {
      setHoveredLayer(1);
    } else if (relY <= 0.70) {
      setHoveredLayer(2);
    } else {
      setHoveredLayer(3);
    }
  };

  const handleStageMouseLeave = () => {
    setIsMouseOverStage(false);
    setHoveredLayer(null);
    targetRotX.current = 0;
    targetRotY.current = 0;
  };

  const handleStageClick = (e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const relY = (e.clientY - rect.top) / rect.height;
    const clickedId = relY < 0.42 ? 1 : relY <= 0.70 ? 2 : 3;
    setActiveLayer((prev) => (prev === clickedId ? null : clickedId));
  };

  const currentActiveId = hoveredLayer || activeLayer;
  const activeLayerData = currentActiveId
    ? stackLayers.find((l) => l.id === currentActiveId)
    : null;

  return (
    <div
      className="interactive-stack-container"
      ref={containerRef}
      aria-label="Interactive 3D Technology Stack"
    >
      {/* Ambient Radial Illumination Behind Stack */}
      <div
        className="stack-ambient-glow"
        style={{
          background: activeLayerData
            ? `radial-gradient(circle, rgba(${activeLayerData.rgb}, 0.26) 0%, transparent 65%)`
            : "radial-gradient(circle, rgba(252, 171, 30, 0.18) 0%, rgba(0, 201, 167, 0.1) 45%, transparent 70%)",
        }}
      />

      {/* 3D Stack Stage (Robust hover & click surface) */}
      <div
        className="stack-3d-stage"
        ref={stageRef}
        onMouseMove={handleStageMouseMove}
        onMouseLeave={handleStageMouseLeave}
        onClick={handleStageClick}
        onTouchStart={() => setIsMouseOverStage(true)}
        onTouchEnd={() => {
          setIsMouseOverStage(false);
          setHoveredLayer(null);
        }}
        role="button"
        tabIndex={0}
        aria-label="Interactive 3D Stack Canvas: hover or click to inspect layers"
      >
        <div
          className={`stack-wrapper ${currentActiveId ? "stack-wrapper--expanded" : ""}`}
          ref={stackWrapperRef}
        >
          {stackLayers.map((layer) => {
            const isSelected = currentActiveId === layer.id;
            const isDimmed = currentActiveId && !isSelected;

            return (
              <div
                key={layer.id}
                className={`stack-layer-unit layer-unit--${layer.id} ${
                  isSelected ? "stack-layer--active" : ""
                } ${isDimmed ? "stack-layer--dimmed" : ""}`}
                aria-hidden="true"
              >
                {/* Geometric Glass Plate & Soft Shadow Envelope */}
                <div
                  className="stack-plate-shadow-wrap"
                  style={{
                    "--active-rgb": layer.rgb,
                  }}
                >
                  <div className="stack-glass-plate">
                    <div className="stack-plate-surface" />
                    <div
                      className="stack-plate-sheen"
                      style={{
                        background: isSelected
                          ? `linear-gradient(135deg, rgba(255,255,255,0.55) 0%, transparent 50%, rgba(${layer.rgb}, 0.3) 100%)`
                          : `linear-gradient(135deg, rgba(255,255,255,0.35) 0%, transparent 50%, rgba(${layer.rgb}, 0.14) 100%)`,
                      }}
                    />
                    <div className="stack-plate-edge-glow" />
                  </div>

                  {/* Crisp Luminous Glass Border Contour */}
                  <svg
                    className="stack-plate-border-svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M 50,3 Q 54,4 96,41 Q 100,46 96,51 Q 54,96 50,97 Q 46,96 4,51 Q 0,46 4,41 Q 46,4 50,3 Z"
                      fill="none"
                      stroke={isSelected ? layer.color : "rgba(255, 255, 255, 0.62)"}
                      strokeWidth={isSelected ? "2.2" : "1.5"}
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Simple, Non-Tech Friendly Layer Controls & Locked-Height Info Bar */}
      <div className="stack-controls-bar">
        <div className="stack-control-pills">
          {stackLayers.map((layer) => {
            const isCurrent = currentActiveId === layer.id;
            return (
              <button
                key={layer.id}
                type="button"
                className={`stack-ctrl-btn ${isCurrent ? "stack-ctrl-btn--active" : ""}`}
                onClick={() => setActiveLayer((prev) => (prev === layer.id ? null : layer.id))}
                onMouseEnter={() => setHoveredLayer(layer.id)}
                onMouseLeave={() => setHoveredLayer(null)}
                style={{
                  "--accent": layer.color,
                }}
              >
                <span className="stack-ctrl-icon">{layer.icon}</span>
                <span>{layer.label}</span>
              </button>
            );
          })}
        </div>

        {/* Strictly Fixed-Height Info Slot — Zero Layout Shift */}
        <div className="stack-desc-box" aria-live="polite">
          <p className="stack-desc-text">
            {activeLayerData ? (
              <span>
                <strong style={{ color: activeLayerData.color }}>
                  {activeLayerData.title}:
                </strong>{" "}
                {activeLayerData.desc}
              </span>
            ) : (
              <span>{DEFAULT_DESC}</span>
            )}
          </p>
        </div>
      </div>

      {/* Embedded High-Precision SVG ClipPath for the Signature Diamond */}
      <svg width="0" height="0" className="stack-svg-defs" aria-hidden="true">
        <defs>
          <clipPath id="roundedDiamond" clipPathUnits="objectBoundingBox">
            <path
              d="
                M 0.5,0.03
                Q 0.54,0.04 0.96,0.41
                Q 1.0,0.46 0.96,0.51
                Q 0.54,0.96 0.5,0.97
                Q 0.46,0.96 0.04,0.51
                Q 0.0,0.46 0.04,0.41
                Q 0.46,0.04 0.5,0.03
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
