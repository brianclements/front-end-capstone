// import { useState } from "react";
import { useReducer } from "react";
import Hero from '../components/Hero';
import BookingForm from '../components/BookingForm';
import BookingFormReducer from '../components/BookingFormReducer';
import dateReducer from '../components/dateReducer.js';
import './Reservations.css';


const Reservations = () => {

  //////////////////////////////////////////
  // useState
  // deactivated but left here for posterity
  /*
  const [availableTimes, setAvailableTimes] = useState([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
  ]);
  const updateAvailableTimes = () => {
    setAvailableTimes(prevState => {
      return [ ...prevState];
    });
  };
  */

  //////////////////////////////////////////
  // useReducer
  const initialState = [
    "Please select a date"
  ];

  const [availableTimes, dispatch] = useReducer(dateReducer, initialState);

  const updateTimes = (d) => {
    dispatch({
      date: d
    });
  };

  return (
    <main>
      <Hero/>
      {/* deactivated but left here for posterity
      <BookingForm availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes}/>
      */}
      <BookingFormReducer availableTimes={availableTimes} updateAvailableTimes={updateTimes}/>
      {/*
      */}
    </main>
  );
};

export default Reservations;
