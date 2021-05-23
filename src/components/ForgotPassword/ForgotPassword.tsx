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
import {setStatus} from "../../app/app-reducer";


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
        setOpen(false);
    }

    return (
        <div>
            <Link href="#" variant="body2" onClick={handleClickOpen}>
                Unustasid salasõna?
            </Link>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Parooli Taastamine</DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogContent>
                        <DialogContentText>
                        Palun sisesta oma registreeritud e-posti aadress. Saadame Sulle e-postile uue parooli!
                        </DialogContentText>
                        <Controller
                            name="email"
                            as={
                                <TextField
                                    helperText={fieldsErrors.email ? fieldsErrors.email.message : ''}
                                    label="E-post"
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
