import React , {useEffect} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./OurWork.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BlobBackground from "../components/BlobBackground";

const ContactUs = () => {
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
      <Helmet>
        <title>Contact BeeStack | Get in Touch</title>
        <meta
          name="description"
          content="Reach out to BeeStack for project inquiries, career opportunities, or general questions. Email us at business@beestack.in, hr@beestack.in, or info@beestack.in. We're here to help you build the future of technology."
        />
        <link rel="canonical" href="https://www.beestack.in/contact-us" />
        <meta
          name="email"
          content="business@beestack.in, hr@beestack.in, info@beestack.in"
        />
      </Helmet>

      <Navbar />

      <div className="ow-page">
        <BlobBackground />
        {/* ── SIDEBAR ── */}
        <aside className="ow-sidebar">
          <nav className="ow-nav" data-section="CONTACT US">
            <Link to="/contact-us" className="ow-nav-item ow-nav-item--active">
              <span className="ow-nav-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              Contact Mail
            </Link>
            <Link to="/contact-us/location" className="ow-nav-item">
              <span className="ow-nav-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              Location
            </Link>
            <Link to="/contact-us/getting-in" className="ow-nav-item">
                          <span className="ow-nav-icon">
                            {/* Door / entry icon */}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/>
                              <polyline points="10 17 15 12 10 7"/>
                              <line x1="15" y1="12" x2="3" y2="12"/>
                            </svg>
                          </span>
                          Getting In
                        </Link>
          </nav>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="ow-main">
          {/* Header */}
          <div className="ow-header">
            <h1 className="ow-title">
              <span>Contact Mail</span>
            </h1>
            <p className="ow-subtitle">Feel free to contact us.</p>
            <hr className="ow-divider" />
          </div>

          {/* Intro */}
          <div className="ow-intro">
            <div className="ow-badge">Get in Touch</div>
            <p className="ow-intro-text">
              Whether you have a project idea, a career question, or just want to say hello —
              we'd love to hear from you. Reach us at the right inbox and we'll get back to you
              as soon as possible.
            </p>
          </div>

          {/* Mail Cards */}
          <div className="ow-cards-grid">

            {/* Business */}
            <div className="ow-card">
              <div className="ow-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                </svg>
              </div>
              <div className="ow-card-title">Business & Project Inquiries</div>
              <p className="ow-card-text">
                Have a project in mind or want to explore a partnership? We'd love to hear about
                what you're building.
              </p>
              <a
                href="mailto:business@beestack.in"
                style={{
                  display: "inline-block",
                  marginTop: "14px",
                  fontSize: "13.5px",
                  fontWeight: 700,
                  color: "var(--amber-d)",
                  textDecoration: "underline",
                  letterSpacing: "0.3px"
                }}
              >
                business@beestack.in →
              </a>
            </div>

            {/* HR */}
            <div className="ow-card">
              <div className="ow-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="ow-card-title">Career Inquiries</div>
              <p className="ow-card-text">
                Interested in joining the hive? Send us your resume and cover letter and let's
                see if it's a match.
              </p>
              <a
                href="mailto:hr@beestack.in"
                style={{
                  display: "inline-block",
                  marginTop: "14px",
                  fontSize: "13.5px",
                  fontWeight: 700,
                  color: "var(--amber-d)",
                  textDecoration: "underline",
                  letterSpacing: "0.3px"
                }}
              >
                hr@beestack.in →
              </a>
            </div>

            {/* General */}
            <div className="ow-card">
              <div className="ow-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
              <div className="ow-card-title">General Questions</div>
              <p className="ow-card-text">
                For anything else — questions, feedback, or just a hello — drop us a message and
                we'll get back to you.
              </p>
              <a
                href="mailto:info@beestack.in"
                style={{
                  display: "inline-block",
                  marginTop: "14px",
                  fontSize: "13.5px",
                  fontWeight: 700,
                  color: "var(--amber-d)",
                  textDecoration: "underline",
                  letterSpacing: "0.3px"
                }}
              >
                info@beestack.in →
              </a>
            </div>

          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;