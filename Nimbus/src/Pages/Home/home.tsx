import React from 'react'
import SideMenu from './components/side-menu'

export default function Home() {
    return (
        <>
        <SideMenu />
        <div>
            <h1>Home</h1>
            <h2>Todays Weather</h2>
            <h2>5 Day Forecast</h2>
            <h2>Weekly Forecast</h2>
        </div>
        </>
    )
}