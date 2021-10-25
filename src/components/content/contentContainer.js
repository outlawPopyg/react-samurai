import React, {Component} from 'react';
import Content from "./content";
import {connect} from "react-redux";
import { setUserProfile, getUserProfileThunk } from "../../state/content-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getUserStatusThunk, setUserStatusThunk} from "../../state/users-reducer";
import { withRedirect } from "../../hoc/withRedirect";

class ContentContainer extends Component {

    componentDidMount() {
        const { params: { id = this.props.id }} = this.props.match;

        this.props.getUserProfileThunk(id);
        this.props.getUserStatusThunk(id);
    }


    render() {
        return <Content { ...this.props } />;
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.contentPage.userInfo,
    id: state.auth.id,
    isAuth: state.auth.isAuth,
    status: state.usersPage.status
});

const mapDispatchToProps = { setUserProfile, getUserProfileThunk, getUserStatusThunk, setUserStatusThunk };

const composedComponent = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(withRedirect(ContentContainer, "login", (props) => !props.isAuth));

export default composedComponent;