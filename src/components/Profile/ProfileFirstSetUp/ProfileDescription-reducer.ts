import {ThunkAction} from "redux-thunk";
import {setAlert, setStatus} from "../../../app/app-reducer";
import {userApi} from "../../../api/api";
import {getUserData} from "../Profile-reducer";

const EDIT_USER_DESC = 'EDIT_USER_DESC'

type EditUserDesc = {
    type: typeof EDIT_USER_DESC
    payload: {
        id: number,
        desc: string
    }
}

const initialState = {
    desc: undefined
}

export const EditUser= (state = initialState, action: EditUserDesc) => {
    switch (action.type) {
        case EDIT_USER_DESC: {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}

const EditDescAC = (id: number, desc: string): EditUserDesc => {
    return {
        type: EDIT_USER_DESC,
        payload: {
            id,
            desc
        }
    }
}

type ThunkType = ThunkAction<any, any, any, any>;

export const EditDesc = (id: number, description: string): ThunkType => {
    return async (dispatch, getState) => {
        try {
            dispatch(setStatus('loading'))
            userApi.userDescription(id, description)
                .then(response => {
                    dispatch(setStatus('succeeded'))
                    dispatch(EditDescAC(id, description))
                    dispatch(getUserData(id))
                    dispatch(setAlert("Kirjeldus uuendatud", "success"))

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
