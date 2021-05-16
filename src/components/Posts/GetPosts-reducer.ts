import {ThunkAction} from "redux-thunk";
import {postsApi} from "../../api/api";
import {CategoriesType} from "./Post/PostCard";
import {setStatus} from "../../app/app-reducer";


const SET_POSTS_DATA = 'SET_POSTS_DATA'
const SET_TAGS = 'SET_TAGS'
type ActionsType = SetPostsDataActionType | SetTagsActionType

const initialState: InitialStateType = {
    data: [],
    categories: [],
    current_page: null,
    from: null,
    next_page: null,
    per_page: null,
    prev_page: null,
    to: null,
    total: null
}

type InitialStateType = {
    data: Array<PostsType>
    categories: CategoriesType[]
    current_page: null
    from: null
    next_page: null
    per_page: null
    prev_page: null
    to: null
    total: null
}
export type PostsType = {
    id: string | null
    title: string | null
    content: string | null
    createdAt: string | null
    updatedAt: string | null
    categories: CategoriesType[]
    user: { id: number | null, firstName: string | null, lastName: string | null }
    comments: []
}

type SetPostsDataActionType = {
    type: typeof SET_POSTS_DATA,
    payload: {
        from: number,
        to: number,
        per_page: number,
        total: number,
        current_page: number,
        prev_page: null | number,
        next_page: number,
        data: Array<PostsType>,
    }
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
                ...action.payload,
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

const setPostsData = (from: number, to: number, per_page: number, total: number, current_page: number, prev_page: null | number, next_page: number, data: Array<PostsType>): SetPostsDataActionType => {
    return {
        type: SET_POSTS_DATA,
        payload: {
            current_page: current_page,
            data: data,
            from: from,
            next_page: next_page,
            per_page: per_page,
            prev_page: prev_page,
            to: to,
            total: total
        }
    }
}
const setTags = (categories: CategoriesType[]): SetTagsActionType => {
    return {
        type: SET_TAGS,
        categories
    }
}

export type ThunkType = ThunkAction<any, any, any, any>;

export const getPostsData = (page: number, tags: string | null): ThunkType => {
    return async (dispatch) => {
        dispatch(setStatus('PostLoading'))
        try {
            postsApi.getPosts(tags, page)
                .then(response => {
                    const {
                        from, to, per_page, total, current_page, prev_page, next_page, data
                    } = response.data
                    dispatch(setPostsData(from, to, per_page, total, current_page, prev_page, next_page, data))
                    dispatch(setStatus('succeeded'))

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

