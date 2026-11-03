import React, { useEffect } from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import BlobBackground from "../components/BlobBackground";

const conceptSections = [
  {
    num: "01",
    title: "Built for Modern Products",
    tags: ["Web & Mobile", "IoT Systems", "Scale-Ready"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    text: "From consumer mobile apps and SaaS portals to connected IoT telemetry — we bring the exact same precision, architectural craftsmanship, and speed to products of every scale.",
  },
  {
    num: "02",
    title: "Adaptable by Design",
    tags: ["Agile Sprints", "Rapid Iteration", "Shift Tolerant"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
    text: "Markets shift, requirements evolve, and opportunities emerge. We iterate rapidly in 2-week cycles, ensuring your software adapts quickly while maintaining flawless release stability.",
  },
  {
    num: "03",
    title: "User-First Thinking",
    tags: ["Intuitive UX", "Performance", "Behavior Alignment"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    text: "Usability isn't a cosmetic coat of paint — it is the fundamental architecture. We align code performance, UI responsiveness, and UX interaction models with how real users behave.",
  },
  {
    num: "04",
    title: "Engineered for Reliability",
    tags: ["Fault Tolerant", "Decoupled", "High Throughput"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: "Systems that scale gracefully and fail safely. Our backends and mobile clients are decoupled, resilient against network drops, and backed by automated integration tests.",
  },
  {
    num: "05",
    title: "Ownership in Every Line",
    tags: ["Architecture to Deploy", "Full Accountability", "High Standards"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    text: "We take genuine ownership of what we engineer. From infrastructure provisioning and schema migrations to app store publishing, we safeguard quality at every milestone.",
  },
  {
    num: "06",
    title: "Transparent Collaboration",
    tags: ["Open Repos", "Working Demos", "Zero Guesswork"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    text: "Visible progress over slide presentations. You see active git commits, staging builds, and live demos as we build — giving you total visibility into progress and code quality.",
  },
  {
    num: "07",
    title: "One Team, One Channel",
    tags: ["Dedicated Lead", "Direct Slack/Discord", "Fast Resolution"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    text: "No layers of account managers. You interact directly with a senior technical point-of-contact who grasps both your strategic business goals and our technical sprint backlog.",
  },
  {
    num: "08",
    title: "Built on Trust",
    tags: ["Client Retention", "Craftsmanship", "Long-term Value"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    text: "Our clients continue working with us because our software delivers sustainable business results. Your success fuels our reputation — we build every product to last.",
  },
];

const OurWork = () => {
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
        <Sidebar section="OUR WORK" />

        {/* Main content */}
        <main className="ow-main">
          {/* Header */}
          <header className="ow-header">
            <div className="ow-breadcrumb">
              <span>Our Work</span>
              <span>•</span>
              <span>Philosophy & Values</span>
            </div>
            <h1 className="ow-title">The Concept</h1>
            <p className="ow-subtitle">
              We make shipping world-class digital products simpler, faster, and remarkably reliable.
            </p>
            <hr className="ow-divider" />
          </header>

          {/* Intro Card */}
          <section className="ow-intro">
            <div className="ow-badge">Building What's Next</div>
            <p className="ow-intro-text">
              BeeStack is a modern product engineering laboratory that helps ambitious founders and enterprises design, build, and deploy high-impact software solutions.
            </p>
            <p className="ow-intro-text">
              We partner with forward-thinking teams to turn complex technical challenges into market-leading applications across web, mobile, IoT, and artificial intelligence.
            </p>
          </section>

          {/* Cards Grid */}
          <div className="ow-cards-grid">
            {conceptSections.map((s) => (
              <article className="ow-card" key={s.title}>
                <div>
                  <div className="ow-card-header">
                    <span className="ow-card-icon">{s.icon}</span>
                    <span className="ow-card-num">{s.num}</span>
                  </div>

                  <h3 className="ow-card-title">{s.title}</h3>
                  <p className="ow-card-text">{s.text}</p>
                </div>

                <div className="ow-card-tags">
                  {s.tags.map((tag, i) => (
                    <span className="ow-card-tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default OurWork;
