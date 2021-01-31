import React from 'react';
import classes from './Main.module.css';
import kusOnOtsing from '../../img/kusOnOtsing.png'

export const Main = () => {
    return (
        <>
            <div className={classes.main}>
                <div>
                    <div className={classes.meiegaLeiad}>Meiega Leiad</div>
                    <div className={classes.subHeader}>We’ve helped over 2,500 job seekers to get into the most popular
                        tech teams.
                    </div>
                    <button className={classes.register}>Registreeru</button>
                    <span>Kuidas see töötab</span>
                </div>
                <div>
                    <img src={kusOnOtsing} alt="kusOnOtsing"/>
                </div>
                <div className={classes.search}>
                    <input type="text"/>
                </div>
            </div>

            <div className={classes.cards}>
                <div className={classes.card}>1</div>
                <div className={classes.card}>2</div>
                <div className={classes.card}>3</div>
            </div>
        </>
    )
}