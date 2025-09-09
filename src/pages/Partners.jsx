import React from "react";

// ----- Header -----
import ibsLogo from "../assets/IBS.jpg";
import bannerImg from "../assets/banner.png";

// ----- Institutes -----
import sh from "../assets/shthevara.jpeg";
import rcss from "../assets/rcss.png";
import rset from "../assets/rset2.png";
import rbs from "../assets/rbs.png";
import rcmas from "../assets/rcmas.png";
import rvcas from "../assets/rvcs.png";
import m1 from "../assets/mitherdham.png";
import m2 from "../assets/image.png";

// ----- Sponsors -----
import ibs from "../assets/IBS.jpg";
import steag from "../assets/steag.jpg";
import bpcl from "../assets/bpcl.jpg";

// ----- Partners -----
import gtech from "../assets/Gtech.jpg";
import infopark from "../assets/infopark.jpg";
import technopark from "../assets/technopark.jpg";
import ksm from "../assets/ksm.png";
import kml from "../assets/kml.jpg";
import cio from "../assets/cio.png";
import progressive from "../assets/pro.png";
import learn from "../assets/mlearn.png";

function Confluence() {
  const institutes = [
    { name: "Sacred Heart College", logo: sh },
    { name: "RCSS", logo: rcss },
    { name: "RSET", logo: rset },
    { name: "RBS", logo: rbs },
    { name: "RCMAS", logo: rcmas },
    { name: "RVCAS", logo: rvcas },
    {
      name: "Mithradham",
      logos: [m1, m2], // 👈 Clubbed here
    },
  ];

  const sponsors = [
    { name: "IBS Software", logo: ibs },
    { name: "Steag", logo: steag },
    { name: "Bharat Petroleum", logo: bpcl },
  ];

  const partners = [
    { name: "GTech", logo: gtech },
    { name: "Infopark", logo: infopark },
    { name: "Technopark", logo: technopark },
    { name: "Kerala Startup Mission", logo: ksm },
    { name: "Kochi Metro", logo: kml },
    { name: "CIO Association", logo: cio },
    { name: "Progressive Techies", logo: progressive },
    { name: "MU Learn", logo: learn },

  ];

  return (
    <section className="bg-white">
      {/* -------- Banner -------- */}
      <div className="relative mt-12">
        <img src={bannerImg} alt="Confluence Venue" className="w-full" />
      </div>

      <div className="max-w-6xl mx-auto text-center py-12">
        {/* Institutes */}
        <h2 className="text-3xl font-bold text-gray-800 mb-10 border-t border-b py-3">
          Rajagiri Group of Institutions
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 mb-16">
          {institutes.map((inst, index) => (
            <div key={index} className="flex items-center justify-center gap-4">
              {inst.logos ? (
                // 👇 If multiple logos, show them side by side
                inst.logos.map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt={`${inst.name}-${i}`}
                    className="h-16 md:h-20 object-contain"
                  />
                ))
              ) : (
                <img
                  src={inst.logo}
                  alt={inst.name}
                  className="h-16 md:h-20 object-contain"
                />
              )}
            </div>
          ))}
        </div>

        {/* Sponsors */}
        <h2 className="text-3xl font-bold text-gray-800 mb-10 border-t border-b py-3">
          Sponsors
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 mb-16">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-16 md:h-20 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Partners */}
        <h2 className="text-3xl font-bold text-gray-800 mb-10 border-t border-b py-3">
          Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 md:h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Confluence;
