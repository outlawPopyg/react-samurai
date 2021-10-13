import React, {Component} from 'react';
import Header from "./header";
import {connect} from "react-redux";
import { setUserData } from "../../state/auth-reducer";
import axios from "axios";

const API_BASE = "https://social-network.samuraijs.com/api/1.0";

class HeaderContainer extends Component {

    componentDidMount() {
        axios.get(`${API_BASE}/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setUserData(response.data.data);
                    console.log(response.data.data);
                } else {
                    console.log("You are not authorized");
                }
            });
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

const mapDispatchToProps = { setUserData };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);