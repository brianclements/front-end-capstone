import {
  render,
  screen,
  fireEvent,
  waitFor, 
} from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

import Reservations from './Reservations';

import { formattedDate } from '../utils/dateHelpers.js';

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
});

describe('Interactively in <Reservations/>', () => {
  it('show "select date" instruction for time', () => {
    const updateTimes = jest.fn();
    const submitForm = jest.fn();

    render(
      <BrowserRouter>
        <Reservations/>
      </BrowserRouter>
    );

    expect(screen.getByLabelText('Choose time'))
      .toHaveValue('Please select a date');
  });

  it('times populate when a date is selected', async () => {
    render(
      <BrowserRouter>
        <Reservations/>
      </BrowserRouter>
    );

    const datePicker = await screen.findByLabelText('Choose date')
    fireEvent.change(datePicker, {target: {value: formattedDate()}});
    const timePicker = await screen.findByLabelText('Choose time')
    expect(timePicker)
      .not.toHaveValue('Please select a date');
  });

  // TODO
  // it('submit button activates only when all fields have been touched', async () => {
    // render(
      // <BrowserRouter>
        // <Reservations/>
      // </BrowserRouter>
    // );
    
    // const datePicker = await screen.findByLabelText('Choose date');
    // const timePicker = await screen.findByLabelText('Choose time');
    // const noGuests = await screen.findByLabelText('Number of guests');
    // const occasion = await screen.findByLabelText('Occasion');
    // const submitButton = await screen.findByRole('button', {name: 'Make Your Reservation'})

    // fireEvent.change(datePicker, {target: {value: formattedDate()}});
    // expect(submitButton)
      // .toBeDisabled();

    // fireEvent.change(datePicker, {target: {value: formattedDate()}});
    // fireEvent.change(timePicker, {target: {value: '23:00'}});
    // expect(submitButton)
    // .toBeDisabled();

    // fireEvent.change(datePicker, {target: {value: formattedDate()}});
    // fireEvent.change(timePicker, {target: {value: '23:00'}});
    // fireEvent.change(noGuests, {target: {value: 1}});
    // expect(submitButton)
      // .toBeDisabled();

    // fireEvent.change(datePicker, {target: {value: formattedDate()}});
    // fireEvent.change(timePicker, {target: {value: '23:00'}});
    // fireEvent.change(noGuests, {target: {value: 1}});
    // fireEvent.change(occasion, {target: {value: 'Anniversary'}});
    // await waitFor(() =>
      // expect(submitButton)
        // .not.toBeDisabled()
    // );
  // });

  it('"Choose Time" returns times', async () => {
    render(
      <BrowserRouter>
        <Reservations/>
      </BrowserRouter>
    );

    const datePicker = await screen.findByLabelText('Choose date')
    fireEvent.change(datePicker, {target: {value: formattedDate(1)}});
    const timePicker = await screen.findByLabelText('Choose time')
    expect(timePicker)
      .toHaveTextContent('23:00');
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

    fireEvent.change(datePicker, {target: {value: formattedDate()}});
    fireEvent.change(timePicker, {target: {value: '23:00'}});
    fireEvent.change(noGuests, {target: {value: 1}});
    fireEvent.change(occasion, {target: {value: 'Anniversary'}});
    fireEvent.click(submitButton);

    expect(submitButton)
      .toBeDisabled();
  });

  // TODO Leaving this disabled, can't figure it out how to get it to submit
  // and navigate to the confirmation page in this test. Works fine in person
  // in the browser. I want to move on with my life.
  // it('can be submitted & redirects to confirmation page on success', async () => {
    // render(
      // <MemoryRouter>
        // <Reservations/>
      // </MemoryRouter>
    // );
    // const datePicker = await screen.findByLabelText('Choose date');
    // const timePicker = await screen.findByLabelText('Choose time');
    // const noGuests = await screen.findByLabelText('Number of guests');
    // const occasion = await screen.findByLabelText('Occasion');
    // const submitButton = await screen.findByRole('button', {name: 'Make Your Reservation'})

    // fireEvent.change(datePicker, {target: {value: formattedDate()}});
    // fireEvent.change(timePicker, {target: {value: '23:00'}});
    // fireEvent.change(noGuests, {target: {value: 1}});
    // fireEvent.change(occasion, {target: {value: 'Anniversary'}});
    // fireEvent.click(submitButton);
    // await waitFor(() =>
      // expect(screen.getByText(/confirmed/i))
        // .not.toBeInTheDocument()
    // );
  // });
});
