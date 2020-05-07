import React from 'react';
import {CityContext} from './App.js';

function Result(){
    const {input, setInp} = React.useContext(CityContext);

    React.useEffect(() => {
        async function getWeatherData() {
          const response = await fetch(`api.openweathermap.org/data/2.5/weather?q={input}&appid=690e069462802134ec9356cbafc9a9a7`)
          const data = await response.json()
        }
        console.log('hi');
        console.log(getWeatherData(input))
        getWeatherData(input)
      }, [input])

      return (
          <div>
              {input}
          </div>

      );
}

export default Result; 