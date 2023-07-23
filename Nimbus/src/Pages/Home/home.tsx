import React from 'react'

import './home.css'

export default function Home() {
    return (
        <>
        <div className="home-page">
            <h1>Home</h1>
            <h2>Todays Weather</h2>
            <div className="weather-card basic-weather"></div>
            <h2>5 Day Forecast</h2>
            <h2>Weekly Forecast</h2>
        </div>
        </>
    )
}