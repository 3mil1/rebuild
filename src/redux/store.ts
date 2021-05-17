import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import {getPostsReducer} from "../components/Posts/GetPosts-reducer";
import {getCertainPostReducer} from "../components/CertainPostPage/CertainPost-Reducer";
import {getUserReducer} from "../components/Profile/Profile-reducer";
import {addPostReducer} from "../components/Posts/AddPost/Stepper/AddPost-reducer";
import {authReducer} from "./auth-reducer";
import {appReducer} from "../app/app-reducer";


const reducers = combineReducers({
    auth: authReducer,
    app: appReducer,
    postsPage: getPostsReducer,
    CertainPost: getCertainPostReducer,
    getUserReducer: getUserReducer,
    addPostReducer: addPostReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleWare))

export type AppRootStateType = ReturnType<typeof reducers>
