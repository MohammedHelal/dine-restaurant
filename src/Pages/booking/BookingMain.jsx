import Form from "./Form";
import "./BookingMain.css";
import PropTypes from "prop-types";

import curveBottomRight from "../../assets/images/patterns/pattern-curve-bottom-right.svg";
import lines from "../../assets/images/patterns/pattern-lines.svg";

function BookingMain({ setOpenModal, setFormData }) {
  return (
    <div className="booking-main">
      <img className="booking-main-curve" src={curveBottomRight} />
      <img className="booking-main-lines" src={lines} />
      <Form setOpenModal={setOpenModal} setFormData={setFormData} />
    </div>
  );
}

export default BookingMain;

BookingMain.propTypes = {
  setOpenModal: PropTypes.func,
  setFormData: PropTypes.func,
};
