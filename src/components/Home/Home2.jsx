import React, { useState } from "react";
import { motion } from "framer-motion";

const Home2 = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setVideoPlaying(true);
    alert("Video Play Triggered!"); // You can replace this with actual video modal logic
  };

  return (
    <>
      <section className="w-full">
        <div className="container mx-auto px-0 lg:px-20 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left side - Video Section */}
            <motion.div
              className="lg:w-2/5 relative group overflow-hidden"
              whileHover={{ scale: 1.05 }} // Slight zoom effect on hover
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="relative rounded-lg overflow-hidden shadow-xl"
              >
                <img
                  src="https://www.shutterstock.com/image-photo/laptop-screen-webcam-view-different-260nw-1707351835.jpg"
                  alt="Paperless Banking"
                  className="w-full object-cover px-2 rounded-lg h-[380px] transition-transform duration-300 group-hover:scale-110"
                />
                <button
                  onClick={handlePlayButtonClick}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-full bg-blue-600 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>


            {/* Right side - Content Section */}
            <div className="lg:w-3/5 space-y-6 px-6 lg:px-8">
              {" "}
              {/* Increased width from 2/5 to 3/5 */}
              {/* About Badge */}
              <span className="bg-blue-100 w-48 text-blue-600 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-blue-200 hover:shadow-sm flex items-center justify-center">
                <ul className="list-disc text-2xl m-1 p-0 flex items-center justify-center">
                  <li className="text-center mb-2 marker:text-3xl">Company</li>
                </ul>
              </span>
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                
                transition={{ duration: 1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-800"
              >
                Welcome to Indentiplus
                <br />
                Revolutionizing Digital Documentation
              </motion.h2>
              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="text-lg text-gray-600"
              >
                At Indentiplus, we aim to revolutionize how businesses and
                individuals handle legal documents, offering a secure and
                efficient platform for creating, signing,verifying and
                validating and managing all digital documents issued by the
                government .
              </motion.p>
              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
                {/* Service 1 */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-6 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Best Services</h3>
                    <p className="text-gray-600 text-sm">
                      We provide safe, easy, and legal digital documentation
                      solutions for everyone.
                    </p>
                  </div>
                </motion.div>

                {/* Service 2 */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-6 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">24/7 Call Support</h3>
                    <p className="text-gray-600 text-sm">
                      Our customer support team is always there to assist you,
                      anytime you need.
                    </p>
                  </div>
                </motion.div>
              </div>
              {/* Explore More Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg mt-8 hover:bg-blue-700 transition-colors"
              >
                Explore More →
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home2;
