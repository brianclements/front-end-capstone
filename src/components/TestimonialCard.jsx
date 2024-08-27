import style from './TestimonialCard.module.css';
import starImg from '../assets/images/star.jpeg';

const TestimonialCard = (props) => {
  const insertRating = (numStars) => {
    const rating = [];
      for (let i = numStars; i > 0; i--) {
        rating.push(
          <img key={i} src={starImg}/>
        );
      };

      return (  
        <>
          {rating}
        </>
      );
    };

  return (
    <article id={style.card}>
      <div id={style["card-padding"]}>
        <div id={style.rating} title={props.rating + " star rating"}>
          {insertRating(props.rating)}
        </div>
        <div id={style.reviewer}>
          <img src={props.avatar} alt="Reviewer avatar"/>
          <p className={style["multiline-ellipsis"]}>{props.userName}</p>
        </div>
        <div id={style.review} className={style["multiline-ellipsis"]}>
          <p>{props.review}</p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
