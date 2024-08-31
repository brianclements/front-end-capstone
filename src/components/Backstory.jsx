import Bio from './Bio'
import shefImage from '../assets/images/restaurant_chef_B.jpg';
import bbqImage from '../assets/images/bbq.jpg';

import style from './Backstory.module.css';
import bioStyle from './Backstory-Bio.module.css';

const Backstory = () => {
  return (
    <section>
      <div id={style["padding-div"]}>
        <Bio style={bioStyle}/>
        <div id={style["image-div"]}>
          <img src={shefImage} alt="Shef preparing a dish"/>
          <img src={bbqImage} alt="Fish and vegitables on a BBQ"/>
        </div>
      </div>
    </section>
  );
};

export default Backstory;
