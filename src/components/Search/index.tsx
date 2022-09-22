import React, { FormEvent, useState } from 'react';
import searchIcon from '../../images/search_icon.svg'

interface CityInputProps {
  onChangeCity: (e: string) => void;
  onGetWeather: () => void;
}

const Search = ({ onChangeCity, onGetWeather }: CityInputProps) => {
  const [city, setCity] = useState<string>('');

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim() === "") return;
    onGetWeather();
    setCity("");
  };

  return (
    <div className='search_wrapper'>
      <form className="search_form" onSubmit={(e) => submitHandler(e)}>
        <label htmlFor="name" className="form__label">
          Enter a city name:
        </label>
        <input
          type="text"
          className="form_input"
          name="name"
          placeholder='Enter a city name'
          value={ city }
          onChange={(e) => {
            onChangeCity(e.target.value);
            setCity(e.target.value);
            }
          }
        />
        <button type="submit" className="search_button">
          <img src={searchIcon} alt="search" />
        </button>
      </form>
    </div>
  );
};

export default Search;