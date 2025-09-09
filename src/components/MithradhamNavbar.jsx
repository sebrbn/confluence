import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import mith from "../assets/mith.jpg"; 

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "speakers", label: "Speakers" },
  { id: "agenda", label: "Schedule" },
  { id: "contact", label: "Contact" },
];

export default function MithradhamNavbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    navigate("/mithradham");
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
<nav
  className="fixed top-0 left-0 w-full z-50 text-white bg-cover bg-center"
  style={{
    backgroundImage: `url(${mith})`,
    backgroundPosition: "center top", // align with header
    backgroundRepeat: "no-repeat",
  }}
>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Branding */}
        <div className="flex items-center">

        <Link to="/" className="text-sm sm:text-base font-medium hover:text-yellow-200 transition">
                    Back to Main Page
        </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm sm:text-base font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleScroll(item.id)}
                className="hover:text-yellow-200 transition"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-yellow-700 transition"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-yellow-700/95 backdrop-blur text-white">
          <ul className="flex flex-col space-y-3 px-6 py-4 text-base">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className="block w-full text-left py-2 hover:text-yellow-200"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
