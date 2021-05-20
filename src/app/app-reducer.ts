import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {setAuthAC} from "../redux/auth-reducer";

export type Severity = "success" | "info" | "warning" | "error" | undefined

const initialState: InitialStateType = {
    status: 'idle',
    alert: null,
    severity: undefined,
    isInitialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET_STATUS':
            return {...state, status: action.status}
        case 'APP/SET_ERROR':
            return {...state, alert: action.alert, severity: action.severity}
        case 'APP/SET-IS-INITIALIZED':
            return {...state, isInitialized: action.value}
        default:
            return {...state}
    }
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed' | 'confirm' | 'PostLoading' | null

export type InitialStateType = {
    status: RequestStatusType
    alert: string | null
    severity: Severity
    isInitialized: boolean
}

export const setAlert = (alert: string | null, severity?: Severity) => ({type: 'APP/SET_ERROR', alert, severity} as const)
export const setStatus = (status: RequestStatusType) => ({type: 'APP/SET_STATUS', status} as const)
export const setAppInitializedAC = (value: boolean) => ({type: 'APP/SET-IS-INITIALIZED', value} as const)

export const initializeAppTC = () => async (dispatch: Dispatch) => {
    authAPI.auth().then(res => {
        if (res.status === 200) {
            dispatch(setAuthAC(true))
        }
    })
        .finally(() => dispatch(setAppInitializedAC(true)))
}

type ActionsType =
    | ReturnType<typeof setAlert>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setAppInitializedAC>
