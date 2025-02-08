import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { motion } from "framer-motion";
import PricingCards from "./PricingCards";
import FreePlan from "./FreePlan";
import PricingContact from "./PricingContact";

const Pricing = () => {
  const [activeButton, setActiveButton] = useState("first");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      <section className="w-full pt-16 lg:pt-20">
        <div className="bg-gray-900 py-16 flex flex-col items-center justify-center relative">
          {/* Adding motion to header */}
          <motion.h2
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            The Perfect Balance <br /> of Features and Affordability
          </motion.h2>

          <div className="pt-10">
            <ul className="flex flex-wrap items-center justify-center space-x-8 sm:space-x-20 text-white text-base sm:text-lg">
              <motion.li
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <FaCircleCheck className="text-green-500" size={20} />
                <span>Compliance-driven</span>
              </motion.li>
              <motion.li
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <FaCircleCheck className="text-green-500" size={20} />
                <span>Simple and intuitive UI</span>
              </motion.li>
              <motion.li
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <FaCircleCheck className="text-green-500" size={20} />
                <span>Reliable online support</span>
              </motion.li>
            </ul>
          </div>

          {/* Motion added to button container */}
          <div>
            <div className="absolute w-full lg:max-w-xl -bottom-6 left-1/2 transform -translate-x-1/2 lg:p-2 p-1 rounded-full bg-white border border-black flex justify-center space-x-4">
              <motion.button
                className={`border-2 px-2 lg:px-6 lg:py-2 py-1 rounded-full text-sm sm:text-lg ${
                  activeButton === "first" ? "bg-gray-900 text-white" : "border"
                }`}
                onClick={() => handleButtonClick("first")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Plans to get you started
              </motion.button>
              <motion.button
                className={`border-2 px-2 lg:px-6 lg:py-2 py-1 rounded-full text-sm sm:text-lg ${
                  activeButton === "second"
                    ? "bg-gray-900 text-white"
                    : "border"
                }`}
                onClick={() => handleButtonClick("second")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                Plans that go beyond the basic
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Motion for pricing sections */}
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <PricingCards
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
        <FreePlan />
        <PricingContact />
      </motion.div>
    </>
  );
};

export default Pricing;
