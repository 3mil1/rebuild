import {ThunkAction} from "redux-thunk";
import {userApi} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

const initialState: any= {
    id: null,
    email: null,
    firstName: null,
    lastName: null,
    posts: []
}

type SetUserData = {
    type: typeof SET_USER_DATA,
    payload: {
        id: number,
        email: string,
        firstName: string,
        lastName: string,
        posts: []
    }
}

const setUserData = (id: number, email: string, firstName: string, lastName: string, posts: []): SetUserData => {
    return {
        type: SET_USER_DATA,
        payload: {
            id: id,
            email: email,
            firstName: firstName,
            lastName: lastName,
            posts: posts
        }
    }
}


export const getUserReducer = (state = initialState , action: SetUserData) => {
    switch (action.type) {
        case SET_USER_DATA: {
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

export const getUserData = (id: number): ThunkType => {
    return async (dispatch) => {
        try {
            userApi.getUser(id)
                .then(response => {
                    const {id, email, firstName, lastName, posts} = response.data
                    dispatch(setUserData(id, email, firstName, lastName, posts))
                })
                .catch((error) => {
                    console.log('userData error', error.response)
                })
        } catch (error) {
            console.log(error.response.data)
        }
    }
}
