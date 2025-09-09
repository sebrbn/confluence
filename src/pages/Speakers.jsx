import { Linkedin } from "lucide-react";
import l1 from "../assets/rset2.png";   // RSET
import l2 from "../assets/rbs.png";    // RBS
import l3 from "../assets/rcmas.png";  // RCMAS
import l4 from "../assets/rvcs.png";
// import bg5 from "../assets/bg5.jpeg"; 
import bg5 from "../assets/adv.jpg";



// ---------------- SPEAKERS DATA ----------------
const speakers = [
  // RSET
  {
    institution: "Rajagiri School of Engineering & Technology",
    name: "Shri. Pinarayi Vijayan",
    role: "Honourable Chief Minister of Kerala",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRKs00qy2nkoHdo9HyOJSefo1cNNYDfNc8jfHyaIufiLoYZnt_2Ef1j2kAdtjD07gG50cAkNYZOmfwIYemliACkyw",
  },
  {
    institution: "Rajagiri School of Engineering & Technology",
    name: "Shri. P. Rajeev",
    role: "Honourable Minister for Industry, Government of Kerala",
    image: "https://niyamasabha.nic.in/images/member/p-rajeev_member_15_105.jpg",
  },
  {
    institution: "Rajagiri School of Engineering & Technology",
    name: "Shri. Hibi Eden",
    role: "Member of Parliament from the Ernakulam constituency",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9E_00aDbeNq9yr4ln_0M8CTZ5vX6omqg4Gw&s",
  },
  {
    institution: "Rajagiri School of Engineering & Technology",
    name: "Mr. V.K. Mathews",
    role: "Chairman, IBS Software",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2XeFXBiE9vHoN7pGwipfWoqhNkAKSyv02HA&s",
  },
  // {
  //   institution: "Rajagiri School of Engineering & Technology",
  //   name: "Mr. Rajesh Nambiar",
  //   role: "President, NASSCOM",
  //   image: "https://media.assettype.com/digitalterminal%2F2024-08-22%2Fm62hpws6%2FRajesh-Nambiar.jpg?w=1024&auto=format%2Ccompress&fit=max",
  // },
  {
    institution: "Rajagiri School of Engineering & Technology",
    name: "Group Captain Prashanth Balakrishnan Nair",
    role: "Member of India's Axiom 4 Space Mission",
    image: "https://www.bharat-rakshak.com/indianairforce/images/officers/25284.jpg",
  },
  {
    institution: "Rajagiri School of Engineering & Technology",
    name: "Mr. Jakes Bejoy",
    role: "Music Director and Alumnus & Professor of Practice, RSET ",
    image: "https://www.futuresummit.in/wp-content/uploads/2025/01/jakes_bijoy.jpg",
  },
  {
    institution: "Rajagiri School of Engineering & Technology",
    name: "Ms. Lenaa Kumar",
    role: "Indian Actor, Author & Screenwriter ",
    image: "https://images.filmibeat.com/img/popcorn/profile_photos/lena-20190614145755-11822.jpg",
  },
  // {
  //   institution: "Rajagiri School of Engineering & Technology",
  //   name: "Shubhanshu Shukla",
  //   role: "Indian Astronaut",
  //   image: "https://cdn.britannica.com/68/262468-050-0B10B29C/Shubhanshu-Shukla-Indian-astronaut-Axiom-Mission-4-ISRO.jpg",
  // },
  // {
  //   institution: "Rajagiri School of Engineering & Technology",
  //   name: "Kalyani Priyadarshan",
  //   role: "Actress",
  //   image: "https://i.pinimg.com/736x/7b/7c/95/7b7c95ccef69487fabb07665093adf8c.jpg",
  // },
  // {
  //   institution: "Rajagiri School of Engineering & Technology",
  //   name: "Dominic Arun",
  //   role: "Director, Lokha Movie",
  //   image: "https://filmyfocus.com/wp-content/uploads/2025/08/Profile-Pic-34-2.png",
  // },
  // {
  //   institution: "Rajagiri School of Engineering & Technology",
  //   name: "V.D. Satheeshan",
  //   role: "Leader of Opposition",
  //   image: "https://www.mathrubhumi.com/image/contentid/policy:1.7011458:1672141586/image.jpg?$p=0f6e831&f=16x10&w=852&q=0.8",
  // },

  // RCMAS
  {
    institution: "Rajagiri College of Management and Applied Sciences",
    name: "Ms. Nazneen Jehangir (25th Sep)",
    role: "CEO, Nest Group",
    image: "https://cdn.theorg.com/22293786-f15a-4efd-80cb-2e87e7d4dda3_medium.jpg",
  },
  {
    institution: "Rajagiri College of Management and Applied Sciences",
    name: "Mr. John Kuriakose (25th Sep)",
    role: "Founder & MD, DentCare ",
    image: "https://dentistchannel-online.s3.ap-south-1.amazonaws.com/photos/Mr_1692766927.%20John%20Kuriakose.%20John%20Kuriakose_1695018092.%20John%20Kuriakose",
  },
  {
    institution: "Rajagiri College of Management and Applied Sciences",
    name: "Ms. Sheela Kochouseph (25th Sep)",
    role: "Managing Director, V-Star Creations",
    image: "https://in.thedollarbusiness.com/assets/articles/2016/03/Sheela-Kochouseph-1-540.jpg",
  },

  // RCSS & RBS
  {
    institution: "Rajagiri Business School",
    name: "Dr. Shashi Tharoor (23rd Sep)",
    role: "Member of Parliament, Trivandrum",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Shashi_Tharoor_2025.jpg",
  },
  {
    institution: "Rajagiri Business School",
    name: "Dr. S. Somnath (23rd Sep)",
    role: "Former ISRO Chairman",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/S._Somanath%2C_Director_of_VSSC%2C_ISRO%2C_speaks_during_the_Heads_of_Agency_Plenary_of_the_70th_International_Astronautical_Congress_%28cropped%29.jpg/800px-S._Somanath%2C_Director_of_VSSC%2C_ISRO%2C_speaks_during_the_Heads_of_Agency_Plenary_of_the_70th_International_Astronautical_Congress_%28cropped%29.jpg",
  },
  {
    institution: "Rajagiri Business School",
    name: "Raul John Aju (24th Sep)",
    role: "Founder, Ai Realm",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFQriIVaEDvVw/profile-displayphoto-crop_800_800/B56Zf16nxqHYAI-/0/1752177476078?e=1759968000&v=beta&t=XujTO5666WTidbq6aw1iWJXjjqw7VQvZwroZ-K4iV1A",
    linkedin: "https://www.linkedin.com/in/rauljohnaju/?originalSubdomain=in",
  },

  // RVCAS
  {
    institution: "Rajagiri College of Social Sciences",
    name: "Mr. Subham Gupta",
    role: "Innovation Lead, Atal Innovation Mission, Niti Ayog",
    image: "https://media.licdn.com/dms/image/v2/D5603AQH30f4AAMLeLw/profile-displayphoto-shrink_200_200/B56ZTcgvUKGoAY-/0/1738866358533?e=2147483647&v=beta&t=L6xJe99uUQQakaWM3-KGrDJmLN7aTiMnydPxtWC-iBs",
    linkedin: "https://www.linkedin.com/in/shubham-gupta2692/?originalSubdomain=in",
  },
  {
    institution: "Rajagiri College of Social Sciences",
    name: "Mr. Suman Pandit",
    role: "Innovation Lead, Atal Innovation Mission, Niti Ayog",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQFPXqDicgCATg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1662557267305?e=1759968000&v=beta&t=LnM_xEb66yEWNjmRkAF7NXp5WaTcvlxG0fGRWU-Jda8",
    linkedin: "https://www.linkedin.com/in/suman28pandit/?originalSubdomain=in",
  },
];



  // Map institution logos
  const institutionLogos = {
    "Rajagiri School of Engineering & Technology": l1,
    "Rajagiri Business School": l2,
    "Rajagiri College of Management and Applied Sciences": l3,
    "Rajagiri College of Social Sciences": l4,
  };


export default function Speakers() {
  // Group speakers by institution
  const grouped = speakers.reduce((acc, sp) => {
    acc[sp.institution] = acc[sp.institution] || [];
    acc[sp.institution].push(sp);
    return acc;
  }, {});

  // Institution logos
  const institutionLogos = {
    "Rajagiri School of Engineering & Technology": l1,
    "Rajagiri Business School": l2,
    "Rajagiri College of Management and Applied Sciences": l3,
    "Rajagiri College of Social Sciences": l4,
  };

  return (
    <section id="speakers" className="bg-gradient-to-b from-sky-50 to-white ">
      {/* Hero Section */}
      <div
        className="relative h-[55vh] md:h-[60vh] bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${bg5})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10  max-w-4xl">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold drop-shadow-lg text-white">
            Meet the Visionaries
          </h2>
          <br></br>
          <p className="mt-3 text-lg sm:text-xl md:text-2xl drop-shadow-md text-gray-100 italic">
            Inspiring minds from across industries, ready to share their journey and insights
          </p>
          {/* <p className="mt-2 text-base sm:text-2xl md:text-3xl drop-shadow-md italic text-gray-300">
            Ready to share their journey and insights
          </p> */}
        </div>
      </div>

      {/* Institution Groups */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {Object.keys(grouped).map((inst, i) => (
          <div key={i} className="mb-16">
            <h3 className="text-4xl font-bold text-blue-900 mb-10 border-b-2 border-sky-200 pb-2 flex items-center gap-4">
              {inst}
              {institutionLogos[inst] && (
                <img
                  src={institutionLogos[inst]}
                  alt={inst}
                  className="w-28 h-28 object-contain"
                />
              )}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {grouped[inst].map((speaker, index) => {
                const cleanName = speaker.name.replace(/\(.*?\)/, "").trim();
                return (
                  <div
                    key={index}
                    className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col items-center p-6"
                  >
                    <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-sky-200 mb-4">
                      <img
                        src={speaker.image}
                        alt={cleanName}
                        className="w-full h-full object-cover bg-gray-50"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="text-xl font-semibold text-gray-900">
                        {cleanName}
                      </h4>
                      <p className="mt-2 text-gray-600 text-sm">{speaker.role}</p>
                      {speaker.linkedin && (
                        <a
                          href={speaker.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-4 px-5 py-2 text-sm font-medium text-white bg-sky-600 rounded-full hover:bg-sky-700 transition-colors"
                        >
                          <Linkedin className="w-4 h-4" /> Connect
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}