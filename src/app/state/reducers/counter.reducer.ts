import { createReducer, on } from '@ngrx/store';
import * as counterActions from '../actions/counter.action';
import { CounterState } from 'src/app/models/counter';

export const initialState: CounterState= {
  value:0,
  factor:2
}


export const counterReducer = createReducer(
  initialState,
  on(counterActions.plus, (state) => {return {...state,value:state.value+1}}),
  on(counterActions.substract, (state) => {return {...state,value:state.value-1}}),
  on(counterActions.multiply, (state) => {return {...state,value:state.value*state.factor}}),
  on(counterActions.divide, (state) => {return {...state,value:state.value/state.factor}}),
  on(counterActions.reset, (state) => {return {...state,value:0}}),
  on(counterActions.changeFactor, (state,{newFactor}) => {return {...state,factor:newFactor}})
);
