import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {Login} from "./components/Login/Login";
import {Profile} from "./components/Profile/Profile";
import {Register} from "./components/Register/Register";
import {Search} from "./components/Search/Search";
import houses from './img/houses.png'
import blobs from "./img/blobs.png"
function App() {
    return (
        <div className='background'>
            <img className={'blobs'} src={blobs} alt="blobs"/>
            <img className={'houses'} src={houses} alt="houses"/>


            <div className='container'>
                <div className="main-wrapper">

                    <Header/>
                    <div className="main-wrapper-content">
                        {/*<Login />*/}
                        <Main />
                        {/*<Profile />*/}
                        {/*<Register />*/}
                        {/*<Search /> */}
                    </div>

                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default App;
