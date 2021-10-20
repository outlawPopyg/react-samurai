import {v4 as uuid} from "uuid";
import {getProfile} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE = "SET-USER-PROFILE";

const initialState = {
    userInfo: '',
    newPostText: '',
    postsData: [
        { id: uuid(), message: "Hi, how are you?", likesCount: 12 },
        { id: uuid(), message: "It's my first post", likesCount: 9 }
    ]
};

const contentReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, { id: uuid(), message: state.newPostText, likesCount: 4 }],
                newPostText: '',
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
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
export const addPostActionCreator = () => ( { type: "ADD-POST"} );
export const updateTextActionCreator = (value) => ( { type: "UPDATE-NEW-POST-TEXT", text: value });

export const getUserProfileThunk = (id) => (dispatch) => {
    getProfile(id)
        .then(res => dispatch(setUserProfile(res.data)));
}

export default contentReducer;
