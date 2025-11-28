import React from "react";
import Header from "./components/header/Header.jsx";
import HeroSection from "./components/heroSection/HeroSection.jsx";
import FinalClip from "./components/finalClip/FinalClip.jsx";
import ParticipantClips from "./components/ParticipantClips/ParticipantClips.jsx";
import Footer from "./components/footer/Footer.jsx";
import MoveToTop from "./components/moveToTop/MoveToTop.jsx";
import SocialMedia from "./socialMedia/SocialMedia.jsx";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FinalClip />
      <ParticipantClips />
      <SocialMedia />
      <MoveToTop />
      <Footer />
    </>
  );
};

export default App;
