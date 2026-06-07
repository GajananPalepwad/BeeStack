import AOS from "aos";
import Typewriter from "typewriter-effect/dist/core";
import Navbar from "../components/Navbar";
import "./HomePage.css";
import members from "../work.json";
import Footer from "../components/Footer";
import AnimatedGradient from "../components/Carousal";
import Stack from "../components/Stack";
import Form from "../components/Form";
import ReviewSlider from "../components/ReviewSlider";
import React, {useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import WhatWeDoSection from "../components/WhatWeDoSection";

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
  let t=0,palIdx=0,nxtIdx=1,prog=0,raf;
  const animate=()=>{
    t+=0.004; prog+=0.008;
    if(prog>=1){prog=0;palIdx=nxtIdx;nxtIdx=(nxtIdx+1)%palette.length;}
    const cur=palette[palIdx],nxt=palette[nxtIdx];
    formBlobsRef.current.forEach((el,i)=>{
      if(!el)return;
      const{rx,ry,spd,ph}=cfg[i];
      const x=50+rx*Math.sin(t*spd+ph);
      const y=50+ry*Math.cos(t*spd*0.72+ph);
      el.style.transform=`translate(${x-50}%,${y-50}%)`;
      el.style.backgroundColor=lerpCol(cur[i%5],nxt[i%5],prog);
    });
    raf=requestAnimationFrame(animate);
  };
  animate();
  return()=>cancelAnimationFrame(raf);
},[]);
  return (
    <>
      <Helmet>
        <title>BeeStack | Next-Gen Technology Solutions</title>
        <meta
          name="description"
          content="BeeStack is a next-gen technology company crafting intelligent, scalable, and future-ready software solutions. From AI-driven automation to full-stack development, we bring ideas to life."
        />
        <link rel="canonical" href="https://www.beestack.in/" />
      </Helmet>

      <div className="homepage">
        <Navbar />

        {/* ── Hero ── */}
        <div className="carousal flex">
          <AnimatedGradient className="threestacks" />
          <div className="left flex flex-col">
            <h5>Trusted by 100+ Business</h5>
            <h1>
              <b>
                Build Systems That Move
                <br />
                Ideas Forward.
              </b>
            </h1>
            <h2>
              {" "}
              <br />
              BeeStack is a next-gen technology company crafting intelligent,
              <br />
              scalable, and future-ready software solutions.
              <br />
              <br />
              From connected devices to cloud platforms, we engineer products
              <br />
              that power the digital future which are fast, reliable, and built
              to last.
              <br />
              Whether it's AI-driven automation, or full-stack development,
              <br />
              We make tech feel seamless.
              <br />
              <br /> See what we build. Feel what we solve.
            </h2>
            <div className="buttons">
              <button
                type="button"
                className="btn consultation"
                onClick={() =>
                  formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                Get A Free Consultation
              </button>
              <button
                type="button"
                className="btn services"
                onClick={() =>
                  servicesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                Services
              </button>
            </div>
          </div>
          <div className="right flex items-center w-1/2">
            <Stack />
          </div>
        </div>

        {/* Scroll anchor for Services */}
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

          {/* Form */}
          <div
            className="form flex justify-center items-center w-full px-4"
            ref={formRef}
            style={{ position: "relative", zIndex: 1 }}
          >
            <div className="flex flex-col md:flex-row justify-center items-stretch w-full max-w-7xl 2xl:max-w-[1530px] gap-8 2xl:gap-16">
              {/* Left */}
              <div className="whatwedo flex flex-col items-center md:items-start justify-center gap-4 flex-1">
                <img
                  src="./logo.png"
                  alt="BeeStack logo"
                  className="hidden lg:block w-16 xl:w-28 h-auto"
                />
                <h2 className="headingFF text-center md:text-left whitespace-nowrap">
                  Say Hello!
                </h2>
                <p className="text-center md:text-center">
                  We'd love to hear about your project. Drop us a message.
                </p>
              </div>
              {/* Right */}
              <div className="flex justify-center flex-1">
                <Form />
              </div>
            </div>
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