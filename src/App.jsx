import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CountdownPage from "./pages/CountdownPage";
import Contact from "./pages/Contact";
import Institutes from "./components/Institutes";
import AdvisoryBoard from "./components/AdvisoryBoard"; 
import Date from "./pages/Highlights";
import Conference from "./pages/conference";
import "@fontsource/orbitron"; 
import ScrollToTop from "./components/ScrollToTop"; 
import ConferenceThemes from "./pages/conference/ConferenceThemes";
import ConferenceSpeakers from "./pages/conference/ConferenceSpeakers";
import ConferenceCommittee from "./pages/conference/ConferenceCommittee";
import ConferenceSubmission from "./pages/conference/ConferenceSubmission";
import ConferenceRegistration from "./pages/conference/ConferenceRegistration";
import ConferenceNavbar from "./components/ConferenceNavbar";
import Hackathon from "./pages/conference/Hackathon";
import Mithradham from "./pages/mith";
import Partners from "./pages/Partners";
import PosterExpo from "./pages/conference/PosterExpo";
import Speakers from "./pages/Speakers";
import Expo from "./pages/ExpoPage";
import Workshop from "./pages/Workshop";
import Day1 from "./pages/Day1";
import Day2 from "./pages/Day2";
import Day3 from "./pages/Day3";
import Day4 from "./pages/Day4";
import Day4Panel from "./pages/Day4Panel";
import Day6 from "./pages/Day6";
import Marathon from "./pages/Marathon";






export default function App() {
  const location = useLocation();
  const hideNavbar =     location.pathname === "/conference" || location.pathname === "/mithradham";
  

  return (
    <div className="flex flex-col min-h-screen font-sans text-white">
      {!hideNavbar && <Navbar />}

      <main className="flex-grow">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countdown" element={<CountdownPage />} />
          <Route path="/institutes" element={<Institutes />} />
          <Route path="/advisory-board" element={<AdvisoryBoard />} />
          <Route path="/confluence-date" element={<Date />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/conference" element={<Conference />} />
          <Route path="/conference" element={<ConferenceNavbar />} />
          <Route path="/conference/themes" element={<ConferenceThemes />} />
          <Route path="/conference/speakers" element={<ConferenceSpeakers />} />  
          <Route path="/conference/committee" element={<ConferenceCommittee />} />
          <Route path="/conference/submission" element={<ConferenceSubmission />} />
          <Route path="/conference/registration" element={<ConferenceRegistration />} />
          <Route path="/conference/hackathon" element={<Hackathon />} /> 
          <Route path="/mithradham" element={<Mithradham />} /> 
          <Route path="/partners" element={<Partners />} />
          <Route path="/conference/poster-expo" element={<PosterExpo />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/call-for-expo" element={<Expo />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/day1" element={<Day1 />} />
          <Route path="/day2" element={<Day2 />} />
          <Route path="/day3" element={<Day3 />} />
          <Route path="/day4" element={<Day4 />} />
          <Route path="/day4/panel" element={<Day4Panel />} />
          <Route path="/day6" element={<Day6 />} />
          <Route path="marathon" element={<Marathon />}/>





          <Route path="*" element={<Navigate to="/" replace />} /> 
        </Routes>
      </main>
    </div>
  );
}
