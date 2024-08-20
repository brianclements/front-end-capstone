import ConfirmedBooking from './ConfirmedBooking';
import {
  screen,
  render,
} from '@testing-library/react';

describe('<ConfirmedBooking/>', () => {
  it('renders', () => {
    render(
      <ConfirmedBooking/>
    );

    expect(screen.getByText(/confirmed/i))
      .toBeInTheDocument()
  });
});
