import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="sm:w-full md:w-[1440px] h-[480px] md:mx-28 lg:px-8 pt-10">
        <div className="flex sm:flex-col lg:flex-row md:justify-between sm: justify-center items-center md:gap-2 mb-4 sm:gap-y-4">
          {/* MORRENT Section - Left Side */}
          <div className="ml:20 pl-10">
            <h1 className="text-2xl font-bold text-blue-500">MORENT</h1>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          {/* Right Section */}
          <div className="sm:w-full md:w-[40%] grid sm:grid-cols-2 md:grid-cols-3  sm:pl-9 sm:mt-8 sm:gap-y-4">
            {/* About Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800">About</h2>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    Featured
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    Partnership
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    Business Relation
                  </a>
                </li>
              </ul>
            </div>

            {/* Community Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Community</h2>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    Podcast
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    Invite a friend
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials Section */}
            <div className="">
              <h2 className="text-lg font-semibold text-gray-800">Socials</h2>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col justify-between items-center">
          <p className="text-sm text-gray-600 md:ml-8 font-bold">
            © 2022 MORENT. All rights reserved
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0 md:mr-8">
            <a href="#" className="text-sm text-gray-600 hover:text-blue-500 font-bold">
              Privacy & Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-500 font-bold">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
