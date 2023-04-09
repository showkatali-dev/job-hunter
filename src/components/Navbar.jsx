import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0">
      <div className="container mx-auto p-4 relative">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-primary">JobHunter</h2>

          {/* for larger device */}
          <div className="hidden md:flex items-center gap-x-6">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-linear" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/statistics"
              className={({ isActive }) => (isActive ? "text-linear" : "")}
            >
              Statistics
            </NavLink>
            <NavLink
              to="/applied-jobs"
              className={({ isActive }) => (isActive ? "text-linear" : "")}
            >
              Applied Jobs
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "text-linear" : "")}
            >
              Blog
            </NavLink>
          </div>
          <button className="hidden md:block btn-primary">
            Start Applying
          </button>

          {/* menu button */}
          <HiMenuAlt3
            className="md:hidden text-3xl text-primary cursor-pointer"
            onClick={() => setOpenMenu(true)}
          />
        </div>

        {/* for mobile device */}
        <div
          className={`flex-col md:hidden items-start rounded gap-y-2 bg-gray-100 border p-4 absolute z-50 top-0 left-0 w-full ${
            openMenu ? "flex" : "hidden"
          }`}
        >
          <div className="w-full flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-primary">JobHunter</h2>
            <HiX
              className="text-3xl text-primary cursor-pointer"
              onClick={() => setOpenMenu(false)}
            />
          </div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "mobile-nav-link active" : "mobile-nav-link"
            }
            onClick={() => setOpenMenu(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              isActive ? "mobile-nav-link active" : "mobile-nav-link"
            }
            onClick={() => setOpenMenu(false)}
          >
            Statistics
          </NavLink>
          <NavLink
            to="/applied-jobs"
            className={({ isActive }) =>
              isActive ? "mobile-nav-link active" : "mobile-nav-link"
            }
            onClick={() => setOpenMenu(false)}
          >
            Applied Jobs
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "mobile-nav-link active" : "mobile-nav-link"
            }
            onClick={() => setOpenMenu(false)}
          >
            Blog
          </NavLink>
          <button className="py-3 btn-primary">Start Applying</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
