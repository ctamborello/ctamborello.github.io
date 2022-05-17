import { render, screen } from '@testing-library/react';
import App from './App';
import Planet from './App';
import planetChange from './App';
import addData from './App';
import someInput from './App';



test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByTestId("class1")).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<App />);
  expect(Planet.name) === "earth";
});
test('renders learn react link', () => {
  render(<App />);
  planetChange;
  expect(Planet.diameter) === 50000;
});
test('renders learn react link', () => {
  render(<App />);
  addData;
  expect(console.log) === someInput;
});