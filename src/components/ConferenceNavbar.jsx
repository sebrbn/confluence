import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function ConferenceNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Decide navbar color based on current route
  const navbarBg =
    location.pathname === "/conference/hackathon"
      ? "bg-black"
      : "bg-green-800";

  return (
    <nav
      className={`${navbarBg} text-white w-full z-50 backdrop-blur-sm font-sans sticky top-0 shadow-md transition-colors duration-300`}
    >
      <div className="w-full px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Left Side Back Button */}
        <div className="flex items-center">
          <Link
            to="/"
            className="text-sm sm:text-base font-medium hover:text-green-200 transition"
          >
            Back to Main Page
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none text-white"
          >
            {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden sm:flex flex-wrap justify-center gap-6 text-sm font-medium mx-auto">
          <li>
            <Link to="/conference" className="hover:text-green-200 transition">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/conference/committee"
              className="hover:text-green-200 transition"
            >
              Committee
            </Link>
          </li>
          <li>
            <Link
              to="/conference/submission"
              className="hover:text-green-200 transition"
            >
              Submission
            </Link>
          </li>
          <li>
            <Link
              to="/conference/hackathon"
              className="hover:text-green-200 transition"
            >
              Energy Hackathon
            </Link>
          </li>
          <li>
            <Link
              to="/conference/poster-expo"
              className="hover:text-green-200 transition"
            >
              Poster Expo
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Links */}
      {menuOpen && (
        <ul className="sm:hidden flex flex-col gap-4 px-6 pb-4 text-sm font-medium bg-inherit border-t border-green-700">
          <li>
            <Link
              to="/conference"
              className="hover:text-green-200 transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/conference/committee"
              className="hover:text-green-200 transition"
              onClick={() => setMenuOpen(false)}
            >
              Committee
            </Link>
          </li>
          <li>
            <Link
              to="/conference/submission"
              className="hover:text-green-200 transition"
              onClick={() => setMenuOpen(false)}
            >
              Submission
            </Link>
          </li>
          <li>
            <Link
              to="/conference/hackathon"
              className="hover:text-green-200 transition"
              onClick={() => setMenuOpen(false)}
            >
              Energy Hackathon
            </Link>
          </li>
          <li>
            <Link
              to="/conference/poster-expo"
              className="hover:text-green-200 transition"
              onClick={() => setMenuOpen(false)}
            >
              Poster Expo
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
