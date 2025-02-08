import React from "react";
import ThankYouImg from "../assets/images/ThankYou.png";

const Submit = ({setPopUp}) => {
  return (
    <>
      {/* Backdrop */}
      <div className="overflow-y-auto overflow-x-hidden fixed inset-0 z-40 bg-black bg-opacity-50">
        {/* Centering the modal */}
        <div className="flex justify-center items-center w-full h-full">
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white">
              <div className="flex p-4 md:p-5 items-center justify-center">
                <img
                  src={ThankYouImg}
                  alt=""
                  className="absolute -top-12  w-24 h-24"
                />
              </div>

              <div className="p-4 md:p-5 space-y-4 flex flex-col items-center justify-center">
                <h3 className="text-4xl text-gray-800">Thank You!</h3>
                <p className="text-lg text-gray-500 px-10 text-center">
                  Your Details has been submitted successfully. Thanks!.
                </p>
              </div>

              <div className="w-full flex items-center justify-center px-10 py-4">
                <button onClick={()=>{setPopUp(false)}} className="w-full px-10 py-3 bg-[#6fd649]">Ok</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Submit;
