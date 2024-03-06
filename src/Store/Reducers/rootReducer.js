import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {category: '', word: ''}
const updateCategory = createAction('UPDATE_CATEGORY');
const updateWord = createAction('UPDATE_WORD')


const rootReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(updateCategory, (state, action) => {
            state.category = action.payload;
        })
        .addCase(updateWord, (state, action) => {
            state.word = action.payload
        })
})

export default rootReducer;