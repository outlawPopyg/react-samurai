import {authMe, apiLogin, apiLogout} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET-USER-DATA";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };



        default:
            return state;
    }
}

export const setUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA,
    payload: { id, email, login, isAuth} });

export const authMeThunk = () => (dispatch) => {
    return authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                const { id, email, login } = response.data.data;
                dispatch(setUserData(id, email, login, true));
            } else {
                console.log("You are not authorized");
            }
        });
}

export const login = (formData) => (dispatch) => {
    apiLogin(formData)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(authMeThunk());
            } else {
                const action = stopSubmit("login", {_error: "Something went wrong"});
                dispatch(action);
            }
        })
}

export const logout = () => (dispatch) => {
    apiLogout()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setUserData(null, null, null, false));
            } else {
                console.log("Something went wrong");
            }
        })
}

export default authReducer;
