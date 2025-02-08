import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import FooterLogo from "../assets/images/FooterLogo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-6 flex flex-col items-center justify-center">
      <div className="container mx-auto flex flex-col px-4 py-4 lg:py-10 lg:px-20 md:flex-row justify-between items-start space-y-12 md:space-y-0 md:space-x-16">
        {/* Left Section */}
        <div className="space-y-6 md:w-1/3">
          {/* Logo and Text */}
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
              <AiOutlinePlus className="w-6 h-6 text-black" />
            </div>
            <Link to="/" className="text-4xl font-bold text-black">
              <img src={FooterLogo} alt="" className="w-56 h-7" />
            </Link>
          </div>
          <p className="text-gray-300 max-w-md">
            ABC Business Park Noida-Greater, <br /> Noida Expy, Sector 135 Noida,{" "}
            <br /> Uttar Pradesh 201304
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="/"
              className="hover:bg-blue-500 p-3 border border-gray-700 rounded-full duration-300"
            >
              <FaFacebook className="w-6 h-6 text-white" />
            </a>
            <a
              href="mailto:support@identiplus.in"
              target="_blank"
              className="hover:bg-blue-500 p-3 border border-gray-700 rounded-full duration-300"
            >
              <FaEnvelope className="w-6 h-6 text-white" />
            </a>

            <a
              href="/"
              className="hover:bg-blue-500 p-3 border border-gray-700 rounded-full duration-300"
            >
              <FaInstagram className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://maps.app.goo.gl/jRqRFRw79sVg6iH79"
              target="_blank"
              className="hover:bg-blue-500 p-3 border border-gray-700 rounded-full duration-300"
            >
              <FaLocationDot className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 md:w-1/3">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="text-gray-300">
              <li className="hover:underline">
                <a href="/">Home</a>
              </li>
              <li className="hover:underline">
                <a href="/about">About</a>
              </li>
              <li className="hover:underline">
                <a href="/services">Services</a>
              </li>
              <li className="hover:underline">
                <a href="/pricing">Pricing</a>
              </li>
              <li className="hover:underline">
                <a href="/career">Career</a>
              </li>
              <li className="hover:underline">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="text-gray-300">
              <li className="hover:underline">
                <a href="/">Aadhar Verification</a>
              </li>
              <li className="hover:underline">
                <a href="/about">Pan Verification</a>
              </li>
              <li className="hover:underline">
                <a href="/services">DL Verification</a>
              </li>
              <li className="hover:underline">
                <a href="/pricing">Virtual KYC Assitance</a>
              </li>
              <li className="hover:underline">
                <a href="/career">KYC - Video</a>
              </li>
              <li className="hover:underline">
                <a href="/contact">On Site Verification</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4 max-w-sm md:w-1/3">
          <h3 className="font-semibold text-lg">
            Accelerate your roadmap with Rightfoot.
          </h3>
          <form className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-white rounded-lg text-black outline-blue-900"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="text-blue-500" />
              <span className="text-sm text-gray-300">
                I agree with{" "}
                <Link to="#" className="text-blue-500">
                  Terms of use
                </Link>{" "}
                and{" "}
                <Link to="#" className="text-blue-500">
                  Privacy Policy
                </Link>
              </span>
            </div>
            <button
              type="submit"
              className="px-5 py-3 text-base font-medium text-white inline-flex items-center bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <AiOutlinePlus
                className="w-6 h-6 text-white mr-2"
                aria-hidden="true"
              />
              Send Now
            </button>
          </form>
        </div>
      </div>
      <hr className="w-full" />
      <div className="pt-2 lg:pt-5 text-center text-lg text-gray-400">
        <p>© 2024, NeraSoft Pvt Ltd | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
