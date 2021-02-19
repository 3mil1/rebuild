import React from 'react';
import classes from './Profile.module.css';
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

export const Profile = () => {

    const selector = useSelector((state: any) => state)

    if (!selector.auth.isAuth) {
        return <Redirect to={"/login"}/>
    }

    return (
        <>
            <div className={classes.profile}>
                Profile
            </div>
        </>
    )
}
