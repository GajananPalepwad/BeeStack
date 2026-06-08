import React , {useEffect} from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import BlobBackground from "../components/BlobBackground";

const CurrentOpenings = () => {
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
    { threshold: 0.12 }
  );

  targets.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}, []);
  return (
    <>
      <Navbar />

      <div className="ow-page">
        <BlobBackground />
        {/* ── SIDEBAR ── */}
        <aside className="ow-sidebar">
          <nav className="ow-nav" data-section="CAREERS">
            <Link to="/careers" className="ow-nav-item">
              <span className="ow-nav-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </span>
              Why BeeStack?
            </Link>
            <Link to="/careers/current-openings" className="ow-nav-item ow-nav-item--active">
              <span className="ow-nav-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                </svg>
              </span>
              Current Openings
            </Link>
          </nav>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="ow-main">
          {/* Header */}
          <div className="ow-header">
            <h1 className="ow-title">
              <span>Current Openings</span>
            </h1>
            <p className="ow-subtitle">A Great Place for Top Talent</p>
            <hr className="ow-divider" />
          </div>

          {/* Intro */}
          <div className="ow-intro">
            <div className="ow-badge">We're Hiring</div>
            <p className="ow-intro-text">
              At BeeStack, we're driven by technology, creativity, and curiosity. We believe the
              best products come from hands-on builders — people who love exploring, experimenting,
              and pushing boundaries. Our structure is flat, our culture is open, and our environment
              is built for growth.
            </p>
            <p className="ow-intro-text">
              We're always on the lookout for passionate engineers who love to build, break, and
              rebuild things better. If you thrive on solving hard problems, learning fast, and
              shipping real products — you'll fit right in.
            </p>
          </div>

          {/* Job Cards */}
          <div className="ow-badge" style={{ marginBottom: "20px" }}>Open Positions</div>

          <div className="ow-cards-grid">

            {/* Android */}
            <div className="ow-card">
              <div className="ow-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <div className="ow-card-title">Software Engineer – Android</div>
              <p className="ow-card-text">
                Build high-performance Android applications used by real users. You'll own features
                end-to-end, from architecture decisions to shipping to the Play Store.
              </p>
              <Link
                to="/jobs/Android"
                style={{
                  display: "inline-block",
                  marginTop: "14px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "var(--amber-d)",
                  textDecoration: "underline",
                  letterSpacing: "0.3px"
                }}
              >
                View Role →
              </Link>
            </div>

            {/* iOS */}
            <div className="ow-card">
              <div className="ow-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/>
                  <path d="M12 8v4l3 3"/>
                </svg>
              </div>
              <div className="ow-card-title">Software Engineer – iOS</div>
              <p className="ow-card-text">
                Craft polished, performant iOS experiences using Swift. You'll work closely with
                design and backend teams to deliver seamless, user-loved features.
              </p>
              <Link
                to="/jobs/ios"
                style={{
                  display: "inline-block",
                  marginTop: "14px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "var(--amber-d)",
                  textDecoration: "underline",
                  letterSpacing: "0.3px"
                }}
              >
                View Role →
              </Link>
            </div>

            {/* Web Frontend */}
            <div className="ow-card">
              <div className="ow-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <div className="ow-card-title">Software Engineer – Web Frontend</div>
              <p className="ow-card-text">
                Build fast, accessible, and beautiful web interfaces. You'll bring designs to life
                with clean React code and a sharp eye for detail and performance.
              </p>
              <Link
                to="/jobs/webfrontend"
                style={{
                  display: "inline-block",
                  marginTop: "14px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "var(--amber-d)",
                  textDecoration: "underline",
                  letterSpacing: "0.3px"
                }}
              >
                View Role →
              </Link>
            </div>

            {/* Backend / Full Stack */}
            <div className="ow-card">
              <div className="ow-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3"/>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                </svg>
              </div>
              <div className="ow-card-title">Software Engineer – Backend / Full Stack</div>
              <p className="ow-card-text">
                Design and build scalable APIs, services, and data pipelines. You'll work across
                the stack to power the products our users depend on every day.
              </p>
              <Link
                to="/jobs/webbackend"
                style={{
                  display: "inline-block",
                  marginTop: "14px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "var(--amber-d)",
                  textDecoration: "underline",
                  letterSpacing: "0.3px"
                }}
              >
                View Role →
              </Link>
            </div>

          </div>

          {/* Apply CTA */}
          <div className="ow-intro" style={{ marginTop: "44px", marginBottom: "0" }}>
            <p className="ow-intro-text">
              If you're experienced in creating and shipping high-performance applications — mobile
              or web — we'd love to hear from you.
            </p>
            <p className="ow-intro-text">
              📩 <strong>How to Apply:</strong> Send your resume to{" "}
              <a
                href="mailto:hr@beestack.in"
                style={{ color: "var(--amber-d)", fontWeight: 700, textDecoration: "underline" }}
              >
                hr@beestack.in
              </a>
            </p>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default CurrentOpenings;