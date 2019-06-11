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
    super (props)
    const { city } = props
    this.state = {
      city,
      data: null
    }
  }

  // componentDidMount () {
  //   this.handleUpdateClick()
  // }

  componentDidUpdate ( prevProps, prevState) {
    console.log('componentDidUpdate')
  }

  handleUpdateClick = () => {
    const apiWeather = getUrlWeatherByCity(this.state.city)
    fetch(apiWeather)
      .then( data => {
        return data.json()
      }).then( data => {
        const newWeather = transformWeather(data)
        this.setState({
          data: newWeather
        })
      })
  }
  componentWillMount = () => {
    const apiWeather = getUrlWeatherByCity(this.state.city)
    fetch(apiWeather)
      .then( data => {
        return data.json()
      }).then( data => {
        const newWeather = transformWeather(data)
        this.setState({
          data: newWeather
        })
      })
  }
  render () {
    const { onWeatherLocationClick } = this.props
    const { city, data } = this.state
    return (
      <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
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
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation
