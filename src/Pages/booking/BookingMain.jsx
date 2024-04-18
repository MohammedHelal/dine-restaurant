import Form from "./Form";
import "./BookingMain.css";
import PropTypes from "prop-types";

function BookingMain({ setOpenModal, setFormData }) {
  return (
    <div className="booking-main">
      <img
        className="booking-main-curve"
        src="./src/assets/images/patterns/pattern-curve-bottom-right.svg"
      />
      <img
        className="booking-main-lines"
        src="./src/assets/images/patterns/pattern-lines.svg"
      />
      <Form setOpenModal={setOpenModal} setFormData={setFormData} />
    </div>
  );
}

export default BookingMain;

BookingMain.propTypes = {
  setOpenModal: PropTypes.func,
  setFormData: PropTypes.func,
};
