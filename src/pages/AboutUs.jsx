import React from "react";
import "./OurWork.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="headingWork pl-28">ABOUT US</div>
      <div className="container">
        <aside className="sidebar">
          <ul>
            <li className="highlighted font-bold">
              <Link to="/about-us">Core Values</Link>
            </li>
            <li className="unhighlighted font-bold">
              <Link to="/about-us/testimonials">Testimonials</Link>
            </li>
          </ul>
        </aside>
        <main className="main-content HT">
          <p className="tagline">
            <b>
              Doing right by our clients, our team, and our users guides
              everything we do.
            </b>
          </p>
          <h1>Core Values</h1>
          {/* <div className="devices-container flex items-center justify-center">
            <img src="/images/devices.png" alt="devices" />
          </div> */}
          <div className="section">
            <h2 className="section-title">
              Integrity First
              <img
                src="/images/rocket.png"
                alt="Rocket icon"
                className="icon"
              />
            </h2>
            <p>
              We commit to doing right for our clients, our team, and our users
              every single time. This means avoiding shortcuts, being
              transparent in all dealings, and running our business with honesty
              and integrity.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">
              Trust is Everything
              <img
                src="/images/forward.png"
                alt="Fast forward icon"
                className="icon"
              />
            </h2>
            <p>
              Whether you’re a client or part of our team, we know trust is
              earned. We honor that trust by delivering consistently and keeping
              our promises.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">
              Action Over Ideas
              <img
                src="/images/team.png"
                alt="Fast forward icon"
                className="icon"
              />
            </h2>
            <p>
              The right solution comes from trying, experimenting, and
              iterating. Even if a spec is incomplete or a module isn’t ready,
              we keep moving forward without letting obstacles block progress.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">
              Think Like an Owner
              <img
                src="/images/heart.png"
                alt="Fast forward icon"
                className="icon"
              />
            </h2>
            <p>
              We hire smart, driven people and mentor them to excel. We take
              pride in our craft, focus on disciplined execution, and always act
              with the long-term vision of ownership.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">
              Care Deeply
              <img
                src="/images/secure.png"
                alt="Shield icon"
                className="icon"
              />
            </h2>
            <p>
              We care for our team, because a strong team builds great products
              and great products delight our users.
            </p>
          </div>
          <div className="section">
            <h2 className="section-title">
              Work Hard, Play Hard
              <img
                src="/images/fingerprint.png"
                alt="Fingerprint icon"
                className="icon"
              />
            </h2>
            <p>
              We are serious about results, but we also believe in enjoying the
              journey. Work should be challenging, inspiring, and yes—fun.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
