import React, { useState } from 'react';
import classes from './Header.module.css';
import logo from '../../img/RebuildLogo.png'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <NavLink to="/"><img className={classes.logo} src={logo} alt="logo"/></NavLink>
                <Nav/>
            </header>
        </>
    )
}

export const Nav = () => {
    return (
        <div className={classes.nav}>
            <NavLink exact activeClassName={classes.selected} to="/">Avaleht</NavLink>
            <NavLink exact activeClassName={classes.selected} to="/register">Registreeru</NavLink>
            <NavLink exact activeClassName={classes.selected} to="/login">LogIn</NavLink>
            <NavLink exact activeClassName={classes.selected} to="/about">Meist</NavLink>
            <NavLink exact activeClassName={classes.selected} to="/profile">Profile</NavLink>
            <NavLink exact activeClassName={classes.selected} to="/search">Otsi</NavLink>
        </div>
    )
}


