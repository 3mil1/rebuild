import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import {authReducer} from "./auth-reducer";
import {appReducer} from "./app-reducer";


const reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleWare))

export type AppRootStateType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store