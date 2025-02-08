import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import rimg1 from "../assets/images/ESignat.png";
import rimg2 from "../assets/images/IndiaDocStamp.png";
import rimg3 from "../assets/images/Verification.png";
import rimg4 from "../assets/images/Validation.png";
import rimg5 from "../assets/images/DocFlow.png";
import rimg6 from "../assets/images/FraudGuard.png";
import rimg7 from "../assets/images/EasyIntegration.png";
import rimg8 from "../assets/images/Doctrack.png";

const Home = () => {
  const [currentText, setCurrentText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const words = [
    "e-Signn",
    "IndiaDoc Stampp",
    "Verificationn",
    "Validationn",
    "DocFlow Managementt",
    "FraudGuard Documentss",
    "Easy Integration APIss",
    "Smart Registryy",
  ];
  const images = [rimg1, rimg2, rimg3, rimg4, rimg5, rimg6, rimg7, rimg8];

  const typingSpeed = 150;
  const erasingSpeed = 60;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleTyping = () => {
      const currentWord = words[wordIndex];
      const nextText = currentWord.slice(0, currentText.length + 1);

      if (nextText === currentWord) {
        timeout = setTimeout(() => setIsTyping(false), 1000);
      } else {
        timeout = setTimeout(() => setCurrentText(nextText), typingSpeed);
      }
    };

    const handleErasing = () => {
      const nextText = currentText.slice(0, -1);

      if (nextText === "") {
        timeout = setTimeout(() => {
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setIsTyping(true);
        }, 300);
      } else {
        timeout = setTimeout(() => setCurrentText(nextText), erasingSpeed);
      }
    };

    if (isTyping) {
      handleTyping();
    } else {
      handleErasing();
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, wordIndex]);

  useEffect(() => {
    const loadTimeout = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(loadTimeout);
  }, []);

  return (
    <section className="w-full pt-16 lg:pt-20">
      <div className="relative bg-gray-700 overflow-hidden py-16 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Badge */}
        <div className="absolute flex top-6 sm:top-8 md:top-10 lg:top-20 w-full">
          <div
            className={`inline-flex items-center justify-center space-x-2 bg-white/10 px-4 py-2 rounded-full transition-transform duration-[1.5s] ease-in-out ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-6"
            } lg:ml-64 mx-auto lg:mx-0`}
          >
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm md:text-md text-white font-medium">
              BEST E-SIGN WEBSITE
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="relative flex flex-col-reverse lg:flex-row justify-center items-center gap-8 z-10">
            {/* Left Section */}
            <div className="text-white lg:w-1/2 space-y-6 text-center lg:text-left">
              <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span
                  className="text-orange-500 block"
                  style={{
                    display: "inline-block",
                    minWidth: "220px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {currentText}
                </span>
                <br />
                Innovators in Digital Documentation
              </h1>
              <p className="text-gray-300 text-[13px] lg:px-0   px-4 sm:text-base lg:text-lg">
                Welcome to Indentiplus, dedicated to bringing you streamlined
                digital solutions to help you make and sign documents that are
                effective, secure, and legally binding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:px-0 pt-4 px-12">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
                  Start using eversign for free
                </button>
                <button className="border border-white text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:border-orange-500">
                  Take the tour
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="hidden md:block lg:w-1/2 justify-center items-center relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={images[wordIndex]}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-lg w-full h-64 sm:h-72 md:h-80 lg:h-96 bg-contain bg-center"
                  style={{
                    backgroundImage: `url(${images[wordIndex]})`,
                  }}
                ></motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
