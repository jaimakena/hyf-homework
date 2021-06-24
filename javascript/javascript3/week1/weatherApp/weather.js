const body = document.querySelector('body');
const searchButton = document.getElementById('search-button');
const input = document.querySelector('input');
const locationButton = document.getElementById('geo-location');

//Using the input value of the cityname- getting the weather:
function getWeatherData(){
let city = input.value;
    if(!city)
    {
    alert(`Please provide a city name`);
    }
    else{
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=110d07eec1d93474e56ec4709a2eeb6f`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        displayWeather(data);
    })   
    }
}

function displayWeather(data){
    const{name} = data;
    const{icon, description} = data.weather[0];
    const{temp} = data.main;
    const{speed} = data.wind;
    const{humidity} = data.main;
    const{sunrise, sunset} = data.sys;
    const timeSunrise = new Date(sunrise * 1000).toLocaleTimeString();
    const timeSunset = new Date(sunset * 1000).toLocaleTimeString();
    const mapUrl = `https://maps.google.com/maps?q=${name}&hl=es&z=14&amp;output=embed`;
    document.querySelector('.city').innerText = `Weather in ${name}`;
    document.querySelector('.icon').src = `http://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector('.temp').innerText = `${temp}°C`;
    document.querySelector('.description').innerHTML = `${description}`;
    document.querySelector('.wind').innerHTML = `Wind Speed: ${speed} m/s`;
    document.querySelector('.humidity').innerHTML = `Humidity: ${humidity}%`;
    document.querySelector('.sunrise').innerHTML = `Sunrise: ${timeSunrise}`;
    document.querySelector('.sunset').innerHTML = `Sunset: ${timeSunset}`;
    document.querySelector('.map').innerHTML = `<iframe src="${mapUrl}"></iframe>`; 
}

searchButton.addEventListener('click', getWeatherData);

//Using Geo Location getting the weather:
const currenPosition = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
        alert(`Geolocation is not supported by this browser`);
    }
};

function getCoordinates(position) {
    const latitude = `${position.coords.latitude}`;
    const longitude = `${position.coords.longitude}`;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=110d07eec1d93474e56ec4709a2eeb6f`)
    .then((res) => res.json())
    .then((data) => {
        displayWeather(data);
    })   
}
locationButton.addEventListener('click', currenPosition);

//Using the local storage- saving the city to local storage and show weather
function getWeatherFromLocalStorage(){
    window.localStorage;
    localStorage.setItem('city', 'copenhagen');
    const cityFromLocalStorage = localStorage.getItem('city');
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityFromLocalStorage}&units=metric&appid=110d07eec1d93474e56ec4709a2eeb6f`)
        .then((res) => res.json())
        .then((data) => {
        console.log(data);
        displayWeather(data);
    })      
} 
getWeatherFromLocalStorage();