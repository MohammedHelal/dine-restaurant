import "./Enjoy.css";
import useScreenSize from "../../useHooks/useScreenSize";
import FeatureDescription from "../../components/FeatureDescription";

function EnjoyAndLocal() {
  const screenSize = useScreenSize();

  return (
    <section className="grid">
      <article className="relative-container">
        <img
          className="enjoy-img"
          src={`./src/assets/images/homepage/enjoyable-place-${
            screenSize.width > 1024
              ? "desktop"
              : screenSize.width >= 768
              ? "tablet"
              : "mobile"
          }@2x.jpg`}
        />
        <img
          className="enjoy-curve"
          src={`./src/assets/images/patterns/${
            screenSize.width >= 1024
              ? "pattern-curve-top-right"
              : "pattern-curve-bottom-right"
          }.svg`}
        />
      </article>
      <FeatureDescription
        classes={"enjoy-text"}
        heading={"Enjoyable place for all the family"}
        para={
          "Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
        }
      />
      <FeatureDescription
        classes={"local-text"}
        heading={"The most locally sourced food"}
        para={
          "All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
        }
      />
      <article className="relative-container">
        <img
          src={`./src/assets/images/homepage/locally-sourced-${
            screenSize.width > 1024
              ? "desktop"
              : screenSize.width >= 768
              ? "tablet"
              : "mobile"
          }@2x.jpg`}
          alt=""
          className="local-img"
        />
        <img
          className="local-curve"
          src="./src/assets/images/patterns/pattern-curve-top-left.svg"
        />
        <img
          className="local-pattern"
          src="./src/assets/images/patterns/pattern-lines.svg"
        />
      </article>
    </section>
  );
}

export default EnjoyAndLocal;
