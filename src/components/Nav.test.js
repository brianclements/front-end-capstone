import { MemoryRouter} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Nav from './Nav';
import textLogo from '../assets/logos/ll_logo.svg';

describe('<Nav/>', () => {
  it('Should have correct navigation links', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Nav/>
      </MemoryRouter>
    );

    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Menu')).toBeInTheDocument();
    expect(getByText('Reservations')).toBeInTheDocument();
    expect(getByText('Order Online')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
  });

  it('Logo must have valid source and alt text', () => {
    render(
      <MemoryRouter>
        <Nav/>
      </MemoryRouter>
    );
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', textLogo);
    expect(logo).toHaveAttribute('alt', 'Little Lemon logo');
  });
});
