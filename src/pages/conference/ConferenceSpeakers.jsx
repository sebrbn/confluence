// src/pages/ConferenceSpeakers.jsx
import React from "react";
import Clemens from "../../assets/Clemens.jpeg"; 
import Frank from "../../assets/Frank.jpg";
import ConferenceNavbar from "../../components/ConferenceNavbar"; 


export default function ConferenceSpeakers() {
  return (
    <div className="bg-gray-50 text-gray-800 font-[Poppins]">
              <ConferenceNavbar />
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-green-800 border-b-4 border-green-600 pb-2">
        Keynote Speakers
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col md:flex-row  gap-6">
          <img
            src={Clemens}
            alt="Prof. Dr. Clemens Bulitta"
            className="w-32 h-32 object-cover border-4 border-green-600 shadow-md"
          />
          <div>
            <h3 className="text-xl font-semibold text-green-700">
              Prof. Dr. Clemens Bulitta
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              Professor Bulitta has broad, international experience and knowledge in healthcare, the medical technology industry and academia. He graduated from Heidelberg University Medical School in 1994 and trained as a surgeon at the University Hospitals in Essen and Mainz, Germany from 1994 until 1999. After a research fellowship from 1999-2001 at the Massachusetts General Hospital of Harvard University in Boston USA we worked for Siemens Healthineers from 2001 until 2012 in various management positions, including the areas of healthcare consulting, business development, clinical marketing, product and project management. Since September 2012 he is appointed as full professor for “Diagnostic Systems and Medical Technology Management” at the Technical University of Applied Sciences Amberg-Weiden, Germany, where he served as Dean of the Department Industrial Engineering and Health from 2017 until 2021. Since October 2021 he is the President of the Technical University of Applied Sciences Amberg-Weiden.
            </p>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col md:flex-row  gap-6">
          <img
            src={Frank}
            alt="Prof. Frank Späte"
            className="w-32 h-32 object-cover border-4 border-green-600 shadow-md"
          />
          <div>
            <h3 className="text-xl font-semibold text-green-700">Prof. Frank Späte</h3>
            <p className="text-gray-700 text-sm mt-2">
              Prof. Frank Späte is a Professor at the East Bavarian Technical University of Applied Sciences Amberg-Weiden, specializing in Energy Efficient Buildings and Renewable Energies. He has extensive experience in academia, research, and industry, having led international R&D projects and served in leadership roles in both academic institutes and companies in the renewable energy sector. Prof. Späte is the author of numerous publications, including the standard reference book “Solaranlagen”, and currently serves as the President of the German Solar Energy Society (DGS).
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
