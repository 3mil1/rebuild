import {ThunkAction} from "redux-thunk";
import {postsApi} from "../../../api/api";
import {setError} from "../../../app/app-reducer";
import {getCertainPost} from "../CertainPost-Reducer";

export type ThunkType = ThunkAction<any, any, any, any>;

export const SendComment = (id: number, rating: number, review_text: string): ThunkType => {
    return async (dispatch) => {
        try {
            postsApi.commentPost(id, rating, review_text)
                .then(response => {
                    dispatch(getCertainPost(id))
                })
                .catch((error) => {
                    dispatch(setError(error.response.data.error))
                })
        } catch (error) {
            console.log(error.response.data);
        }
    }
};