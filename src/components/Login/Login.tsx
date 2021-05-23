import React, {useState} from 'react';
import classes from './Login.module.css';
import {Controller, useForm} from "react-hook-form";
import {TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {login} from "../../redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Redirect, Link as LinkRRD} from "react-router-dom";
import {ForgotPassword} from "../ForgotPassword/ForgotPassword";
import Link from "@material-ui/core/Link";


export const Login = React.memo(function () {

    const selector = useSelector((state: any) => state)
    const dispatch = useDispatch()
    const {handleSubmit, errors: fieldsErrors, control} = useForm();
    const [togglePassword, setTogglePassword] = useState(true);

    const onSubmit = (formData: { email: string, password: string }) => {
        dispatch(login(formData.email, formData.password))
    };

    if (selector.auth.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Logi sisse
                </Typography>

                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <FormControl fullWidth variant="outlined">
                        <Controller
                            name="email"
                            as={
                                <TextField
                                    margin="normal"
                                    id="email"
                                    helperText={fieldsErrors.email ? fieldsErrors.email.message : ''}
                                    variant="outlined"
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
                                required: 'Palun sisesta e-posti aadress',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Sobimatu e-posti aadress'
                                }
                            }}
                        />
                        <Controller
                            name="password"
                            as={
                                <TextField
                                    id="password"
                                    margin="normal"
                                    fullWidth
                                    type={togglePassword ? 'password' : 'text'}
                                    helperText={fieldsErrors.password ? fieldsErrors.password.message : ''}
                                    variant="outlined"
                                    label="Salasõna"
                                    name="password"
                                    error={!!fieldsErrors.password}
                                    autoComplete="current-password"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setTogglePassword(!togglePassword)}
                                                    edge="end"
                                                >
                                                    {togglePassword ? <Visibility/> : <VisibilityOff/>}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            }
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Palun sisesta salasõna'
                            }}
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Logi sisse
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <ForgotPassword/>
                        </Grid>
                        <Grid item>
                            <Link variant="body2">
                                <LinkRRD to="/register">Pole veel kasutaja? Registreeri siin!</LinkRRD>
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
})


