import { useState } from "react";
import PropTypes from "prop-types";
import useScreenSize from "../../useHooks/useScreenSize";
import "./Family.css";

const Text = {
  family: {
    name: "Family Gathering",
    description:
      "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
    image: "./src/assets/images/homepage/family-gathering-desktop@2x.jpg",
    imageTablet: "./src/assets/images/homepage/family-gathering-tablet@2x.jpg",
    imageMobile: "./src/assets/images/homepage/family-gathering-mobile@2x.jpg",
  },
  special: {
    name: "Special Events",
    description:
      "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
    image: "./src/assets/images/homepage/special-events-desktop@2x.jpg",
    imageTablet: "./src/assets/images/homepage/special-events-tablet@2x.jpg",
    imageMobile: "./src/assets/images/homepage/special-events-mobile@2x.jpg",
  },
  social: {
    name: "Social Events",
    description:
      "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
    image: "./src/assets/images/homepage/social-events-desktop@2x.jpg",
    imageTablet: "./src/assets/images/homepage/social-events-tablet@2x.jpg",
    imageMobile: "./src/assets/images/homepage/social-events-mobile@2x.jpg",
  },
};

function Family({ setCurrentPage }) {
  const [current, setCurrent] = useState("family");
  const screenSize = useScreenSize();

  function socialChanger(e) {
    let id = e.target.id;

    if (id === "family-link") {
      document.getElementById("divide").style.bottom = "120px";
      setCurrent("family");
    }

    if (id === "special-link") {
      document.getElementById("divide").style.bottom = "70px";
      setCurrent("special");
    }

    if (id === "social-link") {
      document.getElementById("divide").style.bottom = "20px";
      setCurrent("social");
    }
  }

  return (
    <section className="flex family-container">
      <article className="image-wrapper">
        {screenSize.width > 1024 ? (
          <img className="family-image" src={Text[current].image} alt="" />
        ) : screenSize.width >= 768 ? (
          <img
            className="family-image"
            src={Text[current].imageTablet}
            alt=""
          />
        ) : (
          <img
            className="family-image"
            src={Text[current].imageMobile}
            alt=""
          />
        )}
        <img
          className="family-curve"
          src="./src/assets/images/patterns/pattern-curve-top-right.svg"
        />
        <img
          className="family-lines"
          src="./src/assets/images/patterns/pattern-lines.svg"
        />
        <img
          id="divide"
          className="family-divide"
          src="./src/assets/images/patterns/pattern-divide.svg"
        />
      </article>
      <article className="text">
        <div>
          <h2>{Text[current].name}</h2>
          <p>{Text[current].description}</p>
          <button
            className="text-button"
            onClick={() => {
              window.scrollTo(0, 0);
              setCurrentPage("booking");
            }}
          >
            Book a table
          </button>
        </div>
        <ul>
          {/*Links component at the bottom of Family component*/}
          <Links
            current={current}
            intended={"family"}
            socialChanger={socialChanger}
            text={"FAMILY GATHERING"}
          />
          <Links
            current={current}
            intended={"special"}
            socialChanger={socialChanger}
            text={"SPECIAL EVENTS"}
          />
          <Links
            current={current}
            intended={"social"}
            socialChanger={socialChanger}
            text={"SOCIAL EVENTS"}
          />
        </ul>
      </article>
    </section>
  );
}

export default Family;

Family.propTypes = {
  setCurrentPage: PropTypes.func,
};

function Links({ current, intended, socialChanger, text }) {
  const screenSize = useScreenSize();

  return (
    <li
      style={{
        borderBottom: `${
          screenSize.width <= 1024 && current === intended
            ? "2px solid var(--color-beaver)"
            : "none"
        }`,
      }}
    >
      <h4
        id={`${intended}-link`}
        onClick={(e) => socialChanger(e)}
        style={{
          color: `${
            current === intended ? "#17192b" : "var(--color-shuttle-gray)"
          }`,
        }}
      >
        {text}
      </h4>
    </li>
  );
}

Links.propTypes = {
  current: PropTypes.string.isRequired,
  intended: PropTypes.string.isRequired,
  socialChanger: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
