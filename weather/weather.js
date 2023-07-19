const API_KEY_WEATHER = "f000b8b41b414e3a004df1a4401ffec9";

const form = document.querySelector(".weather-form");
const search = document.querySelector("#search-weather"); 
const temperature = document.querySelector("#temperature");
const clouds = document.querySelector("#clouds");
const weather_icon = document.querySelector("#weather-icon");
 
const getWeather = async(city) => {
   temperature.innerHTML= "Loading..." ;
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_WEATHER}&units=metric`;
   const response = await fetch(url);
   const data = await response.json();
   return showWeather(data);
}

const showWeather = (data) => {
   if(data.cod=="404"){
      temperature.innerHTML="City not found!";
      clouds.innerHTML="";
      weather_icon.style.display="none";
      return;
   }else if(data.cod=="400"){
      temperature.innerHTML="Enter city name!";
      clouds.innerHTML="";
      weather_icon.style.display="none";
      return;
   }

   temperature.innerHTML="";
   clouds.innerHTML="";
   weather_icon.style.display="block";
  
  temperature.innerHTML = `${data.main.temp}` + " ° C";
  clouds.innerHTML = `${data.weather[0].main}`;
  weather_icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

}

form.addEventListener("submit", function(e){
   getWeather(search.value);
   e.preventDefault(); //will prevent the default submit of form
})
