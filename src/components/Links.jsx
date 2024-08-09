import { NavLink } from "react-router-dom";
import './Links.css';

const Links = () => {
  return (
    <>
      <li>
        <NavLink 
          to="/"
          className={({ isActive }) =>
            (isActive ? "active-navlink" : "navlink" )}
        >
          Home
        </NavLink>
      </li>
      <li><a href="#">About</a></li>
      <li><a href="#">Menu</a></li>
      <li>
        <NavLink 
          to="/reservations"
          className={({ isActive }) =>
            (isActive ? "active-navlink" : "navlink" )}
        >
          Reservations
        </NavLink>
      </li>
      <li><a href="#">Order Online</a></li>
      <li><a href="#">Login</a></li>
    </>
  );
};

export default Links;
