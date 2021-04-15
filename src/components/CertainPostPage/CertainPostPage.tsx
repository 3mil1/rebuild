import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getCertainPost} from "./CertainPost-Reducer";
import classes from './CertainPost.module.css'
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {useParams} from "react-router-dom";

export const CertainPostPage = React.memo(function () {
    const CertainPost = useSelector((state: any) => state.CertainPost)
    const dispatch = useDispatch()

    let params = Object.values(useParams())[0];

    useEffect(() => {
        // @ts-ignore
        dispatch(getCertainPost(params))
    }, [dispatch, params])


    return (
        <Container maxWidth="xl">
            <Grid container spacing={3}>
                <Grid container item xs={8} direction={'column'}>
                    <Paper style={{margin: "0px 0px 16px"}} className={classes.paper}>
                        <h1>{CertainPost.title}</h1>
                        <h5>{CertainPost.content}</h5>
                    </Paper>
                    <Paper style={{margin: "0px 0px 16px"}} className={classes.paper}>{CertainPost.title}</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
            </Grid>
        </Container>
    )
})