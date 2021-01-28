import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className={'content-page'}>
            <div className={'content'}>
                <Header/>
                <Main />
                <Footer />
            </div>
        </div>
    );
}

export default App;
