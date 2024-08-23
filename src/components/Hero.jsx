import style from './Hero.module.css';
import Bio from './Hero.Bio'
import foodTrayImage from '../assets/images/food_tray.jpg';

const Hero = () => {
  return (
    <section id={style["hero-banner"]}>
      <div id={style["padding-div"]}>
        <Bio/>
        <img src={foodTrayImage} alt="Shef holding a tray of food"/>
      </div>
    </section>
    );
};

export default Hero;
