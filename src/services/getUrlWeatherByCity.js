
import { url, apiKey } from '../constants/api_url'

const getUrlWeatherByCity = city => {
  return `${url}?q=${city}&appid=${apiKey}`
}

export default getUrlWeatherByCity
