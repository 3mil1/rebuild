import React from 'react';
import classes from './Search.module.css';
import emptyStar from '../../img/Star_empty.svg'

export const Search = () => {
    return (
        <>
            <div className={classes.search}>

                <div className={classes.filter}>
                    <div className={classes.filterPadding}>
                        <span>Filter</span>
                        <div className={classes.checkboxes}>
                            <div className={classes.checkbox}>
                                <input type="checkbox" name="" id=""/>
                                <span>Esimene</span>
                            </div>
                            <div className={classes.checkbox}>
                                <input type="checkbox" name="" id=""/>
                                <span>Esimene</span>
                            </div>
                            <div className={classes.checkbox}>
                                <input type="checkbox" name="" id=""/>
                                <span>Esimene</span>
                            </div>
                            <div className={classes.checkbox}>
                                <input type="checkbox" name="" id=""/>
                                <span>Esimene</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={classes.results}>
                    <div className={classes.resultsWrapper}>
                        <ResultCard/>
                        <ResultCard/>
                        <ResultCard/>
                        <ResultCard/>
                    </div>
                </div>

            </div>
        </>
    )
}


export const ResultCard = () => {
    return (
        <div className={classes.card}>
            <div className={classes.cardInfo}>
                <div className={classes.leftSideInfo}>
                    <div className={classes.userInfo}>
                        <div className={classes.userImg}></div>
                        <div className={classes.userName}>Firma | Nimi</div>
                        <div className={classes.userRating}>
                            <img src={emptyStar} alt="emptyStar"/>
                            <img src={emptyStar} alt="emptyStar"/>
                            <img src={emptyStar} alt="emptyStar"/>
                            <img src={emptyStar} alt="emptyStar"/>
                            <img src={emptyStar} alt="emptyStar"/>
                        </div>
                        <div className={classes.userDesc}>Desc</div>
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
                <div>2</div>
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
