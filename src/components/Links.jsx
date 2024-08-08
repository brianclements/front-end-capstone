import { Link } from "react-router-dom";
import './Links.css';

const Links = () => {
  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li><a href="#">About</a></li>
      <li><a href="#">Menu</a></li>
      <li>
        <Link to="/reservations">Reservations</Link>
      </li>
      <li><a href="#">Order Online</a></li>
      <li><a href="#">Login</a></li>
    </>
  );
};

export default Links;
