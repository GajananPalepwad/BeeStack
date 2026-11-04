import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "../api/projects.api";
import initialProjectsData from "../data/projects.json";
import "./FeaturedProjects.css";

const normalizeLinks = (link) => {
  if (!link) return [];
  if (Array.isArray(link)) return link.filter(Boolean);
  if (typeof link === "string" && link.trim()) return [link.trim()];
  return [];
};

const getDisplayUrl = (project) => {
  const links = normalizeLinks(project.link);
  if (links.length > 0) {
    try {
      const url = new URL(links[0]);
      return url.hostname.replace(/^www\./, "") + (url.pathname !== "/" ? url.pathname.slice(0, 18) : "");
    } catch {
      return links[0].replace(/^https?:\/\//, "").slice(0, 24);
    }
  }
  return "beestack.in";
};

const getLinkMeta = (url) => {
  if (!url) return null;
  const lower = url.toLowerCase();
  if (lower.includes("github.com")) {
    return {
      label: "GitHub",
      type: "github",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
    };
  }
  if (lower.includes("play.google.com")) {
    return {
      label: "Play Store",
      type: "playstore",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a2.028 2.028 0 0 1-.61-1.442V3.256c0-.547.225-1.042.609-1.442zm11.237 11.24l2.128 2.128-11.83 6.822 9.702-8.95zm0-2.108L5.144 1.996l11.83 6.822-2.128 2.128zm1.095 1.054l3.774 2.176a1.992 1.992 0 0 0 0-3.454l-3.774 2.178z"/>
        </svg>
      ),
    };
  }
  return {
    label: "Live Site",
    type: "website",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
    ),
  };
};

export default function FeaturedProjects() {
  const [projects, setProjects] = useState(initialProjectsData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const blobsRef = useRef([]);
  const sectionRef = useRef(null);

  // Animated gradient blobs (identical system to WhatWeDoSection and ReviewSlider)
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
      return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
    }
    function lerpCol(c1, c2, p) {
      const [r1, g1, b1] = hexRgb(c1), [r2, g2, b2] = hexRgb(c2);
      return `rgb(${Math.round(r1 + (r2 - r1) * p)},${Math.round(g1 + (g2 - g1) * p)},${Math.round(b1 + (b2 - b1) * p)})`;
    }

    let t = 0, palIdx = 0, nxtIdx = 1, prog = 0, raf = null, isVisible = false;
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
    const frameInterval = isMobile ? 40 : 16;

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
        const cur = palette[palIdx], nxt = palette[nxtIdx];
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

  useEffect(() => {
    let isMounted = true;
    async function loadProjects() {
      try {
        const data = await getProjects();
        if (isMounted && data && data.projects && data.projects.length > 0) {
          setProjects(data.projects);
        }
      } catch (err) {
        console.warn("Using fallback projects data in FeaturedProjects:", err);
      }
    }
    loadProjects();
    return () => {
      isMounted = false;
    };
  }, []);

  // Seamless infinite loop: duplicate items so track glides continuously from 0% to -50%
  const infiniteProjects = [...projects, ...projects];

  return (
    <section className="fp-section" ref={sectionRef} aria-label="Our Work">
      {/* Animated gradient blobs (identical to What We Do & Testimonials) */}
      <div className="fp-bg" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`fp-blob fp-blob--${i}`}
            ref={(el) => (blobsRef.current[i] = el)}
          />
        ))}
      </div>

      {/* Section Heading matching What We Do & Testimonials */}
      <div className="fp-heading-wrap">
        <h2 className="fp-label">OUR WORK</h2>
        <p className="fp-sub">Flagship platforms and products, crafted to move your ideas forward.</p>
      </div>

      {/* Edge-feathered Infinite Marquee Wrapper (avoids sudden cuts on both ends) */}
      <div
        className="fp-carousel-wrapper no-scrollbar"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className={`fp-marquee-track no-scrollbar ${isPaused ? "fp-marquee-track--paused" : ""}`}>
          {infiniteProjects.map((project, idx) => {
            const projectLinks = normalizeLinks(project.link);
            const hasImage = Boolean(project.image && project.image.trim() !== "");
            const displayUrl = getDisplayUrl(project);

            return (
              <article className="fp-card" key={`${project.id}-${idx}`}>
                {/* Browser Window Mockup with Deep Surrounding Shadow */}
                <div
                  className="fp-mockup-window"
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedProject(project);
                    }
                  }}
                  title="Click to view full case study"
                >
                  <div className="fp-mockup-header">
                    <div className="fp-mockup-dots">
                      <span className="fp-mockup-dot fp-mockup-dot--red" />
                      <span className="fp-mockup-dot fp-mockup-dot--yellow" />
                      <span className="fp-mockup-dot fp-mockup-dot--green" />
                    </div>
                    <div className="fp-mockup-url">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6, marginRight: "4px" }}>
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                      {displayUrl}
                    </div>
                  </div>

                  <div className="fp-mockup-body">
                    {hasImage ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="fp-mockup-img"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          if (e.currentTarget.nextElementSibling) {
                            e.currentTarget.nextElementSibling.style.display = "flex";
                          }
                        }}
                      />
                    ) : null}

                    {/* Fallback Banner when image is pending */}
                    <div
                      className="fp-mockup-fallback"
                      style={{ display: hasImage ? "none" : "flex" }}
                    >
                      <div className="fp-mockup-fallback-pattern" />
                      <div className="fp-mockup-fallback-content">
                        <span className="fp-mockup-fallback-badge">
                          {project.category || "BeeStack Lab"}
                        </span>
                        <h4 className="fp-mockup-fallback-title">
                          {project.title.split("–")[0].trim()}
                        </h4>
                        <div className="fp-mockup-fallback-tags">
                          {(project.technologies || []).slice(0, 3).map((t, i) => (
                            <span key={i}>{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="fp-card-body">
                  <div className="fp-card-top">
                    <span className={`fp-status-badge ${project.status === "In Development" ? "fp-status-badge--dev" : "fp-status-badge--live"}`}>
                      {project.status || "Live Platform"}
                    </span>
                    <span className="fp-duration">{project.duration}</span>
                  </div>

                  <h3
                    className="fp-card-title"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </h3>

                  <p className="fp-card-desc">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="fp-tech-row">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span className="fp-tech-pill" key={i}>
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="fp-tech-pill fp-tech-pill--more">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Footer with Modal Trigger & Live Links */}
                <div className="fp-card-footer">
                  <button
                    className="fp-case-study-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>Case Study</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>

                  {projectLinks.length > 0 && (
                    <div className="fp-links-group">
                      {projectLinks.map((url, linkIdx) => {
                        const meta = getLinkMeta(url);
                        return (
                          <a
                            key={linkIdx}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`fp-link-btn fp-link-btn--${meta.type}`}
                            title={`Open ${meta.label}`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            {meta.icon}
                            <span>{meta.label}</span>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Centered Explore All Projects Link */}
      <div className="fp-bottom-cta">
        <Link to="/our-work/products" className="fp-explore-link">
          <span>View All Projects</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>

      {/* Case Study Modal Popup */}
      {selectedProject && (
        <div
          className="fp-modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="fp-modal-dialog no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="fp-modal-top-accent" />

            <button
              className="fp-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close dialog"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Modal Mockup Preview Frame with Deep Shadow */}
            <div className="fp-modal-mockup">
              <div className="fp-mockup-header">
                <div className="fp-mockup-dots">
                  <span className="fp-mockup-dot fp-mockup-dot--red" />
                  <span className="fp-mockup-dot fp-mockup-dot--yellow" />
                  <span className="fp-mockup-dot fp-mockup-dot--green" />
                </div>
                <div className="fp-mockup-url">
                  {getDisplayUrl(selectedProject)}
                </div>
              </div>

              <div className="fp-modal-mockup-body">
                {selectedProject.image && selectedProject.image.trim() !== "" ? (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="fp-modal-img"
                  />
                ) : (
                  <div className="fp-mockup-fallback" style={{ minHeight: "220px" }}>
                    <div className="fp-mockup-fallback-pattern" />
                    <div className="fp-mockup-fallback-content">
                      <span className="fp-mockup-fallback-badge">
                        {selectedProject.category || "BeeStack Lab"}
                      </span>
                      <h3 style={{ color: "#fff", fontSize: "20px", fontWeight: "800", margin: "6px 0" }}>
                        {selectedProject.title}
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Body */}
            <div className="fp-modal-content">
              <div className="fp-modal-meta-row">
                <span className="fp-status-badge fp-status-badge--live">
                  {selectedProject.status || "Production"}
                </span>
                <span style={{ color: "#94a3b8" }}>•</span>
                <span style={{ fontSize: "13px", color: "#64748b", fontWeight: "600" }}>
                  {selectedProject.duration}
                </span>
              </div>

              <h2 className="fp-modal-title">{selectedProject.title}</h2>

              <p className="fp-modal-desc">{selectedProject.description}</p>

              {/* Technologies */}
              {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                <div className="fp-modal-section">
                  <h4 className="fp-modal-label">Technologies & Architecture</h4>
                  <div className="fp-modal-tags">
                    {selectedProject.technologies.map((tech, i) => (
                      <span className="fp-modal-tag" key={i}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Links */}
              {normalizeLinks(selectedProject.link).length > 0 && (
                <div className="fp-modal-section">
                  <h4 className="fp-modal-label">Explore Project</h4>
                  <div className="fp-modal-links-row">
                    {normalizeLinks(selectedProject.link).map((url, i) => {
                      const meta = getLinkMeta(url);
                      const actionLabel =
                        meta.label === "GitHub"
                          ? "View on GitHub"
                          : meta.label === "Play Store"
                          ? "Get on Google Play"
                          : "Visit Live Website";

                      return (
                        <a
                          key={i}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`fp-modal-action-btn fp-modal-action-btn--${meta.type === "website" ? "primary" : meta.type}`}
                        >
                          {meta.icon}
                          <span>{actionLabel}</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"/>
                            <polyline points="7 7 17 7 17 17"/>
                          </svg>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
