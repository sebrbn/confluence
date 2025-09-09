import React from "react";

// Import logos
import miterdham from "../assets/mitherdham.png";
import rcss from "../assets/rcss.png";
import rset from "../assets/rset2.png";
import rbs from "../assets/rbs.png";
import rcmas from "../assets/rcmas.png";
import rvcas from "../assets/rvcs.png";
import shthevara from "../assets/shthevara.jpeg";
import mith from "../assets/image.png";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white py-2 shadow-md z-50">
      {/* Horizontal scroll container on small screens */}
      <div
        className="flex items-center gap-4 px-4 overflow-x-auto whitespace-nowrap sm:overflow-x-visible justify-start sm:justify-center"
        aria-label="Institution logos"
      >
        <img
          src={shthevara}
          alt="SH Thevara"
          className="h-8 xs:h-10 sm:h-12 md:h-16 object-contain flex-shrink-0"
        />
        <img
          src={rcss}
          alt="RCSS"
          className="h-8 xs:h-10 sm:h-12 md:h-16 object-contain flex-shrink-0"
        />
        <img
          src={rset}
          alt="RSET"
          className="h-8 xs:h-10 sm:h-12 md:h-16 object-contain flex-shrink-0"
        />
        <img
          src={rbs}
          alt="RBS"
          className="h-8 xs:h-10 sm:h-12 md:h-16 object-contain flex-shrink-0"
        />
        <img
          src={rcmas}
          alt="RCMAS"
          className="h-8 xs:h-10 sm:h-12 md:h-16 object-contain flex-shrink-0"
        />
        <img
          src={rvcas}
          alt="RVCAS"
          className="h-10 xs:h-12 sm:h-16 md:h-20 object-contain flex-shrink-0"
        />
        
        <div className="flex items-center space-x-0 flex-shrink-0">
          <img
            src={miterdham}
            alt="Miterdham"
            className="h-8 xs:h-10 sm:h-12 md:h-16 object-contain"
          />
          <img
            src={mith}
            alt="Mith"
            className="h-6 xs:h-8 sm:h-9 md:h-14 object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
