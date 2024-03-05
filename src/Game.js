import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainMenu from './Components/MainMenu';
import Instructions from './Components/Instructions';
import './styles.css';

function Game() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainMenu/>}/>
                <Route path='/instructions' element={<Instructions/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Game;