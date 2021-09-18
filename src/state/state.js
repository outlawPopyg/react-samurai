const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const store = {
    _state: {
        dialogsPage: {
            messagesData: [
                {id: 1, message: "Hello, how are you?"},
                {id: 2, message: "Can you help me ? "},
                {id: 3, message: "Get my dick inside"}
            ],
            dialogsData: [
                {id: 1, name: "Ivan"},
                {id: 2, name: "Andrew"},
                {id: 3, name: "Calvin"},
                {id: 4, name: "Dutch"}
            ],
            newMessageText: ''
        },

        contentPage: {
            newPostText: '',
            postsData: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 9}
            ]
        }
    },
    getState() {
        return this._state;
    },
    rerender(state) {},
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = { id: 5, message: this._state.contentPage.newPostText, likesCount: 4 };
            this._state.contentPage.newPostText = '';
            this._state.contentPage.postsData.push(newPost);
            this.rerender(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.contentPage.newPostText = action.text;
            this.rerender(this._state);
        }
    },
    subscribe(observer) {
        this.rerender = observer; // observer-pattern
    }
}

const addPostActionCreator = () => ( { type: "ADD-POST"} );
const updateTextActionCreator = (value) => ( { type: "UPDATE-NEW-POST-TEXT", text: value });

export {
    store,
    addPostActionCreator,
    updateTextActionCreator
};