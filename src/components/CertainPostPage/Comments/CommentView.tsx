import React from 'react';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {Controller, useForm} from "react-hook-form";
import {TextField} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import {useDispatch} from "react-redux";
import {SendComment} from "./CommentView-reducer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: '36ch',
            backgroundColor: theme.palette.background.paper,
        },
        inline: {
            display: 'inline',
        },
    }),
);

export const CommentView = React.memo(function (props: any) {
    const dispatch = useDispatch()
    const {handleSubmit, errors: fieldsErrors, control, formState: {errors}, reset} = useForm();
    const classes = useStyles();

    const onSubmit = (formData: { message: string }) => {
        dispatch(SendComment(props.postId, 5, formData.message))
        reset({})
    };

    return (
        <>
            {props.comments.map((comment: { id: number, review_text: string, user: { id: number, firstName: string, lastName: string } }) => {
                return (
                    <List className={classes.root} key={comment.id}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar>
                                    <h4>{comment.user.firstName[0] + comment.user.lastName[0]}</h4>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={comment.user.firstName + " " + comment.user.lastName}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                        </Typography>
                                        {comment.review_text}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li"/>
                    </List>
                )
            })}
            <div style={{margin: 8}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="message"
                        as={
                            <TextField
                                id="message"
                                helperText={fieldsErrors.message ? fieldsErrors.message.message : ''}
                                label=""
                                error={!!fieldsErrors.message}
                                name="message"
                                multiline={true}
                                fullWidth
                                margin="normal"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                edge="end"
                                                type={'submit'}
                                            >
                                                {<Tooltip title="Komenteeri">
                                                    <SendIcon/>
                                                </Tooltip>}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        }
                        control={control}
                        defaultValue=''
                        rules={{
                            required: 'Sōnum on tühi'
                        }}
                    />
                </form>
            </div>
        </>
    );
})
