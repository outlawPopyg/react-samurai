import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app";
import store from "./state/state";

const rerender = (state) => {
    ReactDOM.render(
        <App
                updateNewPostText={ store.updateNewPostText.bind(store) }
            state={ store.getState() }
            addPost={ store.addPost.bind(store) }
        />,
        document.getElementById('root')
    );
};

rerender(store.getState());

store.subscribe(rerender);
