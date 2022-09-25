import React, { FormEvent, useState } from 'react';
import searchIcon from '../../images/search_icon.svg';
import style from './style.module.css';

interface CityInputProps {
  onChangeCity: (e: string) => void;
  onGetWeather: () => void;
}

const Search = ({ onChangeCity, onGetWeather }: CityInputProps) => {
  const [city, setCity] = useState<string>('');

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim() === '') return;
    onGetWeather();
    setCity('');
  };

  return (
    <div className={style.search_wrapper}>
      <form className={style.search_form} onSubmit={(e) => submitHandler(e)}>
        <label htmlFor="name" className={style.form_label}>
          Search a city:
        </label>
        <div className={style.search_section}>
          <input
            type="text"
            className={style.form_input}
            name="name"
            placeholder="Enter a city name"
            value={city}
            onChange={(e) => {
              onChangeCity(e.target.value);
              setCity(e.target.value);
            }}
          />

          <button type="submit" className={style.search_button}>
            <img src={searchIcon} alt="search" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
