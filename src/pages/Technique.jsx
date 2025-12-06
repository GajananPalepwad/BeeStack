import React from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Technique = () => {
  return (
    <>
      <Navbar />
      <div className="headingWork pl-28">OUR WORK</div>
      <div className="container">
        <aside className="sidebar">
          <ul>
            <li className="unhighlighted">
              <Link to="/our-work">The Concept</Link>
            </li>
            <li className="highlighted ">
              <Link to="/our-work/technique">Technique</Link>
            </li>
            <li className="unhighlighted">
              <Link to="/our-work/technology">Technology</Link>
            </li>
            <li className="unhighlighted">
              <Link to="/our-work/products">Tech we've built</Link>
            </li>
          </ul>
        </aside>
        <main className="main-content HT">
          <p className="tagline">
            <b>We build with clarity, speed, and precision.</b>
          </p>
          <h1>Technique</h1>
          <div className="devices-container flex items-center justify-center">
            <img src="/images/technique.png" alt="devices" />
          </div>
          <div className="section">
            <p>
              At BeeStack, our strength lies in engineering excellence and
              adaptability. Technology evolves fast frameworks change, tools
              evolve, trends fade. What doesn’t change is the foundation of
              sound software design, thoughtful development, and disciplined
              delivery.Our focus is simple: help you ship products that perform
              flawlessly and scale confidently.
            </p>
            <p>
              Our process borrows the agility of modern development and the
              structure of proven engineering practices. We’re not bound by one
              methodology we choose what’s right for your product, team, and
              timeline. Our blend of speed, structure, and transparency ensures
              we move fast without breaking quality.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">
              Collaborative by Default
              <img src="/images/team.png" alt="team icon" className="icon" />
            </h2>
            <p>
              We believe that great software is built through constant
              collaboration and clarity. You’ll always know what’s happening
              with regular code commits, feature updates, and issue tracking.
              <br /> We integrate seamlessly with your team across functions
              like QA, UX, product, and marketing keeping everyone aligned on
              the same goal: shipping something that works beautifully.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">
              Ownership, Not Oversight
              <img src="/images/tick.png" alt="tick icon" className="icon" />
            </h2>
            <p>
              We manage our own process so you don’t have to. Every BeeStack
              project has a dedicated point of contact someone who understands
              both your product vision and our engineering roadmap.
              <br /> You focus on your product; we handle the rest.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">
              Process with Purpose
              <img
                src="/images/stonks.png"
                alt="stonks icon"
                className="icon"
              />
            </h2>
            <p>
              We love structure but we also value flexibility.Every project is
              different, so our process adapts while upholding the fundamentals:
              <ul className="list-disc list-inside">
                <li>Consistent code reviews</li>
                <li>Continuous integration & check-ins</li>
                <li>Realistic testing coverage</li>
                <li>Clear documentation</li>
                <li>Predictable delivery cycles</li>
              </ul>
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">
              Code You Can Trust
              <img src="/images/code.png" alt="code icon" className="icon" />
            </h2>
            <p>
              We believe transparency drives quality. Your Product is checked
              directly into your repositories, so you can see, review, and
              verify every change.We maintain clean, modular, and
              well-documented codebases built not just to work today, but to
              evolve tomorrow.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">
              Quality That Lasts
              <img src="/images/tick.png" alt="tick icon" className="icon" />
            </h2>
            <p>
              We take full responsibility for everything we ship. If an issue
              appears, we fix it. period.Before any delivery, our internal QA
              ensures reliability and performance across builds. Because our
              reputation doesn’t come from what we promise; it comes from what
              keeps working long after delivery.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">Built on Trust
               <img src="/images/heart.png" alt="hearticon" className="icon" />
            </h2>
            <p>
              Our clients stay because our products stand.We bring reliability,
              craftsmanship, and accountability to every line of code.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Technique;
