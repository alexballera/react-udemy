import React from 'react'
import WeatherLocation from '.'

const strToComponents = cities => (
  cities.map((city, index) => <WeatherLocation city={city} key={index} />)
)

const LocationsList = ({ cities }) => (
  <div>
    {strToComponents(cities)}
  </div>
)
export default LocationsList
