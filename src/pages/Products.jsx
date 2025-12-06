import React from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <Navbar />
      <div className="headingWork pl-28">OUR WORK</div>

      <div className="container">
        <aside className="sidebar">
          <ul>
            <li className="unhighlighted font-bold">
              <Link to="/our-work">The Concept</Link>
            </li>
            <li className="unhighlighted font-bold">
              <Link to="/our-work/technique">Technique</Link>
            </li>
            <li className="unhighlighted font-bold">
              <Link to="/our-work/technology">Technology</Link>
            </li>
            <li className="highlighted font-bold">
              <Link to="/our-work/products">Tech we've built</Link>
            </li>
          </ul>
        </aside>

        <main className="main-content HT">
          {/* Intro Section */}
          <p className="tagline">
            <b>We build impactful products that scale globally.</b>
          </p>
          <h1>Tech We’ve Built</h1>

          <div className="section">
            <p>
              BeeStack is a product engineering company that helps clients
              deliver high-volume, high-impact products used by millions. We
              enable companies to bring their products to market faster, smarter,
              and with confidence.
            </p>
            <p>
              Here are some of the projects we’ve successfully executed.
            </p>
          </div>

          {/* Project: LinkedIn */}
          <div className="section">
            <h2 className="section-title">
              LinkedIn
              <img
                src="/images/forward.png"
                alt="LinkedIn icon"
                className="icon"
              />
            </h2>
            <p>
              RSL has been a key development partner for LinkedIn for over 10
              years, with significant contributions to the flagship LinkedIn
              Android, iOS, and web apps.
            </p>
            <p className="read-more">Read more…</p>
          </div>

          {/* Project: Google Nest */}
          <div className="section">
            <h2 className="section-title">
              Google Nest
              <img src="/images/team.png" alt="Nest icon" className="icon" />
            </h2>
            <p>
              RSL has been working with Nest for 8+ years, contributing to the
              development of the Nest App and the Google Home App, along with
              development work on Hangouts, Gmail, and Google+.
            </p>
            <p className="read-more">Read more…</p>
          </div>

          {/* Project: Truepill */}
          <div className="section">
            <h2 className="section-title">
              Truepill
              <img src="/images/heart.png" alt="Truepill icon" className="icon" />
            </h2>
            <p>
              RSL helped Truepill with full stack development to build and ship
              multiple end-user medical solutions.
            </p>
            <p className="read-more">Read more…</p>
          </div>

          {/* Project: CocoTerra */}
          <div className="section">
            <h2 className="section-title">
              CocoTerra
              <img
                src="/images/fingerprint.png"
                alt="CocoTerra icon"
                className="icon"
              />
            </h2>
            <p>
              RSL helped CocoTerra with the end-to-end architecture and
              implementation of the full system — including backend services,
              IoT signaling mechanisms to communicate with the device, smartphone
              companion apps, and the e-commerce website.
            </p>
            <p className="read-more">Read more…</p>
          </div>

          {/* Project: StubHub */}
          <div className="section">
            <h2 className="section-title">
              StubHub
              <img src="/images/secure.png" alt="StubHub icon" className="icon" />
            </h2>
            <p>
              RSL worked with StubHub to analyze the existing mobile app code and
              suggest architectural, framework, and performance improvements.
            </p>
            <p className="read-more">Read more…</p>
          </div>

          {/* Project: Vida Health */}
          <div className="section">
            <h2 className="section-title">
              Vida Health
              <img src="/images/heart.png" alt="Vida icon" className="icon" />
            </h2>
            <p>
              RSL helped Vida with its Android and iOS mobile app, as well as web
              front-end development.
            </p>
            <p className="read-more">Read more…</p>
          </div>

          {/* Project: Wimm, Pebble */}
          <div className="section">
            <h2 className="section-title">
              Wimm, Pebble
              <img
                src="/images/forward.png"
                alt="Pebble icon"
                className="icon"
              />
            </h2>
            <p>
              RSL built the Bluetooth Connectivity module for the Wimm Smartwatch,
              as well as Android and iOS Companion Apps for Wimm and Pebble that
              communicated with the watch.
            </p>
            <p className="read-more">Read more…</p>
          </div>

          {/* Disclaimer */}
          <div className="section disclaimer">
            <p>
              <b>Disclaimer:</b> Customer and product names, trademarks, and logos
              used on this website are intellectual property of their respective
              owners.
            </p>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Products;
