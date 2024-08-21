import textLogo from '../assets/logos/ll_logo.svg';
import Links from '../components/Links';
import { toggleMenu } from '../utils/ui.js'
import './Nav.css';

const Nav = () => {

  return (
    <nav id="navbar" className="closed-menu">
      <ul className="karla-section-title">
        <img src={textLogo} alt="Little Lemon logo"/>
        <Links role="nav"/>
      </ul>
      <div id="icon-outer-div">
        <div id="icon-inner-div">
          <a 
            id="menu-icon"
            href="javascript:void(0);"
            class="icon"
            onClick={toggleMenu}
          >
            <icon class="fa fa-bars"></icon>
          </a>
        </div>
      </div>
    </nav>
    );
  };

export default Nav;
