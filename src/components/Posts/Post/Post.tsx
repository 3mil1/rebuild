import IconButton from "@material-ui/core/IconButton";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from '@material-ui/icons/Done';
import classes from "./Post.module.css";
import {NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {CategoriesType} from "./PostCard";
import {TextField} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import {getTags} from "../GetPosts-reducer";
import {useDispatch, useSelector} from "react-redux";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import {Controller, useForm} from "react-hook-form";
import {updatePost} from "../UpdatePost";

export const Post = React.memo(function (props: any) {
    const dispatch = useDispatch()
    const userID = useSelector((state: any) => state.auth.userId)
    const tags = useSelector((state: any) => state.postsPage.categories)
    const [canEdit, edit] = useState(false)
    const [categories, setCategories] = useState<CategoriesType[]>([]);
    const [unusedCategories, setUnusedCategories] = useState<CategoriesType[]>([]);
    const {handleSubmit, errors: fieldsErrors, control, formState: {errors}} = useForm({mode: "onBlur"});

    useEffect(() => {
        dispatch(getTags())
        setCategories(props.categories)
    }, [dispatch, props.categories]);

    const handleDelete = (chipToDelete: CategoriesType) => () => {
        setCategories((chips) => chips.filter((chip) => chip.id !== chipToDelete.id))
        setUnusedCategories([...unusedCategories, chipToDelete]);
    }

    const onHandleDelete = (chipToDelete: CategoriesType) => () => {
        setUnusedCategories((chips) => chips.filter((chip) => chip.id !== chipToDelete.id));
        setCategories([...categories, chipToDelete]);
    }

    const editing = () => {
        edit(true)
        const filtered = tags.filter((a: { id: number; }) => !categories.map(b => b.id).includes(a.id))
        setUnusedCategories(filtered)
    }

    const submit = () => {
        if (Object.keys(errors).length === 0) {
            handleSubmit(onSubmit)()
            edit(false)
        }
    }

    const onSubmit = (formData: { title: string, content: string }) => {
        dispatch(updatePost(props.id, formData.title, formData.content, categories.map(id => ({"id": id.id})), userID))
    }



    return (
        <>
            {props.canEdit ?
                canEdit ?
                    <Tooltip title="Salvesta">
                        <IconButton onClick={submit} type={'button'} form="submit-form"><DoneIcon/></IconButton>
                    </Tooltip>
                    :
                    <Tooltip title="Muuda">
                        <IconButton onClick={editing}><EditOutlinedIcon/></IconButton>
                    </Tooltip>
                : false}

            <form className={classes.form}>
                <div className={classes.hashtags}>
                    {canEdit ?
                        <div>
                            <Paper component="ul">
                                {categories.map((data) => {
                                    return (
                                        <li key={data.id}>
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
                                {unusedCategories.map((data) => {
                                    return (
                                        <li key={data.id}>
                                            <Chip
                                                label={data.name}
                                                onClick={onHandleDelete(data)}
                                            />
                                        </li>
                                    );
                                })}
                            </Paper>
                        </div>
                        : props.categories.map((categories: CategoriesType) =>
                            <div className={classes.hashtag} key={categories.name}>
                                #{categories.name}
                            </div>
                        )}
                </div>
                <div className={classes.description}>
                    {canEdit ?
                        <Controller
                            name="title"
                            as={
                                <TextField
                                    id="title"
                                    helperText={fieldsErrors.title ? fieldsErrors.title.message : ''}
                                    variant="outlined"
                                    label="Pealkiri"
                                    error={!!fieldsErrors.title}
                                    name="title"
                                    autoFocus
                                />
                            }
                            control={control}
                            defaultValue={props.title}
                            rules={{
                                required: 'Required'
                            }}
                        />

                        :
                        <NavLink to={'/post/' + props.id}>
                            {props.title}
                        </NavLink>
                    }
                    <div>
                        {canEdit ?
                            <Controller
                                name="content"
                                as={
                                    <TextField
                                        id="content"
                                        helperText={fieldsErrors.content ? fieldsErrors.content.message : ''}
                                        variant="outlined"
                                        label="Sisu"
                                        error={!!fieldsErrors.content}
                                        name="content"
                                        autoFocus
                                        multiline={true}
                                    />
                                }
                                control={control}
                                defaultValue={props.content}
                                rules={{
                                    required: 'Required'
                                }}
                            />
                            : props.content}
                    </div>
                </div>
            </form>
        </>
    )
})