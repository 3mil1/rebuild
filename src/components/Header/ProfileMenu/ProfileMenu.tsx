import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {logout} from "../../../redux/auth-reducer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        paper: {
            marginRight: theme.spacing(2),
        },
    }),
);

export const ProfileMenu = React.memo(function () {
    const dispatch = useDispatch()
    const selector = useSelector((state: any) => state.auth)


    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    const history = useHistory();
    let location = useLocation();


    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: React.MouseEvent<EventTarget>) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current && !open) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);




    return (
        <div className={classes.root}>
            <div>
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    {selector.firstName}
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal
                        style={{zIndex: 1}}>
                    {({TransitionProps, placement}) => (
                        <Grow
                            {...TransitionProps}
                            style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClick={handleClose}>
                                            <NavLink
                                                to="/profile">Profiil
                                            </NavLink>
                                        </MenuItem>

                                        <MenuItem onClick={handleClose}>
                                            {selector.isAuth &&
                                            <NavLink to={''} onClick={() => dispatch(logout())}>Logi välja</NavLink>
                                            }
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </div>
    );
})
