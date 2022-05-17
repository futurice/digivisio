import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders h1 title', () => {
  render(<App />);
  const title = screen.getByText('Digivisio');
  expect(title).toBeInTheDocument();
});
