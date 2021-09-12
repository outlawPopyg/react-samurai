import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app";
import state from "./state/state";
import { addPost } from "./state/state";
import {rerender} from "./render";

rerender(state);

