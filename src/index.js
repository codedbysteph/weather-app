import "./styles.css";

async function getLocationWeatherData(){
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New Castle?key=W25AEZ529D3SFVYPVT3EDMBWQ&contentType=json",
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
        humidity: weatherData.days[0].humidity,
    }

   console.log(locationData)

}

getLocationWeatherData();