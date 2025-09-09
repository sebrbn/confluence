// src/pages/ConferenceCommittee.jsx
import React from "react";
import ConferenceNavbar from "../../components/ConferenceNavbar"; 
import Footer from "../../components/Footer";


const committee = [
  { role: "Patron", members: ["Rev. Fr. Dr. Jose Kuriedath CMI"] },
  { role: "Conference Chairperson", members: ["Rev. Fr. Dr. Jaison Paul Mulerikkal CMI", "Rev. Fr. George Peter Pittappillil"] },
  { role: "Program Chair", members: ["Rev. Fr. Dr. Joel George Pullolil CMI", "Dr. Mathew Joseph", "Prof. Dr. Manoj G. Tharian", "Prof. Dr. Thankachan T. P.", "Prof. Dr. Roy V. Paul", "Prof. Dr. Biju Paul"] },
  { role: "Organizing Chair", members: ["Dr. Geo Sebastian", "Dr. Jibin Noble", "Lt. Dr. Vishnu Sankar"] },
  { role: "Technical Committee Chair", members: ["Mr. P. P. Krishnaraj", "Mr. Rathish T. R."] },
  { role: "Review Committee Chair", members: ["Mr Jithin P. N.", "Dr. Ajith Kumar A.", "Mr. Senjo Manuel"] },
  { role: "Publication and Proceedings Chair", members: ["Dr. Athul Sathyanath", "Mr. Manu Josesph"] },
  { role: "Finance", members: ["Mr. Jeffin Johnson", "Mr. Jithin K Francis"] },
  { role: "Registration and Certificate", members: ["Mr. Sidheek P. A.", "Mr. James Mathew"] },
  { role: "Hospitality and Logistics", members: ["Mr. Nivin Vincent", "Mr. Akash James"] },
  { role: "Publicity and Promotion", members: ["Mr. Vineeth Krishna P.", "Mr. John Paul"] },
];

export default function ConferenceCommittee() {
  return (
    <div className="bg-gray-50 text-gray-800 font-[Poppins] min-h-screen">
      <ConferenceNavbar />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 border-b-4 border-green-600 pb-2 text-center">
            Conference Committee
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {committee.map((group, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col"
              >
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-800 font-semibold text-sm px-3 py-1 rounded-full">
                    {group.role}
                  </span>
                </div>
                <ul className="text-gray-700 space-y-1 list-disc list-inside">
                  {group.members.map((member, i) => (
                    <li key={i}>{member}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
                <div className="h-32"></div>

      </section>
      <Footer />
      
    </div>
  );
}
