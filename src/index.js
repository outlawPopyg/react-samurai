import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app";
import { store, addPostActionCreator, updateTextActionCreator } from "./state/state";

const rerender = (state) => {
    ReactDOM.render(
        <App
            dispatch={store.dispatch.bind(store)}
            state={ store.getState() }
        />,
        document.getElementById('root')
    );
};

rerender(store.getState());

store.subscribe(rerender);
