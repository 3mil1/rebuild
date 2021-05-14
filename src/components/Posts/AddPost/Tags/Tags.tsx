import {useHistory, useLocation} from "react-router-dom";
import React, {useCallback, useEffect, useState} from "react";
import getFormData from "../Stepper/services/getFormData";
import setFormData from "../Stepper/services/setFormData";
import {Button} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import {useDispatch, useSelector} from "react-redux";
import {CategoriesType} from "../../Post/PostCard";
import {getTags} from "../../GetPosts-reducer";
import classes from "./tags.module.css"


export const Tags = React.memo(function () {
    const dispatch = useDispatch()
    const tags = useSelector((state: any) => state.postsPage.categories)
    const history = useHistory();
    const location = useLocation();
    const [initialValues] = useState(getFormData());

    const [categories, setCategories] = useState<CategoriesType[]>([]);
    const [unusedCategories, setUnusedCategories] = useState<CategoriesType[]>([]);

    useEffect(() => {
        dispatch(getTags())
        setUnusedCategories(tags)
        if (initialValues['categories']) {
            setCategories(initialValues['categories'])
            setUnusedCategories(initialValues['unusedCategories'])
        }
    }, [dispatch]);

    const onBack = useCallback(() => {
        history.goBack();
    }, [history]);


    const onSubmit = useCallback(
        () => {
            if (categories.length !== 0) {
                let newOBJ = {...initialValues, categories, unusedCategories}
                setFormData(newOBJ);
                history.push({
                    ...location,
                    state: {
                        activeStep: 3,
                    },
                });
            }
        },
        [history, location, initialValues, categories]
    );


    return (
        <>
            <Button onClick={onBack}>
                Back
            </Button>
            <ChoseTag categories={categories} unusedCategories={unusedCategories} setCategories={setCategories}
                      setUnusedCategories={setUnusedCategories}/>
            <Button variant="contained" color="primary" type="submit" onClick={onSubmit}>
                ülevaade
            </Button>
        </>
    );
})


export const ChoseTag = (props: any) => {
    type Data = { id: any; name: any; }


    const handleDelete = (chipToDelete: CategoriesType) => () => {
        props.setCategories((chips: any[]) => chips.filter((chip) => chip.id !== chipToDelete.id))
        props.setUnusedCategories([...props.unusedCategories, chipToDelete]);
    }

    const onHandleDelete = (chipToDelete: CategoriesType) => () => {
        props.setUnusedCategories((chips: any[]) => chips.filter((chip) => chip.id !== chipToDelete.id));
        props.setCategories([...props.categories, chipToDelete]);
    };


    return (
        <div className={classes.hashTags}>
            <div style={{display: "flex"}}>
                <Paper component="ul">
                    {props.categories.map((data: Data) => {
                        return (
                            <li key={data.id} style={{listStyleType: "none"}}>
                                <Chip
                                    label={data.name}
                                    onDelete={handleDelete(data)}
                                />
                            </li>
                        );
                    })}
                </Paper>
                <hr/>
                <Paper component="ul">
                    {props.unusedCategories.map((data: Data) => {
                        return (
                            <li key={data.id} style={{listStyleType: "none"}}>
                                <Chip
                                    label={data.name}
                                    onClick={onHandleDelete(data)}
                                />
                            </li>
                        );
                    })}
                </Paper>
            </div>
        </div>
    )
}
