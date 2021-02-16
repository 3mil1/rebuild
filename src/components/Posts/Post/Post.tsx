import React from 'react';
import classes from '../Posts.module.css';
import emptyStar from '../../../img/Star_empty.svg'
import firmaPilt from '../../../img/EhitusFirmaPilt.jpg'


export const Post = () => {
    return (
        <div className={classes.card}>
            <div className={classes.cardInfo}>
                <div className={classes.leftSideInfo}>
                    <div className={classes.userInfo}>
                        <div className={classes.userImg}>
                            <img src={firmaPilt} alt="firmaPilt"/>
                        </div>
                        <div className={classes.userName}>EESTI EHITUSE JA KINNISVARA GRUPP</div>
                        <div className={classes.userRating}>
                            <img src={emptyStar} alt="emptyStar"/>
                            <img src={emptyStar} alt="emptyStar"/>
                            <img src={emptyStar} alt="emptyStar"/>
                            <img src={emptyStar} alt="emptyStar"/>
                            <img src={emptyStar} alt="emptyStar"/>
                        </div>
                        <div className={classes.userDesc}>Profiili kirjeldus lorem lorem lorem lorem</div>
                    </div>
                    <div className={classes.hashtags}>
                        <div className={classes.hashtag}>
                            #1234
                        </div>
                        <div className={classes.hashtag}>
                            #1234
                        </div>
                        <div className={classes.hashtag}>
                            #1234
                        </div>
                    </div>
                </div>
                <div className={classes.addedChanged}>
                        <span>Lisatud
                            <p>15.10.2010</p>
                        </span>
                    <span>Muudetud
                            <p>15.10.2010</p>
                        </span>
                </div>
            </div>
            <div className={classes.description}>
                <span>Title</span>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus autem commodi consequatur
                    quaerat quia similique sint. Ipsam, quaerat temporibus.
                    Adipisci animi aperiam.
                </div>
            </div>
        </div>
    )
}