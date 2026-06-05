import React, { useEffect, useState } from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { getProjects } from "../api/projects.api";

const navItems = [
  {
    label: "Tech we've built",
    to: "/our-work/products",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM12 12h.01" />
      </svg>
    ),
  },
  {
    label: "The Concept",
    to: "/our-work",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
  },
  {
    label: "Technique",
    to: "/our-work/technique",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    label: "Technology",
    to: "/our-work/technology",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
];

const accentBars = [
  "linear-gradient(90deg,#FCAB1E,#00C9A7)",
  "linear-gradient(90deg,#00C9A7,#7C3AED)",
  "linear-gradient(90deg,#7C3AED,#F43F5E)",
  "linear-gradient(90deg,#F43F5E,#FCAB1E)",
];
const accentBorders = [
  "rgba(252,171,30,0.3)",
  "rgba(0,201,167,0.3)",
  "rgba(124,58,237,0.3)",
  "rgba(244,63,94,0.3)",
];

const S = {
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    maxWidth: "920px",
    marginBottom: "40px",
  },
  card: (idx, hovered) => ({
    background: "#ffffff",
    border: `1px solid ${hovered === idx ? accentBorders[idx % 4] : "rgba(0,0,0,0.07)"}`,
    borderRadius: "16px",
    padding: "28px 26px 22px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    overflow: "hidden",
    transition: "transform 0.25s cubic-bezier(.22,.68,0,1.2), box-shadow 0.25s ease, border-color 0.2s",
    transform: hovered === idx ? "translateY(-5px) scale(1.01)" : "none",
    boxShadow: hovered === idx
      ? "0 20px 48px -12px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.06)"
      : "none",
  }),
  accentBar: (idx) => ({
    position: "absolute",
    top: 0, left: 0, right: 0,
    height: "3px",
    borderRadius: "16px 16px 0 0",
    background: accentBars[idx % 4],
  }),
  cardTitle: {
    fontFamily: "'K2D', sans-serif",
    fontWeight: 700,
    fontSize: "16px",
    color: "#111827",
    marginBottom: "6px",
    letterSpacing: "-0.2px",
    lineHeight: 1.3,
  },
  cardDuration: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#e8960a",
    letterSpacing: "0.4px",
    textTransform: "uppercase",
    marginBottom: "12px",
  },
  cardDesc: {
    fontSize: "13.5px",
    lineHeight: 1.7,
    color: "#6B7280",
    marginBottom: "18px",
  },
  readMoreBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    background: "none",
    border: "none",
    padding: 0,
    fontFamily: "'K2D', sans-serif",
    fontSize: "13px",
    fontWeight: 700,
    color: "#e8960a",
    cursor: "pointer",
  },
  loader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "14px",
    padding: "60px 0",
    color: "#6B7280",
    fontSize: "14px",
  },
  spinner: {
    width: "36px",
    height: "36px",
    border: "3px solid rgba(252,171,30,0.2)",
    borderTopColor: "#FCAB1E",
    borderRadius: "50%",
    animation: "spin 0.7s linear infinite",
  },
  disclaimer: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    maxWidth: "920px",
    background: "rgba(252,171,30,0.06)",
    border: "1px solid rgba(252,171,30,0.2)",
    borderRadius: "12px",
    padding: "14px 18px",
    marginTop: "8px",
    color: "#6B7280",
    fontSize: "13px",
    lineHeight: 1.6,
  },
  backdrop: {
    position: "fixed",
    inset: 0,
    background: "rgba(10,10,18,0.72)",
    backdropFilter: "blur(6px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "24px",
  },
  modal: {
    background: "#fff",
    borderRadius: "20px",
    width: "100%",
    maxWidth: "560px",
    maxHeight: "88vh",
    overflowY: "auto",
    position: "relative",
    boxShadow: "0 32px 80px -12px rgba(0,0,0,0.35)",
  },
  modalTopBar: {
    height: "4px",
    background: "linear-gradient(90deg,#FCAB1E,#00C9A7)",
    borderRadius: "20px 20px 0 0",
  },
  modalClose: {
    position: "absolute",
    top: "16px",
    right: "16px",
    width: "34px",
    height: "34px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0,0,0,0.06)",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    color: "#6B7280",
    zIndex: 1,
  },
  modalImageWrapper: {
    width: "100%",
    maxHeight: "220px",
    overflow: "hidden",
  },
  modalImage: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    display: "block",
  },
  modalBody: {
    padding: "28px 32px 32px",
  },
  modalTitle: {
    fontFamily: "'K2D', sans-serif",
    fontWeight: 700,
    fontSize: "20px",
    color: "#111827",
    marginBottom: "6px",
    letterSpacing: "-0.3px",
  },
  modalDuration: {
    fontSize: "12px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    color: "#e8960a",
    marginBottom: "16px",
  },
  modalDesc: {
    fontSize: "14.5px",
    lineHeight: 1.75,
    color: "#374151",
    marginBottom: "24px",
  },
  techHeading: {
    fontFamily: "'K2D', sans-serif",
    fontSize: "13px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.6px",
    color: "#6B7280",
    marginBottom: "12px",
  },
  techTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  techTag: {
    background: "linear-gradient(135deg,rgba(252,171,30,0.1),rgba(0,201,167,0.08))",
    border: "1px solid rgba(252,171,30,0.3)",
    color: "#e8960a",
    fontSize: "12px",
    fontWeight: 600,
    padding: "4px 12px",
    borderRadius: "999px",
  },
};

const Products = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  useEffect(() => {
    // Target both OurWork CSS classes AND the inline-styled project cards
    const targets = document.querySelectorAll(
      ".ow-card, .ow-intro, .ow-header, .ow-badge, [data-reveal]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loading]); // ← re-run after projects load

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const data = await getProjects();
        setProjects(data.projects || []);
      } catch (err) {
        console.error("Failed to load projects", err);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <>
      {/* spinner keyframe injected once */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

      <Navbar />
      <div className="ow-page">
        {/* Sidebar */}
        <aside className="ow-sidebar">
          <nav className="ow-nav">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`ow-nav-item ${item.label === "Tech we've built" ? "ow-nav-item--active" : ""
                  }`}
              >
                <span className="ow-nav-icon">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="ow-main">
          <div className="ow-header">
            <h1 className="ow-title">Tech We've Built</h1>
            <p className="ow-subtitle">We build impactful products that scale globally.</p>
            <hr className="ow-divider" />
          </div>

          <div className="ow-intro">
            <span className="ow-badge">🏗️ Real products. Real impact.</span>
            <p className="ow-intro-text">
              BeeStack is a product engineering company that helps clients deliver
              high-volume, high-impact products used by millions.
            </p>
            <p className="ow-intro-text">
              Here are some of the projects we've successfully executed.
            </p>
          </div>

          {/* Projects grid */}
          {loading ? (
            <div style={S.loader}>
              <div style={S.spinner} />
              <p>Loading projects...</p>
            </div>
          ) : projects.length === 0 ? (
            <p style={{ color: "#6B7280", fontSize: "14px", padding: "40px 0" }}>
              No projects available at the moment.
            </p>
          ) : (
            <div style={S.projectsGrid}>
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  data-reveal
                  style={{
                    ...S.card(index, hoveredCard),
                    opacity: 0,
                    transform: "translateY(40px)",
                    transition: "opacity 0.55s cubic-bezier(0.22,0.68,0,1.1), transform 0.55s cubic-bezier(0.22,0.68,0,1.1), box-shadow 0.25s ease, border-color 0.2s", // ← ADD
                    transitionDelay: `${index * 0.1}s`,
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div style={S.accentBar(index)} />
                  <div>
                    <h3 style={S.cardTitle}>{project.title}</h3>
                    <p style={S.cardDuration}>{project.duration}</p>
                    <p style={S.cardDesc}>{project.description.slice(0, 140)}...</p>
                  </div>
                  <button
                    style={S.readMoreBtn}
                    onClick={() => setSelectedProject(project)}
                  >
                    Read more
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Disclaimer */}
          <div style={S.disclaimer}>
            <svg width="16" height="16" fill="none" stroke="#e8960a" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "2px" }}>
              <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
            </svg>
            <p>
              <strong>Disclaimer:</strong> Customer and product names, trademarks, and logos
              used on this website are intellectual property of their respective owners.
            </p>
          </div>
        </main>
      </div>

      <Footer />

      {/* Modal */}
      {selectedProject && (
        <div style={S.backdrop} onClick={() => setSelectedProject(null)}>
          <div style={S.modal} onClick={(e) => e.stopPropagation()}>
            <div style={S.modalTopBar} />
            <button style={S.modalClose} onClick={() => setSelectedProject(null)}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {selectedProject.image && (
              <div style={S.modalImageWrapper}>
                <img src={selectedProject.image} alt={selectedProject.title} style={S.modalImage} />
              </div>
            )}

            <div style={S.modalBody}>
              <h2 style={S.modalTitle}>{selectedProject.title}</h2>
              <p style={S.modalDuration}>{selectedProject.duration}</p>
              <p style={S.modalDesc}>{selectedProject.description}</p>

              {selectedProject.technologies?.length > 0 && (
                <>
                  <h4 style={S.techHeading}>Technologies Used</h4>
                  <div style={S.techTags}>
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} style={S.techTag}>{tech}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;