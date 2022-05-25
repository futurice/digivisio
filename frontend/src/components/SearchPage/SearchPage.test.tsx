import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import profiles from '../../data/profiles';
import SearchPage from './SearchPage';

describe('SearchPage', () => {
  it('should show SearchBar component', () => {
    render(
      <MemoryRouter>
        <SearchPage selectedProfile={profiles[0]} learningMode={undefined} setLearningMode={() => null} />
      </MemoryRouter>,
    );
    expect(screen.getByLabelText('Hakukenttä koko aineistolle')).toBeInTheDocument();
  });
});
