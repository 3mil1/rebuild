import {useHistory, useLocation} from "react-router-dom";
import React, {useCallback, useEffect, useState} from "react";
import getFormData from "./services/getFormData";
import {Controller, useForm} from "react-hook-form";
import setFormData from "./services/setFormData";
import IconButton from "@material-ui/core/IconButton";
import {KeyboardBackspace} from "@material-ui/icons";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {addPost} from "./AddPost-reducer";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import {CategoriesType} from "../../Post/Post";

export const Review = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const [initialValues] = useState(getFormData());


    const onSubmit = useCallback(
        () => {
            debugger
            dispatch(addPost(initialValues['Title'], initialValues['Content'], initialValues['categories']))
        },
        [initialValues]
    );

    const onBack = useCallback(() => {
        history.goBack();
    }, [history]);

    return (
        <>
            <IconButton onClick={onBack}>
                <KeyboardBackspace fontSize="inherit"/>
            </IconButton>

            {initialValues['Title']}
            {initialValues['Content']}
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
};