import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/home.js'
import SettingsPage from './Pages/Settings/settings-page.js'
import './App.css'
import SideMenu from './Pages/Home/components/side-menu.js'

function App() {

  return (
    <>
    <Router>
    <SideMenu />
        <div className="page-content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
    </Router>
    </>
  )
}

export default App


// https://api.open-meteo.com/v1/forecast?latitude=39.9612&longitude=-82.9988&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,windspeed_10m,windspeed_80m,windgusts_10m,temperature_80m,uv_index,is_day&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York