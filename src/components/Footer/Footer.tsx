import React from 'react';
import classes from './Footer.module.css'
import {Nav} from "../Header/Header";
import GitHubIcon from '@material-ui/icons/GitHub';


export const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footerNav}>
                <Nav/>
            </div>

            <div className={classes.divider}></div>

            <div className={classes.socialLinks}>
                <div>© 2021 ReBuild. All rights reserved</div>
                <div>
                    <a href="https://github.com/3mil1/rebuild/"><GitHubIcon/></a>
                </div>
            </div>
        </div>
    )
}
