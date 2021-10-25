import React from 'react';
import {NavLink} from "react-router-dom";
import "./header.css";
import { connect } from "react-redux";
import { logout } from "../../state/auth-reducer";

const Header = ({ isAuth, login, logout }) => {
    return (
        <header>
            <div className="image">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
                    alt="logo"/>
            </div>
            <div className="login">
                { !isAuth ?
                    <NavLink to="/login">Login</NavLink> :
                    <div>{ login } <button onClick={ logout }>logout</button></div> }
            </div>
        </header>
    );
}

export default connect(null, { logout })(Header);