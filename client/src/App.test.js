import { render, screen } from '@testing-library/react';
import App from './App';

test('app should contain header', () => {
  render(<App />);
  const header = screen.getByText(/Tiny NeoWS/i);
  expect(header).toBeInTheDocument();
});