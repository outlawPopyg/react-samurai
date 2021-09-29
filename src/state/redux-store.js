import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import contentReducer from "./content-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    dialogsPage: dialogReducer,
    contentPage: contentReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;