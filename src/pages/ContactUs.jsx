import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ContactUs.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact BeeStack | Get in Touch</title>
        <meta
          name="description"
          content="Reach out to BeeStack for project inquiries, career opportunities, or general questions. Email us at business@beestack.in, hr@beestack.in, or info@beestack.in. We're here to help you build the future of technology."
        />
        <link rel="canonical" href="https://www.beestack.in/contact-us" />
        {/* Optional: structured email meta */}
        <meta
          name="email"
          content="business@beestack.in, hr@beestack.in, info@beestack.in"
        />
      </Helmet>
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
        <main className="main-content HT">
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
