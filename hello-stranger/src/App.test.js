import React from 'react';
import {fireEvent, screen, render, getByText} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App", () => {
  test('Renders without crashing', () => {
    render(<App />)
  })
  test('Send feature works with button', () => {
      render(<App />)
      const el = screen.getByText('Send')
      fireEvent.click(el)
      const userMessage = screen.getByText('You')
      expect(userMessage).toHaveTextContent('You')
      
  })
})

