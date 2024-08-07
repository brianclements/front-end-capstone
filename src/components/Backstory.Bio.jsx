import style from './Backstory.Bio.module.css';

const Bio = () => {
  return (
    <div id={style["bio-div"]}>
      <h1 id={style["h1"]} class="markazi-text-display-title">Little Lemon</h1>
      <h2 id={style["h2"]} class="markazi-text-sub-title">Chicago</h2>
      <p id={style["bio-text"]}class="karla-lead-text">
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </p>
    </div>
  );
};

export default Bio;
