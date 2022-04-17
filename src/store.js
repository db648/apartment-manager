import { AuthReducer } from "./auth_redux/reducer";
import { apartmentReducer } from "./redux/reducer"
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
    AuthReducer,
    apartmentReducer
})

export const store = createStore(rootReducer)

console.log("initial state", store.getState())