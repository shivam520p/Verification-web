import React from "react";

const JobDescription = ({ title, jobDetails, skills }) => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div>
        <p className="text-3xl font-semibold text-center sm:text-left">
          Job Description – {title}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row mt-6">
        {/* Left Section: Job Details */}
        <div className="py-5 w-full sm:w-1/2 mb-8 sm:mb-0">
          <p className="text-lg font-semibold">About the job:</p>
          <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base">
            {jobDetails.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ol>
        </div>

        {/* Right Section: Skills */}
        <div className="py-5 w-full sm:w-1/2">
          <p className="text-lg font-semibold">Skill(s) required:</p>
          <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* Apply Button */}
      <div className="mt-6 text-center sm:text-left">
        <button className="bg-black text-white px-8 py-3 rounded-md text-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDescription;
