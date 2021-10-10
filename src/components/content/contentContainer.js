import React, {Component} from 'react';
import Content from "./content";
import axios from "axios";
import {connect} from "react-redux";
import { setUserProfile } from "../../state/content-reducer";
import {withRouter} from "react-router-dom";

const API_BASE = "https://social-network.samuraijs.com/api/1.0/profile";

class ContentContainer extends Component {

    componentDidMount() {
        const { params: { id = 2 }} = this.props.match;

        axios.get(`${API_BASE}/${id}`)
            .then(res => {
                this.props.setUserProfile(res.data);
            });
    }

    render() {
        return <Content { ...this.props } />;
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.contentPage.userInfo
});

const mapDispatchToProps = { setUserProfile }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContentContainer));