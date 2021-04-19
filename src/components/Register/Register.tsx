import React, {useRef, useState} from 'react';
import classes from './Register.module.css';
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {Controller, useForm} from "react-hook-form";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import {useDispatch, useSelector} from "react-redux";
import {register} from "./register-reducer";
import {Redirect} from "react-router-dom";
import {RegConfirm} from "./RegConfirm";

export const Register = React.memo(function () {

    const {register: regHookF, handleSubmit, errors: fieldsErrors, control, watch} = useForm({mode: 'onTouched'});
    const dispatch = useDispatch()
    const selector = useSelector((state: any) => state)
    const password = useRef({});
    password.current = watch("password", "");

    const [terms, setTermsErr] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const termsOfService = watch('terms');

    const onSubmit = (formData: { email: string, firstName: string, lastName: string, password: string }) => {
        termsOfService === false ? setTermsErr(true) : dispatch(register(formData.email, formData.firstName, formData.lastName, formData.password))
    };

    // if (selector.app.status === 'confirm') {
    //     setConfirm(true)
    // }

    if (selector.auth.isAuth) {
        return <Redirect to={"/profile"}/>
    }


    return (
        <Container component="main" maxWidth="xs">
            <RegConfirm open={confirm}/>
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
                                        helperText={fieldsErrors.firstName ? fieldsErrors.firstName.message : ''}
                                        variant="outlined"
                                        label="firstName"
                                        error={!!fieldsErrors.firstName}
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
                                        helperText={fieldsErrors.lastName ? fieldsErrors.lastName.message : ''}
                                        variant="outlined"
                                        label="Last Name"
                                        error={!!fieldsErrors.lastName}
                                        autoComplete="Last Name"
                                        name="lastName"
                                        fullWidth
                                    />
                                }
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: 'Required',
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
                                        autoComplete="new-password"
                                    />
                                }
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: 'Required',
                                    pattern: {
                                        value: /^.{4,100}$/i,
                                        message: 'Password must have between 4 & 100 characters'
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="confirmPassword"
                                as={
                                    <TextField
                                        id="confirmPassword"
                                        margin="normal"
                                        fullWidth
                                        type={'password'}
                                        helperText={fieldsErrors.confirmPassword ? fieldsErrors.confirmPassword.message : ''}
                                        variant="outlined"
                                        label="Korda Parool"
                                        name="confirmPassword"
                                        error={!!fieldsErrors.confirmPassword}
                                        autoComplete="new-password"
                                    />
                                }
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: 'Required',
                                    pattern: {
                                        value: /^.{4,100}$/i,
                                        message: 'Password must have between 4 & 100 characters'
                                    },
                                    validate: value => value === password.current || "The passwords do not match"
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <div className={terms ? classes.checkBoxErr : ''}>
                                <input type="checkbox" name='terms' id='terms' ref={regHookF}/>
                                <label htmlFor="TermsOfService">TermsOfService</label>
                            </div>
                            {terms && <div className={classes.checkBoxTextErr}>Required</div>}
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
})
