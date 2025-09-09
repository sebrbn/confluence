import React from "react";
import ConferenceNavbar from "../../components/ConferenceNavbar"; 

export default function ConferenceThemes() {
  return (
    <div className="bg-gray-50 text-gray-800 font-[Poppins] min-h-screen">
      <ConferenceNavbar />
      
      <section className="max-w-6xl mx-auto py-16 px-6 mt-20">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-green-800 border-b-4 border-green-600 pb-2">
          Themes / Tracks
        </h2>
        <p className="mt-4 text-gray-600">
          The conference will cover a wide range of interdisciplinary topics 
          promoting sustainability and innovation in engineering and technology.
        </p>

        {/* Themes List */}
        <nav aria-label="Conference themes">
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {[
              "Sustainable Energy & Green Technologies",
              "Advanced Materials for Clean Energy Technologies",
              "Sustainable Urban Planning and Architecture",
              "IoT for Smart Agriculture and Environmental Monitoring",
              "Renewable Energy Integration & Grid Stability",
              "Green Manufacturing and Sustainable Product Design",
              "Sustainable Transportation Technologies",
              "ICT for Sustainable Development in Smart Cities",
              "Policy and Standards for Sustainable Engineering",
              "Education and Social Dimensions of Sustainability",
              "Innovations to achieve Sustainable Development Goals"
            ].map((theme, index) => (
              <li
                key={index}
                className="bg-white shadow-md rounded-2xl p-4 border border-gray-200 hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                {theme}
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </div>
  );
}
