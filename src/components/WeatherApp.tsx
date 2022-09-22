import React, { FC } from 'react';
import Header from './Header'

const WeatherApp: FC = () => {
  return (
    <div className='container'>
      <Header />
      {/* <Search /> */}
    </div>
  )
}

export default WeatherApp;