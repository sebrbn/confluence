import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import hero from "../assets/hero3.jpeg";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function Contact() {
  const colleges = [
    {
      name: "Sacred Heart College (Autonomous)",
      position: [9.939205, 76.293406],
      link: "https://goo.gl/maps/nEXMuo8pQszx1vUo8",
    },
    {
      name: "Rajagiri College of Social Sciences (Autonomous)",
      position: [10.053237, 76.313022],
      link: "https://goo.gl/maps/yNHStBgR2WGG9ySc6",
    },
    {
      name: "Rajagiri School of Engineering & Technology",
      position: [9.99346, 76.355515],
      link: "https://goo.gl/maps/6xgcbXVLXgWT7T6o7",
    },
    {
      name: "Rajagiri Business School",
      position: [9.99279, 76.353657],
      link: "https://goo.gl/maps/Ct7ZVh8KCG91c6Ej7",
    },
    {
      name: "Rajagiri College of Management & Applied Sciences",
      position: [9.994722, 76.35532],
      link: "https://goo.gl/maps/LWm5qNfFr2VVR7Nf6",
    },
    {
      name: "Rajagiri Viswajyothi College of Arts and Applied Sciences",
      position: [10.155149, 76.537654],
      link: "https://goo.gl/maps/Bj1zjH3nJq6nDLaD6",
    },
    {
      name: "Mithradham – Renewable Energy Centre, International",
      position: [10.097886, 76.377161],
      link: "https://goo.gl/maps/J4iLhnrVtKc9rf5Y7",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-48 sm:h-64 md:h-72 flex items-center justify-center text-white font-[Poppins]"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg relative z-10 text-center px-4">
          Contact Us
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center md:text-left">
            Get in Touch with Us
          </h2>
          <p className="text-gray-600 text-center md:text-left">
            We’d love to hear from you. Whether you have questions about the
            conference, sponsorships, or registration, our team is ready to
            help.
          </p>

          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 w-full">
            {/* Email */}
            <div className="flex items-start space-x-4 flex-1">
              <FaEnvelope className="text-2xl text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <a
                  href="mailto:confluence@rajagiritech.edu.in"
                  className="text-gray-700 hover:text-blue-600"
                >
                  confluence@rajagiritech.edu.in
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 flex-1">
              <FaPhoneAlt className="text-2xl text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <a
                  href="tel:+914842660999"
                  className="text-gray-700 hover:text-blue-600"
                >
                  +91 484 2660999
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4 flex-1">
              <FaMapMarkerAlt className="text-2xl text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Address</h3>
                <p className="text-gray-700">
                  Rajagiri School of Engineering & Technology <br />
                  Rajagiri Valley, Kakkanad <br />
                  Kochi 682 039, Kerala, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="bg-gray-100 py-12 sm:py-16 rounded-2xl shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
            Our Institute Locations
          </h2>
          <p className="text-center text-gray-600 mb-6 px-4 sm:px-0">
            Explore our institutions across Kerala. Click on a marker to get
            directions.
          </p>
          <div className="h-[400px] sm:h-[500px] md:h-[600px] w-full rounded-lg overflow-hidden relative">
            <MapContainer
              center={[10.0, 76.35]}
              zoom={10}
              scrollWheelZoom={false}
              className="h-full w-full z-0"
              style={{ zIndex: 10 }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {colleges.map((college, index) => (
                <Marker key={index} position={college.position}>
                  <Popup>
                    <div className="text-center">
                      <h3 className="font-bold text-gray-800 mb-2">
                        {college.name}
                      </h3>
                      <a
                        href={college.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        Open in Google Maps
                      </a>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a0d0d] text-gray-300 text-center md:text-left py-6 px-4 sm:px-6 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between space-y-3 md:space-y-0 text-sm">
          <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-2 items-center">
            <a href="#contact" className="text-red-500 hover:underline">
              Contact us
            </a>
            <span>|</span>
            <span>
              Copyright © Developed by{" "}
              <span className="text-red-500 font-semibold">RSoft2025</span> All
              rights reserved
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
