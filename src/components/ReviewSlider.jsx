import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import "./ReviewSlider.css";

function ReviewSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1280, // large tablets / small laptops
        settings: { slidesToShow: 2, centerPadding: "50px" },
      },
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 2, centerPadding: "40px" },
      },
      {
        breakpoint: 768, // large phones
        settings: { slidesToShow: 1, centerMode: true, centerPadding: "20px" },
      },
      {
        breakpoint: 480, // small phones
        settings: { slidesToShow: 1, centerMode: false, centerPadding: "0px" },
      },
    ],
  };

  useEffect(() => {
    function updateSliderColumns() {
      const track = document.querySelector(".slider-track");
      if (!track) return;

      if (window.innerWidth <= 768) {
        track.style.gridAutoColumns = "100%";
      } else if (window.innerWidth <= 992) {
        track.style.gridAutoColumns = "50%";
      } else {
        track.style.gridAutoColumns = "calc(100% / 3)";
      }
    }

    updateSliderColumns(); // run on load
    window.addEventListener("resize", updateSliderColumns);

    return () => window.removeEventListener("resize", updateSliderColumns);
  }, []);

  const reviews = [
    {
      name: "Akshit Tupkar",
      text: "“The professionalism and technical depth at BeeStack are unmatched. We felt like they were part of our own team.”",
      role: "BeeStack Customer",
      stars: 5,
      img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    },
    {
      name: "Sameer Chore",
      text: "“BeeStack delivers peace of mind. Reliable, responsive, and focused on real results.”",
      role: "Business Owner",
      stars: 4,
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jayneet Bhingardeve",
      text: "“We launched faster than expected — the team truly understands product quality and deadlines.”",
      role: "Product Manager",
      stars: 5,
      img: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Sanket Kokate",
      text: "“Great communication and execution. Our stack is cleaner and much easier to maintain now.”",
      role: "Technical Lead",
      stars: 5,
      img: "https://randomuser.me/api/portraits/men/40.jpg",
    },
    {
      name: "Vikramaditya Khupse",
      text: "“From idea to delivery, the process was smooth and outcomes exceeded expectations.”",
      role: "Startup Founder",
      stars: 5,
      img: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    {
      name: "Jaykumar Gupta",
      text: "“Engineering excellence with a product mindset — exactly what we needed.”",
      role: "CTO",
      stars: 5,
      img: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      name: "Shruti Kadam",
      text: "“BeeStack helped us scale from prototype to production seamlessly — highly recommended.”",
      role: "Project Manager",
      stars: 5,
      img: "https://randomuser.me/api/portraits/women/55.jpg",
    },
    {
      name: "Sachikaur Sidhu",
      text: "“They understood our vision perfectly and built a product beyond expectations.”",
      role: "Entrepreneur",
      stars: 4,
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <div className="slider-container pb-10 m-0">
      <Slider {...settings}>
        {reviews.map((review, i) => (
          <div
            key={i}
            className="h-fit w-full flex justify-center items-center px-2 py-8 transition-transform duration-500"
          >
            <section className="reviewbg rounded-3xl shadow-lg p-6">
              <div className="max-w-screen-md mx-auto text-center">
                <figure>
                  <svg
                    className="h-10 mx-auto mb-3 text-black"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 
                      3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 
                      1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 
                      18L0 18Z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <blockquote>
                    <p className="text-lg md:text-xl font-medium text-gray-900">
                      {review.text}
                    </p>
                  </blockquote>

                  {/* ⭐ Stars section */}
                  <div className="flex justify-center mt-3">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <svg
                        key={idx}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={idx < review.stars ? "#FCAB1E" : "none"}
                        stroke="#FFD700"
                        strokeWidth="1.5"
                        viewBox="0 0 20 20"
                        className="w-5 h-5 mx-0.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.05 4.157a.563.563 0 00.424.308l4.59.667a.563.563 0 
                          01.312.96l-3.32 3.236a.563.563 0 
                          00-.162.498l.784 4.574a.563.563 0 
                          01-.817.593L12 17.347l-4.103 2.158a.563.563 0 
                          01-.818-.593l.785-4.574a.563.563 0 
                          00-.162-.498l-3.32-3.236a.563.563 0 
                          01.312-.96l4.59-.667a.563.563 0 
                          00.424-.308l2.05-4.157z"
                        />
                      </svg>
                    ))}
                  </div>

                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={review.img}
                      alt={review.name}
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500">
                      <div className="pr-3 font-medium text-gray-900">
                        {review.name}
                      </div>
                      <div className="pl-3 text-sm font-light text-gray-500">
                        {review.role}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </div>
        ))}
      </Slider>

      {/* Center zoom and fade effect */}
      <style>
        {`
          .slick-slide {
            opacity: 0.8;
            transform: scale(0.9);
            transition: all 0.5s ease;
          }
          .slick-center {
            opacity: 1;
            transform: scale(1.1);
          }
          .slick-slide > div {
            padding: 0 10px;
          }
        `}
      </style>
    </div>
  );
}

export default ReviewSlider;
