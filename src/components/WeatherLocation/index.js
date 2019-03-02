import React, { Component } from 'react'
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css'
import { SUN, RAIN } from '../../constants/weathers'

const data = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s '
}

const data2 = {
  temperature: 25,
  weatherState: RAIN,
  humidity: 12,
  wind: '12 m/s '
}

class WeatherLocation extends Component {
  constructor () {
    super ()
    this.state = {
      city: 'Buenos Aires',
      data: data
    }
  }
  handleUpdateClick = () => {
    this.setState({
      city: 'CARACAS',
      data: data2
    })
    console.log('Click')
  }
  render () {
    const { city, data } = this.state
    return (
      <div className='weatherLocationCont'>
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    )
  }
}

export default WeatherLocation
