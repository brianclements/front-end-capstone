import style from './SpecialsCard.module.css';
import deliveryCart from '../assets/icons/delivery_cart.svg';

const SpecialsCard = (props) => {
  return (
    <article id={style.card}>
      <img src={props.image} alt="Image of food"/>
      <div id={style["card-padding"]}>
        <div id={style.heading}>
          <ul>
            <li id={style.name}>{props.name}</li>
            <li id={style.price}>${props.price}</li>
          </ul>
        </div>
        <div>
          <p id={style.description}>{props.description}</p>
        </div>
        <div>
          <ul id={style.order}>
            <li><p>Order a delivery</p></li>
            <li><img src={deliveryCart}/></li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default SpecialsCard;
