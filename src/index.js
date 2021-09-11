import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app";
import state from "./state/state";

ReactDOM.render(
    <App state={state} />,
  document.getElementById('root')
);

