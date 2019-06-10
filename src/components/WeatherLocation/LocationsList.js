import React from 'react'
import WeatherLocation from '.';

const LocationsList = () => (
  <div>
    <WeatherLocation city='Buenos Aires,ar' />
    <WeatherLocation city='Caracas,ve' />
    <WeatherLocation city='Bogota,col' />
  </div>
)
export default LocationsList
