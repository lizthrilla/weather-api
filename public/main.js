let apiKey = '&APPID=1bef08da028a63f46a900504187045a6'
let url = 'http://api.openweathermap.org/data/2.5/weather?'
const input = document.querySelector('input#city-input')

const getWeatherByCity = () => {
  let city = `q=${input.value}`
  fetch(`${url}${city}&units=imperial${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const temp = `Temperature: ${data.main.temp} `
      document.querySelector('.city').textContent = data.name
      document.querySelector('#temp').textContent = temp
      document.querySelector('#humidity').textContent = data.main.humidity
    })
}

const getWeatherByZip = () => {
  let zip = `zip=${input.value}`
  let country = 'us'
  fetch(`${url}${zip},${country}&units=imperial${apiKey} `)
    .then(response => response.json())
    .then(data => {
      const temp = `Temperature: ${data.main.temp}`
      document.querySelector('.city').textContent = data.name
      document.querySelector('#temp').textContent = temp
      document.querySelector('#humidity').textContent = data.main.humidity
    })
}

const getBeers = () => {
  fetch('http://api.punkapi.com/v2/beers?abv_gt=4')
    .then(response => response.json())
    .then(beers => {
      beers.map(beer => {
        const li = document.createElement('li')
        li.textContent = beer.name
        document.body.appendChild(li)
      })
      console.log(beers)
      beers.filter(beer => {
        console.log(beer.name === 'Buzz')
        if (beer.name === 'Buzz') {
          console.log(beer)
        }
      })
    })
}

const getBeerDetails = () => {
  const beerInput = document.querySelector('#beer-input').value
  fetch('http://api.punkapi.com/v2/beers?abv_gt=4')
    .then(response => response.json())
    .then(json => {
      json.filter(obj => {
        if (obj.name === beerInput) {
          document.querySelector('.beer-name').textContent = obj.name
          document.querySelector('.beer-tagline').textContent = obj.tagline
          document.querySelector('.beer-description').textContent = obj.description
        }
      })
    })
}

const main = () => {
  getBeers()
  document.querySelector('#city-input-button').addEventListener('click', getWeatherByCity)
  document.querySelector('#zipcode-button').addEventListener('click', getWeatherByZip)
  document.querySelector('#beer-button').addEventListener('click', getBeerDetails)
}

document.addEventListener('DOMContentLoaded', main)
