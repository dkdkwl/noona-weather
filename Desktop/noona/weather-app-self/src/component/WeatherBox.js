import React from 'react'

const WeatherBox = ({weather}) => {
  return (
    <div className='weather-box'>
        <div>{weather?.name}</div>
        <h2>{weather?.main.temp}</h2>
        <p>{weather?.weather[0].description}</p>
    </div>
  )
}

export default WeatherBox