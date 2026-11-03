import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  const scrollToTop = (e) => {
    if (e && e.preventDefault) e.preventDefault();

    // Native smooth scroll
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }

    if (document.documentElement) {
      try {
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      } catch {
        document.documentElement.scrollTop = 0;
      }
    }

    if (document.body) {
      try {
        document.body.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      } catch {
        document.body.scrollTop = 0;
      }
    }

    // Scroll any inner scrollable containers
    document.querySelectorAll('.ow-main, .main-content, .homepage, .app').forEach((el) => {
      if (el instanceof HTMLElement) {
        try {
          el.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        } catch {
          el.scrollTop = 0;
        }
      }
    });

    // Resilient fallback smooth animation with requestAnimationFrame
    const startY =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (startY > 0) {
      const startTime = performance.now();
      const duration = Math.min(600, Math.max(300, startY * 0.3));
      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentY = startY * (1 - easeOutCubic(progress));

        window.scrollTo(0, currentY);
        if (document.documentElement) document.documentElement.scrollTop = currentY;
        if (document.body) document.body.scrollTop = currentY;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          window.scrollTo(0, 0);
          if (document.documentElement) document.documentElement.scrollTop = 0;
          if (document.body) document.body.scrollTop = 0;
        }
      };

      requestAnimationFrame(step);
    }
  };

  return (
    <footer className="bs-footer" aria-label="BeeStack Global Footer">
      <div className="bs-footer-container">
        {/* Top Tier: Multi-Column Sitemap & Brand Hub */}
        <div className="bs-footer-grid">
          {/* Brand & Mission Column */}
          <div className="bs-footer-brand-col">
            <Link to="/" className="bs-footer-brand-link" onClick={scrollToTop}>
              <img src="/logo.png" alt="BeeStack Logo" className="bs-footer-logo" />
              <div className="bs-footer-brand-text">
                <span className="bs-footer-brand-name">BeeStack</span>
                <span className="bs-footer-brand-sub">Software Labs</span>
              </div>
            </Link>

            <p className="bs-footer-desc">
              Engineering lab crafting institutional-grade software platforms, campus automation, and scalable digital products.
            </p>

            {/* Live Operational Status Pill */}
            <div className="bs-footer-status">
              <span className="bs-status-beacon">
                <span className="bs-status-dot" />
                <span className="bs-status-ping" />
              </span>
              <span className="bs-status-text">All Systems Operational • Q1/Q2 Sprints Active</span>
            </div>

            {/* Social & Contact Icons */}
            <div className="bs-footer-social-row">
              <a
                href="https://www.linkedin.com/company/beestack/"
                target="_blank"
                rel="noopener noreferrer"
                className="bs-social-link bs-social-link--linkedin"
                aria-label="BeeStack LinkedIn"
                title="BeeStack on LinkedIn"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
                </svg>
              </a>

              <a
                href="https://github.com/GajananPalepwad/TheFreeVideoEditor"
                target="_blank"
                rel="noopener noreferrer"
                className="bs-social-link bs-social-link--github"
                aria-label="BeeStack Open Source on GitHub"
                title="BeeStack Open Source on GitHub"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              <a
                href="mailto:business@beestack.in"
                className="bs-social-link bs-social-link--mail"
                aria-label="Email BeeStack"
                title="business@beestack.in"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Solutions & Platforms */}
          <div className="bs-footer-col">
            <h4 className="bs-footer-heading">Solutions & Platforms</h4>
            <ul className="bs-footer-links">
              <li>
                <Link to="/our-work/products">LMS & Learning Systems</Link>
              </li>
              <li>
                <Link to="/our-work/products">Online Examination Suites</Link>
              </li>
              <li>
                <Link to="/our-work/products">Campus Automation & IoT</Link>
              </li>
              <li>
                <Link to="/our-work/products">Institutional ERP Solutions</Link>
              </li>
              <li>
                <a href="https://thefreevideoeditor.com/" target="_blank" rel="noopener noreferrer">
                  TheFreeVideoEditor <span className="bs-mini-pill">OSS</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Engineering & Company */}
          <div className="bs-footer-col">
            <h4 className="bs-footer-heading">Company & Craft</h4>
            <ul className="bs-footer-links">
              <li>
                <Link to="/our-work/products">Our Work & Systems</Link>
              </li>
              <li>
                <Link to="/our-work/technique">Engineering Technique</Link>
              </li>
              <li>
                <Link to="/our-work/technology">Technology Architecture</Link>
              </li>
              <li>
                <Link to="/about-us">About BeeStack</Link>
              </li>
              <li>
                <Link to="/about-us/testimonials">Client Stories & Impact</Link>
              </li>
              <li>
                <Link to="/careers">Why Join BeeStack?</Link>
              </li>
              <li>
                <Link to="/careers/current-openings">
                  Current Openings <span className="bs-mini-pill bs-mini-pill--accent">Hiring</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Legal Directory */}
          <div className="bs-footer-col">
            <h4 className="bs-footer-heading">Connect & Governance</h4>
            <ul className="bs-footer-links">
              <li>
                <Link to="/contact-us">Get In Touch</Link>
              </li>
              <li>
                <Link to="/contact-us/location">Headquarters & Labs</Link>
              </li>
              <li>
                <Link to="/contact-us/getting-in">Hiring Journey</Link>
              </li>
              <li>
                <Link to="/legal">
                  Legal & Compliance <span className="bs-mini-pill bs-mini-pill--green">Verified</span>
                </Link>
              </li>
              <li>
                <Link to="/sitemap">Visual Site Directory</Link>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">
                  XML Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Sub-Footer with Copyright & Back to Top */}
        <div className="bs-sub-footer">
          <div className="bs-sub-left">
            <span>&copy; {new Date().getFullYear()} BeeStack Software Labs. All rights reserved.</span>
            <span className="bs-sub-divider">•</span>
            <span className="bs-sub-location">Crafted with precision in India</span>
          </div>

          <div className="bs-sub-links">
            <Link to="/legal">Terms of Service</Link>
            <span className="bs-sub-divider">•</span>
            <Link to="/legal">Privacy Policy</Link>
            <span className="bs-sub-divider">•</span>
            <Link to="/sitemap">Site Directory</Link>
          </div>

          <button
            type="button"
            className="bs-scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            title="Scroll back to top"
          >
            <span>Top</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
