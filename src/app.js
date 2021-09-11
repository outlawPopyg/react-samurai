import React from 'react';
import './app.css';
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Content from "./components/content/content";
import Dialogs from "./components/dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = ({ state: { dialogsPage, contentPage } }) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Sidebar />
                <div className="app-wrapper-content">
                    <Route exact path="/dialogs" render={ () => <Dialogs state={ dialogsPage } /> } />
                    <Route exact path="/profile" render={() => <Content state={ contentPage } />}  />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;