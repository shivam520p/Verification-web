import React, { useState } from "react";
import { motion } from "framer-motion";

const Home3 = () => {
  // State to manage which list item is clicked
  const [selectedItem, setSelectedItem] = useState(null);
  const [showMore, setShowMore] = useState(false); // State to manage 'See More'

  // Toggle function to show/hide content for each item
  const toggleContent = (item) => {
    setSelectedItem(selectedItem === item ? null : item);
  };

  // List items
  const listItems = [
    {
      key: "methodicalTracking",
      title: "Legally Binding",
      content:
        "Our solutions are in accordance with the latest legal standards. This means that your digital documents are fully enforceable in courts.",
    },
    {
      key: "strategicTimeMastery",
      title: "Cost-Effective",
      content:
        "Save time and money by eliminating the need for paper documents, postage, and in-person meetings.",
    },
    {
      key: "preparednessForDeadlines",
      title: "Fast and Efficient",
      content:
        "Complete your document signing and notarization processes in minutes, not days.",
    },
    {
      key: "secureProcesses",
      title: "Enhanced Security",
      content:
        "Ensure your sensitive information is protected with top-notch encryption and authentication methods.",
    },
    {
      key: "ecoFriendly",
      title: "Eco-Friendly",
      content:
        "Adopt a greener approach by reducing paper usage and contributing to environmental conservation.",
    },
    {
      key: "globalAccess",
      title: "Global Accessibility",
      content:
        "Access your documents anytime, anywhere, making remote collaboration seamless.",
    }
  ];

  return (
    <>
      <section className="w-full">
        <div className="relative">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="https://cdn.prod.website-files.com/65cb81aae9d01da14d71fff3/664372ac12cbe10bb58ff7ee_Frame%2061.png"
              alt="Office Meeting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 container mx-auto px-6 sm:px-12 md:px-20 lg:px-20 py-8 sm:py-20 md:py-24 lg:py-32">
            <div className="max-w-4xl text-white">
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
              >
                Benefits of Using Indentiplus
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl mb-12 text-gray-200"
              >
                With Indentiplus, you can enjoy faster document processing,
                enhanced security, legal compliance, and a paperless approach,
                all while saving time and resources.
              </motion.p>

              {/* List Items with Hover Animations */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="space-y-6"
              >
                {listItems
                  .slice(0, showMore ? listItems.length : 3) // Show 3 initially, all if "See More" is clicked
                  .map((item) => (
                    <div key={item.key}>
                      <motion.div
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        className="flex items-center justify-between group cursor-pointer"
                        onClick={() => toggleContent(item.key)}
                      >
                        <span className="text-xl sm:text-2xl md:text-3xl">
                          {item.title}
                        </span>
                        <motion.svg
                          className="w-6 h-6 text-white group-hover:scale-110 transition-all"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </motion.svg>
                      </motion.div>
                      {selectedItem === item.key && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className="text-gray-300 mt-4"
                        >
                          <p className="text-lg">{item.content}</p>
                        </motion.div>
                      )}
                    </div>
                  ))}
              </motion.div>

              {/* Button with Hover Effect */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="mt-12 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md transition-colors"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "See Less" : "See More"}
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home3;
