import React from 'react';
import './sidebar.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <nav>
            <div><NavLink to="/profile">Profile</NavLink></div>
            <div><NavLink to="/dialogs">Dialogs</NavLink></div>
            <div><NavLink to="/news">News</NavLink></div>
            <div><NavLink to="/music">Music</NavLink></div>
            <div><NavLink to="/settings">Settings</NavLink></div>
        </nav>
    );
}

export default Sidebar;