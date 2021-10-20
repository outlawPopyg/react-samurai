import React, {Component} from 'react';
import Content from "./content";
import {connect} from "react-redux";
import { setUserProfile, getUserProfileThunk } from "../../state/content-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ContentContainer extends Component {

    componentDidMount() {
        const { params: { id = 2 }} = this.props.match;

        this.props.getUserProfileThunk(id);
    }

    render() {
        return <Content { ...this.props } />;
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.contentPage.userInfo,
    id: state.auth.id,
    isAuth: state.auth.isAuth
});

const mapDispatchToProps = { setUserProfile, getUserProfileThunk };

const composedComponent = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(ContentContainer);

export default composedComponent;