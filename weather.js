const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind");
const searchBox = document.querySelector("input");
const searchBtn = document.querySelector("button");

const apiKey = "14283233f24d8fee7fa6890a19a23cbf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(cityName){
    const response = await fetch(apiUrl+cityName+`&appid=${apiKey}`);
    const data =await response.json();
    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp)+ "°c";
    humidity.innerHTML = data.main.humidity+"%";
    windSpeed.innerHTML = data.wind.speed+"km/h";
}

searchBtn.addEventListener("click",()=>{
    let city = searchBox.value;
    checkWeather(city)
})