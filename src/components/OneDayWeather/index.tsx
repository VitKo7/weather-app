import React from 'react';
import moment from 'moment';
import { IWeatherResponseDTO } from '../../utils/types';

const OneDayWeather = ({ weather }: { weather: IWeatherResponseDTO }) => {
  return (
    <div className="oneDay_weather">
      <h3 data-testid="weather-day">{moment(weather.dt_txt).format('ddd, MMM Do')}</h3>
      <div className="day-info">
        <span data-testid="weather-temp">{weather.main.temp}&#8451;, </span>
        <span data-testid="weather-status">{weather.weather[0].main}</span>
      </div>
    </div>
  );
};

export default OneDayWeather;
