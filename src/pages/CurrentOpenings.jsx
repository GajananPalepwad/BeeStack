import React, { useEffect } from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import BlobBackground from "../components/BlobBackground";
import { Link } from "react-router-dom";

const openings = [
  {
    id: "Android-2023",
    title: "Software Engineer – Android",
    department: "Mobile Engineering",
    location: "Nanded / Hybrid",
    type: "Full-Time",
    experience: "2+ Years",
    path: "/jobs/android",
    description:
      "Design, build, and ship high-performance native Android applications. You'll architect robust modules with Kotlin and Jetpack Compose, handle offline persistence, and integrate seamlessly with cloud microservices.",
    tags: ["Kotlin", "Jetpack Compose", "Coroutines", "Room DB", "REST APIs", "Play Store"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    id: "iOS-2023",
    title: "Software Engineer – iOS",
    department: "Mobile Engineering",
    location: "Nanded / Hybrid",
    type: "Full-Time",
    experience: "2+ Years",
    path: "/jobs/ios",
    description:
      "Craft fluid, polished, and performant iOS experiences using Swift and SwiftUI. You'll collaborate directly with design and backend leads to build consumer-loved mobile products with deep system integration.",
    tags: ["Swift", "SwiftUI", "Combine", "Core Data", "RESTful APIs", "App Store"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    id: "WebFE-2023",
    title: "Software Engineer – Web Frontend",
    department: "Web Platform",
    location: "Nanded / Hybrid",
    type: "Full-Time",
    experience: "2+ Years",
    path: "/jobs/webfrontend",
    description:
      "Engineer fast, responsive, and accessible web applications using React, Next.js, and TypeScript. You will turn UI designs into production-ready frontends with exceptional Core Web Vitals performance.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux / Zustand", "Web Vitals"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: "WebBE-2023",
    title: "Software Engineer – Backend / Full Stack",
    department: "Cloud Systems",
    location: "Nanded / Hybrid",
    type: "Full-Time",
    experience: "2+ Years",
    path: "/jobs/webbackend",
    description:
      "Architect and scale distributed backend APIs, data models, and event-driven microservices using Node.js, Python, and SQL/NoSQL databases across modern cloud environments (AWS / GCP).",
    tags: ["Node.js", "Python / Go", "PostgreSQL", "MongoDB", "Docker", "AWS / GCP"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
];

const CurrentOpenings = () => {
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
              <span>Opportunities</span>
            </div>
            <h1 className="ow-title">Current Openings</h1>
            <p className="ow-subtitle">
              Join our engineering lab. Build software that powers businesses and scales to thousands of active users.
            </p>
            <hr className="ow-divider" />
          </header>

          {/* Intro Card */}
          <section className="ow-intro">
            <div className="ow-badge">We're Actively Hiring</div>
            <p className="ow-intro-text">
              At BeeStack, we're driven by technology, craft, and curiosity. Our organizational structure is flat, our culture is open, and our environment is built for engineers who love shipping real software.
            </p>
            <p className="ow-intro-text">
              If you enjoy solving tricky system challenges, debugging hard problems, and collaborating with a smart team — explore our open roles below.
            </p>
          </section>

          {/* Job Openings Grid */}
          <div className="ow-cards-grid">
            {openings.map((job) => (
              <article className="ow-card" key={job.id}>
                <div>
                  <div className="ow-card-header">
                    <span className="ow-card-icon">{job.icon}</span>
                    <span className="ow-status-badge ow-status-badge--live">
                      {job.type}
                    </span>
                  </div>

                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "8px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "700", color: "#d97706", textTransform: "uppercase" }}>
                      {job.department}
                    </span>
                    <span style={{ fontSize: "11px", color: "#64748b" }}>•</span>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#64748b" }}>
                      {job.location}
                    </span>
                    <span style={{ fontSize: "11px", color: "#64748b" }}>•</span>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#64748b" }}>
                      {job.experience}
                    </span>
                  </div>

                  <h3 className="ow-card-title">{job.title}</h3>
                  <p className="ow-card-text">{job.description}</p>

                  <div className="ow-card-tags">
                    {job.tags.map((tag, i) => (
                      <span className="ow-card-tag" key={i}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to={job.path} className="ow-card-btn">
                  <span>View Role & Apply</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>

          {/* Apply Instructions Card */}
          <div style={{
            background: "rgba(255, 255, 255, 0.75)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.9)",
            borderRadius: "18px",
            padding: "26px 30px",
            maxWidth: "1200px",
            boxShadow: "0 4px 20px rgba(15, 23, 42, 0.05)"
          }}>
            <h3 style={{ fontSize: "16px", fontWeight: "800", color: "#0f172a", marginBottom: "6px" }}>
              Don't see your specific role?
            </h3>
            <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.7", marginBottom: "12px" }}>
              We're always excited to connect with exceptional engineers, designers, and systems architects. Send your resume, GitHub profile, or portfolio to:
            </p>
            <a
              href="mailto:hr@beestack.in"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#d97706",
                fontWeight: "700",
                fontSize: "15px",
                textDecoration: "underline",
              }}
            >
              <span>hr@beestack.in</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default CurrentOpenings;
