import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaFacebook,FaGoogle  } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const ServiceDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { service } = location.state || {};

  if (!service) {
    navigate("/", { replace: true });
    return null;
  }

  return (
    <section className="w-full bg-white text-black pt-16 md:pt-32">
      <div className="container mx-auto px-2s sm:px-6 lg:px-24">
        {/* Product Header Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Left side - Image */}
          <div className="md:w-1/3 flex justify-center items-center">
            <div className="bg-gray-50 rounded-lg p-4 slg:p-8">
              <img
                src={service.image}
                alt={service.title}
                className="w-96 h-96 object-cover"
              />
            </div>
          </div>

          {/* Right side - Product Info */}
          <div className="md:w-1/2 px-4">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Model No: {service.modelno}
            </p>

            {/* Share buttons */}

            <div className="mb-6">
              <p className="text-gray-600 mb-2">Share Your Product:</p>
              <div className="flex gap-2">
                <button className="p-1 bg-red-500 text-white rounded-full text-sm sm:text-base">
                  <span className="sr-only">Share on Gmail</span>
                  <FaGoogle size={25} />
                </button>
                <button className="p-1 bg-green-500 text-white rounded-full text-sm sm:text-base">
                  <span className="sr-only">Share on WhatsApp</span>
                  <IoLogoWhatsapp size={25} />
                </button>
                <button className="p-1 bg-blue-600 text-white rounded-full text-sm sm:text-base">
                  <span className="sr-only">Share on Facebook</span>
                  <FaFacebook size={25} />
                </button>
              </div>
            </div>

            {/* Available on Amazon */}
            <div className="mb-6">
              <p className="text-gray-600">Available on:</p>
              <img
                src="https://nerasoft.in/_next/static/media/new-logo.a61071fc.png"
                alt="NeraSoft"
                className="h-8 sm:h-10 object-contain"
              />
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full py-3 px-4 border-2 border-black rounded-lg hover:bg-gray-50 text-sm sm:text-base">
                Enquiry Now
              </button>
              <button className="w-full py-3 px-4 bg-black text-white rounded-lg hover:bg-gray-800 text-sm sm:text-base">
                Service Quote
              </button>
            </div>
          </div>
        </div>

        {/* Product Information Section */}
        <div className="px-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Service Information
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            {service.information ||
              "In medical settings, maintaining hygiene and efficiency is crucial for ensuring the best possible patient care. A kidney tray with cover is a vital medical instrument used in various healthcare procedures to collect and contain waste materials, fluids, or small medical instruments safely."}
          </p>
        </div>

        {/* Product Description Section */}
        <div className="px-4 py-6 lg:py-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Service Description
          </h2>
          <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
            <li>{service.description}</li>
            <li>
              It is an electronic signature platform with secure and legally
              binding signature capabilities, used in business and legal
              transactions
            </li>
            <li>
              Our e-signature solution is reusable, enabling multiple document
              signing without the need for physical signatures
            </li>
            <li>
              We are a trusted provider & exporter of digital signature
              solutions with secure, verifiable, and compliant processes
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailPage;
