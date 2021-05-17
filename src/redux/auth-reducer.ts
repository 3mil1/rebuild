import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {setError, setStatus} from "../app/app-reducer";

type ActionsType = SetUserData | SetAuth

const SET_USER_DATA = 'SET_USER_DATA'
const SET_AUTH = 'SET_AUTH'

type SetUserData = {
    type: typeof SET_USER_DATA
    payload: {
        userId: number | null
        firstName: string | null
    }
}

type SetAuth = {
    type: typeof SET_AUTH
    payload: {
        isAuth: boolean,
    }
}

type initialStateType = {
    userId: number | null
    error: boolean | null
    isAuth: boolean
}

let initialState: initialStateType = {
    userId: null,
    error: null,
    isAuth: false,
}

export const authReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case SET_AUTH: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
}

export const setAuthUserDataAC = (userId: number | null, firstName: string | null): SetUserData => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            firstName,
        }
    }
}

export const setAuthAC = (isAuth: boolean): SetAuth => {
    return {
        type: SET_AUTH,
        payload: {
            isAuth,
        }
    }
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    try {
        dispatch(setStatus('loading'))
        return authAPI.auth()
            .then(response => {
                const {userId, firstName} = response.data
                dispatch(setAuthUserDataAC(userId, firstName))
                dispatch(setAuthAC(true))
                dispatch(setStatus('succeeded'))
            })
            .catch((error) => {

                //parandada. kukkub error kui token expired

                // // if(error.response.data !== 'Please log in') {
                //     dispatch(setError(error.response.data.error))
                // // }
                dispatch(setStatus('succeeded'))
            })
    } catch (error) {
        console.log(error)
    }
}

export type ThunkType = ThunkAction<any, any, any, any>;

export const login = (email: string, password: string): ThunkType => {
    return async (dispatch) => {
        try {
            authAPI.login(email, password)
                .then(response => {
                    dispatch(getAuthUserData())
                })
                .catch((error) => {
                    dispatch(setError(error.response.data.error))
                })
        } catch (error) {
            console.log(error.response.data);
        }
    }
};

export const logout = (): ThunkType => (dispatch) => {
    authAPI.logout()
        .then(response => {
            dispatch(setAuthUserDataAC(null, null))
            dispatch(setAuthAC(false))
        })
        .catch((error) => {
            console.log(error.response)
        })
}



