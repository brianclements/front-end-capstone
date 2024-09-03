import { MemoryRouter} from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Hero from './Hero';

import foodTrayImage from '../assets/images/food_tray.jpg';

describe('<Hero/>', () => {
  it('Displays correct content', () => {
    render(
      <Hero
        content={[
          <p>line 1</p>,
          <p>line 2</p>,
          ]}
        image={
          <img src={foodTrayImage} alt="Chef holding a tray of food"/>
        }
      />
    );

    expect(screen.getByText(/line 1/i)).toBeInTheDocument();
    expect(screen.getByText(/line 2/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
