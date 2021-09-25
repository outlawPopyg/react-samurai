import React from 'react';
import './app.css';
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Content from "./components/content/content";
import Dialogs from "./components/dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/dialogsContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Sidebar />
                <div className="app-wrapper-content">

                    <Route exact path="/dialogs" render={ () => <DialogsContainer /> } />

                    <Route exact path="/profile" render={() => <Content /> }
                    />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;