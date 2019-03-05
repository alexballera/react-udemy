import React, { Component } from 'react'
import Location from './Location'
import WeatherData from './WeatherData'
import transformWeather from '../../services/transformWeather'
import { apiWeather } from '../../constants/api_url'
import { SUN } from '../../constants/weathers'
import './styles.css'

const data = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s '
}

class WeatherLocation extends Component {
  constructor () {
    console.log('Primero: constructor')
    super ()
    this.state = {
      city: 'Buenos Aires',
      data: data
    }
  }

  componentDidMount() {
    console.log('Tercero: componentDidMount')
    this.handleUpdateClick()
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
  }

  handleUpdateClick = () => {
    fetch(apiWeather)
      .then( resolve => {
        return resolve.json()
      }).then( data => {
        console.log('Resultado del handleUpdateClick')
        const newWeather = transformWeather(data)
        console.log(newWeather)
        this.setState({
          data: newWeather
        })
      })
  }
  render () {
    console.log('Segundo: render')
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
