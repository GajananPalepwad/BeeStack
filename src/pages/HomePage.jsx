import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import "./HomePage.css";
import members from "../work.json";
import Footer from "../components/Footer";
import AnimatedGradient from "../components/Carousal";
import Stack from "../components/Stack";
import Form from "../components/Form";
import ReviewSlider from "../components/ReviewSlider";
import WhatWeDoSection from "../components/WhatWeDoSection";
import FeaturedProjects from "../components/FeaturedProjects";

const HomePage = () => {
  const formRef = useRef(null);
  const servicesRef = useRef(null);
const formBlobsRef = useRef([]);

useEffect(() => {
  const palette = [
    ["#a8edea","#fed6e3","#f9c784","#c2e9fb","#fbc2eb"],
    ["#fbc2eb","#ffd6a5","#fddb92","#e0c3fc","#8ec5fc"],
    ["#fddb92","#d1fdff","#ffcba4","#a8edea","#96e6a1"],
    ["#e0c3fc","#ffd6a5","#f9d4d4","#fbc2eb","#c8f7c5"],
    ["#c8f7c5","#96e6a1","#ffe8cc","#fddb92","#c2e9fb"],
  ];
  const cfg = [
    {rx:40,ry:32,spd:0.27,ph:0},
    {rx:32,ry:25,spd:0.41,ph:1.26},
    {rx:28,ry:22,spd:0.35,ph:2.51},
    {rx:22,ry:17,spd:0.49,ph:3.77},
    {rx:36,ry:29,spd:0.30,ph:5.03},
  ];
  function hexRgb(h){return[parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)];}
  function lerpCol(c1,c2,p){
    const[r1,g1,b1]=hexRgb(c1),[r2,g2,b2]=hexRgb(c2);
    return`rgb(${Math.round(r1+(r2-r1)*p)},${Math.round(g1+(g2-g1)*p)},${Math.round(b1+(b2-b1)*p)})`;
  }
  let t=0,palIdx=0,nxtIdx=1,prog=0,raf=null,isVisible=false;
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  let observer;
  if (typeof IntersectionObserver !== "undefined" && formRef.current) {
    observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && !raf) {
        raf = requestAnimationFrame(animate);
      }
    }, { threshold: 0.05 });
    observer.observe(formRef.current);
  } else {
    isVisible = true;
  }

  let lastTime = 0;
  const frameInterval = isMobile ? 40 : 16; // 25fps on mobile, 60fps on desktop

  const animate = (now) => {
    if (!isVisible) {
      raf = null;
      return;
    }

    if (now - lastTime >= frameInterval) {
      lastTime = now;
      t += 0.004; prog += 0.008;
      if (prog >= 1) {
        prog = 0;
        palIdx = nxtIdx;
        nxtIdx = (nxtIdx + 1) % palette.length;
      }
      const cur = palette[palIdx], nxt = palette[nxtIdx];
      formBlobsRef.current.forEach((el, i) => {
        if (!el) return;
        const { rx, ry, spd, ph } = cfg[i];
        const x = 50 + rx * Math.sin(t * spd + ph);
        const y = 50 + ry * Math.cos(t * spd * 0.72 + ph);
        el.style.transform = `translate(${x - 50}%,${y - 50}%)`;
        el.style.backgroundColor = lerpCol(cur[i % 5], nxt[i % 5], prog);
      });
    }

    raf = requestAnimationFrame(animate);
  };

  if (isVisible) {
    raf = requestAnimationFrame(animate);
  }

  return () => {
    if (observer) observer.disconnect();
    if (raf) cancelAnimationFrame(raf);
  };
}, []);
  return (
    <>
      <div className="homepage">
        <Navbar />

        {/* ── Hero Section ── */}
        <section className="hero-section carousal flex" aria-label="Hero Section">
          <div className="hero-gradient-canvas">
            <AnimatedGradient className="threestacks" />
            <div className="hero-ambient-vignette" />
          </div>

          <div className="hero-container flex">
            {/* Left Column: Value Proposition & Actions */}
            <div className="hero-content left flex flex-col">
              <div className="hero-status-badge">
                <span className="hero-status-pulse">
                  <span className="hero-status-dot" />
                </span>
                <span className="hero-status-text">Available for New Projects</span>
                <span className="hero-status-sep">•</span>
                <span className="hero-status-highlight">Next-Gen Software Lab</span>
              </div>

              <h1 className="hero-title">
                Build Systems That Move Ideas Forward.
              </h1>

              <p className="hero-lead">
                BeeStack is a technology company crafting intelligent,
                scalable, and future-ready digital platforms. From connected IoT
                ecosystems to resilient enterprise cloud platforms, we engineer
                high-throughput systems that are fast, reliable, and built to scale.
              </p>

              <div className="hero-actions buttons">
                <button
                  type="button"
                  className="hero-btn hero-btn--primary btn consultation"
                  onClick={() =>
                    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  <span>Get A Free Consultation</span>
                  <svg
                    className="hero-btn-arrow"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="hero-btn hero-btn--secondary btn services"
                  onClick={() =>
                    servicesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  <span>Explore Capabilities</span>
                  <svg
                    className="hero-btn-chevron"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>

              {/* Social Proof / Trust Metrics Row */}
              <div className="hero-metrics-row">
                <div className="hero-metric-item">
                  <span className="hero-metric-num">10+</span>
                  <span className="hero-metric-label">Platforms Shipped</span>
                </div>
                <div className="hero-metric-divider" />
                <div className="hero-metric-item">
                  <span className="hero-metric-num">99.9%</span>
                  <span className="hero-metric-label">System Uptime</span>
                </div>
                <div className="hero-metric-divider" />
                <div className="hero-metric-item">
                  <span className="hero-metric-num">100%</span>
                  <span className="hero-metric-label">IP & Code Ownership</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive 3D Stack */}
            <div className="hero-stack-column right flex items-center">
              <Stack />
            </div>
          </div>
        </section>

        <div ref={servicesRef} />

        {/* ── What We Do ── */}
        <WhatWeDoSection members={members} />

        {/* ── Divider ── */}
        <div style={{
          height: "2px",
          background: "linear-gradient(to right, transparent 0%, #a8edea 8%, #7c6af7 30%, #fcab1e 50%, #e879a0 70%, #34d399 92%, transparent 100%)",
          margin: "0",
          opacity: 0.75,
          animation: "dividerShimmer 3s linear infinite",
          backgroundSize: "200% 100%",
        }} />

        {/* ── Our Best Work (Horizontal Scroll Projects Showcase) ── */}
        <FeaturedProjects />

        {/* ── Divider ── */}
        <div style={{
          height: "2px",
          background: "linear-gradient(to right, transparent 0%, #34d399 8%, #fcab1e 30%, #7c6af7 50%, #a8edea 70%, #e879a0 92%, transparent 100%)",
          margin: "0",
          opacity: 0.75,
          animation: "dividerShimmer 3s linear infinite reverse",
          backgroundSize: "200% 100%",
        }} />

        {/* ── Testimonials ── */}
        <ReviewSlider />

        {/* ── Divider ── */}
        <div style={{
          height: "2px",
          background: "linear-gradient(to right, transparent 0%, #34d399 8%, #fcab1e 30%, #7c6af7 50%, #a8edea 70%, #e879a0 92%, transparent 100%)",
          margin: "0",
          opacity: 0.75,
          animation: "dividerShimmer 3s linear infinite reverse",
          backgroundSize: "200% 100%",
        }} />

        {/* ── Form + Footer with shared animated blob bg ── */}
        <div style={{ position: "relative", overflow: "hidden", background: "#d8eaf2" }}>

          {/* Static blobs */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
  {[
    {w:480,h:480,t:"-20%",l:"-5%"},
    {w:360,h:360,t:"10%", l:"55%"},
    {w:300,h:300,t:"55%", l:"-2%"},
    {w:220,h:220,t:"-5%", l:"75%"},
    {w:400,h:400,t:"50%", l:"42%"},
  ].map((b,i)=>(
    <div key={i}
      ref={el=>formBlobsRef.current[i]=el}
      style={{
        position:"absolute",
        width:b.w, height:b.h,
        top:b.t, left:b.l,
        borderRadius:"50%",
        filter:"blur(80px)",
        opacity:0.78,
      }}
    />
  ))}
</div>

          {/* ── Contact Section ── */}
          <div
            ref={formRef}
            style={{ position: "relative", zIndex: 1 }}
          >
            <Form />
          </div>

          {/* Footer */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <Footer />
          </div>

        </div>
      </div>
    </>
  );
};

export default HomePage;