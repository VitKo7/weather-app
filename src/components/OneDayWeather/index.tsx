import moment from 'moment';
import { IWeatherResponseDTO } from '../../utils/types';
import style from './style.module.css';

const OneDayWeather = ({ weather }: { weather: IWeatherResponseDTO }) => {
  return (
    <div className={style.oneDay_weather}>
      <strong data-testid="weather-day">{moment(weather.dt_txt).format('ddd, MMM Do')}</strong>
      <div className={style.dayInfo}>
        <span data-testid="weather-temp">{weather.main.temp.toFixed(0)}&#8451;, </span>
        <span data-testid="weather-status">{weather.weather[0].main}</span>
      </div>
    </div>
  );
};

export default OneDayWeather;
