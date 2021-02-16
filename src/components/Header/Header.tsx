import React from 'react';
import classes from './Header.module.css';
import logo from '../../img/RebuildLogo.png'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {LinearProgress} from "@material-ui/core";


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

    const dispatch = useDispatch()
    const selector = useSelector((state: any) => state.auth)

    return (
        <div className={classes.nav}>
            <NavLink exact activeClassName={classes.selected} to="/">Avaleht</NavLink>

            {/*ei ole tehtud meist sp ei ava pathi kaudu*/}
            <NavLink activeClassName={classes.selected} to="/about">Meist</NavLink>
            <NavLink activeClassName={classes.selected} to="/search">Otsi</NavLink>
            {selector.isAuth ? false : <NavLink activeClassName={classes.selected} to="/register">Registreeri</NavLink>}
            {selector.isAuth
                ? <NavLink activeClassName={classes.selected} to="/profile"> {`| ${selector.firstName}`}</NavLink>
                : <NavLink  activeClassName={classes.selected} to="/login">Log in</NavLink>}
            {selector.isAuth && <div onClick={() => dispatch(logout())}>LogOut</div>}
        </div>
    )
}



