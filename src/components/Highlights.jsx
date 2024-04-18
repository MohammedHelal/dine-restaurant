import useScreenSize from "../useHooks/useScreenSize";
import PropTypes from "prop-types";
import "./Highlights.css";

export default function Highlights({ imgSrcBit, heading, para }) {
  const screenSize = useScreenSize();

  return (
    <div className="little-highlights">
      <div>
        <img
          src={`./src/assets/images/homepage/${imgSrcBit}-${
            screenSize.width >= 768 ? "desktop-tablet" : "mobile"
          }.jpg`}
        />
        <img
          className="highlights-divide"
          src="./src/assets/images/patterns/pattern-divide.svg"
        />
      </div>
      <div className="little-highlights-text">
        <h3>{heading}</h3>
        <p>{para}</p>
      </div>
    </div>
  );
}

Highlights.propTypes = {
  imgSrcBit: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};
