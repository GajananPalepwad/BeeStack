import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Sitemap.css';

const Sitemap = () => {
  const sitemapData = [
    {
      title: 'Home',
      path: '/',
      children: []
    },
    {
      title: 'Our Work',
      path: '/our-work/products',
      children: [
        { title: "Tech we've built", path: '/our-work/products' },
        { title: 'The Concept', path: '/our-work/concept' },
        { title: 'Technique', path: '/our-work/technique' },
        { title: 'Technology', path: '/our-work/technology' },
      ]
    },
    {
      title: 'About Us',
      path: '/about-us',
      children: [
        { title: 'Core Values', path: '/about-us' },
        { title: 'Client Testimonials', path: '/about-us/testimonials' },
      ]
    },
    {
      title: 'Careers',
      path: '/careers',
      children: [
        { title: 'Why BeeStack?', path: '/careers' },
        { title: 'Current Openings', path: '/careers/current-openings' },
      ]
    },
    {
      title: 'Engineering Job Openings',
      path: '/careers/current-openings',
      children: [
        { title: 'Software Engineer – Android', path: '/jobs/android' },
        { title: 'Software Engineer – iOS', path: '/jobs/ios' },
        { title: 'Software Engineer – Web Frontend', path: '/jobs/webfrontend' },
        { title: 'Software Engineer – Backend / Full Stack', path: '/jobs/webbackend' }
      ]
    },
    {
      title: 'Contact Us',
      path: '/contact-us',
      children: [
        { title: 'Contact Mail & Inquiries', path: '/contact-us' },
        { title: 'Office Location & Maps', path: '/contact-us/location' },
        { title: 'Getting In / Hiring Journey', path: '/contact-us/getting-in' },
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="sitemap-container">
        <div className="sitemap-content">
          <h1 className="sitemap-title">Site Directory</h1>
          <p className="sitemap-subtitle">Comprehensive sitemap across all BeeStack pages and services</p>
          
          <div className="sitemap-list">
            {sitemapData.map((section, index) => (
              <div key={index} className="sitemap-section">
                {section.path ? (
                  <Link to={section.path} className="sitemap-main-link">
                    {section.title}
                  </Link>
                ) : (
                  <h2 className="sitemap-section-title">{section.title}</h2>
                )}
                
                {section.children && section.children.length > 0 && (
                  <ul className="sitemap-children">
                    {section.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <Link to={child.path} className="sitemap-child-link">
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sitemap;
