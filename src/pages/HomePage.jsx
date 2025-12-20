// import React, { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import Typewriter from "typewriter-effect/dist/core";
import Navbar from "../components/Navbar";
import "./HomePage.css";
import members from "../work.json";
import Card from "../components/Cards";
import Footer from "../components/Footer";
import AnimatedGradient from "../components/Carousal";
import Stack from "../components/Stack";
import Form from "../components/Form";
import ReviewSLider from "../components/ReviewSlider";
import React, { useRef } from "react";

const HomePage = () => {
  const formRef = useRef(null);
  const servicesRef = useRef(null);
  return (
    <>
      <div className="homepage">
        <Navbar />
        <div className="carousal flex">
          {/* Add AnimatedGradient as background */}
          <AnimatedGradient className="threestacks" />
          <div className="left  flex flex-col">
            <h5>Trusted by 100+ Business</h5>
            <h1>
              <b>
                Build Systems That Move
                <br />
                Ideas Forward.
              </b>
            </h1>
            <h2>
              {" "}
              <br />
              BeeStack is a next-gen technology company crafting intelligent,
              <br />
              scalable, and future-ready software solutions.
              <br />
              <br />
              From connected devices to cloud platforms, we engineer products
              <br />
              that power the digital future which are fast, reliable, and built
              to last.
              <br />
              Whether it's AI-driven automation, or full-stack development,
              <br />
              We make tech feel seamless.
              <br />
              <br /> See what we build. Feel what we solve.
            </h2>
            <div className="buttons">
              <button
                type="button"
                className="btn consultation"
                onClick={() =>
                  formRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              >
                <b>Get A Free Consultation</b>
              </button>

              <button type="button" className="btn services" onClick={() =>
                  servicesRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }>
                <b>Our Services</b>
              </button>
            </div>
          </div>
          <div className="right flex items-center w-1/2">
            <Stack />
          </div>
        </div>
        <div className="testimonial-heading whatwedo justify-left pl-4 md:pl-14" ref ={servicesRef}>
          <div className="headingHP">WHAT WE DO</div>
        </div>

        <div className="card-grid">
          {members.map((member, index) => (
            <Card
              key={index}
              name={member.name}
              description={member.description}
              photo={member.photo}
              hoverColor={member.hoverColor}
            />
          ))}
        </div>

        <div className="testimonial-heading whatwedo justify-left pl-4 md:pl-14">
          <div className="headingHP">TESTIMONIALS</div>
        </div>
        <ReviewSLider />
        {/* <TestimonialSlider /> */}
        <div className="form flex flex-row" ref={formRef}>
          <div className="whatwedo flex flex-col items-center justify-start gap-4">
            <h2 className="headingFF pl-28 pt-24 whitespace-nowrap">
              Say Hello!
            </h2>
            <p className="text-center">
              We'd love to hear about your project. Drop us a message.
            </p>
          </div>
          <Form />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
