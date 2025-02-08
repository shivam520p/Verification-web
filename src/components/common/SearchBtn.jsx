import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBtn = () => {
    const [error, setError] = useState("");
  
    const handleSearch = (e) => {
      const value = e.target.value.replace(/[^0-9]/g, "");
      if ((value.length === 6 && !isNaN(value)) || value.length === 0) {
        setError("");
      } else {
        setError("Pincode should be exactly 6 digits.");
      }
    };
  
    useEffect(() => {
      if (!localStorage.getItem("tutors")) {
        localStorage.setItem("tutors", true);
      }
      return () => {
        localStorage.removeItem("tutors");
      };
    }, []);
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="bg-gray-500 p-1 rounded-full w-full max-w-xs">
          <div className="bg-white p-1 rounded-full flex items-center">
            <input
              type="text"
              className="px-3 outline-none w-full"
              maxLength={6}
              placeholder="Enter job title..."
              onChange={handleSearch}
            />
            <button className="bg-gray-100 p-2 rounded-full">
              <FaSearch />
            </button>
          </div>
        </div>
        {error && <div className="text-red-500 mt-2 text-sm">{error}</div>}{" "}
        {/* Display error if there's one */}
      </div>
    </>
  );
};

export default SearchBtn;
