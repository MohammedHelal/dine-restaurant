import { useState } from "react";
import Home from "./Pages/home/Home";
import Booking from "./Pages/booking/Booking";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <>
      {currentPage === "home" ? (
        <Home setCurrentPage={setCurrentPage} />
      ) : (
        <Booking setCurrentPage={setCurrentPage} />
      )}
    </>
  );
}

export default App;
