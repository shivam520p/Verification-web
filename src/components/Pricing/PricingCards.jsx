import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import India from "../assets/images/india.jpg";
import Submit from "../Model/Submit";

const PricingCards = ({ activeButton }) => {
  const [pricingData, setPricingData] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [planData, setPlanData] = useState([]);
  const plans = [
    {
      name: "STANDARD",
      price: "\u20b9999",
      originalPrice: 0,
      description:
        "Enhanced customization and automation to streamline business processes",
      featureName: "Everything in Premium +",
      features: [
        "Fixed asset management",
        "Manage payroll",
        "Prepare and review budgets",
        "Cashflow forecasting",
        "Enable self-service vendor portal",
        "Set up custom domain",
        "Create business-specific custom modules",
        "Add custom button",
        "Create custom field validation rules",
        "Embed contextual web pages/apps",
        "Manage custom functions",
        "and a lot more",
      ],
      users: 10,
    },

    {
      name: "PROFESSIONAL",
      price: "\u20b9999",
      originalPrice: 0,
      description:
        "Enhanced customization and automation to streamline business processes",
      featureName: "Everything in Premium +",
      features: [
        "Fixed asset management",
        "Manage payroll",
        "Prepare and review budgets",
        "Cashflow forecasting",
        "Enable self-service vendor portal",
        "Set up custom domain",
        "Create business-specific custom modules",
        "Add custom button",
        "Create custom field validation rules",
        "Embed contextual web pages/apps",
        "Manage custom functions",
        "and a lot more",
      ],
      users: 10,
    },
    {
      name: "PREMIUM",
      price: "\u20b9999",
      originalPrice: 0,
      description:
        "Enhanced customization and automation to streamline business processes",
      featureName: "Everything in Premium +",
      features: [
        "Fixed asset management",
        "Manage payroll",
        "Prepare and review budgets",
        "Cashflow forecasting",
        "Enable self-service vendor portal",
        "Set up custom domain",
        "Create business-specific custom modules",
        "Add custom button",
        "Create custom field validation rules",
        "Embed contextual web pages/apps",
        "Manage custom functions",
        "and a lot more",
      ],
      users: 10,
    },
    {
      name: "Elite",
      price: "\u20b94,999",
      originalPrice: "\u20b95,999",
      description:
        "Advanced accounting bundled with full-fledged inventory management",
      featureName: "Everything in Elite +",
      features: [
        "Dashboard customization",
        "Manage warehouses (Up to 5)",
        "Composite items",
        "Track serial numbers",
        "Batch tracking",
        "Print shipping label",
        "Track shipments",
        "Connect online sales channels (Etsy, Amazon)",
        "Integrate Shopify stores (Up to 2)",
        "and a lot more",
      ],
      users: 15,
    },
    {
      name: "Ultimate",
      price: "\u20b97,999",
      originalPrice: "\u20b99,599",
      description:
        "Gain deeper insights with advanced business intelligence capabilities",
      featureName: "Everything in Ultimate +",
      features: [
        "50+ Pre-built data visualization",
        "Add and track KPIs for your business",
        "Analyze Zoho Books data along with other data sources",
        "Collaboratively create reports with colleagues",
        "Embed reports in websites/applications",
        "Records/Rows (3 Million)",
        "and a lot more",
      ],
      users: 25,
    },
  ];

  useEffect(() => {
    if (activeButton === "first") {
      setPlanData(plans.filter((plan, index) => index < 3));
    } else if (activeButton === "second") {
      setPlanData(plans.filter((plan, index) => index > 1));
    }
  }, [activeButton]);

  return (
    <>
      <div className="py-4">
        <motion.div
          className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 py-6 flex items-center justify-between"
          initial={{ opacity: 0 }} // Initial state
          animate={{ opacity: 1 }} // Final state (fully visible)
          transition={{ duration: 0.5 }} // Transition duration
        >
          <motion.div
            className="flex items-center justify-center gap-2"
            initial={{ x: -50 }} // Start from left
            animate={{ x: 0 }} // Move to normal position
            transition={{ duration: 0.5 }}
          >
            <img src={India} alt="" className="w-8 h-8" />
            <p>India</p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-5"
            initial={{ x: 50 }} // Start from right
            animate={{ x: 0 }} // Move to normal position
            transition={{ duration: 0.5 }}
          >
            <div>Monthly</div>
            <div className="pt-2">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  onClick={() => {
                    setPricingData(!pricingData);
                  }}
                />
                <div
                  className={`relative w-11 h-6 bg-gray-200 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500`}
                ></div>
              </label>
            </div>
            <div>
              Yearly <span className="text-blue-700">(Save More)</span>
            </div>
          </motion.div>
        </motion.div>
        <div className="container px-2 sm:px-8 md:px-16 lg:px-20 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {planData.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl flex flex-col justify-between border"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="w-full py-3 border-b flex items-center justify-center">
                  <h3 className="text-xl font-bold text-gray-800">
                    {plan.name}
                  </h3>
                </div>
                <div className="w-full flex flex-col items-center justify-between px-6 border-b">
                  <p className="text-gray-600 text-center text-lg px-10 py-6">
                    {plan.description}
                  </p>
                  <div className="text-gray-800 text-4xl sm:text-5xl font-bold py-3 flex flex-col items-center justify-center">
                    <span
                      className={`${
                        !pricingData
                          ? "line-through text-gray-500 text-lg"
                          : "text-gray-800 text-4xl sm:text-5xl font-bold"
                      }`}
                    >
                      {`\u20b9${plan.price.replace(/\D/g, "") * 12}`}
                    </span>
                    {!pricingData && <span>{plan.price}</span>}
                  </div>

                  <p className="text-gray-500 text-lg py-5">
                    Price/Org/Month Billed Annually
                  </p>
                </div>

                <div className="w-full flex items-center justify-between py-3 px-16 border-b">
                  <button
                    onClick={() => {
                      setPopUp(true);
                    }}
                    className="bg-yellow-500 text-black font-semibold py-3 px-4 rounded-md w-full hover:bg-yellow-600"
                  >
                    Start my free trial
                  </button>
                </div>
                <div className="w-full flex items-center justify-between px-10 py-3">
                  <ul className="text-gray-700 list-disc list-inside">
                    <p className="text-base font-medium text-black">
                      {plan.featureName}
                    </p>
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-start gap-2 space-y-2 text-base"
                      >
                        <FaCheck size={12} className="mt-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-full flex flex-col px-10 py-3 text-base border-t">
                <p>{plan.users} Users</p>
                <p>Email, Voice, and Chat Support</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {popUp && <Submit setPopUp={setPopUp} />}
    </>
  );
};

export default PricingCards;
