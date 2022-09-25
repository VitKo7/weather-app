import React from 'react'
import moment from 'moment'
import { IWeatherResponseDTO } from '../../utils/types'

const OneDayWeather = ({ data }: {data: IWeatherResponseDTO}) => {
  return (
    <div className="oneDay_weather">
      <h3 data-testid="weather-day">{moment(data.dt_txt).format('ddd')}</h3>
      <div className="day-info">
        <span data-testid="weather-temp">{data.main.temp} C</span>
        <span data-testid="weather-status">{data.weather[0].main}</span>
      </div>
    </div>
  )
}

export default OneDayWeather