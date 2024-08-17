import { render, screen } from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';
import Footer from './Footer';
import lemonLogo from '../assets/logos/lemon_only_logo.png';

describe('<Footer/>', () => {
  it('Should have correct sitemap links', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Footer/>
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
        <Footer/>
      </MemoryRouter>
    );
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', lemonLogo);
    expect(logo).toHaveAttribute('alt', 'Little Lemon logo');
  });
});
