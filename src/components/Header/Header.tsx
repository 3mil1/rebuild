import React, { useState } from 'react';
import classes from './Header.module.css';
import logo from '../../img/RebuildLogo.png'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";


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
    const selector = useSelector((state: any) => state.auth)
    debugger

    return (
        <div className={classes.nav}>
            <NavLink exact activeClassName={classes.selected} to="/">Avaleht</NavLink>
            <NavLink exact activeClassName={classes.selected} to="/login">Logi</NavLink>
            <NavLink exact activeClassName={classes.selected} to="/about">Meist</NavLink>
            <NavLink exact activeClassName={classes.selected} to="/search">Otsi</NavLink>
            <NavLink exact activeClassName={classes.selected} to="/register">Registreeri</NavLink>
            <NavLink exact activeClassName={classes.selected} to="/profile"> {selector.firstName && `| ${selector.firstName}`}</NavLink>
        </div>
    )
}



