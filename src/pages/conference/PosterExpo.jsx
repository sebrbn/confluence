// src/pages/conference/PosterExpo.jsx
import React from "react";
import ConferenceNavbar from "../../components/ConferenceNavbar";
import expo from "../../assets/expo.jpg";
import { FaDownload } from "react-icons/fa";

export default function PosterExpo() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-[Poppins]">
      {/* Navbar */}
      <ConferenceNavbar />

      {/* Hero Section */}
      <header
        className="relative w-full h-[52vh] min-h-[360px] bg-green-900 text-white py-20 flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: `url(${expo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-green-900/80"></div>
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Poster Expo 2025
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl">
            As part of <span className="font-semibold">Confluence 2.0</span>, POSTER EXPO 2025 under the theme 
            <span className="italic font-medium"> “Advances in Sustainable Development”</span> showcases cutting-edge research.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-6 sm:px-12 lg:px-20 max-w-5xl mx-auto space-y-10">
        {/* About Section */}
        <section className="space-y-6">
          <p className="text-gray-800 text-lg">
            CONFLUENCE 2.0 is a unique platform where academic researchers and industry professionals converge to explore ongoing research projects funded by local, national, and international agencies. The exhibition focuses on presenting results/intermediate results of funded projects and student projects (B.Tech, M.Tech and Ph.D.) while offering researchers an opportunity to gather constructive feedback.
          </p>

          <h2 className="text-2xl font-bold text-green-900">Why Exhibit?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li><strong>Showcase Your Research:</strong> Present projects to a diverse audience including industry leaders, academic peers, and policymakers.</li>
            <li><strong>Gather Valuable Feedback:</strong> Receive expert feedback to refine your project and align it with practical industry needs.</li>
            <li><strong>Foster Collaborations:</strong> Connect with professionals and explore partnerships and funding opportunities.</li>
            <li><strong>Enhance Visibility:</strong> Highlight your institution’s research capacity and innovative approaches.</li>
            <li><strong>Engage in Discussions:</strong> Contribute to future-oriented dialogues on research and industrial applications.</li>
          </ul>
        </section>

        {/* Participation Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-green-900">Who Should Participate?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>Researchers/Students with ongoing projects</li>
            <li>Principal Investigators/Co-Principal Investigators from academia</li>
            <li>Teams involved in government- or private sector-funded research projects</li>
            <li>PhD scholars working on industry-aligned research</li>
          </ul>

          <h2 className="text-2xl font-bold text-green-900">Mode of Presentation</h2>
          <p className="text-lg">Participants will present their projects through posters that visually convey scope, methodology, and results while fostering interaction and discussion.</p>

          <h2 className="text-2xl font-bold text-green-900">Poster Content Should Include</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>Project Title</li>
            <li>Research Objectives and Problem Statement</li>
            <li>Methodology and Key Approaches</li>
            <li>Results and Findings</li>
            <li>Expected Impact and Potential Applications</li>
            <li>Future Directions and Industry Relevance</li>
            <li>Acknowledgement of Funding Agency (if any)</li>
          </ul>

          <h2 className="text-2xl font-bold text-green-900">Important Dates</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>Poster submission Deadline: September 12, 2025</li>
            <li>Abstract Format: 250-300 words</li>
            <li>Registration Deadline: September 18, 2025 (for selected posters)</li>
            <li>Exhibition Date: September 27, 2025</li>
          </ul>
        </section>

        {/* How to Participate */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-green-900">How to Participate</h2>
          <p className="text-lg">
            Submit your poster to:{" "}
            <a
              href="https://forms.gle/DZh5bVUTtdkWpkC7A"
              target="_blank"
              rel="noreferrer"
              className="text-green-800 underline"
            >
              Poster Submission Form
            </a>
          </p>

          <h2 className="text-2xl font-bold text-green-900">Contact Information</h2>
          <p className="text-gray-700 text-lg">
            Poster Expo Coordinators: <br />
            Dr. Deepthi Jayan K, Associate Professor, Department of Basic Sciences and Humanities, RSET <br />
            Lt. Dr. Vishnu Sankar, Assistant Professor, Department of Mechanical Engineering, RSET <br />
            Email: <a href="mailto:confluence@rajagiritech.edu.in" className="text-green-800 underline">confluence@rajagiritech.edu.in</a>
          </p>
        </section>
<section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
  <div className="bg-white p-6 rounded shadow text-center">
    <h3 className="font-semibold text-green-900 mb-2 text-lg">Funded Project</h3>
    <p className="text-gray-700 mb-4">Download the template for your submission.</p>
    <a
      href="src/files/Funded_Project_Template.pptx"
      className="px-4 py-2 bg-green-800 text-white rounded hover:bg-green-900 transition"
      download
    >
      Download
    </a>
  </div>

  <div className="bg-white p-6 rounded shadow text-center">
    <h3 className="font-semibold text-green-900 mb-2 text-lg">Poster Template</h3>
    <p className="text-gray-700 mb-4">Download the template for your submission.</p>
    <a
      href="src/files/Poster Template_POSTER EXPO_2025- ICASD-CONFLUENCE 2.0.pptx"
      className="px-4 py-2 bg-green-800 text-white rounded hover:bg-green-900 transition"
      download
    >
      Download
    </a>
  </div>
</section>



      </main>
    </div>
  );
}
