import { useState } from "react";
import Hero from '../components/Hero';
import BookingForm from '../components/BookingForm';
import './Reservations.css';

const Reservations = () => {

  const [availableTimes, setAvailableTimes] = useState([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ]
  );

  const updateAvailableTimes = () => {
    setAvailableTimes(prevState => {
      return [ ...prevState];
    });
  };

  return (
    <main>
      <Hero/>
      <BookingForm availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes}/>
    </main>
  );
};

export default Reservations;
