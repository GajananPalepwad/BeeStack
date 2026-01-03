import React from "react";
import "./ContactUs.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <>
      <Navbar />
      <div className="HT headingWork pl-28">CONTACT US</div>
      <div className="container">
        <aside className="sidebar">
          <ul>
            <li className="unhighlighted font-bold">
              <Link to="/contact-us">Contact Mail</Link>
            </li>
            <li className="highlighted font-bold">
              <Link to="/contact-us/location">Location</Link>
            </li>
          </ul>
        </aside>
        <main className="HT">
          <p className="tagline">
            <b>Feel free to contact us.</b>
          </p>
          <h1>Location</h1>
          <div className="devices-container flex items-center justify-center"></div>
          <div className="section">
            <div className="mails">
              <div className="mails self-center pb-2 m-0">
                <ul>
                  <li>
                    Our Main Office is situated at Vishnupuri, Nanded- 431606
                  </li>
                </ul>
              </div>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15079.236071356052!2d77.3055517!3d19.1160325!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1763433426176!5m2!1sen!2sin"
                  width="400"
                  height="300"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="gmap"
                ></iframe>
                <p className="address pb-8">
                  <br />
                  BeeStack Software Labs
                  <br />
                  Ramdasji Nagar, Vishnupuri
                  <br /> Nanded, Maharashtra - 431606
                  <br />
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Location;
