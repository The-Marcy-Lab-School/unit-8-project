import React from 'react';
import {fireEvent, screen, render, getByText, waitForElement} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test('Renders without crashing', () => {
    render(<Navbar />)
  })
  test('Has correct title', () => {
    render(<Navbar />)
    const el = screen.getByText('Hello Stranger')
    expect(el).toHaveTextContent('Hello Stranger')
  })
  test('Has github repo button', () => {
    render(<Navbar />)
    const el = screen.getByText('Github Repo')
    expect(el).toHaveTextContent('Github Repo')
  })
  
})
