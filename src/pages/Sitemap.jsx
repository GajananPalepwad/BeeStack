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
      path: '/our-work',
      children: [
        { title: 'Technique', path: '/our-work/technique' },
        { title: 'Technology', path: '/our-work/technology' },
        { title: 'Products', path: '/our-work/products' }
      ]
    },
    {
      title: 'About Us',
      path: '/about-us',
      children: []
    },
    {
      title: 'Testimonials',
      path: '/testimonials',
      children: []
    },
    {
      title: 'Careers',
      path: '/careers',
      children: [
        { title: 'Getting In', path: '/careers/getting-in' },
        { title: 'Current Openings', path: '/careers/current-openings' }
      ]
    },
    {
      title: 'Job Openings',
      path: null,
      children: [
        { title: 'Android Developer', path: '/jobs/android' },
        { title: 'iOS Developer', path: '/jobs/ios' },
        { title: 'Web Frontend Developer', path: '/jobs/webfrontend' },
        { title: 'Web Backend Developer', path: '/jobs/webbackend' }
      ]
    },
    {
      title: 'Contact Us',
      path: '/contact-us',
      children: []
    }
  ];

  return (
    <>
      <Navbar />
      <div className="sitemap-container">
        <div className="sitemap-content">
          <h1 className="sitemap-title">Sitemap</h1>
          <p className="sitemap-subtitle">Navigate through all pages easily</p>
          
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

