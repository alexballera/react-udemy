import React, { Component } from 'react'
import './App.css'
import LocationsList from './components/WeatherLocation/LocationsList';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <LocationsList />
      </div>
    )
  }
}

export default App
