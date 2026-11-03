import React, { useState, useEffect } from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import BlobBackground from "../components/BlobBackground";

const Location = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const fullAddress = "BeeStack Software Labs, Ramdasji Nagar, Vishnupuri, Nanded, Maharashtra — 431606";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

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
              <span>Headquarters & Labs</span>
            </div>
            <h1 className="ow-title">Our Location</h1>
            <p className="ow-subtitle">
              We'd love to welcome you in person. Come visit our engineering lab, share a cup of chai, and discuss what we can build together.
            </p>
            <hr className="ow-divider" />
          </header>

          {/* Intro Card */}
          <section className="ow-intro">
            <div className="ow-badge">Engineering Lab • Maharashtra</div>
            <p className="ow-intro-text">
              Our central engineering lab is based in Vishnupuri, Nanded — close to academic centers, talent hubs, and serene surroundings that foster focused technical creation.
            </p>
          </section>

          {/* Cards Grid */}
          <div className="ow-cards-grid">
            {/* Card 1 — Address */}
            <article className="ow-card">
              <div>
                <div className="ow-card-header">
                  <span className="ow-card-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span className="ow-status-badge ow-status-badge--live">Headquarters</span>
                </div>

                <h3 className="ow-card-title">Office Address</h3>
                <p className="ow-card-text" style={{ lineHeight: "1.8", color: "#334155" }}>
                  <strong>BeeStack Software Labs</strong><br />
                  Ramdasji Nagar, Vishnupuri<br />
                  Nanded, Maharashtra — 431606, India
                </p>

                <div style={{ marginTop: "16px" }}>
                  <button
                    onClick={handleCopyAddress}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: copiedAddress ? "#059669" : "rgba(252, 171, 30, 0.12)",
                      color: copiedAddress ? "#ffffff" : "#d97706",
                      border: "1px solid rgba(252, 171, 30, 0.35)",
                      borderRadius: "8px",
                      padding: "7px 14px",
                      fontSize: "12px",
                      fontWeight: "700",
                      cursor: "pointer",
                      transition: "all 0.2s"
                    }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                    {copiedAddress ? "Address Copied!" : "Copy Full Address"}
                  </button>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=BeeStack+Software+Labs+Vishnupuri+Nanded"
                target="_blank"
                rel="noreferrer"
                className="ow-card-btn"
              >
                <span>Open in Google Maps</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </article>

            {/* Card 2 — Working Hours */}
            <article className="ow-card">
              <div>
                <div className="ow-card-header">
                  <span className="ow-card-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </span>
                  <span className="ow-status-badge ow-status-badge--live">Open Mon - Sat</span>
                </div>

                <h3 className="ow-card-title">Operating Hours</h3>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "10px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13.5px", color: "#334155", paddingBottom: "6px", borderBottom: "1px solid rgba(226, 232, 240, 0.7)" }}>
                    <span style={{ fontWeight: "600" }}>Monday – Friday:</span>
                    <span>9:00 AM – 6:00 PM IST</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13.5px", color: "#334155", paddingBottom: "6px", borderBottom: "1px solid rgba(226, 232, 240, 0.7)" }}>
                    <span style={{ fontWeight: "600" }}>Saturday:</span>
                    <span>10:00 AM – 2:00 PM IST</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13.5px", color: "#64748b" }}>
                    <span style={{ fontWeight: "600" }}>Sunday:</span>
                    <span style={{ color: "#ef4444", fontWeight: "700" }}>Closed</span>
                  </div>
                </div>
              </div>

              <div style={{ fontSize: "12px", color: "#64748b", marginTop: "16px" }}>
                * Remote emergency support available 24/7 for SLA enterprise clients.
              </div>
            </article>

            {/* Card 3 — Interactive Map */}
            <article className="ow-card" style={{ gridColumn: "1 / -1", padding: "18px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px", flexWrap: "wrap", gap: "8px" }}>
                <div>
                  <h3 className="ow-card-title" style={{ marginBottom: 0 }}>Campus Navigation Map</h3>
                  <p style={{ fontSize: "12.5px", color: "#64748b" }}>Interactive geographic satellite and street navigation map</p>
                </div>
                <a
                  href="https://maps.google.com/?q=19.1160325,77.3055517"
                  target="_blank"
                  rel="noreferrer"
                  className="ow-sidebar-footer-btn"
                  style={{ padding: "6px 14px", fontSize: "12px" }}
                >
                  Get Directions
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </div>

              <div style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(226, 232, 240, 0.8)", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15079.236071356052!2d77.3055517!3d19.1160325!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1763433426176!5m2!1sen!2sin"
                  width="100%"
                  height="340"
                  style={{ display: "block", border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BeeStack Office Map"
                />
              </div>
            </article>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Location;
