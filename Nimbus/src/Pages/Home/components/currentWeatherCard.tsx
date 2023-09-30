import React from 'react'
import { WeatherResponse } from '../../../Models/dailyWeatherResponse'

const CurrentWeatherCard = (props: WeatherResponse) => {
	console.log(props)
	return (
		<>
			<div className='weather-card basic-weather'>Current Weather</div>
			<div>{props.current_weather?.temperature}</div>
		</>
	)
}

export default CurrentWeatherCard
