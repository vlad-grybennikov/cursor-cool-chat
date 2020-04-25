import {createStore, combineReducers} from "redux";
import auth from "../reducers/auth";

const store = createStore(combineReducers({
    auth
}));

export default store;