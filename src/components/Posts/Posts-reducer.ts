import {ThunkAction} from "redux-thunk";
import {postsApi} from "../../api/api";
import {setError} from "../../app/app-reducer";

const SET_POSTS_DATA = 'SET_POSTS_DATA'
type ActionsType = SetPostsData

const initialState: InitialStateType = {
    id: null,
    title: null,
    content: null,
    createdAt: null,
    updatedAt: null
}

export const postsReducer = (state: InitialStateType = initialState, action:  ActionsType) => {
    switch (action.type) {
        case SET_POSTS_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return {...state}
    }
}


const setPostsData = (id: string, title: string, content: string, createdAt: string, updatedAt: string) => {
    return {
        type: typeof SET_POSTS_DATA,
        payload: {
            id,
            title,
            content,
            createdAt,
            updatedAt
        }
    }
}
type SetPostsData = {
        type: typeof SET_POSTS_DATA,
        payload: {
            id: null | string,
            title: null | string,
            content: null | string,
            createdAt: null | string,
            updatedAt: null | string
        }
}


export type ThunkType = ThunkAction<any, any, any, any>;

export const getPostsData = (): ThunkType => {
    return async (dispatch) => {
        try {
            postsApi.getPosts()
                .then(response => {
                    let {data: id, title, content, createdAt, updatedAt} = response.data
                    dispatch(setPostsData(id, title, content, createdAt, updatedAt))
                })
                .catch((error) => {
                    dispatch(setError(error.response.data.error))
                })
        } catch (error) {
            console.log(error.response.data);
        }
    }
}

type InitialStateType = {
    id: null | string,
    title: null | string,
    content: null | string,
    createdAt: null | string,
    updatedAt: null | string
}