import Hero from '../components/Hero';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import Backstory from '../components/Backstory';
import Bio from '../components/Bio'
import Button from '../components/Button';

import './Main.css';
import bioStyle from '../components/Bio.module.css';
import foodTrayImage from '../assets/images/food_tray.jpg';

const Main = () => {
  return (
    <main>
      <Hero
        content={[
          <Bio style={bioStyle}/>,
          <Button 
            text="Reserve a Table"
            navigateTo="/reservations"
            size="button-12x4rem"
          />
        ]}
        image={
          <img src={foodTrayImage} alt="Chef holding a tray of food"/>
        }
      />
      <Specials/>
      <Testimonials/>
      <Backstory/>
    </main>
    );
};

export default Main;
