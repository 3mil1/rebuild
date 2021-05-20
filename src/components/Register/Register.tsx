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
import {Redirect, Link as LinkRRD} from "react-router-dom";
import {TermOfService} from "./TermOFService";

export const Register = React.memo(function () {

    const {register: regHookF, handleSubmit, errors: fieldsErrors, control, watch} = useForm();
    const dispatch = useDispatch()
    const selector = useSelector((state: any) => state)
    const password = useRef({});
    const [open, setOpen] = useState(false);
    password.current = watch("password", "");

    const [terms, setTermsErr] = useState(false)
    const termsOfService = watch('terms');

    const onSubmit = (formData: { email: string, firstName: string, lastName: string, password: string }) => {
        termsOfService === false ? setTermsErr(true) : dispatch(register(formData.email, formData.firstName, formData.lastName, formData.password))
    };

    if (selector.auth.isAuth) {
        return <Redirect to={"/profile"}/>
    }


    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <div className={classes.centerFlex}>
                    <Avatar className={classes.avatar}>
                        <PeopleAltIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                </div>
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
                                        message: 'Parool peab sisaldama 4 kuni 100 tähemärki'
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
                                        message: 'Parool peab sisaldama 4 kuni 100 tähemärki'
                                    },
                                    validate: value => value === password.current || "Paroolid ei kattu"
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} style={{padding: "8px"}}>
                            <div className={terms ? classes.checkBoxErr : ''} style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "start"
                            }}>

                                <input type="checkbox" name='terms' id='terms' ref={regHookF}/>
                                <Button style={{marginLeft: '0.5rem'}} onClick={() => setOpen(!open)} color="primary">Terms
                                    Of Service</Button>
                                {
                                    open && <TermOfService/>
                                }
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
                                <Link variant="body2">
                                    <LinkRRD to="/login">Already have an account? Sign in</LinkRRD>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
})
