import { API_KEY } from "./API_KEY.js";

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoErr)

function onGeoOK(position){
    const lat = position.coords.latitude; 
    const lon = position.coords.longitude; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url) 
    .then( res => res.json())
    .then( data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃`;
    });
    
}

function onGeoErr(){
    alert("Can't find you. No weather for you.")
}