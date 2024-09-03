import {
  render,
  screen,
  fireEvent,
  waitFor, 
} from '@testing-library/react';
import {
  BrowserRouter,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";

import App from '../App';
import Main from './Main';
import Reservations from './Reservations';
import ConfirmedBooking from './ConfirmedBooking';
import NotFound from './NotFound';

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

    expect(screen.getByLabelText(/choose time/i))
      .toHaveValue('Please select a date');
  });

  it('times populate when a date is selected', async () => {
    render(
      <BrowserRouter>
        <Reservations/>
      </BrowserRouter>
    );

    const datePicker = await screen.findByLabelText(/choose date/i)
    fireEvent.change(datePicker, {target: {value: formattedDate()}});
    const timePicker = await screen.findByLabelText(/choose time/i)
    expect(timePicker)
      .not.toHaveValue('Please select a date');
  });

  it('submit button activates only when all fields have been touched', async () => {
    render(
      <BrowserRouter>
        <Reservations/>
      </BrowserRouter>
    );
    
    const datePicker = await screen.findByLabelText(/choose date/i);
    fireEvent.change(datePicker, {target: {value: formattedDate()}});

    const timePicker = await screen.findByLabelText(/choose time/i);
    fireEvent.change(timePicker, {target: {value: '23:00'}});

    const noGuests = await screen.findByLabelText(/no. of guests/i);
    fireEvent.change(noGuests, {target: {value: 1}});

    const occasion = await screen.findByLabelText(/occasion/i);
    fireEvent.change(occasion, {target: {value: 'none'}});

    const location = await screen.findByLabelText(/your preferred seating location/i);
    fireEvent.change(location, {target: {value: 'inside'}});

    const firstName = await screen.findByLabelText(/first name/i);
    fireEvent.change(firstName, {target: {value: 'chuck'}});

    const lastName = await screen.findByLabelText(/last name/i);
    fireEvent.change(lastName, {target: {value: 'norris'}});

    const phoneNum = await screen.findByLabelText(/phone/i);
    fireEvent.change(phoneNum, {target: {value: '123-456-7890'}});

    const email = await screen.findByLabelText(/email/i);
    fireEvent.change(email, {target: {value: 'asdf@example.com'}});

    const submitButton = await screen.findByRole('button', {name: /make your reservation/i})
    await waitFor(() =>
      expect(submitButton)
        .not.toBeDisabled()
    );
  });

  it('submit button activates when phone included, email blank', async () => {
    render(
      <BrowserRouter>
        <Reservations/>
      </BrowserRouter>
    );
    
    const datePicker = await screen.findByLabelText(/choose date/i);
    fireEvent.change(datePicker, {target: {value: formattedDate()}});

    const timePicker = await screen.findByLabelText(/choose time/i);
    fireEvent.change(timePicker, {target: {value: '23:00'}});

    const noGuests = await screen.findByLabelText(/no. of guests/i);
    fireEvent.change(noGuests, {target: {value: 1}});

    const occasion = await screen.findByLabelText(/occasion/i);
    fireEvent.change(occasion, {target: {value: 'none'}});

    const location = await screen.findByLabelText(/your preferred seating location/i);
    fireEvent.change(location, {target: {value: 'inside'}});

    const firstName = await screen.findByLabelText(/first name/i);
    fireEvent.change(firstName, {target: {value: 'chuck'}});

    const lastName = await screen.findByLabelText(/last name/i);
    fireEvent.change(lastName, {target: {value: 'norris'}});

    const phoneNum = await screen.findByLabelText(/phone/i);
    fireEvent.change(phoneNum, {target: {value: '123-456-7890'}});

    const submitButton = await screen.findByRole('button', {name: /make your reservation/i})
    await waitFor(() =>
      expect(submitButton)
        .not.toBeDisabled()
    );
  });

  it('submit button activates when email included, phone blank', async () => {
    render(
      <BrowserRouter>
        <Reservations/>
      </BrowserRouter>
    );
    
    const datePicker = await screen.findByLabelText(/choose date/i);
    fireEvent.change(datePicker, {target: {value: formattedDate()}});

    const timePicker = await screen.findByLabelText(/choose time/i);
    fireEvent.change(timePicker, {target: {value: '23:00'}});

    const noGuests = await screen.findByLabelText(/no. of guests/i);
    fireEvent.change(noGuests, {target: {value: 1}});

    const occasion = await screen.findByLabelText(/occasion/i);
    fireEvent.change(occasion, {target: {value: 'none'}});

    const location = await screen.findByLabelText(/your preferred seating location/i);
    fireEvent.change(location, {target: {value: 'inside'}});

    const firstName = await screen.findByLabelText(/first name/i);
    fireEvent.change(firstName, {target: {value: 'chuck'}});

    const lastName = await screen.findByLabelText(/last name/i);
    fireEvent.change(lastName, {target: {value: 'norris'}});

    const email = await screen.findByLabelText(/email/i);
    fireEvent.change(email, {target: {value: 'asdf@example.com'}});

    const submitButton = await screen.findByRole('button', {name: /make your reservation/i})
    await waitFor(() =>
      expect(submitButton)
        .not.toBeDisabled()
    );
  });

  it('"Choose Time" returns times', async () => {
    render(
      <BrowserRouter>
        <Reservations/>
      </BrowserRouter>
    );

    const datePicker = await screen.findByLabelText(/choose date/i)
    fireEvent.change(datePicker, {target: {value: formattedDate(1)}});
    const timePicker = await screen.findByLabelText(/choose time/i)
    expect(timePicker)
      .toHaveTextContent('23:00');
  });

  it('can be submitted & redirects to confirmation page on success', async () => {
    const routes = [
      {
        path: "*",
        element: (
          <>
            <App/>
          </>
        ),
        errorElement: <NotFound/>,
        children: [
          { path: "*", element: <Main/> },
          { path: "*/reservations", element: <Reservations/> },
          { path: "*/reservations/success", element: <ConfirmedBooking/> },
        ],
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/reservations"],
    });

    render(
      <RouterProvider router={router}/>
    );

    const datePicker = await screen.findByLabelText(/choose date/i);
    fireEvent.change(datePicker, {target: {value: formattedDate()}});

    const timePicker = await screen.findByLabelText(/choose time/i);
    fireEvent.change(timePicker, {target: {value: '23:00'}});

    const noGuests = await screen.findByLabelText(/no. of guests/i);
    fireEvent.change(noGuests, {target: {value: 1}});

    const occasion = await screen.findByLabelText(/occasion/i);
    fireEvent.change(occasion, {target: {value: 'none'}});

    const location = await screen.findByLabelText(/your preferred seating location/i);
    fireEvent.change(location, {target: {value: 'inside'}});

    const firstName = await screen.findByLabelText(/first name/i);
    fireEvent.change(firstName, {target: {value: 'chuck'}});

    const lastName = await screen.findByLabelText(/last name/i);
    fireEvent.change(lastName, {target: {value: 'norris'}});

    const phoneNum = await screen.findByLabelText(/phone/i);
    fireEvent.change(phoneNum, {target: {value: '123-456-7890'}});

    const email = await screen.findByLabelText(/email/i);
    fireEvent.change(email, {target: {value: 'asdf@example.com'}});

    const submitButton = await screen.findByRole('button', {name: /make your reservation/i})
    fireEvent.click(submitButton);

    await waitFor(() =>
      expect(screen.getByText(/confirmed/i))
        .toBeInTheDocument()
    );
  });
});
