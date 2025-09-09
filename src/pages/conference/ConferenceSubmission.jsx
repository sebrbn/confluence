// src/pages/ConferenceSubmission.jsx
import React from "react";
import ConferenceNavbar from "../../components/ConferenceNavbar";
import Footer from "../../components/Footer";


export default function ConferenceSubmission() {
  return (
    <div className="bg-gray-50 text-gray-800 font-[Poppins] min-h-screen flex flex-col">
      <ConferenceNavbar />

      <section className="max-w-6xl mx-auto py-16 px-6 space-y-12">
        <h2 className="text-3xl font-bold text-green-800 border-b-4 border-green-600 pb-2">
          Submission Guidelines
        </h2>

        <p className="text-gray-700 leading-relaxed">
          We invite faculty, researchers, industry professionals, and students to submit their original research work in relevant fields.  
          Papers should be restricted to <strong>6 pages (minimum 4 pages)</strong> with an abstract of maximum 250 words and 5 keywords. Authors are requested to limit the similarity index to <strong>20%</strong>.
        </p>

        {/* Abstract Template Card */}
        <div className="bg-white border border-green-200 shadow-md rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Abstract Template</h3>
            <p className="text-gray-600 text-sm">Download the abstract template in Word format to prepare your submission.</p>
          </div>
          <a
            href="./src/files/Abstract Template.docx"
            download
            className="inline-block bg-green-700 text-white px-6 py-2 rounded-lg shadow hover:bg-green-900 transition"
          >
            Download Word
          </a>
        </div>

        {/* Paper Template Card */}
        <div className="bg-white border border-green-200 shadow-md rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Paper Template</h3>
            <p className="text-gray-600 text-sm">Download the full paper template in Word format for your submission.</p>
          </div>
          <a
            href="./src/files/Paper Template.docx"
            download
            className="inline-block bg-green-700 text-white px-6 py-2 rounded-lg shadow hover:bg-green-900 transition"
          >
            Download Word
          </a>
        </div>
        {/* Abstract Submission */}
        <p className="text-gray-700 leading-relaxed">
          Please submit your abstracts via email to:{" "}
          <a
            href="mailto:icasd@rajagiritech.edu.in"
            className="text-green-700 underline"
          >
            icasd@rajagiritech.edu.in
          </a>
        </p>



        {/* Extra spacing at bottom */}
        <div className="h-32"></div>
      </section>
            <Footer />
      
    </div>
  );
}
