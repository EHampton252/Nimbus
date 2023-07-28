import axios from 'axios'

const GetWeather = async () => {
    axios.get('https://api.open-meteo.com/v1/forecast?latitude=39.9612&longitude=-82.9988&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,windspeed_10m,windspeed_80m,windgusts_10m,temperature_80m,uv_index,is_day&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York')
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    })
}

export default GetWeather;