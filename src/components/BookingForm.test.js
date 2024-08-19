import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm';
import { today } from '../utils/dateHelpers.js';

describe('<BookingForm/>', () => {
  const todayTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];

  it('updateTimes() calls with correct input', async () => {
    const updateTimes = jest.fn();

    render(<BookingForm availableTimes={todayTimes} updateAvailableTimes={updateTimes}/>);

    const datePicker = await screen.findByLabelText('Choose date');
    fireEvent.change(datePicker, {target: {value: '2024-08-01'}});
    expect(updateTimes)
      .toHaveBeenCalledWith('2024-08-01');
  });

  it('form has been submitted', async () => {
    const updateTimes = jest.fn();
    const parseForm = jest.fn();

    render(
      <BookingForm
        availableTimes={todayTimes}
        updateAvailableTimes={updateTimes}
        parseForm={parseForm}
    />);

    const datePicker = await screen.findByLabelText('Choose date');
    const timePicker = await screen.findByLabelText('Choose time');
    const noGuests = await screen.findByLabelText('Number of guests');
    const occasion = await screen.findByLabelText('Occasion');
    const submitButton = await screen.findByRole('button', {name: 'Make Your Reservation'})

    await fireEvent.change(datePicker, {target: {value: today()}});
    await fireEvent.change(timePicker, {target: {value: '17:00'}});
    await fireEvent.change(timePicker, {target: {value: '17:30'}});
    await fireEvent.change(timePicker, {target: {value: '18:00'}});
    await fireEvent.change(timePicker, {target: {value: '18:30'}});
    await fireEvent.change(noGuests, {target: {value: 2}});
    await fireEvent.change(occasion, {target: {value: 'Anniversary'}});
    await fireEvent.click(submitButton);

    await waitFor(() =>
      expect(updateTimes)
        .toHaveBeenCalledWith(today())
    );
    await waitFor(() =>
      expect(parseForm)
        .toHaveBeenCalled()
    );
  });
});
