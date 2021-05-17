import {appReducer, InitialStateType, setError, setStatus} from "./app-reducer";

let startState: InitialStateType;

beforeEach(() => {
    startState = {
        error: null,
        status: 'idle'
    }
})

test('correct error message should be set', () => {
    const endState = appReducer(startState, setError('some error'))

    expect(endState.error).toBe('some error')
})

test('correct status should be set', () => {
    const endState = appReducer(startState, setStatus('loading'))

    expect(endState.status).toBe('loading')
})
