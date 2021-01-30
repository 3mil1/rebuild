import React from 'react';
import classes from './Header.module.css';
import logo from '../../img/RebuildLogo.png'

export const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <img className={classes.logo} src={logo} alt="logo"/>

                <Nav/>
            </header>
        </>
    )
}

export const Nav = () => {
    return (
        <div className={classes.nav}>
            <a href="#">Avaleht</a>
            <a href="#">Registreeru</a>
            <a href="#">Meist</a>
            <a href="#">Lisa</a>
            <a href="#">Otsi</a>
        </div>
    )
}


