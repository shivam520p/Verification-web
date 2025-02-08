import React, { useState } from "react";
import {
  MdOutlineWatchLater,
  MdArrowForwardIos,
  MdArrowBackIos,
} from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const JobList = () => {
  const dataItems = [
    {
      title: "NodeJS Developer",
      exp: "5+ Yrs",
      type: "Full Time",
      btn: "Apply Now",
    },
    {
      title: "PHP Developer",
      exp: "5+ Yrs",
      type: "Full Time",
      btn: "Apply Now",
    },
    {
      title: "PHP Developer",
      exp: "5+ Yrs",
      type: "Full Time",
      btn: "Apply Now",
    },
    {
      title: "NodeJS Developer",
      exp: "5+ Yrs",
      type: "Full Time",
      btn: "Apply Now",
    },
    {
      title: "Paid Media Specialist",
      exp: "5+ Yrs",
      type: "Full Time",
      btn: "Apply Now",
    },
    {
      title: "Paid Media Specialist",
      exp: "5+ Yrs",
      type: "Full Time",
      btn: "Apply Now",
    },
    {
      title: "NodeJS Developer",
      exp: "5+ Yrs",
      type: "Full Time",
      btn: "Apply Now",
    },
    {
      title: "PHP Developer",
      exp: "5+ Yrs",
      type: "Full Time",
      btn: "Apply Now",
    },
    {
      title: "PHP Developer",
      exp: "5+ Yrs",
      type: "Full Time",
      btn: "Apply Now",
    },
    {
      title: "NodeJS Developer",
      exp: "5+ Yrs",
      type: "Full Time",
      btn: "Apply Now",
    },
    {
      title: "Paid Media Specialist",
      exp: "5+ Yrs",
      type: "Full Time",
      btn: "Apply Now",
    },
    {
      title: "Paid Media Specialist",
      exp: "5+ Yrs",
      type: "Full Time",
      btn: "Apply Now",
    },
    {
      title: "NodeJS Developer",
      exp: "5+ Yrs",
      type: "Full Time",
      btn: "Apply Now",
    },
    {
      title: "PHP Developer",
      exp: "5+ Yrs",
      type: "Full Time",
      btn: "Apply Now",
    },
    {
      title: "PHP Developer",
      exp: "5+ Yrs",
      type: "Full Time",
      btn: "Apply Now",
    },
    {
      title: "NodeJS Developer",
      exp: "5+ Yrs",
      type: "Full Time",
      btn: "Apply Now",
    },
    {
      title: "Paid Media Specialist",
      exp: "5+ Yrs",
      type: "Full Time",
      btn: "Apply Now",
    },
    {
      title: "Paid Media Specialist",
      exp: "5+ Yrs",
      type: "Full Time",
      btn: "Apply Now",
    },
  ];

  const navigate = useNavigate();
  const jobsPerPage = 7;
  const totalPages = Math.ceil(dataItems.length / jobsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = dataItems.slice(startIndex, startIndex + jobsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="w-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex flex-col items-center justify-center gap-3 mb-8">
          <span className="text-blue-500 text-xl bg-gray-200 px-5 py-2 rounded-full animate-bounce">
            BUILD YOUR CAREER
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-center sm:text-left tracking-wide animate-fade-in">
            Grab Excellent Opportunities With Unknown Analytics
          </h2>
        </div>

        <div className="relative pt-10 mb-10">
          <h2 className="text-4xl sm:text-5xl font-semibold inline-block tracking-wider animate-slide-in">
            Job Opening
          </h2>
          <span className="absolute left-0 -bottom-8 w-1/5 h-1 bg-black animate-slide-in-line"></span>
        </div>

        <div className="py-12">
          {currentJobs.map((job, index) => (
            <motion.div
              key={job.title + index}
              className="flex flex-col sm:flex-row items-center justify-between py-5 border-b-2 mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-full sm:w-1/2 flex flex-col items-start mb-4 sm:mb-0">
                <h3 className="text-xl sm:text-2xl font-medium tracking-wide text-gray-800">
                  {job.title}
                </h3>
                <p className="text-gray-600 text-lg">Exp - {job.exp}</p>
              </div>

              <div className="w-full sm:w-1/2 flex items-center justify-between">
                <div className="w-1/3 flex items-center justify-center gap-1">
                  <MdOutlineWatchLater size={20} className="text-gray-600" />
                  <p className="text-gray-600 text-lg">{job.type}</p>
                </div>

                <div className="w-1/3 flex items-center justify-end">
                  <FaArrowAltCircleRight size={20} className="text-blue-600" />
                  <button
                    onClick={() => {
                      navigate(`/career/${job.title.replace(/\s+/g, "")}`);
                    }}
                    className="font-semibold px-4 py-2 tracking-normal text-lg text-blue-500 hover:text-blue-700"
                  >
                    {job.btn}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="py-6">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrevPage}
              className="p-3 border border-black rounded-full"
              disabled={currentPage === 1}
            >
              <MdArrowBackIos />
            </button>

            {/* Page numbers */}
            {[...Array(totalPages).keys()].map((pageIndex) => {
              const pageNumber = pageIndex + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`px-4 py-2 border border-black rounded-full ${
                    pageNumber === currentPage
                      ? "bg-blue-500 text-white"
                      : "text-black"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            <button
              onClick={handleNextPage}
              className="p-3 border border-black rounded-full"
              disabled={currentPage === totalPages}
            >
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobList;
