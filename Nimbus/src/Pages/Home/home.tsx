import React from 'react'

import './home.css'

export default function Home() {
    return (
        <>
        <div className="home-page">
            <h1 className="user-card">Hello, User!</h1>
            <div className="weather-card basic-weather">Basic weather</div>
            <div className="weather-card precipitation-card">Precipitation</div>
            <div className="hourly-forecast-card">Hourly Forecast</div>
            <div className="tomorrows-forecast-card">Tomorrow's Forecast</div>
        </div>
        </>
    )
}