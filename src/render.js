import ReactDOM from "react-dom";
import App from "./app";
import { addPost, updateNewPostText } from "./state/state";
import React from "react";

export const rerender = (state) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />,
        document.getElementById('root')
    );
};