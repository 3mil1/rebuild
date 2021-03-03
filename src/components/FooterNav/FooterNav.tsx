import React, {useState, useRef} from 'react';
import classes from './FooterNav.module.css';
import {NavLink} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import {useDispatch, useSelector} from "react-redux";

export const FooterNav = () => {

    const dispatch = useDispatch()
    const selector = useSelector((state: any) => state.auth)

    return (
        <div className={classes.footerNav}>
            <div className={classes.footerItems}>
                <div className={classes.footerItem1}>
                    <NavLink to="/"><HomeIcon/></NavLink>
                </div>
                <div className={classes.footerItem2}>
                    <NavLink to="/posts"><SearchIcon/></NavLink>
                </div>
                <div className={classes.footerItem3}>
                    <NavLink to="/profile"><PersonIcon/></NavLink>
                </div>
            </div>
        </div>
    )
}