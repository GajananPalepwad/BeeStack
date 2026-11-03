import React, { useEffect } from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import BlobBackground from "../components/BlobBackground";

const coreValues = [
  {
    num: "01",
    title: "Integrity First",
    tags: ["Honesty", "Ethical Tech", "No Shortcuts"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    text: "We commit to doing right for our clients, our engineering team, and our end-users every single time. This means avoiding technical shortcuts, being transparent about trade-offs, and running our company with unyielding honesty.",
  },
  {
    num: "02",
    title: "Trust is Everything",
    tags: ["Reliability", "Consistent Delivery", "Long-term Focus"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    text: "Whether you're a funded founder, an enterprise partner, or an engineer joining our hive, we understand trust is earned through actions, not slogans. We honor that trust by hitting milestones and upholding commitments.",
  },
  {
    num: "03",
    title: "Action Over Ideas",
    tags: ["Pragmatic Execution", "Iterative Proofs", "Speed to Value"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    text: "The best solutions emerge from rapid experimentation, testing, and continuous delivery. When specs are uncertain, we write working prototypes to eliminate ambiguity and keep momentum high.",
  },
  {
    num: "04",
    title: "Think Like an Owner",
    tags: ["Craftsmanship", "Long-term Impact", "Mentorship"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    text: "We hire driven engineers and coach them to take full ownership. We don't just treat code as tickets to close — we approach every system with the long-term architectural vision of a company owner.",
  },
  {
    num: "05",
    title: "Care Deeply",
    tags: ["Team First", "User Empathy", "Supportive Culture"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    text: "We care deeply for our teammates and our craft. An inspired, empowered team builds great products, and great products delight users. We foster a community where empathy and technical ambition thrive side by side.",
  },
  {
    num: "06",
    title: "Work Hard, Play Hard",
    tags: ["Sustainable Pace", "Celebrated Wins", "Joy in the Hive"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    text: "We are passionate about results, but we equally believe in enjoying the build. We solve hard problems together, celebrate product launches, and cultivate a fun, balanced workplace that sustains long-term creativity.",
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
        <Sidebar section="ABOUT US" />

        {/* Main content */}
        <main className="ow-main">
          {/* Header */}
          <header className="ow-header">
            <div className="ow-breadcrumb">
              <span>About Us</span>
              <span>•</span>
              <span>Our Principles</span>
            </div>
            <h1 className="ow-title">Core Values</h1>
            <p className="ow-subtitle">
              Doing right by our clients, our engineers, and our users guides every product decision we make.
            </p>
            <hr className="ow-divider" />
          </header>

          {/* Intro Card */}
          <section className="ow-intro">
            <div className="ow-badge">Who We Are • How We Build</div>
            <p className="ow-intro-text">
              At BeeStack, culture isn't a slogan on a slide deck — it's how we write code, conduct sprint reviews, and collaborate daily.
            </p>
            <p className="ow-intro-text">
              These six core values shape who we hire, how we engineer systems, and how we treat every client partner who trusts us with their vision.
            </p>
          </section>

          {/* Cards Grid */}
          <div className="ow-cards-grid">
            {coreValues.map((v) => (
              <article className="ow-card" key={v.title}>
                <div>
                  <div className="ow-card-header">
                    <span className="ow-card-icon">{v.icon}</span>
                    <span className="ow-card-num">{v.num}</span>
                  </div>

                  <h3 className="ow-card-title">{v.title}</h3>
                  <p className="ow-card-text">{v.text}</p>
                </div>

                <div className="ow-card-tags">
                  {v.tags.map((tag, i) => (
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

export default AboutUs;
