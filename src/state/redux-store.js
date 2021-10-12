import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import contentReducer from "./content-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    dialogsPage: dialogReducer,
    contentPage: contentReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

export default store;