import './Main.css';
import Hero from '../components/Hero';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import Backstory from '../components/Backstory';

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
