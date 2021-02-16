import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import {authReducer} from "./auth-reducer";
import {appReducer} from "../app/app-reducer";
import {postsReducer} from "../components/Posts/Posts-reducer";


const reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    post: postsReducer,
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleWare))

export type AppRootStateType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store