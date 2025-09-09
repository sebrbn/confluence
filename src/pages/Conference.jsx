import React from "react";
import conferenceImg from "../assets/conference.jpg";
import ConferenceNavbar from "../components/ConferenceNavbar"; 
import ConferenceSlider from "../components/ConferenceSlider";
import Footer from "../components/Footer";
import m1 from "../assets/mitherdham.png"; 
import m2 from "../assets/image2.png";
import qrCode from "../assets/qr1.jpg";


export default function Conference() {
  return (
    <div className="bg-gray-50 text-gray-800 font-[Poppins] min-h-screen flex flex-col realtive">
      
      
      
      {/* Main content */}
      <main className="flex-grow">

        {/* Hero Section */}
        
<section
  className="relative bg-cover bg-center text-white"
  style={{ backgroundImage: `url(${conferenceImg})` }}
>
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-green-800/40 to-transparent" />

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto py-24 px-6 text-left space-y-4">
    <div className="relative inline-block">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-snug">
        INTERNATIONAL CONFERENCE ON ADVANCES IN SUSTAINABLE <br />
        DEVELOPMENT [ICASD - 2025]
      </h1>

     
    </div>

    <div className="flex items-center gap-4 mt-10">
      <span className="text-white font-medium">In association with</span>
      <div className="flex items-center space-x-2 flex-shrink-0">
        <img src={m1} alt="Mithredam Logo" className="h-10 sm:h-16" />
        <img src={m2} alt="Mithredam Logo" className="h-10 sm:h-16" />
      </div>
    </div>

    <p className="text-xl sm:text-2xl font-semibold">
      25th – 27th September 2025
    </p>
  </div>
</section>





        <ConferenceNavbar />
        <ConferenceSlider />
    
            

        {/* About Section */}
        <section id="about" className="max-w-6xl mx-auto py-16 px-6 space-y-10 text-left">
          
          <h2 className="text-3xl font-bold text-green-800 border-b-4 border-green-600 pb-2">
            About
          </h2>
          
          

          <div className="grid lg:grid-cols-3 gap-10 text-gray-700">
            <div className="lg:col-span-2 space-y-10">

              {/* Institution */}
              <div>
                <h3 className="text-2xl font-semibold text-green-700 mb-3">
                  About the Institution
                </h3>
                <p className="leading-relaxed text-justify">
                  Rajagiri School of Engineering & Technology (RSET) – Autonomous, situated in Rajagiri Valley, Kochi, is a leading institution dedicated to excellence in engineering education and research. In 2020, the University Grants Commission (UGC) conferred autonomous status upon RSET, which operates under the affiliation of A. P. J. Abdul Kalam Technological University, Thiruvananthapuram, Kerala. RSET is also approved by the All India Council for Technical Education (AICTE), New Delhi.<br></br>

Accredited with an 'A' grade by NAAC in its second cycle, Seven out of RSET's nine undergraduate programmes are accredited under NBA Tier 1 accreditation. RSET is ranked in the National Institutional Ranking Framework (NIRF) for 2020 and 2022 by the Ministry of Education, Government of India. Ranked first among private engineering colleges in Kerala in the Institutional Ranking Framework 2024. The institution also offers postgraduate programmes in engineering and research programmes (Ph.D.) in science and engineering.<br></br>

Managed by the Sacred Heart Province of the Carmelites of Mary Immaculate (CMI) congregation, RSET is a part of the Rajagiri Vidyapeetham (seat of knowledge), a dream eternal, being unfolded in time through the relentless CMI quest for excellence in the pursuit of Wisdom. The dream is a wide network of institutions and centers providing quality education from pre-primary to doctoral programmes of specializations and super-specializations, and seeking alternatives to the conventional mainstream efforts. As an institution which bears the traditional Rajagiri hallmark of academic brilliance and social commitment, RSET has successfully carved a niche for itself in the sphere of engineering education in the state within a very short span of its existence.<br></br>

The Carmelites of Mary Immaculate is the first-ever indigenous religious congregation for men in the Syrian Catholic tradition of Christianity in India. The CMI congregation, canonically established in 1855, played a major role in revolutionizing the education scene in Kerala in the late 19ᵗʰ century. Heirs to the profound vision of St. Kuriakose Elias Chavara, one of the founding fathers of the congregation, the CMIs have zealously worked towards providing value-based quality education to society at large, irrespective of religious differences, down the centuries. Today, the congregation has more than 400 educational institutions, from schools to professional colleges under its umbrella.<br></br>

The Rajagiri Valley campus is a perfect blend of the urban and the rural: while the verdant and serene backdrop of the self-contained campus provides the ideal atmosphere for stimulating the creativity and intellectual pursuits of the academia, the close proximity to the industrial belt of Kerala, the Infopark, and the Smart City helps in providing the students with exposure to the practical aspects of their profession. This ensures a smooth transition from the institution to the industry for our graduates.<br></br>

                </p>
              </div>

              {/* Department */}
              <div>
                <h3 className="text-2xl font-semibold text-green-700 mb-3">
                  About the Department
                </h3>
                <p className="leading-relaxed text-justify">
                  Established in the year 2012 with an initial intake of 60 students in 2011, the Department of Mechanical Engineering has progressed by leaps and bounds in all respects in a short span of time. Presently the department admits 120 students per year to its undergraduate study programme. The department has attracted highly qualified and experienced personnel from various streams of Mechanical Engineering as its faculty.<br></br>

The department has successfully established various research groups working independently or in collaboration with various industries (NPOL, Tata Ceramics etc.) towards meaningful goal-driven research activities. Such ventures ensure industry-institute interaction that puts theory into practice thereby improving the overall quality of academia. Supported by 9 state-of-the-art laboratories, the department has categorized its various research activities under Energy Research Group (Solar & Thermal Systems); Computer Aided Engineering Group (FEA & CFD); Manufacturing Engineering Group (Production, Materials, Metallurgy & CAD/CAM).<br></br>

The department is a front-runner in organizing result oriented workshops for its student community. 'AcceleroBotix' by Technophilia Systems and Robotics & Computer Applications Institute of USA, 'Sphere Drone: Design Fabrication & Flying' by AerotriX Bangalore, 'National Weld Meet: Kochi 2015’ by The Indian Institute of Welding (IIW-Branch Cochin), ‘Hexapod Robotics’ workshop by Dalvik Apps and ‘Autodesk Fusion 360’ training are a few significant examples. <br></br>

                </p>
              </div>
              

              {/* Conference */}
              <div>
                <h3 className="text-2xl font-semibold text-green-700 mb-3">
                  About the Conference
                </h3>
                <p className="leading-relaxed text-justify">
                  The International Conference on Advances in Sustainable Development brings together researchers, industry leaders, policymakers, and students to explore innovative solutions for global sustainability challenges. With a broad interdisciplinary scope, the conference aims to foster dialogue and knowledge-sharing that drive meaningful change.      
                </p>
              </div>
            </div>

            {/* Important Dates */}
            <div className="bg-green-50 border border-green-200 shadow-md rounded-xl p-6 h-fit self-start">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Important Dates
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><span className="font-bold">Abstract Submission:</span> 8th September 2025</li>
                <li><span className="font-bold">Acceptance Notification:</span> 12th September 2025</li>
                <li><span className="font-bold">Registration and Full Paper Submission:</span> 15th September 2025</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Tracks Section */}
        <section id="tracks" className="max-w-6xl mx-auto py-10 px-6 space-y-6 text-left">
          <h2 className="text-3xl font-bold text-green-800 border-b-4 border-green-600 pb-2">
            Themes / Tracks
          </h2>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
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
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                {theme}
              </li>
            ))}
          </ul>
        </section>

        {/* Registration Section */}
        <section id="registration" className="max-w-6xl mx-auto py-16 px-6 space-y-6 text-left">
          <h2 className="text-3xl font-bold text-green-800 border-b-4 border-green-600 pb-2">
            Registration
          </h2>

          <p className="text-gray-700">
            Register now to be a part of the International Conference on Advances in Sustainable Development.
          </p>

          {/* Buttons + QR */}
          <div className="flex flex-wrap items-center gap-6">
            {/* Buttons group */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfXskkT_643-bsOV1BHNja2V8mrgeqSuB-ZZRc4ZbITWFLrnA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition"
              >
                Register Here
              </a>

              <a
                href="https://tinyurl.com/yjavuavb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition"
              >
                Proceed to Payment
              </a>
            </div>

            {/* QR code */}
            <img
              src={qrCode}
              alt="Payment QR Code"
              className="w-20 h-20 rounded-lg shadow-md"
            />
          </div>

          <div className="h-32"></div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

    </div>
    
  );
}
