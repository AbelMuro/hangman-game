import React from 'react';
import { Provider } from 'react-redux';
import Store from './Store';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainMenu from './Components/MainMenu';
import Instructions from './Components/Instructions';
import Category from './Components/Category';
import Game from './Components/Game';
import './styles.css';

function App() {
    return(
        <Provider store={Store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainMenu/>}/>
                    <Route path='/instructions' element={<Instructions/>}/>
                    <Route path='/category' element={<Category/>}/>
                    <Route path='/game' element={<Game/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App;