import { createSelector } from '@ngrx/store';
import { ICoffee } from 'src/app/models/coffee';
import { CoffeeState } from '../reducers/coffee.reducers';

export const coffeeSelector = createSelector(
  (state: CoffeeState) => state.coffees,
  (coffees: ICoffee[]) => coffees
);
