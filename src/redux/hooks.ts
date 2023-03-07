import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {numberActions} from "./slices/numbers";
import {blocksActions} from "./slices/blocks";
import {RootState} from "./store";

const ALL_ACTIONS = {
    ...numberActions,
    ...blocksActions
}

export const useAppDispatch = ()=>{
    const dispatch = useDispatch()
    return bindActionCreators(ALL_ACTIONS,dispatch)
}


export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector