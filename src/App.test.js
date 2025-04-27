import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  // Just test that the component renders without throwing an error
  expect(() => render(<App />)).not.toThrow();
  
  // Additional assertions to verify key elements are present
  render(<App />);
  expect(screen.getByText(/Elevate Your Orbit/i)).toBeInTheDocument();
  expect(screen.getByText(/Launching Business & Academic Potential/i)).toBeInTheDocument();
});
