import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders all calculator buttons', () => {
  const { getAllByRole } = render(<App />);
  const linkElement = getAllByRole("button");
  expect(linkElement).toHaveLength(19);
});
