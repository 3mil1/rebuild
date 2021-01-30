import React from 'react';
import classes from './Main.module.css';
import kusOnOtsing from '../../img/kusOnOtsing.png'

export const Main = () => {
    return (
        <div className={classes.main}>
            <div>
                <div className={classes.meiegaLeiad}>Meiega Leiad</div>
                <h6>We’ve helped over 2,500 job seekers to get into the most popular tech teams.</h6>
                <button>Registreeru</button>
            </div>
            <div>
                <img src={kusOnOtsing} alt="kusOnOtsing"/>
            </div>
            <div className={classes.search}>
                search
            </div>
        </div>
    )
}