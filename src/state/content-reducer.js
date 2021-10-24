import {v4 as uuid} from "uuid";
import {getProfile} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET-USER-PROFILE";

const initialState = {
    userInfo: '',
    postsData: [
        { id: uuid(), message: "Hi, how are you?", likesCount: 12 },
        { id: uuid(), message: "It's my first post", likesCount: 9 }
    ]
};

const contentReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            const message = action.value;
            return {
                ...state,
                postsData: [...state.postsData, { id: uuid(), message, likesCount: 4 }]
            }

        case SET_USERS_PROFILE:
            return {
                ...state,
                userInfo: action.userInfo
            }
        default:
            return state;
    }
}

export const setUserProfile = (userInfo) => ({ type: SET_USERS_PROFILE, userInfo });
export const addPostActionCreator = (value) => ( { type: "ADD-POST", value });

export const getUserProfileThunk = (id) => (dispatch) => {
    getProfile(id)
        .then(res => dispatch(setUserProfile(res.data)));
}

export default contentReducer;
