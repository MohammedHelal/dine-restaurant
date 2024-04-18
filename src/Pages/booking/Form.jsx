import { useState } from "react";
import "./BookingMain.css";
import PropTypes from "prop-types";

let d = new Date();
let mm = d.toLocaleString("default", { month: "2-digit" });
let dd = d.toLocaleString("default", { day: "2-digit" });
let yy = d.getFullYear();

const myDateString = yy + "-" + mm + "-" + dd;

function Form({ setOpenModal, setFormData }) {
  //input states
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [peopleInput, setPeopleInput] = useState(1);
  //error states
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [timeError, setTimeError] = useState("");

  function inputChangeHandler(e) {
    e.preventDefault();
    let id = e.target.id;
    let value = e.target.value;

    if (id === "name") {
      setNameInput(value);
    }

    if (id === "email") {
      setEmailInput(value);
    }

    if (id === "date") {
      setDateInput(value);
    }

    if (id === "time") {
      setTimeInput(value);
    }
  }

  function blurHandler(e) {
    let id = e.target.id;

    if (id === "name") {
      if (nameInput === "") {
        setNameError(true);
      } else setNameError(false);
    }

    if (id === "email") {
      if (emailInput === "") {
        setEmailError(true);
      } else setEmailError(false);
    }

    if (id === "date") {
      if (dateInput === "") {
        setDateError(true);
      } else setDateError(false);
    }

    if (id === "time") {
      if (timeInput === "") {
        setTimeError("This field is incomplete");
      } else if (timeInput > "21:00" || timeInput < "09:00") {
        setTimeError("Please choose time between 9am and 9pm.");
      } else setTimeError("");
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    let error = false;

    if (nameInput === "") {
      setNameError(true);
      error = true;
    } else setNameError(false);

    if (emailInput === "") {
      setEmailError(true);
      error = true;
    } else setEmailError(false);

    if (dateInput === "") {
      setDateError(true);
      error = true;
    } else setDateError(false);

    if (timeInput === "") {
      setTimeError("This field is incomplete");
      error = true;
    } else if (timeInput > "21:00" || timeInput < "09:00") {
      setTimeError("Please choose time between 9am and 9pm.");
      error = true;
    } else setTimeError("");

    if (error) {
      return;
    } else {
      console.log(
        `Name: ${nameInput}\nEmail: ${emailInput}\nDate: ${dateInput}\nTime: ${timeInput}\nNo. of People: ${peopleInput}`
      );
      let date = dateInput.split("-");

      let month = new Date();
      month.setMonth(date[1] - 1);

      let newDate =
        date[2] +
        " " +
        month.toLocaleString("en-US", { month: "short" }) +
        " " +
        date[0];

      setOpenModal(true);
      setFormData((prevState) => {
        return {
          ...prevState,
          name: nameInput,
          email: emailInput,
          date: newDate,
          time: timeInput,
          people: peopleInput,
        };
      });
    }
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-wrapper">
        <input
          id="name"
          className={nameError ? "input-error" : "input-normal"}
          type="text"
          value={nameInput}
          placeholder="Name"
          onChange={inputChangeHandler}
          onBlur={blurHandler}
        />
        {nameError && <p className="error">This field is required</p>}
      </div>
      <div className="input-wrapper">
        <input
          id="email"
          className={emailError ? "input-error" : "input-normal"}
          type="text"
          value={emailInput}
          placeholder="Email"
          onChange={inputChangeHandler}
          onBlur={blurHandler}
        />
        {emailError && <p className="error">This field is required</p>}
      </div>
      <fieldset className="form-flex">
        <label className={dateError ? "label-error" : "label-normal"}>
          Pick a date
          {dateError && (
            <>
              <br />
              <span className="error">This field is incomplete</span>
            </>
          )}
        </label>
        <input
          id="date"
          type="date"
          className={dateError ? "input-error" : "input-normal"}
          value={dateInput}
          onChange={inputChangeHandler}
          onBlur={blurHandler}
          min={myDateString}
        />
      </fieldset>
      <fieldset className="form-flex">
        <label className={timeError ? "label-error" : "label-normal"}>
          Pick a time
          {timeError && (
            <>
              <br />
              <span className="error">{timeError}</span>
            </>
          )}
        </label>
        <input
          id="time"
          className={timeError ? "input-error" : "input-normal"}
          type="time"
          value={timeInput}
          onChange={inputChangeHandler}
          onBlur={blurHandler}
        />
      </fieldset>
      <fieldset className="number-input">
        <button
          onClick={(e) => {
            e.preventDefault();
            if (peopleInput > 1) {
              setPeopleInput((prevState) => prevState - 1);
            }
          }}
        >
          -
        </button>
        <input
          className="quantity"
          min="1"
          name="quantity"
          value={
            peopleInput === 1
              ? `${peopleInput} person`
              : `${peopleInput} people`
          }
          type="text"
          onChange={(e) => {
            let currentValue = e.target.value;
            if (currentValue > 1 && currentValue < 15) {
              setPeopleInput(currentValue);
            }
          }}
          disabled
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            if (peopleInput < 15) {
              setPeopleInput((prevState) => prevState + 1);
            }
          }}
          className="plus"
        >
          +
        </button>
      </fieldset>
      <button type="submit" className="submit-btn">
        Book a reservation
      </button>
    </form>
  );
}

export default Form;

Form.propTypes = {
  setOpenModal: PropTypes.func,
  setFormData: PropTypes.func,
};
