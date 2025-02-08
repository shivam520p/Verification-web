import React from "react";
import { motion } from "framer-motion";

const Home5 = () => {
  const features = [
    {
      icon: "👤⚙️",
      title: "Completely Legally Compliant and Safe",
      description:
        "Indentiplus ensures that digital signatures and documents abide by the new legal standards; IT Act 2000 complies with these.",
    },
    {
      icon: "🔲",
      title: "Time and Work Efficient",
      description:
        "Don't let old paper-based ways of documentation be a cause for delay. Get instant document generation and signing!",
    },
    {
      icon: "🤝",
      title: "Go paperless with Indentiplus",
      description:
        "You digitize your documents, and it helps you save processes while keeping the environment green through the elimination of paper.",
    },
    {
      icon: "📈",
      title: "Scalable Business Solutions",
      description:
        "Be an individual or a large business enterprise Indentiplus provides you with scalable solutions that meet your needs.",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-12 md:px-24 lg:px-20 py-12 md:py-16">
      {/* Top Section */}
      <motion.div
        className="grid md:grid-cols-2 gap-12 mb-16 lg:mb-20"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <p className="w-72 text-blue-600 font-medium text-lg mb-6 bg-blue-100 text-center rounded-full flex items-center justify-center">
            <li className="list-disc p-2  text-xl"></li>Why Choose Indentiplus
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Effortless, Secure, and
            <br />
            Legal Document Management 
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Indentiplus makes managing and signing documents easy, safe, and
            legal. Our simple platform helps you save time and stay organized,
            whether you're a business or an individual.
          </p>
        </div>

        {/* Right Image Card */}
        <div className="relative">
          <motion.div
            className="rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src="https://www.shutterstock.com/image-photo/online-business-contract-electronic-signature-260nw-2207361107.jpg"
              alt="Law Office"
              className="w-full h-[350px] sm:h-[400px] lg:h-[450px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-black/60 to-transparent text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Completely Legally Compliant and Safe
              </h3>
              <p className="text-base sm:text-lg">
                Unveiling efficiency with cutting-edge documentation tools.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="text-center bg-slate-100 p-6 rounded-lg shadow-sm hover:shadow-xl transition-opacity"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-blue-500 text-white w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl sm:text-4xl shadow-lg hover:shadow-2xl transition-shadow">
              {feature.icon}
            </div>
            <h3 className="font-bold text-xl sm:text-2xl mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-base sm:text-lg">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home5;
