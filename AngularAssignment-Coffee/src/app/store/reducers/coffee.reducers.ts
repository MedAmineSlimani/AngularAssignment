import { createReducer, on } from '@ngrx/store';
import { ICoffee } from 'src/app/models/coffee';
import { getCoffeesSuccess } from '../actions/coffee.actions';

export interface CoffeeState {
  coffees: ICoffee[];
}
const initialState: ReadonlyArray<ICoffee> = [];
export const coffeeReducer = createReducer(
  initialState,
  on(getCoffeesSuccess, (state, { coffees }) => [...coffees])
);
