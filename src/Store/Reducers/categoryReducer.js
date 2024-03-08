import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {category: ''};
const updateCategory = createAction('UPDATE_CATEGORY');

const categoryReducer = createReducer(initialState, (builder) => {
    builder 
        .addCase(updateCategory, (state, action) => {
            state.category = action.payload
        })

})

export default categoryReducer;