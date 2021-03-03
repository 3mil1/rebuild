import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from "@material-ui/core/Link";
import {resetPw} from "./ForgotPassword-reducer";
import {useDispatch} from "react-redux";
import {Controller, useForm} from "react-hook-form";
import FormControl from "@material-ui/core/FormControl";
import classes from "../Login/Login.module.css";


export const ForgotPassword = React.memo(function () {
    const dispatch = useDispatch()

    const [open, setOpen] = React.useState(false);

    const {handleSubmit, errors: fieldsErrors, control} = useForm();


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (formData: { email: string }) => {
        dispatch(resetPw(formData.email))
    }

    return (
        <div>
            <Link href="#" variant="body2" onClick={handleClickOpen}>
                Forgot password?
            </Link>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Parooli Taastamine</DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogContent>
                        <DialogContentText>
                            Palun sisesta oma email ja me saadame sulle kirja parooli taastumisega.
                        </DialogContentText>
                        <Controller
                            name="email"
                            as={
                                <TextField
                                    helperText={fieldsErrors.email ? fieldsErrors.email.message : ''}
                                    label="Email"
                                    error={!!fieldsErrors.email}
                                    autoComplete="email"
                                    name="email"
                                    fullWidth
                                    autoFocus
                                />
                            }
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'invalid email address'
                                }
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Loobu
                        </Button>
                        <Button color="primary" type="submit">
                            Saada kiri
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
})