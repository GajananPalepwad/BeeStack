import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-left">
    Copyright © 2026 BeeStack. All Rights Reserved.
  </div>

  <div className="footer-links">
    <Link to="/contact-us">Contact</Link>
    <Link to="/sitemap">Legal</Link>
    <Link to="/sitemap">Sitemap</Link>
  </div>

  <div className="footer-social">
    <span>Follow the vibe</span>
    <a
      href="https://www.linkedin.com/company/beestack/"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon linkedin"
      aria-label="BeeStack LinkedIn profile"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        width="18"
        height="18"
        aria-hidden="true"
      >
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
      </svg>
    </a>
  </div>
</footer>

  )
}

export default Footer