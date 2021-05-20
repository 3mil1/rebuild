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
import {Controller, useForm} from "react-hook-form";
import {updatePost} from "../UpdatePost";
import {ChoseTag} from "../AddPost/Tags/Tags";
import PostLoader from "../Post Loader/PostLoader";
import {AppRootStateType} from "../../../redux/store";
import {RequestStatusType, setAlert} from "../../../app/app-reducer";

export const Post = React.memo(function (props: any) {
    const dispatch = useDispatch()
    const userID = useSelector((state: any) => state.auth.userId)
    const tags = useSelector((state: any) => state.postsPage.categories)
    const [canEdit, edit] = useState(false)
    const [categories, setCategories] = useState<CategoriesType[]>([]);
    const [unusedCategories, setUnusedCategories] = useState<CategoriesType[]>([]);
    const {handleSubmit, errors: fieldsErrors, control, formState: {errors}} = useForm({mode: "onBlur"});
    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)


    useEffect(() => {
        dispatch(getTags())
        setCategories(props.categories)
    }, [dispatch, props.categories]);


    const editing = () => {
        edit(true)
        const filtered = tags.filter((a: { id: number; }) => !categories.map(b => b.id).includes(a.id))
        setUnusedCategories(filtered)
    }

    const submit = () => {
        if (Object.keys(errors).length === 0 && categories.length !== 0) {
            handleSubmit(onSubmit)()
            edit(false)
        } else if (categories.length === 0) {
            dispatch(setAlert('Valige Taagid', "warning"))
        }
    }

    const onSubmit = (formData: { title: string, content: string }) => {
        dispatch(updatePost(props.id, formData.title, formData.content, categories.map(id => ({"id": id.id})), userID))
    }

    return (
        <>
            {status === "PostLoading" ? <PostLoader profile={true}/> :
                <>
                    <div style={{float: "right"}}>
                        {props.canEdit ?
                            canEdit ?
                                <Tooltip title="Salvesta">
                                    <IconButton onClick={submit} type={'button'}
                                                form="submit-form"><DoneIcon/></IconButton>
                                </Tooltip>
                                :
                                <Tooltip title="Muuda">
                                    <IconButton onClick={editing}><EditOutlinedIcon/></IconButton>
                                </Tooltip>
                            : false}
                    </div>

                    <form className={classes.form}>
                        <div className={classes.hashtags}>
                            {canEdit ?
                                <ChoseTag categories={categories} unusedCategories={unusedCategories}
                                          setCategories={setCategories}
                                          setUnusedCategories={setUnusedCategories}/>

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
                                            size="small"
                                        />
                                    }
                                    control={control}
                                    defaultValue={props.title}
                                    rules={{
                                        required: 'Required'
                                    }}
                                />

                                :
                                <NavLink to={'/post/' + props.id} style={{textDecoration: "none"}}>
                                    <h2>{props.title}</h2>
                                </NavLink>
                            }
                            <div style={{marginTop: "10px"}}>
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
                                                size="small"
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
            }
        </>
    )
})
