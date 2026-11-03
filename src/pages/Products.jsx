import React, { useEffect, useState } from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import BlobBackground from "../components/BlobBackground";
import { getProjects } from "../api/projects.api";
import initialProjectsData from "../data/projects.json";

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

const Products = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "web", label: "Web Platforms" },
    { id: "opensource", label: "Open Source" },
    { id: "dev", label: "In Development" },
  ];

  const matchesCategory = (project, catId) => {
    if (catId === "all") return true;
    const cat = (project.category || "").toLowerCase();
    const status = (project.status || "").toLowerCase();
    const duration = (project.duration || "").toLowerCase();
    const techs = (project.technologies || []).map((t) => t.toLowerCase());
    const title = (project.title || "").toLowerCase();
    const desc = (project.description || "").toLowerCase();

    if (catId === "mobile") {
      return (
        cat.includes("mobile") ||
        techs.includes("android") ||
        techs.includes("kotlin") ||
        techs.includes("java") ||
        title.includes("app") ||
        desc.includes("android")
      );
    }
    if (catId === "web") {
      return (
        cat.includes("web") ||
        cat.includes("saas") ||
        cat.includes("e-commerce") ||
        techs.includes("next.js") ||
        techs.includes("react") ||
        techs.includes("astro") ||
        techs.includes("cloudflare")
      );
    }
    if (catId === "opensource") {
      return (
        status.includes("open source") ||
        title.includes("open-source") ||
        desc.includes("open-source") ||
        desc.includes("github") ||
        (Array.isArray(project.link) && project.link.some(l => l.includes("github.com")))
      );
    }
    if (catId === "dev") {
      return (
        status.includes("development") ||
        duration.includes("in development") ||
        desc.includes("in development") ||
        desc.includes("being developed")
      );
    }
    return true;
  };

  const filteredProjects = projects.filter((p) => matchesCategory(p, activeCategory));

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const data = await getProjects();
        if (data && data.projects && data.projects.length > 0) {
          setProjects(data.projects);
        } else {
          setProjects(initialProjectsData);
        }
      } catch (err) {
        console.warn("Using curated BeeStack projects showcase:", err);
        setProjects(initialProjectsData);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll(
      ".ow-card, .ow-intro, .ow-header, .ow-badge"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ow-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loading, projects, activeCategory]);

  return (
    <>
      <Navbar />

      <div className="ow-page">
        <BlobBackground />

        {/* Unified Modern Sidebar */}
        <Sidebar section="OUR WORK" />

        {/* Main content */}
        <main className="ow-main">
          {/* Header */}
          <header className="ow-header">
            <div className="ow-breadcrumb">
              <span>Our Work</span>
              <span>•</span>
              <span>Portfolio</span>
            </div>
            <h1 className="ow-title">Tech We've Built</h1>
            <p className="ow-subtitle">
              We design, engineer, and deploy high-volume, high-impact digital products used by thousands.
            </p>
            <hr className="ow-divider" />
          </header>

          {/* Intro Card */}
          <section className="ow-intro">
            <div className="ow-badge">Real Products • Real Impact</div>
            <p className="ow-intro-text">
              BeeStack is a product engineering company that helps startups and enterprises deliver robust,
              scalable software across mobile, web, IoT, and AI architectures.
            </p>
            <p className="ow-intro-text">
              Here are flagship applications, open-source initiatives, and client platforms crafted and powered by BeeStack.
            </p>
          </section>

          {/* Category Filter Pills */}
          <div className="ow-filter-pills" role="tablist" aria-label="Project Categories">
            {categories.map((c) => {
              const count = projects.filter((p) => matchesCategory(p, c.id)).length;
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={activeCategory === c.id}
                  className={`ow-filter-pill ${activeCategory === c.id ? "ow-filter-pill--active" : ""}`}
                  onClick={() => setActiveCategory(c.id)}
                >
                  <span>{c.label}</span>
                  <span className="ow-filter-count">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          {loading ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "60px 0", gap: "16px" }}>
              <div style={{ width: "36px", height: "36px", border: "3px solid rgba(252,171,30,0.2)", borderTopColor: "#FCAB1E", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />
              <p style={{ color: "#64748b", fontSize: "14px" }}>Loading projects...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="ow-empty-state">
              <p style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px", color: "#1e293b" }}>No projects found in this category.</p>
              <button
                className="ow-filter-pill ow-filter-pill--active"
                onClick={() => setActiveCategory("all")}
                style={{ margin: "8px auto 0" }}
              >
                View All Projects
              </button>
            </div>
          ) : (
            <div className="ow-cards-grid">
              {filteredProjects.map((project, idx) => {
                const projectLinks = normalizeLinks(project.link);
                const hasImage = Boolean(project.image && project.image.trim() !== "");

                return (
                  <article className="ow-card" key={project.id || idx}>
                    {/* Browser Window Mockup with Deep Surrounding Shadow */}
                    <div
                      className="ow-mockup-window"
                      onClick={() => setSelectedProject(project)}
                      title="Click to view case study"
                    >
                      <div className="ow-mockup-header">
                        <div className="ow-mockup-dots">
                          <span className="ow-mockup-dot ow-mockup-dot--red" />
                          <span className="ow-mockup-dot ow-mockup-dot--yellow" />
                          <span className="ow-mockup-dot ow-mockup-dot--green" />
                        </div>
                        <div className="ow-mockup-url">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6, marginRight: "4px" }}>
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                          </svg>
                          {getDisplayUrl(project)}
                        </div>
                      </div>

                      <div className="ow-mockup-body">
                        {hasImage ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="ow-mockup-img"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              if (e.currentTarget.nextElementSibling) {
                                e.currentTarget.nextElementSibling.style.display = "flex";
                              }
                            }}
                          />
                        ) : null}

                        <div
                          className="ow-mockup-fallback"
                          style={{ display: hasImage ? "none" : "flex" }}
                        >
                          <div className="ow-mockup-fallback-pattern" />
                          <div className="ow-mockup-fallback-content">
                            <span className="ow-mockup-fallback-badge">
                              {project.category || "BeeStack Lab"}
                            </span>
                            <h4 className="ow-mockup-fallback-title">
                              {project.title.split("–")[0].trim()}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="ow-card-header">
                        <span className="ow-card-icon">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                          </svg>
                        </span>
                        <span className={`ow-status-badge ${project.status === "In Development" ? "ow-status-badge--dev" : "ow-status-badge--live"}`}>
                          {project.status || (project.duration?.includes("In Development") ? "In Development" : "Live Platform")}
                        </span>
                      </div>

                      <h3 className="ow-card-title">{project.title}</h3>
                      
                      <p style={{ fontSize: "12px", fontWeight: "700", color: "#d97706", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "10px", display: "flex", alignItems: "center", gap: "6px" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                          <line x1="16" y1="2" x2="16" y2="6"/>
                          <line x1="8" y1="2" x2="8" y2="6"/>
                          <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        {project.duration}
                      </p>

                      <p className="ow-card-text">
                        {project.description?.length > 155
                          ? `${project.description.slice(0, 155)}...`
                          : project.description}
                      </p>

                      {/* Tech Pills Preview */}
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="ow-card-tags">
                          {project.technologies.slice(0, 4).map((tech, i) => (
                            <span className="ow-card-tag" key={i}>
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="ow-card-tag" style={{ background: "rgba(0,0,0,0.04)", color: "#64748b" }}>
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Card Footer with Case Study Modal Trigger & External Quick Links */}
                    <div className="ow-card-footer">
                      <button
                        className="ow-card-btn"
                        onClick={() => setSelectedProject(project)}
                      >
                        <span>Case Study</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6"/>
                        </svg>
                      </button>

                      {projectLinks.length > 0 && (
                        <div className="ow-card-links">
                          {projectLinks.map((url, linkIdx) => {
                            const meta = getLinkMeta(url);
                            return (
                              <a
                                key={linkIdx}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`ow-link-pill ow-link-pill--${meta.type}`}
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
          )}

          {/* Disclaimer Banner */}
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
            maxWidth: "1200px",
            background: "rgba(252, 171, 30, 0.08)",
            border: "1px solid rgba(252, 171, 30, 0.3)",
            borderRadius: "14px",
            padding: "16px 20px",
            color: "#475569",
            fontSize: "13px",
            lineHeight: "1.6",
            backdropFilter: "blur(10px)"
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }}>
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p>
              <strong style={{ color: "#0f172a" }}>Disclaimer:</strong> Client, partner, and product names, trademarks, and logos displayed on this website are the intellectual property of their respective owners. Showcases are for portfolio and engineering demonstration purposes.
            </p>
          </div>
        </main>
      </div>

      <Footer />

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(11, 18, 32, 0.65)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
            padding: "20px",
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="no-scrollbar"
            style={{
              background: "#ffffff",
              borderRadius: "22px",
              width: "100%",
              maxWidth: "640px",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
              boxShadow: "0 28px 70px -12px rgba(11, 18, 32, 0.35)",
              border: "1px solid rgba(255, 255, 255, 0.8)",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div style={{
              height: "5px",
              background: "linear-gradient(90deg, #FCAB1E, #00C9A7, #7C3AED)",
              borderRadius: "22px 22px 0 0"
            }} />

            <button
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(15, 23, 42, 0.06)",
                border: "none",
                borderRadius: "50%",
                cursor: "pointer",
                color: "#475569",
                transition: "all 0.2s",
                zIndex: 2,
              }}
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            {/* Modal Mockup Preview Frame with Deep Shadow */}
            <div style={{ margin: "16px 20px 0", borderRadius: "12px", overflow: "hidden", background: "#0f172a", border: "1px solid rgba(255, 255, 255, 0.12)", boxShadow: "0 24px 50px -10px rgba(0, 0, 0, 0.45)" }}>
              <div className="ow-mockup-header">
                <div className="ow-mockup-dots">
                  <span className="ow-mockup-dot ow-mockup-dot--red" />
                  <span className="ow-mockup-dot ow-mockup-dot--yellow" />
                  <span className="ow-mockup-dot ow-mockup-dot--green" />
                </div>
                <div className="ow-mockup-url">
                  {getDisplayUrl(selectedProject)}
                </div>
              </div>
              <div style={{ width: "100%", maxHeight: "260px", overflow: "hidden", background: "#020617" }}>
                {selectedProject.image && selectedProject.image.trim() !== "" ? (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    style={{ width: "100%", height: "260px", objectFit: "cover", display: "block" }}
                    onError={(e) => {
                      e.currentTarget.parentElement.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="ow-mockup-fallback" style={{ minHeight: "220px" }}>
                    <div className="ow-mockup-fallback-pattern" />
                    <div className="ow-mockup-fallback-content">
                      <span className="ow-mockup-fallback-badge">
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

            <div style={{ padding: "30px 32px 34px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <span className="ow-status-badge ow-status-badge--live">
                  {selectedProject.status || (selectedProject.duration?.includes("In Development") ? "In Development" : "Live App")}
                </span>
                <span style={{ fontSize: "12px", color: "#64748b" }}>•</span>
                <span style={{ fontSize: "12.5px", color: "#64748b", fontWeight: "600" }}>{selectedProject.duration}</span>
              </div>

              <h2 style={{ fontFamily: "'K2D', sans-serif", fontWeight: 800, fontSize: "22px", color: "#0f172a", marginBottom: "14px", lineHeight: 1.3 }}>
                {selectedProject.title}
              </h2>

              <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#334155", marginBottom: "24px" }}>
                {selectedProject.description}
              </p>

              {/* Technologies */}
              {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                <div style={{ marginBottom: "20px" }}>
                  <h4 style={{ fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", color: "#64748b", marginBottom: "10px" }}>
                    Technologies & Architecture
                  </h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} style={{
                        background: "rgba(252, 171, 30, 0.12)",
                        border: "1px solid rgba(252, 171, 30, 0.35)",
                        color: "#92400e",
                        fontSize: "12px",
                        fontWeight: "700",
                        padding: "5px 12px",
                        borderRadius: "999px",
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Links */}
              {normalizeLinks(selectedProject.link).length > 0 && (
                <div>
                  <h4 style={{ fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", color: "#64748b", marginBottom: "10px" }}>
                    Project Links & Resources
                  </h4>
                  <div className="ow-modal-links-row">
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
                          className={`ow-modal-btn ow-modal-btn--${meta.type === "website" ? "primary" : meta.type}`}
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
    </>
  );
};

export default Products;
