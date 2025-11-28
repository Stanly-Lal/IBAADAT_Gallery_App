import React, { useRef, useState } from "react";
import "./Header.css";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [hamValue, setHamValue] = useState(false);
  const hamIcon = useRef(null);
  const toggleMenu = useRef(null);

  const hamClick = () => {
    setHamValue(!hamValue);

    if (hamValue) {
      hamIcon.current.style.transform = "rotateZ(0deg)";
      toggleMenu.current.style.top = "-200%";
    } else {
      hamIcon.current.style.transform = "rotateZ(-360deg)";
      toggleMenu.current.style.top = "90px";
    }
  };

  return (
    <>
      <div className="header" id="top">
        <div className="head-left">
          <div className="mainLogo-container"></div>
          <div className="logoText-container">
            <h1 className="logoText">St. Francis Church, Anand Gram</h1>
          </div>
        </div>
        <div className="head-right">
          <button
            ref={hamIcon}
            onClick={() => hamClick()}
            className="toggle-btn"
          >
            {hamValue ? <IoCloseSharp /> : <RiMenu3Fill />}
          </button>
        </div>
      </div>
      <div ref={toggleMenu} className="toggle-menu">
        <h1 className="verse">
          "आपस में भजन और स्तुतिगान और आत्मिक गीत गाया करो, और अपने अपने मन में
          प्रभु के साम्हने गाते और कीर्तन करते रहो।"
        </h1>
        <p className="verse-reference">इफिसियों 5 : 19</p>
      </div>
    </>
  );
};

export default Header;
