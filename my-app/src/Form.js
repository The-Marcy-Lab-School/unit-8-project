import React from 'react';

import { CityContext } from './App.js';

function Form(data) {
  const { input, setInput } = React.useContext(CityContext);
  const submitForm = (event) => {
    event.preventDefault();
    console.log(input);
  };
  return (
    <div>
      <form>
        <label htmlFor="city">Enter a City</label>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          id="city"
        />
        <button onClick={() => submitForm()} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Form;
