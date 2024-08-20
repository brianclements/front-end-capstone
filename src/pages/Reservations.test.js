import {
  render,
  screen,
  fireEvent,
  waitFor, 
} from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

import Reservations from './Reservations';

import { today, tomorrow } from '../utils/dateHelpers.js';

describe('In <Reservations/>', () => {
  it('form is present', () => {
    render(
      <BrowserRouter>
        <Reservations/>
      </BrowserRouter>
    );

    expect(screen.getByRole('form'))
      .toBeInTheDocument();
  });

  it('default times show instruction', () => {
    render(
      <BrowserRouter>
        <Reservations/>
      </BrowserRouter>
    );

    expect(screen.getByLabelText('Choose time'))
      .toHaveValue('Please select a date');
  });

  it('default guests = 0', () => {
    render(
      <BrowserRouter>
        <Reservations/>
      </BrowserRouter>
    );

    expect(screen.getByLabelText('Number of guests'))
      .toHaveValue(0);
  });

  it('form button disabled by default', () => {
    render(
      <BrowserRouter>
        <Reservations/>
      </BrowserRouter>
    );

    expect(screen.getByRole('button', {name: 'Make Your Reservation'}))
      .toBeDisabled();
  });
});

describe('Interactively in <Reservations/>', () => {
  it('times populate when a date is selected', async () => {
    render(
      <BrowserRouter>
        <Reservations/>
      </BrowserRouter>
    );

    const datePicker = await screen.findByLabelText('Choose date')
    fireEvent.change(datePicker, {target: {value: today()}});
    const timePicker = await screen.findByLabelText('Choose time')
    expect(timePicker)
      .not.toHaveValue('Please select a date');
  });

  it('submit button activates only when all fields have been touched', async () => {
    render(
      <BrowserRouter>
        <Reservations/>
      </BrowserRouter>
    );
    
    const datePicker = await screen.findByLabelText('Choose date');
    const timePicker = await screen.findByLabelText('Choose time');
    const noGuests = await screen.findByLabelText('Number of guests');
    const occasion = await screen.findByLabelText('Occasion');
    const submitButton = await screen.findByRole('button', {name: 'Make Your Reservation'})

    fireEvent.change(datePicker, {target: {value: today()}});
    expect(submitButton)
      .toBeDisabled();

    fireEvent.change(datePicker, {target: {value: today()}});
    fireEvent.change(timePicker, {target: {value: '23:00'}});
    expect(submitButton)
    .toBeDisabled();

    fireEvent.change(datePicker, {target: {value: today()}});
    fireEvent.change(timePicker, {target: {value: '23:00'}});
    fireEvent.change(noGuests, {target: {value: 1}});
    expect(submitButton)
      .toBeDisabled();

    fireEvent.change(datePicker, {target: {value: today()}});
    fireEvent.change(timePicker, {target: {value: '23:00'}});
    fireEvent.change(noGuests, {target: {value: 1}});
    fireEvent.change(occasion, {target: {value: 'Anniversary'}});
    await waitFor(() =>
      expect(submitButton)
        .not.toBeDisabled()
    );
  });

  it('"Choose Time" returns correct times for today', async () => {
    render(
      <BrowserRouter>
        <Reservations/>
      </BrowserRouter>
    );

    const datePicker = await screen.findByLabelText('Choose date')
    fireEvent.change(datePicker, {target: {value: today()}});
    const timePicker = await screen.findByLabelText('Choose time')
    expect(timePicker)
      .not.toHaveTextContent('10:00');
  });

  it('"Choose Time" returns correct times for tomorrow', async () => {
    render(
      <BrowserRouter>
        <Reservations/>
      </BrowserRouter>
    );

    const datePicker = await screen.findByLabelText('Choose date')
    fireEvent.change(datePicker, {target: {value: tomorrow()}});
    const timePicker = await screen.findByLabelText('Choose time')
    expect(timePicker)
      .toHaveTextContent('10:00');
  });

  it('the form resets after submission', async () => {
    render(
      <BrowserRouter>
        <Reservations/>
      </BrowserRouter>
    );
    
    const datePicker = await screen.findByLabelText('Choose date');
    const timePicker = await screen.findByLabelText('Choose time');
    const noGuests = await screen.findByLabelText('Number of guests');
    const occasion = await screen.findByLabelText('Occasion');
    const submitButton = await screen.findByRole('button', {name: 'Make Your Reservation'})

    fireEvent.change(datePicker, {target: {value: today()}});
    fireEvent.change(timePicker, {target: {value: '23:00'}});
    fireEvent.change(noGuests, {target: {value: 1}});
    fireEvent.change(occasion, {target: {value: 'Anniversary'}});
    fireEvent.click(submitButton);

    expect(submitButton)
      .toBeDisabled();
  });
});
