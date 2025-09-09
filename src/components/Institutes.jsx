import React from "react";
import groupPhoto from "../assets/institutions.jpg"; // Replace with your actual photo

export default function Institutes() {
  const people = [
    "Rev.Fr. Francis Manavalan",
    "Rev.Fr. Saju Madavanakkadu",
    "Rev.Fr. Joel George Pullolil",
    "Rev.Fr. George Peter Pittappillil",
    "Rev.Fr. Ajeesh Puthussery",
    "Rev.Fr. Joseph Kusumalayam",
    "Rev.Fr. Jaison Mulerikkal",
    "Rev.Fr. Dipin Karingen",
  ];

  // Institutions shown below the image
  const extrainstitutions = [
    { name: "Sacred Heart College (Autonomous)", link: "https://www.shcollege.ac.in", color: "text-green-700" },
    { name: "Rajagiri College of Social Sciences (Autonomous)", link: "https://rajagiri.edu", color: "text-emerald-700" },
    { name: "Rajagiri School of Engineering & Technology (RSET)", link: "https://www.rajagiritech.ac.in", color: "text-red-700" },
    { name: "Rajagiri Business School (RBS)", link: "https://www.rajagiribusinessschool.edu.in", color: "text-teal-800" },
    { name: "Rajagiri College of Management & Applied Sciences (RCMAS)", link: "https://rajagiricollege.edu.in", color: "text-blue-700" },
    { name: "Rajagiri Viswajyothi College of Arts and Applied Sciences", link: "https://rajagiriviswajyothi.org", color: "text-rose-700" },
    { name: "Mithradham – Renewable Energy Centre, International", link: "https://mithradham.org", color: "text-yellow-700" },
  ];

  return (
    <div className="relative w-full" style={{ marginTop: "52px" }}>
      {/* Responsive image */}
      <img
        src={groupPhoto}
        alt="Group of 8 people"
        className="w-full h-auto max-h-[calc(100vh-56px)] object-cover block"
      />

      {/* Floating people names */}
      <div
        className="absolute bg-white/70 text-black text-[8px] sm:text-[10px] md:text-sm px-4 py-3 rounded shadow
          max-w-full overflow-x-auto flex flex-col gap-1 items-center
          bottom-[60%] sm:bottom-[40%] left-1/2 transform -translate-x-1/2"
      >
        <div className="whitespace-nowrap flex gap-3">
          {people.map((person, idx) => (
            <span key={idx} className="flex-shrink-0">
              {person}
            </span>
          ))}
        </div>
      </div>

      {/* Institutions section with colors */}
      <div className="bg-white py-6 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {extrainstitutions.map((inst, i) => (
            <a
              key={i}
              href={inst.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block border rounded-lg p-4 shadow hover:shadow-lg transition duration-200 bg-gray-50 hover:scale-105 
                ${i === extrainstitutions.length - 1 ? "sm:col-span-2 md:col-span-3 mx-auto w-full sm:w-2/3" : ""}`}
            >
              <div className={`text-base sm:text-lg font-semibold text-center ${inst.color}`}>
                {inst.name}
              </div>
            </a>
          ))}
        </div>
      </div>
      {/* Footer */}
    {/* <footer className="bg-gray-900 text-gray-400 text-center py-4">
      <p className="text-sm">
        Copyright © Developed by <span className="text-white font-semibold">RSoft2025</span> All rights reserved
      </p>
    </footer> */}



    </div>
  );
}
