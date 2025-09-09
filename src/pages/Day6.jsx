import React, { useState } from "react";
import { Link } from "react-router-dom"; 
  import heroBg from "../assets/bg3.jpeg"; // 👈 Background for Day 6
import logo1 from "../assets/rset2.png"; // 👈 RSET logo

function Day6Panel() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About" },
    // { id: "event", label: "About Event" },
    { id: "speakers", label: "Speakers" },
    { id: "programme", label: "Programme Schedule" },
  ];
 
  const schedule = [
    {
      session: "Morning Session",
      events: [
        {
          time: "9:30 AM",
          title: "Inauguration",
          desc: "Opening ceremony of the event.",
        },
        {
          time: "10:00 AM",
          title: "Panel Discussion",
          desc: "Theme: Future of Sovereignty and Self-Reliance",
        },
      ],
    },
    {
      session: "Afternoon Session",
      events: [
        {
          time: "1:00 PM",
          title: "Workshops & Exhibitions",
          desc: "Interactive workshops and engaging exhibitions.",
        },
      ],
    },
    {
      session: "Evening Session",
      events: [
        {
          time: "6:30 PM onwards",
          title: "Jubilee Inauguration & Cultural Programmes",
          desc: "Evening celebrations with cultural performances.",
        },
      ],
    },
  ];

  const speakers = [
    {
      name: "Shri.Pinarayi Vijayan",
      role: "Honourable Chief Minister of Kerala",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRKs00qy2nkoHdo9HyOJSefo1cNNYDfNc8jfHyaIufiLoYZnt_2Ef1j2kAdtjD07gG50cAkNYZOmfwIYemliACkyw",
    },
    {
      name: "Shri.P.Rajeev",
      role: "Honourable Minister for Industry, Government of Kerala",
      img: "https://niyamasabha.nic.in/images/member/p-rajeev_member_15_105.jpg",
    },
    {
      name: "Shri.Hibi Eden",
      role: "Member of Parliament from the Ernakulam constituency",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9E_00aDbeNq9yr4ln_0M8CTZ5vX6omqg4Gw&s",
    },
    {
      name: "Mr.V.K.Mathews",
      role: "Chairman IBS Software",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2XeFXBiE9vHoN7pGwipfWoqhNkAKSyv02HA&s",
    },
    // {
    //   name: "Mr.Rajesh Nambiar",
    //   role: "President NASCOMM",
    //   img: "https://media.assettype.com/digitalterminal%2F2024-08-22%2Fm62hpws6%2FRajesh-Nambiar.jpg?w=1024&auto=format%2Ccompress&fit=max",
    // },
    {
      name: "Group Captain Prashanth Balakrishnan Nair",
      role: "Member of India's Axiom 4 Space Mission",
      img: "https://www.bharat-rakshak.com/indianairforce/images/officers/25284.jpg",
    },
    {
      name: "Jakes Bejoy",
      role: "Music Director and Alumnus & Professor of Practice, RSET",
      img: "https://www.futuresummit.in/wp-content/uploads/2025/01/jakes_bijoy.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-[Poppins]">
      {/* Hero Section */}
      <div
        className="relative h-[50vh] md:h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg">
            INDUSTRY - ACADEMIA MEET - Day 06
          </h1>
          <p className="mt-2 sm:mt-4 text-lg sm:text-2xl md:text-3xl drop-shadow-md">
            Future of Sovereignty and Self-Reliance
          </p>
          <h2 className="mt-2 sm:mt-4 text-base sm:text-xl md:text-2xl drop-shadow-md">
            Rajagiri School of Engineering & Technology
          </h2>
          <p className="mt-1 sm:mt-2 text-sm sm:text-lg md:text-xl font-medium drop-shadow-md">
            📅 27th September 2025
          </p>
        </div>
        <div className="absolute bottom-4 left-4 sm:left-6 z-10">
          <Link to="/" className="text-white text-sm md:text-base hover:underline">
            Back to Home
          </Link>
        </div>
      </div>

      {/* Sticky Navbar */}
      <div className="bg-white shadow-md sticky top-0 z-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap justify-center gap-4 sm:gap-6 text-base md:text-lg font-semibold text-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 rounded-md transition ${
                activeTab === tab.id ? "text-red-600 bg-red-50" : "hover:text-red-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* About RSET */}
        {activeTab === "about" && (
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 gap-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-red-700">About RSET</h2>
              <img
                src={logo1}
                alt="RSET Logo"
                className="h-20 sm:h-24 object-contain filter brightness-110 -mt-6"
              />
            </div>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg text-justify">
              Rajagiri School of Engineering & Technology (RSET)- Autonomous, established in 2001,
              and is celebrating its Silver Jubilee in 2025-26 academic year. RSET is accredited with
              A grade by NAAC in the second cycle, and seven undergraduate programmes are NBA Tier 1
              accredited. RSET is ranked first among private engineering colleges in Kerala in Kerala
              Institutional Ranking Framework (KIRF) 2024 and 4th best in all categories. The latest
              addition to the infrastructure facilities of RSET is the newly constructed multi-purpose
              auditorium with international standards, which has a capacity to seat 2500 people.
            </p>
            <br/>
            <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-4">About Event</h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg text-justify">
              The Industry–Academia Meet serves as a dynamic platform that brings together leaders
              from academia, industry, and research to exchange knowledge, explore collaborations,
              and foster innovation. The meet focuses on bridging the gap between theoretical
              learning and practical application, empowering students and institutions to align
              with evolving industry needs.
            </p>
            
            {/* <div className="mt-6 sm:mt-10 bg-red-50 border border-red-200 rounded-xl p-4 sm:p-6 shadow text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-2">Register Now</h3>
              <p className="text-gray-700 mb-4 text-base sm:text-lg">
                Be part of the Confluence School Meet and experience a day filled with learning, creativity,
                and culture.
              </p>
              <a
                href="https://forms.gle/your-registration-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow hover:bg-red-700 transition"
              >
                Registration Link
              </a>
            </div>  */}
          </div>
        )}

        {/* About Event */}
        {activeTab === "event" && (
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-4">About Event</h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              The Industry–Academia Meet serves as a dynamic platform that brings together leaders
              from academia, industry, and research to exchange knowledge, explore collaborations,
              and foster innovation. The meet focuses on bridging the gap between theoretical
              learning and practical application, empowering students and institutions to align
              with evolving industry needs.
            </p>
          </div>
        )}

        {/* Speakers */}
        {activeTab === "speakers" && (
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-6 text-center">Speakers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 sm:p-6 flex flex-col items-center text-center group"
                >
                  <div className="relative w-32 h-32 mb-4">
                    <img
                      src={speaker.img}
                      alt={speaker.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-red-500 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{speaker.name}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mt-1">{speaker.role}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Programme Schedule */}
        {activeTab === "programme" && (
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-6">Programme Schedule</h2>
            <div className="relative border-l-4 border-red-500 ml-4 sm:ml-6">
              {schedule.map((sessionItem, sIndex) => (
                <div key={sIndex} className="mb-8 sm:mb-12">
                  <div className="relative mb-4">
                    <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full -left-2 border border-white top-1"></div>
                    <h3 className="text-xl sm:text-2xl font-bold text-red-600 ml-6">{sessionItem.session}</h3>
                  </div>
                  {sessionItem.events.map((item, index) => (
                    <div key={index} className="mb-6 sm:mb-10 ml-6 relative">
                      <div className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-xl p-4 sm:p-5">
                        <p className="text-sm sm:text-lg text-gray-500">{item.time}</p>
                        <h4 className="text-lg sm:text-xl font-semibold">{item.title}</h4>
                        {item.desc && <p className="text-gray-700 mt-1 sm:mt-2 italic text-sm sm:text-base">{item.desc}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Day6Panel;
