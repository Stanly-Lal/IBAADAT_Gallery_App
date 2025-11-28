import React, { useEffect } from "react";
import "./MoveToTop.css";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

const MoveToTop = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="mttBtn-container">
        <div
          className="mttbtn"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-offset="0"
          data-aos-duration="600"
        >
          <a href="#top" className="mttBtn-icon">
            <MdKeyboardDoubleArrowUp />
          </a>
          <a className="mttBtn-text" href="#top">
            Move To Top
          </a>
          <a href="#top" className="mttBtn-icon">
            <MdKeyboardDoubleArrowUp />
          </a>
        </div>
      </div>
    </>
  );
};

export default MoveToTop;
