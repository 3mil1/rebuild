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
                    <div className={classes.meiegaLeiad}>Meiega Leiad</div>
                    <div className={classes.subHeader}>We’ve helped over 2,500 job seekers to get into the most popular
                        tech teams.
                    </div>

                    <Link to={"/register"} style={{color: "white", textDecoration: "none"}}>
                        <Button variant="contained" className={classes.register}>
                            Registreeru
                        </Button>
                    </Link>

                    <Button className={classes.howTo} onClick={executeScroll}>Kuidas see töötab &gt;</Button>
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
                        <h1>Hello world</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>

                <div className={classes.card}>
                    <div className={classes.cardText}>
                        <h1>Hello world</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s</p>
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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>

            </div>
        </div>
    )
})
