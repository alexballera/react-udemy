import React, { Component } from 'react'
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css'
import { SUN } from '../../constants/weathers'

const location = 'Buenos Aires, ar'
const api_key = '80eaa40f53c218c10a6658c3e3c198f3'
const url = 'http://api.openweathermap.org/data/2.5/weather'

const api_weather = `${url}?q=${location}&appid=${api_key}&units=metric`

const data = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s '
}

class WeatherLocation extends Component {
  constructor () {
    super ()
    this.state = {
      city: 'Buenos Aires',
      data: data
    }
  }

  getWeatherState = weather_data => {
    return SUN
  }

  getData = weather_data => {
    const { humidity, temp } = weather_data.main
    const { speed } = weather_data.wind
    const weatherState = this.getWeatherState(weather_data)

    const data = {
      humidity,
      temperature: temp,
      weatherState,
      wind: `${speed} m/s`
    }

    return data
  }

  handleUpdateClick = () => {
    fetch(api_weather)
      .then( resolve => {
        return resolve.json()
      }).then( data => {
        const newWeather = this.getData(data)
        console.log(newWeather)
        this.setState({
          data: newWeather
        })
      })
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
