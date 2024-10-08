import textLogo from '../assets/logos/ll_logo.svg';
import Links from '../components/Links';
import { toggleMenu } from '../utils/ui.js'
import './Nav.css';

const Nav = () => {

  return (
    <nav id="navbar" className="closed-menu">
      <ul className="karla-section-title">
        <div id="logo-menu-div">
          <div id="spacer-menu-div">
          </div>
          <img src={textLogo} alt="Little Lemon logo"/>
          <a 
            id="menu-icon-box"
            href="#"
            className="icon"
            onClick={toggleMenu}
          >
            <i className="fa fa-bars"></i>
          </a>
        </div>
        <Links role="nav"/>
      </ul>
    </nav>
    );
  };

export default Nav;
