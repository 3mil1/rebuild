import {ThunkAction} from "redux-thunk";
import {registerApi} from "../api/api";

const SET_REG = 'SET_REG'


type SetReg = {
    type: typeof SET_REG
    payload: {
        email: string | null,
        password: string | null,
        firstName: string | null,
        lastName: string | null
    }
}

type InitialStateType = {
    email: string | null,
    password: string | null,
    firstName: string | null,
    lastName: string | null,
}

let initialState: InitialStateType = {
    email: null,
    password: null,
    firstName: null,
    lastName: null
}


export const registerReducer = (state = initialState, action: SetReg) => {
    switch (action.type) {
        case SET_REG: {
            return {
                ...state,
                ...action.payload,
            }
        }
    }
}


const SetReg = (email: string, firstName: string, lastName: string, password: string, ): SetReg => {
    return {
        type: SET_REG,
        payload: {
            email,
            password,
            firstName,
            lastName
        }
    }
}

export type ThunkType = ThunkAction<any, any, any, any>;

export const register = (email: string, firstName: string, lastName: string, password: string): ThunkType => {
    debugger
    return async (dispatch) => {
        try {
            registerApi.register(email, firstName, lastName, password)
                .then(response => {
                        response.status = 201
                        dispatch(SetReg(email, firstName, lastName, password))
                    }
                )
                .catch((error) => {
                    console.log(error.response.data)
                })
        } catch (error) {

        }
    }
}