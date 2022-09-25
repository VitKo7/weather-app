import React from 'react';
import OneDayWeather from '../OneDayWeather';
import { IWeatherResponseDTO } from '../../utils/types';

interface WeatherForecastProps {
  weatherData: IWeatherResponseDTO[];
  selectedCity: string;
  selectedCountry: string;
  selectedCityPopulation: number;
}

const WeatherForecast = ({
  weatherData,
  selectedCity,
  selectedCountry,
  selectedCityPopulation,
}: WeatherForecastProps) => {
  return (
    <div className="weather_forecast">
      <div className="selected_city">
        <h3>Your city:</h3>
        <span>{selectedCity}, </span>
        <span>{selectedCountry} </span>
        <span>
          The population of {selectedCity} is {selectedCityPopulation} ppl.
        </span>
      </div>

      {weatherData.map((weather: IWeatherResponseDTO) => (
        <OneDayWeather key={weather.dt} weather={weather} />
      ))}
    </div>
  );
};

export default WeatherForecast;
