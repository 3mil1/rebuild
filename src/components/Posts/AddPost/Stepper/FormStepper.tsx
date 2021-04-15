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
import withStyles from "@material-ui/core/styles/withStyles";
import StepConnector from "@material-ui/core/StepConnector";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from 'clsx';
import {Check} from "@material-ui/icons";

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

    const ColorlibConnector = withStyles({
        alternativeLabel: {
            top: 10,
        },
        active: {
            '& $line': {
                backgroundColor: '#69AF8A',
                boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
            },
        },
        completed: {
            '& $line': {
                backgroundColor: '#69AF8A',
            },
        },
        line: {
            height: 3,
            border: 0,
            backgroundColor: '#eaeaf0',
            borderRadius: 1,
        },
    })(StepConnector);

    const useColorlibStepIconStyles = makeStyles({
        root: {
            color: '#eaeaf0',
            display: 'flex',
            height: 22,
            alignItems: 'center',
        },
        active: {
            color: '#784af4',
        },
        circle: {
            width: '25px',
            height: '25px',
            backgroundColor: '#849FE7',
            color: '#fff',
            borderRadius: '50%'
        },
        completed: {
            color: '#69AF8A',
            zIndex: 1,
            fontSize: 18,
        },
    });


    function ColorlibStepIcon(props: StepIconProps) {
        const style = useColorlibStepIconStyles();
        const {active, completed, icon} = props;

        return (
            <div
                className={clsx(classes.root, {
                    [style.active]: active,
                    [style.completed]: completed,
                })}
            >
                {completed ? <div className={style.circle}> <Check className={style.completed}/></div> : <div className={style.circle}>{icon}</div>}
            </div>
        );
    };

    return (
        <Grid container>
            <Grid className={classes.container}>
                <Paper variant="outlined" square className={classes.paperLeft}>
                    <Stepper activeStep={state.activeStep} alternativeLabel connector={<ColorlibConnector/>}>
                        {TABS.map(({title}, index) => {
                            return (
                                <Step key={index}>
                                    <StepLabel StepIconComponent={ColorlibStepIcon}>{title}</StepLabel>
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