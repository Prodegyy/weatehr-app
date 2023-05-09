


const search = document.querySelector('.search-button');
const searchBox = document.querySelector('.search-input');

search.addEventListener('click', () => {
    checkWeather(searchBox.value);
})



const apiKey = "390f60ad3af32c0450e842d829a314fd";
const apiUrl_now = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiUrl_forecast = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

async function checkWeather(city){
    const response_now = await fetch(apiUrl_now + city + `&appid=${apiKey}`);
    var data_now = await response_now.json();
    
    if (response_now.status == 404) {
        alert('Please type in a city');
    } else {

        console.log(data_now);

        document.querySelector(".weather-city").innerHTML = data_now.name;
        document.querySelector(".weather-degree").innerHTML = Math.round(data_now.main.temp) + ' °C';
        /*
        document.querySelector(".weather-humidity-number").innerHTML = data_now.main.humidity + '%';
        document.querySelector(".weather-windspeed-number").innerHTML = data_now.wind.speed + 'km/h';
        */

        const image_now = document.querySelector(".weather-image");

        if (data_now.weather[0].main == "Clouds") {
            image_now.src="images/clouds.png";
        }
        if (data_now.weather[0].main == "Clear") {
            image_now.src="images/clear.png";
        }
        if (data_now.weather[0].main == "Drizzle") {
            image_now.src="images/drizzle.png";
        }
        if (data_now.weather[0].main == "Mist") {
            image_now.src="images/mist.png";
        }
        if (data_now.weather[0].main == "Rain") {
            image_now.src="images/rain.png";
        }
        if (data_now.weather[0].main == "Snow") {
            image_now.src="images/snow.png";
        }
        

        const response_forecast = await fetch(apiUrl_forecast + city + `&appid=${apiKey}`);
        var data_forecast = await response_forecast.json();

            
        for (let i = 1;i < 5;i++){

            document.querySelector(".forecast-day" + i +"-temp").innerHTML = Math.round(data_forecast.list[i].main.temp) + ' °C';
            let data_hour = data_forecast.list[i].dt_txt;
            let hour = data_hour.substring(11,13);

            document.querySelector(".forecast-day" + i +"-time").innerHTML = hour + ' Uhr';
            
            const image_forecast = document.querySelector("#forecast-day" + i + "-image");

            if (data_forecast.list[i].weather[0].main == "Clouds") {
                image_forecast.src="images/clouds.png";
            }
            if (data_forecast.list[i].weather[0].main == "Clear") {
                image_forecast.src="images/clear.png";
            }
            if (data_forecast.list[i].weather[0].main == "Drizzle") {
                image_forecast.src="images/drizzle.png";
            }
            if (data_forecast.list[i].weather[0].main.main == "Mist") {
                image_forecast.src="images/mist.png";
            }
            if (data_forecast.list[i].weather[0].main == "Clouds") {
                image_forecast.src="images/clouds.png";
            }
            if (data_forecast.list[i].weather[0].main == "Snow") {
                image_forecast.src="images/snow.png";
            } 
            if (data_forecast.list[i].weather[0].main == "Rain") {
                image_forecast.src="images/rain.png";
            } 
            console.log(data_forecast.list[i].weather[0].main);

            document.querySelector('.weather').style.display = "flex";
            document.querySelector('.forecast').style.display = "flex";
            
            
        }
    }
}



