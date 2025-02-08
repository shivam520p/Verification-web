import React, { createContext } from "react";
import { useState } from "react";
import axiosInstance from "../BaseUrl/AxiosInstance";
import { toast } from "react-hot-toast";

export const PageContext = createContext();
export const PageProvider = ({ children }) => {
  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const getContactInguary = async () => {
    try {
      const response = await axiosInstance.get("/getcontact");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const contactHandleChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };
  const contactSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/contact", contactForm);
      console.log(response);
      if (response.status === 201) {
        toast.success("Submitted Successfully!! We will contact soon.");
        setContactForm({ fullName: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      toast.error(error.response?.message);
      console.log(error);
    }
  };

  return (
    <>
      <PageContext.Provider
        value={{
          contactForm,
          setContactForm,
          contactHandleChange,
          contactSubmit,
          getContactInguary,
        }}
      >
        {children}
      </PageContext.Provider>
    </>
  );
};
