import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import heroBg from "../assets/bg2.jpeg"; 
import logo1 from "../assets/rcss.png"; 
import logo2 from "../assets/rbs.png"; 
import s1 from "../assets/contact.png"; 
import s2 from "../assets/contact.png"; 
import s3 from "../assets/contact.png"; 

function Day2() {
  const [activeTab, setActiveTab] = useState("about");

  const schedule = [
    { time: "10:00 AM – 4:00 PM", title: "Psychology Exhibition", venue: "Chavara Hall", dept: "Psychology" },
    { time: "10:30 AM – 11:30 AM", title: "Inauguration", desc: "By Dr. Shashi Tharoor (MP)", venue: "KE Auditorium", dept: "Common Programme" },
    { time: "12:00 PM – 1:00 PM", title: "Guest Talk", desc: "By Dr. S. Somnath (Former ISRO Chairman)", venue: "KE Auditorium", dept: "Common Programme" },
    { time: "2:00 PM – 4:00 PM", title: "Talk by a Prominent Resource Person", venue: "KE Auditorium", dept: "Common Programme" },
    { time: "2:30 PM – 3:30 PM", title: "Talk Series", desc: "Bonny Thomas – Vlogger / Socio-Cultural Leader", venue: "Chavara Hall", dept: "Social Work" },
    { time: "2:30 PM – 4:30 PM", title: "Live Quiz on SDG", venue: "Chavara Hall", dept: "Social Work" },
    { time: "2:30 PM – 4:30 PM", title: "Entrepreneurship Summit", desc: "Collaboration between BBA, PGDM, MBA, and MA HRM – Focus on Women Entrepreneurship", venue: "RBS Auditorium", dept: "MBA, MAHRM, PGDM & BBA" },
    { time: "3:45 PM – 4:30 PM", title: "Kochi Heritage Walk – Capturing the Culture in a Reel", desc: "Interview with Aflu (YouTuber)", venue: "Chavara Hall", dept: "Social Work" },
    { time: "5:30 PM – 6:30 PM", title: "Industry Fraternity Meet", desc: "Collaboration with SHRM, NIPM – Fireside Chat with Renowned Practitioner", venue: "RBS Auditorium / KE Auditorium", dept: "MBA, MAHRM, PGDM & BBA" },
    { time: "6:30 PM onwards", title: "Cultural Night + Dinner", venue: "RBS Auditorium / KE Auditorium", dept: "Common Programme" },
    { time: "Cultural Performance & Ramp Walk", venue: "KE Auditorium", dept: "Office of International Relations" },
    { time: "Full Day", title: "Interactive Game Stalls", venue: "Chavara Hall", dept: "Commerce and Professional Studies" },
    { time: "11:00 AM – 12:00 PM", title: "Talk: How Music Heals?", desc: "By Vaishnav Gautam (Musician – Instagram & YouTube)", venue: "Chavara Hall", dept: "Social Work" },
    { time: "Full Day (Sep 23 & 24)", title: "Curiosity Zones", venue: "Chavara Hall", dept: "Computer Science" },
    { time: "Full Day", title: "International Book Exhibition & Meet the Author", venue: "Chavara Hall", dept: "Languages" },
    { time: "Full Day", title: "Handicraft Items Stall, Games, Hair Styling", venue: "Chavara Hall", dept: "Office of International Relations" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-[Poppins]">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-white px-4 sm:px-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            Confluence Conclave 2025 – Day 2
          </h1>
          <p className="mt-2 text-base sm:text-lg md:text-2xl font-medium drop-shadow-md">
            Rajagiri Business School & Rajagiri College of Social Sciences
          </p>
          <p className="mt-3 text-sm sm:text-lg md:text-xl drop-shadow-md">
            📅 23rd September 2025
          </p>
        </div>

        {/* Back to Home */}
        <div className="absolute bottom-4 left-4 sm:left-6 z-10">
          <Link to="/" className="text-white text-xs sm:text-sm md:text-base hover:underline">
            Back to Home
          </Link>
        </div>
      </div>

      {/* Internal Navbar */}
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base md:text-lg font-semibold text-gray-700">
          <button onClick={() => setActiveTab("about")} className={activeTab === "about" ? "text-red-600" : "hover:text-red-600"}>About</button>
          {/* <button onClick={() => setActiveTab("event")} className={activeTab === "event" ? "text-red-600" : "hover:text-red-600"}>About Event</button> */}
          <button onClick={() => setActiveTab("speakers")} className={activeTab === "speakers" ? "text-red-600" : "hover:text-red-600"}>Speakers</button>
          <button onClick={() => setActiveTab("programme")} className={activeTab === "programme" ? "text-red-600" : "hover:text-red-600"}>Programme</button>
        </div>
      </nav>

      {/* Dynamic Section Rendering */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
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

            {/* Registration */}
            {/* <div className="mt-8 sm:mt-10 bg-red-50 border border-red-200 rounded-xl p-6 shadow text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-3">Register Now</h3>
              <p className="text-gray-700 mb-4 text-base sm:text-lg">
                Be part of the Confluence School Meet and experience a day filled with learning, creativity, and culture.
              </p>
              <a
                href="https://forms.gle/your-registration-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow hover:bg-red-700 transition"
              >
                Registration Link
              </a>
            </div> */}
          </div>
        )}

        {activeTab === "event" && (
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-4">About Event</h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              A convergence of keynote talks, industry–academia interactions, cultural showcases, exhibitions, and  student-led engagements.The event features an Entrepreneurship Summit, Industry Fraternity Meet, and special sessions on music and artificial intelligence. Students engage through SDG quizzes, psychology exhibitions, curiosity zones, and a Kochi heritage walk.
            </p>
          </div>
        )}

     {activeTab === "speakers" && (
  <div>
    <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-8 text-center">
      Speakers
    </h2>

    {/* Flexbox to center cards */}
    <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
      {[
        {
          img: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Shashi_Tharoor_2025.jpg",
          name: "Dr. Shashi Tharoor",
          role: "Member of Parliament, Trivandrum",
        },
        {
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/S._Somanath%2C_Director_of_VSSC%2C_ISRO%2C_speaks_during_the_Heads_of_Agency_Plenary_of_the_70th_International_Astronautical_Congress_%28cropped%29.jpg/800px-S._Somanath%2C_Director_of_VSSC%2C_ISRO%2C_speaks_during_the_Heads_of_Agency_Plenary_of_the_70th_International_Astronautical_Congress_%28cropped%29.jpg",
          name: "Dr. S. Somanath",
          role: "Former ISRO Chairman",
        },
      ].map((speaker, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center group w-72"
        >
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4">
            <img
              src={speaker.img}
              alt={speaker.name}
              className="w-full h-full rounded-full object-cover border-4 border-red-500 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
            {speaker.name}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            {speaker.role}
          </p> 
        </div>
      ))}
    </div>
  </div>
)}



        {activeTab === "programme" && (
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-6">Programme Schedule</h2>
            <div className="relative border-l-4 border-red-500 ml-4 sm:ml-6">
              {schedule.map((item, index) => (
                <div key={index} className="mb-8 sm:mb-10 ml-4 sm:ml-6">
                  <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full mt-2.5 -left-2 border border-white"></div>
                  <div className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-xl p-4 sm:p-5">
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

export default Day2;
