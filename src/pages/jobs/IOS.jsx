import React from "react";
import "./jobs.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const IOS = () => {
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
            <b>Job ID: iOS-2023</b>
          </p>
          <h1>Software Engineer - iOS</h1>
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
                <li>Design and develop high-quality iOS applications using Swift and Objective-C.</li>
                <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
                <li>Optimize performance by identifying bottlenecks, resolving crashes, and improving app responsiveness.</li>
                <li>Write maintainable, testable code — perform peer reviews, add unit tests, and contribute to automation.</li>
                <li>Enhance usability through thoughtful UI/UX implementation and integration with backend APIs.</li>
                <li>Continuously improve our apps by fixing bugs, refining workflows, and implementing best practices.</li>
                <li>Grow your impact — take ownership of modules, mentor teammates, and lead projects as you gain experience.</li>
                <li>Stay ahead of the curve by exploring new frameworks, sharing knowledge, and contributing to our learning culture through tech talks and discussions.</li>
            </ul>
         </div>
         <div className="section">
            <h2 className="section-title">Qualifications</h2>
            <ul className="list-inside list-disc">
                <li>Bachelor’s degree (BE or equivalent) in Computer Science or a related field.</li>
                <li>2+ years of experience developing and shipping iOS applications.</li>
                <li>Strong proficiency in Swift and Objective-C, with a solid grasp of object-oriented principles.</li>
                <li>Deep understanding of iOS frameworks, design patterns, and best practices.</li>
                <li>Experience with offline storage, threading, memory management, and performance tuning.</li>
                <li>Familiarity with RESTful APIs and backend integration.</li>
                <li>Working knowledge of version control systems (e.g., Git) and CI/CD tools.</li>
                <li>Proven ability to deliver in fast-paced, agile environments.</li>
                <li>A team player with strong communication, analytical, and problem-solving skills.</li>
                <li>Bonus: Experience publishing apps on the App Store or contributing to open-source iOS projects.</li>
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

export default IOS;
