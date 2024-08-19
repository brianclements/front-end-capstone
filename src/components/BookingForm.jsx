import { useState } from "react";
import style from './BookingForm.module.css';

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("0");
  const [occasion, setOccasion] = useState("");

  const onDateChange = (e) => {
    setDate(e.target.value);
    props.updateAvailableTimes(e.target.value);
  };

  const handleSubmit = (e) => {
    //Prevent default form action
    e.preventDefault();

    //Form validation
    //TODO

    props.parseForm(e.target);

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
                <option key={time}>{time}</option>
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
              <option>Birthday</option>
              <option>Anniversary</option>
          </select>
          <button
            disabled={!date | !time | !guests | !occasion}
            type="submit"
            >
              Make Your Reservation
          </button>
        </fieldset>
      </form>
  );
};

export default BookingForm;
