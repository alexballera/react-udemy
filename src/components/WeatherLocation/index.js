import React, { Component } from 'react'
import { CircularProgress } from '@material-ui/core'
import Location from './Location'
import WeatherData from './WeatherData'
import transformWeather from '../../services/transformWeather'
import { apiWeather } from '../../constants/api_url'
import './styles.css'

class WeatherLocation extends Component {
  constructor () {
    console.log('Primero: constructor')
    super ()
    this.state = {
      city: 'Buenos Aires',
      data: null
    }
  }

  componentDidMount () {
    console.log('Tercero: componentDidMount')
    this.handleUpdateClick()
  }

  componentDidUpdate ( prevProps, prevState) {
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
        {
          data
          ? <WeatherData data={data} />
          : <CircularProgress size={50}/>
        }
      </div>
    )
  }
}

export default WeatherLocation
