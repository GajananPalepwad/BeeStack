import React, { useEffect } from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import BlobBackground from "../components/BlobBackground";

const techniqueSections = [
  {
    num: "01",
    title: "Collaborative by Default",
    tags: ["Continuous Sync", "Clear Commits", "QA Integration"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    text: "Great software is built through constant collaboration and clarity. You'll always know what's happening with regular code commits, feature updates, and sprint tracking. We integrate seamlessly with your QA, UX, product, and marketing stakeholders.",
  },
  {
    num: "02",
    title: "Ownership, Not Oversight",
    tags: ["Single POC", "Autonomy", "Product Mindset"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    text: "We manage our own engineering process so you don't have to. Every BeeStack project features a dedicated technical lead who understands both your commercial vision and technical roadmap. You focus on growth; we drive execution.",
  },
  {
    num: "03",
    title: "Process with Purpose",
    tags: ["CI/CD Pipelines", "Automated Testing", "Predictable Sprints"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    text: "We value structure and speed equally. Every project upholds our engineering fundamentals: mandatory peer code reviews, continuous integration pipelines, realistic test coverage, concise documentation, and predictable delivery milestones.",
  },
  {
    num: "04",
    title: "Code You Can Trust",
    tags: ["Modular Architecture", "Clean Code", "Direct Repos"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    text: "Transparency drives engineering quality. Your application is committed directly into your repositories, allowing your team to review, audit, and benchmark every line. We build maintainable, modular codebases designed to evolve smoothly.",
  },
  {
    num: "05",
    title: "Quality That Lasts",
    tags: ["Zero Regressions", "Internal QA", "Resilient Systems"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    text: "We take end-to-end accountability for everything we ship. Before any client release, our internal QA verifies reliability, security, and performance across target devices and network constraints. Our reputation is built on what keeps working.",
  },
  {
    num: "06",
    title: "Built on Trust",
    tags: ["Long-term Partners", "Craftsmanship", "Measurable ROI"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    text: "Our clients stay because our products succeed in the wild. We bring discipline, architectural craftsmanship, and accountability to every release — because trust in tech isn't claimed, it's proven in production.",
  },
];

const Technique = () => {
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
              <span>Engineering Methodology</span>
            </div>
            <h1 className="ow-title">Technique</h1>
            <p className="ow-subtitle">
              We engineer with clarity, speed, and architectural precision — turning complex specs into reliable software.
            </p>
            <hr className="ow-divider" />
          </header>

          {/* Intro Card */}
          <section className="ow-intro">
            <div className="ow-badge">Engineering Excellence</div>
            <p className="ow-intro-text">
              At BeeStack, technology evolves fast — frameworks update, libraries cycle, and trends come and go.
              What never changes is the foundation of sound software design, thoughtful development, and disciplined delivery.
            </p>
            <p className="ow-intro-text">
              Our engineering methodology blends the agility of modern rapid iteration with the stability of proven enterprise practices, ensuring your application ships fast without breaking quality.
            </p>
          </section>

          {/* Cards Grid */}
          <div className="ow-cards-grid">
            {techniqueSections.map((s) => (
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

export default Technique;
