import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect, useMemo, useRef } from "react";
import Slider from "react-slick";
import "./ReviewSlider.css";

function ReviewSlider() {
  const [isMobile, setIsMobile] = useState(false);
  const blobsRef = useRef([]);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Animated blobs
  useEffect(() => {
    const palette = [
      ["#a8edea","#fed6e3","#f9c784","#c2e9fb","#fbc2eb"],
      ["#fbc2eb","#ffd6a5","#fddb92","#e0c3fc","#8ec5fc"],
      ["#fddb92","#d1fdff","#ffcba4","#a8edea","#96e6a1"],
      ["#e0c3fc","#ffd6a5","#f9d4d4","#fbc2eb","#c8f7c5"],
      ["#c8f7c5","#96e6a1","#ffe8cc","#fddb92","#c2e9fb"],
    ];
    const cfg = [
      { rx:40, ry:32, spd:0.27, ph:0 },
      { rx:32, ry:25, spd:0.41, ph:1.26 },
      { rx:28, ry:22, spd:0.35, ph:2.51 },
      { rx:22, ry:17, spd:0.49, ph:3.77 },
      { rx:36, ry:29, spd:0.30, ph:5.03 },
    ];
    function hexRgb(h) {
      return [parseInt(h.slice(1,3),16), parseInt(h.slice(3,5),16), parseInt(h.slice(5,7),16)];
    }
    function lerpCol(c1, c2, p) {
      const [r1,g1,b1] = hexRgb(c1), [r2,g2,b2] = hexRgb(c2);
      return `rgb(${Math.round(r1+(r2-r1)*p)},${Math.round(g1+(g2-g1)*p)},${Math.round(b1+(b2-b1)*p)})`;
    }
    let t=0, palIdx=0, nxtIdx=1, prog=0, raf;
    const animate = () => {
      t += 0.004; prog += 0.008;
      if (prog >= 1) { prog = 0; palIdx = nxtIdx; nxtIdx = (nxtIdx+1) % palette.length; }
      const cur = palette[palIdx], nxt = palette[nxtIdx];
      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const { rx, ry, spd, ph } = cfg[i];
        const x = 50 + rx * Math.sin(t*spd + ph);
        const y = 50 + ry * Math.cos(t*spd*0.72 + ph);
        el.style.transform = `translate(${x-50}%,${y-50}%)`;
        el.style.backgroundColor = lerpCol(cur[i%5], nxt[i%5], prog);
      });
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  const desktopSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerMode: false },
      },
    ],
  };

  const mobileSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    centerMode: false,
    arrows: false,
    responsive: [],
  };

  const reviews = [
    {
      name: "Dr. B. R. Bombade",
      text: "\u201cThe SGGSIE&T Nanded mobile application is a commendable digital initiative developed to enhance academic and examination-related communication within the institute.\u201d",
      role: "Controller of Examinations",
      stars: 5,
      img: "https://www.sggs.ac.in/uploads/faculty_image/1731055967.webp",
    },
    {
      name: "Sameer Chore",
      text: "\u201cBeeStack delivers peace of mind. Reliable, responsive, and focused on real results.\u201d",
      role: "Business Owner",
      stars: 4,
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Swapnil",
      text: "\u201cI had a great experience working with Beestack Website Builder. They created a very professional and beautiful website exactly as I wanted. The team was supportive, responsive, and delivered excellent quality work. Highly recommended for anyone looking for reliable website development services! \uD83D\uDC4F\uD83D\uDCBB\u201d",
      role: "Business Owner",
      stars: 5,
      img: "https://media.licdn.com/dms/image/v2/D4D03AQFNP5qlDAv5Ew/profile-displayphoto-shrink_800_800/B4DZYajVGJHAAc-/0/1744202193647?e=1775088000&v=beta&t=XnjLwKwX9tTqhnS4C3bv4iOOUnpPOjiix64ct3d-JwQ",
    },
  ];

  const settings = useMemo(
    () => (isMobile ? mobileSettings : desktopSettings),
    [isMobile]
  );

  return (
    <div className="review-section">
      {/* Animated blob background */}
      <div className="review-blobs" aria-hidden="true">
        {[0,1,2,3,4].map(i => (
          <div
            key={i}
            className={`review-blob review-blob--${i}`}
            ref={el => blobsRef.current[i] = el}
          />
        ))}
      </div>

      {/* Section heading */}
      <div className="review-heading">
        <div className="review-label">TESTIMONIALS</div>
        <p className="review-sub">What our clients say about working with us.</p>
      </div>

      {/* Slider */}
      <div className="review-slider-wrap">
        <Slider key={isMobile ? "mobile" : "desktop"} {...settings}>
          {reviews.map((review, i) => (
            <div key={i} className="review-slide">
              <div className="review-card">
                {/* Quote icon */}
                <svg className="review-quote-icon" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563
                    3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748
                    1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983
                    18L0 18Z"
                    fill="currentColor"
                  />
                </svg>

                {/* Review text */}
                <blockquote className="review-text">{review.text}</blockquote>

                {/* Stars */}
                <div className="review-stars">
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
                        d="M11.48 3.499a.562.562 0 011.04 0l2.05 4.157a.563.563 0 00.424.308l4.59.667a.563.563 0 
                        01.312.96l-3.32 3.236a.563.563 0 
                        00-.162.498l.784 4.574a.563.563 0 
                        01-.817.593L12 17.347l-4.103 2.158a.563.563 0 
                        01-.818-.593l.785-4.574a.563.563 0 
                        00-.162-.498l-3.32-3.236a.563.563 0 
                        01.312-.96l4.59-.667a.563.563 0 
                        00.424-.308l2.05-4.157z"
                      />
                    </svg>
                  ))}
                </div>

                {/* Author */}
                <figcaption className="review-author">
                  <img
                    className="review-avatar"
                    src={review.img}
                    alt={review.name}
                  />
                  <div className="review-author-info">
                    <span className="review-name">{review.name}</span>
                    <span className="review-role">{review.role}</span>
                  </div>
                </figcaption>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ReviewSlider;