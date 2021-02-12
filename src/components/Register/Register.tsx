import React, {useState} from 'react';
import classes from './Register.module.css';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import {Controller, useForm} from "react-hook-form";
import {TextField} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export const Register = () => {

    const {handleSubmit, errors: fieldsErrors, control, setError} = useForm();


    const onSubmit = (formData: { email: string, password: string }) => {
    };


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <PeopleAltIcon className={classes.icon}/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="firstName"
                                as={
                                    <TextField
                                        margin="normal"
                                        id="firstName"
                                        helperText={fieldsErrors.email ? fieldsErrors.email.message : ''}
                                        variant="outlined"
                                        label="firstName"
                                        error={!!fieldsErrors.email}
                                        autoComplete="First Name"
                                        name="firstName"
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
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="lastName"
                                as={
                                    <TextField
                                        margin="normal"
                                        id="lastName"
                                        helperText={fieldsErrors.email ? fieldsErrors.email.message : ''}
                                        variant="outlined"
                                        label="Last Name"
                                        error={!!fieldsErrors.email}
                                        autoComplete="Last Name"
                                        name="lastName"
                                        fullWidth
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
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="email"
                                as={
                                    <TextField
                                        margin="normal"
                                        id="email"
                                        helperText={fieldsErrors.email ? fieldsErrors.email.message : ''}
                                        variant="outlined"
                                        label="Email"
                                        error={!!fieldsErrors.email}
                                        autoComplete="email"
                                        name="email"
                                        fullWidth
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
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="password"
                                as={
                                    <TextField
                                        id="password"
                                        margin="normal"
                                        fullWidth
                                        type={'password'}
                                        helperText={fieldsErrors.password ? fieldsErrors.password.message : ''}
                                        variant="outlined"
                                        label="Password"
                                        name="password"
                                        error={!!fieldsErrors.password}
                                        autoComplete="current-password"
                                    />
                                }
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: 'Required'
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="repeatPassword"
                                as={
                                    <TextField
                                        id="repeatPassword"
                                        margin="normal"
                                        fullWidth
                                        type={'password'}
                                        helperText={fieldsErrors.password ? fieldsErrors.password.message : ''}
                                        variant="outlined"
                                        label="Korda Parool"
                                        name="repeatPassword"
                                        error={!!fieldsErrors.password}
                                    />
                                }
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: 'Required'
                                }}
                            />
                        </Grid>
                        {/*<Snackbar open={selector.auth.error} autoHideDuration={6000}  >*/}
                        {/*    <Alert severity="error"> Email or password is incorrect</Alert>*/}
                        {/*</Snackbar>*/}
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Registreeri
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}
