import { useState } from "react";
import style from './BookingForm.module.css';

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    //Prevent default form action
    e.preventDefault();

    //Form validation
    //TODO

    // console.log(date, time, guests, occasion);

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
      >
        <fieldset>
          <label htmlFor="res-date">Choose date</label>
          <input 
            type="date" 
            id="res-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time "
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {props.availableTimes.map(time => (
              <option key={time}>{time}</option>
            ))}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
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
