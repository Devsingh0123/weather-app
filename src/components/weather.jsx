import React, { useEffect } from "react";
import "./Weather.css";
import search_icon from "../assets/search.png";
import clouds_icon from "../assets/clouds.png";
import cloudy_icon from "../assets/cloudy.png";
import humadity_icon from "../assets/humadity.png";
import rainy_icon from "../assets/rainy.png";
import sunny_icon from "../assets/sunny.png";
import wind_icon from "../assets/wind.png";

const Weather = () => {
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_WEATHER_API
      }`;

      const responce = await fetch(url);
      const data = await responce.json();
      console.log(data);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    search("London");
  }, []);
  return (
    <div className="main_div" >
      <div className="weather">
        <div className="search-bar">
          <input type="text" placeholder="search" />
          <img src={search_icon} alt="" />
        </div>
        <img src={sunny_icon} alt="" className="weather-icon" />
        <p className="temprature">10°c</p>
        <p className="location">london</p>
        <div className="weather-data">
          <div className="col">
            <img src={humadity_icon} alt="" />
            <div>
              <p>90%</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className="col">
            <img src={wind_icon} alt="" />
            <div>
              <p>3km/h</p>
              <span>wind speed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
