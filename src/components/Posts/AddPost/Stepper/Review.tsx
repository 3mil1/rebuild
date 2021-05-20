import {Redirect, useHistory} from "react-router-dom";
import React, {useCallback, useState} from "react";
import getFormData from "./services/getFormData";
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {addPost} from "./AddPost-reducer";
import Chip from "@material-ui/core/Chip";
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
        <div style={{marginLeft: '0.5rem'}}>
            <h2 style={{marginBottom: '1rem'}}>{initialValues['Title']}</h2>
            <h4 style={{marginBottom: '1rem'}}>{initialValues['Content']}</h4>
            <ul style={{display: "flex", marginBottom: '15px'}}>
                {initialValues['categories'].map((data: CategoriesType) => {
                    return (
                        <li key={data.id} style={{listStyleType: "none", margin: "0 5px 10px 0"}}>
                            <Chip
                                label={data.name}
                            />
                        </li>
                    );
                })}
            </ul>
            <div style={{display: 'flex', justifyContent: "flex-end", marginTop: "3rem"}}>
                <Button variant="outlined" onClick={onBack} style={{marginRight: "1.5rem"}}>
                    Tagasi
                </Button>
                <Button variant="outlined" color="primary" type="submit" onClick={onSubmit}>
                    Postita
                </Button>
            </div>

        </div>
    );
})
