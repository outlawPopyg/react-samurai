import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "d7a22d46-2b9f-4ab6-9764-bdb9ae134d6d"
    }
});

const authMe = () => {
    return instance.get(`auth/me`, {
        withCredentials: true
    });
}

const getProfile = (id) => {
    return instance.get(`profile/${id}`);
}

const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
}

const follow = (id, method) => {
    return instance[method](`/follow/${id}`, {})
        .then(response => response.data);
}

const setStatus = (status) => {
    return instance.put(`profile/status`, { status })
        .then(response => response.data);
}

const getStatus = (id) => {
    return instance.get(`profile/status/${id}`)
        .then(response => response.data);
}

const apiLogin = ({ email, password, rememberMe }) => {
    return instance.post(`auth/login`, { email, password, rememberMe })
        .then(response => response.data);
}

const apiLogout = () => {
    return instance.delete(`auth/login`)
        .then(response => response.data);
}

export { getUsers, follow, getProfile, authMe, setStatus, getStatus, apiLogin, apiLogout };