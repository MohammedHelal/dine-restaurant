import Footer from "../../components/Footer";
import Header from "./Header";
import EnjoyAndLocal from "./Enjoy";
import JustBlack from "./JustBlack";
import Family from "./Family";
import PropTypes from "prop-types";
import "./Home.css";

function Home({ setCurrentPage }) {
  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      <main>
        <EnjoyAndLocal />
        <JustBlack />
        <Family setCurrentPage={setCurrentPage} />
        <Reservation setCurrentPage={setCurrentPage} />
      </main>
      <Footer />
    </>
  );
}

export default Home;

function Reservation({ setCurrentPage }) {
  return (
    <section className="reservation">
      <h2>Ready to make a reservation?</h2>
      <button
        onClick={() => {
          window.scrollTo(0, 0);
          setCurrentPage("booking");
        }}
      >
        Book a table
      </button>
    </section>
  );
}

Home.propTypes = {
  setCurrentPage: PropTypes.func,
};

Reservation.propTypes = {
  setCurrentPage: PropTypes.func,
};
