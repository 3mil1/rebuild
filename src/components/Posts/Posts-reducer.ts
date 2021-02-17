import {ThunkAction} from "redux-thunk";
import {postsApi} from "../../api/api";



const SET_POSTS_DATA = 'SET_POSTS_DATA'
type ActionsType = SetPostsDataActionType

const initialState: InitialStateType = {posts: []}

type InitialStateType = {
    posts: Array<PostsType>
}
export type PostsType = {
    id: string,
    title: string,
    content: string,
    createdAt: string,
    updatedAt: string
}

type SetPostsDataActionType = {
    type: typeof SET_POSTS_DATA,
    posts: Array<PostsType>
}

export const postsReducer = (state= initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_POSTS_DATA: {
            return {
                ...state,
                posts: action.posts
            }
        }
        default:
            return state
    }
}

const setPostsData = (posts: Array<PostsType>): SetPostsDataActionType => {
    return {
        type: SET_POSTS_DATA,
        posts
    }
}

export type ThunkType = ThunkAction<any, any, any, any>;

export const getPostsData = (): ThunkType => {
    return async (dispatch) => {
        try {
            postsApi.getPosts()
                .then(response => {
                    dispatch(setPostsData(response.data))
                })
                .catch((error) => {
                    console.log('posts error', error.response)
                    //sama moodi tuleb {} mitte string. parandada
                    // dispatch(setError(error.response.data.error))
                })
        } catch (error) {
            console.log(error.response.data);
        }
    }
}

