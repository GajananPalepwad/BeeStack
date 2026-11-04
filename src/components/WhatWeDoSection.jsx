import React, { useState, useEffect, useRef } from "react";
import "./WhatWeDoSection.css";

const WhatWeDoSection = ({ members = [] }) => {
  const [selectedService, setSelectedService] = useState(null);
  const blobsRef = useRef([]);
  const sectionRef = useRef(null);

  // Close modal on Escape and prevent body background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedService(null);
    };
    if (selectedService) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedService]);

  // Ambient fluid blobs (unified palette matching FeaturedProjects & Testimonials)
  useEffect(() => {
    const palette = [
      ["#a8edea", "#fed6e3", "#f9c784", "#c2e9fb", "#fbc2eb"],
      ["#fbc2eb", "#ffd6a5", "#fddb92", "#e0c3fc", "#8ec5fc"],
      ["#fddb92", "#d1fdff", "#ffcba4", "#a8edea", "#96e6a1"],
      ["#e0c3fc", "#ffd6a5", "#f9d4d4", "#fbc2eb", "#c8f7c5"],
      ["#c8f7c5", "#96e6a1", "#ffe8cc", "#fddb92", "#c2e9fb"],
    ];
    const cfg = [
      { rx: 40, ry: 32, spd: 0.27, ph: 0 },
      { rx: 32, ry: 25, spd: 0.41, ph: 1.26 },
      { rx: 28, ry: 22, spd: 0.35, ph: 2.51 },
      { rx: 22, ry: 17, spd: 0.49, ph: 3.77 },
      { rx: 36, ry: 29, spd: 0.30, ph: 5.03 },
    ];

    function hexRgb(h) {
      return [
        parseInt(h.slice(1, 3), 16),
        parseInt(h.slice(3, 5), 16),
        parseInt(h.slice(5, 7), 16),
      ];
    }
    function lerpCol(c1, c2, p) {
      const [r1, g1, b1] = hexRgb(c1);
      const [r2, g2, b2] = hexRgb(c2);
      return `rgb(${Math.round(r1 + (r2 - r1) * p)},${Math.round(
        g1 + (g2 - g1) * p
      )},${Math.round(b1 + (b2 - b1) * p)})`;
    }

    let t = 0;
    let palIdx = 0;
    let nxtIdx = 1;
    let prog = 0;
    let raf = null;
    let isVisible = false;
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

    let observer;
    if (typeof IntersectionObserver !== "undefined" && sectionRef.current) {
      observer = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !raf) {
          raf = requestAnimationFrame(animate);
        }
      }, { threshold: 0.05 });
      observer.observe(sectionRef.current);
    } else {
      isVisible = true;
    }

    let lastTime = 0;
    const frameInterval = isMobile ? 40 : 16; // 25fps on mobile, 60fps on desktop

    const animate = (now) => {
      if (!isVisible) {
        raf = null;
        return;
      }

      if (now - lastTime >= frameInterval) {
        lastTime = now;
        t += 0.004;
        prog += 0.008;
        if (prog >= 1) {
          prog = 0;
          palIdx = nxtIdx;
          nxtIdx = (nxtIdx + 1) % palette.length;
        }
        const cur = palette[palIdx];
        const nxt = palette[nxtIdx];
        blobsRef.current.forEach((el, i) => {
          if (!el) return;
          const { rx, ry, spd, ph } = cfg[i];
          const x = 50 + rx * Math.sin(t * spd + ph);
          const y = 50 + ry * Math.cos(t * spd * 0.72 + ph);
          el.style.transform = `translate(${x - 50}%,${y - 50}%)`;
          el.style.backgroundColor = lerpCol(cur[i % 5], nxt[i % 5], prog);
        });
      }

      raf = requestAnimationFrame(animate);
    };

    if (isVisible) {
      raf = requestAnimationFrame(animate);
    }

    return () => {
      if (observer) observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const handleInquire = () => {
    setSelectedService(null);
    setTimeout(() => {
      const formEl =
        document.querySelector(".contact-section") ||
        document.querySelector("#contact-form");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <section className="wwdo-section" id="capabilities" ref={sectionRef} aria-label="What We Do">
      {/* Animated ambient gradient blobs */}
      <div className="wwdo-bg" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`wwdo-blob wwdo-blob--${i}`}
            ref={(el) => (blobsRef.current[i] = el)}
          />
        ))}
      </div>

      {/* Section Heading matching Projects & Reviews */}
      <div className="wwdo-heading-wrap">
        <h2 className="wwdo-label">WHAT WE DO</h2>
        <p className="wwdo-sub">
          End-to-end technology solutions, crafted to move your ideas forward.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="wwdo-grid">
        {members.map((member, index) => (
          <WhatWeDoCard
            key={member.id || index}
            member={member}
            index={index}
            onSelect={() => setSelectedService(member)}
          />
        ))}
      </div>

      {/* Interactive Service Details Modal Popup */}
      {selectedService && (
        <div
          className="wwdo-modal-backdrop"
          onClick={() => setSelectedService(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="wwdo-modal-dialog no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Accent Gradient Bar */}
            <div
              className="wwdo-modal-accent"
              style={{
                background: `linear-gradient(90deg, ${
                  selectedService.accentColor || "#FCAB1E"
                }, #00C9A7, #7C3AED)`,
              }}
            />

            {/* Close Button */}
            <button
              className="wwdo-modal-close"
              onClick={() => setSelectedService(null)}
              aria-label="Close dialog"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="wwdo-modal-content">
              {/* Header: Icon + Badge + Title */}
              <div className="wwdo-modal-header">
                <div
                  className="wwdo-modal-icon-pod"
                  style={{
                    backgroundColor: `rgba(${
                      selectedService.accentRgb || "252, 171, 30"
                    }, 0.12)`,
                    borderColor: `rgba(${
                      selectedService.accentRgb || "252, 171, 30"
                    }, 0.32)`,
                    boxShadow: `0 6px 20px rgba(${
                      selectedService.accentRgb || "252, 171, 30"
                    }, 0.22)`,
                  }}
                >
                  <img
                    src={selectedService.photo}
                    alt={selectedService.name}
                    className="wwdo-modal-icon-img"
                  />
                </div>

                <div className="wwdo-modal-header-text">
                  <div className="wwdo-badge">
                    <span
                      className="wwdo-badge-dot"
                      style={{
                        backgroundColor:
                          selectedService.accentColor || "#FCAB1E",
                      }}
                    />
                    {selectedService.badge || "ENTERPRISE SOLUTION"}
                  </div>
                  <h3 className="wwdo-modal-title">{selectedService.name}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="wwdo-modal-desc">{selectedService.description}</p>

              {/* Core Modules & Capabilities Checklist */}
              {selectedService.modules && selectedService.modules.length > 0 && (
                <div className="wwdo-modal-section">
                  <h4 className="wwdo-modal-section-title">
                    Core Capabilities & Modules
                  </h4>
                  <ul className="wwdo-modal-checklist">
                    {selectedService.modules.map((moduleItem, mIdx) => (
                      <li key={mIdx} className="wwdo-modal-check-item">
                        <span
                          className="wwdo-check-icon"
                          style={{
                            color: selectedService.accentColor || "#10b981",
                            backgroundColor: `rgba(${
                              selectedService.accentRgb || "16, 185, 129"
                            }, 0.12)`,
                          }}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span>{moduleItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Architectural Highlights */}
              {selectedService.architecture && (
                <div className="wwdo-modal-section">
                  <h4 className="wwdo-modal-section-title">
                    Engineering Architecture
                  </h4>
                  <div className="wwdo-modal-arch-tags">
                    {selectedService.architecture.map((arch, aIdx) => (
                      <span key={aIdx} className="wwdo-modal-arch-pill">
                        {arch}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="wwdo-modal-actions">
                <button
                  type="button"
                  className="wwdo-modal-inquire-btn"
                  onClick={handleInquire}
                  style={{
                    background: `linear-gradient(135deg, ${
                      selectedService.accentColor || "#FCAB1E"
                    }, #0f172a)`,
                  }}
                >
                  <span>Inquire About This Solution</span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="wwdo-modal-close-btn"
                  onClick={() => setSelectedService(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const WhatWeDoCard = ({ member, index, onSelect }) => {
  const accentColor = member.accentColor || "#FCAB1E";
  const accentRgb = member.accentRgb || "252, 171, 30";

  return (
    <article
      className="wwdo-card"
      style={{
        "--card-accent": accentColor,
        "--card-accent-rgb": accentRgb,
        animationDelay: `${index * 0.08}s`,
      }}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      title={`Click to explore ${member.name} architecture`}
    >
      {/* Top Accent Strip */}
      <div
        className="wwdo-card-top-accent"
        style={{
          background: `linear-gradient(90deg, ${accentColor}, rgba(${accentRgb}, 0.25) 80%, transparent)`,
        }}
      />

      <div className="wwdo-card-inner">
        {/* Card Header: Icon Pod + Category Badge */}
        <div className="wwdo-card-top-row">
          <div
            className="wwdo-icon-pod"
            style={{
              backgroundColor: `rgba(${accentRgb}, 0.1)`,
              borderColor: `rgba(${accentRgb}, 0.28)`,
              boxShadow: `0 4px 14px rgba(${accentRgb}, 0.12)`,
            }}
          >
            <img
              src={member.photo}
              alt={member.name}
              className="wwdo-icon-img"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div
            className="wwdo-badge"
            style={{
              backgroundColor: `rgba(${accentRgb}, 0.08)`,
              borderColor: `rgba(${accentRgb}, 0.25)`,
              color: accentColor,
            }}
          >
            <span
              className="wwdo-badge-dot"
              style={{ backgroundColor: accentColor }}
            />
            {member.badge || "SOLUTION"}
          </div>
        </div>

        {/* Title */}
        <h3 className="wwdo-card-title">{member.name}</h3>

        {/* Description */}
        <p className="wwdo-card-desc">{member.description}</p>

        {/* Feature Tags Row */}
        {member.tags && member.tags.length > 0 && (
          <div className="wwdo-tags-row">
            {member.tags.slice(0, 3).map((tag, tIdx) => (
              <span key={tIdx} className="wwdo-tag-pill">
                {tag}
              </span>
            ))}
            {member.tags.length > 3 && (
              <span className="wwdo-tag-pill wwdo-tag-pill--more">
                +{member.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Card Action Footer */}
        <div className="wwdo-card-footer">
          <span className="wwdo-explore-action" style={{ color: accentColor }}>
            <span>Explore Architecture</span>
            <svg
              className="wwdo-arrow-icon"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
};

export default WhatWeDoSection;
