import React from 'react';
import HomePage from './Homepage';
import './App.css';

export const CityContext = React.createContext();

function App() {
  const [input, setInput] = React.useState('London');

  return (
    <div className="App">
      <CityContext.Provider value={(input, setInput)}>
        <HomePage />
      </CityContext.Provider>
    </div>
  );
}

export default App;
