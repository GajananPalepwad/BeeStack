import React , {useEffect} from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const navItems = [
  {
    label: "Core Values",
    to: "/about-us",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    label: "Testimonials",
    to: "/about-us/testimonials",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

const coreValues = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Integrity First",
    text: "We commit to doing right for our clients, our team, and our users every single time. This means avoiding shortcuts, being transparent in all dealings, and running our business with honesty and integrity.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Trust is Everything",
    text: "Whether you're a client or part of our team, we know trust is earned. We honor that trust by delivering consistently and keeping our promises.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Action Over Ideas",
    text: "The right solution comes from trying, experimenting, and iterating. Even if a spec is incomplete or a module isn't ready, we keep moving forward without letting obstacles block progress.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Think Like an Owner",
    text: "We hire smart, driven people and mentor them to excel. We take pride in our craft, focus on disciplined execution, and always act with the long-term vision of ownership.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Care Deeply",
    text: "We care for our team, because a strong team builds great products and great products delight our users.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Work Hard, Play Hard",
    text: "We are serious about results, but we also believe in enjoying the journey. Work should be challenging, inspiring, and yes — fun.",
  },
];

const AboutUs = () => {
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
        {/* Sidebar */}
        <aside className="ow-sidebar">
          <nav className="ow-nav" data-section="ABOUT US">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`ow-nav-item ${
                  item.label === "Core Values" ? "ow-nav-item--active" : ""
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
            <h1 className="ow-title">Core Values</h1>
            <p className="ow-subtitle">
              Doing right by our clients, our team, and our users guides everything we do.
            </p>
            <hr className="ow-divider" />
          </div>

          <div className="ow-intro">
            <span className="ow-badge">WHO WE ARE</span>
            <p className="ow-intro-text">
              At BeeStack, our culture isn't a poster on the wall — it's how we work every day.
              These values shape how we hire, how we build, and how we treat everyone we work with.
            </p>
          </div>

          {/* Cards grid */}
          <div className="ow-cards-grid">
            {coreValues.map((v) => (
              <div className="ow-card" key={v.title}>
                <span className="ow-card-icon">{v.icon}</span>
                <h3 className="ow-card-title">{v.title}</h3>
                <p className="ow-card-text">{v.text}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;