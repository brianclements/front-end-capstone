import style from './Hero.module.css';

const Hero = (props) => {
  return (
    <section id={style["hero-banner"]}>
      <div id={style["padding-div"]}>
          <div id={style["content-div"]}>
            {props.content.map((i) => (i))}
          </div>
        {props.image}
      </div>
    </section>
    );
};

export default Hero;
