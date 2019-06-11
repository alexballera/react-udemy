import React from 'react'
import { PropTypes } from 'prop-types'
import WeatherLocation from '.'

const LocationsList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocationClick = city => {
    console.log('handleWeatherLocationClick')
    onSelectedLocation(city)
  }
  const strToComponents = cities => (
    cities.map(
      city =>
        <WeatherLocation
          city={city}
          key={city}
          onWeatherLocationClick={() => handleWeatherLocationClick(city)}
        />
    )
  )
  return (<div>
    {strToComponents(cities)}
  </div>)
}

LocationsList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func
}
export default LocationsList
