import { useState } from "react";
import BookingHeader from "./BookingHeader";
import BookingMain from "./BookingMain";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import PropTypes from "prop-types";
import "./Booking.css";

function Booking({ setCurrentPage }) {
  const [openModal, setOpenModal] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    people: "",
  });

  console.log(formData.date.split(" "));

  return (
    <>
      <BookingHeader />
      <main>
        <BookingMain setOpenModal={setOpenModal} setFormData={setFormData} />
        <Modal open={openModal} close={closeModal}>
          <img src="./src/assets/images/success-green-check-mark-icon.svg" />
          <h2>Thank You {formData.name},</h2>
          <p>
            Your reservation at{" "}
            <strong>
              {formData.date}{" "}
              {formData.time > "12:00" && formData.time <= "12:59"
                ? formData.time + " PM"
                : formData.time > "12:59"
                ? formData.time.split(":")[0] -
                  12 +
                  ":" +
                  formData.time.split(":")[1] +
                  " PM"
                : formData.time + " AM"}
            </strong>{" "}
            has been registered. We will be expecting you on that date.
          </p>
          <p>
            More information has been sent to your email{" "}
            <strong>{formData.email}</strong>, so please check it out.
          </p>
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              setCurrentPage("home");
              setCloseModal(true);
            }}
          >
            Close
          </button>
        </Modal>
      </main>
      <Footer />
    </>
  );
}

export default Booking;

Booking.propTypes = {
  setCurrentPage: PropTypes.func,
};
