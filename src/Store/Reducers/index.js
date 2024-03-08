import categoryReducer from './categoryReducer.js';
import healthReducer from './healthReducer.js';
import guessReducer from './guessReducer.js';
import {combineReducers} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    category: categoryReducer,
    health: healthReducer,
    guess: guessReducer,
})

export default rootReducer;