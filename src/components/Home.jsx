import React from "react";
import heroVideo from "../assets/hero.mov"; // or main3.mp4
import confluenceLogo from "../assets/sticker.png";
import EventHighlights from "./EventHighlights";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import NoticeBoard from "./NoticeBoard";

export default function Home() {
  return (
    <>
      {/* ✅ Notice Board */}
      <NoticeBoard />

      {/* Hero Section */}
      <section className="relative w-full text-white overflow-x-hidden h-[80vh] sm:h-screen">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
          <source src={heroVideo} type="video/quicktime" /> {/* for .mov fallback */}
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 sm:bg-black/50 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 md:px-6 space-y-6 h-full">
          {/* Logo and Version */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <img
              src={confluenceLogo}
              alt="Confluence Logo"
              // className="w-48 sm:w-72 md:w-[28rem] lg:w-[32rem] max-w-full"
                            className="w-50 sm:w-75 md:w-[32rem] lg:w-[40rem] max-w-full"

            />
            <span
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              2.0
            </span>
          </div>

          {/* Title */}
          <p className="text-base sm:text-sm md:text-lg  tracking-wide ">
            The Largest Industry–Academia Meet
          </p>
          <p className="text-base sm:text-lg md:text-2xl text-gray-10 tracking-wide italic ">
            Future of Sovereignty and Self-reliance
          </p>

          {/* Date */}
          <p className="text-sm sm:text-sm md:text-xl text-gray-200 mt-2 ">
            22–28 September · Kochi
          </p>

          {/* Button */}
          <Link
            to="/countdown"
            className="inline-block px-5 py-2 bg-white text-black text-sm sm:text-base font-semibold rounded hover:bg-gray-200 transition"
          >
            Launching Soon
          </Link>

          {/* Scroll Indicator */}
          <div className="absolute bottom-6 text-white animate-bounce text-xl">↓</div>
        </div>
      </section>

      {/* Event Highlights */}
      <section>
        <EventHighlights />
      </section>

      {/* Footer */}
      <section>
        <Footer />
      </section>
    </>
  );
}
