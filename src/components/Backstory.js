import style from './Backstory.module.css';
import Bio from './Backstory.Bio'

const Backstory = () => {
  return (
    <section id={style["backstory"]}>
      <div id={style["padding-div"]}>
        <Bio/>
      </div>
    </section>
  );
};

export default Backstory;
