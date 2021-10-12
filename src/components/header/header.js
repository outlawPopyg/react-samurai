import React from 'react';
import {NavLink} from "react-router-dom";
import "./header.css";

const Header = ({ isAuth, login }) => {
    return (
        <header>
            <div className="image">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
                    alt="logo"/>
            </div>
            <div className="login">
                { !isAuth ? <NavLink to="/login">Login</NavLink> : login }
            </div>
        </header>
    );
}

export default Header;