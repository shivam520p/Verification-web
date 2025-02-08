import React, { useEffect, useState } from "react";
import "animate.css";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const [inViewLeft, setInViewLeft] = useState(false);
  const [inViewRight, setInViewRight] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "left-section") {
              setInViewLeft(true);
            }
            if (entry.target.id === "right-section") {
              setInViewRight(true);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const leftSection = document.getElementById("left-section");
    const rightSection = document.getElementById("right-section");

    if (leftSection && rightSection) {
      observer.observe(leftSection);
      observer.observe(rightSection);
    }

    return () => {
      if (leftSection && rightSection) {
        observer.unobserve(leftSection);
        observer.unobserve(rightSection);
      }
    };
  }, []);

  const handlecontact = () => {
    navigate("/contact");
  };

  return (
    <section className="w-full py-40 bg-gradient-to-r from-blue-50 via-white to-blue-100 flex justify-center items-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24 px-6 lg:px-12">
        {/* Left Section - Image with Text */}
        <div
          id="left-section"
          className={`relative w-full lg:w-1/2 flex justify-center opacity-0 transition-opacity duration-700 ${
            inViewLeft
              ? "animate__animated animate__fadeInLeft animate__delay-1s"
              : ""
          }`}
        >
          <div className="relative overflow-hidden rounded-lg shadow-2xl bg-white transform transition-transform duration-700 hover:scale-105">
            <img
              src="https://media.istockphoto.com/id/514325215/photo/say-cheese-for-success.jpg?s=612x612&w=0&k=20&c=Lg2vKGMNPEY-VAPxvz0hmSmbqIk-MU-oVEaWikyy7QU="
              alt="Team"
              className="rounded-lg transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute bottom-6 left-6 bg-white shadow-lg rounded-lg p-6 space-y-4 opacity-90">
              <div className="flex items-center space-x-2">
                <span className="text-green-500 text-xl">✔</span>
                <p className="text-gray-700 font-medium text-sm">
                  Simplifying strategies.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500 text-xl">✔</span>
                <p className="text-gray-700 font-medium text-sm">
                  Guiding your Services.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500 text-xl">✔</span>
                <p className="text-gray-700 font-medium text-sm">
                  Innovating E-sign solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Text Content */}
        <div
          id="right-section"
          className={`w-full lg:w-1/2 space-y-9 text-center lg:text-left opacity-0 transition-opacity duration-700 ${
            inViewRight
              ? "animate__animated animate__fadeInRight animate__delay-1s"
              : ""
          }`}
        >
          <h2 className="text-blue-600 text-lg font-semibold uppercase tracking-widest transform transition-transform duration-500 hover:scale-105">
            Fast, Safe Signature
          </h2>
          <h1 className="text-gray-800 text-6xl lg:text-5xl font-bold tracking-tight transform transition-transform duration-500">
            About Identiplus
          </h1>
          <p className="text-gray-600 text-lg lg:text-xl leading-relaxed transform transition-transform duration-500 hover:text-gray-800">
            We facilitate the process of document creation, signing, and
            security at Identiplus. Our digital means ensure there are legally
            binding contracts and fully compliant agreements that are up to date
            with the most recent standards. We also offer identity verification,
            including validation on government-issued documents that help
            businesses and individuals streamline their paperwork while securing
            trust and authenticity in all official documents.
          </p>
          <button
            onClick={handlecontact}
            className="bg-gray-800 text-white py-3 px-10 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-110 hover:bg-gray-900"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
