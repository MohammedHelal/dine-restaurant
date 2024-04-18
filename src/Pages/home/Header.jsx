import "./Header.css";
import PropTypes from "prop-types";

function Header({ setCurrentPage }) {
  return (
    <header>
      <article className="header-text-wrapper">
        <div className="header-text">
          <img src="./src/assets/images/logo.svg" alt="Logo" />
          <div>
            <h1>Exquisite dining since 1989</h1>
            <p>
              Experience our seasonal menu in beautiful country surroundings.
              Eat the freshest produce from the comfort of our farmhouse.
            </p>
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                setCurrentPage("booking");
              }}
            >
              Book a table
            </button>
          </div>
        </div>
      </article>
    </header>
  );
}

export default Header;

Header.propTypes = {
  setCurrentPage: PropTypes.func,
};
