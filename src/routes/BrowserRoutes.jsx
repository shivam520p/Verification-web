import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Career from "../components/Career/Career";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import GetStarted from "../components/GetStarted/GetStarted";
import Pricing from "../components/Pricing/Pricing";
import HomeMain from "../components/Home/HomeMain";
import ServiceDetailPage from "../components/Services/service-detail/ServiceDetailPage";
import ApplyNow from "../components/Career/ApplyNow/ApplyNow";
import ApplyNowForm from "../components/Career/ApplyNowForm/ApplyNowForm";
import BlogDetails from "../components/blog/BlogDetails";

export const BrowserRoute = () => {
  const location = useLocation();
  const isLocation = location.pathname !== "/get-started";
  return (
    <>
      {isLocation && <Navbar />}
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-detail" element={<ServiceDetailPage />} />
        <Route path="/home/blogs" element={<BlogDetails />} />
        <Route path="services" element={<Services />} />
        <Route path="/career/apply-form" element={<ApplyNowForm />} />
        <Route path="/career/*" element={<ApplyNow />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/getstarted" element={<GetStarted />} />
      </Routes>
      {isLocation && <Footer />}
    </>
  );
};
