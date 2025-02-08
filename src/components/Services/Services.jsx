import React from "react";
import ServiceImg1 from "../assets/images/ServiceImg1.svg";
import ServiceImg2 from "../assets/images/ServiceImg2.svg";
import ServiceImg3 from "../assets/images/ServiceImg3.svg";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const steps = [
    {
      id: 1,
      title: "Initiation & Planning",
      description:
        "We are architects innovation trailblazers of technological advancement",
      image: ServiceImg1,
    },
    {
      id: 2,
      title: "Execution & Development",
      description:
        "We are architects innovation trailblazers of technological advancement",
      image: ServiceImg2,
    },
    {
      id: 3,
      title: "Testing & Maintenance",
      description:
        "We are architects innovation trailblazers of technological advancement",
      image: ServiceImg3,
    },
  ];

  return (
    <>
      <ServicesCard />
      <section className="w-full py-6 lg:py-12 bg-gray-50">
        <div className="container mx-auto px-2 md:px-8 lg:px-20 py-5 flex items-center justify-center">
          <div className="py-12 px-6 sm:px-12 rounded-lg shadow-lg">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-2xl font-bold tracking-wide text-gray-900 sm:text-4xl">
                Our working process on <br /> how to grow your business
              </h2>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative">
                {/* Dotted line connecting the steps */}
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className="flex flex-col items-center relative z-10 border"
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-32 h-32 sm:w-40 sm:h-40 mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-800 mt-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-lg text-center mt-2">
                      {step.description}
                    </p>
                  </div>
                ))}
                <div className="absolute -bottom-5 left-0 w-full border-t-2 border-dotted border-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
