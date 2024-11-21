import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-emerald-400 border-b border-emerald-300">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link
              className="flex flex-shrink-0 items-center mr-4 text-white text-2xl font-bold ml-2"
              to="/"
            >
              Job Library
            </Link>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <Link
                  className="bg-teal-900 text-white hover:bg-teal-800 hover:text-white rounded-md px-3 py-2"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="text-white hover:bg-teal-800 hover:text-white rounded-md px-3 py-2"
                  to="/jobs"
                >
                  Jobs
                </Link>
                <Link
                  className="text-white hover:bg-teal-800 hover:text-white rounded-md px-3 py-2"
                  to="/add-job"
                >
                  Add Job
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
