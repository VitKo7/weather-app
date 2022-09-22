import Header from './index';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  render(<Header />)
  it('Render header', () => {
    expect(screen.getByTestId('weather-header')).toBeTruthy();
  })
})