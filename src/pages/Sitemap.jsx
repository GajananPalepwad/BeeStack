import React, { useState, useMemo, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Sitemap.css";
import { Helmet } from "react-helmet-async";

const SITEMAP_DATA = [
  {
    category: "Solutions & Platforms",
    badge: "Enterprise",
    color: "#10b981",
    rgb: "16, 185, 129",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    links: [
      { title: "Student & Learning Management Systems (LMS)", path: "/our-work/products", desc: "Digital classroom & student records portal", tag: "Platform" },
      { title: "Online Examination Platforms", path: "/our-work/products", desc: "Automated proctoring & evaluation suites", tag: "Assessment" },
      { title: "Campus Automation & IoT Systems", path: "/our-work/products", desc: "Biometric attendance, schedules & fee workflows", tag: "Automation" },
      { title: "Institutional ERP Solutions", path: "/our-work/products", desc: "End-to-end finance, HR, inventory & governance", tag: "Enterprise" },
      { title: "TheFreeVideoEditor", path: "https://thefreevideoeditor.com/", external: true, desc: "Open-source browser-based timeline video editor", tag: "Open Source" },
    ],
  },
  {
    category: "Engineering & Craft",
    badge: "Methodology",
    color: "#0284c7",
    rgb: "2, 132, 199",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    links: [
      { title: "Tech We've Built (Featured Projects)", path: "/our-work/products", desc: "Production portfolio and deployed applications", tag: "Showcase" },
      { title: "Engineering Technique", path: "/our-work/technique", desc: "Development workflow, agile delivery & code craftsmanship", tag: "Standards" },
      { title: "Technology Stack & Architecture", path: "/our-work/technology", desc: "Languages, cloud infrastructure & databases we use", tag: "Tech Stack" },
      { title: "The Core Concept", path: "/our-work/concept", desc: "Our product engineering mindset and principles", tag: "Philosophy" },
    ],
  },
  {
    category: "Company & Culture",
    badge: "Our Identity",
    color: "#f59e0b",
    rgb: "245, 158, 11",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    links: [
      { title: "About BeeStack", path: "/about-us", desc: "Who we are, our foundation, and our engineering lab", tag: "Overview" },
      { title: "Client Stories & Verified Reviews", path: "/about-us/testimonials", desc: "Testimonials from institutional deans & founders", tag: "Reviews" },
      { title: "Why BeeStack? (Careers Hub)", path: "/careers", desc: "Engineering culture, growth, and problem solving", tag: "Culture" },
    ],
  },
  {
    category: "Career Opportunities",
    badge: "We're Hiring",
    color: "#8b5cf6",
    rgb: "139, 92, 246",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    links: [
      { title: "Current Engineering Openings", path: "/careers/current-openings", desc: "Active roles across mobile, web & backend teams", tag: "Open Roles" },
      { title: "Software Engineer – Android", path: "/jobs/android", desc: "Kotlin, Jetpack Compose, Coroutines & Android SDK", tag: "Engineering" },
      { title: "Software Engineer – iOS", path: "/jobs/ios", desc: "Swift, SwiftUI, Combine & Apple Ecosystem", tag: "Engineering" },
      { title: "Software Engineer – Web Frontend", path: "/jobs/webfrontend", desc: "React, Next.js, TypeScript & modern UI design", tag: "Engineering" },
      { title: "Software Engineer – Backend / Full Stack", path: "/jobs/webbackend", desc: "Node.js, PostgreSQL, REST APIs & Distributed Systems", tag: "Engineering" },
    ],
  },
  {
    category: "Contact & Headquarters",
    badge: "Connect",
    color: "#06b6d4",
    rgb: "6, 182, 212",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    links: [
      { title: "Contact Us & Inquiries", path: "/contact-us", desc: "Direct email channels and project consultations", tag: "Inquire" },
      { title: "Headquarters & Office Location", path: "/contact-us/location", desc: "Physical address and lab location in Nanded", tag: "Location" },
      { title: "Hiring Journey & Getting In", path: "/contact-us/getting-in", desc: "Interview process, culture fit & application guide", tag: "Process" },
    ],
  },
  {
    category: "Legal & Governance",
    badge: "Compliance",
    color: "#ef4444",
    rgb: "239, 68, 68",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    links: [
      { title: "Terms of Service", path: "/legal", desc: "Agile milestones, acceptance criteria & warranties", tag: "Legal" },
      { title: "Privacy Policy", path: "/legal", desc: "DPDP & GDPR data protection, zero monetization", tag: "Privacy" },
      { title: "Client Code Ownership & IP", path: "/legal", desc: "100% transfer of custom source code upon payment", tag: "IP Rights" },
      { title: "Security Standards & SLA", path: "/legal", desc: "99.9% uptime architecture & vulnerability disclosure", tag: "Security" },
    ],
  },
];

const Sitemap = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const blobsRef = useRef([]);

  // Animated ambient blobs
  useEffect(() => {
    const palette = [
      ["#a8edea", "#fed6e3", "#f9c784", "#c2e9fb", "#fbc2eb"],
      ["#fbc2eb", "#ffd6a5", "#fddb92", "#e0c3fc", "#8ec5fc"],
      ["#fddb92", "#d1fdff", "#ffcba4", "#a8edea", "#96e6a1"],
      ["#e0c3fc", "#ffd6a5", "#f9d4d4", "#fbc2eb", "#c8f7c5"],
      ["#c8f7c5", "#96e6a1", "#ffe8cc", "#fddb92", "#c2e9fb"],
    ];
    const cfg = [
      { rx: 40, ry: 32, spd: 0.27, ph: 0 },
      { rx: 32, ry: 25, spd: 0.41, ph: 1.26 },
      { rx: 28, ry: 22, spd: 0.35, ph: 2.51 },
      { rx: 22, ry: 17, spd: 0.49, ph: 3.77 },
      { rx: 36, ry: 29, spd: 0.3, ph: 5.03 },
    ];

    function hexRgb(h) {
      return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
    }
    function lerpCol(c1, c2, p) {
      const [r1, g1, b1] = hexRgb(c1), [r2, g2, b2] = hexRgb(c2);
      return `rgb(${Math.round(r1 + (r2 - r1) * p)},${Math.round(g1 + (g2 - g1) * p)},${Math.round(b1 + (b2 - b1) * p)})`;
    }

    let t = 0, palIdx = 0, nxtIdx = 1, prog = 0, raf;
    const animate = () => {
      t += 0.004;
      prog += 0.008;
      if (prog >= 1) {
        prog = 0;
        palIdx = nxtIdx;
        nxtIdx = (nxtIdx + 1) % palette.length;
      }
      const cur = palette[palIdx], nxt = palette[nxtIdx];
      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const { rx, ry, spd, ph } = cfg[i];
        const x = 50 + rx * Math.sin(t * spd + ph);
        const y = 50 + ry * Math.cos(t * spd * 0.72 + ph);
        el.style.transform = `translate(${x - 50}%,${y - 50}%)`;
        el.style.backgroundColor = lerpCol(cur[i % 5], nxt[i % 5], prog);
      });
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  // Filter sections by search query
  const filteredSections = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return SITEMAP_DATA;

    return SITEMAP_DATA.map((section) => {
      const categoryMatch = section.category.toLowerCase().includes(q);
      const matchingLinks = section.links.filter(
        (link) =>
          link.title.toLowerCase().includes(q) ||
          link.desc.toLowerCase().includes(q) ||
          link.path.toLowerCase().includes(q)
      );
      if (categoryMatch) return section;
      if (matchingLinks.length > 0) return { ...section, links: matchingLinks };
      return null;
    }).filter(Boolean);
  }, [searchQuery]);

  const totalLinksCount = useMemo(() => {
    return filteredSections.reduce((acc, sec) => acc + sec.links.length, 0);
  }, [filteredSections]);

  return (
    <>
      <Helmet>
        <title>Visual Site Directory & Sitemap | BeeStack</title>
        <meta
          name="description"
          content="Explore the visual sitemap across all BeeStack platforms, engineering products, career opportunities, and legal compliance policies."
        />
        <link rel="canonical" href="https://beestack.in/sitemap" />
      </Helmet>

      <Navbar />

      <div className="sm-page">
        {/* Animated ambient gradient blobs */}
        <div className="sm-blobs" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`sm-blob sm-blob--${i}`}
              ref={(el) => (blobsRef.current[i] = el)}
            />
          ))}
        </div>

        <main className="sm-main">
          {/* Header Section */}
          <header className="sm-header">
            <div className="sm-breadcrumb">
              <span>Home</span>
              <span>•</span>
              <span>Visual Site Directory</span>
            </div>

            <h1 className="sm-title">Visual Site Directory</h1>
            <p className="sm-subtitle">
              Comprehensive navigation across all BeeStack software platforms, engineering methodologies, active job openings, and governance policies.
            </p>

            {/* Search Bar & Fast Jump */}
            <div className="sm-toolbar">
              <div className="sm-search-box">
                <svg className="sm-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Filter pages, engineering roles, or platforms..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="sm-search-input"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="sm-search-clear"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="sm-meta-actions">
                <span className="sm-count-badge">
                  {totalLinksCount} {totalLinksCount === 1 ? "Page" : "Pages"} Available
                </span>

                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm-xml-btn"
                  title="View raw XML sitemap for search engines"
                >
                  <span>Raw XML Sitemap</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          </header>

          {/* Directory Grid */}
          {filteredSections.length > 0 ? (
            <div className="sm-grid">
              {filteredSections.map((section, idx) => (
                <div
                  key={section.category}
                  className="sm-card"
                  style={{
                    "--sec-color": section.color,
                    "--sec-rgb": section.rgb,
                    animationDelay: `${idx * 0.06}s`,
                  }}
                >
                  {/* Top Colored Accent Line */}
                  <div
                    className="sm-card-accent"
                    style={{
                      background: `linear-gradient(90deg, ${section.color}, rgba(${section.rgb}, 0.2) 85%, transparent)`,
                    }}
                  />

                  <div className="sm-card-inner">
                    {/* Header: Icon + Category + Badge */}
                    <div className="sm-card-header">
                      <div
                        className="sm-icon-pod"
                        style={{
                          backgroundColor: `rgba(${section.rgb}, 0.12)`,
                          borderColor: `rgba(${section.rgb}, 0.28)`,
                          color: section.color,
                        }}
                      >
                        {section.icon}
                      </div>

                      <div className="sm-header-info">
                        <div className="sm-badge" style={{ color: section.color }}>
                          {section.badge}
                        </div>
                        <h2 className="sm-card-title">{section.category}</h2>
                      </div>
                    </div>

                    {/* Links List */}
                    <ul className="sm-links-list">
                      {section.links.map((link, lIdx) => (
                        <li key={lIdx} className="sm-link-item">
                          {link.external ? (
                            <a
                              href={link.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="sm-link-anchor"
                            >
                              <div className="sm-link-content">
                                <span className="sm-link-title">
                                  {link.title}
                                  <svg className="sm-ext-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                  </svg>
                                </span>
                                <span className="sm-link-desc">{link.desc}</span>
                              </div>
                              {link.tag && <span className="sm-link-tag">{link.tag}</span>}
                            </a>
                          ) : (
                            <Link to={link.path} className="sm-link-anchor">
                              <div className="sm-link-content">
                                <span className="sm-link-title">
                                  {link.title}
                                  <svg className="sm-arrow-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polyline points="9 18 15 12 9 6" />
                                  </svg>
                                </span>
                                <span className="sm-link-desc">{link.desc}</span>
                              </div>
                              {link.tag && <span className="sm-link-tag">{link.tag}</span>}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="sm-empty-state">
              <div className="sm-empty-icon">🔍</div>
              <h3 className="sm-empty-title">No matching pages found</h3>
              <p className="sm-empty-desc">
                We couldn't find any results matching "<strong>{searchQuery}</strong>". Try searching for "LMS", "Android", "Jobs", "Legal", or "Contact".
              </p>
              <button
                type="button"
                className="sm-empty-btn"
                onClick={() => setSearchQuery("")}
              >
                Clear Search Filter
              </button>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Sitemap;
