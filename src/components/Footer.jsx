import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-left">
    Copyright © 2025 BeeStack. All Rights Reserved.
  </div>

  <div className="footer-links">
    <Link to="/contact-us">Contact</Link>
    <Link to="/sitemap">Legal</Link>
    <Link to="/sitemap">Sitemap</Link>
  </div>

  <div className="footer-social">
    <span>Follow the vibe?</span>
    <a
      href="https://www.linkedin.com/company/beestack/"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon linkedin"
    >
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>
</footer>

  )
}

export default Footer