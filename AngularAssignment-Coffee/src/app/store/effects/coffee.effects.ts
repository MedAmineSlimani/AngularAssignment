import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { CoffeeService } from 'src/app/services/coffee.service';
import { getCoffees, getCoffeesSuccess } from '../actions/coffee.actions';

@Injectable()
export class CoffeeEffects {
  loadCoffees$ = createEffect(() =>
    this.action$.pipe(
      ofType(getCoffees),
      exhaustMap(() =>
        this.coffeeService
          .getCoffees()
          .pipe(map((coffees) => getCoffeesSuccess({ coffees })))
      )
    )
  );

  constructor(private action$: Actions, private coffeeService: CoffeeService) {}
}
