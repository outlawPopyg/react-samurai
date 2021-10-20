import {authMe} from "../api/api";

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
                ...action.data,
                isAuth: true
            };



        default:
            return state;
    }
}

export const setUserData = (data) => ({ type: SET_USER_DATA, data });

export const authMeThunk = () => (dispatch) => {
    authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(response.data.data));
                console.log(response.data.data);
            } else {
                console.log("You are not authorized");
            }
        });
}

export default authReducer;
