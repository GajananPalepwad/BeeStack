import React, { useEffect } from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import BlobBackground from "../components/BlobBackground";
import { Link } from "react-router-dom";

const careerReasons = [
  {
    num: "01",
    title: "We Ship Real Products",
    tags: ["High Impact", "Production Code", "Real Users"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    text: "From concept to global deployment, we build real applications that reach active users. There's nothing quite like seeing software you engineered used daily to solve real-world problems.",
  },
  {
    num: "02",
    title: "Technology at the Core",
    tags: ["Modern Stacks", "Cutting-Edge", "No Legacy Drag"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    text: "We are an engineer-first company. You'll work on new mobile platforms, explore bleeding-edge web frameworks, and help shape the future of how things are architected.",
  },
  {
    num: "03",
    title: "We Value Your Growth",
    tags: ["Tech Mentorship", "Internal Talks", "Continuous Learning"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    text: "We invest heavily in your professional development through one-on-one mentorship, weekly tech deep-dives, and dedicated learning allowances. We teach you how to master fundamentals.",
  },
  {
    num: "04",
    title: "Ownership, Not Oversight",
    tags: ["Decentralized", "Autonomous", "No Micromanagement"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    text: "You own features end-to-end from specification to release. We trust our engineers to make sound architectural decisions and take pride in shipping high-grade code.",
  },
  {
    num: "05",
    title: "Innovation Over Routine",
    tags: ["Experimentation", "Rapid Prototyping", "Curiosity"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    text: "We encourage bold experimentation and out-of-the-box thinking. Trying new libraries, benchmarking alternative databases, and failing fast is how we stay ahead.",
  },
  {
    num: "06",
    title: "Smart People, Small Teams",
    tags: ["Tight-Knit", "Direct Impact", "Zero Bureaucracy"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    text: "You will collaborate directly with humble, talented builders who love technology. We keep teams intentionally compact so your voice directly influences project direction.",
  },
  {
    num: "07",
    title: "Work-Life Balance That's Real",
    tags: ["Flexible Hours", "Sacred Weekends", "Sustainable Velocity"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    text: "We work diligently because we care, not because of artificial crunches. We set realistic sprint scopes and treat weekends as sacred time for rest, hobbies, and family.",
  },
  {
    num: "08",
    title: "We Celebrate Everything",
    tags: ["Team Milestones", "Game Nights", "Good Vibes"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    text: "From shipped features and zero-bug sprints to team birthdays and hackathons, we celebrate big milestones and everyday victories. A positive atmosphere is part of our workflow.",
  },
  {
    num: "09",
    title: "Perks That Actually Perk",
    tags: ["Premium Gear", "Catered Lunches", "Wellness Support"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    text: "Top-tier developer workstations, ergonomic setups, high-refresh displays, catered food, and open creative lounges. We believe great tools foster great focus.",
  },
  {
    num: "10",
    title: "A Culture That Grows With You",
    tags: ["Career Tracks", "Leadership", "Hive Spirit"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    text: "At BeeStack, you won't just level up your commit history — you will grow as an architect, leader, and problem solver. We mentor engineers into tech leaders.",
  },
];

const Careers = () => {
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
        <Sidebar section="CAREERS" />

        {/* Main content */}
        <main className="ow-main">
          {/* Header */}
          <header className="ow-header">
            <div className="ow-breadcrumb">
              <span>Careers</span>
              <span>•</span>
              <span>Life at BeeStack</span>
            </div>
            <h1 className="ow-title">Why BeeStack?</h1>
            <p className="ow-subtitle">
              Because building software together should be rewarding, inspiring, and fun.
            </p>
            <hr className="ow-divider" />
          </header>

          {/* Intro Card */}
          <section className="ow-intro">
            <div className="ow-badge">Our Engineering Culture</div>
            <p className="ow-intro-text">
              At BeeStack, we believe exceptional software comes from empowered engineers — and great people thrive when work is challenging and exciting.
            </p>
            <p className="ow-intro-text">
              We're a tight-knit team of builders, designers, and systems architects who love shipping clean code. Here are the top 10 reasons engineers love building their careers with us.
            </p>
          </section>

          {/* Cards Grid */}
          <div className="ow-cards-grid">
            {careerReasons.map((r) => (
              <article className="ow-card" key={r.title}>
                <div>
                  <div className="ow-card-header">
                    <span className="ow-card-icon">{r.icon}</span>
                    <span className="ow-card-num">{r.num}</span>
                  </div>

                  <h3 className="ow-card-title">{r.title}</h3>
                  <p className="ow-card-text">{r.text}</p>
                </div>

                <div className="ow-card-tags">
                  {r.tags.map((tag, i) => (
                    <span className="ow-card-tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Join the Hive Callout */}
          <div style={{
            background: "linear-gradient(135deg, rgba(254, 243, 199, 0.9), rgba(253, 230, 138, 0.7))",
            border: "1.5px solid rgba(245, 158, 11, 0.4)",
            borderRadius: "18px",
            padding: "28px 32px",
            maxWidth: "1200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            boxShadow: "0 10px 30px rgba(217, 119, 6, 0.12)"
          }}>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", marginBottom: "4px" }}>
                Ready to build what's next?
              </h3>
              <p style={{ fontSize: "14px", color: "#475569" }}>
                We're always looking for passionate engineers across Mobile, Frontend, Backend, and IoT.
              </p>
            </div>
            <Link
              to="/careers/current-openings"
              className="ow-sidebar-footer-btn"
              style={{ padding: "10px 20px", fontSize: "13.5px" }}
            >
              Explore Open Positions
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Careers;
