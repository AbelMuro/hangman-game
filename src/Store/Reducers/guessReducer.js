import {createReducer, createAction} from '@reduxjs/toolkit';

const updateGuess = createAction('UPDATE_GUESS');
const resetGuess = createAction('RESET_GUESS')
const initialState = {guess: ''}

const guessReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(updateGuess, (state, action) => {
            state.guess += action.payload;
        })
        .addCase(resetGuess, (state) => {
            state.guess = '';
        })
})

export default guessReducer;