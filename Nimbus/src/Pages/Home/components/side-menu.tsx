import React from "react";
import NavItem from "./navItem";
import "./side-menu.css";

const SideMenu = () => {
    return (
        <nav className="side-menu">
            <ul className="nav-items">
                <NavItem path="/" imagePath="./src/assets/cloud-solid.svg" />
                <NavItem path="/settings" imagePath="./src/assets/gear-solid.svg" />
            </ul>
        </nav>
    );
}

export default SideMenu;