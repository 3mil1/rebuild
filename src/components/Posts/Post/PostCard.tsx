import React from 'react';
import classes from './Post.module.css';
import {Rating} from "@material-ui/lab";
import {Post} from "./Post";
import {Avatar} from "@material-ui/core";
import moment from 'moment';


type PropsType = {
    id: string
    title: string
    content: string
    createdAt: string
    updatedAt: string
    categories: CategoriesType[]
    user: {
        id: number, firstName: string, lastName: string, description: string;
    }
}

export type CategoriesType = {
    id: number,
    name: string
}

export const PostCard = React.memo((props: PropsType) => {

    const date = (date: string) => {
        const dateObj = new Date(date)
        return moment(dateObj).format('DD-MM-YYYY')
    }


    return (
        <div className={classes.card}>
            <div className={classes.cardInfo}>
                <div className={classes.leftSideInfo}>
                    <div className={classes.userInfo}>
                        {/*<div className={classes.userImg}>*/}
                        {/*    <img src={firmaPilt} alt="firmaPilt"/>*/}
                        {/*</div>*/}
                        <Avatar className={classes.userImg} variant="rounded">
                            <h3>{props.user.firstName[0] + props.user.lastName[0]}</h3>
                        </Avatar>
                        <div className={classes.userName}>{props.user.firstName}</div>
                        <div className={classes.userRating}>
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5}/>
                        </div>
                        <div className={classes.userDesc}>
                            {props.user.description && props.user.description.substring(0, 100)+ "..."}
                        </div>
                    </div>
                </div>
                <div className={classes.addedChanged}>
                        <span>Lisatud
                            <p style={{marginTop: "5px"}}>{date(props.createdAt)}</p>
                        </span>
                    <span>Muudetud
                            <p style={{marginTop: "5px"}}>{date(props.updatedAt)}</p>
                        </span>
                </div>
            </div>
            <Post categories={props.categories} id={props.id} title={props.title} content={props.content}/>
        </div>
    )
})


