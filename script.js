const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temp = document.querySelector('.temp');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const visibility = document.getElementById('visibility');
const city1 = document.getElementById('city');

async function checkWeather(city) {
    const api_key = "4b83d897e9844fddfbd4f9a272ee294c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);
    temp.innerHTML =  `${Math.round(weather_data.main.temp-273.15)}`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}% `;
    pressure.innerHTML = `${weather_data.main.pressure}hPa `;
    visibility.innerHTML =  `${weather_data.visibility/1000}km`;
    city1.innerHTML = `${weather_data.name}`;

}   

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});

