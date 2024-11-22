import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-teal-900 text-white hover:bg-teal-800 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-teal-800 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-emerald-400 border-b border-emerald-300">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink
              className="flex flex-shrink-0 items-center mr-4 text-white text-2xl font-bold ml-2"
              to="/"
            >
              Job Library
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink className={linkClass} to="/">
                  Home
                </NavLink>
                <NavLink className={linkClass} to="/jobs">
                  Jobs
                </NavLink>
                <NavLink className={linkClass} to="/add-job">
                  Add Job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
