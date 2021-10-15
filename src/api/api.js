import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "d7a22d46-2b9f-4ab6-9764-bdb9ae134d6d"
    }
});

const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    })
        .then(response => response.data);
}

const follow = (id, method) => {
    return instance[method](`/follow/${id}`, {})
        .then(response => response.data);
}

export { getUsers, follow };