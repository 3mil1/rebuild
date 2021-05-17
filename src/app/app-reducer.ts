import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {setAuthAC} from "../redux/auth-reducer";

const initialState: InitialStateType = {
    status: 'idle',
    error: null,
    isInitialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET_STATUS':
            return {...state, status: action.status}
        case 'APP/SET_ERROR':
            return {...state, error: action.error}
        case 'APP/SET-IS-INITIALIZED':
            return {...state, isInitialized: action.value}
        default:
            return {...state}
    }
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed' | 'confirm' | 'PostLoading' | null

export type InitialStateType = {
    status: RequestStatusType
    error: string | null
    isInitialized: boolean
}

export const setError = (error: string | null) => ({type: 'APP/SET_ERROR', error} as const)
export const setStatus = (status: RequestStatusType) => ({type: 'APP/SET_STATUS', status} as const)
export const setAppInitializedAC = (value: boolean) => ({type: 'APP/SET-IS-INITIALIZED', value} as const)

export const initializeAppTC = () => (dispatch: Dispatch) => {
    authAPI.auth().then(res => {
        if (res.status === 200) {
            dispatch(setAuthAC(true))
        } else {

        }
        dispatch(setAppInitializedAC(true));
    })
}

type ActionsType =
    | ReturnType<typeof setError>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setAppInitializedAC>
