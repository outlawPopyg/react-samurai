import axios from "axios";
import { API_BASE } from "../app";

const getUsers = () => {
    return axios.get(`${API_BASE}?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
        withCredentials: true
    })
}