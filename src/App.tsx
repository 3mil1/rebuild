import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {Profile} from "./components/Profile/Profile";
import {Register} from "./components/Register/Register";
import {Search} from "./components/Search/Search";
import houses from './img/houses.png'
import blobs from "./img/blobs.png"
import {Route, Switch, Redirect} from 'react-router-dom';
import {Login} from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {initializeAppTC} from "./redux/app-reducer";

function App() {

    const isInitialized = useSelector((state: any) => state.app.isInitialized)
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getAuthUserData())
    },[]);


    return (
        <div className='background'>
            <img className={'blobs'} src={blobs} alt="blobs"/>
            <img className={'houses'} src={houses} alt="houses"/>


            <div className='container'>
                <div className="main-wrapper">
                    <Header/>
                    <div className="main-wrapper-content">
                        <Switch>
                            <Route exact path="/"> <Main/> </Route>
                            <Route path="/login"><Login/></Route>
                            <Route path="/profile"> <Profile/> </Route>
                            <Route path="/register"> <Register/> </Route>
                            <Route path="/search"> <Search/> </Route>
                            <Redirect to={'/'}/>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default App;
