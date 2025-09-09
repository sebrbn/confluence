import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black bg-opacity-70 text-white fixed top-0 w-full z-50 backdrop-blur-sm">
      <div className="w-full px-4 sm:px-6 py-4 flex justify-between items-center md:justify-center relative">
        {/* Logo */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><Link to="/" className="hover:text-gray-300 transition">Home</Link></li>
          <li><Link to="/confluence-date" className="hover:text-gray-300 transition">Confluence Days</Link></li>
          <li><Link to="/institutes" className="hover:text-gray-300 transition">Institutional Partners</Link></li>
          <li><Link to="/advisory-board" className="hover:text-gray-300 transition">Advisory Board</Link></li>
          {/* <li className="hover:text-gray-300 transition">Partners</li> */}
          <li><Link to="/speakers" className="hover:text-gray-300 transition">Speakers</Link></li>
          <li><Link to="/partners" className="hover:text-gray-300 transition">Partners</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300 transition">Contact</Link></li>

        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl absolute right-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <ul className="flex flex-col items-center gap-4 text-sm font-medium py-4 md:hidden bg-black bg-opacity-90">
          <li><Link to="/" className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/confluence-date" className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>Confluence Dates</Link></li>
          <li><Link to="/institutes" className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>Institutional Partners</Link></li>
          <li><Link to="/advisory-board" className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>Advisory Board</Link></li>
          <li className="hover:text-gray-300 transition">Partners</li>
          <li className="hover:text-gray-300 transition">Speakers</li>
          <li><Link to="/contact" className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
