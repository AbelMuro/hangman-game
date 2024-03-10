import {createReducer, createAction} from '@reduxjs/toolkit';
import allWords from '/public/wordData';

const initialState = {word: '', guess: '', health: 100, category: ''}
const updateWord = createAction('UPDATE_WORD');
const updateGuess = createAction('UPDATE_GUESS');
const updateCategory = createAction('UPDATE_CATEGORY');
const resetGuess = createAction('RESET_GUESS');
const resetHealth = createAction('RESET_HEALTH');

const rootReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(updateWord, (state) => {
            let category = state.category;
            let words = allWords.categories[category];
            let random = Math.floor(Math.random() * words.length + 1);
            state.word = words[random].name;
        })
        .addCase(updateGuess, (state, action) => {
            let letter = action.payload;
            if(!state.word.includes(letter))
                state.health -= 10;
            
            state.guess += letter;
        })
        .addCase(updateCategory, (state, action) => {
            let category = action.payload;
            let words = allWords.categories[category];
            let random = Math.floor(Math.random() * words.length + 1);

            state.word = words[random].name;
            state.category = category;
        })
        .addCase(resetGuess, (state) => {
            state.guess = '';
        })
        .addCase(resetHealth, (state) => {
            state.health = 100;
        })
})

export default rootReducer;