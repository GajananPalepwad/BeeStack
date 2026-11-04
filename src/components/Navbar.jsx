import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  const handleLinkClick = () => {
    setOpen(false); // Close menu when a link is clicked
  };

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const navItems = [
    { path: "/", label: "Home", num: "01" },
    { path: "/our-work", label: "Our Work", num: "02" },
    { path: "/about-us", label: "About Us", num: "03" },
    { path: "/careers", label: "Careers", num: "04" },
    { path: "/contact-us", label: "Contact Us", num: "05" },
  ];

  return (
    <div className={`navbar ${isOpen ? "navbar--open" : ""}`}>
      {/* Brand Logo with Mascot & Wordmark */}
      <Link to="/" className="navbar-brand" onClick={handleLinkClick} aria-label="BeeStack Software Labs Home">
        <img src="/logo.png" alt="BeeStack Logo" className="navbar-brand-logo" />
        <div className="navbar-brand-text">
          <span className="navbar-brand-name">BeeStack</span>
          <span className="navbar-brand-sub">SOFTWARE LABS</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="nav-items desktop-nav">
        {navItems.map((item) => (
          <div key={item.path} className={`nav-item ${isActive(item.path) ? "active" : ""}`}>
            <Link to={item.path}>{item.label}</Link>
            <div className={`underline ${isActive(item.path) ? "show" : ""}`}></div>
          </div>
        ))}
      </div>

      {/* Mobile & Tablet Hamburger Menu Trigger */}
      <div className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`} ref={menuRef}>
        <button
          type="button"
          className={`hamburger-btn ${isOpen ? "hamburger-btn--open" : ""}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-drawer"
        >
          <span className="hamburger-box">
            <span className="hamburger-line hamburger-line--1" />
            <span className="hamburger-line hamburger-line--2" />
            <span className="hamburger-line hamburger-line--3" />
          </span>
        </button>

        {/* Ambient Darkened Frosted Glass Backdrop */}
        <div
          className={`mobile-backdrop ${isOpen ? "show" : ""}`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        {/* Mobile & Tablet Navigation Drawer */}
        <nav
          id="mobile-nav-drawer"
          className={`mobile-nav-items ${isOpen ? "show" : ""}`}
          aria-label="Mobile and Tablet Navigation"
          aria-hidden={!isOpen}
        >
          <div className="mobile-drawer-inner">
            <div className="mobile-drawer-header">
              <div className="mobile-drawer-header-left">
                <span className="mobile-drawer-pill-dot" />
                <span className="mobile-drawer-tag">Navigation</span>
              </div>
              <span className="mobile-drawer-count">{navItems.length} Sections</span>
            </div>

            <div className="mobile-nav-list">
              {navItems.map((item, index) => {
                const active = isActive(item.path);
                return (
                  <div
                    key={item.path}
                    className={`mobile-nav-item ${active ? "active" : ""}`}
                    style={{ "--item-idx": index }}
                  >
                    <Link
                      to={item.path}
                      onClick={handleLinkClick}
                      className="mobile-nav-link"
                    >
                      <div className="mobile-nav-label-wrap">
                        <span className="mobile-nav-num">{item.num}</span>
                        <span className="mobile-nav-label">{item.label}</span>
                      </div>
                      <div className="mobile-nav-arrow-pod">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Bottom Action & Consultation Section */}
            <div className="mobile-drawer-footer">
              <Link
                to="/contact-us"
                className="mobile-drawer-cta"
                onClick={handleLinkClick}
              >
                <span>Get A Free Consultation</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>

              <div className="mobile-drawer-meta">
                <div className="mobile-drawer-status">
                  <span className="mobile-status-dot" />
                  <span>Available for new projects</span>
                </div>
                <a
                  href="mailto:contact@beestack.in"
                  className="mobile-drawer-email"
                >
                  contact@beestack.in
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;