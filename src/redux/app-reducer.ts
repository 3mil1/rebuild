import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const isInitialized: InitialStateType = {
    isInitialized: false
}

export const appReducer = (state: InitialStateType = isInitialized, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case  'APP/SET_IS_INITIALIZED':
            return {...state, isInitialized: action.value}
        default:
            return {...state}
    }
}

export type InitialStateType = {

    // true if initialized
    isInitialized: boolean
}

export const setAppInitializedAC = (value: boolean) => ({type: 'APP/SET_IS_INITIALIZED', value} as const)


export const initializeAppTC = () => (dispatch: Dispatch) => {
    authAPI.auth()
        .then(res => {
            dispatch(setAppInitializedAC(true))
        })
        .catch()
}

export type SetAppInitialized = ReturnType<typeof setAppInitializedAC>

type ActionsType = SetAppInitialized