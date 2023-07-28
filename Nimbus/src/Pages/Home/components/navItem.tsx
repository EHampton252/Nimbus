import React from "react";
import { NavLink } from "react-router-dom";

type NavItemProps = {
    path: string;
    imagePath: string;
}

const NavItem = ({
    path, imagePath
}: NavItemProps): JSX.Element => {
    return (
        <li>
            <NavLink 
            className={(navData) => 
                navData.isActive ? "nav-link-active" : "nav-link"
            }
            to={path}>
                <img src={imagePath} alt="navigation" />
            </NavLink>
        </li>
    );
}

export default NavItem;