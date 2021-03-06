import {ThunkAction} from "redux-thunk";
import {setError, setStatus} from "../../app/app-reducer";
import {forgotPasswordApi} from "../../api/api";

const RESET_PASSWORD = 'RESET_PASSWORD'

type ResetPw = {
    type: typeof RESET_PASSWORD
    payload: {
        email: string
    }
}

const initialState = {
    email: null
}

export const resetPwReducer = (state = initialState, action: ResetPw) => {
    switch (action.type) {
        case RESET_PASSWORD: {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}

const ResetPw = (email: string): ResetPw => {
    return {
        type: RESET_PASSWORD,
        payload: {
            email
        }
    }
}

type ThunkType = ThunkAction<any, any, any, any>;

export const resetPw = (email: string): ThunkType => {
    return async (dispatch) => {
        try {
            dispatch(setStatus('loading'))
            forgotPasswordApi.passwordReset(email)
                .then(response => {
                    console.log(response)
                    dispatch(setStatus('succeeded'))
                })
                .catch((error) => {
                    console.log(error.response)
                    // dispatch(setError(error.response))
                    dispatch(setStatus('succeeded'))
                })
        } catch (error) {
        }
    }
}