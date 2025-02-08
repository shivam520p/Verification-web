import React from "react";
import ContactImg from "../assets/images/ContactIm.jpg";

const ContactHero = () => {
  return (
    <section className="relative">
      {/* Responsive Image */}
      <img
        src={ContactImg}
        alt="Contact"
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl md:text-5xl font-bold z-10 px-4 sm:px-8">
        Contact Us
      </div>
    </section>
  );
};

export default ContactHero;
