import React from "react";
import { Link } from "react-router-dom";

// Assets
import panel from "../assets/event1.jpeg";
import counselling from "../assets/event2.jpeg";
import bg1 from "../assets/bg1.jpeg";
import bg2 from "../assets/bg2.jpeg";
import bg3 from "../assets/conference.jpg";
import bg4 from "../assets/mith.jpg";
import marathon from "../assets/marathon.jpeg";
import bg5 from "../assets/day3.jpeg";
import heroBg from "../assets/bg3.jpeg"; // 👈 Background for Day 6

// Logos
import rcss from "../assets/rcss.png";
import rset from "../assets/rset2.png";
import rbs from "../assets/rbs.png";
import rcmas from "../assets/rcmas.png";
import rvcas from "../assets/rvcs.png";
import shthevara from "../assets/sh.png";
import mith1 from "../assets/mitherdham.png";
import mith2 from "../assets/image2.png";

// ✅ Clean highlights array
const highlights = [
  {
    step: "01",
    title: "Confluence School Meet",
    desc: "The Ultimate School Students Convergence",
    date: "22 September 2025",
    time: "9:30 AM – 4:30 PM",
    venue:
      "Rajagiri Viswajyothi College of Arts & Applied Science, Perumbavoor",
    bg: bg1,
    logo: rvcas,
    logoSize: "h-24",
    link: "/day1",
    hover: "hover:bg-blue-50",
  },
  {
    step: "02",
    title: "Confluence Conclave 2025",
    desc: "Jointly organised by Rajagiri College of Social Sciences, Kalamassery & Rajagiri Business School, Kakkanad",
    date: "23 September 2025",
    venue: "Rajagiri College of Social Sciences, Kalamassery & Rajagiri Business School, Kakkanad",
    bg: bg2,
    logo: [rcss, rbs],
    logoSize: "h-28",
    link: "/day2",
    hover: "hover:bg-yellow-50",
  },
  {
    step: "03",
    title: "Confluence Conclave 2025",
    desc: "Jointly organised by Rajagiri College of Social Sciences, Kalamassery & Rajagiri Business School, Kakkanad",
    date: "24 September 2025",
    venue: "Rajagiri College of Social Sciences, Kalamassery & Rajagiri Business School, Kakkanad",
    bg: bg5,
    logo: [rcss, rbs],
    logoSize: "h-20",
    link: "/day3",
    hover: "hover:bg-gray-50",
  },
  {
    step: "04",
    title: "IndSight",
    desc: "Panel Discussion | Speranza | Film Festival | Ideathon",
    date: "25 September 2025",
    venue: "Rajagiri College of Management and Applied Sciences, Kakkanad",
    bg: panel,
    logo: rcmas,
    logoSize: "h-20",
    link: "/day4/panel",
    hover: "hover:bg-red-50",
  },
  {
    title: "International Conference on Advances in Sustainable Development [ICASD - 2025]",
    desc: "An engaging academic conference hosted by RSET",
    date: "25 September 2025",
    venue: "Rajagiri School of Engineering & Technology, Kakkanad",
    bg: bg3,
    logo: rset,
    logoSize: "h-24",
    link: "/conference",
    hover: "hover:bg-green-50",
  },
  {
    title: "INSOMNIA – Mentalism Show",
    desc: "Experience the magic of mind reading and illusions by Mr. Athi",
    date: "25 September 2025",
    venue: "Rajagiri School of Engineering & Technology, Kakkanad",
    bg: counselling,
    logo: rset,
    logoSize: "h-24",
    link: "",
    hover: "hover:bg-yellow-50",
  },
  {
    step: "05",
    title: "One Day International Seminar On Sustainable Development ", 
    desc: "Theme: Energy Future for Sustainable Development of the World",
    date: "26 September 2025",
    venue: "Renewable Energy Centre, Mithradham, Aluva",
    bg: bg4,
    logo: [mith1, mith2],
    logoSize: "h-20",
    link: "/mithradham",
    hover: "hover:bg-yellow-50",
  }, 
  {
    step: "06",
    title: "Confluence: Industry Academia Summit Future of Sovereignty and Selfreliance",
    desc: "Theme: Future of Sovereignty and Self-reliance",
    date: "27 September 2025",
    venue: "Rajagiri School of Engineering & Technology, Kakkanad",
    bg: heroBg,
    logo: rset,
    logoSize: "h-24",
    link: "/day6",
    hover: "hover:bg-green-50",
  },
  {
    step: "07",
    title: "Marathon : Lakeview Envirothon 2025",
    desc: "An eco-conscious half-marathon and fun run in Kochi, raising awareness for lake conservation, sustainable living, and community wellness",
    date: "28 September 2025",
    venue: "SH College Lakeview Ground, Thevara, Kochi",
    bg: marathon,
    logo: shthevara,
    logoSize: "h-28",
    link: "/Marathon",
    hover: "hover:bg-blue-50",
  },
];

export default function EventHighlights() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 text-gray-800 font-[Poppins]">
      <div className="max-w-6xl mx-auto space-y-24">
        {highlights.map((item, index) => {
          const content = (
            <div
              key={index}
              className={`border-b border-gray-300 pb-12 rounded-xl p-6 transition-all duration-300 ${item.hover}`}
            >
              <div
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } items-center gap-10`}
              >
                {/* Step Number (if present) */}
                {item.step && (
                  <div className="flex flex-col items-center -mt-2">
                    <p className="text-4xl font-semibold text-gray-700 mb-2">
                      Day 
                    </p>
                    <div
                      className="text-[120px] sm:text-[140px] md:text-[180px] lg:text-[220px] font-extrabold text-transparent leading-none"
                      style={{
                        backgroundImage: `url(${item.bg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                      }}
                    >
                      {item.step}
                    </div>
                  </div>
                )}

                {/* Event content */} 
                <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                  <div className="flex items-center gap-6 flex-wrap">
                    <h3
                      className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-transparent leading-tight"
                      style={{
                        backgroundImage: `url(${item.bg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Logos */}
                    {Array.isArray(item.logo) ? (
                      <div className="flex gap-4 flex-wrap items-center">
                        {item.logo.map((logo, i) => (
                          <img
                            key={i}
                            src={logo}
                            alt={`logo-${i}`}
                            className={`${item  .logoSize} w-auto max-w-[150px] object-contain`}
                          />
                        ))}
                      </div>
                    ) : (
                      item.logo && (
                        <img
                          src={item.logo}
                          alt="logo"
                          className={`${item.logoSize} w-auto max-w-[180px] object-contain`}
                        />
                      )
                    )}
                  </div>

                  <p className="text-gray-700 text-2xl leading-relaxed mt-3">
                    {item.desc}
                  </p>

                  <div className="mt-3 text-gray-600 text-lg space-y-1">
                    {item.date && (
                      <p>
                        <strong>Date:</strong> {item.date}
                      </p>
                    )}
                    {item.time && (
                      <p>
                        <strong>Time:</strong> {item.time}
                      </p>
                    )}
                    {item.venue && (
                      <p>
                        <strong>Venue:</strong> {item.venue}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );

          return item.link ? (
            item.link.startsWith("http") ? (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <Link key={index} to={item.link}>
                {content}
              </Link>
            )
          ) : (
            content
          );
        })}
      </div>
    </section>
  );
}
