import React, { useState } from "react";

function Day4() {
  const [activeTab, setActiveTab] = useState("insight");

  const tabs = [
    { id: "insight", label: "IndSight – Panel Discussion" },
    { id: "speranza", label: "Speranza 2025" },
    { id: "film", label: "Film Festival" },
    { id: "ideathon", label: "Ideathon" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-[Poppins]">
      {/* Navbar */}
      <div className="bg-red-600 text-white py-4 shadow-md">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4 px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeTab === tab.id
                  ? "bg-white text-red-600 shadow"
                  : "hover:bg-red-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {activeTab === "insight" && (
          <div>
            <h2 className="text-3xl font-bold text-red-700 mb-4">
              🎓 IndSight – Panel Discussion
            </h2>
            <p className="mb-2 text-gray-700">
              📅 Date: <strong>25th September 2025</strong>
            </p>
            <p className="mb-4 italic text-gray-600">
              Theme: Bridging Horizons: Shaping the Future of Industry and Academia
            </p>
            <p className="mb-4">
              Organized by: <strong>IEDC in association with the Placement Cell</strong>
            </p>
            <p className="mb-6">
              The session brings together seasoned and emerging entrepreneurs to explore
              evolving industry trends, the role of academia in fostering innovation, and
              strategies to strengthen collaboration between educational institutions and enterprises.
            </p>

            <h3 className="text-xl font-semibold mb-2">🎙️ Panelists:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
              <li>Ms. Nazneen Jehangir – CEO, Nest Group (Confirmed)</li>
              <li>Mr. John Kuriakose – Founder & MD, DentCare (Confirmed)</li>
              <li>Ms. Sheela Kochouseph – MD, V-Star Creations (Expected)</li>
              <li>More panelists to be confirmed soon</li>
            </ul>

            <p className="font-medium text-gray-700">
              🛍️ Also on the day: Exhibition cum Sale featuring student products & crafts.
            </p>
          </div>
        )}

        {activeTab === "speranza" && (
          <div>
            <h2 className="text-3xl font-bold text-red-700 mb-4">
              🌏 Speranza 2025 – Literature & Cultural Fest
            </h2>
            <p className="mb-2 text-gray-700">
              📅 Date: <strong>23rd September 2025</strong>
            </p>
            <p className="mb-4 italic text-gray-600">Theme: Ethnicity</p>
            <p className="mb-4">Organized by: Department of English</p>

            <h3 className="text-xl font-semibold mb-2">🎓 Events for School Students (Grades 9–12):</h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
              <li>Lexus – Spell Bee</li>
              <li>Synthesia – Paint a Poem</li>
              <li>Odyssey – Declamation</li>
              <li>Rhapsody – Theme Dance</li>
            </ul>

            <h4 className="font-semibold mb-2">🏆 Prizes (Schools):</h4>
            <p className="mb-6 text-gray-700">
              All events (except Theme Dance): ₹2000 (1st), ₹1000 (2nd) <br />
              Theme Dance: ₹7000 (1st), ₹3000 (2nd)
            </p>

            <h3 className="text-xl font-semibold mb-2">🎓 Events for College Students (UG & PG):</h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
              <li>Comicus – Stand-up Comedy</li>
              <li>Rostrum – Mock Press</li>
              <li>Ethnova – Fashion Show</li>
              <li>Insnap – Photo Caption Contest (Online; open to both college & school)</li>
            </ul>

            <h4 className="font-semibold mb-2">🏆 Prizes (Colleges):</h4>
            <p className="text-gray-700">
              ₹7000 (1st), ₹3000 (2nd) for group events <br />
              ₹3000 (1st), ₹1500 (2nd) for individual events
            </p>
          </div>
        )}

        {activeTab === "film" && (
          <div>
            <h2 className="text-3xl font-bold text-red-700 mb-4">🎬 Film Festival</h2>
            <p className="mb-2 text-gray-700">
              📅 Dates: <strong>24th – 26th August 2025</strong>
            </p>
            <p className="mb-4">Organized by: Department of Animation</p>
            <p className="text-gray-700">
              A 3-day film festival featuring creative works from emerging animators. Open
              to all with a minimal registration fee.
            </p>
          </div>
        )}

        {activeTab === "ideathon" && (
          <div>
            <h2 className="text-3xl font-bold text-red-700 mb-4">💡 Ideathon (Coming Soon)</h2>
            <p className="text-gray-700">
              An ideathon is currently in the planning phase — more details will be shared soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Day4;
