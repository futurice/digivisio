import { render, screen } from '@testing-library/react';
import React from 'react';

import SearchPage from './SearchPage';

describe('SearchPage', () => {
  it('should show SearchBar component', () => {
    render(<SearchPage />);
    expect(screen.getByLabelText('Hakukenttä')).toBeInTheDocument();
  });
});
