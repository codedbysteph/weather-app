import "./styles.css";
import { getUserLocation } from "./location";
import { getWeatherUI } from "./weatherUI";

const button = document.querySelector('button');

async function getLocationWeatherData(){
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${getUserLocation()}?key=W25AEZ529D3SFVYPVT3EDMBWQ&contentType=json`,
        {mode: 'cors'}
    );

    const locationData = await response.json();
    
    processJSONData(locationData);
}

function processJSONData(weatherData){

    const locationData = {
        address: weatherData.resolvedAddress,
        temp: weatherData.days[0].temp,
        tempMax: weatherData.days[0].tempmax,
        tempMin: weatherData.days[0].tempmin,
    }

    getWeatherUI(locationData);
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    getLocationWeatherData();
});