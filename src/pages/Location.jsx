import React , {useEffect} from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

/* ── SVG icons (inline, zero extra deps) ── */
const IconMail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const IconLocation = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const Location = () => {
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
        {/* ── SIDEBAR ── */}
        <aside className="ow-sidebar">

          <nav className="ow-nav" data-section="CONTACT US">
            <Link
              to="/contact-us"
              className="ow-nav-item"
            >
              <span className="ow-nav-icon"><IconMail /></span>
              Contact Mail
            </Link>

            <Link
              to="/contact-us/location"
              className="ow-nav-item ow-nav-item--active"
            >
              <span className="ow-nav-icon"><IconLocation /></span>
              Location
            </Link>
          </nav>
        </aside>

        {/* ── MAIN ── */}
        <main className="ow-main">
          {/* Header */}
          <header className="ow-header">
            <h1 className="ow-title">
              Find <span>Us</span>
            </h1>
            <p className="ow-subtitle">We'd love to meet you in person.</p>
            <hr className="ow-divider" />
          </header>

          {/* Intro */}
          <section className="ow-intro">
            <div className="ow-badge">Our Location</div>
            <p className="ow-intro-text">
              Our main office is nestled in Vishnupuri, Nanded — come say hello,
              grab a cup of chai, and let's build something great together.
            </p>
          </section>

          {/* Cards */}
          <div className="ow-cards-grid">

            {/* Card 1 — Address */}
            <div className="ow-card">
              <div className="ow-card-icon">
                <IconLocation />
              </div>
              <h3 className="ow-card-title">Office Address</h3>
              <p className="ow-card-text">
                BeeStack Software Labs<br />
                Ramdasji Nagar, Vishnupuri<br />
                Nanded, Maharashtra — 431606
              </p>
            </div>

            {/* Card 2 — Map embed */}
            <div className="ow-card" style={{ padding: 0, overflow: "hidden" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15079.236071356052!2d77.3055517!3d19.1160325!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1763433426176!5m2!1sen!2sin"
                width="100%"
                height="260"
                style={{ display: "block", border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BeeStack Office Map"
              />
              {/* coloured top-bar pseudo-element still renders via ::before */}
            </div>

            {/* Card 3 — Hours */}
            <div className="ow-card">
              <div className="ow-card-icon">
                {/* clock icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3 className="ow-card-title">Working Hours</h3>
              <p className="ow-card-text">
                Monday – Friday: 9 AM – 6 PM<br />
                Saturday: 10 AM – 2 PM<br />
                Sunday: Closed
              </p>
            </div>

            {/* Card 4 — Contact */}
            <div className="ow-card">
              <div className="ow-card-icon">
                <IconMail />
              </div>
              <h3 className="ow-card-title">Get in Touch</h3>
              <p className="ow-card-text">
                Prefer to reach us remotely? Drop us a mail or give us a call —
                we typically respond within one business day.
              </p>
            </div>

          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Location;