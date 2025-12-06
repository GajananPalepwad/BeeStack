import React from "react";
import "./jobs.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const WebFrontend = () => {
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
            <b>Job ID: WebFE-2023</b>
          </p>
          <h1>Software Engineer - Web Frontend</h1>

          <div className="section">
            <h2 className="section-title">Overview</h2>
              Join our Web Development Team and help craft beautiful,
              performant, and scalable front-end experiences for real-world
              users. This is a hands-on developer role focused on building
              interactive, high-quality web applications that balance visual
              design and technical excellence. You’ll work closely with
              designers, backend developers, and QA engineers to turn ideas into
              pixel-perfect, production-ready products.
              If you love creating seamless user experiences, writing clean
              code, and experimenting with the latest web technologies — we’d
              love to have you onboard.
          </div>

          <div className="section">
            <h2 className="section-title">Responsibilities</h2>
            <ul className="list-inside list-disc">
              <li>
                Develop and maintain responsive, high-performance web
                applications using HTML, CSS, and modern JavaScript frameworks
                like React.js (Redux), Vue.js, Angular, or Ember.js.
              </li>
              <li>
                Implement new features, fix bugs, and continuously improve
                application performance and reliability.
              </li>
              <li>
                Collaborate with backend, design, and QA teams to build
                cohesive, user-centric solutions.
              </li>
              <li>
                Debug and resolve complex UI and performance issues, including
                browser-specific challenges.
              </li>
              <li>
                Enhance code quality through peer reviews, unit tests, and
                documentation.
              </li>
              <li>
                Take ownership of modules and lead them from concept to delivery
                as you grow within the team.
              </li>
              <li>
                Stay current with the latest front-end tools, frameworks, and
                best practices — and share knowledge through internal tech talks
                or workshops.
              </li>
            </ul>
          </div>

          <div className="section">
            <h2 className="section-title">Qualifications</h2>
            <ul className="list-inside list-disc">
              <li>
                Bachelor’s degree (BE or equivalent) in Computer Science or
                related field.
              </li>
              <li>
                2+ years of experience building modern web applications with
                HTML, CSS, and JavaScript frameworks like React.js (Redux),
                Vue.js, Angular, or Ember.js.
              </li>
              <li>
                Strong understanding of UI/UX principles, responsive design, and
                cross-browser compatibility.
              </li>
              <li>
                Experience with RESTful APIs, frontend optimization, and
                debugging tools.
              </li>
              <li>
                <b>Bonus skills:</b> Familiarity with Node.js, MERN stack, AWS,
                or eCommerce platforms.
              </li>
              <li>
                Proven ability to deliver high-quality code in a fast-paced,
                collaborative environment.
              </li>
              <li>
                A team player with a proactive mindset, solid communication, and
                strong problem-solving skills.
              </li>
              <li>
                Passionate about learning new technologies and continuously
                improving your craft.
              </li>
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

export default WebFrontend;
