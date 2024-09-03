import Hero from '../components/Hero';
import Button from '../components/Button';

import style from './NotFound.module.css';
import dropPlates from '../assets/images/dropPlates.webp'

const NotFound = () => {
  return (
    <main>
      <Hero
      />
      <div id={style["padding-div"]}>
        <img src={dropPlates} alt="People dropping plates"/>
        <h1>Oops</h1>
        <h2>That page is not found</h2>
        <Button 
          text="Go home"
          navigateTo="/"
          styles={[
            "button-12x3_5rem",
            "button-border-radius-8px"
          ].join(" ")}
        />
      </div>
    </main>
  );
};

export default NotFound;
