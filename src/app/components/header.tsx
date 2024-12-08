import React from "react";
import { FiSearch, FiSettings } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineBell } from "react-icons/ai";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 h-[124px]">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-500">MORENT</h1>

          {/* Search Bar */}
          <div className="relative flex items-center">
            <FiSearch className="absolute left-4 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search something here"
              className="w-[300px] md:w-[492px] h-[44px] pl-10 pr-12 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-3 text-blue-500">
              <FiSettings size={18} />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <AiOutlineHeart className="text-gray-600 cursor-pointer hover:text-blue-500" size={24} />
          <div className="relative cursor-pointer">
            <AiOutlineBell className="text-gray-600 hover:text-blue-500" size={24} />
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
          </div>
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            {/* Placeholder for Profile */}
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
