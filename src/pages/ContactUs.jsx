import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import BlobBackground from "../components/BlobBackground";
import "./OurWork.css";
import { Helmet } from "react-helmet-async";

const contactCards = [
  {
    title: "Business & Partnerships",
    email: "business@beestack.in",
    desc: "Have a product to build, legacy systems to migrate, or seeking a technical partnership? Let's discuss your timeline and technical scope.",
    badge: "New Projects",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Careers & Internships",
    email: "hr@beestack.in",
    desc: "Passionate about software craftsmanship? Send us your resume, GitHub profile, or portfolio to join our engineering hive.",
    badge: "Join the Hive",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "General Inquiries & Media",
    email: "info@beestack.in",
    desc: "For general questions, university campus collaborations, media inquiries, or simply saying hello — drop our team a note.",
    badge: "Direct Contact",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
];

const ContactUs = () => {
  const [copiedEmail, setCopiedEmail] = useState(null);

  const handleCopy = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
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
      <Helmet>
        <title>Contact BeeStack | Get in Touch</title>
        <meta
          name="description"
          content="Reach out to BeeStack for software development, project consultations, and career opportunities. We typically respond within one business day."
        />
        <link rel="canonical" href="https://www.beestack.in/contact-us" />
      </Helmet>

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
              <span>Communication Channels</span>
            </div>
            <h1 className="ow-title">Get in Touch</h1>
            <p className="ow-subtitle">
              Whether you have a product vision, an engineering challenge, or a career query — our team is ready to connect.
            </p>
            <hr className="ow-divider" />
          </header>

          {/* Intro Card */}
          <section className="ow-intro">
            <div className="ow-badge">Fast Response • Dedicated Attention</div>
            <p className="ow-intro-text">
              We respond to all inbound requests within 24 business hours. Direct your message to the appropriate inbox below so the right specialist can assist you immediately.
            </p>
          </section>

          {/* Contact Cards Grid */}
          <div className="ow-cards-grid">
            {contactCards.map((c) => (
              <article className="ow-card" key={c.email}>
                <div>
                  <div className="ow-card-header">
                    <span className="ow-card-icon">{c.icon}</span>
                    <span className="ow-status-badge ow-status-badge--live">
                      {c.badge}
                    </span>
                  </div>

                  <h3 className="ow-card-title">{c.title}</h3>
                  <p className="ow-card-text">{c.desc}</p>

                  <div style={{
                    marginTop: "16px",
                    padding: "10px 14px",
                    background: "rgba(252, 171, 30, 0.08)",
                    border: "1px solid rgba(252, 171, 30, 0.25)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "8px"
                  }}>
                    <a
                      href={`mailto:${c.email}`}
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        color: "#0f172a",
                        textDecoration: "none"
                      }}
                    >
                      {c.email}
                    </a>

                    <button
                      onClick={() => handleCopy(c.email)}
                      style={{
                        background: copiedEmail === c.email ? "#059669" : "rgba(255, 255, 255, 0.9)",
                        color: copiedEmail === c.email ? "#ffffff" : "#d97706",
                        border: "1px solid rgba(245, 158, 11, 0.3)",
                        borderRadius: "6px",
                        padding: "4px 8px",
                        fontSize: "11px",
                        fontWeight: "700",
                        cursor: "pointer",
                        transition: "all 0.2s"
                      }}
                    >
                      {copiedEmail === c.email ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>

                <a
                  href={`mailto:${c.email}`}
                  className="ow-card-btn"
                >
                  <span>Compose Email</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
