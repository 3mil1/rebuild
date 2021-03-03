import React, {useEffect} from 'react'
import Stepper from "@material-ui/core/Stepper";
import {Step} from "@material-ui/core";
import StepLabel from "@material-ui/core/StepLabel";
import {Redirect, useLocation} from "react-router-dom";
import clearFormData from "./services/clearFormData";
import {Title} from "./Title";
import {Tags} from "./Tags";
import {Content} from "./Content";
import {Review} from "./Review";
import {useSelector} from "react-redux";


const TABS = [
    {
        component: Title,
        title: "Pealkiri",
        Description: 'Desc 1'
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
        <>
            <Stepper activeStep={state.activeStep} alternativeLabel>
                {TABS.map(({title}) => {
                    return (
                        <Step key={title}>
                            <StepLabel>{title}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {tab && <tab.component/>}
            <div>{tab.Description}</div>
        </>
    )
})