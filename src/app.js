
function displayTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = response.data.main.humidity;
   temperatureElement.innerHTML = Math.round(response.data.main.temp);
    temperatureElement.innerHTML = response.data.name;
     descriptionElement.innerHTML = response.data.weather[0].description;

}


let apiKey = "ba32795ca84f7facc5aa009f0f03a9bb";
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);