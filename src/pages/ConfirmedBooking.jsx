import Hero from '../components/Hero';
import Reserve from '../components/Reserve';
import Button from '../components/Button';

import tableAreaImage from '../assets/images/restaurant.jpg';
import './ConfirmedBooking.css';
import reserveStyle from '../components/Reserve.module.css';

const ConfirmedBooking = () => {
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
      <div id="booking-confirmed">
        <h3>Booking Confirmed!</h3>
        <Button 
          text="Go Back"
          navigateTo="/"
          styles={[
            "button-12x3_5rem",
            "button-border-radius-8px"
          ].join(" ")}
        />
        </div>
    </main>
  );
};

export default ConfirmedBooking;
