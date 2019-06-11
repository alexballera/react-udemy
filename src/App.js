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
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`)
  }
  render () {
    return (
      <div className='App'>
        <LocationsList
        cities={cities}
        onSelectedLocation={this.handleSelectedLocation}
        />
      </div>
    )
  }
}

export default App
