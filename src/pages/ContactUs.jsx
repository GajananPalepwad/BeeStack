import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ContactUs.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="headingContactus pl-28">CONTACT US</div>

      <div className="section-title items-center self-center flex flex-col">
        <div className="flex flex-row justify-center items-center">
          <img src="/images/mail.png" alt="mail-icon" />
          Mail
        </div>
      </div>
      <br />
      <div className="mails flex">
        <ul>
          <li>
            For project and business inquiries, please email us at{" "}
            <u>business@beestack.in</u>
          </li>
          <li>
            For Career related inquiries, please send your resume and cover
            letter to <u>hr@beestack.in</u>
          </li>
          <li>
            For all other questions, please write us at{" "}
            <u>info.</u>
          </li>
        </ul>
      </div>

      <div className="section-title  self-center flex flex-col">
        <div className="flex flex-row justify-center items-center">
          <img src="/images/location.png" alt="mail-icon" />
          Location
        </div>
      </div>

      <div className="mails self-center pb-2 m-0">
        <ul>
          <li>Our Main Office is situated at Vishnupuri, Nanded- 431606</li>
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
          Nanded, India
          <br />
          BeeStack Software Labs Pvt.
          <br />
          Ltd.8th Floor, Mont Vert Velocity,
          <br /> Survey #140/1, Baner Pashan Link Road,
          <br />
          Nanded- 431606
        </p>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
