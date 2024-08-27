import { render, screen } from '@testing-library/react';
import Backstory from './Backstory';

describe('<Backstory/>', () => {
  it('Should have 2 pictures', () => {
    render(
        <Backstory/>
    );

    const cards = screen.getAllByRole('img')
    expect(cards).toHaveLength(2);
  });

  it('Should have correct content', () => {
    render(
        <Backstory/>
    );

    expect(screen.getByText('Little Lemon')).toBeInTheDocument();
  });
});
