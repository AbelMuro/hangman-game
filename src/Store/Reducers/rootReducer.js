import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {category: '', word: '', health: 100}
const updateCategory = createAction('UPDATE_CATEGORY');
const updateWord = createAction('UPDATE_WORD')
const updateHealth = createAction('UPDATE_HEALTH')


const rootReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(updateCategory, (state, action) => {
            state.category = action.payload;
        })
        .addCase(updateWord, (state, action) => {
            state.word = action.payload
        })
        .addCase(updateHealth, (state, action) => {
            state.health -= action.payload;
        })
})

export default rootReducer;