import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import {
  BrowserRouter,
  // MemoryRouter,
} from 'react-router-dom';

import BookingForm from './BookingForm';

import { formattedDate } from '../utils/dateHelpers.js';

const todayTimes = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00"
];

describe('<BookingForm/> defaults', () => {
  it('shows "none" as default occasion', async () => {
    const updateTimes = jest.fn();
    const submitForm = jest.fn();

    render(
      <BrowserRouter>
        <BookingForm 
          availableTimes={todayTimes}
          updateAvailableTimes={updateTimes}
          submitForm={submitForm}
        />
      </BrowserRouter>
    );

    const occasion = await screen.findByLabelText('Occasion');

    expect(occasion)
      .toHaveValue('none');
  });

  it('form button disabled by default', () => {
    const updateTimes = jest.fn();
    const submitForm = jest.fn();

    render(
      <BrowserRouter>
        <BookingForm 
          availableTimes={todayTimes}
          updateAvailableTimes={updateTimes}
          submitForm={submitForm}
        />
      </BrowserRouter>
    );

    expect(screen.getByRole('button', {name: 'Make Your Reservation'}))
      .toBeDisabled();
  });
});

describe('<BookingForm/> APIs', () => {
  it('calls updateTimes() with correct input', async () => {
    const updateTimes = jest.fn();
    const submitForm = jest.fn();
    const todaysDate = formattedDate();

    render(
      <BrowserRouter>
        <BookingForm 
          availableTimes={todayTimes}
          updateAvailableTimes={updateTimes}
          submitForm={submitForm}
        />
      </BrowserRouter>
    );

    const datePicker = await screen.findByLabelText('Choose date');
    fireEvent.change(datePicker, {target: {value: todaysDate}});
    expect(updateTimes)
      .toHaveBeenCalledWith(todaysDate);
  });

  it('shows earliest time as default option after selecting date', async () => {
    const updateTimes = jest.fn();
    const submitForm = jest.fn();

    render(
      <BrowserRouter>
        <BookingForm 
          availableTimes={todayTimes}
          updateAvailableTimes={updateTimes}
          submitForm={submitForm}
        />
      </BrowserRouter>
    );

    const datePicker = await screen.findByLabelText('Choose date')
    const timePicker = await screen.findByLabelText('Choose time');

    fireEvent.change(datePicker, {target: {value: formattedDate()}});

    expect(timePicker)
      .toHaveValue('17:00');
  });
});

describe('<BookingForm/> validation', () => {
  it('returns error for a date in the past', async () => {
    const updateTimes = jest.fn();
    const submitForm = jest.fn();

    render(
      <BrowserRouter>
        <BookingForm 
          availableTimes={todayTimes}
          updateAvailableTimes={updateTimes}
          submitForm={submitForm}
        />
      </BrowserRouter>
    );

    const datePicker = await screen.findByLabelText('Choose date')
    fireEvent.change(datePicker, {target: {value: formattedDate(-2)}});

    const errorEl = await screen.findByText(/date cannot be in the past/i);
    expect(errorEl)
      .toBeInTheDocument();
  });

  it('does not return error for date selected 30 days in the future', async () => {
    const updateTimes = jest.fn();
    const submitForm = jest.fn();

    render(
      <BrowserRouter>
        <BookingForm 
          availableTimes={todayTimes}
          updateAvailableTimes={updateTimes}
          submitForm={submitForm}
        />
      </BrowserRouter>
    );

    const datePicker = await screen.findByLabelText('Choose date')
    fireEvent.change(datePicker, {target: {value: formattedDate(30)}});

    let nonExist = false;
    try {
      await screen.findByText(/date cannot be more than 30 days/i);
    } catch (error) {
      nonExist = true;
    }
    expect(nonExist)
      .toEqual(true);
  });

  it('returns error for a date more than 30 days in the future', async () => {
    const updateTimes = jest.fn();
    const submitForm = jest.fn();

    render(
      <BrowserRouter>
        <BookingForm 
          availableTimes={todayTimes}
          updateAvailableTimes={updateTimes}
          submitForm={submitForm}
        />
      </BrowserRouter>
    );

    const datePicker = await screen.findByLabelText('Choose date')
    fireEvent.change(datePicker, {target: {value: formattedDate(31)}});

    const errorEl = await screen.findByText(/date cannot be more than 30 days/i);
    expect(errorEl)
      .toBeInTheDocument();
  });

  it('submit button active after selecting valid date, and guests', async () => {
    // default time will be the first time reported from updateTimes(), and
    // default occasion is "none". Which are valid defaults.
    const updateTimes = jest.fn();
    const submitForm = jest.fn();

    render(
      <BrowserRouter>
        <BookingForm 
          availableTimes={todayTimes}
          updateAvailableTimes={updateTimes}
          submitForm={submitForm}
        />
      </BrowserRouter>
    );

    const datePicker = await screen.findByLabelText('Choose date')
    const noGuests = await screen.findByLabelText('Number of guests');
    const submitButton = await screen.findByRole('button', {name: 'Make Your Reservation'})

    fireEvent.change(datePicker, {target: {value: formattedDate()}});
    fireEvent.change(noGuests, {target: {value: 1}});

    await waitFor(() =>
      expect(submitButton)
        .not.toBeDisabled()
    );
  });
});
