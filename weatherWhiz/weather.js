let apikey = "5b661f68831a5882ffdb93a4f80d2b4e";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const searchbox = document.querySelector("#search input");
const searchbutton = document.querySelector("#search button");
const weatherIcon = document.querySelector("#weather-icon");
async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = data.main.temp + "°C";
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%" ;
    document.querySelector("#wind").innerHTML = data.wind.speed + "km/h";

    const weatherCondition = data.weather[0].main; 
    if (weatherCondition === "clear") {
            weatherIcon.src = "images/clear.png"; // clear sky image
        } else if (weatherCondition === "clouds") {
            weatherIcon.src = "images/clouds.png"; // cloudy image
        } else if (weatherCondition === "rain") {
            weatherIcon.src = "images/rain.png"; // rainy image
        } else if (weatherCondition === "snow") {
            weatherIcon.src = "images/snow.png"; // snowy image
        } else if (weatherCondition === "drizzle") {
            weatherIcon.src = "images/drizzle.png"; // thunderstorm image
        } else if(weatherCondition === "humidity"){
            weatherIcon.src = "images/humidity.png"; // humidity image
        }
        else if (weatherCondition === "mist"){
            weatherIcon.src = "images/mist.png"; // image for mist 
        }
        else{
            weatherIcon.src = "images/wind.png"; //default
        }
}

searchbutton.addEventListener("click", function(){
    checkweather(searchbox.value);
})

