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

  first = 0;

  rows = 10;

  constructor(private store: Store<CoffeeState>) {}

  ngOnInit() {
    this.store.dispatch(getCoffees());
    this.coffees$.subscribe((data) => (this.coffees = data));
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.coffees ? this.first === this.coffees.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.coffees ? this.first === 0 : true;
  }
}
