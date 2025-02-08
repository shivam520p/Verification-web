import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa"; // Import React Icons
import ContactForm from "./ContactForm";
import { motion } from "framer-motion"; // Import framer-motion
import ContactHero from "./ContactHero";

const Contact = () => {
  return (
    <>
      <section className="w-full">
        <ContactHero />

        {/* Contact Form with motion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <ContactForm />
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
