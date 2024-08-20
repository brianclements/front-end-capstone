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
  };

  const handleSubmit = (e) => {
    //Prevent default form action
    e.preventDefault();

    //Form validation
    //TODO

    if (props.submitForm(e.target)) {
      navigate('/reservations/success');
    };

    //Reset Form
    setDate("");
    setTime("");
    setGuests("");
    setOccasion("");
  };

  return (
      <form 
        id={style.bookingForm}
        onSubmit={handleSubmit}
        aria-label="Booking Form"
      >
        <fieldset>
          <label
            id="date-label"
            htmlFor="res-date"
            >
              Choose date
          </label>
          <input 
            type="date" 
            id="res-date"
            aria-labelledby="date-label"
            value={date}
            onChange={onDateChange}
          />
          {dateError && <p className={style["error-message"]}>{dateError}</p>}
          <label
            id="time-label"
            htmlFor="res-time"
            >
              Choose time
          </label>
          <select
            id="res-time "
            aria-labelledby="time-label"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            >
              {props.availableTimes.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
          </select>
          <label
            id="guests-label"
            htmlFor="guests"
            >
              Number of guests
          </label>
          <input
            aria-labelledby="guests-label"
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
          <label
            id="occasion-label"
            htmlFor="occasion"
            >
              Occasion
          </label>
          <select
            id="occasion"
            aria-labelledby="occasion-label"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            >
              <option value="none">None</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
          </select>
          <button
            disabled={!date | !time | !guests | guests === 0 | !occasion}
            type="submit"
            >
              Make Your Reservation
          </button>
        </fieldset>
      </form>
  );
};

export default BookingForm;
