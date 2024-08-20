import { NavLink, Link } from 'react-router-dom';
import './Links.css';

const Links = (props) => {
  let navHome;
  let navReservations;

  switch (props.role) {
    case 'nav':
      navHome = 
          <NavLink 
            to="/"
            className={({ isActive }) =>
              (isActive ? "active-navlink" : "navlink" )}
            >
              Home
          </NavLink>
      navReservations =
        <NavLink 
          to="/reservations"
          className={({ isActive }) =>
            (isActive ? "active-navlink" : "navlink" )}
        >
          Reservations
        </NavLink>
        break;
    default:
      navHome = 
          <Link to="/">
              Home
          </Link>
      navReservations =
        <Link to="/reservations">
          Reservations
        </Link>
  };


  return (
    <>
      <li>{navHome} </li>
      <li><a href="#">About</a></li>
      <li><a href="#">Menu</a></li>
      <li>{navReservations}</li>
      <li><a href="#">Order Online</a></li>
      <li><a href="#">Login</a></li>
    </>
  );
};

export default Links;
