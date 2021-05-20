import {ThunkAction} from "redux-thunk";
import {setAlert, setStatus} from "../../app/app-reducer";
import {PasswordApi} from "../../api/api";

const CHANGE_PASSWORD = 'CHANGE_PASSWORD'

type ChangePw = {
    type: typeof CHANGE_PASSWORD
    payload: {
        oldPassword: string
        newPassword: string
    }
}

const initialState = {
    oldPassword: null,
    newPassword: null
}

export const changePasswordAC = (state = initialState, action: ChangePw) => {
    switch (action.type) {
        case CHANGE_PASSWORD: {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}

const ChangePw = (oldPassword: string, newPassword: string): ChangePw => {
    return {
        type: CHANGE_PASSWORD,
        payload: {
            oldPassword,
            newPassword
        }
    }
}

type ThunkType = ThunkAction<any, any, any, any>;

export const changePassword = (oldPassword: string, newPassword: string): ThunkType => {
    return async (dispatch) => {
        try {
            dispatch(setStatus('loading'))
            PasswordApi.changePassword(oldPassword, newPassword)
                .then(response => {
                    dispatch(ChangePw(oldPassword, newPassword))
                    dispatch(setStatus('succeeded'))
                    if (response.data === "OK") {
                        dispatch(setAlert('Parool Muudetud', "success" ))
                    }
                })
                .catch((error) => {
                    dispatch(setAlert(error.response.data, "error"))
                    dispatch(setStatus('succeeded'))
                })
        } catch (error) {
            console.log(error)
        }
    }
}
