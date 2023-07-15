import React from "react";
import NavItem from "./navItem";

const SideMenu = () => {
    return (
        <nav className="side-menu">
            <ul className="nav-items">
                <NavItem path="/" imagePath="/assets/cloud-solid.svg" />
                <NavItem path="/locations" imagePath="/assets/location-dot-solid.svg" />
                <NavItem path="/settings" imagePath="/assets/gear-solid.svg" />
            </ul>
        </nav>
    );
}

export default SideMenu;