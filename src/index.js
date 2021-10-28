import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app";
import store  from "./state/redux-store";
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom";

// setInterval(() => {
//     store.dispatch({ type: "FAKE"});
// }, 1500);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


