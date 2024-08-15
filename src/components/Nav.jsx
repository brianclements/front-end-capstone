import textLogo from '../assets/logos/ll_logo.svg';
import Links from '../components/Links';
import './Nav.css';

const Nav = () => {

  return (
    <nav>
      <ul className="karla-section-title">
        <img src={textLogo} alt="Little Lemon logo"/>
        <Links/>
      </ul>
    </nav>
    );
  };

export default Nav;
