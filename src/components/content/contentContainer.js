import React, {Component} from 'react';
import Content from "./content";
import axios from "axios";
const API_BASE = "https://social-network.samuraijs.com/api/1.0/profile";

class ContentContainer extends Component {

    componentDidMount() {
        axios.get(`${API_BASE}/2`)
            .then(res => {
                console.log(res.data);
            })
    }

    render() {
        return <Content />;
    }
}

export default ContentContainer;