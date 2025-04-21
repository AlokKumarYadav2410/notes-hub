import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoVid from '../assets/task.mp4'; // Adjust the path as necessary

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to close the mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex justify-between items-center">
            <NavLink to="/" className="text-2xl font-bold text-amber-500">
              NotesHub
            </NavLink>
            <video src={logoVid} className="md:block h-8 w-8 ml-2" autoPlay loop muted/>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-amber-500 font-medium'
                  : 'text-gray-400 hover:text-white font-medium'
              }
            >
              Home
            </NavLink>
            {/* <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-amber-500 font-medium'
                  : 'text-gray-400 hover:text-white font-medium'
              }
            >
              Create Note
            </NavLink> */}
            <NavLink
              to="/notes"
              className={({ isActive }) =>
                isActive
                  ? 'text-amber-500 font-medium'
                  : 'text-gray-400 hover:text-white font-medium'
              }
            >
              Notes
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-amber-500 font-medium'
                  : 'text-gray-400 hover:text-white font-medium'
              }
            >
              About
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <NavLink
              to="/"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? 'block text-amber-500 font-medium'
                  : 'block text-gray-400 hover:text-white font-medium'
              }
            >
              Home
            </NavLink>
            {/* <NavLink
              to="/"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? 'block text-amber-500 font-medium'
                  : 'block text-gray-400 hover:text-white font-medium'
              }
            >
              Create Note
            </NavLink> */}
            <NavLink
              to="/notes"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? 'block text-amber-500 font-medium'
                  : 'block text-gray-400 hover:text-white font-medium'
              }
            >
              Notes
            </NavLink>
            <NavLink
              to="/about"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? 'block text-amber-500 font-medium'
                  : 'block text-gray-400 hover:text-white font-medium'
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;