import React from 'react';
import './app.css';
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/dialogs/dialogsContainer";
import ContentContainer from "./components/content/contentContainer";
import UsersPageContainer from "./components/users-page/users-page-container";
import HeaderContainer from "./components/header/headerContainer";
import Login from "./components/login/login";

export const API_BASE = "https://social-network.samuraijs.com/api/1.0/users";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Sidebar />
                <div className="app-wrapper-content">

                    <Route exact path="/dialogs" component={ DialogsContainer } />

                    <Route path="/profile/:id?" component={ ContentContainer } />

                    <Route exact path="/users"  component={ UsersPageContainer} />

                    <Route exact path="/login" render={() => <Login /> } />

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;