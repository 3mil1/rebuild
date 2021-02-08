import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";

type ActionsType = SetUserData | SetError

const SET_USER_DATA = 'SET_USER_DATA',
    SET_ERROR = 'SET_ERROR';

export type SetUserData = {
    type: typeof SET_USER_DATA
    payload: {
        userId: number | null
        firstName: string | null
        jwt_token: string | null
        isAuth: boolean | null
    }
}

type SetError = {
    type: typeof SET_ERROR,
    payload: {
        error: string
    }
}

type initialStateType = {
    userId: number | null
    firstName: string | null
    jwt_token: string | null
    isAuth: boolean | null
    error: string
}

let initialState: initialStateType = {
    userId: null,
    firstName: null,
    jwt_token: null,
    isAuth: false,
    error: ''
}

export const authReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
                isAuth: true
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

export const setAuthUserDataAC = (userId: number | null, firstName: string | null , jwt_token: string | null , isAuth: boolean | null): SetUserData => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            firstName,
            jwt_token,
            isAuth
        }
    }
}
export const setErrorAC = (error: string): SetError => {
    return {
        type: SET_ERROR,
        payload: {
          error
        }
    }
}
//
// export const getAuthUserData = () => (dispatch: Dispatch) => {
//     try {
//         return authAPI.auth()
//             .then(response => {
//                 if (response.data.resultCode === 0) {
//                     let {id, email, login} = response.data.data
//                     dispatch(setAuthUserDataAC(id, email, login, true))
//                 }
//             })
//             .catch((error) => {
//                 console.log(error.response.data.error)
//             })
//     } catch (error) {
//         // console.log(error)
//     }
// }

export type ThunkType = ThunkAction<any, any, any, any>;

export const login = (email: string, password: string): ThunkType => {
    return async (dispatch) => {
        try {
            authAPI.login(email, password)
                .then(response => {
                    let {userId , firstName, token: jwt_token} = response.data
                    dispatch(setAuthUserDataAC(userId , firstName, jwt_token,  true))
                })
                .catch((error) => {
                    dispatch(setErrorAC(error.response.data.error))
                })
        } catch (error) {
            // console.log(error.response.data);
        }
    }
};

// export const logout = (): ThunkType => (dispatch) => {
//     authAPI.logout()
//         .then(response => {
//             if (response.data.resultCode === 0) {
//                 dispatch(setAuthUserDataAC(null, null, null, false))
//             }
//         })
// }



