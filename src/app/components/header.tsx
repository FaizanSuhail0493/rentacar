


import Link from "next/link";
import React from "react";
import { FaSearch, FaHeart, FaBell } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { PiSlidersHorizontal } from "react-icons/pi";



const Header: React.FC = () => {

  return (
    <div className="w-full bg-white shadow-md border-t-4 border-blue-600">
      <div className="md:w-[1440px] h-[124px] mx-auto flex items-center justify-between px-5 md:px-10">
        {/* Left Section: Logo and Search Box */}
        <div className="flex items-center space-x-4 md:space-x-8">
          {/* Logo */}
          <Link href="/">
          <div className="text-blue-600 text-xl md:text-2xl font-bold">
            MORENT
          </div>
          </Link>

          {/* Search Bar */}
          <div className="sm:hidden md:flex items-center w-full md:w-[492px] h-[44px] bg-gray-100 rounded-full border border-gray-300 px-3 space-x-2">
            <FaSearch className="text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search something here"
              className="flex-1 bg-transparent border-none outline-none text-sm text-gray-800"
            />
            <button className="flex items-center justify-center">
          <Link href="/categories">
            <PiSlidersHorizontal className="text-gray-500 w-8 h-8" />
          </Link>
        </button>
          </div>
        </div>

        {/* Right Section: Icons and Profile */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Heart Icon */}
          <button className="relative">
            <FaHeart className="text-gray-600 w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Notification Icon */}
          <button className="relative">
            <FaBell className="text-gray-600 w-5 h-5 md:w-6 md:h-6" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </button>

          {/* Settings Icon */}
          <Link href="/dashboard">
          <button>
            <FiSettings className="text-gray-600 w-5 h-5 md:w-6 md:h-6 mt-2" />
          </button>
          </Link>

          {/* User Profile */}
          <button>
            <img
              src="/car (1).png"
              alt="User"
              className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover"
            />
          </button>
        </div>
      </div>

      {/* Search Bar for Mobile */}
      <div className="md:hidden px-5 py-2">
        <div className="flex items-center w-full h-[44px] bg-gray-100 rounded-full border border-gray-300 px-3 space-x-2">
          <FaSearch className="text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search something here"
            className="flex-1 bg-transparent border-none outline-none text-sm text-gray-800"
          />
         <button className="flex items-center justify-center">
          <Link href="/categories">
            <PiSlidersHorizontal className="text-gray-500 w-8 h-8" />
          </Link>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
