import React from 'react'
import OneDayWeather from '../OneDayWeather';
import {IWeatherResponseDTO} from '../../utils/types';

const WeatherForecast = ({
  weatherData,
  selectedCity,
  selectedCountry,
}: {
    weatherData: IWeatherResponseDTO[];
    selectedCity: string;
    selectedCountry: string;
}) => {
  return (
    <div className="weather_forecast">
      <div className="selected_city">
        <h3>City:</h3>
        <span>{ selectedCity }, </span>
        <span>{ selectedCountry }</span>
      </div>
      {weatherData.map((weather: IWeatherResponseDTO) => (
        <OneDayWeather key={weather.dt} data={weather} />
      ))}

    </div>
  )
}

export default WeatherForecast