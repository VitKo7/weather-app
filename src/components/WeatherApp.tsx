import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Search from './Search';
import WeatherForecast from './WeatherForecast';
import refs from '../utils/refs.js';
import { IWeatherResponseDTO } from '../utils/types';

const WeatherApp: FC = () => {
  const [city, setCity] = useState<string>('Kyiv');
  const [selectedCity, setSelectedCity] = useState<string>('Kyiv');
  const [selectedCityPopulation, setSelectedCityPopulation] = useState<number>(2514227);
  const [selectedCountry, setSelectedCountry] = useState<string>('UA');
  const [weather, setWeather] = useState([]);

  let url = `${refs.baseURL}${city}&units=metric&appid=${refs.API_KEY}`;

  const getWeather = async () => {
    const request = await axios.get(url);

    const response = request.data.list.filter((e: IWeatherResponseDTO, i: number) => i % 8 === 0);

    setWeather(response);
    setSelectedCity(request?.data?.city?.name);
    setSelectedCountry(request?.data?.city?.country);
    setSelectedCityPopulation(request?.data?.city?.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
  };

  useEffect(() => {
    getWeather();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <Header />
      <span className="content_wrapper">
        <Search onChangeCity={setCity} onGetWeather={getWeather} />
        <WeatherForecast
          weatherData={weather}
          selectedCity={selectedCity}
          selectedCountry={selectedCountry}
          selectedCityPopulation={selectedCityPopulation}
        />
        {/* <WeatherSalesReport /> */}
      </span>
    </div>
  );
};

export default WeatherApp;
