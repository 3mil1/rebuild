import React from 'react';
import classes from './Post.module.css';
import firmaPilt from '../../../img/EhitusFirmaPilt.jpg'
import {Rating} from "@material-ui/lab";
import {NavLink} from "react-router-dom";


type PropsType = {
    id: string
    title: string
    content: string
    createdAt: string
    updatedAt: string
    categories: CategoriesType[]
    user: {id: number, firstName: string, lastName: string}
}

export type CategoriesType = {
    id: number,
    name: string
}


export const PostCard = React.memo ((props: PropsType) => {
    return (
        <div className={classes.card}>
            <div className={classes.cardInfo}>
                <div className={classes.leftSideInfo}>
                    <div className={classes.userInfo}>
                        <div className={classes.userImg}>
                            <img src={firmaPilt} alt="firmaPilt"/>
                        </div>
                        <div className={classes.userName}>{props.user.firstName}</div>
                        <div className={classes.userRating}>
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5}/>
                        </div>
                        <div className={classes.userDesc}>Profiili kirjeldus lorem lorem lorem lorem</div>
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
            <Post categories={props.categories} id={props.id} title={props.title} content={props.content}/>
        </div>
    )
})

export const Post = (props: any) => {
    return (
        <>
            <div className={classes.hashtags}>
                {props.categories.map((categories: CategoriesType) =>
                    <div className={classes.hashtag} key={categories.name}>
                        #{categories.name}
                    </div>
                )}
            </div>
            <div className={classes.description}>
                <NavLink to={'/post/' + props.id}>{props.title}</NavLink>
                <div>
                    {props.content}
                </div>
            </div>
        </>
    )
}
