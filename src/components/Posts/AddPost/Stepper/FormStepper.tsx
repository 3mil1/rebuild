import React, {useEffect} from 'react'
import Stepper from "@material-ui/core/Stepper";
import {MuiThemeProvider, Step, StepIconProps} from "@material-ui/core";
import StepLabel from "@material-ui/core/StepLabel";
import {Redirect, useLocation} from "react-router-dom";
import clearFormData from "./services/clearFormData";
import {Title} from "./Title";
import {Tags} from "./Tags";
import {Content} from "./Content";
import {Review} from "./Review";
import {useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import classes from './FormStepper.module.css'

const TABS = [
    {
        component: Title,
        title: "Pealkiri",
        Description: 'Let\'s start with a strong headline.\n' +
            'This helps your job post stand out to the right candidates. It’s the first thing they’ll see, so make it count!'
    },
    {
        component: Content,
        title: "Sisu",
        Description: 'Desc 2'
    },
    {
        component: Tags,
        title: "Tagid",
        Description: 'Desc 3'
    },
    {
        component: Review,
        title: "Ülevaade",
        Description: 'Desc 4'
    },
];


export const FormStepper = React.memo(function () {
    const isAuth = useSelector((state: any) => state.auth.isAuth)

    type LocationState = {
        activeStep: number
    }

    let {state = {activeStep: 0}} = useLocation<LocationState>();
    if (state === null) {
        state = {activeStep: 0}
    }

    const tab = TABS[state.activeStep];

    useEffect(() => {
        return () => {
            clearFormData();
        };
    }, []);

    if (!isAuth) {
        return <Redirect to={"/login"}/>
    }

    return (
        <Grid container>
            <Grid className={classes.container}>
                <Paper variant="outlined" square className={classes.paperLeft}>
                    <Stepper activeStep={state.activeStep} alternativeLabel>
                        {TABS.map(({title}, index) => {
                            return (
                                <Step key={index}>
                                    <StepLabel>{title}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    <div>{tab.Description}</div>
                </Paper>
                <Paper variant="outlined" square className={classes.paperRight}>
                    {tab && <tab.component/>}
                </Paper>
            </Grid>
        </Grid>
    )
})
