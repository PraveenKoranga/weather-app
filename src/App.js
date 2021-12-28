
import React, { useState, useEffect } from 'react';
import './style.css';
import WeatherCard from './weatherCard';

const App = () => {
  const [SearchValue, setSearchValue] = useState("dharchula");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${SearchValue}&units=metric&appid=9ef32ed6afbf91e7c42025f244944d14`
      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
      };
      setTempInfo(myNewWeatherInfo);
      // console.log(data.main.temp);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getWeatherInfo();
  }, [])


  return (
    <>
      <div className="main-body">
        <div className="search">
          <input type="search" name="search" id="searchArea"
            value={SearchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Please Enter The City"
          />
          <button className="search-button" onClick={getWeatherInfo}>Search</button>
        </div>

        < WeatherCard tempInfo={tempInfo}/>
      </div>

    </>
  )
}

export default App
