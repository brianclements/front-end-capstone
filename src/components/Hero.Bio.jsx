import Button from './Button';
import style from './Hero.Bio.module.css';

const Bio = () => {
  return (
    <div id={style["bio-div"]}>
      <h1 id={style["h1"]} className="markazi-text-display-title">Little Lemon</h1>
      <h2 id={style["h2"]} className="markazi-text-sub-title">Chicago</h2>
      <p id={style["bio-text"]} className="karla-lead-text">
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </p>
      <Button 
        text="Reserve a Table"
        navigateTo="/reservations"
        size="button-12x4rem"
      />
    </div>
  );
};

export default Bio;
