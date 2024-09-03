import style from './Hero.module.css';

const Hero = (props) => {
  let content = props.content || [];
  let img = props.image || null;

  return (
    <section id={style["hero-banner"]}>
      <div id={style["padding-div"]}>
          <div id={style["content-div"]}>
            {content.map((item, index) => (
              <div key={index}>
                {item}
              </div>))}
          </div>
        {props.image}
      </div>
    </section>
    );
};

export default Hero;
