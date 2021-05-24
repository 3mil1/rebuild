import React, {useEffect, useRef, useState} from "react";
import {DialogContent, IconButton, TextField} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import Dialog from "@material-ui/core/Dialog";
import {Controller, useForm} from "react-hook-form";
import classes from "../../Posts/Post/Post.module.css";
import {useDispatch} from "react-redux";
import {EditDesc} from "./ProfileDescription-reducer";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {changePassword} from "../../ChangePassword/ChangePassword-reducer";


export const ProfileSettings = (props: any) => {
    const [open, setOpen] = useState(props.desc === "");

    const handleClickOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        if (props.desc === "" && !open) {
            debugger
            setOpen(true);
        }
    }, [props.desc, open])

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <IconButton type={'button'} onClick={handleClickOpen} form="submit-form">
                <SettingsIcon/>
            </IconButton>

            <Dialog
                scroll={'body'}
                open={open}
                onClose={handleClose}>
                <DialogContent style={{padding: "25px", width: "316px"}}>

                    <div className={classes.description}>
                        <h3 className={classes.settings}>
                            Profiili kirjeldus
                        </h3>
                        <ChangeDescription CloseModal={handleClose} defaultValue={props.desc} userId={props.userId}/>
                    </div>

                    <div className={classes.description}>
                        <h3 className={classes.settings}>
                            Parooli muutmine
                        </h3>
                        <ChangePassword CloseModal={handleClose}/>
                    </div>

                </DialogContent>
            </Dialog>
        </>
    );
};

export const ChangeDescription = (props: any) => {
    const {handleSubmit, errors: fieldsErrors, control, setValue} = useForm({mode: "onBlur"});
    const dispatch = useDispatch()

    const onSubmit = (formData: { description: string }) => {
        dispatch(EditDesc(props.userId, formData.description))
        props.CloseModal()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Controller
                    name="description"
                    as={
                        <TextField
                            id="description"
                            helperText={fieldsErrors.description ? fieldsErrors.description.message : ''}
                            variant="outlined"
                            label="Kirjelda ennast paari lausega"
                            error={!!fieldsErrors.description}
                            name="description"
                            autoFocus
                            multiline={true}
                            rows={5}
                            fullWidth={true}
                            onBlur={(e: any) => setValue("description", e.target.value.trim())}
                        />
                    }
                    control={control}
                    defaultValue={props.defaultValue && props.defaultValue}
                    rules={{
                        required: 'Kohustustlik',
                        // pattern: {
                        //     value: /^.{4,255}$/i,
                        //     message: 'Liiga pikk kirjeldus'
                        // },
                        minLength: {
                            value: 4,
                            message: "Liiga lühike kirjeldus"
                        },
                        maxLength: {
                            value: 255,
                            message: "Liiga pikk kirjeldus"
                        }

                    }}
                />
            </div>

            <DialogActions>
                <Button color="primary" type="submit">
                    Uuenda profiili
                </Button>
            </DialogActions>
        </form>
    )
}

export const ChangePassword = (props: any) => {

    const {handleSubmit, errors: fieldsErrors, control, watch} = useForm({});
    const dispatch = useDispatch()
    const newPassword = useRef({});
    newPassword.current = watch("newPassword", "");


    const onSubmit = (formData: { oldPassword: string, newPassword: string }) => {
        dispatch(changePassword(formData.oldPassword, formData.newPassword))
        props.CloseModal()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Controller
                    name="oldPassword"
                    as={
                        <TextField
                            id="oldPassword"
                            helperText={fieldsErrors.oldPassword ? fieldsErrors.oldPassword.message : ''}
                            variant="outlined"
                            label="Eksisteeriv parool"
                            error={!!fieldsErrors.oldPassword}
                            name="oldPassword"
                            size="small"
                            type={'password'}
                            fullWidth={true}
                        />
                    }
                    defaultValue=""
                    control={control}
                    rules={{
                        required: 'Kohustustlik'
                    }}
                />
                <div style={{marginTop: "1rem"}}>
                    <Controller
                        name="newPassword"
                        as={
                            <TextField
                                id="newPassword"
                                helperText={fieldsErrors.newPassword ? fieldsErrors.newPassword.message : ''}
                                variant="outlined"
                                label="Uus Parool"
                                error={!!fieldsErrors.newPassword}
                                name="newPassword"
                                size="small"
                                type={'password'}
                                fullWidth={true}

                            />
                        }
                        defaultValue=""
                        control={control}
                        rules={{
                            required: 'Kohustustlik',
                            pattern: {
                                value: /^.{4,100}$/i,
                                message: 'Parool peab sisaldama 4 kuni 100 tähemärki'
                            }
                        }}
                    />
                </div>
                <div style={{marginTop: "1rem"}}>
                    <Controller
                        name="repeatNewPassword"
                        as={
                            <TextField
                                id="repeatNewPassword"
                                helperText={fieldsErrors.repeatNewPassword ? fieldsErrors.repeatNewPassword.message : ''}
                                variant="outlined"
                                label="Korda Uus Parool"
                                error={!!fieldsErrors.repeatNewPassword}
                                name="repeatNewPassword"
                                size="small"
                                type={'password'}
                                fullWidth={true}

                            />
                        }
                        defaultValue=""
                        control={control}
                        rules={{
                            required: 'Kohustustlik',
                            pattern: {
                                value: /^.{4,100}$/i,
                                message: 'Parool peab sisaldama 4 kuni 100 tähemärki'
                            },
                            validate: value => value === newPassword.current || "Paroolid ei kattu"
                        }}
                    />
                </div>
            </div>

            <DialogActions>
                <Button color="primary" type="submit">
                    Uuenda Parool
                </Button>
            </DialogActions>
        </form>
    )
}
