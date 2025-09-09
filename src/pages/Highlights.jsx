import EventHighlights from "../components/EventHighlights"; 

export default function Highlights() {
  return (
    <div className="mt-12 flex flex-col min-h-screen">
      {/* Main Highlights Section */}
      <section className="flex-grow">
        <EventHighlights />
      </section>

      {/* Footer */}
      <footer className="bg-[#1a0d0d] text-gray-300 text-center md:text-left py-4 px-6 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between space-y-3 md:space-y-0 text-sm">
          {/* Left side links */}
          <div className="flex space-x-2 items-center">
            <a href="#contact" className="text-red-500 hover:underline">
              Contact us
            </a>
            <span>|</span>
            <span>
              Copyright © Developed by{" "}
              <span className="text-red-500 font-semibold">RSoft2025</span> All rights reserved
            </span>
            <span>|</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
