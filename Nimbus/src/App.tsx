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
