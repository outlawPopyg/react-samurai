import React from 'react';
import './app.css';
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/dialogs/dialogsContainer";
import Content from "./components/content/content";
import UsersPageContainer from "./components/users-page/users-page-container";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Sidebar />
                <div className="app-wrapper-content">

                    <Route exact path="/dialogs" component={ DialogsContainer } />

                    <Route exact path="/profile" component={ Content } />

                    <Route exact path="/users"  component={ UsersPageContainer} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;