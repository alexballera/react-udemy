const apiKey = '80eaa40f53c218c10a6658c3e3c198f3'
const url = 'http://api.openweathermap.org/data/2.5/weather'
const location = 'Buenos Aires, ar'

export const apiWeather = `${url}?q=${location}&appid=${apiKey}`
