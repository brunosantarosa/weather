const key = '30d6876bb0d2dd1db64e4c98ef424ca0'

function changingData(data) {
    console.log(data)
    document.querySelector('.city').innerHTML = "Weather in " + data.name
    document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + 'ºC'
    document.querySelector('.weather-info').innerHTML = data.weather[0].description
    document.querySelector('.humidity').innerHTML = "Humidity: " + data.main.humidity + '%'
    document.querySelector('.weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`).then(response => response.json())
    changingData(data)
}

function inputValue() {
    const city = document.querySelector('.city-input').value

    searchCity(city)
}