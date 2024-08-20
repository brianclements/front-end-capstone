import Hero from '../components/Hero';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import Backstory from '../components/Backstory';

import './Main.css';

const Main = () => {
  return (
    <main>
      <Hero/>
      <Specials/>
      <Testimonials/>
      <Backstory/>
    </main>
    );
};

export default Main;
