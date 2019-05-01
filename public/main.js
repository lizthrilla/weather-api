// openweather map: https://openweathermap.org/current
let url = 'http://api.openweathermap.org/data/2.5/weather?'
let apiKey = 'APPID=1bef08da028a63f46a900504187045a6'
let zipCode = ''
let country = 'us'
let city = ''

const getForecastByZip = () => {
  let input = document.querySelector('input.search-by-zip-input')
  let zipCode = input.value
  fetch(`${url}zip=${zipCode},${country}&${apiKey}&units=imperial`).then(response => {
    return response.json()
  })
    .then(weatherData => {
      const temp = `Temperature: ${weatherData.main.temp}`
      document.querySelector('.zip .temp').textContent = temp
      const windSpeed = weatherData.wind.speed
      document.querySelector('.zip .windSpeed').textContent = `Wind Speed: ${windSpeed}`
      const sky = weatherData.weather.pop()
      document.querySelector('.zip .sky').textContent = `${sky.main} - ${sky.description}`
    })
}

const getWeatherByCityName = () => {
  let input = document.querySelector('input.search-by-city-input')
  let city = input.value
  const call = `${url}q=${city}&${apiKey}&units=imperial`

  fetch(call).then(response => response.json())
  .then(json => {
    const temp = json.main.temp
    document.querySelector('.city .temp').textContent = `Temperature: ${temp}`
    const windSpeed = json.wind.speed
    document.querySelector('.city .windSpeed').textContent = `Wind Speed: ${windSpeed}`
    const sky = json.weather[0]
    document.querySelector('.city .sky').textContent = `${json.weather[0].main} - ${json.weather[0].description}`
  })
}

// const getRandomBeer = () => {
//   fetch('https://api.punkapi.com/v2/beers/random').then(response => {
//     return response.json()
//   })
//     .then(json => {
//       return json[0]
//     })
// }

const main = () => {
  getWeatherByCityName()
  let zipSearchButton = document.querySelector('button.search-by-zip-button')
  zipSearchButton.addEventListener('click', getForecastByZip)
  
  let citySearchButton = document.querySelector('button.search-by-city-button')
  citySearchButton.addEventListener('click', getWeatherByCityName)
  // }
}

document.addEventListener('DOMContentLoaded', main)
