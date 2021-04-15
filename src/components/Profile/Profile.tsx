import React, {useEffect} from 'react';
import classes from './Profile.module.css';
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {Rating} from "@material-ui/lab";
import {getUserData} from "./Profile-reducer";
import {Post} from "../Posts/Post/PostCard";


export const Profile = React.memo(function () {
    const dispatch = useDispatch()
    const selector = useSelector((state: any) => state.auth)
    const loggedUserData = useSelector((state: any) => state.getUserReducer)
    const posts = useSelector((state: any) => state.getUserReducer.posts)

    useEffect(() => {
        if (selector.userId != null) {
            dispatch(getUserData(selector.userId))
        }
    }, [dispatch])


    if (!selector.isAuth) {
        return <Redirect to={"/login"}/>
    }


    return (
        <>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={9}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={3} className={classes.profileContainer}>
                                <Grid item xs={2}>
                                    <div className={classes.profileImg}>

                                    </div>
                                </Grid>
                                <Grid item xs={9}>
                                    <div>{loggedUserData.firstName}</div>
                                    <div>Lühi kirjeldus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                                        beatae consectetur deleniti dicta
                                    </div>
                                    <div className={classes.rating}>
                                        <Rating name="half-rating" defaultValue={2.5} precision={0.5}/>
                                    </div>
                                </Grid>
                                <Grid item xs={11}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, libero, quod?
                                    At corporis ducimus esse maiores odit officia, quidem.
                                    Assumenda consequatur dolorum error fugit hic labore minima quibusdam soluta
                                    voluptate!
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>Tags</Paper>
                        <Paper className={classes.paper}>
                            {posts.map((data: any) => {
                                return (
                                    <Post
                                        key={data.id}
                                        categories={data.categories}
                                        id={data.id}
                                        title={data.title}
                                        content={data.content}
                                    />
                                )
                            })}
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
})