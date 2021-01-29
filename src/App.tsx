import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {Login} from "./components/Login/Login";
import {Profile} from "./components/Profile/Profile";
import {Register} from "./components/Register/Register";
import {Search} from "./components/Search/Search";

function App() {
    return (
        <div className="main-wrapper">
            <div className="empty-top"></div>
            <div className="empty-side2"></div>
            <div className="empty-side1"></div>
            <div className="Header">
                <Header />
            </div>
            <div className="main-wrapper-content">
                <Login />
                {/*<Main />
                <Profile />
                <Register />
                <Search /> */}
            </div>
            <div className="Footer">
                <Footer />
            </div>
        </div>
    );
}

export default App;
