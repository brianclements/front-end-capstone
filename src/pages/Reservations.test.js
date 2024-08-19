import { render, screen, fireEvent } from '@testing-library/react';
import Reservations from './Reservations';
import { today, tomorrow } from '../utils/dateHelpers.js';

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

  it('Button activates only when all fields have been touched', async () => {
    render(<Reservations/>);
    
    const datePicker = await screen.findByLabelText('Choose date');
    const timePicker = await screen.findByLabelText('Choose time');
    const noGuests = await screen.findByLabelText('Number of guests');
    const occasion = await screen.findByLabelText('Occasion');
    const submitButton = await screen.findByRole('button', {name: 'Make Your Reservation'})

    fireEvent.change(datePicker, {target: {value: today()}});
    expect(submitButton)
      .toBeDisabled();

    fireEvent.change(datePicker, {target: {value: today()}});
    fireEvent.change(timePicker, {target: {value: '18:00'}});
    fireEvent.change(timePicker, {target: {value: '18:30'}});
    fireEvent.change(timePicker, {target: {value: '17:00'}});
    expect(submitButton)
      .toBeDisabled();

    fireEvent.change(datePicker, {target: {value: today()}});
    fireEvent.change(timePicker, {target: {value: '18:00'}});
    fireEvent.change(timePicker, {target: {value: '18:30'}});
    fireEvent.change(timePicker, {target: {value: '17:00'}});
    fireEvent.change(noGuests, {target: {value: 1}});
    expect(submitButton)
      .toBeDisabled();

    fireEvent.change(datePicker, {target: {value: today()}});
    fireEvent.change(timePicker, {target: {value: '18:00'}});
    fireEvent.change(timePicker, {target: {value: '18:30'}});
    fireEvent.change(timePicker, {target: {value: '17:00'}});
    fireEvent.change(noGuests, {target: {value: 1}});
    fireEvent.change(occasion, {target: {value: 'Anniversary'}});
    expect(submitButton)
      .not.toBeDisabled();
  });

  it('"Choose Time" returns correct times for today', async () => {
    render(<Reservations/>);

    const datePicker = await screen.findByLabelText('Choose date')
    fireEvent.change(datePicker, {target: {value: today()}});
    const timePicker = await screen.findByLabelText('Choose time')
    expect(timePicker)
      .not.toHaveTextContent('10:00');
  });

  it('"Choose Time" returns correct times for tomorrow', async () => {
    render(<Reservations/>);

    const datePicker = await screen.findByLabelText('Choose date')
    fireEvent.change(datePicker, {target: {value: tomorrow()}});
    const timePicker = await screen.findByLabelText('Choose time')
    expect(timePicker)
      .toHaveTextContent('10:00');
  });

  it('Form resets after submission', async () => {
    render(<Reservations/>);
    
    const datePicker = await screen.findByLabelText('Choose date');
    const timePicker = await screen.findByLabelText('Choose time');
    const noGuests = await screen.findByLabelText('Number of guests');
    const occasion = await screen.findByLabelText('Occasion');
    const submitButton = await screen.findByRole('button', {name: 'Make Your Reservation'})

    fireEvent.change(datePicker, {target: {value: today()}});
    fireEvent.change(timePicker, {target: {value: '18:00'}});
    fireEvent.change(noGuests, {target: {value: 1}});
    fireEvent.change(occasion, {target: {value: 'Anniversary'}});
    fireEvent.click(submitButton);

    expect(submitButton)
      .toBeDisabled();
  });
});
