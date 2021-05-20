import React, {useEffect} from 'react';
import classes from './Profile.module.css';
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Avatar, Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {Rating} from "@material-ui/lab";
import {getUserData} from "./Profile-reducer";
import {Post} from "../Posts/Post/Post";
import Tooltip from "@material-ui/core/Tooltip";
import {ProfileSettings} from "./ProfileFirstSetUp/ProfileSettings";


export const Profile = React.memo(function () {
    const dispatch = useDispatch()
    const selector = useSelector((state: any) => state)
    const loggedUserData = useSelector((state: any) => state.getUserReducer)
    const posts = useSelector((state: any) => state.getUserReducer.posts)


    useEffect(() => {
        if (selector.auth.userId != null) {
            dispatch(getUserData(selector.auth.userId))
        }
    }, [dispatch, selector.auth.userId])


    if (!selector.auth.isAuth) {
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
                                    <Avatar className={classes.profileImg} variant="rounded">
                                        <h3>{loggedUserData.firstName}</h3>
                                    </Avatar>
                                </Grid>
                                <Grid item xs={9}>
                                    <div style={{marginBottom: "1rem", marginTop: "0.5rem"}}>{loggedUserData.firstName}</div>
                                    <div>
                                        {loggedUserData.description && loggedUserData.description.substring(0, 100) + "..."}
                                    </div>
                                    <div className={classes.rating}>
                                        <Rating name="half-rating" defaultValue={2.5} precision={0.5}/>
                                    </div>
                                </Grid>
                                <Grid item xs={1}>
                                    <Tooltip title="Seaded" style={{float: "right"}}>
                                        <ProfileSettings
                                            desc={loggedUserData.description}
                                            userId={selector.auth.userId}
                                        />
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={11}>
                                    {loggedUserData.description && loggedUserData.description}
                                </Grid>

                            </Grid>
                        </Paper>
                        {/*<Paper className={classes.paper}>Tags</Paper>*/}

                        {posts.map((data: any) => {
                            return (
                                <Paper key={data.id} className={classes.paper} style={{padding: '1.5rem'}}>
                                    <Post
                                        categories={data.categories}
                                        id={data.id}
                                        title={data.title}
                                        content={data.content}
                                        canEdit={true}
                                    />
                                </Paper>

                            )
                        })}
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>Lisa info</Paper>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
})
