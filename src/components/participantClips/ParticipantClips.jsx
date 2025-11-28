import React, { useState } from "react";
import "./ParticipantClips.css";
import { FaDownload } from "react-icons/fa";
import ibaadatDataBase from "../../api/IbaadatDataBase";

const ParticipantClips = () => {
  const [videoData, setVideoData] = useState(ibaadatDataBase);

  return (
    <>
      <div className="allVideo-mainContainer">
        <div className="allVid-headingContainer">
          <h2 className="allVid-heading">All Participant's Clips</h2>
        </div>
        <div className="allVid-container">
          {videoData.map((res) => {
            return (
              <div className="singleVid-container" key={res.id}>
                <div className="video-container">
                  <iframe
                    className="allPart-vids"
                    src={res.streamLink}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="textContent-container">
                  <h2 className="partVid-title">Title : {res.title} </h2>
                  <p className="partVid-category">Category : {res.category} </p>
                  <div className="downloadSection-Container">
                    <p className="partVid-position">
                      Position : {res.position}
                    </p>
                    <a
                      className="downloadBtn"
                      href={res.downloadPath}
                      target="_blank"
                    >
                      Download Video <FaDownload />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ParticipantClips;
