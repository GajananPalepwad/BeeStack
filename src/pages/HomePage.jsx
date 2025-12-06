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

const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <Navbar />
        <div className="carousal flex">
          {/* Add AnimatedGradient as background */}
          <AnimatedGradient className="threestacks" />
          <div className="left flex flex-col">
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
              <button type="button" className="btn consultation">
                <b>Get A Free Consulation</b>
              </button>
              <button type="button" className="btn services">
                <b>Our Services</b>
              </button>
            </div>
          </div>
          <div className="right flex items-center">
            <Stack />
          </div>
        </div>

        <div className="whatwedo justify-center">
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

        <div className="testimonial-heading whatwedo justify-center">
          <div className="headingHP ">TESTIMONIALS</div>
        </div>
        <ReviewSLider />
        {/* <TestimonialSlider /> */}
        <div className="form flex flex-row">
          <div className="whatwedo flex flex-col items-center justify-start gap-4">
            <h2 className="headingFF pl-28 pt-24 whitespace-nowrap">Say Hello!</h2>
            <p className="text-center">We'd love to hear about your project. Drop us a message.</p>
          </div>
          <Form />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;

// --- Testimonial slider component ---
// const testimonials = [
//   {
//     name: 'Akshit Tupkar',
//     text: '“The professionalism and technical depth at BeeStack are unmatched. We felt like they were part of our own team.”',
//     stars: 5,
//   },
//   {
//     name: 'Sameer Chore',
//     text: '“BeeStack delivers peace of mind. Reliable, responsive, and focused on real results.”',
//     stars: 4,
//   },
//   {
//     name: 'Shruti Kadam',
//     text: '“We launched faster than expected — the team truly understands product quality and deadlines.”',
//     stars: 5,
//   },
//   {
//     name: 'Sanket Kokate',
//     text: '“Great communication and execution. Our stack is cleaner and much easier to maintain now.”',
//     stars: 5,
//   },
//   {
//     name: 'Vikramaditya Khupse',
//     text: '“From idea to delivery, the process was smooth and outcomes exceeded expectations.”',
//     stars: 5,
//   },
//   {
//     name: 'Jaykumar Gupta',
//     text: '“Engineering excellence with a product mindset — exactly what we needed.”',
//     stars: 5,
//   },
// ];

// function StarRow({ count }) {
//   return (
//     <div className="stars">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <i key={i} className={i < count ? 'fas fa-star' : 'far fa-star'}></i>
//       ))}
//     </div>
//   );
// }

// function TestimonialSlider() {
//   const total = testimonials.length; // 6
//   const [leftIndex, setLeftIndex] = useState(0); // index of the leftmost visible slide
//   const [isJumping, setIsJumping] = useState(false);

//   // Build a track with extra clones at end for smooth wrap
//   const trackItems = useMemo(() => {
//     return [...testimonials, ...testimonials.slice(0, 3)];
//   }, []);

//   // auto-advance every 2s
//   useEffect(() => {
//     const t = setInterval(() => {
//       setLeftIndex((i) => i + 1);
//     }, 2000);
//     return () => clearInterval(t);
//   }, []);

//   // After animating to the last clone step, jump back without visible snap
//   // Wait for the transform transition (600ms in CSS) to complete before resetting
//   useEffect(() => {
//     if (leftIndex === total) {
//       const timeout = setTimeout(() => {
//         setIsJumping(true);
//         setLeftIndex(0);
//         // allow one frame without transition, then re-enable
//         requestAnimationFrame(() => setIsJumping(false));
//       }, 610); // slightly longer than CSS transition to ensure completion
//       return () => clearTimeout(timeout);
//     }
//   }, [leftIndex, total]);

//   // The center slide is the second in the viewport
//   const centerIndex = (leftIndex + 1) % total;

//   const translatePercent = -(leftIndex * (100 / 3)); // move one slide = 33.333%

//   return (
//     <div className="testimonials">
//       <div className="testimonial-inner">
//         <div className="slider-viewport">
//           <div
//             className={`slider-track ${isJumping ? 'no-transition' : ''}`}
//             style={{ transform: `translateX(${translatePercent}%)` }}
//           >
//             {trackItems.map((item, i) => {
//               // Determine if this slide is visible and whether it's center
//               const rel = (i - leftIndex + total * 10) % total; // normalize
//               const isCenter = rel === 1; // second visible slot
//               const isSide = rel === 0 || rel === 2;
//               return (
//                 <div key={i} className={`slide ${isCenter ? 'center' : isSide ? 'side' : ''}`}>
//                   <div className="testimonial">
//                     <div className="quote">"</div>
//                     <div className="name">{item.name}</div>
//                     <p>{item.text}</p>
//                     <StarRow count={item.stars} />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* dots */}
//         <div className="slider-dots">
//           {Array.from({ length: total }).map((_, i) => (
//             <button
//               key={i}
//               className={`dot ${i === centerIndex ? 'active' : ''}`}
//               onClick={() => setLeftIndex((i - 1 + total) % total)}
//               aria-label={`Go to slide ${i + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
