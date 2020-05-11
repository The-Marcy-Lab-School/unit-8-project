import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import Headers from './components/Headers';
import Form from './components/Form';
import Weather from './components/Weather';

test('renders homepage', () => {
  render(<App />);
});

it('renders HomePage headers without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Headers />, div);
});

it('renders Headers with correct text', () => {
  const { getByTestId } = render(<Headers />);
  expect(getByTestId('header1')).toHaveTextContent(
    "What's the Weather like Today?"
  );
});

it('renders Headers with correct text', () => {
  const { getByTestId } = render(<Headers />);
  expect(getByTestId('header2')).toHaveTextContent('Look up your city...');
});

it('renders Form component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
});

it('renders Weather component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Weather />, div);
});
