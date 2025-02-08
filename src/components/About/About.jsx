import React from "react";
import { motion } from "framer-motion";
import visionImage from "../assets/images/rimg2.png";
import missionImage from "../assets/images/streamic-the-digital-event-platform.jpg";
import apple from "../assets/images/sddefault.jpg";
import google from "../assets/images/wired-uk-google-watching.webp";
import nvidia from "../assets/images/Nvidia-blog-image-jpg.webp";
import teamworkImage from "../assets/images/stock-photo-businessman-hand-touch-virtual-chart-business.png"; // Add your teamwork illustration
import AboutSection from "./AboutSection";

const AboutUs = () => {
  const values = [
    {
      title: "Security",
      content:
        "We always protect your data. We are using the latest encryption methods so that your documents are secure and tamper-proof.",
    },
    {
      title: "Innovation",
      content:
        " We keep innovating in order to come up with new solutions that cater to the evolving needs of our customers",
    },
    {
      title: "Compliance",
      content:
        "All our services ensure compliance with all relevant legal standards, therefore peace of mind in every signed document.",
    },
    {
      title: "Sustainability",
      content:
        "Through paperless documentation, sustainability of the environment is promoted with minimal paper use and waste generation toward a more environmentally friendly world.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://www.audi.com/content/dam/gbp2/careers/professionals/Overview/1920x600_T3_G2_Gerald_DSC09037.jpg?imwidth=1920&imdensity=1')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-6">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Us
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
      <AboutSection />
      {/* Vision and Mission Section */}
      <section className="relative bg-gray-100 py-8 lg:py-16 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision Card */}
          <motion.div
            className="flex flex-col items-center lg:items-start bg-white rounded-lg shadow-lg p-8"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 mb-6">
              <motion.img
                src={visionImage}
                alt="Vision"
                className="w-full h-full object-contain"
                initial={{ rotate: -10 }}
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <q className="text-gray-700 text-center lg:text-left">
              Indentiplus is to provide innovative, secure and efficient digital
              document solutions that revolve around improving the way one
              manages their law documents. That is to create a seamless way of
              managing or dealing with these documents without printing them on
              papers, thus fostering productivity and more importantly ensuring
              law standards compliance for all. Applying technology to serve
              legal documentation services in an accessible fast, and as
              environmentally friendly basis for all customers.
            </q>
          </motion.div>
          {/* Mission Card */}
          <motion.div
            className="flex flex-col items-center lg:items-start bg-white rounded-lg shadow-lg p-8"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-20 h-20 mb-6">
              <motion.img
                src={missionImage}
                alt="Mission"
                className="w-full h-full object-contain"
                initial={{ rotate: 10 }}
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <q className="text-gray-700 text-center lg:text-left">
              Our mission is to make document creation, verifying, signing, and
              management in businesses and between individuals as easy and
              streamlined as possible. In return, we give our users the ability
              to execute their transactions and agreements in a secure and
              legally compliant environment at their own pace, much faster and
              in an efficient manner. We are dedicated to solving each of our
              customers' needs uniquely. This means driving the Digital
              transformation of legal processes in a reliable and scalable
              manner.
            </q>
          </motion.div>
        </div>
      </section>

      {/* Global Recognition Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="text-center mb-12">
          <h3 className="text-blue-500 font-bold uppercase text-2xl">
            Our Global Recognition
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            We Are The Trailblazers In IT Industry
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { logo: apple, name: "Apple", rating: "4.7" },
            { logo: google, name: "Nvidia", rating: "4.6" },
            { logo: apple, name: "MicroSoft", rating: "4.5" },
            { logo: nvidia, name: "Google", rating: "4.8" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={item.logo}
                alt={item.name}
                className="w-18 h-18 mb-4 object-contain"
              />
              <h4 className="font-semibold text-gray-700">{item.name}</h4>
              <p className="text-sm text-gray-500 mt-2">
                {item.rating} <span className="text-yellow-400">★★★★★</span>
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={teamworkImage}
                alt="Team Collaboration"
                className="w-full h-auto"
              />
            </motion.div>

            {/* Right side - Content */}
            <div>
              <span className="text-blue-600 font-medium uppercase">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6">
                What Makes Us Different From The Others?
              </h2>
              <p className="text-gray-600 mb-8">
                Our values include keeping your data safe, being creative,
                helping our customers, following the law, and protecting the
                environment.
              </p>

              {/* Core Values Accordion */}
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border border-gray-200 rounded-lg"
                  >
                    <details className="group">
                      <summary className="flex items-center justify-between p-4 cursor-pointer">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {value.title}
                        </h3>
                        <span className="text-green-600 group-open:rotate-180 transition-transform">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </span>
                      </summary>
                      <motion.div
                        className="overflow-hidden"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="px-4 pb-4">
                          <p className="text-gray-600">{value.content}</p>
                        </div>
                      </motion.div>
                    </details>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
