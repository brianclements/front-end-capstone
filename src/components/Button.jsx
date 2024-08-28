import { useNavigate } from 'react-router-dom';
import style from './Button.module.css';
import './ButtonSizes.css';

const Button = (props) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(props.navigateTo, { replace: true });

  return (
    <button
      id={style.button}
      name={props.text}
      type="button"
      onClick={handleClick}
      className={props.size}
    >
      <h4>{props.text}</h4>
    </button>
  );
};

export default Button;
