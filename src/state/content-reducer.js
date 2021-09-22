import {v4 as uuid} from "uuid";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const addPostActionCreator = () => ( { type: "ADD-POST"} );
const updateTextActionCreator = (value) => ( { type: "UPDATE-NEW-POST-TEXT", text: value });

const initialState = {
    newPostText: '',
    postsData: [
        {id: uuid(), message: "Hi, how are you?", likesCount: 12},
        {id: uuid(), message: "It's my first post", likesCount: 9}
    ]
};

const contentReducer = (state = initialState, action) => {

    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_POST:
            let newPost = { id: uuid(), message: state.newPostText, likesCount: 4 };
            state.newPostText = '';
            state.postsData.push(newPost);
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            break;
    }


    return state;
}

export default contentReducer;

export {
    addPostActionCreator,
    updateTextActionCreator
};