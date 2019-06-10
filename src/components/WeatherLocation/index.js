import React, { Component } from 'react'
import { CircularProgress } from '@material-ui/core'
import { PropTypes } from 'prop-types'
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
import Location from './Location'
import WeatherData from './WeatherData'
import transformWeather from '../../services/transformWeather'
import './styles.css'

class WeatherLocation extends Component {
  constructor (props) {
    console.log('Primero: constructor')
    super (props)
    const { city } = props
    this.state = {
      city,
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
    const apiWeather = getUrlWeatherByCity(this.state.city)
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
        {
          data
          ? <span>
              <Location city={city} />
              <WeatherData data={data} />
            </span>
          : <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <CircularProgress size={50}/>
            </span>
        }
      </div>
    )
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired
}

export default WeatherLocation
