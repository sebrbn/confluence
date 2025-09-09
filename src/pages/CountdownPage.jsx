import React, { useEffect, useState } from "react";
import backgroundImg from "../assets/countdown.jpg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const targetDate = new Date("2025-09-21T00:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full text-white flex items-center justify-center overflow-hidden min-h-[80vh] sm:min-h-screen">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat sm:bg-fixed"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 sm:bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-wider text-gray-200 font-bold mb-6">
          Launching Soon
        </h1>

        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 sm:gap-x-6 mb-8 sm:mb-12">
          {[
            { label: "DAYS", value: timeLeft.days },
            { label: "HOURS", value: timeLeft.hours },
            { label: "MINUTES", value: timeLeft.minutes },
            { label: "SECONDS", value: timeLeft.seconds },
          ].map((unit, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center min-w-[64px] sm:min-w-[80px]"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                {String(unit.value).padStart(2, "0")}
              </div>
              <div className="text-[0.6rem] sm:text-xs md:text-sm tracking-widest mt-2 text-gray-300">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <Link
          to="/"
          className="inline-block px-5 sm:px-6 py-2 bg-white text-black text-sm sm:text-base font-semibold rounded hover:bg-gray-200 transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
    
  );
}
