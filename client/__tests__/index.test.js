import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import HomePage from '../src/app/page';
import '@testing-library/jest-dom';
import { mockData } from '../src/app/parfumeData';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockData),
  })
);

beforeEach(() => {
  jest.clearAllMocks();
});
describe('Front-End Testing', () => {


  it('renders the header', () => {
    render(<HomePage />);
    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
  });

  it('renders the perfume button components', () => {
    render(<HomePage />);
    const buttonElements = screen.getAllByRole('button');
    expect(buttonElements.length).toBeGreaterThan(0);
  });

  it('renders the search bar', () => {
    render(<HomePage />);
    const searchBarElement = screen.getByRole('textbox');
    expect(searchBarElement).toBeInTheDocument();
  });


  it('fetches data from the backend', async () => {
    await act(async () => {
      render(<HomePage />);
    });
    await waitFor(() => {
      expect(fetch).toHaveBeenCalled()
      expect(fetch).toHaveBeenCalledWith('http://localhost:3001/')
    });
  });

})
