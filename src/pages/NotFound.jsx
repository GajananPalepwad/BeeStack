import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlobBackground from "../components/BlobBackground";
import "./NotFound.css";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404: Page Not Found | BeeStack</title>
        <meta
          name="description"
          content="The page you are looking for doesn't exist or has been moved. Explore BeeStack's software solutions and digital products."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Navbar />

      <div className="nf-page">
        <BlobBackground />

        <main className="nf-container">
          <div className="nf-badge">
            <span className="nf-badge-dot"></span>
            Error 404
          </div>

          <div className="nf-code-wrapper">
            <h1 className="nf-code">404</h1>
            <div className="nf-icon-circle">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FCAB1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
            </div>
          </div>

          <h2 className="nf-title">Lost in the Hive?</h2>
          <p className="nf-description">
            The page you're searching for doesn't exist, has been relocated, or the link may have a typo.
          </p>

          <div className="nf-actions">
            <Link to="/" className="nf-btn nf-btn--primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Back to Home</span>
            </Link>

            <Link to="/our-work/products" className="nf-btn nf-btn--secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
              <span>Explore Our Work</span>
            </Link>
          </div>

          <div className="nf-links-card">
            <span className="nf-links-title">Popular Destinations:</span>
            <div className="nf-links-grid">
              <Link to="/our-work/technique" className="nf-link-item">Development Technique</Link>
              <Link to="/our-work/technology" className="nf-link-item">Tech Stack</Link>
              <Link to="/careers/current-openings" className="nf-link-item">Current Openings</Link>
              <Link to="/contact-us" className="nf-link-item">Contact Us</Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
