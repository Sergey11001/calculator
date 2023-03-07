import {combineReducers, configureStore} from "@reduxjs/toolkit";
import numbersReducer from "./slices/numbers";
import blockReducer from "./slices/blocks";
const rootReducer = combineReducers({
    numbers: numbersReducer,
    blocks: blockReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch