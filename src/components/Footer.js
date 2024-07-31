import Nav from '../components/Nav';
import Links from '../components/Links';
import lemonLogo from '../assets/logos/lemon_only_logo.png';

const Footer = () => {
  return (
    <footer>
      <ul>
          <img src={lemonLogo} alt="Little Lemon logo"/>
        <div>
          <h3>Sitemap</h3>
          <Links/>
        </div>
        <div>
          <h3>Contact</h3>
        </div>
        <div>
          <h3>Social Media</h3>
        </div>
      </ul>
    </footer>
    );
};

export default Footer;
