import axios from 'axios'
import React from 'react'
import { WeatherResponse } from '../Models/dailyWeatherResponse'

const GetHourlyWeather = async () => {
	axios
		.get<WeatherResponse>(
			'https://api.open-meteo.com/v1/forecast?latitude=39.9612&longitude=-82.9988&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,uv_index_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&forecast_days=3',
		)
		.then((response) => {
			console.log(response.data)
			return response.data
		})
		.catch((error) => {
			console.log(error)
		})
	return undefined
}

export default GetHourlyWeather
