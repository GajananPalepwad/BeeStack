import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ContactUs.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="HT headingWork pl-28">CONTACT US</div>
      <div className="container">
        <aside className="sidebar">
          <ul>
            <li className="highlighted font-bold">
              <Link to="/contact-us">Contact Mail</Link>
            </li>
            <li className="unhighlighted font-bold">
              <Link to="/contact-us/location">Location</Link>
            </li>
          </ul>
        </aside>
        <main className="HT">
          <p className="tagline">
            <b>Feel free to contact us.</b>
          </p>
          <h1>Contact Mail</h1>
          <div className="devices-container flex items-center justify-center"></div>
          <div className="section">
            <div className="mails flex">
              <ul>
                <li>
                  For project and business inquiries, please email us at{" "}
                  <a href="mailto:business@beestack.in" className="email-link">
                    business@beestack.in
                  </a>
                </li>

                <li>
                  For Career related inquiries, please send your resume and
                  cover letter to{" "}
                  <a href="mailto:hr@beestack.in" className="email-link">
                    hr@beestack.in
                  </a>
                </li>

                <li>
                  For all other questions, please write us at{" "}
                  <a href="mailto:info@beestack.in" className="email-link">
                    info@beestack.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
