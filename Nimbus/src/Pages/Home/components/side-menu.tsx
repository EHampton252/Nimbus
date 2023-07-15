import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./src/Pages/Home/home.js";
import SettingsPage from "./src/Pages/Settings/settings-page.js";

const SideMenu = () => {
    return (
        <Router>
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/settings" component={SettingsPage} />
        </Switch>
        </Router>
    );
}

export default SideMenu;