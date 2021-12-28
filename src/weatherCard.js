import React, { useState, useEffect } from 'react';

const WeatherCard = ({ tempInfo }) => {
    const [weatherState, setweatherState] = useState("");

    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
    } = tempInfo;

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setweatherState("bi-cloud-fill");
                    break;
                case "Haze":
                    setweatherState("bi-cloud-haze2-fill");
                    break;
                case "Clear":
                    setweatherState("bi-brightness-high");
                    break;
                case "Mist":
                    setweatherState("fas fa-sun");
                    break;
                    case "Rain":
                    setweatherState("bi-cloud-lightning-rain");
                    break;

                default: setweatherState("fas fa-Sunny");
                    break;
            }
        }
    }, [weathermood])

    var sec = sunset;
    var date = new Date(sec * 1000);
    var timeStr = `${date.getHours()}:${date.getMinutes()}`
    return (
        <>
            <div className="weather-icon">
                <i className={`${weatherState}`}></i>
            </div>

            <div className="weather-main-info">
                <div className="temp">
                    <div className="today-date">
                        <span>{temp}&deg;</span>,{weathermood}
                        <br />
                        <span>{name},{country}</span>
                    </div>
                    <div className="today-time">
                        <span>{new Date().toLocaleDateString()},</span><br/>
                        <span>{new Date().toLocaleTimeString()}</span>
                    </div>

                </div>
            </div>

            <div className="weather-extra-info">
                <div className="sunset">
                    <i className="bi bi-sunset"></i><br />
                    {timeStr},<br />Sunset

                </div>
                <div className="humidity">
                    <i className="fas fa-sun"></i><br />
                    {humidity},<br />Humidity
                </div>
                <div className="pressure">
                    <i className="bi-cloud-lightning-rain"></i><br />
                    {pressure},<br />Pressure
                </div>
                <div className="speed">
                    <i className="fas fa-wind"></i><br />
                    {speed},<br />Wind
                </div>
            </div>
        </>
    )
}

export default WeatherCard
