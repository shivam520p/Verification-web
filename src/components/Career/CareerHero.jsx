import React from "react";
import CareerImg from "../assets/images/CreerImg.png";

const CareerHero = () => {
  return (
    <section className="w-full pt-16">
      <div className="container mx-auto px-5 sm:px-10 md:px-20 lg:px-20 py-5 flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Careers
          </h1>
          <p className="text-base sm:text-lg md:text-xl">
            <span className="text-blue-400">Surepass Technologies.</span>{" "}
            simplifies the user onboarding process for enterprises by providing
            Real-time ID verification APIs, Digital KYC, Document OCR, and a
            whole lot of other APIs which can fasten the process of user
            onboarding by many folds saving a lot of time and money for the
            enterprises using our APIs. Surepass Technologies has built India’s
            largest stack of APIs that can authenticate and digitally store a
            customer/visitor’s Aadhar card, driver’s license, voter ID, and PAN
            for your compliance or security needs.
          </p>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <img src={CareerImg} alt="Career Image" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
