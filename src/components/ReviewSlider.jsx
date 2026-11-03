import React, { useState, useEffect, useRef } from "react";
import "./ReviewSlider.css";

function ReviewSlider() {
  const [selectedReview, setSelectedReview] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const blobsRef = useRef([]);

  // Close modal on Escape and prevent body background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedReview(null);
    };
    if (selectedReview) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedReview]);

  // Animated ambient blobs (unified with WhatWeDoSection and FeaturedProjects)
  useEffect(() => {
    const palette = [
      ["#a8edea", "#fed6e3", "#f9c784", "#c2e9fb", "#fbc2eb"],
      ["#fbc2eb", "#ffd6a5", "#fddb92", "#e0c3fc", "#8ec5fc"],
      ["#fddb92", "#d1fdff", "#ffcba4", "#a8edea", "#96e6a1"],
      ["#e0c3fc", "#ffd6a5", "#f9d4d4", "#fbc2eb", "#c8f7c5"],
      ["#c8f7c5", "#96e6a1", "#ffe8cc", "#fddb92", "#c2e9fb"],
    ];
    const cfg = [
      { rx: 40, ry: 32, spd: 0.27, ph: 0 },
      { rx: 32, ry: 25, spd: 0.41, ph: 1.26 },
      { rx: 28, ry: 22, spd: 0.35, ph: 2.51 },
      { rx: 22, ry: 17, spd: 0.49, ph: 3.77 },
      { rx: 36, ry: 29, spd: 0.30, ph: 5.03 },
    ];

    function hexRgb(h) {
      return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
    }
    function lerpCol(c1, c2, p) {
      const [r1, g1, b1] = hexRgb(c1), [r2, g2, b2] = hexRgb(c2);
      return `rgb(${Math.round(r1 + (r2 - r1) * p)},${Math.round(g1 + (g2 - g1) * p)},${Math.round(b1 + (b2 - b1) * p)})`;
    }

    let t = 0, palIdx = 0, nxtIdx = 1, prog = 0, raf;
    const animate = () => {
      t += 0.004;
      prog += 0.008;
      if (prog >= 1) {
        prog = 0;
        palIdx = nxtIdx;
        nxtIdx = (nxtIdx + 1) % palette.length;
      }
      const cur = palette[palIdx], nxt = palette[nxtIdx];
      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const { rx, ry, spd, ph } = cfg[i];
        const x = 50 + rx * Math.sin(t * spd + ph);
        const y = 50 + ry * Math.cos(t * spd * 0.72 + ph);
        el.style.transform = `translate(${x - 50}%,${y - 50}%)`;
        el.style.backgroundColor = lerpCol(cur[i % 5], nxt[i % 5], prog);
      });
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Dr. Sania A. Sayed",
      role: "Medical Practice Owner",
      website: "https://www.drsaniasayed.com/",
      displayUrl: "drsaniasayed.com",
      text: "“BeeStack helped establish a professional online presence for my practice. The website presents information clearly and makes it easier for visitors to learn about my services. I appreciate the focus on design, usability, and creating a smooth experience for visitors. Thank you to the BeeStack team for their support.”",
      stars: 5,
      img: "/images/testimonials/dr-sania-sayed.webp",
      initials: "SS",
      color: "#0284c7",
    },
    {
      id: 2,
      name: "Dr. Nadir Shah",
      role: "Medical Practice Owner",
      website: "https://www.drnadirshah.in/",
      displayUrl: "drnadirshah.in",
      text: "“Working with BeeStack on my online presence has been a positive experience. The website provides a professional way to present information about my practice and helps visitors find the details they need. I appreciate the team's efforts toward creating a clean, accessible, and user-friendly website.”",
      stars: 5,
      img: "/images/testimonials/dr-nadir-shah.webp",
      initials: "NS",
      color: "#f59e0b",
    },
    {
      id: 3,
      name: "Adil Shah",
      role: "Syed Hazrath Shah Foundation",
      website: "https://www.syedhazrathshahfoundation.com/",
      displayUrl: "syedhazrathshahfoundation.com",
      text: "“BeeStack helped bring our foundation's online presence to life with a dedicated website to represent our organization and its work. Having a website makes it easier for people to learn about our foundation and connect with us. We appreciate the team's efforts in developing a professional digital presence for our organization.”",
      stars: 5,
      img: "/images/testimonials/adil-shah.webp",
      initials: "AS",
      color: "#10b981",
    },
    {
      id: 4,
      name: "Faisal Quraishi",
      role: "Himroofa Fabrics",
      website: "https://www.himroofabrics.com/",
      displayUrl: "himroofabrics.com",
      text: "“BeeStack helped us establish a professional online presence for Himroofa Fabrics. The website showcases our brand and products in a clean, organized, and user-friendly way. The team was focused on presenting our business professionally and making it easier for customers to explore our offerings online. We appreciate BeeStack’s efforts in helping us strengthen our digital presence.”",
      stars: 5,
      img: "/images/testimonials/faisal-quraishi.webp",
      initials: "FQ",
      color: "#7C3AED",
    },
    {
      id: 5,
      name: "Dr. B. R. Bombade",
      role: "Controller of Examinations, SGGSIE&T",
      website: null,
      displayUrl: null,
      text: "“The SGGSIE&T Nanded mobile application is a commendable digital initiative developed to enhance academic and examination-related communication within the institute.”",
      stars: 5,
      img: "https://www.sggs.ac.in/uploads/faculty_image/1731055967.webp",
      initials: "BB",
      color: "#d97706",
    },
    {
      id: 6,
      name: "Swapnil",
      role: "Business Owner",
      website: null,
      displayUrl: null,
      text: "“I had a great experience working with Beestack Website Builder. They created a very professional and beautiful website exactly as I wanted. The team was supportive, responsive, and delivered excellent quality work. Highly recommended for anyone looking for reliable website development services! 👏💻”",
      stars: 5,
      img: "https://media.licdn.com/dms/image/v2/D4D03AQFNP5qlDAv5Ew/profile-displayphoto-shrink_800_800/B4DZYajVGJHAAc-/0/1744202193647?e=1775088000&v=beta&t=XnjLwKwX9tTqhnS4C3bv4iOOUnpPOjiix64ct3d-JwQ",
      initials: "SW",
      color: "#ec4899",
    },
    {
      id: 7,
      name: "Sameer Chore",
      role: "Business Owner",
      website: null,
      displayUrl: null,
      text: "“BeeStack delivers peace of mind. Reliable, responsive, and focused on real results.”",
      stars: 5,
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      initials: "SC",
      color: "#06b6d4",
    },
  ];

  // Seamless infinite loop: duplicate items so track glides continuously from 0% to -50%
  const infiniteReviews = [...reviews, ...reviews];

  return (
    <section className="review-section" aria-label="Testimonials">
      {/* Animated blob background */}
      <div className="review-blobs" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`review-blob review-blob--${i}`}
            ref={(el) => (blobsRef.current[i] = el)}
          />
        ))}
      </div>

      {/* Section heading */}
      <div className="review-heading">
        <h2 className="review-label">TESTIMONIALS</h2>
        <p className="review-sub">What our clients say about working with us.</p>
      </div>

      {/* Edge-feathered Infinite Marquee Carousel (identical smooth glide to Projects) */}
      <div
        className="review-carousel-wrapper no-scrollbar"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className={`review-marquee-track no-scrollbar ${isPaused ? "review-marquee-track--paused" : ""}`}>
          {infiniteReviews.map((review, i) => (
            <article
              className="review-card"
              key={`${review.id || i}-${i}`}
              onClick={() => setSelectedReview(review)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedReview(review);
                }
              }}
              title="Click to view full testimonial"
            >
              {/* Card Top: Quote Icon + Rating Stars */}
              <div className="review-card-header">
                <svg className="review-quote-icon" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>

                <div className="review-stars" aria-label={`${review.stars} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={idx < review.stars ? "#FCAB1E" : "none"}
                      stroke="#FFD700"
                      strokeWidth="1.5"
                      viewBox="0 0 20 20"
                      className="review-star"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.05 4.157a.563.563 0 00.424.308l4.59.667a.563.563 0 01.312.96l-3.32 3.236a.563.563 0 00-.162.498l.784 4.574a.563.563 0 01-.817.593L12 17.347l-4.103 2.158a.563.563 0 01-.818-.593l.785-4.574a.563.563 0 00-.162-.498l-3.32-3.236a.563.563 0 01.312-.96l4.59-.667a.563.563 0 00.424-.308l2.05-4.157z"
                      />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Review Text Preview */}
              <div className="review-card-body">
                <blockquote className="review-text">{review.text}</blockquote>
                <span className="review-read-more">Read full story &rarr;</span>
              </div>

              {/* Author Row */}
              <div className="review-author">
                <div className="review-author-left">
                  {review.img ? (
                    <img
                      className="review-avatar"
                      src={review.img}
                      alt={review.name}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        if (e.currentTarget.nextElementSibling) {
                          e.currentTarget.nextElementSibling.style.display = "flex";
                        }
                      }}
                    />
                  ) : null}

                  {/* Fallback Initials Avatar Badge */}
                  <div
                    className="review-avatar-initials"
                    style={{
                      display: review.img ? "none" : "flex",
                      background: `linear-gradient(135deg, ${review.color || "#FCAB1E"}, #0f172a)`,
                    }}
                  >
                    {review.initials || review.name.slice(0, 2).toUpperCase()}
                  </div>

                  <div className="review-author-info">
                    <span className="review-name">{review.name}</span>
                    <span className="review-role">{review.role}</span>
                  </div>
                </div>

                {/* Direct Live Website Link Badge */}
                {review.website && (
                  <a
                    href={review.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="review-website-pill"
                    title={`Visit ${review.displayUrl || review.website}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>{review.displayUrl ? review.displayUrl.replace(/^www\./, "") : "Live Site"}</span>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Testimonial Modal Popup */}
      {selectedReview && (
        <div
          className="review-modal-backdrop"
          onClick={() => setSelectedReview(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="review-modal-dialog no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Accent Gradient Bar */}
            <div className="review-modal-accent" />

            {/* Close Button */}
            <button
              className="review-modal-close"
              onClick={() => setSelectedReview(null)}
              aria-label="Close dialog"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="review-modal-content">
              {/* Top Meta: Badge & Stars */}
              <div className="review-modal-top-meta">
                <div className="review-modal-badge">
                  <span className="review-modal-badge-dot" />
                  Client Testimonial
                </div>

                <div className="review-stars" aria-label={`${selectedReview.stars} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={idx < selectedReview.stars ? "#FCAB1E" : "none"}
                      stroke="#FFD700"
                      strokeWidth="1.5"
                      viewBox="0 0 20 20"
                      className="review-star review-star--large"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.05 4.157a.563.563 0 00.424.308l4.59.667a.563.563 0 01.312.96l-3.32 3.236a.563.563 0 00-.162.498l.784 4.574a.563.563 0 01-.817.593L12 17.347l-4.103 2.158a.563.563 0 01-.818-.593l.785-4.574a.563.563 0 00-.162-.498l-3.32-3.236a.563.563 0 01.312-.96l4.59-.667a.563.563 0 00.424-.308l2.05-4.157z"
                      />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Quote Block with Large Quote Graphic */}
              <div className="review-modal-quote-wrap">
                <svg className="review-modal-quote-icon" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>

                {/* Complete Unclamped Testimonial Text */}
                <blockquote className="review-modal-text">
                  {selectedReview.text}
                </blockquote>
              </div>

              {/* Author & Profile Card */}
              <div className="review-modal-author-card">
                <div className="review-author-left">
                  {selectedReview.img ? (
                    <img
                      className="review-avatar review-avatar--large"
                      src={selectedReview.img}
                      alt={selectedReview.name}
                    />
                  ) : (
                    <div
                      className="review-avatar-initials review-avatar-initials--large"
                      style={{
                        background: `linear-gradient(135deg, ${selectedReview.color || "#FCAB1E"}, #0f172a)`,
                      }}
                    >
                      {selectedReview.initials || selectedReview.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}

                  <div className="review-author-info">
                    <h4 className="review-modal-author-name">{selectedReview.name}</h4>
                    <p className="review-modal-author-role">{selectedReview.role}</p>
                  </div>
                </div>

                {/* External Link to Client Website if Available */}
                {selectedReview.website && (
                  <a
                    href={selectedReview.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="review-modal-visit-btn"
                    title={`Visit ${selectedReview.displayUrl || selectedReview.website}`}
                  >
                    <span>Visit {selectedReview.displayUrl ? selectedReview.displayUrl.replace(/^www\./, "") : "Website"}</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ReviewSlider;
