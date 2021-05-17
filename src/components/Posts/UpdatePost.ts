import {ThunkAction} from "redux-thunk";
import {postsApi} from "../../api/api";
import {setError} from "../../app/app-reducer";
import {getUserData} from "../Profile/Profile-reducer";

export type ThunkType = ThunkAction<any, any, any, any>;

export const updatePost = (id: number, title: string, content: string, categories: { id: number }[], userId: number): ThunkType => {
    return async (dispatch) => {
        try {
            postsApi.editPost(id, title, content, categories)
                .then(response => {
                    // dispatch(getCertainPost(id))
                    dispatch(getUserData(userId))
                })
                .catch((error) => {
                    dispatch(setError(error.response.data.error))
                })
        } catch (error) {
            console.log(error.response.data);
        }
    }
};
