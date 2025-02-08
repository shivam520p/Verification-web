import React from "react";
import { SlEnvolope } from "react-icons/sl";
import { IoCallSharp } from "react-icons/io5";
import { motion } from "framer-motion"; // Import motion
import SaleImg from "../assets/images/sales.png";
import SupportImg from "../assets/images/support.png";
import PartnersghipImg from "../assets/images/partnership.png";

const PricingContact = () => {
  return (
    <motion.section
      className="w-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 sm:px-12 lg:px-20 py-4 lg:py-16 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <motion.h2
            className="text-3xl sm:text-4xl text-center text-gray-800 font-semibold"
            initial={{ y: 50, opacity: 0 }} // Start from below the screen
            animate={{ y: 0, opacity: 1 }} // End at its normal position
            transition={{ duration: 0.8 }}
          >
            Contact us
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg font-semibold text-gray-500 text-center"
            initial={{ y: 50, opacity: 0 }} // Start from below the screen
            animate={{ y: 0, opacity: 1 }} // End at its normal position
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get personalized help from a qualified expert
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {/* Card 1 */}
          <motion.div
            className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 50 }} // Start from below
            animate={{ opacity: 1, y: 0 }} // Move to normal position
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={SaleImg} alt="Sales" className="mx-auto w-36 h-24" />
            <div className="w-full py-3 border-b">
              <h3 className="text-center text-xl font-semibold">
                Sales Enquiry
              </h3>
            </div>
            <div className="w-full py-3 border-b flex items-center justify-start px-4 space-x-2">
              <SlEnvolope size={20} />
              <p className="text-lg">sales@nerasoft.com</p>
            </div>
            <div className="w-full py-3 flex items-center justify-start px-4 space-x-2">
              <IoCallSharp size={20} />
              <p className="text-lg">1800 103 1123, 1800 572 3535</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 50 }} // Start from below
            animate={{ opacity: 1, y: 0 }} // Move to normal position
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img src={SupportImg} alt="Support" className="mx-auto w-36 h-24" />
            <div className="w-full py-3 border-b">
              <h3 className="text-center text-xl font-semibold">
                Support Enquiry
              </h3>
            </div>
            <div className="w-full py-3 border-b flex items-center justify-start px-4 space-x-2">
              <SlEnvolope size={20} />
              <p className="text-lg">support@nerasoft.com</p>
            </div>
            <div className="w-full py-3 flex items-center justify-start px-4 space-x-2">
              <IoCallSharp size={20} />
              <p className="text-lg">1800 309 3036</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 50 }} // Start from below
            animate={{ opacity: 1, y: 0 }} // Move to normal position
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <img
              src={PartnersghipImg}
              alt="Partnership"
              className="mx-auto w-36 h-24"
            />
            <div className="w-full py-3 border-b">
              <h3 className="text-center text-xl font-semibold">
                Partnership Enquiry
              </h3>
            </div>
            <div className="w-full py-3 border-b flex items-center justify-start px-4 space-x-2">
              <SlEnvolope size={20} />
              <p className="text-lg">partnership@nerasoft.com</p>
            </div>
            <div className="w-full py-3 flex items-center justify-start px-4 space-x-2">
              <IoCallSharp size={20} />
              <p className="text-lg">1800 309 3036</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PricingContact;
