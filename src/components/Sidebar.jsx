import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const defaultSections = {
  'OUR WORK': [
    {
      label: "Tech we've built",
      to: "/our-work/products",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
    },
    {
      label: "The Concept",
      to: "/our-work/concept",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
        </svg>
      ),
    },
    {
      label: "Technique",
      to: "/our-work/technique",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
    },
    {
      label: "Technology",
      to: "/our-work/technology",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <path d="M8 21h8M12 17v4"/>
        </svg>
      ),
    },
  ],
  'ABOUT US': [
    {
      label: "Core Values",
      to: "/about-us",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
    },
    {
      label: "Testimonials",
      to: "/about-us/testimonials",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <path d="M8 9h8M8 13h5"/>
        </svg>
      ),
    },
    {
      label: "Legal & Policies",
      to: "/legal",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
    },
  ],
  'CAREERS': [
    {
      label: "Why BeeStack?",
      to: "/careers",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
    },
    {
      label: "Current Openings",
      to: "/careers/current-openings",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        </svg>
      ),
    },
  ],
  'CONTACT US': [
    {
      label: "Contact Mail",
      to: "/contact-us",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      ),
    },
    {
      label: "Location",
      to: "/contact-us/location",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
    },
    {
      label: "Getting In",
      to: "/contact-us/getting-in",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/>
          <polyline points="10 17 15 12 10 7"/>
          <line x1="15" y1="12" x2="3" y2="12"/>
        </svg>
      ),
    },
  ],
};

const Sidebar = ({ section, items }) => {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase().replace(/\/$/, "");
  const navRef = useRef(null);
  const activeItemRef = useRef(null);

  // Auto-detect section if not explicitly passed
  let activeSection = section;
  if (!activeSection) {
    if (currentPath.startsWith('/our-work')) activeSection = 'OUR WORK';
    else if (currentPath.startsWith('/about-us')) activeSection = 'ABOUT US';
    else if (currentPath.startsWith('/careers') || currentPath.startsWith('/jobs')) activeSection = 'CAREERS';
    else if (currentPath.startsWith('/contact-us')) activeSection = 'CONTACT US';
    else activeSection = 'OUR WORK';
  }

  const navItems = items || defaultSections[activeSection] || defaultSections['OUR WORK'];

  const isItemActive = (to) => {
    const target = to.toLowerCase().replace(/\/$/, "");
    if (currentPath === target) return true;
    // Highlight Current Openings when viewing any /jobs/... role
    if (target === '/careers/current-openings' && currentPath.startsWith('/jobs')) return true;
    return false;
  };

  // Keep active tab centered in horizontal scroll on mobile
  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeItemRef.current && navRef.current) {
        const navContainer = navRef.current;
        const activeEl = activeItemRef.current;

        const containerWidth = navContainer.clientWidth;
        const activeOffsetLeft = activeEl.offsetLeft;
        const activeWidth = activeEl.offsetWidth;
        const targetScrollLeft = activeOffsetLeft - (containerWidth / 2) + (activeWidth / 2);

        navContainer.scrollTo({
          left: Math.max(0, targetScrollLeft),
          behavior: 'smooth'
        });
      }
    }, 60);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <aside className="ow-sidebar" aria-label={`${activeSection} Navigation`}>
      <div className="ow-sidebar-top">
        {/* Row 1: Category / Page Title Badge in its own separate row */}
        <div className="ow-sidebar-badge">
          <span className="ow-sidebar-badge-dot" />
          <span>{activeSection}</span>
        </div>

        {/* Row 2: Navigation Items Tabs */}
        <nav className="ow-nav" ref={navRef}>
          {navItems.map((item) => {
            const active = isItemActive(item.to);
            return (
              <Link
                key={item.label}
                ref={active ? activeItemRef : null}
                to={item.to}
                className={`ow-nav-item ${active ? "ow-nav-item--active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                <div className="ow-nav-label-wrap">
                  <span className="ow-nav-icon">{item.icon}</span>
                  <span className="ow-nav-label">{item.label}</span>
                </div>
                <span className="ow-nav-chevron" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Sidebar Footer Card (Desktop) */}
      <div className="ow-sidebar-footer">
        <div className="ow-sidebar-footer-card">
          <div className="ow-sidebar-footer-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FCAB1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="10" r="1"/>
            </svg>
          </div>
          <div>
            <h4 className="ow-sidebar-footer-title">Have a project?</h4>
            <p className="ow-sidebar-footer-desc">Let's build something exceptional together.</p>
          </div>
          <Link to="/contact-us" className="ow-sidebar-footer-btn">
            Get in Touch
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
