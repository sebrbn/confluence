import React, { useState } from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/bg1.jpeg";
import logo from "../assets/rvcs.png";
import s1 from "../assets/contact.png";
import s2 from "../assets/contact.png";
import Footer from "../components/Footer";
import { Linkedin } from "lucide-react"; // 👈 Add this at the top


function Day1() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-[Poppins]">
      {/* Hero Section */}
      <div
        className="relative h-[55vh] md:h-[60vh] bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        <div className="relative z-10 text-white max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Confluence School Meet - Day 1
          </h1>
          <p className="mt-3 text-lg sm:text-xl md:text-3xl drop-shadow-md">
            The Ultimate School Student Convergence
          </p>
          <p className="mt-3 text-base sm:text-lg md:text-2xl drop-shadow-md">
            Rajagiri Viswajyothi College of Arts & Applied Sciences, Perumbavoor
          </p>
          <p className="mt-2 text-sm sm:text-base md:text-xl font-medium drop-shadow-md">
            📅 22nd September 2025 | 🕤 9:30 AM – 3:30 PM
          </p>
        </div>

        {/* Back to Home */}
        <div className="absolute bottom-4 left-4 sm:left-6 z-10">
          <Link
            to="/"
            className="text-white text-xs sm:text-sm md:text-base hover:underline"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Internal Navbar */}
      <nav className="sticky top-0 bg-white shadow-md z-50 overflow-x-auto">
        <div className="flex justify-start md:justify-center gap-4 sm:gap-6 px-4 py-3 text-sm sm:text-base md:text-lg font-semibold text-gray-700 whitespace-nowrap">
          {[
            { id: "about", label: "About" },
            // { id: "event", label: "About Event" },
            { id: "speakers", label: "Speakers" },
            { id: "programme", label: "Programme Schedule" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={
                activeTab === tab.id
                  ? "text-red-600"
                  : "hover:text-red-600 transition"
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Dynamic Section Rendering */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        {/* About Section */}
        {activeTab === "about" && (
          <div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-red-700">
                  About RVCAS
                </h2>
                <img
                  src={logo}
                  alt="Institution Logo"
                  className="h-16 sm:h-20 md:h-24 -mt-6"
                />
              </div>


            <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl text-justify">
              RVCAS, a prominent institution under the management of the CMI
              Fathers within Rajagiri Vidyapeetham, is renowned for its academic
              excellence and innovative teaching methods. Offering a range of
              undergraduate courses, RVCAS is dedicated to helping students
              achieve their academic and professional aspirations. With
              experienced management, dedicated faculty, and a focus on holistic
              development, RVCAS empowers students to excel and tackle
              real-world challenges.
            </p>
            <div>
            <br></br>
            <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-4">
              About Event
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl text-justify">
              This meet is a platform designed to inspire, engage, and empower
              school students by bringing them together under one roof for a
              blend of learning, creativity, and fun. It provides students the
              opportunity to showcase talent through games, competitions, and
              creative sessions. Learn and explore through interactive
              activities and exposure to industry and cultural icons. Collaborate
              and connect with peers, fostering teamwork and new friendships.
              Celebrate creativity and culture with music, innovation, and
              performances.
            </p>
          </div>

            {/* <div className="mt-8 sm:mt-10 bg-red-50 border border-red-200 rounded-xl p-6 shadow text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-3">
                Register Now
              </h3>
              <p className="text-gray-700 mb-4 text-base sm:text-lg">
                Be part of the Confluence School Meet and experience a day
                filled with learning, creativity, and culture.
              </p>
              <a
                href="https://forms.gle/your-registration-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg shadow hover:bg-red-700 transition"
              >
                Registration Link
              </a>
            </div> */}
          </div>
        )}

        {/* About Event */}
        {activeTab === "event" && (
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-4">
              About Event
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl">
              This meet is a platform designed to inspire, engage, and empower
              school students by bringing them together under one roof for a
              blend of learning, creativity, and fun. It provides students the
              opportunity to showcase talent through games, competitions, and
              creative sessions. Learn and explore through interactive
              activities and exposure to industry and cultural icons. Collaborate
              and connect with peers, fostering teamwork and new friendships.
              Celebrate creativity and culture with music, innovation, and
              performances.
            </p>
          </div>
        )}

        {/* Speakers */}

{activeTab === "speakers" && (
  <div>
    <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-8 text-center">
      Speakers
    </h2>

    {/* Flexbox centered layout */}
    <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
      {[
        {
          img: "https://media.licdn.com/dms/image/v2/D5603AQH30f4AAMLeLw/profile-displayphoto-shrink_200_200/B56ZTcgvUKGoAY-/0/1738866358533?e=2147483647&v=beta&t=L6xJe99uUQQakaWM3-KGrDJmLN7aTiMnydPxtWC-iBs",
          name: "Mr. Subham Gupta",
          role: "Innovation Lead, Atal Innovation Mission, NITI Aayog",
          linkedin: "https://www.linkedin.com/in/shubham-gupta2692/?originalSubdomain=in",
        },
        {
          img: "https://media.licdn.com/dms/image/v2/C4D03AQFPXqDicgCATg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1662557267305?e=1759968000&v=beta&t=LnM_xEb66yEWNjmRkAF7NXp5WaTcvlxG0fGRWU-Jda8",
          name: "Mr. Suman Pandit",
          role: "Innovation Lead, Atal Innovation Mission, NITI Aayog",
          linkedin: "https://www.linkedin.com/in/suman28pandit/?originalSubdomain=in",
        },
      ].map((speaker, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center group w-72"
        >
          {/* Speaker Image */}
          <img
            src={speaker.img}
            alt={speaker.name}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-red-500 group-hover:scale-105 transition-transform duration-300"
          />

          {/* Speaker Info */}
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4">
            {speaker.name}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            {speaker.role}
          </p>

          {/* LinkedIn Button */}
          {speaker.linkedin && (
            <a
              href={speaker.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 text-sm font-medium text-white bg-sky-600 rounded-full hover:bg-sky-700 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              Connect
            </a>
          )}
        </div>
      ))}
    </div>
  </div>
)}


        {/* Programme */}
        {activeTab === "programme" && (
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-8">
              Programme Schedule
            </h2>

            {/* Session 1 */}
            <div className="mb-10 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                Session 1 – Morning
              </h3>
              <div className="relative border-l-4 border-red-500 ml-4 sm:ml-6">
                {[
                  { time: "9:30 AM", title: "Registration" },
                  {
                    time: "10:00 AM",
                    title: "Inauguration & Keynote Address",
                    desc: "Invited Speaker",
                  },
                  { time: "10:45 AM", title: "Tea Break" },
                  {
                    time: "11:30 AM – 12:45 PM",
                    title: "Game Session",
                    desc: ["Hackathon", "Monopoly", "Criminal Investigation"],
                  },
                  { time: "12:45 PM – 1:45 PM", title: "Lunch Break" },
                ].map((item, index) => (
                  <div key={index} className="mb-8 ml-4 sm:ml-6">
                    <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full mt-2 sm:mt-2.5 -left-1 sm:-left-2 border border-white"></div>
                    <div className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-xl p-4 sm:p-5">
                      <p className="text-xs sm:text-sm text-gray-500">
                        {item.time}
                      </p>
                      <h3 className="text-base sm:text-lg font-semibold">
                        {item.title}
                      </h3>
                      {Array.isArray(item.desc) ? (
                        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm sm:text-base">
                          {item.desc.map((d, idx) => (
                            <li key={idx}>{d}</li>
                          ))}
                        </ul>
                      ) : (
                        item.desc && (
                          <p className="text-gray-700 mt-2 italic text-sm sm:text-base">
                            {item.desc}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Session 2 */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                Session 2 – Afternoon
              </h3>
              <div className="relative border-l-4 border-red-500 ml-4 sm:ml-6">
                {[
                  {
                    time: "1:45 PM",
                    title: "Music Band Inauguration & Live Show",
                  },
                  {
                    time: "2:30 PM",
                    title: "Chief Guest: Mr. Berny Puthenveettil",
                    desc: "Music Director",
                  },
                  { time: "3:30 PM", title: "Tea Break" },
                ].map((item, index) => (
                  <div key={index} className="mb-8 ml-4 sm:ml-6">
                    <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full mt-2 sm:mt-2.5 -left-1 sm:-left-2 border border-white"></div>
                    <div className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-xl p-4 sm:p-5">
                      <p className="text-xs sm:text-sm text-gray-500">
                        {item.time}
                      </p>
                      <h3 className="text-base sm:text-lg font-semibold">
                        {item.title}
                      </h3>
                      {item.desc && (
                        <p className="text-gray-700 mt-2 italic text-sm sm:text-base">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-20 sm:mt-32">
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Day1;
 