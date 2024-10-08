import "./Footer.css";
import logo from "../assets/images/logo.svg";
import PropTypes from "prop-types";

function Footer({ setCurrentPage }) {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" onClick={() => setCurrentPage("home")} />
      <div>
        <h4>Marthwaite, Sedbergh</h4>
        <h4>Cumbria</h4>
        <h4>+00 44 123 4567</h4>
      </div>
      <div>
        <h4>Open Times</h4>
        <h4>Mon - Fri: 09:00 AM - 10:00 PM</h4>
        <h4>Sat - Sun: 09:00 AM - 11:30 PM</h4>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};

export default Footer;
