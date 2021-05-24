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
import {setAlert} from "../../../../app/app-reducer";


export const Tags = React.memo(function () {
    const dispatch = useDispatch()
    const tags = useSelector((state: any) => state.postsPage.categories)
    const history = useHistory();
    const location = useLocation();
    const [initialValues] = useState(getFormData());
    const [required, setRequired] = useState(false);

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
            } else {
                dispatch(setAlert("Valige sobivad teemaviited!", "warning"))
            }
        },
        [history, location, initialValues, categories]
    );


    return (
        <div>
            <ChoseTag categories={categories} unusedCategories={unusedCategories} setCategories={setCategories}
                      setUnusedCategories={setUnusedCategories}/>
            <div style={{display: 'flex', justifyContent: "flex-end", marginTop: "3rem"}}>
                <Button variant="outlined" onClick={onBack} style={{marginRight: "1.5rem"}}>
                    Tagasi
                </Button>
                <Button variant="outlined" color="primary" type="submit" onClick={onSubmit}>
                    ülevaade
                </Button>
            </div>
        </div>
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
            {(props.categories.length > 0)
            && <h6 style={{marginBottom: '15px'}}>Valitud tagid</h6>}
            <div style={{display: "flex", flexDirection: "column"}}>
                <ul style={{display: "flex"}}>
                    {props.categories.map((data: Data) => {
                        return (
                            <li key={data.id} style={{listStyleType: "none", margin: "0 5px 10px 0"}}>
                                <Chip
                                    label={data.name}
                                    onDelete={handleDelete(data)}
                                    style={{backgroundColor: '#E8F3FA'}}
                                />
                            </li>
                        );
                    })}
                </ul>
                <h6 style={{margin: '15px 0px 15px 0px'}}>Kōik tagid</h6>
                <ul style={{display: "flex"}}>
                    {props.unusedCategories.map((data: Data) => {
                        return (
                            <li key={data.id} style={{listStyleType: "none", margin: "0 5px 10px 0"}}>
                                <Chip
                                    label={data.name}
                                    onClick={onHandleDelete(data)}
                                    style={{backgroundColor: "#F2F2F2"}}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}
