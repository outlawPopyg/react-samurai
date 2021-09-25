import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app";
import store  from "./state/redux-store";
import { Provider } from "react-redux";

const rerender = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
};

rerender();

store.subscribe(() => {
    rerender();
});
