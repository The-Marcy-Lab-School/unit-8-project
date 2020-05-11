import React from 'react';

function Weather(props) {
  return (
    <section className="weatherData">
      <article>
        {props.city && props.country && (
          <div className="weatherProperty">
            <p className="weatherKey">City: </p>
            <p className="weatherValue">
              {props.city}, {props.country}
            </p>
          </div>
        )}
        {props.temperature && (
          <div className="weatherProperty">
            <p className="weatherKey">Temperature: </p>
            <p className="weatherValue"> {props.temperature} </p>
          </div>
        )}
        {props.feelsLike && (
          <div className="weatherProperty">
            <p className="weatherKey">Feels Like: </p>
            <p className="weatherValue"> {props.feelsLike} </p>
          </div>
        )}

        {props.humidity && (
          <div className="weatherProperty">
            <p className="weatherKey">Humidity: </p>
            <p className="weatherValue"> {props.humidity} </p>
          </div>
        )}
        {props.description && (
          <div className="weatherProperty">
            <p className="weatherKey">Conditions: </p>
            <p className="weatherValue"> {props.description} </p>
          </div>
        )}
        {props.error && <p className="errorMessage">{props.error}</p>}
      </article>
    </section>
  );
}

export default Weather;
