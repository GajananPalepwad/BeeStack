import React from "react";
import "./jobs.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Android = () => {
  return (
    <>
        <div className="jobs-page">
      <Navbar />
      <div className="heading pl-28">CAREERS</div>
      <div className="container">
        <aside className="sidebar">
          <ul>
            <li className="unhighlighted font-bold">
              <Link to="/careers">Why BeeStack?</Link>
            </li>
            <li className="unhighlighted font-bold">
              <Link to="/careers/getting-in">Getting in</Link>
            </li>
            <li className="highlighted font-bold">
              <Link to="/careers/current-openings">Current Openings</Link>
            </li>
          </ul>
        </aside>
        <main className="main-content">
          <p className="tagline">
            <b>Job ID: Android-2023</b>
          </p>
          <h1>Software Engineer - Andriod</h1>
          <div className="section">
            <h2 className="section-title">Overview</h2>
              Join our Mobile development team working on smartphones, tablets
              and wearable devices. This is a hands-on developer position. Your
              primary focus will be the development of Android applications and
              their integration with back-end services. A commitment to
              collaborative problem solving, high quality code and passion for
              technology is essential. The successful candidate has a strong
              technical ability, loves writing and debugging code, good
              communication skills, and likes working on consumer products.
         </div>
         <div className="section">
            <h2 className="section-title">Responsibilities</h2>
            <ul className="list-inside list-disc">
                <li>Design and build applications for the Android platform using Kotlin, Java and Android SDK this is a hands-on developer position.</li>
                <li>Implement new features, fix bugs, and improve performance of our applications.</li>
                <li>Work closely with development and QA teams to design and implement UI and backend functionality to improve usability.</li>
                <li>Identify and root cause performance bottlenecks, random crashes, and fix hard-to-reproduce bugs.</li>
                <li>Help improve code quality, perform peer code reviews, write unit tests, enable automation and localization.</li>
                <li>Gradually take on more responsibility and have a bigger impact – take on more challenging tasks, mentor others, lead a module and own it  end-to-end, manage a team.</li>
                <li>Stay up-to-date with technical trends. Be a part of our learning culture by giving Tech Talks.</li>
            </ul>
         </div>
         <div className="section">
            <h2 className="section-title">Qualifications</h2>
            <ul className="list-inside list-disc">
                <li>BE or equivalent.</li>
                <li>2+ years of experience in building Android applications.</li>
                <li>Proficiency in Java, Kotlin programming languages.</li>
                <li>Solid understanding of object-oriented programming principles and design patterns.</li>
                <li>Understanding of Android design principles, patterns, and best practices.</li>
                <li>Familiarity with offline storage, threading, performance tuning, integrating with backend services.</li>
                <li>Knowledge of the Android ecosystem and the libraries available for common tasks is a plus.</li>
                <li>Proven ability to deliver in a fast-paced development environment.</li>
                <li>A positive attitude, and a team player.</li>
                <li>Self-motivated, eager to learn, with strong logical reasoning skills.</li>
                <li>Prior experience publishing an app on the Google Play store is a big plus.</li>
            </ul>
         </div>
        <div className="section">
            <button className="applybtn">Apply</button>
        </div>
        </main>
      </div>
      <Footer />
      </div>
    </>
  );
};

export default Android;
