import React from "react";
import "./SocialMedia.css";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <>
      <div className="socialMedia-container">
        <div className="socialTitle-container">
          <p className="socialMedia-title">Follow us on</p>
        </div>
        <a
          className="socialMidea-icons insta-icon"
          href="https://www.instagram.com/sfc_youthf?igsh=OXRpb2g1cjE0eGpz"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a
          className="socialMidea-icons"
          href="https://youtube.com/@st.francischurchanandgramd2893?si=ZZONLtqVX0HByn6m"
          target="_blank"
        >
          <FaYoutube />
        </a>
      </div>
    </>
  );
};

export default SocialMedia;
