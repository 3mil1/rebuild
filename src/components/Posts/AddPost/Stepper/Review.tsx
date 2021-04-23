import {Redirect, useHistory} from "react-router-dom";
import React, {useCallback, useState} from "react";
import getFormData from "./services/getFormData";
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {addPost} from "./AddPost-reducer";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import {CategoriesType} from "../../Post/PostCard";

export const Review = React.memo(function () {
    const dispatch = useDispatch()
    const postId = useSelector((state: any) => state.addPostReducer.id)

    const history = useHistory();
    const [initialValues] = useState(getFormData());

    const [redirect, setRedirect] = useState(false)

    const onSubmit = useCallback(
        () => {
            dispatch(addPost(initialValues['Title'], initialValues['Content'], initialValues['categories']))
            setRedirect(true)
        }, [initialValues]
    );

    const onBack = useCallback(() => {
        history.goBack();
    }, [history]);


    if (redirect) {
        if (postId !== null) {
            return <Redirect to={`/post/${postId}`}/>
        }
    }

    return (
        <>
            <Button onClick={onBack}>
                Back
            </Button>
            <div>{initialValues['Title']}</div>
            <div>{initialValues['Content']}</div>
            <Paper component="ul">
                {initialValues['categories'].map((data: CategoriesType) => {
                    return (
                        <li key={data.id}>
                            <Chip
                                label={data.name}
                            />
                        </li>
                    );
                })}
            </Paper>
            <Button variant="contained" color="primary" type="submit" onClick={onSubmit}>
                Postita
            </Button>

        </>
    );
})
