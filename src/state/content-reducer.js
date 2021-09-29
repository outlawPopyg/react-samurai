import {v4 as uuid} from "uuid";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const addPostActionCreator = () => ( { type: "ADD-POST"} );
const updateTextActionCreator = (value) => ( { type: "UPDATE-NEW-POST-TEXT", text: value });

const initialState = {
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
        default:
            return state;
    }
}

export default contentReducer;

export {
    addPostActionCreator,
    updateTextActionCreator
};