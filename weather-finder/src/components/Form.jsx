import React from 'react';

const Form = ({ getWeatherData }) => (
  <form className="locationForm" onSubmit={getWeatherData}>
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
