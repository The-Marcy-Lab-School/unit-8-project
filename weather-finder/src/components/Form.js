import React from 'react';

const Form = (props) => (
  <form className="locationForm" onSubmit={props.getWeatherData}>
    <input
      className="formInput"
      type="text"
      name="city"
      placeholder="Enter a city"
    />
    <input
      className="formInput"
      type="text"
      name="country"
      placeholder="Enter country"
    />
    <button className="button" type="submit">
      Get Weather
    </button>
  </form>
);

export default Form;
