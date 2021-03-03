import React from 'react';
import classes from './Footer.module.css'
import {Nav} from "../Header/Header";
import instagramSvg from '../../img/Instagram.svg'


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
                    <a href=""><img src={instagramSvg} alt="instagramSvg"/></a>
                    <a href=""><img src={instagramSvg} alt="instagramSvg"/></a>
                    <a href=""><img src={instagramSvg} alt="instagramSvg"/></a>
                    <a href=""><img src={instagramSvg} alt="instagramSvg"/></a>
                </div>
            </div>
        </div>
    )
}
