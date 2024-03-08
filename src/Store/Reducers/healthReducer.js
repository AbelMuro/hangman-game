import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {health: 100};
const updateHealth = createAction('UPDATE_HEALTH');

const healthReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(updateHealth, (state, action) => {
            state.health -= action.payload;
        })
})

export default healthReducer;