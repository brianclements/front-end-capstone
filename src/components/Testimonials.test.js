import { render, screen } from '@testing-library/react';
import Testimonials from './Testimonials';

describe('<Testimonials/>', () => {
  it('Should have > 0 cards', () => {
    render(
        <Testimonials/>
    );

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(4);
  });

  it('Should have correct sample content', () => {
    render(
        <Testimonials/>
    );

    expect(screen.getByTitle('1 star rating')).toBeInTheDocument();
    expect(screen.getByTitle('3 star rating')).toBeInTheDocument();
    expect(screen.getByTitle('4 star rating')).toBeInTheDocument();
    expect(screen.getByTitle('5 star rating')).toBeInTheDocument();
  });
});
