import React from 'react';

function Weather(props) {
  return (
    <section>
      <article>
        {props.city && props.country && (
          <p className="weatherKey">
            Location:
            <span className="weatherValue">
              {props.city}, {props.country}
            </span>
          </p>
        )}
        {props.temperature && (
          <p className="weatherKey">
            Temperature:
            <span className="weatherValue"> {props.temperature} </span>
          </p>
        )}
        {props.humidity && (
          <p className="weatherKey">
            Humidity:
            <span className="weatherValue"> {props.humidity} </span>
          </p>
        )}
        {props.description && (
          <p className="weatherKey">
            Conditions:
            <span className="weatherValue"> {props.description} </span>
          </p>
        )}
        {props.error && <p className="errorMessage">{props.error}</p>}
      </article>
    </section>
  );
}

export default Weather;
