import React, { useEffect, useState } from 'react'
import './home.css'
import GetDailyWeather from '../../Services/getDailyWeather'
import CurrentWeatherCard from './components/currentWeatherCard'
import { WeatherResponse } from '../../Models/dailyWeatherResponse'

export default function Home() {
	const [weather, setWeather] = useState<WeatherResponse>()

	const loadData = async () => {
		const data = await GetDailyWeather()
		setWeather(data)
	}

	useEffect(() => {
		loadData()
	}, [])

	return (
		<>
			<div className='home-page'>
				<h1 className='user-card'>Hello, User!</h1>
				<CurrentWeatherCard {...weather} />
				<div className='weather-card precipitation-card'>Precipitation</div>
				<div className='hourly-forecast-card'>Hourly Forecast</div>
				<div className='tomorrows-forecast-card'>Tomorrow's Forecast</div>
			</div>
		</>
	)
}
