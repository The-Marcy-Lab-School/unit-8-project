import React from 'react';

function Weather({
  weatherIcon,
  city,
  country,
  description,
  temperature,
  feelsLike,
  humidity,
  error,
}) {
  return (
    <section className="weatherData">
      <article>
        {weatherIcon && (
          <div className="weatherIconDiv">
            <img className="weatherIcon" src={weatherIcon} alt="weather icon" />
          </div>
        )}

        {city && country && (
          <div className="weatherProperty">
            <p className="weatherValue">
              {city}
              ,
              {country}
            </p>
          </div>
        )}
        {description && (
          <div className="weatherProperty">
            <p className="weatherValue">{description}</p>
          </div>
        )}
        {temperature && (
          <div className="weatherProperty">
            <p className="weatherKey">Temp: </p>
            <p className="weatherValue">
              {temperature}
              °
            </p>
          </div>
        )}
        {feelsLike && (
          <div className="weatherProperty">
            <p className="weatherKey">Feels Like: </p>
            <p className="weatherValue">
              {feelsLike}
              °
            </p>
          </div>
        )}

        {humidity && (
          <div className="weatherProperty">
            <p className="weatherKey">Humidity: </p>
            <p className="weatherValue">
              {humidity}
              °
            </p>
          </div>
        )}
        {error && <p className="errorMessage">{error}</p>}
      </article>
    </section>
  );
}

export default Weather;
