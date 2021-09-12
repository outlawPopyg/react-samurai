import { rerender } from "../render";

let state = {
    dialogsPage: {
        messagesData: [
            {id: 1, message: "Hello, how are you?"},
            {id: 2, message: "Can you help me ? "},
            {id: 3, message: "Get my dick inside"}
        ],
        dialogsData: [
            {id: 1, name: "Kalim"},
            {id: 2, name: "Andrew"},
            {id: 3, name: "Calvin"},
            {id: 4, name: "Dutch"}
        ]
    },

    contentPage: {
        newPostText: '',
        postsData: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 9}
        ]
    }
};

export const addPost = (message) => {
    let newPost = { id: 5, message, likesCount: 4 };
    state.contentPage.postsData.push(newPost);
    rerender(state);
}

export const updateNewPostText = (text) => {
    state.contentPage.newPostText = text;
    rerender(state);
}

export default state;