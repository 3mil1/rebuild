import React, {useRef} from 'react';
import classes from './Main.module.css';
import kustLeidaToomest from '../../img/heroPilt.png';
import cardguy1 from '../../img/cardguy1.png';
import cardguy2 from '../../img/cardguy2.png';
import cardguy3 from '../../img/cardguy3.png';
import {Button, TextField} from "@material-ui/core";
import {Link} from "react-router-dom";

export const Main = React.memo(function () {

    const myRef = useRef(null)
    // @ts-ignore
    const executeScroll = () => myRef.current.scrollIntoView({behavior: 'smooth'})

    return (
        <div className={classes.landingContainer}>
            <div className={classes.mainContainer}>
                <div className={classes.main}>
                    <div className={classes.meiegaLeiad}>Meiega leiad!</div>
                    <div className={classes.subHeader}>Läbi meie veebiplatvormi leiad endale vajaliku töömehe või töö!
                    </div>

                    <Link to={"/register"} style={{color: "white", textDecoration: "none"}}>
                        <Button variant="contained" className={classes.register}>
                            Registreeri
                        </Button>
                    </Link>

                    <Button className={classes.howTo} onClick={executeScroll}>Kuidas see töötab ?</Button>
                </div>
                <div className={classes.mainImg}>
                    <img src={kustLeidaToomest} alt="kust leida töömeest?"/>
                    {/*<TextField className={classes.search} id="standard-basic" label="Otsi Siit"/>*/}
                </div>
                {/*<div className={classes.searchContainer}>
                     <div className={classes.search}>
                        <TextField id="standard-basic" label="Otsi Siit" />
                    </div>
                </div>*/}
            </div>

            <div className={classes.cardsContainer}  ref={myRef}>
                <div className={classes.card}>
                    <div className={classes.cardImg}>
                        <img src={cardguy1} alt="card1"/>
                        {/*<img className={classes.cardDoor} src={carddoor} alt="carddoor"/>*/}
                    </div>
                    <div className={classes.cardText}>
                        <h1>Lisa kuulutus</h1>
                        <br/>
                        <p><b>Otsid või pakud tööd?</b> Kuulutuse lisamiseks pane sellele tabav pealkiri, anna tööst lühiülevaade ja too välja tööga seonduvad olulised punktid.
                            Vali enda kuulutusele sobiv teemaviide ja postita see leheküljele!
                        </p>
                    </div>
                </div>

                <div className={classes.card}>
                    <div className={classes.cardText}>
                        <h1>Otsi kuulutsi</h1>
                        <p><b>Soovid näha teiste kasutajate poolt lisatud kuulutusi? </b>
                           Leheküljelt "Otsi" näed kõiki lisatud kuulutusi. Kuulutuste filtreerimiseks kasuta teemaviiteid.</p>
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
                        <h1>Võta kasutajatega ühendust</h1>
                        <p><b>Leidsid endale huvipakkuva kuulutuse?</b> Võta teiste kasutajatega ühendust, klikkides kuulutuse pealkirjale. Avanenud lehel
                        saad kuulutuse omanikuga otse ühendust võtta.
                        <br/>

                            <br/>

                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
})
