import {ThunkAction} from "redux-thunk";
import {setError, setStatus} from "../../../../app/app-reducer";
import {postsApi} from "../../../../api/api";
import {CategoriesType} from "../../Post/Post";

const ADD_POST = 'ADD_POST'

type SetPost = {
    type: typeof ADD_POST
    payload: {
        title: string,
        content: string,
        categories: CategoriesType[]
    }
}

const initialState = {
    title: null,
    content: null,
    categories: null
}

export const addPostReducer = (state = initialState, action: SetPost) => {
    switch (action.type) {
        case ADD_POST : {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}

const SetAddPost = (title: string, content: string, categories: []) => {
    return {
        type: ADD_POST,
        payload: {
            title,
            content,
            categories
        }
    }
}

type ThunkType = ThunkAction<any, any, any, any>;

export const addPost = (title: string, content: string, categories: []): ThunkType => {
    return async (dispatch) => {
        try {
            debugger
            dispatch(setStatus('loading'))
            postsApi.addPost(title, content, categories)
                .then(response => {
                    if (response.status == 201) {
                        dispatch(SetAddPost(title, content, categories))
                        dispatch(setStatus('succeeded'))
                    }
                })
                .catch((error) => {
                    console.log(error.response.data)
                    dispatch(setError(error.response.data))
                    dispatch(setStatus('succeeded'))
                })
        } catch (error) {
        }
    }
}