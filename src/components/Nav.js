import textLogo from '../assets/logos/ll_logo.svg';
import Links from '../components/Links';

const Nav = () => {

  return (
    <nav>
      <ul>
        <img src={textLogo} alt="Little Lemon logo"/>
        <Links/>
      </ul>
    </nav>
    );
  };

export default Nav;
