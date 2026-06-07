import React, {useEffect} from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import BlobBackground from "../components/BlobBackground";

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
    to: "/our-work/concept",
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

const techSections = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: "Mobile Development",
    text: "Deep expertise in Kotlin, Swift, Java, Jetpack Compose & SwiftUI. Complex UI flows, high-performance animations, and system-level integrations (BLE, location, media). Skilled in React Native, Flutter, and Kotlin Multiplatform for cross-platform delivery. Also experienced in wearables, TV, CarPlay, and Android Auto.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Web & Frontend",
    text: "Expert in React, Next.js, Angular, Vue.js, Ember.js, and Gatsby. We build responsive, high-performance web apps with modern rendering strategies (CSR, SSR, SSG) and seamless API integration. Full support for accessibility, localization, SEO, and dark mode using Tailwind, Chakra UI, and Styled Components.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Backend & Cloud",
    text: "Scalable systems in Node.js, Python, Go, Java, Ruby, and .NET across microservices, event-driven, and cloud-native architectures on AWS, GCP, and Azure. Deep knowledge in MySQL, PostgreSQL, MongoDB, Prisma, and OAuth2.0/JWT for enterprise-grade security.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    title: "IoT & Connected Devices",
    text: "IoT companion apps communicating via Bluetooth, BLE, WiFi, NFC, and Matter/Weave protocols. Full coverage of device discovery, pairing, data streaming, and secure cloud integration — bridging hardware and software ecosystems for seamless user experiences.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path d="M13 6h3l3 4v4h-4m-3-8H4a1 1 0 00-1 1v9h3m4-10v10m0 0H7" />
      </svg>
    ),
    title: "Automotive & Embedded",
    text: "Experienced in Apple CarPlay, Android Auto, and Android Automotive apps with deep expertise in vehicle integration, connected infotainment, and companion services. Supports real-time data collection, analytics, and vehicle-to-device communication.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI & Next-Gen Technologies",
    text: "GPT-based models, embeddings, custom prompts, and open-source LLM solutions integrated across mobile, web, and backend systems. We constantly explore emerging technologies so our clients can leverage cutting-edge tools without the learning curve.",
  },
];

const Technology = () => {
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
        <BlobBackground />
        {/* Sidebar */}
        <aside className="ow-sidebar">
          <nav className="ow-nav">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`ow-nav-item ${
                  item.label === "Technology" ? "ow-nav-item--active" : ""
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
            <h1 className="ow-title">Technology</h1>
            <p className="ow-subtitle">We are a core technology company.</p>
            <hr className="ow-divider" />
          </div>

          {/* Badge + intro */}
          <div className="ow-intro">
            <span className="ow-badge">🖥️ Full-spectrum engineering</span>
            <p className="ow-intro-text">
              At BeeStack, technology isn't just what we use — it's how we think. We are a full-spectrum product engineering company, helping clients build cutting-edge software and connected systems that scale, perform, and delight users.
            </p>
            <p className="ow-intro-text">
              From mobile and web platforms to IoT, automotive systems, and AI-powered solutions, we stay ahead of the curve — mastering new technologies as they emerge and integrating them into real products.
            </p>
          </div>

          {/* Cards grid */}
          <div className="ow-cards-grid">
            {techSections.map((s) => (
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

export default Technology;
