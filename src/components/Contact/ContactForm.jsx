import React, { useContext } from "react";
import ContactImg from "../assets/images/contact.svg";
import { FaRegUserCircle, FaEnvelope } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { PageContext } from "../../API/PageHandle/PageProvider";

const ContactForm = () => {
  const { contactForm, contactSubmit, contactHandleChange } =
    useContext(PageContext);

  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-2 sm:px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center bg-white border shadow-md rounded-lg">
          {/* Left side content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-5 px-6">
            <img
              src={ContactImg}
              alt="Contact us"
              className="w-full h-auto max-w-[350px] sm:max-w-[450px]"
            />
            <div className="w-full max-w-[450px] bg-gray-900 text-white rounded-2xl flex flex-col md:flex-row px-4 py-4">
              <div className="w-full md:w-2/5 flex items-center space-x-3 mb-4 md:mb-0">
                <FaRegUserCircle size={30} />
                <div>
                  <h2 className="text-xl">Contact</h2>
                  <a
                    href="tel:+91 8373934934"
                    className="text-base text-gray-300"
                  >
                    +91 8373934934
                  </a>
                </div>
              </div>
              <div className="w-full md:w-3/5 bg-white text-black flex items-center space-x-3 p-2 rounded-xl">
                <FaEnvelope size={30} />
                <div>
                  <h2 className="text-xl">Email to</h2>
                  <a
                    href="mailto:support@identiplus.in"
                    className="text-base text-gray-800"
                  >
                    support@identiplus.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side form */}
          <div className="w-full lg:w-1/2">
            <div className="p-4 md:p-6 rounded-lg">
              <h2 className="text-xl md:text-2xl font-semibold mb-6 border-dashed border-b-2 border-gray-400 pb-2">
                Drop a Message
              </h2>

              <form onSubmit={contactSubmit}>
                {/* Name Input */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2 font-medium text-sm md:text-base">
                    Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={contactForm.fullName}
                    onChange={contactHandleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg border-gray-500 text-sm md:text-base outline-gray-600"
                    placeholder="Enter Name..."
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2 font-medium text-sm md:text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={contactHandleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg border-gray-500 text-sm md:text-base outline-gray-600"
                    placeholder="Enter Email..."
                    required
                  />
                </div>

                {/* Subject Input */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2 font-medium text-sm md:text-base">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={contactForm.subject}
                    onChange={contactHandleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg border-gray-500 text-sm md:text-base outline-gray-600"
                    placeholder="Enter Your Subject..."
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2 font-medium text-sm md:text-base">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    name="message"
                    value={contactForm.message}
                    onChange={contactHandleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg border-gray-500 text-sm md:text-base outline-gray-600"
                    placeholder="Enter Your Message..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  className="w-full md:w-1/3 flex items-center justify-center gap-2 bg-gray-800 text-white py-2 md:py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors text-sm md:text-base"
                  type="submit"
                >
                  Send Message
                  <FiSend />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
