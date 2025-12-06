import React from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const OurWork = () => {
  return (
    <>
      <Navbar />
      <div className="HT headingWork pl-28">OUR WORK</div>
      <div className="container">
        <aside className="sidebar">
          <ul>
            <li className="highlighted font-bold">
              <Link to="/our-work">The Concept</Link>
            </li>
            <li className="unhighlighted font-bold">
              <Link to="/our-work/technique">Technique</Link>
            </li>
            <li className="unhighlighted font-bold">
              <Link to="/our-work/technology">Technology</Link>
            </li>
            <li className="unhighlighted font-bold">
              <Link to="/our-work/products">Tech we've built</Link>
            </li>
          </ul>
        </aside>
        <main className="main-content HT">
          <p className="tagline">
            <b>We make shipping great products simpler and faster.</b>
          </p>
          <h1>The Concept</h1>
          <div className="devices-container flex items-center justify-center">
            <img src="/images/devices.png" alt="devices" />
          </div>
          <div className="section">
            <h2 className="section-title">
              BeeStack: Building What's Next
              <img
                src="/images/rocket.png"
                alt="Rocket icon"
                className="icon"
              />
            </h2>
            <p>
              BeeStack is a modern software engineering company that helps
              clients design, build, and ship impactful digital products fast,
              reliable, and crafted with care.
            </p>
            <p>
              We partner with teams to turn ideas into market-ready solutions
              across web, mobile, IoT, and AI.
            </p>
            <p>
              We don't just build software we deliver clarity, confidence, and
              peace of mind through craftsmanship, adaptability, and trust.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">
              Built for Modern Products
              <img
                src="/images/forward.png"
                alt="Fast forward icon"
                className="icon"
              />
            </h2>
            <p>
              We build products that power businesses from web platforms and
              mobile apps to connected IoT systems. Whether it's a proof of
              concept or a product used by millions, we bring the same level of
              precision, speed, and attention to detail.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">
              Adaptable By Design
              <img
                src="/images/team.png"
                alt="Fast forward icon"
                className="icon"
              />
            </h2>
            <p>
              Markets evolve, and so do your needs. We understand that
              requirements shift and timelines move and we're built for that. We
              move fast, iterate often, and deliver quality at every stage from
              early prototypes to production-grade releases.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">
              User-First Thinking
              <img
                src="/images/heart.png"
                alt="Fast forward icon"
                className="icon"
              />
            </h2>
            <p>
              For us, usability isn't a layer it's the foundation. We make sure
              UX and engineering work together, aligning every feature with how
              real users think, act, and engage. From intuitive interfaces to
              thoughtful backend design, we build for people, not just for code.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">
              Engineered for Reliability
              <img
                src="/images/secure.png"
                alt="Shield icon"
                className="icon"
              />
            </h2>
            <p>
              We design systems that scale gracefully and fail safely. Whether
              it's network constraints, hardware dependencies, or unpredictable
              APIs, our code is decoupled, resilient, and thoroughly tested.
            </p>
            <p>
              We anticipate problems before they happen, and we fix what others
              can't reproduce.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">
              Ownership in Every Line
              <img
                src="/images/fingerprint.png"
                alt="Fingerprint icon"
                className="icon"
              />
            </h2>
            <p>
              Our team is hands-on, self-driven, and deeply technical. We take
              full ownership of every deliverable from architecture to
              deployment, ensuring every product we ship meets the highest
              standards of quality.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">Transparent Collaboration</h2>
            <p>
              We believe in building together, not behind closed doors. We
              prefer visible progress over long reports commits, builds, and
              working demos that speak for themselves.
            </p>
            <p>
              We iterate in the open, ensuring you're always part of the
              process.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">One Team, One Channel</h2>
            <p>
              You'll always have a single point of contact someone who
              understands both the business goals and the technical roadmap.
            </p>
            <p>
              But behind that person stands the full BeeStack team, aligned to
              your vision and ready to deliver.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">Built on Trust</h2>
            <p>
              Our clients stay with us because they trust us. Your success fuels
              ours and that's what keeps us pushing boundaries, solving harder
              problems, and crafting better products.
            </p>
            <p>That's BeeStack always for you.</p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default OurWork;
