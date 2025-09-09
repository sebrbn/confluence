import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import heroBg from "../assets/day3.jpeg"; 
import logo1 from "../assets/rcss.png"; 
import logo2 from "../assets/rbs.png"; 
import { Linkedin } from "lucide-react"; // 👈 Add this at the top 


function Day3() {
  const [activeTab, setActiveTab] = useState("about");

  const schedule = [
    { time: "10:00 AM – 11:00 AM", title: "Keynote Address", desc: "By Raul John Aju – Founder of AI RealM", venue: "KE Auditorium", dept: "Common Programme" },
    { time: "11:30 AM – 1:00 PM", title: "Panel Discussion", desc: "AI in Education and Social Impact", venue: "RBS Auditorium", dept: "MA Sociology & CS" },
    { time: "2:00 PM – 3:30 PM", title: "Workshop", desc: "AI Tools for Students", venue: "Lab Block", dept: "CS Department" },
    { time: "4:00 PM – 5:00 PM", title: "Cultural Evening", venue: "KE Auditorium", dept: "Common Programme" },
    { time: "Full Day (Sep 23 & 24)", title: "Curiosity Zones", venue: "Chavara Hall", dept: "Computer Science" },
    { time: "Full Day", title: "International Book Exhibition & Meet the Author", venue: "Chavara Hall", dept: "Languages" },
    { time: "Full Day", title: "Handicraft Items Stall, Games, Hair Styling", venue: "Chavara Hall", dept: "Office of International Relations" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-[Poppins]">
      {/* Hero Section */}
      <div
        className="relative h-[50vh] sm:h-[60vh] bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-white px-4 sm:px-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold drop-shadow-lg">
            Confluence Conclave 2025 – Day 3
          </h1>
          <p className="mt-2 text-base sm:text-xl md:text-2xl font-medium drop-shadow-md">
             Rajagiri Business School & Rajagiri College of Social Sciences
          </p>
          <p className="mt-3 text-sm sm:text-lg md:text-xl drop-shadow-md">
            📅 24th September 2025
          </p>
        </div>

        {/* Back to Home */}
        <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 z-10">
          <Link to="/" className="text-white text-xs sm:text-sm md:text-base hover:underline">
            Back to Home
          </Link>
        </div>
      </div>

      {/* Internal Navbar */}
      <nav className="sticky top-0 bg-white shadow-md z-50 overflow-x-auto">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-2 sm:py-3 flex justify-center gap-4 sm:gap-6 text-sm sm:text-base md:text-lg font-semibold text-gray-700 whitespace-nowrap">
          <button onClick={() => setActiveTab("about")} className={activeTab === "about" ? "text-red-600" : "hover:text-red-600"}>About</button>
          {/* <button onClick={() => setActiveTab("event")} className={activeTab === "event" ? "text-red-600" : "hover:text-red-600"}>About Event</button> */}
          <button onClick={() => setActiveTab("speakers")} className={activeTab === "speakers" ? "text-red-600" : "hover:text-red-600"}>Speakers</button>
          <button onClick={() => setActiveTab("programme")} className={activeTab === "programme" ? "text-red-600" : "hover:text-red-600"}>Programme</button>
        </div>
      </nav>

      {/* Dynamic Section Rendering */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {activeTab === "about" && (
          <div>
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-red-700">
                About RBS & RCSS
              </h2>

              <img
                src={logo1}
                alt="RCMAS Logo"
                className="h-16 sm:h-20 md:h-24 mt-[-25px]"
              />
              <img
                src={logo2}
                alt="RBS Logo"
                className="h-16 sm:h-20 md:h-24 mt-[-25px]"
              />
            </div>

            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Rajagiri College of Social Sciences Cochin, Kerala is an autonomous institute established in 1955. The college is affiliated to Mahatma Gandhi University. The college has ranked 12 in All India College Category by NIRF 2024. It offers a variety of undergraduate, postgraduate, Research & diploma programs.<br></br>
Rajagiri Business School (RBS) is part of Rajagiri Group of Institutions and functions as an autonomous institution. RBS has ranked 91 in All India College Category by NIRF 2024. The campus, where the managers of tomorrow hone their skills, has been well-planned preserving the natural splendour of the environment to allow for academic development in communion with nature.
            </p>
            <br></br>
            <div>
            <h2 className="text-2xl sm:text-4xl font-bold text-red-700 mb-4">About Event</h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              A convergence of keynote talks, industry–academia interactions, cultural showcases, exhibitions, and  student-led engagements.The event features an Entrepreneurship Summit, Industry Fraternity Meet, and special sessions on music and artificial intelligence. Students engage through SDG quizzes, psychology exhibitions, curiosity zones, and a Kochi heritage walk.
            </p>
          </div>
            {/* <div className="mt-8 sm:mt-10 bg-red-50 border border-red-200 rounded-xl p-5 sm:p-6 shadow text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-3">
                Register Now
              </h3>
              <p className="text-gray-700 mb-4 text-base sm:text-lg">
                Be part of the Confluence School Meet and experience a day filled with learning, creativity,
                and culture.
              </p>
              <a
                href="https://forms.gle/your-registration-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow hover:bg-red-700 transition text-sm sm:text-base"
              >
                Registration Link
              </a>
            </div>  */}
          </div>
        )}

        {activeTab === "event" && (
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold text-red-700 mb-4">About Event</h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              A convergence of keynote talks, industry–academia interactions, cultural showcases, exhibitions, and  student-led engagements.The event features an Entrepreneurship Summit, Industry Fraternity Meet, and special sessions on music and artificial intelligence. Students engage through SDG quizzes, psychology exhibitions, curiosity zones, and a Kochi heritage walk.
            </p>
          </div>
        )}


{activeTab === "speakers" && (
  <div>
    <h2 className="text-2xl sm:text-4xl font-bold text-red-700 mb-8 text-center">
      Speakers
    </h2>

    <div className="flex justify-center">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center group w-72">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-4">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQFQriIVaEDvVw/profile-displayphoto-crop_800_800/B56Zf16nxqHYAI-/0/1752177476078?e=1759968000&v=beta&t=XujTO5666WTidbq6aw1iWJXjjqw7VQvZwroZ-K4iV1A"
            alt="Raul John Aju"
            className="w-full h-full rounded-full object-cover border-4 border-red-500 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
          Raul John Aju
        </h3>
        <p className="text-gray-600 text-sm sm:text-base mt-2">
          Founder, AI Realm (24th Sep)
        </p>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/rauljohnaju/?originalSubdomain=in"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  </div>
)}



        {activeTab === "programme" && (
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold text-red-700 mb-6">Programme Schedule</h2>
            <div className="relative border-l-2 sm:border-l-4 border-red-500 ml-4 sm:ml-6">
              {schedule.map((item, index) => (
                <div key={index} className="mb-8 sm:mb-10 ml-4 sm:ml-6 relative">
                  <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full mt-2 sm:mt-2.5 -left-5 sm:-left-6 border border-white"></div>
                  <div className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-lg sm:rounded-xl p-4 sm:p-5">
                    <p className="text-xs sm:text-sm text-gray-500">{item.time}</p>
                    <h3 className="text-base sm:text-lg font-semibold">{item.title}</h3>
                    {item.desc && <p className="text-gray-700 mt-2 italic text-sm sm:text-base">{item.desc}</p>}
                    {item.dept && (
                      <p className="text-xs sm:text-sm text-gray-600 mt-2">
                        <span className="font-medium">Department:</span> {item.dept}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Day3;
