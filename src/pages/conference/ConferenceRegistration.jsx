// src/pages/ConferenceRegistration.jsx
import React from "react";
import ConferenceNavbar from "../../components/ConferenceNavbar";

export default function ConferenceRegistration() {
  return (
    <div className="bg-gray-50 text-gray-800 font-[Poppins] min-h-screen">
      <ConferenceNavbar />

      {/* Hero / Intro Section */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 border-b-4 border-green-600 pb-2 inline-block mb-4">
            Registration / Paper Submission
          </h2>
          <p className="text-gray-700 mt-4">
            Please fill in your details and upload your paper (.docx or .pdf). Ensure your submission follows the conference guidelines.
          </p>

          {/* Optional Links */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://tinyurl.com/yjavuavb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition text-center"
            >
              Payment Link
            </a>
            <a
              href="https://dcs.google.com/forms/d/e/1FAIpQLSfXskkT_643-bsOV1BHNja2V8mrgeqSuB-ZZRc4ZbITWFLrnA/viewform?usp=headero"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-50 text-green-700 border border-green-600 px-6 py-3 rounded-lg shadow hover:bg-green-100 transition text-center"
            >
              Registration Form
            </a>
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <form
          className="space-y-6 bg-green-50 p-8 rounded-xl shadow"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Paper submitted successfully ✅");
          }}
        >
          <div>
            <label className="block text-sm font-medium text-green-800 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="Enter your full name"
              className="w-full border border-green-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-green-800 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full border border-green-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-green-800 mb-1">
              Upload Paper
            </label>
            <input
              type="file"
              accept=".doc,.docx,.pdf"
              required
              className="w-full border border-green-300 rounded-lg px-4 py-2 bg-white cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-green-600 file:text-white hover:file:bg-green-700"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
          >
            Submit Paper
          </button>
        </form>
       
      </section>
    </div>
  );
}
