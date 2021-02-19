import classes from "./Posts.module.css";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPostsData, PostsType} from "./Posts-reducer";
import {Post} from "./Post/Post";
import {AppRootStateType} from "../../redux/store";
import {Redirect} from "react-router-dom";

export const Posts = () => {
    const posts = useSelector<AppRootStateType, Array<PostsType>>((state) => state.posts.posts)
    const isAuth = useSelector((state: any) => state.auth.isAuth)
    console.log(posts)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getPostsData())
    }, [dispatch]);



    // if (!isAuth) {
    //     return <Redirect to={"/login"}/>
    // }

    return (
        <>
            <div className={classes.search}>
                <div className={classes.filter}>
                    <div className={classes.filterPadding}>
                        <span>Filter</span>
                        <div className={classes.checkboxes}>
                            <div className={classes.checkbox}>
                                <input type="checkbox" name="" id=""/>
                                <span>Ehitus</span>
                            </div>
                            <div className={classes.checkbox}>
                                <input type="checkbox" name="" id=""/>
                                <span>Viimistlus</span>
                            </div>
                            <div className={classes.checkbox}>
                                <input type="checkbox" name="" id=""/>
                                <span>Lammutamine</span>
                            </div>
                            <div className={classes.checkbox}>
                                <input type="checkbox" name="" id=""/>
                                <span>Värvimine</span>
                            </div>

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
                                    tags={post.tags}
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
}


