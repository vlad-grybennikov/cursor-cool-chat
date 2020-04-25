import {Action} from "redux";
export const AUTH = "AUTH";

const auth = localStorage.getItem(AUTH);
const initialState = auth ? JSON.parse(auth) : false;

export default (state = initialState, action: Action) => {
    switch (action.type){
        case "LOGGED": {
            return true;
        }
        case "UNLOGGED": {
            return false;
        }
        default: {
            return state
        }
    }
}