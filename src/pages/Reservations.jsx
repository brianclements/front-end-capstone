// import { useState } from 'react';
import { useReducer } from 'react';
import Hero from '../components/Hero';
import Reserve from '../components/Reserve'
import BookingForm from '../components/BookingForm';
import Button from '../components/Button';
import { initializeTimes, initialState, submitForm } from '../components/dateState.js';

import tableAreaImage from '../assets/images/restaurant.jpg';
import './Reservations.css';
import reserveStyle from '../components/Reserve.module.css';

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
  const [availableTimes, dispatch] = useReducer(initializeTimes, initialState);

  const updateTimes = (d) => {
    dispatch({
      date: d
    });
  };

  return (
    <main>
      <Hero
        content={[
          <Reserve style={reserveStyle}/>
        ]}
        image={
          <img src={tableAreaImage} alt="Eating area outside"/>
        }
      />
      <BookingForm 
        availableTimes={availableTimes}
        updateAvailableTimes={updateTimes}
        submitForm={submitForm}
      />
    </main>
  );
};

export default Reservations;
