import OneDayWeather from '../OneDayWeather';
import { IWeatherResponseDTO } from '../../utils/types';
import style from './style.module.css';

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
    <div className={style.weather_forecast}>
      <div className={style.selected_city_info}>
        <span className={style.selected_city}>Your city: </span>
        <strong>
          {selectedCity}, {selectedCountry}
        </strong>
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
