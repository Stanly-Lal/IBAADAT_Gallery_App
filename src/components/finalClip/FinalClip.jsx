import React from "react";
import "./FinalClip.css";

const FinalClip = () => {
  return (
    <>
      <div className="main-container">
        <div className="clipTitle-container">
          <h2 className="clip-title">IBAADAT - 2025 Final Clip</h2>
        </div>
        <div className="clip-container">
          <iframe
            className="clip"
            src="https://www.youtube.com/embed/KMbjDwlNY2g?si=aN47RzyjUS_Z_CNN"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default FinalClip;
