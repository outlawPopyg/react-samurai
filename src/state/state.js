import { v4 as uuid } from 'uuid';
import dialogReducer from "./dialog-reducer";
import contentReducer from "./content-reducer";

const store = {
    _state: {
        dialogsPage: {
            messagesData: [
                { id: uuid(), message: "Hello, how are you?" },
                { id: uuid(), message: "Can you help me ? " },
                { id: uuid(), message: "Get my dick inside" }
            ],
            dialogsData: [
                {id: uuid(), name: "Ivan"},
                {id: uuid(), name: "Andrew"},
                {id: uuid(), name: "Calvin"},
                {id: uuid(), name: "Dutch"}
            ],
            newMessageText: ''
        },

        contentPage: {
            newPostText: '',
            postsData: [
                {id: uuid(), message: "Hi, how are you?", likesCount: 12},
                {id: uuid(), message: "It's my first post", likesCount: 9}
            ]
        }
    },
    getState() { return this._state; },
    rerender(state) {},

    dispatch(action) {

        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.contentPage = contentReducer(this._state.contentPage, action);

        this.rerender(this._state);
    },

    subscribe(observer) {
        this.rerender = observer; // observer-pattern
    }
}


export default store;