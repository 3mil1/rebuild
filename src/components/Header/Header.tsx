import React from 'react';
import classes from './Header.module.css';
import logo from '../../img/RebuildLogo.png'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {ProfileMenuMobile} from './ProfileMenu/ProfileMenuMobile';
import {ProfileMenuMobileNotAuth} from './ProfileMenu/ProfileMenuMobile';
import {ProfileMenu} from './ProfileMenu/ProfileMenu';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';


export const Header = React.memo(function () {


    return (
        <>
            <header className={classes.header}>
                <div>
                   <NavLink to="/"><img className={classes.logo} src={logo} alt="logo"/></NavLink>
                </div>
                <Nav/>
            </header>
        </>
    )
})

export const Nav = React.memo(function () {

    const isAuth = useSelector((state: any) => state.auth.isAuth)

    return (
        <div className={classes.nav}>
            <NavLink exact activeClassName={classes.selected} to="/">Avaleht</NavLink>

            {/*ei ole tehtud meist sp ei ava pathi kaudu*/}
            <NavLink activeClassName={classes.selected} to="/about">Meist</NavLink>
            {isAuth ? <NavLink activeClassName={classes.selected} to="/posts">Otsi</NavLink> : false}
            {isAuth ? <NavLink activeClassName={classes.selected} to="/add">Lisa Kuulutus</NavLink> : false}
            {isAuth ? false : <NavLink activeClassName={classes.selected} to="/register">Registreeri</NavLink>}
            {isAuth
                ? <ProfileMenu/>
                : <NavLink activeClassName={classes.selected} to="/login">Log in</NavLink>}
        </div>
    )
})

export const BottomNav = React.memo(function () {

    const selector = useSelector((state: any) => state.auth)

    return (
        <div className={classes.bottomNav}>
            <div className={classes.bottomItems}>
                <div className={classes.bottomItem}>
                    <NavLink exact activeClassName={classes.selected} to="/"><HomeIcon/></NavLink>
                </div>
                <div className={classes.bottomItem}>
                    <NavLink activeClassName={classes.selected} to="/posts"><SearchIcon/></NavLink>
                </div>
                <div className={classes.bottomItem}>
                    {selector.isAuth
                        ? <ProfileMenuMobile />
                        : <ProfileMenuMobileNotAuth />}
                </div>
            </div>
        </div>
    )
})





