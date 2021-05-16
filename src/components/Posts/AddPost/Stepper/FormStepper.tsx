import React, {useEffect} from 'react'
import Stepper from "@material-ui/core/Stepper";
import {makeStyles, Step, StepConnector, withStyles} from "@material-ui/core";
import StepLabel from "@material-ui/core/StepLabel";
import {Redirect, useLocation} from "react-router-dom";
import clearFormData from "./services/clearFormData";
import {Title} from "./Title";
import {Tags} from "../Tags/Tags";
import {Content} from "./Content";
import {Review} from "./Review";
import {useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import classes from './FormStepper.module.css'
import {Check} from "@material-ui/icons";
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './style.css';


const TABS = [
    {
        component: Title,
        title: "Pealkiri",
        Description: 'Let\'s start with a strong headline.\n' +
            'This helps your job post stand out to the right candidates. It’s the first thing they’ll see, so make it count!',
        SecondDescription: 'Desc 1'
    },
    {
        component: Content,
        title: "Sisu",
        Description: 'Desc 2',
        SecondDescription: 'Desc 2'
    },
    {
        component: Tags,
        title: "Tagid",
        Description: 'Desc 3',
        SecondDescription: 'Valige oskused(tagid) välja'
    },
    {
        component: Review,
        title: "Ülevaade",
        Description: 'Desc 4',
        SecondDescription: 'Desc 4'
    },
];

const QontoConnector = withStyles({
    alternativeLabel: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    active: {
        '& $line': {
            borderColor: '#58d067',
        },
    },
    completed: {
        '& $line': {
            borderColor: '#58d067',
        },
    },
    line: {
        borderColor: '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        width: 'auto',
        height: 22,
        alignItems: 'center',
    },
    active: {
        color: '#58d067',
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: '#58d067',
        zIndex: 1,
        fontSize: 18,
    },
});

function QontoStepIcon(props: any) {
    const classes = useQontoStepIconStyles();
    const {active, completed} = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ? <Check className={classes.completed}/> : <div className={classes.circle}/>}
        </div>
    );
}

QontoStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
};


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
                    <Stepper alternativeLabel activeStep={state.activeStep} connector={<QontoConnector/>}>
                        {TABS.map(({title}, index) => (
                            <Step key={index}>
                                <StepLabel StepIconComponent={QontoStepIcon}>{title}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div className={classes.descText}>{tab.Description}</div>
                </Paper>
                <Paper variant="outlined" square className={classes.paperRight}
                       style={{padding: '50px 35px 20px 35px'}}>
                    <h4 className={classes.descText} style={{marginBottom: "1rem"}}>{tab.SecondDescription}</h4>
                    {tab && <tab.component/>}
                </Paper>
            </Grid>
        </Grid>
    )
})
