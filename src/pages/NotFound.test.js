import {
  render,
  screen,
  fireEvent,
  waitFor, 
} from '@testing-library/react';
import {
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";

import App from '../App';
import Main from './Main';
import Reservations from './Reservations';
import ConfirmedBooking from './ConfirmedBooking';
import NotFound from './NotFound';

describe('<NotFound/>', () => {
  it('Can be rendered', async () => {
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
      initialEntries: ["/asdf"],
    });

    render(
      <RouterProvider router={router}/>
    );

    await waitFor(() =>
      expect(screen.getByText(/page is not found/i))
        .toBeInTheDocument()
    );
  });
});
