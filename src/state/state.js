const store = {
    _state: {
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
    },
    getState() {
        return this._state;
    },
    rerender(state) {},
    addPost(message) {
        let newPost = { id: 5, message, likesCount: 4 };
        this._state.contentPage.newPostText = '';
        this._state.contentPage.postsData.push(newPost);
        this.rerender(this._state);
    },
    updateNewPostText(text) {
        this._state.contentPage.newPostText = text;
        this.rerender(this._state);
    },
    subscribe(observer) {
        this.rerender = observer; // observer-pattern
    }
}

export default store;