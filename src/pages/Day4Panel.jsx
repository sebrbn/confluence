import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // 👈 for hamburger icons
import heroBg from "../assets/day4.jpeg"; // Background image
import logo1 from "../assets/rcmas.png"; // Institution logo
import s1 from "../assets/contact.png"; // Speaker photos
import s2 from "../assets/contact.png";
import s3 from "../assets/contact.png";

function Day4Panel() {
  const [activeTab, setActiveTab] = useState("aboutRcmas");
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { id: "aboutRcmas", label: "About" },
    // { id: "aboutEvents", label: "About Events" },
    { id: "speakers", label: "Speakers" },
    { id: "insight", label: "IndSight – Panel Discussion" },
    { id: "speranza", label: "Speranza 2025" },
    { id: "film", label: "Film Festival" },
    { id: "ideathon", label: "Ideathon" },
  ];

  return ( 
    <div className="min-h-screen bg-gray-50 text-gray-900 font-[Poppins]">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] sm:h-[65vh] bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40"></div>

        <div className="relative z-10 text-white px-4 sm:px-6 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            Rajagiri College of Management and Applied Sciences - Day 04
          </h1>
          <p className="mt-3 text-lg sm:text-xl md:text-2xl text-gray-200">
            IndSight | Speranza | Film Festival | Ideathon
          </p>
          <p className="mt-3 text-base sm:text-lg md:text-xl drop-shadow-md">
            24th September 2025
          </p>
        </div>

        {/* Back to Home */}
        <div className="absolute bottom-4 left-4 sm:left-6 z-10">
          <Link
            to="/"
            className="text-white text-xs sm:text-sm md:text-base hover:underline opacity-90"
          >
            Back to Home 
          </Link>
        </div>
      </div>

      {/* Sticky Navbar */}
      <div className="bg-white shadow-md sticky top-0 z-20">
        <div className="max-w-6xl mx-auto flex justify-center items-center px-4 sm:px-6 py-3">
          {/* Centered Tabs (Desktop) */}
          <div className="hidden md:flex gap-6 text-base font-semibold text-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? "text-red-600 border-b-2 border-red-600 pb-1"
                    : "hover:text-red-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Hamburger (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Dropdown Menu (Mobile) */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md px-4 py-3 flex flex-col gap-4 text-gray-700 font-semibold">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setMenuOpen(false); // close after click
                }}
                className={`text-left ${
                  activeTab === tab.id
                    ? "text-red-600 border-l-4 border-red-600 pl-2"
                    : "hover:text-red-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
        {/* About RCMAS */}
        {activeTab === "aboutRcmas" && (
  <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
    {/* Header with Logo */}
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-red-700">
        About RCMAS
      </h2>
      <img
        src={logo1}
        alt="RCMAS Logo"
        className="h-16 sm:h-20 md:h-24 -mt-6"
      />
    </div>

    {/* About RCMAS Text */}
    <p className="text-gray-700 leading-relaxed text-base sm:text-lg text-justify mb-6">
      Rajagiri College of Management and Applied Sciences, affiliated to
      the Mahatma Gandhi University, offers both undergraduate and
      post-graduate degrees conferred by MG University. Striving to
      become a global knowledge nest, this temple of learning aspires to
      mould individuals into responsible citizens with intellectual, social,
      and environmental awareness. The College has consistently performed
      well in University rankings and has received numerous awards for
      excellence in education. In the academic year 2023-24 alone, the College
      bagged 40 university ranks.
    </p>

    {/* About Events Header */}
    <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-4">
      About Events
    </h2>

    {/* About Events Text */}
    <p className="text-gray-700 leading-relaxed text-base sm:text-lg text-justify">
      IndSight, scheduled for 25th September 2025, will feature a panel
      discussion on{" "}
        Bridging Horizons: Shaping the Future of Industry and Academia
      , bringing together distinguished entrepreneurs and academic leaders,
      along with an exhibition of student innovations.
      Speranza 2025, to be held on 23rd September 2025 with the theme{" "}
      Ethnicity, is an international literature and cultural
      festival that offers a vibrant platform for school and college students
      through diverse competitions and performances.
      The Film Festival, organized by the Department of Animation from 24th
      to 26th August 2025, will present a curated showcase of creative works
      by emerging animators, welcoming audiences from all walks of life.
    </p>
  </div>
)}


        {/* About Events */}
        {activeTab === "aboutEvents" && (
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-4">
              About Events
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              IndSight, scheduled for 25th September 2025, will feature a panel
              discussion on{" "}
              <strong>
                Bridging Horizons: Shaping the Future of Industry and Academia
              </strong>
              , bringing together distinguished entrepreneurs and academic
              leaders, along with an exhibition of student innovations.
              <br />
              <br />
              Speranza 2025, to be held on 23rd September 2025 with the theme{" "}
              <strong>Ethnicity</strong>, is an international literature and
              cultural festival that offers a vibrant platform for school and
              college students through diverse competitions and performances.
              <br />
              <br />
              The Film Festival, organized by the Department of Animation from
              24th to 26th August 2025, will present a curated showcase of
              creative works by emerging animators, welcoming audiences from all
              walks of life.
            </p>
          </div>
        )}

        {/* Speakers */}
     {activeTab === "speakers" && (
  <div className="px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-8 text-center">
      Speakers
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
      {[
        {
          img: "https://cdn.theorg.com/22293786-f15a-4efd-80cb-2e87e7d4dda3_medium.jpg",
          name: "Ms. Nazneen Jehangir",
          role: "CEO, NeST Group",
          date: "25th Sep",
        },
        {
          img: "https://dentistchannel-online.s3.ap-south-1.amazonaws.com/photos/Mr_1692766927.%20John%20Kuriakose.%20John%20Kuriakose_1695018092.%20John%20Kuriakose",
          name: "Mr. John Kuriakose",
          role: "Founder & MD, DentCare",
          date: "25th Sep",
        },
        {
          img: "https://in.thedollarbusiness.com/assets/articles/2016/03/Sheela-Kochouseph-1-540.jpg",
          name: "Ms. Sheela Kochouseph",
          role: "Managing Director, V-Star Creations", 
          date: "25th Sep",
        },
      ].map((speaker, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center group"
        >
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4">
            <img
              src={speaker.img}
              alt={speaker.name}
              className="w-full h-full rounded-full object-cover border-4 border-red-500 group-hover:scale-105 transition-transform duration-300"
            />
            {/* Date Badge */}
            {/* <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-md">
              {speaker.date}
            </span> */}
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
            {speaker.name}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mt-2">{speaker.role}</p>
        </div>
      ))}
    </div>
  </div>
)}



   

        

        {activeTab === "insight" && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-4xl font-bold text-red-700 mb-6">
              🎓 IndSight – Panel Discussion
            </h2>
            <p className="mb-3 text-gray-700 text-lg">
              📅 <strong>25th September 2025</strong>
            </p>
            <p className="italic text-gray-600 mb-4 text-2xl">
              Theme:{" "}
              <span className="font-medium">
                Bridging Horizons – Shaping the Future of Industry and Academia
              </span>
            </p>
            <p className="mb-6 text-lg">
              Organized by:{" "}
              <strong>IEDC in association with the Placement Cell</strong>
            </p>
            <p className="mb-6 text-lg">
              The session brings together seasoned and emerging entrepreneurs to explore evolving  industry trends, the role of academia in fostering innovation, and strategies to strengthen collaboration between educational institutions and enterprises.This dynamic session will bring together seasoned entrepreneurs and emerging business leaders to explore:
            </p>

            {/* <h3 className="text-xl font-semibold mb-3">Key Focus Areas</h3> */}
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 text-lg">
              <li>Evolving trends in the industry</li>
              <li>Academia’s role in fostering innovation</li>
              <li>Strategies for deeper collaboration between academia & industry</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3"> Panelists</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 text-lg">
              <li>
                <strong>Ms. Nazneen Jehangir</strong> – CEO, NeST Group{" "}
              </li>
              <li>
                <strong>Mr. John Kuriakose</strong> – Founder & MD, DentCare{" "}
              </li>
              <li>
                <strong>Ms. Sheela Kochouseph</strong> – MD, V-Star Creations{" "}
              </li>
            </ul>

            <p className="text-gray-700 font-medium mb-4 text-lg">
              Exhibition cum Sale featuring student crafts & products.
            </p>

            {/* <Link
              to="/register"
              className="inline-block mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 text-lg"
            >
              Register Now
            </Link> */}
          </div>
        )}

        {activeTab === "speranza" && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-4xl font-bold text-red-700 mb-6">
            🌏 Speranza 2025 – Literature & Cultural Fest
            </h2>
            <p className="mb-3 text-gray-700 text-lg">
              📅 <strong>23rd September 2025</strong>
            </p>
            <p className="italic text-gray-600 mb-4 text-2xl">Theme: Ethnicity</p>
            <p className="mb-6 text-lg">
              Organized by: <strong>Department of English</strong>
            </p>
            <p className="mb-6 text-lg">
              Speranza 2025 is an international literature and cultural festival that celebrates diversity in literature and art across cultures.
            </p>

            <h3 className="text-2xl font-semibold mb-3">🎓 Events for School Students (Grade 9-12):</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 text-lg">
              <li>Lexus – Spell Bee</li>
              <li>Synthesia – Paint a Poem</li>
              <li>Odyssey – Declamation</li>
              <li>Rhapsody – Theme Dance</li>
            </ul>

            <p className="mb-6 text-gray-700 text-lg">
              Prizes: <br />
              All events (except Theme Dance): ₹2000 (1st), ₹1000 (2nd)<br />
              Theme Dance: ₹7000 (1st), ₹3000 (2nd)
            </p>

            <h3 className="text-2xl font-semibold mb-3">🎓 Events for College Students (UG & PG):</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 text-lg">
              <li>Comicus – Stand-up Comedy</li>
              <li>Rostrum – Mock Press</li>
              <li>Ethnova – Fashion Show</li>
              <li>Insnap – Photo Caption Contest (Online)</li>
            </ul>

            <p className="text-gray-700 mb-4 text-lg">
              Prizes:<br/>
              Cash prize :RS  7000 for first prize and RS 3000 for second prize<br />
              The Cash prize for individual events are RS 3000 for first prize and RS 1500 for second prize
            </p>

            {/* <Link
              to="/register"
              className="inline-block mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 text-lg"
            >
              Register Now
            </Link> */}
          </div>
        )}

        {activeTab === "film" && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-4xl font-bold text-red-700 mb-6">🎬 Film Festival</h2>
            <p className="mb-3 text-gray-700 text-lg">
              📅 <strong>24th – 26th August 2025</strong>
            </p>
            <p className="mb-6 text-lg">
              Organized by: <strong>Department of Animation</strong>
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              A 3-day festival featuring creative works from emerging animators.
              Open to all with a minimal registration fee.
            </p>

            {/* <Link
              to="/register"
              className="inline-block mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 text-lg"
            >
              Register Now
            </Link> */}
          </div>
        )}

        {activeTab === "ideathon" && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-4xl font-bold text-red-700 mb-6">💡 Ideathon</h2>
            <p className="text-gray-700 mb-4 text-lg">
              An ideathon is currently in the planning phase — details will be
              shared soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Day4Panel;
