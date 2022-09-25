import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Search from './Search';
import refs from '../utils/refs.js';
import WeatherForecast from './WeatherForecast';

const WeatherApp: FC = () => {
  const [city, setCity] = useState<string>('Kyiv');
  const [selectedCity, setSelectedCity] = useState<string>('Kyiv');
  const [selectedCountry, setSelectedCountry] = useState<string>('UA');
  const [weather, setWeather] = useState([]);

  let url = `${refs.baseURL}${city}&units=metric&appid=${refs.API_KEY}`;

  const getWeather = async () => {
    const request = await axios.get(url);

    const response = request.data.list; //! need to work over json

    setWeather(response);
    setSelectedCity(request?.data?.city?.name);
    setSelectedCountry(request?.data?.city?.country);
   }

  useEffect(() => {
    getWeather();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container'>
      <Header />
      <Search onChangeCity={setCity} onGetWeather={getWeather} />
      <WeatherForecast weatherData={weather} selectedCity={selectedCity} selectedCountry={selectedCountry} />
      {/* <WeatherSalesReport /> */}
    </div>
  )
}

export default WeatherApp;