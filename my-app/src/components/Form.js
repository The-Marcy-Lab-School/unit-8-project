import React from 'react';

const Form = (props) => (
  <form onSubmit={props.getWeatherData}>
    <input type="text" name="city" placeholder="Enter a city" />
    <input type="text" name="country" placeholder="Enter country" />
    <button type="submit">Get Weather</button>
  </form>
);

export default Form;
