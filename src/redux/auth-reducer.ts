import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";

type ActionsType = SetUserData | SetError

const SET_USER_DATA = 'SET_USER_DATA',
    SET_ERROR = 'SET_ERROR';

type SetUserData = {
    type: typeof SET_USER_DATA
    payload: {
        userId: number | null
        firstName: string | null
        isAuth: boolean | null
    }
}

type SetError = {
    type: typeof SET_ERROR,
    payload: {
        error: boolean
    }
}

type initialStateType = {
    userId: number | null
    isAuth: boolean | null
    error: boolean | null
}

let initialState: initialStateType = {
    userId: null,
    isAuth: false,
    error: null
}

export const authReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case SET_ERROR : {
            return {
                ...state,
                ...action.payload
            }
        }
    }
    return state;
}

export const setAuthUserDataAC = (userId: number | null, firstName: string | null, isAuth: boolean | null): SetUserData => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            firstName,
            isAuth
        }
    }
}
export const setErrorAC = (error: boolean): SetError => {
    return {
        type: SET_ERROR,
        payload: {
            error
        }
    }
}
export const getAuthUserData = () => (dispatch: Dispatch) => {
    try {
        return authAPI.auth()
            .then(response => {
                let {data: userId, firstName} = response.data
                dispatch(setAuthUserDataAC(userId, firstName, true))
            })
            .catch((error) => {
                console.log(error)
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
                    console.log(error)
                    dispatch(setErrorAC(!!error.response.data.error))
                })
        } catch (error) {
            console.log(error.response.data);
        }
    }
};

export const logout = (): ThunkType => (dispatch) => {
    authAPI.logout()
        .then(response => {
            dispatch(setAuthUserDataAC(null, null, false))
        })
        .catch((error) => {
        console.log(error.response)
        })
}



