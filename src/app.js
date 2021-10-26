import React from 'react';
import './app.css';
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/dialogs/dialogsContainer";
import ContentContainer from "./components/content/contentContainer";
import UsersPageContainer from "./components/users-page/users-page-container";
import HeaderContainer from "./components/header/headerContainer";
import Login from "./components/login/login";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Loader from "./components/loader/loader";
import { initializeApp } from "./state/app-reducer";

export const API_BASE = "https://social-network.samuraijs.com/api/1.0/users";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) return <Loader />;

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Sidebar/>
                <div className="app-wrapper-content">

                    <Route exact path="/dialogs" component={DialogsContainer}/>

                    <Route path="/profile/:id?" component={ContentContainer}/>

                    <Route exact path="/users" component={UsersPageContainer}/>

                    <Route exact path="/login" render={() => <Login/>}/>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp })
)(App);
