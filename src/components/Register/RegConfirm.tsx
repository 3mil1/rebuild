import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {setStatus} from "../../app/app-reducer";
import {useHistory} from "react-router-dom";

export const RegConfirm = React.memo(function (props: any) {
    const dispatch = useDispatch()
    const confirmEmail = useSelector<AppRootStateType, string | null>(state => state.app.status)
    const history = useHistory();


    const handleClose = () => {
        dispatch(setStatus(null))
        history.push("/login");
    };

    const isOpen = confirmEmail === "confirm"


    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Mine postkasti"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                       Ja vajuta lingile.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Noice
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
})
