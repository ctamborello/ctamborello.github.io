import { render, screen } from '@testing-library/react';
import ToggleImages from './ToggleImages';

test('renders learn react link', () => {
  render(<ToggleImages />);
  expect(screen.getByTestId("imageToggle")).toBeInTheDocument();
});