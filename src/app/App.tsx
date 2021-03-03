import React, {useEffect} from 'react';
import './App.css';
import {Header} from "../components/Header/Header";
import {Main} from "../components/Main/Main";
import {Footer} from "../components/Footer/Footer";
import {Profile} from "../components/Profile/Profile";
import {Register} from "../components/Register/Register";
import houses from '../img/houses.png'
import blobs from "../img/blobs.png"
import {Route, Switch, Redirect} from 'react-router-dom';
import {Login} from "../components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {getAuthUserData} from "../redux/auth-reducer";
import {Border, ProgressBar} from "../components/ProgressBar/ProgressBar";
import {ErrorSnackbar} from "../components/ErrorSnackbar/ErrorSnackbar";
import {AppRootStateType} from "../redux/store";
import {RequestStatusType} from "./app-reducer";
import {Posts} from "../components/Posts/Posts";
import {FooterNav} from '../components/FooterNav/FooterNav';
import {FormStepper} from "../components/Posts/AddPost/Stepper/FormStepper";

function App() {

    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAuthUserData())
    }, []);


    return (
        <>
            <ErrorSnackbar/>
            <div className='background'>
                <img className={'blobs'} src={blobs} alt="blobs"/>
                <img className={'houses'} src={houses} alt="houses"/>

                <div className='container'>
                    <div className="main-wrapper">
                        <Border/>
                        {status === 'loading' && <ProgressBar/>}
                        <Header/>
                        <div className="main-wrapper-content">
                            <Switch>
                                <Route exact path="/"> <Main/> </Route>
                                <Route path="/login"><Login/></Route>
                                <Route path="/profile"> <Profile/> </Route>
                                <Route path="/register"> <Register/> </Route>
                                <Route path="/posts"> <Posts/> </Route>
                                <Route path="/add"> <FormStepper/>  </Route>
                                <Redirect to={'/'}/>
                            </Switch>
                        </div>
                        <FooterNav/>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
