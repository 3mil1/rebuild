import React from 'react';
import classes from './Main.module.css';
import kusOnOtsing from '../../img/kusOnOtsing.png';
import cardguy1 from '../../img/cardguy1.png';
import cardguy2 from '../../img/cardguy2.png';
import cardguy3 from '../../img/cardguy3.png';
import {Button, TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

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
                    <TextField className={classes.search} id="standard-basic" label="Otsi Siit" />
                </div>
                {/*<div className={classes.searchContainer}>
                     <div className={classes.search}>
                        <TextField id="standard-basic" label="Otsi Siit" />
                    </div>
                </div>*/}
            </div>

            <div className={classes.cardsContainer}>
                <div className={classes.card}>
                    <div className={classes.cardImg}>
                        <img src={cardguy1} alt="card1"/>
                        {/*<img className={classes.cardDoor} src={carddoor} alt="carddoor"/>*/}
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
                        <img src={cardguy2} alt="card2"/>
                    </div>
                </div>

                <div className={classes.card}>
                    <div className={classes.cardImg}>
                        <img src={cardguy3} alt="card3"/>
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