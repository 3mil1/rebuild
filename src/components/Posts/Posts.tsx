import classes from "./Posts.module.css";
import React from "react";
import {Post} from "./Post/Post";
import {AppRootStateType} from "../../redux/store";
import {useSelector} from "react-redux";

export const Posts = () => {
    const selector = useSelector<AppRootStateType, {}>(state => state.post)

    return (
        <>
            <div className={classes.search}>

                <div className={classes.filter}>
                    <div className={classes.filterPadding}>
                        <span>Filter</span>
                        <div className={classes.checkboxes}>
                            <div className={classes.checkbox}>
                                <input type="checkbox" name="" id=""/>
                                <span>Ehitus</span>
                            </div>
                            <div className={classes.checkbox}>
                                <input type="checkbox" name="" id=""/>
                                <span>Viimistlus</span>
                            </div>
                            <div className={classes.checkbox}>
                                <input type="checkbox" name="" id=""/>
                                <span>Lammutamine</span>
                            </div>
                            <div className={classes.checkbox}>
                                <input type="checkbox" name="" id=""/>
                                <span>Värvimine</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={classes.results}>
                    <div className={classes.resultsWrapper}>
                        <Post/>
                        <Post/>
                        <Post/>
                        <Post/>
                    </div>
                </div>

            </div>
        </>
    )
}