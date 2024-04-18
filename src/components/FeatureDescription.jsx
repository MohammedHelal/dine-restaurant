import PropTypes from "prop-types";
import "./FeatureDescription.css";

export default function FeatureDescription({ heading, para, classes }) {
  return (
    <article className={"description-flex " + classes}>
      <img src="./src/assets/images/patterns/pattern-divide.svg" />
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
