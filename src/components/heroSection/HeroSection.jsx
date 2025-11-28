import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="mainHero-container">
        <div className="heroBanner-box">
          <div className="textBox-one">
            <h1 className="eventName">"IBAADAT" - A Musical Evening</h1>
          </div>
          <div className="textBox-two">
            <p className="eventYear">2025</p>
          </div>
          <div className="textBox-three">
            <p className="eventOrganiser">Organised by SFC Youth Fellowship</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
