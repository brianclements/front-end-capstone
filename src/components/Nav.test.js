import { MemoryRouter} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Nav from './Nav';
import textLogo from '../assets/logos/ll_logo.svg';

describe('<Nav/>', () => {
  it('Should have correct navigation links', () => {
    render(
      <MemoryRouter>
        <Nav/>
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Menu')).toBeInTheDocument();
    expect(screen.getByText('Reservations')).toBeInTheDocument();
    expect(screen.getByText('Order Online')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
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
