import React, { useState, useEffect, useRef } from "react";
import {Pivot as Hamburger} from 'hamburger-react'
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

  const handleToggle = (toggled) => {
    setOpen(toggled);
  };

  const handleLinkClick = () => {
    setOpen(false); // Close menu when a link is clicked
  };

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

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
    { path: "/", label: "Home" },
    { path: "/our-work", label: "Our Work" },
    { path: "/about-us", label: "About Us" },
    { path: "/careers", label: "Careers" },
    { path: "/contact-us", label: "Contact Us" },
  ];

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
        <img src="/logo.png" alt="BeeStack logo" />
        </Link>
      </div>
      <Link to="/">
      <div className="navname text-3xl">BeeStack</div>
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

      {/* Mobile Hamburger Menu */}
      <div className="mobile-menu" ref={menuRef}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={28}
          direction="right"
          duration={0.4}
          distance="md"
          color="#0b1220"
          easing="ease-in"
          onToggle={handleToggle}
          rounded={false}
          label="Show menu"
          hideOutline={true}
        />
        
        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav-items ${isOpen ? 'show' : ''}`}>
          {navItems.map((item) => (
            <div key={item.path} className={`mobile-nav-item ${isActive(item.path) ? "active" : ""}`}>
              <Link to={item.path} onClick={handleLinkClick}>
                {item.label}
              </Link>
              {isActive(item.path) && <div className="mobile-underline"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;