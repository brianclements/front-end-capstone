import Button from './Button';
import { screen, render, } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('<Button/>', () => {
  it('renders', () => {
    render(
      <BrowserRouter>
        <Button text="Test Text"/>
      </BrowserRouter>
    );

    expect(screen.getByText(/test text/i))
      .toBeInTheDocument()
  });
});
