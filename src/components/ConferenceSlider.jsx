// src/pages/ConferenceSpeakers.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Clemens from "../assets/Clemens.jpeg";
import Frank from "../assets/Frank.jpg";
import Fern from "../assets/fern.png"; 

const slides = [
  {
  type: "speaker",
  name: "Prof. Dr. med. Clemens Bulitta",
  title: "President of the Technical University of Applied Sciences Amberg-Weiden, Germany",
  image: Clemens, // (see email for photo of Prof Clemens)
  description: `Professor Bulitta has broad, international experience and knowledge in healthcare, the medical technology industry and academia. He graduated from Heidelberg University Medical School in 1994 and trained as a surgeon at the University Hospitals in Essen and Mainz, Germany from 1994 until 1999. After a research fellowship from 1999–2001 at the Massachusetts General Hospital of Harvard University in Boston, USA, he worked for Siemens Healthineers from 2001 until 2012 in various management positions, including the areas of healthcare consulting, business development, clinical marketing, product and project management. Since September 2012, he has been appointed as full professor for “Diagnostic Systems and Medical Technology Management” at the Technical University of Applied Sciences Amberg-Weiden, Germany, where he served as Dean of the Department Industrial Engineering and Health from 2017 until 2021. Since October 2021, he is the President of the Technical University of Applied Sciences Amberg-Weiden.`
},
{
  type: "speaker",
  name: "Prof. Frank Späte",
  title: "President of the German Solar Energy Society (DGS) | Professor, Department of Mechanical Engineering and Environmental Technology, Competence Center Combined Heat and Power, Amberg-Weiden, Germany",
  image: Frank, // (see email for photo of Prof. Frank)
  description: `Prof. Frank Späte is a Professor at the East Bavarian Technical University of Applied Sciences Amberg-Weiden, specializing in Energy Efficient Buildings and Renewable Energies. He has extensive experience in academia, research, and industry, having led international R&D projects and served in leadership roles in both academic institutes and companies in the renewable energy sector. Prof. Späte is the author of numerous publications, including the standard reference book “Solaranlagen”, and currently serves as the President of the German Solar Energy Society (DGS).`
},

 
  { type: "dates" },
];

export default function ConferenceSpeakers() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 font-[Poppins]">
      <section className="w-full py-16 px-6">
        {/* Slider with fern overlay */}
        <div className="relative bg-green-50 rounded-xl shadow-lg p-6 w-full overflow-hidden mb-0">
          {/* Fern background overlay */}
          <img
            src={Fern}
            alt="Fern Decoration"
            className="absolute -top-10 -right-10 w-48 opacity-20 pointer-events-none select-none"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-8 items-center relative z-10"
            >
              {slides[index].type === "speaker" ? (
                <>
                  <img
                    src={slides[index].image}
                    alt={slides[index].name}
                    className="w-40 h-40 object-cover border-4 border-green-600 shadow-md rounded-lg"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-green-700">
                      {slides[index].name}
                    </h3>
                    <p className="text-gray-700 text-l mt-3 leading-relaxed text-justify">
                      {slides[index].description}
                    </p>
                  </div>
                </>
              ) : (
                <div className="w-full text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-green-700 mb-4">
                    Important Dates
                  </h3>
                  <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                    <li>
                      <span className="font-semibold">Abstract Submission:</span>{" "}
                      8th September 2025
                    </li>
                    <li>
                      <span className="font-semibold">Acceptance Notification:</span>{" "}
                      12th September 2025
                    </li>
                    <li>
                      <span className="font-semibold">Registration and Full Paper Submission :</span>{" "}
                      15th September 2025
                    </li>
                  </ul>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-green-700" : "bg-green-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
