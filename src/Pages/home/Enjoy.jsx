import "./Enjoy.css";
import useScreenSize from "../../useHooks/useScreenSize";
import FeatureDescription from "../../components/FeatureDescription";

import enjoyable from "../../assets/images/homepage/enjoyable-place-desktop@2x.jpg";
import enjoyableTablet from "../../assets/images/homepage/enjoyable-place-tablet@2x.jpg";
import enjoyableMobile from "../../assets/images/homepage/enjoyable-place-mobile@2x.jpg";
import local from "../../assets/images/homepage/locally-sourced-desktop@2x.jpg";
import localTablet from "../../assets/images/homepage/locally-sourced-tablet@2x.jpg";
import localMobile from "../../assets/images/homepage/locally-sourced-mobile@2x.jpg";

import curveBottomRight from "../../assets/images/patterns/pattern-curve-bottom-right.svg";
import curveTopRight from "../../assets/images/patterns/pattern-curve-top-right.svg";
import curveTopLeft from "../../assets/images/patterns/pattern-curve-top-left.svg";
import lines from "../../assets/images/patterns/pattern-lines.svg";

function EnjoyAndLocal() {
  const screenSize = useScreenSize();

  return (
    <section className="grid">
      <article className="relative-container">
        <img
          className="enjoy-img"
          src={
            screenSize.width > 1024
              ? enjoyable
              : screenSize.width >= 768
              ? enjoyableTablet
              : enjoyableMobile
          }
        />
        <img
          className="enjoy-curve"
          src={screenSize.width >= 1024 ? curveTopRight : curveBottomRight}
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
          src={
            screenSize.width > 1024
              ? local
              : screenSize.width >= 768
              ? localTablet
              : localMobile
          }
          alt=""
          className="local-img"
        />
        <img className="local-curve" src={curveTopLeft} />
        <img className="local-pattern" src={lines} />
      </article>
    </section>
  );
}

export default EnjoyAndLocal;
