import { ActionReducerMap } from "@ngrx/store"
import { counterReducer } from "./reducers/counter.reducer"
import { CounterState } from "../models/counter"

export interface AppState {
    count:CounterState
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    count: counterReducer
}