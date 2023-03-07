import React from "react";

import {createSlice} from "@reduxjs/toolkit";
import Input from "../../components/Input";
import Operations from "../../components/Operations";
import Numbers from "../../components/Numbers";
import Equal from "../../components/Equal";
import {IBlock} from "../../utils/types/IBlock";

interface initialStateInterface{
    type: 'Runtime' | "Constructor",
    blocksMain: IBlock[],
    blocksConstructor: IBlock[]

}

const initialState: initialStateInterface = {
    type: 'Runtime',
    blocksMain: [
        {
            id: 1,
            block: <Input/>
        },
        {
            id: 2,
            block: <Operations/>
        },
        {
            id: 3,
            block: <Numbers/>
        },
        {
            id: 4,
            block: <Equal/>
        }
    ],
    blocksConstructor: []
}

export const blocksSlice = createSlice({
    name: 'blocks',
    initialState,
    reducers: {
        setBlocksMain: (state, action) => {
            state.blocksMain = action.payload
        },
        setBlocksConstructor: (state, action) => {
            if(action.payload.id!==1){
                state.blocksConstructor = [...state.blocksConstructor, action.payload]
            }
            else {
                state.blocksConstructor = [action.payload, ...state.blocksConstructor]
            }
        },
        clearBlocksConstructor:(state) => {
            state.blocksConstructor = []
        },
        setType: (state, action) => {
            state.type = action.payload
        },
    }
})

export const blocksActions = blocksSlice.actions
export default blocksSlice.reducer