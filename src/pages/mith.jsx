import React from "react";
import { CalendarDays, MapPin, Clock, PhoneCall, Mail, ExternalLink } from "lucide-react";
import MithradhamNavbar from "../components/MithradhamNavbar"; 
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import m1 from "../assets/mitherdham.png"; 
import m2 from "../assets/image2.png";
import mith from "../assets/mith.jpg";
import frank from "../assets/Frank.jpg";
import clem from "../assets/Clemens.jpeg";
import Footer from "../components/Footer";
import ann from "../assets/ann.jpg";
import chris from "../assets/chris.jpg";

// Speaker Data
const speakers = [
  {
    name: "Rev. Fr. Benny Nalkara",
    role: "Provincial, CMI Sacred Heart Province, Kochi; Chairman, Mithradham Trust ( Inaugural Address )",
    image: "https://www.rajagiritech.ac.in/home/aboutus/images/Fr.Benny.jpg",
  },
  {
    name: "Prof. Dr. Clemens Bulitta",
    role: "President, OTH Amberg-Weiden; Dean, Faculty of Industrial Engineering & Healthcare ( Felicitation )",
    image: clem,
  },
  {
    name: "Dr. Mrs. Ann Francis",
    role: "Assistant Professor, IIT Delhi – Specialist in Sustainable Energy ( Paper 1: Global Energy Landscape )",
    image: ann ,
  },
  {
    name: "Prof. Dr. Frank Späte",
    role: "President, Deutsche Gesellschaft für Sonnenenergie; Professor, Faculty of Mechanical/Environmental Engineering ( Paper 2: Energy Transition )",
    image: frank,
  },
  {
    name: "Eng. Christoph Wuertemberger",
    role: "CEO, Solarstromanlagen ( Paper 3: Social & Economic Dimensions of Energy Transition )",
    image: chris,
  },
  {
    name: "Fr. Dr. Varghese Panthallookkaran",
    role: "Professor of Engineering Physics, RSET ( Paper 4: Role of Innovation and Education )",
    image: "https://www.rajagiritech.ac.in/stud/Faculty/Photo/varghese.jpg",
  },
  {
    name: "Eng. Sivaramakrishnan Ganesa Iyer",
    role: "President, KREEPA; Clean Energy Consultant ( Moderator, Panel Discussion )",
    image: "https://www.kreepa.org/images/member/member0845271001684220109.jpg",
  },
];


// Section Wrapper
const Section = ({ id, title, children }) => (
  <section id={id} className="w-full max-w-6xl mx-auto px-6 py-14">
    <h2 className="text-3xl font-bold text-yellow-900 mb-6">{title}</h2>
    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow p-6">{children}</div>
  </section>
);

export default function MithradhamConfluencePage() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="min-h-screen w-full  text-gray-900 font-[Poppins] ">
      <MithradhamNavbar />
<header
  id="overview"
  className="relative w-full text-center bg-cover bg-center shadow-md"
  style={{
    backgroundImage: `url(${mith})`,
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="relative z-10 py-16 px-6 max-w-6xl mx-auto"> 
    {/* Title + Subtitle */}
    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-6 tracking-wide">
      One Day International Seminar
    </h2>
     <p className="text-lg sm:text-xl mt-2 text-gray-200 font-semibold">
    By Mithradham
  </p>
    <p className="italic text-lg sm:text-xl mt-2 text-yellow-200">
      “Energy Future for Sustainable Development of the World”
    </p>

    {/* Event Details */}
    <div className="mt-6 flex flex-wrap justify-center gap-6 text-base sm:text-lg text-gray-100 font-medium">
      <div className="flex items-center gap-2">
        <CalendarDays className="w-5 h-5 text-yellow-300" />
        Friday, 26 Sept 2025
      </div>
      <div className="flex items-center gap-2">
        <Clock className="w-5 h-5 text-yellow-300" />
        9:30 AM – 3:30 PM
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="w-5 h-5 text-yellow-300" />
        Mithradham, Aluva
      </div>
    </div>
  </div>
</header>

<section className="bg-white py-12 px-6 sm:px-12 lg:px-20 shadow-inner">
  <div className="max-w-5xl mx-auto text-gray-800 leading-relaxed">
    <p className="text-center text-2xl font-semibold text-yellow-800 mb-6">
      Dedicated to the Promotion of Environment and Renewable Energy  
      <br />
      A Millennium Project of CMI Sacred Heart Province, Kochi & Sacred Heart College, Thevara
    </p>

    <p className="mb-10 text-lg">
      Sir/Ma’am,  
      We are pleased to invite you to an exclusive one-day international seminar on{" "}
      <span className="font-semibold text-yellow-900">
        "Energy Future for Sustainable Development of the World"
      </span>, hosted by Mithradham in partnership with Sacred Heart College (SHC), Thevara,
      Rajagiri College of Social Sciences (RCSS), Kalamassery, Rajagiri School of Engineering & Technology (RSET), Kakkanad,
      Rajagiri Business School (RBS), Kakkanad, Rajagiri College of Management & Applied Sciences (RCMAS), Kakkanad
      and Rajagiri Viswajyothi College of Arts and Applied Sciences, Vengoor,
      as part of{" "}
      <span className="font-semibold text-yellow-900">Confluence 2.0</span>, the flagship industry–academia event of Rajagiri Group of Institutions.
    </p>

    <h3 className="text-2xl font-bold text-yellow-800 mt-8 mb-4">
      This seminar offers a unique opportunity to:
    </h3>
    <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
      <li>Enhance your understanding of Sustainable Energy Future</li>
      <li>Network with leading professionals from around the globe</li>
      <li>Gain practical skills and knowledge to implement in your work</li>
      <li>Discover new trends and best practices in sustainable future</li>
    </ul>
  </div>
</section>

<Section id="speakers" title="Speakers & Dignitaries">
  <div className="bg-white p-6 sm:p-10 rounded-2xl border border-gray-200 shadow-sm">
    <Slider
      dots
      infinite
      speed={500}
      slidesToScroll={1}
      slidesToShow={4} // Desktop default
      responsive={[
        {
          breakpoint: 1280,
          settings: { slidesToShow: 3 },
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 2 },
        },
        {
          breakpoint: 640, // Mobile
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
      ]}
    >
      {speakers && speakers.length > 0 ? (
        speakers.map((s, idx) => (
          <div key={idx} className="w-full px-3">
            <div
              className="bg-gray-50 rounded-lg border border-gray-200 
                         p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Speaker Image */}
              <div className="flex items-center justify-center mb-4">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-28 h-28 rounded-full object-cover border border-gray-300"
                />
              </div>

              {/* Speaker Info */}
              <h3 className="text-lg font-semibold text-gray-900">{s.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{s.role}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No speakers available</p>
      )}
    </Slider>
  </div>
</Section>



<Section id="agenda" title="Program Schedule">
  <div className="relative border-l-2 border-gray-200 pl-6 space-y-8">
    
    <div>
      <div className="absolute -left-[9px] top-1 w-4 h-4 bg-green-600 rounded-full border-2 border-white"></div>
      <h3 className="text-xl font-semibold text-gray-900">Inauguration</h3>
      <p className="text-gray-800 text-lg mt-1">
        Opening of the International Seminar with inaugural address and felicitation.
      </p>
    </div>

    <div>
      <div className="absolute -left-[9px] top-1 w-4 h-4 bg-green-600 rounded-full border-2 border-white"></div>
      <h3 className="text-xl font-semibold text-gray-900">Expert Talks (4 Papers)</h3>
      <p className="text-gray-800 text-lg mt-1">
        Forenoon sessions by experts based on their original work in the field. 
        Insights on the future of energy technologies and their role in sustainable development.
      </p>
    </div>

    <div>
      <div className="absolute -left-[9px] top-1 w-4 h-4 bg-green-600 rounded-full border-2 border-white"></div>
      <h3 className="text-xl font-semibold text-gray-900">Lunch Break</h3>
      <p className="text-gray-800 text-lg mt-1">Time to network and refresh.</p>
    </div>

    <div>
      <div className="absolute -left-[9px] top-1 w-4 h-4 bg-green-600 rounded-full border-2 border-white"></div>
      <h3 className="text-xl font-semibold text-gray-900">Panel Discussion</h3>
      <p className="text-gray-800 text-lg mt-1">
        Afternoon session: interactive panel discussion with the forenoon 
        speakers, moderated by experts.
      </p>
    </div>

    <div>
      <div className="absolute -left-[9px] top-1 w-4 h-4 bg-green-600 rounded-full border-2 border-white"></div>
      <h3 className="text-xl font-semibold text-gray-900">Tea & Guided Visit</h3>
      <p className="text-gray-800 text-lg mt-1">
        Tea followed by a guided visit to the Mithradham Theme Park on 
        “Environment and Energy”.
      </p>
    </div>
  </div>

  {/* Certificate Section */}
  <div className="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
    <h3 className="text-xl font-semibold text-gray-900">Certificate</h3>
    <p className="text-gray-800 text-lg  mt-2">
      A certificate of attendance will be issued to all registered participants.  
    </p>
    <p className="text-yellow-900 text-lg  mt-6 ">
      Waiting to welcome you to <span className="font-semibold"> Mithradham, <br /></span>
      <span className="font-semibold">George Peter Pittappillil, Director, Mithradham </span>
    </p>
  </div>
</Section>


      {/* Contact Section */}
      <Section id="contact" title="Contact & Registration">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-700 mb-3 ">
              For details & registration, contact us with your <span className="font-medium">Name</span> and <span className="font-medium">Official Address</span>.
            </p>
            <div className="space-y-3">
              <a href="https://wa.me/919847747650" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-600 text-white font-semibold hover:bg-yellow-700 w-max">
                <PhoneCall className="w-5 h-5" /> +91 98477 47650
              </a>
              <a href="mailto:renewable20002000@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white ring-1 ring-yellow-200 text-yellow-900 w-max hover:bg-yellow-50">
                <Mail className="w-5 h-5" /> renewable20002000@gmail.com
              </a>
              <a href="https://www.mithradham.org" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white ring-1 ring-yellow-200 text-yellow-900 w-max hover:bg-yellow-50">
                <ExternalLink className="w-5 h-5" /> mithradham.org
              </a>
            </div>
          </div>
          <div>
            <p className="text-gray-700">Mithradham — The first fully solar educational institution in India (Estd. 1996).</p>
            <p className="text-sm text-gray-600 mt-2">Address: Chunangamveli, Aluva 683112</p>
            <a href="https://bit.ly/Mithradham" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-2 text-yellow-700 font-semibold hover:underline">
              <MapPin className="w-5 h-5" /> Location Map
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="w-full border-t border-yellow-200 bg-yellow-50/50 py-6 mt-8">
      <Footer/>
        
      </footer>
    </div>
  );
}
