import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import contentReducer from "./content-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";


let reducers = combineReducers({
    dialogsPage: dialogReducer,
    contentPage: contentReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;