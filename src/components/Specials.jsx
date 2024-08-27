import style from './Specials.module.css';
import SpecialsCard from './SpecialsCard';
import greekSaladImg from '../assets/images/greek_salad.jpeg';
import brochetteImg from '../assets/images/brochette.jpeg';
import lemonDessertImg from '../assets/images/lemon_dessert.jpeg';

const specialsList = {
  "Greek Salad": {
    name: "Greek Salad",
    price: "12.99",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
  },
  "Brochette": {
    name: "Brochette",
    price: "5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
  },
  "Lemon Dessert": {
    name: "Lemon Dessert",
    price: "5.00",
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
  },
};

const Specials = () => {
  return (
    <section id={style.section}>
      <div id={style["padding-div"]}>
        <h1 id={style["section-h1"]} className="markazi-text-display-title">Specials</h1>
        <div id={style["specials-list"]}>
          <SpecialsCard
            image={greekSaladImg}
            name={specialsList["Greek Salad"].name}
            price={specialsList["Greek Salad"].price}
            description={specialsList["Greek Salad"].description}
          />
          <SpecialsCard
            image={brochetteImg}
            name={specialsList["Brochette"].name}
            price={specialsList["Brochette"].price}
            description={specialsList["Brochette"].description}
          />
          <SpecialsCard
            image={lemonDessertImg}
            name={specialsList["Lemon Dessert"].name}
            price={specialsList["Lemon Dessert"].price}
            description={specialsList["Lemon Dessert"].description}
          />
        </div>
      </div>
    </section>
    );
};

export default Specials;
