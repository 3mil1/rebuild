import React from 'react';
import classes from './Post.module.css';
import emptyStar from '../../../img/Star_empty.svg'
import firmaPilt from '../../../img/EhitusFirmaPilt.jpg'


type PropsType = {
    id: string
    title: string
    content: string
    createdAt: string
    updatedAt: string
    categories: CategoriesType[]
}

export type CategoriesType = {
    id: number,
    name: string
}

export const Post = (props: PropsType) => {
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
                        {props.categories.map((categories: CategoriesType) =>
                            <div className={classes.hashtag} key={categories.name}>
                                #{categories.name}
                            </div>
                        )}

                    </div>
                </div>
                <div className={classes.addedChanged}>
                        <span>Lisatud
                            <p>{props.createdAt}</p>
                        </span>
                    <span>Muudetud
                            <p>{props.updatedAt}</p>
                        </span>
                </div>
            </div>
            <div className={classes.description}>
                <span>{props.title}</span>
                <div>
                    {props.content}
                </div>
            </div>
        </div>
    )
}
