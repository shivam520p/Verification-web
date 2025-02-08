import React from "react";
import CareerHero from "../CareerHero";
import { FaLink } from "react-icons/fa";

const ApplyNowForm = () => {
  return (
    <>
      <CareerHero />
      <section className="w-full">
        <div className="container mx-auto px-2 sm:px-8 md:px-16 lg:px-20 py-4 lg:py-8">
          <div className="bg-white shadow-lg p-5 lg:p-10 border rounded-md">
            <div className="flex flex-col w-full pb-4 border-b-2">
              <h2 className="text-2xl font-medium text-gray-800">
                NodeJS Developer
              </h2>
              <span className="text-lg font-semibold text-gray-600">
                Delhi, India
              </span>
            </div>
            <form action="" className="flex flex-col space-y-4 py-3">
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="w-full sm:w-1/2 flex flex-col">
                  <label
                    htmlFor="firstName"
                    className="text-lg font-medium text-gray-700 py-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your First Name"
                    className="px-4 py-2.5 border border-gray-500 outline-gray-600 placeholder:text-lg shadow-sm rounded-lg"
                    required
                  />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col">
                  <label
                    htmlFor="lastName"
                    className="text-lg font-medium text-gray-700 py-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Last Name"
                    className="px-4 py-2.5 border border-gray-500 outline-gray-600 placeholder:text-lg shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="w-full sm:w-1/2 flex flex-col">
                  <label
                    htmlFor="phoneNumber"
                    className="text-lg font-medium text-gray-700 py-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Phone Number"
                    className="px-4 py-2.5 border border-gray-500 outline-gray-600 placeholder:text-lg shadow-sm rounded-lg"
                    required
                  />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col">
                  <label
                    htmlFor="emailAddress"
                    className="text-lg font-medium text-gray-700 py-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Email Address"
                    className="px-4 py-2.5 border border-gray-500 outline-gray-600 placeholder:text-lg shadow-sm rounded-lg"
                    required
                  />
                </div>
              </div>
              <div className="w-full flex flex-col">
                <label
                  htmlFor="fullAddress"
                  className="text-lg font-medium text-gray-700 py-2"
                >
                  Full Address
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Full Address"
                  className="px-4 py-2.5 border border-gray-500 outline-gray-600 placeholder:text-lg shadow-sm rounded-lg"
                  required
                />
              </div>
              <div className="w-full flex flex-col">
                <label
                  htmlFor="linkedinURL"
                  className="text-lg font-medium text-gray-700 py-2"
                >
                  Linkedin
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Linkedin Profile URL"
                  className="px-4 py-2.5 border border-gray-500 outline-gray-600 placeholder:text-lg shadow-sm rounded-lg"
                  required
                />
              </div>
              <div className="w-full sm:w-1/5 flex flex-col">
                <label
                  htmlFor="attachResume"
                  className="text-lg font-medium text-gray-700 py-2"
                >
                  Attach Your Resume
                </label>
                <div className="border-dashed border-2 border-gray-400 rounded-md p-3 text-center cursor-pointer hover:border-gray-600">
                  <input type="file" id="resume" className="hidden" required />
                  <label
                    htmlFor="resume"
                    className="flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <FaLink />
                    <span className="text-gray-600 font-medium">
                      Attach Resume/ CV
                    </span>
                  </label>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <label
                  htmlFor="message"
                  className="text-lg font-medium text-gray-700 py-2"
                >
                  Message
                </label>
                <textarea
                  rows={10}
                  placeholder="Brief Description..."
                  className="px-4 py-2.5 border border-gray-500 outline-gray-600 placeholder:text-lg shadow-sm rounded-lg"
                />
              </div>
              <div className="w-full flex items-center justify-end pt-5">
                <button className="px-8 py-2 border border-gray-500 hover:bg-gray-800 hover:text-white font-medium rounded-full duration-500">
                  Submit Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplyNowForm;
