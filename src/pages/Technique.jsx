import React from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

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

const techniqueSections = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Collaborative by Default",
    text: "Great software is built through constant collaboration and clarity. You'll always know what's happening with regular code commits, feature updates, and issue tracking. We integrate seamlessly with your team across QA, UX, product, and marketing — keeping everyone aligned on the same goal.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Ownership, Not Oversight",
    text: "We manage our own process so you don't have to. Every BeeStack project has a dedicated point of contact — someone who understands both your product vision and our engineering roadmap. You focus on your product; we handle the rest.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Process with Purpose",
    text: "We love structure but we also value flexibility. Every project adapts while upholding the fundamentals: consistent code reviews, continuous integration, realistic testing coverage, clear documentation, and predictable delivery cycles.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Code You Can Trust",
    text: "Transparency drives quality. Your product is checked directly into your repositories, so you can see, review, and verify every change. We maintain clean, modular, and well-documented codebases built not just to work today, but to evolve tomorrow.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Quality That Lasts",
    text: "We take full responsibility for everything we ship. If an issue appears, we fix it — period. Before any delivery, our internal QA ensures reliability and performance across builds. Our reputation comes from what keeps working long after delivery.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Built on Trust",
    text: "Our clients stay because our products stand. We bring reliability, craftsmanship, and accountability to every line of code — because trust isn't claimed, it's earned.",
  },
];

const Technique = () => {
  return (
    <>
      <Navbar />
      <div className="ow-page">
        {/* Sidebar */}
        <aside className="ow-sidebar">
         
          <nav className="ow-nav">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`ow-nav-item ${item.label === "Technique" ? "ow-nav-item--active" : ""}`}
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
            <h1 className="ow-title">Technique</h1>
            <p className="ow-subtitle">We build with clarity, speed, and precision.</p>
            <hr className="ow-divider" />
          </div>

          {/* Badge + intro */}
          <div className="ow-intro">
            <span className="ow-badge">⚙️ Engineering excellence</span>
            <p className="ow-intro-text">
              At BeeStack, our strength lies in engineering excellence and adaptability. Technology evolves fast — frameworks change, tools evolve, trends fade. What doesn't change is the foundation of sound software design, thoughtful development, and disciplined delivery.
            </p>
            <p className="ow-intro-text">
              Our process borrows the agility of modern development and the structure of proven engineering practices. We choose what's right for your product, team, and timeline — blending speed, structure, and transparency to move fast without breaking quality.
            </p>
          </div>

          {/* Cards grid */}
          <div className="ow-cards-grid">
            {techniqueSections.map((s) => (
              <div className="ow-card" key={s.title}>
                <span className="ow-card-icon">{s.icon}</span>
                <h3 className="ow-card-title">{s.title}</h3>
                <p className="ow-card-text">{s.text}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Technique;