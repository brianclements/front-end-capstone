import TestimonialCard from './TestimonialCard';
import style from './Testimonials.module.css';
import id1Avatar from '../assets/images/id1.jpeg';
import id2Avatar from '../assets/images/id2.jpeg';
import id3Avatar from '../assets/images/id3.jpeg';
import id4Avatar from '../assets/images/id4.jpeg';

const Testimonials = () => {
  const userName = 'First Name Last Name'
  const review = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed dui felis.'
  return (
    <section id={style.section}>
      <div id={style["padding-div"]}>
        <h1 id={style["h1"]} className="markazi-text-display-title">Testimonials</h1>
        <div id={style["testimonials-list"]}>
          <TestimonialCard
            avatar={id1Avatar}
            userName={userName}
            rating='1'
            review={review}
          />
          <TestimonialCard
            avatar={id2Avatar}
            userName={userName}
            rating='3'
            review={review}
          />
          <TestimonialCard
            avatar={id3Avatar}
            userName={userName}
            rating='4'
            review={review}
          />
          <TestimonialCard
            avatar={id4Avatar}
            userName={userName}
            rating='5'
            review={review}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
