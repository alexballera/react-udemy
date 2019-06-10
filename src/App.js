import React, { Component } from 'react'
import './App.css'
import LocationsList from './components/WeatherLocation/LocationsList';

const cities = [
  'Buenos Aires, ar',
  'Caracas, ve',
  'Washington, us',
  'Madrid, es',
  'Lima, pe',
  'Bogota, col'
]

class App extends Component {
  render () {
    return (
      <div className='App'>
        <LocationsList cities={cities} />
      </div>
    )
  }
}

export default App
