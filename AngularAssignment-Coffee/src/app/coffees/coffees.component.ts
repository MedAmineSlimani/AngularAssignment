import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ICoffee } from '../models/coffee';
import { getCoffees } from '../store/actions/coffee.actions';
import { CoffeeState } from '../store/reducers/coffee.reducers';
import { coffeeSelector } from '../store/selector/coffee.selector';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.scss'],
})
export class CoffeesComponent implements OnInit {
  coffees: ICoffee[] = [];
  coffees$ = this.store.pipe(select(coffeeSelector));

  constructor(private store: Store<CoffeeState>) {}

  ngOnInit() {
    this.store.dispatch(getCoffees());
    this.coffees$.subscribe((data) => (this.coffees = data));
  }
}
