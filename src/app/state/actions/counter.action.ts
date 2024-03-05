import { createAction, props } from '@ngrx/store';

export const plus = createAction('[counter] Add One');

export const substract = createAction('[counter] Substract One');

export const multiply = createAction('[counter] Multiply By Number');

export const divide = createAction('[counter] Divide By Number');

export const reset = createAction('[counter] Reset');

export const changeFactor = createAction(
  '[counter] Change Factor',
  props<{ newFactor: number }>()
);


