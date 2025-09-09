import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Heroicons (outline version)
import { BriefcaseIcon, SparklesIcon, HomeIcon } from "@heroicons/react/24/outline";

import hero1 from "../assets/event1.jpeg"; 
import hero2 from "../assets/event2.jpeg";
import hero3 from "../assets/event3.jpeg";

export default function Workshop() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const sections = [
    {
      title: "World Class Workshop",
      img: hero1,
      btn: "Learn More",
      desc: "A network of creative talents that helps brands find the recognition they deserve — with professional and world-class communications.",
      align: "left",
      icon: <BriefcaseIcon className="w-16 h-16 opacity-10" />,
      tags: ["Workshop", "Professional"]
    },
    {
      title: "True Spirit of Innovation",
      img: hero2,
      btn: "View Details",
      desc: "Kawasaki Z1 superbike was the original king of cool. Our mission was to relaunch the Z900RS as its modern-day counterpart.",
      align: "right",
      icon: <SparklesIcon className="w-16 h-16 opacity-10" />,
      tags: ["Innovation", "Creative"]
    },
    {
      title: "Home Luxury Designs",
      img: hero3,
      btn: "Explore",
      desc: "Fem Home – a growing luxury home brand – needed an identity that better captured the elegance and intimacy of their furnishings.",
      align: "left",
      icon: <HomeIcon className="w-16 h-16 opacity-10" />,
      tags: ["Design", "Luxury"]
    },
  ];

  return (
    <div className="bg-white relative">
      {sections.map((sec, i) => (
        <div
          key={i}
          className={`relative flex flex-col md:flex-row items-center justify-center py-20 px-6 md:px-20 border-b border-gray-200 overflow-hidden ${
            sec.align === "right" ? "md:flex-row-reverse" : ""
          }`}
          style={{
            background: i % 2 === 0 
              ? "linear-gradient(135deg, #f0f4f8, #e2e8f0)" 
              : "linear-gradient(135deg, #fef3c7, #fde68a)"
          }}
          data-aos="fade-up"
        >
          {/* Animated Watermark Number + Icon */}
          <div
            className="absolute select-none pointer-events-none flex flex-col items-center justify-center rounded-lg p-4"
            style={{
              top: "50%",
              transform: `translateY(-50%) rotate(${sec.align === "left" ? "-10deg" : "10deg"})`,
              left: sec.align === "left" ? "0" : "auto",
              right: sec.align === "right" ? "0" : "auto",
              background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(200,200,200,0.05))",
              animation: "rotateSlow 30s linear infinite"
            }}
          >
            <span className="text-gray-300 font-extrabold text-[8rem] md:text-[12rem] opacity-10">
              {i + 1}
            </span>
            <div className="mt-4">{sec.icon}</div>
          </div>

          {/* Floating Shape */}
          <div className="absolute -top-10 -left-10 w-16 h-16 bg-yellow-200 rounded-full opacity-30 animate-bounce-slow pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce-slow pointer-events-none"></div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 relative z-10">
            <div className="relative group">
              <img
                src={sec.img}
                alt={sec.title}
                className="w-full max-w-md object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-105"
              />
              {/* Subtle vertical accent line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gray-800 opacity-10 rounded"></div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center relative z-10">
            {/* Decorative line above heading */}
            <div className="w-12 h-1 bg-gray-800 mb-4 rounded"></div>

            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {sec.tags.map((tag, idx) => (
                <span key={idx} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              data-aos="fade-right"
            >
              {sec.title}
            </h2>
            <p data-aos="fade-left" data-aos-delay="200" className="text-gray-700 text-lg mb-6">
              {sec.desc}
            </p>
            <button className="w-max bg-gray-800 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-700 transition">
              {sec.btn}
            </button>
          </div>
        </div>
      ))}

      {/* Global Animations */}
      <style>{`
        @keyframes rotateSlow {
          0% { transform: translateY(-50%) rotate(-10deg); }
          100% { transform: translateY(-50%) rotate(350deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
