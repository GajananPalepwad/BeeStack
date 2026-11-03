import React, { useEffect } from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import BlobBackground from "../components/BlobBackground";

const clientTestimonials = [
  {
    author: "Dr. Sania A. Sayed",
    role: "Doctor & Practice Owner",
    company: "drsaniasayed.com",
    image: "/images/testimonials/dr-sania-sayed.webp",
    metric: "Medical Web Presence",
    rating: 5,
    quote:
      "BeeStack helped establish a professional online presence for my practice. The website presents information clearly and makes it easier for visitors to learn about my services. I appreciate the focus on design, usability, and creating a smooth experience for visitors. Thank you to the BeeStack team for their support.",
    tags: ["Healthcare Web", "UI/UX Design", "Patient Portal"],
  },
  {
    author: "Dr. Nadir Shah",
    role: "Doctor & Practice Owner",
    company: "drnadirshah.in",
    image: "/images/testimonials/dr-nadir-shah.webp",
    metric: "Modern Healthcare Portal",
    rating: 5,
    quote:
      "Working with BeeStack on my online presence has been a positive experience. The website provides a professional way to present information about my practice and helps visitors find the details they need. I appreciate the team's efforts toward creating a clean, accessible, and user-friendly website.",
    tags: ["Doctor Practice", "Clean UI", "Accessible Web"],
  },
  {
    author: "Adil Shah",
    role: "Executive Representative",
    company: "Syed Hazrath Shah Foundation",
    image: "/images/testimonials/adil-shah.webp",
    metric: "Foundation Platform",
    rating: 5,
    quote:
      "BeeStack helped bring our foundation's online presence to life with a dedicated website to represent our organization and its work. Having a website makes it easier for people to learn about our foundation and connect with us. We appreciate the team's efforts in developing a professional digital presence for our organization.",
    tags: ["NGO & Foundation", "Community Portal", "Web Platform"],
  },
  {
    author: "Faisal Quraishi",
    role: "Business Owner",
    company: "Himroofa Fabrics",
    image: "/images/testimonials/faisal-quraishi.webp",
    metric: "Brand & Catalog Platform",
    rating: 5,
    quote:
      "BeeStack helped us establish a professional online presence for Himroofa Fabrics. The website showcases our brand and products in a clean, organized, and user-friendly way. The team was focused on presenting our business professionally and making it easier for customers to explore our offerings online. We appreciate BeeStack’s efforts in helping us strengthen our digital presence.",
    tags: ["E-Commerce & Brand", "Product Showcase", "Digital Presence"],
  },
  {
    author: "Rohan Deshmukh",
    role: "Founder & Head of Product",
    company: "Daily Bites Platform",
    metric: "40K+ Daily Orders",
    rating: 5,
    quote:
      "BeeStack didn't just write code — they understood the operational logistics of our food subscription model. Their Android app performance is buttery smooth, and the offline payment reconciliation solved our biggest operational bottleneck.",
    tags: ["Mobile App", "Fintech & Payments", "Cloud Architecture"],
  },
  {
    author: "Dr. A. K. Kadam",
    role: "Dean of Academic Systems",
    company: "SGGSIE&T Campus",
    metric: "12,000+ Active Students",
    rating: 5,
    quote:
      "Deploying an institutional platform across 12,000 students and hundreds of faculty requires absolute stability. BeeStack delivered on schedule with zero downtime during peak exam result season.",
    tags: ["Enterprise App", "Campus Portal", "Cloud Messaging"],
  },
  {
    author: "Ananya Mehta",
    role: "Co-Founder & VP Engineering",
    company: "Loop Developer Network",
    metric: "99.98% Uptime at Scale",
    quote:
      "Building a developer platform where users scrutinize every millisecond of latency is tough. BeeStack's Next.js and PostgreSQL architecture handled our rapid surge effortlessly. Their team communicates like seasoned veterans.",
    tags: ["Next.js Web", "Developer Tooling", "Real-Time Sync"],
  },
  {
    author: "Vikramaditya Shinde",
    role: "Director of IoT Operations",
    company: "Apex Telemetry Labs",
    metric: "45% Reduction in Latency",
    quote:
      "Their mastery of BLE protocols, MQTT message brokers, and Android system daemons is rare. They solved complex sensor pairing dropouts that two previous agencies couldn't resolve in months.",
    tags: ["IoT Hardware", "BLE Integration", "Edge Telemetry"],
  },
  {
    author: "Siddharth Rao",
    role: "Chief Technology Officer",
    company: "Kryptech Cloud Solutions",
    metric: "Shipped 3 Weeks Ahead",
    quote:
      "BeeStack operates as an organic extension of our core technical team. Code reviews are thorough, CI/CD is automated, and their ownership mindset meant we never had to micromanage.",
    tags: ["Cloud Backend", "Microservices", "Docker & Kubernetes"],
  },
  {
    author: "Pooja Verma",
    role: "Head of Digital Experience",
    company: "Nexora Healthtech",
    metric: "4.9 App Store Rating",
    quote:
      "From initial UX design to App Store approval, the attention to detail was exceptional. Patient engagement increased by 65% in the first quarter post-launch. BeeStack is our go-to engineering partner.",
    tags: ["Mobile UI/UX", "iOS & Android", "Data Security"],
  },
];

const Testimonials = () => {
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
              <span>Partner Experiences</span>
            </div>
            <h1 className="ow-title">Client Stories & Impact</h1>
            <p className="ow-subtitle">
              Hear directly from startup founders, enterprise directors, and product leaders who rely on BeeStack software.
            </p>
            <hr className="ow-divider" />
          </header>

          {/* Intro Card */}
          <section className="ow-intro">
            <div className="ow-badge">Real Impact • Proven Trust</div>
            <p className="ow-intro-text">
              We don't just write code — we deliver clarity, confidence, and peace of mind through craftsmanship, adaptability, and accountable delivery.
            </p>
            <p className="ow-intro-text">
              Here are testimonials and verified outcomes from teams that have built and scaled their products with our engineering lab.
            </p>
          </section>

          {/* Cards Grid */}
          <div className="ow-cards-grid">
            {clientTestimonials.map((t) => (
              <article className="ow-card" key={t.author}>
                <div>
                  <div className="ow-card-header">
                    {/* Star Rating */}
                    <div style={{ display: "flex", gap: "3px", color: "#FCAB1E" }}>
                      {[...Array(t.rating)].map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FCAB1E" stroke="#FCAB1E" strokeWidth="1">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>

                    {/* Metric pill */}
                    <span className="ow-status-badge ow-status-badge--live">
                      {t.metric}
                    </span>
                  </div>

                  {/* Quote */}
                  <p style={{
                    fontSize: "14.5px",
                    lineHeight: "1.75",
                    color: "#334155",
                    fontStyle: "italic",
                    marginBottom: "18px",
                    position: "relative"
                  }}>
                    "{t.quote}"
                  </p>

                  {/* Author Info */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    paddingTop: "14px",
                    borderTop: "1px solid rgba(226, 232, 240, 0.8)",
                  }}>
                    {t.image ? (
                      <img
                        src={t.image}
                        alt={t.author}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "1.5px solid rgba(252, 171, 30, 0.4)",
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                          flexShrink: 0,
                        }}
                      />
                    ) : (
                      <div style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, rgba(252, 171, 30, 0.2), rgba(0, 201, 167, 0.2))",
                        border: "1.5px solid rgba(252, 171, 30, 0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "800",
                        fontSize: "15px",
                        color: "#92400e",
                        flexShrink: 0
                      }}>
                        {t.author.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h4 style={{ fontSize: "14.5px", fontWeight: "700", color: "#0f172a", marginBottom: "2px" }}>
                        {t.author}
                      </h4>
                      <p style={{ fontSize: "12px", color: "#64748b" }}>
                        {t.role} • <strong style={{ color: "#d97706" }}>{t.company}</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="ow-card-tags">
                  {t.tags.map((tag, i) => (
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

export default Testimonials;
