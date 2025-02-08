import React, { useState } from "react";

const GetStarted = () => {
  const [currentStep, setCurrentStep] = useState("identifier");
  const [identifier, setIdentifier] = useState(""); // Handles email or phone
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const [identifierError, setIdentifierError] = useState(false);
  const [otpError, setOtpError] = useState(false);

  const validateIdentifier = (value) => {
    const phonePattern = /^\d{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return phonePattern.test(value) || emailPattern.test(value);
  };

  const handleNextStep = (e) => {
    e.preventDefault();

    if (currentStep === "identifier") {
      if (!validateIdentifier(identifier)) {
        setIdentifierError(true);
        return;
      }
      setIdentifierError(false);
      setCurrentStep("otp");
    } else if (currentStep === "otp") {
      if (!/^\d{6}$/.test(otp)) {
        setOtpError(true);
        return;
      }
      setOtpError(false);
      alert("OTP Verified!"); // Dummy message for OTP verification
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      {/* Left: Background Image */}
      <div className="w-full lg:w-1/2 h-screen hidden lg:block">

      
        <img
          src="https://www.signable.co.uk/wp-content/uploads/image_industry-guide_Finance_signing.jpg"
          alt="Login Background"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right: Login Form */}
      <div className="bg-white shadow-xl rounded-lg p-10 w-full max-w-md mx-auto lg:w-1/3">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32">
            <img
              src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
              alt="Logo"
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">
          Login Your Account
        </h2>

        {currentStep === "identifier" ? (
          <form onSubmit={handleNextStep}>
            <label
              htmlFor="identifier"
              className="block text-sm text-gray-700 font-semibold mb-2"
            >
              Email or Phone
            </label>
            <input
              type="text"
              id="identifier"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="Enter Email or Phone Number"
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                identifierError ? "border-red-500" : "border-gray-300"
              }`}
            />
            {identifierError && (
              <p className="text-red-500 text-sm mt-2">
                Please enter a valid email or phone number.
              </p>
            )}
            <button
              type="submit"
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md shadow-md transition duration-200 ease-in-out"
            >
              Get Login OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleNextStep}>
            <label
              htmlFor="otp"
              className="block text-sm text-gray-700 font-semibold mb-2"
            >
              One Time Password
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                otpError ? "border-red-500" : "border-gray-300"
              }`}
            />
            {otpError && (
              <p className="text-red-500 text-sm mt-2">OTP must be exactly 6 digits.</p>
            )}
            <button
              type="submit"
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md shadow-md transition duration-200 ease-in-out"
            >
              Verify OTP
            </button>
          </form>
        )}

        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default GetStarted;
