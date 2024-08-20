import {
  render,
  screen,
} from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

import Links from './Links';

describe('<Links/>', () => {
  it('has "active-navlink" present somewhere when used with role="nav"', () => {
    render(
      <BrowserRouter>
        <Links role="nav"/>
      </BrowserRouter>
    );

    const homeLink = screen.getByText('Home');
    expect(homeLink)
      .toHaveClass('active-navlink');
  });

  it('does not have "active-navlink" present anywhere when used normally', () => {
    render(
      <BrowserRouter>
        <Links/>
      </BrowserRouter>
    );

    const homeLink = screen.getByText('Home');
    expect(homeLink)
      .not.toHaveClass('active-navlink');
  });
});
