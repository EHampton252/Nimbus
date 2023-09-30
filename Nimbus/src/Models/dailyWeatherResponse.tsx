export type WeatherResponse = {
	latitude?: number
	longitude?: number
	generationtime_ms?: number
	utc_offset_seconds?: number
	timezone?: string
	timezone_abbreviation?: string
	elevation?: number
	current_weather?: CurrentWeather
	daily_units?: DailyUnits
	daily?: DailyData
}

export type CurrentWeather = {
	temperature: number
	windspeed: number
	winddirection: number
	weathercode: number
	is_day: number
	time: string
}

export type DailyUnits = {
	time: string
	temperature_2m_max: string
	temperature_2m_min: string
	apparent_temperature_max: string
	apparent_temperature_min: string
	uv_index_max: string
	precipitation_sum: string
	rain_sum: string
	showers_sum: string
	snowfall_sum: string
	precipitation_hours: string
	precipitation_probability_max: string
	windspeed_10m_max: string
}

export type DailyData = {
	time: string[]
	temperature_2m_max: number[]
	temperature_2m_min: number[]
	apparent_temperature_max: number[]
	apparent_temperature_min: number[]
	uv_index_max: number[]
	precipitation_sum: number[]
	rain_sum: number[]
	showers_sum: number[]
	snowfall_sum: number[]
	precipitation_hours: number[]
	precipitation_probability_max: number[]
	windspeed_10m_max: number[]
}
