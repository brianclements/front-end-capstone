import { render, screen } from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';
import Footer from './Footer';
import lemonLogo from '../assets/logos/lemon_only_logo.png';

describe('<Footer/>', () => {
  it('Should have correct sitemap links', () => {
    render(
      <MemoryRouter>
        <Footer/>
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
        <Footer/>
      </MemoryRouter>
    );
    const logo = screen.getAllByRole('img');
    for (let i = (logo.length - 1); i >= 0; i--) {
      expect(logo[i]).toHaveAttribute('src', lemonLogo);
      expect(logo[i]).toHaveAttribute('alt', 'Little Lemon logo');
    };
  });
});
