import React from 'react';
import classes from './Header.module.css';
import logo from '../../img/RebuildLogo.png'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ProfileMenu} from "./ProfileMenu/ProfileMenu";


export const Header = React.memo(function () {


    return (
        <>
            <header className={classes.header}>
                <NavLink to="/"><img className={classes.logo} src={logo} alt="logo"/></NavLink>
                <Nav/>
            </header>
        </>
    )
})

export const Nav = React.memo(function () {

    const selector = useSelector((state: any) => state.auth)

    return (
        <div className={classes.nav}>
            <NavLink exact activeClassName={classes.selected} to="/">Avaleht</NavLink>

            {/*ei ole tehtud meist sp ei ava pathi kaudu*/}
            <NavLink activeClassName={classes.selected} to="/about">Meist</NavLink>
            <NavLink activeClassName={classes.selected} to="/posts">Otsi</NavLink>
            {selector.isAuth ? false : <NavLink activeClassName={classes.selected} to="/register">Registreeri</NavLink>}
            {selector.isAuth
                ? <ProfileMenu/>
                : <NavLink activeClassName={classes.selected} to="/login">Log in</NavLink>}
        </div>
    )
})





