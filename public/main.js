// openweather map: https://openweathermap.org/current
let apiKey = 'APPID=1bef08da028a63f46a900504187045a6'

// let zipCode = ''

let country = 'us'
let url = 'http://api.openweathermap.org/data/2.5/weather?'

const getForecastByZip = () => {
  let input = document.querySelector('.search-by-zip')
  let zipCode = input.value
  fetch(`${url}zip=${zipCode},${country}&${apiKey}&units=imperial`).then(response => {
    // console.log(response.json())
    return response.json()
  })
    .then(weatherData => {
      const windSpeed = `Wind Speed: ${weatherData.wind.speed}`
      const weatherObject = weatherData.weather.pop()
      const temp = `Temp: ${weatherData.main.temp}`
      const sky = `${weatherObject.main} - ${weatherObject.description}`
      document.querySelector('.temp').textContent = temp
      document.querySelector('.windSpeed').textContent = windSpeed
      document.querySelector('.sky').textContent = sky
    })
}

// const getWeatherByCityName = () => {
//   const call = `${url}q=Tampa&${apiKey}`
//   fetch(call)

//   console.log(call)
// }

// const getRandomBeer = () => {
//   fetch('https://api.punkapi.com/v2/beers/random').then(response => {
//     return response.json()
//   })
//     .then(json => {
//       return json[0]
//     })
// }

const main = () => {
  // getRandomBeer()
  // getWeatherByCityName()
  let zipSearchButton = document.querySelector('.search-by-zip-button')
  zipSearchButton.addEventListener('click', getForecastByZip)
  // if (document.querySelector('h1.hello-world')) {
  //   document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  // }
}

document.addEventListener('DOMContentLoaded', main)
