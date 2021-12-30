import { createAction, props } from '@ngrx/store';
import { ICoffee } from 'src/app/models/coffee';

export const getCoffees = createAction('[Coffee] Get Coffee');

export const getCoffeesSuccess = createAction(
  '[Coffee] Get coffee success',
  props<{ coffees: ICoffee[] }>()
);
