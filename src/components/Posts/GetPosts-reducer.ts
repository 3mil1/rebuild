import {ThunkAction} from "redux-thunk";
import {postsApi} from "../../api/api";
import {CategoriesType} from "./Post/Post";


const SET_POSTS_DATA = 'SET_POSTS_DATA'
const SET_TAGS = 'SET_TAGS'
type ActionsType = SetPostsDataActionType | SetTagsActionType

const initialState: InitialStateType = {posts: [], categories: []}

type InitialStateType = {
    posts: Array<PostsType>
    categories: CategoriesType[]
}
export type PostsType = {
    id: string
    title: string
    content: string
    createdAt: string
    updatedAt: string
    categories: CategoriesType[]
}

type SetPostsDataActionType = {
    type: typeof SET_POSTS_DATA,
    posts: Array<PostsType>
}
type SetTagsActionType = {
    type: typeof SET_TAGS,
    categories: CategoriesType[]
}


export const getPostsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_POSTS_DATA: {
            return {
                ...state,
                posts: action.posts
            }
        }
        case SET_TAGS: {
            return {
                ...state,
                categories: action.categories
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
const setTags = (categories: CategoriesType[]): SetTagsActionType => {
    return {
        type: SET_TAGS,
        categories
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

export const getTags = (): ThunkType => {
    return async (dispatch) => {
        try {
            postsApi.getTags()
                .then(response => {
                    dispatch(setTags(response.data))
                })
                .catch((error) => {
                    console.log('tags error', error.response)
                    //sama moodi tuleb {} mitte string. parandada
                    // dispatch(setError(error.response.data.error))
                })
        } catch (error) {
            console.log(error.response.data);
        }
    }
}


