import React, { useState } from "react";
import FreePlanImg from "../assets/images/free-plan.png";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import Delete from "../Model/Delete";

const FreePlan = () => {
  const [popUp, setPopUp] = useState(false)
  return (
   <>
    <section className="w-full">
      <div className="container mx-auto px-2 sm:px-8 md:px-16 lg:px-20 py-12 md:py-24">
        {/* Main section animation */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-white p-5 rounded-xl shadow-md border"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Image animation */}
          <motion.div
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={FreePlanImg} alt="Free Plan" className="w-full h-auto" />
          </motion.div>

          {/* Text content */}
          <div className="w-full lg:w-2/3 flex flex-col items-start justify-center">
            <motion.div
              className="flex flex-col space-y-2 pb-2 border-b w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Free Plan
              </h2>
              <p className="text-gray-500 text-base sm:text-lg font-medium">
                Get started with free accounting software for solopreneurs and
                micro businesses
              </p>
            </motion.div>

            {/* Features Section */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 py-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                "Create invoices, quotes, bills, expenses & journals",
                "Accept online payments",
                "Automate payment reminders",
                "Enable self-service customer portal",
                "Manage credits and refunds",
                "Bank reconciliation",
                "Track sales and purchase orders",
                "Track inventory",
                "GST reports and filing",
                "P&L, Balance Sheet & 50+ Reports",
                "Invoice Management System",
                "1 User + 1 Accountant",
                "Email Support",
                "and lot more...",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FaCheck size={12} className="mt-2" />
                  <p className="text-sm sm:text-base">{feature}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Footer with button animation */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1 }}
              viewport={{ once: true }}
            >
              <button onClick={()=>{setPopUp(true)}} className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded transition-all duration-300">
                Sign up for free
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
    {popUp && <Delete setPopUp={setPopUp} />}
   </>
  );
};

export default FreePlan;
