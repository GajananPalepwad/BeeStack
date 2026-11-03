import React, { useEffect } from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import BlobBackground from "../components/BlobBackground";
import { Link } from "react-router-dom";

const hiringSteps = [
  {
    step: "01",
    title: "Application & Portfolio Review",
    desc: "Submit your resume, GitHub profile, or live project links. We review your actual code and architecture contributions, not just keyword matches.",
  },
  {
    step: "02",
    title: "Technical Discovery Call",
    desc: "A 30-minute introductory conversation with a senior engineering lead to discuss your technical background, interest areas, and expectations.",
  },
  {
    step: "03",
    title: "Hands-on Practical Challenge",
    desc: "A take-home or live pair programming task mirroring real BeeStack engineering scenarios — building clean, idiomatic components or debug logic.",
  },
  {
    step: "04",
    title: "Architecture & Code Deep Dive",
    desc: "We discuss your solution, trade-offs made, performance optimizations, and how you approach edge cases in production environments.",
  },
  {
    step: "05",
    title: "Hive Culture & Values Alignment",
    desc: "A friendly chat about collaboration style, autonomy, how you handle shifting specs, and your long-term career aspirations with our team.",
  },
  {
    step: "06",
    title: "Fast Decision & Offer",
    desc: "We respect your time. If there is mutual alignment, we move fast with a competitive offer and smooth onboarding timeline within 3–5 days.",
  },
];

const qualities = [
  { label: "Curious by Nature", desc: "You enjoy digging deep into how compilers, memory allocators, and frameworks function under the hood." },
  { label: "Hands-on Builder", desc: "You love turning ideas into working code, debugging tricky issues, and shipping polished user experiences." },
  { label: "High Accountability", desc: "You take ownership of modules from initial architecture to live production telemetry." },
  { label: "Clear Communicator", desc: "You explain technical trade-offs concisely and collaborate openly across design and product roles." },
];

const GettingIn = () => {
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
      { threshold: 0.1 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <div className="ow-page">
        <BlobBackground />

        {/* Unified Modern Sidebar */}
        <Sidebar section="CONTACT US" />

        {/* Main Content */}
        <main className="ow-main">
          {/* Header */}
          <header className="ow-header">
            <div className="ow-breadcrumb">
              <span>Contact Us</span>
              <span>•</span>
              <span>Hiring Process</span>
            </div>
            <h1 className="ow-title">Getting Into the Hive</h1>
            <p className="ow-subtitle">
              Our hiring process is transparent, practical, and designed to assess real engineering ability — not algorithmic trivia.
            </p>
            <hr className="ow-divider" />
          </header>

          {/* Intro Card */}
          <section className="ow-intro">
            <div className="ow-badge">Candidate-First Hiring</div>
            <p className="ow-intro-text">
              We look for curiosity, ownership, and engineering discipline. Whether you are self-taught, a university graduate, or an experienced engineer, we evaluate you on how you think, code, and collaborate.
            </p>
          </section>

          {/* Step-by-Step Hiring Process */}
          <div style={{ marginBottom: "32px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", marginBottom: "16px" }}>
              The 6-Step Hiring Journey
            </h3>

            <div className="ow-cards-grid">
              {hiringSteps.map((s) => (
                <article className="ow-card" key={s.step}>
                  <div>
                    <div className="ow-card-header">
                      <span className="ow-card-num" style={{ fontSize: "28px", color: "var(--amber-d)" }}>
                        {s.step}
                      </span>
                      <span className="ow-status-badge ow-status-badge--live">Step {s.step}</span>
                    </div>

                    <h3 className="ow-card-title">{s.title}</h3>
                    <p className="ow-card-text">{s.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* What We Look For */}
          <div style={{ marginBottom: "32px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", marginBottom: "16px" }}>
              What We Value in Candidates
            </h3>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "16px",
              maxWidth: "1200px"
            }}>
              {qualities.map((q, idx) => (
                <div key={idx} style={{
                  background: "rgba(255, 255, 255, 0.72)",
                  backdropFilter: "blur(14px)",
                  border: "1px solid rgba(255, 255, 255, 0.85)",
                  borderRadius: "14px",
                  padding: "20px 22px",
                  boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <span style={{ color: "#d97706", fontWeight: "800" }}>✦</span>
                    <h4 style={{ fontSize: "15px", fontWeight: "700", color: "#0f172a" }}>{q.label}</h4>
                  </div>
                  <p style={{ fontSize: "13px", color: "#475569", lineHeight: "1.6" }}>{q.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div style={{
            background: "linear-gradient(135deg, rgba(254, 243, 199, 0.95), rgba(253, 230, 138, 0.8))",
            border: "1.5px solid rgba(245, 158, 11, 0.4)",
            borderRadius: "18px",
            padding: "28px 32px",
            maxWidth: "1200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px"
          }}>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", marginBottom: "4px" }}>
                Ready to take the first step?
              </h3>
              <p style={{ fontSize: "14px", color: "#475569" }}>
                Explore open engineering roles or drop your resume directly to our hiring team.
              </p>
            </div>
            <Link
              to="/careers/current-openings"
              className="ow-sidebar-footer-btn"
              style={{ padding: "10px 22px", fontSize: "13.5px" }}
            >
              View Open Roles
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default GettingIn;
