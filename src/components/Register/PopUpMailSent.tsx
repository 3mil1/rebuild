import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {useHistory} from "react-router-dom";
import {setStatus} from "../../app/app-reducer";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles({
    root: {
        background: '#43a047',
        color: 'white',
    }
});

export const PopUpMailSent = React.memo(function (props: any) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const confirmEmail = useSelector<AppRootStateType, string | null>(state => state.app.status)
    const history = useHistory();

    const [timer, setTimer] = useState(5);

    const handleClose = () => {
        dispatch(setStatus(null))
        history.push("/login");
    };

    let isOpen = confirmEmail === "confirm"

    if (isOpen) {
        setTimeout(() => {
            dispatch(setStatus(null))
            setTimer(5)
        }, 5000)
        setTimeout(() => {
            setTimer((timer - 1))
        }, 1000)
    }

    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle
                    classes={{
                        root: classes.root
                    }} id="alert-dialog-title">{"Kiri saadetud!"}</DialogTitle>
                <DialogContent
                    classes={{
                        root: classes.root
                    }}>
                    <DialogContentText id="alert-dialog-description"
                                       classes={{
                                           root: classes.root
                                       }}>
                        Teie e-posti aadressile on saadetud link registreerimise kinnitamiseks!
                    </DialogContentText>
                </DialogContent>
                <DialogActions
                    classes={{
                        root: classes.root
                    }}>
                    <Button onClick={handleClose} color="primary" autoFocus style={{color: 'white'}}>
                        ({timer})
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
})
