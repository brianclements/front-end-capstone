import Links from '../components/Links';
import lemonLogo from '../assets/logos/lemon_only_logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <ul>
        <div id="logo-div-desktop">
          <img src={lemonLogo} alt="Little Lemon logo"/>
        </div>
        <div>
          <h3>Sitemap</h3>
          <Links/>
        </div>
        <div>
          <h3>Contact</h3>
            <p>1234 Something Ave.</p>
            <p>Chicago IL, 60007 </p>
        </div>
        <div>
          <h3>Social Media</h3>
          <ul id="socials-list">
            <li>
              <a>
                <icon class="fa fa-instagram"></icon>
              </a>
            </li>
            <li>
              <a>
                <icon class="fa fa-twitter"></icon>
              </a>
            </li>
            <li>
              <a>
                <icon class="fa fa-facebook"></icon>
              </a>
            </li>
          </ul>
        </div>
        <div id="logo-div-mobile">
          <img src={lemonLogo} alt="Little Lemon logo"/>
        </div>
      </ul>
    </footer>
    );
};

export default Footer;
