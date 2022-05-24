import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import SearchPage from './SearchPage';

describe('SearchPage', () => {
  it('should show SearchBar component', () => {
    render(
      <MemoryRouter>
        <SearchPage learningMode={undefined} setLearningMode={() => null} />
      </MemoryRouter>,
    );
    expect(screen.getByLabelText('Hakukenttä koko aineistolle')).toBeInTheDocument();
  });
});
