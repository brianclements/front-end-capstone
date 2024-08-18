import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import Reservations from './Reservations';
import { today } from '../utils/dateHelpers';



describe('Default form values in <Reservations/>', () => {
  it('Form is present', () => {
    render(<Reservations/>);
    expect(screen.getByRole('form'))
      .toBeInTheDocument();
  });

  it('Default times show instruction', () => {
    render(<Reservations/>);
    expect(screen.getByLabelText('Choose time'))
      .toHaveValue('Please select a date');
  });

  it('Default guests = 0', () => {
    render(<Reservations/>);
    expect(screen.getByLabelText('Number of guests'))
      .toHaveValue(0);
  });

  it('Form button disabled by default', () => {
    render(<Reservations/>);
    expect(screen.getByRole('button', {name: 'Make Your Reservation'}))
      .toBeDisabled();
  });
});

describe('Form interactivity in <Reservations/>', () => {
  it('Times populate when date selected', async () => {
    render(<Reservations/>);
    const datePicker = await screen.findByLabelText('Choose date')
    fireEvent.change(datePicker, {target: {value: today()}});
    const timePicker = await screen.findByLabelText('Choose time')
    expect(timePicker)
      .not.toHaveValue('Please select a date');
  });
});
