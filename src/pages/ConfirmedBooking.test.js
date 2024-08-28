import ConfirmedBooking from './ConfirmedBooking';
import {
  screen,
  render,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('<ConfirmedBooking/>', () => {
  it('renders', () => {
    render(
      <BrowserRouter>
        <ConfirmedBooking/>
      </BrowserRouter>
    );

    expect(screen.getByText(/confirmed/i))
      .toBeInTheDocument()
  });
});
