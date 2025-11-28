import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="foot-container">
          <div className="metaInfo-container">
            <div className="churchName-container">
              <p className="church-name">
                St. Francis Church Youth Fellowship Office Bearers
              </p>
            </div>
            <div className="officials-name">
              <div className="obName-container">
                <p className="obNames">Stanly S Lal</p>
              </div>
              <div className="obName-container">
                <p className="obNames">Anugrah Raju</p>
              </div>
              <div className="obName-container">
                <p className="obNames">Monika</p>
              </div>
              <div className="obName-container">
                <p className="obNames">Jennifer George</p>
              </div>
            </div>
            <div className="officials-designation">
              <div className="obDesignation-container">
                <p className="obDesignation">SFC Youth President</p>
              </div>
              <div className="obDesignation-container">
                <p className="obDesignation">SFC Youth Vice-President</p>
              </div>
              <div className="obDesignation-container">
                <p className="obDesignation">SFC Youth Secretary</p>
              </div>
              <div className="obDesignation-container">
                <p className="obDesignation">SFC Youth Treasurer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
