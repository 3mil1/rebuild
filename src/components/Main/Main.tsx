import React from 'react';
import classes from './Main.module.css';
import kusOnOtsing from '../../img/kusOnOtsing.png';
import card1 from '../../img/card1.png';
import card2 from '../../img/card2.png';
import card3 from '../../img/card3.png';
import {Button, TextField} from "@material-ui/core";

export const Main = () => {
    return (
        <>
            <div className={classes.main}>
                <div>
                    <div className={classes.meiegaLeiad}>Meiega Leiad</div>
                    <div className={classes.subHeader}>We’ve helped over 2,500 job seekers to get into the most popular
                        tech teams.
                    </div>
                    <Button variant="contained"  className={classes.register}>
                        Registreeru
                    </Button>
                    {/*<button className={classes.register}>Registreeru</button>*/}
                    <Button>Kuidas see töötab &gt;</Button>
                    {/*<span>Kuidas see töötab</span>*/}
                </div>
                <div className={classes.searchImg}>
                    <img src={kusOnOtsing} alt="kusOnOtsing"/>
                </div>
                <div className={classes.search}>
                    <TextField id="standard-basic" label="Otsi Siit" />
                </div>
            </div>

            <div className={classes.cards}>
                <div className={classes.card}>
                    <div className={classes.cardChild}>
                        <img src={card1} alt="card1"/>
                    </div>
                    <div className={classes.cardChild}>
                        <h1>Hello world</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>

                <div className={classes.card}>
                    <div className={classes.cardChild}>
                        <h1>Hello world</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className={classes.cardChild}>
                        <img src={card2} alt="card2"/>
                    </div>
                </div>

                <div className={classes.card}>
                    <div className={classes.cardChild}>
                        <img src={card3} alt="card3"/>
                    </div>
                    <div className={classes.cardChild}>
                        <h1>Hello world</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>

            </div>
        </>
    )
}