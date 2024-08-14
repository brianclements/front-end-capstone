// import { useState } from "react";
import { useReducer } from "react";
import Hero from '../components/Hero';
import BookingForm from '../components/BookingForm';
import { dateReducer, initialState } from '../components/dateState.js';
import './Reservations.css';


const Reservations = () => {

  //////////////////////////////////////////
  // useState method
  // deactivated but left here for posterity
  /*
  const [availableTimes, setAvailableTimes] = useState(initialState);

  const updateTimes = () => {
    setAvailableTimes(prevState => {
      return [ ...prevState];
    });
  };
  */

  //////////////////////////////////////////
  // useReducer method
  const [availableTimes, dispatch] = useReducer(dateReducer, initialState);

  const updateTimes = (d) => {
    dispatch({
      date: d
    });
  };

  return (
    <main>
      <Hero/>
      <BookingForm availableTimes={availableTimes} updateAvailableTimes={updateTimes}/>
    </main>
  );
};

export default Reservations;
