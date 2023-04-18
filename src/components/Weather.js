import { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ latitude, longitude, city }) => {
  const [weather, setWeather] = useState("");

  const APIKEY = process.env.REACT_APP_API_KEY;
  const weatherInfo = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`;

  useEffect(() => {
    axios
      .get(weatherInfo)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((err) => {
        console.log("couldn't find city", err.message);
        setWeather("");
      });
  }, [weatherInfo]);

  if (weather) {
    const temperature = weather.main.temp - 273.15;
    const image = weather.weather[0].icon;
    const windSpeed = weather.wind.speed;

    return (
      <div>
        <h4>Weather in {city}</h4>
        <p>temperature {temperature.toFixed(2)} Celsius</p>
        <img
          className="image-weather"
          src={`https://openweathermap.org/img/wn/${image}@2x.png`}
          alt="weather-icon"
        />
        <p className="wind">wind {windSpeed}m/s</p>
      </div>
    );
  }
};

export default Weather;
