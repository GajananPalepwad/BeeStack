import React from "react";
import "./jobs.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const WebBackend = () => {
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
            <b>Job ID: WEB-BE-2023</b>
          </p>
          <h1>Software Engineer - Web Backend</h1>

          <div className="section">
            <h2 className="section-title">Overview</h2>
            Join our Backend / Full Stack Development Team and help build the
              backbone of products used by real people every day. This is a
              hands-on role where you’ll design, develop, and maintain scalable,
              reliable backend systems while bridging the gap between server-side
              logic and front-end applications. You’ll work with cross-functional
              teams to ensure smooth functionality, excellent performance, and
              high-quality code.
              If you love building robust systems, solving complex problems, and
              working with modern technologies — this role is for you.
          </div>

          <div className="section">
            <h2 className="section-title">Responsibilities</h2>
            <ul className="list-inside list-disc">
              <li>
                Design, develop, and maintain backend services, APIs, and
                full-stack applications using Node.js, Python, Java, or other
                modern backend technologies.
              </li>
              <li>
                Collaborate with frontend teams to integrate user-facing elements
                with server-side logic.
              </li>
              <li>
                Build scalable and secure systems that can handle high volumes of
                traffic and data.
              </li>
              <li>
                Debug and optimize applications, troubleshoot performance
                bottlenecks, and fix hard-to-reproduce issues.
              </li>
              <li>
                Write clean, testable code; perform code reviews, create automated
                tests, and ensure system reliability.
              </li>
              <li>
                Take ownership of modules, leading them from design to production
                deployment.
              </li>
              <li>
                Stay updated with emerging backend technologies, frameworks, and
                best practices, contributing to our knowledge-sharing culture.
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
              <li>2+ years of experience in backend or full-stack development.</li>
              <li>
                Proficiency in Node.js, Python, Java, or other server-side
                languages.
              </li>
              <li>
                Strong experience with RESTful and/or GraphQL APIs, databases (SQL
                & NoSQL), and cloud platforms like AWS, GCP, or Azure.
              </li>
              <li>
                Familiarity with authentication, authorization, and security best
                practices.
              </li>
              <li>
                Understanding of microservices, containerization (Docker/Kubernetes),
                and CI/CD pipelines is a plus.
              </li>
              <li>
                Proven ability to deliver high-quality, maintainable code in a
                fast-paced, collaborative environment.
              </li>
              <li>
                A team player who is self-motivated, curious, and eager to learn.
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

export default WebBackend;
