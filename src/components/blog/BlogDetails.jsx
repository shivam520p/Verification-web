import { motion } from "framer-motion"; // Ensure to import motion
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const BlogDetails = () => {
  const [isFullContentVisible , setIsFullContentVisible] = useState()
  const location = useLocation();
  const post = location.state?.post; // Retrieve the post data from state
  const toggleContent = () => {
    setIsFullContentVisible(!isFullContentVisible);
  };


  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          No blog post found. Please go back and select a post.
        </h2>
      </div>
    );
  }

  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.inc.com/uploaded_files/image/1920x1080/getty_517010612_348225.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-6 py-8">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Blogs
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            For explorers everywhere.
          </motion.p>
        </div>
      </div>

      {/* Blog Details Section */}
      <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 animate-fadeIn">
          {/* Left Section */}
          <div className="lg:col-span-2 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[500px] object-cover rounded-t-lg"
            />
            <div className="p-8">
              <div className="text-gray-600 text-sm mb-4 flex items-center space-x-2">
                <span className="font-semibold">{post.author}</span>
                <span className="text-gray-400">•</span>
                <span>{post.comments} Comments</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
                {post.title}
              </h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                {/* Content Update */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  How Digital Identity Verification is Changing Online Security with Identiplus
                </h3>
                <p className="mb-4">
                  In the ever-changing landscape of cybersecurity, digital identity verification has become one of the necessary measures to secure sensitive data. Traditional authentication methods, such as passwords, have lost their importance because cyber threats have become highly advanced. That's where secure online authentication technologies come into the scene, and some of these are offered by Identiplus. Identiplus allows companies to access advanced tools for biometric security solutions, ID authentication software, and 2FA, ensuring only authorized personnel can access the most sensitive systems and data.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Security Solutions and Biometrics
                </h3>
                <p className="mb-4">
                  Identiplus leverages advanced biometric security solutions, including facial recognition and fingerprint scanning, to enhance identity verification. These technologies are highly accurate and significantly reduce the risk of fraud by ensuring that each individual’s identity is uniquely validated. By integrating these systems into identity management systems, Identiplus helps businesses maintain a secure environment while offering a seamless user experience.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Two-Factor Authentication (2FA) for Extra Protection
                </h3>
                <p className="mb-4">
                  Another important point in Identiplus's security framework is two-factor authentication, or simply 2FA. This requires additional identification from account holders, making use of both something the user knows (like a password) and something they control (such as a mobile device). 2FA forces users to take an extra step before accessing their accounts or sensitive details, adding a crucial layer of protection even if a password is compromised.
                </p>
                {isFullContentVisible && (
                  <>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Anti-Fraud by Sophisticated ID Authentication Software
                </h3>
                <p className="mb-4">
                  Fraud prevention technologies, such as Identiplus's advanced ID authentication software, are critical for businesses before allowing access to sensitive systems. These preventive measures not only help avoid financial loss but also protect against the damaging implications of identity theft and data breaches.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  KYC Solutions for Regulatory Compliance
                </h3>
                <p className="mb-4">
                  In industries like finance and healthcare, Know Your Customer (KYC) solutions are essential. Identiplus supports businesses by providing secure verification tools that ensure compliance with regulatory requirements while helping to deter financial crimes.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Conclusion: The Future of Secure Online Authentication
                </h3>
                <p>
                  As online threats continue to increase, digital identity verification is becoming essential. Identiplus's services help businesses improve their security infrastructure by enabling secure access to data, preventing fraud, and ensuring regulatory compliance. By integrating advanced technologies, businesses can protect sensitive information and offer a more trustworthy digital experience. Digital identity verification is no longer optional; it's a necessity for securing online interactions in the future.
              </p>
              </>
                )}
            
              <button
        className="text-blue-500 mt-4 hover:text-blue-700"
        onClick={toggleContent}
      >
        {isFullContentVisible ? "See Less" : "See More"}
      </button>
              </div>

              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-6">
                "A great quote or excerpt from the blog could be highlighted here."
              </blockquote>

              <div className="text-gray-600 text-sm mb-4">
                <span className="font-semibold">Tags: </span>
                <span className="text-blue-500">Technology</span>,
                <span className="text-blue-500"> Innovation</span>
              </div>
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-500 transition transform hover:scale-110"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-500 transition transform hover:scale-110"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-500 transition transform hover:scale-110"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-16 lg:w-full">
            {/* Categories */}
            <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Category</h3>
              <ul className="space-y-2">
                <li className="text-gray-600 hover:text-blue-500 transition">Digital (3)</li>
                <li className="text-gray-600 hover:text-blue-500 transition">Marketing (4)</li>
                <li className="text-gray-600 hover:text-blue-500 transition">Consultation (2)</li>
                <li className="text-gray-600 hover:text-blue-500 transition">Payments (5)</li>
                <li className="text-gray-600 hover:text-blue-500 transition">Banking (7)</li>
              </ul>
            </div>

            {/* Recent News */}
            <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent News</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <img
                    src="https://smallbizclub.com/wp-content/uploads/2020/06/bigstock-Group-Of-Professional-Business-349068817.jpg"
                    alt="Recent News"
                    className="w-16 h-16 object-cover rounded-lg group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <h4 className="text-gray-800 font-medium group-hover:text-blue-500">
                      Manage Your Online Banking & Get Rewarded
                    </h4>
                    <p className="text-sm text-gray-600">20 Jan 2023</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <img
                    src="https://smallbizclub.com/wp-content/uploads/2020/06/bigstock-Group-Of-Professional-Business-349068817.jpg"
                    alt="Recent News"
                    className="w-16 h-16 object-cover rounded-lg group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <h4 className="text-gray-800 font-medium group-hover:text-blue-500">
                      Building Your Business: Tips for Financial Success
                    </h4>
                    <p className="text-sm text-gray-600">23 Mar 2023</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Keywords */}
            <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-500 hover:text-white transition">
                  Money Management
                </span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-500 hover:text-white transition">
                  Taxes
                </span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-500 hover:text-white transition">
                  Business Advice
                </span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-500 hover:text-white transition">
                  Finance
                </span>
              </div>
            </div>

    
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
      
