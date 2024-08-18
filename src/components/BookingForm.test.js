import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('<BookingForm/>', () => {
  it('updateTimes() calls with correct input', async () => {
    const todayTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00"
    ];
    const updateTimes = jest.fn();

    render(<BookingForm availableTimes={todayTimes} updateAvailableTimes={updateTimes}/>);

    const datePicker = await screen.findByLabelText('Choose date');
    fireEvent.change(datePicker, {target: {value: '2024-08-01'}});
    expect(updateTimes)
      .toHaveBeenCalledWith('2024-08-01');
  });
});
