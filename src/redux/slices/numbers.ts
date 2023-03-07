import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    prevNumber: '',
    operation: '',
    currentNumber: ''
}

export const numbersSlice = createSlice({
    name: "numbers",
    initialState,
    reducers: {
        setPrevNumber(state, action) {
            state.prevNumber = action.payload
        },
        setCurrentNumber(state, action) {
            state.currentNumber = action.payload
        },
        setCurrentNumberButton(state, action) {
            state.currentNumber = state.currentNumber + action.payload.toString()
        },
        setOperation(state, action) {
            state.operation = action.payload
        }
    }
})

export const numberActions = numbersSlice.actions
export default numbersSlice.reducer