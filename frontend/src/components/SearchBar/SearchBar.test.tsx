import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import SearchBar from './SearchBar';

describe('SearchPage', () => {
  it('should render SearchBar component', () => {
    render(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>,
    );
    expect(screen.getByLabelText('Hakukenttä - hae koko aineistosta')).toBeInTheDocument();
  });

  it('should navigate to correct address after submitting search', async () => {
    render(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>,
    );

    userEvent.type(screen.getByLabelText('Hakukenttä - hae koko aineistosta'), 'luonto{enter}');
    await waitFor(() => {
      expect(window.location.pathname).toEqual('/results');
    });
  });
});
