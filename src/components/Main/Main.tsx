import React from 'react';
import classes from './Main.module.css';
import kusOnOtsing from '../../img/kusOnOtsing.png';
import card1 from '../../img/card1.png';
import card2 from '../../img/card2.png';
import card3 from '../../img/card3.png';
import {Button, TextField} from "@material-ui/core";

export const Main =React.memo(function () {
    return (
        <div className={classes.landingContainer}>
            <div className={classes.mainContainer}>
                <div className={classes.main}>
                    <div className={classes.meiegaLeiad}>Meiega Leiad</div>
                    <div className={classes.subHeader}>We’ve helped over 2,500 job seekers to get into the most popular
                        tech teams.
                    </div>
                    <Button variant="contained"  className={classes.register}>
                        Registreeru
                    </Button>

                    <Button className={classes.howTo}>Kuidas see töötab &gt;</Button>
                    {/*<span>Kuidas see töötab</span>*/}
                </div>
                <div className={classes.mainImg}>
                    <img src={kusOnOtsing} alt="kusOnOtsing"/>
                </div>
                {/* <div className={classes.search}>
                    <TextField id="standard-basic" label="Otsi Siit" />
                </div>*/}
            </div>

            <div className={classes.cardsContainer}>
                <div className={classes.card}>
                    <div className={classes.cardImg}>
                        <img src={card1} alt="card1"/>
                    </div>
                    <div className={classes.cardText}>
                        <h1>Hello world</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>

                <div className={classes.card}>
                    <div className={classes.cardText}>
                        <h1>Hello world</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className={classes.cardImg}>
                        <img src={card2} alt="card2"/>
                    </div>
                </div>

                <div className={classes.card}>
                    <div className={classes.cardImg}>
                        <img src={card3} alt="card3"/>
                    </div>
                    <div className={classes.cardText}>
                        <h1>Hello world</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>

            </div>
        </div>
    )
})