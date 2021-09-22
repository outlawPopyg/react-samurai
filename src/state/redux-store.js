import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import contentReducer from "./content-reducer";

let reducers = combineReducers({
    dialogsPage: dialogReducer,
    contentPage: contentReducer
});

let store = createStore(reducers);

export default store;