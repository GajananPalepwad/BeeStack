import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import BlobBackground from "../components/BlobBackground";
import "./OurWork.css";
import "./Legal.css";
import { Helmet } from "react-helmet-async";

const TABS = [
  { id: "terms", label: "Terms of Service", icon: "document" },
  { id: "privacy", label: "Privacy Policy", icon: "shield" },
  { id: "ip", label: "Code Ownership & IP", icon: "code" },
  { id: "security", label: "Security & SLA", icon: "lock" },
];

const Legal = () => {
  const [activeTab, setActiveTab] = useState("terms");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("legal@beestack.in");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  useEffect(() => {
    const targets = document.querySelectorAll(
      ".ow-card, .ow-intro, .ow-header, .ow-badge, .legal-card"
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
  }, [activeTab]);

  return (
    <>
      <Helmet>
        <title>Legal & Compliance Standards | BeeStack</title>
        <meta
          name="description"
          content="Review BeeStack's legal terms, privacy policy, client code ownership guarantees, and enterprise security SLAs."
        />
        <link rel="canonical" href="https://beestack.in/legal" />
      </Helmet>

      <Navbar />

      <div className="ow-page">
        <BlobBackground />

        {/* Unified Modern Sidebar */}
        <Sidebar section="ABOUT US" />

        {/* Main Content */}
        <main className="ow-main">
          {/* Header */}
          <header className="ow-header">
            <div className="ow-breadcrumb">
              <span>About Us</span>
              <span>•</span>
              <span>Legal & Governance</span>
            </div>
            <h1 className="ow-title">Legal & Compliance Standards</h1>
            <p className="ow-subtitle">
              Transparent terms, 100% client code ownership, privacy-first principles, and enterprise service commitments.
            </p>
            <div className="legal-header-meta">
              <span className="legal-version-badge">
                <span className="legal-badge-dot" /> Last Updated: November 2026 • Version 2.4
              </span>
            </div>
            <hr className="ow-divider" />
          </header>

          {/* Interactive Policy Tabs Switcher */}
          <div className="legal-tabs-bar" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`legal-tab-btn ${activeTab === tab.id ? "legal-tab-btn--active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.id === "terms" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                )}
                {tab.id === "privacy" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                )}
                {tab.id === "ip" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                )}
                {tab.id === "security" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                )}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab 1: Terms of Service */}
          {activeTab === "terms" && (
            <article className="legal-article" role="tabpanel">
              <div className="legal-card">
                <div className="legal-card-accent" />
                <div className="legal-card-body">
                  <h2 className="legal-card-title">1. Terms of Service & Client Engagement</h2>
                  <p className="legal-card-lead">
                    These Terms govern software engineering engagements, custom development services, and technical consulting provided by BeeStack Software Labs ("BeeStack", "we", "our").
                  </p>

                  <div className="legal-section">
                    <h3 className="legal-heading">1.1 Scope & Agile Milestone Delivery</h3>
                    <p>
                      All technical work is executed according to mutually agreed Statements of Work (SOW) or sprint backlog milestones. BeeStack adheres to transparent, iterative development sprints with weekly reviews, continuous integration previews, and verifiable staging environments.
                    </p>
                  </div>

                  <div className="legal-section">
                    <h3 className="legal-heading">1.2 Acceptance Criteria & Warranty Window</h3>
                    <p>
                      Upon milestone delivery, clients receive a standard <strong>14-day acceptance testing window</strong>. BeeStack guarantees remediation of any functional defects or discrepancies against the agreed SOW during this window at no additional cost.
                    </p>
                  </div>

                  <div className="legal-section">
                    <h3 className="legal-heading">1.3 Milestone Billing & Transparency</h3>
                    <p>
                      Invoices correspond directly to verified milestone sign-offs. BeeStack operates on clear fixed-milestone or sprint-based retainers with zero hidden infrastructure markups or unauthorized billable hours.
                    </p>
                  </div>

                  <div className="legal-section">
                    <h3 className="legal-heading">1.4 Limitation of Liability</h3>
                    <p>
                      In no event shall BeeStack be liable for indirect, incidental, special, or consequential damages resulting from third-party hosting outages, unauthorized system breaches caused by client-managed credentials, or force majeure events. BeeStack's aggregate liability shall not exceed the total fees paid under the applicable SOW.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Tab 2: Privacy Policy */}
          {activeTab === "privacy" && (
            <article className="legal-article" role="tabpanel">
              <div className="legal-card">
                <div className="legal-card-accent" style={{ background: "linear-gradient(90deg, #10b981, #00C9A7)" }} />
                <div className="legal-card-body">
                  <h2 className="legal-card-title">2. Privacy Policy & Data Protection</h2>
                  <p className="legal-card-lead">
                    BeeStack respects client confidentiality and digital privacy. We operate in strict compliance with the India Digital Personal Data Protection (DPDP) Act 2023 and global privacy frameworks including GDPR.
                  </p>

                  <div className="legal-section">
                    <h3 className="legal-heading">2.1 Zero Data Monetization</h3>
                    <p>
                      <strong>BeeStack does not sell, rent, monetize, or trade client data or user contact records under any circumstances.</strong> Information submitted via our website or during project engagements is strictly utilized for technical communication, project execution, and billing.
                    </p>
                  </div>

                  <div className="legal-section">
                    <h3 className="legal-heading">2.2 Non-Disclosure by Default (NDA)</h3>
                    <p>
                      We treat all technical requirements, proprietary system architectures, database schemas, and commercial strategies shared during inquiries or engagements as strictly confidential under binding NDA terms.
                    </p>
                  </div>

                  <div className="legal-section">
                    <h3 className="legal-heading">2.3 Minimalist Privacy-First Telemetry</h3>
                    <p>
                      Our website collects zero invasive tracking cookies. We utilize lightweight, privacy-respecting analytics purely to evaluate site performance, Core Web Vitals, and browser compatibility without harvesting Personally Identifiable Information (PII).
                    </p>
                  </div>

                  <div className="legal-section">
                    <h3 className="legal-heading">2.4 Data Retention & Right to Erasure</h3>
                    <p>
                      Clients and prospective partners may request the complete deletion of their inquiry records, submitted briefs, or contact logs at any time by emailing our data compliance officer.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Tab 3: Code Ownership & IP */}
          {activeTab === "ip" && (
            <article className="legal-article" role="tabpanel">
              <div className="legal-card">
                <div className="legal-card-accent" style={{ background: "linear-gradient(90deg, #0284c7, #7C3AED)" }} />
                <div className="legal-card-body">
                  <h2 className="legal-card-title">3. Intellectual Property & Code Ownership</h2>
                  <p className="legal-card-lead">
                    We believe in complete freedom and ownership for the businesses and institutions that partner with us. You own the code you pay for.
                  </p>

                  <div className="legal-section">
                    <h3 className="legal-heading">3.1 100% Transfer of Custom Source Code</h3>
                    <p>
                      Upon final settlement of project milestones, <strong>all custom source code, documentation, schema definitions, system diagrams, and build configurations transfer exclusively and unconditionally to the client</strong> as work-made-for-hire.
                    </p>
                  </div>

                  <div className="legal-section">
                    <h3 className="legal-heading">3.2 Open-Source Software (OSS) Integrity</h3>
                    <p>
                      When utilizing open-source libraries or frameworks (such as React, Astro, or SQLite), BeeStack exclusively selects packages with permissive commercial licenses (e.g. MIT, Apache 2.0, BSD). We guarantee zero copyleft (GPL) contamination in proprietary client solutions.
                    </p>
                  </div>

                  <div className="legal-section">
                    <h3 className="legal-heading">3.3 Repository & Deployment Handover</h3>
                    <p>
                      Clients receive complete repository access (GitHub, GitLab, or self-hosted Git), CI/CD pipeline automation scripts, Docker configurations, and root deployment credentials upon project completion.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Tab 4: Security & SLA */}
          {activeTab === "security" && (
            <article className="legal-article" role="tabpanel">
              <div className="legal-card">
                <div className="legal-card-accent" style={{ background: "linear-gradient(90deg, #FCAB1E, #ef4444)" }} />
                <div className="legal-card-body">
                  <h2 className="legal-card-title">4. Security Standards & Service Level Agreement</h2>
                  <p className="legal-card-lead">
                    Institutional and campus software demands absolute uptime, fault tolerance, and rigorous encryption.
                  </p>

                  <div className="legal-section">
                    <h3 className="legal-heading">4.1 99.9% Uptime Architecture Targets</h3>
                    <p>
                      BeeStack architects cloud environments across redundant infrastructure providers (AWS, Cloudflare Workers, Google Cloud, DigitalOcean) with automated health probes, database clustering, and sub-second failover mechanisms to maintain high availability.
                    </p>
                  </div>

                  <div className="legal-section">
                    <h3 className="legal-heading">4.2 Encryption & Access Control</h3>
                    <p>
                      All database connections enforce TLS 1.3 encryption in transit and AES-256 encryption at rest. Application access employs role-based access control (RBAC), hashed credentials with Argon2/bcrypt, and time-bound JWT/session validation.
                    </p>
                  </div>

                  <div className="legal-section">
                    <h3 className="legal-heading">4.3 Vulnerability Disclosure Program</h3>
                    <p>
                      Security researchers and clients discovering potential security flaws are encouraged to report them directly to our emergency security response team at <a href="mailto:security@beestack.in" className="legal-inline-link">security@beestack.in</a>. We acknowledge all reports within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Legal Inquiries Contact Card */}
          <div className="legal-contact-box">
            <div className="legal-contact-left">
              <div className="legal-contact-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h4 className="legal-contact-title">Questions about compliance or customized enterprise MSAs?</h4>
                <p className="legal-contact-desc">
                  Our legal and solutions team can provide bespoke Master Services Agreements (MSA), Business Associate Agreements, or customized NDAs for enterprise partnerships.
                </p>
              </div>
            </div>

            <div className="legal-contact-action">
              <a href="mailto:legal@beestack.in" className="legal-email-btn">
                legal@beestack.in
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="legal-copy-btn"
              >
                {copiedEmail ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Legal;
