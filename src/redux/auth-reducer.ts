import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";

type ActionsType = SetUserData

const SET_USER_DATA = 'SET_USER_DATA'

export type SetUserData = {
    type: typeof SET_USER_DATA
    payload: {
        userId: number | null
        email: string | null
        login: string | null
        isAuth: boolean | null
    }
}

type initialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean | null
}

let initialState: initialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
    }
    return state;
}

export const setAuthUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean | null): SetUserData => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    }
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    return authAPI.auth()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserDataAC(id, email, login, true))
            }
        })
}

export type ThunkType = ThunkAction<any, any, any, any>;

export const login = (email: string, password: string) => (dispatch: Dispatch) => {
    debugger
    authAPI.login(email , password)
        .then(response => {
            debugger
            console.log(response)
            // if (response.data.resultCode === 0) {
            //     dispatch(getAuthUserData())
            // } else {
            //     let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            //     // dispatch(stopSubmit("login", {_error: messages}))
            // }
        })
};

export const logout = (): ThunkType => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false))
            }
        })
}



