import React from "react";
import headerLogo from "../assets/header-logo.png";
const Header = () => {
  return (
    <div className="bg-[#061231]  p-3 min-h-screen">
      <div className="flex justify-between items-center">
        <div className="w-1/3">
          <img src={headerLogo} alt="" />
        </div>
        <div className="flex justify-between itc w-[50%] ">
          <p className="text-white py-3 px-8 font-medium hover:text-gray-500">
            About Us
          </p>
          <p className="text-white py-3 px-8 font-medium hover:text-gray-500">
            Services
          </p>
          <p className="text-white py-3 px-8 font-medium hover:text-gray-500">
            Our Work
          </p>
          <p className="text-white py-3 px-8 font-medium hover:text-gray-500">
            Team{" "}
          </p>
          <p className="text-white py-3 px-8 font-medium hover:text-gray-500">
            Blog
          </p>
          <button className="text-white py-3 px-8 rounded-lg hover:text-gray-500 bg-[#1d4ac4] hover:bg-[#1d4ac495] ">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
