import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { dateAsNum, formattedDate } from '../utils/dateHelpers.js';

import style from './BookingForm.module.css';

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");
  const [time, setTime] = useState(props.availableTimes[0]);
  const [guests, setGuests] = useState("0");
  const [occasion, setOccasion] = useState("None");
  const [location, setLocation] = useState("--");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onDateChange = (e) => {
    const newDate = e.target.value;
    if (dateAsNum(newDate) < dateAsNum(formattedDate())) {
      setDateError("Date cannot be in the past");
      setDate("");
    } else if (dateAsNum(newDate) > (dateAsNum(formattedDate(30)))) {
      setDateError("Date cannot be more than 30 days in the future");
      setDate("");
    } else {
      setDateError("");
      setDate(newDate);
      props.updateAvailableTimes(newDate);
    };
    guests !== "0" && time && toggleFieldSet(2);
  };

  const onGuestChange = (e) => {
    setGuests(e.target.value);
    date && toggleFieldSet(2);
  };

  const onLocationChange = (e) => {
    setLocation(e.target.value)
    if (location === "--") {
      const elem = document.getElementById('location-blank');
      elem.remove();
    };
    toggleFieldSet(3);
  };

  const onFirstNameChange = (e) => {
    setFirstName(e.target.value)
    lastName && (phoneNum || email) && toggleFieldSet(4);
  };

  const onLastNameChange = (e) => {
    setLastName(e.target.value)
    firstName && (phoneNum || email) && toggleFieldSet(4);
  };

  const onPhoneNumChange = (e) => {
    setPhoneNum(e.target.value)
    firstName && lastName && toggleFieldSet(4);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value)
    firstName && lastName && toggleFieldSet(4);
  };

  const handleSubmit = (e) => {
    //Prevent default form action
    e.preventDefault();

    //Sending form data to confirmation page
    const formData = new FormData(e.target);
    let data = {}
    formData.forEach((value, key) => data[key] = value);
    console.log(formData);

    //API call as per instructions
    if (props.submitForm(e.target)) {
      navigate('/reservations/success');
    };

  };

  const toggleFieldSet = (fieldSetNo) => {
    const elem = document.getElementById('fieldset' + fieldSetNo);
    elem.classList.add(style.show)
    elem.classList.add(style["border-top-1px"])
    elem.classList.add(style["border-radius-bottom"])
  };

  return (
    <div id={style["padding-div"]}>
      <form 
        id={style.bookingForm}
        onSubmit={handleSubmit}
        aria-label="Booking Form"
      >
        <fieldset
          id="fieldset1"
          className={[
            style["border-radius-top"],
            style["border-radius-bottom"],
            ].join(" ")
          }>
          <div className={style.field}>
            <label
              id="date-label"
              htmlFor="res-date"
              >
                Choose Date
            </label>
            <input 
              type="date" 
              id="res-date"
              name="res-date"
              aria-labelledby="date-label"
              value={date}
              onChange={onDateChange}
            />
            {dateError && <p className={style["error-message"]}>{dateError}</p>}
          </div>
          <div className={style.field}>
            <label
              id="time-label"
              htmlFor="res-time"
              >
                Choose Time
            </label>
            <select
              id="res-time "
              aria-labelledby="time-label"
              name="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              >
                {props.availableTimes.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
            </select>
          </div>
          <div className={style.field}>
            <label
              id="guests-label"
              htmlFor="guests"
              >
                No. of Guests
            </label>
            <input
              aria-labelledby="guests-label"
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              name="guests"
              value={guests}
              onChange={onGuestChange}
            />
          </div>
        </fieldset>
        <fieldset
          id="fieldset2"
          className={style.hidden}>
          <div className={style.field}>
            <label
              id="occasion-label"
              htmlFor="occasion"
              >
                Occasion
            </label>
            <select
              id="occasion"
              name="occasion"
              aria-labelledby="occasion-label"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              >
                <option value="none">None</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
            </select>
          </div>
          <div className={style.field}>
            <label
              id="location-label"
              htmlFor="location"
              >
                Your Preferred Seating Location
            </label>
            <select
              id="location"
              name="location"
              aria-labelledby="location-label"
              value={location}
              onChange={onLocationChange}
              >
                <option id="location-blank" value="--">--</option>
                <option value="inside">Inside</option>
                <option value="outside">Outside</option>
            </select>
          </div>
        </fieldset>
        <fieldset
          id="fieldset3"
          className={style.hidden}>
          <div className={style.field}>
            <label
              id="firstName-label"
              htmlFor="firstName"
              >
                First Name
            </label>
            <input 
              type="text" 
              id="firstName"
              name="firstName"
              aria-labelledby="firstName-label"
              required
              value={firstName}
              onChange={onFirstNameChange}
            />
          </div>
          <div className={style.field}>
            <label
              id="lastName-label"
              htmlFor="lastName"
              >
                Last Name
            </label>
            <input 
              type="text" 
              id="lastName"
              name="lastName"
              aria-labelledby="lastName-label"
              required
              value={lastName}
              onChange={onLastNameChange}
            />
          </div>
          <p>
            Either Phone <b>or</b> Email Required
          </p>
          <div className={style.field}>
            <label
              id="phoneNumber-label"
              htmlFor="phoneNumber"
              >
                Phone
            </label>
            <input 
              type="tel" 
              id="phoneNumber"
              name="phoneNumber"
              aria-labelledby="phoneNumber-label"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              minLength="10"
              maxLength="14"
              placeholder="000-000-0000"
              value={phoneNum}
              onChange={onPhoneNumChange}
            />
          </div>
          <div className={style.field}>
            <label
              id="email-label"
              htmlFor="email"
              >
                Email
            </label>
            <input 
              type="email" 
              id="email"
              name="email"
              aria-labelledby="email-label"
              placeholder="you@example.com"
              pattern=".+@example\.com"
              size="30"
              value={email}
              onChange={onEmailChange}
            />
          </div>
        </fieldset>
        <fieldset
          id="fieldset4"
          className={[
            style["border-radius-bottom"],
            style.hidden].join(" ")
          }>
          <button
            disabled={
              !date ||
              !time ||
              !guests ||
              guests === 0 ||
              !occasion ||
              !firstName ||
              !lastName ||
              (((!phoneNum || email) && (phoneNum || !email)) &&
                !(phoneNum || email)
              )
            }
            type="submit"
            >
              Make Your Reservation
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default BookingForm;
