const key = '30d6876bb0d2dd1db64e4c98ef424ca0'

function mudancaDados(data) {
    console.log(data)
    document.querySelector('.titulo').innerHTML = "Tempo em " + data.name
    document.querySelector('.temp').innerHTML = data.main.temp
    document.querySelector('.tempo').innerHTML = data.weather[0].description
    document.querySelector('.img-tempo').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.querySelector('.umidade').innerHTML = data.wind.speed + 'km/h'
}

async function searchCity(inputValue) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${key}`).then(response => response.json())

    mudancaDados(data)
}

function clickButton() {
    const inputValue = document.querySelector('.input').value

    searchCity(inputValue)
}