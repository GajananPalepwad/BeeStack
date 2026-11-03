import React from "react";
import "../OurWork.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import BlobBackground from "../../components/BlobBackground";
import { Link } from "react-router-dom";

const WebBackend = () => {
  const jobTitle = "Software Engineer – Backend / Full Stack";
  const jobId = "WebBE-2023";
  const applyMailto = `mailto:hr@beestack.in?subject=Application for ${encodeURIComponent(jobTitle)} (${jobId})&body=Hello BeeStack HR Team,%0D%0A%0D%0AI would like to apply for the ${encodeURIComponent(jobTitle)} position.%0D%0A%0D%0APlease find my resume and portfolio details attached.%0D%0A%0D%0ABest regards,`;

  return (
    <>
      <Navbar />

      <div className="ow-page">
        <BlobBackground />

        {/* Unified Modern Sidebar */}
        <Sidebar section="CAREERS" />

        {/* Main Content */}
        <main className="ow-main">
          {/* Header */}
          <header className="ow-header">
            <div className="ow-breadcrumb">
              <Link to="/careers" style={{ color: "inherit", textDecoration: "none" }}>Careers</Link>
              <span>•</span>
              <Link to="/careers/current-openings" style={{ color: "inherit", textDecoration: "none" }}>Current Openings</Link>
              <span>•</span>
              <span>{jobId}</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "8px" }}>
              <span className="ow-badge" style={{ marginBottom: 0 }}>Job ID: {jobId}</span>
              <span className="ow-status-badge ow-status-badge--live">Full-Time</span>
              <span className="ow-status-badge" style={{ background: "rgba(124, 58, 237, 0.1)", color: "#7c3aed", border: "1px solid rgba(124, 58, 237, 0.25)" }}>
                Cloud Systems
              </span>
              <span className="ow-status-badge" style={{ background: "rgba(59, 130, 246, 0.1)", color: "#2563eb", border: "1px solid rgba(59, 130, 246, 0.25)" }}>
                Nanded / Hybrid
              </span>
            </div>

            <h1 className="ow-title">{jobTitle}</h1>
            <p className="ow-subtitle">
              Architect and scale distributed backend APIs, microservices, and databases powering real-world applications.
            </p>
            <hr className="ow-divider" />
          </header>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "1000px" }}>
            {/* Overview Card */}
            <article className="ow-card" style={{ opacity: 1, transform: "none" }}>
              <div className="ow-card-header">
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span className="ow-card-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                    </svg>
                  </span>
                  <h3 className="ow-card-title" style={{ marginBottom: 0 }}>Role Overview</h3>
                </div>
              </div>
              <p className="ow-card-text" style={{ fontSize: "15px", lineHeight: "1.8" }}>
                Join our Backend & Cloud Engineering team to design, deploy, and scale high-throughput services and APIs. You’ll work hands-on across system architecture, relational & document data modeling, cache clustering, and cloud automation. If you love building resilient systems that maintain low p99 latencies under load, this role offers tremendous scope for ownership and growth.
              </p>
            </article>

            {/* Responsibilities */}
            <article className="ow-card" style={{ opacity: 1, transform: "none" }}>
              <div className="ow-card-header">
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span className="ow-card-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  </span>
                  <h3 className="ow-card-title" style={{ marginBottom: 0 }}>Key Responsibilities</h3>
                </div>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "Design, implement, and maintain resilient backend services and REST/GraphQL APIs using Node.js, Python, or Go.",
                  "Model and tune relational and document databases (PostgreSQL, MongoDB) for high transaction volumes.",
                  "Implement robust authentication, role-based access control (RBAC), and token lifecycle encryption.",
                  "Build event-driven message pipelines using Redis Pub/Sub, RabbitMQ, or Kafka.",
                  "Containerize services with Docker and manage deployment manifests on AWS or GCP.",
                  "Isolate and remediate performance bottlenecks, query latency spikes, and memory leaks.",
                  "Ensure test coverage with automated unit, integration, and load testing suites."
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "#334155", lineHeight: "1.7" }}>
                    <span style={{ color: "#d97706", marginTop: "4px", flexShrink: 0 }}>✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Qualifications */}
            <article className="ow-card" style={{ opacity: 1, transform: "none" }}>
              <div className="ow-card-header">
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span className="ow-card-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </span>
                  <h3 className="ow-card-title" style={{ marginBottom: 0 }}>Qualifications & Skills</h3>
                </div>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "B.E., B.Tech, or equivalent in Computer Science, Software Engineering, or related discipline.",
                  "2+ years of professional software engineering experience building scalable backend services.",
                  "Proficiency in Node.js (TypeScript), Python, or Go.",
                  "Strong command of SQL (PostgreSQL, MySQL) including index optimization, transactions, and migration tools.",
                  "Experience with Docker containerization, cloud infrastructure (AWS ECS, S3, RDS), and Linux servers.",
                  "Solid understanding of concurrency, caching strategies (Redis), and distributed system failure modes.",
                  "Bonus: Familiarity with Kubernetes, Terraform, or gRPC communication."
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "#334155", lineHeight: "1.7" }}>
                    <span style={{ color: "#00C9A7", marginTop: "4px", flexShrink: 0 }}>✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Apply Action Card */}
            <div style={{
              background: "linear-gradient(135deg, rgba(254, 243, 199, 0.95), rgba(253, 230, 138, 0.8))",
              border: "1.5px solid rgba(245, 158, 11, 0.4)",
              borderRadius: "18px",
              padding: "28px 32px",
              boxShadow: "0 10px 30px rgba(217, 119, 6, 0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px"
            }}>
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", marginBottom: "4px" }}>
                  Interested in this role?
                </h3>
                <p style={{ fontSize: "14px", color: "#475569" }}>
                  Send your resume and GitHub / project architecture details to <strong style={{ color: "#d97706" }}>hr@beestack.in</strong>
                </p>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <a
                  href={applyMailto}
                  className="ow-sidebar-footer-btn"
                  style={{ padding: "12px 24px", fontSize: "14px" }}
                >
                  Apply via Email
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default WebBackend;
