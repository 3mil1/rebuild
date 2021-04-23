const initialState: InitialStateType = {
    status: 'idle',
    error: null
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET_STATUS':
            return {...state, status: action.status}
        case 'APP/SET_ERROR':
            return {...state, error: action.error}
        default:
            return {...state}
    }
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed' | 'confirm' | null

export type InitialStateType = {
    status: RequestStatusType
    error: string | null
}

export const setError = (error: string | null) => ({type: 'APP/SET_ERROR', error} as const)
export const setStatus = (status: RequestStatusType) => ({type: 'APP/SET_STATUS', status} as const)

type ActionsType =
    | ReturnType<typeof setError>
    | ReturnType<typeof setStatus>
