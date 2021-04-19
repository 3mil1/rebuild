import {PostsType} from "../Posts/GetPosts-reducer";
import {ThunkAction} from "redux-thunk";
import {postsApi} from "../../api/api";

const SET_POST = 'SET_POST'
const initialState: PostsType = {
    id: null,
    title: null,
    content: null,
    createdAt: null,
    updatedAt: null,
    categories: [],
    user: {id: null, firstName: null, lastName: null},
    comments: []
}

export const getCertainPostReducer = (state = initialState, action: SetCertainPostDataAC) => {
    switch (action.type) {
        case SET_POST: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}


export type ThunkType = ThunkAction<any, any, any, any>;

export const getCertainPost = (id: number): ThunkType => {
    return async (dispatch) => {
        try {
            postsApi.getCertainPost(id)
                .then(response => {
                    const {id, title, content, createdAt, updatedAt, categories} = response.data.data
                    const comments = response.data.reviews.data
                    dispatch(SetCertainPostData(id, title, content, createdAt, updatedAt, categories, comments))
                })
                .catch((error) => {
                    console.log('CPost error', error.response)
                })
        } catch (error) {
            console.log(error.response.data)
        }
    }
}

type SetCertainPostDataAC = {
    type: typeof SET_POST,
    payload: {
        id: number,
        title: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        categories: [],
        comments: []
    }
}

const SetCertainPostData = (id: number, title: string, content: string, createdAt: string, updatedAt: string, categories: [], comments: []): SetCertainPostDataAC => {
    return {
        type: SET_POST,
        payload: {
            id: id,
            title: title,
            content: content,
            createdAt: createdAt,
            updatedAt: updatedAt,
            categories: categories,
            comments
        }
    }
}