import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import Reservations from './Reservations';
import { today } from '../utils/dateHelpers';



describe('Default form values in <Reservations/>', () => {
  it('Form is present', () => {
    const { getByRole } = render(<Reservations/>);
    expect(getByRole('form'))
      .toBeInTheDocument();
  });

  it('Default times show instruction', () => {
    const { getByLabelText } = render(<Reservations/>);
    expect(getByLabelText('Choose time'))
      .toHaveValue('Please select a date');
  });

  it('Default guests = 0', () => {
    const { getByLabelText } = render(<Reservations/>);
    expect(getByLabelText('Number of guests'))
      .toHaveValue(0);
  });

  it('Form button disabled by default', () => {
    const { getByText } = render(<Reservations/>);
    expect(getByText('Make Your Reservation').closest('button'))
      .toBeDisabled();
  });
  
  it('Times populate when date selected', () => {
    const { getByLabelText } = render(<Reservations/>);

    expect(getByLabelText('Choose time'))
      .toHaveValue('Please select a date');
  });
});

describe('Form interactivity <Reservations/>', () => {
  it('Times populate when date selected', async () => {
    const { findByLabelText } = render(<Reservations/>);
    const datePicker = await findByLabelText('Choose date')
    fireEvent.change(datePicker, {target: {value: today()}});
    const timePicker = await findByLabelText('Choose time')
    expect(timePicker)
      .not.toHaveValue('Please select a date');
  });
});
