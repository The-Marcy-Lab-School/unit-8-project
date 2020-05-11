import React, { Component } from 'react';

import Headers from './Headers';
import Form from './Form';
import Weather from './Weather';

const API_KEY = '690e069462802134ec9356cbafc9a9a7';

class HomePage extends Component {
  state = {
    city: '',
    country: '',
    weatherIcon: '',
    temperature: '',
    feelsLike: '',
    humidity: '',
    description: '',
    error: '',
  };
  getWeatherData = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const request = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`
    );
    const data = await request.json();

    if (city && country) {
      console.log(data);

      this.setState({
        city: data.name,
        country: data.sys.country,
        weatherIcon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        temperature: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        humidity: Math.round(data.main.humidity),
        description: data.weather[0].main,
        error: '',
      });
    } else {
      this.setState({
        error: 'City or country not entered',
      });
    }
  };

  render() {
    return (
      <section className="background">
        <Headers />
        <Form getWeatherData={this.getWeatherData} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          weatherIcon={this.state.weatherIcon}
          temperature={this.state.temperature}
          feelsLike={this.state.feelsLike}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </section>
    );
  }
}

export default HomePage;
