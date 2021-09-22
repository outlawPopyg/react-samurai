import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app";
import store  from "./state/redux-store";

const rerender = (state) => {
    ReactDOM.render(
        <App
            dispatch={store.dispatch.bind(store)}
            state={ state }
        />,
        document.getElementById('root')
    );
};

rerender(store.getState());

store.subscribe(() => {
    rerender(store.getState());
});
