import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../src/components/sections/SearchBar/SearchBar';

test('renders search bar', () => {
  // Mock functions for setSearchItem and ResetItem
  const mockSetSearchItem = jest.fn();
  const mockResetItem = jest.fn();

  // Render the SearchBar component with mock functions
  render(
    <SearchBar
      searchItem=""
      setSearchItem={mockSetSearchItem}
      SearchedItem={mockSetSearchItem} // Using mock function for SearchedItem
      ResetItem={mockResetItem} // Using mock function for ResetItem
    />
  );

  // Get the input field using data-testid
  const inputElement = screen.getByTestId('search-input');

  // Check if the value is initially empty
  expect(inputElement.value).toBe('');

  // Simulate typing into the input field
  fireEvent.change(inputElement, { target: { value: 'test' } });

  // Check if the value is updated in the input field
  expect(inputElement.value).toBe('test');

  // Simulate clicking on the cancel icon
  const cancelIcon = screen.getByTestId('cancel-icon');
  fireEvent.click(cancelIcon);

  // Check if setSearchItem and ResetItem functions are called
  expect(mockSetSearchItem).toHaveBeenCalledWith('');
  expect(mockResetItem).toHaveBeenCalled();
});
