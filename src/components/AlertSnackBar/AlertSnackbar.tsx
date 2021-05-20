import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {setAlert, Severity} from "../../app/app-reducer";

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export function AlertSnackbar() {
    const alert = useSelector<AppRootStateType, string | null>(state => state.app.alert)
    const severity = useSelector<AppRootStateType, Severity>(state => state.app.severity)
    const dispatch = useDispatch()

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return dispatch(setAlert(null, severity))
        }
        return dispatch(setAlert(null, severity))
    };

    const isOpen = alert !== null

    return (
        <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
                {alert}
            </Alert>
        </Snackbar>
    );
}
