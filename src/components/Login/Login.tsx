import React from 'react';
import classes from './Login.module.css';

export const Login = () => {
    return (
        <>
            <div className={classes.login}>
                <div className={classes.loginText}>Log in</div>
                <div className={classes.registerContainer}>
                    <div className={classes.inputsContainer}>
                        <div><input type="text"/></div>
                        <div><input type="text"/></div>
                    </div>
                    <div>
                        <button>Log In</button>
                        <span>Forgot password?</span>
                    </div>
                </div>
            </div>
        </>
    )
}
