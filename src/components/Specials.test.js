import { render, screen } from '@testing-library/react';
import Specials from './Specials';

describe('<Specials/>', () => {
  it('Should have > 0 cards', () => {
    render(
        <Specials/>
    );

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3);
  });

  it('Should have correct sample content', () => {
    render(
        <Specials/>
    );

    expect(screen.getByText('Greek Salad')).toBeInTheDocument();
    expect(screen.getByText('Brochette')).toBeInTheDocument();
    expect(screen.getByText('Lemon Dessert')).toBeInTheDocument();
  });
});
