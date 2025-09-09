// src/pages/Hackathon.jsx
import React from "react";
import ConferenceNavbar from "../../components/ConferenceNavbar";
import Footer from "../../components/Footer";
import hackathonBg from "../../assets/hack.jpg"; // fallback hero image
import qrCode from "../../assets/qr1.jpg"; // QR image for payment
import { Calendar, Clock, MapPin, Wind, Building2 } from "lucide-react";

export default function Hackathon() {
  return (
    <div className="bg-gray-50 text-gray-800 font-[Poppins] min-h-screen flex flex-col  ">
      <ConferenceNavbar />

      {/* Hero */}
<section
  className="relative w-full h-[52vh] min-h-[360px] flex items-center justify-center overflow-hidden"
>
  <img
    src={hackathonBg}
    alt="ICASD Energy Hackathon"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/60" />
  <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
    {/* Badge */}
    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-lg sm:text-xl mb-6">
      <Wind className="w-6 h-6" />
      Design Making Challenge for Wind Powered Street Lights
    </div>

    {/* Main heading */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-snug mb-4">
      Energy Hackathon 2025
    </h1>

    {/* Subtexts */}
    <p className="mt-2 text-lg sm:text-xl md:text-2xl opacity-90">
      Powered by <span className="font-semibold">Steag Centre</span>
    </p>
    <p className="text-base sm:text-lg md:text-xl opacity-90">
      In Association with Department of Mechanical Engineering, RSET
    </p>
    <p className="mt-3 text-base sm:text-lg md:text-xl opacity-90">
      AS PART OF INTERNATIONAL CONFERENCE ON ADVANCES IN SUSTAINABLE DEVELOPMENT (ICASD-2025)
    </p>
  </div>
</section>



      {/* Quick Facts */}
      <section className="max-w-6xl mx-auto w-full px-4 -mt-10">
                  <div className="h-32"></div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100 flex items-start gap-3">
            <div className="p-2 rounded-xl bg-gray-50 border border-gray-100">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-m uppercase tracking-wide text-gray-500">Dates</p>
              <p className="font-semibold leading-snug">
                Day 1: Thu, Sept 25, 2025
                <br />
                Day 2: Fri, Sept 26, 2025
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100 flex items-start gap-3">
            <div className="p-2 rounded-xl bg-gray-50 border border-gray-100">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-m uppercase tracking-wide text-gray-500">Duration</p>
              <p className="font-semibold">48 Hours</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100 flex items-start gap-3">
            <div className="p-2 rounded-xl bg-gray-50 border border-gray-100">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-m uppercase tracking-wide text-gray-500">Location</p>
              <p className="font-semibold leading-snug">
                STEAG Centre, 2nd Floor, KE Block Extension, RSET
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <main className="flex-1">
        <section className="max-w-6xl mx-auto w-full px-4 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column: About */}
            <div className="lg:col-span-2 space-y-8">
              {/* Steag Centre */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl sm:text-2xl font-semibold">Steag Centre</h2>
                </div>
                <p className="leading-relaxed text-gray-700">
                  The Steag Centre for Smart City Technologies serves as a dynamic maker space dedicated to
                  advancing research, innovation, and entrepreneurship. The Centre focuses on key areas such as smart
                  mobility, smart energy, and the integration of recycled materials within the development of
                  sustainable smart cities. The Centre is a joint initiative of RSET and Steag Energy Services, India
                  which is one of the leading providers of services in the power generation and transmission sector.
                  Steag Energy Services India is the wholly owned subsidiary of Steag Energy Services GmbH and part of
                  the German based Steag group.
                </p>
              </div>

              {/* About Hackathon */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-3">About Hackathon</h2>
                <p className="leading-relaxed text-gray-700">
                  This hackathon is crafted to empower students from diverse backgrounds with essential problem-solving
                  techniques and rapid prototyping skills. Through a dynamic series of exercises and activities, the
                  event fosters creativity and encourages experimentation.
                </p>
                <p className="leading-relaxed text-gray-700 mt-3">
                  Participants will be organized into teams of five, tasked with designing and developing innovative
                  proof-of-concept solutions within the sustainable energy sector, all within a 48-hour timeframe.
                  Throughout the event, teams will engage in collaborative innovation practices and receive
                  foundational training on rapid prototyping tools, including 3D printers, laser cutters, and CNC
                  routers.
                </p>
                <p className="leading-relaxed text-gray-700 mt-3">
                  In addition to the hands-on experience, participants will have the unique opportunity to further
                  develop their projects post-hackathon with ongoing mentorship and support from the Steag Centre.
                </p>
              </div>
            </div>

            {/* Right column: Register / Pay */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-6">
                <h3 className="text-lg font-semibold">Register & Payment</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Secure your spot and complete the payment to confirm registration.
                </p>

                {/* Payment */}
                <div className="mt-5 space-y-3">
                  <p className="text-sm font-medium">Link for Payment</p>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://tinyurl.com/yjavuavb"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-xl border border-gray-200 shadow-sm hover:shadow transition text-sm font-semibold"
                    >
                      Open Payment Link
                    </a>
                    <div className="shrink-0">
                      <img
                        src={qrCode}
                        alt="Payment QR"
                        className="w-28 h-28 object-cover rounded-xl border border-gray-200"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Scan the QR or use the link.</p>
                </div>

                {/* Registration */}
                <div className="mt-6">
                  <p className="text-sm font-bold">Link for Registration</p>
                  <a
                    href="https://forms.gle/XukDmZG6ZWRAdHBj6"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex w-full items-center justify-center px-4 py-2 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black transition"
                  >
                    Fill Google Form
                  </a>
                </div>
                <div className="mt-6">
                <p className="text-sm font-bold">Download Brochure</p>
                <a
                  href="src/files/hackathon.pdf" 
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex w-full items-center justify-center px-4 py-2 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black transition"
                >
                  Download 
                </a>
              </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Spacer below as requested */}
        <div className="h-16" />
                  <div className="h-32"></div>

      </main>

      <Footer />
    </div>
  );
}
