import React from "react";
import headerImage from "../assets/bg4.jpeg"; // 👈 Put your header image here
import logo from "../assets/shthevara.jpeg"
import { Link } from "react-router-dom";


function Marathon() {
  return (
    <div className="font-[Poppins] text-gray-800">
      {/* Header Image */}
      <div className="w-full h-64 md:h-96 relative mb-8">
        <img
          src={headerImage}
          alt="Marathon Header"
          className="w-full h-full object-cover  shadow-lg"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center rounded-b-3xl">
          <h1 className="text-5xl md:text-5xl font-bold text-white text-center">
            Kochi Lakeview Envirothon 2025
          </h1>
          <p className="text-xl md:text-2xl text-white mt-2 text-center">
            Marathon Day – Day 07 | Sacred Heart College, Thevara, Kochi
          </p>
        </div>
        <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 z-10">
          <Link to="/" className="text-white text-xs sm:text-sm md:text-base hover:underline">
            Back to Home
          </Link>
        </div>
        
      </div>

      {/* Marathon Details */}
      <div className="max-w-4xl mx-auto px-6">
        <section className="mb-8 bg-white shadow-md rounded-xl p-6">
                        <div className="flex items-center mb-4">

          <h2 className="text-4xl font-bold text-red-700 mr-4">
            About the Marathon
          </h2>
          <img
            src={logo}
            alt="RSET Logo"
            className="hh-10 md:h-12 object-contain filter brightness-110"/>
            </div>
          <p className="text-gray-700 mb-4 text-lg">
            This marathon aims to sound a clarion call for lake conservation,
            foster eco-sensitivity, and promote healthy lifestyles.
          </p>
          <p className="text-gray-700 mb-4 text-lg">
            The marathon will start from Sacred Heart Lakeview Ground and will
            go through Shanti Nagar Junction across Alexander Parabithara Bridge
            towards Cochin Port alongside the walkway and will end at the college
            ground.
          </p>
          <p className="text-gray-700 font-medium text-lg">
            Event Date & Venue: 28 September 2025, SH College Lakeview Ground,
            Thevara, Kochi
          </p>
        </section>

        {/* Registration */}
        <section className="bg-white shadow-md rounded-xl p-6 text-center text-lg">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Registration
          </h2>
          <p className="mb-4">
            Register now to participate in this exciting marathon and support
            lake conservation!
          </p>
          <a
            href="https://kochilakeviewenvirothon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-red-700 transition"
          >
            Register Here
          </a>
        </section>
      </div>
    </div>
  );
}

export default Marathon;
