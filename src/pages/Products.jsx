import React, { useEffect, useState } from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import BlobBackground from "../components/BlobBackground";
import { getProjects } from "../api/projects.api";

const fallbackProjects = [
  {
    id: "daily-bites",
    title: "Daily Bites – Monthly Food Subscription Platform",
    duration: "June 2023 – August 2023",
    status: "Live App",
    category: "Mobile Platform",
    description:
      "Daily Bites is an Android-based food subscription platform designed to help students and working professionals relocate to new cities and easily find healthy, verified daily meal subscriptions with scheduled delivery and live tracking.",
    technologies: ["Android", "Kotlin", "Node.js", "Firebase", "Razorpay", "AWS"],
  },
  {
    id: "sggsiet-app",
    title: "SGGSIE&T College Management Application",
    duration: "February 2023 – May 2023",
    status: "Live App",
    category: "Enterprise Solution",
    description:
      "A comprehensive academic companion application developed for students and faculty. It enables student attendance tracking, timetable management, exam schedules, campus notices, and academic resource distribution in real time.",
    technologies: ["Android", "Kotlin", "RESTful APIs", "Room DB", "Firebase Cloud Messaging"],
  },
  {
    id: "loop-platform",
    title: "Loop – Social Media Platform for Developers",
    duration: "September 2024 – Present",
    status: "Live Platform",
    category: "Developer Tooling",
    description:
      "A niche social networking platform built exclusively for developers and tech teams. Centers around code snippets, architectural challenges, peer review discussions, and portfolio showcase with interactive execution.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node.js"],
  },
  {
    id: "beemine-platform",
    title: "BeeMine Platform – Industrial Telemetry System",
    duration: "In Development",
    status: "In Development",
    category: "IoT & Analytics",
    description:
      "An industrial digital platform being developed by BeeStack Software Labs. The platform provides a scalable infrastructure for sensor telemetry ingestion, fleet coordination, safety monitoring, and predictive analytics.",
    technologies: ["React Native", "MQTT", "Golang", "Docker", "TimescaleDB", "GCP"],
  },
];

const Products = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const data = await getProjects();
        if (data && data.projects && data.projects.length > 0) {
          setProjects(data.projects);
        } else {
          setProjects(fallbackProjects);
        }
      } catch (err) {
        console.warn("Using curated BeeStack projects showcase:", err);
        setProjects(fallbackProjects);
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
  }, [loading, projects]);

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
              Here are some of the flagship applications and systems we have successfully crafted and executed.
            </p>
          </section>

          {/* Projects Grid */}
          {loading ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "60px 0", gap: "16px" }}>
              <div style={{ width: "36px", height: "36px", border: "3px solid rgba(252,171,30,0.2)", borderTopColor: "#FCAB1E", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />
              <p style={{ color: "#64748b", fontSize: "14px" }}>Loading projects...</p>
            </div>
          ) : (
            <div className="ow-cards-grid">
              {projects.map((project, idx) => (
                <article className="ow-card" key={project.id || idx}>
                  <div>
                    <div className="ow-card-header">
                      <span className="ow-card-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                        </svg>
                      </span>
                      <span className={`ow-status-badge ${project.status === "In Development" ? "ow-status-badge--dev" : "ow-status-badge--live"}`}>
                        {project.status || "Production"}
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
                      {project.description?.length > 150
                        ? `${project.description.slice(0, 150)}...`
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

                  <button
                    className="ow-card-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>View Case Study</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </button>
                </article>
              ))}
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
            style={{
              background: "#ffffff",
              borderRadius: "22px",
              width: "100%",
              maxWidth: "600px",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
              boxShadow: "0 28px 70px -12px rgba(11, 18, 32, 0.35)",
              border: "1px solid rgba(255, 255, 255, 0.8)",
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
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            {selectedProject.image && (
              <div style={{ width: "100%", maxHeight: "240px", overflow: "hidden" }}>
                <img src={selectedProject.image} alt={selectedProject.title} style={{ width: "100%", height: "240px", objectFit: "cover" }} />
              </div>
            )}

            <div style={{ padding: "30px 32px 34px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <span className="ow-status-badge ow-status-badge--live">
                  {selectedProject.status || "Production"}
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

              {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                <div>
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
