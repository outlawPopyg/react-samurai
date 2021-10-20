import React, {Component} from 'react';
import Header from "./header";
import {connect} from "react-redux";
import { setUserData, authMeThunk } from "../../state/auth-reducer";
import {authMe} from "../../api/api";

class HeaderContainer extends Component {

    componentDidMount() {
        this.props.authMeThunk();
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    };
};

const mapDispatchToProps = { setUserData, authMeThunk };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);