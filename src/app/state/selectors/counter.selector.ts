import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CounterState } from 'src/app/models/counter';

export const selectCountFeature = (state: AppState) => state.count;

export const selectValueCont = createSelector(
  selectCountFeature,
  (state: CounterState) => state.value
);

export const selectFactorCont = createSelector(
  selectCountFeature,
  (state: CounterState) => state.factor
);
