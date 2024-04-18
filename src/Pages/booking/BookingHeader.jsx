import "./BookingHeader.css";
import logo from "../../assets/images/logo.svg";

function BookingHeader() {
  return (
    <header className="booking-header-wrapper">
      <div className="booking-header-text">
        <img src={logo} alt="Logo" />
        <div>
          <h1>Reservations</h1>
          <p>
            We can’t wait to host you. If you have any special requirements
            please feel free to call on the phone number below. We’ll be happy
            to accommodate you.
          </p>
        </div>
      </div>
    </header>
  );
}

export default BookingHeader;
