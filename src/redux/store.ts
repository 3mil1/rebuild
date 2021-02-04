import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import {authReducer} from "./auth-reducer";


const reducers = combineReducers({
    app: authReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleWare))