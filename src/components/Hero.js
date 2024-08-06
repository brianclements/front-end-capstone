import style from './Hero.module.css';
import Bio from './Hero.Bio'

const Hero = () => {
  return (
    <section id={style["hero-banner"]}>
      <div id={style["padding-div"]}>
        <Bio/>
      </div>
    </section>
    );
};

export default Hero;
