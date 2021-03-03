import classes from "./Posts.module.css";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPostsData, getTags, PostsType} from "./GetPosts-reducer";
import {CategoriesType, Post} from "./Post/Post";
import {AppRootStateType} from "../../redux/store";
import {Redirect} from "react-router-dom";
import {FormStepper} from "./AddPost/Stepper/FormStepper";

export const Posts = React.memo(function () {
    const posts = useSelector<AppRootStateType, Array<PostsType>>((state) => state.posts.posts)
    const categories = useSelector<AppRootStateType, Array<CategoriesType>>((state) => state.posts.categories)
    const isAuth = useSelector((state: any) => state.auth.isAuth)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getPostsData())
        dispatch(getTags())
    }, [dispatch]);


    if (!isAuth) {
        return <Redirect to={"/login"}/>
    }

    return (
        <>
            <div className={classes.search}>
                <div className={classes.filter}>
                    <div className={classes.filterPadding}>
                        <span>Filter</span>
                        <div className={classes.checkboxes}>
                            {categories.map((category) => <div className={classes.checkbox}>
                                <input type="checkbox" name="" id=""/>
                                <span>{category.name}</span>
                                </div>)}
                        </div>
                    </div>
                </div>
                <div className={classes.results}>
                    <div className={classes.resultsWrapper}>
                        {posts.map((post) => {
                            return (
                                <Post
                                    key={post.id}
                                    id={post.id}
                                    title={post.title}
                                    categories={post.categories}
                                    content={post.content}
                                    createdAt={post.createdAt}
                                    updatedAt={post.updatedAt}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
})


