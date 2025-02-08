import React from "react";
import DeletePNG from "../assets/images/DeletePNG.png";

const Delete = ({setPopUp}) => {
  return (
    <>
      {/* Backdrop */}
      <div className="overflow-y-auto overflow-x-hidden fixed inset-0 z-40 bg-black bg-opacity-50">
        {/* Centering the modal */}
        <div className="flex justify-center items-center w-full h-full">
          <div className="p-4 w-full max-w-md max-h-full">
            <div className="bg-white">
              <div className="flex pt-5 items-center justify-center">
                <img
                  src={DeletePNG}
                  alt=""
                  className="w-24 h-24"
                />
              </div>

              <div className="p-2 md:p-5 space-y-4 flex flex-col items-center justify-center">
                <h3 className="text-4xl text-gray-800 font-semibold">Are You Sure!</h3>
                <p className="text-lg text-gray-500 px-4 text-center">
                  Do you really want to delete these records?. This proces cannot be undone.
                </p>
              </div>

              <div className="w-full flex items-center justify-center gap-5 px-12 py-5">
                <button onClick={()=>{setPopUp(false)}} className="w-full px-5 py-3 bg-gray-200">Cancel</button>
                <button onClick={()=>{setPopUp(false)}} className="w-full px-5 py-3 bg-[#9e4d4c] text-white ">Yes I'm Sure</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delete;
