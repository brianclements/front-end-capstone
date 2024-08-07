import Bio from './Bio'
import style from "./Specials.module.css";

const Specials = () => {
  return (
    <section id={style.section}>
      <div id={style["padding-div"]}>
        <h1 id={style["section-h1"]} class="markazi-text-display-title">Specials</h1>
      </div>
    </section>
    );
};

export default Specials;
