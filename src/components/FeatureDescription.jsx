import PropTypes from "prop-types";
import "./FeatureDescription.css";

import divide from "../assets/images/patterns/pattern-divide.svg";

export default function FeatureDescription({ heading, para, classes }) {
  return (
    <article className={"description-flex " + classes}>
      <img src={divide} />
      <h2>{heading}</h2>
      <p>{para}</p>
    </article>
  );
}

FeatureDescription.propTypes = {
  heading: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  classes: PropTypes.string,
};
