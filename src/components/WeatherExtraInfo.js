import React from 'react'
import PropTypes from 'prop-types'

const WeatherExtraInfo = ({ humidity, wind }) => (
  <div>
    <span>{`${humidity} % - `}</span>
    <span>{`${wind} viento`}</span>
  </div>
)

WeatherExtraInfo.humidity = 

export default WeatherExtraInfo
