import React, { useEffect } from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import BlobBackground from "../components/BlobBackground";

const techSections = [
  {
    num: "01",
    title: "Mobile Development",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    text: "Deep expertise in native Android & iOS ecosystems alongside high-efficiency cross-platform toolchains. We craft pixel-perfect UI flows, buttery smooth 60/120fps animations, offline-first sync engines, and hardware integrations like Bluetooth BLE, NFC, sensors, and biometrics.",
    tags: ["Kotlin", "Swift", "Jetpack Compose", "SwiftUI", "Flutter", "React Native", "KMP", "Room DB"],
  },
  {
    num: "02",
    title: "Web & Modern Frontend",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    text: "Fast, accessible, and reactive single-page applications and server-rendered web systems. We specialize in component-driven development, ultra-fast initial bundle loading, state orchestration, WCAG 2.1 accessibility, SEO optimization, and internationalization.",
    tags: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Vite", "GraphQL", "State Machines"],
  },
  {
    num: "03",
    title: "Backend & Cloud Architecture",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    text: "Resilient microservices, REST & GraphQL endpoints, event-driven streaming pipelines, and serverless architectures engineered to handle millions of queries with sub-second latencies and strict OAuth2 / JWT security controls.",
    tags: ["Node.js", "Python", "Golang", "AWS", "Google Cloud", "PostgreSQL", "MongoDB", "Redis", "Docker"],
  },
  {
    num: "04",
    title: "IoT & Connected Systems",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2" />
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
      </svg>
    ),
    text: "Hardware-to-cloud telemetry and device companion applications communicating over Bluetooth BLE, Wi-Fi, MQTT, NFC, and Matter. Complete protocol handling for peer pairing, encrypted data streaming, firmware updates over-the-air (OTA), and telemetry dashboards.",
    tags: ["BLE / Bluetooth", "MQTT", "ESP32", "Matter Protocol", "AWS IoT Core", "WebSockets", "Firmware OTA"],
  },
  {
    num: "05",
    title: "Automotive & Connected Vehicles",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    text: "Automotive companion apps and in-vehicle infotainment suites supporting Apple CarPlay, Android Auto, and Android Automotive OS (AAOS). We engineer connected vehicle companions, driving telemetry analytics, EV charging locators, and media streaming modules.",
    tags: ["Apple CarPlay", "Android Auto", "AAOS", "Vehicle Telemetry", "CAN-Bus", "Mapbox & Navigation"],
  },
  {
    num: "06",
    title: "AI & Next-Gen Technologies",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a8 8 0 0 0-8 8c0 3.36 2.07 6.24 5 7.42V20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2.58c2.93-1.18 5-4.06 5-7.42a8 8 0 0 0-8-8z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="10" y1="11" x2="14" y2="11" />
      </svg>
    ),
    text: "Custom LLM integrations, retrieval-augmented generation (RAG) pipelines, multimodal vision models, and intelligent AI agents embedded natively into web and mobile experiences — empowering businesses to leverage AI pragmatically with data safety.",
    tags: ["Gemini API", "OpenAI / GPT-4", "LangChain", "Vector Databases", "Embeddings & RAG", "Fine-Tuning"],
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
              <span>Full-Spectrum Capabilities</span>
            </div>
            <h1 className="ow-title">Technology Stack</h1>
            <p className="ow-subtitle">
              We are a core technology company. We master modern languages, cloud platforms, and protocols to engineer solutions that scale seamlessly.
            </p>
            <hr className="ow-divider" />
          </header>

          {/* Intro Card */}
          <section className="ow-intro">
            <div className="ow-badge">Full-Spectrum Engineering</div>
            <p className="ow-intro-text">
              At BeeStack, technology isn't just a toolkit — it's how we think and solve problems.
              We build full-stack digital architectures that perform consistently under demanding user workloads.
            </p>
            <p className="ow-intro-text">
              From responsive frontend applications and high-throughput cloud backends to low-latency IoT protocols and intelligent AI models, we deliver modern, production-hardened software.
            </p>
          </section>

          {/* Cards Grid */}
          <div className="ow-cards-grid">
            {techSections.map((s) => (
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

export default Technology;
