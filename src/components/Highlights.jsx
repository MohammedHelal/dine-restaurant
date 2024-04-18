import useScreenSize from "../useHooks/useScreenSize";
import PropTypes from "prop-types";
import "./Highlights.css";

import divide from "../assets/images/patterns/pattern-divide.svg";

export default function Highlights({ img, imgMobile, heading, para }) {
  const screenSize = useScreenSize();

  return (
    <div className="little-highlights">
      <div>
        <img src={screenSize.width >= 768 ? img : imgMobile} />
        <img className="highlights-divide" src={divide} />
      </div>
      <div className="little-highlights-text">
        <h3>{heading}</h3>
        <p>{para}</p>
      </div>
    </div>
  );
}

Highlights.propTypes = {
  img: PropTypes.string.isRequired,
  imgMobile: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};
